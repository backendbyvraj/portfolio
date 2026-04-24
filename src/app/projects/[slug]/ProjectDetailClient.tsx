"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import {
  FaArrowLeft,
  FaGithub,
  FaExternalLinkAlt,
  FaCalendarAlt,
  FaUserTie,
  FaCode,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import type { Project } from "@/lib/projectsData";
import { projects } from "@/lib/projectsData";

export default function ProjectDetailClient({ project }: { project: Project }) {
  const [activeImg, setActiveImg] = useState(0);
  const timerRef = useRef<gsap.core.Tween | null>(null);
  const total = project.images.length;

  const startTimer = (delay = 3.5) => {
    if (timerRef.current) timerRef.current.kill();
    if (total <= 1) return;
    // eslint-disable-next-line prefer-const
    let tween: gsap.core.Tween;
    function tick() {
      setActiveImg((cur) => (cur + 1) % total);
      tween = gsap.delayedCall(delay, tick);
      timerRef.current = tween;
    }
    tween = gsap.delayedCall(delay, tick);
    timerRef.current = tween;
  };

  useEffect(() => {
    startTimer();
    return () => { timerRef.current?.kill(); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleGoTo = (i: number) => {
    const next2 = ((i % total) + total) % total;
    setActiveImg(next2);
    startTimer();
  };

  const idx = projects.findIndex((p) => p.slug === project.slug);
  const prev = idx > 0 ? projects[idx - 1] : null;
  const next = idx < projects.length - 1 ? projects[idx + 1] : null;

  return (
    <main style={{ minHeight: "100vh", paddingTop: "6rem", paddingBottom: "5rem" }}>
      <div className="container" style={{ maxWidth: "900px" }}>
        {/* Back */}
        <Link
          href="/projects"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            color: "var(--color-text-muted)",
            fontSize: "0.9rem",
            marginBottom: "2rem",
            transition: "color 0.2s",
            textDecoration: "none",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLElement).style.color = "var(--color-primary-light)")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLElement).style.color = "var(--color-text-muted)")
          }
        >
          <FaArrowLeft /> All Projects
        </Link>

        {/* Hero image carousel */}
        <div
          style={{
            borderRadius: "var(--radius-lg)",
            overflow: "hidden",
            marginBottom: "2.5rem",
            position: "relative",
            background: project.gradient,
            height: "420px",
          }}
        >
          {project.images.map((img, i) => (
            <div
              key={img}
              style={{
                position: "absolute",
                inset: 0,
                opacity: activeImg === i ? 1 : 0,
                transition: "opacity 0.5s ease",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage:
                    "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                }}
              />
              <img
                src={img}
                alt={`${project.title} screenshot ${i + 1}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  position: "relative",
                  zIndex: 1,
                }}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
              {activeImg === i && (
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 0,
                  }}
                >
                  <span
                    style={{
                      fontSize: "5rem",
                      fontWeight: 900,
                      color: "rgba(255,255,255,0.1)",
                      letterSpacing: "-0.05em",
                    }}
                  >
                    &lt;/&gt;
                  </span>
                </div>
              )}
            </div>
          ))}

          {/* Category badge */}
          <span
            style={{
              position: "absolute",
              top: "1.25rem",
              left: "1.25rem",
              zIndex: 10,
              background: "rgba(0,0,0,0.55)",
              backdropFilter: "blur(8px)",
              color: "var(--color-primary-light)",
              fontSize: "0.8rem",
              fontWeight: 600,
              padding: "0.3rem 0.9rem",
              borderRadius: "50px",
              border: "1px solid rgba(139,92,246,0.3)",
            }}
          >
            {project.category}
          </span>

          {/* Image nav arrows */}
          {project.images.length > 1 && (
            <>
              <button
                onClick={() => handleGoTo(activeImg - 1)}
                style={{
                  position: "absolute",
                  left: "1rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 10,
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "rgba(0,0,0,0.5)",
                  backdropFilter: "blur(4px)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={() => handleGoTo(activeImg + 1)}
                style={{
                  position: "absolute",
                  right: "1rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 10,
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "rgba(0,0,0,0.5)",
                  backdropFilter: "blur(4px)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <FaChevronRight />
              </button>
            </>
          )}

          {/* Dots */}
          {project.images.length > 1 && (
            <div
              style={{
                position: "absolute",
                bottom: "1rem",
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                gap: "0.4rem",
                zIndex: 10,
              }}
            >
              {project.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => handleGoTo(i)}
                  style={{
                    width: activeImg === i ? "24px" : "8px",
                    height: "8px",
                    borderRadius: "50px",
                    background: activeImg === i ? "var(--color-primary)" : "rgba(255,255,255,0.4)",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.3s",
                    padding: 0,
                  }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Title + Meta */}
        <div style={{ marginBottom: "2rem" }}>
          <h1
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              fontWeight: 800,
              lineHeight: 1.2,
              marginBottom: "0.5rem",
            }}
          >
            {project.title}
          </h1>
          <p
            style={{
              fontSize: "1.1rem",
              color: "var(--color-text-muted)",
              marginBottom: "1.5rem",
            }}
          >
            {project.tagline}
          </p>

          {/* Meta pills */}
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                fontSize: "0.85rem",
                color: "var(--color-text-muted)",
              }}
            >
              <FaCalendarAlt style={{ color: "var(--color-primary)" }} />
              {project.year}
            </span>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                fontSize: "0.85rem",
                color: "var(--color-text-muted)",
              }}
            >
              <FaUserTie style={{ color: "var(--color-secondary)" }} />
              {project.role}
            </span>
          </div>

          {/* Action buttons */}
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            {project.live !== "#" && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
            )}
            {project.github !== "#" && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <FaGithub /> View Code
              </a>
            )}
          </div>
        </div>

        {/* Tech Stack */}
        <div
          style={{
            background: "rgba(139,92,246,0.05)",
            border: "1px solid rgba(139,92,246,0.15)",
            borderRadius: "var(--radius)",
            padding: "1.25rem 1.5rem",
            marginBottom: "2.5rem",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              marginBottom: "0.75rem",
            }}
          >
            <FaCode style={{ color: "var(--color-primary)", fontSize: "0.9rem" }} />
            <span
              style={{
                fontSize: "0.8rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--color-text-muted)",
              }}
            >
              Tech Stack
            </span>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {project.tech.map((t) => (
              <span
                key={t}
                style={{
                  background: "rgba(139,92,246,0.1)",
                  border: "1px solid rgba(139,92,246,0.25)",
                  color: "var(--color-primary-light)",
                  fontSize: "0.82rem",
                  padding: "0.3rem 0.8rem",
                  borderRadius: "50px",
                  fontWeight: 500,
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Content sections */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
          }}
        >
          {/* Overview */}
          <section>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "1rem", color: "var(--color-text)" }}>
              Project Overview
            </h2>
            <div
              style={{
                color: "var(--color-text-muted)",
                lineHeight: 1.85,
                fontSize: "0.95rem",
                whiteSpace: "pre-line",
              }}
            >
              {project.fullDescription}
            </div>
          </section>

          {/* Challenges */}
          <section
            style={{
              background: "rgba(139,92,246,0.04)",
              border: "1px solid rgba(139,92,246,0.12)",
              borderLeft: "3px solid var(--color-primary)",
              borderRadius: "0 var(--radius) var(--radius) 0",
              padding: "1.5rem",
            }}
          >
            <h2
              style={{
                fontSize: "1.1rem",
                fontWeight: 700,
                marginBottom: "0.75rem",
                color: "var(--color-text)",
              }}
            >
              Challenges & Solutions
            </h2>
            <p
              style={{
                color: "var(--color-text-muted)",
                lineHeight: 1.85,
                fontSize: "0.93rem",
              }}
            >
              {project.challenges}
            </p>
          </section>

          {/* Outcome */}
          <section
            style={{
              background: "rgba(20,184,166,0.05)",
              border: "1px solid rgba(20,184,166,0.15)",
              borderLeft: "3px solid var(--color-secondary)",
              borderRadius: "0 var(--radius) var(--radius) 0",
              padding: "1.5rem",
            }}
          >
            <h2
              style={{
                fontSize: "1.1rem",
                fontWeight: 700,
                marginBottom: "0.75rem",
                color: "var(--color-text)",
              }}
            >
              Outcome & Impact
            </h2>
            <p
              style={{
                color: "var(--color-text-muted)",
                lineHeight: 1.85,
                fontSize: "0.93rem",
              }}
            >
              {project.outcome}
            </p>
          </section>
        </div>

        {/* Prev / Next navigation */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: prev && next ? "1fr 1fr" : "1fr",
            gap: "1rem",
            marginTop: "4rem",
            paddingTop: "2rem",
            borderTop: "1px solid var(--color-border)",
          }}
        >
          {prev && (
            <Link
              href={`/projects/${prev.slug}`}
              style={{ textDecoration: "none" }}
            >
              <div
                className="card"
                style={{ padding: "1.25rem", cursor: "pointer", transition: "border-color 0.2s" }}
              >
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--color-text-muted)",
                    marginBottom: "0.4rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.3rem",
                  }}
                >
                  <FaChevronLeft /> Previous
                </div>
                <div style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--color-text)" }}>
                  {prev.title}
                </div>
              </div>
            </Link>
          )}
          {next && (
            <Link
              href={`/projects/${next.slug}`}
              style={{ textDecoration: "none", marginLeft: prev ? "auto" : 0 }}
            >
              <div
                className="card"
                style={{
                  padding: "1.25rem",
                  cursor: "pointer",
                  textAlign: "right",
                  transition: "border-color 0.2s",
                }}
              >
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--color-text-muted)",
                    marginBottom: "0.4rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.3rem",
                    justifyContent: "flex-end",
                  }}
                >
                  Next <FaChevronRight />
                </div>
                <div style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--color-text)" }}>
                  {next.title}
                </div>
              </div>
            </Link>
          )}
        </div>

        {/* Hire CTA */}
        <div
          style={{
            textAlign: "center",
            marginTop: "3rem",
            padding: "2.5rem",
            background: "rgba(139,92,246,0.06)",
            border: "1px solid rgba(139,92,246,0.15)",
            borderRadius: "var(--radius-lg)",
          }}
        >
          <p
            style={{
              color: "var(--color-text-muted)",
              marginBottom: "1.25rem",
              fontSize: "1rem",
            }}
          >
            Interested in a similar project? Let&apos;s talk.
          </p>
          <Link href="/#contact" className="btn btn-primary">
            Hire Me for Your Project
          </Link>
        </div>
      </div>
    </main>
  );
}
