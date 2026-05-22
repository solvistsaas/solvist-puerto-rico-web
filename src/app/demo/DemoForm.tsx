"use client";

import { useState, useEffect, useRef } from "react";
import { supabase } from "@/lib/supabase";

type Field = {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  required: boolean;
  half?: boolean;
};

const fields: Field[] = [
  { name: "nombre", label: "Nombre", type: "text", placeholder: "Carlos", required: true, half: true },
  { name: "apellidos", label: "Apellidos", type: "text", placeholder: "Rivera", required: true, half: true },
  { name: "email", label: "Correo electrónico", type: "email", placeholder: "carlos@instaladora.com", required: true },
  { name: "telefono", label: "Teléfono", type: "tel", placeholder: "+1 787 555 0000", required: true },
  { name: "empresa", label: "Nombre de la empresa", type: "text", placeholder: "Instalaciones Rivera Solar", required: true },
  { name: "instalaciones", label: "¿Cuántas instalaciones tiene tu cartera?", type: "text", placeholder: "Ej. 50–200 instalaciones", required: false },
];

const inputStyle = {
  width: "100%",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.12)",
  borderRadius: 10,
  padding: "12px 14px",
  fontSize: 14,
  color: "#FAFAFA",
  fontFamily: "var(--font-inter)",
  outline: "none",
  transition: "border-color 0.2s ease",
};

const labelStyle = {
  display: "block",
  fontSize: 12,
  fontWeight: 600,
  color: "rgba(250,250,250,0.65)",
  fontFamily: "var(--font-inter)",
  marginBottom: 6,
  letterSpacing: "0.02em",
};

// Extend Window type for Cal.com embed
declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Cal?: any;
  }
}

export default function DemoForm() {
  const [form, setForm] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const calTriggerRef = useRef<HTMLButtonElement>(null);

  // Load Cal.com embed script
  useEffect(() => {
    if (document.getElementById("cal-embed-script")) return;

    const script = document.createElement("script");
    script.id = "cal-embed-script";
    script.innerHTML = `
      (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
      Cal("init", "30min", { origin: "https://app.cal.com" });
      Cal.ns["30min"]("ui", { hideEventTypeDetails: false, layout: "month_view" });
    `;
    document.head.appendChild(script);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    fields.forEach((f) => {
      if (f.required && !form[f.name]?.trim()) {
        newErrors[f.name] = "Campo obligatorio";
      }
    });
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Introduce un correo válido";
    }
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setLoading(true);

    try {
      // Guardar lead en Supabase
      const { error } = await supabase.from("leads").insert({
        nombre: form.nombre,
        email: form.email,
        empresa: form.empresa,
        telefono: form.telefono,
      });

      if (error) {
        console.error("Error guardando lead:", error);
      }

      // Actualizar el data-cal-link con los datos pre-rellenados y abrir el popup
      const fullName = `${form.nombre} ${form.apellidos}`.trim();
      const calLink = `didac-puig-wywnbm/30min?name=${encodeURIComponent(fullName)}&email=${encodeURIComponent(form.email)}`;

      if (calTriggerRef.current) {
        calTriggerRef.current.setAttribute("data-cal-link", calLink);
        calTriggerRef.current.click();
      }
    } catch (err) {
      console.error("Unexpected error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.10)",
        borderRadius: 20,
        padding: "32px 28px",
      }}
    >
      {/* Hidden Cal.com trigger button */}
      <button
        ref={calTriggerRef}
        data-cal-namespace="30min"
        data-cal-link="didac-puig-wywnbm/30min"
        data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true","redirectUrl":"https://solvist.io/demo/gracias"}'
        style={{ display: "none" }}
        aria-hidden="true"
        tabIndex={-1}
      />

      <h2
        style={{
          fontFamily: "var(--font-outfit)",
          fontSize: 20,
          fontWeight: 700,
          color: "#FAFAFA",
          marginBottom: 6,
        }}
      >
        Cuéntanos sobre tu empresa
      </h2>
      <p
        style={{
          fontFamily: "var(--font-inter)",
          fontSize: 13,
          color: "rgba(250,250,250,0.45)",
          marginBottom: 24,
          lineHeight: 1.6,
        }}
      >
        Rellena el formulario y selecciona un horario en el siguiente paso.
      </p>

      <form onSubmit={handleSubmit} noValidate>
        {/* Grid para campos half */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
          {fields.filter((f) => f.half).map((field) => (
            <div key={field.name}>
              <label htmlFor={field.name} style={labelStyle}>
                {field.label} {field.required && <span style={{ color: "#EB8C3D" }}>*</span>}
              </label>
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                value={form[field.name] || ""}
                onChange={handleChange}
                style={{
                  ...inputStyle,
                  borderColor: errors[field.name] ? "rgba(239,68,68,0.6)" : "rgba(255,255,255,0.12)",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = errors[field.name]
                    ? "rgba(239,68,68,0.8)"
                    : "rgba(235,140,61,0.5)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = errors[field.name]
                    ? "rgba(239,68,68,0.6)"
                    : "rgba(255,255,255,0.12)";
                }}
              />
              {errors[field.name] && (
                <p style={{ fontSize: 11, color: "rgba(239,68,68,0.9)", marginTop: 4, fontFamily: "var(--font-inter)" }}>
                  {errors[field.name]}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Campos completos */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 16 }}>
          {fields.filter((f) => !f.half).map((field) => (
            <div key={field.name}>
              <label htmlFor={field.name} style={labelStyle}>
                {field.label} {field.required && <span style={{ color: "#EB8C3D" }}>*</span>}
              </label>
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                value={form[field.name] || ""}
                onChange={handleChange}
                style={{
                  ...inputStyle,
                  borderColor: errors[field.name] ? "rgba(239,68,68,0.6)" : "rgba(255,255,255,0.12)",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = errors[field.name]
                    ? "rgba(239,68,68,0.8)"
                    : "rgba(235,140,61,0.5)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = errors[field.name]
                    ? "rgba(239,68,68,0.6)"
                    : "rgba(255,255,255,0.12)";
                }}
              />
              {errors[field.name] && (
                <p style={{ fontSize: 11, color: "rgba(239,68,68,0.9)", marginTop: 4, fontFamily: "var(--font-inter)" }}>
                  {errors[field.name]}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Privacy note */}
        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: 11,
            color: "rgba(250,250,250,0.32)",
            lineHeight: 1.65,
            marginTop: 20,
            marginBottom: 20,
          }}
        >
          Al enviar este formulario confirmas que has leído nuestra{" "}
          <a href="/privacidad" style={{ color: "rgba(235,140,61,0.7)", textDecoration: "underline" }}>
            política de privacidad
          </a>{" "}
          y aceptas ser contactado por Solvist.
        </p>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            backgroundColor: loading ? "rgba(235,140,61,0.7)" : "#EB8C3D",
            color: "#050505",
            borderRadius: 12,
            padding: "15px 24px",
            fontWeight: 700,
            fontSize: 15,
            fontFamily: "var(--font-inter)",
            border: "none",
            cursor: loading ? "not-allowed" : "pointer",
            boxShadow: "0 4px 20px rgba(235,140,61,0.28)",
            transition: "all 0.2s ease",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
          }}
        >
          {loading ? (
            <>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ animation: "spin 1s linear infinite" }}>
                <path d="M21 12a9 9 0 1 1-6.219-8.56" />
              </svg>
              Guardando...
            </>
          ) : (
            <>
              Siguiente paso: Seleccionar horario
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </>
          )}
        </button>
      </form>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        input::placeholder {
          color: rgba(250,250,250,0.25);
        }
      `}</style>
    </div>
  );
}
