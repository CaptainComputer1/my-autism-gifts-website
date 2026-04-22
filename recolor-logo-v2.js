// Recolor ONLY the MAG letters white; preserve the "MY AUTISM GIFTS" text
// on the purple banner as-is.
//
// Strategy:
//   Pass 1 — find the purple banner's vertical range (pixels that are roughly
//            the ribbon's lavender #D2CCFF).
//   Pass 2 — recolor dark pixels to white ONLY if their Y coordinate is ABOVE
//            the top of the purple banner (i.e., in the MAG-letters region).
//
const fs = require('fs');
const { PNG } = require('pngjs');

const INPUT  = 'C:/Users/seanl/Documents/Work/MAG Website Dev/images/MAG Logo without BG.png';
const OUTPUT = 'C:/Users/seanl/Documents/Work/MAG Website Dev/images/MAG Logo without BG (white text).png';
const DARK_THRESHOLD = 80;

// Purple ribbon detection: target is roughly #D2CCFF (R=210, G=204, B=255).
// Allow a generous tolerance because the ribbon has gradient/shadow edges.
function isPurpleBanner(r, g, b) {
  return r >= 170 && r <= 230 && g >= 170 && g <= 225 && b >= 230;
}

const data = fs.readFileSync(INPUT);
const png = PNG.sync.read(data);

// Pass 1: detect purple banner Y range
let bannerMinY = Infinity;
let bannerMaxY = -Infinity;
let bannerPixelCount = 0;

for (let y = 0; y < png.height; y++) {
  for (let x = 0; x < png.width; x++) {
    const idx = (png.width * y + x) << 2;
    const r = png.data[idx];
    const g = png.data[idx + 1];
    const b = png.data[idx + 2];
    const a = png.data[idx + 3];
    if (a === 0) continue;
    if (isPurpleBanner(r, g, b)) {
      if (y < bannerMinY) bannerMinY = y;
      if (y > bannerMaxY) bannerMaxY = y;
      bannerPixelCount++;
    }
  }
}

if (bannerPixelCount === 0) {
  console.error('No purple banner detected — aborting. Tune isPurpleBanner().');
  process.exit(1);
}

// Small safety margin above the banner so we don't accidentally recolor
// the top edge of the ribbon (which can have pixels that overlap into
// the lower MAG serifs).
const SAFE_MARGIN = 5;
const MAG_REGION_MAX_Y = bannerMinY - SAFE_MARGIN;

console.log('Purple banner Y range: ' + bannerMinY + '–' + bannerMaxY +
            ' (' + bannerPixelCount.toLocaleString() + ' pixels)');
console.log('MAG recolor region: y < ' + MAG_REGION_MAX_Y);

// Pass 2: recolor dark pixels ONLY in the MAG-letters region
let recoloredCount = 0;

for (let y = 0; y < MAG_REGION_MAX_Y; y++) {
  for (let x = 0; x < png.width; x++) {
    const idx = (png.width * y + x) << 2;
    const r = png.data[idx];
    const g = png.data[idx + 1];
    const b = png.data[idx + 2];
    const a = png.data[idx + 3];
    if (a === 0) continue;
    if (r < DARK_THRESHOLD && g < DARK_THRESHOLD && b < DARK_THRESHOLD) {
      png.data[idx]     = 255;
      png.data[idx + 1] = 255;
      png.data[idx + 2] = 255;
      recoloredCount++;
    }
  }
}

const buffer = PNG.sync.write(png);
fs.writeFileSync(OUTPUT, buffer);

console.log('Output: ' + OUTPUT);
console.log('MAG-region pixels recolored to white: ' + recoloredCount.toLocaleString());
console.log('"MY AUTISM GIFTS" text inside the banner: UNTOUCHED');
