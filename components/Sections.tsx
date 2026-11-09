import { about, city, faq, mainAction, sectors, services, steps } from "@/lib/content";
import { ArrowIcon, Kicker } from "./ui";

function SectionHead({ kicker, id, title, lede }: { kicker: string; id: string; title: string; lede: string }) {
  return (
    <div className="head">
      <div>
        <Kicker>{kicker}</Kicker>
        <h2 id={id}>{title}</h2>
      </div>
      <p className="lede">{lede}</p>
    </div>
  );
}

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
        <div className="bento">
          {services.map((s, i) => (
            <a key={s.title} className={s.size ? `svc svc--${s.size}` : "svc"} href={mainAction.href}>
              <img src={s.image} alt={s.alt} loading="lazy" style={s.position ? { objectPosition: s.position } : undefined} />
              <span className="svc__num">{num(i)}</span>
              <span className="svc__go">
                <ArrowIcon />
              </span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </a>
          ))}
        </div>
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
            <a key={s.title} className="tile" href={mainAction.href}>
              <div className="tile__ph">
                <img src={s.image} alt={s.alt} loading="lazy" style={s.position ? { objectPosition: s.position } : undefined} />
              </div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Process() {
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
          <a className="btn btn--blue" href={mainAction.href}>
            Talk to our team <ArrowIcon />
          </a>
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
          <a className="btn btn--blue" href={mainAction.href}>
            {mainAction.label} <ArrowIcon />
          </a>
        </div>
        <div className="qa">
          {faq.map((item, i) => (
            <details key={item.q} open={i === 0}>
              <summary>
                <span>{item.q}</span>
                <i />
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
