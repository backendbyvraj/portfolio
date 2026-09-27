"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/*
  Weighted smooth scrolling (Lenis) driven by GSAP's ticker, so ScrollTrigger
  animations stay perfectly in sync with the scroll position.
  Skipped entirely for users who prefer reduced motion.
*/
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      anchors: { offset: -80 },
    });

    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    // Lenis owns smooth scrolling; the CSS rule would double-ease anchor jumps.
    document.documentElement.style.scrollBehavior = "auto";

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return null;
}
