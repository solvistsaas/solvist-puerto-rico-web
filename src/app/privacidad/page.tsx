import Link from "next/link";

export const metadata = {
  title: "Política de privacidad — Solvist",
};

const sections = [
  { id: "responsable", title: "Responsable del tratamiento" },
  { id: "finalidad", title: "Finalidad" },
  { id: "legitimacion", title: "Legitimación" },
  { id: "conservacion", title: "Conservación" },
  { id: "derechos", title: "Derechos" },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#050505] px-5 py-12 md:py-16 text-[#FAFAFA]">
      <div className="mx-auto max-w-5xl">
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
          <h1 className="mb-3 font-heading text-3xl font-bold md:text-4xl" style={{ fontFamily: "var(--font-outfit)" }}>
            Política de privacidad
          </h1>
          <p className="text-sm text-[rgba(250,250,250,0.45)]">
            Última actualización: enero 2026
          </p>
        </div>

        {/* Content + sidebar */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[200px_1fr]">
          {/* TOC sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-[rgba(250,250,250,0.35)]">
                Contenido
              </p>
              <ul className="space-y-2.5">
                {sections.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="block text-sm text-[rgba(250,250,250,0.60)] transition-colors hover:text-[#EB8C3D]"
                    >
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Body */}
          <article className="space-y-10 text-sm leading-7 text-[rgba(250,250,250,0.65)] max-w-2xl">
            <section id="responsable" className="scroll-mt-24">
              <h2 className="mb-3 text-lg font-semibold text-[#FAFAFA]" style={{ fontFamily: "var(--font-outfit)" }}>
                Responsable del tratamiento
              </h2>
              <p>
                El responsable del tratamiento es Dídac Puig, con correo{" "}
                <a className="text-[#EB8C3D] hover:underline" href="mailto:hola@nokvu.com">
                  hola@nokvu.com
                </a>
                . Los datos se tratarán a través de los formularios de contacto y solicitudes de demo de este sitio.
              </p>
            </section>

            <section id="finalidad" className="scroll-mt-24">
              <h2 className="mb-3 text-lg font-semibold text-[#FAFAFA]" style={{ fontFamily: "var(--font-outfit)" }}>
                Finalidad
              </h2>
              <p>
                Los datos se usan para atender consultas, responder solicitudes comerciales, agendar demos y gestionar la relación profesional.
              </p>
            </section>

            <section id="legitimacion" className="scroll-mt-24">
              <h2 className="mb-3 text-lg font-semibold text-[#FAFAFA]" style={{ fontFamily: "var(--font-outfit)" }}>
                Legitimación
              </h2>
              <p>
                La base legal es el consentimiento del interesado y, cuando corresponda, la ejecución de medidas precontractuales.
              </p>
            </section>

            <section id="conservacion" className="scroll-mt-24">
              <h2 className="mb-3 text-lg font-semibold text-[#FAFAFA]" style={{ fontFamily: "var(--font-outfit)" }}>
                Conservación
              </h2>
              <p>
                Los datos se conservarán durante el tiempo necesario para atender la solicitud y cumplir con las obligaciones legales aplicables.
              </p>
            </section>

            <section id="derechos" className="scroll-mt-24">
              <h2 className="mb-3 text-lg font-semibold text-[#FAFAFA]" style={{ fontFamily: "var(--font-outfit)" }}>
                Derechos
              </h2>
              <p>
                Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a{" "}
                <a className="text-[#EB8C3D] hover:underline" href="mailto:hola@nokvu.com">
                  hola@nokvu.com
                </a>
                . Dirección de contacto: Ramon Turro 248, Barcelona.
              </p>
            </section>
          </article>
        </div>

        {/* Footer nav */}
        <div className="mt-16 flex gap-6 border-t border-white/[0.07] pt-8 text-xs text-[rgba(250,250,250,0.40)]">
          <Link href="/terminos" className="hover:text-[rgba(250,250,250,0.75)] transition-colors">Términos</Link>
          <Link href="/privacidad" className="text-[rgba(250,250,250,0.75)]">Privacidad</Link>
          <Link href="/cookies" className="hover:text-[rgba(250,250,250,0.75)] transition-colors">Cookies</Link>
        </div>
      </div>
    </main>
  );
}
