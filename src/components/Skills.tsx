"use client";

import type { IconType } from "react-icons";
import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss,
  SiFlutter, SiDart, SiNodedotjs, SiLaravel, SiPhp,
  SiPython, SiFastapi, SiGraphql,
  SiMongodb, SiPostgresql, SiRedis, SiMysql, SiFirebase,
  SiDocker, SiVercel, SiGit, SiFigma,
  SiStripe, SiPrisma, SiSocketdotio, SiRazorpay, SiWebrtc, SiOpenai,
} from "react-icons/si";
import { FaAws, FaWhatsapp } from "react-icons/fa";

type Tech = { name: string; Icon: IconType; color: string };
type Group = { title: string; blurb: string; span: number; items: Tech[] };

/* Grouped by what the client gets, not by buzzword. Icons stay monochrome and
   pick up their brand colour on hover, so the palette stays calm. */
const GROUPS: Group[] = [
  {
    title: "Websites & web apps",
    blurb: "Fast, SEO-friendly front-ends that feel great on any device.",
    span: 2,
    items: [
      { name: "Next.js", Icon: SiNextdotjs, color: "#ffffff" },
      { name: "React", Icon: SiReact, color: "#61DAFB" },
      { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
      { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#38BDF8" },
      { name: "Figma", Icon: SiFigma, color: "#F24E1E" },
    ],
  },
  {
    title: "Mobile apps",
    blurb: "One codebase, native iOS & Android apps.",
    span: 1,
    items: [
      { name: "Flutter", Icon: SiFlutter, color: "#54C5F8" },
      { name: "Dart", Icon: SiDart, color: "#00B4AB" },
      { name: "Firebase", Icon: SiFirebase, color: "#FFCA28" },
    ],
  },
  {
    title: "Backends & APIs",
    blurb: "Secure, scalable server logic, admin panels and integrations.",
    span: 1,
    items: [
      { name: "Node.js", Icon: SiNodedotjs, color: "#68A063" },
      { name: "Laravel", Icon: SiLaravel, color: "#FF2D20" },
      { name: "PHP", Icon: SiPhp, color: "#7A86B8" },
      { name: "Python", Icon: SiPython, color: "#FFD43B" },
      { name: "FastAPI", Icon: SiFastapi, color: "#009688" },
      { name: "GraphQL", Icon: SiGraphql, color: "#E10098" },
    ],
  },
  {
    title: "Data & real-time",
    blurb: "Reliable databases, caching and live updates.",
    span: 2,
    items: [
      { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
      { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
      { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
      { name: "Redis", Icon: SiRedis, color: "#FF4438" },
      { name: "Prisma", Icon: SiPrisma, color: "#5A67D8" },
      { name: "Socket.io", Icon: SiSocketdotio, color: "#ffffff" },
    ],
  },
  {
    title: "Payments, AI & cloud",
    blurb: "Take payments, automate with AI and deploy with confidence.",
    span: 2,
    items: [
      { name: "Razorpay", Icon: SiRazorpay, color: "#3395FF" },
      { name: "Stripe", Icon: SiStripe, color: "#635BFF" },
      { name: "OpenAI", Icon: SiOpenai, color: "#ffffff" },
      { name: "WhatsApp API", Icon: FaWhatsapp, color: "#25D366" },
      { name: "WebRTC", Icon: SiWebrtc, color: "#F37C20" },
      { name: "AWS", Icon: FaAws, color: "#FF9900" },
      { name: "Vercel", Icon: SiVercel, color: "#ffffff" },
      { name: "Docker", Icon: SiDocker, color: "#2496ED" },
      { name: "Git", Icon: SiGit, color: "#F05032" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section sk">
      <div className="container">
        <div className="sk-head">
          <div className="section-tag">Tech stack</div>
          <h2 className="section-title">
            Modern tools, <span className="gradient-text">built to last.</span>
          </h2>
          <p className="section-subtitle">
            I pick proven technology that keeps your product fast, secure and easy to grow —
            so you never have to rebuild from scratch.
          </p>
        </div>

        <div className="sk-grid">
          {GROUPS.map((g) => (
            <div key={g.title} className="card sk-card" style={{ gridColumn: `span ${g.span}` }}>
              <h3 className="sk-title">{g.title}</h3>
              <p className="sk-blurb">{g.blurb}</p>
              <ul className="sk-list">
                {g.items.map(({ name, Icon, color }) => (
                  <li key={name} className="sk-item" style={{ ["--brand" as string]: color }}>
                    <Icon className="sk-icon" aria-hidden="true" />
                    <span>{name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .sk-head { text-align: center; margin-bottom: 3rem; }
        .sk-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.25rem; }
        .sk-card { display: flex; flex-direction: column; }
        .sk-title { font-size: 1.15rem; font-weight: 600; letter-spacing: -0.02em; color: var(--color-text); margin-bottom: 0.35rem; }
        .sk-blurb { font-size: 0.9rem; margin-bottom: 1.4rem; }
        .sk-list { list-style: none; display: flex; flex-wrap: wrap; gap: 0.5rem; }
        .sk-item {
          display: inline-flex; align-items: center; gap: 0.5rem;
          padding: 0.45rem 0.8rem; border-radius: 999px;
          font-size: 0.84rem; font-weight: 500; color: var(--color-text-muted);
          background: var(--color-bg-input); border: 1px solid var(--color-border);
          transition: color 0.25s, border-color 0.25s, background 0.25s;
        }
        .sk-icon { font-size: 1rem; color: var(--color-text-dim); transition: color 0.25s; }
        .sk-item:hover { color: var(--color-text); border-color: color-mix(in srgb, var(--brand) 45%, transparent); background: color-mix(in srgb, var(--brand) 10%, transparent); }
        .sk-item:hover .sk-icon { color: var(--brand); }
        [data-theme="light"] .sk-item[style*="#ffffff"]:hover .sk-icon { color: var(--color-text); }

        @media (max-width: 1024px) {
          .sk-grid { grid-template-columns: repeat(2, 1fr); }
          .sk-card { grid-column: span 1 !important; }
          .sk-card:first-child, .sk-card:nth-child(4), .sk-card:last-child { grid-column: span 2 !important; }
        }
        @media (max-width: 640px) {
          .sk-grid { grid-template-columns: 1fr; }
          .sk-card { grid-column: auto !important; }
        }
      `}</style>
    </section>
  );
}
