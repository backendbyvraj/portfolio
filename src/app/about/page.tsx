import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, AUTHOR_EMAIL, GITHUB_URL, LINKEDIN_URL, WHATSAPP_NUM } from "@/lib/seoConfig";

export const metadata: Metadata = {
  title: "About Vraj Pandya — Full Stack Developer from Surat, India",
  description:
    "Vraj Pandya is a Full Stack Developer from Surat, India with 4+ years of experience. Expert in React, Next.js, Node.js, Laravel & Flutter. Available for freelance worldwide.",
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  openGraph: {
    title: "About Vraj Pandya — Full Stack Developer from Surat, India",
    description:
      "Vraj Pandya is a Full Stack Developer from Surat, India with 4+ years of experience. Expert in React, Next.js, Node.js, Laravel & Flutter. Available for freelance worldwide.",
    url: `${SITE_URL}/about`,
  },
};

const skills = [
  { category: "Frontend", items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "Laravel / PHP", "Python / FastAPI", "REST API / GraphQL"] },
  { category: "Mobile", items: ["Flutter", "Dart"] },
  { category: "Databases", items: ["MongoDB", "PostgreSQL", "Redis"] },
  { category: "DevOps", items: ["Docker", "AWS", "Vercel", "CI/CD"] },
  { category: "Integrations", items: ["OpenAI API", "Razorpay", "Stripe", "WebRTC", "Socket.io"] },
];

export default function AboutPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        paddingTop: "7rem",
        paddingBottom: "5rem",
        background: "var(--color-bg)",
        color: "var(--color-text)",
      }}
    >
      <div className="container" style={{ maxWidth: "860px", margin: "0 auto", padding: "0 1.5rem" }}>

        {/* Back link */}
        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.4rem",
            color: "var(--color-text-muted)",
            fontSize: "0.9rem",
            marginBottom: "2.5rem",
            textDecoration: "none",
          }}
        >
          ← Back to Home
        </Link>

        {/* Intro */}
        <div style={{ marginBottom: "3rem" }}>
          <div className="section-tag" style={{ marginBottom: "1rem" }}>◆ About</div>
          <h1
            style={{
              fontSize: "clamp(2rem,5vw,3rem)",
              fontWeight: 900,
              lineHeight: 1.15,
              marginBottom: "1.5rem",
            }}
          >
            About <span className="gradient-text">Vraj Pandya</span>
          </h1>
          <div className="divider" style={{ marginLeft: 0, marginBottom: "2rem" }} />

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.9,
              color: "var(--color-text-muted)",
              marginBottom: "1.25rem",
            }}
          >
            Vraj Pandya is a <strong style={{ color: "var(--color-text)" }}>Full Stack Developer</strong> based
            in <strong style={{ color: "var(--color-text)" }}>Surat, Gujarat, India</strong>, with over{" "}
            <strong style={{ color: "var(--color-text)" }}>4 years of experience</strong> building
            web applications, mobile apps, and SaaS products for clients across India and worldwide.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.9,
              color: "var(--color-text-muted)",
              marginBottom: "1.25rem",
            }}
          >
            Specializing in <strong style={{ color: "var(--color-text)" }}>React, Next.js, Node.js, Laravel,
            and Flutter</strong>, Vraj has delivered 50+ projects ranging from AI-powered content platforms
            and real-time towing apps to multi-tenant school management SaaS and global telemedicine platforms.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.9,
              color: "var(--color-text-muted)",
            }}
          >
            Vraj is the founder of <strong style={{ color: "var(--color-text)" }}>Vraj Dev Studio</strong>,
            an independent software development studio focused on clean code, modern UI, and production-ready
            backends. Available for freelance projects and full-time opportunities worldwide.
          </p>
        </div>

        {/* Skills */}
        <div style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              marginBottom: "1.5rem",
              color: "var(--color-text)",
            }}
          >
            Technical Skills
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: "1rem",
            }}
          >
            {skills.map((s) => (
              <div
                key={s.category}
                className="card"
                style={{ padding: "1.25rem" }}
              >
                <h3
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: "var(--color-primary-light)",
                    marginBottom: "0.75rem",
                  }}
                >
                  {s.category}
                </h3>
                <p style={{ fontSize: "0.95rem", color: "var(--color-text-muted)", lineHeight: 1.7 }}>
                  {s.items.join(" · ")}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* What I Build */}
        <div style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              marginBottom: "1rem",
              color: "var(--color-text)",
            }}
          >
            What I Build
          </h2>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              display: "flex",
              flexDirection: "column",
              gap: "0.6rem",
            }}
          >
            {[
              "Custom Web Applications — React, Next.js, TypeScript",
              "Mobile Apps — Flutter (iOS & Android)",
              "Backend APIs — Node.js, Laravel, Python/FastAPI",
              "SaaS & Multi-tenant Platforms",
              "AI Integrations — OpenAI, LLM-based tools",
              "CRM & ERP Systems",
              "Payment Gateway Integration — Razorpay, Stripe, HDFC",
              "Real-time Apps — WebRTC, Socket.io",
            ].map((item) => (
              <li
                key={item}
                style={{
                  fontSize: "1rem",
                  color: "var(--color-text-muted)",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.6rem",
                }}
              >
                <span style={{ color: "var(--color-primary-light)", marginTop: "0.15rem" }}>▸</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Availability */}
        <div
          className="card"
          style={{
            padding: "2rem",
            background: "rgba(139,92,246,0.06)",
            border: "1px solid rgba(139,92,246,0.2)",
            marginBottom: "3rem",
          }}
        >
          <h2
            style={{
              fontSize: "1.3rem",
              fontWeight: 700,
              marginBottom: "0.75rem",
              color: "var(--color-text)",
            }}
          >
            Available for Hire
          </h2>
          <p style={{ fontSize: "1rem", color: "var(--color-text-muted)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Currently open to <strong style={{ color: "var(--color-text)" }}>freelance projects</strong> and{" "}
            <strong style={{ color: "var(--color-text)" }}>full-time remote opportunities</strong> worldwide.
            Based in Surat, India — working across time zones.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a
              href={`mailto:${AUTHOR_EMAIL}`}
              className="btn btn-primary"
              style={{ fontSize: "0.95rem" }}
            >
              Email Me
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUM.replace("+", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              style={{ fontSize: "0.95rem" }}
            >
              WhatsApp
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              style={{ fontSize: "0.95rem" }}
            >
              LinkedIn
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              style={{ fontSize: "0.95rem" }}
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Nav to projects */}
        <div style={{ textAlign: "center" }}>
          <Link href="/projects" className="btn btn-outline" style={{ fontSize: "0.95rem" }}>
            View All Projects →
          </Link>
        </div>

      </div>
    </main>
  );
}
