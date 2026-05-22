"use client";

import { AnimatedSection, StaggerChild } from "./AnimatedSection";

const problems = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: "Lead a las 10pm. Sin respuesta hasta el día siguiente.",
    description:
      "El cliente escribe cuando puede, no cuando tú trabajas. Si no hay respuesta en menos de 5 minutos, llama al siguiente instalador de la lista.",
    pill: "El primero en responder se lleva el presupuesto",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    ),
    title: "Clientes sin contacto desde hace años",
    description:
      "Instalaciones de 2019–2022 cuyos sistemas ya no rinden igual. Sus facturas de LUMA han subido. Nadie les ha explicado por qué ni qué pueden hacer.",
    pill: "Tu cartera ya tiene compradores esperando",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
    title: "Propuestas que se quedan sin respuesta",
    description:
      "El presupuesto sale. El cliente lo abre. Nadie hace seguimiento. El cierre cae — no por falta de interés, sino porque nadie volvió a llamar.",
    pill: "El seguimiento manual no escala",
  },
];

export function ProblemSection() {
  return (
    <section
      id="problema"
      style={{ backgroundColor: "#F6F4EF" }}
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
            El problema real
          </div>

          {/* Headline */}
          <h2
            style={{
              fontFamily: "var(--font-outfit)",
              fontWeight: 700,
              fontSize: "clamp(28px, 4vw, 36px)",
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
              color: "#0A0A0A",
              marginBottom: "20px",
              maxWidth: "560px",
            }}
          >
            El instalador que no llama
            <br />
            <span style={{ color: "#EB8C3D" }}>
              es el instalador que no vende.
            </span>
          </h2>

          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: 1.7,
              color: "rgba(10,10,10,0.55)",
              maxWidth: "520px",
              marginBottom: "48px",
            }}
          >
            Tus clientes de 2019–2022 tienen sistemas que hoy rinden menos de lo
            que deberían y pagan más de lo que necesitan. Si no los contactas tú,
            los contacta tu competencia.
          </p>
        </AnimatedSection>

        {/* Problem cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {problems.map((problem, i) => (
            <StaggerChild key={problem.title} index={i}>
              <div
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid rgba(10,10,10,0.06)",
                  borderRadius: "14px",
                  padding: "20px",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                    backgroundColor: "rgba(235,140,61,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#EB8C3D",
                    marginBottom: "18px",
                  }}
                >
                  {problem.icon}
                </div>

                <h3
                  style={{
                    fontFamily: "var(--font-outfit)",
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "#0A0A0A",
                    marginBottom: "10px",
                    lineHeight: 1.3,
                  }}
                >
                  {problem.title}
                </h3>

                <p
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight: 1.65,
                    color: "rgba(10,10,10,0.60)",
                    flex: 1,
                  }}
                >
                  {problem.description}
                </p>

                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    marginTop: "16px",
                    padding: "4px 12px",
                    borderRadius: "100px",
                    backgroundColor: "rgba(235,140,61,0.09)",
                    border: "1px solid rgba(235,140,61,0.20)",
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "#B8701E",
                    fontFamily: "var(--font-inter)",
                    width: "fit-content",
                  }}
                >
                  {problem.pill}
                </div>
              </div>
            </StaggerChild>
          ))}
        </div>
      </div>
    </section>
  );
}
