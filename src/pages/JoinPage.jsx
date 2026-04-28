import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'

const tracks = [
  { name: 'The Founder', tag: 'Comprehensive Path', color: '#CD1C18', desc: 'Build a full venture with verified revenue and an investor-ready pitch.' },
  { name: 'The Builder', tag: 'Technical Path', color: '#A8DCAB', desc: 'Ship a functional MVP using modern no-code, AI, and rapid testing.' },
  { name: 'The Creator', tag: 'Distribution Path', color: '#BE91BE', desc: 'Build a high-traction brand with a verified sales track record.' },
]

const checklist = [
  '24-week immersive cohort program',
  'Mentor matching across product, GTM, and ops',
  'Live demo day with investors and press',
  'Verified revenue / MVP / brand portfolio',
  'Lifetime access to the LEAP alumni network',
]

export default function JoinPage() {
  return (
    <>
      <PageHeader
        eyebrow="Join Cohort 2"
        title="Stop learning."
        highlight="Start building."
        subtitle="Cohort 2 runs 1 April – 30 June 2026. Pick the track that fits you, lock your seat, and start shipping in week one."
      />

      {/* Tracks selector */}
      <section style={{ padding: '4rem 1.5rem 2rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: "'Space Grotesk',sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
              color: '#fff',
              letterSpacing: '-0.03em',
              textAlign: 'center',
              marginBottom: '2.5rem',
            }}
          >
            Pick your <span className="gradient-red">track</span>
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {tracks.map(t => (
              <div
                key={t.name}
                className="tilt-card glass-dark"
                style={{
                  borderRadius: 20,
                  padding: '1.75rem',
                  border: `1px solid ${t.color}45`,
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: -50,
                    right: -50,
                    width: 160,
                    height: 160,
                    borderRadius: '50%',
                    background: `radial-gradient(circle, ${t.color}33 0%, transparent 70%)`,
                    pointerEvents: 'none',
                  }}
                />
                <span
                  style={{
                    fontFamily: "'Space Grotesk',sans-serif",
                    fontSize: '0.66rem',
                    fontWeight: 700,
                    color: t.color === '#CD1C18' ? '#FFA896' : t.color,
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                  }}
                >
                  {t.tag}
                </span>
                <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, fontSize: '1.5rem', color: '#fff', margin: '0.5rem 0 0.75rem', position: 'relative' }}>
                  {t.name}
                </h3>
                <p style={{ fontSize: '0.92rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.55, marginBottom: '1.5rem', position: 'relative' }}>
                  {t.desc}
                </p>
                <Link
                  to="/platform"
                  style={{
                    fontFamily: "'Space Grotesk',sans-serif",
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    color: t.color === '#CD1C18' ? '#FFA896' : t.color,
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                  }}
                >
                  See full curriculum
                  <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 6h8M6 2l4 4-4 4" /></svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply card */}
      <section style={{ padding: '3rem 1.5rem 6rem' }}>
        <div
          style={{
            maxWidth: 980,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1.05fr 1fr',
            gap: '2rem',
            alignItems: 'stretch',
          }}
          className="join-grid"
        >
          <div
            className="glass-dark"
            style={{
              borderRadius: 24,
              padding: '2.25rem',
              border: '1px solid rgba(205,28,24,0.25)',
            }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <span className="dot-live" />
              <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '0.7rem', fontWeight: 700, color: '#A8DCAB', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                Cohort 2 — Open
              </span>
            </div>
            <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, fontSize: '1.7rem', color: '#fff', letterSpacing: '-0.03em', marginBottom: '0.75rem' }}>
              1 April – 30 June 2026
            </h3>
            <p style={{ color: 'rgba(219,170,167,0.7)', lineHeight: 1.65, marginBottom: '1.75rem' }}>
              Applications are reviewed on a rolling basis. Early applicants get first access to mentor matching and seat priority.
            </p>

            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.75rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {checklist.map((c, i) => (
                <li key={i} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" fill="none" stroke="#A8DCAB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}>
                    <path d="M3 9l5 5 7-9" />
                  </svg>
                  <span style={{ color: 'rgba(255,255,255,0.78)', fontSize: '0.92rem', lineHeight: 1.5 }}>{c}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://forms.gle/twuP2P6nxC1MF1RQA"
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
                padding: '14px 0',
                borderRadius: 14,
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                width: '100%',
                boxShadow: '0 6px 24px rgba(205,28,24,0.45)',
              }}
            >
              Apply for the Cohort
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
            </a>
          </div>

          <div
            style={{
              borderRadius: 24,
              padding: '2.25rem',
              background: 'rgba(168,220,171,0.06)',
              border: '1px solid rgba(168,220,171,0.18)',
            }}
          >
            <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '0.7rem', fontWeight: 700, color: '#A8DCAB', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
              What happens next
            </span>
            <h4 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: '1.2rem', color: '#fff', margin: '0.6rem 0 1.25rem' }}>
              Your application journey
            </h4>
            {['Submit your application form', 'Get a discovery call within 5 days', 'Track interview & mentor match', 'Onboard for Cohort 2'].map((s, i) => (
              <div key={i} style={{ display: 'flex', gap: '0.85rem', marginBottom: '0.85rem' }}>
                <div
                  style={{
                    width: 28, height: 28, borderRadius: '50%',
                    background: 'rgba(205,28,24,0.18)',
                    border: '1px solid rgba(205,28,24,0.4)',
                    color: '#FFA896',
                    fontFamily: "'Space Grotesk',sans-serif",
                    fontWeight: 800, fontSize: '0.75rem',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  {i + 1}
                </div>
                <p style={{ fontSize: '0.92rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.55 }}>{s}</p>
              </div>
            ))}

            <div style={{ height: 1, background: 'rgba(168,220,171,0.15)', margin: '1.5rem 0' }} />
            <p style={{ fontSize: '0.84rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>
              Have questions before applying? <Link to="/contact" style={{ color: '#A8DCAB', fontWeight: 700, textDecoration: 'none' }}>Talk to the LEAP team →</Link>
            </p>
          </div>
        </div>

        <style>{`
          @media (max-width: 760px) { .join-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>
    </>
  )
}
