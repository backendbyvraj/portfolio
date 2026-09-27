"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { FaArrowRight, FaWhatsapp, FaCheck } from "react-icons/fa";

/* Lines typed into the floating code card, one character at a time. */
const CODE_LINES = [
  "const site = build({",
  "  design: \"premium\",",
  "  seo: true,",
  "  speed: \"< 1s\",",
  "});",
  "site.launch(); // → more clients",
];

function TypedCode() {
  const [chars, setChars] = useState(0);
  const total = CODE_LINES.join("\n").length;

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setChars(total);
      return;
    }
    let n = 0;
    let pause = 0;
    const id = setInterval(() => {
      if (n >= total) {
        // Hold the finished snippet, then retype it.
        if (++pause > 60) { n = 0; pause = 0; }
      } else {
        n += 1;
      }
      setChars(n);
    }, 45);
    return () => clearInterval(id);
  }, [total]);

  const shown = CODE_LINES.join("\n").slice(0, chars).split("\n");
  return (
    <pre className="hs-code-body mono">
      {shown.map((line, i) => (
        <div key={i}>
          <span className="hs-ln">{i + 1}</span>
          {highlight(line)}
          {i === shown.length - 1 && <span className="hs-caret" />}
        </div>
      ))}
    </pre>
  );
}

/* Tiny syntax colouring: keywords, strings, comments. */
function highlight(line: string) {
  const parts = line.split(/(\/\/.*$|"[^"]*"?|\bconst\b|\btrue\b)/g);
  return parts.map((p, i) => {
    if (!p) return null;
    if (p.startsWith("//")) return <span key={i} className="hs-tok-cm">{p}</span>;
    if (p.startsWith("\"")) return <span key={i} className="hs-tok-str">{p}</span>;
    if (p === "const" || p === "true") return <span key={i} className="hs-tok-kw">{p}</span>;
    return <span key={i}>{p}</span>;
  });
}

export default function Hero({ years, caseStudies }: { years: number; caseStudies: number }) {
  const rootRef = useRef<HTMLElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const scene = sceneRef.current;
    if (!root || !scene) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(pointer: fine)").matches;

    const ctx = gsap.context(() => {
      if (reduce) return;

      /* Intro: headline lines rise out of their masks, then the scene assembles */
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.from(".hx-line > span", { yPercent: 110, duration: 1.1, stagger: 0.1 }, 0.1)
        .from(".hx-fade", { opacity: 0, y: 18, duration: 0.8, stagger: 0.08 }, 0.5)
        .from(".hs-browser", { opacity: 0, y: 60, rotateX: 12, duration: 1.2 }, 0.35)
        .from(".hs-float", { opacity: 0, y: 30, scale: 0.92, duration: 0.9, stagger: 0.15 }, 0.8)
        .from(".hs-chart-line", { strokeDashoffset: 600, duration: 1.8, ease: "power2.inOut" }, 0.9)
        .from(".hs-bar", { scaleY: 0, transformOrigin: "50% 100%", duration: 0.8, stagger: 0.05 }, 0.9);

      /* The enquiry toast pops in and out on a loop */
      gsap.timeline({ repeat: -1, repeatDelay: 2.5, delay: 3 })
        .fromTo(".hs-toast", { y: 20, opacity: 0, scale: 0.95 }, { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)" })
        .to(".hs-toast", { y: -10, opacity: 0, duration: 0.5, ease: "power2.in" }, "+=3");
    }, root);

    /* Pointer: cursor spotlight + layered depth parallax on the scene */
    const layers = Array.from(scene.querySelectorAll<HTMLElement>("[data-depth]")).map((el) => ({
      depth: parseFloat(el.dataset.depth || "0"),
      x: gsap.quickTo(el, "x", { duration: 0.8, ease: "power3" }),
      y: gsap.quickTo(el, "y", { duration: 0.8, ease: "power3" }),
    }));
    const rx = gsap.quickTo(scene, "rotateX", { duration: 0.9, ease: "power3" });
    const ry = gsap.quickTo(scene, "rotateY", { duration: 0.9, ease: "power3" });

    const onMove = (e: PointerEvent) => {
      const r = root.getBoundingClientRect();
      root.style.setProperty("--mx", `${e.clientX - r.left}px`);
      root.style.setProperty("--my", `${e.clientY - r.top}px`);
      if (reduce) return;
      const nx = (e.clientX - r.left) / r.width - 0.5;
      const ny = (e.clientY - r.top) / r.height - 0.5;
      rx(-ny * 6);
      ry(nx * 8);
      layers.forEach((l) => { l.x(nx * l.depth * 40); l.y(ny * l.depth * 30); });
    };
    if (fine) root.addEventListener("pointermove", onMove);

    return () => {
      root.removeEventListener("pointermove", onMove);
      ctx.revert();
    };
  }, []);

  return (
    <section id="home" ref={rootRef} className="hx">
      {/* Background: aurora, fading grid and a cursor spotlight */}
      <div className="hx-aurora" aria-hidden="true">
        <span className="hx-blob hx-blob-1" />
        <span className="hx-blob hx-blob-2" />
        <span className="hx-blob hx-blob-3" />
      </div>
      <div className="hx-grid" aria-hidden="true" />
      <div className="hx-spot" aria-hidden="true" />

      <div className="container hx-inner">
        {/* ── Copy ── */}
        <div className="hx-copy">
          <div className="hx-status hx-fade mono">
            <span className="hx-status-dot" /> Taking new projects · Surat, India
          </div>

          <h1 className="hx-title">
            <span className="hx-kicker hx-fade">Vraj Pandya — Web &amp; App Developer in Surat</span>
            <span className="hx-line"><span>Websites &amp; apps</span></span>
            <span className="hx-line"><span>that bring you</span></span>
            <span className="hx-line"><span><em className="gradient-text">real clients.</em></span></span>
          </h1>

          <p className="hx-sub hx-fade">
            I design and build fast websites, web apps and custom CRMs for growing
            businesses — from idea to launch, with clear pricing and on-time delivery.
          </p>

          <div className="hx-ctas hx-fade">
            <a href="#contact" className="btn btn-primary hx-cta">
              Get a free quote <FaArrowRight className="btn-arrow" />
            </a>
            <a
              href="https://wa.me/919726053886?text=Hi%20Vraj%2C%20I%20have%20a%20project%20in%20mind"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline hx-cta"
            >
              <FaWhatsapp /> Chat on WhatsApp
            </a>
          </div>

          <div className="hx-proof hx-fade">
            {[
              { v: `${years}+`, l: "years building" },
              { v: String(caseStudies), l: "case studies" },
            ].map((s) => (
              <div key={s.l} className="hx-proof-item">
                <span className="hx-proof-v">{s.v}</span>
                <span className="hx-proof-l mono">{s.l}</span>
              </div>
            ))}
            <div className="hx-proof-note mono">Replies within 24h</div>
          </div>
        </div>

        {/* ── Showcase scene ── */}
        <div className="hx-visual hero-visual" aria-hidden="true">
          <div ref={sceneRef} className="hs-scene">
            {/* Browser window with a mini business site */}
            <div className="hs-browser" data-depth="0.4">
              <div className="hs-bar-top">
                <span className="hs-dot" /><span className="hs-dot" /><span className="hs-dot" />
                <span className="hs-url mono">yourbusiness.com</span>
              </div>
              <div className="hs-page">
                <div className="hs-nav">
                  <span className="hs-logo" />
                  <span className="hs-navlinks"><i /><i /><i /></span>
                  <span className="hs-navbtn" />
                </div>
                <div className="hs-hero">
                  <div>
                    <div className="hs-h hs-h-1" />
                    <div className="hs-h hs-h-2" />
                    <div className="hs-p" />
                    <div className="hs-p hs-p-short" />
                    <div className="hs-btnrow"><span className="hs-btn-a" /><span className="hs-btn-b" /></div>
                  </div>
                  <div className="hs-chart">
                    <div className="hs-chart-head mono">
                      <span>Monthly enquiries</span>
                      <span className="hs-chart-up">▲</span>
                    </div>
                    <svg viewBox="0 0 220 110" preserveAspectRatio="none" className="hs-chart-svg">
                      <defs>
                        <linearGradient id="hsFill" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.35" />
                          <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="hsStroke" x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stopColor="#a78bfa" />
                          <stop offset="55%" stopColor="#f0abfc" />
                          <stop offset="100%" stopColor="#fdba74" />
                        </linearGradient>
                      </defs>
                      <path d="M0,95 C25,92 35,80 55,82 C80,85 90,62 115,60 C140,58 150,40 170,34 C190,28 200,14 220,8 L220,110 L0,110 Z" fill="url(#hsFill)" />
                      <path className="hs-chart-line" d="M0,95 C25,92 35,80 55,82 C80,85 90,62 115,60 C140,58 150,40 170,34 C190,28 200,14 220,8" fill="none" stroke="url(#hsStroke)" strokeWidth="3" strokeLinecap="round" strokeDasharray="600" />
                    </svg>
                  </div>
                </div>
                <div className="hs-cards">
                  {[38, 62, 48, 80, 56, 92, 70].map((h, i) => (
                    <span key={i} className="hs-bar" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
            </div>

            {/* Floating code card */}
            <div className="hs-float hs-code" data-depth="1">
              <div className="hs-code-top mono"><span className="hs-dot" /><span className="hs-dot" /><span className="hs-dot" /> launch.ts</div>
              <TypedCode />
            </div>

            {/* Floating performance score */}
            <div className="hs-float hs-score" data-depth="1.4">
              <svg viewBox="0 0 44 44" className="hs-ring">
                <circle cx="22" cy="22" r="18" className="hs-ring-bg" />
                <circle cx="22" cy="22" r="18" className="hs-ring-fg" />
              </svg>
              <div>
                <div className="hs-score-v">98</div>
                <div className="hs-score-l mono">Performance</div>
              </div>
            </div>

            {/* Floating enquiry toast */}
            <div className="hs-float-wrap" data-depth="1.8">
              <div className="hs-toast">
                <span className="hs-toast-icon"><FaCheck /></span>
                <div>
                  <div className="hs-toast-t">New enquiry received</div>
                  <div className="hs-toast-s mono">via contact form · just now</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{HERO_CSS}</style>
    </section>
  );
}

const HERO_CSS = `
.hx {
  position: relative;
  min-height: 100svh;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding: 120px 0 80px;
  background: var(--color-bg);
  --mx: 50%;
  --my: 40%;
}
.hx-inner {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 3.5rem;
  align-items: center;
}

/* Background layers */
.hx-aurora { position: absolute; inset: 0; z-index: 0; filter: blur(70px); }
.hx-blob { position: absolute; border-radius: 50%; }
.hx-blob-1 { width: 46vmax; height: 46vmax; top: -18vmax; right: -10vmax; background: var(--aurora-1); animation: hx-drift 22s ease-in-out infinite alternate; }
.hx-blob-2 { width: 34vmax; height: 34vmax; top: 20%; right: 18%; background: var(--aurora-2); animation: hx-drift 28s ease-in-out -6s infinite alternate-reverse; }
.hx-blob-3 { width: 30vmax; height: 30vmax; bottom: -16vmax; left: -8vmax; background: var(--aurora-3); animation: hx-drift 26s ease-in-out -12s infinite alternate; }
@keyframes hx-drift {
  0%   { transform: translate(0, 0) scale(1); }
  50%  { transform: translate(-4vmax, 3vmax) scale(1.08); }
  100% { transform: translate(3vmax, -2vmax) scale(0.95); }
}
.hx-grid {
  position: absolute; inset: 0; z-index: 1; pointer-events: none;
  background-image:
    linear-gradient(var(--color-border) 1px, transparent 1px),
    linear-gradient(90deg, var(--color-border) 1px, transparent 1px);
  background-size: 64px 64px;
  mask-image: radial-gradient(ellipse 70% 60% at 50% 40%, #000 30%, transparent 75%);
  -webkit-mask-image: radial-gradient(ellipse 70% 60% at 50% 40%, #000 30%, transparent 75%);
}
.hx-spot {
  position: absolute; inset: 0; z-index: 1; pointer-events: none;
  background: radial-gradient(420px circle at var(--mx) var(--my), var(--aurora-2), transparent 70%);
  opacity: 0.6;
}

/* Copy */
.hx-status {
  display: inline-flex; align-items: center; gap: 0.6rem;
  font-size: 0.74rem; letter-spacing: 0.08em; text-transform: uppercase;
  color: var(--color-text-muted);
  padding: 0.45rem 0.95rem 0.45rem 0.75rem;
  border: 1px solid var(--color-border);
  border-radius: 999px;
  background: var(--color-bg-input);
  backdrop-filter: blur(8px);
  margin-bottom: 1.75rem;
}
.hx-status-dot {
  width: 8px; height: 8px; border-radius: 50%; background: #22c55e;
  animation: hx-ping 2s ease-out infinite;
}
@keyframes hx-ping {
  0% { box-shadow: 0 0 0 0 rgba(34,197,94,0.55); }
  100% { box-shadow: 0 0 0 10px rgba(34,197,94,0); }
}
.hx-title {
  font-size: clamp(2.6rem, 5.4vw, 4.9rem);
  font-weight: 600;
  line-height: 0.98;
  letter-spacing: -0.05em;
  color: var(--color-text);
  margin-bottom: 1.6rem;
}
.hx-kicker {
  display: block;
  font-size: 0.95rem;
  font-weight: 500;
  letter-spacing: -0.01em;
  line-height: 1.4;
  color: var(--color-text-muted);
  margin-bottom: 1.1rem;
}
.hx-line { display: block; overflow: hidden; padding-bottom: 0.08em; margin-bottom: -0.08em; }
.hx-line > span { display: inline-block; }
.hx-title em { font-size: 1.08em; }
.hx-sub {
  font-size: 1.12rem;
  line-height: 1.7;
  max-width: 520px;
  color: var(--color-text-muted);
  margin-bottom: 2.2rem;
}
.hx-ctas { display: flex; gap: 0.85rem; flex-wrap: wrap; margin-bottom: 2.75rem; }
.hx-cta { padding: 0.95rem 1.7rem; font-size: 1rem; }
.btn-arrow { transition: transform 0.25s ease-out; }
.btn:hover .btn-arrow { transform: translateX(4px); }

.hx-proof {
  display: flex; align-items: center; gap: 2rem; flex-wrap: wrap;
  padding-top: 1.75rem;
  border-top: 1px solid var(--color-border);
}
.hx-proof-item { display: flex; flex-direction: column; gap: 0.2rem; }
.hx-proof-v {
  font-family: var(--font-display), Georgia, serif;
  font-style: italic;
  font-size: 2.2rem;
  line-height: 1;
  color: var(--color-text);
}
.hx-proof-l, .hx-proof-note { font-size: 0.7rem; letter-spacing: 0.08em; text-transform: uppercase; color: var(--color-text-dim); }
.hx-proof-note { margin-left: auto; padding: 0.4rem 0.8rem; border: 1px dashed var(--color-border-strong); border-radius: 999px; }

/* Showcase scene */
.hx-visual { position: relative; perspective: 1400px; }
.hs-scene { position: relative; transform-style: preserve-3d; padding: 2.5rem 1rem 3rem; }

.hs-browser {
  position: relative;
  border-radius: 18px;
  background: var(--color-bg-card);
  border: 1px solid var(--color-border-strong);
  box-shadow: 0 40px 80px -30px rgba(0,0,0,0.55), 0 0 0 1px var(--color-border), 0 0 80px -20px var(--aurora-1);
  overflow: hidden;
}
.hs-bar-top {
  display: flex; align-items: center; gap: 6px;
  padding: 0.7rem 0.9rem;
  border-bottom: 1px solid var(--color-border);
  background: var(--color-bg-input);
}
.hs-dot { width: 9px; height: 9px; border-radius: 50%; background: var(--color-border-strong); display: inline-block; }
.hs-url {
  margin-left: 0.8rem; flex: 1; font-size: 0.7rem; color: var(--color-text-dim);
  padding: 0.25rem 0.7rem; border-radius: 999px; background: var(--color-bg);
  border: 1px solid var(--color-border);
}
.hs-page { padding: 1.1rem 1.2rem 1.2rem; }
.hs-nav { display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.3rem; }
.hs-logo { width: 54px; height: 10px; border-radius: 4px; background: var(--gradient-primary); }
.hs-navlinks { display: flex; gap: 10px; }
.hs-navlinks i { display: block; width: 26px; height: 6px; border-radius: 3px; background: var(--color-border-strong); }
.hs-navbtn { width: 46px; height: 16px; border-radius: 999px; background: var(--btn-bg); }
.hs-hero { display: grid; grid-template-columns: 1fr 1.1fr; gap: 1rem; align-items: center; margin-bottom: 1.1rem; }
.hs-h { height: 12px; border-radius: 4px; background: var(--color-text); opacity: 0.85; margin-bottom: 7px; }
.hs-h-1 { width: 92%; }
.hs-h-2 { width: 64%; background: var(--gradient-primary); opacity: 1; }
.hs-p { height: 6px; width: 100%; border-radius: 3px; background: var(--color-border-strong); margin: 10px 0 0; }
.hs-p-short { width: 70%; margin-top: 6px; }
.hs-btnrow { display: flex; gap: 6px; margin-top: 14px; }
.hs-btn-a { width: 52px; height: 16px; border-radius: 999px; background: var(--btn-bg); }
.hs-btn-b { width: 40px; height: 16px; border-radius: 999px; border: 1px solid var(--color-border-strong); }
.hs-chart {
  border: 1px solid var(--color-border); border-radius: 12px; padding: 0.6rem 0.6rem 0.2rem;
  background: var(--color-bg-input);
}
.hs-chart-head { display: flex; justify-content: space-between; font-size: 0.6rem; color: var(--color-text-dim); margin-bottom: 0.3rem; }
.hs-chart-up { color: #22c55e; }
.hs-chart-svg { width: 100%; height: 80px; display: block; }
.hs-cards {
  display: flex; align-items: flex-end; gap: 8px; height: 70px;
  padding: 0.7rem; border: 1px solid var(--color-border); border-radius: 12px;
}
.hs-bar { flex: 1; border-radius: 4px 4px 2px 2px; background: linear-gradient(to top, var(--aurora-1), var(--color-primary)); opacity: 0.85; }

.hs-float, .hs-toast {
  background: color-mix(in srgb, var(--color-bg-card) 82%, transparent);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border: 1px solid var(--color-border-strong);
  box-shadow: 0 24px 50px -20px rgba(0,0,0,0.5);
}
.hs-code {
  position: absolute; top: -0.5rem; right: -1.5rem; width: 250px;
  border-radius: 14px; overflow: hidden;
}
.hs-code-top { display: flex; align-items: center; gap: 5px; font-size: 0.65rem; color: var(--color-text-dim); padding: 0.55rem 0.8rem; border-bottom: 1px solid var(--color-border); }
.hs-code-top .hs-dot { width: 7px; height: 7px; }
.hs-code-body { margin: 0; padding: 0.7rem 0.8rem 0.8rem; font-size: 0.7rem; line-height: 1.65; color: var(--color-text); min-height: 138px; white-space: pre; }
.hs-ln { display: inline-block; width: 1.4em; color: var(--color-text-dim); user-select: none; }
.hs-tok-kw { color: var(--color-primary-light); }
.hs-tok-str { color: var(--color-secondary); }
.hs-tok-cm { color: #22c55e; }
.hs-caret { display: inline-block; width: 6px; height: 0.95em; margin-left: 2px; vertical-align: -2px; background: var(--color-primary); animation: hx-blink 1s steps(1) infinite; }
@keyframes hx-blink { 50% { opacity: 0; } }

.hs-score {
  position: absolute; bottom: 2.2rem; right: -1rem;
  display: flex; align-items: center; gap: 0.6rem;
  padding: 0.6rem 0.9rem 0.6rem 0.6rem; border-radius: 14px;
}
.hs-ring { width: 42px; height: 42px; transform: rotate(-90deg); }
.hs-ring-bg { fill: none; stroke: var(--color-border-strong); stroke-width: 4; }
.hs-ring-fg { fill: none; stroke: #22c55e; stroke-width: 4; stroke-linecap: round; stroke-dasharray: 113; stroke-dashoffset: 2.5; }
.hs-score-v { font-weight: 700; font-size: 1.05rem; color: var(--color-text); line-height: 1; }
.hs-score-l { font-size: 0.6rem; letter-spacing: 0.06em; text-transform: uppercase; color: var(--color-text-dim); margin-top: 3px; }

.hs-float-wrap { position: absolute; bottom: -0.25rem; left: -1.75rem; }
.hs-toast {
  display: flex; align-items: center; gap: 0.7rem;
  padding: 0.75rem 1rem 0.75rem 0.75rem; border-radius: 14px;
  opacity: 0;
}
.hs-toast-icon {
  width: 30px; height: 30px; border-radius: 9px; display: grid; place-items: center;
  background: rgba(34,197,94,0.15); color: #22c55e; font-size: 0.8rem;
}
.hs-toast-t { font-size: 0.84rem; font-weight: 600; color: var(--color-text); }
.hs-toast-s { font-size: 0.64rem; color: var(--color-text-dim); margin-top: 2px; }

@media (max-width: 1024px) {
  .hx-inner { grid-template-columns: 1fr; gap: 3rem; }
  .hx-visual { max-width: 560px; margin: 0 auto; width: 100%; }
}
@media (max-width: 640px) {
  .hx { padding: 104px 0 56px; }
  .hx-sub { font-size: 1rem; }
  .hx-ctas .btn { flex: 1 1 100%; }
  .hx-proof { gap: 1rem; }
  .hx-proof-item { flex: 1; }
  .hx-proof-v { font-size: 1.9rem; }
  .hx-proof-l { font-size: 0.6rem; }
  .hx-proof-note { margin-left: 0; }
  .hs-scene { padding: 1.5rem 0 2.5rem; }
  .hs-code { width: 200px; right: -0.25rem; top: -1.25rem; }
  .hs-code-body { font-size: 0.6rem; min-height: 112px; }
  .hs-score { right: 0; bottom: 1.5rem; }
  .hs-float-wrap { left: 0; bottom: -0.5rem; }
}
@media (prefers-reduced-motion: reduce) {
  .hs-toast { opacity: 1; }
}
`;
