import re

CSS_PATH = r"C:\Users\seanl\Documents\Work\MAG Website Dev\css\styles.css"

with open(CSS_PATH, "r", encoding="utf-8") as f:
    css = f.read()

original = css

# 1. Add --color-secondary-dark variable after --color-secondary
css = css.replace(
    "--color-secondary: #53A0B7;",
    "--color-secondary: #53A0B7;\n  --color-secondary-dark: #0f5f74;   /* AAA teal text (7.28:1 on white) */"
)

# 2. Darken --color-muted for AAA (6.23:1 -> 7.80:1)
css = css.replace(
    "--color-muted: #5a6278;",
    "--color-muted: #4a5269;           /* AAA muted (7.80:1 on white) */"
)

# 3. Darken btn--teal background for AAA (6.05:1 -> 7.89:1)
css = css.replace(
    "background-color: #1e6b80;",
    "background-color: #14586f;        /* AAA teal btn (7.89:1 on white) */"
)
css = css.replace(
    "background-color: #175c6e;",
    "background-color: #0e4a5e;"
)

# 4. Fix Free Consultation nav button specificity bug
pattern = r'(\.site-nav a \{[^}]+\})'
match = re.search(pattern, css)
if match:
    old_block = match.group(1)
    new_block = old_block + "\n\n/* Override: keep btn colours correct inside nav */\n.site-nav .btn {\n  color: var(--color-white);\n}\n.site-nav .btn:hover {\n  color: var(--color-white);\n}"
    css = css.replace(old_block, new_block, 1)
    print("Fixed Free Consultation nav button")
else:
    print("WARN: Could not find .site-nav a block")

# 5. section-label colour: secondary -> secondary-dark
css = re.sub(
    r'(\.section-label\s*\{[^}]*?)color:\s*var\(--color-secondary\)',
    r'\1color: var(--color-secondary-dark)',
    css, flags=re.DOTALL
)

# 6. Body link colour: secondary -> secondary-dark (bare `a` rule only)
css = re.sub(
    r'(^a\s*\{[^}]*?)color:\s*var\(--color-secondary\)',
    r'\1color: var(--color-secondary-dark)',
    css, flags=re.MULTILINE | re.DOTALL
)

# 7. pricing-card__per-session colour
css = re.sub(
    r'(\.pricing-card__per-session\s*\{[^}]*?)color:\s*var\(--color-secondary\)',
    r'\1color: var(--color-secondary-dark)',
    css, flags=re.DOTALL
)

# 8. Carousel dot/button colours: secondary -> secondary-dark
carousel_start = css.find("TESTIMONIAL CAROUSEL")
if carousel_start != -1:
    before = css[:carousel_start]
    after  = css[carousel_start:]
    after = after.replace("border: 2px solid var(--color-secondary);",
                          "border: 2px solid var(--color-secondary-dark);")
    after = after.replace("color: var(--color-secondary);",
                          "color: var(--color-secondary-dark);")
    after = after.replace("background-color: var(--color-secondary);",
                          "background-color: var(--color-secondary-dark);")
    css = before + after
    print("Carousel colours updated")
else:
    print("WARN: Carousel section comment not found")

# 9. focus-visible outline: secondary -> secondary-dark
css = css.replace(
    "outline: 3px solid var(--color-secondary);",
    "outline: 3px solid var(--color-secondary-dark);"
)

if css != original:
    with open(CSS_PATH, "w", encoding="utf-8") as f:
        f.write(css)
    print("styles.css written successfully")
else:
    print("WARN: No changes detected")
