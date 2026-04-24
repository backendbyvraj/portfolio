import { ImageResponse } from "next/og";

export const runtime     = "edge";
export const size        = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "180px",
          height: "180px",
          borderRadius: "36px",
          background: "linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "108px",
          fontWeight: 900,
          color: "#ffffff",
          fontFamily: "sans-serif",
          letterSpacing: "-0.03em",
        }}
      >
        V
      </div>
    ),
    { ...size },
  );
}
