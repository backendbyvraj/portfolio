"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollAnimations() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // toggleActions: "play none play reset"
    //   onEnter      => play  (scroll down to it: animate in)
    //   onLeave      => none  (scroll past it going down: leave visible)
    //   onEnterBack  => play  (scroll back UP to it: animate in again)
    //   onLeaveBack  => reset (scroll back above start: reset to hidden)
    // Net result: plays fresh every time element enters viewport from EITHER direction.

    const tA = "play none play reset";

    const ctx = gsap.context(() => {

      // Immediately set initial hidden states for all scroll-animated elements
      // so they start invisible even before their trigger fires.
      // This replaces the CSS opacity:0 approach and also runs AFTER React hydrates.
      gsap.set([
        "section:not(#home) .section-tag",
        "section:not(#home) .section-title",
        "section:not(#home) .section-subtitle",
        "section:not(#home) .divider",
        "section:not(#home) .card",
        "section:not(#home) .tech-badge",
        "#contact .contact-item",
        "#contact .contact-form",
      ], { opacity: 0 });

      // After setting initial states, refresh ScrollTrigger so any section
      // already in viewport (e.g. user arrived via hash link like #contact)
      // gets its animation played immediately.
      ScrollTrigger.refresh();

      /* ══════════════════════════════════════════════════════════════
         1. HERO PARALLAX — scrub (auto bi-directional, no once)
         ══════════════════════════════════════════════════════════════ */
      const heroVisual = document.querySelector("#home .hero-visual");
      const heroH1     = document.querySelector("#home h1");
      const heroH2     = document.querySelector("#home h2");
      const heroP      = document.querySelector("#home p");

      if (heroVisual) {
        gsap.to(heroVisual, {
          scrollTrigger: { trigger: "#home", start: "top top", end: "80% top", scrub: 1.8 },
          y: -100, scale: 0.85, opacity: 0.3,
        });
      }
      if (heroH1) {
        gsap.to(heroH1, {
          scrollTrigger: { trigger: "#home", start: "top top", end: "60% top", scrub: 1 },
          y: -55, opacity: 0,
        });
      }
      if (heroH2) {
        gsap.to(heroH2, {
          scrollTrigger: { trigger: "#home", start: "top top", end: "55% top", scrub: 0.8 },
          y: -35, opacity: 0,
        });
      }
      if (heroP) {
        gsap.to(heroP, {
          scrollTrigger: { trigger: "#home", start: "top top", end: "50% top", scrub: 0.6 },
          y: -20, opacity: 0,
        });
      }

      /* ══════════════════════════════════════════════════════════════
         2. SECTION TAGS — bounce in from left, reset on scroll back
         ══════════════════════════════════════════════════════════════ */
      gsap.utils.toArray<Element>("section:not(#home) .section-tag").forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, x: -44, scale: 0.75, rotation: -6 },
          {
            scrollTrigger: { trigger: el, start: "top 88%", toggleActions: tA },
            opacity: 1, x: 0, scale: 1, rotation: 0,
            duration: 0.7, ease: "back.out(2)",
          }
        );
      });

      /* ══════════════════════════════════════════════════════════════
         3. SECTION TITLES — 3D perspective flip (stand up from floor)
         ══════════════════════════════════════════════════════════════ */
      gsap.utils.toArray<Element>("section:not(#home) .section-title").forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, rotateX: 80, y: 40, transformOrigin: "top center", transformPerspective: 800 },
          {
            scrollTrigger: { trigger: el, start: "top 87%", toggleActions: tA },
            opacity: 1, rotateX: 0, y: 0,
            duration: 1.0, ease: "power4.out",
          }
        );
      });

      gsap.utils.toArray<Element>("section:not(#home) .section-subtitle").forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, y: 28, filter: "blur(5px)" },
          {
            scrollTrigger: { trigger: el, start: "top 87%", toggleActions: tA },
            opacity: 1, y: 0, filter: "blur(0px)",
            duration: 0.8, delay: 0.2, ease: "power3.out",
          }
        );
      });

      gsap.utils.toArray<Element>("section:not(#home) .divider").forEach((el) => {
        gsap.fromTo(el,
          { scaleX: 0, transformOrigin: "left center", opacity: 0 },
          {
            scrollTrigger: { trigger: el, start: "top 88%", toggleActions: tA },
            scaleX: 1, opacity: 1,
            duration: 1.1, ease: "expo.out",
          }
        );
      });

      /* ══════════════════════════════════════════════════════════════
         4. STATS — scale stomp from center outward, repeatable
         ══════════════════════════════════════════════════════════════ */
      const statsCards = Array.from(document.querySelectorAll<Element>("#stats .card"));
      if (statsCards.length) {
        gsap.fromTo(statsCards,
          { opacity: 0, scale: 0.3, y: 50, rotateX: 45, transformPerspective: 600 },
          {
            scrollTrigger: { trigger: "#stats", start: "top 78%", toggleActions: tA },
            opacity: 1, scale: 1, y: 0, rotateX: 0,
            duration: 0.75, stagger: { amount: 0.5, from: "center" },
            ease: "back.out(2)",
          }
        );
      }

      /* ══════════════════════════════════════════════════════════════
         5. PROJECT CARDS — left/right 3D card shuffle, repeatable
         ══════════════════════════════════════════════════════════════ */
      const isMobile = window.innerWidth < 768;
      document.querySelectorAll<Element>("#projects .card").forEach((card, i) => {
        const fromX   = isMobile ? 0 : (i % 2 === 0 ? -90 : 90);
        const fromY   = isMobile ? 50 : 0;
        const fromRot = isMobile ? 0 : (i % 2 === 0 ? -18 : 18);
        gsap.fromTo(card,
          { opacity: 0, x: fromX, y: fromY, rotateY: fromRot, scale: 0.88, transformPerspective: 900 },
          {
            scrollTrigger: { trigger: card, start: "top 87%", toggleActions: tA },
            opacity: 1, x: 0, y: 0, rotateY: 0, scale: 1,
            duration: 0.75, ease: "power3.out",
          }
        );
      });

      /* ══════════════════════════════════════════════════════════════
         6. WHY SECTION — scatter + converge from center, repeatable
         ══════════════════════════════════════════════════════════════ */
      const whyCards = Array.from(document.querySelectorAll<Element>("#why .card"));
      if (whyCards.length) {
        gsap.fromTo(whyCards,
          { opacity: 0, scale: 0.35, y: 60, rotation: () => (Math.random() - 0.5) * 30 },
          {
            scrollTrigger: { trigger: "#why", start: "top 76%", toggleActions: tA },
            opacity: 1, scale: 1, y: 0, rotation: 0,
            duration: 0.8, stagger: { amount: 0.65, from: "center" },
            ease: "back.out(1.6)",
          }
        );
      }

      /* ══════════════════════════════════════════════════════════════
         7. SKILLS — slide from left + progress bars fill + badges orbit
         ══════════════════════════════════════════════════════════════ */
      document.querySelectorAll<Element>("#skills .card").forEach((card, i) => {
        gsap.fromTo(card,
          { opacity: 0, x: isMobile ? 0 : -65, y: isMobile ? 40 : 0, skewX: isMobile ? 0 : 5 },
          {
            scrollTrigger: { trigger: card, start: "top 87%", toggleActions: tA },
            opacity: 1, x: 0, y: 0, skewX: 0,
            duration: 0.7, delay: i * 0.07, ease: "power3.out",
          }
        );
        const fill = card.querySelector<HTMLElement>(".progress-fill");
        if (fill) {
          const targetW = fill.style.width || "80%";
          gsap.fromTo(fill,
            { width: "0%" },
            {
              scrollTrigger: { trigger: card, start: "top 87%", toggleActions: tA },
              width: targetW,
              duration: 1.4, delay: i * 0.07 + 0.2, ease: "power3.out",
            }
          );
        }
      });

      // Tech badges: orbit in from random angles, reset on scroll back
      const badges = Array.from(document.querySelectorAll<Element>("#skills .tech-badge"));
      badges.forEach((badge, i) => {
        const angle = (i / badges.length) * Math.PI * 2;
        const dist  = 70 + (i % 3) * 30;
        gsap.fromTo(badge,
          {
            opacity: 0,
            x: Math.cos(angle) * dist,
            y: Math.sin(angle) * dist,
            scale: 0,
            rotation: (Math.random() - 0.5) * 60,
          },
          {
            scrollTrigger: { trigger: "#skills", start: "top 75%", toggleActions: tA },
            opacity: 1, x: 0, y: 0, scale: 1, rotation: 0,
            duration: 0.65, delay: i * 0.035, ease: "back.out(1.8)",
          }
        );
      });

      /* ══════════════════════════════════════════════════════════════
         8. CONTACT — blur slide from left + 3D form drop
         ══════════════════════════════════════════════════════════════ */
      const contactXDist = isMobile ? 0 : -70;
      const contactFormX = isMobile ? 0 : 60;
      document.querySelectorAll<Element>("#contact .contact-item").forEach((el, i) => {
        gsap.fromTo(el,
          { opacity: 0, x: contactXDist, y: isMobile ? 30 : 0, filter: isMobile ? "none" : "blur(8px)" },
          {
            scrollTrigger: { trigger: el, start: "top 87%", toggleActions: tA },
            opacity: 1, x: 0, y: 0, filter: "blur(0px)",
            duration: 0.72, delay: i * 0.13, ease: "power3.out",
          }
        );
      });

      const contactForm = document.querySelector<Element>("#contact .contact-form");
      if (contactForm) {
        gsap.fromTo(contactForm,
          { opacity: 0, scale: 0.88, y: 50, x: contactFormX, rotateX: isMobile ? 0 : 20, transformPerspective: 700 },
          {
            scrollTrigger: { trigger: contactForm, start: "top 83%", toggleActions: tA },
            opacity: 1, scale: 1, y: 0, x: 0, rotateX: 0,
            duration: 0.95, ease: "power4.out",
          }
        );
      }

    });

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return null;
}
