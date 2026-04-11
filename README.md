# My Autism Gifts — Static Website

> *Where we celebrate and empower the remarkable diversity of autism.*

A clean, accessible static website for **My Autism Gifts**, the autism and neurodivergent life coaching practice of Rob Hodes, Los Angeles.

**Live site:** https://myautismgifts.com  
**Staging (Netlify):** https://my-autism-gifts.netlify.app

---

## Pages

| Page | File | Description |
|------|------|-------------|
| Home | `webpages/index.html` | Brand intro, hero, two-path section, values, testimonials |
| About | `webpages/about.html` | Rob's story, credentials, invitation to connect |
| Services | `webpages/services.html` | 4 coaching packages, VIP programme outline, pricing rationale |
| Connect | `webpages/connect.html` | Contact form, consultation block, FAQ |
| Consultation | `webpages/consultation.html` | Warm 11-question client intake form |

---

## Tech Stack

- **Pure HTML5 + CSS3 + vanilla JS** — no framework, no build step
- **Google Fonts:** Vidaloka (headings), Roboto (body)
- **WCAG AAA** accessibility throughout (≥7:1 contrast, verified April 10 2026)
- **Hosted:** Netlify (auto-deploy from `main` branch via `netlify.toml`)
- **Images:** All local in `images/` folder (downloaded from WordPress April 2026)
- **HTML pages:** All in `webpages/` subfolder

---

## Local Development

```bash
# Requires Node.js (for the zero-config dev server)
npx serve .
# → opens at http://localhost:3000 (or next available port)
```

Open any `.html` file directly in a browser, or use the dev server for proper relative-path resolution.

---

## Deployment

This repo is connected to Netlify. Every push to `main` triggers an automatic deploy to https://my-autism-gifts.netlify.app.

```bash
git add .
git commit -m "Your change description"
git push
```

---

## Accessibility

- **WCAG AAA** colour contrast (≥7:1) on all text/interactive elements — verified April 10, 2026
- Skip-to-main-content link on every page
- All images have descriptive `alt` text
- Keyboard-navigable with visible focus rings
- `prefers-reduced-motion` respected for all CSS animations
- 48px minimum touch targets
- Footer white text: minimum rgba(0.80) on primary bg for copyright/nav links

---

## Brand

- **Primary:** #2A3A56 (navy) | **Accent:** #4A3B63 (purple) | **Teal text:** #14586f (AAA 7.91:1) | **Teal decorative:** #53A0B7
- **Headings:** Vidaloka | **Body:** Roboto
- Voice: warm, empowering, strengths-based, first-person authentic

---

## Project Management

All project documents live in **`G:\My Drive\Work\Work with Rob\MAG Documents\`**:

```
MAG Documents/
├── Contracts/
│   └── MAG_Contract_v2.docx       # Contract v3.0 — 40 tasks, $375 fixed price
├── Estimates/
│   └── MAG_Estimate_v2.docx       # Estimate v2.0 — phase-by-phase cost breakdown
├── Change Orders/
│   └── MAG_Change_Order_CO-1.docx # CO-001: 4 Zoom Backgrounds ($20, approved Apr 8 2026)
├── Reports/
│   ├── MAG_Task_List.md           # Task List v2.5 — primary working task list
│   └── MAG_PRD.docx               # Product Requirements Document v1.0
├── MAG Security/                  # Credentials and access info
├── Debug Logs/                    # Issue logs
└── Tax Forms/                     # Tax documents
```

Tasks are tracked in **Linear** (workspace: My-autism-gifts, team: MY):
- Issues **MY-5 through MY-34** cover all 40 contract tasks + CO-001/CO-002
- Linear is the single consolidated place to manage active work
- Contract `MAG_Contract_v2.docx` is the billing reference (Tasks 1–40 across 5 phases)

---

## Contact

**Rob Hodes** — Chief Empowerment Officer  
info@myautismgifts.com | +1 (562) 344-5205 | Los Angeles, CA  
Founded May 1, 2021
