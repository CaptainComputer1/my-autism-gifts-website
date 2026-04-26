/* Render STORYTELLING_APPLICATION.html to PDF via Puppeteer. */
const puppeteer = require('puppeteer');
const path = require('path');

const ROOT = __dirname;
const HTML = path.join(ROOT, 'STORYTELLING_APPLICATION.html');
const PDF  = path.join(ROOT, 'STORYTELLING_APPLICATION.pdf');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const url = 'file:///' + HTML.replace(/\\/g, '/');
  await page.goto(url, { waitUntil: 'networkidle0' });
  await page.pdf({
    path: PDF,
    format: 'Letter',
    printBackground: true,
    margin: { top: '0.7in', bottom: '0.7in', left: '0.7in', right: '0.7in' },
  });
  await browser.close();
  console.log('PDF written to', PDF);
})();
