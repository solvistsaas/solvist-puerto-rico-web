'use client'
import { motion } from 'framer-motion'

const rows = [
  {
    metric: 'Tiempo de respuesta a un lead',
    without: '3 h o más',
    with: '< 2 minutos',
  },
  {
    metric: 'Leads atendidos fuera de horario',
    without: 'Se pierden',
    with: '24 / 7 sin descanso',
  },
  {
    metric: 'Cualificación del lead',
    without: 'Manual, inconsistente',
    with: 'Automática, con scoring',
  },
  {
    metric: 'Análisis de cartera de clientes',
    without: 'No se hace',
    with: 'Auditoría completa en 48h',
  },
  {
    metric: 'Seguimiento de propuestas',
    without: 'Recordar tú',
    with: 'Automático hasta cierre',
  },
  {
    metric: 'Coste mensual',
    without: 'Comercial + horas extra',
    with: 'Una fracción del salario',
  },
]

export default function ComparisonSection() {
  return (
    <section
      style={{
        background: 'linear-gradient(180deg, #070707 0%, #050505 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
      className="py-20 md:py-28"
    >
      {/* Grid background */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(90deg, rgba(255,255,255,0.030) 1px, transparent 1px), linear-gradient(180deg, rgba(255,255,255,0.022) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
          maskImage:
            'radial-gradient(ellipse at center, rgba(0,0,0,0.5), transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-5 md:px-6">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}
        >
          <span style={{ width: '3px', height: '16px', background: '#EB8C3D', borderRadius: '2px' }} />
          <span
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '11px',
              fontWeight: 700,
              color: '#EB8C3D',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
            }}
          >
            EL CAMBIO
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            fontFamily: 'var(--font-outfit)',
            fontWeight: 700,
            fontSize: 'clamp(28px, 4vw, 40px)',
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            color: '#FAFAFA',
            maxWidth: '720px',
            marginBottom: '14px',
          }}
        >
          La diferencia entre{' '}
          <span style={{ color: 'rgba(250,250,250,0.4)' }}>perder leads</span> y{' '}
          <span style={{ color: '#EB8C3D' }}>cerrar ventas</span>.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.15 }}
          style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '15px',
            lineHeight: 1.7,
            color: 'rgba(250,250,250,0.55)',
            maxWidth: '620px',
            marginBottom: '40px',
          }}
        >
          Comparado con lo que pasa hoy en la mayoría de empresas instaladoras
          de Puerto Rico.
        </motion.p>

        {/* Comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            background: 'rgba(255,255,255,0.025)',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: '16px',
            overflow: 'hidden',
            backdropFilter: 'blur(4px)',
          }}
        >
          {/* Header row */}
          <div
            className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr_1fr]"
            style={{
              borderBottom: '1px solid rgba(255,255,255,0.07)',
              background: 'rgba(255,255,255,0.02)',
            }}
          >
            <div
              style={{
                padding: '16px 20px',
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'rgba(250,250,250,0.38)',
              }}
            >
              Métrica
            </div>
            <div
              style={{
                padding: '16px 20px',
                fontSize: '12px',
                fontWeight: 700,
                color: 'rgba(250,250,250,0.55)',
                borderLeft: '1px solid rgba(255,255,255,0.05)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'rgba(250,250,250,0.30)' }} />
              Sin Solvist
            </div>
            <div
              style={{
                padding: '16px 20px',
                fontSize: '12px',
                fontWeight: 700,
                color: '#EB8C3D',
                borderLeft: '1px solid rgba(235,140,61,0.18)',
                background: 'rgba(235,140,61,0.04)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#EB8C3D', boxShadow: '0 0 8px #EB8C3D' }} />
              Con Solvist
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div
              key={row.metric}
              className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr_1fr]"
              style={{
                borderBottom: i < rows.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
              }}
            >
              <div
                style={{
                  padding: '18px 20px',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: 'rgba(250,250,250,0.78)',
                  fontFamily: 'var(--font-inter)',
                }}
              >
                {row.metric}
              </div>
              <div
                style={{
                  padding: '18px 20px',
                  fontSize: '13.5px',
                  color: 'rgba(250,250,250,0.45)',
                  borderLeft: '1px solid rgba(255,255,255,0.04)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <span style={{ color: 'rgba(250,250,250,0.30)', fontSize: '13px' }}>✕</span>
                {row.without}
              </div>
              <div
                style={{
                  padding: '18px 20px',
                  fontSize: '13.5px',
                  fontWeight: 500,
                  color: '#FAFAFA',
                  borderLeft: '1px solid rgba(235,140,61,0.10)',
                  background: 'rgba(235,140,61,0.025)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <span style={{ color: '#EB8C3D', fontSize: '13px', fontWeight: 700 }}>✓</span>
                {row.with}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Trust line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{
            marginTop: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            fontSize: '13px',
            color: 'rgba(250,250,250,0.50)',
            fontFamily: 'var(--font-inter)',
            flexWrap: 'wrap',
            textAlign: 'center',
          }}
        >
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              background: 'rgba(235,140,61,0.07)',
              border: '1px solid rgba(235,140,61,0.18)',
              borderRadius: '999px',
              color: '#EB8C3D',
              fontSize: '12px',
              fontWeight: 600,
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            Construido con +10 instaladores en Puerto Rico
          </span>
        </motion.div>
      </div>
    </section>
  )
}
