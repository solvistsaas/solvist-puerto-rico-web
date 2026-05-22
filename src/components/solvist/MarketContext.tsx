"use client";

import { AnimatedSection, StaggerChild } from "./AnimatedSection";

const dataCards = [
  {
    value: "57%",
    description: "de instalaciones C&I con deficiencia técnica documentada",
    source: "OIG",
  },
  {
    value: "5.5%/año",
    description:
      "degradación tropical real vs. 0.5% del catálogo del fabricante",
    source: "NREL",
  },
  {
    value: "6–9 años",
    description: "payback actual de baterías (antes 12–18 años en 2021)",
    source: "BloombergNEF",
  },
];

export function MarketContext() {
  return (
    <section style={{ backgroundColor: "#050505" }} className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          {/* Headline */}
          <h2
            style={{
              fontFamily: "var(--font-outfit)",
              fontWeight: 700,
              fontSize: "clamp(24px, 3.5vw, 36px)",
              lineHeight: 1.2,
              letterSpacing: "-0.03em",
              color: "#FAFAFA",
              marginBottom: "48px",
              maxWidth: "640px",
            }}
          >
            Puerto Rico tiene las condiciones perfectas para activar cartera
            dormida.
          </h2>
        </AnimatedSection>

        {/* Data cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {dataCards.map((card, i) => (
            <StaggerChild key={card.value} index={i}>
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
                    fontSize: "36px",
                    fontWeight: 700,
                    color: "#EB8C3D",
                    lineHeight: 1,
                    marginBottom: "14px",
                  }}
                >
                  {card.value}
                </div>

                <p
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "13px",
                    fontWeight: 400,
                    lineHeight: 1.65,
                    color: "rgba(250,250,250,0.45)",
                    flex: 1,
                  }}
                >
                  {card.description}
                </p>

                <div
                  style={{
                    marginTop: "14px",
                    fontSize: "10px",
                    fontWeight: 600,
                    color: "rgba(250,250,250,0.2)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    fontFamily: "var(--font-inter)",
                  }}
                >
                  {card.source}
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
              color: "rgba(250,250,250,0.2)",
              marginTop: "32px",
            }}
          >
            Fuentes: NREL, BloombergNEF, OIG Puerto Rico, LUMA Energy
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
