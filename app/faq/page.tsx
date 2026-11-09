import Link from "next/link";
import { CtaBand, FaqList, faqJsonLd, JsonLd, PageHero } from "@/components/Page";
import { Kicker } from "@/components/ui";
import { faq } from "@/lib/content";
import { sectors } from "@/lib/sectors";
import { services } from "@/lib/services";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Frequently asked questions",
  description:
    "Answers to common questions about air conditioning, electrical, plumbing, MEP, fit-out and maintenance work in Dubai, and how to book a visit.",
  path: "/faq",
});

const groups = [
  { id: "general", title: "General", items: faq, href: undefined as string | undefined },
  ...services.map((s) => ({ id: s.slug, title: s.name, items: s.faqs, href: `/services/${s.slug}` })),
  ...sectors.map((s) => ({ id: s.slug, title: `${s.name} properties`, items: s.faqs, href: `/sectors/${s.slug}` })),
];

export default function FaqPage() {
  return (
    <main>
      <JsonLd data={faqJsonLd(groups.flatMap((g) => g.items))} />
      <PageHero
        crumbs={[{ name: "Questions", href: "/faq" }]}
        kicker="Questions"
        title="Frequently asked questions"
        lede="Answers to what people ask most about our services and how to book a visit."
        image="/assets/img/ac-units.jpg"
        alt="Air conditioning condensers on an outside wall"
      />
      <nav className="page-section page-section--tight faq-index" aria-label="Question topics">
        <div className="wrap">
          <ul>
            {groups.map((g) => (
              <li key={g.id}>
                <a href={`#${g.id}`}>{g.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      {groups.map((g, i) => (
        <section key={g.id} id={g.id} className={i % 2 ? "faq faq--plain" : "faq"} aria-labelledby={`${g.id}-h`}>
          <div className="wrap">
            <div>
              <Kicker>Questions</Kicker>
              <h2 id={`${g.id}-h`}>{g.title}</h2>
              {g.href && (
                <Link className="text-link" href={g.href}>
                  More about {g.title.toLowerCase()}
                </Link>
              )}
            </div>
            <FaqList items={g.items} openFirst={false} />
          </div>
        </section>
      ))}
      <CtaBand title="Still have a question?" text="Send us a request with the details and we will get back to you." />
    </main>
  );
}
