import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand, FaqList, faqJsonLd, JsonLd, LinkCards, PageHero, SectionHead } from "@/components/Page";
import { ArrowIcon, Kicker } from "@/components/ui";
import { getSector, sectors } from "@/lib/sectors";
import { services } from "@/lib/services";
import { pageMeta } from "@/lib/seo";
import { mainAction } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return sectors.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(props: PageProps<"/sectors/[slug]">) {
  const { slug } = await props.params;
  const s = getSector(slug);
  if (!s) return {};
  return pageMeta({ title: s.seoTitle, description: s.seoDescription, path: `/sectors/${s.slug}`, image: s.image });
}

export default async function SectorPage(props: PageProps<"/sectors/[slug]">) {
  const { slug } = await props.params;
  const s = getSector(slug);
  if (!s) notFound();

  const sectorServices = s.services.map((x) => services.find((sv) => sv.slug === x)!).filter(Boolean);
  const others = sectors.filter((o) => o.slug !== s.slug);

  return (
    <main>
      <JsonLd data={faqJsonLd(s.faqs)} />
      <PageHero
        crumbs={[
          { name: "Sectors", href: "/sectors" },
          { name: s.name, href: `/sectors/${s.slug}` },
        ]}
        kicker={`${s.name} properties in Dubai`}
        title={`${s.name} technical services`}
        lede={s.lede}
        image={s.image}
        alt={s.alt}
        position={s.position}
      />

      <section className="page-section" aria-labelledby="overview-h">
        <div className="wrap split">
          <div className="prose">
            <Kicker>Overview</Kicker>
            <h2 id="overview-h">What {s.name.toLowerCase()} properties need</h2>
            {s.intro.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <div className="features rv-group">
              {s.needs.map((f) => (
                <div key={f.title} className="feature">
                  <b>{f.title}</b>
                  <span>{f.text}</span>
                </div>
              ))}
            </div>
          </div>
          <aside className="aside-card" aria-labelledby="types-h">
            <h2 id="types-h">Properties we work on</h2>
            <ul className="ticks">
              {s.properties.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <Link className="btn" href={mainAction.href}>
              {mainAction.label} <ArrowIcon />
            </Link>
          </aside>
        </div>
      </section>

      <section className="page-section page-section--alt" aria-labelledby="sector-services-h">
        <div className="wrap">
          <SectionHead
            kicker="Services"
            id="sector-services-h"
            title={`Services for ${s.name.toLowerCase()} properties`}
            lede="The work we are asked for most often."
          />
          <LinkCards
            items={sectorServices.map((r) => ({ href: `/services/${r.slug}`, title: r.name, text: r.short, image: r.image, alt: r.alt, position: r.position }))}
          />
        </div>
      </section>

      <section className="faq" aria-labelledby="sector-faq-h">
        <div className="wrap">
          <div>
            <Kicker>Questions</Kicker>
            <h2 id="sector-faq-h">Common questions</h2>
            <p className="lede">For anything else, send us a request.</p>
          </div>
          <FaqList items={s.faqs} />
        </div>
      </section>

      <section className="page-section page-section--tight" aria-labelledby="other-sectors-h">
        <div className="wrap">
          <SectionHead kicker="Other sectors" id="other-sectors-h" title="We also work on" />
          <div className="tiles tiles--two">
            {others.map((o) => (
              <Link key={o.slug} className="tile" href={`/sectors/${o.slug}`}>
                <div className="tile__ph">
                  <img src={o.image} alt={o.alt} loading="lazy" style={o.position ? { objectPosition: o.position } : undefined} />
                </div>
                <h3>{o.name}</h3>
                <p>{o.short}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
