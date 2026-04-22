"""
Inject the shared header and footer partials into every dist HTML file.

Source pages in `webpages/` contain marker comments:
    <!-- INCLUDE: header -->
    <!-- INCLUDE: footer -->

This script copies each HTML file to `dist/`, replacing those markers with
the contents of `partials/header.html` and `partials/footer.html` respectively.

Run this AFTER `bash build.sh` has already copied webpages/*.html to dist/.
(Or incorporate this into build.sh — see the updated build.sh.)
"""

import re
import sys
from pathlib import Path

ROOT = Path(__file__).parent
PARTIALS = ROOT / 'partials'
DIST = ROOT / 'dist'

def read_partial(name: str) -> str:
    path = PARTIALS / f'{name}.html'
    if not path.exists():
        print(f'  ⚠ partials/{name}.html not found — skipping', file=sys.stderr)
        return ''
    return path.read_text(encoding='utf-8')

HEADER_HTML = read_partial('header')
FOOTER_HTML = read_partial('footer')

INCLUDE_RE = re.compile(r'<!--\s*INCLUDE:\s*(\w+)\s*-->', re.IGNORECASE)

def inject(html: str) -> str:
    def replace(match):
        name = match.group(1).lower()
        if name == 'header':
            return HEADER_HTML
        if name == 'footer':
            return FOOTER_HTML
        return match.group(0)  # leave unknown markers alone
    return INCLUDE_RE.sub(replace, html)

def main():
    html_files = list(DIST.glob('*.html'))
    if not html_files:
        print('No HTML files in dist/. Did you run build.sh first?', file=sys.stderr)
        sys.exit(1)

    for path in html_files:
        text = path.read_text(encoding='utf-8')
        new_text = inject(text)
        if new_text != text:
            path.write_text(new_text, encoding='utf-8')
            print(f'  [injected] {path.name}')
        else:
            # No markers found — page uses inlined header/footer (legacy)
            pass

if __name__ == '__main__':
    main()
