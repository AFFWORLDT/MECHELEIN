import { CtaBand, GuideCards, JsonLd, PageHero, SectionHead } from "@/components/Page";
import { guides } from "@/lib/guides";
import { pageMeta } from "@/lib/seo";
import { abs, site } from "@/lib/site";

export const metadata = pageMeta({
  title: "Guides: AC, electrical and plumbing advice for Dubai property owners",
  description:
    "Practical guides on air conditioning, electrical safety, plumbing, MEP, fit-outs and maintenance for villas, apartments and offices in Dubai.",
  path: "/guides",
});

export default function GuidesPage() {
  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: `${site.name} guides`,
          url: abs("/guides"),
          blogPost: guides.map((g) => ({ "@type": "BlogPosting", headline: g.title, url: abs(`/guides/${g.slug}`), datePublished: g.published })),
        }}
      />
      <PageHero
        crumbs={[{ name: "Guides", href: "/guides" }]}
        kicker="Guides"
        title="Practical advice for Dubai properties"
        lede="Plain-language guides on keeping air conditioning, electrics and plumbing in good shape, and on planning bigger works."
        image="/assets/img/engineers.jpg"
        alt="Two engineers reviewing drawings"
        position="30% 50%"
        actions={false}
      />
      <section className="page-section" aria-labelledby="all-guides-h">
        <div className="wrap">
          <SectionHead kicker="All guides" id="all-guides-h" title={`${guides.length} guides`} lede="Pick a topic to read." />
          <GuideCards items={guides} />
        </div>
      </section>
      <CtaBand title="Rather have someone take a look?" />
    </main>
  );
}
