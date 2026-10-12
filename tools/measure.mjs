// node tools/measure.mjs <url> <saida.json> [largura=1440]
// Estilos computados de títulos, parágrafos, botões, seções e elementos com raio
// (mesmo formato de docs/referencias/*-1440.json).
import fs from 'node:fs';
import { openPage } from './lib.mjs';

const [url, out, w = '1440'] = process.argv.slice(2);
if (!url || !out) { console.error('uso: node tools/measure.mjs <url> <saida.json> [largura]'); process.exit(1); }
const { browser, page } = await openPage(url, Number(w));
const data = await page.evaluate(() => {
  const st = (el) => {
    const c = getComputedStyle(el); const r = el.getBoundingClientRect();
    return { ff: c.fontFamily, fs: c.fontSize, fw: c.fontWeight, ls: c.letterSpacing, lh: c.lineHeight, c: c.color, tt: c.textTransform,
      bg: c.backgroundColor, br: c.borderRadius, pad: c.padding, h: Math.round(r.height), w: Math.round(r.width), x: Math.round(r.left), y: Math.round(r.top + scrollY) };
  };
  const txt = (el) => (el.innerText || '').trim().replace(/\s+/g, ' ').slice(0, 72);
  const vis = (el) => { const r = el.getBoundingClientRect(); return r.width > 0 && r.height > 0; };
  const root = {}; const rs = getComputedStyle(document.documentElement);
  for (const sheet of document.styleSheets) { try { for (const rule of sheet.cssRules) { if (rule.selectorText === ':root') for (const p of rule.style) if (p.startsWith('--')) root[p] = rs.getPropertyValue(p).trim(); } } catch {} }
  const fonts = [...document.fonts].filter((f) => f.status === 'loaded').map((f) => `${f.family.replace(/"/g, '')} ${f.weight} ${f.style}`);
  const fontsAll = [...new Set([...document.fonts].map((f) => `${f.family.replace(/"/g, '')}:${f.status}`))];
  const heads = [...document.querySelectorAll('h1,h2,h3,h4')].filter(vis).map((e) => ({ tag: e.tagName, t: txt(e), ...st(e) }));
  const ps = [...document.querySelectorAll('p')].filter(vis).slice(0, 40).map((e) => ({ t: txt(e), ...st(e) }));
  const btns = [...document.querySelectorAll('a,button')].filter(vis).filter((e) => { const r = e.getBoundingClientRect(); return r.height >= 28 && r.height <= 64; }).slice(0, 40)
    .map((e) => { const c = getComputedStyle(e); return { t: txt(e), ...st(e), bd: c.border }; });
  const sections = [...document.querySelectorAll('section, footer, header, main > div')].filter(vis).map((e) => { const c = getComputedStyle(e); return { tag: e.tagName, cls: String(e.className).slice(0, 60), t: txt(e).slice(0, 50), ...st(e), mw: c.maxWidth }; });
  const rounded = [...document.querySelectorAll('body *')].filter(vis).filter((e) => parseFloat(getComputedStyle(e).borderTopLeftRadius) > 0)
    .filter((e) => e.getBoundingClientRect().width > 40).slice(0, 60)
    .map((e) => { const c = getComputedStyle(e); const r = e.getBoundingClientRect(); return { tag: e.tagName, br: c.borderRadius, w: Math.round(r.width), h: Math.round(r.height), bg: c.backgroundColor, y: Math.round(r.top + scrollY) }; });
  const navEl = document.querySelector('header, nav');
  const nav = navEl ? st(navEl) : null;
  const navlinks = navEl ? [...navEl.querySelectorAll('a,button')].map((e) => ({ t: txt(e), ...st(e) })) : [];
  return { root, body: st(document.body), html: st(document.documentElement), fonts, fontsAll, heads, ps, btns, sections, rounded, nav, navlinks };
});
fs.writeFileSync(out, JSON.stringify(data, null, 1));
console.log(`ok → ${out} (${data.heads.length} títulos, ${data.sections.length} seções)`);
await browser.close();
