# GetFaboo.com — V0.1

AI creative studio + social media portfolio. Built with Astro 7 + Tailwind CSS v4.
Deploys to Cloudflare Pages (static). Live URL: https://getfaboo.com

Based on [astro-starter-portfolio](https://github.com/BracoZS/astro-starter-portfolio) (MIT), restyled to a dark-first Modern Creative Studio look.

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # type-check + static build → ./dist/
```

## Design tokens

- Accent color: **one** variable — `--signal` in `src/styles/global.css` (`#2b6bff`, Electric Blue). Change it there to re-skin the whole site.
- Fonts: Space Grotesk (display) + Inter (body), self-hosted via Astro Fonts API (`astro.config.mjs`).
- Dark-first, single theme. No light-mode toggle.

## Add a new project (no layout changes needed)

1. Create `src/content/work/<slug>.md`, e.g. `src/content/work/my-ai-film.md`
2. Fill the frontmatter:

```md
---
title: "My AI Film"
category: "AI VIDEO"        # one of: AI VIDEO | SOCIAL MEDIA | AI PRODUCTS
year: 2026
cover: "/covers/my-film.svg"   # or a remote URL, e.g. https://i.ytimg.com/vi/VIDEO_ID/hqdefault.jpg
youtubeUrl: "https://www.youtube.com/watch?v=VIDEO_ID"   # optional — embeds the video on the detail page
description: "One or two sentences about the project."
images: []                   # optional gallery images
tools: ["AI Video", "Blender"]  # optional
featured: false
---

Optional longer body text (Markdown) shown on the detail page.
```

3. The project automatically appears on `/work` (with category filter),
   on `/ai-lab` (if category is `AI PRODUCTS`), and gets its own page at
   `/work/<slug>`.

## Site-wide copy

Edit `src/site.config.ts` — name, tagline, email, social links, nav, about background list.

## Deploy (Cloudflare Pages)

- Push this repo to GitHub → Cloudflare Pages → connect repo → build command `npm run build`, output dir `dist`.
- Add custom domain `getfaboo.com` in Pages → Custom domains (free SSL + CDN included).
