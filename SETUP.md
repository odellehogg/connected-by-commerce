# Connected × Commerce — Setup Guide
## From this zip to a live website with a CMS

20–30 minutes. Every command is ready to copy-paste.

---

## What you need first

1. **Node.js** — open Terminal, type `node --version`
   - If you see `v18.x.x` or higher: ✓ you're good
   - If not: go to **nodejs.org**, download LTS, install it, restart Terminal

2. **GitHub account** — github.com (free)

3. **Vercel account** — you already have this ✓

4. **Sanity account** — sanity.io (free, no card)

5. **Web3Forms account** — web3forms.com (free, no card, for the contact form)

---

## Step 1 — Extract and open the project

1. Unzip `cbc-site.zip` to your Desktop (or anywhere you like)
2. Open **Terminal**
3. Type this and press Enter — replacing the path if you didn't put it on Desktop:
   ```
   cd ~/Desktop/cbc-site
   ```

---

## Step 2 — Create your Sanity project (the CMS)

This is where you'll edit your website content and write blog posts.

1. Go to **sanity.io** → Sign up / Log in → Click **"Create project"**
2. Name it: `Connected by Commerce`
3. Choose dataset: `production`
4. After creating, you'll land on a dashboard. Copy the **Project ID** — it's a short string like `ab12cd34`

---

## Step 3 — Set up Web3Forms (the contact form)

1. Go to **web3forms.com** → Click **"Get your Access Key"**
2. Enter `info@connectedbycommerce.co.uk`
3. Check your email — Web3Forms will send you an Access Key
4. Copy it (looks like: `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`)

---

## Step 4 — Configure environment variables

1. In your project folder, run:
   ```
   cp .env.local.example .env.local
   ```

2. Open `.env.local` in any text editor (TextEdit on Mac, Notepad on Windows)

3. Fill in your values:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_from_step_2
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_WEB3FORMS_KEY=your_access_key_from_step_3
   NEXT_PUBLIC_SITE_URL=https://connectedbycommerce.co.uk
   ```

4. Save and close the file

---

## Step 5 — Install dependencies

In Terminal (still in the `cbc-site` folder):
```
npm install
```

Takes 1–2 minutes. Lots of text scrolling — normal.

---

## Step 6 — Test locally

```
npm run dev
```

Open your browser: **http://localhost:3000**

You should see the Connected × Commerce website.

Your CMS editor (Sanity Studio) is at: **http://localhost:3000/studio**

The first time you open the studio, click through the Sanity login — use the same account you created in Step 2.

**To add your first content in the CMS:**
- Click **"Homepage"** in the left sidebar
- Click **"Create"** (or edit the existing draft)
- Fill in or adjust any text you want to change
- Click **"Publish"** — it goes live immediately

**To write a blog post:**
- Click **"Blog Posts"** → **"New post"**
- Fill in title, date, category, excerpt, and write the body
- Click **"Publish"**

Press `Ctrl+C` in Terminal when done testing.

---

## Step 7 — Push to GitHub

1. Go to **github.com** → Click **+** → **New repository**
2. Name: `connected-by-commerce`
3. Set to **Private** → Click **Create repository**

4. Back in Terminal, run these commands one at a time:
   ```
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_GITHUB_USERNAME/connected-by-commerce.git
   git push -u origin main
   ```
   **Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username.**

---

## Step 8 — Deploy to Vercel

1. Go to **vercel.com** → Log in → Click **"Add New Project"**
2. Click **"Import Git Repository"** → find `connected-by-commerce` → click **Import**
3. Before clicking Deploy, add your environment variables:
   - Click **"Environment Variables"**
   - Add each one from your `.env.local` file:
     - `NEXT_PUBLIC_SANITY_PROJECT_ID` = your project ID
     - `NEXT_PUBLIC_SANITY_DATASET` = `production`
     - `NEXT_PUBLIC_WEB3FORMS_KEY` = your Web3Forms key
     - `NEXT_PUBLIC_SITE_URL` = `https://connectedbycommerce.co.uk`
4. Click **Deploy**

Takes about 60 seconds. You'll get a URL like `connected-by-commerce.vercel.app` — your site is live.

---

## Step 9 — Connect your domain

1. In Vercel → your project → **Settings** → **Domains**
2. Click **Add Domain** → type `connectedbycommerce.co.uk` → click **Add**
3. Also add `www.connectedbycommerce.co.uk` and set it to redirect to the apex
4. Vercel gives you DNS records to add — copy them
5. Log in to your domain registrar (GoDaddy, Namecheap, 123-reg, etc.) → DNS settings → add the records
6. Wait 5–30 minutes

Your site is live at **connectedbycommerce.co.uk** ✓

---

## Step 10 — Configure Sanity CORS (so the studio works on your live domain)

1. Go to **sanity.io/manage** → your project → **API** → **CORS Origins**
2. Click **Add CORS Origin**
3. Add: `https://connectedbycommerce.co.uk`
4. Also add: `https://www.connectedbycommerce.co.uk`
5. Check **Allow credentials** for both → Save

Your CMS is now live at: **https://connectedbycommerce.co.uk/studio**

---

## Using the CMS day-to-day

### Edit any page text
1. Go to `connectedbycommerce.co.uk/studio`
2. Click **Homepage** → edit any field → click **Publish**
3. The site updates within 60 seconds

### Write a blog post
1. Click **Blog Posts** → **New post**
2. Fill in: Title (then click **Generate** for the slug), Date, Category, Excerpt
3. Write the body — it works like a simple word processor
4. Optional: upload a Featured Image
5. Click **Publish**

### That's it. No code, no terminal, nothing else.

---

## Troubleshooting

**"node: command not found"**
→ Node.js isn't installed. Go to nodejs.org and install the LTS version.

**"Cannot find module" errors when running `npm run dev`**
→ Run `npm install` again.

**Site deploys but shows no content**
→ Open the Sanity Studio, click Homepage, click Create/Publish. The site needs at least one published document to show CMS content.

**Contact form doesn't send**
→ Check `NEXT_PUBLIC_WEB3FORMS_KEY` is set correctly in Vercel's Environment Variables (Settings → Environment Variables). After adding/changing env vars, click Redeploy.

**Sanity Studio shows "Not authenticated"**
→ Add your domain to Sanity CORS Origins (Step 10 above).

---

## Stack summary (all free)

| Tool | What it does | Cost |
|------|-------------|------|
| Next.js | The website framework | Free |
| Sanity | CMS — edit content, write posts | Free |
| Vercel | Hosting + deployment | Free |
| Web3Forms | Contact form emails | Free |
| GitHub | Code storage | Free |

**Total: £0/month**
