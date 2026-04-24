# WordPress → `old.myautismgifts.com` Migration Runbook

> Needs Rob's verbal OK before step 3. Steps 1–2 are additive and reversible; step 3 is the first "point of no return" for the subdomain URL.

## Step 1 — Add DNS A record (IONOS Control Panel)

Tried via the IONOS MCP `update_dns_zone` tool: returned HTTP 400 regardless of payload shape. Do manually:

1. Log in to IONOS Control Panel → **Domains & SSL** → `myautismgifts.com` → **DNS**
2. Click **Add Record**
3. Fill in:
   - Type: `A`
   - Host name: `old` (IONOS will append `.myautismgifts.com` automatically)
   - Points to: `74.208.236.205`
   - TTL: `1 hour` (3600 seconds)
4. Save
5. Verify from your terminal:
   ```
   nslookup old.myautismgifts.com
   ```
   Should return `74.208.236.205` within 5–30 minutes.

## Step 2 — Assign `old.myautismgifts.com` to IONOS hosting

1. IONOS Control Panel → **Hosting** → your WordPress hosting package → **Domain Assignments**
2. Click **Assign another domain**
3. Select `old.myautismgifts.com`
4. Choose the destination folder: same as `myautismgifts.com` (the existing WP install)
5. Wait for SSL cert to provision automatically (IONOS issues a Let's Encrypt cert within ~10 min)

Quick check: `https://old.myautismgifts.com/` should load the WordPress site with a valid padlock. It might look visually broken (styles/images pointing at the apex URL) — that's expected and fixed in step 3.

## Step 3 — Point WordPress at the new URL (safest path)

The safest approach is to define the new URL as a PHP constant in `wp-config.php`. This overrides the database values without touching them — fully reversible by commenting out the constants.

Via WordPress MCP, the safest is to edit through File Manager (FileOrganizer plugin, which is active). Or via IONOS File Manager:

1. Navigate to the WP install root (usually `/clickandbuilds/MyAutismGifts/` or similar)
2. Open `wp-config.php` for editing
3. Add these two lines **above** the `/* That's all, stop editing! */` line:
   ```php
   define('WP_HOME',    'https://old.myautismgifts.com');
   define('WP_SITEURL', 'https://old.myautismgifts.com');
   ```
4. Save
5. Visit `https://old.myautismgifts.com/wp-admin/` — login should work, wp-admin should load cleanly

## Step 4 — Fix hard-coded URLs in content

Posts and widgets often contain `https://myautismgifts.com/...` hard-coded. The `wp-config.php` constants don't fix those. Use the **Better Search Replace** plugin (Rob — may need to install):

1. wp-admin → Plugins → Add New → search "Better Search Replace" → install and activate
2. Tools → Better Search Replace
3. Search: `https://myautismgifts.com`
4. Replace: `https://old.myautismgifts.com`
5. Tables: select all
6. **Run as dry run first** — confirms it would hit the right places
7. Uncheck "Run as dry run?" and run for real
8. Optional: also replace `http://myautismgifts.com` (no https) to catch any very old legacy posts

## Step 5 — Verify

- `https://old.myautismgifts.com/` — home page renders with correct styles/images
- `https://old.myautismgifts.com/wp-admin/` — admin loads, Rob can log in
- Post links on the home page click through to `old.myautismgifts.com/...`, not apex
- Browser DevTools Network tab: no requests to `myautismgifts.com/wp-content/...` (would indicate leftover hard-coded URL)

## Step 6 — Apex flip (future session — needs Rob's go-ahead)

When everything above is verified and Rob is satisfied:

1. Update apex A record `myautismgifts.com` → `75.2.60.5` (Netlify)
2. Update AAAA record too (Netlify IPv6 — confirm current value from Netlify dashboard)
3. Update `www.myautismgifts.com` A record → `75.2.60.5`
4. Wait ~5 min for propagation
5. Verify `https://myautismgifts.com/` now serves the Netlify static site
6. Mark MY-23 (WordPress wind-down) as ready — Rob cancels Elementor Pro + IONOS hosting subscription on his schedule

## Rollback plan

If step 3 breaks the site:
- Remove the two `define` lines from `wp-config.php` — WordPress returns to apex-URL behavior
- No DB changes, no data loss

If step 4 breaks content:
- Better Search Replace has an undo capability only if "Save changes" was not clicked. Otherwise: restore from UpdraftPlus backup (the UpdraftPlus plugin is active — take a fresh backup before step 4).
