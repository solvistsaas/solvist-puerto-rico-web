"use client";

import { AnimatedSection, StaggerChild } from "./AnimatedSection";

const steps = [
  {
    num: "01",
    title: "Importa tu cartera",
    description:
      "Sube tu base de clientes e instalaciones. Cualquier formato. Nosotros lo normalizamos.",
  },
  {
    num: "02",
    title: "Detección de oportunidades",
    description:
      "El motor de scoring analiza cada sistema: baterías, mantenimiento, expansión, EV. Prioriza por valor e impacto.",
  },
  {
    num: "03",
    title: "Activación automática",
    description:
      "Seguimiento por WhatsApp. Propuestas personalizadas. Agendamiento de visitas. Sin intervención manual.",
  },
  {
    num: "04",
    title: "Visibilidad operativa",
    description:
      "Dashboard en tiempo real: pipeline, propuestas, estados, métricas. Cada oportunidad tiene un próximo paso claro.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="solucion"
      style={{ backgroundColor: "#050505" }}
      className="py-20 md:py-28"
    >
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
            Cómo funciona
          </div>

          {/* Headline */}
          <h2
            style={{
              fontFamily: "var(--font-outfit)",
              fontWeight: 700,
              fontSize: "clamp(28px, 4vw, 40px)",
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
              color: "#FAFAFA",
              marginBottom: "10px",
            }}
          >
            Visibilidad completa. Seguimiento automático.
          </h2>

          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "15px",
              fontWeight: 400,
              lineHeight: 1.7,
              color: "rgba(250,250,250,0.45)",
              marginBottom: "56px",
              maxWidth: "480px",
            }}
          >
            Solvist estructura tu operación comercial en cuatro capas.
          </p>
        </AnimatedSection>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, i) => (
            <StaggerChild key={step.num} index={i}>
              <div
                style={{
                  padding: "28px 24px",
                  borderRadius: "14px",
                  backgroundColor: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "border-color 0.3s, background-color 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor =
                    "rgba(255,255,255,0.12)";
                  e.currentTarget.style.backgroundColor =
                    "rgba(255,255,255,0.04)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor =
                    "rgba(255,255,255,0.06)";
                  e.currentTarget.style.backgroundColor =
                    "rgba(255,255,255,0.02)";
                }}
              >
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
                    fontWeight: 700,
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
                    lineHeight: 1.65,
                    color: "rgba(250,250,250,0.40)",
                    flex: 1,
                  }}
                >
                  {step.description}
                </p>
              </div>
            </StaggerChild>
          ))}
        </div>
      </div>
    </section>
  );
}
