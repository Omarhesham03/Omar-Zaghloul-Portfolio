/**
 * Custom sitemap generator — runs after `astro build`.
 * Replaces @astrojs/sitemap which crashes on Astro 4.16 because the
 * astro:routes:resolved hook is not available in that version.
 *
 * Usage: node scripts/generate-sitemap.mjs
 * Called automatically via `npm run build` (postbuild script in package.json).
 */

import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, '..', 'dist');
const SITE = 'https://www.omarzaghloul.com';

// All static routes (trailing slash per astro trailingSlash: 'always')
const ROUTES = [
  '/',
  '/projects/oncoflow/',
  '/projects/altinkapi/',
  '/projects/educounsellor/',
  '/projects/spotter/',
  '/projects/reverse-swing/',
];

const now = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

// Build sitemap XML
const sitemapEntries = ROUTES.map(path => `  <url>
    <loc>${SITE}${path}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${path === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n');

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries}
</urlset>`;

// Build sitemap-index.xml (matches what robots.txt references)
const sitemapIndexXml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${SITE}/sitemap-0.xml</loc>
    <lastmod>${now}</lastmod>
  </sitemap>
</sitemapindex>`;

if (!existsSync(DIST)) {
  console.error('[sitemap] dist/ not found — run astro build first.');
  process.exit(1);
}

writeFileSync(join(DIST, 'sitemap-0.xml'), sitemapXml, 'utf-8');
writeFileSync(join(DIST, 'sitemap-index.xml'), sitemapIndexXml, 'utf-8');

console.log('[sitemap] ✓ sitemap-index.xml and sitemap-0.xml written to dist/');
