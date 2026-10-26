# Rafik Gatri — Developer Portfolio

A fast, modern, responsive single-page portfolio built to showcase full-stack
and systems work and to land part-time / freelance engagements.

**Stack:** React 18 · Vite 6 · TypeScript · Tailwind CSS v4 · no backend.

- ⚡️ Fast static build, deploy-ready for **Vercel** or **Netlify** (free tiers)
- 🌗 Light mode by default with an optional dark mode (remembers your choice)
- ♿️ Accessible: semantic HTML, keyboard focus states, skip link, good contrast
- 📱 Mobile-first and fully responsive
- 🔎 SEO + Open Graph meta, SVG favicon, `robots.txt`
- 🎞️ Subtle, tasteful scroll-reveal motion (respects `prefers-reduced-motion`)

---

## Getting started

Requires **Node.js 18+** (tested on Node 20/24).

```bash
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # type-check + production build into /dist
npm run preview  # preview the production build locally
```

---

## Project structure

```
Portfolio/
├─ public/
│  ├─ cv-rafik-gatri.pdf     # CV (French) — the "Download CV" button links here
│  ├─ favicon.svg            # monogram favicon
│  ├─ og-image.svg           # social share image (1200×630)
│  └─ robots.txt
├─ src/
│  ├─ components/            # Navbar, Hero, About, Skills, Projects, Experience, Contact, Footer, ThemeToggle
│  │  └─ ui/                 # Section (layout shell) + Reveal (scroll animation)
│  ├─ data/                  # ← edit your content here (no need to touch components)
│  │  ├─ profile.ts          # name, title, pitch, bio, contact links, CV path
│  │  ├─ skills.ts           # grouped skills
│  │  ├─ projects.ts         # project cards + link states
│  │  └─ experience.ts       # experience timeline
│  ├─ hooks/useTheme.ts      # light/dark with localStorage
│  ├─ App.tsx / main.tsx / index.css
├─ index.html                # SEO / Open Graph meta + font links
├─ vercel.json / netlify.toml
└─ tsconfig*, vite.config.ts, package.json
```

> **Tip:** almost all content lives in `src/data/`. You rarely need to edit the
> components themselves to update text, skills, projects, or experience.

---

## Editing your content

### Contact & profile — `src/data/profile.ts`
- Update the LinkedIn URL once your profile is live:
  ```ts
  linkedin: "https://www.linkedin.com/in/REPLACE-ME",
  linkedinLabel: "LinkedIn (coming soon)",   // → change to "LinkedIn" when ready
  ```

### Projects — `src/data/projects.ts`
Each project link has one of four states, so **cards degrade gracefully** when a
link is missing:

| State | Renders as | Use for |
| --- | --- | --- |
| `{ type: "live", href: "https://…" }` | active button | a real demo / repo URL |
| `{ type: "soon" }` | dashed "(soon)" placeholder | links you'll add later |
| `{ type: "private" }` | locked, disabled "Private" | confidential / company-owned work |
| `{ type: "none" }` | hidden | nothing to show |

To publish a real link, just swap the state, e.g.:

```ts
github: { type: "soon" }               // before
github: { type: "live", href: "https://github.com/rafikgatri2002/my-repo" }  // after
```

> **Confidentiality:** the two **KAMA CI** projects are company-owned and are
> intentionally shown at a high level with **mock visuals** and `private` links —
> no real data or internal screenshots. Keep them that way unless you have
> permission to share more.

### Adding real project screenshots
1. Drop images in `public/` (e.g. `public/projects/login-1.webp`) — prefer
   optimized `.webp`/`.avif`.
2. Set that project's `screenshots` link to `{ type: "live", href: "/projects/login-1.webp" }`,
   or extend the card in `src/components/Projects.tsx` to render a gallery.

### Your CV
The CV lives at `public/cv-rafik-gatri.pdf` and stays in **French** on purpose.
Replace that file (keep the name) to update the download.

---

## Customizing the look

- **Colors:** the navy brand scale is defined in `src/index.css` under `@theme`
  (`--color-brand-50 … --color-brand-950`, anchored on `#1f3a56` / `#16293d`).
- **Fonts:** Inter (sans) + Fraunces (display serif), loaded in `index.html`.
- **Motion:** handled by `src/components/ui/Reveal.tsx`; it auto-disables for
  users who prefer reduced motion.

---

## SEO checklist before you ship

In `index.html` and `public/robots.txt`, replace the placeholder domain
`https://rafikgatri.vercel.app/` with your real URL (affects `canonical`,
Open Graph `og:url`, `og:image`, and the sitemap line).

> The social image is an SVG (`public/og-image.svg`). Some platforms prefer a
> raster image — if a link preview looks blank, export a **1200×630 PNG** and
> point the `og:image` / `twitter:image` meta tags at it.

---

## Deploy for free

### Option A — Vercel (recommended)
1. Push this repo to GitHub.
2. Go to [vercel.com](https://vercel.com) → **Add New… → Project** → import the repo.
3. Vercel auto-detects Vite (`vercel.json` is already included). Click **Deploy**.
4. You'll get a URL like `https://your-project.vercel.app`.

Or via CLI:
```bash
npm i -g vercel
vercel          # preview deploy
vercel --prod   # production deploy
```

### Option B — Netlify
1. Push to GitHub.
2. [app.netlify.com](https://app.netlify.com) → **Add new site → Import an existing project**.
3. Build settings are read from `netlify.toml` (build `npm run build`, publish `dist`). Deploy.

Or drag-and-drop the `dist/` folder (after `npm run build`) onto
[app.netlify.com/drop](https://app.netlify.com/drop).

---

## Connect a custom domain

**Vercel:** Project → **Settings → Domains → Add** your domain, then at your
registrar set:
- apex `@` → `A` record `76.76.21.21`
- `www` → `CNAME` → `cname.vercel-dns.com`

(Vercel shows the exact records to use and provisions HTTPS automatically.)

**Netlify:** Site → **Domain management → Add a domain**, then either point your
registrar's nameservers to Netlify DNS, or add:
- `www` → `CNAME` → `your-site.netlify.app`
- apex `@` → Netlify's load-balancer `A` record (shown in the dashboard)

Both providers issue free SSL certificates once DNS resolves.

---

## License

Personal project © Rafik Gatri. Code is free to reference; content and CV are not.
