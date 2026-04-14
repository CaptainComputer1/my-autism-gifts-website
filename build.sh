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
echo "dist/ rebuilt — serve with: npx serve dist"
