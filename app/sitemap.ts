import type { MetadataRoute } from "next";
import { guides } from "@/lib/guides";
import { sectors } from "@/lib/sectors";
import { services } from "@/lib/services";
import { abs } from "@/lib/site";

export const dynamic = "force-static";

// Every page, built from the same data as the routes so new pages are listed automatically.
export default function sitemap(): MetadataRoute.Sitemap {
  const page = (path: string, priority: number, changeFrequency: "monthly" | "yearly" = "monthly", lastModified?: string) => ({
    url: abs(path),
    priority,
    changeFrequency,
    ...(lastModified ? { lastModified } : {}),
  });
  return [
    page("/", 1),
    page("/services", 0.9),
    ...services.map((s) => page(`/services/${s.slug}`, 0.9)),
    page("/sectors", 0.7),
    ...sectors.map((s) => page(`/sectors/${s.slug}`, 0.7)),
    page("/guides", 0.6),
    ...guides.map((g) => page(`/guides/${g.slug}`, 0.6, "yearly", g.published)),
    page("/about", 0.6),
    page("/how-we-work", 0.5),
    page("/faq", 0.6),
    page("/contact", 0.8),
    page("/privacy", 0.2, "yearly"),
    page("/terms", 0.2, "yearly"),
  ];
}
