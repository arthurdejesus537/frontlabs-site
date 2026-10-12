// node tools/shoot.mjs <url> <pasta> [larguras=1440,768,390]
// Salva página inteira (<w>-full.png) e primeira dobra (<w>-fold.png) em cada largura.
import fs from 'node:fs';
import path from 'node:path';
import { openPage, dismissOverlays, widthsArg } from './lib.mjs';

const [url, out, ws] = process.argv.slice(2);
if (!url || !out) { console.error('uso: node tools/shoot.mjs <url> <pasta> [larguras]'); process.exit(1); }
fs.mkdirSync(out, { recursive: true });
for (const w of widthsArg(ws)) {
  const { browser, page } = await openPage(url, w);
  await dismissOverlays(page);
  await page.screenshot({ path: path.join(out, `${w}-full.png`), fullPage: true });
  await page.screenshot({ path: path.join(out, `${w}-fold.png`) });
  const sw = await page.evaluate(() => document.documentElement.scrollWidth);
  console.log(`${w}: ok${sw > w ? `  ⚠ rolagem horizontal (scrollWidth ${sw})` : ''}`);
  await browser.close();
}
