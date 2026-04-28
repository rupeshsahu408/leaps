import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import Tracks from '../components/Tracks'
import Curriculum from '../components/Curriculum'
import HowItWorks from '../components/HowItWorks'
import VideoSection from '../components/VideoSection'

const stats = [
  { value: '24', label: 'Weeks Total' },
  { value: '6', label: 'Phases' },
  { value: '70%', label: 'Action-Based' },
  { value: '8 Wks', label: 'To First Sale' },
]

export default function PlatformPage() {
  return (
    <>
      <PageHeader
        eyebrow="The LEAP Platform"
        title="A practical engine for"
        highlight="founders, builders & creators."
        subtitle="An industry-led 24-week journey across 6 phases — engineered for execution, not lectures. Choose your path, get matched with mentors, and ship a real venture."
      />

      {/* Stats strip */}
      <section style={{ padding: '3rem 1.5rem', borderBottom: '1px solid rgba(205,28,24,0.12)' }}>
        <div
          style={{
            maxWidth: 1100,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1.5rem',
          }}
          className="stats-grid"
        >
          {stats.map(s => (
            <div
              key={s.label}
              className="glass-dark"
              style={{
                borderRadius: 18,
                padding: '1.5rem 1.25rem',
                textAlign: 'center',
                border: '1px solid rgba(168,220,171,0.12)',
              }}
            >
              <p
                style={{
                  fontFamily: "'Space Grotesk',sans-serif",
                  fontWeight: 800,
                  fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
                  color: '#fff',
                  letterSpacing: '-0.03em',
                  marginBottom: 4,
                }}
              >
                {s.value}
              </p>
              <p
                style={{
                  fontFamily: "'Space Grotesk',sans-serif",
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  color: '#A8DCAB',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>
        <style>{`
          @media (max-width: 720px) { .stats-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        `}</style>
      </section>

      <VideoSection />
      <Tracks />
      <Curriculum />
      <HowItWorks />

      {/* Closing CTA */}
      <section style={{ padding: '6rem 1.5rem', textAlign: 'center' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: "'Space Grotesk',sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              color: '#fff',
              letterSpacing: '-0.03em',
              lineHeight: 1.15,
              marginBottom: '1.25rem',
            }}
          >
            Ready to <span className="gradient-green">build</span> instead of just learn?
          </h2>
          <p style={{ color: 'rgba(219,170,167,0.7)', lineHeight: 1.7, marginBottom: '2rem' }}>
            Cohort 2 is open. Pick your track, lock your seat, and start shipping in week one.
          </p>
          <Link
            to="/join"
            className="btn-3d"
            style={{
              fontFamily: "'Space Grotesk',sans-serif",
              fontWeight: 700,
              fontSize: '0.92rem',
              letterSpacing: '0.04em',
              background: 'linear-gradient(135deg, #CD1C18 0%, #9B1313 100%)',
              color: '#fff',
              padding: '14px 32px',
              borderRadius: 999,
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              boxShadow: '0 6px 24px rgba(205,28,24,0.45)',
            }}
          >
            Join the Cohort
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  )
}
