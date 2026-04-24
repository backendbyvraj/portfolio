"use client";

import { SITE_URL, AUTHOR_EMAIL, WHATSAPP_NUM, GITHUB_URL, LINKEDIN_URL } from "@/lib/seoConfig";

const PHONE   = "+91 97260 53886";
const EMAIL   = "pandyavraj234@gmail.com";
const GITHUB  = "github.com/pandyavraj234";
const LINKEDIN = "linkedin.com/in/pandya-vraj-b800b819b";

// ── Skills ─────────────────────────────────────────────────────────────────
const skills = [
  { category: "Frontend",    items: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 / CSS3"] },
  { category: "Backend",     items: ["Node.js", "Express.js", "Laravel / PHP", "Python", "FastAPI", "REST API", "GraphQL"] },
  { category: "Mobile",      items: ["Flutter", "Dart", "React Native (basics)"] },
  { category: "Databases",   items: ["MongoDB", "PostgreSQL", "MySQL", "Redis"] },
  { category: "DevOps/Cloud",items: ["Docker", "AWS (EC2 / S3 / CloudFront)", "Vercel", "CI/CD Pipelines", "Git / GitHub"] },
  { category: "Other",       items: ["WebRTC", "Socket.io", "PWA", "Puppeteer", "Prisma ORM", "Figma", "Razorpay / Stripe / HDFC", "OpenAI API", "Firebase"] },
];

// ── Projects for resume ─────────────────────────────────────────────────────
const resumeProjects = [
  {
    title: "Insight – AI Content Platform",
    role: "Full Stack Developer",
    year: "2024",
    tech: "Next.js · Node.js · OpenAI API · MongoDB · Redis · TypeScript",
    bullets: [
      "Built production-grade AI content platform using OpenAI API for auto-generating SEO-optimized blogs and reports.",
      "Implemented real-time AI streaming with React Suspense, reducing content creation time by 80%.",
      "Delivered multi-role admin system (Super Admin / Editor / Viewer) with analytics dashboard and Cloudinary-based image optimization.",
      "Client's organic traffic grew 3× within 3 months of launch.",
    ],
  },
  {
    title: "EduSphere – School Management SaaS",
    role: "Full Stack Developer & System Architect",
    year: "2023",
    tech: "React · Node.js · MongoDB · TypeScript · Redis · Socket.io · Razorpay",
    bullets: [
      "Architected multi-tenant SaaS for 15+ schools managing 5,000+ active students with complete data isolation.",
      "Built three-tier role hierarchy (Global Admin → School Admin → Teacher/Parent) using policy-based access control.",
      "Developed auto-graded MCQ exam engine with gamified leaderboards; reduced result processing from 2 days to real-time.",
      "Integrated Razorpay for fee management with multi-installment plans and automated payment reminders.",
    ],
  },
  {
    title: "MediGlobal – Worldwide Telemedicine Platform",
    role: "Full Stack Developer & System Architect",
    year: "2024",
    tech: "React · Node.js · WebRTC · Socket.io · PostgreSQL · Stripe · AWS · Redis",
    bullets: [
      "Built global telemedicine platform connecting 200+ doctors across 18 countries with 1,500+ consultations completed.",
      "Implemented end-to-end encrypted video consultations using WebRTC with custom signaling server (no 3rd-party dependency).",
      "Engineered timezone-aware slot booking engine handling DST changes and multi-currency doctor payouts.",
      "Live webinar module supports 500 concurrent viewers; became the platform's highest-revenue feature.",
    ],
  },
  {
    title: "RoadRescue – Real-Time Towing App",
    role: "Full Stack Developer (Flutter + Laravel)",
    year: "2024",
    tech: "Flutter · Laravel · Google Maps API · WebSocket · Firebase · MySQL",
    bullets: [
      "Built Uber-like on-demand towing app (Flutter) deployed with 50+ registered towing companies.",
      "Implemented geospatial driver-matching using MySQL spatial indexes with sub-second broadcast; avg. response time under 3 min.",
      "Handled edge cases: auto-reassignment on driver cancellation, WebSocket reconnection with missed event replay.",
      "Achieved 60% improvement in job dispatch efficiency vs. previous phone-based system.",
    ],
  },
  {
    title: "DiamondCRM – Diamond & Textile Trader CRM",
    role: "Full Stack Developer & Business Analyst",
    year: "2024",
    tech: "React · Node.js · PostgreSQL · TypeScript · Puppeteer · Chart.js",
    bullets: [
      "Designed custom CRM replacing paper ledgers for Surat diamond and textile trading firms.",
      "Built GST-compliant invoicing, double-entry bookkeeping, and aging reports identifying ₹12L in recovered dues within 2 months.",
      "Integrated stock management with diamond 4C specifications and textile roll tracking with visual sample images.",
      "Migrated 5 years of historical trade data; team of 8 now operates completely paperlessly.",
    ],
  },
  {
    title: "AlgoTrade – Python Algorithmic Trading Bot",
    role: "Full Stack Developer (Python + React)",
    year: "2024",
    tech: "Python · FastAPI · AngelOne SmartAPI · asyncio · Pandas · React · PostgreSQL",
    bullets: [
      "Built fully automated stock trading bot integrated with AngelOne SmartAPI for live NSE/BSE order execution.",
      "Solved Python GIL bottleneck using asyncio for tick data ingestion + multiprocessing for strategy execution (latency <50ms).",
      "Implemented risk controls: daily loss limits, auto square-off at 3:20 PM, and capital-based position sizing.",
      "Users reported 15–20% improvement in trade execution precision over manual trading.",
    ],
  },
  {
    title: "Payment Gateway Integration Suite",
    role: "Backend Developer",
    year: "2023–2024",
    tech: "Node.js · Razorpay · Apple Pay · HDFC API · Amex · PostgreSQL",
    bullets: [
      "Integrated 5 payment gateways (Razorpay, Apple Pay, Amex, HDFC, Fasthub) across multiple client projects.",
      "Built gateway adapter pattern normalizing all events into a unified transaction object regardless of gateway used.",
      "Achieved 99.99% webhook reliability with idempotent processing; combined volume exceeds ₹2Cr/month.",
    ],
  },
  {
    title: "SportHub – Sports Club Management Platform",
    role: "Full Stack Developer & Product Designer",
    year: "2024",
    tech: "React · Node.js · MongoDB · Socket.io · Razorpay · Casbin · AWS S3",
    bullets: [
      "Built all-in-one platform for 8 sports clubs managing 1,200+ student registrations.",
      "Implemented drag-and-drop website builder enabling non-technical admins to create club websites in under 20 minutes.",
      "Designed policy-based permission system (Casbin) for club → center → coach → parent hierarchy.",
    ],
  },
];

export default function ResumePage() {
  const handlePrint = () => window.print();

  return (
    <>
      <style>{`
        /* ── Screen styles ──────────────────────────────────────── */
        body { background: #f1f5f9; }

        .resume-wrap {
          max-width: 900px;
          margin: 0 auto;
          padding: 2rem;
          font-family: 'Arial', 'Helvetica', sans-serif;
          color: #1e293b;
        }

        .resume-sheet {
          background: #ffffff;
          padding: 52px 56px;
          box-shadow: 0 4px 40px rgba(0,0,0,0.12);
          border-radius: 4px;
          position: relative;
        }

        /* Print button bar */
        .print-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.5rem;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .print-btn {
          background: linear-gradient(135deg, #8b5cf6, #06b6d4);
          color: #fff;
          border: none;
          border-radius: 8px;
          padding: 0.7rem 1.8rem;
          font-size: 0.95rem;
          font-weight: 700;
          cursor: pointer;
          letter-spacing: 0.02em;
          transition: opacity 0.2s;
        }
        .print-btn:hover { opacity: 0.88; }
        .tip {
          font-size: 0.82rem;
          color: #64748b;
          max-width: 460px;
          line-height: 1.6;
        }

        /* ── Resume content styles ──────────────────────────────── */

        /* Header */
        .r-header { border-bottom: 2.5px solid #8b5cf6; padding-bottom: 18px; margin-bottom: 22px; }
        .r-name   { font-size: 32px; font-weight: 900; color: #0f172a; letter-spacing: -0.5px; margin: 0 0 4px; line-height: 1; }
        .r-title  { font-size: 15px; font-weight: 700; color: #8b5cf6; text-transform: uppercase; letter-spacing: 0.12em; margin: 0 0 14px; }
        .r-contact {
          display: flex; flex-wrap: wrap; gap: 0 28px;
          font-size: 12.5px; color: #475569;
        }
        .r-contact a { color: #475569; text-decoration: none; }
        .r-contact a:hover { color: #8b5cf6; }
        .r-contact span::before { content: "● "; color: #8b5cf6; font-size: 9px; vertical-align: 1px; }

        /* Section header */
        .r-section { margin-bottom: 22px; }
        .r-section-title {
          font-size: 10.5px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.16em;
          color: #8b5cf6;
          border-bottom: 1.5px solid #e2d9fb;
          padding-bottom: 5px;
          margin-bottom: 14px;
        }

        /* Summary */
        .r-summary { font-size: 13px; color: #334155; line-height: 1.8; }

        /* Skills grid */
        .skills-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px 32px; }
        .skill-row { font-size: 12.5px; color: #334155; line-height: 1.6; }
        .skill-cat { font-weight: 800; color: #0f172a; display: inline; }

        /* Project block */
        .proj-block { margin-bottom: 18px; page-break-inside: avoid; }
        .proj-header { display: flex; justify-content: space-between; align-items: baseline; flex-wrap: wrap; gap: 4px; margin-bottom: 3px; }
        .proj-title  { font-size: 14px; font-weight: 800; color: #0f172a; }
        .proj-year   { font-size: 12px; color: #94a3b8; font-weight: 600; white-space: nowrap; }
        .proj-role   { font-size: 12px; font-weight: 700; color: #8b5cf6; margin-bottom: 3px; }
        .proj-tech   { font-size: 11.5px; color: #64748b; margin-bottom: 5px; font-style: italic; }
        .proj-bullets { margin: 0; padding-left: 16px; }
        .proj-bullets li { font-size: 12.5px; color: #334155; line-height: 1.65; margin-bottom: 2px; }
        .proj-bullets li::marker { color: #8b5cf6; }

        /* Two column layout for lower sections */
        .two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 0 40px; }

        /* Edu / cert block */
        .edu-block { margin-bottom: 12px; }
        .edu-title  { font-size: 13.5px; font-weight: 800; color: #0f172a; }
        .edu-sub    { font-size: 12.5px; color: #475569; }
        .edu-year   { font-size: 12px; color: #94a3b8; }

        /* Achievements */
        .ach-list { margin: 0; padding-left: 16px; }
        .ach-list li { font-size: 12.5px; color: #334155; line-height: 1.7; }
        .ach-list li::marker { color: #8b5cf6; }

        /* ── Print overrides ──────────────────────────────────── */
        @media print {
          @page {
            size: A4;
            margin: 14mm 16mm;
          }
          html, body { background: #fff !important; }
          .print-bar { display: none !important; }
          .resume-wrap { padding: 0 !important; max-width: 100% !important; }
          .resume-sheet {
            box-shadow: none !important;
            border-radius: 0 !important;
            padding: 0 !important;
          }
          .proj-block { page-break-inside: avoid; }
          .r-section  { page-break-inside: avoid; }
          a { color: inherit !important; text-decoration: none !important; }
        }

        @media (max-width: 640px) {
          .resume-sheet { padding: 28px 20px; }
          .skills-grid  { grid-template-columns: 1fr; }
          .two-col      { grid-template-columns: 1fr; }
          .proj-header  { flex-direction: column; }
        }
      `}</style>

      <div className="resume-wrap">

        {/* Print bar — hidden on print */}
        <div className="print-bar">
          <button className="print-btn" onClick={handlePrint}>
            ↓ Download / Print as PDF
          </button>
          <p className="tip">
            Click the button above → in the print dialog select <strong>"Save as PDF"</strong>
            → set Paper size to <strong>A4</strong>, Margins to <strong>None/Minimum</strong>.
          </p>
        </div>

        <div className="resume-sheet">

          {/* ── HEADER ── */}
          <header className="r-header">
            <h1 className="r-name">Vraj Pandya</h1>
            <p className="r-title">Full Stack Developer &amp; Founder — Vraj Dev Studio</p>
            <div className="r-contact">
              <span><a href={`mailto:${EMAIL}`}>{EMAIL}</a></span>
              <span><a href={`https://wa.me/91${PHONE.replace(/\D/g,"")}`}>{PHONE}</a></span>
              <span>Surat, Gujarat, India</span>
              <span><a href={`https://${GITHUB}`} target="_blank" rel="noopener noreferrer">{GITHUB}</a></span>
              <span><a href={`https://${LINKEDIN}`} target="_blank" rel="noopener noreferrer">{LINKEDIN}</a></span>
              <span><a href={SITE_URL} target="_blank" rel="noopener noreferrer">vrajpandya.vercel.app</a></span>
            </div>
          </header>

          {/* ── PROFESSIONAL SUMMARY ── */}
          <section className="r-section">
            <h2 className="r-section-title">Professional Summary</h2>
            <p className="r-summary">
              Results-driven Full Stack Developer and Founder of Vraj Dev Studio with 4+ years of hands-on experience
              delivering production-grade web applications, mobile apps, SaaS platforms, and CRM/ERP systems for
              clients across India and worldwide. Proven track record building end-to-end products — from AI-powered
              content platforms to real-time telemedicine solutions to algorithmic trading bots — using modern tech
              stacks including React, Next.js, Node.js, Flutter, and Python. Adept at architecting multi-tenant
              systems, integrating payment gateways (Razorpay, Stripe, HDFC), and delivering measurable business
              outcomes: 3× traffic growth, ₹12L dues recovery, 5,000+ active SaaS users. Available for freelance
              projects, remote roles, and long-term collaborations worldwide.
            </p>
          </section>

          {/* ── TECHNICAL SKILLS ── */}
          <section className="r-section">
            <h2 className="r-section-title">Technical Skills</h2>
            <div className="skills-grid">
              {skills.map((s) => (
                <div className="skill-row" key={s.category}>
                  <span className="skill-cat">{s.category}:</span>{" "}
                  {s.items.join(" · ")}
                </div>
              ))}
            </div>
          </section>

          {/* ── KEY PROJECTS / EXPERIENCE ── */}
          <section className="r-section">
            <h2 className="r-section-title">Key Projects &amp; Client Work</h2>
            {resumeProjects.map((p) => (
              <div className="proj-block" key={p.title}>
                <div className="proj-header">
                  <span className="proj-title">{p.title}</span>
                  <span className="proj-year">{p.year}</span>
                </div>
                <div className="proj-role">{p.role}</div>
                <div className="proj-tech">{p.tech}</div>
                <ul className="proj-bullets">
                  {p.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              </div>
            ))}
          </section>

          {/* ── EDUCATION + KEY ACHIEVEMENTS ── */}
          <div className="two-col">

            {/* Education */}
            <section className="r-section">
              <h2 className="r-section-title">Education</h2>
              <div className="edu-block">
                <div className="edu-title">Bachelor of Computer Applications (BCA)</div>
                <div className="edu-sub">University, Surat, Gujarat</div>
                <div className="edu-year">2020 – 2023</div>
              </div>
              <div className="edu-block">
                <div className="edu-title">Higher Secondary (Science / IT)</div>
                <div className="edu-sub">Gujarat Board, Surat</div>
                <div className="edu-year">2018 – 2020</div>
              </div>
            </section>

            {/* Key Achievements */}
            <section className="r-section">
              <h2 className="r-section-title">Key Achievements</h2>
              <ul className="ach-list">
                <li>Delivered 13+ production projects across Web, Mobile, CRM, SaaS &amp; Fintech domains</li>
                <li>3× organic traffic growth for AI content platform within 3 months</li>
                <li>₹12L outstanding dues recovered via CRM aging report visibility</li>
                <li>5,000+ active students on multi-tenant SaaS (EduSphere)</li>
                <li>1,500+ telemedicine consultations on global platform (MediGlobal)</li>
                <li>₹2Cr+/month payment volume across integrated gateway projects</li>
                <li>Google Page 1 rankings for 40+ local SEO keywords (PropVista)</li>
                <li>Ranked on Google for "wholesale saree fabric Surat" in 2 months</li>
              </ul>
            </section>
          </div>

          {/* ── LANGUAGES + OPEN TO ── */}
          <div className="two-col" style={{ borderTop: "1.5px solid #f1f5f9", paddingTop: "16px" }}>
            <section className="r-section" style={{ marginBottom: 0 }}>
              <h2 className="r-section-title">Languages</h2>
              <div className="skill-row">
                <span className="skill-cat">English:</span> Professional Working Proficiency
              </div>
              <div className="skill-row">
                <span className="skill-cat">Hindi:</span> Native / Full Professional
              </div>
              <div className="skill-row">
                <span className="skill-cat">Gujarati:</span> Native
              </div>
            </section>
            <section className="r-section" style={{ marginBottom: 0 }}>
              <h2 className="r-section-title">Open To</h2>
              <ul className="ach-list">
                <li>Freelance &amp; contract projects (worldwide, remote)</li>
                <li>Full-time or part-time remote roles</li>
                <li>Long-term product partnerships</li>
                <li>On-site projects — Surat / Gujarat</li>
              </ul>
            </section>
          </div>

        </div>{/* end .resume-sheet */}
      </div>
    </>
  );
}
