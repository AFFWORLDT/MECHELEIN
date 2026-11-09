import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand, FaqList, faqJsonLd, GuideCards, JsonLd, LinkCards, PageHero, SectionHead } from "@/components/Page";
import { Process } from "@/components/Sections";
import { ArrowIcon, Kicker } from "@/components/ui";
import { guides } from "@/lib/guides";
import { sectors } from "@/lib/sectors";
import { getService, services } from "@/lib/services";
import { pageMeta } from "@/lib/seo";
import { abs, mainAction, SITE_URL } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(props: PageProps<"/services/[slug]">) {
  const { slug } = await props.params;
  const s = getService(slug);
  if (!s) return {};
  return pageMeta({ title: s.seoTitle, description: s.seoDescription, path: `/services/${s.slug}`, image: s.image });
}

export default async function ServicePage(props: PageProps<"/services/[slug]">) {
  const { slug } = await props.params;
  const s = getService(slug);
  if (!s) notFound();

  const related = s.related.map((r) => services.find((x) => x.slug === r)!).filter(Boolean);
  const relatedGuides = s.guides.map((g) => guides.find((x) => x.slug === g)!).filter(Boolean);
  const forSectors = sectors.filter((sec) => sec.services.includes(s.slug));

  return (
    <main>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: s.name,
            serviceType: s.name,
            description: s.seoDescription,
            url: abs(`/services/${s.slug}`),
            image: abs(s.image),
            areaServed: { "@type": "City", name: "Dubai" },
            provider: { "@id": `${SITE_URL}/#business` },
          },
          faqJsonLd(s.faqs),
        ]}
      />
      <PageHero
        crumbs={[
          { name: "Services", href: "/services" },
          { name: s.name, href: `/services/${s.slug}` },
        ]}
        kicker="Services in Dubai"
        title={s.name}
        lede={s.lede}
        image={s.image}
        alt={s.alt}
        position={s.position}
      />

      <section className="page-section" aria-labelledby="overview-h">
        <div className="wrap split">
          <div className="prose">
            <Kicker>Overview</Kicker>
            <h2 id="overview-h">{s.name} for Dubai properties</h2>
            {s.intro.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <h3>What&apos;s included</h3>
            <div className="features rv-group">
              {s.includes.map((f) => (
                <div key={f.title} className="feature">
                  <b>{f.title}</b>
                  <span>{f.text}</span>
                </div>
              ))}
            </div>
          </div>
          <aside className="aside-card" aria-labelledby="when-h">
            <h2 id="when-h">When to call us</h2>
            <ul className="ticks">
              {s.whenToCall.map((w) => (
                <li key={w}>{w}</li>
              ))}
            </ul>
            <Link className="btn" href={mainAction.href}>
              {mainAction.label} <ArrowIcon />
            </Link>
            {forSectors.length > 0 && (
              <p className="aside-card__sectors">
                For{" "}
                {forSectors.map((sec, i) => (
                  <span key={sec.slug}>
                    <Link href={`/sectors/${sec.slug}`}>{sec.name.toLowerCase()}</Link>
                    {i < forSectors.length - 2 ? ", " : i === forSectors.length - 2 ? " and " : ""}
                  </span>
                ))}{" "}
                properties.
              </p>
            )}
          </aside>
        </div>
      </section>

      <Process />

      <section className="faq" aria-labelledby="service-faq-h">
        <div className="wrap">
          <div>
            <Kicker>Questions</Kicker>
            <h2 id="service-faq-h">{s.name}: common questions</h2>
            <p className="lede">Answers to what people ask most. For anything else, send us a request.</p>
          </div>
          <FaqList items={s.faqs} />
        </div>
      </section>

      <section className="page-section page-section--tight" aria-labelledby="guides-h">
        <div className="wrap">
          <SectionHead kicker="Guides" id="guides-h" title="Helpful reading" lede="Practical advice for Dubai property owners." />
          <GuideCards items={relatedGuides} />
        </div>
      </section>

      <section className="page-section page-section--alt" aria-labelledby="related-h">
        <div className="wrap">
          <SectionHead kicker="Related services" id="related-h" title="Often needed together" />
          <LinkCards
            items={related.map((r) => ({ href: `/services/${r.slug}`, title: r.name, text: r.short, image: r.image, alt: r.alt, position: r.position }))}
          />
          <p className="more-link">
            <Link className="text-link" href="/services">
              All services <ArrowIcon />
            </Link>
          </p>
        </div>
      </section>

      <CtaBand title={`Need ${s.name.toLowerCase()} in Dubai?`} />
    </main>
  );
}
