import { RequestSection } from "@/components/Contact";
import Hero from "@/components/Hero";
import { faqJsonLd, JsonLd } from "@/components/Page";
import { About, City, Faq, Process, Sectors, Services } from "@/components/Sections";
import Ticker from "@/components/Ticker";
import { faq, tickerRows } from "@/lib/content";

export default function Home() {
  return (
    <main id="top">
      <JsonLd data={faqJsonLd(faq)} />
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
  );
}
