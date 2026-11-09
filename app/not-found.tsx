import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon, Kicker } from "@/components/ui";
import { mainAction } from "@/lib/site";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="not-found on-dark">
      <div className="wrap">
        <Kicker>Error 404</Kicker>
        <h1>This page isn&apos;t here</h1>
        <p className="lede">The page may have moved, or the link may be wrong. Try one of these instead.</p>
        <div className="actions">
          <Link className="btn" href="/">
            Go to the home page <ArrowIcon />
          </Link>
          <Link className="btn btn--line" href="/services">
            See our services
          </Link>
          <Link className="btn btn--line" href={mainAction.href}>
            {mainAction.label}
          </Link>
        </div>
      </div>
    </main>
  );
}
