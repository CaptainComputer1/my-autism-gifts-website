# CLAUDE.md — MAG Website Dev

> **Read this at the start of every session before touching any file.**

---

## What This Project Is

A static HTML/CSS/JS website for **My Autism Gifts** — Rob Hodes' autism and neurodivergent life coaching practice. This is the **development replica** of myautismgifts.com, built to be edited locally and deployed to production via GitHub → Netlify.

- **Live site:** https://myautismgifts.com (WordPress/Elementor — still live during transition)
- **Dev repo:** https://github.com/CaptainComputer1/my-autism-gifts-website
- **Netlify project:** `my-autism-gifts` (my-autism-gifts.netlify.app) — My Autism Gifts' account, connected to GitHub
- **Local dev server:** `npx serve .` from this folder → http://localhost:PORT

---

## File Layout

```
MAG Website Dev/
├── webpages/
│   ├── index.html          Homepage (hero, welcome, two-path, values, testimonials, CTA)
│   ├── about.html          About Your Coach (Rob's story, stats, CTA)
│   ├── services.html       Services & Pricing (4 packages, 3-month VIP, objection-handling)
│   ├── connect.html        Connect (consultation block, contact cards, contact form, FAQ)
│   └── consultation.html   Client Intake Form (11 warm questions, "Send My Story →")
├── css/
│   └── styles.css          Full design system (~1900 lines — all brand tokens, all components)
├── js/
│   └── main.js             Mobile nav toggle, footer year, form validation, header scroll shadow
├── images/                 ✅ Local images (downloaded from WordPress — no longer WP-dependent)
│   ├── MAG Logo Square Icon.png
│   ├── MAG Logo.jpeg
│   ├── MAG Hero Image.png
│   ├── Rob with Chin in Hand.png   (index hero, services, connect)
│   ├── Rob with Black Suit Jacket.png  (about page)
│   ├── Rob's White Shirt Image.png     (unused — available)
│   ├── Happy Woman Image.png           (unused — available)
│   ├── Frustrated Man Image.png        (unused — available)
│   └── New Skills Image.jpeg    (unused — available)
├── public/
│   ├── robots.txt
│   └── sitemap.xml
├── elementor-templates-2026-04-02/   Elementor JSON backups (10 templates)
├── JavaScript Scripts/
│   └── create_migration_doc.js
├── Python Scripts/
│   ├── check_navs.py
│   ├── patch_nav_fix.py
│   ├── patch_netlify_forms.py
│   ├── patch_rename_intake.py
│   └── patch_wcag_aaa.py
├── netlify.toml
├── PUSH-TO-GITHUB.md
├── .gitignore
├── README.md
└── CLAUDE.md           ← you are here
```

---

## Brand Tokens (from Elementor site-settings.json, 2026-03-31 backup)

| Token | Value | Use |
|-------|-------|-----|
| `--color-primary` | `#2A3A56` | Navy — headings, nav bg |
| `--color-secondary` | `#53A0B7` | Teal — links, decorative accents |
| `--color-accent` | `#4A3B63` | Deep purple — primary CTAs |
| `--color-text` | `#1B1C1D` | Near-black body copy |
| `--color-mag-purple` | `#D2CCFF` | Soft purple — card bg |
| `--color-mag-teal` | `#97E7FF` | Light teal — hero label, highlights |
| `--color-mag-light-purple` | `#F9F5FF` | Very light purple — section bg |
| `--color-mag-light-teal` | `#E0F8FF` | Very light teal — section bg |
| `--color-mag-gray-teal` | `#DEEAFF` | Pale blue-grey — subtle bg |
| `--font-heading` | Vidaloka | Google Fonts serif |
| `--font-body` | Roboto | Google Fonts sans-serif |

---

## Image Assets (✅ local — no longer loading from WordPress)

All images are now stored locally in the `images/` folder and referenced via relative paths in HTML (e.g. `images/MAG%20Logo%20Square%20Icon.png`).

| File | Used In | Purpose |
|------|---------|---------|
| `MAG Logo Square Icon.png` | All pages (nav + footer) | Primary square logo |
| `MAG Logo.jpeg` | Backup | Old rectangular logo |
| `MAG Hero Image.png` | index.html | Hero background / Rob hero image |
| `Rob with Chin in Hand.png` | index, services, connect | Rob portrait (welcome & consult blocks) |
| `Rob with Black Suit Jacket.png` | about.html | Rob portrait (about page) |
| `Rob's White Shirt Image.png` | — | Available, not yet placed |
| `Happy Woman Image.png` | — | Available, not yet placed |
| `Frustrated Man Image.png` | — | Available, not yet placed |
| `New Skills Image.jpeg` | — | Available, not yet placed |

**Note on paths:** HTML files in `webpages/` reference images as `images/[filename]` (no `../` prefix). This works because the site is served from the root directory.

---

## Navigation Class Pattern

All pages use `.primary-nav` + `id="primary-nav"` + `aria-controls="primary-nav"`. The JS in `main.js` targets `.primary-nav`. **Never rename this to `.site-nav`** — that was the old Elementor class and will break mobile nav.

---

## Accessibility Standards

- **WCAG AAA minimum (≥7:1)** on all text/background combinations — not just AA (4.5:1)
- `btn--teal` uses `#14586f` (7.91:1 on white — AAA compliant, updated April 10 2026)
- Footer text: minimum `rgba(255,255,255,0.80)` on `--color-primary` bg (7.98:1 — AAA)
- `--color-secondary-dark: #14586f` — use this for teal text links (7.91:1 on white)
- `--color-muted: #404654` — use for muted body text (9.45:1 on white — AAA)
- `btn--outline-white` for ghost buttons on dark hero/banner backgrounds
- All `<img>` elements need descriptive `alt` text (see alt text guide in MAG_Copy_Drafts.md)
- Skip link, `aria-current`, `aria-label`, `aria-expanded` patterns in place
- `prefers-reduced-motion` respected in CSS for all animations
- 48px minimum touch targets on all interactive elements

---

## Known Pending Items (as of 2026-04-10)

| Item | Status |
|------|--------|
| Contact/intake form backend | Not wired — needs Netlify Forms or Formspree |
| Real testimonials | Rob to provide real client quotes and photos |
| Hero headline choice | Rob to choose from Candidates A/B/C in MAG_Copy_Drafts.md |
| Refund/no-show policy | Rob to decide details before publishing to services page |
| DMARC upgrade (DNS) | Escalation path: p=none → quarantine → reject as Kit builds sender reputation |
| **DNS transfer to Netlify** | **⚠️ BLOCKED** — Sean needs GoDaddy login credentials from Rob (Task 38) |
| Elementor update | Rob to run Elementor update in WP admin (Task 39) |
| Kit email sending config | Rob to configure SPF/DKIM/sending domain in Kit settings (Task 40) |
| ~~Image download~~ | ✅ **DONE** — all images downloaded and stored locally in `images/` |
| WordPress uqokxuwa account | Sean to check wp-admin/users.php manually |

---

## Working Guidelines

1. **Always read this file first** in a new session — don't assume you remember the structure.
2. **WCAG AAA required** — ≥7:1 contrast on all new color choices. Never introduce a new color without verifying. See verified values in the Accessibility Standards section above.
3. **Test the local server** with `npx serve .` before editing anything significant.
7. **Commit after each meaningful change**: `git add . && git commit -m "description"`
7. **Never edit the live WordPress site** while building this static version — changes will be lost during the transition.
7. **Brand voice**: warm, empowering, strengths-based. No clinical language, no pity framing. See full brand guide in `G:\My Drive\Work\Work with Rob\Claude Project Meta\MAG_Copy_Drafts.md`.
7. **Rob's decisions pending** — do not publish anything marked "Rob to decide" without his confirmation.
8. **Update this file at session end** — record completed items, new constraints, and current state of pending items.

---

## Recent Work (April 10, 2026)

- All CSS color combinations verified WCAG AAA (≥7:1) — full audit run
- Footer rgba white text raised from 0.45–0.70 to minimum 0.80–0.82
- `btn--teal` border updated from `#1e6b80` (AA) to `#14586f` (AAA)
- Committed to GitHub: `fix: raise footer text opacity for WCAG AAA contrast compliance`
- Task list v2.5 (40 tasks) reflects Meeting 7 outcomes; Tasks 38–40 added
- New project documents created in `G:\My Drive\Work\Work with Rob\MAG Documents\` (correct paths):
  - `Contracts/MAG_Contract_v2.docx` — Contract v3.0 (40 tasks, $375 fixed price)
  - `Estimates/MAG_Estimate_v2.docx` — Estimate v2.0 ($375 across 5 phases)
  - `Change Orders/MAG_Change_Order_CO-1.docx` — CO-001: 4 Zoom Backgrounds ($20, approved)
  - `Reports/MAG_PRD.docx` — Product Requirements Document (Tim Lawrence's recommendation)
- Linear integration completed: MY-5 through MY-34 now cover all 40 contract tasks + CO-001/CO-002
  - MY-27: Task 38 DNS Transfer (Urgent), MY-28: Task 39 Elementor Pro (High),
    MY-29: Task 40 Email Sending (High), MY-30: CO-001 Zoom Backgrounds (Medium)
  - MY-31–34: Phase 3 Kit setup, email sequences, Phase 4 hero story, copy/credentials
