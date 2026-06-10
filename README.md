# Shipped by Allen

Portfolio and product-studio site for Allen Febi, built with SvelteKit and published at [shippedbyallen.com](https://shippedbyallen.com).

This repo powers the current editorial-style portfolio: the `Shipped by Allen` brand system, the split hero with `BrandMark` and `PixelPortrait`, the shipped-apps shelf, app detail pages, project case studies, resume-backed experience data, and direct contact links.

## Live Site

- Production: [shippedbyallen.com](https://shippedbyallen.com)
- Primary live product linked from the site: [foodalertgo.com](https://foodalertgo.com)

## What This Site Actually Includes

- A single-page portfolio homepage in [src/routes/+page.svelte](/Users/all3n2601/Desktop/Personal/Allens-Portfolio/src/routes/+page.svelte)
- Brand and identity data in [src/lib/data/site.ts](/Users/all3n2601/Desktop/Personal/Allens-Portfolio/src/lib/data/site.ts)
- Shipped apps and subdomain planning in [src/lib/data/shipped-apps.ts](/Users/all3n2601/Desktop/Personal/Allens-Portfolio/src/lib/data/shipped-apps.ts)
- App detail pages at `/apps/[slug]` backed by [src/lib/data/app-details.ts](/Users/all3n2601/Desktop/Personal/Allens-Portfolio/src/lib/data/app-details.ts)
- Project, skills, resume, education, and honors data under [src/lib/data](/Users/all3n2601/Desktop/Personal/Allens-Portfolio/src/lib/data)
- Static assets such as the resume PDF, portrait art, favicon set, and brand lockup under [static](/Users/all3n2601/Desktop/Personal/Allens-Portfolio/static)

## Stack

- SvelteKit 2 + Svelte 5
- Vite
- `@sveltejs/adapter-static`
- Cloudflare Pages
- Wrangler for Pages deployment

The site is a prerendered static build. Current config:

- `ssr = false` and `prerender = true` in [src/routes/+layout.js](/Users/all3n2601/Desktop/Personal/Allens-Portfolio/src/routes/+layout.js)
- build output written to `build/` via [svelte.config.js](/Users/all3n2601/Desktop/Personal/Allens-Portfolio/svelte.config.js)
- Cloudflare Pages project wiring in [wrangler.toml](/Users/all3n2601/Desktop/Personal/Allens-Portfolio/wrangler.toml)

## Local Development

Requirements:

- Node.js 22 or newer
- npm

Run locally:

```bash
npm install
npm run dev
```

Build and preview:

```bash
npm run build
npm run preview
```

Useful checks:

```bash
npm run check
```

## Content Model

Most portfolio updates are data edits rather than layout rewrites:

- Personal and brand metadata: [src/lib/data/site.ts](/Users/all3n2601/Desktop/Personal/Allens-Portfolio/src/lib/data/site.ts)
- Shipped products list: [src/lib/data/shipped-apps.ts](/Users/all3n2601/Desktop/Personal/Allens-Portfolio/src/lib/data/shipped-apps.ts)
- App detail-page copy: [src/lib/data/app-details.ts](/Users/all3n2601/Desktop/Personal/Allens-Portfolio/src/lib/data/app-details.ts)
- Project cards and links: [src/lib/data/projects.ts](/Users/all3n2601/Desktop/Personal/Allens-Portfolio/src/lib/data/projects.ts)
- Skills, experience, education, honors: [src/lib/data/skills.ts](/Users/all3n2601/Desktop/Personal/Allens-Portfolio/src/lib/data/skills.ts), [src/lib/data/resume.ts](/Users/all3n2601/Desktop/Personal/Allens-Portfolio/src/lib/data/resume.ts)

## Repo Notes

- This repo is no longer documented as a Vercel deployment. Cloudflare Pages is the current production host.
- The site does not currently ship a backend contact form, project filtering UI, or generic template sections described in the old README.
- There is a legacy `.vercel/` folder in the repo, but it is not the active deployment target.

## Deployment

Deployment notes live in [DEPLOYMENT.md](/Users/all3n2601/Desktop/Personal/Allens-Portfolio/DEPLOYMENT.md).
