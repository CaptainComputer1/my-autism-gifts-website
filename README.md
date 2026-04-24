# My Autism Gifts — Static Website

> *Where we celebrate and empower the remarkable diversity of autism.*

A clean, accessible static website for **My Autism Gifts**, the autism and neurodivergent life coaching practice of Rob Hodes, Los Angeles.

**Live site:** https://myautismgifts.com
**Staging (Netlify):** https://my-autism-gifts.netlify.app

---

## Pages (all at repo root — flat structure as of 2026-04-23)

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Brand intro, hero, two-path section, values, testimonials |
| About | `about.html` | Rob's story, credentials, invitation to connect |
| Services | `services.html` | 4 coaching packages, VIP programme outline, pricing rationale |
| Connect | `connect.html` | Contact form, consultation block, FAQ |
| Clarity Call | `clarity_call.html` | Warm 11-question client intake form |

Shared header and footer live in `partials/header.html` and `partials/footer.html`. They are injected at page load by `js/partials.js` via a synchronous XHR — no build step, edit once, changes land on every page.

---

## Local Development — one click

**Requirements:** Node.js (LTS) and Git for Windows (for Git Bash).

**To run locally, double-click `start.bat`** at the repo root.

That's it. A terminal window opens, `browser-sync` starts, the default browser launches at http://localhost:3000/, and every save to an HTML / CSS / JS / image file triggers an automatic reload in the browser. Press `Ctrl+C` in the terminal to stop.

If you prefer the command line:

```bash
npm install      # first time only
npm run dev      # equivalent to double-clicking start.bat (run this in Git Bash)
```

**Important:** run it through **Git Bash**, not Windows CMD. CMD's `bash` resolves to WSL's bash, which is disabled on this machine and will error out. `start.bat` handles this for you by calling Git Bash explicitly.

---

## Deployment

Connected to Netlify's Personal Plan. Every push to `main` triggers an automatic deploy.

```bash
git add .
git commit -m "Your change description"
git push
```

Netlify's build command (`netlify.toml`) publishes the repo root directly — no build step. A cleanup command in the Netlify build environment strips dev-only files (`node_modules`, scripts, docs) so only the web assets ship to the CDN.

---

## Tech Stack

- **Pure HTML5 + CSS3 + vanilla JS** — no framework
- **Client-side shared partials** via `js/partials.js` (sync XHR — zero flash of unstyled content)
- **Google Fonts:** Vidaloka (headings), Roboto (body)
- **WCAG AAA** accessibility throughout (≥7:1 contrast, verified April 10, 2026)
- **Hosted:** Netlify (auto-deploy from `main` via `netlify.toml`)
- **Images:** all local under `images/`

---

## Accessibility

- **WCAG AAA** colour contrast (≥7:1) on all text/interactive elements — verified April 10, 2026
- Skip-to-main-content link on every page
- All images have descriptive `alt` text
- Keyboard-navigable with visible focus rings
- `prefers-reduced-motion` respected for all CSS animations
- 48px minimum touch targets
- Footer white text: minimum `rgba(0.80)` on primary bg for copyright/nav links

---

## Brand

- **Primary:** `#2A3A56` (navy) | **Accent:** `#4A3B63` (purple) | **Teal text:** `#14586f` (AAA 7.91:1) | **Teal decorative:** `#53A0B7`
- **Headings:** Vidaloka | **Body:** Roboto
- Voice: warm, empowering, strengths-based, first-person authentic
- Brand rules live in `BRAND_RULES.md` (MAG lettering/butterfly exclusivity, color discipline, event-variant rules)
- Zoom background usage guide: `ZOOM_BACKGROUNDS_USAGE.md`

---

## Project Management

Project documents live in `G:\My Drive\Work\Work with Rob\MAG Documents\`. Tasks are tracked in **Linear** (workspace: My-autism-gifts, team: MY, issues MY-5 through MY-63+).

---

## Contact

**Rob Hodes** — Chief Empowerment Officer
info@myautismgifts.com | +1 (562) 344-5205 | Los Angeles, CA
Founded May 1, 2021
