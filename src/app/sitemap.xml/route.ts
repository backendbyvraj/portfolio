import { projects } from "@/lib/projectsData";
import { SITE_URL } from "@/lib/seoConfig";
import { NextResponse } from "next/server";

// Bump this when page content actually changes. A lastmod that is always
// "now" teaches Google to ignore it, which slows down recrawling.
const LAST_CONTENT_UPDATE = "2026-09-27";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  const projectUrls = projects
    .map(
      (p) => `
  <url>
    <loc>${SITE_URL}/projects/${p.slug}</loc>
    <lastmod>${LAST_CONTENT_UPDATE}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`
    )
    .join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE_URL}</loc>
    <lastmod>${LAST_CONTENT_UPDATE}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${SITE_URL}/about</loc>
    <lastmod>${LAST_CONTENT_UPDATE}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${SITE_URL}/projects</loc>
    <lastmod>${LAST_CONTENT_UPDATE}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${SITE_URL}/resume</loc>
    <lastmod>${LAST_CONTENT_UPDATE}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  ${projectUrls}
</urlset>`;

  return new NextResponse(sitemap, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "no-cache, no-store, must-revalidate",
      "CDN-Cache-Control": "no-store",
      "Vercel-CDN-Cache-Control": "no-store",
    },
  });
}
