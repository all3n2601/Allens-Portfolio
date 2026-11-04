import { appDetailSlugs } from '$lib/data/app-details';
import { site } from '$lib/data/site';

export const prerender = true;

export function GET() {
  const paths = ['/', ...appDetailSlugs.map((slug) => `/apps/${slug}`)];
  const urls = paths.map((path) => `  <url><loc>${site.domain}${path}</loc></url>`).join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
}
