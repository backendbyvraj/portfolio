"use client";

import { FaReact, FaNodeJs, FaGithub, FaDownload } from "react-icons/fa";
import {
  SiTypescript,
  SiMongodb,
  SiTailwindcss,
  SiPostgresql,
  SiDocker,
} from "react-icons/si";

/* ─────────────────────────────────────────────────────────
   Orbital configuration
   radius   : px from centre
   duration : seconds per full revolution
   tiltX    : degrees — tilts ring into a 3-D ellipse
   icons    : startAngle spreads them evenly before animation
───────────────────────────────────────────────────────── */
type OrbitIcon = { color: string; startAngle: number; label: string };
type OrbitLayer = {
  radius: number;
  duration: number;
  tiltX: number;
  ringColor: string;
  icons: OrbitIcon[];
};

const orbitLayers: OrbitLayer[] = [
  {
    radius: 120,
    duration: 7,
    tiltX: 22,
    ringColor: "rgba(139,92,246,0.35)",
    icons: [{ color: "#61DAFB", startAngle: 0, label: "React" }],
  },
  {
    radius: 165,
    duration: 13,
    tiltX: -20,
    ringColor: "rgba(6,182,212,0.28)",
    icons: [
      { color: "#3178C6", startAngle: 0,   label: "TS" },
      { color: "#68A063", startAngle: 180, label: "Node" },
    ],
  },
  {
    radius: 210,
    duration: 22,
    tiltX: 12,
    ringColor: "rgba(236,72,153,0.22)",
    icons: [
      { color: "#38BDF8", startAngle: 0,   label: "Tailwind" },
      { color: "#47A248", startAngle: 120, label: "MongoDB" },
      { color: "#cccccc", startAngle: 240, label: "GitHub" },
    ],
  },
  {
    radius: 258,
    duration: 30,
    tiltX: -28,
    ringColor: "rgba(99,102,241,0.20)",
    icons: [
      { color: "#2496ED", startAngle: 0,   label: "Docker" },
      { color: "#336791", startAngle: 180, label: "PG" },
    ],
  },
];

/* Map label → react-icon component */
function IconComponent({ label, color }: { label: string; color: string }) {
  const style = { fontSize: "1.1rem", color };
  switch (label) {
    case "React":    return <FaReact style={style} />;
    case "TS":       return <SiTypescript style={style} />;
    case "Node":     return <FaNodeJs style={style} />;
    case "Tailwind": return <SiTailwindcss style={style} />;
    case "MongoDB":  return <SiMongodb style={style} />;
    case "GitHub":   return <FaGithub style={style} />;
    case "Docker":   return <SiDocker style={style} />;
    case "PG":       return <SiPostgresql style={style} />;
    default:         return null;
  }
}

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        background: "var(--gradient-hero)",
        paddingTop: "80px",
      }}
    >
      {/* Ambient background orbs — clipped by section overflow:hidden */}
      <div style={{ position:"absolute", width:"50vmax", height:"50vmax", borderRadius:"50%", background:"radial-gradient(circle, rgba(139,92,246,0.14) 0%, transparent 70%)", top:"-10%", right:"-10%", pointerEvents:"none" }} />
      <div style={{ position:"absolute", width:"36vmax", height:"36vmax", borderRadius:"50%", background:"radial-gradient(circle, rgba(6,182,212,0.09) 0%, transparent 70%)", bottom:"0", left:"-8%", pointerEvents:"none" }} />

      <div className="container" style={{ position:"relative", zIndex:2 }}>
        <div
          style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"4rem", alignItems:"center" }}
          className="hero-grid"
        >
          {/* ── LEFT: Text ── */}
          <div>
            {/* Studio brand line */}
            <div style={{ display:"flex", alignItems:"center", gap:"0.5rem", marginBottom:"0.85rem" }}>
              <span style={{
                fontSize:"0.78rem", fontWeight:700, letterSpacing:"0.16em",
                textTransform:"uppercase",
                background:"var(--gradient-primary)",
                WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text",
              }}>
                ✦ Vraj Dev Studio
              </span>
              <span style={{ fontSize:"0.72rem", color:"var(--color-text-dim)", letterSpacing:"0.06em" }}>
                · Surat, India
              </span>
            </div>

            <div className="section-tag" style={{ marginBottom:"1.5rem" }}>
              <span className="glow-dot" /> Available for Work
            </div>

            <h1 style={{ fontSize:"clamp(2.8rem,6vw,4.5rem)", lineHeight:1.1, marginBottom:"0.75rem", fontWeight:900 }}>
              <span style={{ color:"var(--color-text)" }}>Vraj Pandya</span>
              <br />
              <span className="gradient-text">Full Stack Developer for Hire</span>
            </h1>

            {/* Clarify solo / role */}
            <div style={{ fontSize:"0.9rem", fontWeight:600, color:"var(--color-text-dim)", letterSpacing:"0.05em", marginBottom:"1.1rem" }}>
              React · Next.js · Flutter · Node.js · Laravel · Python
            </div>

            <h2 style={{ fontSize:"clamp(1.3rem,3vw,1.8rem)", fontWeight:600, color:"var(--color-text-muted)", marginBottom:"1.25rem" }}>
              Freelance Full Stack Developer —{" "}
              <span style={{ color:"var(--color-secondary)" }}>Surat, India</span>
            </h2>

            <p style={{ fontSize:"1.05rem", color:"var(--color-text-muted)", maxWidth:"500px", lineHeight:1.8, marginBottom:"2.5rem" }}>
              I design and build modern web applications with clean code, stunning UI,
              and production-ready backends. Let&apos;s build something amazing together.
            </p>

            <div className="hero-btns" style={{ display:"flex", gap:"1rem", flexWrap:"wrap", marginBottom:"3rem" }}>
              <a href="#projects" className="btn btn-primary" style={{ fontSize:"1rem" }}>
                View Projects
              </a>
              <a href="/resume" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ fontSize:"1rem" }}>
                <FaDownload style={{ fontSize:"0.85rem" }} /> Download CV
              </a>
            </div>

            <div className="hero-stats" style={{ display:"flex", gap:"2rem", flexWrap:"wrap" }}>
              {[
                { value:"50+", label:"Projects Done" },
                { value:"25+", label:"Happy Clients" },
                { value:"4+",  label:"Years Exp." },
              ].map((s) => (
                <div key={s.label}>
                  <div style={{ fontSize:"1.8rem", fontWeight:800, background:"var(--gradient-primary)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>
                    {s.value}
                  </div>
                  <div style={{ fontSize:"0.82rem", color:"var(--color-text-dim)" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Solar System ── */}
          <div
            className="hero-visual"
            style={{ display:"flex", alignItems:"center", justifyContent:"center", position:"relative" }}
          >
            {/*
              perspective on this wrapper makes rotateX on each orbit ring
              look like a genuine 3-D tilted ellipse.
            */}
            <div
              style={{
                position:"relative",
                width:"560px",
                height:"560px",
                perspective:"1000px",
                perspectiveOrigin:"50% 50%",
              }}
            >

              {/* ═══ SPHERE — spins on its own axis (like the Sun) ═══ */}
              {/*
                OUTER div: handles position + sphere-pulse box-shadow glow.
                No overflow:hidden here so the glow is never clipped.
              */}
              <div
                style={{
                  position:"absolute",
                  top:"50%", left:"50%",
                  transform:"translate(-50%,-50%)",
                  width:"190px", height:"190px",
                  borderRadius:"50%",
                  animation:"sphere-pulse 3s ease-in-out infinite",
                  zIndex:20,
                }}
              >
                {/*
                  INNER div: overflow:hidden clips the spinning grid overlay
                  to the circular shape. All visual content lives here.
                */}
                <div
                  style={{
                    width:"100%", height:"100%",
                    borderRadius:"50%",
                    overflow:"hidden",
                    background:"radial-gradient(circle at 32% 28%, #c4b5fd 0%, #9333ea 35%, #6d28d9 62%, #1e1b4b 100%)",
                    position:"relative",
                  }}
                >
                  {/*
                    Surface grid — two bg layers:
                    1. horizontal lines (latitude — static)
                    2. vertical lines (longitude — bg-position animated in globals.css)
                    Scrolling the bg-position on X = axial spin illusion
                  */}
                  <div
                    style={{
                      position:"absolute",
                      top:"-5%", left:"-5%",
                      width:"110%", height:"110%",
                      backgroundImage:
                        "repeating-linear-gradient(0deg, transparent 0px, transparent 17px, rgba(192,132,252,0.25) 17px, rgba(192,132,252,0.25) 18px), " +
                        "repeating-linear-gradient(90deg, transparent 0px, transparent 17px, rgba(192,132,252,0.20) 17px, rgba(192,132,252,0.20) 18px)",
                      animation:"sphere-axis-spin 4s linear infinite",
                    }}
                  />

                  {/* Gloss highlight — top-left bright spot */}
                  <div
                    style={{
                      position:"absolute", top:"8%", left:"12%",
                      width:"38%", height:"30%",
                      borderRadius:"50%",
                      background:"radial-gradient(circle, rgba(255,255,255,0.42), transparent)",
                      pointerEvents:"none",
                    }}
                  />

                  {/* Code symbol */}
                  <div style={{ position:"relative", zIndex:1, height:"100%", display:"flex", alignItems:"center", justifyContent:"center" }}>
                    <span style={{ fontSize:"1.9rem", fontWeight:900, color:"rgba(255,255,255,0.92)", textShadow:"0 2px 20px rgba(255,255,255,0.6)", letterSpacing:"-0.03em" }}>
                      &lt;/&gt;
                    </span>
                  </div>
                </div>
              </div>
              {/* ════════════════════════════════════════════════════ */}

              {/* ═══ ORBITAL RINGS + ICON PLANETS ═══ */}
              {orbitLayers.map((layer, li) => (
                <div
                  key={li}
                  style={{
                    /* Tilt frame — makes the ring appear as a 3-D ellipse */
                    position:"absolute",
                    top:"50%", left:"50%",
                    width:0, height:0,
                    transform:`rotateX(${layer.tiltX}deg)`,
                    transformStyle:"preserve-3d",
                    zIndex:10,
                  }}
                >
                  {/* Ellipse ring visual */}
                  <div
                    style={{
                      position:"absolute",
                      width:`${layer.radius * 2}px`,
                      height:`${layer.radius * 2}px`,
                      top:`-${layer.radius}px`,
                      left:`-${layer.radius}px`,
                      borderRadius:"50%",
                      border:`1px solid ${layer.ringColor}`,
                    }}
                  />

                  {/* Icons — one per planet on this orbit */}
                  {layer.icons.map((icon, ii) => {
                    /*
                      Each icon carrier is a 0×0 div at the solar-system centre.
                      transform-origin for a 0×0 element = its own (0,0) =
                      the centre of the system — so rotate() orbits it perfectly.

                      We offset the start angle via animationDelay:
                        delay = -(startAngle / 360) * duration
                      This positions each icon at the correct initial angle
                      without any JS math at render time.
                    */
                    const delay = `-${((icon.startAngle / 360) * layer.duration).toFixed(2)}s`;
                    return (
                      <div
                        key={ii}
                        style={{
                          position:"absolute",
                          top:0, left:0,
                          width:0, height:0,
                          /* orbit-cw is in globals.css */
                          animation:`orbit-cw ${layer.duration}s linear ${delay} infinite`,
                        }}
                      >
                        {/* Translate icon outward to the orbital radius */}
                        <div
                          style={{
                            position:"absolute",
                            top:0,
                            left:`${layer.radius}px`,
                            marginLeft:"-18px",
                            marginTop:"-18px",
                          }}
                        >
                          {/*
                            Counter-rotate so the icon badge stays upright.
                            orbit-ccw is in globals.css.
                          */}
                          <div
                            style={{
                              animation:`orbit-ccw ${layer.duration}s linear ${delay} infinite`,
                              width:"36px", height:"36px",
                              display:"flex", alignItems:"center", justifyContent:"center",
                              borderRadius:"50%",
                              background:`${icon.color}1a`,
                              border:`1.5px solid ${icon.color}55`,
                              boxShadow:`0 0 12px ${icon.color}66`,
                            }}
                          >
                            <IconComponent label={icon.label} color={icon.color} />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
              {/* ════════════════════════════════════════════════════ */}

            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{ position:"absolute", bottom:"2rem", left:"50%", transform:"translateX(-50%)", display:"flex", flexDirection:"column", alignItems:"center", gap:"0.5rem" }}>
        <span style={{ fontSize:"0.72rem", color:"var(--color-text-dim)", letterSpacing:"0.12em" }}>SCROLL</span>
        <div style={{ width:"24px", height:"40px", border:"2px solid rgba(139,92,246,0.4)", borderRadius:"12px", display:"flex", justifyContent:"center", paddingTop:"6px" }}>
          <div style={{ width:"4px", height:"8px", background:"var(--color-primary)", borderRadius:"2px", animation:"scroll-bounce 1.8s ease-in-out infinite" }} />
        </div>
      </div>

      {/* Responsive layout only — keyframes live in globals.css */}
      <style>{`
        .hero-visual > div {
          width: 560px;
          height: 560px;
        }
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
            text-align: center;
          }
          .hero-visual { order: -1; }
          .hero-visual > div {
            width: min(480px, 88vw) !important;
            height: min(480px, 88vw) !important;
          }
        }
        @media (max-width: 600px) {
          .hero-visual > div {
            width: min(360px, 90vw) !important;
            height: min(360px, 90vw) !important;
          }
        }
        @media (max-width: 400px) {
          .hero-visual > div {
            width: 88vw !important;
            height: 88vw !important;
          }
        }
      `}</style>
    </section>
  );
}
