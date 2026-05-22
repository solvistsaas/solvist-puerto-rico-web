import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Solvist — IA comercial para instaladores solares";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "#050505",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "72px 80px",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        {/* Accent glow top-right */}
        <div
          style={{
            position: "absolute",
            top: -100,
            right: -100,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(235,140,61,0.18) 0%, transparent 70%)",
          }}
        />

        {/* Bottom-left subtle glow */}
        <div
          style={{
            position: "absolute",
            bottom: -80,
            left: -80,
            width: 380,
            height: 380,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(235,140,61,0.10) 0%, transparent 70%)",
          }}
        />

        {/* Logo wordmark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 48,
          }}
        >
          {/* Simple "S" icon */}
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 10,
              background: "#EB8C3D",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 26,
              fontWeight: 700,
              color: "#050505",
            }}
          >
            S
          </div>
          <span
            style={{
              fontSize: 32,
              fontWeight: 700,
              color: "#FAFAFA",
              letterSpacing: "-0.5px",
            }}
          >
            Solvist
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: 58,
            fontWeight: 700,
            color: "#FAFAFA",
            lineHeight: 1.15,
            letterSpacing: "-1px",
            maxWidth: 780,
            marginBottom: 28,
          }}
        >
          Ningún lead sin respuesta.{" "}
          <span style={{ color: "#EB8C3D" }}>Ningún cliente sin seguimiento.</span>
        </div>

        {/* Subheadline */}
        <div
          style={{
            fontSize: 26,
            fontWeight: 400,
            color: "rgba(250,250,250,0.60)",
            maxWidth: 680,
            lineHeight: 1.5,
            marginBottom: 48,
          }}
        >
          Tu agente comercial de IA responde, califica y agenda cada lead en menos de 2 minutos. 24/7.
        </div>

        {/* Pill badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(235,140,61,0.12)",
            border: "1px solid rgba(235,140,61,0.35)",
            borderRadius: 100,
            padding: "10px 20px",
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#EB8C3D",
            }}
          />
          <span style={{ color: "#EB8C3D", fontSize: 17, fontWeight: 600 }}>
            Para instaladores solares en Puerto Rico
          </span>
        </div>

        {/* URL bottom right */}
        <div
          style={{
            position: "absolute",
            bottom: 48,
            right: 80,
            fontSize: 18,
            color: "rgba(250,250,250,0.30)",
            fontWeight: 500,
          }}
        >
          solvist.io
        </div>
      </div>
    ),
    { ...size }
  );
}
