"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { FaArrowRight, FaWhatsapp } from "react-icons/fa";
import { projects, NDA_NOTE } from "@/lib/projectsData";
import { ProjectCard, PROJECT_CARD_CSS } from "@/components/FeaturedProjects";

export default function ProjectsClient() {
  const [active, setActive] = useState("All");

  // Filters come from the data, so a category can never show "(0)".
  const filters = useMemo(() => {
    const counts = new Map<string, number>();
    projects.forEach((p) => counts.set(p.category, (counts.get(p.category) ?? 0) + 1));
    return [["All", projects.length] as const, ...Array.from(counts.entries())];
  }, []);

  const shown = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <main className="pl">
      <div className="container">
        <header className="pl-head">
          <nav className="pl-crumbs mono" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span>/</span><span aria-current="page">Projects</span>
          </nav>
          <div className="section-tag">Portfolio · {projects.length} case studies</div>
          <h1 className="pl-title">
            Work that grows <span className="gradient-text">real businesses.</span>
          </h1>
          <p className="pl-sub">
            Websites, mobile apps, CRMs and SaaS platforms I&apos;ve built for businesses in Surat,
            across India and worldwide — each with the problem, the solution and the result.
          </p>
          <p className="pl-nda mono">{NDA_NOTE}</p>
        </header>

        <div className="pl-filters" role="tablist" aria-label="Filter projects">
          {filters.map(([cat, count]) => (
            <button
              key={cat}
              role="tab"
              aria-selected={active === cat}
              onClick={() => setActive(cat)}
              className={`pl-filter ${active === cat ? "is-active" : ""}`}
            >
              {cat} <span className="mono">{count}</span>
            </button>
          ))}
        </div>

        <div className="pl-grid">
          {shown.map((p) => <ProjectCard key={p.slug} project={p} span={6} />)}
        </div>

        <section className="pl-cta">
          <h2>Don&apos;t see your industry here?</h2>
          <p>Every project starts with a free call. Tell me what your business needs — you&apos;ll get a plan and a fixed quote within 24 hours.</p>
          <div className="pl-cta-btns">
            <Link href="/#contact" className="btn btn-primary">Get a free quote <FaArrowRight className="btn-arrow" /></Link>
            <a href="https://wa.me/919726053886?text=Hi%20Vraj%2C%20I%20have%20a%20project%20in%20mind" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              <FaWhatsapp /> Chat on WhatsApp
            </a>
          </div>
        </section>
      </div>

      <style>{PROJECT_CARD_CSS + `
        .pl { min-height: 100vh; padding: 7rem 0 5rem; }
        .pl-crumbs { display: flex; gap: 0.55rem; font-size: 0.75rem; color: var(--color-text-dim); margin-bottom: 2rem; }
        .pl-crumbs a { color: var(--color-text-muted); }
        .pl-head { margin-bottom: 2.5rem; max-width: 820px; }
        .pl-title { font-size: clamp(2.6rem, 6vw, 4.6rem); line-height: 1; letter-spacing: -0.05em; color: var(--color-text); margin-bottom: 1.25rem; }
        .pl-sub { font-size: 1.15rem; line-height: 1.7; max-width: 680px; }
        .pl-nda { font-size: 0.72rem; color: var(--color-text-dim); margin-top: 1rem; }
        .pl-filters { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 2rem; }
        .pl-filter {
          display: inline-flex; align-items: center; gap: 0.5rem; cursor: pointer;
          padding: 0.55rem 1.05rem; border-radius: 999px; font-size: 0.9rem; font-weight: 500;
          color: var(--color-text-muted); background: transparent; border: 1px solid var(--color-border);
          transition: color 0.2s, background 0.2s, border-color 0.2s;
        }
        .pl-filter .mono { font-size: 0.7rem; color: var(--color-text-dim); }
        .pl-filter:hover { color: var(--color-text); border-color: var(--color-border-strong); }
        .pl-filter.is-active { color: var(--btn-fg); background: var(--btn-bg); border-color: transparent; }
        .pl-filter.is-active .mono { color: inherit; opacity: 0.7; }
        .pl-grid { display: grid; grid-template-columns: repeat(12, 1fr); gap: 1.25rem; }
        .pl-cta {
          margin-top: 4rem; padding: 3rem 2rem; text-align: center; border-radius: var(--radius-lg);
          border: 1px solid var(--color-border); background: var(--color-bg-card); position: relative; overflow: hidden;
        }
        .pl-cta::before { content: ""; position: absolute; inset: -50% 10% auto; height: 120%; background: radial-gradient(closest-side, var(--aurora-1), transparent 70%); filter: blur(40px); pointer-events: none; }
        .pl-cta > * { position: relative; }
        .pl-cta h2 { font-size: clamp(1.7rem, 3.4vw, 2.4rem); letter-spacing: -0.035em; color: var(--color-text); margin-bottom: 0.75rem; }
        .pl-cta p { max-width: 560px; margin: 0 auto 1.6rem; }
        .pl-cta-btns { display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap; }
        @media (max-width: 900px) {
          .pl-grid { grid-template-columns: 1fr; }
          .pl-grid .fp-card { grid-column: auto !important; }
        }
      `}</style>
    </main>
  );
}
