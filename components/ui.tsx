import type { CSSProperties, ReactNode } from "react";

// CSS custom properties (--d, --py ...) typed for the style prop.
export const vars = (v: Record<`--${string}`, string>) => v as CSSProperties;

// The section label with the three red bars from the logo's "E".
export function Kicker({ children }: { children: ReactNode }) {
  return (
    <span className="kicker">
      <span className="bars">
        <i />
        <i />
        <i />
      </span>
      {children}
    </span>
  );
}

export function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

// The client's MTS mark and MECHELEIN wordmark, with the tagline as live text so it stays readable.
export function Lockup({ wordAlt }: { wordAlt: string }) {
  return (
    <span className="lockup">
      <img className="lockup__mark" src="/assets/logo-mark.png" alt="" width={326} height={326} />
      <span className="lockup__text">
        <img className="lockup__word" src="/assets/logo-word.png" alt={wordAlt} width={790} height={86} />
        <span className="lockup__tag" aria-hidden={wordAlt !== "Mechelein"}>
          Technical Services
        </span>
      </span>
    </span>
  );
}
