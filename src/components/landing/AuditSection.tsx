"use client";

import { motion } from "framer-motion";

const cards = [
  {
    number: "01",
    title: "Señales comerciales detectadas",
    description:
      "Solvist identifica patrones de interés, urgencia y necesidad a partir de las conversaciones y respuestas de tus clientes.",
  },
  {
    number: "02",
    title: "Oportunidades priorizadas",
    description:
      "Cada lead, revisión o propuesta queda ordenada por impacto comercial, con el contexto que necesita tu equipo para actuar primero.",
  },
  {
    number: "03",
    title: "Siguiente acción clara",
    description:
      "La oportunidad no se queda en un dashboard: Solvist propone el mensaje, el canal y el próximo paso para mover al cliente.",
  },
];

export default function AuditSection() {
  return (
    <section
      id="audit"
      style={{
        background: "linear-gradient(180deg, #060606 0%, #050505 100%)",
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
            "linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(180deg, rgba(255,255,255,0.018) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.4) 30%, rgba(0,0,0,0.4) 70%, transparent 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Radial glow center-left */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "30%",
          left: "-10%",
          width: "500px",
          height: "500px",
          background: "radial-gradient(ellipse, rgba(235,140,61,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="max-w-6xl mx-auto px-5 md:px-8" style={{ position: "relative", zIndex: 1, wordBreak: "break-word", overflowWrap: "break-word" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          style={{ marginBottom: 56 }}
        >
          {/* Hexagon icon */}
          <div style={{ marginBottom: 24 }}>
            <svg
              width="44"
              height="44"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24 4L44 16V32L24 44L4 32V16L24 4Z"
                stroke="#EB8C3D"
                strokeWidth="1.5"
                fill="rgba(235,140,61,0.07)"
              />
              <path
                d="M24 12L36 19V33L24 40L12 33V19L24 12Z"
                stroke="#EB8C3D"
                strokeWidth="1"
                strokeOpacity="0.35"
                fill="rgba(235,140,61,0.03)"
              />
              <circle cx="24" cy="24" r="4" fill="#EB8C3D" fillOpacity="0.55" />
            </svg>
          </div>

          {/* Label */}
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
              INTELIGENCIA COMERCIAL
            </p>
          </div>

          <h2
            style={{
              fontFamily: "var(--font-outfit)",
              fontWeight: 700,
              fontSize: "clamp(28px, 4vw, 42px)",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "#FAFAFA",
              marginBottom: 20,
              maxWidth: 600,
            }}
          >
            Detectamos qué clientes{" "}
            <span style={{ color: "#EB8C3D" }}>
              tienen una oportunidad hoy.
            </span>
          </h2>

          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: 15,
              fontWeight: 400,
              lineHeight: 1.75,
              color: "rgba(250,250,250,0.44)",
              maxWidth: 480,
            }}
          >
            Una vez el canal responde y hace seguimiento, Solvist empieza a
            convertir señales en acciones: quién necesita batería, quién debe
            recibir una propuesta y qué conversación debe atender primero tu
            equipo.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.55,
                ease: "easeOut",
                delay: i * 0.12,
              }}
              whileHover={{ y: -4 }}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 16,
                padding: "28px 24px",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                overflow: "hidden",
                transition: "border-color 0.25s ease, background 0.25s ease",
              }}
              onHoverStart={(e) => {
                const el = e.target as HTMLElement;
                el.style.borderColor = "rgba(235,140,61,0.22)";
                el.style.background = "rgba(255,255,255,0.055)";
              }}
              onHoverEnd={(e) => {
                const el = e.target as HTMLElement;
                el.style.borderColor = "rgba(255,255,255,0.08)";
                el.style.background = "rgba(255,255,255,0.04)";
              }}
            >
              {/* Top accent line on hover — always render, controlled via opacity */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 2,
                  background: "linear-gradient(90deg, transparent, rgba(235,140,61,0.5), transparent)",
                  opacity: 0,
                  transition: "opacity 0.25s ease",
                }}
              />

              {/* Number */}
              <p
                style={{
                  fontFamily: "var(--font-outfit)",
                  fontSize: 48,
                  fontWeight: 700,
                  color: "#EB8C3D",
                  lineHeight: 1,
                  marginBottom: 20,
                  letterSpacing: "-0.04em",
                  opacity: 0.85,
                }}
              >
                {card.number}
              </p>

              {/* Divider */}
              <div
                style={{
                  height: 1,
                  background: "rgba(255,255,255,0.07)",
                  marginBottom: 20,
                }}
              />

              <h3
                style={{
                  fontFamily: "var(--font-outfit)",
                  fontSize: 18,
                  fontWeight: 700,
                  color: "#FFFFFF",
                  marginBottom: 12,
                  lineHeight: 1.25,
                }}
              >
                {card.title}
              </h3>

              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: 14,
                  fontWeight: 400,
                  lineHeight: 1.75,
                  color: "rgba(250,250,250,0.52)",
                  flex: 1,
                }}
              >
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.3 }}
          className="flex flex-col items-center"
          style={{ marginTop: 60 }}
        >
          <motion.a
            href="/demo"
            style={{
              backgroundColor: "#EB8C3D",
              color: "#050505",
              borderRadius: 10,
              padding: "13px 28px",
              fontWeight: 600,
              fontSize: 14,
              fontFamily: "var(--font-inter)",
              boxShadow: "0 4px 20px rgba(235,140,61,0.28)",
              textDecoration: "none",
              display: "inline-block",
            }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 6px 24px rgba(235,140,61,0.42)",
            }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            Reservar demo
          </motion.a>
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: 12,
              fontWeight: 400,
              color: "rgba(250,250,250,0.28)",
              marginTop: 12,
              textAlign: "center",
            }}
          >
            Sin compromiso. Sin contrato previo.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
