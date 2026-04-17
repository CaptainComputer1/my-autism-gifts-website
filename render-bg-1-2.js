const puppeteer = require('puppeteer');
const path = require('path');

const OUTPUT_DIR = 'C:/Users/seanl/Documents/Work/MAG Website Dev/images/zoom-backgrounds';
const BASE_URL = 'http://localhost:3000/images/zoom-backgrounds';

const backgrounds = [
  { html: 'bg1-full-logo-v2.html', png: 'MAG-Zoom-BG-1-Full-Logo-v2.png' },
  { html: 'bg2-butterfly-icon-v2.html', png: 'MAG-Zoom-BG-2-Butterfly-v2.png' },
];

(async () => {
  const browser = await puppeteer.launch({
    defaultViewport: { width: 1920, height: 1080 },
  });
  const page = await browser.newPage();

  for (const bg of backgrounds) {
    const url = `${BASE_URL}/${bg.html}?t=${Date.now()}`;
    console.log(`Rendering ${bg.html} → ${bg.png}`);
    await page.goto(url, { waitUntil: 'networkidle0' });
    await new Promise(r => setTimeout(r, 1500));
    await page.screenshot({
      path: path.join(OUTPUT_DIR, bg.png),
      clip: { x: 0, y: 0, width: 1920, height: 1080 },
    });
    console.log(`  ✓ saved`);
  }

  await browser.close();
})();
