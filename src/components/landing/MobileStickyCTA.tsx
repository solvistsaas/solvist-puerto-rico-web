'use client'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function MobileStickyCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      // Show after scrolling past the hero (approx 500px)
      setVisible(window.scrollY > 600)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="md:hidden"
          style={{
            position: 'fixed',
            bottom: '16px',
            left: '16px',
            right: '16px',
            zIndex: 40,
          }}
        >
          <a
            href="/demo"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              width: '100%',
              background: '#EB8C3D',
              color: '#050505',
              fontSize: '14px',
              fontWeight: 600,
              padding: '14px 22px',
              borderRadius: '12px',
              textDecoration: 'none',
              boxShadow:
                '0 18px 40px rgba(235,140,61,0.34), 0 4px 12px rgba(0,0,0,0.30)',
              fontFamily: 'var(--font-outfit)',
            }}
          >
            Reservar demo gratuita
            <span style={{ fontSize: '15px', lineHeight: 1 }}>→</span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
