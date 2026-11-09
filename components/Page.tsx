import Link from "next/link";
import type { ReactNode } from "react";
import type { Guide } from "@/lib/guides";
import type { Faq, Service } from "@/lib/services";
import { abs, jsonLd, mainAction } from "@/lib/site";
import { ArrowIcon, Kicker } from "./ui";

export function JsonLd({ data }: { data: object | object[] }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(data) }} />;
}

export type Crumb = { name: string; href: string };

// Visible trail plus BreadcrumbList structured data. "Home" is added automatically.
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const all = [{ name: "Home", href: "/" }, ...items];
  return (
    <>
      <nav className="crumbs" aria-label="Breadcrumb">
        <ol>
          {all.map((c, i) => (
            <li key={c.href}>
              {i < all.length - 1 ? <Link href={c.href}>{c.name}</Link> : <span aria-current="page">{c.name}</span>}
            </li>
          ))}
        </ol>
      </nav>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: all.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.name, item: abs(c.href) })),
        }}
      />
    </>
  );
}

// The dark header every inner page opens with.
export function PageHero({
  crumbs,
  kicker,
  title,
  lede,
  image,
  alt,
  position,
  actions = true,
  children,
}: {
  crumbs: Crumb[];
  kicker: string;
  title: string;
  lede: string;
  image: string;
  alt: string;
  position?: string;
  actions?: boolean;
  children?: ReactNode;
}) {
  return (
    <section className="page-hero on-dark" aria-labelledby="page-h">
      <img className="page-hero__bg" src={image} alt={alt} fetchPriority="high" style={position ? { objectPosition: position } : undefined} />
      <div className="wrap">
        <div className="ph-in">
          <Breadcrumbs items={crumbs} />
        </div>
        <div className="ph-in">
          <Kicker>{kicker}</Kicker>
        </div>
        <h1 id="page-h" className="ph-in">
          {title}
        </h1>
        <p className="lede ph-in">{lede}</p>
        {children}
        {actions && (
          <div className="actions ph-in">
            <Link className="btn" href={mainAction.href}>
              {mainAction.label} <ArrowIcon />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

export function SectionHead({ kicker, id, title, lede }: { kicker: string; id: string; title: string; lede?: string }) {
  return (
    <div className="head">
      <div>
        <Kicker>{kicker}</Kicker>
        <h2 id={id}>{title}</h2>
      </div>
      {lede && <p className="lede">{lede}</p>}
    </div>
  );
}

// Closing band on every inner page.
export function CtaBand({ title = "Need work done on your building?", text }: { title?: string; text?: string }) {
  return (
    <section className="cta-band on-dark" aria-labelledby="cta-h">
      <div className="wrap">
        <div>
          <Kicker>Get in touch</Kicker>
          <h2 id="cta-h">{title}</h2>
          <p className="lede">{text ?? "Tell us what you need and where your property is in Dubai, and we will get back to you."}</p>
        </div>
        <Link className="btn" href={mainAction.href}>
          {mainAction.label} <ArrowIcon />
        </Link>
      </div>
    </section>
  );
}

export function FaqList({ items, openFirst = true }: { items: Faq[]; openFirst?: boolean }) {
  return (
    <div className="qa">
      {items.map((item, i) => (
        <details key={item.q} open={openFirst && i === 0}>
          <summary>
            <span>{item.q}</span>
            <i />
          </summary>
          <p>{item.a}</p>
        </details>
      ))}
    </div>
  );
}

export const faqJsonLd = (items: Faq[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
});

const num = (i: number) => String(i + 1).padStart(2, "0");

// The photo grid of services, used on the home page and /services.
export function ServiceGrid({ items }: { items: Service[] }) {
  return (
    <div className="bento">
      {items.map((s, i) => (
        <Link key={s.slug} className={s.size ? `svc svc--${s.size}` : "svc"} href={`/services/${s.slug}`}>
          <img src={s.image} alt={s.alt} loading="lazy" style={s.position ? { objectPosition: s.position } : undefined} />
          <span className="svc__num">{num(i)}</span>
          <span className="svc__go">
            <ArrowIcon />
          </span>
          <h3>{s.name}</h3>
          <p>{s.short}</p>
        </Link>
      ))}
    </div>
  );
}

// Compact link cards (related services on inner pages).
export function LinkCards({ items }: { items: { href: string; title: string; text: string; image: string; alt: string; position?: string }[] }) {
  return (
    <div className="link-cards rv-group">
      {items.map((c) => (
        <Link key={c.href} className="link-card" href={c.href}>
          <div className="link-card__ph">
            <img src={c.image} alt={c.alt} loading="lazy" style={c.position ? { objectPosition: c.position } : undefined} />
          </div>
          <div className="link-card__body">
            <h3>{c.title}</h3>
            <p>{c.text}</p>
            <span className="link-card__more">
              Read more <ArrowIcon />
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}

const dateFmt = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "Asia/Dubai" });
export const formatDate = (iso: string) => dateFmt.format(new Date(`${iso}T12:00:00+04:00`));

export function GuideCards({ items }: { items: Guide[] }) {
  return (
    <div className="guide-cards rv-group">
      {items.map((g) => (
        <Link key={g.slug} className="guide-card" href={`/guides/${g.slug}`}>
          <div className="guide-card__ph">
            <img src={g.image} alt={g.alt} loading="lazy" style={g.position ? { objectPosition: g.position } : undefined} />
          </div>
          <div className="guide-card__body">
            <span className="guide-card__meta">{g.readMinutes} min read</span>
            <h3>{g.title}</h3>
            <p>{g.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
