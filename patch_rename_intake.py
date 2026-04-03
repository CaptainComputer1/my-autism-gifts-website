import os, re

BASE = r"C:\Users\seanl\Documents\Work\MAG Website Dev"
HTML_FILES = ["index.html", "about.html", "services.html", "connect.html", "intake.html"]

# ── 1. Rename intake.html -> consultation.html ────────────────────────────────
old_path = os.path.join(BASE, "intake.html")
new_path = os.path.join(BASE, "consultation.html")
if os.path.exists(old_path):
    os.rename(old_path, new_path)
    print(f"Renamed intake.html -> consultation.html")
elif os.path.exists(new_path):
    print("consultation.html already exists (rename previously done)")
else:
    print("WARN: intake.html not found!")

# Update HTML_FILES list to use new name
HTML_FILES = ["index.html", "about.html", "services.html", "connect.html", "consultation.html"]

# ── 2. Apply text replacements across all pages ───────────────────────────────
# Each tuple: (exact_old, exact_new)
REPLACEMENTS = [
    # href / src link references
    ('href="intake.html"',       'href="consultation.html"'),
    ("href='intake.html'",       "href='consultation.html'"),
    # Nav link text: "Client Intake Form" -> "Consultation"
    ('>Client Intake Form<',     '>Consultation<'),
    # Footer link text
    ('>Client Intake Form<',     '>Consultation<'),  # same pattern covers both
    # Page <title> in consultation.html
    ('<title>Client Intake Form | My Autism Gifts</title>',
     '<title>Consultation | My Autism Gifts</title>'),
    # h1 / page heading in consultation.html
    ('>Client Intake Form<',     '>Consultation<'),  # covered above
    # aria-label or descriptive text
    ('Client Intake Form',       'Consultation'),
]

for filename in HTML_FILES:
    filepath = os.path.join(BASE, filename)
    if not os.path.exists(filepath):
        print(f"WARN: {filename} not found, skipping")
        continue

    with open(filepath, "r", encoding="utf-8") as f:
        html = f.read()
    original = html

    for old, new in REPLACEMENTS:
        html = html.replace(old, new)

    if html != original:
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(html)
        print(f"  Updated: {filename}")
    else:
        print(f"  No changes: {filename}")

print("Done.")
