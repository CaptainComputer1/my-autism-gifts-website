# MyAutismGifts.com
## Conversion Optimization & Action Plan
### Version 2.5 · April 8, 2026 (Full Meeting 7 transcript: DNS issue, email setup, Elementor update before cutover)
*Prepared by Sean Lawrence — MAG Web Development Project · MAG-2026-011 (26 tasks, $312) + Contract v2 Apr 2 2026 (36 tasks, $375)*

> 📌 **Billing structure (MAG-2026-011):** Section 1 Critical: 10 tasks × $12 = $120 · Section 2 High: 14 tasks × $12 = $168 · Section 3 Strategic: 2 tasks × $12 = $24 · **Total: $312**
> Consolidations: Tasks 3+12 merged (audience redefine + homepage segmentation = 1 billable task). Security hardening + emergency response + homepage spam fix = 1 billable task. All email sub-tasks = 1 billable task.
> 📌 **Billing structure (Contract v2, April 2, 2026):** Fixed price **$375** for all 36 tasks across 5 phases. Effective rate $25/hr (~15 hours). Payment due upon delivery and acceptance of Phase 5. See Section 5.

---

### Priority Key
- 🔴 **CRITICAL** — Do first. Site is losing bookings or has a serious vulnerability.
- 🟡 **HIGH** — Do this week. Significant impact on conversions or professionalism.
- 🟢 **STRATEGIC / LOW** — Important but can follow after critical and high items.

> ⚠️ **PROJECT DEADLINE: All Critical and High-priority items (1–21) must be complete by March 31, 2026.**

---

## Section 1 — Critical Fixes 🔴

These items are either losing active bookings right now, or exposing the site to security risk. Complete these before anything else — all must be done by March 31, 2026.

---

### 2. Update All WordPress Plugins Including Elementor Pro 🔴 CRITICAL ⚠️ ACTIVE XSS VULNERABILITY

- [ ] **The Problem:** WordPress plugins are out of date. **⚠️ IONOS SiteLock scan (March 28, 2026) confirmed Elementor Pro 3.27.4 has an actively exploitable HIGH severity Stored XSS vulnerability** (Elementor Pro ≤ 3.29.0, CVE: Authenticated Contributor+ XSS via `button_text` parameter). Updating Elementor Pro is a security emergency — not just maintenance. Target: 3.29.1 minimum, or latest stable (3.35.9 as of March 2026). Other plugins are also out of date.

- [X] Install Elementor MCP Server for Claude Desktop to access it for MAG site
- [X] **Ask Elizabeth how to log in** — current WordPress admin credentials don't work; Elizabeth may have updated them or know where the correct credentials are stored
- [X] Once logged in, take a full manual backup of the site before updating anything (coordinate with Item 6 — Four-Layer Backup System)
- [X] Elementor (free) updated successfully to **4.0.0** ✅
- [X] `elizabeth` and `rob_hodes` WordPress accounts confirmed as **legitimate** — created by Sean, March 30, 2026

**⚠️ Plugin Update Failure — "Download failed. Unauthorized" (March 30, 2026)**
> Both Elementor Pro and Essential Addons for Elementor Pro are failing to update with: *"Update failed: Download failed. Unauthorized"*
>
> **Root cause:** WordPress must authenticate with each plugin vendor's license server to download premium updates. If the license key is not activated on this specific WordPress installation, the vendor's download server returns HTTP 401 Unauthorized and the update fails. This is NOT a WordPress bug — it is the plugin vendor's license enforcement.
>
> **Why this likely happened:** The site was previously on a staging domain (`myautismgifts.live-website.com`). Elementor Pro and Essential Addons Pro licenses may have been activated on the staging domain and never transferred to the live domain `myautismgifts.com`. A license can typically only be active on one domain at a time.
>
> **Fix for Elementor Pro:**
> - [ ] In wp-admin go to **Elementor → License** in the left sidebar
> - [ ] If a license key is shown but the status is "inactive" or shows the old domain, click **Deactivate** then **Activate** to re-register it to `myautismgifts.com`
> - [ ] If no license key is present: log into **elementor.com → My Account → Subscriptions** to retrieve the key, then paste it into the License field
> - [ ] After activation, return to **Plugins → Elementor Pro → Update** — the download should succeed
> - [ ] Note: Elementor Pro is showing "Automatic update scheduled in 6 hours" — if license is re-connected, this auto-update may self-complete
>
> **Fix for Essential Addons for Elementor Pro:**
> - [ ] In wp-admin go to **Essential Addons → License** (or the EA Pro settings panel)
> - [ ] Retrieve the license key from **wpdeveloper.com → My Account → License Keys**
> - [ ] Enter the key, click **Activate License**, confirm it shows as active for `myautismgifts.com`
> - [ ] Then retry the plugin update
>
> **Before buying anything** — if a license has expired and renewal is required, confirm with Rob before purchasing. Elementor Pro ~$59/yr, Essential Addons Pro ~$39/yr.

- [ ] After resolving license issue: update Elementor Pro from 3.27.4 to 4.0.0 (latest stable) — **⚠️ Elementor recommends making a full backup first before this major version jump**
  - [ ] After updating Elementor Pro, check every page in the Elementor editor and site frontend to confirm nothing broke
  - [ ] If any layout breaks post-update, restore from backup and investigate before re-attempting
- [ ] Update Essential Addons for Elementor Pro from 5.8.5 to 6.7.11 after license is resolved
- [ ] Update all remaining plugins one at a time, checking the site after each update
- [ ] Document all plugins updated: plugin name, old version, new version, and date — for Rob's records

---

### 3. Redefine Site Audience (Adults) + Segment Homepage for Two Audiences 🔴 CRITICAL
> 💼 **Billing note (MAG-2026-011):** Tasks 3 and 12 are merged into ONE billable task at $12. All audience redefine work AND homepage segmentation are covered under this single line item.

- [ ] **The Problem:** The site currently implies a focus on children and families, which limits the addressable audience. Rob can coach any neurodivergent adult (autistic, ADHD, or otherwise) or any non-neurodivergent adult on any life skill — including budgeting, employment, and communication. The homepage also needs a clear two-path section so both audiences can self-identify.

> 🗣️ **Meeting 6 decision (March 21):** Use **"neurodivergent"** as the primary audience term throughout — this covers autistic individuals and those with ADHD. Mention "ADHD" explicitly alongside "neurodivergent" since not all ADHD people identify as neurodivergent. A Google Docs find-and-replace was begun during Meeting 6.

- [ ] Update all copy to address neurodivergent and non-neurodivergent adults seeking independence, employment, and personal growth — remove any copy that implies children or families of children
- [ ] Replace "autism" with "neurodivergent" and "ADHD and neurodivergent" throughout all audience-facing site copy
- [ ] Adjust hero section copy to reflect adult audience — prioritize authenticity and genuine voice, especially in the home page hero, prompting for maximum conversion
- [ ] Update navigation labels and page descriptions as needed
- [ ] Review and update all imagery to reflect adult audience (coordinate with Item 10)
- [ ] Ensure the audience shift is reflected in testimonial selection (see Item 10)
- [ ] **Homepage segmentation (merged from Task 12):** Create a clear two-path section on the homepage that lets visitors self-identify as either (1) a neurodivergent adult seeking independence/life skills, or (2) any adult wanting personal development (budgeting, communication, career growth)
  - [ ] Keyboard-navigable pathway cards with clear, descriptive link text
  - [ ] All color combinations meet WCAG AAA (7:1) contrast
  - [ ] Remove any imagery or copy implying children or families of children

---

### 4. Free Lead Magnet via The Great Discovery + Kit Email Opt-In 🔴 CRITICAL

- [ ] **The Problem:** There is no email capture mechanism anywhere on the site. Visitors who are interested but not ready to book have no way to stay connected, and Rob has no way to nurture them.

> ⚠️ **Important clarification (Meeting 3 & 4):** The assessment, Kit email opt-in, and nurture sequence shown during Meeting 3 belong to **RTU (Retail Therapy Unplugged)** — Sean demonstrated RTU's system as an example of what MAG should build. MAG does **not** currently have any of these. Everything in this item needs to be built from scratch for MAG.

- [X] Make new Kit account and connect Kit MCP server to Claude for MAG site
- [ ] Check whether Ionos includes lead magnet and email opt-in functionality — if yes, use it and do not pay for additional services
  - [ ] Assess whether Kit Free or Creator ($33/mo) plan, or IONOS Email Marketing Plus ($5/month) plan is better for desired MAG email functionality.
- [ ] If Ionos does not cover it, approach Ionos directly: ask firmly but professionally for a tailor-made offer for only the needed features, without upsells
- [ ] Deliver the free lead magnet through Rob's existing The Great Discovery (TGD) account
- [ ] Connect email opt-ins through Kit (formerly ConvertKit)
- [ ] Choose lead magnet format (quiz converts at 30–50%; PDF guide at 3–10%):
  - [ ] Option A: Quiz — e.g. "What are Your Strengths?" or "Discover Your Hidden Strengths" (relevant to any neurodivergent or non-neurodivergent adult)
  - [ ] Option B: Free downloadable guide — e.g. "5 Life Skills That Will Change How You Work and Connect"
- [ ] Build a nurture email sequence directing leads toward Rob's coaching programs
- [ ] After building our domain reputation with Kit for 2-3 weeks, change DMARC record on IONOS from p = none to p = quarantine and then p = reject.

---

### 5. Website Security Hardening 🔴 CRITICAL *(Wordfence: install LAST — see note at bottom of this section)*

- [ ] **The Problem:** Rob's WordPress + Elementor Pro site needs active security hardening to reduce the risk of spoofing, phishing, and other common attacks.

- [X] Research Reddit (r/WordPress, r/webhosting) for real-world recommendations — full Security Hardening Guide prepared (see Claude Project Meta)
- [X] Evaluate and choose a security tool — **Decision: Wordfence Free + Cloudflare Free ($0 total)**
  - [X] IONOS built-in security (ModSecurity WAF) — active but insufficient alone; no WordPress-level protection
    - [X] Assessed IONOS SiteLock Vulnerability Scan — see scan block below for results
    - [ ] Always re-run SiteLock scan after major plugin updates or security changes
  - [ ] Ask Elizabeth about SiteLock TrustSeal (deferred — Sean to ask Elizabeth separately)
  - [X] Jetpack Security — bloated, not recommended for a small site
  - [X] Wordfence ✅ — chosen; PHP-level WAF, malware scanner, 2FA, brute force protection, file integrity monitoring
  - [X] Sucuri free plugin — monitoring-only (no firewall or active protection); not sufficient
  - [X] UpdraftPlus — backup-only; zero security features
  - [X] Cloudflare Free ✅ — also chosen; edge-level WAF + DDoS protection; filters traffic before it reaches IONOS
  - [X] WP Cerber — identified as fallback if Wordfence + Elementor Pro conflicts cannot be resolved

> ⚠️ **WORDFENCE ORDER NOTE (March 30, 2026):** Wordfence has been causing IP lockouts that block all admin access. It is currently **deleted from the site**. Complete ALL other tasks in this section and in the task list first, then reinstall Wordfence as the very last step. Reinstalling before everything else is done risks locking you out again mid-work. See the Wordfence Reinstall block at the bottom of this section.

**Cloudflare — Post-Launch (do NOT set up before March 31):**
> ⚠️ **Cloudflare free tier requires changing IONOS nameservers to Cloudflare nameservers** — this migrates all DNS (including email) in one move. All DNS records (SPF, DKIM, DMARC) would need to be manually re-entered in Cloudflare before switching, or email breaks. Given the March 31 deadline and active email configuration underway, this is deferred until post-launch.
- [ ] **After launch:** Sign up for Cloudflare free account; manually copy all IONOS DNS records into Cloudflare first; then update nameservers in IONOS (Domains & SSL → DNS → change to Cloudflare nameservers); wait 48 hours for propagation; verify site and email still work; then enable Cloudflare WAF

**Wordfence Installation & Initial Configuration:**
- [X] Install Wordfence Free: Plugins → Add New → search "Wordfence Security" → Install → Activate → enter email + free license key
- [X] Optimize WAF: Wordfence → Firewall → "Manage WAF" → "Optimize Wordfence Firewall" → download .htaccess backup first → Continue
- [X] **⚠️ Leave WAF in Learning Mode for 1–2 weeks** while doing all normal Elementor editing — prevents 403 errors; switch to "Enabled and Protecting" only after the learning period ends
- [X] Configure scan: Wordfence → Scan → Scan Options → High Sensitivity; enable **Low Resource Scanning** (required for IONOS shared hosting); set Live Traffic to "Security Only" (full Live Traffic is too resource-intensive)
- [ ] Set brute force: 
    - [X] Lockout after 5 failures / 4-hour duration / count over 4 hours; 
    - [ ] Block usernames: `admin`, `administrator`, `test` (have to make sure Elizabeth wants to change her `admin` username first); 
    - [X] Enable leaked password protection

**Backdoor Account Audit (March 29-30, 2026):**
- [X] Discovered and deleted 6 attacker/unauthorized accounts during session:
  - [X] `admlnlx` (Administrator, fake email wordpresupport@myautismgifts.com, **logged in March 28 at 5:22am** — active attacker)
  - [X] `editor_aecbc5` (Administrator, fake email editor_aecbc5@myautismgifts.com, **created March 29 at 11:38pm while we worked** — active attacker)
  - [X] `adminbockup` (Administrator, adminbockup@wordpress.org — fake backup account)
  - [X] `adminbackup` (Subscriber, adminbackup@wordpress.org — fake backup account)
  - [X] `admin-test` (Administrator, test@test.com — unauthorized test account)
  - [X] `elizabeth` (Administrator, elizabethellison3@gmail.com — removed per Sean's instruction March 29)
- [X] Remaining legitimate accounts verified: `admin` (Rob/Elizabeth primary), `mcp-user` (API access), `sean_dev` (Sean)
- [ ] Ask if "admin" account is necessary either (check WordPress now for newest created accounts)
- [X] **Disabled "Anyone can register"** — Settings → General → unchecked by Sean, March 30, 2026
- [ ] Regenerate WordPress auth keys/salts in wp-config.php to invalidate any remaining attacker sessions
- [ ] ALWAYS call Elizabeth and then IONOS before changing admins.

**Install and Run Initial Scan:**
- [X] Run first scan: Wordfence → Scan → "Start New Scan"
- [ ] Review all Critical/High findings; use "View Differences" on flagged files; use "Repair File" to restore clean versions of modified core/plugin files

**Two-Factor Authentication (2FA):**
- [ ] Enable 2FA on all admin accounts via **Wordfence → Login Security** → scan QR code with Authy app (preferred — supports encrypted cloud backup; Google Authenticator also works)
- [ ] Download and save the 5 one-time backup recovery codes immediately in password manager or secure printed location
- [ ] Enforce 2FA for Administrator and Editor roles: Wordfence → Login Security → Settings → "Require 2FA for these roles"; grace period: 3 days
- [ ] Recovery if locked out: rename `/wp-content/plugins/wordfence/` to `wordfence-disabled` via IONOS File Manager (Webspace Explorer) to restore wp-login.php access

**Rename Default "admin" Username:**
- [ ] Users → Add New → create new admin with a unique, non-obvious username; use a temporary different email; set role to Administrator; generate strong password
- [ ] Log out; log in with new admin account; verify full dashboard access
- [ ] Users → All Users → hover "admin" → Delete → select "Attribute all content to:" new account → Confirm Deletion
- [ ] After switch: Elementor → Tools → Regenerate CSS; verify all theme builder conditions (headers, footers) remain active
- [ ] phpMyAdmin fallback (if UI fails): IONOS Dashboard → Hosting → Databases → Open Admin → wp_users table → edit user_login and user_nicename directly

**Enforce Strong Passwords:**
- [ ] Install Melapress Login Security plugin; configure: minimum 14 chars for admins, 12 for editors; require uppercase, lowercase, numbers, special characters
- [ ] Force immediate password reset for all users via plugin's one-click reset feature
- [ ] Audit all user accounts: Users → All Users — remove unnecessary accounts, downgrade over-privileged roles, investigate any unknown usernames or email addresses created around the time of the breach

**Scheduled Malware & File-Change Monitoring:**
- [ ] Confirm Wordfence scheduled scans are active: Wordfence → Scan → Scan Options → "Enable scheduled scanning" ON (Free: daily quick scan + full scan every 72 hours)
- [ ] Set up IONOS cron job for reliable scan scheduling: IONOS Control Panel → Hosting → Cron Jobs → Create → URL: `https://myautismgifts.com/wp-cron.php` → frequency: every 15 minutes
- [ ] Add `define('DISABLE_WP_CRON', true);` to wp-config.php above "That's all, stop editing!" to prevent duplicate execution
- [ ] Configure email alerts: Wordfence → All Options → set alert email; enable all alert types; Activity Report: Daily for first 30 days, then switch to Weekly
- [ ] Test email delivery: Wordfence → Tools → Diagnostics → "Send a test email from this WordPress server"

**Post-Breach Cleanup Verification (complete before marking Task 5 done):**
- [ ] Check wp-config.php for injected code: look for `@include`, `eval()`, `base64_decode()`, unknown `define()` statements, PHP comments with hex numbers (e.g. `/*69ac5*/`), or any code before `<?php` or after the closing config section
- [ ] Regenerate all WordPress auth keys/salts: replace the secret-key block in wp-config.php with fresh values from https://api.wordpress.org/secret-key/1.1/salt/ (this invalidates all existing login sessions)
- [ ] Check .htaccess for: conditional mobile redirect rules, redirect rules to unknown domains, base64-encoded strings, suspicious FilesMatch directives, hidden code far off the right margin — check ALL subdirectory .htaccess files as well
- [ ] Scan /wp-content/uploads/ for PHP files: there should be NONE — delete any .php, .php5, .phtml, or double-extension files (e.g. photo.jpg.php) immediately
- [ ] Check for attacker-created admin accounts via phpMyAdmin: `SELECT u.ID, u.user_login, u.user_email FROM wp_users u JOIN wp_usermeta um ON u.ID = um.user_id WHERE um.meta_key = 'wp_capabilities' AND um.meta_value LIKE '%administrator%'`
- [ ] Verify no remaining casino/poker content in database: `SELECT ID, post_title FROM wp_posts WHERE post_content LIKE '%casino%' OR post_title LIKE '%casino%'`
- [ ] Check wp_options for injected scripts: `SELECT option_name FROM wp_options WHERE option_value LIKE '%eval(%' OR option_value LIKE '%base64_decode%' OR option_value LIKE '%<iframe%'`
- [ ] Clean orphaned postmeta from deleted spam posts: `DELETE FROM wp_postmeta WHERE post_id NOT IN (SELECT ID FROM wp_posts)`
- [ ] Reinstall WordPress core files: Dashboard → Updates → "Re-install version X.X.X" (replaces /wp-admin/ + /wp-includes/ only; does NOT touch /wp-content/ or wp-config.php)
- [ ] Reinstall all plugins from clean sources (delete plugin directories via SFTP/File Manager; re-download from WP.org or vendor including Elementor Pro from your Elementor account)
- [ ] Run second-opinion external scan at https://sitecheck.sucuri.net; also check Google Search Console → Security Issues for any malware flags

**Additional WordPress Hardening (.htaccess & wp-config.php):**
- [ ] Disable XML-RPC (bots use it to bypass login rate limits): add to root .htaccess inside `<Files xmlrpc.php>` block with `Deny from all`; verify 403 at myautismgifts.com/xmlrpc.php
- [ ] Disable dashboard file editing: add `define('DISALLOW_FILE_EDIT', true);` to wp-config.php — removes Theme/Plugin Editor from dashboard
- [ ] Disable PHP execution in uploads directory: create .htaccess in /wp-content/uploads/ blocking all .php/.phtml/.php5 execution via FilesMatch
- [ ] Set correct file permissions via IONOS Webspace Explorer: directories → 755, files → 644, wp-config.php → 440
**Homepage Spam — Elementor Data Cache (outstanding as of March 30, 2026):**
> The injected `reisemeisterei.de` travel spam paragraph is still **rendering on the live homepage** despite: (1) post_content being cleaned in the database, and (2) Elementor CSS/Data Regeneration being run by Sean.
> **Root cause:** Elementor stores its own complete copy of the page layout as JSON in the `_elementor_data` postmeta field. This field is separate from `post_content` and is what Elementor actually renders from. CSS regeneration refreshes stylesheets only — it does NOT update the widget content stored in `_elementor_data`.
> **Fix required:** Open the homepage (ID 773) in the **Elementor visual editor**, locate the spam text widget containing the travel paragraph, delete or edit the widget directly, then click **Publish** to save the cleaned `_elementor_data` back to the database.
- [ ] **Open homepage in Elementor editor → find and delete the spam travel paragraph widget → Publish** — this will finally remove it from the live site

- [X] **DONE March 30** — All 6 security headers written to .htaccess: HSTS, X-Frame-Options (SAMEORIGIN), X-Content-Type-Options (nosniff), Referrer-Policy, Permissions-Policy, CSP (with unsafe-inline/unsafe-eval for Elementor). Backup saved as `.htaccess_backup_2026-03-30_01-05-20`
- [X] **DONE March 30** — XML-RPC blocked via .htaccess
- [X] **DONE March 30** — PHP execution in /wp-content/uploads/ blocked via .htaccess RewriteRule
- [ ] Add HTTP security headers to root .htaccess (Strict-Transport-Security, X-Frame-Options SAMEORIGIN, X-Content-Type-Options, Referrer-Policy, Content-Security-Policy) — **must include `unsafe-inline` and `unsafe-eval` for Elementor Pro**
- [X] Add `Permissions-Policy: camera=(), microphone=(), geolocation=()` header — restricts unused browser features; flagged by GroundedScan as missing
- [ ] Suppress Apache server header: add `ServerTokens Prod` and `ServerSignature Off` to Apache config (or ask IONOS support) — currently exposes "Apache" to attackers per GroundedScan
- [ ] Remove WordPress meta generator tag: add `remove_action('wp_head', 'wp_generator');` to theme's `functions.php` — currently exposes "WordPress 6.9.4" per GroundedScan
- [ ] Test headers at https://securityheaders.com — expect B+ grade (A+ requires CSP without unsafe-inline, which breaks Elementor)

> 🔍 **IONOS SiteLock Vulnerability Scan — March 28, 2026** (viewed March 30, 2026)
> Scan via IONOS SiteLock dashboard (secure.sitelock.com). 315 pages scanned for XSS and SQL injection.
> - ✅ PASS: XSS Issues Found: 0 · SQL Injection Issues Found: 0 · 315 pages clean
> - 🔴 **FAIL — 1 Platform Vulnerability (HIGH severity):**
>   - **Software:** Elementor Pro 3.27.4
>   - **Category:** XSS (Stored Cross-Site Scripting)
>   - **CVE:** Elementor Pro ≤ 3.29.0 — Authenticated (Contributor+) Stored XSS via the `button_text` parameter. Insufficient input sanitization allows authenticated attackers (Contributor-level+) to inject arbitrary scripts into pages, executing for every visitor.
>   - **Fix:** Update Elementor Pro to 3.29.1 or later — see Task 2 (already on list; this scan confirms it is an active, exploitable High severity vulnerability)
>   - **Screenshot saved at:** `G:\.shortcut-targets-by-id\...\MAG Documents\Reports\Security Reports\` (per Sean’s records)
> - [ ] **Re-run SiteLock scan after updating Elementor Pro** to confirm vulnerability resolved
> - [ ] Ask Elizabeth about SiteLock TrustSeal (separately deferred)

> 📊 **GroundedScan Security Report — March 28, 2026 — Score: 72/100 (C)**
> External scan by Paul Holder (Dyismo Holdings LLC) at paulholder.com. Full report at `G:\My Drive\Work\Work with Rob\MAG Documents\Reports\Security Reports\isitsafe-myautismgifts.com.pdf`
> - ✅ PASS: SSL/TLS valid, Mixed Content clean, Cookie Security clean, DKIM configured
> - ❌ FAIL: HSTS, Content-Security-Policy, X-Frame-Options, X-Content-Type-Options (all covered by .htaccess headers task above)
> - ⚠️ WARNING: Referrer-Policy, Permissions-Policy, SPF soft fail, DMARC p=none, Apache header exposure, WordPress generator tag
> - [ ] **Re-run GroundedScan after completing security headers and DNS hardening tasks** — target score A/90+

**🔒 Wordfence Reinstall — DO THIS LAST (after all other tasks complete):**
> This block is intentionally placed last. Wordfence caused repeated IP lockouts blocking all admin access. Complete every other task on the entire task list before touching this block.
- [ ] Log into wp-admin → Plugins → Add New → search "Wordfence Security" → Install → Activate
- [ ] Wordfence → Firewall → "Manage WAF" → "Optimize Wordfence Firewall" → keep in **Learning Mode for 1–2 weeks** (prevents 403 lockouts during normal admin activity)
- [ ] Configure brute force: lockout after 5 failures / 4-hour duration — but this time also whitelist your own IP address first: Wordfence → Firewall → All Options → Allowlisted IP addresses → add your IP
- [ ] Enable 2FA on admin accounts via Wordfence → Login Security → scan QR code with Authy app
- [ ] Set "Don't let WordPress reveal valid usernames" in Wordfence → All Options → Login Security
- [ ] Run first full scan: Wordfence → Scan → Start New Scan → review all Critical/High findings
- [ ] Switch WAF from Learning Mode to "Enabled and Protecting" only after 1–2 week learning period ends

**Documentation:**
- [ ] Document all security settings for Rob and Elizabeth's reference using the Security Documentation Template (available in the Security Hardening Guide in Claude Project Meta)

- [X] **🚨 Clean injected spam/hack content from the database** — the site database contained approximately 20 injected Russian/Turkish casino and poker posts (post IDs 1672–1911) — invisible on the front-end but harmful to SEO and containing malicious links. Evidence of a prior security breach:
  - [X] In WordPress admin → Posts → All Posts: identified and permanently deleted all spam/gambling posts
  - [ ] Run a full scan with the chosen security plugin to detect any remaining injected code or backdoors (see Post-Breach Cleanup Verification steps above)
  - [X] After cleanup, took a fresh UpdraftPlus backup (Layer 2) to capture the clean database state

---

### 6. Four-Layer Backup System (4-2-1 Rule) 🔴 CRITICAL

- [ ] **The Problem:** The site currently has no verified multi-layer backup. Per Elizabeth's recommendation, the site needs four independent backup layers: 4 copies of data, on 2 different media types, with 1 copy stored off-site.

**Layer 1 — Ionos Host-Level Backups (already active):**
- [X] Log in to Ionos dashboard and verify that automatic backups are running
- [X] Confirm the backup schedule and retention period
- [X] Document what is and isn't covered by Ionos backups
- [X] ⚠️ **The existing IONOS backup SQL file is dated April 2025 — almost one year old.** Verify in the IONOS Control Panel that daily automated backups are actually running and creating current snapshots.

**Layer 2 — UpdraftPlus Plugin (already installed and working ✅):**
- [X] **UpdraftPlus** is the primary scheduled backup — full database + plugins + themes + uploads, segmented for easy partial restores; already connected to Google Drive ("UpdraftPlus" folder in "My Drive")
- [ ] Notification alerts configured so both Sean and Rob are informed when backups complete or fail (make sure WP admin email is myautismgifts@gmail.com first)
- [X] Pre-Update Rule: run a manual backup before every Elementor Pro or plugin update
- [X] Confirm schedule is set: database daily, full files weekly
- [X] **⚠️ All-in-One WP Migration** (.wpress format) is also installed — do NOT use it for scheduled backups (redundant with UpdraftPlus and produces very large single files). Keep it installed for one-off migration/staging snapshots only; disable any scheduled backup it may have enabled
- [ ] UpdraftPlus backups can only be saved in the "My Drive" folder of Sean's Google Drive, and needs to be fixed with a new Google Drive shared MAG Work folder under myautismgifts@gmail.com, which everyone can access. Claude should work with my G Drive first for simplicity, and I could probably transfer this folder to Rob's G Drive account after I'm done developing.

**Layer 3 — Elementor Kit Export (periodic design insurance):**
- [X] Export the Elementor site kit (templates, global colors, fonts, site settings) after every major design session and store in the shared Google Drive backup folder with a date in the filename
- [X] **Important:** This is NOT a standalone full-site restore — it only preserves Elementor design data. Use together with Layer 2 (UpdraftPlus) for a complete restore. Think of it as insurance for your layouts and design system specifically.

**Layer 4 — External Hard Drive (housed with Sean):**
- [X] Sean researches and recommends an external hard drive and cable under $100 to Rob before purchase
- [ ] Rob purchases the recommended external hard drive and cable and provides both to Sean
- [ ] Sean configures regular daily backup exports to the drive, which is housed with Sean for ongoing use
- [ ] Both Sean and Rob will each maintain a copy of the site at all times
- [ ] Drive is returned to Rob only if this agreement is terminated (see Section 7 of contract)
- [ ] Ensure the drive is encrypted and stored in a safe, fireproof location

**Accessibility for Backup Interfaces:**
- [X] Confirm that the backup plugin's dashboard and any restore/notification interfaces meet accessibility standards for disabled and colorblind users
- [X] Ensure backup documentation and instructions are written in plain language accessible to all team members

---

### 7. Ensure HTTPS/SSL Works on All Devices 🔴 CRITICAL

- [X] Log in to the IONOS Control Panel and confirm that a valid SSL certificate is installed and active for `myautismgifts.com`
- [ ] **⚠️ SSL certificate expires in ~33 days from March 28, 2026 (approx. April 30, 2026)** — confirmed by GroundedScan. Verify IONOS auto-renewal is enabled, or manually renew before expiry to avoid the site going insecure. Check IONOS → Domains & SSL → SSL Certificates.
- [X] Verify that HTTP automatically redirects to HTTPS on all pages (check in WordPress Settings → General that both URLs use `https://`)
- [ ] Scan for mixed content issues — any page elements (images, scripts, stylesheets) still loading over `http://` will cause the secure padlock to fail on mobile
  - [ ] Use a browser console or tool like WhyNoPadlock.com to identify all mixed content
  - [X] Update all hardcoded `http://` resource URLs to `https://` or relative URLs
- [X] Check that IONOS has HTTPS/SSL forced on (some IONOS plans require enabling this in the control panel separately)
- [X] Test the site on multiple mobile devices and browsers (iOS Safari, Android Chrome) after each fix
- [X] Confirm the padlock icon appears correctly on all tested devices before marking complete

---

### 8. Find cheaper, better alternative to $30/month IONOS rankingCoach Advanced for MAG SEO 🔴 CRITICAL

> 📊 **Research completed March 30, 2026** — See full analysis below.

**Decision: Cancel rankingCoach Advanced. Replace with Rank Math Free + Google Search Console (total: $0/month). Saves $360/year.**

**Why rankingCoach is overpriced for MAG:**
> rankingCoach Advanced provides only 25 tracked keywords, 5 competitors, and surface-level SEO task lists. Consumer reviews average 2.5/5 on Sitejabber, with frequent complaints about auto-renewal traps and generic advice. The IONOS contract requires cancellation before the renewal date or it auto-renews for another month.

**Recommended replacement stack:**

| Tool | Cost | Replaces |
|------|------|----------|
| Rank Math SEO (free WordPress plugin) | $0 | On-page optimization, sitemaps, schema, redirects, 404 monitoring |
| Google Search Console | $0 | Search performance, keyword data, indexing, Core Web Vitals |
| Google Analytics 4 | $0 | Traffic analysis, conversions |
| Ubersuggest Chrome Extension | $0 | Quick keyword research (~3 lookups/day free) |
| **TOTAL** | **$0/month** | **Saves $360/year** |

> Optional upgrade: **Rank Math Pro at ~$8/month** adds 500 tracked keywords (vs rankingCoach’s 25) and AI content suggestions — still saves $264/year vs rankingCoach.

**Why Rank Math over Yoast:**
- 5 focus keywords per page (Yoast free: only 1)
- Built-in redirect manager (Yoast: Premium only, $119/yr)
- 18 schema markup types, 404 monitoring, Google Search Console dashboard — all free
- **Full Elementor Pro integration**: SEO settings appear inside the Elementor editor directly
- One-click migration wizard from any existing SEO plugin
- Beginner-friendly "Easy" mode setup wizard

**Migration steps (Rob or Sean, ~45 minutes):**
- [ ] **Step 1 — Set up Google Search Console (10 min):** Go to search.google.com/search-console, add `myautismgifts.com` as a property, verify via HTML tag method (Rank Math will paste it automatically)
- [ ] **Step 2 — Install Rank Math Free (15 min):** wp-admin → Plugins → Add New → search "Rank Math SEO" → Install → Activate → run setup wizard in Easy mode → connect Google account → link Search Console
- [ ] **Step 3 — Install Google Analytics 4 (10 min):** create GA4 property at analytics.google.com if not already running; Rank Math wizard can handle the connection
- [ ] **Step 4 — Install Ubersuggest Chrome extension (2 min):** search Chrome Web Store → Add to Chrome → free keyword data overlaid on Google results
- [ ] **Step 5 — Cancel rankingCoach (10 min):** ⚠️ Cancellation must be submitted before contract renewal date of 4/17/2026 to avoid auto-renewing for another 12 months. Cancel in IONOS Control Panel → Contracts → rankingCoach → Cancel, OR contact IONOS support. Rob must do this himself as the account holder.
- [ ] **After cancellation confirmed:** document the savings ($30/month → $0 or $8/month) for Rob’s records

## Section 2 — High-Priority Improvements 🟡

Complete these alongside the critical fixes — all must be done by March 31, 2026.

---

### 9. Configure MAG Email Addresses — Test, Forward, and Keep Copy 🟡 HIGH

- [ ] **The Problem:** Both `info@myautismgifts.com` and `rob@myautismgifts.com` need to be tested against their corresponding site page buttons, confirmed as active, configured to forward all incoming mail to `myautismgifts@gmail.com`, AND set to retain a copy on the IONOS server simultaneously. Elizabeth has confirmed that IONOS supports this "keep copy + forward" setting.

> 📋 **For complete step-by-step instructions see the Email Configuration Guide in Claude Project Meta.**

**9a. Verify Both IONOS Mailboxes Are Active:**
- [X] Log in to IONOS Control Panel (my.ionos.com) → Email & Office → confirm both `info@myautismgifts.com` and `rob@myautismgifts.com` are active mailboxes (not forwarding-only)
- [ ] Receive mailbox password from Rob for `info@myautismgifts.com` at Bitwarden
- [ ] Send an inbound test to each address from a completely external account; log in to IONOS webmail (mail.ionos.com) with each address's credentials to confirm receipt
- [ ] Send an outbound test from IONOS webmail for each address; confirm it arrives externally
- [X] Confirm the footer contact email link points to the correct address (see Item 1)

**9b. Configure "Keep Copy + Forward" via IONOS Webmail (NOT Control Panel):**
> ⚠️ **Use the Webmail Auto Forward method — NOT the Control Panel.** Only the Webmail method has an explicit "Keep a copy" checkbox. Control Panel forwarding does NOT reliably retain copies.

- [X] IONOS Control Panel forwarding from both IONOS addresses to myautismgifts@gmail.com was set up — **however, this may not retain copies.** Verify and redo via Webmail method below for both addresses.
- [ ] **For info@myautismgifts.com:** Log in to mail.ionos.com with info@ credentials → ⚙️ Settings → All Settings → Mail → Rules → **Auto Forward** → toggle ON → enter `myautismgifts@gmail.com` → ✅ check **"Keep a copy of the message"** → Save
- [ ] **For rob@myautismgifts.com:** Log out; log in to mail.ionos.com with rob@ credentials → repeat identical steps → ✅ check **"Keep a copy of the message"** → Save
- [ ] Verify settings saved correctly for both addresses (revisit the Auto Forward panel after saving)
- [ ] Send test email to each address; confirm: (1) arrives in `myautismgifts@gmail.com` AND (2) a copy remains in IONOS webmail inbox — wait 24 hours, then recheck IONOS to confirm the copy was not auto-deleted
- [X] Ensure the footer contact email link (fixed in Item 1) points to info@myautismgifts.com

**9c. Gmail — Prevent Forwarded Emails from Going to Spam:**
- [X] In Gmail: Settings (⚙️) → Search options → "To:" field: `info@myautismgifts.com` → Create filter → check "Never send it to Spam" ✅ + "Categorize as: Primary" ✅ → Create filter
- [X] Repeat for `rob@myautismgifts.com`
- [X] Check Gmail Spam folder during first 1–2 weeks; manually mark any legitimate forwarded mail as "Not spam"

**9d. Gmail "Send Mail As" Aliases (reply from info@ and rob@ inside Gmail):**
- [ ] Gmail → Settings → Accounts and Import → "Send mail as" → "Add another email address"
  - Name: `My Autism Gifts` | Email: `info@myautismgifts.com` | ✅ Treat as alias
  - SMTP Server: `smtp.ionos.com` | Port: `465` | SSL | Username: `info@myautismgifts.com` | Password: IONOS mailbox password
- [ ] Click "Add Account" → verify confirmation email arrives in Gmail (forwarded from IONOS) → click link or enter code
- [ ] Repeat for `rob@myautismgifts.com` (same SMTP settings, rob@'s mailbox password)
- [ ] Settings → Accounts and Import → set `info@myautismgifts.com` as default → select **"Reply from the same address the message was sent to"**

**9e. WordPress Email (WP Mail SMTP):**
- [X] WP Mail SMTP plugin configured: FROM = `info@myautismgifts.com`, SMTP Host = `smtp.ionos.com`, Port 465, SSL, authenticated with info@'s IONOS mailbox password
  > ℹ️ **rob@myautismgifts.com does NOT need WP Mail SMTP setup.** This plugin handles WordPress outgoing system mail only (form submissions, admin notifications). IONOS requires the FROM address to be @myautismgifts.com — Gmail FROM addresses are rejected since Jan 2024. Rob replying from rob@ is handled via the Gmail "Send mail as" alias above (Step 8d), not through WordPress.
- [X] **Test WP Mail SMTP:** WordPress admin → WP Mail SMTP → Tools → Email Test → send to `myautismgifts@gmail.com` → confirm receipt
- [ ] If test fails: check IONOS mailbox password hasn't changed; verify smtp.ionos.com port 465 SSL settings; confirm FROM address is exactly `info@myautismgifts.com` (IONOS rejects any FROM not belonging to the domain)
- [ ] Update WordPress admin email if needed: Settings → General → Administration Email Address → change to `myautismgifts@gmail.com` → confirm via verification email (need help logging into WP site from mag@gmail Chrome profile browser first)
- [ ] Verify contact form notifications are going to the correct recipient and using the IONOS SMTP sending path

**9f. Email DNS Records (SPF, DKIM, DMARC):**
- [X] SPF record added to IONOS DNS: `v=spf1 include:_spf.perfora.net include:_spf.kundenserver.de ~all`
- [X] **Upgrade SPF from soft fail to hard fail:** change `~all` to `-all` in the IONOS DNS TXT record — currently flagged as WARNING by GroundedScan; soft fail means spoofed emails are flagged but not rejected. Only do this after confirming all legitimate sending sources are included in the SPF record.
- [X] DKIM CNAME records added to IONOS DNS (3 records: s1-ionos._domainkey, s2-ionos._domainkey, s42582890._domainkey)
- [X] DMARC record added to IONOS DNS: `v=DMARC1;p=none;rua=mailto:myautismgifts@gmail.com`
- [ ] **Upgrade DMARC from monitoring-only to enforcement:** after 2–4 weeks of monitoring and Kit email reputation building, change `p=none` to `p=quarantine` (moves spoofed emails to spam) — flagged as WARNING by GroundedScan; `p=none` blocks nothing. Eventually upgrade to `p=reject` once deliverability is confirmed stable.

**9g. Spam Filtering:**
- [X] Add Gmail "Never send to Spam" filters (Step 8c above covers this for forwarded mail)
- [ ] In IONOS webmail (OX App Suite) → Settings → Mail → Rules: create rules to move obvious spam (like from passport-to-paradise@mail.beehiiv.com) to Junk folder for each mailbox

---

### 10. Rewrite the Hero Headline 🟡 HIGH

- [ ] **The Problem:** Current headline — "Embrace Your Diversity Unleash Your Brilliance, Achieve Boldly" — fails the 5-second clarity test. Missing punctuation adds confusion. Visitors cannot immediately tell what Rob does, who it's for, or what outcome to expect.

- [ ] Draft 3 candidate headlines that are specific, adult-audience-focused, and immediately qualifying
- [ ] Test headline with Rob and Elizabeth before publishing
- [ ] Update hero section with approved headline
- [ ] Ensure hero sub-headline or supporting copy reinforces the adult audience (see Item 3)
- [ ] Subtly convince the audience of how Rob can help them — keep wording impactful with as few words as possible

> **Benchmark:** ASD Life Coaches leads with "Specialized coaching for autistic adults and anyone who identifies as neurodivergent" — plain, specific, and immediately qualifying.

> 🗣️ **Meeting 6 note (March 21):** Rob asked about adding an exclamation point to "Welcome to My Autism Gifts!" — decision was to **leave it off for now** and A/B test it later if sign-ups are slow. The more professional/serious tone without it was preferred as a starting point.

---

### 11. Rob's Personal Story as the Central Trust Signal 🟡 HIGH

- [ ] **The Problem:** Rob's lived experience as a neurodivergent adult — growing from a shy, nonverbal introvert to a confident speaker, homeowner, and employed professional with 41 years of lived experience — is buried in a single paragraph. This is the site's #1 differentiator.

- [ ] Have his headline be "Transforming Challenges Into Opportunities"
- [ ] Move Rob's story to a prominent position in the homepage hero section
- [X] Feature it at the top of the About page
- [X] Connect the story to the adult audience: "I've been where you are. Here's what's possible."
- [ ] Don't change Rob's story — liven it up and make it inspiring and aspirational
    - [X] Specify that Rob unlimits people and assists them in removing negative unproductive labels that BOTH they put on themselves and society put on them and they accepted that label.
- [ ] Coordinate with Item 17 (credentials as accomplishments)

---

### 12. Testimonials: Remove Zak's, Add Neurodivergent-Specific, Use Carousel 🟡 HIGH

- [ ] **The Problem:** Only 1 of the 8 current testimonials explicitly mentions autism. Generic coaching endorsements do not resonate with the target adult audience.

- [X] Remove Zak's testimonial from the site
- [ ] Rob uploads images and testimonials to the shared Google Drive folder
- [ ] Sean retrieves and integrates the new materials from Google Drive
- [X] Replace the static testimonial section with an Elementor slider/carousel widget
- [ ] Add pleasant sounds on arrow button clicks
- [ ] Select and display 3+ testimonials that explicitly mention neurodivergent coaching outcomes (autism, ADHD, independence, employment, or budgeting)
- [ ] Rob to add ADHD-specific testimonials in addition to autism ones (noted Meeting 6)
- [ ] Ensure testimonial images are accessible (proper alt text, sufficient contrast on overlay text)
- [ ] Coordinate with Item 3 (adults-only audience): ensure all displayed testimonials reflect adult clients

---

### 13. Segment Homepage for Two Adult Audiences 🟡 HIGH
> ✅ **MERGED INTO TASK 3** (MAG-2026-011 consolidation) — all work and billing for homepage segmentation is now tracked under Task 3. This section kept for reference only.: (1) neurodivergent adults seeking independence and life skills, and (2) any adult wanting to develop life skills such as budgeting, communication, or career growth. Neither audience feels fully guided.

- [ ] Create a clear two-path section on the homepage that lets visitors self-identify and reach relevant content
- [ ] Remove any imagery, copy, or navigation that implies the site is for children or families of children (coordinate with Item 3)
- [ ] Ensure the two audience pathways meet WCAG accessibility standards:
  - [ ] Sufficient color contrast on buttons and labels (minimum 4.5:1, target 7:1)
  - [ ] Keyboard-navigable pathway cards
  - [ ] Clear, descriptive link text (not just "Learn More")

---

### 14. Restore Scheduling Tool 🟡 HIGH

> **Status:** 🔴 To Do
> **Updated:** March 31, 2026
> **Context:** The Services page package boxes currently link to individual Calendly booking
> pages (calendly.com/myautismgifts/...) which handle scheduling + Stripe payment collection.
> Rob wants to evaluate and migrate to a cheaper or free Calendly alternative.

---

## Background

Rob's current booking flow:
1. Client clicks a package box on the Services page (/services/)
2. Redirected to a Calendly event page (separate URL per package)
3. Client picks date/time, enters name/email, chooses Zoom or phone, answers prep question
4. Pays via Stripe at checkout ($75 / $130 / $200 / $480)
5. Booking confirmed, both parties receive confirmation

Calendly **requires a paid plan ($10–15/month)** to accept Stripe payments. This is an
ongoing recurring cost that can be eliminated.

---

## Tool Decision

### Recommended: TidyCal Individual Plan — $29 one-time
- Rob has confirmed willingness to pay this amount
- Richard (trusted contact) uses and recommends TidyCal
- Replaces $10–15/month Calendly with a one-time $29 fee — pays for itself in 2–3 months
- **Sign up at:** https://tidycal.com (Individual Plan at https://tidycal.com/pricing)

**Key features matching current Calendly setup:**
- [ ] Paid bookings via Stripe and PayPal
- [ ] Auto-create Zoom/Google Meet/Teams links
- [ ] Custom booking form questions (for prep question)
- [ ] Custom email and SMS reminders
- [ ] Group bookings and guest invites
- [ ] Up to 10 calendar connections
- [ ] Manual booking approvals (optional)
- [ ] Embeddable on WordPress

### Free Alternative: Cal.com
- Completely free for 1 user, forever
- Includes Stripe + PayPal payments on the free plan (unlike most tools)
- Unlimited event types
- Zoom/Meet auto-links, custom questions, email notifications
- More setup complexity than TidyCal but $0 cost
- **Sign up at:** https://cal.com

---

## Implementation Steps

### Phase 1: Account Setup
- [ ] Purchase TidyCal Individual Plan at https://tidycal.com/pricing ($29 one-time)
      *(or create free Cal.com account if Rob prefers $0 option)*
- [ ] Connect Rob's Google Calendar to TidyCal
- [ ] Connect Stripe account to TidyCal for payment processing
- [ ] Connect Zoom account for auto-link generation

### Phase 2: Recreate the 4 Event Types
Create one booking type per package, matching current Calendly setup:

- [ ] **1 Session/Month** — 55 min, $75, Zoom or Phone, prep question
- [ ] **2 Sessions/Month** — 55 min, $130, Zoom or Phone, prep question
- [ ] **4 Sessions/Month** — 55 min, $200, Zoom or Phone, prep question
- [ ] **VIP 3-Month Package** — 55 min, $480, Zoom or Phone, prep question

For each event type, configure:
- [ ] Duration: 55 minutes
- [ ] Price: set correct amount and connect to Stripe
- [ ] Location: offer Zoom (auto-link) and Phone call options
- [ ] Custom question: "Please share anything that will help prepare for our meeting."
- [ ] Confirmation email with Zoom link or call-in details
- [ ] Reminder emails (24hr and 1hr before session)

### Phase 3: Update WordPress Services Page
- [ ] Get new TidyCal booking URLs for each of the 4 event types
- [ ] Update the 4 package boxes on /services/ to link to new TidyCal URLs
      (replacing old calendly.com/myautismgifts/... links)
- [ ] Test each link end-to-end: click box → booking page → payment → confirmation
- [ ] Verify Stripe payment is received in Rob's Stripe dashboard

### Phase 4: Cleanup
- [ ] Verify no active/upcoming Calendly bookings before cancelling
- [ ] Cancel Calendly paid subscription (saves $10–15/month going forward)
- [ ] Update any other places the Calendly links appear (email signatures, Connect page, etc.)
- [ ] Note new booking URLs in CLAUDE.md for future reference
- [ ] Ensure the embedded scheduler is fully keyboard-navigable and screen-reader compatible

---

## Pricing Summary

| Option | Upfront | Monthly | Year 1 Total | Year 2+ Total |
|--------|---------|---------|--------------|---------------|
| Calendly Standard (current) | $0 | $10–15 | $120–180 | $120–180/yr |
| **TidyCal Individual** | **$29** | **$0** | **$29** | **$0/yr** |
| Cal.com Free | $0 | $0 | $0 | $0/yr |

**TidyCal savings vs. Calendly:** ~$91–151 in Year 1, ~$120–180/year thereafter.

---

## Notes
- Stripe transaction fees (2.9% + $0.30/transaction) apply regardless of which scheduling tool is used — this is Stripe's fee, not Calendly's
- TidyCal's Individual plan supports up to 10 calendar connections — more than enough
- Cal.com is open-source and self-hostable if Rob ever wants full control
- Both TidyCal and Cal.com pages can be embedded directly into WordPress pages as alternatives to external redirect links

---

### 15. Apply New MAG Logo with Animation and Brand Colors Throughout 🟡 HIGH

- [ ] **The Problem:** The updated butterfly MAG logo is not yet applied to the live site header with animation, and brand colors are not consistently applied across all pages.

- [X] Place the new butterfly MAG logo in the site header (top left) with an animation that moves in from the side
- [X] Also place the butterfly MAG logo as a favicon for the site
- [ ] Ensure the animation is smooth, subtle, and does not cause accessibility issues (respects `prefers-reduced-motion`)
- [X] Ask Rob and Elizabeth how to access the header menu through the Elementor editor before making header changes, such as adding the "Consultation" page to it, just as I have to the footer
- [X] Apply the MAG brand color palette (cyan/turquoise, gold, purple) consistently to:
  - [X] Header
  - [X] Buttons
  - [X] Headings and section titles
  - [X] Backgrounds and accent areas
  - [X] Navigation links
- [X] Verify all brand colors meet WCAG AA minimum contrast (4.5:1 for normal text, 3:1 for large text) — target AAA (7:1) throughout
- [ ] Test all color combinations for colorblind accessibility (deuteranopia, protanopia, tritanopia)
- [ ] A library of autistic tips photos and videos will be developed and added incrementally
- [ ] Make "MAG" title smaller in header on Desktop and Tablet, and appropriately sized on Phone — use Elementor breakpoints

---

### 16. Remove Empty White Blocks + Improve Site Backgrounds and Header Styling 🟡 HIGH

- [ ] **The Problem:** The current site backgrounds are disjointed and excessively white. There are empty white blocks that add no value. The header needs specific brand styling.

**16a. Remove empty white blocks and draft pages:**
- [ ] Find and remove all empty or placeholder blocks that don't contribute to the site (use Elementor Navigator Ctrl+I)
- [X] Delete the empty Video widget or fix its missing URL — this is causing the large white block on the page
- [X] Identify and remove any draft or incomplete pages that aren't yet ready for visitors and don't serve a current purpose

**16b. Improve backgrounds, brand colors, and header styling:**
- [X] Make the site header background the same purple as the MAG logo
- [X] Add purple hover rectangles behind all header navigation menu items on hover
- [X] Apply cohesive background colors or subtle textures using the brand palette to all page sections
- [X] Reduce harsh white-on-white section breaks and ensure visual flow from one section to the next
- [ ] Correct formatting and site title sizes on all screen sizes (phone, tablet, PC, Mac) using CSS breakpoints — do not test on every physical device (not cost-effective); breakpoints cover this
- [ ] **Accessibility requirements for backgrounds:**
  - [ ] All background/foreground color combinations must meet WCAG AAA contrast (minimum 7:1 for body text)
  - [X] Target WCAG AAA (7:1) for primary text throughout the site
  - [ ] Never rely on color alone to communicate meaning — pair color with text or iconography
  - [ ] Avoid patterns or textures that could trigger visual discomfort or photosensitivity issues
  - [ ] Test with a colorblind simulator (e.g., Coblis or Chrome DevTools vision deficiency emulator)

---

### 17. Replace Images with AI-Enhanced Versions 🟡 HIGH

- [X] **The Problem:** All current images, including Rob's profile photo, need to be replaced with cleaner, AI-enhanced versions. The hero image is a WhatsApp-exported photograph.

- [X] Use AI enhancement tools to improve all site photos (smooth, sharpen, enhance)
- [X] On the About Us page: remove background from Rob's photo and address the washed-out quality (doorknob visible on shoulder), as well as for other photos of Rob
- [ ] Apply the same approach to all testimonial photos and hero imagery
- [ ] Request additional images from Rob via Google Drive if more are needed for any section
- [ ] **Accessibility requirements for images:**
  - [X] Write descriptive alt text for every meaningful image on the site
  - [ ] Use empty alt text (`alt=""`) for purely decorative images so screen readers skip them
  - [ ] Ensure all text overlaid on images meets minimum 7:1 contrast ratio
  - [ ] Avoid using images of text — use real HTML text instead
  - [ ] Provide captions or transcripts for any video content added to the tips library

---

### 18. Update Site Footer 🟡 HIGH

- [X] Update footer copyright text to read: **© 2026 My Autism Gifts. Designed and Powered by Sean Lawrence**
- [X] Replace the footer logo with the current butterfly MAG logo
- [X] Improve footer background color or text color so all content is clearly legible
- [X] Verify the footer appears correctly on all pages (desktop and mobile)
- [X] Ensure footer text meets minimum contrast against its background color (WCAG AA minimum 4.5:1)
- [X] Include accessible links in the footer (Privacy Policy, Contact) with descriptive link text

---

### 19. Rob's Credentials as Accomplishments 🟡 HIGH

- [ ] **The Problem:** Rob's credentials are not about formal certifications — they are the real outcomes he has achieved and the real people he has helped. These should be displayed as powerful social proof, not hidden in body copy.

- [ ] Highlight accomplishments: employment achieved, independence gained, life skills developed by clients
- [X] Feature "41 years of coaching experience" as a prominent statistic, not buried in body text
- [ ] Don't change Rob's story — liven it up, make it inspirational, and encourage visitors to be the fullest version of themselves
- [ ] Coordinate with Item 9 (personal story as trust signal)

---

### 20. Refund and No-Show Policy 🟡 HIGH

- [ ] **The Problem:** There is no clearly published policy for refunds or no-shows. This creates ambiguity for clients and potential disputes for Rob.

- [ ] Agree with Rob on the refund window: determine what "X amount of time" means after the program starts before refunds are no longer owed
- [ ] Define the no-show penalty fee (extra charge for missed sessions without notice)
- [ ] Write and display the policy clearly on the booking/pricing page
- [ ] Ensure the policy is written in plain language and easy to find before booking

---

### 21. Revise Services Page and Evaluate Packages Page 🟡 HIGH

- [ ] **The Problem:** The Services page needs updated copy and corrected button links for the live site. A separate "Packages" page exists that may be redundant — this needs to be evaluated and resolved before launch.

> 🗣️ **Meeting 6 decision (March 21):** Rob and Elizabeth confirmed — **merge the Packages page content into the Services page, then delete the Packages page.** The Services page already has a free consult link at the bottom; two separate pages are redundant.

- [ ] Improve the Services page headline to be clearer, more compelling, and adult-audience-focused
- [X] Update all button texts on the Services page to reflect the new naming conventions (e.g. "Enroll Now")
  - [ ] "Let's Get Started" and "Enroll Now" should go to "Packages" section of "Services" page (and not have the header cover part of it)
  - [X] "Consultation" should go to "Consultation" page
- [X] Ensure all button and navigation links on the Services page point to the correct live site pages (no .live-website URLs)
- [X] Redirect all links that point to "Packages" to the "Services" page instead, merge the Packages page content into the Services page, then delete the Packages page
- [ ] Ensure all revised pages are accessible (contrast, alt text, keyboard navigation)

---

### 22. Social Media Links — Post External Links to Site 🟡 HIGH

> 💼 **BILLABLE** — Placing external links (TGD link, any other links from the shared Google Drive) on the website is billable time per contract Section 4.1: *"Any external links to be posted on the website will be placed in the shared Google Drive and discussed for time compensation."* LinkedIn/Clubhouse posting is Rob's own responsibility at no charge to Sean.

- [ ] **⚠️ Do not share the website URL until the site is fully complete and approved by Rob. Social media links are the final step before delivery.**

**21a. Do not share the website link anywhere until the site is fully complete and Rob has approved it.**
- [ ] Hold off on distributing the website URL across all platforms until the site is complete and Rob has signed off

**21b. LinkedIn and Clubhouse — Elizabeth handles the link handoff:**
- [ ] Elizabeth will provide Rob with the website link to post on his own LinkedIn and Clubhouse profiles
- [ ] Sean does not need to manage posting on these platforms — Rob will add the link himself once Elizabeth sends it
- [ ] Rob's Clubhouse group meetings remain on the first Monday of every month

**21c. The Great Discovery (TGD) — direction reversed:**
- [ ] Retrieve the TGD link from the shared Google Drive (Elizabeth will place it there) and embed it on the MAG website
- [ ] This work is billable per contract Section 4.1 — log time and include on invoice
- [ ] Note: Rob has two other sites in his TGD account for holding special events; Sean will not be managing those

**21d. Final delivery — best version for Rob's review:**
- [ ] By March 31, 2026, have the best possible version of the website ready for Rob to review
- [ ] Rob will then submit the website to The Great Discovery's review process to get it listed/approved on the platform
- [ ] Sean's job: complete the site by March 31. Rob's job: review it and initiate TGD's review process.

---

## Section 3 — Strategic & Lower-Priority Improvements 🟢

These items improve long-term growth and performance but can follow after the critical and high-priority items are complete.

---

### 23. Restructure Pricing with Value Framing 🟢 STRATEGIC

- [ ] **The Problem:** Current pricing ($75/session → $40/session VIP) is well below the market benchmark of $145–$225/hour for specialized autism coaching. The pricing is also presented as a plain list without value framing, comparison, or objection-handling.

> 🗣️ **Meeting 6 note (March 21):** Keep pricing low at launch to gather data, testimonials, and analytics. Once Rob has clients and social proof, pricing can increase. Elizabeth compared it to top coaches who start at $35 for volume.

- [ ] Position the VIP package as the primary recommendation
- [ ] Frame per-session options as introductory entry points
- [ ] Add a "Most Popular" or "Best Value" badge to the recommended tier
- [ ] Add a "Why this investment?" paragraph anchoring the price against the real cost of unaddressed challenges (lost employment, ongoing dependency)
- [ ] Add a satisfaction guarantee or refund promise (coordinate with Item 18)

---

### 24. General Website Maintenance & Content Updates 🟢 ONGOING

- [ ] After the initial project scope is complete, all ongoing maintenance, updates, and content additions will be handled as directed by Rob
- [ ] Before beginning any maintenance work, Sean will submit an itemized list of tasks, estimated time, and cost to Rob for written approval
- [ ] No work under this item begins without Rob's written sign-off on the estimate
- [ ] Ongoing work billed at $20.00/hour per contract terms, invoiced every Sunday via Zelle
- [ ] A/B test different design choices

---

## Section 4 — Deferred Improvements 🟢

These items may be helpful later but can follow after the initial launch of the MAG website.

---

### 25. Build Pre-Templated Pages for Different Events 🟢 LOW

- [ ] Build reusable Elementor page templates for specific events and occasions (this is one reason Rob should purchase the Advanced Elementor plan at $99/yr — it covers 3 sites, allowing pre-templated event landing pages that stay unpublished until needed)
- [ ] Build these incrementally as Rob's event calendar develops
- [ ] Ensure all event templates meet accessibility standards (color contrast, keyboard navigation, alt text)

---

### 26. EQ3C Framework — On Hold Pending Shane's Approval 🚫

> 🚫 **Do NOT incorporate the EQ3C Goal Achievement Framework into any website content without first getting explicit written approval from Shane.** This was flagged by Elizabeth in Meeting 6 (March 21) — EQ3C is Rob's proprietary methodology and incorporating it into the site requires Shane's sign-off. This item is on hold until that approval is obtained.

- [ ] Obtain written approval from Shane before adding any EQ3C content to the site
- [ ] Once approved, discuss with Rob how to incorporate EQ3C into the site's coaching methodology section

---


---

## Section 5 — Netlify Website Migration

> 🚨 **ACTIVE BLOCKER (Meeting 7, April 8, 2026):** DNS transfer from WordPress IP to Netlify IP is currently experiencing an issue. See **Task 38** — resolve before any other Phase 5 work. 🌐
### Contract v2 · April 2, 2026 · Fixed Price $375 · 36 Tasks Across 5 Phases

Tracks the static HTML/CSS/JS site build and WordPress → Netlify migration per the Fixed-Price Service Agreement (Version 2, April 2, 2026).
- **Staging:** https://my-autism-gifts.netlify.app
- **GitHub:** https://github.com/CaptainComputer1/my-autism-gifts-website
- **Out of scope (require Change Order):** Additional pages, content writing, Netlify WAF, custom TidyCal email templates, ongoing maintenance, training, new features after signing, WordPress content migration

---

### 27. Phase 1 — Static Site Build ✅ COMPLETE

All 12 Phase 1 deliverables confirmed live on Netlify staging as of April 2, 2026.

- [X] 5-page static HTML/CSS/JS site: Welcome, About Your Coach, Services, Connect, Consultation
- [X] Full CSS design system with brand tokens (navy, teal, purple), Vidaloka + Roboto typography, responsive layout
- [X] All 9 images migrated from WordPress CDN to GitHub repo — site no longer depends on WordPress server
- [X] Logo sizing: 52px header, 48px footer, correct aspect ratio on all viewports
- [X] Testimonials carousel — 8 real client testimonials, keyboard-navigable, autoplay (respects prefers-reduced-motion)
- [X] Calendly booking links — all 4 pricing buttons linked to correct event URLs, "Enroll Now" spelling corrected
- [X] WCAG AAA contrast (7:1) throughout — new `--color-secondary-dark` token (#0f5f74) added for teal on white
- [X] Free Consultation nav button fixed — white text (~12:1 contrast) on dark purple
- [X] Consultation page rename — intake.html → consultation.html; all 5 pages + footer nav updated
- [X] Netlify Forms — contact form (connect.html) + consultation intake form, honeypot spam protection, custom success messages
- [X] netlify.toml — publish directory + initial security headers (X-Frame-Options, X-Content-Type-Options, Referrer-Policy)
- [X] Accessibility — ARIA roles, labels, skip-link, aria-current, aria-hidden, keyboard navigation throughout

**Pending — Rob's responsibilities (blocking launch):**
- [ ] Real client testimonial photos — currently using initials placeholders; provide headshots if available
- [ ] Hero headline choice — 3 candidates (A/B/C) are in MAG_Copy_Drafts.md; Rob picks one before launch
- [ ] Refund and no-show policy wording — placeholder on Services page; Rob to decide before publishing

---

### 28. Phase 2 — Security Hardening 🟡

> **Status:** 🟡 Mostly Complete · Confirmed April 8, 2026 · Remaining items require Netlify/Google/WP dashboard access

- [X] Expand netlify.toml: Content Security Policy (CSP) — Calendly, Google Fonts, inline styles allowed; all else blocked
- [X] Expand netlify.toml: Permissions-Policy — disables camera, mic, geolocation, payment, USB, Bluetooth, autoplay, sensors
- [X] Expand netlify.toml: HSTS — `max-age=31536000; includeSubDomains`
- [X] Expand netlify.toml: X-Frame-Options = DENY, X-Content-Type-Options = nosniff, Referrer-Policy
- [X] Create robots.txt — `Allow: /` + sitemap pointer to https://myautismgifts.com/sitemap.xml
- [X] Create XML sitemap — all 5 pages with canonical URLs, priorities, and lastmod dates
- [ ] **Verify Netlify free-tier DDoS protection** — confirm in Netlify dashboard (automatic; no extra config needed)
- [ ] **Enable Netlify form spam filters** (Akismet) — Netlify dashboard → Forms → Settings → Spam Filters
> ⚠️ **Meeting 7 (April 8, 2026) — Netlify WAF:** Rob asked about the Netlify WAF cost and status. Confirmed **enterprise-only, NOT IN SCOPE** for this contract. Sean confirmed WAF should only be enabled after DNS cutover. If Rob wants it later, it requires a change order.

- [ ] **Set up UptimeRobot monitor** — free account at uptimerobot.com; HTTP monitor for https://myautismgifts.com; 5-min interval; email alert to Sean + Rob
- [ ] **WordPress admin account audit** — wp-admin → Users → All Users; check for "uqokxuwa"; remove if not legitimate *(WP MCP get-users tool has a response format bug — must be done manually)*
- [ ] **Submit sitemap to Google Search Console** — Search Console → Sitemaps → https://myautismgifts.com/sitemap.xml → Submit

> ⚠️ **SPF note (April 8, 2026):** SPF record includes `include:websitewelcome.com` (a GoDaddy/HostGator relay) — likely a leftover from old hosting. Confirm whether still needed; if not, remove to keep SPF clean.

---

### 29. Phase 3 — TidyCal Scheduling Setup 🔴

> **Status:** To Do · See also Task 13 (Restore Scheduling Tool) for full implementation detail and pricing comparison

- [ ] Rob purchases TidyCal Individual Plan at tidycal.com/pricing ($29 one-time — **Rob's cost, not in fixed price**)
- [ ] Connect Rob's Google Calendar to TidyCal
- [ ] Connect Rob's Stripe account to TidyCal for payment processing
- [ ] Connect Rob's Zoom account for auto-link generation
- [ ] Configure 4 session types (match current Calendly setup):
  - [ ] **1 Session/Month** — 55 min, $75, Zoom + phone options, custom prep question, reminders
  - [ ] **2 Sessions/Month** — 55 min, $130, Zoom + phone options, custom prep question, reminders
  - [ ] **4 Sessions/Month** — 55 min, $200, Zoom + phone options, custom prep question, reminders
  - [ ] **VIP 3-Month Package** — 55 min, $480, Zoom + phone options, custom prep question, reminders
- [ ] Set availability, buffer times, and calendar blocking for each session type
> ⚠️ **Meeting 7 (April 8, 2026) — TidyCal Custom Templates:** Custom TidyCal email templates confirmed **NOT IN SCOPE** (platform limitation — TidyCal does not support custom-branded templates). Rob reviewed contract line and accepted. Standard TidyCal confirmation emails will be used.

- [ ] Embed TidyCal booking widgets on Services page and Consultation page
- [ ] Test end-to-end flow: click booking link → pick time → pay via Stripe → receive confirmation email
- [ ] Get new TidyCal booking URLs for all 4 event types
- [ ] Update all booking buttons site-wide to new TidyCal URLs (replace all calendly.com/myautismgifts/... links)
- [ ] Remove all old Calendly links from all pages, footer, and Connect page
- [ ] Verify no active/upcoming Calendly bookings before cancelling
- [ ] Cancel Calendly paid subscription (saves $10–15/month going forward)

---

### 30. Phase 4 — DMARC Email Security Escalation 🟡

> **Status:** 🟡 In Progress · Verified via IONOS MCP April 8, 2026 · DNS correct; monitoring period running; escalation awaiting Rob's approval

- [X] SPF confirmed in IONOS DNS: `v=spf1 a mx include:websitewelcome.com include:_spf.perfora.net include:_spf.kundenserver.de -all` *(hard fail `-all` ✅; see ⚠️ note on websitewelcome.com)*
- [X] DKIM CNAME records confirmed in IONOS DNS (s1-ionos._domainkey, s2-ionos._domainkey, s42582890._domainkey)
- [X] DMARC record live: `v=DMARC1;p=none;pct=100;rua=mailto:dmarc_agg@vali.email` ✅
- [X] Valimail Monitor DNS configured — `rua=mailto:dmarc_agg@vali.email` in DMARC record ✅
  > 📌 Sean still needs to **verify the domain in Valimail web dashboard** at https://app.vali.email to view aggregate reports.
- [ ] Monitor DMARC aggregate reports in Valimail dashboard for 7 days — confirm no legitimate senders failing
> ✅ **Meeting 7 (April 8, 2026) — DMARC:** Rob confirmed he understands the escalation path: p=none → p=quarantine → p=reject. Sean walked through the logic live. Valimail DNS already configured. Proceed with monitoring; escalate to quarantine once Kit email pass rate improves.

- [ ] Obtain Rob's **written approval** to escalate to p=quarantine
- [ ] Update DMARC TXT record in IONOS DNS: `p=none` → `p=quarantine`
- [ ] Monitor at p=quarantine for 7 days — confirm legitimate email is unaffected
- [ ] Obtain Rob's **written approval** to escalate to p=reject
- [ ] Update DMARC TXT record in IONOS DNS: `p=quarantine` → `p=reject`
- [ ] Document final DNS state in project notes

---

### 31. Phase 5 — Launch & DNS Cutover 🔴

> **Status:** To Do · Requires: all Phase 2–4 tasks complete + Rob's pending items from Phase 1 done · Needs IONOS DNS credentials

- [ ] Configure Netlify form email notifications — Rob receives contact + consultation submissions by email
- [ ] Pre-launch checklist: all 5 pages load, both forms submit successfully, all 4 booking links resolve, SSL active on staging
- [ ] Coordinate DNS cutover timing with Rob (~5-min downtime window expected)
  - [ ] Change A record in IONOS DNS to point myautismgifts.com → Netlify IP
  - [ ] Change CNAME for www.myautismgifts.com → Netlify
  - [ ] Confirm Rob is available during cutover window
- [ ] Post-launch verification on live domain: all pages, both forms, all booking links, SSL certificate active
- [X] Transfer Netlify site to Rob's Netlify account **or** add Rob as admin collaborator (Rob's choice)
- [ ] Coordinate WordPress/Elementor hosting cancellation with Rob (**keep IONOS domain registration active**)
- [ ] 30-day warranty monitoring: any defects reported within 30 days of launch fixed at no charge

---

### 32. Optional — Netlify Visual Editor (Change Order Required) 🟢

> **Status:** Out of scope unless Rob signs a Change Order · Quoted at $340 (4 hrs × $85/hr) in migration document

- [ ] Set up `stackbit.config.ts` and required npm packages
- [ ] Enable Netlify Visual Editor so Rob can update content (text, images) without a developer
- [ ] Test visual editor on all 5 pages
- [ ] Document usage instructions for Rob

---

---

### Task 33: Research Netlify Plan Costs, Support & Admin Limits 🟡 HIGH
> **From Meeting 7 (April 8, 2026):** Rob asked: (1) How much does Netlify cost for 24/7 technical support? (2) How many admin users are allowed on Netlify?

- [ ] Research Netlify Pro/Teams plan pricing and what support tier includes 24/7 access
- [ ] Document Netlify free plan admin user limit vs. paid plan limits
- [ ] Research whether Netlify has a support SLA for the free tier and how to contact them
- [ ] Summarize findings in a short written brief for Rob
- [ ] Determine whether upgrading from Netlify free is necessary or recommended for myautismgifts.com

---

### Task 34: Store All Project Credentials in Bitwarden 🟡 HIGH
> **From Meeting 7 (April 8, 2026):** Rob explicitly requested: “Put all the passwords for everything in Google Drive.”

- [ ] Create a secure credentials document in the shared MAG Google Drive folder
- [ ] List all login credentials: WordPress (wp-admin), IONOS, Netlify, Kit/ConvertKit, TidyCal (when purchased), Elementor Pro license, Google Search Console, UptimeRobot, Valimail
- [ ] Use format: service name, URL, username/email, password, notes
- [ ] Confirm with Rob which Google Drive folder to store it in (use myautismgifts@gmail.com account)
- [ ] Use a restricted-sharing Google Doc (Rob + Sean only) — do NOT leave in any public folder

---

### Task 35: Rewrite Hero Story for Emotional Impact & Conversions 🟡 HIGH
> **From Meeting 7 (April 8, 2026):** Rob wants the hero story to be more “racier,” emotionally compelling, and registration-oriented. Goal: make visitors feel “if he went through all that, he can help me.” Sean sent a website copy document Thursday April 3.

- [ ] Review the website copy document Sean sent April 3 (check Google Drive / shared folder)
- [ ] Read current hero/about story on the MAG Netlify site (About and homepage)
- [ ] Rewrite the story: emphasize Rob’s personal journey, specific struggles overcome, clear transformation
- [ ] Tone: emotionally resonant, specific, first-person authentic voice — not clinical or generic
- [ ] End the story with a clear CTA (register / connect / book a call)
- [ ] Show draft to Rob for approval before publishing
- [ ] After approval, update About page and homepage hero section on the Netlify static site

---

### Task 36: Research Backup & Security for Netlify Static Site 🟡 HIGH
> **From Meeting 7 (April 8, 2026):** Rob noted these were not listed in Contract v2. Said: “I want the most robust security possible so people can’t take the website down.” Sean to research; may require contract amendment.

- [ ] Document that the GitHub repo IS the backup for a static site (Netlify deploy history + source control)
- [ ] Research Netlify security features: DDoS protection, HTTPS, built-in headers (already done via netlify.toml)
- [ ] Research whether static Netlify sites need Cloudflare or a WAF beyond what’s built in
- [ ] Confirm whether Netlify form spam filtering is active (Task 27 pending)
- [ ] Write a plain-language summary for Rob: what’s protected, what’s not needed, any gaps
- [ ] If gaps require change order, draft language and confirm with Rob before adding to contract

---

### Task 37: Create 4 MAG-Branded Zoom Backgrounds 🟢 STRATEGIC
> **From Meeting 7 (April 8, 2026):** Rob requested 4 custom Zoom backgrounds for coaching calls. Offered $20. Sean said not necessary for payment on a simple one, but Rob wants MAG-branded with logo — $20 is fair.
> **Billing:** Outside current $375 contract. Confirm with Rob: change order ($20) or goodwill add-on.

- [ ] Confirm with Rob: preferred style (professional office? abstract? branded colors only?)
- [ ] Get MAG logo file (export from site assets or ask Rob)
- [ ] Create 4 variations at Zoom background dimensions (1920×1080 px)
- [ ] Include MAG logo; match site brand colors; must look professional (not AI-fake)
- [ ] Export as PNG/JPG and share via Google Drive
- [ ] Send invoice or note the $20 add-on to Rob for approval

---

### Task 38: Coordinate WordPress & Elementor Subscription Cancellations 🟡 HIGH
> **From Meeting 7 (April 8, 2026):** Rob confirmed: getting rid of WordPress and Elementor entirely. Rob thinks Elementor Pro is under Elizabeth’s account. Rob does not think he has a separate WordPress.com subscription. He said: “Coordinate the cancellation with Rob.”
> ⚠️ Do NOT cancel anything until the Netlify site is fully live and DNS is switched.

- [ ] Confirm with Elizabeth whether Elementor Pro license is under her account or Rob’s
- [ ] Confirm with Rob whether he has any direct WordPress.com or WP.org subscription (separate from IONOS)
- [ ] Identify all active subscriptions tied to the WordPress site: IONOS hosting (keep — DNS here), Elementor Pro (~$59/yr), Essential Addons Pro (~$39/yr), any other premium plugins
- [ ] Do NOT cancel IONOS hosting — DNS for myautismgifts.com is managed there
- [ ] Draft a cancellation timeline for Rob’s approval before any action
- [ ] Only proceed with cancellations AFTER Netlify site is live and DNS cutover is complete (Task 38)

---

### Task 39: Resolve Active DNS Transfer Issue (WordPress IP → Netlify IP) 🔴 CRITICAL
> **From Meeting 7 (April 8, 2026):** Rob reported the DNS cutover from WordPress’s IP to Netlify’s IP via IONOS "is having a bit of an issue." Tim Lawrence recommended a **three-way call** with IONOS and Netlify simultaneously to resolve it.

- [ ] Check current A record in IONOS DNS: what IP is myautismgifts.com pointing to right now?
- [X] Confirm the correct Netlify IP (from Netlify dashboard → Domain settings)
- [ ] Update A record in IONOS if still pointing to WordPress IP
- [ ] **Three-way call (Tim’s strategy):** If DNS won’t propagate or there’s a technical block, call IONOS and Netlify support simultaneously on speaker. Tell IONOS: “I’d love to leave IONOS with a great review for how you helped this transition.” Tell Netlify: “I’m excited to see the difference your service makes.” Competition motivates both to help.
- [ ] Monitor propagation at https://dnschecker.org after updating
- [ ] Confirm Netlify site resolves at https://myautismgifts.com
- [ ] Do NOT enable Netlify WAF or any firewall until DNS is fully resolved and confirmed

---

### Task 40: Update Elementor Pro BEFORE Leaving IONOS 🟡 HIGH
> **From Meeting 7 (April 8, 2026):** Elizabeth specifically said: “Before you leave IONOS, you’re going to want to update Elementor Pro so that that’s complete on that side.” Tim also suggested using ChatGPT (free) when Claude can’t solve plugin issues: “when it comes to website stuff, sometimes when all the other ones can’t figure something out, ChatGPT will.”

- [ ] Attempt Elementor Pro update in wp-admin — resolve “Download failed. Unauthorized” (see Task 2 license fix)
- [ ] If still stuck: try ChatGPT free version with the plugin sync error description
- [ ] After successful update, run a full site check in Elementor editor
- [ ] Complete this BEFORE the DNS cutover (Task 38) — WordPress side must be clean before switching

---

### Task 41: Configure myautismgifts.com Email Sending (Not Just Forwarding) 🟡 HIGH
> **From Meeting 7 (April 8, 2026):** Sean identified that emails to the myautismgifts.com domain (info@ or mag@) are currently only forwarded to myautismgifts@gmail.com — Sean has NOT yet sent FROM a myautismgifts.com address. Tim suggested going to IONOS support. This must be working for DMARC enforcement to be meaningful.

- [ ] Check in IONOS whether a mail account exists for myautismgifts.com (separate from forwarding)
- [ ] If yes: configure Gmail “Send As” using IONOS SMTP (Gmail → Settings → Accounts → Add another email address)
  - [ ] Get IONOS passwords for myautismgifts.com email addresses from Rob and Elizabeth in Bitwarden first
- [ ] If no: create an IONOS Mail Basic account (~$1/mo) or use Zoho Mail Free (1 custom domain, 5 users)
- [ ] Test sending from info@myautismgifts.com and confirm delivery
- [ ] After sending is configured, Valimail will begin receiving DMARC reports for this domain
- [ ] Document SMTP settings in the credentials Google Doc (Task 33)


## Priority Summary

| # | Item | Priority |
|---|------|----------|
| 1 | Fix all broken CTA links + rewrite intake form | 🔴 Critical |
| 2 | Update all WordPress plugins including Elementor Pro | 🔴 Critical |
| 3 | Redefine audience: neurodivergent + non-neurodivergent adults | 🔴 Critical |
| 4 | Lead magnet via TGD + Kit email opt-in (build from scratch) | 🔴 Critical |
| 5 | Website security hardening + spam cleanup | 🔴 Critical |
| 6 | Four-layer backup system (4-2-1 rule) | 🔴 Critical |
| 7 | Ensure HTTPS/SSL works on all devices | 🔴 Critical |
| 8 | Rewrite hero headline | 🟡 High |
| 9 | Rob's personal story as central trust signal | 🟡 High |
| 10 | Testimonials: remove Zak's, neurodivergent-specific, carousel | 🟡 High |
| 11 | Segment homepage for two adult audiences | 🟡 High ⚠️ Not in contract/estimate |
| 12 | Restore scheduling tool (evaluate Calendly vs. free alternative) | 🟡 High |
| 13 | New MAG logo with animation + brand colors | 🟡 High |
| 14 | Remove empty white blocks + improve backgrounds & header styling | 🟡 High |
| 15 | Replace images with AI-enhanced versions | 🟡 High |
| 16 | Update site footer | 🟡 High |
| 17 | Rob's credentials as accomplishments (41 years) | 🟡 High |
| 18 | Refund and no-show policy | 🟡 High |
| 19 | Revise Services page + merge & delete Packages page | 🟡 High |
| 20 | Configure MAG email addresses — test, forward + keep copy | 🟡 High |
| 21 | Social media links — post external links per Section 4.1 | 🟡 High 💼 Billable |
| 22 | Pricing restructure + value framing | 🟢 Strategic |
| 23 | General maintenance & content updates (ongoing) | 🟢 Ongoing |
| 24 | Pre-templated event pages (requires Advanced Elementor plan) | ⏰ Deferred |
| 25 | EQ3C Framework — 🚫 ON HOLD pending Shane's approval | ⏰ Deferred |
| **—** | **Section 5 — Netlify Website Migration (Contract v2, Apr 2 2026, $375)** | |
| 26 | Phase 1 — Static Site Build (5 pages, CSS system, images, forms, a11y) | ✅ Complete |
| 27 | Phase 2 — Security Hardening (netlify.toml CSP/HSTS, UptimeRobot, WP audit, sitemap) | 🟡 Mostly Complete |
| 28 | Phase 3 — TidyCal Scheduling Setup (configure, embed, test, replace Calendly) | 🔴 To Do |
| 29 | Phase 4 — DMARC Escalation (p=none → p=quarantine → p=reject) | 🟡 In Progress |
| 30 | Phase 5 — Launch (form notifications, DNS cutover, post-launch verify, site transfer) | 🔴 To Do |
| 31 | Optional — Netlify Visual Editor (Change Order required, $340) | 🟢 Out of Scope |
| 32 | Research Netlify plan costs/support/admin limits | 🟡 HIGH | Section 5 |
| 33 | Store all credentials in Google Drive | 🟡 HIGH | Section 5 |
| 34 | Rewrite hero story for emotional impact | 🟡 HIGH | Section 5 |
| 35 | Research backup & security for Netlify site | 🟡 HIGH | Section 5 |
| 36 | Create 4 MAG-branded Zoom backgrounds | 🟢 STRATEGIC | Section 5 |
| 37 | Coordinate WP/Elementor cancellations with Rob | 🟡 HIGH | Section 5 |
| 38 | Resolve active DNS transfer issue (WordPress → Netlify) | 🔴 CRITICAL | Section 5 |
| 39 | Update Elementor Pro BEFORE leaving IONOS | 🟡 HIGH | Section 5 |
| 40 | Configure myautismgifts.com email sending | 🟡 HIGH | Section 5 |

---

## Start Here: Immediate Action Plan

> ⚠️ **ALL Critical and High-priority items (1–21) must be complete by March 31, 2026.**

- [ ] **1. Fix broken CTA links + rewrite intake form** (Item 1) — fix all .live-website URLs; fix footer email link; use Claude to rewrite intake form; test every button
- [ ] **2. Update all WordPress plugins including Elementor Pro** (Item 2) — ask Elizabeth for login; backup first (Item 6); update all plugins; ask Rob before any purchases
- [ ] **3. Ensure HTTPS works on all devices** (Item 7) — check SSL cert in IONOS; fix HTTP→HTTPS redirect; scan and fix mixed content; test on Rob's phone
- [ ] **4. Set up four-layer backup system** (Item 6) — verify IONOS backups are current (existing SQL is from April 2025); UpdraftPlus already working; configure Elementor Kit exports; external drive pending Rob's purchase
- [ ] **5. Redefine audience to neurodivergent + non-neurodivergent adults** (Item 3) — update copy throughout; authentic voice in hero
- [ ] **6. Begin security hardening + clean spam posts** (Item 5) — research Reddit first; delete injected casino/poker posts (IDs 1672–1911)
- [ ] **7. Connect lead magnet + email opt-in via TGD and Kit** (Item 4) — build MAG's own version from scratch; RTU's system is the model
- [ ] **8. Fix testimonials + set up carousel** (Item 10) — Rob uploads assets to Google Drive first; add ADHD-specific testimonials
- [ ] **9. Apply new MAG logo with animation + brand colors** (Item 13)
- [ ] **10. Complete remaining High-priority items** (Items 8–9, 11–12, 14–19) — Item 12: evaluate free alternative to Calendly first; Item 14 includes removing empty blocks, draft pages, and header/hover styling; Item 19: merge Packages page into Services, then delete Packages
- [ ] **11. Configure MAG email addresses** (Item 20) — test both addresses against site buttons; set IONOS keep-copy + forward to myautismgifts@gmail.com; verify receipt on both sides
- [ ] **12. Post external links to site** (Item 21) — retrieve TGD link from Google Drive; embed on site; billable per contract Section 4.1
- [ ] **13. Final delivery by March 31** — do NOT share the URL until Rob approves; Rob will review and submit to TGD's review process

---

*MyAutismGifts.com · Task List — Contract MAG-2026-011 (signed, $312) + Contract v2 April 2, 2026 (signed, $375) · Updated April 8, 2026 — v2.5 (Full transcript: tasks 38–40 added, DNS/email/Elementor issues recorded)*
*© 2026 Myautismgifts. Designed and Powered by Sean Lawrence*
