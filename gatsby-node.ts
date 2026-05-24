import type { GatsbyNode } from "gatsby";
import { writeFileSync } from "node:fs";
import { join } from "node:path";

const pages = [
  "/",
  "/qc-pkd/",
  "/analytical-services/",
  "/biomanufacturing/",
  "/training/",
  "/regulatory/"
];

function getSiteUrl(siteUrl?: string) {
  return (siteUrl || process.env.GATSBY_SITE_URL || process.env.SITE_URL || "https://quantumcodon.com").replace(/\/$/, "");
}

export const onPostBuild: GatsbyNode["onPostBuild"] = ({ reporter, store }) => {
  const program = store.getState().program;
  const siteMetadata = store.getState().config.siteMetadata as { siteUrl?: string };
  const siteUrl = getSiteUrl(siteMetadata.siteUrl);
  const now = new Date().toISOString();

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${siteUrl}${page}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${page === "/" ? "weekly" : "monthly"}</changefreq>
    <priority>${page === "/" ? "1.0" : "0.8"}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

  const robots = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;

  writeFileSync(join(program.directory, "public", "sitemap.xml"), sitemap);
  writeFileSync(join(program.directory, "public", "robots.txt"), robots);
  reporter.info("Generated SEO sitemap.xml and robots.txt");
};
