/* Render v5 Zoom backgrounds from local HTML via Puppeteer.
   Uses file:// URLs so no local server is required. */
const puppeteer = require('puppeteer');
const path = require('path');

const OUTPUT_DIR = "C:/Users/seanl/Documents/Work/MAG Website Dev/images/zoom-backgrounds/MAG Zoom BG's v5";

const backgrounds = [
  { html: 'bg1-full-logo-v5.html',      png: 'MAG-Zoom-BG-1-Full-Logo-v5.png' },
  { html: 'bg2-text-block-v5.html',     png: 'MAG-Zoom-BG-2-Text-Block-v5.png' },
  { html: 'bg3-autism-man-v5.html',     png: 'MAG-Zoom-BG-3-Autism-Man-v5.png' },
  { html: 'bg4-everyday-purple-v5.html',png: 'MAG-Zoom-BG-4-Everyday-Purple-v5.png' },
];

(async () => {
  const browser = await puppeteer.launch({
    defaultViewport: { width: 1920, height: 1080 },
  });
  const page = await browser.newPage();

  for (const bg of backgrounds) {
    const fileUrl = 'file:///' + path.join(OUTPUT_DIR, bg.html).replace(/\\/g, '/');
    console.log(`Rendering ${bg.html} -> ${bg.png}`);
    await page.goto(fileUrl, { waitUntil: 'networkidle0' });
    await new Promise(r => setTimeout(r, 1500));
    await page.screenshot({
      path: path.join(OUTPUT_DIR, bg.png),
      clip: { x: 0, y: 0, width: 1920, height: 1080 },
    });
    console.log(`  saved ${bg.png}`);
  }

  await browser.close();
  console.log('v5 render complete.');
})();
