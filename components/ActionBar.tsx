"use client";

import { useEffect, useState } from "react";
import { mainAction } from "@/lib/content";
import { ArrowIcon } from "./ui";

// Phone-only floating button. Hidden while the hero's own button is on screen,
// and again once the contact form or footer comes into view, so it never repeats
// a button the visitor can already see or covers the form it points to.
export default function ActionBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hero = document.querySelector(".hero");
    const targets = [document.querySelector("#request"), document.querySelector("footer")];
    const update = () => {
      const pastHero = (hero?.getBoundingClientRect().bottom ?? 0) < window.innerHeight * 0.35;
      const nearForm = targets.some((el) => {
        const r = el?.getBoundingClientRect();
        return r && r.top < window.innerHeight * 0.9 && r.bottom > 0;
      });
      setShow(pastHero && !nearForm);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div className={show ? "actionbar show" : "actionbar"} aria-hidden={!show}>
      <a className="btn" href={mainAction.href} tabIndex={show ? 0 : -1}>
        {mainAction.label} <ArrowIcon />
      </a>
    </div>
  );
}
