import type { Metadata } from "next";
import { site, withSlash } from "./site";

// Per-page metadata: title, description, canonical link and social previews.
// `title` is the page's own title; the layout's template adds the company name.
export function pageMeta({
  title,
  description,
  path,
  image = site.ogImage,
  type = "website",
  published,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  published?: string;
}): Metadata {
  const url = withSlash(path);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type,
      url,
      siteName: site.name,
      title,
      description,
      locale: "en_AE",
      images: [{ url: image, alt: title }],
      ...(published ? { publishedTime: published } : {}),
    },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}
