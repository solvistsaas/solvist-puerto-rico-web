'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { faqs } from './faqs'

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section
      style={{
        background: 'linear-gradient(180deg, #050505 0%, #070707 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
      className="py-20 md:py-28"
    >
      {/* Subtle grid background */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(180deg, rgba(255,255,255,0.020) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
          maskImage:
            'radial-gradient(ellipse at center, rgba(0,0,0,0.5), transparent 75%)',
          pointerEvents: 'none',
        }}
      />

      <div className="relative max-w-4xl mx-auto px-5 md:px-6">
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
            DUDAS FRECUENTES
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
            marginBottom: '40px',
          }}
        >
          Lo que sueles preguntarnos.
        </motion.h2>

        {/* Accordion */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                style={{
                  background: 'rgba(255,255,255,0.025)',
                  border: `1px solid ${isOpen ? 'rgba(235,140,61,0.22)' : 'rgba(255,255,255,0.07)'}`,
                  borderRadius: '12px',
                  overflow: 'hidden',
                  transition: 'border-color 0.2s ease',
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  style={{
                    width: '100%',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '18px 22px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '16px',
                    fontFamily: 'var(--font-outfit)',
                    fontSize: '15px',
                    fontWeight: 600,
                    color: '#FAFAFA',
                    textAlign: 'left',
                  }}
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <span
                    style={{
                      flexShrink: 0,
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      background: isOpen ? 'rgba(235,140,61,0.18)' : 'rgba(255,255,255,0.06)',
                      color: isOpen ? '#EB8C3D' : 'rgba(250,250,250,0.55)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '14px',
                      lineHeight: 1,
                      transition: 'all 0.2s ease',
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                    }}
                  >
                    +
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div
                        style={{
                          padding: '0 22px 20px',
                          fontFamily: 'var(--font-inter)',
                          fontSize: '14px',
                          lineHeight: 1.7,
                          color: 'rgba(250,250,250,0.62)',
                        }}
                      >
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
