'use client'
import { motion } from 'framer-motion'

const messages = [
  {
    type: 'in',
    text: 'Hola! vi vuestra promo de baterías 👀',
    time: '22:07',
  },
  {
    type: 'out',
    text: '¡Hola Jorge! Soy Marta. Veo que tenéis 8 kW desde 2021 ¿verdad?',
    time: '22:07',
  },
  {
    type: 'in',
    text: 'Sí exacto. Cuánto cuesta?',
    time: '22:08',
  },
  {
    type: 'out',
    text: 'Una de 10 kWh sale por 5.400€. Te ahorrarías ~1.200€/año. ¿Te paso un técnico el jueves 10h?',
    time: '22:08',
    ticks: '✓✓',
  },
  {
    type: 'in',
    text: 'Va, agéndalo 🙌',
    time: '22:09',
  },
]

// WhatsApp-like SVG icons
const VideoIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
    <path d="M3 7a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" stroke="#54656f" strokeWidth="1.8" />
    <path d="M16 10l5-3v10l-5-3v-4Z" stroke="#54656f" strokeWidth="1.8" strokeLinejoin="round" />
  </svg>
)

const PhoneIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
    <path
      d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2Z"
      stroke="#54656f"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
  </svg>
)

export default function IPhoneMockup() {
  return (
    <div>
      <div
        style={{
          background: '#1C1C1E',
          borderRadius: '42px',
          padding: '8px',
          border: '1px solid rgba(255,255,255,0.14)',
          boxShadow:
            'inset 0 0 0 1px rgba(255,255,255,0.05), 0 40px 100px rgba(0,0,0,0.85), 0 8px 24px rgba(0,0,0,0.50)',
          position: 'relative',
        }}
      >
        {/* Physical buttons */}
        <div style={{ position: 'absolute', left: '-3px', top: '46px', width: '3px', height: '18px', background: '#3a3a3c', borderRadius: '2px 0 0 2px' }} />
        <div style={{ position: 'absolute', left: '-3px', top: '72px', width: '3px', height: '32px', background: '#3a3a3c', borderRadius: '2px 0 0 2px' }} />
        <div style={{ position: 'absolute', left: '-3px', top: '112px', width: '3px', height: '32px', background: '#3a3a3c', borderRadius: '2px 0 0 2px' }} />
        <div style={{ position: 'absolute', right: '-3px', top: '88px', width: '3px', height: '50px', background: '#3a3a3c', borderRadius: '0 2px 2px 0' }} />

        {/* Screen */}
        <div style={{ background: '#EFEAE2', borderRadius: '34px', overflow: 'hidden', fontFamily: 'var(--font-inter)' }}>
          {/* Dynamic Island */}
          <div style={{ width: '66px', height: '20px', background: '#1C1C1E', borderRadius: '0 0 12px 12px', margin: '0 auto' }} />

          {/* WhatsApp Header */}
          <div
            style={{
              background: '#FFFFFF',
              padding: '7px 11px 8px',
              display: 'flex',
              alignItems: 'center',
              gap: '7px',
              borderBottom: '1px solid rgba(0,0,0,0.06)',
            }}
          >
            <span style={{ color: '#007AFF', fontSize: '16px', lineHeight: 1, fontWeight: 400 }}>‹</span>
            <div
              style={{
                width: '26px',
                height: '26px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #EB8C3D 0%, #D87528 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '10px',
                fontWeight: 700,
                color: 'white',
                flexShrink: 0,
                fontFamily: 'var(--font-outfit)',
              }}
            >
              M
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '11px', fontWeight: 600, color: '#111', lineHeight: 1.2 }}>
                Marta IA
              </div>
              <div style={{ fontSize: '8.5px', color: 'rgba(0,0,0,0.45)' }}>
                en línea
              </div>
            </div>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <VideoIcon />
              <PhoneIcon />
            </div>
          </div>

          {/* Messages */}
          <div
            style={{
              background: '#EFEAE2',
              padding: '8px 8px 5px',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
            }}
          >
            {messages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 + i * 0.55, ease: 'easeOut' }}
                style={{
                  alignSelf: msg.type === 'out' ? 'flex-end' : 'flex-start',
                  background: msg.type === 'out' ? '#D9FDD3' : 'white',
                  borderRadius: msg.type === 'out' ? '8px 8px 2px 8px' : '2px 8px 8px 8px',
                  padding: '5px 8px',
                  maxWidth: '86%',
                  fontSize: '8.5px',
                  lineHeight: 1.45,
                  color: '#1a1a1a',
                  boxShadow: '0 1px 1px rgba(0,0,0,0.05)',
                }}
              >
                {msg.text}
                <div
                  style={{
                    fontSize: '7px',
                    color: 'rgba(0,0,0,0.32)',
                    textAlign: msg.type === 'out' ? 'right' : 'left',
                    marginTop: '2px',
                  }}
                >
                  {msg.time}
                  {msg.ticks && <span style={{ color: '#3997ec', marginLeft: '3px' }}>{msg.ticks}</span>}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Input bar */}
          <div
            style={{
              background: '#F7F3EC',
              padding: '6px 8px 7px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <span style={{ fontSize: '13px', color: 'rgba(0,0,0,0.4)' }}>+</span>
            <div style={{ flex: 1, background: 'white', borderRadius: '14px', height: '20px' }} />
            <span style={{ fontSize: '11px', color: 'rgba(0,0,0,0.4)' }}>🎤</span>
          </div>

          {/* Home indicator */}
          <div style={{ background: '#F7F3EC', padding: '4px 0 5px', display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: '68px', height: '3px', background: 'rgba(0,0,0,0.25)', borderRadius: '2px' }} />
          </div>
        </div>
      </div>
    </div>
  )
}
