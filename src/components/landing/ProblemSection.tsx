"use client";

import { motion } from "framer-motion";

const cards = [
  {
    number: "01",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: "Lead a las 10pm. Sin respuesta hasta el día siguiente.",
    description:
      "El cliente escribe cuando puede, no cuando tú trabajas. Si no hay respuesta en menos de 5 minutos, llama al siguiente instalador de la lista.",
    pill: "El primero en responder se lleva el presupuesto",
  },
  {
    number: "02",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    ),
    title: "Clientes sin contacto desde hace años",
    description:
      "Instalaciones de 2019–2022 cuyos sistemas ya no rinden igual. Sus facturas de LUMA han subido. Nadie les ha explicado por qué ni qué pueden hacer.",
    pill: "Tu cartera ya tiene compradores esperando",
  },
  {
    number: "03",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
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

export default function ProblemSection() {
  return (
    <section
      id="problema"
      style={{ backgroundColor: "#F6F4EF", position: "relative", overflow: "hidden" }}
      className="py-16 md:py-32"
    >
      {/* SVG blob decorativo — esquina superior derecha */}
      <svg
        style={{
          position: "absolute",
          top: "-100px",
          right: "-140px",
          width: "600px",
          height: "600px",
          opacity: 0.06,
          pointerEvents: "none",
          zIndex: 0,
        }}
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="blobGrad1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#EB8C3D" />
            <stop offset="100%" stopColor="#EB8C3D" stopOpacity="0" />
          </radialGradient>
        </defs>
        <path
          d="M44.7,-76.4C58.2,-69.2,69.6,-57.8,76.9,-44.3C84.2,-30.8,87.3,-15.4,86.1,-0.7C84.9,14,79.3,28,71.2,40.4C63.1,52.8,52.4,63.5,39.7,70.8C27,78.1,12.3,81.9,-2.8,85.9C-17.9,89.9,-35.8,94.1,-49.2,88.1C-62.6,82.1,-71.5,65.9,-77.5,49.3C-83.5,32.7,-86.6,16.3,-85.8,0.5C-85,-15.4,-80.3,-30.8,-72.1,-43.9C-63.9,-57,-52.2,-67.8,-39,-74.8C-25.8,-81.8,-11.1,-85,-1.1,-83.1C8.9,-81.2,31.2,-83.6,44.7,-76.4Z"
          transform="translate(100 100)"
          fill="url(#blobGrad1)"
        />
      </svg>

      {/* Segundo blob — esquina inferior izquierda */}
      <svg
        style={{
          position: "absolute",
          bottom: "-80px",
          left: "-100px",
          width: "400px",
          height: "400px",
          opacity: 0.04,
          pointerEvents: "none",
          zIndex: 0,
        }}
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M39.5,-67.4C50.8,-60.4,59.4,-49.3,65.7,-36.9C72,-24.5,76,-11.2,75.4,1.8C74.8,14.9,69.7,29.8,61.6,42.3C53.5,54.7,42.5,64.7,29.6,70.3C16.7,75.9,1.9,77.1,-12.4,74.7C-26.8,72.3,-40.6,66.3,-52.1,57C-63.6,47.7,-72.7,35.1,-76.3,21.1C-79.9,7,-78,-8.4,-72.4,-21.9C-66.8,-35.4,-57.5,-47,-46.2,-54.1C-34.9,-61.2,-21.6,-63.8,-8.4,-64.1C4.9,-64.5,28.2,-74.5,39.5,-67.4Z"
          transform="translate(100 100)"
          fill="#EB8C3D"
        />
      </svg>

      <div className="mx-auto max-w-6xl px-5 md:px-8" style={{ position: "relative", zIndex: 1, wordBreak: "break-word", overflowWrap: "break-word" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          style={{ marginBottom: 56 }}
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
              EL PROBLEMA REAL
            </p>
          </div>

          <h2
            style={{
              fontFamily: "var(--font-outfit)",
              fontWeight: 700,
              fontSize: "clamp(30px, 4vw, 40px)",
              lineHeight: 1.12,
              letterSpacing: "-0.03em",
              color: "#0A0A0A",
              marginBottom: 20,
              maxWidth: 560,
            }}
          >
            El instalador que no llama{" "}
            <span style={{ color: "#EB8C3D" }}>
              es el instalador que no vende.
            </span>
          </h2>

          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: 15,
              fontWeight: 400,
              lineHeight: 1.75,
              color: "rgba(10,10,10,0.52)",
              maxWidth: 520,
            }}
          >
            Tus clientes de 2019–2022 tienen sistemas que hoy rinden menos de lo
            que deberían y pagan más de lo que necesitan. Si no los contactas tú,
            los contacta tu competencia.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {cards.map((card, i) => (
            <motion.div
              key={i}
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
                backgroundColor: "#FFFFFF",
                border: "1px solid rgba(10,10,10,0.07)",
                borderRadius: 16,
                padding: "28px 24px",
                display: "flex",
                flexDirection: "column",
                height: "100%",
                boxShadow: "0 2px 16px rgba(0,0,0,0.055), 0 1px 4px rgba(0,0,0,0.04)",
                transition: "box-shadow 0.25s ease, border-color 0.25s ease",
                cursor: "default",
              }}
              onHoverStart={(e) => {
                const el = e.target as HTMLElement;
                el.style.boxShadow = "0 8px 32px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06)";
                el.style.borderColor = "rgba(235,140,61,0.18)";
              }}
              onHoverEnd={(e) => {
                const el = e.target as HTMLElement;
                el.style.boxShadow = "0 2px 16px rgba(0,0,0,0.055), 0 1px 4px rgba(0,0,0,0.04)";
                el.style.borderColor = "rgba(10,10,10,0.07)";
              }}
            >
              {/* Number + Icon row */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
                <span
                  style={{
                    fontFamily: "var(--font-outfit)",
                    fontSize: 13,
                    fontWeight: 700,
                    color: "rgba(10,10,10,0.18)",
                    letterSpacing: "0.04em",
                  }}
                >
                  {card.number}
                </span>
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: 10,
                    backgroundColor: "rgba(235,140,61,0.09)",
                    border: "1px solid rgba(235,140,61,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#EB8C3D",
                  }}
                >
                  {card.icon}
                </div>
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "var(--font-outfit)",
                  fontSize: 17,
                  fontWeight: 700,
                  color: "#0A0A0A",
                  marginBottom: 10,
                  lineHeight: 1.3,
                }}
              >
                {card.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: 14,
                  fontWeight: 400,
                  lineHeight: 1.75,
                  color: "rgba(10,10,10,0.58)",
                  flex: 1,
                  marginBottom: 20,
                }}
              >
                {card.description}
              </p>

              {/* Divider */}
              <div style={{ height: 1, backgroundColor: "rgba(10,10,10,0.06)", marginBottom: 16 }} />

              {/* Pill */}
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "6px 12px",
                  borderRadius: 100,
                  backgroundColor: "rgba(235,140,61,0.08)",
                  border: "1px solid rgba(235,140,61,0.18)",
                  fontSize: 12,
                  fontWeight: 600,
                  color: "#B8701E",
                  width: "fit-content",
                }}
              >
                <span
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: "50%",
                    backgroundColor: "#EB8C3D",
                    flexShrink: 0,
                  }}
                />
                {card.pill}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
