# Deployment

This portfolio is deployed to Cloudflare Pages, not Vercel.

## Production Target

- Site: [shippedbyallen.com](https://shippedbyallen.com)
- Cloudflare Pages project: `shippedbyallen-portfolio`
- Build output directory: `build`

The deployment config is split across:

- [wrangler.toml](/Users/all3n2601/Desktop/Personal/Allens-Portfolio/wrangler.toml)
- [.github/workflows/cloudflare-pages.yml](/Users/all3n2601/Desktop/Personal/Allens-Portfolio/.github/workflows/cloudflare-pages.yml)
- [svelte.config.js](/Users/all3n2601/Desktop/Personal/Allens-Portfolio/svelte.config.js)

## How Production Deploys

Pushes to `main` trigger the GitHub Actions workflow in `.github/workflows/cloudflare-pages.yml`.

That workflow:

1. Checks out the repo
2. Uses Node 22
3. Ensures the Cloudflare Pages project exists
4. Runs `npm ci`
5. Runs `npm run build`
6. Publishes `build/` with Wrangler Pages deploy

## Required GitHub Secrets

The workflow expects:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

Without those, the GitHub deployment job fails before publish.

## Local Pre-Deploy Check

Before pushing a release:

```bash
npm ci
npm run check
npm run build
```

If the site builds successfully, the output Cloudflare publishes is the static `build/` folder.

## Important Project Behavior

- The site is prerendered static output.
- `src/routes/+layout.js` sets `ssr = false` and `prerender = true`.
- App detail routes under `/apps/[slug]` are prerendered through `entries()` in [src/routes/apps/[slug]/+page.ts](/Users/all3n2601/Desktop/Personal/Allens-Portfolio/src/routes/apps/[slug]/+page.ts).

## Cloudflare Pages Setup Notes

If you ever need to recreate the Pages project manually, keep these values aligned with the repo:

- Framework/build command: `npm run build`
- Output directory: `build`
- Node version: 22
- Production branch: `main`

## Cleanup Notes

- Do not point contributors to Vercel; that is stale documentation.
- Do not describe this as a generic starter or placeholder portfolio. The live site is the `Shipped by Allen` portfolio and product-studio surface.
