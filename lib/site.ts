// Site-wide settings used by metadata, structured data, the sitemap and robots.txt.

// The live domain (the Cloudflare custom domain in wrangler.jsonc). Canonical links, the sitemap
// and social previews are built from it; NEXT_PUBLIC_SITE_URL overrides it, e.g. for a staging copy.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://mecheleindxb.com").replace(/\/$/, "");

// Page paths end in a slash to match the exported folders (/about/); files (.jpg, .xml) don't.
export const withSlash = (path: string) => (path.endsWith("/") || /\.[a-z0-9]+$/i.test(path) ? path : `${path}/`);
export const abs = (path: string) => `${SITE_URL}${path === "/" ? "/" : withSlash(path)}`;

export const site = {
  name: "Mechelein Technical Services",
  shortName: "MTS",
  title: "Mechelein Technical Services | Technical services company in Dubai",
  description:
    "Mechelein Technical Services is a technical services company in Dubai for air conditioning, electrical, plumbing, MEP, interior fit-out and maintenance works.",
  location: "Dubai, United Arab Emirates",
  ogImage: "/assets/img/hero.jpg",
  logo: "/assets/logo.png",
};

// The one action every page leads to.
export const mainAction = { href: "/contact", label: "Request a site visit" };

// No backend yet: the request form opens the visitor's email app addressed here.
// CLIENT TO CONFIRM: replace with MTS's real inbox.
export const FORM_TO = "info@mechelein.example";

export const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/sectors", label: "Sectors" },
  { href: "/guides", label: "Guides" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

// Structured data for the business, shared by every page.
export const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": `${SITE_URL}/#business`,
  name: site.name,
  alternateName: site.shortName,
  description: site.description,
  url: SITE_URL,
  logo: abs(site.logo),
  image: abs(site.ogImage),
  address: { "@type": "PostalAddress", addressLocality: "Dubai", addressCountry: "AE" },
  areaServed: { "@type": "City", name: "Dubai" },
};

export const jsonLd = (data: object) => JSON.stringify(data).replace(/</g, "\\u003c");
