"use client";

import { FaBolt, FaSearch, FaRupeeSign, FaHeadset, FaMobileAlt } from "react-icons/fa";

const STEPS = [
  { n: "01", t: "Free discovery call", d: "We talk about your business, customers and goals — no jargon, no obligation." },
  { n: "02", t: "Clear plan & fixed quote", d: "You get the scope, timeline and one price in writing before any work starts." },
  { n: "03", t: "Design & build, with demos", d: "You see progress every week and give feedback while it's easy to change." },
  { n: "04", t: "Launch & grow", d: "I deploy, set up SEO and analytics, and stay on to support what comes next." },
];

const PERKS = [
  { icon: <FaBolt />, t: "Fast by default", d: "Pages that load in about a second — because slow sites lose customers." },
  { icon: <FaSearch />, t: "Built to be found", d: "Clean structure, metadata and schema so Google understands your business." },
  { icon: <FaMobileAlt />, t: "Mobile-first", d: "Designed for the phone your customer is actually holding." },
  { icon: <FaRupeeSign />, t: "Honest pricing", d: "Fixed quotes, no surprise invoices, and you own all the code." },
];

export default function WhyWorkWithMe() {
  return (
    <section id="why" className="section wy">
      <div className="container">
        <div className="wy-head">
          <div className="section-tag">How I work</div>
          <h2 className="section-title">
            One developer. <span className="gradient-text">Zero hassle.</span>
          </h2>
          <p className="section-subtitle">
            You talk directly to the person building your product — so decisions are quick,
            nothing gets lost in translation, and you always know where things stand.
          </p>
        </div>

        <div className="wy-grid">
          {/* Process — the big tile */}
          <div className="card wy-process">
            <div className="wy-process-head">
              <span className="mono wy-kicker">The process</span>
              <h3>From first call to launch in four clear steps</h3>
            </div>
            <ol className="wy-steps">
              {STEPS.map((s) => (
                <li key={s.n} className="wy-step">
                  <span className="wy-step-n serif">{s.n}</span>
                  <div>
                    <div className="wy-step-t">{s.t}</div>
                    <p className="wy-step-d">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {PERKS.map((p) => (
            <div key={p.t} className="card wy-perk">
              <span className="wy-icon">{p.icon}</span>
              <h3>{p.t}</h3>
              <p>{p.d}</p>
            </div>
          ))}

          {/* Support — wide tile with CTA */}
          <div className="card wy-support">
            <span className="wy-icon"><FaHeadset /></span>
            <div className="wy-support-copy">
              <h3>I don&apos;t disappear after launch.</h3>
              <p>Updates, fixes and new features whenever you need them — the same developer who built it.</p>
            </div>
            <a href="#contact" className="btn btn-primary">Book a free call</a>
          </div>
        </div>
      </div>

      <style>{`
        .wy-head { text-align: center; margin-bottom: 3rem; }
        .wy-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-auto-rows: minmax(180px, auto);
          gap: 1.25rem;
        }
        .wy-grid h3 { font-size: 1.1rem; font-weight: 600; letter-spacing: -0.02em; color: var(--color-text); margin-bottom: 0.45rem; }
        .wy-grid p { font-size: 0.92rem; line-height: 1.65; }

        .wy-process {
          grid-column: span 2; grid-row: span 2;
          position: relative; overflow: hidden;
          display: flex; flex-direction: column; gap: 1.75rem;
        }
        .wy-process::before {
          content: ""; position: absolute; width: 380px; height: 380px; right: -140px; top: -160px;
          border-radius: 50%; background: var(--aurora-1); filter: blur(60px); pointer-events: none; opacity: 1;
        }
        .wy-kicker { font-size: 0.7rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--color-text-dim); }
        .wy-process-head h3 { font-size: 1.6rem; line-height: 1.2; margin-top: 0.5rem; max-width: 380px; }
        .wy-steps { list-style: none; display: flex; flex-direction: column; gap: 0.25rem; position: relative; }
        .wy-step {
          display: grid; grid-template-columns: 56px 1fr; gap: 0.75rem; align-items: start;
          padding: 1rem 0; border-top: 1px solid var(--color-border);
        }
        .wy-step-n { font-size: 2rem; line-height: 1; background: var(--gradient-primary); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; }
        .wy-step-t { font-weight: 600; color: var(--color-text); margin-bottom: 0.2rem; }
        .wy-step-d { margin: 0; }

        .wy-icon {
          width: 44px; height: 44px; border-radius: 12px; display: grid; place-items: center;
          color: var(--color-text); font-size: 1.05rem; margin-bottom: 1.1rem;
          background: var(--color-bg-input); border: 1px solid var(--color-border);
          box-shadow: 0 8px 24px -10px var(--color-primary);
        }
        .wy-support {
          grid-column: span 4;
          display: flex; align-items: center; gap: 1.5rem; flex-wrap: wrap;
          background: linear-gradient(110deg, var(--color-bg-card), var(--color-bg-card)) padding-box,
                      var(--gradient-primary) border-box;
          border: 1px solid transparent;
        }
        .wy-support .wy-icon { margin-bottom: 0; }
        .wy-support-copy { flex: 1; min-width: 240px; }
        .wy-support-copy h3 { font-size: 1.35rem; }

        @media (max-width: 1024px) {
          .wy-grid { grid-template-columns: repeat(2, 1fr); }
          .wy-support { grid-column: span 2; }
        }
        @media (max-width: 640px) {
          .wy-grid { grid-template-columns: 1fr; }
          .wy-process, .wy-support { grid-column: auto; grid-row: auto; }
        }
      `}</style>
    </section>
  );
}
