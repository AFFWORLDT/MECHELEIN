"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { mainAction, navLinks } from "@/lib/site";
import { Lockup } from "./ui";

// Floating pill nav: turns solid once scrolled, slides away while scrolling down,
// and opens a full menu card on phones. The current section's link is marked.
export default function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      setHidden(y > lastY.current && y > 300);
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // a new page always opens with the menu closed and the bar showing
  const [prevPath, setPrevPath] = useState(pathname);
  if (pathname !== prevPath) {
    setPrevPath(pathname);
    setOpen(false);
    setHidden(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const className = ["nav", open && "open", scrolled && "scrolled", hidden && !open && "hide"].filter(Boolean).join(" ");
  const isCurrent = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className={className}>
      <div className="wrap">
        <Link className="nav__logo" href="/" aria-label="Mechelein Technical Services, home">
          <Lockup wordAlt="Mechelein" />
        </Link>
        <ul id="menu">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link href={l.href} aria-current={isCurrent(l.href) ? "page" : undefined} onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link className="btn" href={mainAction.href}>
          {mainAction.label}
        </Link>
        <button
          className="nav__toggle"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span />
        </button>
      </div>
    </header>
  );
}
