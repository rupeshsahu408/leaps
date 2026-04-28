export default function InstitutionsContact() {
  return (
    <section id="institutions" style={{ padding: '7rem 1.5rem', position: 'relative', overflow: 'hidden', background: 'rgba(0,0,0,0.2)' }}>
      {/* BG */}
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 50%, rgba(81,151,85,0.07) 0%, transparent 60%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 5 }}>
        <hr className="hr-gradient" style={{ marginBottom: '5rem' }} />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
          {/* Left */}
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(81,151,85,0.1)', border: '1px solid rgba(168,220,171,0.2)', borderRadius: 999, padding: '5px 14px', marginBottom: '1.5rem' }}>
              <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '0.68rem', fontWeight: 700, color: '#A8DCAB', letterSpacing: '0.12em', textTransform: 'uppercase' }}>For Institutions</span>
            </div>
            <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, fontSize: 'clamp(1.6rem, 3vw, 2.5rem)', color: '#fff', letterSpacing: '-0.03em', lineHeight: 1.2, marginBottom: '1.25rem' }}>
              Bring the <span className="gradient-green">Builder Movement</span> to Your Campus.
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'rgba(219,170,167,0.7)', lineHeight: 1.75, marginBottom: '2.5rem' }}>
              Join 50+ institutions that are redefining the future of Indian education.
            </p>

            {/* Contact details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 1.25rem', borderRadius: 14, background: 'rgba(205,28,24,0.08)', border: '1px solid rgba(205,28,24,0.15)' }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(205,28,24,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', flexShrink: 0 }}>✉️</div>
                <div>
                  <p style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '0.7rem', fontWeight: 700, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 3 }}>Email us</p>
                  <a href="mailto:contact@leapstartup.com" style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: '0.95rem', color: '#FFA896', textDecoration: 'none' }}>
                    contact@leapstartup.com
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 1.25rem', borderRadius: 14, background: 'rgba(81,151,85,0.08)', border: '1px solid rgba(168,220,171,0.12)' }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(81,151,85,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', flexShrink: 0 }}>📞</div>
                <div>
                  <p style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '0.7rem', fontWeight: 700, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 3 }}>Call us</p>
                  <a href="tel:+919876543210" style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: '0.95rem', color: '#A8DCAB', textDecoration: 'none' }}>
                    +91 98765 43210
                  </a>
                </div>
              </div>
            </div>

            <a
              href="#"
              className="btn-3d"
              style={{
                fontFamily: "'Space Grotesk',sans-serif",
                fontWeight: 700, fontSize: '0.88rem', letterSpacing: '0.04em',
                background: 'rgba(255,255,255,0.06)',
                color: '#fff', padding: '12px 28px', borderRadius: 12,
                textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 2h8a2 2 0 012 2v12l-6-3-6 3V4a2 2 0 012-2z"/></svg>
              Download Institutional Deck
            </a>
          </div>

          {/* Right — inquiry form card */}
          <div
            className="glass-dark tilt-card"
            style={{
              borderRadius: 24,
              padding: '2.5rem',
              border: '1px solid rgba(168,220,171,0.15)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
            }}
          >
            <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: '1.25rem', color: '#fff', marginBottom: '0.5rem' }}>
              Ready to Start?
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'rgba(219,170,167,0.65)', marginBottom: '2rem', lineHeight: 1.6 }}>
              Click the button below to fill out our official inquiry form on Google Forms.
            </p>

            <a
              href="https://forms.gle/twuP2P6nxC1MF1RQA"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-3d"
              style={{
                fontFamily: "'Space Grotesk',sans-serif",
                fontWeight: 700, fontSize: '0.92rem', letterSpacing: '0.04em',
                background: 'linear-gradient(135deg, #519755, #A8DCAB)',
                color: '#fff', padding: '14px 0',
                borderRadius: 14, textDecoration: 'none',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                width: '100%', marginBottom: '1.25rem',
                boxShadow: '0 6px 24px rgba(81,151,85,0.35)',
              }}
            >
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6H2V5h6M15 3h4v4M9 12L20 1"/></svg>
              Open Inquiry Form
            </a>

            <p style={{ textAlign: 'center', fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}>
              <svg width="12" height="12" fill="none" viewBox="0 0 12 12"><circle cx="6" cy="6" r="5" stroke="rgba(255,255,255,0.3)" strokeWidth="1.2"/><path d="M6 5v3M6 4v.01" stroke="rgba(255,255,255,0.3)" strokeWidth="1.2" strokeLinecap="round"/></svg>
              Estimated time: 2 minutes
            </p>

            <div style={{ marginTop: '2rem', padding: '1.25rem', borderRadius: 12, background: 'rgba(205,28,24,0.08)', border: '1px solid rgba(205,28,24,0.12)' }}>
              <p style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '0.78rem', fontWeight: 700, color: '#FFA896', marginBottom: '0.5rem' }}>What happens next?</p>
              {['We review your institution details', 'Our team reaches out within 48 hours', 'We schedule a demo & onboarding call', 'LEAP goes live at your campus'].map((s, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.4rem' }}>
                  <span style={{ color: '#A8DCAB', fontSize: '0.8rem', lineHeight: 1.5, flexShrink: 0 }}>{i + 1}.</span>
                  <span style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.5 }}>{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 820px) {
          #institutions > div > div:last-child { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  )
}
