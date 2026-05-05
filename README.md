```markdown
# Deden Finance & Mentoring — Website

Official website for [Deden Finance and Mentoring](https://deden.com.au), a values-based financial services firm based in Manuka, Canberra. Built with Next.js 15, TypeScript and Tailwind CSS.

## Tech Stack

- **Framework** — Next.js 15 (App Router)
- **Language** — TypeScript
- **Styling** — Tailwind CSS v4 + inline styles
- **Fonts** — Instrument Serif (headings) + Inter (body) via Google Fonts
- **Email** — Nodemailer with Microsoft 365 SMTP
- **Deployment** — Vercel

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, services overview, testimonials |
| `/services` | Full services list |
| `/work-with-us` | Process, FAQ, why Deden |
| `/about` | Story, values, timeline, team |
| `/praise` | Client testimonials |
| `/contact` | Contact form + office info |
| `/blog` | Articles with category filter |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
app/
├── page.tsx              # Home
├── services/page.tsx
├── work-with-us/page.tsx
├── about/page.tsx
├── praise/page.tsx
├── contact/page.tsx
├── blog/page.tsx
├── globals.css
└── layout.tsx
components/
├── Navbar.tsx
└── Footer.tsx
```

## Design System

- **Primary colour** — Orange `#e8931a`
- **Backgrounds** — Cream `#fdf9f4`, Soft `#f9f6f2`, White `#ffffff`, Ink `#0f0f0f`
- **Headings** — Instrument Serif, italic orange accents
- **Body** — Inter, weight 300–600
- **Buttons** — Pill shape (`border-radius: 40px`)
- **Cards** — Rounded (`border-radius: 20px`), `#ede8e0` border
- **Hero** — Animated floating orbs + dot grid background

## Deployment

Deployed on Vercel. Push to `main` to trigger a deployment.

```bash
git add .
git commit -m "your message"
git push origin main
```

---

*Deden Finance and Mentoring · Manuka, ACT 2603 · Australian Credit Licence holder*
```