# Push MAG Site to GitHub — One-Time Setup

## Option A — Install gh CLI (recommended, takes 60 seconds)

Open PowerShell and run:

```powershell
winget install GitHub.cli
```

Then restart PowerShell, and run these three commands:

```powershell
gh auth login
gh repo create my-autism-gifts-website --public --description "My Autism Gifts static website" --source "G:\My Drive\Work\Work with Rob\MAG Website Dev" --remote origin --push
```

That's it. The repo is created, remote is set, and the code is pushed.

---

## Option B — Create the repo manually on github.com

1. Go to https://github.com/new
2. Name the repo: `my-autism-gifts-website`
3. Set visibility: **Public** (needed for free Netlify deploys)
4. Do NOT initialise with README or .gitignore (the code is already here)
5. Click **Create repository**
6. Copy the repo URL (e.g. `https://github.com/CaptainComputer1/my-autism-gifts-website.git`)
7. Open PowerShell and run:

```powershell
cd "C:\Users\seanl\Documents\Work\MAG Website Dev"
git remote add origin https://github.com/CaptainComputer1/my-autism-gifts-website.git
git push -u origin main
```

---

## After pushing — connect Netlify

The Netlify project `my-autism-gifts` (my-autism-gifts.netlify.app) is already set up.
Tell Claude: "Connect the my-autism-gifts Netlify project to the GitHub repo"
and Claude will use the Netlify MCP to wire up auto-deploy from the `main` branch.

---

## Test local preview first (optional but recommended)

```powershell
cd "C:\Users\seanl\Documents\Work\MAG Website Dev"
npx serve .
```

Then open http://localhost:3000 in your browser to preview the site before pushing.
