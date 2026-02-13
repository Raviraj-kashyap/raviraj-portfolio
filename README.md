# Raviraj Narayan — Portfolio

A modern, dark-themed, mobile-responsive portfolio for **Raviraj Narayan** (React Native Developer / Mobile App Engineer).

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)

## Project Structure

```
Portfolio/
├── public/
│   ├── resume.pdf          # Add your resume PDF here (see resume-placeholder.txt)
│   └── resume-placeholder.txt
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx      # Root layout + SEO metadata
│   │   └── page.tsx        # Home page (all sections)
│   └── components/
│       ├── Navbar.tsx
│       ├── Footer.tsx
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Skills.tsx
│       ├── Projects.tsx
│       ├── Education.tsx
│       └── Contact.tsx
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
└── README.md
```

## Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Add your resume**
   - Place your resume PDF at `public/resume.pdf`.
   - The "Download Resume" button will use this file.

3. **Run locally**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000).

## Contact Form

The contact form currently shows a success state without sending emails. To make it work:

- **Option A — Formspree:** Sign up at [formspree.io](https://formspree.io), create a form, and use the form action URL in `Contact.tsx`:
  ```tsx
  <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
    {/* same inputs with name attributes */}
  </form>
  ```
- **Option B — Netlify Forms:** Add `data-netlify="true"` and a hidden input to the form and deploy on Netlify.
- **Option C — Custom API:** Replace the `handleSubmit` logic with a `fetch()` call to your backend.

## Build

```bash
npm run build
npm start
```

## Deploy

### Vercel (recommended)

1. Push the project to GitHub.
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
3. Click **Add New Project** and import this repo.
4. Leave build command as `npm run build` and output directory as default.
5. Deploy. Your site will be live at `https://your-project.vercel.app`.

### Netlify

1. Push the project to GitHub.
2. Go to [netlify.com](https://netlify.com) → **Add new site** → **Import from Git**.
3. Select the repo; build command: `npm run build`, publish directory: `.next` (for Next.js use the default or **Next.js on Netlify**).
4. Deploy.

---

**Raviraj Narayan** · React Native Developer · Noida, India
