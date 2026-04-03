# My Autism Gifts — Static Website

> *Where we celebrate and empower the remarkable diversity of autism.*

A clean, accessible static website for **My Autism Gifts**, the autism and neurodivergent life coaching practice of Rob Hodes, Los Angeles.

**Live site:** https://myautismgifts.com  
**Staging (Netlify):** https://my-autism-gifts.netlify.app

---

## Pages

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Brand intro, hero, two-path section, values, testimonials |
| About | `about.html` | Rob's story, credentials, invitation to connect |
| Services | `services.html` | 4 coaching packages, VIP programme outline, pricing rationale |
| Connect | `connect.html` | Contact form, consultation block, FAQ |
| Intake | `intake.html` | Warm 10-question client intake form |

---

## Tech Stack

- **Pure HTML5 + CSS3 + vanilla JS** — no framework, no build step
- **Google Fonts:** Vidaloka (headings), Roboto (body)
- **WCAG AAA** accessibility throughout
- **Hosted:** Netlify (auto-deploy from `main` branch)

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

- WCAG AAA colour contrast on all text/interactive elements
- Skip-to-main-content link on every page
- All images have descriptive `alt` text
- Keyboard-navigable with visible focus rings
- `prefers-reduced-motion` respected for all CSS animations
- 48px minimum touch targets

---

## Brand

- **Primary:** #2A3A56 (navy) | **Accent:** #4A3B63 (purple) | **Teal:** #53A0B7
- **Headings:** Vidaloka | **Body:** Roboto
- Voice: warm, empowering, strengths-based, first-person authentic

---

## Contact

**Rob Hodes** — Chief Empowerment Officer  
info@myautismgifts.com | +1 (562) 344-5205 | Los Angeles, CA  
Founded May 1, 2021
