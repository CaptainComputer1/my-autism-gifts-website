const fs = require('fs');
const { PNG } = require('pngjs');

const INPUT  = 'C:/Users/seanl/Documents/Work/MAG Website Dev/images/MAG Logo without BG.png';
const OUTPUT = 'C:/Users/seanl/Documents/Work/MAG Website Dev/images/MAG Logo without BG (white text).png';
const THRESHOLD = 80; // any pixel with R,G,B all below this is "black enough" to recolor

const data = fs.readFileSync(INPUT);
const png = PNG.sync.read(data);

let recoloredCount = 0;
let totalVisible = 0;

for (let y = 0; y < png.height; y++) {
  for (let x = 0; x < png.width; x++) {
    const idx = (png.width * y + x) << 2;
    const r = png.data[idx];
    const g = png.data[idx + 1];
    const b = png.data[idx + 2];
    const a = png.data[idx + 3];

    if (a === 0) continue; // fully transparent — skip
    totalVisible++;

    if (r < THRESHOLD && g < THRESHOLD && b < THRESHOLD) {
      // Recolor to white, preserve alpha (keeps antialiased edges)
      png.data[idx]     = 255;
      png.data[idx + 1] = 255;
      png.data[idx + 2] = 255;
      recoloredCount++;
    }
  }
}

const buffer = PNG.sync.write(png);
fs.writeFileSync(OUTPUT, buffer);

console.log('Input:  ' + INPUT);
console.log('Output: ' + OUTPUT);
console.log('Image size: ' + png.width + 'x' + png.height);
console.log('Visible pixels (alpha > 0): ' + totalVisible.toLocaleString());
console.log('Pixels recolored to white: ' + recoloredCount.toLocaleString() +
            ' (' + ((recoloredCount / totalVisible) * 100).toFixed(1) + '% of visible)');
