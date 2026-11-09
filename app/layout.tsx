import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import ActionBar from "@/components/ActionBar";
import { Footer } from "@/components/Contact";
import Motion from "@/components/Motion";
import { JsonLd } from "@/components/Page";
import SiteNav from "@/components/SiteNav";
import { businessJsonLd, site, SITE_URL } from "@/lib/site";
import "./globals.css";

// Archivo with its width axis: headings use the wide cut to match the logo's wordmark.
const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: site.title, template: `%s | ${site.name}` },
  description: site.description,
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: site.name,
    title: site.title,
    description: site.description,
    locale: "en_AE",
    images: [{ url: site.ogImage, alt: site.name }],
  },
  twitter: { card: "summary_large_image", title: site.title, description: site.description, images: [site.ogImage] },
  robots: { index: true, follow: true },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#061636",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // The inline script adds "js" before first paint so the entrance and scroll
    // animations start from their hidden state; without it everything stays visible.
    <html lang="en-AE" className={archivo.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <JsonLd data={businessJsonLd} />
        <Motion />
        <SiteNav />
        {children}
        <Footer />
        <ActionBar />
      </body>
    </html>
  );
}
