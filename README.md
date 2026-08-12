# Giant Consult Ltd — Marketing Website

A modern, fully responsive marketing website for Giant Consult Ltd, built with Next.js 15, TypeScript, and Tailwind CSS.

---

## Tech Stack

| Tool | Purpose |
|---|---|
| Next.js 15 (App Router) | Framework |
| TypeScript | Type safety |
| Tailwind CSS v4 | Styling |
| Framer Motion | Animations (optional upgrade) |
| Resend | Contact form email delivery |
| Vercel | Deployment |

---

## Getting Started Locally

### Prerequisites
- Node.js 18+ (tested on v24)
- npm 9+

### Install & Run

```bash
# From the project root
cd giant-consult
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Home
│   ├── about/page.tsx      # About
│   ├── services/page.tsx   # Services
│   ├── projects/page.tsx   # Projects gallery
│   ├── safety/page.tsx     # HSE / Safety
│   ├── team/page.tsx       # Team
│   ├── contact/page.tsx    # Contact
│   └── api/contact/        # Contact form API route
├── components/
│   ├── layout/             # Header, Footer
│   ├── sections/           # Hero, ServiceCard, ProjectCard, TeamCard, etc.
│   └── ui/                 # FadeIn, SectionHeader
└── data/
    ├── projects.ts          # Project data (edit here to update portfolio)
    ├── team.ts              # Team member data
    └── partners.ts          # Partner/client logos

public/
├── brand/                   # Logo files
├── projects/                # Project photos
├── team/                    # Team headshots
└── partners/                # Partner logos
```

---

## How to Update Content

### Add / Update a Project
Edit `src/data/projects.ts`. Each project has:
- `id` — unique slug
- `title` — display name
- `category` — `"Commercial"` | `"Institutional"` | `"Residential"`
- `scopeItems` — array of scope line items
- `images` — array of paths relative to `/public` (e.g. `"/projects/myphoto.jpg"`)
- `featured` — `true` to show on the Home page

Then copy your new photos into `public/projects/`.

### Add / Update a Team Member
Edit `src/data/team.ts`. Set `image: null` if no headshot is available yet (the card will show initials instead). Copy headshot JPG/PNG into `public/team/`.

### Add / Update a Partner Logo
Edit `src/data/partners.ts`. Copy the logo file into `public/partners/`.

### Replace the Logo
Overwrite `public/brand/logo.png` (and `logo1.png` if used) with the new file. The header, footer, and favicon will update automatically.

---

## Contact Form — Email Delivery

The contact form posts to `/api/contact`. By default (no API key), submissions are logged to the server console.

To enable real email delivery via [Resend](https://resend.com):

1. Create a free account at https://resend.com
2. Verify your sending domain or use the sandbox
3. Copy your API key
4. Create `.env.local` in the project root:

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
```

5. Restart the dev server — emails will now be delivered to `giantconsult@gmail.com`.

---

## Deployment to Vercel

1. Push the `giant-consult` folder to a GitHub repository.
2. Import the repo in [Vercel](https://vercel.com).
3. Set the `RESEND_API_KEY` environment variable in Vercel project settings.
4. Deploy — Vercel auto-detects Next.js.

---

## Swapping Images

All images are served from `/public`. Replace any file with a new one of the same name and the site updates immediately on next build/reload. For production, run `npm run build` after swapping images.

---

## Brand Colors

| Token | Hex | Usage |
|---|---|---|
| Navy | `#0B1F3A` | Primary backgrounds, headings |
| Gold | `#C99A3C` | Accents, CTAs, highlights |
| White | `#FFFFFF` | Backgrounds, text on dark |
