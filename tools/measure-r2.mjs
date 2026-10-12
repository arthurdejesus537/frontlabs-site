import { chromium } from 'playwright';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const up = `(e)=>{let c=e;while(c&&!(getComputedStyle(c).backgroundColor==='rgb(255, 255, 255)'&&parseFloat(getComputedStyle(c).borderRadius)>0&&c.getBoundingClientRect().width>250))c=c.parentElement;return c}`;
await page.goto('https://ploy.ai/', { waitUntil: 'networkidle', timeout: 60000 }).catch(() => {});
await page.waitForTimeout(1500);
const y = await page.evaluate(() => { const e = [...document.querySelectorAll('div,p,span')].find((e) => e.childElementCount === 0 && /pages built/i.test(e.textContent)); return e ? e.getBoundingClientRect().top + scrollY : -1; });
await page.evaluate((y) => scrollTo(0, y - 400), y); await page.waitForTimeout(2500);
const info = await page.evaluate((upS) => {
  const up = eval(upS);
  const e = [...document.querySelectorAll('div,p,span')].find((e) => e.childElementCount === 0 && /pages built/i.test(e.textContent));
  const c = up(e); const s = getComputedStyle(c); const r = c.getBoundingClientRect();
  const kids = [...c.querySelectorAll('*')].map((k) => { const ks = getComputedStyle(k); const kr = k.getBoundingClientRect(); return { tag: k.tagName, t: k.childElementCount === 0 ? k.textContent.trim().slice(0, 50) : '', fs: ks.fontSize, fw: ks.fontWeight, bg: ks.backgroundColor, r: ks.borderRadius, h: Math.round(kr.height), w: Math.round(kr.width), y: Math.round(kr.top - r.top), tr: ks.transition.slice(0, 60) }; }).filter((k) => k.t || k.bg !== 'rgba(0, 0, 0, 0)');
  const sib = c.nextElementSibling?.getBoundingClientRect();
  const field = c.closest('section') || c.parentElement.parentElement; const fr = field.getBoundingClientRect();
  return { card: { w: r.width, h: r.height, r: s.borderRadius, p: s.padding, gapToNext: sib ? sib.left - r.right : null }, field: { w: fr.width, h: fr.height, r: getComputedStyle(field).borderRadius, p: getComputedStyle(field).padding }, kids: kids.slice(0, 80) };
}, up);
console.log('LIVECARD', JSON.stringify(info));
const seen = [];
for (let i = 0; i < 60; i++) {
  const t = await page.evaluate((upS) => { const up = eval(upS); const e = [...document.querySelectorAll('div,p,span')].find((e) => e.childElementCount === 0 && /pages built/i.test(e.textContent)); const c = up(e); return [...c.querySelectorAll('*')].filter((k) => k.childElementCount === 0 && /→|->/.test(k.textContent)).map((k) => k.textContent.trim() + ' @op' + getComputedStyle(k).opacity).join(' | ') + ' || ' + [...c.querySelectorAll('*')].filter(k=>k.childElementCount===0).map(k=>k.textContent.trim()).filter(Boolean).slice(-2).join(' / '); }, up);
  if (!seen.length || seen.at(-1).t !== t) seen.push({ ms: i * 500, t });
  await page.waitForTimeout(500);
}
console.log('LOG', JSON.stringify(seen, null, 1));
await page.goto('https://ploy.ai/pricing', { waitUntil: 'networkidle', timeout: 60000 }).catch(() => {});
await page.waitForTimeout(1500);
const pr = await page.evaluate((upS) => {
  const up = eval(upS);
  const cs = (e) => { const s = getComputedStyle(e); const r = e.getBoundingClientRect(); return { fs: s.fontSize, fw: s.fontWeight, r: s.borderRadius, p: s.padding, bg: s.backgroundColor, bd: s.border, w: Math.round(r.width), h: Math.round(r.height), y: Math.round(r.top + scrollY), x: Math.round(r.left) }; };
  const cards = [...document.querySelectorAll('*')].filter((e) => e.childElementCount === 0 && /^\$\d+$|^Custom$/.test(e.textContent.trim())).slice(0, 4).map((e) => cs(up(e) || e));
  const tag = [...document.querySelectorAll('*')].find((e) => e.childElementCount === 0 && e.textContent.trim() === 'Pricing' && e.getBoundingClientRect().top > 100);
  const lead = document.querySelector('h1')?.nextElementSibling;
  const btns = [...document.querySelectorAll('a,button')].filter((b) => /Start Free|Talk to sales/.test(b.textContent)).slice(0, 4).map(cs);
  const grey = [...document.querySelectorAll('div,section')].find((e) => getComputedStyle(e).backgroundColor !== 'rgba(0, 0, 0, 0)' && /How credits work/.test(e.textContent) && e.getBoundingClientRect().width > 1000 && e.getBoundingClientRect().width < 1440);
  const rows = grey ? [...grey.querySelectorAll('*')].filter((e) => /Professional websites|consume credits/.test(e.textContent) && e.childElementCount === 0).map(cs) : [];
  const table = document.querySelector('table'); const tr = table && [...table.querySelectorAll('tr')].slice(0, 3).map(cs);
  const faqItems = [...document.querySelectorAll('button,summary')].filter((b) => /\?$/.test(b.textContent.trim())).slice(0, 3).map(cs);
  return { tag: tag && cs(tag.parentElement), lead: lead && cs(lead), btns, cards, grey: grey && cs(grey), rows, table: table && cs(table), tr, faqItems };
}, up);
console.log('PRICING2', JSON.stringify(pr, null, 1));
await browser.close();
