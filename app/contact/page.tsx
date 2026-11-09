import { RequestSection } from "@/components/Contact";
import { JsonLd, PageHero } from "@/components/Page";
import { pageMeta } from "@/lib/seo";
import { abs, site, SITE_URL } from "@/lib/site";

export const metadata = pageMeta({
  title: "Contact us: request a site visit in Dubai",
  description:
    "Request a site visit from Mechelein Technical Services for air conditioning, electrical, plumbing, MEP, fit-out or maintenance work in Dubai.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "ContactPage", name: `Contact ${site.name}`, url: abs("/contact"), about: { "@id": `${SITE_URL}/#business` } }} />
      <PageHero
        crumbs={[{ name: "Contact", href: "/contact" }]}
        kicker="Contact"
        title="Tell us about the job"
        lede="Send a few details about the work and your property in Dubai, and we will get back to you to arrange a visit."
        image="/assets/img/technician.jpg"
        alt="A technician in a hard hat checking an installation"
        actions={false}
      />
      <RequestSection heading="Request a site visit" />
    </main>
  );
}
