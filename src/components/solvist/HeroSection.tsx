"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export function HeroSection() {
  const mockupWrapperRef = useRef<HTMLDivElement>(null);
  const dashboardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = mockupWrapperRef.current;
    const dashboard = dashboardRef.current;
    if (!wrapper || !dashboard) return;

    const wrapperElement = wrapper;
    const dashboardElement = dashboard;

    wrapperElement.style.perspective = "1000px";
    wrapperElement.style.perspectiveOrigin = "center center";
    wrapperElement.style.transformStyle = "preserve-3d";
    dashboardElement.style.transformOrigin = "center bottom";

    function onScroll() {
      const rect = wrapperElement.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, -rect.top / (rect.height * 0.6)));
      const rotateX = 18 - progress * 18;
      dashboardElement.style.transform = `rotateX(${rotateX}deg)`;
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
      style={{ backgroundColor: "#050505" }}
    >
      {/* Subtle radial gradient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 65% 50%, rgba(235,140,61,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 w-full py-20 lg:py-0">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-8">
          {/* Left Column */}
          <motion.div
            className="w-full lg:w-[42%] flex flex-col gap-7 lg:pr-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Headline — no badge */}
            <h1
              style={{
                fontFamily: "var(--font-outfit)",
                fontWeight: 700,
                fontSize: "clamp(36px, 5vw, 52px)",
                lineHeight: 1.08,
                letterSpacing: "-0.035em",
                color: "#FAFAFA",
              }}
            >
              Ningún lead sin respuesta.
              <br />
              Ningún cliente
              <br />
              <span style={{ color: "#EB8C3D" }}>sin seguimiento.</span>
            </h1>

            {/* Paragraph */}
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "15px",
                fontWeight: 400,
                lineHeight: 1.7,
                color: "rgba(250,250,250,0.45)",
                maxWidth: "400px",
              }}
            >
              Tus clientes te escriben a las 10pm.
              <br />
              Tu equipo los ve al día siguiente.
              <br />
              Para entonces, ya llamaron a otro instalador.
              <br />
              <span style={{ color: "rgba(250,250,250,0.65)" }}>
                Solvist responde, califica y agenda. Automáticamente.
              </span>
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 mt-1">
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
                  transition: "transform 0.2s, box-shadow 0.2s",
                  display: "inline-block",
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
              <a
                href="#plataforma"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "14px",
                  fontWeight: 500,
                  backgroundColor: "transparent",
                  border: "1px solid rgba(255,255,255,0.10)",
                  color: "rgba(250,250,250,0.60)",
                  borderRadius: "10px",
                  padding: "12px 24px",
                  textDecoration: "none",
                  transition: "border-color 0.2s, color 0.2s",
                  display: "inline-block",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor =
                    "rgba(255,255,255,0.25)";
                  e.currentTarget.style.color = "rgba(250,250,250,0.9)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor =
                    "rgba(255,255,255,0.10)";
                  e.currentTarget.style.color = "rgba(250,250,250,0.60)";
                }}
              >
                Ver la plataforma
              </a>
            </div>

            {/* Metrics row */}
            <div
              className="mt-4 pt-5 flex flex-wrap gap-8"
              style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
            >
              <div className="flex flex-col gap-1">
                <span
                  style={{
                    fontFamily: "var(--font-outfit)",
                    fontWeight: 700,
                    fontSize: "20px",
                    color: "#FAFAFA",
                  }}
                >
                  &lt;2 min
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "13px",
                    fontWeight: 500,
                    color: "rgba(250,250,250,0.55)",
                  }}
                >
                  Respuesta automática a leads
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span
                  style={{
                    fontFamily: "var(--font-outfit)",
                    fontWeight: 700,
                    fontSize: "20px",
                    color: "#FAFAFA",
                  }}
                >
                  24/7
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "13px",
                    fontWeight: 500,
                    color: "rgba(250,250,250,0.55)",
                  }}
                >
                  Seguimiento sin intervención manual
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span
                  style={{
                    fontFamily: "var(--font-outfit)",
                    fontWeight: 700,
                    fontSize: "20px",
                    color: "#FAFAFA",
                  }}
                >
                  48h
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "13px",
                    fontWeight: 500,
                    color: "rgba(250,250,250,0.55)",
                  }}
                >
                  Análisis completo de tu cartera
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Mockups */}
          <motion.div
            className="w-full lg:w-[58%] relative flex items-center justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div ref={mockupWrapperRef} className="relative w-full hero-mockup-wrapper" style={{ height: "460px" }}>
              {/* Desktop Mockup */}
              <div
                ref={dashboardRef}
                className="hero-dashboard animate-float"
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: "74%",
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a",
                  border: "1px solid rgba(255,255,255,0.06)",
                  zIndex: 1,
                  transition: "transform 0.15s ease-out, box-shadow 0.15s ease-out",
                }}
              >
                <DesktopMockup />
              </div>

              {/* iPhone */}
              <div
                className="animate-float-phone"
                style={{
                  position: "absolute",
                  right: "-16px",
                  bottom: 0,
                  zIndex: 10,
                  width: "210px",
                }}
              >
                <IPhoneMockup />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function DesktopMockup() {
  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        fontFamily: "var(--font-inter)",
      }}
    >
      {/* Top bar */}
      <div
        className="flex items-center justify-between px-4"
        style={{
          height: "32px",
          backgroundColor: "#F3F4F6",
          borderBottom: "1px solid rgba(10,10,10,0.05)",
        }}
      >
        <div className="flex items-center gap-1.5">
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: "#FF5F57",
            }}
          />
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: "#FEBC2E",
            }}
          />
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: "#28C840",
            }}
          />
        </div>
        <span
          style={{
            fontSize: "10px",
            color: "rgba(10,10,10,0.35)",
            fontWeight: 500,
          }}
        >
          solvist
        </span>
        <div className="flex items-center gap-1.5">
          <div
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              backgroundColor: "#EB8C3D",
            }}
          />
          <span
            style={{
              fontSize: "9px",
              color: "#EB8C3D",
              fontWeight: 600,
            }}
          >
            Live
          </span>
        </div>
      </div>

      {/* Content: Sidebar + Main */}
      <div className="flex" style={{ height: "320px" }}>
        {/* Sidebar */}
        <div
          style={{
            width: "120px",
            backgroundColor: "#0F1117",
            borderRight: "1px solid rgba(255,255,255,0.05)",
            padding: "12px 10px",
            flexShrink: 0,
          }}
        >
          <div className="mb-4">
            <div
              style={{
                fontFamily: "var(--font-outfit)",
                fontSize: "12px",
                fontWeight: 700,
                color: "#FAFAFA",
                lineHeight: 1.2,
              }}
            >
              Solvist
            </div>
            <div
              style={{
                fontSize: "8px",
                color: "rgba(255,255,255,0.3)",
                marginTop: "2px",
              }}
            >
              Asistente Solar
            </div>
          </div>

          {[
            { name: "Conversaciones", active: true },
            { name: "Pendientes", active: false },
            { name: "Propuestas", active: false },
            { name: "Clientes", active: false },
            { name: "Revisiones", active: false },
            { name: "Automatización", active: false },
          ].map((item) => (
            <div
              key={item.name}
              style={{
                fontSize: "10px",
                fontWeight: item.active ? 500 : 400,
                color: item.active ? "#EB8C3D" : "rgba(250,250,250,0.35)",
                padding: "5px 8px",
                borderRadius: "6px",
                marginBottom: "2px",
                backgroundColor: item.active
                  ? "rgba(235,140,61,0.1)"
                  : "transparent",
              }}
            >
              {item.name}
            </div>
          ))}
        </div>

        {/* Main content — white bg */}
        <div style={{ flex: 1, padding: "14px 16px", overflow: "hidden", backgroundColor: "#FFFFFF" }}>
          <div className="mb-3">
            <div
              style={{
                fontFamily: "var(--font-outfit)",
                fontSize: "14px",
                fontWeight: 700,
                color: "#0A0A0A",
              }}
            >
              Conversaciones
            </div>
            <div
              style={{
                fontSize: "10px",
                color: "rgba(10,10,10,0.40)",
                marginTop: "2px",
              }}
            >
              16 activas · hace 7h última
            </div>
          </div>

          {/* Conversation list */}
          <div className="flex flex-col">
            {[
              {
                name: "Carlos Rivera",
                loc: "Bayamón",
                status: "Visita confirmada",
                badge: "✓",
                badgeColor: "#EB8C3D",
                initial: "CR",
              },
              {
                name: "María González",
                loc: "Guaynabo",
                status: "Esperando respuesta",
                badge: "2",
                badgeColor: "#16a34a",
                initial: "MG",
              },
              {
                name: "Roberto López",
                loc: "Ponce",
                status: "Sin respuesta",
                badge: "9h",
                badgeColor: "rgba(10,10,10,0.25)",
                initial: "RL",
              },
              {
                name: "Ana Martínez",
                loc: "Caguas",
                status: "Visita confirmada",
                badge: "✓",
                badgeColor: "#EB8C3D",
                initial: "AM",
              },
              {
                name: "Jorge Torres",
                loc: "Mayagüez",
                status: "Esperando factura",
                badge: "11h",
                badgeColor: "rgba(10,10,10,0.25)",
                initial: "JT",
              },
            ].map((conv) => (
              <div
                key={conv.name}
                className="flex items-center gap-2.5"
                style={{
                  padding: "7px 8px",
                  borderBottom: "1px solid rgba(10,10,10,0.05)",
                }}
              >
                <div
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    backgroundColor: "#F3F4F6",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "9px",
                    fontWeight: 600,
                    color: "rgba(10,10,10,0.50)",
                    flexShrink: 0,
                  }}
                >
                  {conv.initial}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      fontSize: "11px",
                      fontWeight: 600,
                      color: "#0A0A0A",
                      lineHeight: 1.3,
                    }}
                  >
                    {conv.name}
                  </div>
                  <div
                    className="flex items-center gap-1"
                    style={{ marginTop: "1px" }}
                  >
                    <div
                      style={{
                        width: "4px",
                        height: "4px",
                        borderRadius: "50%",
                        backgroundColor:
                          conv.badgeColor === "#EB8C3D"
                            ? "#EB8C3D"
                            : conv.badgeColor === "#16a34a"
                              ? "#16a34a"
                              : "rgba(10,10,10,0.15)",
                      }}
                    />
                    <span
                      style={{
                        fontSize: "9px",
                        color: "rgba(10,10,10,0.50)",
                      }}
                    >
                      {conv.loc} · {conv.status}
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    fontSize: "9px",
                    fontWeight: 600,
                    color: conv.badgeColor,
                    padding: "2px 6px",
                    borderRadius: "4px",
                    backgroundColor:
                      conv.badgeColor === "#EB8C3D"
                        ? "rgba(235,140,61,0.10)"
                        : conv.badgeColor === "#16a34a"
                          ? "rgba(34,197,94,0.10)"
                          : "transparent",
                    flexShrink: 0,
                  }}
                >
                  {conv.badge}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function IPhoneMockup() {
  return (
    <div>
      {/* Device body */}
      <div
        style={{
          background: "#1C1C1E",
          borderRadius: "50px",
          padding: "11px",
          border: "1px solid rgba(255,255,255,0.13)",
          boxShadow:
            "inset 0 0 0 1px rgba(255,255,255,0.05), 0 40px 100px rgba(0,0,0,0.85), 0 8px 24px rgba(0,0,0,0.50)",
          position: "relative",
        }}
      >
        {/* Physical buttons */}
        <div
          style={{
            position: "absolute",
            left: "-3px",
            top: "56px",
            width: "3px",
            height: "22px",
            background: "#3a3a3c",
            borderRadius: "2px 0 0 2px",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: "-3px",
            top: "90px",
            width: "3px",
            height: "38px",
            background: "#3a3a3c",
            borderRadius: "2px 0 0 2px",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: "-3px",
            top: "140px",
            width: "3px",
            height: "38px",
            background: "#3a3a3c",
            borderRadius: "2px 0 0 2px",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: "-3px",
            top: "108px",
            width: "3px",
            height: "62px",
            background: "#3a3a3c",
            borderRadius: "0 2px 2px 0",
          }}
        />

        {/* Screen */}
        <div
          style={{
            background: "#ECE5DD",
            borderRadius: "40px",
            overflow: "hidden",
          }}
        >
          {/* Dynamic Island */}
          <div
            style={{
              width: "86px",
              height: "28px",
              background: "#1C1C1E",
              borderRadius: "0 0 18px 18px",
              margin: "0 auto",
            }}
          />

          {/* WhatsApp Header */}
          <div
            style={{
              background: "#075E54",
              padding: "10px 14px 11px",
              display: "flex",
              alignItems: "center",
              gap: "9px",
            }}
          >
            <span
              style={{
                color: "rgba(255,255,255,0.55)",
                fontSize: "22px",
                lineHeight: 1,
                marginRight: "2px",
              }}
            >
              ‹
            </span>
            <div
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "11px",
                fontWeight: 700,
                color: "white",
                flexShrink: 0,
                fontFamily: "var(--font-outfit)",
              }}
            >
              N
            </div>
            <div>
              <div
                style={{
                  fontSize: "12.5px",
                  fontWeight: 600,
                  color: "white",
                  lineHeight: 1.2,
                  fontFamily: "var(--font-outfit)",
                }}
              >
                Solvist IA
              </div>
              <div
                style={{
                  fontSize: "10px",
                  color: "rgba(255,255,255,0.60)",
                  fontFamily: "var(--font-inter)",
                }}
              >
                En línea
              </div>
            </div>
          </div>

          {/* Messages */}
          <div
            style={{
              background: "#ECE5DD",
              padding: "10px 10px 6px",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              minHeight: "195px",
            }}
          >
            {/* Incoming bubble 1 */}
            <div
              style={{
                background: "white",
                borderRadius: "2px 10px 10px 10px",
                padding: "9px 11px",
                maxWidth: "91%",
                fontSize: "10px",
                lineHeight: 1.55,
                color: "#1a1a1a",
                boxShadow: "0 1px 2px rgba(0,0,0,0.08)",
                fontFamily: "var(--font-inter)",
              }}
            >
              🔔 <strong style={{ color: "#EB8C3D" }}>Lead nuevo</strong>
              <br />
              Jorge Torres · Bayamón
              <br />
              Interesado en batería
              <div
                style={{
                  fontSize: "8px",
                  color: "rgba(0,0,0,0.30)",
                  marginTop: "3px",
                }}
              >
                05:55 a.m.
              </div>
            </div>

            {/* Outgoing bubble */}
            <div
              style={{
                background: "#D9FDD3",
                borderRadius: "10px 10px 2px 10px",
                padding: "9px 11px",
                maxWidth: "91%",
                alignSelf: "flex-end",
                fontSize: "10px",
                lineHeight: 1.55,
                color: "#1a1a1a",
                fontFamily: "var(--font-inter)",
              }}
            >
              Visita agendada jueves 10AM ✓
              <div
                style={{
                  fontSize: "8px",
                  color: "rgba(0,0,0,0.30)",
                  textAlign: "right",
                  marginTop: "3px",
                }}
              >
                05:56 ✓✓
              </div>
            </div>

            {/* Incoming bubble 2 */}
            <div
              style={{
                background: "white",
                borderRadius: "2px 10px 10px 10px",
                padding: "9px 11px",
                maxWidth: "91%",
                fontSize: "10px",
                lineHeight: 1.55,
                color: "#1a1a1a",
                boxShadow: "0 1px 2px rgba(0,0,0,0.08)",
                fontFamily: "var(--font-inter)",
              }}
            >
              ✅ Recordatorio enviado al cliente.
              <div
                style={{
                  fontSize: "8px",
                  color: "rgba(0,0,0,0.30)",
                  marginTop: "3px",
                }}
              >
                06:01 a.m.
              </div>
            </div>
          </div>

          {/* Input bar */}
          <div
            style={{
              background: "#F0F0F0",
              padding: "8px 13px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "10px",
              color: "rgba(0,0,0,0.30)",
              fontFamily: "var(--font-inter)",
            }}
          >
            <span style={{ flex: 1 }}>Escribe un mensaje...</span>
            <span style={{ fontSize: "15px" }}>🎤</span>
          </div>

          {/* Home indicator */}
          <div
            style={{
              background: "#ECE5DD",
              padding: "7px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "88px",
                height: "4px",
                background: "rgba(0,0,0,0.18)",
                borderRadius: "3px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
