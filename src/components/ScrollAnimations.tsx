"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/*
  Homepage scroll animations — clean and restrained.

  - Every reveal plays once (no re-hiding when scrolling back up).
  - Nothing is hidden by CSS or a blanket gsap.set(); each reveal is a
    gsap.from() owned by its own trigger.
  - The contact form is never touched: the lead form must always be visible.
  - prefers-reduced-motion → only the progress bar runs.
*/

/** Wrap each word of a heading in a mask so words can rise into view.
 *  Child elements (e.g. .gradient-text spans) move as one unit so their
 *  background-clip gradient stays intact. */
function splitWords(el: HTMLElement): HTMLElement[] {
  if (el.dataset.split) return Array.from(el.querySelectorAll<HTMLElement>(".word-inner"));
  el.dataset.split = "1";
  el.setAttribute("aria-label", el.textContent?.trim() ?? "");

  const wrap = (node: Node) => {
    const outer = document.createElement("span");
    outer.className = "word";
    outer.setAttribute("aria-hidden", "true");
    const inner = document.createElement("span");
    inner.className = "word-inner";
    inner.appendChild(node);
    outer.appendChild(inner);
    return outer;
  };

  Array.from(el.childNodes).forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      const frag = document.createDocumentFragment();
      (node.textContent ?? "").split(/(\s+)/).forEach((part) => {
        if (!part) return;
        frag.appendChild(/^\s+$/.test(part) ? document.createTextNode(part) : wrap(document.createTextNode(part)));
      });
      el.replaceChild(frag, node);
    } else if (node.nodeType === Node.ELEMENT_NODE && (node as Element).tagName !== "BR") {
      const placeholder = document.createComment("");
      el.replaceChild(placeholder, node);
      el.replaceChild(wrap(node), placeholder);
    }
  });

  return Array.from(el.querySelectorAll<HTMLElement>(".word-inner"));
}

export default function ScrollAnimations() {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      /* Reading progress bar */
      if (progressRef.current) {
        gsap.to(progressRef.current, {
          scaleX: 1,
          ease: "none",
          scrollTrigger: { start: 0, end: "max", scrub: 0.3 },
        });
      }
      if (reduce) return;

      /* Hero visual drifts up slightly slower than the page */
      gsap.to("#home .hero-visual", {
        y: -60,
        ease: "none",
        scrollTrigger: { trigger: "#home", start: "top top", end: "bottom top", scrub: true },
      });

      /* Section titles: words rise out of a mask */
      gsap.utils.toArray<HTMLElement>("section:not(#home) .section-title").forEach((title) => {
        gsap.from(splitWords(title), {
          yPercent: 100,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.05,
          scrollTrigger: { trigger: title, start: "top 88%", once: true },
        });
      });

      /* Tag, divider and subtitle follow softly */
      gsap.utils
        .toArray<HTMLElement>("section:not(#home):not(#contact)")
        .forEach((section) => {
          const st = { trigger: section, start: "top 85%", once: true };
          const tag = section.querySelector(".section-tag");
          const divider = section.querySelector(".divider");
          const sub = section.querySelector(".section-subtitle");
          if (tag) gsap.from(tag, { opacity: 0, y: 12, duration: 0.6, ease: "power2.out", scrollTrigger: st });
          if (divider) gsap.from(divider, { scaleX: 0, duration: 0.9, ease: "power3.out", delay: 0.15, scrollTrigger: st });
          if (sub) gsap.from(sub, { opacity: 0, y: 16, duration: 0.7, ease: "power2.out", delay: 0.25, scrollTrigger: st });
        });

      /* Cards: fade up in a stagger, once. The card's own CSS transition is
         paused during the reveal so it doesn't fight GSAP, then restored so
         hover effects keep working. */
      ScrollTrigger.batch("#projects .card, #why .card, #skills .card", {
        start: "top 90%",
        once: true,
        onEnter: (cards) => {
          gsap.set(cards, { transition: "none" });
          gsap.from(cards, {
            opacity: 0,
            y: 40,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.1,
            onComplete: () => { gsap.set(cards, { clearProps: "transition,transform,opacity" }); },
          });
        },
      });
    });

    // Images and fonts shift layout after load; recompute trigger positions.
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);

    return () => {
      window.removeEventListener("load", refresh);
      ctx.revert();
    };
  }, []);

  return <div ref={progressRef} className="scroll-progress" aria-hidden="true" />;
}
