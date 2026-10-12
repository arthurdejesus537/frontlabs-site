// Utilitários comuns dos scripts de QA.
import { chromium } from 'playwright';

export async function openPage(url, width, height = 900) {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width, height: width < 600 ? 844 : height }, deviceScaleFactor: 1 });
  await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 }).catch(() => page.waitForLoadState('load'));
  await page.waitForTimeout(800);
  await autoScroll(page);
  return { browser, page };
}

export async function autoScroll(page) {
  await page.evaluate(async () => {
    const step = Math.round(window.innerHeight * 0.7);
    for (let y = 0; y < document.documentElement.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 120));
    }
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(700);
}

export async function dismissOverlays(page) {
  // fecha banners de cookie comuns, sem clicar em nada que navegue
  for (const label of ['Accept', 'Accept all', 'Allow all', 'Got it', 'I agree', 'OK']) {
    const b = page.getByRole('button', { name: label, exact: true });
    if (await b.count().catch(() => 0)) await b.first().click({ timeout: 1000 }).catch(() => {});
  }
}

export const widthsArg = (s) => (s ? s.split(',').map(Number) : [1440, 768, 390]);
