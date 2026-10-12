// node tools/sections.mjs <url> <pasta> [larguras=1440,390]
// Um screenshot por seção (section/header/footer/bloco principal > 150px), numerado na ordem da página.
import fs from 'node:fs';
import path from 'node:path';
import { openPage, dismissOverlays, widthsArg } from './lib.mjs';

const [url, out, ws] = process.argv.slice(2);
if (!url || !out) { console.error('uso: node tools/sections.mjs <url> <pasta> [larguras]'); process.exit(1); }
fs.mkdirSync(out, { recursive: true });
for (const w of widthsArg(ws || '1440,390')) {
  const { browser, page } = await openPage(url, w);
  await dismissOverlays(page);
  const boxes = await page.evaluate(() => {
    const vis = (e) => e.getBoundingClientRect().height > 150;
    let els = [...document.querySelectorAll('[data-section], section, footer, body > header')].filter(vis);
    // descarta seções aninhadas dentro de outra já listada
    els = els.filter((e) => !els.some((o) => o !== e && o.contains(e)));
    if (els.length < 3) {
      const main = document.querySelector('main') || document.body;
      let root = main; while (root.children.length === 1) root = root.children[0];
      els = [...root.children].filter(vis);
    }
    // blocos muito altos (> 1.6 janelas) com 2+ filhos grandes são divididos nos filhos
    const split = (e, depth = 0) => {
      const h = e.getBoundingClientRect().height;
      if (h < innerHeight * 1.6 || depth > 4 || e.dataset.section) return [e];
      let kids = [...e.children].filter(vis);
      if (kids.length === 1) return split(kids[0], depth + 1);
      if (kids.length < 2) return [e];
      return kids.flatMap((k) => split(k, depth + 1));
    };
    els = els.flatMap((e) => split(e));
    return els.map((e) => { const r = e.getBoundingClientRect(); return { x: 0, y: Math.round(r.top + scrollY), width: document.documentElement.clientWidth, height: Math.round(r.height), name: (e.dataset.section || e.id || e.tagName).toString().toLowerCase().replace(/[^a-z0-9-]/g, '').slice(0, 30) }; })
      .sort((a, b) => a.y - b.y);
  });
  // se as seções detectadas cobrem menos de 70% da página, completa com fatias de 1 janela
  const total = await page.evaluate(() => document.documentElement.scrollHeight);
  const covered = boxes.reduce((a, b) => a + b.height, 0);
  if (covered < total * 0.7) {
    const vh = page.viewportSize().height;
    for (let y = 0; y < total; y += vh) boxes.push({ x: 0, y, width: w, height: Math.min(vh, total - y), name: `fatia` });
    boxes.sort((a, b) => a.y - b.y);
  }
  let i = 0;
  for (const b of boxes) {
    i++;
    const file = path.join(out, `${w}-${String(i).padStart(2, '0')}-${b.name || 'bloco'}.png`);
    await page.evaluate((y) => window.scrollTo(0, Math.max(0, y - 10)), b.y);
    await page.waitForTimeout(250);
    await page.screenshot({ path: file, fullPage: true, clip: { x: 0, y: b.y, width: b.width, height: Math.min(b.height, 4000) } });
  }
  console.log(`${w}: ${boxes.length} seções → ${out}`);
  await browser.close();
}
