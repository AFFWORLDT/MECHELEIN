import { CtaBand, JsonLd, PageHero, SectionHead, ServiceGrid } from "@/components/Page";
import { Process } from "@/components/Sections";
import { services } from "@/lib/services";
import { pageMeta } from "@/lib/seo";
import { abs, SITE_URL } from "@/lib/site";

export const metadata = pageMeta({
  title: "Technical services in Dubai: AC, electrical, plumbing, MEP and fit-out",
  description:
    "Air conditioning, electrical, plumbing, MEP installation, interior fit-out and building maintenance for homes and businesses in Dubai, from one team.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Services",
          itemListElement: services.map((s, i) => ({ "@type": "ListItem", position: i + 1, name: s.name, url: abs(`/services/${s.slug}`) })),
          provider: { "@id": `${SITE_URL}/#business` },
        }}
      />
      <PageHero
        crumbs={[{ name: "Services", href: "/services" }]}
        kicker="Our services"
        title="Technical services for every system in your building"
        lede="Installation, servicing and repairs for air conditioning, electrical, plumbing and interiors, in homes, offices and industrial sites across Dubai."
        image="/assets/img/hvac.jpg"
        alt="Rooftop HVAC units in a row"
      />
      <section className="services" aria-labelledby="all-services-h">
        <div className="wrap">
          <SectionHead
            kicker="What we do"
            id="all-services-h"
            title="Six services, one team"
            lede="Choose a service to see what it covers and the questions people ask most."
          />
          <ServiceGrid items={services} />
        </div>
      </section>
      <Process />
      <CtaBand />
    </main>
  );
}
