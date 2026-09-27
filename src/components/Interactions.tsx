"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

/*
  Site-wide pointer interactions (desktop / fine pointer only):
  - Card spotlight: every .card gets --sx/--sy so CSS can paint a glow and a
    lit border that follow the cursor.
  - Magnetic buttons: .btn elements drift toward the cursor and spring back.
  - Adaptive cursor: a soft ring trails the pointer, grows over links and
    buttons, and turns into a "View" bubble over project cards.
  All listeners are delegated on the document, so they keep working across
  client-side navigations without re-binding.
*/
export default function Interactions() {
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine) return;

    const ring = ringRef.current;
    const root = document.documentElement;
    if (ring && !reduce) root.classList.add("has-cursor");

    const ringX = ring ? gsap.quickTo(ring, "x", { duration: 0.35, ease: "power3" }) : null;
    const ringY = ring ? gsap.quickTo(ring, "y", { duration: 0.35, ease: "power3" }) : null;

    let magnet: HTMLElement | null = null;
    const release = (el: HTMLElement) =>
      gsap.to(el, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1, 0.4)", overwrite: true });

    const onMove = (e: PointerEvent) => {
      const target = e.target as Element | null;

      // 1. Card spotlight
      const card = target?.closest<HTMLElement>(".card");
      if (card) {
        const r = card.getBoundingClientRect();
        card.style.setProperty("--sx", `${e.clientX - r.left}px`);
        card.style.setProperty("--sy", `${e.clientY - r.top}px`);
      }

      if (reduce) return;

      // 2. Magnetic buttons
      const btn = target?.closest<HTMLElement>(".btn") ?? null;
      if (magnet && magnet !== btn) release(magnet);
      magnet = btn;
      if (btn) {
        const r = btn.getBoundingClientRect();
        gsap.to(btn, {
          x: (e.clientX - (r.left + r.width / 2)) * 0.28,
          y: (e.clientY - (r.top + r.height / 2)) * 0.38,
          duration: 0.4,
          ease: "power3.out",
          overwrite: true,
        });
      }

      // 3. Adaptive cursor ring
      if (ring && ringX && ringY) {
        ringX(e.clientX);
        ringY(e.clientY);
        const view = target?.closest(".project-card, .pd-nav-card");
        const typing = target?.closest("input, textarea, select, [contenteditable]");
        const link = target?.closest("a, button, [role='button'], label");
        ring.dataset.state = typing ? "hidden" : view ? "view" : link ? "link" : "default";
      }
    };

    const onLeaveWindow = () => {
      if (magnet) { release(magnet); magnet = null; }
      if (ring) ring.dataset.state = "hidden";
    };
    const onDown = () => ring?.classList.add("is-down");
    const onUp = () => ring?.classList.remove("is-down");

    document.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("pointerup", onUp);
    document.documentElement.addEventListener("pointerleave", onLeaveWindow);

    return () => {
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("pointerup", onUp);
      document.documentElement.removeEventListener("pointerleave", onLeaveWindow);
      root.classList.remove("has-cursor");
    };
  }, []);

  return (
    <div ref={ringRef} className="cx-ring" data-state="hidden" aria-hidden="true">
      <span className="cx-label">View</span>
    </div>
  );
}
