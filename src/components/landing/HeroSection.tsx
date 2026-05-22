'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import IPhoneMockup from './IPhoneMockup'
import DashboardMockup from './DashboardMockup'

export default function HeroSection() {
  const [videoOpen, setVideoOpen] = useState(false)
  return (
    <section
      className="relative flex items-center overflow-hidden"
      style={{
        background:
          'linear-gradient(180deg, #050505 0%, #050505 72%, #070707 100%)',
        paddingTop: '88px',
        minHeight: '100vh',
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(180deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
          maskImage: 'linear-gradient(180deg, rgba(0,0,0,0.36), transparent 72%)',
          pointerEvents: 'none',
        }}
      />
      {/* Grid 2 columnas — stack on mobile */}
      <div
        className="relative grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-14 max-w-[1320px] mx-auto px-5 md:px-12 w-full"
      >

        {/* COLUMNA IZQUIERDA: texto */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center py-8 lg:py-0"
        >
          {/* Beta badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 12px',
              background: 'rgba(235,140,61,0.08)',
              border: '1px solid rgba(235,140,61,0.22)',
              borderRadius: '999px',
              fontSize: '11px',
              fontWeight: 600,
              color: '#EB8C3D',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              width: 'fit-content',
              marginBottom: '18px',
            }}
          >
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#EB8C3D', boxShadow: '0 0 8px #EB8C3D' }} />
            Beta privada · plazas limitadas
          </div>

          <h1
            className="text-[38px] md:text-[56px]"
            style={{
              fontFamily: 'var(--font-outfit)',
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: '0',
              color: '#FAFAFA',
              marginBottom: '20px',
              maxWidth: '620px',
            }}
          >
            Ningún lead sin respuesta.{' '}
            Ningún cliente{' '}
            <span style={{ color: '#EB8C3D' }}>sin seguimiento.</span>
          </h1>

          <p
            style={{
              fontSize: '15px',
              color: 'rgba(250,250,250,0.62)',
              lineHeight: 1.7,
              maxWidth: '500px',
              marginBottom: '32px',
            }}
          >
            Tus clientes te escriben a las 10pm. Solvist responde, califica
            y agenda. Tú cierras la venta.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '40px' }}>
            <a
              href="/demo"
              style={{
                background: '#EB8C3D',
                color: '#050505',
                fontSize: '14px',
                fontWeight: 600,
                padding: '14px 28px',
                borderRadius: '8px',
                textDecoration: 'none',
                boxShadow: '0 14px 34px rgba(235,140,61,0.24)',
                display: 'inline-block',
                whiteSpace: 'nowrap',
              }}
            >
              Reservar demo
            </a>
            <button
              type="button"
              onClick={() => setVideoOpen(true)}
              style={{
                background: 'transparent',
                color: 'rgba(250,250,250,0.78)',
                fontSize: '14px',
                fontWeight: 500,
                padding: '14px 22px',
                borderRadius: '8px',
                border: '1px solid rgba(255,255,255,0.14)',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                whiteSpace: 'nowrap',
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  background: 'rgba(235,140,61,0.18)',
                  color: '#EB8C3D',
                  fontSize: '9px',
                }}
              >
                ▶
              </span>
              Ver demo · 2 min
            </button>
          </div>

          {/* Métricas */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              gap: '24px',
              padding: '22px 24px',
              borderTop: '1px solid rgba(255,255,255,0.08)',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
              background: 'rgba(255,255,255,0.025)',
              borderRadius: '14px',
              width: 'fit-content',
            }}
          >
            {[
              { val: '<2 min', label: 'Respuesta automática' },
              { val: '24/7', label: 'Sin perder un lead nocturno' },
              { val: '48h', label: 'Auditoría completa de cartera' },
            ].map((m) => (
              <div key={m.val}>
                <div
                  style={{
                    fontFamily: 'var(--font-outfit)',
                    fontSize: '20px',
                    fontWeight: 700,
                    color: '#FAFAFA',
                  }}
                >
                  {m.val}
                </div>
                <div
                  style={{
                    fontSize: '12px',
                    fontWeight: 500,
                    color: 'rgba(250,250,250,0.50)',
                    marginTop: '4px',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* COLUMNA DERECHA: mockups */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative w-full hidden lg:block"
          style={{ height: '560px' }}
        >

          {/* iPad/Dashboard — large and prominent */}
          <div
            style={{
              position: 'absolute',
              left: 0,
              top: '10px',
              width: '100%',
              height: 'calc(100% - 10px)',
              background: '#171719',
              borderRadius: '20px',
              padding: '10px',
              border: '1px solid rgba(255,255,255,0.16)',
              boxShadow: '0 40px 120px rgba(0,0,0,0.74)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Barra superior del browser */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '8px 14px',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                flexShrink: 0,
              }}
            >
              <div style={{ display: 'flex', gap: '5px' }}>
                <div style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#FF5F57' }} />
                <div style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#FEBC2E' }} />
                <div style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#28C840' }} />
              </div>
              <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.35)' }}>solvist</span>
              <span style={{ fontSize: '10px', color: '#EB8C3D', fontWeight: 600 }}>● Live</span>
            </div>

            {/* Contenido del dashboard — FONDO BLANCO */}
            <div
              style={{
                background: '#FFFFFF',
                borderRadius: '12px',
                overflow: 'hidden',
                flex: 1,
                display: 'flex',
                marginTop: '8px',
              }}
            >
              <DashboardMockup />
            </div>
          </div>

          {/* iPhone — INDEPENDIENTE, no dentro del iPad */}
          <motion.div
            style={{
              position: 'absolute',
              right: '-55px',
              bottom: '24px',
              width: '215px',
              zIndex: 10,
            }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <IPhoneMockup />
          </motion.div>

        </motion.div>

        {/* Mobile mockup — only visible on mobile/tablet */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative w-full lg:hidden flex justify-center"
          style={{ height: '380px' }}
        >
          {/* Simplified dashboard for mobile */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '400px',
              background: '#1C1C1E',
              borderRadius: '16px',
              padding: '8px',
              border: '1px solid rgba(255,255,255,0.12)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.55)',
            }}
          >
            {/* Barra superior */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '6px 10px',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <div style={{ display: 'flex', gap: '4px' }}>
                <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#FF5F57' }} />
                <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#FEBC2E' }} />
                <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#28C840' }} />
              </div>
              <span style={{ fontSize: '9px', color: 'rgba(255,255,255,0.35)' }}>solvist</span>
              <span style={{ fontSize: '9px', color: '#EB8C3D', fontWeight: 600 }}>● Live</span>
            </div>

            {/* Mobile dashboard content */}
            <div
              style={{
                background: '#FFFFFF',
                borderRadius: '10px',
                overflow: 'hidden',
                height: '300px',
                display: 'flex',
              }}
            >
              <DashboardMockup />
            </div>
          </div>
        </motion.div>

      </div>

      {/* Video modal */}
      <AnimatePresence>
        {videoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={() => setVideoOpen(false)}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0,0,0,0.78)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              zIndex: 100,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px',
            }}
            role="dialog"
            aria-modal="true"
            aria-label="Demo de Solvist"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              style={{
                width: '100%',
                maxWidth: '880px',
                background: '#0A0A0A',
                border: '1px solid rgba(255,255,255,0.10)',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 40px 120px rgba(0,0,0,0.6)',
              }}
            >
              {/* Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '14px 18px',
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <span style={{ fontSize: '13px', fontWeight: 600, color: '#FAFAFA', fontFamily: 'var(--font-outfit)' }}>
                  Solvist en 2 minutos
                </span>
                <button
                  type="button"
                  onClick={() => setVideoOpen(false)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: 'rgba(250,250,250,0.6)',
                    fontSize: '20px',
                    cursor: 'pointer',
                    lineHeight: 1,
                    padding: 0,
                  }}
                  aria-label="Cerrar"
                >
                  ×
                </button>
              </div>

              {/* Video placeholder */}
              <div
                style={{
                  aspectRatio: '16 / 9',
                  background:
                    'linear-gradient(135deg, #0F0F0F 0%, #1A1410 100%)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '14px',
                  padding: '32px',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: 'rgba(235,140,61,0.12)',
                    border: '1px solid rgba(235,140,61,0.28)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '20px',
                    color: '#EB8C3D',
                  }}
                >
                  ▶
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-outfit)',
                    fontSize: '18px',
                    fontWeight: 600,
                    color: '#FAFAFA',
                  }}
                >
                  Vídeo en producción
                </div>
                <div
                  style={{
                    fontSize: '13px',
                    color: 'rgba(250,250,250,0.55)',
                    maxWidth: '420px',
                    lineHeight: 1.55,
                  }}
                >
                  Estamos grabando el vídeo demo. Mientras tanto, reserva una
                  sesión personalizada de 30 min y te lo mostramos en directo
                  con datos de tu negocio.
                </div>
                <a
                  href="/demo"
                  style={{
                    marginTop: '8px',
                    background: '#EB8C3D',
                    color: '#050505',
                    fontSize: '13px',
                    fontWeight: 600,
                    padding: '11px 22px',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    boxShadow: '0 10px 26px rgba(235,140,61,0.24)',
                  }}
                >
                  Reservar demo en directo
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
