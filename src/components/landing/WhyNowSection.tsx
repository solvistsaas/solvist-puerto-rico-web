"use client";

import { motion } from "framer-motion";

const blocks = [
  {
    stat: "4–7 años",
    statLabel: "Payback real",
    title: "Baterías en Puerto Rico",
    text: "Las baterías LFP bajaron de $800 a $400/kWh. Con el ITC al 30%, el coste neto es de ~$234/kWh. El payback real es de 4 a 7 años. Tu competencia ya lo usa como argumento de venta.",
    detail: "Clientes en tarifa GSP con 50 kVA: el cargo de demanda LUMA es de ~$400/mes. Se elimina con una batería correctamente dimensionada.",
    source: "NREL 2025",
  },
  {
    stat: "5.5%",
    statLabel: "Degradación anual",
    title: "Módulos en clima tropical",
    text: "La ley de Arrhenius demuestra que cada +10°C duplica la degradación. En Puerto Rico, los módulos alcanzan 65–75°C. Un sistema de 50 kWp instalado en 2019 produce hoy como 37 kWp.",
    detail: "Tu cliente lleva años perdiendo producción sin que nadie le explique por qué su factura de LUMA no baja como esperaba.",
    source: "IEC 62804 + Arrhenius",
  },
  {
    stat: "3–15",
    statLabel: "Eventos/semana",
    title: "Inestabilidad de la red LUMA",
    text: "Bayamón, Caguas y Trujillo Alto registran de 3 a 15 eventos de tensión por semana. Los inversores se desconectan por protección. La batería convierte una queja en una venta.",
    detail: "El cliente llama diciendo que el sistema no funciona. En realidad es una desconexión de protección. Una batería elimina el problema.",
    source: "LUMA Energy Tariff Data",
  },
];

export default function WhyNowSection() {
  return (
    <section
      id="por-que-ahora"
      style={{
        background: "linear-gradient(180deg, #0A0A0A 0%, #080808 100%)",
        position: "relative",
        overflow: "hidden",
      }}
      className="py-16 md:py-32"
    >
      {/* Subtle grid background */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px), linear-gradient(180deg, rgba(255,255,255,0.015) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.35) 25%, rgba(0,0,0,0.35) 75%, transparent 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Radial glow — top right */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-5%",
          right: "-5%",
          width: "480px",
          height: "480px",
          background: "radial-gradient(ellipse, rgba(235,140,61,0.055) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="max-w-6xl mx-auto px-5 md:px-6" style={{ position: "relative", zIndex: 1, wordBreak: "break-word", overflowWrap: "break-word" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          style={{ maxWidth: 580, marginBottom: 56 }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 18 }}>
            <div
              style={{
                width: 3,
                height: 16,
                backgroundColor: "#EB8C3D",
                borderRadius: 2,
              }}
            />
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: 11,
                fontWeight: 700,
                color: "#EB8C3D",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                margin: 0,
              }}
            >
              POR QUÉ AHORA EN PUERTO RICO
            </p>
          </div>

          <h2
            style={{
              fontFamily: "var(--font-outfit)",
              fontWeight: 700,
              fontSize: "clamp(28px, 4.5vw, 40px)",
              lineHeight: 1.12,
              letterSpacing: "-0.03em",
              color: "#FAFAFA",
              marginBottom: 18,
            }}
          >
            El mercado cambió.{" "}
            <span style={{ color: "#EB8C3D" }}>
              Los instaladores que actúen primero, ganan.
            </span>
          </h2>

          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: 15,
              fontWeight: 400,
              lineHeight: 1.75,
              color: "rgba(250,250,250,0.46)",
            }}
          >
            Puerto Rico tiene condiciones únicas que hacen que las instalaciones
            de 2019–2022 representen hoy una oportunidad que no existía hace
            cuatro años. Aquí está la evidencia.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {blocks.map((block, i) => (
            <motion.div
              key={block.stat}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.55,
                ease: "easeOut",
                delay: i * 0.12,
              }}
              whileHover={{ y: -4 }}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 16,
                padding: "26px 22px 22px",
                display: "flex",
                flexDirection: "column",
                transition: "border-color 0.25s ease, background 0.25s ease",
              }}
              onHoverStart={(e) => {
                const el = e.target as HTMLElement;
                el.style.borderColor = "rgba(235,140,61,0.20)";
                el.style.background = "rgba(255,255,255,0.045)";
              }}
              onHoverEnd={(e) => {
                const el = e.target as HTMLElement;
                el.style.borderColor = "rgba(255,255,255,0.08)";
                el.style.background = "rgba(255,255,255,0.03)";
              }}
            >
              {/* Stat badge */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 20,
                  padding: "8px 14px",
                  borderRadius: 10,
                  background: "rgba(235,140,61,0.08)",
                  border: "1px solid rgba(235,140,61,0.16)",
                  width: "fit-content",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-outfit)",
                    fontSize: 22,
                    fontWeight: 700,
                    color: "#EB8C3D",
                    letterSpacing: "-0.02em",
                    lineHeight: 1,
                  }}
                >
                  {block.stat}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: 12,
                    fontWeight: 500,
                    color: "rgba(235,140,61,0.72)",
                    lineHeight: 1.2,
                  }}
                >
                  {block.statLabel}
                </span>
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "var(--font-outfit)",
                  fontSize: 18,
                  fontWeight: 700,
                  color: "#FAFAFA",
                  marginBottom: 10,
                  lineHeight: 1.28,
                  letterSpacing: "-0.01em",
                }}
              >
                {block.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: 14,
                  fontWeight: 400,
                  lineHeight: 1.75,
                  color: "rgba(250,250,250,0.58)",
                  marginBottom: 16,
                  flex: 1,
                }}
              >
                {block.text}
              </p>

              {/* Insight box */}
              <div
                style={{
                  background: "rgba(235,140,61,0.05)",
                  border: "1px solid rgba(235,140,61,0.12)",
                  borderRadius: 10,
                  padding: "12px 14px",
                  marginBottom: 16,
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: 13,
                    color: "rgba(250,250,250,0.65)",
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  💡 {block.detail}
                </p>
              </div>

              {/* Source */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  paddingTop: 12,
                  borderTop: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgba(235,140,61,0.48)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ flexShrink: 0 }}
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
                <span
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: 12,
                    fontWeight: 500,
                    color: "rgba(250,250,250,0.42)",
                  }}
                >
                  Fuente:
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: 12,
                    fontWeight: 600,
                    color: "rgba(250,250,250,0.65)",
                  }}
                >
                  {block.source}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global sources line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          style={{
            marginTop: 32,
            paddingTop: 20,
            borderTop: "1px solid rgba(255,255,255,0.07)",
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "4px 14px",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: 12,
              fontWeight: 500,
              color: "rgba(250,250,250,0.38)",
            }}
          >
            Fuentes:
          </span>
          {["NREL 2025", "IEC 62804", "LUMA Energy Tariff Data", "BloombergNEF 2025"].map((s, i) => (
            <span
              key={s}
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: 12,
                fontWeight: 600,
                color: "rgba(250,250,250,0.58)",
              }}
            >
              {s}{i < 3 ? " ·" : ""}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
