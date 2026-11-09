"use client";

import { useEffect, useRef } from "react";

// Elements that fade or slide in as they reach the screen, staggered within each group.
const REVEAL_GROUPS = [
  ".head > *",
  ".bento > .svc",
  ".city .wrap > div > *",
  ".tiles > .tile",
  ".steps > .step",
  ".amc__ph",
  ".amc .wrap > div:last-child > *",
  ".checks li",
  ".faq .wrap > div:first-child > *",
  ".qa details",
  ".request .wrap > div:first-child > *",
  ".next li",
  ".form-wrap",
  ".foot > *",
];

const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));

// All the page's scroll and entrance motion. The markup is rendered by the server
// components; this only toggles classes and CSS variables on it.
export default function Motion() {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = document.documentElement;
    const cleanups: (() => void)[] = [];
    const on = <K extends keyof WindowEventMap>(type: K, fn: (e: WindowEventMap[K]) => void, opts?: AddEventListenerOptions) => {
      window.addEventListener(type, fn, opts);
      cleanups.push(() => window.removeEventListener(type, fn, opts));
    };

    // hero entrance: the words, kicker, lede, buttons and trade strip carry their own delays
    const hero = document.querySelector<HTMLElement>(".hero")!;
    const raf = requestAnimationFrame(() => requestAnimationFrame(() => hero.classList.add("ready")));
    const settle = setTimeout(() => hero.classList.add("settled"), 2800);
    cleanups.push(() => {
      cancelAnimationFrame(raf);
      clearTimeout(settle);
    });

    // reveal on scroll
    REVEAL_GROUPS.forEach((sel) => {
      const byParent = new Map<Node, HTMLElement[]>();
      document.querySelectorAll<HTMLElement>(sel).forEach((el) => {
        if (el.closest(".hero")) return;
        const parent = el.parentNode!;
        byParent.set(parent, [...(byParent.get(parent) ?? []), el]);
      });
      byParent.forEach((list) =>
        list.forEach((el, k) => {
          el.classList.add("rv");
          el.style.setProperty("--d", `${Math.min(k * 0.09, 0.6)}s`);
        }),
      );
    });
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 },
    );
    document.querySelectorAll(".rv").forEach((el) => io.observe(el));
    cleanups.push(() => io.disconnect());

    // geometry check as well: an element clipped or tilted out of view reports no intersection
    // to IntersectionObserver on some phones, so reveal anything whose box has reached the screen
    let pending = [...document.querySelectorAll<HTMLElement>(".rv:not(.in)")];
    const revealCheck = () => {
      if (!pending.length) return;
      const h = window.innerHeight;
      pending = pending.filter((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < h * 0.92 && r.bottom > 0) {
          el.classList.add("in");
          return false;
        }
        return !el.classList.contains("in");
      });
    };

    // footer wordmark: light the letters one by one, glow the whole word, fade, repeat;
    // restarts from the first letter every time the footer scrolls into view
    const wm = document.querySelector<HTMLElement>(".wordmark")!;
    const letters = [...wm.querySelectorAll<HTMLElement>(".l")];
    let wmRun = 0;
    const wmLoop = async (run: number) => {
      wm.classList.add("in");
      letters.forEach((l) => l.classList.remove("lit"));
      wm.classList.remove("full");
      await wait(60);
      while (run === wmRun) {
        for (const l of letters) {
          if (run !== wmRun) return;
          l.classList.add("lit");
          await wait(120);
        }
        await wait(250);
        if (run !== wmRun) return;
        wm.classList.add("full");
        await wait(2300);
        if (run !== wmRun) return;
        wm.classList.remove("full");
        letters.forEach((l) => l.classList.remove("lit"));
        await wait(1200);
      }
    };
    const wmIo = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          wmRun++;
          if (e.isIntersecting) wmLoop(wmRun);
        }),
      { threshold: 0.01 },
    );
    wmIo.observe(wm);
    cleanups.push(() => {
      wmIo.disconnect();
      wmRun++;
    });

    // spotlight that follows the pointer on service cards
    document.querySelectorAll<HTMLElement>(".svc").forEach((card) => {
      const move = (e: PointerEvent) => {
        const r = card.getBoundingClientRect();
        card.style.setProperty("--mx", `${e.clientX - r.left}px`);
        card.style.setProperty("--my", `${e.clientY - r.top}px`);
      };
      card.addEventListener("pointermove", move);
      cleanups.push(() => card.removeEventListener("pointermove", move));
    });

    // scroll: progress bar and parallax
    const heroBg = hero.querySelector<HTMLElement>(".hero__bg")!;
    const city = document.querySelector<HTMLElement>(".city")!;
    const cityImg = city.querySelector<HTMLElement>("img")!;
    let ticking = false;
    const frame = () => {
      const y = window.scrollY;
      const max = root.scrollHeight - window.innerHeight;
      progressRef.current?.style.setProperty("--p", String(max > 0 ? y / max : 0));
      if (y < window.innerHeight * 1.2) heroBg.style.setProperty("--py", `${y * 0.3}px`);
      const cr = city.getBoundingClientRect();
      if (cr.bottom > 0 && cr.top < window.innerHeight) {
        cityImg.style.setProperty("--py", `${(cr.top + cr.height / 2 - window.innerHeight / 2) * -0.18}px`);
      }
      revealCheck();
      ticking = false;
    };
    on(
      "scroll",
      () => {
        revealCheck();
        if (!ticking) {
          ticking = true;
          requestAnimationFrame(frame);
        }
      },
      { passive: true },
    );
    on("resize", revealCheck);
    on("load", revealCheck);
    frame();

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return <div className="progress" ref={progressRef} />;
}
