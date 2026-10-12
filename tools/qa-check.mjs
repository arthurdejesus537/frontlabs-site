// node tools/qa-check.mjs <url> [larguras=1440,768,390]
// Rolagem horizontal, elementos que estouram a janela e alvos de toque < 44px (no celular).
// Considera a área de ::after/::before quando ela é maior (botões ampliam o toque assim).
import { openPage, widthsArg } from './lib.mjs';

const [url, ws] = process.argv.slice(2);
if (!url) { console.error('uso: node tools/qa-check.mjs <url> [larguras]'); process.exit(1); }
let problems = 0;
for (const w of widthsArg(ws)) {
  const { browser, page } = await openPage(url, w);
  const r = await page.evaluate((w) => {
    const sw = document.documentElement.scrollWidth;
    const over = [...document.querySelectorAll('body *')].filter((e) => {
      const b = e.getBoundingClientRect(); if (!b.width) return false;
      // ignora o que está dentro de um pai que corta (carrossel, marquee)
      let p = e.parentElement; while (p && p !== document.body) { const o = getComputedStyle(p); if (/(hidden|auto|scroll|clip)/.test(o.overflowX)) return false; p = p.parentElement; }
      return b.right > w + 1 || b.left < -1;
    }).slice(0, 8).map((e) => `${e.tagName}.${String(e.className).slice(0, 40)}`);
    const small = [];
    if (w < 600) {
      for (const e of document.querySelectorAll('a, button, input, [role=tab]')) {
        const b = e.getBoundingClientRect(); if (!b.width || getComputedStyle(e).visibility === 'hidden') continue;
        if (e.closest('[aria-hidden=true], [hidden]')) continue;
        if (e.closest('p') && getComputedStyle(e).display === 'inline') continue; // link dentro de texto
        let h = b.height, ww = b.width;
        for (const pseudo of ['::after', '::before']) {
          const c = getComputedStyle(e, pseudo);
          if (c.content !== 'none' && c.position === 'absolute') {
            const top = parseFloat(c.top) || 0, bottom = parseFloat(c.bottom) || 0, left = parseFloat(c.left) || 0, right = parseFloat(c.right) || 0;
            h = Math.max(h, b.height - top - bottom); ww = Math.max(ww, b.width - left - right);
          }
        }
        if (h < 44 && ww < 44 || h < 40) small.push(`${e.tagName} "${(e.innerText || e.getAttribute('aria-label') || '').trim().slice(0, 30)}" ${Math.round(ww)}×${Math.round(h)}`);
      }
    }
    return { sw, over, small };
  }, w);
  const bad = r.sw > w || r.over.length || r.small.length;
  if (bad) problems++;
  console.log(`\n== ${w}px · scrollWidth ${r.sw} ${r.sw > w ? '✗ ROLAGEM HORIZONTAL' : '✓'}`);
  if (r.over.length) console.log('  estouram:', r.over.join(' | '));
  if (r.small.length) console.log(`  toque < 44px (${r.small.length}):\n   - ` + r.small.slice(0, 25).join('\n   - '));
  await browser.close();
}
console.log(problems ? `\n${problems} largura(s) com problema.` : '\nTudo certo.');
