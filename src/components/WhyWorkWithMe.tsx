"use client";

import {
  FaRocket,
  FaCode,
  FaPalette,
  FaShieldAlt,
  FaClock,
  FaHeadset,
} from "react-icons/fa";

const reasons = [
  {
    icon: <FaRocket />,
    title: "Fast Delivery",
    description:
      "I work efficiently with clear milestones. You get high-quality work delivered on time â€” every time.",
    color: "#8b5cf6",
  },
  {
    icon: <FaCode />,
    title: "Clean Code",
    description:
      "Maintainable, scalable, and well-documented code following industry best practices and design patterns.",
    color: "#06b6d4",
  },
  {
    icon: <FaPalette />,
    title: "Pixel-Perfect UI",
    description:
      "Every pixel matters. I translate designs into responsive, accessible, and beautiful user interfaces.",
    color: "#ec4899",
  },
  {
    icon: <FaShieldAlt />,
    title: "Secure & Reliable",
    description:
      "Security-first development with proper authentication, data validation, and vulnerability protection.",
    color: "#10b981",
  },
  {
    icon: <FaClock />,
    title: "Always On Time",
    description:
      "Projects are delivered within agreed timelines with proper planning and transparent communication.",
    color: "#f59e0b",
  },
  {
    icon: <FaHeadset />,
    title: "Post-Launch Support",
    description:
      "I don't disappear after delivery. I provide ongoing support, updates, and improvements.",
    color: "#6366f1",
  },
];

export default function WhyWorkWithMe() {
  return (
    <section
      id="why"
      className="section"
      style={{ background: "var(--color-bg-secondary)" }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <div className="section-tag" style={{ justifyContent: "center" }}>
            &#10022; Why Choose Me
          </div>
          <h2 className="section-title">
            Why Hire{" "}
            <span className="gradient-text">Vraj Pandya</span>
          </h2>
          <div className="divider" />
          <p className="section-subtitle" style={{ marginTop: "1rem" }}>
            A dedicated Full Stack Developer who brings technical expertise and creative problem-solving to every project — web, app, AI, or CRM.
          </p>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
          }}
          className="why-grid"
        >
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="card"
              style={{ position: "relative", overflow: "hidden" }}
            >
              {/* Glow bg */}
              <div
                style={{
                  position: "absolute",
                  top: "-40px",
                  right: "-40px",
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  background: `radial-gradient(circle, ${reason.color}15, transparent 70%)`,
                  pointerEvents: "none",
                }}
              />

              {/* Icon */}
              <div
                style={{
                  width: "54px",
                  height: "54px",
                  borderRadius: "14px",
                  background: `${reason.color}15`,
                  border: `1px solid ${reason.color}30`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.3rem",
                  color: reason.color,
                  marginBottom: "1.25rem",
                }}
              >
                {reason.icon}
              </div>

              <h3
                style={{
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  color: "var(--color-text)",
                  marginBottom: "0.6rem",
                }}
              >
                {reason.title}
              </h3>
              <p style={{ fontSize: "0.88rem", lineHeight: 1.8 }}>
                {reason.description}
              </p>

              {/* Bottom accent */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "3px",
                  background: `linear-gradient(90deg, ${reason.color}, transparent)`,
                  opacity: 0,
                  transition: "opacity 0.3s",
                }}
                className="card-accent"
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .card:hover .card-accent {
          opacity: 1 !important;
        }
        @media (max-width: 1024px) {
          .why-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .why-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
