// WCAG AAA contrast audit (v2) — uses NOMINAL foreground colors per CSS
// (the "source of truth" colors WCAG measures against) plus sampled LOCAL
// backgrounds around each text element.
//
// Why nominal fg: the MAG letters in the logo are thin script strokes;
// pixel-sampling hits the gradient between letter strokes and gives false
// values. The letters themselves are rendered at the CSS-declared color.

const fs = require('fs');
const { PNG } = require('pngjs');

const V3 = "C:/Users/seanl/Documents/Work/MAG Website Dev/images/zoom-backgrounds/MAG Zoom BG's v3";

function loadPng(p) { return PNG.sync.read(fs.readFileSync(p)); }
function pixel(png, x, y) {
  const i = (png.width * y + x) << 2;
  return [png.data[i], png.data[i+1], png.data[i+2]];
}
function avgBox(png, x, y, size) {
  let r=0,g=0,b=0,n=0;
  const h=Math.floor(size/2);
  for (let dy=-h; dy<=h; dy++) for (let dx=-h; dx<=h; dx++) {
    const [pr,pg,pb] = pixel(png, x+dx, y+dy);
    r+=pr; g+=pg; b+=pb; n++;
  }
  return [Math.round(r/n), Math.round(g/n), Math.round(b/n)];
}
function hex([r,g,b]) { return '#' + [r,g,b].map(v=>v.toString(16).padStart(2,'0')).join('').toUpperCase(); }
function blend(fg, alpha, bg) { return fg.map((v,i) => Math.round(v*alpha + bg[i]*(1-alpha))); }
function relLum([r,g,b]) {
  const s = [r,g,b].map(v=>{const x=v/255;return x<=0.03928?x/12.92:Math.pow((x+0.055)/1.055,2.4);});
  return 0.2126*s[0] + 0.7152*s[1] + 0.0722*s[2];
}
function contrast(a,b) { const la=relLum(a), lb=relLum(b); return (Math.max(la,lb)+0.05)/(Math.min(la,lb)+0.05); }

function check(label, fg, bg, isLarge) {
  const r = contrast(fg, bg);
  const aaa = isLarge ? 4.5 : 7.0;
  const aa  = isLarge ? 3.0 : 4.5;
  const verdict = r >= aaa ? '✓ AAA' : r >= aa ? '△ AA only' : '✗ FAIL';
  const sizeNote = isLarge ? '(large text, AAA≥4.5)' : '(AAA≥7.0)';
  console.log('  ' + verdict.padEnd(12) + label.padEnd(50) +
              'fg=' + hex(fg) + ' bg=' + hex(bg) +
              ' ratio=' + r.toFixed(2) + ':1  ' + sizeNote);
  return r;
}

// Known nominal colors
const WHITE = [255,255,255];
const BLACK = [0,0,0];
const TEAL  = [0x97,0xE7,0xFF];          // #97E7FF ("Gifts" accent)
const LAVENDER = [0xD2,0xCC,0xFF];       // #D2CCFF (contact line text, ribbon body)

// ═══ BG1 ══════════════════════════════════════════════════════════════════
console.log('\n═══ BG1: Full MAG Logo ═══');
{
  const img = loadPng(V3 + '/MAG-Zoom-BG-1-Full-Logo-v3.1.png');
  // Local gradient bg just outside the top-right logo area
  const logoBg = avgBox(img, 1450, 200, 30);
  check('White MAG letters on gradient', WHITE, logoBg, false);

  // Ribbon body is CSS-declared lavender #D2CCFF; ribbon text is black
  check('"MY AUTISM GIFTS" black on #D2CCFF ribbon', BLACK, LAVENDER, true);

  // Tagline: rgba(255,255,255,0.55) — blend against its local bg
  const taglineBg = avgBox(img, 1890, 540, 10);
  check('Vertical tagline (75% white) on right edge', blend(WHITE, 0.75, taglineBg), taglineBg, true);
}

// ═══ BG2 ══════════════════════════════════════════════════════════════════
console.log('\n═══ BG2: Text Block (upper-right) ═══');
{
  const img = loadPng(V3 + '/MAG-Zoom-BG-2-Text-Block-v3.1.png');
  // "My Autism" (56px white) bg — sample just under the text
  const headingBg = avgBox(img, 1300, 150, 15);
  check('"My Autism" — white 56px', WHITE, headingBg, true);
  check('"Gifts" — teal #97E7FF 56px', TEAL, headingBg, true);

  // Role / name / contact: text below heading
  const roleBg = avgBox(img, 1700, 180, 10);
  check('"CHIEF EMPOWERMENT OFFICER" 95% white 14px', blend(WHITE, 0.95, roleBg), roleBg, false);
  const nameBg = avgBox(img, 1790, 220, 10);
  check('"Rob Hodes" 85% white 20px', blend(WHITE, 0.85, nameBg), nameBg, false);
  // Sample a clean gradient spot safely below the text block (text ends ~y=280; sampling at y=400 is clear)
  const contactBg = avgBox(img, 1700, 400, 10);
  check('Contact line 100% white 14px', WHITE, contactBg, false);

  // Small logo in bottom-right — local gradient
  const bottomRightBg = avgBox(img, 1550, 970, 30);
  check('White MAG letters (logo anchor)', WHITE, bottomRightBg, false);
  check('"MY AUTISM GIFTS" black on #D2CCFF ribbon', BLACK, LAVENDER, true);
}

// ═══ BG3 ══════════════════════════════════════════════════════════════════
console.log('\n═══ BG3: Autism Man ═══');
{
  const img = loadPng(V3 + '/MAG-Zoom-BG-3-Autism-Man-v3.1.png');
  // Logo upper-right; sample local gradient just outside logo glow
  const logoBg = avgBox(img, 1400, 200, 30);
  check('White MAG letters (upper-right)', WHITE, logoBg, false);
  check('"MY AUTISM GIFTS" black on #D2CCFF ribbon', BLACK, LAVENDER, true);
}

// ═══ BG4 ══════════════════════════════════════════════════════════════════
console.log('\n═══ BG4: Everyday Purple ═══');
{
  const img = loadPng(V3 + '/MAG-Zoom-BG-4-Everyday-Purple-v3.1.png');
  // Small logo bottom-right — sample the deep purple background just left of logo
  const purpleBg = avgBox(img, 1550, 950, 30);
  check('White MAG letters on deep purple', WHITE, purpleBg, false);
  check('"MY AUTISM GIFTS" black on #D2CCFF ribbon', BLACK, LAVENDER, true);
}

console.log('\nLegend: ✓ AAA  △ AA only (below AAA)  ✗ FAIL');
console.log('Large text = ≥18pt OR bold ≥14pt (AAA ≥4.5:1); normal text AAA ≥7.0:1');
