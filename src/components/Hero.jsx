import { Link } from 'react-router-dom'

const pills = [
  'Build Real Startups', '70% Action', 'First Sale in 8 Weeks',
  'Demo Day', 'Investor Pitch', 'MVP Launch', 'Real Revenue',
  'Founder Mindset', 'No Theory', 'Just Execution',
  'Build Real Startups', '70% Action', 'First Sale in 8 Weeks',
  'Demo Day', 'Investor Pitch', 'MVP Launch', 'Real Revenue',
  'Founder Mindset', 'No Theory', 'Just Execution',
]

function Pill({ label }) {
  const colors = [
    { bg: 'rgba(205,28,24,0.15)', border: 'rgba(205,28,24,0.35)', color: '#FFA896' },
    { bg: 'rgba(81,151,85,0.15)',  border: 'rgba(168,220,171,0.35)', color: '#A8DCAB' },
    { bg: 'rgba(190,145,190,0.12)', border: 'rgba(190,145,190,0.3)', color: '#BE91BE' },
  ]
  const c = colors[Math.floor(Math.random() * colors.length)]
  return (
    <span
      style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: '0.75rem',
        fontWeight: 600,
        letterSpacing: '0.05em',
        padding: '6px 14px',
        borderRadius: 999,
        background: c.bg,
        border: `1px solid ${c.border}`,
        color: c.color,
        whiteSpace: 'nowrap',
        flexShrink: 0,
      }}
    >
      {label}
    </span>
  )
}

export default function Hero() {
  return (
    <section
      id="home"
      className="mesh-bg"
      style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', overflow: 'hidden' }}
    >
      {/* Subtle city grid lines */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.06 }}>
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#CD1C18" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Red orb top-left */}
      <div
        className="float-anim"
        style={{
          position: 'absolute', top: '8%', left: '-6%',
          width: 520, height: 520, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(205,28,24,0.28) 0%, transparent 70%)',
          filter: 'blur(40px)',
          pointerEvents: 'none',
        }}
      />
      {/* Green orb bottom-right */}
      <div
        style={{
          position: 'absolute', bottom: '5%', right: '-5%',
          width: 400, height: 400, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(81,151,85,0.18) 0%, transparent 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
        }}
      />
      {/* Lavender orb center */}
      <div
        style={{
          position: 'absolute', top: '40%', right: '20%',
          width: 250, height: 250, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(190,145,190,0.12) 0%, transparent 70%)',
          filter: 'blur(40px)',
          pointerEvents: 'none',
        }}
      />

      {/* Cohort badge — top right (hidden on mobile) */}
      <div
        className="float-anim hero-badge"
        style={{
          position: 'absolute', right: '3rem', top: '12%',
          textAlign: 'right', zIndex: 10,
        }}
      >
        <div
          className="glass-dark pulse-glow"
          style={{ borderRadius: 16, padding: '1.25rem 1.75rem', display: 'inline-block' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'flex-end', marginBottom: 6 }}>
            <span className="dot-live" />
            <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '0.7rem', fontWeight: 700, color: '#A8DCAB', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Open
            </span>
          </div>
          <p style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: '1.4rem', color: '#fff', lineHeight: 1.2 }}>
            1 April – 30 June 2026
          </p>
          <p style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '0.7rem', fontWeight: 600, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: 4 }}>
            Open for Joining
          </p>
          <Link
            to="/join"
            className="btn-3d"
            style={{
              marginTop: '1rem',
              display: 'flex', alignItems: 'center', gap: '0.4rem', justifyContent: 'flex-end',
              fontFamily: "'Space Grotesk',sans-serif",
              fontWeight: 700, fontSize: '0.78rem',
              color: '#fff', textDecoration: 'none',
              letterSpacing: '0.06em', textTransform: 'uppercase',
            }}
          >
            Join the Cohort
            <svg width="16" height="16" fill="none" stroke="#A8DCAB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 8h10M9 4l4 4-4 4"/>
            </svg>
          </Link>
        </div>
      </div>

      {/* Main content */}
      <div className="hero-content" style={{ position: 'relative', zIndex: 10, maxWidth: 1200, margin: '0 auto', padding: '5rem 1.5rem 3rem', width: '100%' }}>
        <div style={{ maxWidth: 660 }}>
          {/* Tag */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.75rem' }}>
            <div style={{ width: 30, height: 1.5, background: 'linear-gradient(90deg,#A8DCAB,#519755)' }} />
            <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '0.72rem', fontWeight: 700, color: '#A8DCAB', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
              Transform Education with LEAP
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontFamily: "'Space Grotesk',sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(2.8rem, 6vw, 5rem)',
              lineHeight: 1.08,
              letterSpacing: '-0.03em',
              marginBottom: '0.5rem',
              color: '#fff',
              textShadow: '0 4px 30px rgba(0,0,0,0.4)',
            }}
          >
            Make yourself<br/>
            <span className="gradient-red" style={{ fontStyle: 'normal' }}>Capable</span>
          </h1>

          <h2
            style={{
              fontFamily: "'Space Grotesk',sans-serif",
              fontWeight: 400,
              fontSize: 'clamp(1.4rem, 3.2vw, 2.2rem)',
              fontStyle: 'italic',
              lineHeight: 1.3,
              marginBottom: '1.75rem',
              color: 'rgba(255,255,255,0.75)',
            }}
          >
            not just by{' '}
            <span className="shimmer-text" style={{ fontStyle: 'italic' }}>learning</span>
            {' '}but by{' '}
            <span className="gradient-green" style={{ fontStyle: 'italic' }}>building.</span>
          </h2>

          <p style={{ fontSize: '1.05rem', color: 'rgba(219,170,167,0.85)', lineHeight: 1.7, marginBottom: '2.5rem', maxWidth: 480 }}>
            Bridge the gap between theory and execution with LEAP's industry-led curriculum and real-world startup challenges.
          </p>

          {/* CTAs */}
          <div className="hero-cta-row" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link
              to="/join"
              className="btn-3d"
              style={{
                fontFamily: "'Space Grotesk',sans-serif",
                fontWeight: 700,
                fontSize: '0.9rem',
                letterSpacing: '0.04em',
                background: 'linear-gradient(135deg, #CD1C18 0%, #9B1313 100%)',
                color: '#fff',
                padding: '14px 32px',
                borderRadius: 999,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: '0 6px 24px rgba(205,28,24,0.45), 0 0 0 1px rgba(205,28,24,0.3)',
              }}
            >
              Join the Cohort
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 8h10M9 4l4 4-4 4"/>
              </svg>
            </Link>
            <Link
              to="/platform"
              className="btn-3d"
              style={{
                fontFamily: "'Space Grotesk',sans-serif",
                fontWeight: 600,
                fontSize: '0.9rem',
                letterSpacing: '0.02em',
                background: 'rgba(168,220,171,0.08)',
                color: '#A8DCAB',
                padding: '14px 32px',
                borderRadius: 999,
                textDecoration: 'none',
                border: '1px solid rgba(168,220,171,0.25)',
              }}
            >
              Explore Tracks
            </Link>
          </div>
        </div>
      </div>

      {/* Scrolling pills */}
      <div style={{ position: 'relative', zIndex: 10, width: '100%', overflow: 'hidden', padding: '2.5rem 0 4rem', maskImage: 'linear-gradient(90deg, transparent, #38000A 8%, #38000A 92%, transparent)' }}>
        <div className="pill-scroll-track">
          {pills.map((p, i) => <Pill key={i} label={p} />)}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-badge { display: none !important; }
          .hero-content { padding: 3rem 1.25rem 1.5rem !important; }
        }
        @media (max-width: 600px) {
          #home .hero-cta-row { gap: 0.65rem !important; }
          #home .hero-cta-row > a { width: 100% !important; justify-content: center !important; padding: 13px 22px !important; }
        }
      `}</style>
    </section>
  )
}
