"use client";

export function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#050505",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          {/* Left: nokvu logo + info */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div
                style={{
                  width: "3px",
                  height: "20px",
                  backgroundColor: "#EB8C3D",
                  borderRadius: "2px",
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-outfit)",
                  fontWeight: 700,
                  fontSize: "20px",
                  color: "#FAFAFA",
                  letterSpacing: "-0.01em",
                }}
              >
                Nokvu
              </span>
            </div>
            <div
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "12px",
                fontWeight: 400,
                color: "rgba(250,250,250,0.25)",
              }}
            >
              Solvist es un producto de nokvu
            </div>
            <a
              href="mailto:hola@nokvu.com"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "12px",
                fontWeight: 400,
                color: "rgba(250,250,250,0.30)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "rgba(250,250,250,0.6)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(250,250,250,0.30)")
              }
            >
              hola@nokvu.com
            </a>
          </div>

          {/* Right: Legal */}
          <div
            className="flex flex-wrap items-center gap-3 md:gap-4"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "12px",
              fontWeight: 400,
              color: "rgba(250,250,250,0.20)",
            }}
          >
            <span>© 2026 nokvu. Todos los derechos reservados.</span>
            <span>·</span>
            <a
              href="#"
              style={{
                color: "rgba(250,250,250,0.25)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "rgba(250,250,250,0.5)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(250,250,250,0.25)")
              }
            >
              Privacidad
            </a>
            <span>·</span>
            <a
              href="#"
              style={{
                color: "rgba(250,250,250,0.25)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "rgba(250,250,250,0.5)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(250,250,250,0.25)")
              }
            >
              Términos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
