"use client";

import Link from "next/link";
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaChevronRight,
  FaArrowRight,
} from "react-icons/fa";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Frontend Development",
  "Backend Development",
  "Full Stack Apps",
  "UI/UX Design",
  "API Integration",
  "SEO Optimization",
];

const socials = [
  { icon: <FaGithub />, href: "https://github.com/pandyavraj234", label: "GitHub" },
  { icon: <FaLinkedinIn />, href: "https://www.linkedin.com/in/pandya-vraj-b800b819b", label: "LinkedIn" },
  { icon: <FaTwitter />, href: "https://x.com/pandyavraj234", label: "Twitter" },
  { icon: <FaInstagram />, href: "https://instagram.com/pandyavraj234", label: "Instagram" },
  { icon: <FaEnvelope />, href: "mailto:pandyavraj234@gmail.com", label: "Email" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "#07070f",
        borderTop: "1px solid rgba(139, 92, 246, 0.15)",
        paddingTop: "4rem",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1.5fr",
            gap: "3rem",
            paddingBottom: "3rem",
            borderBottom: "1px solid rgba(139, 92, 246, 0.1)",
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <Link href="#home" style={{ display: "inline-block", marginBottom: "1rem" }}>
              <span style={{ fontSize: "1.6rem", fontWeight: 800 }}>
                <span className="gradient-text">Vraj</span>
                <span style={{ color: "var(--color-text)" }}> Dev Studio</span>
              </span>
            </Link>
            <p style={{ fontSize: "0.9rem", lineHeight: 1.8, marginBottom: "1.5rem" }}>
              Crafting modern, performant, and scalable digital experiences.
              Turning ideas into reality with clean code and creative design.
            </p>
            {/* Socials */}
            <div style={{ display: "flex", gap: "0.75rem" }}>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{
                    width: "40px",
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                    background: "rgba(139, 92, 246, 0.1)",
                    border: "1px solid rgba(139, 92, 246, 0.2)",
                    color: "var(--color-text-muted)",
                    fontSize: "1rem",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "var(--color-primary)";
                    el.style.borderColor = "var(--color-primary)";
                    el.style.color = "#fff";
                    el.style.transform = "translateY(-3px)";
                    el.style.boxShadow = "0 8px 20px rgba(139,92,246,0.4)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "rgba(139, 92, 246, 0.1)";
                    el.style.borderColor = "rgba(139, 92, 246, 0.2)";
                    el.style.color = "var(--color-text-muted)";
                    el.style.transform = "translateY(0)";
                    el.style.boxShadow = "none";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                fontSize: "0.85rem",
                fontWeight: 700,
                color: "var(--color-text)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "1.25rem",
              }}
            >
              Quick Links
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    style={{
                      fontSize: "0.9rem",
                      color: "var(--color-text-muted)",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      transition: "color 0.25s",
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = "var(--color-primary-light)")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = "var(--color-text-muted)")
                    }
                  >
                    <FaChevronRight style={{ color: "var(--color-primary)", fontSize: "0.6rem", flexShrink: 0 }} />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              style={{
                fontSize: "0.85rem",
                fontWeight: 700,
                color: "var(--color-text)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "1.25rem",
              }}
            >
              Services
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {services.map((s) => (
                <li key={s}>
                  <span
                    style={{
                      fontSize: "0.9rem",
                      color: "var(--color-text-muted)",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                    }}
                  >
                    <FaArrowRight style={{ color: "var(--color-secondary)", fontSize: "0.6rem", flexShrink: 0 }} />
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4
              style={{
                fontSize: "0.85rem",
                fontWeight: 700,
                color: "var(--color-text)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "1.25rem",
              }}
            >
              Stay Updated
            </h4>
            <p style={{ fontSize: "0.88rem", marginBottom: "1rem", lineHeight: 1.7 }}>
              Subscribe for latest projects and tech updates.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}
            >
              <input
                type="email"
                placeholder="your@email.com"
                required
                style={{
                  background: "rgba(139, 92, 246, 0.05)",
                  border: "1px solid rgba(139, 92, 246, 0.2)",
                  borderRadius: "var(--radius)",
                  padding: "0.7rem 1rem",
                  color: "var(--color-text)",
                  fontSize: "0.88rem",
                  outline: "none",
                  transition: "border-color 0.3s",
                  width: "100%",
                }}
                onFocus={(e) =>
                  ((e.currentTarget as HTMLElement).style.borderColor = "var(--color-primary)")
                }
                onBlur={(e) =>
                  ((e.currentTarget as HTMLElement).style.borderColor = "rgba(139, 92, 246, 0.2)")
                }
              />
              <button type="submit" className="btn btn-primary" style={{ justifyContent: "center" }}>
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "1.5rem 0",
            flexWrap: "wrap",
            gap: "0.75rem",
          }}
        >
          <p style={{ fontSize: "0.85rem", color: "var(--color-text-dim)" }}>
            &copy; {year} Vraj Pandya. All rights reserved.
          </p>
          <p style={{ fontSize: "0.85rem", color: "var(--color-text-dim)" }}>
            Built with{" "}
            <span style={{ color: "var(--color-primary)" }}>Next.js</span> &{" "}
            <span style={{ color: "var(--color-secondary)" }}>TypeScript</span>
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
