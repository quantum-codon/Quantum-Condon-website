import * as React from "react";

type SeoProps = {
  title: string;
  description: string;
  pathname?: string;
  image?: string;
  keywords?: string[];
  noindex?: boolean;
};

const siteName = "Quantum Codon";
const siteUrl = (process.env.GATSBY_SITE_URL || process.env.SITE_URL || "https://quantumcodon.in").replace(/\/$/, "");
const defaultImage = "/brand_logo.png";
const googleVerification = "aRtv48mj2ieJb0cikV0T5VLcZX0QkWOkd9p2vyva68U";
const brandAliases = ["QuantumCodon", "Quantum Codon Pvt Ltd", "Quantum Codon Private Limited"];

function absoluteUrl(path: string) {
  if (/^https?:\/\//i.test(path)) {
    return path;
  }

  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export function SEO({
  title,
  description,
  pathname = "/",
  image = defaultImage,
  keywords = [],
  noindex = false
}: SeoProps) {
  const pageTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
  const canonical = absoluteUrl(pathname);
  const imageUrl = absoluteUrl(image);
  const robots = noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large";
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: siteName,
        alternateName: brandAliases,
        url: siteUrl,
        logo: absoluteUrl("/brand_logo.png"),
        sameAs: []
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        name: siteName,
        alternateName: brandAliases,
        url: siteUrl,
        inLanguage: "en",
        publisher: {
          "@id": `${siteUrl}/#organization`
        }
      },
      {
        "@type": "WebPage",
        "@id": `${canonical}#webpage`,
        url: canonical,
        name: pageTitle,
        description,
        inLanguage: "en",
        isPartOf: {
          "@id": `${siteUrl}/#website`
        },
        about: {
          "@id": `${siteUrl}/#organization`
        }
      }
    ]
  };

  return (
    <>
      <html lang="en" />
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      {keywords.length ? <meta name="keywords" content={keywords.join(", ")} /> : null}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content={robots} />
      <meta name="google-site-verification" content={googleVerification} />
      <meta name="application-name" content="QuantumCodon" />
      <meta name="apple-mobile-web-app-title" content="QuantumCodon" />
      <meta name="theme-color" content="#020510" />
      <link rel="canonical" href={canonical} />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preload" href="/brand_logo.png" as="image" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={imageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </>
  );
}
