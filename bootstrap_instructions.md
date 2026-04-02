# Bootstrap Instructions — MAG Website Dev

How to get this project running from scratch on a new machine, or after a gap in development.

---

## Prerequisites

- **Node.js** v18+ (for `npx serve`) — https://nodejs.org
- **Git** v2.30+ — https://git-scm.com
- **A browser** (Chrome preferred for DevTools inspection)
- Optional: **gh CLI** — https://cli.github.com (for GitHub operations without a browser)

No npm install needed. No build step. No environment variables. It's plain HTML.

---

## Step 1 — Clone the repo

```bash
git clone https://github.com/CaptainComputer1/my-autism-gifts-website.git
cd my-autism-gifts-website
```

Or if you already have the folder:

```bash
cd "C:\Users\seanl\Documents\Work\MAG Website Dev"
git status   # make sure you're on main and up to date
git pull
```

---

## Step 2 — Start the local server

```bash
npx serve .
```

Open the URL shown (usually http://localhost:3000 or the next available port).

> **Note:** You can also just double-click any `.html` file in File Explorer to open it directly in a browser — but links between pages may not work correctly without a server.

---

## Step 3 — Make changes

Edit any `.html`, `css/styles.css`, or `js/main.js` file in your text editor.
Refresh the browser to see changes. No build step required.

---

## Step 4 — Commit and push

```bash
git add .
git commit -m "Brief description of what you changed"
git push
```

Netlify will auto-deploy within 30–60 seconds of the push.

---

## Netlify Connection

The Netlify project `my-autism-gifts` (my-autism-gifts.netlify.app) should be connected to the GitHub repo. If it isn't:

1. Go to https://app.netlify.com
2. Open the `my-autism-gifts` project → Site configuration → Build & deploy → Link repository
3. Select `CaptainComputer1/my-autism-gifts-website`
4. Branch: `main` | Publish directory: `.` (root) | Build command: _(leave blank)_

Or tell Claude: *"Connect the my-autism-gifts Netlify project to our GitHub repo"* — Claude has Netlify MCP access.

---

## File Reference

```
MAG Website Dev/
├── index.html            Homepage
├── about.html            About Your Coach
├── services.html         Services & Pricing
├── connect.html          Connect / Contact
├── intake.html           Client Intake Form
├── css/
│   └── styles.css        All styles (~1900 lines, fully commented)
├── js/
│   └── main.js           Mobile nav, footer year, form validation
├── images/               Currently empty — images load from WordPress URLs
├── CLAUDE.md             Claude's session reference (technical context)
├── README.md             GitHub project overview
└── bootstrap_instructions.md  ← you are here
```

---

## Common Tasks

### Add a new section to a page
1. Open the relevant `.html` file
2. Copy an existing `<section>` block as a template
3. Update content, `aria-labelledby` IDs, and class names
4. Add any new component CSS at the bottom of `css/styles.css`

### Change a colour sitewide
Edit the CSS custom property in `:root` at the top of `css/styles.css`.

### Update the logo
Replace the `src` URL in all `<img>` elements with class `site-logo` and `footer-brand__logo`. Run a find-replace across all `.html` files. Make sure `alt` text and favicon `href` are also updated.

### Download images locally (when WordPress goes offline)
Images currently load from `https://myautismgifts.com/wp-content/uploads/...`. To download them:

```powershell
# Run from MAG Website Dev folder in PowerShell
$images = @(
  "https://myautismgifts.com/wp-content/uploads/2026/03/MAG-Logo-Square-Icon.png",
  "https://myautismgifts.com/wp-content/uploads/2026/03/Robs-Hero-Image-through-Multiply-Blend-Mode-at-50.png",
  "https://myautismgifts.com/wp-content/uploads/2026/03/Chin-in-Hand-v2-Transparent-2.png",
  "https://myautismgifts.com/wp-content/uploads/2026/03/Black-Suit-Jacket-v2-without-wash-out-or-BG.png",
  "https://myautismgifts.com/wp-content/uploads/2026/03/Chin-in-Hand-v2-Transparent.png"
)
foreach ($url in $images) {
  $filename = Split-Path $url -Leaf
  Invoke-WebRequest -Uri $url -OutFile "images\$filename"
  Write-Host "Downloaded: $filename"
}
```

Then update the `src` attributes in the HTML to `images/filename.ext`.

### Wire up the contact / intake forms
Forms currently show a placeholder success message on submit. To wire them to a real backend:

**Option A — Netlify Forms (free, no code needed):**
1. Add `netlify` attribute to `<form>` elements: `<form ... netlify>`
2. Add `<input type="hidden" name="form-name" value="contact">` inside each form
3. Push to GitHub — Netlify detects and activates the form endpoint automatically
4. View submissions at: Netlify dashboard → Forms

**Option B — Formspree:**
1. Create account at https://formspree.io
2. Replace `action="#"` with `action="https://formspree.io/f/YOUR_ID"`
3. No other changes needed

---

## Troubleshooting

| Problem | Likely cause | Fix |
|---------|-------------|-----|
| Fonts not loading | Network/firewall blocking Google Fonts | Fonts fall back to Georgia/system-ui — acceptable offline |
| Images not showing | WordPress site offline or URL changed | Download images locally (see above) |
| Mobile nav not working | JS not loading, or class mismatch | Check browser console; ensure all nav elements use `.primary-nav` class |
| Page looks unstyled | CSS not loading | Check `css/styles.css` path relative to HTML file location |
| Netlify not auto-deploying | Repo not connected | See Netlify Connection section above |
