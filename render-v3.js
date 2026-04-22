const puppeteer = require('puppeteer');
const path = require('path');

const OUTPUT_DIR = "C:/Users/seanl/Documents/Work/MAG Website Dev/images/zoom-backgrounds/MAG Zoom BG's v3";
// URL-encode the apostrophe (%27) and spaces (%20) in the v3 folder path
const BASE_URL = "http://localhost:3000/images/zoom-backgrounds/MAG%20Zoom%20BG%27s%20v3";

const backgrounds = [
  { html: 'bg1-full-logo-v3.html', png: 'MAG-Zoom-BG-1-Full-Logo-v3.1.png' },
  { html: 'bg2-text-block-v3.html', png: 'MAG-Zoom-BG-2-Text-Block-v3.1.png' },
  { html: 'bg3-autism-man-v3.html', png: 'MAG-Zoom-BG-3-Autism-Man-v3.1.png' },
  { html: 'bg4-everyday-purple-v3.html', png: 'MAG-Zoom-BG-4-Everyday-Purple-v3.1.png' },
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
    console.log(`  ✓ saved ${bg.png}`);
  }

  await browser.close();
  console.log('Done.');
})();
