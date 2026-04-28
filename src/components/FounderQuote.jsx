export default function FounderQuote() {
  return (
    <section
      style={{
        padding: '6rem 1.5rem',
        position: 'relative',
        overflow: 'hidden',
        background: 'rgba(0,0,0,0.25)',
      }}
    >
      {/* BG accent */}
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 30% 50%, rgba(205,28,24,0.12) 0%, transparent 60%), radial-gradient(ellipse at 80% 50%, rgba(81,151,85,0.08) 0%, transparent 60%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 5 }}>
        <div
          className="glass-dark"
          style={{
            borderRadius: 28,
            overflow: 'hidden',
            border: '1px solid rgba(205,28,24,0.2)',
            boxShadow: '0 0 80px rgba(205,28,24,0.1), 0 40px 100px rgba(0,0,0,0.5)',
            display: 'grid',
            gridTemplateColumns: '400px 1fr',
          }}
        >
          {/* Left — founder photo */}
          <div style={{ position: 'relative', overflow: 'hidden', minHeight: 420 }}>
            <img
              src="https://i.postimg.cc/Kzxqcf2z/IMG-4002.jpg"
              alt="Shaurya Gaikwad"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
              onError={e => {
                e.target.src = '/shaurya-speaking.png'
              }}
            />
            {/* Name overlay */}
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1rem 1.25rem', background: 'linear-gradient(transparent, rgba(0,0,0,0.85))' }}>
              <p style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: '1rem', color: '#fff', marginBottom: 2 }}>Shaurya Gaikwad</p>
              <p style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '0.7rem', fontWeight: 600, color: '#A8DCAB', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Founder &amp; CEO, LEAP</p>
            </div>
          </div>

          {/* Right — quote */}
          <div style={{ padding: '3.5rem 3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '1.75rem' }}>
            {/* Quote mark */}
            <div style={{ fontSize: '5rem', lineHeight: 0.7, fontFamily: 'Georgia, serif', color: '#CD1C18', opacity: 0.6, userSelect: 'none' }}>"</div>

            <blockquote style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', color: '#fff', lineHeight: 1.35, letterSpacing: '-0.02em', margin: 0 }}>
              When you're building a{' '}
              <em style={{ fontStyle: 'italic', color: '#A8DCAB' }}>Startup</em>
              , you don't just build a Startup but you{' '}
              <span className="gradient-red">Build yourself</span>"
            </blockquote>

            <div style={{ width: 48, height: 3, background: 'linear-gradient(90deg, #CD1C18, #A8DCAB)', borderRadius: 4 }} />

            <p style={{ fontSize: '0.95rem', color: 'rgba(219,170,167,0.75)', lineHeight: 1.75, maxWidth: 460 }}>
              At LEAP, we believe the greatest product of any entrepreneurial journey is the entrepreneur themselves. Our curriculum is designed to push your limits and forge your capability.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 820px) {
          .founder-grid { grid-template-columns: 1fr !important; }
          .founder-img { min-height: 300px !important; }
        }
      `}</style>
    </section>
  )
}
