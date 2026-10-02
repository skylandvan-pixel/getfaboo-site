const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    executablePath: '/home/hatch/.cache/ms-playwright/chromium-1243/chrome-linux64/chrome',
    args: ['--headless=new', '--no-sandbox', '--disable-dev-shm-usage'],
  });
  const out = '/home/hatch/workspace/getfaboo/preview';

  // Desktop homepage (full page)
  const d = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await d.goto('http://localhost:4173/', { waitUntil: 'networkidle' });
  await d.waitForTimeout(1500);
  await d.screenshot({ path: out + '/home-desktop.png', fullPage: true });
  await d.screenshot({ path: out + '/home-hero.png' }); // above the fold
  await d.close();

  // Work page
  const w = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await w.goto('http://localhost:4173/work/', { waitUntil: 'networkidle' });
  await w.waitForTimeout(1200);
  await w.screenshot({ path: out + '/work-desktop.png', fullPage: true });
  await w.close();

  // Project detail (real YouTube project)
  const p = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await p.goto('http://localhost:4173/work/richmond-home-tour/', { waitUntil: 'networkidle' });
  await p.waitForTimeout(1500);
  await p.screenshot({ path: out + '/detail-desktop.png', fullPage: true });
  await p.close();

  // AI Lab + About
  const a = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await a.goto('http://localhost:4173/ai-lab/', { waitUntil: 'networkidle' });
  await a.waitForTimeout(1000);
  await a.screenshot({ path: out + '/ailab-desktop.png', fullPage: true });
  await a.goto('http://localhost:4173/about/', { waitUntil: 'networkidle' });
  await a.waitForTimeout(1000);
  await a.screenshot({ path: out + '/about-desktop.png', fullPage: true });
  await a.close();

  // Mobile homepage + work
  const m = await browser.newPage({ viewport: { width: 390, height: 844 }, isMobile: true });
  await m.goto('http://localhost:4173/', { waitUntil: 'networkidle' });
  await m.waitForTimeout(1200);
  await m.screenshot({ path: out + '/home-mobile.png', fullPage: true });
  await m.goto('http://localhost:4173/work/', { waitUntil: 'networkidle' });
  await m.waitForTimeout(1000);
  await m.screenshot({ path: out + '/work-mobile.png', fullPage: true });
  await m.close();

  await browser.close();
  console.log('DONE');
})();
