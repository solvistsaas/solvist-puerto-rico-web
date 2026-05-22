import Link from "next/link";

export const metadata = {
  title: "Demo confirmada — Solvist",
  description: "Tu demo con Solvist está confirmada. Nos vemos pronto.",
  robots: { index: false },
};

export default function GraciasPage() {
  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center px-5">
      <div className="max-w-md w-full text-center">
        {/* Check icon */}
        <div
          style={{
            width: 72,
            height: 72,
            borderRadius: "50%",
            background: "rgba(235,140,61,0.12)",
            border: "1px solid rgba(235,140,61,0.30)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 32px",
          }}
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#EB8C3D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>

        <h1
          style={{
            fontFamily: "var(--font-outfit)",
            fontWeight: 700,
            fontSize: "clamp(28px, 5vw, 40px)",
            color: "#FAFAFA",
            letterSpacing: "-0.03em",
            marginBottom: 16,
          }}
        >
          ¡Demo confirmada!
        </h1>

        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: 15,
            lineHeight: 1.75,
            color: "rgba(250,250,250,0.55)",
            marginBottom: 40,
          }}
        >
          Recibirás un email con los detalles de la reunión. Nos vemos pronto.
        </p>

        <Link
          href="/"
          style={{
            display: "inline-block",
            background: "#EB8C3D",
            color: "#050505",
            fontFamily: "var(--font-inter)",
            fontWeight: 600,
            fontSize: 14,
            padding: "14px 28px",
            borderRadius: 8,
            textDecoration: "none",
          }}
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
