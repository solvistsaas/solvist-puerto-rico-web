export default function DashboardMockup() {
  return (
    <div
      style={{
        display: 'flex',
        height: '100%',
        fontFamily: 'var(--font-inter)',
      }}
    >
      {/* Left sidebar */}
      <div
        style={{
          width: '120px',
          backgroundColor: '#0F1117',
          borderRight: '1px solid rgba(255,255,255,0.05)',
          padding: '12px 10px',
          flexShrink: 0,
        }}
      >
        <div style={{ marginBottom: '16px' }}>
          <div
            style={{
              fontFamily: 'var(--font-outfit)',
              fontSize: '12px',
              fontWeight: 700,
              color: '#FAFAFA',
              lineHeight: 1.2,
            }}
          >
            Solvist
          </div>
          <div
            style={{
              fontSize: '8px',
              color: 'rgba(255,255,255,0.3)',
              marginTop: '2px',
            }}
          >
            Asistente Solar
          </div>
        </div>

        {[
          { name: 'Conversaciones', active: true },
          { name: 'Pendientes', active: false },
          { name: 'Propuestas', active: false },
          { name: 'Clientes', active: false },
          { name: 'Revisiones', active: false },
          { name: 'Automatización', active: false },
        ].map((item) => (
          <div
            key={item.name}
            style={{
              fontSize: '10px',
              fontWeight: item.active ? 500 : 400,
              color: item.active ? '#EB8C3D' : 'rgba(250,250,250,0.35)',
              padding: '5px 8px',
              borderRadius: '6px',
              marginBottom: '2px',
              backgroundColor: item.active
                ? 'rgba(235,140,61,0.1)'
                : 'transparent',
            }}
          >
            {item.name}
          </div>
        ))}
      </div>

      {/* Main content area */}
      <div
        style={{
          flex: 1,
          padding: '14px 16px',
          overflow: 'hidden',
          backgroundColor: '#FFFFFF',
        }}
      >
        <div style={{ marginBottom: '12px' }}>
          <div
            style={{
              fontFamily: 'var(--font-outfit)',
              fontSize: '14px',
              fontWeight: 700,
              color: '#0A0A0A',
            }}
          >
            Conversaciones
          </div>
          <div
            style={{
              fontSize: '10px',
              color: 'rgba(10,10,10,0.40)',
              marginTop: '2px',
            }}
          >
            16 activas · hace 7h última
          </div>
        </div>

        {/* Conversation list */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {[
            {
              name: 'Carlos Rivera',
              loc: 'Bayamón',
              status: 'Visita confirmada',
              badge: '✓',
              badgeColor: '#EB8C3D',
              initial: 'CR',
            },
            {
              name: 'María González',
              loc: 'Guaynabo',
              status: 'Esperando respuesta',
              badge: '2',
              badgeColor: '#16a34a',
              initial: 'MG',
            },
            {
              name: 'Roberto López',
              loc: 'Ponce',
              status: 'Sin respuesta',
              badge: '9h',
              badgeColor: 'rgba(10,10,10,0.25)',
              initial: 'RL',
            },
            {
              name: 'Ana Martínez',
              loc: 'Caguas',
              status: 'Visita confirmada',
              badge: '✓',
              badgeColor: '#EB8C3D',
              initial: 'AM',
            },
            {
              name: 'Jorge Torres',
              loc: 'Mayagüez',
              status: 'Esperando factura',
              badge: '11h',
              badgeColor: 'rgba(10,10,10,0.25)',
              initial: 'JT',
            },
          ].map((conv) => (
            <div
              key={conv.name}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '7px 8px',
                borderBottom: '1px solid rgba(10,10,10,0.05)',
              }}
            >
              <div
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  backgroundColor: '#F3F4F6',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '9px',
                  fontWeight: 600,
                  color: 'rgba(10,10,10,0.50)',
                  flexShrink: 0,
                }}
              >
                {conv.initial}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    fontSize: '11px',
                    fontWeight: 600,
                    color: '#0A0A0A',
                    lineHeight: 1.3,
                  }}
                >
                  {conv.name}
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    marginTop: '1px',
                  }}
                >
                  <div
                    style={{
                      width: '4px',
                      height: '4px',
                      borderRadius: '50%',
                      backgroundColor:
                        conv.badgeColor === '#EB8C3D'
                          ? '#EB8C3D'
                          : conv.badgeColor === '#16a34a'
                            ? '#16a34a'
                            : 'rgba(10,10,10,0.15)',
                    }}
                  />
                  <span
                    style={{
                      fontSize: '9px',
                      color: 'rgba(10,10,10,0.50)',
                    }}
                  >
                    {conv.loc} · {conv.status}
                  </span>
                </div>
              </div>
              <div
                style={{
                  fontSize: '9px',
                  fontWeight: 600,
                  color: conv.badgeColor,
                  padding: '2px 6px',
                  borderRadius: '4px',
                  backgroundColor:
                    conv.badgeColor === '#EB8C3D'
                      ? 'rgba(235,140,61,0.10)'
                      : conv.badgeColor === '#16a34a'
                        ? 'rgba(34,197,94,0.10)'
                        : 'transparent',
                  flexShrink: 0,
                }}
              >
                {conv.badge}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
