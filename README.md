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

Connected to Netlify's Personal Plan. Every push to `main` triggers an automatic deploy that consumes Netlify build credits.

> **⚠️ Push only when Sean explicitly says to.** Commits are free — push them whenever. But `git push` costs Netlify build credits, so it is Sean-initiated only. Claude (or any collaborator) should commit often locally and wait for an explicit "push it / deploy / ship" instruction before pushing.

```bash
# Normal flow — do this as often as you like:
git add .
git commit -m "Your change description"

# Only when Sean says to push:
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

## Linear status workflow

When tickets are worked on for this repo, Claude only ever takes them to **In Review**. Sean reviews with Rob, then moves to **Done, Awaiting Payment**. Once Rob has actually paid, the ticket moves to **Done, Paid**. Claude must never set `Done, Paid` (or `Done, Awaiting Payment`) directly — those two transitions are owned by the human review/payment loop. Status IDs (My-autism-gifts team): In Review `a642f451-e6ed-4b68-a8f0-c4860585fa11`, Done Awaiting Payment `53e49b02-89e3-4555-bfab-72b9d9e0a3eb`, Done Paid `64aa7a25-c013-4087-9080-7d33381af71b`.

---

## Accessibility

- **WCAG AAA** colour contrast (≥7:1) on all text/interactive elements — verified April 10, 2026 + re-verified April 30, 2026 (commit `02a9cc8` closing the F1–F6 token-pair gap)
- Footer nav tap targets ≥48px (commit `4ac061c`)
- Skip-to-main-content link on every page
- All images have descriptive `alt` text
- Keyboard-navigable with visible focus rings
- `prefers-reduced-motion` respected for all CSS animations
- 48px minimum touch targets
- Footer white text: minimum `rgba(0.80)` on primary bg for copyright/nav links

---

## Brand

- **Authoritative reference:** `G:\My Drive\Work\Work with Rob\MAG Documents\Brand\MAG_Brand_Bible_v1.pdf` (Brand Bible v1.0, April 15, 2026) — single source of truth for voice, packages, and visual identity
- **Primary:** `#2A3A56` (navy) | **Accent:** `#4A3B63` (purple) | **Teal text:** `#14586f` (AAA 7.91:1) | **Teal decorative:** `#53A0B7`
- **Headings:** Vidaloka | **Body:** Roboto
- Voice: warm, empowering, strengths-based, first-person authentic
- **CTA language:** "Book Your Free Clarity Call" — never "Free Consultation"
- **Package names** (Brand Bible § 12 + live `myautismgifts.com/services/`): Free Clarity Call · Starter ($75/session) · Standard ($130/mo) · Committed ($200/mo) · VIP 3-Month ($480 total)
- **Imagery rule:** butterfly only, never puzzle piece (Brand Bible § 11)
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
