"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss,
  SiFlutter, SiDart, SiNodedotjs, SiLaravel, SiPhp,
  SiPython, SiFastapi, SiGraphql,
  SiMongodb, SiPostgresql, SiRedis,
  SiDocker, SiVercel, SiGit, SiFigma,
  SiStripe, SiPrisma, SiSocketdotio, SiRazorpay, SiWebrtc,
} from "react-icons/si";
import { FaServer, FaCode } from "react-icons/fa";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const categories = ["All", "Frontend", "Backend", "Mobile", "Database", "DevOps"];

const skillsData = [
  { name: "React / Next.js",    level: 95, category: "Frontend", color: "#61DAFB", Icon: SiReact },
  { name: "TypeScript",         level: 90, category: "Frontend", color: "#3178C6", Icon: SiTypescript },
  { name: "Tailwind CSS",       level: 95, category: "Frontend", color: "#38BDF8", Icon: SiTailwindcss },
  { name: "Flutter",            level: 85, category: "Mobile",   color: "#54C5F8", Icon: SiFlutter },
  { name: "Dart",               level: 82, category: "Mobile",   color: "#00B4AB", Icon: SiDart },
  { name: "Node.js / Express",  level: 88, category: "Backend",  color: "#68A063", Icon: SiNodedotjs },
  { name: "Laravel / PHP",      level: 83, category: "Backend",  color: "#FF2D20", Icon: SiLaravel },
  { name: "Python / FastAPI",   level: 80, category: "Backend",  color: "#FFD43B", Icon: SiPython },
  { name: "REST API / GraphQL", level: 88, category: "Backend",  color: "#E10098", Icon: SiGraphql },
  { name: "MongoDB",            level: 87, category: "Database", color: "#47A248", Icon: SiMongodb },
  { name: "PostgreSQL",         level: 83, category: "Database", color: "#336791", Icon: SiPostgresql },
  { name: "Redis",              level: 75, category: "Database", color: "#FF615A", Icon: SiRedis },
  { name: "Docker / CI/CD",     level: 72, category: "DevOps",   color: "#2496ED", Icon: SiDocker },
  { name: "AWS / Vercel",       level: 70, category: "DevOps",   color: "#FF9900", Icon: FaServer },
];

const techTags = [
  { name: "React",       color: "#61DAFB", Icon: SiReact },
  { name: "Next.js",     color: "#a78bfa", Icon: SiNextdotjs },
  { name: "TypeScript",  color: "#3178C6", Icon: SiTypescript },
  { name: "Flutter",     color: "#54C5F8", Icon: SiFlutter },
  { name: "Node.js",     color: "#68A063", Icon: SiNodedotjs },
  { name: "Laravel",     color: "#FF2D20", Icon: SiLaravel },
  { name: "PHP",         color: "#7E7EB8", Icon: SiPhp },
  { name: "Python",      color: "#FFD43B", Icon: SiPython },
  { name: "FastAPI",     color: "#009688", Icon: SiFastapi },
  { name: "MongoDB",     color: "#47A248", Icon: SiMongodb },
  { name: "PostgreSQL",  color: "#336791", Icon: SiPostgresql },
  { name: "Redis",       color: "#FF615A", Icon: SiRedis },
  { name: "Docker",      color: "#2496ED", Icon: SiDocker },
  { name: "Tailwind",    color: "#38BDF8", Icon: SiTailwindcss },
  { name: "Razorpay",    color: "#528FF0", Icon: SiRazorpay },
  { name: "WebRTC",      color: "#F37C20", Icon: SiWebrtc },
  { name: "Socket.io",   color: "#a78bfa", Icon: SiSocketdotio },
  { name: "Prisma",      color: "#5A67D8", Icon: SiPrisma },
  { name: "GraphQL",     color: "#E10098", Icon: SiGraphql },
  { name: "AWS",         color: "#FF9900", Icon: FaServer },
  { name: "Git",         color: "#F05028", Icon: SiGit },
  { name: "Figma",       color: "#F24E1E", Icon: SiFigma },
  { name: "Vercel",      color: "#a78bfa", Icon: SiVercel },
  { name: "SmartAPI",    color: "#00b4ab", Icon: FaCode },
  { name: "Stripe",      color: "#635BFF", Icon: SiStripe },
  { name: "Dart",        color: "#00B4AB", Icon: SiDart },
];

const stats = [
  { value: 3,   suffix: "+", label: "Years Exp"   },
  { value: 15,  suffix: "+", label: "Projects"    },
  { value: 7,   suffix: "",  label: "Industries"  },
  { value: 100, suffix: "%", label: "Commitment"  },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref  = useRef<HTMLSpanElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const runCounter = () => {
      tweenRef.current?.kill();
      const obj = { n: 0 };
      el.textContent = `0${suffix}`;
      tweenRef.current = gsap.to(obj, {
        n: value, duration: 1.8, ease: "power2.out",
        onUpdate: () => { el.textContent = `${Math.round(obj.n)}${suffix}`; },
      });
    };
    const t = ScrollTrigger.create({
      trigger: el, start: "top 95%",
      onEnter:     () => runCounter(),
      onEnterBack: () => runCounter(),
      onLeaveBack: () => {
        tweenRef.current?.kill();
        el.textContent = `0${suffix}`;
      },
    });
    return () => { t.kill(); tweenRef.current?.kill(); };
  }, [value, suffix]);
  return <span ref={ref}>0{suffix}</span>;
}

function Bar({ level, color }: { level: number; color: string }) {
  const fillRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = fillRef.current;
    if (!el) return;
    const runBar = () => {
      gsap.fromTo(el,
        { width: "0%" },
        { width: `${level}%`, duration: 1.2, ease: "power3.out" }
      );
    };
    const t = ScrollTrigger.create({
      trigger: el, start: "top 95%",
      onEnter:     () => runBar(),
      onEnterBack: () => runBar(),
      onLeaveBack: () => { gsap.set(el, { width: "0%" }); },
    });
    return () => t.kill();
  }, [level]);
  return (
    <div style={{ height: "6px", background: "rgba(255,255,255,0.06)", borderRadius: "99px", overflow: "hidden" }}>
      <div ref={fillRef} style={{
        height: "100%", width: "0%", borderRadius: "99px",
        background: `linear-gradient(90deg, ${color}bb, ${color})`,
        boxShadow: `0 0 8px ${color}66`,
      }} />
    </div>
  );
}

export default function Skills() {
  const [active, setActive] = useState("All");
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef   = useRef<HTMLDivElement>(null);

  const filtered = active === "All" ? skillsData : skillsData.filter((s) => s.category === active);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".sk-header > *", {
        immediateRender: false,
        y: 50, opacity: 0, duration: 0.85, stagger: 0.13, ease: "power3.out",
        scrollTrigger: { trigger: ".sk-header", start: "top 88%", toggleActions: "play none none reset" },
      });
      gsap.from(".sk-stat", {
        immediateRender: false,
        y: 30, opacity: 0, scale: 0.8, duration: 0.6, stagger: 0.1, ease: "back.out(1.7)",
        scrollTrigger: { trigger: ".sk-stats", start: "top 90%", toggleActions: "play none none reset" },
      });
      gsap.from(".sk-tab", {
        immediateRender: false,
        y: 18, opacity: 0, duration: 0.5, stagger: 0.06, ease: "power2.out",
        scrollTrigger: { trigger: ".sk-tabs", start: "top 92%", toggleActions: "play none none reset" },
      });
      gsap.from(".sk-tag", {
        immediateRender: false,
        scale: 0, opacity: 0, duration: 0.35, stagger: 0.025, ease: "back.out(2)",
        scrollTrigger: { trigger: ".sk-tags", start: "top 92%", toggleActions: "play none none reset" },
      });
      gsap.to(".sk-orb1", { x: 30,  y: -20, duration: 6, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to(".sk-orb2", { x: -25, y: 25,  duration: 7, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 1 });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!cardsRef.current) return;
    const cards = cardsRef.current.querySelectorAll(".sk-card");
    gsap.fromTo(cards,
      { y: 22, opacity: 0, scale: 0.96 },
      { y: 0, opacity: 1, scale: 1, duration: 0.42, stagger: 0.055, ease: "power2.out" }
    );
  }, [active]);

  return (
    <section id="skills" ref={sectionRef} style={{ position: "relative", overflow: "hidden", padding: "6rem 0 7rem" }}>
      <div style={{ position: "absolute", inset: 0, background: "var(--color-bg)", zIndex: 0 }} />
      <div className="sk-orb1" style={{
        position: "absolute", top: "8%", right: "4%", width: "420px", height: "420px",
        borderRadius: "50%", background: "radial-gradient(circle, rgba(139,92,246,0.13) 0%, transparent 70%)",
        pointerEvents: "none", zIndex: 0,
      }} />
      <div className="sk-orb2" style={{
        position: "absolute", bottom: "8%", left: "0%", width: "360px", height: "360px",
        borderRadius: "50%", background: "radial-gradient(circle, rgba(20,184,166,0.11) 0%, transparent 70%)",
        pointerEvents: "none", zIndex: 0,
      }} />
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "radial-gradient(rgba(139,92,246,0.05) 1px, transparent 1px)",
        backgroundSize: "32px 32px", pointerEvents: "none", zIndex: 0,
      }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>

        {/* Header */}
        <div className="sk-header" style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            background: "rgba(139,92,246,0.1)", border: "1px solid rgba(139,92,246,0.25)",
            borderRadius: "50px", padding: "0.35rem 1rem",
            fontSize: "0.8rem", fontWeight: 700, color: "var(--color-primary-light)",
            letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "1rem",
          }}>
            &#9881; Development Skills
          </div>
          <h2 className="section-title">
            Skills &amp; <span className="gradient-text">Technologies</span>
          </h2>
          <div className="divider" />
          <p className="section-subtitle" style={{ marginTop: "1rem", maxWidth: "560px", margin: "1rem auto 0" }}>
            A curated set of tools and technologies I use to build modern full-stack applications from web to mobile to trading bots.
          </p>
        </div>

        {/* Stats */}
        <div className="sk-stats" style={{
          display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
          gap: "1rem", marginBottom: "3.5rem",
        }}>
          {stats.map((s) => (
            <div key={s.label} className="sk-stat" style={{
              background: "rgba(139,92,246,0.06)", border: "1px solid rgba(139,92,246,0.15)",
              borderRadius: "var(--radius)", padding: "1.5rem 1rem", textAlign: "center",
            }}>
              <div style={{
                fontSize: "2rem", fontWeight: 900, lineHeight: 1,
                background: "linear-gradient(135deg, var(--color-primary-light), var(--color-secondary))",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div style={{ fontSize: "0.8rem", color: "var(--color-text-muted)", marginTop: "0.4rem", fontWeight: 600 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Category tabs */}
        <div className="sk-tabs" style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", justifyContent: "center", marginBottom: "2.5rem" }}>
          {categories.map((cat) => {
            const count = cat === "All" ? skillsData.length : skillsData.filter((s) => s.category === cat).length;
            return (
              <button key={cat} className="sk-tab" onClick={() => setActive(cat)} style={{
                padding: "0.45rem 1.2rem", borderRadius: "50px",
                fontSize: "0.85rem", fontWeight: 600, cursor: "pointer", transition: "all 0.25s",
                border: active === cat ? "1px solid var(--color-primary)" : "1px solid rgba(255,255,255,0.1)",
                background: active === cat
                  ? "linear-gradient(135deg, var(--color-primary), var(--color-secondary))"
                  : "rgba(255,255,255,0.04)",
                color: active === cat ? "#fff" : "var(--color-text-muted)",
              }}>
                {cat} <span style={{ opacity: 0.7, fontSize: "0.75rem" }}>({count})</span>
              </button>
            );
          })}
        </div>

        {/* Skill cards with icons */}
        <div ref={cardsRef} style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(275px, 1fr))",
          gap: "1rem", marginBottom: "4rem",
        }}>
          {filtered.map((skill) => {
            const Icon = skill.Icon;
            return (
              <div key={skill.name} className="sk-card" style={{
                background: "rgba(255,255,255,0.03)", borderRadius: "var(--radius)",
                border: "1px solid rgba(255,255,255,0.08)",
                padding: "1.25rem 1.5rem", position: "relative", overflow: "hidden",
                transition: "all 0.28s",
              }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = `${skill.color}55`;
                  el.style.background = `${skill.color}09`;
                  el.style.transform = "translateY(-4px)";
                  el.style.boxShadow = `0 14px 36px ${skill.color}22`;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(255,255,255,0.08)";
                  el.style.background = "rgba(255,255,255,0.03)";
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "none";
                }}
              >
                <div style={{
                  position: "absolute", left: 0, top: "20%", bottom: "20%",
                  width: "3px", borderRadius: "0 3px 3px 0",
                  background: skill.color, boxShadow: `0 0 12px ${skill.color}88`,
                }} />
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.9rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.7rem" }}>
                    <div style={{
                      width: "36px", height: "36px", borderRadius: "8px", flexShrink: 0,
                      background: `${skill.color}15`, border: `1px solid ${skill.color}30`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "1.1rem", color: skill.color,
                    }}>
                      <Icon />
                    </div>
                    <div>
                      <div style={{ fontSize: "0.88rem", fontWeight: 700, color: "var(--color-text)" }}>{skill.name}</div>
                      <div style={{ fontSize: "0.7rem", color: "var(--color-text-muted)", marginTop: "0.05rem" }}>{skill.category}</div>
                    </div>
                  </div>
                  <div style={{ fontSize: "1rem", fontWeight: 900, color: skill.color }}>{skill.level}%</div>
                </div>
                <Bar level={skill.level} color={skill.color} />
              </div>
            );
          })}
        </div>

        {/* Tech icons cloud */}
        <div style={{
          background: "rgba(139,92,246,0.05)", border: "1px solid rgba(139,92,246,0.12)",
          borderRadius: "var(--radius-lg)", padding: "2rem",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem" }}>
            <div style={{
              width: "8px", height: "8px", borderRadius: "50%",
              background: "var(--color-secondary)", boxShadow: "0 0 10px var(--color-secondary)",
            }} />
            <span style={{ fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--color-text-muted)" }}>
              Full Tech Stack
            </span>
          </div>
          <div className="sk-tags" style={{ display: "flex", flexWrap: "wrap", gap: "0.65rem" }}>
            {techTags.map((t) => {
              const Icon = t.Icon;
              return (
                <span key={t.name} className="sk-tag" style={{
                  display: "inline-flex", alignItems: "center", gap: "0.4rem",
                  padding: "0.35rem 0.9rem", borderRadius: "50px",
                  fontSize: "0.82rem", fontWeight: 600,
                  background: `${t.color}12`, border: `1px solid ${t.color}30`,
                  color: t.color, cursor: "default", transition: "all 0.2s",
                }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.transform = "translateY(-3px) scale(1.07)";
                    el.style.boxShadow = `0 6px 18px ${t.color}30`;
                    el.style.background = `${t.color}22`;
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.transform = "translateY(0) scale(1)";
                    el.style.boxShadow = "none";
                    el.style.background = `${t.color}12`;
                  }}
                >
                  <Icon style={{ fontSize: "0.95rem" }} />
                  {t.name}
                </span>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .sk-stats { grid-template-columns: repeat(2,1fr) !important; } }
      `}</style>
    </section>
  );
}
