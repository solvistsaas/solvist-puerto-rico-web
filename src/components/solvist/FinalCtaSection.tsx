"use client";

import { AnimatedSection } from "./AnimatedSection";

export function FinalCtaSection() {
  return (
    <section
      id="demo"
      style={{ backgroundColor: "#050505" }}
      className="py-20 md:py-28"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <AnimatedSection>
          {/* Headline */}
          <h2
            style={{
              fontFamily: "var(--font-outfit)",
              fontWeight: 700,
              fontSize: "clamp(32px, 4.5vw, 48px)",
              lineHeight: 1.1,
              letterSpacing: "-0.035em",
              color: "#FAFAFA",
              marginBottom: "18px",
              maxWidth: "640px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            ¿Cuánto vale tu cartera
            <br />
            instalada hoy?
          </h2>

          {/* Paragraph */}
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "15px",
              fontWeight: 400,
              lineHeight: 1.7,
              color: "rgba(250,250,250,0.45)",
              maxWidth: "480px",
              margin: "0 auto 36px",
              textAlign: "center",
            }}
          >
            En 30 minutos te mostramos exactamente cómo Solvist funciona con el
            tipo de instalaciones que tú tienes en Puerto Rico. Sin
            presentaciones genéricas. Con datos reales de tu mercado.
          </p>

          {/* CTA button */}
          <a
            href="https://cal.com/nokvu/demo"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "16px",
              fontWeight: 600,
              backgroundColor: "#EB8C3D",
              color: "#050505",
              borderRadius: "12px",
              padding: "16px 36px",
              boxShadow: "0 4px 20px rgba(235,140,61,0.30)",
              textDecoration: "none",
              display: "block",
              margin: "0 auto",
              width: "fit-content",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.02)";
              e.currentTarget.style.boxShadow =
                "0 6px 24px rgba(235,140,61,0.40)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow =
                "0 4px 20px rgba(235,140,61,0.30)";
            }}
          >
            Reservar demo →
          </a>

          {/* Trust signals */}
          <div
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "12px",
              fontWeight: 400,
              color: "rgba(250,250,250,0.30)",
              textAlign: "center",
              marginTop: "16px",
            }}
          >
            ✓ Configurado en 4 semanas &nbsp;·&nbsp; ✓ Soporte en español
            &nbsp;·&nbsp; ✓ Sin contrato de permanencia
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
