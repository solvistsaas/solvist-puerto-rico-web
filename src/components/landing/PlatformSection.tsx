'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ─── Shared color tokens ─── */
const C = {
  sidebarBg: '#0F1117',
  sidebarBorder: 'rgba(255,255,255,0.05)',
  sidebarActiveBg: 'rgba(235,140,61,0.10)',
  sidebarActiveColor: '#EB8C3D',
  mainBg: '#FFFFFF',
  itemBorder: 'rgba(10,10,10,0.05)',
  badgeAmberBg: 'rgba(235,140,61,0.12)',
  badgeAmberColor: '#EB8C3D',
  badgeGreenBg: 'rgba(34,197,94,0.10)',
  badgeGreenColor: '#16a34a',
  badgeBlueBg: 'rgba(59,130,246,0.10)',
  badgeBlueColor: '#2563eb',
  amber: '#EB8C3D',
  dark: '#0A0A0A',
  lightGray: '#F3F4F6',
  panelBg: '#FAFAFA',
};

/* ─── Tab data ─── */
const tabs = [
  {
    key: 'conversaciones',
    label: 'Conversaciones',
    headline: 'Cada lead respondido en menos de 2 minutos',
    card: {
      label: 'RESPUESTA AUTOMÁTICA',
      title: 'Tu primer contacto ocurre solo',
      description:
        'Cada lead que entra — por WhatsApp, web o Instagram — recibe respuesta inmediata. Sin que nadie en tu equipo tenga que estar pendiente.',
      points: [
        'Respuesta en menos de 2 minutos, 24/7',
        'Calificación automática del interés del cliente',
        'Agendamiento de visita sin intervención manual',
        'Notificación al comercial cuando el cliente está listo',
      ],
    },
  },
  {
    key: 'pendientes',
    label: 'Pendientes',
    headline: 'Cada pendiente con un próximo paso claro',
    card: {
      label: 'COLA DE ACCIONES',
      title: 'Nada se queda sin próximo paso',
      description:
        'Solvist organiza automáticamente qué necesita acción hoy, quién tiene prioridad y qué puede esperar. Tu equipo solo ejecuta.',
      points: [
        'Tareas ordenadas por urgencia e impacto',
        'Validación humana solo cuando es necesaria',
        'Contexto completo del cliente en cada tarea',
        'Sin Excel, sin notas en papel, sin WhatsApp personal',
      ],
    },
  },
  {
    key: 'propuestas',
    label: 'Propuestas',
    headline: 'Cada propuesta con seguimiento automático',
    card: {
      label: 'SEGUIMIENTO AUTOMÁTICO',
      title: 'El presupuesto no muere en el buzón',
      description:
        'Cada propuesta enviada tiene un seguimiento programado. Si el cliente no responde, Solvist actúa. Si responde, tu comercial recibe la notificación.',
      points: [
        'Seguimiento automático hasta obtener respuesta',
        'Propuesta generada con datos reales del cliente',
        'Envío directo por WhatsApp desde la plataforma',
        'Estado en tiempo real: enviada, abierta, respondida',
      ],
    },
  },
  {
    key: 'revisiones',
    label: 'Revisiones',
    headline: 'Tus clientes levantan la mano solos',
    card: {
      label: 'DIAGNÓSTICO DE CARTERA',
      title: 'Tus clientes levantan la mano solos',
      description:
        'Solvist envía un diagnóstico personalizado a cada cliente de tu cartera. En 5 preguntas, el cliente indica si tiene interés en mejora, batería o mantenimiento.',
      points: [
        'Link personalizado por cliente, enviado por WhatsApp',
        'El cliente responde en 2 minutos desde el móvil',
        'Las respuestas generan oportunidades en tu pipeline',
        'Tu comercial solo llama a quien ya quiere que le llamen',
      ],
    },
  },
];

/* ─── Chat messages for Conversaciones tab ─── */
const chatMessages = [
  { id: 1, type: 'client' as const, text: 'Sí, me gustaría. ¿Cuándo pueden venir?' },
  { id: 2, type: 'system' as const, text: 'Visita propuesta — confirma si procede', dotColor: C.amber },
  { id: 3, type: 'ia' as const, text: 'Jueves 10:00 AM o viernes 2:00 PM. ¿Cuál te queda mejor?' },
  { id: 4, type: 'client' as const, text: 'El jueves a las 10. Mi casa es en Urb. Santa Juanita, Bayamón.' },
  { id: 5, type: 'system' as const, text: 'Visita confirmada', dotColor: C.badgeGreenColor },
  { id: 6, type: 'ia' as const, text: 'Listo Carlos. Visita jueves 10:00 AM. Recibirás recordatorio por la mañana.' },
];

/* ═══════════════════════════════════════════════
   MOCKUP 1 — CONVERSACIONES (with animated chat)
   ═══════════════════════════════════════════════ */
function ConversacionesMockup({ visibleMessages }: { visibleMessages: number }) {
  const navItems = [
    { label: 'Conversaciones', active: true, badge: undefined as string | undefined },
    { label: 'Pendientes', active: false, badge: '4' },
    { label: 'Propuestas', active: false, badge: undefined as string | undefined },
    { label: 'Clientes', active: false, badge: undefined as string | undefined },
    { label: 'Revisiones', active: false, badge: '6' },
    { label: 'Automatización', active: false, badge: undefined as string | undefined },
  ];

  const conversations = [
    { initials: 'CR', name: 'Carlos Rivera', dot: C.amber, location: 'Bayamón', status: 'Visita confirmada', time: 'hace 18h', check: true },
    { initials: 'MG', name: 'María González', dot: C.badgeGreenColor, location: 'Guaynabo', status: 'Esperando respuesta', time: '2', check: false, timeColor: C.badgeGreenColor },
    { initials: 'RL', name: 'Roberto López', dot: '#9CA3AF', location: 'Ponce', status: 'Sin respuesta reciente', time: 'hace 20h', check: false },
    { initials: 'AM', name: 'Ana Martínez', dot: C.amber, location: 'Caguas', status: 'Visita confirmada', time: '', check: true },
    { initials: 'JT', name: 'Jorge Torres', dot: C.badgeBlueColor, location: 'Mayagüez', status: 'Esperando factura', time: 'hace 22h', check: false },
    { initials: 'LH', name: 'Luisa Hernández', dot: C.amber, location: 'Carolina', status: 'Visita confirmada', time: 'hace 19h', check: false },
  ];

  return (
    <div style={{ display: 'flex', height: '420px', borderRadius: '10px', overflow: 'hidden', border: `1px solid ${C.itemBorder}`, background: C.mainBg, fontSize: '11px', fontFamily: 'var(--font-inter)' }}>
      {/* Column 1: Sidebar */}
      <div style={{ width: '150px', background: C.sidebarBg, borderRight: `1px solid ${C.sidebarBorder}`, display: 'flex', flexDirection: 'column', padding: '14px 0', flexShrink: 0 }}>
        <div style={{ padding: '0 14px 16px', borderBottom: `1px solid ${C.sidebarBorder}` }}>
          <div style={{ fontFamily: 'var(--font-outfit)', fontWeight: 700, fontSize: '12px', color: '#FAFAFA' }}>Solvist</div>
          <div style={{ fontSize: '9px', color: 'rgba(255,255,255,0.35)', marginTop: '2px' }}>Asistente Solar</div>
        </div>
        <div style={{ flex: 1, paddingTop: '8px' }}>
          {navItems.map((item) => (
            <div key={item.label} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '7px 14px', background: item.active ? C.sidebarActiveBg : 'transparent', color: item.active ? C.sidebarActiveColor : 'rgba(255,255,255,0.40)', fontSize: '10.5px', fontWeight: item.active ? 500 : 400, cursor: 'default' }}>
              <span>{item.label}</span>
              {item.badge && (
                <span style={{ background: C.badgeAmberBg, color: C.badgeAmberColor, fontSize: '9px', fontWeight: 600, padding: '1px 6px', borderRadius: '100px' }}>{item.badge}</span>
              )}
            </div>
          ))}
        </div>
        <div style={{ padding: '12px 14px 0', borderTop: `1px solid ${C.sidebarBorder}`, display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: C.sidebarActiveBg, color: C.sidebarActiveColor, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9px', fontWeight: 600, flexShrink: 0 }}>CI</div>
          <div>
            <div style={{ fontSize: '10px', color: '#FAFAFA', fontWeight: 500 }}>Carlos Instalador</div>
            <div style={{ fontSize: '8.5px', color: 'rgba(255,255,255,0.30)' }}>Solar Energy PR</div>
          </div>
        </div>
      </div>

      {/* Column 2: Conversation list */}
      <div style={{ width: '220px', borderRight: `1px solid ${C.itemBorder}`, display: 'flex', flexDirection: 'column', flexShrink: 0 }}>
        <div style={{ padding: '12px 14px', borderBottom: `1px solid ${C.itemBorder}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontWeight: 600, fontSize: '12px', color: C.dark }}>Conversaciones</span>
          <span style={{ background: C.badgeAmberBg, color: C.badgeAmberColor, fontSize: '9px', fontWeight: 600, padding: '1px 7px', borderRadius: '100px' }}>16</span>
        </div>
        <div style={{ padding: '8px 14px' }}>
          <div style={{ background: C.lightGray, borderRadius: '6px', padding: '6px 10px', fontSize: '10px', color: 'rgba(10,10,10,0.30)' }}>Buscar conversación...</div>
        </div>
        <div style={{ padding: '0 14px 6px', display: 'flex', gap: '4px', flexWrap: 'nowrap', overflowX: 'auto' }}>
          {['Todas', 'Nuevas', 'En proceso', 'Sin respuesta'].map((f, i) => (
            <span key={f} style={{ fontSize: '9px', padding: '3px 8px', borderRadius: '100px', background: i === 0 ? C.dark : 'transparent', color: i === 0 ? '#FAFAFA' : 'rgba(10,10,10,0.35)', fontWeight: i === 0 ? 500 : 400, border: i === 0 ? 'none' : '1px solid rgba(10,10,10,0.08)', whiteSpace: 'nowrap', flexShrink: 0 }}>{f}</span>
          ))}
        </div>
        <div style={{ flex: 1, overflow: 'hidden' }}>
          {conversations.map((conv) => (
            <div key={conv.initials} className="hover:bg-black/[0.02] transition-colors" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 14px', borderBottom: `1px solid ${C.itemBorder}`, cursor: 'default' }}>
              <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: C.lightGray, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9px', fontWeight: 600, color: 'rgba(10,10,10,0.50)', flexShrink: 0 }}>{conv.initials}</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span style={{ fontWeight: 500, fontSize: '10.5px', color: C.dark }}>{conv.name}</span>
                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: conv.dot, flexShrink: 0 }} />
                </div>
                <div style={{ fontSize: '9px', color: 'rgba(10,10,10,0.35)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{conv.location} · {conv.status}</div>
              </div>
              <div style={{ flexShrink: 0, textAlign: 'right' }}>
                {conv.check ? (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={C.amber} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                ) : conv.timeColor ? (
                  <span style={{ background: C.badgeGreenBg, color: C.badgeGreenColor, fontSize: '9px', fontWeight: 600, padding: '1px 6px', borderRadius: '100px' }}>{conv.time}</span>
                ) : (
                  <span style={{ fontSize: '8.5px', color: 'rgba(10,10,10,0.25)' }}>{conv.time}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Column 3: Chat area (animated) */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        <div style={{ flex: 1, padding: '14px', display: 'flex', flexDirection: 'column', gap: '8px', overflow: 'hidden' }}>
          <AnimatePresence initial={false}>
            {chatMessages.slice(0, visibleMessages).map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                style={
                  msg.type === 'client'
                    ? { alignSelf: 'flex-end', background: C.lightGray, borderRadius: '10px 10px 2px 10px', padding: '8px 12px', maxWidth: '75%', fontSize: '10.5px', color: C.dark, lineHeight: 1.45 }
                    : msg.type === 'ia'
                      ? { alignSelf: 'flex-start', background: 'rgba(235,140,61,0.06)', border: '1px solid rgba(235,140,61,0.12)', borderRadius: '10px 10px 10px 2px', padding: '8px 12px', maxWidth: '80%', fontSize: '10.5px', color: C.dark, lineHeight: 1.45 }
                      : { alignSelf: 'flex-start', fontSize: '9px', color: 'rgba(10,10,10,0.35)', display: 'flex', alignItems: 'center', gap: '4px', paddingLeft: '4px' }
                }
              >
                {msg.type === 'system' ? (
                  <>
                    <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: msg.dotColor || C.amber, flexShrink: 0 }} />
                    {msg.text}
                  </>
                ) : (
                  msg.text
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Column 4: Client panel */}
      <div style={{ width: '160px', borderLeft: `1px solid ${C.itemBorder}`, background: C.panelBg, padding: '14px', flexShrink: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div style={{ fontSize: '8.5px', fontWeight: 600, letterSpacing: '0.1em', color: 'rgba(10,10,10,0.30)', textTransform: 'uppercase' }}>CLIENTE</div>
        <div>
          <div style={{ fontSize: '11.5px', fontWeight: 600, color: C.dark }}>Carlos Rivera</div>
          <span style={{ display: 'inline-block', background: C.badgeGreenBg, color: C.badgeGreenColor, fontSize: '8.5px', fontWeight: 500, padding: '2px 7px', borderRadius: '100px', marginTop: '3px' }}>Visita confirmada</span>
        </div>
        <div style={{ fontSize: '9.5px', color: 'rgba(10,10,10,0.40)', lineHeight: 1.7 }}>
          <div>(787) 555-0142</div>
          <div>Bayamón</div>
          <div>Casa</div>
          <div>$280</div>
          <div>Batería: Sí</div>
        </div>
        <div style={{ fontSize: '8.5px', fontWeight: 600, letterSpacing: '0.1em', color: 'rgba(10,10,10,0.30)', textTransform: 'uppercase', marginTop: '4px' }}>ACCIONES</div>
        <button style={{ width: '100%', background: C.dark, color: '#FAFAFA', border: 'none', borderRadius: '6px', padding: '7px 0', fontSize: '10px', fontWeight: 500, cursor: 'default', fontFamily: 'var(--font-inter)' }}>Confirmar visita</button>
        <div style={{ display: 'flex', gap: '4px' }}>
          <button style={{ flex: 1, background: 'transparent', color: 'rgba(10,10,10,0.50)', border: '1px solid rgba(10,10,10,0.12)', borderRadius: '6px', padding: '6px 0', fontSize: '9px', fontWeight: 500, cursor: 'default', fontFamily: 'var(--font-inter)' }}>Enviar propuesta</button>
          <button style={{ flex: 1, background: 'transparent', color: 'rgba(10,10,10,0.50)', border: '1px solid rgba(10,10,10,0.12)', borderRadius: '6px', padding: '6px 0', fontSize: '9px', fontWeight: 500, cursor: 'default', fontFamily: 'var(--font-inter)' }}>Llamar</button>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   MOCKUP 2 — PENDIENTES
   ═══════════════════════════════════════════════ */
function PendientesMockup() {
  const filters = [
    { label: 'Todos', count: '7', active: true },
    { label: 'Visita', count: '2', active: false },
    { label: 'Propuesta', count: '1', active: false },
    { label: 'Validación', count: '2', active: false },
    { label: 'Seguimiento', count: '2', active: false },
  ];

  const tasks = [
    { icon: 'doc', iconBg: 'rgba(139,92,246,0.10)', iconColor: '#8B5CF6', name: 'María González', action: 'Preparar propuesta con financiamiento y batería', context: 'preguntó por financiamiento', badge: 'Prioridad', badgeColor: C.amber },
    { icon: 'pin', iconBg: 'rgba(34,197,94,0.10)', iconColor: '#16a34a', name: 'Carlos Rivera', action: 'Confirmar fecha de visita — jueves 10:00 AM', context: 'interés en batería', badge: 'Prioridad', badgeColor: C.amber },
    { icon: 'pin', iconBg: 'rgba(34,197,94,0.10)', iconColor: '#16a34a', name: 'Ana Martínez', action: 'Visita mañana 11:00 AM — farmacia Caguas', context: 'necesita batería por refrigeración', badge: 'Prioridad', badgeColor: C.amber },
    { icon: 'eye', iconBg: 'rgba(235,140,61,0.10)', iconColor: C.amber, name: 'Eduardo Díaz', action: 'Seguimiento requiere tu validación', context: 'jubilado, proceso simple', badge: 'Por validar', badgeColor: C.badgeBlueColor },
    { icon: 'eye', iconBg: 'rgba(235,140,61,0.10)', iconColor: C.amber, name: 'Carmen Vega', action: 'Confirmar visita viernes 9:00 AM para su madre', context: 'preocupación por techo', badge: 'Por validar', badgeColor: C.badgeBlueColor },
  ];

  const iconSvg = (type: string, color: string) => {
    if (type === 'doc') return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>;
    if (type === 'pin') return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>;
    return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>;
  };

  return (
    <div style={{ background: C.mainBg, borderRadius: '10px', overflow: 'hidden', border: `1px solid ${C.itemBorder}`, fontFamily: 'var(--font-inter)', fontSize: '11px' }}>
      <div style={{ padding: '16px 18px 12px', borderBottom: `1px solid ${C.itemBorder}` }}>
        <div style={{ fontFamily: 'var(--font-outfit)', fontWeight: 700, fontSize: '16px', color: C.dark, marginBottom: '4px' }}>Pendientes</div>
        <div style={{ fontSize: '11px', color: 'rgba(10,10,10,0.35)' }}>2 visitas por confirmar · 1 propuesta lista · 6 acciones IA hoy</div>
      </div>
      <div style={{ padding: '10px 18px', display: 'flex', gap: '4px', borderBottom: `1px solid ${C.itemBorder}`, flexWrap: 'nowrap', overflowX: 'auto' }}>
        {filters.map((f) => (
          <span key={f.label} style={{ fontSize: '10px', padding: '4px 10px', borderRadius: '100px', background: f.active ? C.dark : 'transparent', color: f.active ? '#FAFAFA' : 'rgba(10,10,10,0.40)', fontWeight: f.active ? 500 : 400, border: f.active ? 'none' : '1px solid rgba(10,10,10,0.08)', cursor: 'default', whiteSpace: 'nowrap', flexShrink: 0 }}>{f.label} {f.count}</span>
        ))}
      </div>
      <div style={{ padding: '6px 0' }}>
        {tasks.map((task) => (
          <div key={task.name} className="hover:bg-black/[0.02] transition-colors" style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', padding: '12px 18px', borderBottom: `1px solid ${C.itemBorder}` }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: task.iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              {iconSvg(task.icon, task.iconColor)}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: '13px', fontWeight: 600, color: C.dark, marginBottom: '2px' }}>
                {task.name} — <span style={{ fontWeight: 500 }}>{task.action}</span>
              </div>
              <div style={{ fontSize: '10px', color: 'rgba(10,10,10,0.30)' }}>✧ {task.context}</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px', flexShrink: 0 }}>
              <span style={{ fontSize: '9px', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '3px', color: task.badgeColor }}>
                <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: task.badgeColor }} /> {task.badge}
              </span>
              <span style={{ fontSize: '9.5px', color: C.amber, fontWeight: 500, cursor: 'default' }}>✓ Resolver</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   MOCKUP 3 — PROPUESTAS
   ═══════════════════════════════════════════════ */
function PropuestasMockup() {
  const steps = [
    { label: 'Detectada', done: true },
    { label: 'Revisada', done: true },
    { label: 'Propuesta', done: false, active: true },
    { label: 'Seguimiento', done: false },
    { label: 'Cerrada', done: false },
  ];

  return (
    <div style={{ background: '#F8F8F8', borderRadius: '10px', overflow: 'hidden', border: `1px solid ${C.itemBorder}`, fontFamily: 'var(--font-inter)', fontSize: '11px', position: 'relative', minHeight: '420px' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.06)', pointerEvents: 'none' }} />
      <div style={{ position: 'relative', margin: '24px auto', maxWidth: '640px', background: '#FFFFFF', borderRadius: '16px', boxShadow: '0 8px 40px rgba(0,0,0,0.12)', overflow: 'hidden', display: 'flex' }}>
        {/* Left side */}
        <div style={{ flex: 1, padding: '20px 22px', minWidth: 0 }}>
          {/* Progress */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '16px', flexWrap: 'wrap' }}>
            {steps.map((s, i) => (
              <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: s.active ? C.amber : s.done ? C.badgeGreenColor : 'rgba(10,10,10,0.12)', flexShrink: 0 }} />
                <span style={{ fontSize: '8.5px', fontWeight: s.active ? 600 : 400, color: s.active ? C.amber : s.done ? C.badgeGreenColor : 'rgba(10,10,10,0.25)' }}>{s.label}</span>
                {i < steps.length - 1 && <span style={{ color: 'rgba(10,10,10,0.12)', fontSize: '8px' }}>→</span>}
              </div>
            ))}
          </div>
          {/* Name + badge */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
            <span style={{ fontFamily: 'var(--font-outfit)', fontWeight: 700, fontSize: '18px', color: C.dark }}>Ana Martínez</span>
            <span style={{ background: C.badgeGreenBg, color: C.badgeGreenColor, fontSize: '9px', fontWeight: 500, padding: '2px 8px', borderRadius: '100px' }}>Enviada</span>
          </div>
          <div style={{ fontSize: '12px', color: 'rgba(10,10,10,0.35)', marginBottom: '10px' }}>$52,000 · Comercial · Puerto Rico</div>
          <span style={{ display: 'inline-block', background: C.badgeAmberBg, color: C.badgeAmberColor, fontSize: '9px', fontWeight: 500, padding: '2px 8px', borderRadius: '100px', marginBottom: '14px' }}>Prioridad Media</span>

          {/* Dark card: valor */}
          <div style={{ background: '#0F1117', borderRadius: '10px', padding: '14px 16px', marginBottom: '8px' }}>
            <div style={{ fontSize: '8.5px', fontWeight: 600, letterSpacing: '0.1em', color: C.amber, textTransform: 'uppercase', marginBottom: '6px' }}>VALOR DE LA PROPUESTA</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
              <span style={{ fontFamily: 'var(--font-outfit)', fontWeight: 700, fontSize: '28px', color: '#FAFAFA' }}>$52,000</span>
              <span style={{ background: C.badgeGreenBg, color: C.badgeGreenColor, fontSize: '9px', fontWeight: 500, padding: '2px 7px', borderRadius: '100px' }}>ROI 5.1 años</span>
            </div>
            <div style={{ fontSize: '9px', color: 'rgba(255,255,255,0.30)', marginTop: '4px' }}>Ahorro estimado $400-550/mes</div>
          </div>

          {/* Secondary card: oportunidad */}
          <div style={{ background: '#1a1f2e', borderRadius: '10px', padding: '12px 14px', marginBottom: '10px' }}>
            <div style={{ fontSize: '8.5px', fontWeight: 600, letterSpacing: '0.1em', color: C.amber, textTransform: 'uppercase', marginBottom: '6px' }}>OPORTUNIDAD DETECTADA</div>
            <div style={{ fontSize: '9.5px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.5 }}>Instalación comercial 15 kW con batería. Alto consumo mensual. Perfil ideal para financiamiento.</div>
            <div style={{ fontSize: '9px', color: 'rgba(255,255,255,0.25)', marginTop: '4px' }}>ROI: 5.1 años · Ahorro: $400-550/mes</div>
          </div>

          {/* Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '6px', marginBottom: '14px' }}>
            {[
              { l: 'Tipo', v: 'Comercial' },
              { l: 'Potencia', v: '15 kW' },
              { l: 'Ahorro', v: '$400-550/mes' },
            ].map((g) => (
              <div key={g.l} style={{ background: C.lightGray, borderRadius: '6px', padding: '8px 10px' }}>
                <div style={{ fontSize: '8px', color: 'rgba(10,10,10,0.30)', marginBottom: '2px' }}>{g.l}</div>
                <div style={{ fontSize: '11px', fontWeight: 600, color: C.dark }}>{g.v}</div>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div style={{ display: 'flex', gap: '6px' }}>
            <button style={{ background: C.dark, color: '#FAFAFA', border: 'none', borderRadius: '6px', padding: '7px 14px', fontSize: '10.5px', fontWeight: 500, cursor: 'default', fontFamily: 'var(--font-inter)' }}>Enviar propuesta</button>
            <button style={{ background: 'transparent', color: 'rgba(10,10,10,0.50)', border: '1px solid rgba(10,10,10,0.12)', borderRadius: '6px', padding: '7px 14px', fontSize: '10.5px', fontWeight: 500, cursor: 'default', fontFamily: 'var(--font-inter)' }}>Editar</button>
            <button style={{ background: 'transparent', color: 'rgba(10,10,10,0.50)', border: '1px solid rgba(10,10,10,0.12)', borderRadius: '6px', padding: '7px 14px', fontSize: '10.5px', fontWeight: 500, cursor: 'default', fontFamily: 'var(--font-inter)' }}>Contactar</button>
          </div>
        </div>

        {/* Right side */}
        <div style={{ width: '220px', borderLeft: `1px solid ${C.itemBorder}`, background: C.panelBg, padding: '18px 16px', flexShrink: 0 }}>
          <div style={{ fontSize: '8.5px', fontWeight: 600, letterSpacing: '0.1em', color: 'rgba(10,10,10,0.30)', textTransform: 'uppercase', marginBottom: '10px' }}>CLIENTE</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
            <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: C.badgeAmberBg, color: C.badgeAmberColor, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9px', fontWeight: 600, flexShrink: 0 }}>AM</div>
            <div>
              <div style={{ fontSize: '11.5px', fontWeight: 600, color: C.dark }}>Ana Martínez</div>
              <div style={{ fontSize: '9px', color: 'rgba(10,10,10,0.30)' }}>Puerto Rico</div>
            </div>
          </div>
          <div style={{ fontSize: '8.5px', fontWeight: 600, letterSpacing: '0.1em', color: 'rgba(10,10,10,0.30)', textTransform: 'uppercase', marginBottom: '6px' }}>CANAL PREFERIDO</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '14px' }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/></svg>
            <span style={{ fontSize: '10.5px', fontWeight: 500, color: C.dark }}>WhatsApp</span>
          </div>
          <div style={{ fontSize: '8.5px', fontWeight: 600, letterSpacing: '0.1em', color: 'rgba(10,10,10,0.30)', textTransform: 'uppercase', marginBottom: '6px' }}>MENSAJE IA</div>
          <div style={{ background: '#FFFFFF', border: `1px solid ${C.itemBorder}`, borderRadius: '8px', padding: '10px', marginBottom: '10px' }}>
            <div style={{ fontSize: '9.5px', color: 'rgba(10,10,10,0.55)', lineHeight: 1.55 }}>Hola Ana, adjunto la propuesta para tu farmacia en Caguas. Incluye sistema de 15 kW con batería para respaldo. ¿Te gustaría revisarla juntos?</div>
          </div>
          <button style={{ width: '100%', background: '#25D366', color: '#FFFFFF', border: 'none', borderRadius: '6px', padding: '8px 0', fontSize: '10.5px', fontWeight: 500, cursor: 'default', fontFamily: 'var(--font-inter)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="#FFFFFF"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
            Enviar por WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   MOCKUP 4 — REVISIONES (with modal triggers)
   ═══════════════════════════════════════════════ */
function RevisionesMockup({ onOpenModal }: { onOpenModal: (modal: 'responses' | 'followup') => void }) {
  const filters = [
    { label: 'Todas', count: '7', active: true },
    { label: 'Listo para enviar', count: '3', active: false },
    { label: 'Esperando respuesta', count: '1', active: false },
    { label: 'Oportunidad detectada', count: '3', active: false },
    { label: 'Sin oportunidades', count: '', active: false },
  ];

  const items = [
    { star: true, name: 'Carlos Rivera', city: 'Bayamón', months: '12 meses', tags: [{ label: 'Interés en batería', color: 'amber' as const }, { label: 'Factura más alta', color: 'amber' as const }], action: 'Contactar sobre batería y revisión de factura', badge: 'Oportunidad detectada', badgeColor: C.badgeGreenColor, btnType: 'contact' as const },
    { star: true, name: 'Ana Martínez', city: 'Caguas', months: '8 meses', tags: [{ label: 'Posible cargador EV', color: 'blue' as const }], action: 'Enviar información sobre cargador EV', badge: 'Oportunidad detectada', badgeColor: C.badgeGreenColor, btnType: 'contact' as const },
    { star: true, name: 'Luisa Hernández', city: 'Carolina', months: '6 meses', tags: [{ label: 'Interés en batería', color: 'amber' as const }, { label: 'Apagones frecuentes', color: 'amber' as const }], action: 'Ofrecer batería con financiamiento', badge: 'Oportunidad detectada', badgeColor: C.badgeGreenColor, btnType: 'contact' as const },
    { star: false, name: 'Jorge Torres', city: 'Mayagüez', months: '14 meses', tags: [] as { label: string; color: 'amber' | 'blue' }[], action: '', badge: 'Listo para enviar', badgeColor: C.amber, btnType: 'send' as const },
    { star: false, name: 'Carmen Vega', city: 'Humacao', months: '16 meses', tags: [] as { label: string; color: 'amber' | 'blue' }[], action: '', badge: 'Listo para enviar', badgeColor: C.amber, btnType: 'none' as const },
  ];

  return (
    <div style={{ background: C.mainBg, borderRadius: '10px', overflow: 'hidden', border: `1px solid ${C.itemBorder}`, fontFamily: 'var(--font-inter)', fontSize: '11px' }}>
      <div style={{ padding: '16px 18px 12px', borderBottom: `1px solid ${C.itemBorder}` }}>
        <div style={{ fontFamily: 'var(--font-outfit)', fontWeight: 700, fontSize: '16px', color: C.dark, marginBottom: '4px' }}>Revisiones</div>
        <div style={{ fontSize: '11px', color: 'rgba(10,10,10,0.35)' }}>6 requieren acción · 1 esperando respuesta</div>
      </div>
      <div style={{ padding: '10px 18px', display: 'flex', gap: '4px', borderBottom: `1px solid ${C.itemBorder}`, flexWrap: 'nowrap', overflowX: 'auto' }}>
        {filters.map((f) => (
          <span key={f.label} style={{ fontSize: '10px', padding: '4px 10px', borderRadius: '100px', background: f.active ? C.dark : 'transparent', color: f.active ? '#FAFAFA' : 'rgba(10,10,10,0.40)', fontWeight: f.active ? 500 : 400, border: f.active ? 'none' : '1px solid rgba(10,10,10,0.08)', cursor: 'default', whiteSpace: 'nowrap', flexShrink: 0 }}>{f.label} {f.count}</span>
        ))}
      </div>
      <div style={{ padding: '4px 0' }}>
        {items.map((item) => (
          <div key={item.name} className="hover:bg-black/[0.02] transition-colors" style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', padding: '12px 18px', borderBottom: `1px solid ${C.itemBorder}` }}>
            {/* Star */}
            <div style={{ flexShrink: 0, paddingTop: '2px' }}>
              {item.star ? (
                <svg width="14" height="14" viewBox="0 0 24 24" fill={C.amber} stroke={C.amber} strokeWidth="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              ) : (
                <div style={{ width: '14px', height: '14px' }} />
              )}
            </div>
            {/* Content */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '3px' }}>
                <span style={{ fontSize: '12px', fontWeight: 600, color: C.dark }}>{item.name}</span>
                <span style={{ fontSize: '10px', color: 'rgba(10,10,10,0.30)' }}>{item.city} · {item.months}</span>
              </div>
              {item.tags.length > 0 && (
                <div style={{ display: 'flex', gap: '4px', marginBottom: '5px', flexWrap: 'wrap' }}>
                  {item.tags.map((t) => (
                    <span key={t.label} style={{ fontSize: '10px', padding: '2px 8px', borderRadius: '100px', background: t.color === 'amber' ? C.badgeAmberBg : C.badgeBlueBg, color: t.color === 'amber' ? C.badgeAmberColor : C.badgeBlueColor, fontWeight: 500 }}>{t.label}</span>
                  ))}
                </div>
              )}
              {item.action && (
                <div style={{ fontSize: '10px', color: 'rgba(10,10,10,0.35)', marginBottom: '6px' }}>✧ {item.action}</div>
              )}
              <div style={{ display: 'flex', gap: '6px' }}>
                {item.btnType === 'contact' && (
                  <button
                    onClick={() => onOpenModal('followup')}
                    style={{ background: C.badgeGreenBg, color: C.badgeGreenColor, border: 'none', borderRadius: '6px', padding: '4px 10px', fontSize: '9.5px', fontWeight: 500, cursor: 'pointer', fontFamily: 'var(--font-inter)', display: 'flex', alignItems: 'center', gap: '3px' }}
                  >
                    📞 Contactar cliente
                  </button>
                )}
                {item.btnType === 'send' && (
                  <button style={{ background: C.dark, color: '#FAFAFA', border: 'none', borderRadius: '6px', padding: '4px 10px', fontSize: '9.5px', fontWeight: 500, cursor: 'default', fontFamily: 'var(--font-inter)' }}>
                    Enviar revisión
                  </button>
                )}
                {item.tags.length > 0 && (
                  <button
                    onClick={() => onOpenModal('responses')}
                    style={{ background: 'transparent', color: 'rgba(10,10,10,0.45)', border: '1px solid rgba(10,10,10,0.10)', borderRadius: '6px', padding: '4px 10px', fontSize: '9.5px', fontWeight: 500, cursor: 'pointer', fontFamily: 'var(--font-inter)' }}
                  >
                    Ver respuestas
                  </button>
                )}
              </div>
            </div>
            {/* Badge */}
            <div style={{ flexShrink: 0, display: 'flex', alignItems: 'center', gap: '3px', paddingTop: '2px' }}>
              <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: item.badgeColor }} />
              <span style={{ fontSize: '9px', fontWeight: 500, color: item.badgeColor, whiteSpace: 'nowrap' }}>{item.badge}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   Explain Card (right side, with framer-motion)
   ═══════════════════════════════════════════════ */
function ExplainCard({ card, tabKey }: { card: typeof tabs[number]['card']; tabKey: string }) {
  return (
    <motion.div
      key={tabKey}
      initial={{ opacity: 0, x: 12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      style={{
        background: 'transparent',
      }}
    >
      {/* Label */}
      <div
        style={{
          fontFamily: 'var(--font-inter)',
          fontSize: '10px',
          fontWeight: 700,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: '#EB8C3D',
          marginBottom: '10px',
        }}
      >
        {card.label}
      </div>

      {/* Title */}
      <h3
        style={{
          fontFamily: 'var(--font-outfit)',
          fontSize: '21px',
          fontWeight: 700,
          color: '#FFFFFF',
          letterSpacing: '-0.02em',
          lineHeight: 1.2,
          marginBottom: '10px',
        }}
      >
        {card.title}
      </h3>

      {/* Description */}
      <p
        style={{
          fontFamily: 'var(--font-inter)',
          fontSize: '14px',
          lineHeight: 1.72,
          color: 'rgba(255,255,255,0.52)',
          marginBottom: '18px',
        }}
      >
        {card.description}
      </p>

      {/* Points */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {card.points.map((point) => (
          <div key={point} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '7px' }}>
            <span style={{ color: '#EB8C3D', fontSize: '13px', flexShrink: 0, marginTop: '2px' }}>→</span>
            <span
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '13px',
                lineHeight: 1.5,
                color: 'rgba(255,255,255,0.62)',
              }}
            >
              {point}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════
   MODAL 1 — Respuestas del cliente
   ═══════════════════════════════════════════════ */
function ResponsesModal({ onClose, onContactClient }: { onClose: () => void; onContactClient: () => void }) {
  const questions = [
    { q: '¿Cómo califica el rendimiento de su sistema?', a: 'Muy bien' },
    { q: '¿Ha notado cambios en su factura eléctrica?', a: 'A veces sube más de lo esperado' },
    { q: '¿Ha considerado agregar batería de respaldo?', a: 'Quizá, depende del costo' },
    { q: '¿Cómo describe la estabilidad del servicio eléctrico?', a: 'Igual, hay apagones' },
    { q: '¿Le interesaría una evaluación de mejora?', a: 'Sí' },
    { q: '¿Prefiere que le contactemos por?', a: 'WhatsApp' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.30)', zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px' }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.2 }}
        style={{ maxWidth: '448px', width: '100%', background: '#FFFFFF', borderRadius: '16px', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)', overflow: 'hidden' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{ padding: '16px 20px', borderBottom: `1px solid ${C.itemBorder}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontFamily: 'var(--font-outfit)', fontWeight: 700, fontSize: '16px', color: C.dark }}>Respuestas del cliente</span>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(10,10,10,0.40)', fontSize: '18px', lineHeight: 1, padding: '4px' }}>✕</button>
        </div>

        {/* Body */}
        <div style={{ padding: '20px', fontFamily: 'var(--font-inter)' }}>
          {/* Client info */}
          <div style={{ fontSize: '13px', fontWeight: 500, color: C.dark, marginBottom: '16px' }}>Ana Martínez · Caguas</div>

          {/* Questions */}
          <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '16px' }}>
            {questions.map((item, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: i < questions.length - 1 ? `1px solid ${C.itemBorder}` : 'none', gap: '12px' }}>
                <span style={{ fontSize: '13px', color: C.dark, flex: 1 }}>{item.q}</span>
                <span style={{ fontSize: '13px', color: 'rgba(10,10,10,0.60)', flexShrink: 0, textAlign: 'right' }}>{item.a}</span>
              </div>
            ))}
          </div>

          {/* Recommendation */}
          <div style={{ background: C.badgeAmberBg, borderRadius: '10px', padding: '14px 16px', marginBottom: '12px' }}>
            <div style={{ fontSize: '9px', fontWeight: 600, letterSpacing: '0.1em', color: C.amber, textTransform: 'uppercase', marginBottom: '6px' }}>RECOMENDACIÓN IA</div>
            <div style={{ fontSize: '13px', color: C.dark, lineHeight: 1.6 }}>Evaluar cargador EV para farmacia. Alto consumo mensual con perfil ideal para financiamiento combinado.</div>
          </div>

          {/* Tag */}
          <span style={{ display: 'inline-block', background: C.badgeBlueBg, color: C.badgeBlueColor, fontSize: '11px', fontWeight: 500, padding: '3px 10px', borderRadius: '100px', marginBottom: '16px' }}>Posible cargador EV</span>

          {/* Actions */}
          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              onClick={() => onContactClient()}
              style={{ background: C.badgeGreenColor, color: '#FFFFFF', border: 'none', borderRadius: '8px', padding: '9px 16px', fontSize: '13px', fontWeight: 500, cursor: 'pointer', fontFamily: 'var(--font-inter)' }}
            >
              Contactar cliente
            </button>
            <button style={{ background: 'transparent', color: 'rgba(10,10,10,0.50)', border: '1px solid rgba(10,10,10,0.12)', borderRadius: '8px', padding: '9px 16px', fontSize: '13px', fontWeight: 500, cursor: 'default', fontFamily: 'var(--font-inter)' }}>Crear seguimiento</button>
            <button style={{ background: 'transparent', color: 'rgba(10,10,10,0.50)', border: '1px solid rgba(10,10,10,0.12)', borderRadius: '8px', padding: '9px 16px', fontSize: '13px', fontWeight: 500, cursor: 'default', fontFamily: 'var(--font-inter)' }}>Preparar propuesta</button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════
   MODAL 2 — Nuevo seguimiento
   ═══════════════════════════════════════════════ */
function FollowupModal({ onClose }: { onClose: () => void }) {
  const [channel, setChannel] = useState<'whatsapp' | 'llamada' | 'visita'>('whatsapp');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.30)', zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px' }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.2 }}
        style={{ maxWidth: '448px', width: '100%', background: '#FFFFFF', borderRadius: '16px', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)', overflow: 'hidden' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{ padding: '16px 20px', borderBottom: `1px solid ${C.itemBorder}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontFamily: 'var(--font-outfit)', fontWeight: 700, fontSize: '16px', color: C.dark }}>Nuevo seguimiento</span>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(10,10,10,0.40)', fontSize: '18px', lineHeight: 1, padding: '4px' }}>✕</button>
        </div>

        {/* Body */}
        <div style={{ padding: '20px', fontFamily: 'var(--font-inter)' }}>
          {/* Client */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
            <div style={{ width: '34px', height: '34px', borderRadius: '50%', background: C.badgeAmberBg, color: C.badgeAmberColor, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 600, flexShrink: 0 }}>AM</div>
            <div>
              <div style={{ fontSize: '13px', fontWeight: 600, color: C.dark }}>Ana Martínez · Caguas · 8 meses</div>
            </div>
          </div>

          {/* Oportunidad */}
          <div style={{ marginBottom: '14px' }}>
            <span style={{ display: 'inline-block', background: C.badgeBlueBg, color: C.badgeBlueColor, fontSize: '11px', fontWeight: 500, padding: '3px 10px', borderRadius: '100px' }}>Posible cargador EV</span>
          </div>

          {/* Recomendación IA */}
          <div style={{ background: C.badgeAmberBg, borderRadius: '10px', padding: '14px 16px', marginBottom: '16px' }}>
            <div style={{ fontSize: '9px', fontWeight: 600, letterSpacing: '0.1em', color: C.amber, textTransform: 'uppercase', marginBottom: '6px' }}>RECOMENDACIÓN IA</div>
            <div style={{ fontSize: '13px', color: C.dark, lineHeight: 1.6 }}>Evaluar cargador EV para farmacia. Alto consumo mensual con perfil ideal para financiamiento combinado.</div>
          </div>

          {/* Fecha sugerida */}
          <div style={{ marginBottom: '12px' }}>
            <div style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.08em', color: 'rgba(10,10,10,0.35)', textTransform: 'uppercase', marginBottom: '4px' }}>Fecha sugerida</div>
            <div style={{ fontSize: '14px', fontWeight: 500, color: C.dark }}>Mañana, 10:00 AM</div>
          </div>

          {/* Canal */}
          <div style={{ marginBottom: '12px' }}>
            <div style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.08em', color: 'rgba(10,10,10,0.35)', textTransform: 'uppercase', marginBottom: '4px' }}>Canal</div>
            <div style={{ fontSize: '14px', fontWeight: 500, color: C.dark }}>WhatsApp</div>
          </div>

          {/* Channel selector */}
          <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
            {[
              { key: 'whatsapp' as const, label: 'WhatsApp', activeBg: '#25D366', activeColor: '#FFFFFF' },
              { key: 'llamada' as const, label: 'Llamada', activeBg: '', activeColor: '' },
              { key: 'visita' as const, label: 'Visita técnica', activeBg: '', activeColor: '' },
            ].map((ch) => {
              const isActive = channel === ch.key;
              return (
                <button
                  key={ch.key}
                  onClick={() => setChannel(ch.key)}
                  style={{
                    flex: 1,
                    background: isActive && ch.key === 'whatsapp' ? '#25D366' : 'transparent',
                    color: isActive && ch.key === 'whatsapp' ? '#FFFFFF' : 'rgba(10,10,10,0.50)',
                    border: isActive && ch.key === 'whatsapp' ? 'none' : '1px solid rgba(10,10,10,0.12)',
                    borderRadius: '8px',
                    padding: '8px 12px',
                    fontSize: '12px',
                    fontWeight: 500,
                    cursor: 'pointer',
                    fontFamily: 'var(--font-inter)',
                  }}
                >
                  {ch.label}
                </button>
              );
            })}
          </div>

          {/* Buttons */}
          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              onClick={onClose}
              style={{ flex: 1, background: 'transparent', color: 'rgba(10,10,10,0.50)', border: '1px solid rgba(10,10,10,0.12)', borderRadius: '8px', padding: '10px 16px', fontSize: '13px', fontWeight: 500, cursor: 'pointer', fontFamily: 'var(--font-inter)' }}
            >
              Cancelar
            </button>
            <button
              onClick={onClose}
              style={{ flex: 1, background: C.dark, color: '#FAFAFA', border: 'none', borderRadius: '8px', padding: '10px 16px', fontSize: '13px', fontWeight: 500, cursor: 'pointer', fontFamily: 'var(--font-inter)' }}
            >
              Crear seguimiento
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════
   Main PlatformSection
   ═══════════════════════════════════════════════ */
export function PlatformSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [visibleMessages, setVisibleMessages] = useState(0);
  const [openModal, setOpenModal] = useState<'responses' | 'followup' | null>(null);

  const currentTab = tabs[activeTab];

  const handleTabChange = useCallback((index: number) => {
    if (index === activeTab) return;
    setIsVisible(false);
    setTimeout(() => {
      setActiveTab(index);
      setIsVisible(true);
      setVisibleMessages(0);
    }, 200);
  }, [activeTab]);

  /* Message animation effect — only for tab 0 */
  useEffect(() => {
    if (activeTab !== 0) return;
    if (visibleMessages >= 6) {
      const timer = setTimeout(() => setVisibleMessages(0), 2000);
      return () => clearTimeout(timer);
    }
    const timer = setTimeout(() => setVisibleMessages((v) => v + 1), 1200);
    return () => clearTimeout(timer);
  }, [visibleMessages, activeTab]);

  const handleCloseModal = useCallback(() => {
    setOpenModal(null);
  }, []);

  const handleOpenModal = useCallback((modal: 'responses' | 'followup') => {
    setOpenModal(modal);
  }, []);

  const handleContactFromResponses = useCallback(() => {
    setOpenModal('followup');
  }, []);

  return (
    <section
      id="plataforma"
      style={{ backgroundColor: '#FFFFFF' }}
      className="py-14 md:py-28"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-6">
        {/* Label with orange bar accent */}
        <div
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
              background: C.amber,
              borderRadius: '2px',
              display: 'inline-block',
            }}
          />
          <span
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '11px',
              fontWeight: 700,
              color: C.amber,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
            }}
          >
            LA PLATAFORMA
          </span>
        </div>

        {/* Headline — dynamic per tab with transition */}
        <div style={{ transition: 'opacity 0.2s ease', opacity: isVisible ? 1 : 0 }}>
          <h2
            style={{
              fontFamily: 'var(--font-outfit)',
              fontWeight: 700,
              fontSize: 'clamp(28px, 4vw, 36px)',
              lineHeight: 1.15,
              letterSpacing: '-0.03em',
              color: C.dark,
              marginBottom: '12px',
              maxWidth: '640px',
            }}
          >
            {currentTab.headline}
          </h2>
        </div>

        {/* Paragraph */}
        <p
          style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '14px',
            fontWeight: 400,
            lineHeight: 1.7,
            color: 'rgba(10,10,10,0.50)',
            maxWidth: '650px',
            marginBottom: '24px',
          }}
        >
          Solvist actúa como un equipo de agentes comerciales: responde leads, analiza necesidades, prepara propuestas y mantiene vivo cada seguimiento.
        </p>

        <div
          className="grid grid-cols-2 md:grid-cols-4"
          style={{
            border: '1px solid rgba(10,10,10,0.08)',
            borderRadius: '12px',
            marginBottom: '34px',
            maxWidth: '860px',
            overflow: 'hidden',
          }}
        >
          {[
            { num: '01', label: 'Responde', text: 'Primer contacto en minutos' },
            { num: '02', label: 'Analiza', text: 'Necesidad, urgencia y contexto' },
            { num: '03', label: 'Propone', text: 'Siguiente oferta o mensaje' },
            { num: '04', label: 'Sigue', text: 'Follow-up hasta respuesta' },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                background: '#FAFAFA',
                borderRight: '1px solid rgba(10,10,10,0.06)',
                padding: '16px 18px',
                position: 'relative',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-outfit)',
                  fontSize: 11,
                  fontWeight: 700,
                  color: C.amber,
                  letterSpacing: '0.08em',
                  marginBottom: 6,
                }}
              >
                {item.num}
              </div>
              <div
                style={{
                  color: C.dark,
                  fontFamily: 'var(--font-outfit)',
                  fontSize: 15,
                  fontWeight: 700,
                  marginBottom: 4,
                }}
              >
                {item.label}
              </div>
              <div
                style={{
                  color: 'rgba(10,10,10,0.48)',
                  fontSize: 12,
                  lineHeight: 1.45,
                }}
              >
                {item.text}
              </div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '34px', width: 'fit-content' }}>
          {tabs.map((tab, i) => (
            <button
              key={tab.key}
              onClick={() => handleTabChange(i)}
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '13px',
                fontWeight: 500,
                padding: '9px 22px',
                borderRadius: '8px',
                backgroundColor: activeTab === i ? C.dark : 'transparent',
                color: activeTab === i ? '#FAFAFA' : 'rgba(10,10,10,0.50)',
                border: activeTab === i ? '1px solid #0A0A0A' : '1px solid rgba(10,10,10,0.15)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div
          className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6 items-start"
          style={{
            transition: 'opacity 0.2s ease',
            opacity: isVisible ? 1 : 0,
          }}
        >
          {/* Left: Mockup panel — direct child of grid */}
          <div
            className="order-2 lg:order-1"
            style={{
              border: '1px solid rgba(10,10,10,0.07)',
              borderRadius: '12px',
              overflow: 'auto',
              boxShadow: '0 18px 60px rgba(0,0,0,0.10)',
              minHeight: '460px',
            }}
          >
            {activeTab === 0 && <ConversacionesMockup visibleMessages={visibleMessages} />}
            {activeTab === 1 && <PendientesMockup />}
            {activeTab === 2 && <PropuestasMockup />}
            {activeTab === 3 && <RevisionesMockup onOpenModal={handleOpenModal} />}
          </div>

          {/* Right: Explain card — direct child of grid, same level */}
          <motion.div
            key={currentTab.key}
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="order-1 lg:order-2"
            style={{
              background: '#0A0A0A',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '12px',
              padding: '26px',
              position: 'sticky',
              top: '96px',
            }}
          >
            <ExplainCard card={currentTab.card} tabKey={currentTab.key} />
          </motion.div>
        </div>
      </div>

      {/* Modals */}
      <AnimatePresence>
        {openModal === 'responses' && (
          <ResponsesModal
            onClose={handleCloseModal}
            onContactClient={handleContactFromResponses}
          />
        )}
        {openModal === 'followup' && (
          <FollowupModal onClose={handleCloseModal} />
        )}
      </AnimatePresence>
    </section>
  );
}
