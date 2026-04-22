#!/usr/bin/env bash
# Rebuild dist/ from source folders — mirrors the Netlify build command
# Run this after editing any file, then preview at http://localhost:3000

set -e
mkdir -p dist
cp webpages/*.html dist/
cp -r css dist/
cp -r images dist/
cp -r js dist/
cp public/* dist/

# Inject shared header/footer partials into any page that has INCLUDE markers.
# (Pages without markers are left as-is, so migration from inline headers can
#  happen one page at a time.)
if command -v python >/dev/null 2>&1; then
  python build-partials.py
elif command -v python3 >/dev/null 2>&1; then
  python3 build-partials.py
else
  echo "⚠ Python not found — skipping partial injection. Install Python to enable."
fi

echo "dist/ rebuilt — serve with: npx serve dist"
