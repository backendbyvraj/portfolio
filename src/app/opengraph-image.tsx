import { ImageResponse } from "next/og";

export const runtime     = "edge";
export const alt         = "Vraj Pandya – Full Stack Developer | Vraj Dev Studio";
export const size        = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #07070f 0%, #0e0e1a 50%, #07070f 100%)",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background glow blobs */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            right: "-80px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(139,92,246,0.25) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-60px",
            left: "-60px",
            width: "420px",
            height: "420px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(6,182,212,0.18) 0%, transparent 70%)",
          }}
        />

        {/* Studio tag */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(139,92,246,0.15)",
            border: "1px solid rgba(139,92,246,0.35)",
            borderRadius: "50px",
            padding: "8px 22px",
            marginBottom: "28px",
            fontSize: "18px",
            fontWeight: 700,
            color: "#c4b5fd",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          ✦ Vraj Dev Studio · Surat, India
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: "88px",
            fontWeight: 900,
            lineHeight: 1,
            marginBottom: "18px",
            background: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Vraj Pandya
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: "32px",
            fontWeight: 600,
            color: "#94a3b8",
            marginBottom: "36px",
            letterSpacing: "0.04em",
          }}
        >
          Full Stack Developer · Web · App · CRM · Fintech
        </div>

        {/* Tech pills */}
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
          {["React", "Next.js", "Node.js", "Flutter", "Python", "TypeScript"].map((tech) => (
            <div
              key={tech}
              style={{
                background: "rgba(139,92,246,0.12)",
                border: "1px solid rgba(139,92,246,0.3)",
                borderRadius: "8px",
                padding: "8px 18px",
                fontSize: "18px",
                fontWeight: 600,
                color: "#a78bfa",
              }}
            >
              {tech}
            </div>
          ))}
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: "30px",
            right: "48px",
            fontSize: "18px",
            color: "#475569",
            fontWeight: 500,
          }}
        >
          vrajpandya.vercel.app
        </div>
      </div>
    ),
    { ...size },
  );
}
