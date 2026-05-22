import DemoForm from "./DemoForm";
import Link from "next/link";

export const metadata = {
  title: "Reservar demo — Solvist",
  description: "Reserva una demo personalizada de 30 minutos y descubre cómo Solvist puede transformar la gestión comercial de tu empresa instaladora.",
};

const benefits = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    title: "Demo en vivo",
    description: "Te mostramos Solvist funcionando con el tipo de instalaciones que tú tienes en Puerto Rico.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Sin compromiso",
    description: "Haz todas las preguntas que necesites, sin contratos ni permanencia.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "Datos reales de tu mercado",
    description: "No presentaciones genéricas. Analizamos tu cartera de clientes instalada y te mostramos el potencial real.",
  },
];

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-[#050505]">
      {/* Nav minimal */}
      <nav className="border-b border-white/[0.07] px-5 py-4 md:px-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div style={{ width: 3, height: 24, backgroundColor: "#EB8C3D", borderRadius: 2 }} />
            <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
              <span style={{ fontFamily: "var(--font-outfit)", fontWeight: 700, fontSize: 20, color: "#FAFAFA" }}>
                SOLVIST
              </span>
              <span style={{ fontSize: 11, color: "rgba(250,250,250,0.40)", marginTop: 2, letterSpacing: "0.08em", fontWeight: 500 }}>
                by Nokvu
              </span>
            </div>
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-[rgba(250,250,250,0.5)] transition-colors hover:text-[rgba(250,250,250,0.85)]"
          >
            ← Volver
          </Link>
        </div>
      </nav>

      {/* Main content */}
      <div className="mx-auto max-w-6xl px-5 py-12 md:px-10 md:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 lg:items-start">

          {/* Left column — copy + benefits */}
          <div className="flex flex-col">
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: 11,
                fontWeight: 700,
                color: "#EB8C3D",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              DEMO GRATUITA · 30 MINUTOS
            </p>

            <h1
              style={{
                fontFamily: "var(--font-outfit)",
                fontWeight: 700,
                fontSize: "clamp(32px, 4vw, 48px)",
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                color: "#FAFAFA",
                marginBottom: 16,
              }}
            >
              Reserva tu demo
              <br />
              <span style={{ color: "#EB8C3D" }}>personalizada</span>
            </h1>

            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: 15,
                lineHeight: 1.75,
                color: "rgba(250,250,250,0.52)",
                marginBottom: 40,
                maxWidth: 440,
              }}
            >
              En 30 minutos te mostramos exactamente cómo Solvist funciona con tu
              tipo de instalaciones. Sin presentaciones genéricas, con datos
              reales de Puerto Rico.
            </p>

            {/* Benefits */}
            <div className="flex flex-col gap-6 mb-10">
              {benefits.map((b) => (
                <div key={b.title} className="flex gap-4">
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 10,
                      background: "rgba(235,140,61,0.09)",
                      border: "1px solid rgba(235,140,61,0.18)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#EB8C3D",
                      flexShrink: 0,
                    }}
                  >
                    {b.icon}
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-outfit)",
                        fontSize: 15,
                        fontWeight: 700,
                        color: "#FAFAFA",
                        marginBottom: 4,
                      }}
                    >
                      {b.title}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: 13,
                        lineHeight: 1.65,
                        color: "rgba(250,250,250,0.50)",
                      }}
                    >
                      {b.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust signals */}
            <div
              style={{
                padding: "16px 20px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 12,
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}
            >
              {[
                "Configurado en 4 semanas",
                "Soporte en español",
                "Sin contrato de permanencia",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <span style={{ color: "#EB8C3D", fontSize: 13, fontWeight: 700 }}>✓</span>
                  <span style={{ fontSize: 13, color: "rgba(250,250,250,0.55)", fontFamily: "var(--font-inter)" }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — form */}
          <div>
            <DemoForm />
          </div>

        </div>
      </div>
    </div>
  );
}
