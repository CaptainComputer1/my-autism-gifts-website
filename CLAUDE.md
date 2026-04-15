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
| Contact/intake form backend | Netlify Forms wired (HTML attributes in place) — needs notification email configured (MY-18) |
| Real testimonials | Rob to provide real client quotes and photos |
| Hero headline choice | Rob to choose from Candidates A/B/C in MAG_Copy_Drafts.md |
| Refund/no-show policy | Rob to decide details before publishing to services page |
| DMARC upgrade (DNS) | Escalation path: p=none → quarantine → reject as Kit builds sender reputation |
| **DNS transfer to Netlify** | **⚠️ BLOCKED** — Nameservers are IONOS (not GoDaddy). Need IONOS access to change A record from `74.208.236.205` → `75.2.60.5`. Must configure custom domain in Netlify FIRST. |
| Elementor update | Rob to run Elementor update in WP admin (Task 39) |
| Kit email sending config | Rob to configure SPF/DKIM/sending domain in Kit settings (Task 40) |
| ~~Image download~~ | ✅ **DONE** — all images downloaded and stored locally in `images/` |
| WordPress uqokxuwa account | Sean to check wp-admin/users.php manually |

---

## Working Guidelines

1. **Always read this file first** in a new session — don't assume you remember the structure.
2. **WCAG AAA required** — ≥7:1 contrast on all new color choices. Never introduce a new color without verifying. See verified values in the Accessibility Standards section above.
3. **Local preview workflow** — edit source files in `webpages/`, `css/`, `js/`, `images/`, then run `bash build.sh` to rebuild `dist/`, then `npx serve dist` to preview at `http://localhost:3000`. The `dist/` folder mirrors Netlify's build output so CSS/image paths resolve correctly. **Never use `npx serve .` directly** — relative paths from `webpages/` won't find `css/styles.css`.
4. **Only push to GitHub when ready for production** — each push triggers a Netlify deploy and costs ~16 credits. Netlify Free Plan has limited credits. Batch commits locally, verify in local preview, push only when a chunk of verified work is ready.
5. **Commit after each meaningful change**: `git add [specific files] && git commit -m "description"` — commit locally without pushing. Push in batches.
6. **CTA button language**: Use "Free Clarity Call" (not "Free Consultation" or "Contact"). Per Elizabeth's feedback (April 15, 2026): high-intent language converts better. All CTA buttons linking to consultation.html now use "Book Your Free Clarity Call" or "Schedule Your Free Clarity Call".
7. **Brand voice**: warm, empowering, strengths-based. No clinical language, no pity framing. See full brand guide in `G:\My Drive\Work\Work with Rob\Claude Project Meta\MAG_Copy_Drafts.md`.
8. **Rob's decisions pending** — do not publish anything marked "Rob to decide" without his confirmation.
9. **Update this file at session end** — record completed items, new constraints, and current state of pending items.

---

## Recent Work (April 15, 2026)

- **Footer standardized** across all 5 pages: `footer-inner` grid, nav headings, consistent content (commit `a59fc6a`)
- **CTA buttons renamed** from "Free Consultation" to "Free Clarity Call" per Elizabeth's feedback
- **Testimonial carousel fix**: prevented timer accumulation causing jumpy 2-second transitions; now 5-second intervals
- **Header text** ("My Autism Gifts") made visible on all pages (was `sr-only` on 3 pages)
- **Header button contrast** fixed: `.primary-nav .btn.btn--primary` CSS specificity override added
- **Footer logo** made responsive: `max-width: 231px; width: 100%; height: auto`
- **Local preview workflow** established: `bash build.sh` → `npx serve dist` (saves Netlify credits)
- **Linear task consolidation**: 5 merges saved Rob $180; 5 WP tasks canceled; MY-47 (footer) marked Done
- **Task mapping spreadsheet** created: `MAG_Linear_Task_Mapping.xlsx` (3 sheets)
- **DNS research**: Nameservers are IONOS (not GoDaddy). A record change: `74.208.236.205` → `75.2.60.5`. Email records (MX, SPF, DKIM, DMARC) unaffected.

### Previous (April 10, 2026)
- All CSS color combinations verified WCAG AAA (≥7:1)
- Footer rgba white text raised to minimum 0.80–0.82
- Linear integration: MY-5 through MY-63 cover all tasks + CO-001/CO-002
