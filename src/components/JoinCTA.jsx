export default function JoinCTA() {
  return (
    <section
      id="join"
      style={{ padding: '7rem 1.5rem', position: 'relative', overflow: 'hidden' }}
    >
      <hr className="hr-gradient" style={{ marginBottom: '5rem' }} />

      {/* Background elements */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', width: 600, height: 300, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(205,28,24,0.15) 0%, transparent 70%)', filter: 'blur(60px)' }} />
        <div style={{ position: 'absolute', bottom: '10%', left: '10%', width: 250, height: 250, borderRadius: '50%', background: 'radial-gradient(circle, rgba(81,151,85,0.1) 0%, transparent 70%)', filter: 'blur(40px)' }} />
        <div style={{ position: 'absolute', top: '10%', right: '10%', width: 200, height: 200, borderRadius: '50%', background: 'radial-gradient(circle, rgba(190,145,190,0.1) 0%, transparent 70%)', filter: 'blur(40px)' }} />
      </div>

      <div style={{ maxWidth: 860, margin: '0 auto', position: 'relative', zIndex: 10 }}>
        <div
          className="glass-dark pulse-glow"
          style={{ borderRadius: 32, padding: 'clamp(2rem, 5vw, 4rem)', textAlign: 'center', border: '1px solid rgba(205,28,24,0.25)' }}
        >
          {/* Badge */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(168,220,171,0.1)', border: '1px solid rgba(168,220,171,0.25)', borderRadius: 999, padding: '6px 14px', marginBottom: '1.75rem' }}>
            <span className="dot-live" />
            <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '0.72rem', fontWeight: 700, color: '#A8DCAB', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              Cohort 2 — Open for Joining
            </span>
          </div>

          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#fff', letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: '1.25rem' }}>
            Ready to{' '}
            <span className="gradient-red">Build</span>
            {' '}your<br/>
            <span className="gradient-green">Startup?</span>
          </h2>

          <p style={{ fontSize: '1rem', color: 'rgba(219,170,167,0.8)', lineHeight: 1.7, maxWidth: 520, margin: '0 auto 2.5rem', letterSpacing: '0.01em' }}>
            Join the LEAP cohort running from{' '}
            <strong style={{ color: '#FFA896' }}>1 April – 30 June 2026</strong>. Seats are limited. Apply now and start your journey from learner to builder.
          </p>

          {/* CTA group */}
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            <a
              href="https://www.leapstartup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-3d"
              style={{
                fontFamily: "'Space Grotesk',sans-serif",
                fontWeight: 700,
                fontSize: '0.95rem',
                letterSpacing: '0.04em',
                background: 'linear-gradient(135deg, #CD1C18 0%, #9B1313 100%)',
                color: '#fff',
                padding: '16px 40px',
                borderRadius: 999,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: '0 8px 30px rgba(205,28,24,0.5), 0 0 0 1px rgba(205,28,24,0.3)',
              }}
            >
              Apply Now — It's Free
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 9h10M10 5l4 4-4 4"/>
              </svg>
            </a>
            <a
              href="https://www.leapstartup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-3d"
              style={{
                fontFamily: "'Space Grotesk',sans-serif",
                fontWeight: 600,
                fontSize: '0.95rem',
                letterSpacing: '0.02em',
                background: 'rgba(168,220,171,0.08)',
                color: '#A8DCAB',
                padding: '16px 40px',
                borderRadius: 999,
                textDecoration: 'none',
                border: '1px solid rgba(168,220,171,0.25)',
              }}
            >
              Download Institutional Deck
            </a>
          </div>

          {/* Trust indicators */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            {['No Degree Required', 'Action-First', 'Real Startup Experience', 'Mentor Access'].map((t, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <svg width="14" height="14" fill="none" viewBox="0 0 14 14">
                  <circle cx="7" cy="7" r="6" fill="rgba(168,220,171,0.15)" />
                  <path d="M4 7l2.5 2.5L10 4.5" stroke="#A8DCAB" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '0.78rem', fontWeight: 500, color: 'rgba(255,255,255,0.45)' }}>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
