/* Render the Rob/Elizabeth handoff HTML to a PDF via Puppeteer's print API. */
const puppeteer = require('puppeteer');
const path = require('path');

const ROOT = __dirname;
const HTML = path.join(ROOT, 'ROB_AND_ELIZABETH_ACTIONS.html');
const PDF  = path.join(ROOT, 'ROB_AND_ELIZABETH_ACTIONS.pdf');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const url = 'file:///' + HTML.replace(/\\/g, '/');
  console.log('Loading', url);
  await page.goto(url, { waitUntil: 'networkidle0' });
  await page.pdf({
    path: PDF,
    format: 'Letter',
    printBackground: true,
    margin: { top: '0.75in', bottom: '0.75in', left: '0.75in', right: '0.75in' },
  });
  await browser.close();
  console.log('PDF written to', PDF);
})();
