"use client";

import { AnimatedSection, StaggerChild } from "./AnimatedSection";

const blocks = [
  {
    number: "4–7 años",
    subtitle: "Payback real de baterías en PR hoy",
    text: `En 2021, una batería LFP instalada costaba ~$800/kWh. El payback era de 12–18 años. Un argumento imposible de hacer a ningún cliente.

Hoy el precio ha bajado a ~$400/kWh (NREL 2025). Con el crédito federal ITC del 30% y el IVU de Puerto Rico aplicado, el coste neto real baja a ~$234/kWh.

Para un cliente en tarifa GSP con 50 kVA de demanda, el cargo mensual de LUMA por demanda ronda los $400 — eliminable con una batería correctamente dimensionada.

Payback real: 4–7 años. Un argumento que antes no existía y que tu competencia ya está usando.`,
  },
  {
    number: "5.5%/año",
    subtitle: "Degradación real de módulos en clima tropical",
    text: `El catálogo del fabricante garantiza 0.5%/año de degradación. Eso es bajo condiciones de laboratorio a 25°C.

En Puerto Rico, los módulos operan a 65–75°C en verano. La Ley de Arrhenius — que describe cómo la temperatura acelera las reacciones químicas — duplica la velocidad de degradación por cada 10°C adicionales de temperatura de operación.

Un sistema de 50 kWp instalado en 2019 produce hoy aproximadamente como uno de 37 kWp. Tu cliente lleva años perdiendo producción sin que nadie le haya explicado por qué su factura de LUMA no baja como esperaba.

Esa es una conversación que tú puedes tener — y que se cierra con una propuesta de revisión técnica.`,
  },
  {
    number: "3–15",
    subtitle: "Eventos de variación de tensión por semana en PR",
    text: `La red de distribución de LUMA es inestable. En zonas como Bayamón, Caguas y Trujillo Alto, los inversores registran entre 3 y 15 eventos de sobretensión o microcorte semanal.

Los inversores modernos tienen protección automática que los desconecta ante estas variaciones. El cliente ve que "el sistema no funciona" y llama preocupado — cuando en realidad es una desconexión de seguridad, no una avería.

Esas llamadas cuestan tiempo a tu equipo de soporte y generan desconfianza en la instalación. Una batería con gestión activa de tensión elimina el problema de raíz — y convierte una queja recurrente en una venta de upgrade.`,
  },
];

export function WhyNow() {
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
            Por qué ahora en Puerto Rico
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
              marginBottom: "18px",
              maxWidth: "600px",
            }}
          >
            El mercado cambió.
            <br />
            Los instaladores que actúen primero,
            <br />
            ganan.
          </h2>

          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: 1.7,
              color: "rgba(250,250,250,0.40)",
              maxWidth: "540px",
              marginBottom: "56px",
            }}
          >
            Puerto Rico tiene condiciones únicas que hacen que las instalaciones
            de 2019–2022 representen hoy una oportunidad comercial que no existía
            hace cuatro años. Aquí está la evidencia técnica.
          </p>
        </AnimatedSection>

        {/* Three technical blocks — vertical layout with separators */}
        <div className="flex flex-col">
          {blocks.map((block, i) => (
            <StaggerChild key={block.number} index={i}>
              <div
                style={{
                  paddingTop: i > 0 ? "48px" : "0",
                  marginTop: i > 0 ? "48px" : "0",
                  borderTop:
                    i > 0 ? "1px solid rgba(255,255,255,0.06)" : "none",
                }}
              >
                <div className="flex flex-col md:flex-row md:gap-8 gap-4">
                  {/* Left: Big number */}
                  <div
                    className="md:flex-shrink-0"
                    style={{ minWidth: "200px" }}
                  >
                    <div
                      style={{
                        fontFamily: "var(--font-outfit)",
                        fontSize: "clamp(40px, 5vw, 64px)",
                        fontWeight: 700,
                        color: "#EB8C3D",
                        letterSpacing: "-0.04em",
                        lineHeight: 1,
                      }}
                    >
                      {block.number}
                    </div>
                  </div>

                  {/* Right: Content */}
                  <div style={{ flex: 1 }}>
                    <h3
                      style={{
                        fontFamily: "var(--font-outfit)",
                        fontSize: "18px",
                        fontWeight: 600,
                        color: "#FAFAFA",
                        marginBottom: "14px",
                        lineHeight: 1.3,
                      }}
                    >
                      {block.subtitle}
                    </h3>

                    {block.text.split("\n\n").map((paragraph, pi) => (
                      <p
                        key={pi}
                        style={{
                          fontFamily: "var(--font-inter)",
                          fontSize: "14px",
                          fontWeight: 400,
                          lineHeight: 1.8,
                          color: "rgba(250,250,250,0.45)",
                          marginBottom:
                            pi < block.text.split("\n\n").length - 1
                              ? "14px"
                              : "0",
                        }}
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </StaggerChild>
          ))}
        </div>

        {/* Source line */}
        <AnimatedSection delay={0.4}>
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "11px",
              fontWeight: 400,
              color: "rgba(250,250,250,0.20)",
              marginTop: "48px",
            }}
          >
            Fuentes: NREL 2025, IEC 62804, LUMA Energy tariff data,
            BloombergNEF 2025
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
