const regions = [
  {
    name: 'Mumbai Region',
    subtitle: 'The Financial Hub & Startup Capital',
    status: 'active',
    icon: '🏙️',
  },
  {
    name: 'Pune Region',
    subtitle: 'The IT & Education Capital of Maharashtra',
    status: 'active',
    icon: '💻',
  },
  {
    name: 'Nashik Region',
    subtitle: 'The Industrial & Agricultural Powerhouse',
    status: 'planned',
    icon: '🏭',
  },
  {
    name: 'Satara Region',
    subtitle: 'The Emerging Tech & Education Hub',
    status: 'planned',
    icon: '📡',
  },
  {
    name: 'Baramati Region',
    subtitle: 'The Innovation & Agri-Tech Center',
    status: 'planned',
    icon: '🌿',
  },
  {
    name: 'Kolhapur Region',
    subtitle: 'The Manufacturing & Entrepreneurial Core',
    status: 'planned',
    icon: '⚙️',
  },
]

export default function Locations() {
  return (
    <section id="locations" style={{ padding: '7rem 1.5rem', position: 'relative', overflow: 'hidden' }}>
      {/* BG */}
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 30%, rgba(81,151,85,0.08) 0%, transparent 60%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 5 }}>
        <hr className="hr-gradient" style={{ marginBottom: '5rem' }} />

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <div style={{ width: 28, height: 1.5, background: 'linear-gradient(90deg, transparent, #A8DCAB)' }} />
            <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '0.7rem', fontWeight: 700, color: '#A8DCAB', letterSpacing: '0.18em', textTransform: 'uppercase' }}>LEAP is Here</span>
            <div style={{ width: 28, height: 1.5, background: 'linear-gradient(90deg, #A8DCAB, transparent)' }} />
          </div>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', color: '#fff', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '1rem' }}>
            Empowering builders across{' '}
            <span className="gradient-green">Maharashtra's</span>{' '}
            most vibrant innovation hubs.
          </h2>
        </div>

        {/* Map + Regions grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }}>
          {/* Maharashtra visual map placeholder */}
          <div
            className="tilt-card glass-dark"
            style={{
              borderRadius: 24,
              overflow: 'hidden',
              border: '1px solid rgba(168,220,171,0.15)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
              minHeight: 380,
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem',
            }}
          >
            {/* Stylized Maharashtra outline */}
            <svg viewBox="0 0 320 260" width="100%" style={{ maxHeight: 300, opacity: 0.9 }}>
              {/* Background */}
              <rect width="320" height="260" fill="transparent" />

              {/* Maharashtra approximate outline */}
              <path
                d="M 60 40 L 100 30 L 150 25 L 200 35 L 240 50 L 270 75 L 280 110 L 265 145 L 240 175 L 200 195 L 160 210 L 130 200 L 100 180 L 70 155 L 45 125 L 40 90 Z"
                fill="rgba(81,151,85,0.08)"
                stroke="rgba(168,220,171,0.35)"
                strokeWidth="2"
              />

              {/* City dots */}
              {/* Mumbai */}
              <circle cx="68" cy="115" r="8" fill="#CD1C18" opacity="0.9">
                <animate attributeName="r" values="6;10;6" dur="2s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0.9;0.5;0.9" dur="2s" repeatCount="indefinite"/>
              </circle>
              <circle cx="68" cy="115" r="18" fill="#CD1C18" opacity="0.15">
                <animate attributeName="r" values="14;22;14" dur="2s" repeatCount="indefinite"/>
              </circle>
              <text x="82" y="119" fontFamily="Space Grotesk, sans-serif" fontSize="10" fill="#FFA896" fontWeight="600">Mumbai</text>

              {/* Pune */}
              <circle cx="128" cy="138" r="7" fill="#CD1C18" opacity="0.85">
                <animate attributeName="r" values="5;9;5" dur="2.4s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0.85;0.4;0.85" dur="2.4s" repeatCount="indefinite"/>
              </circle>
              <circle cx="128" cy="138" r="16" fill="#CD1C18" opacity="0.12">
                <animate attributeName="r" values="12;20;12" dur="2.4s" repeatCount="indefinite"/>
              </circle>
              <text x="140" y="142" fontFamily="Space Grotesk, sans-serif" fontSize="10" fill="#FFA896" fontWeight="600">Pune</text>

              {/* Nashik */}
              <circle cx="130" cy="70" r="5" fill="#A8DCAB" opacity="0.7"/>
              <text x="140" y="74" fontFamily="Space Grotesk, sans-serif" fontSize="9" fill="rgba(168,220,171,0.7)">Nashik</text>

              {/* Satara */}
              <circle cx="148" cy="170" r="5" fill="#A8DCAB" opacity="0.7"/>
              <text x="158" y="174" fontFamily="Space Grotesk, sans-serif" fontSize="9" fill="rgba(168,220,171,0.7)">Satara</text>

              {/* Baramati */}
              <circle cx="168" cy="152" r="5" fill="#BE91BE" opacity="0.7"/>
              <text x="178" y="156" fontFamily="Space Grotesk, sans-serif" fontSize="9" fill="rgba(190,145,190,0.8)">Baramati</text>

              {/* Kolhapur */}
              <circle cx="130" cy="193" r="5" fill="#A8DCAB" opacity="0.7"/>
              <text x="140" y="197" fontFamily="Space Grotesk, sans-serif" fontSize="9" fill="rgba(168,220,171,0.7)">Kolhapur</text>
            </svg>

            {/* Legend */}
            <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#CD1C18', boxShadow: '0 0 8px rgba(205,28,24,0.8)' }} />
                <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '0.72rem', color: '#FFA896', fontWeight: 600 }}>Active Region</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#A8DCAB', opacity: 0.7 }} />
                <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '0.72rem', color: 'rgba(255,255,255,0.45)', fontWeight: 600 }}>Planned</span>
              </div>
            </div>
          </div>

          {/* Regions list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {regions.map((r, i) => (
              <div
                key={i}
                className="tilt-card"
                style={{
                  borderRadius: 14,
                  padding: '1rem 1.25rem',
                  background: r.status === 'active'
                    ? 'linear-gradient(135deg, rgba(205,28,24,0.14), rgba(38,0,9,0.8))'
                    : 'rgba(255,255,255,0.03)',
                  border: r.status === 'active'
                    ? '1px solid rgba(205,28,24,0.3)'
                    : '1px solid rgba(255,255,255,0.07)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  boxShadow: r.status === 'active' ? '0 4px 20px rgba(205,28,24,0.15)' : 'none',
                }}
              >
                <span style={{ fontSize: '1.4rem', flexShrink: 0 }}>{r.icon}</span>
                <div style={{ flex: 1 }}>
                  <p style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: '0.95rem', color: r.status === 'active' ? '#fff' : 'rgba(255,255,255,0.55)', marginBottom: 2 }}>
                    {r.name}
                  </p>
                  <p style={{ fontSize: '0.78rem', color: r.status === 'active' ? 'rgba(255,168,150,0.75)' : 'rgba(255,255,255,0.3)' }}>
                    {r.subtitle}
                  </p>
                </div>
                <span style={{
                  fontFamily: "'Space Grotesk',sans-serif",
                  fontSize: '0.62rem', fontWeight: 700,
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  padding: '3px 10px', borderRadius: 999,
                  background: r.status === 'active' ? 'rgba(205,28,24,0.2)' : 'rgba(255,255,255,0.06)',
                  color: r.status === 'active' ? '#FFA896' : 'rgba(255,255,255,0.3)',
                  border: r.status === 'active' ? '1px solid rgba(205,28,24,0.3)' : '1px solid rgba(255,255,255,0.08)',
                  flexShrink: 0,
                }}>
                  {r.status === 'active' ? 'Live' : 'Soon'}
                </span>
              </div>
            ))}

            {/* Expand CTA */}
            <div style={{ borderRadius: 14, padding: '1rem 1.25rem', background: 'rgba(168,220,171,0.06)', border: '1px dashed rgba(168,220,171,0.2)', textAlign: 'center' }}>
              <p style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '0.8rem', fontWeight: 600, color: 'rgba(168,220,171,0.6)', marginBottom: '0.5rem' }}>
                Expanding Soon — Is your city next?
              </p>
              <a href="#institutions" style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '0.78rem', fontWeight: 700, color: '#A8DCAB', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                Partner with us
                <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 6h8M6 2l4 4-4 4"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #locations .loc-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
