import { footerColumns, mainAction, requestSteps, site } from "@/lib/content";
import RequestForm from "./RequestForm";
import { Kicker, Lockup, vars } from "./ui";

export function RequestSection() {
  return (
    <section className="request on-dark" id="request" aria-labelledby="request-h">
      <div className="wrap">
        <div>
          <Kicker>Contact</Kicker>
          <h2 id="request-h">{mainAction.label}</h2>
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

// The footer wordmark is pre-split into letters; Motion lights them up one by one.
const WORDMARK = "MECHELEIN";

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot">
          <div>
            <span className="foot__plate">
              <Lockup wordAlt={site.name} />
            </span>
            <p>Air conditioning, electrical, plumbing, MEP, fit-out and maintenance for buildings across Dubai.</p>
          </div>
          {footerColumns.map((col) => (
            <div key={col.heading}>
              <h4>{col.heading}</h4>
              <ul>
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h4>Contact</h4>
            <ul>
              <li>
                <a href={mainAction.href}>{mainAction.label}</a>
              </li>
              <li>{site.location}</li>
            </ul>
          </div>
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
        </div>
      </div>
    </footer>
  );
}
