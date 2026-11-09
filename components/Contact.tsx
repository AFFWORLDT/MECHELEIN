import Link from "next/link";
import { requestSteps } from "@/lib/content";
import { services } from "@/lib/services";
import { mainAction, site } from "@/lib/site";
import RequestForm from "./RequestForm";
import { Kicker, Lockup, vars } from "./ui";

export function RequestSection({ heading = mainAction.label }: { heading?: string }) {
  return (
    <section className="request on-dark" id="request" aria-labelledby="request-h">
      <div className="wrap">
        <div>
          <Kicker>Contact</Kicker>
          <h2 id="request-h">{heading}</h2>
          <p className="lede">Tell us what you need and where your property is, and we will get back to you.</p>
          <ol className="next">
            {requestSteps.map((s) => (
              <li key={s.title}>
                <div>
                  <b>{s.title}</b>
                  {s.text}
                </div>
              </li>
            ))}
          </ol>
        </div>
        {/* the wrapper takes the reveal classes so the form's own state never resets them */}
        <div className="form-wrap">
          <RequestForm />
        </div>
      </div>
    </section>
  );
}

const footerColumns = [
  { heading: "Services", links: services.map((s) => ({ href: `/services/${s.slug}`, label: s.name })) },
  {
    heading: "Company",
    links: [
      { href: "/about", label: "About us" },
      { href: "/how-we-work", label: "How we work" },
      { href: "/sectors", label: "Sectors" },
      { href: "/guides", label: "Guides" },
      { href: "/faq", label: "Questions" },
    ],
  },
  {
    heading: "Contact",
    links: [
      { href: "/contact", label: mainAction.label },
      { href: "/privacy", label: "Privacy policy" },
      { href: "/terms", label: "Terms of use" },
    ],
  },
];

// The footer wordmark is pre-split into letters; Motion lights them up one by one.
const WORDMARK = "MECHELEIN";

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot">
          <div>
            <Link className="foot__plate" href="/" aria-label={`${site.name}, home`}>
              <Lockup wordAlt={site.name} />
            </Link>
            <p>Air conditioning, electrical, plumbing, MEP, fit-out and maintenance for buildings across Dubai.</p>
            <p className="foot__loc">{site.location}</p>
          </div>
          {footerColumns.map((col) => (
            <div key={col.heading}>
              <h4>{col.heading}</h4>
              <ul>
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="wordmark" aria-hidden="true">
          {[...WORDMARK].map((c, k) => (
            <span key={k} className={k === 1 ? "l e" : "l"} style={vars({ "--d": `${k * 0.035}s` })}>
              {c}
            </span>
          ))}
        </p>
        <div className="legal">
          <span>
            &copy; {new Date().getFullYear()} {site.name}
          </span>
          <span className="legal__links">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
