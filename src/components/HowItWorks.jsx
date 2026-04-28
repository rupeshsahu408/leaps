const steps = [
  {
    num: '01',
    title: 'Understand Real Problems',
    description: 'Go into the real world — not classrooms. Talk to people, observe daily challenges, and identify real problems that actually matter.',
    outcome: 'You find a real problem worth solving',
    color: '#CD1C18',
    icon: '👁️',
  },
  {
    num: '02',
    title: 'Test Ideas With Real People',
    description: 'Validate your ideas by talking to real users. Collect honest feedback and improve based on reality, not assumptions.',
    outcome: 'You build something people actually want',
    color: '#9B1313',
    icon: '🗣️',
  },
  {
    num: '03',
    title: 'Build Your First Product',
    description: 'Turn your idea into a working product using no-code, coding, or design tools. Focus on speed and execution.',
    outcome: 'You launch your first working MVP',
    color: '#519755',
    icon: '🔨',
  },
  {
    num: '04',
    title: 'Sell & Make Your First Revenue',
    description: 'Launch your product on platforms like Instagram, WhatsApp, and campus markets. Sell to real customers.',
    outcome: 'You earn your first real money',
    color: '#A8DCAB',
    icon: '💰',
  },
  {
    num: '05',
    title: 'Launch, Scale & Pitch',
    description: 'Run marketing campaigns, launch publicly, and present your startup to mentors and investors.',
    outcome: 'You become a founder with proof',
    color: '#BE91BE',
    icon: '📈',
  },
]

export default function HowItWorks() {
  return (
    <section style={{ padding: '7rem 1.5rem', position: 'relative', overflow: 'hidden', background: 'rgba(0,0,0,0.18)' }}>
      {/* Background */}
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 80% 20%, rgba(81,151,85,0.07) 0%, transparent 50%), radial-gradient(ellipse at 20% 80%, rgba(205,28,24,0.07) 0%, transparent 50%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 5 }}>
        <hr className="hr-gradient" style={{ marginBottom: '5rem' }} />

        {/* Header */}
        <div style={{ marginBottom: '4rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <div style={{ width: 28, height: 1.5, background: 'linear-gradient(90deg, #CD1C18, transparent)' }} />
            <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '0.7rem', fontWeight: 700, color: '#FFA896', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
              The Journey
            </span>
          </div>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', color: '#fff', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '0.75rem' }}>
            Learn by Building a <span className="gradient-red">Real Startup.</span>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(219,170,167,0.7)', maxWidth: 520 }}>
            A 24-week program where you find real problems and make real money.
          </p>
        </div>

        {/* Sub-header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '3rem' }}>
          <div style={{ width: 36, height: 1.5, background: 'rgba(255,255,255,0.15)' }} />
          <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '0.85rem', fontWeight: 600, color: 'rgba(255,255,255,0.45)', letterSpacing: '0.04em' }}>
            This Is What You'll Actually Do
          </span>
        </div>
        <p style={{ fontSize: '0.85rem', color: 'rgba(255,168,150,0.6)', fontStyle: 'italic', marginBottom: '3.5rem', fontFamily: "'Space Grotesk',sans-serif", letterSpacing: '0.02em' }}>
          Not theory. Real startups. Real execution.
        </p>

        {/* Steps */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {steps.map((step, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: '0', position: 'relative' }}>
              {/* Left — number + line */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '0.25rem' }}>
                <div
                  style={{
                    width: 48, height: 48, borderRadius: '50%',
                    background: `linear-gradient(135deg, ${step.color}30, ${step.color}10)`,
                    border: `2px solid ${step.color}50`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: "'Space Grotesk',sans-serif",
                    fontWeight: 800, fontSize: '0.85rem',
                    color: step.color,
                    flexShrink: 0,
                    boxShadow: `0 0 20px ${step.color}20`,
                    zIndex: 2,
                    position: 'relative',
                  }}
                >
                  {step.num}
                </div>
                {i < steps.length - 1 && (
                  <div style={{ width: 2, flex: 1, minHeight: 40, background: `linear-gradient(180deg, ${step.color}30, transparent)`, marginTop: 4, marginBottom: 4 }} />
                )}
              </div>

              {/* Right — content */}
              <div
                className="tilt-card"
                style={{
                  marginLeft: '1.5rem',
                  marginBottom: i < steps.length - 1 ? '2rem' : 0,
                  borderRadius: 18,
                  padding: '1.5rem 1.75rem',
                  background: `linear-gradient(135deg, ${step.color}10 0%, rgba(38,0,9,0.5) 100%)`,
                  border: `1px solid ${step.color}25`,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '1.2rem' }}>{step.icon}</span>
                  <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: '1.1rem', color: '#fff', letterSpacing: '-0.01em' }}>
                    {step.title}
                  </h3>
                </div>
                <p style={{ fontSize: '0.9rem', color: 'rgba(219,170,167,0.7)', lineHeight: 1.65, marginBottom: '1rem' }}>
                  {step.description}
                </p>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: `${step.color}15`, border: `1px solid ${step.color}25`, borderRadius: 999, padding: '4px 14px' }}>
                  <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '0.62rem', fontWeight: 700, color: 'rgba(255,255,255,0.45)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Outcome</span>
                  <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '0.8rem', fontWeight: 600, color: step.color }}>
                    "{step.outcome}"
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <a
            href="#join"
            className="btn-3d"
            style={{
              fontFamily: "'Space Grotesk',sans-serif",
              fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.04em',
              background: 'linear-gradient(135deg, #CD1C18, #9B1313)',
              color: '#fff',
              padding: '14px 36px', borderRadius: 999,
              textDecoration: 'none',
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              boxShadow: '0 6px 24px rgba(205,28,24,0.45)',
            }}
          >
            Experience the Journey
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
          </a>
        </div>
      </div>
    </section>
  )
}
