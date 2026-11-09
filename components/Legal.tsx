import type { ReactNode } from "react";
import { Breadcrumbs } from "./Page";

// Plain text pages (privacy, terms): a light header and readable prose, no photo.
export default function Legal({ title, path, updated, children }: { title: string; path: string; updated: string; children: ReactNode }) {
  return (
    <main className="legal-page">
      <section className="legal-page__head">
        <div className="wrap">
          <Breadcrumbs items={[{ name: title, href: path }]} />
          <h1>{title}</h1>
          <p className="legal-page__updated">Last updated {updated}</p>
        </div>
      </section>
      <section className="page-section page-section--tight">
        <div className="wrap">
          <div className="prose prose--legal">{children}</div>
        </div>
      </section>
    </main>
  );
}
