"""
One-time migration: replace the inlined <header> and <footer> blocks in
each webpages/*.html with <!-- INCLUDE: header --> and <!-- INCLUDE: footer -->
markers. The full header and footer HTML is stored in partials/ and injected
at build time by build-partials.py.

Idempotent — safe to run multiple times.
"""

import re
import sys
from pathlib import Path

WEBPAGES = Path(__file__).parent / 'webpages'

# Match a <!-- ─── HEADER ─── --> comment followed by <header>...</header>
# OR just a raw <header class="site-header">...</header>
HEADER_RE = re.compile(
    r'(?:\s*<!--\s*─+\s*HEADER\s*─+\s*-->\s*)?'
    r'<header\s+class="site-header"[^>]*>[\s\S]*?</header>\s*',
    re.IGNORECASE
)

FOOTER_RE = re.compile(
    r'(?:\s*<!--\s*─+\s*FOOTER\s*─+\s*-->\s*)?'
    r'<footer\s+class="site-footer"[^>]*>[\s\S]*?</footer>\s*',
    re.IGNORECASE
)

def migrate(path: Path) -> bool:
    text = path.read_text(encoding='utf-8')
    original = text

    # Skip if already migrated
    if '<!-- INCLUDE: header -->' in text and '<!-- INCLUDE: footer -->' in text:
        return False

    # Replace header
    if '<!-- INCLUDE: header -->' not in text:
        text = HEADER_RE.sub('  <!-- INCLUDE: header -->\n', text, count=1)

    # Replace footer
    if '<!-- INCLUDE: footer -->' not in text:
        text = FOOTER_RE.sub('  <!-- INCLUDE: footer -->\n', text, count=1)

    if text != original:
        path.write_text(text, encoding='utf-8')
        return True
    return False

def main():
    files = list(WEBPAGES.glob('*.html'))
    for path in sorted(files):
        changed = migrate(path)
        status = 'migrated' if changed else 'skipped '
        print(f'  [{status}] {path.name}')

if __name__ == '__main__':
    main()
