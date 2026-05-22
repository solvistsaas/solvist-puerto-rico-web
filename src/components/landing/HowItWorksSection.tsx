'use client'
import { motion } from 'framer-motion'

const steps = [
  {
    num: '01',
    title: 'Conectas tus canales',
    description:
      'WhatsApp Business, email, formularios web y tu CRM. 15 minutos de setup, sin código ni equipo técnico.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Marta IA aprende tu negocio',
    description:
      'Tu catálogo, precios, zonas de servicio, calendario y tono de voz. En 48h está lista para hablar como tu mejor comercial.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 0 1 4 4v1a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4z" />
        <path d="M6 20a6 6 0 0 1 12 0" />
        <circle cx="12" cy="6" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Responde, califica y agenda',
    description:
      'Conversa con leads en <2 min, descarta los no cualificados, agenda visitas en tu calendario y envía recordatorios.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Tú cierras la venta',
    description:
      'Llegas a la visita con un dossier completo: necesidad, presupuesto orientativo, scoring del lead e historial de la conversación.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
]

export default function HowItWorksSection() {
  return (
    <section
      id="como-funciona"
      style={{
        background: 'linear-gradient(180deg, #050505 0%, #070707 100%)',
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
            'radial-gradient(ellipse at center, rgba(0,0,0,0.6), transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      {/* Radial glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-100px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '700px',
          height: '500px',
          background:
            'radial-gradient(ellipse at center, rgba(235,140,61,0.08), transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 md:px-6">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '16px',
          }}
        >
          <span
            style={{
              width: '3px',
              height: '16px',
              background: '#EB8C3D',
              borderRadius: '2px',
            }}
          />
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
            EN 4 PASOS
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
          De lead frío a visita agendada{' '}
          <span style={{ color: '#EB8C3D' }}>sin que muevas un dedo.</span>
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
            marginBottom: '48px',
          }}
        >
          Setup en una tarde. Marta IA aprende tu negocio en 48 horas y empieza
          a responder leads desde el día 3.
        </motion.p>

        {/* Steps grid */}
        <div className="relative">
          {/* Connecting line (desktop only) */}
          <div
            aria-hidden="true"
            className="hidden lg:block"
            style={{
              position: 'absolute',
              top: '46px',
              left: '7%',
              right: '7%',
              height: '1px',
              background:
                'linear-gradient(90deg, transparent 0%, rgba(235,140,61,0.25) 15%, rgba(235,140,61,0.25) 85%, transparent 100%)',
              pointerEvents: 'none',
            }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                whileHover={{ y: -4 }}
                style={{
                  position: 'relative',
                  background: 'rgba(255,255,255,0.025)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '14px',
                  padding: '24px 22px',
                  backdropFilter: 'blur(4px)',
                  transition: 'border-color 0.2s ease',
                }}
              >
                {/* Number circle */}
                <div
                  style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '50%',
                    background: '#050505',
                    border: '1px solid rgba(235,140,61,0.35)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-outfit)',
                    fontSize: '12px',
                    fontWeight: 700,
                    color: '#EB8C3D',
                    marginBottom: '20px',
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  {step.num}
                </div>

                {/* Icon */}
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: 'rgba(235,140,61,0.08)',
                    border: '1px solid rgba(235,140,61,0.15)',
                    color: '#EB8C3D',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '14px',
                  }}
                >
                  {step.icon}
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: 'var(--font-outfit)',
                    fontSize: '16px',
                    fontWeight: 700,
                    color: '#FAFAFA',
                    marginBottom: '8px',
                    lineHeight: 1.3,
                  }}
                >
                  {step.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '13px',
                    lineHeight: 1.6,
                    color: 'rgba(250,250,250,0.50)',
                  }}
                >
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
