import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand, formatDate, GuideCards, JsonLd, PageHero, SectionHead } from "@/components/Page";
import { ArrowIcon } from "@/components/ui";
import { getGuide, guides } from "@/lib/guides";
import { getService } from "@/lib/services";
import { pageMeta } from "@/lib/seo";
import { abs, mainAction, site, SITE_URL } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata(props: PageProps<"/guides/[slug]">) {
  const { slug } = await props.params;
  const g = getGuide(slug);
  if (!g) return {};
  return pageMeta({ title: g.title, description: g.description, path: `/guides/${g.slug}`, image: g.image, type: "article", published: g.published });
}

export default async function GuidePage(props: PageProps<"/guides/[slug]">) {
  const { slug } = await props.params;
  const g = getGuide(slug);
  if (!g) notFound();

  const service = getService(g.service);
  const more = [...guides.filter((x) => x.slug !== g.slug && x.service === g.service), ...guides.filter((x) => x.slug !== g.slug && x.service !== g.service)].slice(0, 3);

  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: g.title,
          description: g.description,
          image: abs(g.image),
          datePublished: g.published,
          dateModified: g.published,
          mainEntityOfPage: abs(`/guides/${g.slug}`),
          author: { "@type": "Organization", name: site.name, url: SITE_URL },
          publisher: { "@id": `${SITE_URL}/#business` },
        }}
      />
      <PageHero
        crumbs={[
          { name: "Guides", href: "/guides" },
          { name: g.title, href: `/guides/${g.slug}` },
        ]}
        kicker={service ? service.name : "Guide"}
        title={g.title}
        lede={g.description}
        image={g.image}
        alt={g.alt}
        position={g.position}
        actions={false}
      >
        <p className="ph-meta ph-in">
          <time dateTime={g.published}>{formatDate(g.published)}</time> · {g.readMinutes} min read
        </p>
      </PageHero>

      <article className="page-section article" aria-labelledby="page-h">
        <div className="wrap split split--article">
          <div className="prose prose--article">
            <p className="article__intro">{g.intro}</p>
            {g.blocks.map((b, i) => (
              <section key={i}>
                {b.heading && <h2>{b.heading}</h2>}
                {b.paragraphs?.map((p) => <p key={p}>{p}</p>)}
                {b.list && (
                  <ul className="ticks">
                    {b.list.map((li) => (
                      <li key={li}>{li}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
            <p className="article__note">
              This guide is general advice. For anything involving electrics, gas or structural work, use a qualified professional.
            </p>
          </div>
          {service && (
            <aside className="aside-card" aria-labelledby="aside-h">
              <h2 id="aside-h">Need help with this?</h2>
              <p>
                Our <Link href={`/services/${service.slug}`}>{service.name.toLowerCase()}</Link> team works on homes, offices and industrial sites
                across Dubai.
              </p>
              <Link className="btn" href={mainAction.href}>
                {mainAction.label} <ArrowIcon />
              </Link>
              <Link className="text-link" href={`/services/${service.slug}`}>
                About {service.name.toLowerCase()} <ArrowIcon />
              </Link>
            </aside>
          )}
        </div>
      </article>

      <section className="page-section page-section--alt" aria-labelledby="more-h">
        <div className="wrap">
          <SectionHead kicker="Keep reading" id="more-h" title="More guides" />
          <GuideCards items={more} />
          <p className="more-link">
            <Link className="text-link" href="/guides">
              All guides <ArrowIcon />
            </Link>
          </p>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
