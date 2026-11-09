import Link from "next/link";
import { CtaBand, PageHero, SectionHead } from "@/components/Page";
import { sectors } from "@/lib/sectors";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Sectors: residential, commercial and industrial properties in Dubai",
  description:
    "Technical services for villas and apartments, offices and shops, and warehouses and industrial facilities in Dubai, from Mechelein Technical Services.",
  path: "/sectors",
});

export default function SectorsPage() {
  return (
    <main>
      <PageHero
        crumbs={[{ name: "Sectors", href: "/sectors" }]}
        kicker="Sectors"
        title="Properties we work on"
        lede="Residential, commercial and industrial properties across Dubai, each with its own needs."
        image="/assets/img/dubai.jpg"
        alt="Downtown Dubai skyline with the Burj Khalifa"
      />
      <section className="sectors" aria-labelledby="all-sectors-h">
        <div className="wrap">
          <SectionHead
            kicker="Who we work for"
            id="all-sectors-h"
            title="Choose your property type"
            lede="See the work we do most often for each kind of property."
          />
          <div className="tiles">
            {sectors.map((s) => (
              <Link key={s.slug} className="tile" href={`/sectors/${s.slug}`}>
                <div className="tile__ph">
                  <img src={s.image} alt={s.alt} loading="lazy" style={s.position ? { objectPosition: s.position } : undefined} />
                </div>
                <h3>{s.name}</h3>
                <p>{s.lede}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
