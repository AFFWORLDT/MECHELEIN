"use client";

import { useEffect, useRef, useState } from "react";
import { mainAction, navLinks } from "@/lib/content";
import { Lockup } from "./ui";

// Floating pill nav: turns solid once scrolled, slides away while scrolling down,
// and opens a full menu card on phones.
export default function SiteNav() {
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

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const className = ["nav", open && "open", scrolled && "scrolled", hidden && !open && "hide"].filter(Boolean).join(" ");

  return (
    <header className={className}>
      <div className="wrap">
        <a className="nav__logo" href="#top" aria-label="Mechelein Technical Services, home">
          <Lockup wordAlt="Mechelein" />
        </a>
        <ul id="menu">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a className="btn" href={mainAction.href}>
          {mainAction.label}
        </a>
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
