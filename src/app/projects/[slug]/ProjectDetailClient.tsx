"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  FaArrowUp, FaCheck, FaChevronLeft, FaChevronRight, FaExternalLinkAlt, FaGithub, FaLock, FaMapMarkerAlt,
} from "react-icons/fa";
import type { Project } from "@/lib/projectsData";
import { projects, NDA_NOTE } from "@/lib/projectsData";

export default function ProjectDetailClient({ project }: { project: Project }) {
  const name = project.title.split("–")[0].trim();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = project.images.length;

  // Auto-advance the gallery; pauses while the visitor hovers it.
  useEffect(() => {
    if (total < 2 || paused) return;
    const id = setInterval(() => setActive((i) => (i + 1) % total), 4500);
    return () => clearInterval(id);
  }, [total, paused]);

  const idx = projects.findIndex((p) => p.slug === project.slug);
  const prev = idx > 0 ? projects[idx - 1] : null;
  const next = idx < projects.length - 1 ? projects[idx + 1] : null;
  const paragraphs = project.fullDescription.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);
  const related = projects
    .filter((p) => p.slug !== project.slug && (p.category === project.category || p.tags.some((t) => project.tags.includes(t))))
    .slice(0, 3);

  const facts: [string, string][] = [
    ["Industry", project.industry],
    ["Delivered", project.platform],
    ["Role", project.role],
    ["Year", project.year],
    ["Client", project.clientLocation ? `Name withheld (NDA) · ${project.clientLocation}` : "Name withheld (NDA)"],
  ];

  return (
    <main className="pd">
      <div className="container pd-wrap">
        {/* Breadcrumb */}
        <nav className="pd-crumbs mono" aria-label="Breadcrumb">
          <Link href="/">Home</Link><span>/</span>
          <Link href="/projects">Projects</Link><span>/</span>
          <span aria-current="page">{name}</span>
        </nav>

        {/* Header */}
        <header className="pd-head">
          <div className="pd-meta mono">
            <span>{project.industry}</span><span className="pd-dot" /><span>{project.category}</span><span className="pd-dot" /><span>{project.year}</span>
          </div>
          <h1 className="pd-title">{name}</h1>
          <p className="pd-tagline">{project.tagline}</p>
          <p className="pd-lead">{project.description}</p>
          <ul className="pd-results">
            {project.results.map((r) => (
              <li key={r}><FaArrowUp className="pd-up" /> {r}</li>
            ))}
          </ul>
          <p className="pd-nda mono"><FaLock /> {NDA_NOTE}</p>
        </header>

        {/* Gallery */}
        <section
          className="pd-gallery"
          style={{ background: project.gradient }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          aria-label={`${name} screenshots`}
        >
          {project.images.map((src, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={src}
              src={src}
              alt={`${name} — ${i === 0 ? project.tagline : `${project.platform} screen`}`}
              className={`pd-shot ${i === active ? "is-active" : ""}`}
              loading={i === 0 ? "eager" : "lazy"}
            />
          ))}
          {total > 1 && (
            <>
              <button className="pd-arrow pd-arrow-l" onClick={() => setActive((active - 1 + total) % total)} aria-label="Previous screenshot"><FaChevronLeft /></button>
              <button className="pd-arrow pd-arrow-r" onClick={() => setActive((active + 1) % total)} aria-label="Next screenshot"><FaChevronRight /></button>
            </>
          )}
        </section>
        {total > 1 && (
          <div className="pd-thumbs">
            {project.images.map((src, i) => (
              <button key={src} className={`pd-thumb ${i === active ? "is-active" : ""}`} onClick={() => setActive(i)} aria-label={`Show screenshot ${i + 1}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt="" />
              </button>
            ))}
          </div>
        )}

        {/* Body: story + sticky facts */}
        <div className="pd-body">
          <article className="pd-article">
            <section>
              <h2>Overview</h2>
              {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            </section>

            <section>
              <h2>Key features</h2>
              <ul className="pd-features">
                {project.features.map((f) => (
                  <li key={f}><span className="pd-check"><FaCheck /></span>{f}</li>
                ))}
              </ul>
            </section>

            <section className="pd-callout">
              <h2>The challenge</h2>
              <p>{project.challenges}</p>
            </section>

            <section className="pd-callout pd-callout-win">
              <h2>The result</h2>
              <p>{project.outcome}</p>
            </section>

            {/* Local + global relevance, written for people searching for this kind of build */}
            <section className="pd-local">
              <h2>Planning a project like {name}?</h2>
              <p>
                I&apos;m Vraj Pandya, a full stack developer based in <strong>Surat, Gujarat</strong>. I build{" "}
                {project.service} and other {project.industry.toLowerCase()} solutions for businesses in Surat,
                across India and for clients worldwide — working remotely with clear updates and a fixed quote
                before work starts.
              </p>
              <div className="pd-areas mono">
                <span><FaMapMarkerAlt /> Surat</span><span>Gujarat</span><span>India</span><span>Worldwide · remote</span>
              </div>
            </section>
          </article>

          <aside className="pd-aside">
            <div className="card pd-facts">
              <h2 className="pd-aside-title mono">Project facts</h2>
              <dl>
                {facts.map(([k, v]) => (
                  <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
                ))}
              </dl>
              <h3 className="pd-aside-title mono">Tech stack</h3>
              <ul className="pd-chips">{project.tech.map((t) => <li key={t}>{t}</li>)}</ul>
              <h3 className="pd-aside-title mono">Tags</h3>
              <ul className="pd-chips pd-chips-soft">{project.tags.map((t) => <li key={t}>{t}</li>)}</ul>
              {(project.live !== "#" || project.github !== "#") && (
                <div className="pd-links">
                  {project.live !== "#" && <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-outline"><FaExternalLinkAlt /> Live site</a>}
                  {project.github !== "#" && <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline"><FaGithub /> Code</a>}
                </div>
              )}
            </div>
            <div className="card pd-quote">
              <p className="pd-quote-t">Want something like {name}?</p>
              <p className="pd-quote-s">Free call, clear plan and a fixed quote within 24 hours.</p>
              <Link href="/#contact" className="btn btn-primary" style={{ width: "100%" }}>Get a free quote</Link>
            </div>
          </aside>
        </div>

        {related.length > 0 && (
          <section className="pd-related">
            <h2 className="pd-related-title">Similar projects</h2>
            <div className="pd-related-grid">
              {related.map((r) => (
                <Link key={r.slug} href={`/projects/${r.slug}`} className="card project-card pd-rel">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={r.images[0]} alt={`${r.title.split("–")[0].trim()} — ${r.tagline}`} loading="lazy" />
                  <span className="pd-rel-meta mono">{r.industry}</span>
                  <span className="pd-rel-title">{r.title.split("–")[0].trim()}</span>
                  <span className="pd-rel-sub">{r.tagline}</span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Prev / Next navigation — two equal cards with a thumbnail each */}
        <nav className="pd-nav" aria-label="More projects">
          {[
            prev && { p: prev, dir: "prev" as const },
            next && { p: next, dir: "next" as const },
          ]
            .filter((x): x is { p: Project; dir: "prev" | "next" } => Boolean(x))
            .map(({ p, dir }) => (
              <Link key={dir} href={`/projects/${p.slug}`} className={`card pd-nav-card pd-nav-${dir}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.images[0]} alt="" aria-hidden="true" className="pd-nav-thumb" />
                <div className="pd-nav-text">
                  <span className="pd-nav-label mono">
                    {dir === "prev" ? <><FaChevronLeft className="pd-nav-arrow" /> Previous</> : <>Next <FaChevronRight className="pd-nav-arrow" /></>}
                  </span>
                  <span className="pd-nav-title">{p.title.split("–")[0].trim()}</span>
                  <span className="pd-nav-sub">{p.tagline}</span>
                </div>
              </Link>
            ))}
        </nav>

        {/* Hire CTA */}
        <section className="pd-cta">
          <span className="section-tag">Start a project</span>
          <h2 className="pd-cta-title">
            Want something like <span className="gradient-text">{name}?</span>
          </h2>
          <p className="pd-cta-sub">
            Tell me about your business — you&apos;ll get a clear plan and a fixed quote within 24 hours.
          </p>
          <div className="pd-cta-btns">
            <Link href="/#contact" className="btn btn-primary">Get a free quote</Link>
            <a
              href={`https://wa.me/919726053886?text=${encodeURIComponent(`Hi Vraj, I saw ${name} and want something similar.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              Chat on WhatsApp
            </a>
          </div>
        </section>
      </div>

      <style>{PD_CSS}</style>
    </main>
  );
}

const PD_CSS = `
.pd { min-height: 100vh; padding: 7rem 0 5rem; }
.pd-wrap { max-width: 1180px; }
.pd-crumbs { display: flex; gap: 0.55rem; font-size: 0.75rem; color: var(--color-text-dim); margin-bottom: 2rem; flex-wrap: wrap; }
.pd-crumbs a { color: var(--color-text-muted); }
.pd-crumbs a:hover { color: var(--color-text); }

.pd-head { margin-bottom: 2.25rem; max-width: 900px; }
.pd-meta { display: flex; align-items: center; gap: 0.55rem; font-size: 0.72rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--color-text-dim); margin-bottom: 1rem; flex-wrap: wrap; }
.pd-dot { width: 3px; height: 3px; border-radius: 50%; background: currentColor; }
.pd-title { font-size: clamp(2.2rem, 5vw, 3.6rem); line-height: 1.05; letter-spacing: -0.045em; margin-bottom: 1.1rem; color: var(--color-text); }
.pd-tagline { font-size: clamp(1.2rem, 2.2vw, 1.5rem); line-height: 1.4; letter-spacing: -0.02em; color: var(--color-text); margin: -0.4rem 0 1rem; }
.pd-nda { display: inline-flex; align-items: center; gap: 0.5rem; font-size: 0.72rem; color: var(--color-text-dim); padding: 0.4rem 0.8rem; border-radius: 999px; border: 1px dashed var(--color-border-strong); margin-top: 1.25rem; }
.pd-lead { font-size: 1.15rem; line-height: 1.7; max-width: 760px; margin-bottom: 1.5rem; }
.pd-results { list-style: none; display: flex; flex-wrap: wrap; gap: 0.6rem; }
.pd-results li {
  display: inline-flex; align-items: center; gap: 0.45rem; font-weight: 600; font-size: 0.92rem; color: var(--color-text);
  padding: 0.55rem 1rem; border-radius: 999px; background: rgba(34,197,94,0.1); border: 1px solid rgba(34,197,94,0.28);
}
.pd-up { color: #22c55e; font-size: 0.75rem; }

.pd-gallery { position: relative; border-radius: var(--radius-lg); overflow: hidden; aspect-ratio: 16 / 10; border: 1px solid var(--color-border); }
.pd-shot { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; opacity: 0; transform: scale(1.02); transition: opacity 0.7s ease, transform 1.2s cubic-bezier(0.22, 1, 0.36, 1); }
.pd-shot.is-active { opacity: 1; transform: scale(1); }
.pd-arrow {
  position: absolute; top: 50%; transform: translateY(-50%); z-index: 2; width: 46px; height: 46px; border-radius: 50%;
  display: grid; place-items: center; cursor: pointer; border: 1px solid rgba(255,255,255,0.4);
  background: rgba(15,23,42,0.45); color: #fff; backdrop-filter: blur(8px); transition: background 0.25s;
}
.pd-arrow:hover { background: rgba(15,23,42,0.75); }
.pd-arrow-l { left: 1rem; } .pd-arrow-r { right: 1rem; }
.pd-thumbs { display: flex; gap: 0.75rem; margin: 0.9rem 0 0; }
.pd-thumb { width: 150px; aspect-ratio: 16 / 10; border-radius: 10px; overflow: hidden; padding: 0; cursor: pointer; border: 2px solid transparent; opacity: 0.6; transition: opacity 0.25s, border-color 0.25s; background: none; }
.pd-thumb img { width: 100%; height: 100%; object-fit: cover; }
.pd-thumb.is-active, .pd-thumb:hover { opacity: 1; border-color: var(--color-primary); }

.pd-body { display: grid; grid-template-columns: minmax(0, 1fr) 340px; gap: 3rem; margin-top: 3.5rem; align-items: start; }
.pd-article { display: flex; flex-direction: column; gap: 2.5rem; }
.pd-article h2 { font-size: 1.5rem; letter-spacing: -0.03em; color: var(--color-text); margin-bottom: 1rem; }
.pd-article p { font-size: 1.02rem; line-height: 1.8; margin-bottom: 1rem; }
.pd-article p:last-child { margin-bottom: 0; }
.pd-features { list-style: none; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0.75rem; }
.pd-features li { display: flex; gap: 0.75rem; align-items: flex-start; padding: 1rem 1.1rem; border-radius: 14px; border: 1px solid var(--color-border); background: var(--color-bg-card); color: var(--color-text); font-size: 0.95rem; line-height: 1.5; }
.pd-check { flex-shrink: 0; width: 22px; height: 22px; border-radius: 7px; display: grid; place-items: center; font-size: 0.65rem; color: #fff; background: var(--gradient-primary); margin-top: 1px; }
.pd-callout { padding: 1.6rem 1.75rem; border-radius: var(--radius-lg); border: 1px solid var(--color-border); background: var(--color-bg-card); }
.pd-callout h2 { font-size: 1.2rem; }
.pd-callout-win { border-color: rgba(34,197,94,0.3); background: linear-gradient(135deg, rgba(34,197,94,0.07), transparent 60%), var(--color-bg-card); }
.pd-local { padding-top: 2rem; border-top: 1px solid var(--color-border); }
.pd-local h2 { font-size: 1.3rem; }
.pd-local strong { color: var(--color-text); }
.pd-areas { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 1rem; }
.pd-areas span { display: inline-flex; align-items: center; gap: 0.35rem; font-size: 0.72rem; padding: 0.35rem 0.75rem; border-radius: 999px; border: 1px solid var(--color-border); color: var(--color-text-muted); }

.pd-aside { position: sticky; top: 96px; display: flex; flex-direction: column; gap: 1rem; }
.pd-aside-title { font-size: 0.68rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--color-text-dim); font-weight: 500; margin: 1.25rem 0 0.7rem; }
.pd-facts .pd-aside-title:first-child { margin-top: 0; }
.pd-facts dl div { display: flex; justify-content: space-between; gap: 1rem; padding: 0.6rem 0; border-bottom: 1px solid var(--color-border); font-size: 0.88rem; }
.pd-facts dt { color: var(--color-text-dim); }
.pd-facts dd { color: var(--color-text); font-weight: 500; text-align: right; }
.pd-chips { list-style: none; display: flex; flex-wrap: wrap; gap: 0.4rem; }
.pd-chips li { font-size: 0.78rem; padding: 0.3rem 0.65rem; border-radius: 999px; background: var(--color-bg-input); border: 1px solid var(--color-border); color: var(--color-text); }
.pd-chips-soft li { font-family: var(--font-code), ui-monospace, monospace; font-size: 0.7rem; color: var(--color-text-muted); }
.pd-links { display: flex; gap: 0.5rem; margin-top: 1.25rem; }
.pd-links .btn { flex: 1; padding: 0.65rem 1rem; font-size: 0.85rem; }
.pd-quote-t { font-weight: 600; font-size: 1.05rem; color: var(--color-text); margin-bottom: 0.3rem; }
.pd-quote-s { font-size: 0.88rem; margin-bottom: 1rem; }

.pd-related { margin-top: 4.5rem; }
.pd-related-title { font-size: 1.6rem; letter-spacing: -0.03em; color: var(--color-text); margin-bottom: 1.25rem; }
.pd-related-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1rem; }
.pd-rel { padding: 0.75rem 0.75rem 1.1rem; display: flex; flex-direction: column; gap: 0.3rem; color: inherit; }
.pd-rel img { width: 100%; aspect-ratio: 16 / 10; object-fit: cover; border-radius: 12px; margin-bottom: 0.6rem; transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1); }
.pd-rel:hover img { transform: scale(1.03); }
.pd-rel-meta { font-size: 0.66rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--color-text-dim); padding: 0 0.25rem; }
.pd-rel-title { font-weight: 600; color: var(--color-text); padding: 0 0.25rem; }
.pd-rel-sub { font-size: 0.85rem; color: var(--color-text-muted); padding: 0 0.25rem; }

.pd-nav { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; margin-top: 4rem; padding-top: 2rem; border-top: 1px solid var(--color-border); }
.pd-nav-card { display: flex; align-items: center; gap: 1rem; padding: 0.9rem; height: 100%; color: inherit; overflow: hidden; }
.pd-nav-next { flex-direction: row-reverse; text-align: right; grid-column: 2; }
.pd-nav-thumb { width: 104px; aspect-ratio: 16 / 10; object-fit: cover; border-radius: 10px; flex-shrink: 0; border: 1px solid var(--color-border); transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1); }
.pd-nav-card:hover .pd-nav-thumb { transform: scale(1.06); }
.pd-nav-text { display: flex; flex-direction: column; gap: 0.2rem; min-width: 0; }
.pd-nav-label { display: inline-flex; align-items: center; gap: 0.35rem; font-size: 0.7rem; letter-spacing: 0.08em; text-transform: uppercase; color: var(--color-text-dim); }
.pd-nav-next .pd-nav-label { justify-content: flex-end; }
.pd-nav-arrow { transition: transform 0.3s ease; }
.pd-nav-prev:hover .pd-nav-arrow { transform: translateX(-4px); }
.pd-nav-next:hover .pd-nav-arrow { transform: translateX(4px); }
.pd-nav-title { font-weight: 600; font-size: 1.05rem; color: var(--color-text); letter-spacing: -0.02em; }
.pd-nav-sub { font-size: 0.82rem; color: var(--color-text-muted); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

.pd-cta { position: relative; overflow: hidden; text-align: center; margin-top: 3rem; padding: 3.5rem 2rem; border-radius: var(--radius-lg); border: 1px solid var(--color-border); background: var(--color-bg-card); }
.pd-cta::before { content: ""; position: absolute; inset: -40% -10% auto; height: 120%; background: radial-gradient(closest-side, var(--aurora-1), transparent 70%); filter: blur(40px); pointer-events: none; }
.pd-cta > * { position: relative; }
.pd-cta-title { font-size: clamp(1.8rem, 3.6vw, 2.6rem); letter-spacing: -0.035em; margin-bottom: 0.75rem; color: var(--color-text); }
.pd-cta-sub { max-width: 520px; margin: 0 auto 1.75rem; }
.pd-cta-btns { display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap; }

@media (max-width: 960px) {
  .pd-body { grid-template-columns: 1fr; }
  .pd-aside { position: static; }
  .pd-related-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 640px) {
  .pd { padding-top: 6rem; }
  .pd-features { grid-template-columns: 1fr; }
  .pd-thumb { width: 110px; }
  .pd-arrow { width: 38px; height: 38px; }
  .pd-related-grid { grid-template-columns: 1fr; }
  .pd-nav { grid-template-columns: 1fr; }
  .pd-nav-next { grid-column: auto; }
  .pd-nav-thumb { width: 84px; }
}
`;
