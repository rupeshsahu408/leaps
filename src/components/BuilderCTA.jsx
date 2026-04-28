export default function BuilderCTA() {
  return (
    <section
      style={{
        padding: '8rem 1.5rem',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(180deg, rgba(38,0,9,0.5) 0%, rgba(56,0,10,1) 100%)',
      }}
    >
      {/* Radial glows */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', top: '30%', left: '50%', transform: 'translateX(-50%)', width: 700, height: 300, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(205,28,24,0.2) 0%, transparent 70%)', filter: 'blur(60px)' }} />
        <div style={{ position: 'absolute', bottom: '10%', left: '15%', width: 250, height: 250, borderRadius: '50%', background: 'radial-gradient(circle, rgba(81,151,85,0.1) 0%, transparent 70%)', filter: 'blur(40px)' }} />
        <div style={{ position: 'absolute', top: '10%', right: '10%', width: 200, height: 200, borderRadius: '50%', background: 'radial-gradient(circle, rgba(190,145,190,0.1) 0%, transparent 70%)', filter: 'blur(40px)' }} />
      </div>

      {/* Grid overlay */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.04, pointerEvents: 'none' }}>
        <svg width="100%" height="100%"><defs><pattern id="grid2" width="80" height="80" patternUnits="userSpaceOnUse"><path d="M 80 0 L 0 0 0 80" fill="none" stroke="#CD1C18" strokeWidth="0.5"/></pattern></defs><rect width="100%" height="100%" fill="url(#grid2)"/></svg>
      </div>

      <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative', zIndex: 10, textAlign: 'center' }}>
        <hr className="hr-gradient" style={{ marginBottom: '5rem' }} />

        <h2
          style={{
            fontFamily: "'Space Grotesk',sans-serif",
            fontWeight: 900,
            fontSize: 'clamp(2.5rem, 7vw, 5rem)',
            color: '#fff',
            letterSpacing: '-0.04em',
            lineHeight: 1.05,
            marginBottom: '2rem',
            textShadow: '0 4px 40px rgba(205,28,24,0.3)',
          }}
        >
          BECOME A{' '}
          <span className="gradient-red">BUILDER.</span>
          <br />
          <span style={{ color: 'rgba(255,255,255,0.3)' }}>NOT JUST A</span>{' '}
          GRADUATE.
        </h2>

        <p style={{ fontSize: '1.1rem', color: 'rgba(219,170,167,0.7)', marginBottom: '3rem', maxWidth: 520, margin: '0 auto 3rem' }}>
          Stop studying entrepreneurship. Start building your future today.
        </p>

        <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="#join"
            className="btn-3d pulse-glow"
            style={{
              fontFamily: "'Space Grotesk',sans-serif",
              fontWeight: 700, fontSize: '1rem', letterSpacing: '0.06em', textTransform: 'uppercase',
              background: 'linear-gradient(135deg, #CD1C18 0%, #9B1313 100%)',
              color: '#fff', padding: '18px 44px', borderRadius: 999,
              textDecoration: 'none',
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              boxShadow: '0 8px 36px rgba(205,28,24,0.5), 0 0 0 1px rgba(205,28,24,0.35)',
            }}
          >
            JOIN THE COHORT
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 9h10M10 5l4 4-4 4"/></svg>
          </a>
          <a
            href="#curriculum"
            className="btn-3d"
            style={{
              fontFamily: "'Space Grotesk',sans-serif",
              fontWeight: 600, fontSize: '1rem', letterSpacing: '0.04em',
              background: 'rgba(168,220,171,0.08)',
              color: '#A8DCAB', padding: '18px 44px', borderRadius: 999,
              textDecoration: 'none',
              border: '1px solid rgba(168,220,171,0.25)',
            }}
          >
            View Curriculum
          </a>
        </div>
      </div>
    </section>
  )
}
