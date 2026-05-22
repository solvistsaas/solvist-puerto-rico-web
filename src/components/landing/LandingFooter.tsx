export default function LandingFooter() {
  return (
    <footer
      className="mt-auto"
      style={{
        backgroundColor: "#050505",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-6 py-8 flex flex-col md:flex-row justify-between gap-6">
        {/* Left side */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div
              style={{
                width: "3px",
                height: "24px",
                backgroundColor: "#EB8C3D",
                borderRadius: "2px",
              }}
            />
            <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
              <span
                style={{
                  fontFamily: "var(--font-outfit)",
                  fontWeight: 700,
                  fontSize: "20px",
                  color: "#FAFAFA",
                }}
              >
                SOLVIST
              </span>
              <span
                style={{
                  fontSize: "11px",
                  color: "rgba(250,250,250,0.40)",
                  marginTop: "2px",
                  letterSpacing: "0.08em",
                  fontWeight: 500,
                }}
              >
                by Nokvu
              </span>
            </div>
          </div>
          <a
            href="mailto:hola@nokvu.com"
            className="text-xs text-[rgba(250,250,250,0.30)] hover:text-[rgba(250,250,250,0.60)] transition-colors duration-200"
          >
            hola@nokvu.com
          </a>
        </div>

        {/* Right side */}
        <div className="flex items-end md:items-center">
          <p className="text-xs text-[rgba(250,250,250,0.20)]">
            © 2026 nokvu ·{" "}
            <a
              href="/privacidad"
              className="hover:text-[rgba(250,250,250,0.45)] transition-colors duration-200"
            >
              Privacidad
            </a>{" "}
            ·{" "}
            <a
              href="/terminos"
              className="hover:text-[rgba(250,250,250,0.45)] transition-colors duration-200"
            >
              Términos
            </a>{" "}
            ·{" "}
            <a
              href="/cookies"
              className="hover:text-[rgba(250,250,250,0.45)] transition-colors duration-200"
            >
              Cookies
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
