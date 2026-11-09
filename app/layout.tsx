import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import { site } from "@/lib/content";
import "./globals.css";

// Archivo with its width axis: headings use the wide cut to match the logo's wordmark.
const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
};

export const viewport: Viewport = {
  themeColor: "#061636",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // The inline script adds "js" before first paint so the entrance and scroll
    // animations start from their hidden state; without it everything stays visible.
    <html lang="en" className={archivo.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
