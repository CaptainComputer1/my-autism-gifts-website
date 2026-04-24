# Zoom Background Usage Guide

> Authored 2026-04-23 after Meeting 8 brand review with Elizabeth.
> Location of current (v5) assets: `images/zoom-backgrounds/MAG Zoom BG's v5/`

## Quick reference — which background for which meeting

| Background | File | Use for |
|---|---|---|
| **BG 1 — Full Logo + Tagline** | `MAG-Zoom-BG-1-Full-Logo-v5.png` | Default for **discovery calls, marketing meetings, podcast appearances, networking events** — anytime the MAG tagline should be visible as a first impression. |
| **BG 2 — Text Block** | `MAG-Zoom-BG-2-Text-Block-v5.png` | **Business meetings, coaching sales calls, team introductions** — anytime Rob's title ("Chief Empowerment Officer") and website should be legible next to him. |
| **BG 3 — Autism Man** | `MAG-Zoom-BG-3-Autism-Man-v5.png` | **1:1 coaching sessions where you want to evoke superhero / empowerment energy for the client.** Elizabeth's framing: "Be thinking energy. What energy are you evoking with the Zoom background?" Use sparingly — this is the strong-emotion variant. |
| **BG 4 — Everyday Purple** | `MAG-Zoom-BG-4-Everyday-Purple-v5.png` | **Default everyday internal meetings, check-ins, recurring calls.** Minimal, non-distracting, just brand color + logo. |

## Event-only variant

| Background | File | Use for |
|---|---|---|
| **Blue Fortress Header** | `images/MAG Logo Blue and White Variants/Copy of MAG Header Blue Fortress .png` | **Events only** — Great Discovery workshops, seasonal events, speaking appearances. Elizabeth specifically directed this asset is reserved for event contexts and should not be used for regular coaching sessions. |

## Naming convention (so Rob knows what he's picking in Zoom's background menu)

When adding these to Zoom, name them:

- `MAG 1 — Full Logo (discovery, marketing)`
- `MAG 2 — Text Block (business meetings)`
- `MAG 3 — Autism Man (empowerment sessions)`
- `MAG 4 — Everyday Purple (default)`
- `MAG — Events Only (Blue Fortress)`

## How to install on Zoom

1. Open Zoom → Settings → Background & Effects → Virtual Backgrounds
2. Click the `+` icon → Add Image
3. Navigate to `C:\Users\seanl\Documents\Work\MAG Website Dev\images\zoom-backgrounds\MAG Zoom BG's v5\`
4. Add all 4 PNGs
5. Rename each per the naming convention above
6. Repeat with the Blue Fortress event variant

## If changes are needed

The source files are HTML, not images. Do not edit the PNGs directly — edit the HTML, then re-render:

```
cd "C:\Users\seanl\Documents\Work\MAG Website Dev"
node render-v5.js
```

This regenerates the PNGs from the HTML source. Keeps versions clean and iteration traceable.

## Design constraints recorded in Meeting 8

- Base color is **light purple** (matching site tokens `--color-mag-purple #D2CCFF` and `--color-mag-light-purple #F9F5FF`). Dark backgrounds obscure the MAG lettering and were retired after v4.
- MAG logo placement is either **upper-left** or **upper-right** (never bottom corners) because Rob tends to lean left at his desk and the logo would disappear. Over-the-"coach" placement on name blocks is also acceptable as a signature treatment.
- **No contact info on the background**. Website URL is acceptable; email and phone are not. Elizabeth: "They need you. Zoom isn't where that information goes."
- **Tagline typography** must be clearly legible at video-call size. No watermark-style vertical sidebars.
