"use client";

import { motion } from "framer-motion";

export default function CtaSection() {
  return (
    <section
      id="demo"
      style={{
        background: "linear-gradient(180deg, #050505 0%, #080808 100%)",
        position: "relative",
        overflow: "hidden",
      }}
      className="py-16 md:py-32"
    >
      {/* Dot pattern SVG */}
      <svg
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.06,
          pointerEvents: "none",
        }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="dots-cta" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="#EB8C3D" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots-cta)" />
      </svg>

      {/* Radial glow center */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "700px",
          height: "500px",
          background: "radial-gradient(ellipse, rgba(235,140,61,0.09) 0%, transparent 68%)",
          pointerEvents: "none",
        }}
      />

      {/* Top border line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "10%",
          right: "10%",
          height: 1,
          background: "linear-gradient(90deg, transparent, rgba(235,140,61,0.3), transparent)",
        }}
      />

      <div
        className="max-w-5xl mx-auto px-5 md:px-6"
        style={{ position: "relative", zIndex: 1, wordBreak: "break-word", overflowWrap: "break-word" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center"
          style={{ textAlign: "center" }}
        >
          {/* Eyebrow badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              border: "1px solid rgba(235,140,61,0.22)",
              borderRadius: 999,
              color: "rgba(235,140,61,0.85)",
              fontSize: 12,
              fontWeight: 700,
              fontFamily: "var(--font-inter)",
              padding: "7px 14px",
              marginBottom: 28,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#EB8C3D",
                boxShadow: "0 0 10px rgba(235,140,61,0.5)",
                flexShrink: 0,
              }}
            />
            Demo personalizada · 30 minutos
          </div>

          {/* Headline */}
          <h2
            style={{
              fontFamily: "var(--font-outfit)",
              fontWeight: 700,
              fontSize: "clamp(36px, 5vw, 56px)",
              lineHeight: 1.08,
              letterSpacing: "-0.035em",
              color: "#FAFAFA",
              marginBottom: 20,
              maxWidth: 660,
            }}
          >
            ¿Cuánto vale tu cartera
            <br />
            <span style={{ color: "#EB8C3D" }}>instalada hoy?</span>
          </h2>

          {/* Paragraph */}
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: 16,
              fontWeight: 400,
              lineHeight: 1.72,
              color: "rgba(250,250,250,0.50)",
              maxWidth: 480,
              marginBottom: 40,
            }}
          >
            En 30 minutos te mostramos exactamente cómo Solvist funciona con el
            tipo de instalaciones que tú tienes en Puerto Rico. Sin
            presentaciones genéricas. Con datos reales de tu mercado.
          </p>

          {/* CTA Button */}
          <motion.a
            href="/demo"
            style={{
              backgroundColor: "#EB8C3D",
              color: "#050505",
              borderRadius: 12,
              padding: "16px 40px",
              fontWeight: 700,
              fontSize: 16,
              fontFamily: "var(--font-inter)",
              boxShadow: "0 4px 24px rgba(235,140,61,0.32)",
              textDecoration: "none",
              display: "inline-block",
              marginBottom: 20,
            }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 8px 32px rgba(235,140,61,0.46)",
            }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            Reservar demo gratuita
          </motion.a>

          {/* Trust signals */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "6px 20px",
            }}
          >
            {[
              "Configurado en 4 semanas",
              "Soporte en español",
              "Sin contrato de permanencia",
            ].map((item) => (
              <span
                key={item}
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: 13,
                  fontWeight: 400,
                  color: "rgba(250,250,250,0.38)",
                  display: "flex",
                  alignItems: "center",
                  gap: 5,
                }}
              >
                <span style={{ color: "#EB8C3D", fontWeight: 700 }}>✓</span>
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
