"use client";

import Link from "next/link";
import { FaArrowRight, FaArrowUp } from "react-icons/fa";
import { projects, NDA_NOTE, type Project } from "@/lib/projectsData";

/* Curated for the homepage: the business types most likely to hire. */
const HOME_SLUGS = [
  "catering-website-whatsapp-ordering",
  "real-estate-website-lead-management",
  "diamond-textile-trader-crm-surat",
  "school-management-saas",
  "surat-textile-wholesale-website",
  "on-demand-towing-app",
];

/* Card widths on the 12-column grid — alternating rhythm, like a magazine spread. */
const SPANS = [7, 5, 5, 7, 6, 6];

export function ProjectCard({ project, span = 6 }: { project: Project; span?: number }) {
  const name = project.title;
  return (
    <Link href={`/projects/${project.slug}`} className="fp-card card project-card" style={{ gridColumn: `span ${span}` }}>
      <div className="fp-media">
        <div className="fp-media-bg" style={{ background: project.gradient }} />
        <div className="fp-shot">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={project.images[0]} alt={`${name} — ${project.tagline}`} loading="lazy" className="fp-img fp-img-a" />
          {project.images[1] && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={project.images[1]} alt="" aria-hidden="true" loading="lazy" className="fp-img fp-img-b" />
          )}
        </div>
        <span className="fp-arrow" aria-hidden="true"><FaArrowRight /></span>
      </div>

      <div className="fp-body">
        <div className="fp-meta mono">
          <span>{project.industry}</span>
          <span className="fp-meta-dot" />
          <span>{project.year}</span>
        </div>
        <h3 className="fp-title">{name}</h3>
        <p className="fp-tagline">{project.tagline}</p>
        <ul className="fp-results">
          {project.results.slice(0, 2).map((r) => (
            <li key={r}><FaArrowUp className="fp-up" /> {r}</li>
          ))}
        </ul>
        <ul className="fp-tags">
          {project.tags.slice(0, 3).map((t) => <li key={t}>{t}</li>)}
        </ul>
      </div>
    </Link>
  );
}

export default function FeaturedProjects() {
  const showcase = HOME_SLUGS
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter((p): p is Project => Boolean(p));

  return (
    <section id="projects" className="section fp">
      <div className="container">
        <div className="fp-head">
          <div>
            <div className="section-tag">Selected work</div>
            <h2 className="section-title">
              Real businesses, <span className="gradient-text">real results.</span>
            </h2>
          </div>
          <p className="fp-intro">
            Websites, apps and CRMs I&apos;ve built for caterers, real-estate firms, schools,
            traders and startups — each one designed to win customers, not just look good.
            <span className="fp-nda mono">{NDA_NOTE}</span>
          </p>
        </div>

        <div className="fp-grid">
          {showcase.map((p, i) => (
            <ProjectCard key={p.slug} project={p} span={SPANS[i] ?? 6} />
          ))}
        </div>

        <div className="fp-foot">
          <Link href="/projects" className="btn btn-primary">
            See all {projects.length} projects <FaArrowRight className="btn-arrow" />
          </Link>
          <a href="#contact" className="btn btn-outline">Start a similar project</a>
        </div>
      </div>

      <style>{PROJECT_CARD_CSS + `
        .fp { position: relative; }
        .fp-head {
          display: grid; grid-template-columns: 1.2fr 1fr; gap: 2rem; align-items: end;
          margin-bottom: 3rem;
        }
        .fp-head .section-title { margin-bottom: 0; }
        .fp-intro { font-size: 1.05rem; max-width: 460px; justify-self: end; }
        .fp-nda { display: block; margin-top: 0.8rem; font-size: 0.7rem; line-height: 1.6; color: var(--color-text-dim); }

        .fp-grid { display: grid; grid-template-columns: repeat(12, 1fr); gap: 1.25rem; }
        .fp-foot { display: flex; gap: 0.85rem; justify-content: center; flex-wrap: wrap; margin-top: 3rem; }

        @media (max-width: 900px) {
          .fp-head { grid-template-columns: 1fr; }
          .fp-intro { justify-self: start; }
          .fp-grid { grid-template-columns: 1fr; }
          .fp-card { grid-column: auto !important; }
        }
      `}</style>
    </section>
  );
}

/* Shared by the homepage showcase and the /projects listing. */
export const PROJECT_CARD_CSS = `
        .fp-card {
          display: flex; flex-direction: column;
          padding: 0; overflow: hidden; color: inherit;
        }
        .fp-media { position: relative; aspect-ratio: 16 / 10; overflow: hidden; }
        .fp-media-bg { position: absolute; inset: 0; opacity: 0.9; }
        .fp-media-bg::after {
          content: ""; position: absolute; inset: 0;
          background: radial-gradient(120% 80% at 50% 0%, transparent 30%, rgba(0,0,0,0.35));
        }
        .fp-shot {
          position: absolute; left: 8%; right: 8%; top: 12%; bottom: -6%;
          border-radius: 12px 12px 0 0; overflow: hidden;
          box-shadow: 0 30px 60px -20px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.15);
          transition: transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .fp-img {
          position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: top;
          transition: opacity 0.6s ease, transform 0.9s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .fp-img-b { opacity: 0; }
        .fp-card:hover .fp-shot { transform: translateY(-4%); }
        .fp-card:hover .fp-img { transform: scale(1.04); }
        .fp-card:hover .fp-img-b { opacity: 1; }
        .fp-arrow {
          position: absolute; top: 1rem; right: 1rem; z-index: 2;
          width: 40px; height: 40px; border-radius: 50%; display: grid; place-items: center;
          background: rgba(255,255,255,0.92); color: #0b0b10; font-size: 0.85rem;
          transform: scale(0.6) rotate(-45deg); opacity: 0;
          transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.3s;
        }
        .fp-card:hover .fp-arrow { transform: scale(1) rotate(-45deg); opacity: 1; }

        .fp-body { padding: 1.4rem 1.5rem 1.6rem; display: flex; flex-direction: column; gap: 0.9rem; flex: 1; }
        .fp-meta { display: flex; align-items: center; gap: 0.55rem; font-size: 0.7rem; letter-spacing: 0.08em; text-transform: uppercase; color: var(--color-text-dim); }
        .fp-meta-dot { width: 3px; height: 3px; border-radius: 50%; background: currentColor; }
        .fp-title { font-size: 1.3rem; font-weight: 600; letter-spacing: -0.025em; line-height: 1.3; color: var(--color-text); }
        .fp-tagline { font-size: 0.95rem; line-height: 1.55; color: var(--color-text-muted); margin-top: -0.4rem; }
        .fp-results { list-style: none; display: flex; flex-wrap: wrap; gap: 0.5rem; }
        .fp-results li {
          display: inline-flex; align-items: center; gap: 0.4rem;
          font-size: 0.8rem; font-weight: 500; color: var(--color-text);
          padding: 0.35rem 0.75rem; border-radius: 999px;
          background: rgba(34,197,94,0.1); border: 1px solid rgba(34,197,94,0.25);
        }
        .fp-up { color: #22c55e; font-size: 0.65rem; }
        .fp-tags { list-style: none; display: flex; flex-wrap: wrap; gap: 0.4rem; margin-top: auto; }
        .fp-tags li {
          font-family: var(--font-code), ui-monospace, monospace;
          font-size: 0.68rem; color: var(--color-text-dim);
          padding: 0.2rem 0.6rem; border-radius: 999px; border: 1px solid var(--color-border);
        }
`;
