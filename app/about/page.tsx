import { CtaBand, JsonLd, PageHero, SectionHead, ServiceGrid } from "@/components/Page";
import { About, Sectors } from "@/components/Sections";
import { services } from "@/lib/services";
import { pageMeta } from "@/lib/seo";
import { abs, site, SITE_URL } from "@/lib/site";

export const metadata = pageMeta({
  title: "About Mechelein Technical Services, Dubai",
  description:
    "Mechelein Technical Services is a technical services company in Dubai: one team for air conditioning, electrical, plumbing, MEP, fit-out and maintenance.",
  path: "/about",
});

const values = [
  { title: "One team", text: "One company to call for every trade, so nothing falls between contractors." },
  { title: "Clear communication", text: "We agree what needs doing before work starts, and keep you updated." },
  { title: "Careful work", text: "Tidy sites and work checked before it is handed back to you." },
  { title: "The whole life of a system", text: "From installation to servicing, repairs and upgrades." },
];

export default function AboutPage() {
  return (
    <main>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "AboutPage", name: `About ${site.name}`, url: abs("/about"), about: { "@id": `${SITE_URL}/#business` } }} />
      <PageHero
        crumbs={[{ name: "About", href: "/about" }]}
        kicker="About us"
        title="A technical services company in Dubai"
        lede="Mechelein Technical Services (MTS) looks after the systems that keep buildings running: cooling, power, water and interiors."
        image="/assets/img/team.jpg"
        alt="Two technicians working on ductwork and air conditioning units on a rooftop"
        position="62% 50%"
      />
      <About />
      <section className="page-section page-section--alt" aria-labelledby="values-h">
        <div className="wrap">
          <SectionHead kicker="How we work" id="values-h" title="What you can expect" />
          <div className="features features--four rv-group">
            {values.map((v) => (
              <div key={v.title} className="feature">
                <b>{v.title}</b>
                <span>{v.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="services" aria-labelledby="about-services-h">
        <div className="wrap">
          <SectionHead kicker="What we do" id="about-services-h" title="Our services" lede="Six services, delivered by one team." />
          <ServiceGrid items={services} />
        </div>
      </section>
      <Sectors />
      <CtaBand />
    </main>
  );
}
