"use client";

import { AnimatedSection, StaggerChild } from "./AnimatedSection";

const steps = [
  {
    num: "01",
    title: "Tu cartera, analizada",
    description:
      "Subes tu base de instalaciones en cualquier formato. Nosotros normalizamos los datos y ejecutamos el análisis. Sin integraciones técnicas por tu parte.",
  },
  {
    num: "02",
    title: "Oportunidades priorizadas",
    description:
      "Recibes una lista ordenada por valor e impacto. Cada oportunidad con el contexto que necesita tu comercial para hacer la llamada correcta.",
  },
  {
    num: "03",
    title: "Resultado en 48 horas",
    description:
      "Sin reuniones previas. Sin setup largo. Analizamos, entregamos y te mostramos los resultados en una sesión de 30 minutos.",
  },
];

export function FlashAudit() {
  return (
    <section style={{ backgroundColor: "#050505" }} className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          {/* Label */}
          <div
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "11px",
              fontWeight: 600,
              color: "#EB8C3D",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            Antes de implementar nada
          </div>

          {/* Headline */}
          <h2
            style={{
              fontFamily: "var(--font-outfit)",
              fontWeight: 700,
              fontSize: "clamp(28px, 4vw, 40px)",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "#FAFAFA",
              marginBottom: "20px",
              maxWidth: "600px",
            }}
          >
            Sabemos exactamente qué clientes
            <br />
            tuyos{" "}
            <span style={{ color: "#EB8C3D" }}>
              tienen una oportunidad hoy.
            </span>
          </h2>

          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "15px",
              fontWeight: 400,
              lineHeight: 1.7,
              color: "rgba(250,250,250,0.45)",
              maxWidth: "480px",
              marginBottom: "56px",
            }}
          >
            No es una estimación genérica. Es un análisis sistema por sistema de
            tu cartera completa. En 48 horas tienes el resultado: qué clientes
            contactar, en qué orden y con qué argumento. Tú decides qué hacer
            con esa información.
          </p>
        </AnimatedSection>

        {/* Three columns */}
        <div className="grid md:grid-cols-3 gap-10 lg:gap-14">
          {steps.map((step, i) => (
            <StaggerChild key={step.num} index={i}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div
                  style={{
                    fontFamily: "var(--font-outfit)",
                    fontSize: "48px",
                    fontWeight: 700,
                    color: "#EB8C3D",
                    lineHeight: 1,
                    marginBottom: "20px",
                    opacity: 0.7,
                  }}
                >
                  {step.num}
                </div>

                <h3
                  style={{
                    fontFamily: "var(--font-outfit)",
                    fontSize: "16px",
                    fontWeight: 600,
                    color: "#FAFAFA",
                    marginBottom: "10px",
                    lineHeight: 1.3,
                  }}
                >
                  {step.title}
                </h3>

                <p
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "13px",
                    fontWeight: 400,
                    lineHeight: 1.7,
                    color: "rgba(250,250,250,0.45)",
                  }}
                >
                  {step.description}
                </p>
              </div>
            </StaggerChild>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection delay={0.3}>
          <div className="text-center mt-14">
            <a
              href="https://cal.com/nokvu/demo"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "14px",
                fontWeight: 600,
                backgroundColor: "#EB8C3D",
                color: "#050505",
                borderRadius: "10px",
                padding: "12px 24px",
                boxShadow: "0 4px 14px rgba(235,140,61,0.25)",
                textDecoration: "none",
                display: "inline-block",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.02)";
                e.currentTarget.style.boxShadow =
                  "0 6px 20px rgba(235,140,61,0.35)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 4px 14px rgba(235,140,61,0.25)";
              }}
            >
              Reservar demo →
            </a>
            <div
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "12px",
                fontWeight: 400,
                color: "rgba(250,250,250,0.30)",
                marginTop: "12px",
                textAlign: "center",
              }}
            >
              Sin compromiso. Sin contrato previo.
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
