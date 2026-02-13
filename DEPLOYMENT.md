# Deployment Guide

## Vercel (recommended)

1. Push this project to a **GitHub** repository.
2. Go to [vercel.com](https://vercel.com) → Sign in with GitHub.
3. **Add New** → **Project** → Import your repository.
4. **Framework Preset:** Next.js (auto-detected).  
   **Build Command:** `npm run build`  
   **Output Directory:** (leave default)
5. Click **Deploy**. Your site will be at `https://your-repo-name.vercel.app`.

### Custom domain (optional)
- In the Vercel project → **Settings** → **Domains** → add your domain and follow DNS instructions.

---

## Netlify

1. Push this project to **GitHub**.
2. Go to [netlify.com](https://netlify.com) → **Add new site** → **Import an existing project**.
3. Connect GitHub and select this repository.
4. **Build command:** `npm run build`  
   **Publish directory:** `.next` — use **Next.js on Netlify** (or leave default if it suggests a different value).
5. Deploy.

---

## Before you deploy

- [ ] Add your resume PDF at `public/resume.pdf` (replace or remove `public/resume-placeholder.txt`).
- [ ] (Optional) Connect the contact form to [Formspree](https://formspree.io) or Netlify Forms — see README.
