// node tools/interact-r2.mjs <base>  — teste de interação da rodada 2 (abas, acordeões, formulário, menu, navegação).
import { chromium } from 'playwright';
const base = process.argv[2] || 'http://localhost:3111';
const b = await chromium.launch();
const ok = (c, m) => { console.log(`${c ? '✓' : '✗'} ${m}`); if (!c) process.exitCode = 1; };
let p = await b.newPage({ viewport: { width: 1440, height: 900 } });
await p.goto(base + '/', { waitUntil: 'networkidle' });
const sel = () => p.evaluate(() => [...document.querySelectorAll('[data-section="tabs"] [role="tab"]')].findIndex((t) => t.getAttribute('aria-selected') === 'true'));
// troca automática (6s) quando visível
await p.locator('[data-section="tabs"]').scrollIntoViewIfNeeded(); await p.waitForTimeout(500);
const s0 = await sel(); await p.waitForTimeout(6800); const s1 = await sel();
ok(s1 === (s0 + 1) % 5, `abas: troca automática ${s0} → ${s1}`);
ok(await p.locator('[data-section="tabs"] span[class*="FeatureTabs-module__"][class$="__bar"]').count() === 1, 'abas: barra de progresso visível na etapa ativa');
// clique para
await p.locator('[data-section="tabs"] [role="tab"]').nth(3).click(); await p.waitForTimeout(300);
ok(await sel() === 3, 'abas: clique ativa a etapa 4');
await p.waitForTimeout(6500); ok(await sel() === 3, 'abas: troca automática para depois do clique');
ok(await p.locator('[data-section="tabs"] span[class*="FeatureTabs-module__"][class$="__bar"]').count() === 0, 'abas: barra some depois da interação');
// teclado
await p.keyboard.press('ArrowDown'); ok(await sel() === 4, 'abas: seta para baixo');
await p.keyboard.press('Home'); ok(await sel() === 0, 'abas: Home');
await p.keyboard.press('End'); ok(await sel() === 4, 'abas: End');
// pausa/retoma
const pause = p.locator('[data-section="tabs"] button[aria-label*="auto-advance"]');
ok((await pause.getAttribute('aria-label')).startsWith('Resume'), 'abas: botão mostra "Resume" depois de parar');
await pause.click(); ok((await pause.getAttribute('aria-label')).startsWith('Pause'), 'abas: retomar volta a troca automática');
// FAQ
const q = p.locator('[data-section="faq"] button[aria-expanded]');
await q.nth(1).click(); ok(await q.nth(1).getAttribute('aria-expanded') === 'true', 'faq: abre a pergunta 2');
await q.nth(1).click(); ok(await q.nth(1).getAttribute('aria-expanded') === 'false', 'faq: fecha a pergunta 2');
// formulário
const f = p.locator('[data-section="final-cta"] form');
await f.locator('button[type=submit]').click(); ok(await f.locator('[aria-invalid="true"]').count() === 1, 'form: vazio dá erro');
await f.locator('input').fill('isso não'); await f.locator('button[type=submit]').click(); ok((await f.locator('[aria-live]').textContent()).includes("doesn't look"), 'form: formato inválido dá erro');
await f.locator('input').fill('meunegocio.com'); await f.locator('button[type=submit]').click(); ok(await p.locator('[data-section="final-cta"] [role=status]').count() === 1, 'form: sucesso');
// navegação + aria-current
for (const [label, path] of [['How it works', '/how-it-works'], ['What you get', '/what-you-get'], ['Pricing', '/pricing'], ['Questions', '/questions']]) {
  await p.locator('header nav').getByRole('link', { name: label }).click(); await p.waitForURL('**' + path); await p.waitForFunction((l) => document.title.startsWith(l), label, { timeout: 5000 }).catch(() => {});
  const cur = await p.locator('header nav[aria-label="Main"] [aria-current="page"]').textContent();
  ok(cur === label && (await p.title()).startsWith(label), `nav: ${path} abre, aria-current e title certos`);
}
await p.locator('footer').getByRole('link', { name: 'Home' }).click(); await p.waitForURL(base + '/'); ok(true, 'rodapé: volta para a home');
const r404 = await p.goto(base + '/nao-existe'); ok(r404.status() === 404 && (await p.locator('h1').textContent()).includes("isn't here"), '404 da marca');
// pricing: acordeão
await p.goto(base + '/pricing', { waitUntil: 'networkidle' });
const pq = p.locator('[data-section="faq"] button[aria-expanded]'); await pq.nth(2).click(); ok(await pq.nth(2).getAttribute('aria-expanded') === 'true', 'pricing: acordeão abre');
await p.close();
// celular: menu + acordeão das abas
p = await b.newPage({ viewport: { width: 390, height: 844 } });
await p.goto(base + '/', { waitUntil: 'networkidle' });
const t = p.locator('header button[aria-controls="menu-mobile"]');
await t.click(); ok(await t.getAttribute('aria-expanded') === 'true', 'menu: abre');
await p.keyboard.press('Escape'); ok(await t.getAttribute('aria-expanded') === 'false', 'menu: Esc fecha');
await t.click(); await p.locator('#menu-mobile').getByRole('link', { name: 'Pricing' }).click(); await p.waitForURL('**/pricing'); ok(true, 'menu: link abre /pricing');
await p.goto(base + '/', { waitUntil: 'networkidle' });
await p.locator('[data-section="tabs"] [role="tab"]').nth(2).click(); await p.waitForTimeout(800);
const inline = await p.evaluate(() => { const items = [...document.querySelectorAll('[data-section="tabs"] [data-stage]')].filter((e) => e.offsetParent); return items.length; });
ok(inline === 1, 'celular: abas viram acordeão com a mídia dentro da etapa aberta');
// reduced motion: linha cheia, sem barra
await p.close();
const ctx = await b.newContext({ reducedMotion: 'reduce', viewport: { width: 1440, height: 900 } });
p = await ctx.newPage(); await p.goto(base + '/', { waitUntil: 'networkidle' });
const prog = await p.evaluate(() => getComputedStyle(document.querySelector('[data-section="scroll-fill"] [data-word]')).getPropertyValue('--progress'));
ok(prog.trim() === '100%', `reduced-motion: linha cheia (${prog.trim()})`);
await p.locator('[data-section="tabs"]').scrollIntoViewIfNeeded(); await p.waitForTimeout(500);
ok(await p.locator('[data-section="tabs"] span[class*="FeatureTabs-module__"][class$="__bar"]').count() === 0, 'reduced-motion: sem troca automática');
await b.close();
