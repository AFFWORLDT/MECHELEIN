"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { mainAction } from "@/lib/site";
import { ArrowIcon } from "./ui";

// Phone-only floating button. Hidden while the page's opening header (and its own
// button) is on screen, once the contact form or footer comes into view, and on the
// contact page itself, so it never repeats a button the visitor can already see.
export default function ActionBar() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);

  const onContactPage = pathname === mainAction.href;

  useEffect(() => {
    if (onContactPage) return;
    const top = document.querySelector(".hero, .page-hero");
    const targets = [document.querySelector("#request"), document.querySelector("footer")];
    const update = () => {
      const pastTop = (top?.getBoundingClientRect().bottom ?? 0) < window.innerHeight * 0.35;
      const nearForm = targets.some((el) => {
        const r = el?.getBoundingClientRect();
        return r && r.top < window.innerHeight * 0.9 && r.bottom > 0;
      });
      setShow(pastTop && !nearForm);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [pathname, onContactPage]);

  const visible = show && !onContactPage;

  return (
    <div className={visible ? "actionbar show" : "actionbar"} aria-hidden={!visible}>
      <Link className="btn" href={mainAction.href} tabIndex={visible ? 0 : -1}>
        {mainAction.label} <ArrowIcon />
      </Link>
    </div>
  );
}
