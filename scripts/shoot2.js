const { chromium } = require('playwright');

const EXE = '/home/hatch/.cache/ms-playwright/chromium-1243/chrome-linux64/chrome';
const OUT = '/home/hatch/workspace/getfaboo/preview';

async function scrollThrough(page) {
  // Slowly scroll top -> bottom so IntersectionObserver reveals fire
  await page.evaluate(async () => {
    const h = document.body.scrollHeight;
    for (let y = 0; y <= h; y += 400) {
      window.scrollTo(0, y);
      await new Promise(r => setTimeout(r, 120));
    }
    window.scrollTo(0, 0);
    await new Promise(r => setTimeout(r, 800));
  });
}

(async () => {
  const browser = await chromium.launch({
    executablePath: EXE,
    args: ['--headless=new', '--no-sandbox', '--disable-dev-shm-usage'],
  });

  const d = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await d.goto('http://localhost:4173/', { waitUntil: 'networkidle' });
  await d.waitForTimeout(2000);
  await scrollThrough(d);
  await d.screenshot({ path: OUT + '/home-desktop.png', fullPage: true });
  await d.close();

  const w = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await w.goto('http://localhost:4173/work/', { waitUntil: 'networkidle' });
  await w.waitForTimeout(2000);
  await scrollThrough(w);
  await w.screenshot({ path: OUT + '/work-desktop.png', fullPage: true });
  await w.close();

  const m = await browser.newPage({ viewport: { width: 390, height: 844 }, isMobile: true });
  await m.goto('http://localhost:4173/', { waitUntil: 'networkidle' });
  await m.waitForTimeout(2000);
  await scrollThrough(m);
  await m.screenshot({ path: OUT + '/home-mobile.png', fullPage: true });
  await m.close();

  await browser.close();
  console.log('DONE');
})();
