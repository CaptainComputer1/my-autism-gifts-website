# CLAUDE.md — MAG Website Dev

> **Read this at the start of every session before touching any file.**

---

## What This Project Is

A static HTML/CSS/JS website for **My Autism Gifts** — Rob Hodes' autism and neurodivergent life coaching practice. This is the **development replica** of myautismgifts.com, built to be edited locally and deployed to production via GitHub → Netlify (or Vercel — Rob's choice).

- **Live site:** https://myautismgifts.com (WordPress/Elementor — still live during transition)
- **Dev repo:** https://github.com/CaptainComputer1/my-autism-gifts-website
- **Netlify project:** `my-autism-gifts` (my-autism-gifts.netlify.app) — Sean's account, ready for GitHub connection
- **Local dev server:** `npx serve .` from this folder → http://localhost:PORT

---

## File Layout

```
MAG Website Dev/
├── index.html          Homepage (hero, welcome, two-path, values, testimonials, CTA)
├── about.html          About Your Coach (Rob's story, stats, CTA)
├── services.html       Services & Pricing (4 packages, 3-month VIP, objection-handling)
├── connect.html        Connect (consultation block, contact cards, contact form, FAQ)
├── intake.html         Client Intake Form (10 warm questions, "Send My Story →")
├── css/
│   └── styles.css      Full design system (~1900 lines — all brand tokens, all components)
├── js/
│   └── main.js         Mobile nav toggle, footer year, form validation, header scroll shadow
├── images/             (empty — all images currently load from live WordPress URLs)
├── .gitignore
├── README.md
├── CLAUDE.md           ← you are here
└── bootstrap_instructions.md
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

## Image Assets (all from WordPress uploads)

All images currently load directly from the live WordPress site. Since we're transitioning away from WordPress, run `scripts/download-images.sh` (to be written) or manually download.

| Purpose | URL |
|---------|-----|
| Logo (current) | `https://myautismgifts.com/wp-content/uploads/2026/03/MAG-Logo-Square-Icon.png` |
| Rob — Hero (index) | `https://myautismgifts.com/wp-content/uploads/2026/03/Robs-Hero-Image-through-Multiply-Blend-Mode-at-50.png` |
| Rob — Welcome (index) | `https://myautismgifts.com/wp-content/uploads/2026/03/Chin-in-Hand-v2-Transparent-2.png` |
| Rob — About page | `https://myautismgifts.com/wp-content/uploads/2026/03/Black-Suit-Jacket-v2-without-wash-out-or-BG.png` |
| Rob — Services consult | `https://myautismgifts.com/wp-content/uploads/2026/03/Chin-in-Hand-v2-Transparent-2.png` |
| Rob — Connect consult | `https://myautismgifts.com/wp-content/uploads/2026/03/Chin-in-Hand-v2-Transparent-2.png` |
| Old logo (backup) | `https://myautismgifts.com/wp-content/uploads/2024/02/MAG-Logo.jpeg` |

---

## Navigation Class Pattern

All pages use `.primary-nav` + `id="primary-nav"` + `aria-controls="primary-nav"`. The JS in `main.js` targets `.primary-nav`. **Never rename this to `.site-nav`** — that was the old Elementor class and will break mobile nav.

---

## Accessibility Standards

- WCAG AAA minimum on all text/background combinations
- `btn--teal` uses `#1e6b80` (not `--color-secondary`) for 6:1 white contrast
- `btn--outline-white` for ghost buttons on dark hero/banner backgrounds
- All `<img>` elements need descriptive `alt` text (see alt text guide in MAG_Copy_Drafts.md)
- Skip link, `aria-current`, `aria-label`, `aria-expanded` patterns in place
- `prefers-reduced-motion` respected in CSS for all animations
- 48px minimum touch targets on all interactive elements

---

## Known Pending Items (as of 2026-04-02)

| Item | Status |
|------|--------|
| Contact/intake form backend | Not wired — needs Netlify Forms, Formspree, or WP REST endpoint |
| Real testimonials | Rob to provide real client quotes and photos |
| Hero headline choice | Rob to choose from Candidates A/B/C in MAG_Copy_Drafts.md |
| Refund/no-show policy | Rob to decide details before publishing to services page |
| DMARC upgrade (DNS) | Manual — Sean to edit `_dmarc` TXT record in IONOS dashboard |
| WordPress uqokxuwa account | Sean to check wp-admin/users.php manually |
| Image download script | Images still load from live WP URLs — download from WP since we won't use it anymore |

---

## Working Guidelines

1. **Always read this file first** in a new session — don't assume you remember the structure.
2. **Test the local server** with `npx serve .` before editing anything significant.
3. **Commit after each meaningful change**: `git add . && git commit -m "description"`
4. **Never edit the live WordPress site** while building this static version — changes will be lost during the transition.
5. **Brand voice**: warm, empowering, strengths-based. No clinical language, no pity framing. See full brand guide in `G:\My Drive\Work\Work with Rob\Claude Project Meta\MAG_Copy_Drafts.md`.
6. **Rob's decisions pending** — do not publish anything marked "Rob to decide" without his confirmation.
