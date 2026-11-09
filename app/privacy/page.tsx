import Legal from "@/components/Legal";
import { pageMeta } from "@/lib/seo";
import { FORM_TO, site } from "@/lib/site";

export const metadata = pageMeta({
  title: "Privacy policy",
  description: `How ${site.name} handles the personal information you share when you contact us.`,
  path: "/privacy",
});

// CLIENT TO REVIEW: a plain starting point, not legal advice. Have it checked before launch.
export default function PrivacyPage() {
  return (
    <Legal title="Privacy policy" path="/privacy" updated="9 November 2026">
      <p>
        This policy explains how {site.name} (&quot;we&quot;, &quot;us&quot;) handles personal information when you use this website or contact
        us.
      </p>
      <h2>What we collect</h2>
      <p>
        When you send a request, you give us details such as your name, phone number, email address, the area of your property and a description
        of the job. We only use what you choose to send.
      </p>
      <h2>How we use it</h2>
      <ul className="ticks">
        <li>To respond to your request and arrange a visit</li>
        <li>To carry out and follow up on work you ask us to do</li>
        <li>To keep records needed for our business and legal obligations</li>
      </ul>
      <p>We do not sell your information.</p>
      <h2>How the request form works</h2>
      <p>
        The request form on this website does not store anything. It opens your own email app with your details filled in, and nothing is sent
        until you press send.
      </p>
      <h2>Cookies</h2>
      <p>This website does not use advertising or tracking cookies.</p>
      <h2>How long we keep it</h2>
      <p>We keep your information only as long as needed for the purposes above.</p>
      <h2>Your choices</h2>
      <p>
        You can ask to see, correct or delete the personal information we hold about you by contacting us at{" "}
        <a href={`mailto:${FORM_TO}`}>{FORM_TO}</a>.
      </p>
      <h2>Changes</h2>
      <p>We may update this policy. The date at the top shows when it last changed.</p>
    </Legal>
  );
}
