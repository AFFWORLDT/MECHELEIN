import ActionBar from "@/components/ActionBar";
import { Footer, RequestSection } from "@/components/Contact";
import Hero from "@/components/Hero";
import Motion from "@/components/Motion";
import { About, City, Faq, Process, Sectors, Services } from "@/components/Sections";
import SiteNav from "@/components/SiteNav";
import Ticker from "@/components/Ticker";
import { faq, site, tickerRows } from "@/lib/content";

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    name: site.name,
    alternateName: "MTS",
    description: site.description,
    image: "/assets/img/hero.jpg",
    logo: "/assets/logo.png",
    address: { "@type": "PostalAddress", addressLocality: "Dubai", addressCountry: "AE" },
    areaServed: { "@type": "City", name: "Dubai" },
    knowsAbout: ["Air conditioning", "HVAC", "Electrical works", "Plumbing", "MEP", "Interior fit-out", "Maintenance"],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Motion />
      <SiteNav />
      <main id="top">
        <Hero />
        <Ticker words={tickerRows[0]} />
        <Ticker words={tickerRows[1]} alt />
        <Services />
        <City />
        <Sectors />
        <Process />
        <About />
        <Faq />
        <RequestSection />
      </main>
      <Footer />
      <ActionBar />
    </>
  );
}
