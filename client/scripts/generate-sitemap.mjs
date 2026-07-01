import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { serviceData } from '../src/data/serviceData.js';

const SITE_URL = 'https://frontrunnerrestoration.com';
const __dirname = dirname(fileURLToPath(import.meta.url));

const staticPaths = ['/', '/about', '/before-after', '/contact', '/privacy-policy'];
const servicePaths = serviceData.map((service) => `/services/${service.slug}`);
const paths = [...staticPaths, ...servicePaths];

const urls = paths
  .map((path) => `  <url><loc>${SITE_URL}${path}</loc></url>`)
  .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

writeFileSync(resolve(__dirname, '../public/sitemap.xml'), xml);
console.log(`Generated sitemap.xml with ${paths.length} URLs.`);
