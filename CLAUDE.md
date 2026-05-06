# CLAUDE.md — MAG Website Dev

> **Read this first in any session.** Per Simon Scrapes' Level-2 memory pattern: this file is a small TOC; deep reference lives in the memory tree at `G:\My Drive\Work\Work with Rob\.claude\memory\` (auto-loaded via the project SessionStart hook).

---

## Table of Contents

1. [Project Snapshot](#1--project-snapshot)
2. [File Layout](#2--file-layout) (one-liner — full layout in `domain/static-site.md`)
3. [Working Guidelines](#3--working-guidelines) — push policy, Linear status workflow, brand voice
4. [Where to Find Deep Reference](#4--where-to-find-deep-reference) — points at memory tree + reports
5. [Known Pending Items](#5--known-pending-items)

---

## 1 — Project Snapshot

A static HTML/CSS/JS website for **My Autism Gifts** — Rob Hodes' autism and neurodivergent life coaching practice. This is the **development replica** of `myautismgifts.com`, edited locally and deployed via GitHub → Netlify.

| Resource | URL / Path |
|---|---|
| Live site (transitioning) | https://myautismgifts.com (WordPress / Elementor) |
| Dev repo | https://github.com/CaptainComputer1/my-autism-gifts-website |
| Netlify project | `my-autism-gifts` (`my-autism-gifts.netlify.app`) — connected to GitHub |
| Local preview | `bash build.sh && npx serve dist` (saves Netlify build credits — see Working Guideline #3) |

---

## 2 — File Layout

```
webpages/        5 HTML pages — index, about, services, connect, clarity_call
partials/        header.html + footer.html (injected client-side)
css/styles.css   ~2150 lines — all brand tokens in :root, all components
js/              main.js, partials.js
images/          local images (no longer WordPress-dependent)
elementor-templates-2026-04-02/   16 JSON exports — see domain/static-site.md
build.sh         Local-preview pipeline → dist/
netlify.toml
PUSH-TO-GITHUB.md
```

Full layout, image inventory, and the 16 Elementor template descriptions live in `G:\My Drive\Work\Work with Rob\.claude\memory\domain\static-site.md`.

---

## 3 — Working Guidelines

1. **Read this file + the SessionStart-loaded `memory.md` first** in any new session.
2. **WCAG AAA required (≥7:1)** on all text/background combos — never introduce a new color without verifying. Full token table + verified ratios live in `memory/domain/static-site.md`.
3. **Local preview workflow** — `bash build.sh && npx serve dist` (or `npm run dev` for browser-sync) — saves ~16 Netlify credits per test deploy.
4. **🚫 NEVER push to GitHub without Sean's explicit permission.** Every push triggers a Netlify deploy that consumes paid build credits. Commit freely and often locally — commits are free; pushes are not. Wait for Sean's explicit "push it" / "deploy" / "ship" before `git push`.
5. **Commit after each meaningful change** — `git add [specific files] && git commit -m "description"`. Pile commits up locally until Sean gives the push signal.
6. **CTA language: "Free Clarity Call"** (never "Free Consultation", never "Contact"). Per Elizabeth's 4/15/2026 + 4/27/2026 decisions. All CTA buttons say "Book Your Free Clarity Call" or "Schedule Your Free Clarity Call".
7. **Brand voice: warm, empowering, strengths-based.** No clinical language, no pity framing. Full guide in `memory/domain/brand.md` + `MAG Documents/Brand/MAG_Brand_Bible_v1.pdf` (read §§1–5, 12, 18 before any client-facing copy).
8. **Rob's decisions pending** — never publish anything marked "Rob to decide" without his confirmation.
9. **Linear status workflow + state IDs:** see `memory/domain/linear-workflow.md`. Claude moves tickets to **In Review** when work is done; Sean handles Done, Awaiting Payment and Done, Paid transitions.
10. **Linear is the single source of truth for project tasks** — meeting decisions go straight into Linear (new ticket or appended checkboxes), not into intermediary "proposed changes" or "WhatsApp draft" MD files. Deliverables live in `MAG Documents/`. Task-staging docs do not. See `MAG Documents/Reports/Internal-Notes/Workflow-Policy.md`.
11. **Update this file at session end** if anything fundamental changed; record completed items in `memory/domain/static-site.md` "Recent work history".

---

## 4 — Where to Find Deep Reference

The SessionStart hook auto-loads `memory.md` as the index. Read these on demand:

| Need | File |
|---|---|
| Full brand-token table + AAA ratios | `memory/domain/static-site.md` |
| Image inventory + Elementor JSON descriptions | `memory/domain/static-site.md` |
| Recent work history (newest first) | `memory/domain/static-site.md` |
| Brand voice / package names / language guide | `memory/domain/brand.md` |
| Calendly + SMS strategy | `memory/domain/calendly.md` |
| Cloudflare onboarding scope | `memory/domain/cloudflare.md` |
| DNS / SPF / DKIM / DMARC / IONOS specifics | `memory/domain/ionos.md` |
| Linear workflow / state IDs / ticket conventions | `memory/domain/linear-workflow.md` |
| Linear MCP gotchas | `memory/tools/linear-mcp.md` |
| Whisper MCP + chunking guidance | `memory/tools/whisper-mcp.md` |
| WCAG AAA contrast audit (full table) | `MAG Documents/Reports/MAG_Contrast_Audit_2026-04-30.md` |
| Email auth handoff (live SPF/DKIM/DMARC) | `MAG Documents/Reports/MAG_Email_Auth_Handoff.md` |
| Workflow policy (single-source-of-truth) | `MAG Documents/Reports/Internal-Notes/Workflow-Policy.md` |
| Brand Bible | `MAG Documents/Brand/MAG_Brand_Bible_v1.pdf` |
| DNS subdomain runbook | `DNS_SUBDOMAIN_RUNBOOK.md` (this repo) |

---

## 5 — Known Pending Items

| Item | Status |
|---|---|
| Contact / intake form notification | ✅ Done (MY-18, paid) — Netlify Forms → `info@myautismgifts.com` |
| Real testimonials | Rob to provide real client quotes and photos |
| Hero headline choice | Rob to choose Candidate A/B/C in `MAG_Copy_Drafts.md` (MY-19 #1) |
| Refund / no-show policy | Full lifecycle on MY-19 #3 (absorbed MY-49 on 5/1/2026) |
| DMARC `p=quarantine` escalation | Gates: Valimail clean cycle + Kit DKIM (MY-15 / MY-29) |
| **DNS apex flip to Netlify** | ⚠️ Blocked on Rob coordinating WP + Elementor cancellation (MY-23 / MY-27 Step 6h) |
| Cloudflare onboarding | Pending Rob's go-ahead on MY-27 Cloudflare block |
| **MY-64** Calendly SMS reminders + Free Clarity Call event | Backlog — pending Rob's $12 approval |
| **MY-65** "Consultation" → "Clarity Call" rename + 301 redirect | Backlog — pending Rob's $12 approval |
| **MY-66** Zoom BG v7 + blue-banner logo test (CO-3) | Backlog — pending Rob's $10 CO-3 signature |
| Old WordPress retirement at `old.myautismgifts.com` | Rob coordinates cancellation (MY-23) |
| Kit email sending config (Kit DKIM in DNS) | Pending — when Kit broadcasts go live (MY-29) |
| WordPress `uqokxuwa` admin account | Pending Sean's manual check via wp-admin/users.php |
