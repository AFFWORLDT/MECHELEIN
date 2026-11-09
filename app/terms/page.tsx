import Link from "next/link";
import Legal from "@/components/Legal";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMeta({
  title: "Terms of use",
  description: `The terms for using the ${site.name} website.`,
  path: "/terms",
});

// CLIENT TO REVIEW: a plain starting point, not legal advice. Have it checked before launch.
export default function TermsPage() {
  return (
    <Legal title="Terms of use" path="/terms" updated="9 November 2026">
      <p>These terms apply to your use of the {site.name} website. By using the website you agree to them.</p>
      <h2>Information on this website</h2>
      <p>
        The content on this website, including the <Link href="/guides">guides</Link>, is general information. It is not professional advice for
        your specific property. For anything involving electrics, gas or structural work, use a qualified professional.
      </p>
      <h2>Quotes and work</h2>
      <p>
        Sending a request through this website does not create a contract. Any work is agreed separately, based on an inspection of the property
        and a written scope.
      </p>
      <h2>Photographs</h2>
      <p>Some photographs on this website are illustrative and may not show our own projects or staff.</p>
      <h2>Intellectual property</h2>
      <p>The {site.name} name and logo belong to us. Please do not reuse them without permission.</p>
      <h2>Links</h2>
      <p>We are not responsible for the content of other websites linked from this one.</p>
      <h2>Governing law</h2>
      <p>These terms are governed by the laws of the United Arab Emirates as applied in the Emirate of Dubai.</p>
      <h2>Changes</h2>
      <p>We may update these terms. The date at the top shows when they last changed.</p>
    </Legal>
  );
}
