import Link from "next/link";
import { about, city, faq, steps } from "@/lib/content";
import { sectors } from "@/lib/sectors";
import { services } from "@/lib/services";
import { FaqList, SectionHead, ServiceGrid } from "./Page";
import { ArrowIcon, Kicker } from "./ui";

const num = (i: number) => String(i + 1).padStart(2, "0");

export function Services() {
  return (
    <section className="services" id="services" aria-labelledby="services-h">
      <div className="wrap">
        <SectionHead
          kicker="What we do"
          id="services-h"
          title="Our services"
          lede="The building systems we install, service and repair for homes and businesses across Dubai."
        />
        <ServiceGrid items={services} />
      </div>
    </section>
  );
}

export function City() {
  return (
    <section className="city on-dark" aria-labelledby="city-h">
      <img src={city.image.src} alt={city.image.alt} loading="lazy" />
      <div className="wrap">
        <div>
          <Kicker>{city.kicker}</Kicker>
          <h2 id="city-h">{city.heading}</h2>
          <p className="lede" style={{ marginTop: 22 }}>
            {city.text}
          </p>
        </div>
      </div>
    </section>
  );
}

export function Sectors() {
  return (
    <section className="sectors" id="sectors" aria-labelledby="sectors-h">
      <div className="wrap">
        <SectionHead
          kicker="Sectors"
          id="sectors-h"
          title="Properties we work on"
          lede="We work on residential, commercial and industrial properties."
        />
        <div className="tiles">
          {sectors.map((s) => (
            <Link key={s.slug} className="tile" href={`/sectors/${s.slug}`}>
              <div className="tile__ph">
                <img src={s.image} alt={s.alt} loading="lazy" style={s.position ? { objectPosition: s.position } : undefined} />
              </div>
              <h3>{s.name}</h3>
              <p>{s.short}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Process({ withLink = true }: { withLink?: boolean }) {
  return (
    <section className="process on-dark" id="process" aria-labelledby="process-h">
      <div className="wrap">
        <SectionHead
          kicker="How we work"
          id="process-h"
          title="How a job works"
          lede="A simple process from your first enquiry to the finished work."
        />
        <div className="steps">
          {steps.map((s, i) => (
            <article key={s.title} className="step">
              <div className="step__ph">
                <img src={s.image} alt={s.alt} loading="lazy" style={s.position ? { objectPosition: s.position } : undefined} />
              </div>
              <div className="step__body">
                <span className="step__n">{num(i)}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </article>
          ))}
        </div>
        {withLink && (
          <p className="more-link">
            <Link className="text-link" href="/how-we-work">
              More about how we work <ArrowIcon />
            </Link>
          </p>
        )}
      </div>
    </section>
  );
}

export function About() {
  return (
    <section className="amc" id="about" aria-labelledby="about-h">
      <div className="wrap">
        <div className="amc__ph">
          <img src={about.image.src} alt={about.image.alt} loading="lazy" style={{ objectPosition: about.image.position }} />
        </div>
        <div>
          <Kicker>About us</Kicker>
          <h2 id="about-h">{about.heading}</h2>
          <p className="lede">{about.text}</p>
          <ul className="checks">
            {about.points.map((p) => (
              <li key={p.title}>
                <b>{p.title}</b>
                <span>{p.text}</span>
              </li>
            ))}
          </ul>
          <Link className="btn btn--blue" href="/about">
            About MTS <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section className="faq" id="faq" aria-labelledby="faq-h">
      <div className="wrap">
        <div>
          <Kicker>Questions</Kicker>
          <h2 id="faq-h">Before you book</h2>
          <p className="lede">Common questions. For anything else, send us a request.</p>
          <Link className="btn btn--blue" href="/faq">
            See all questions <ArrowIcon />
          </Link>
        </div>
        <FaqList items={faq} />
      </div>
    </section>
  );
}
