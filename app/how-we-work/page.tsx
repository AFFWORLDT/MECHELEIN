import { CtaBand, PageHero, SectionHead } from "@/components/Page";
import { Process } from "@/components/Sections";
import { Kicker } from "@/components/ui";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "How we work: from first enquiry to handover",
  description:
    "How a job works with Mechelein Technical Services in Dubai: your request, the site inspection, the agreed work, and checks before handover.",
  path: "/how-we-work",
});

const detail = [
  {
    title: "1. You send a request",
    text: "Tell us what the problem is or what you are planning, the type of property and where it is in Dubai. Photos help if you have them.",
  },
  {
    title: "2. We get in touch",
    text: "We talk through what you need and arrange a time to visit the property.",
  },
  {
    title: "3. We inspect the job",
    text: "We look at the systems involved, find the cause of the problem or the requirements of the project, and agree with you what needs to be done.",
  },
  {
    title: "4. We carry out the work",
    text: "Our team carries out the agreed work. If something unexpected comes up, we discuss it with you before going further.",
  },
  {
    title: "5. We check and hand over",
    text: "We check that everything works, walk you through what was done, and answer any questions.",
  },
];

const principles = [
  { title: "Agreed before it starts", text: "You know what will be done before work begins." },
  { title: "One point of contact", text: "One team across every trade involved." },
  { title: "Tidy sites", text: "We respect your home or workplace while we work." },
  { title: "Checked at the end", text: "Systems are tested before we hand them back." },
];

export default function HowWeWorkPage() {
  return (
    <main>
      <PageHero
        crumbs={[{ name: "How we work", href: "/how-we-work" }]}
        kicker="How we work"
        title="From first enquiry to handover"
        lede="A simple, clear process for every job, from a single repair to a full installation."
        image="/assets/img/mep-ceiling.jpg"
        alt="A technician working on ceiling services from a lift"
        position="40% 30%"
      />
      <Process withLink={false} />
      <section className="page-section" aria-labelledby="detail-h">
        <div className="wrap split">
          <div className="prose">
            <Kicker>Step by step</Kicker>
            <h2 id="detail-h">What happens at each stage</h2>
            <ol className="timeline rv-group">
              {detail.map((d) => (
                <li key={d.title}>
                  <b>{d.title}</b>
                  <span>{d.text}</span>
                </li>
              ))}
            </ol>
          </div>
          <aside className="aside-card" aria-labelledby="prep-h">
            <h2 id="prep-h">Before you request a visit</h2>
            <ul className="ticks">
              <li>Note what the problem is and when it started</li>
              <li>Take photos of the affected area</li>
              <li>Check access: building permits, parking, keys</li>
              <li>For rented homes, check who arranges repairs</li>
            </ul>
          </aside>
        </div>
      </section>
      <section className="page-section page-section--alt" aria-labelledby="principles-h">
        <div className="wrap">
          <SectionHead kicker="Our approach" id="principles-h" title="What stays the same on every job" />
          <div className="features features--four rv-group">
            {principles.map((p) => (
              <div key={p.title} className="feature">
                <b>{p.title}</b>
                <span>{p.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
