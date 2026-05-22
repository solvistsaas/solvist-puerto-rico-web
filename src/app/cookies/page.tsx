import Link from "next/link";

export const metadata = {
  title: "Política de cookies — Solvist",
};

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-[#050505] px-5 py-12 md:py-16 text-[#FAFAFA]">
      <div className="mx-auto max-w-2xl">
        {/* Top bar */}
        <div className="mb-10 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div style={{ width: 3, height: 22, backgroundColor: "#EB8C3D", borderRadius: 2 }} />
            <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
              <span style={{ fontFamily: "var(--font-outfit)", fontWeight: 700, fontSize: 18, color: "#FAFAFA" }}>
                SOLVIST
              </span>
              <span style={{ fontSize: 11, color: "rgba(250,250,250,0.40)", marginTop: 2, letterSpacing: "0.08em", fontWeight: 500 }}>
                by Nokvu
              </span>
            </div>
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-[rgba(250,250,250,0.55)] transition-colors hover:text-[#FAFAFA]"
          >
            ← Volver
          </Link>
        </div>

        {/* Header */}
        <div className="mb-12 border-b border-white/[0.07] pb-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#EB8C3D]">
            Legal
          </p>
          <h1 className="mb-3 text-3xl font-bold md:text-4xl" style={{ fontFamily: "var(--font-outfit)" }}>
            Política de cookies
          </h1>
          <p className="text-sm text-[rgba(250,250,250,0.45)]">
            Última actualización: enero 2026
          </p>
        </div>

        <article className="space-y-10 text-sm leading-7 text-[rgba(250,250,250,0.65)]">
          <section>
            <h2 className="mb-3 text-lg font-semibold text-[#FAFAFA]" style={{ fontFamily: "var(--font-outfit)" }}>
              Qué usamos
            </h2>
            <p>
              Este sitio puede usar cookies técnicas necesarias para funcionar y cookies de analítica para medir el uso de la web.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-[#FAFAFA]" style={{ fontFamily: "var(--font-outfit)" }}>
              Analítica
            </h2>
            <p>
              Google Analytics se activa solo cuando aceptas las cookies de analítica mediante el banner de consentimiento.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-[#FAFAFA]" style={{ fontFamily: "var(--font-outfit)" }}>
              Gestión del consentimiento
            </h2>
            <p>
              Puedes aceptar o rechazar las cookies desde el banner que aparece al entrar al sitio. El consentimiento se puede revisar borrando los datos del navegador.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-[#FAFAFA]" style={{ fontFamily: "var(--font-outfit)" }}>
              Contacto
            </h2>
            <p>
              Para cualquier consulta sobre el uso de cookies, escríbenos a{" "}
              <a className="text-[#EB8C3D] hover:underline" href="mailto:hola@nokvu.com">
                hola@nokvu.com
              </a>
              .
            </p>
          </section>
        </article>

        <div className="mt-16 flex gap-6 border-t border-white/[0.07] pt-8 text-xs text-[rgba(250,250,250,0.40)]">
          <Link href="/terminos" className="hover:text-[rgba(250,250,250,0.75)] transition-colors">Términos</Link>
          <Link href="/privacidad" className="hover:text-[rgba(250,250,250,0.75)] transition-colors">Privacidad</Link>
          <Link href="/cookies" className="text-[rgba(250,250,250,0.75)]">Cookies</Link>
        </div>
      </div>
    </main>
  );
}
