"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import { FaGithub, FaArrowRight } from "react-icons/fa";
import { projects, categories } from "@/lib/projectsData";

function CardCarousel({ images, title }: { images: string[]; title: string }) {
  const [active, setActive] = useState(0);
  const timerRef = useRef<gsap.core.Tween | null>(null);
  const total = images.length;

  useEffect(() => {
    if (total <= 1) return;
    function tick() {
      setActive((cur) => (cur + 1) % total);
      timerRef.current = gsap.delayedCall(2.5, tick);
    }
    timerRef.current = gsap.delayedCall(2.5, tick);
    return () => { timerRef.current?.kill(); };
  }, [total]);

  return (
    <>
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`${title} ${i + 1}`}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: active === i ? 1 : 0,
            transition: "opacity 0.7s ease",
            zIndex: 0,
          }}
          onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
        />
      ))}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />
      <span
        style={{
          fontSize: "3.5rem",
          fontWeight: 900,
          color: "rgba(255,255,255,0.15)",
          letterSpacing: "-0.05em",
          userSelect: "none",
          position: "relative",
          zIndex: 1,
        }}
      >
        &lt;/&gt;
      </span>
      {total > 1 && (
        <div
          style={{
            position: "absolute",
            bottom: "0.55rem",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "0.3rem",
            zIndex: 5,
            pointerEvents: "none",
          }}
        >
          {images.map((_, i) => (
            <span
              key={i}
              style={{
                width: active === i ? "16px" : "6px",
                height: "6px",
                borderRadius: "50px",
                background: active === i ? "#fff" : "rgba(255,255,255,0.4)",
                transition: "all 0.3s",
                display: "block",
              }}
            />
          ))}
        </div>
      )}
    </>
  );
}

const HOME_LIMIT = 6;

export default function FeaturedProjects() {
  const [active, setActive] = useState("All");

  const filtered = (
    active === "All" ? projects : projects.filter((p) => p.category === active)
  ).slice(0, HOME_LIMIT);

  return (
    <section id="projects" className="section">
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <div className="section-tag" style={{ justifyContent: "center" }}>
            &#9670; Featured Projects
          </div>
          <h2 className="section-title">Recent Web &amp; App <span className="gradient-text">Development Projects</span></h2>
          <div className="divider" />
          <p className="section-subtitle" style={{ marginTop: "1rem" }}>
            Real-world full stack projects — web apps, mobile apps, AI platforms, CRM systems, and trading bots built from scratch.
          </p>
        </div>

        {/* Filter */}
        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "2.5rem",
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              style={{
                padding: "0.5rem 1.25rem",
                borderRadius: "50px",
                border: "1.5px solid",
                borderColor: active === cat ? "var(--color-primary)" : "var(--color-border)",
                background: active === cat ? "rgba(139,92,246,0.15)" : "transparent",
                color: active === cat ? "var(--color-primary-light)" : "var(--color-text-muted)",
                fontSize: "0.88rem",
                fontWeight: 500,
                cursor: "pointer",
                transition: "all 0.25s",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
          }}
          className="projects-grid"
        >
          {filtered.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              style={{ textDecoration: "none", color: "inherit", display: "block" }}
            >
              <div
                className="card project-card"
                style={{ padding: 0, overflow: "hidden", position: "relative", height: "100%", cursor: "pointer" }}
              >
                {/* Thumbnail */}
                <div
                  style={{
                    height: "200px",
                    background: project.gradient,
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                  }}
                >
                  <CardCarousel images={project.images} title={project.title} />

                  {project.featured && (
                    <span
                      style={{
                        position: "absolute",
                        top: "1rem",
                        left: "1rem",
                        background: "rgba(139,92,246,0.9)",
                        color: "#fff",
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        padding: "0.2rem 0.7rem",
                        borderRadius: "50px",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        zIndex: 2,
                      }}
                    >
                      Featured
                    </span>
                  )}

                  {/* Hover overlay */}
                  <div
                    className="project-overlay"
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "rgba(0,0,0,0.65)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      opacity: 0,
                      transition: "opacity 0.3s",
                      zIndex: 3,
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        color: "#fff",
                        fontWeight: 600,
                        fontSize: "0.95rem",
                        background: "var(--color-primary)",
                        padding: "0.55rem 1.2rem",
                        borderRadius: "50px",
                      }}
                    >
                      View Details <FaArrowRight style={{ fontSize: "0.8rem" }} />
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div style={{ padding: "1.25rem" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: "0.5rem",
                      gap: "0.5rem",
                    }}
                  >
                    <h3 style={{ fontSize: "1rem", color: "var(--color-text)", fontWeight: 700, lineHeight: 1.3 }}>
                      {project.title}
                    </h3>
                    <span className="badge" style={{ flexShrink: 0 }}>{project.category}</span>
                  </div>
                  <p style={{ fontSize: "0.85rem", lineHeight: 1.7, marginBottom: "1rem", color: "var(--color-text-muted)" }}>
                    {project.description}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                    {project.tech.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        style={{
                          background: "rgba(139,92,246,0.1)",
                          border: "1px solid rgba(139,92,246,0.2)",
                          color: "var(--color-primary-light)",
                          fontSize: "0.73rem",
                          padding: "0.15rem 0.6rem",
                          borderRadius: "50px",
                          fontWeight: 500,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span
                        style={{
                          background: "rgba(139,92,246,0.1)",
                          border: "1px solid rgba(139,92,246,0.2)",
                          color: "var(--color-text-muted)",
                          fontSize: "0.73rem",
                          padding: "0.15rem 0.6rem",
                          borderRadius: "50px",
                          fontWeight: 500,
                        }}
                      >
                        +{project.tech.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View More CTA */}
        <div style={{ textAlign: "center", marginTop: "3rem", display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/projects" className="btn btn-primary">
            View All Projects <FaArrowRight style={{ fontSize: "0.85rem" }} />
          </Link>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            <FaGithub /> GitHub Profile
          </a>
        </div>
      </div>

      <style>{`
        .project-card:hover .project-overlay {
          opacity: 1 !important;
        }
        @media (max-width: 1024px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
