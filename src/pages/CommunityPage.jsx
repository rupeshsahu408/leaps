import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import Mentors from '../components/Mentors'
import FounderSocial from '../components/FounderSocial'
import SpotlightLab from '../components/SpotlightLab'
import FounderQuote from '../components/FounderQuote'

const pillars = [
  {
    icon: '🛠️',
    title: 'Builder Circles',
    body: 'Weekly small-group execution sprints — show your progress, get unblocked, ship faster.',
  },
  {
    icon: '🎙️',
    title: 'Founder Sessions',
    body: 'Live AMAs and fireside chats with operators who have built and scaled real ventures.',
  },
  {
    icon: '🤝',
    title: 'Mentor Office Hours',
    body: 'Weekly 1:1 slots with industry mentors across product, GTM, fundraising, and ops.',
  },
  {
    icon: '🏆',
    title: 'Demo Days',
    body: 'Quarterly showcases in front of investors, partners, and press — your launchpad moment.',
  },
  {
    icon: '🌐',
    title: 'Alumni Network',
    body: 'A cross-cohort network of builders, hiring partners, and angels — for life.',
  },
  {
    icon: '🚀',
    title: 'Build Sprints',
    body: 'Time-boxed building marathons across regions — the original LEAP pressure cooker.',
  },
]

const events = [
  { date: '12 May', title: 'Pune Builder Circle', tag: 'Weekly', city: 'Pune' },
  { date: '17 May', title: 'Founder AMA — D2C Playbook', tag: 'Online', city: 'Virtual' },
  { date: '24 May', title: 'Mumbai Demo Day Preview', tag: 'Showcase', city: 'BKC, Mumbai' },
  { date: '02 Jun', title: 'Build Sprint #4 — 48-Hour MVP', tag: 'Sprint', city: 'Pune & Online' },
]

export default function CommunityPage() {
  return (
    <>
      <PageHeader
        eyebrow="The LEAP Community"
        title="A network of"
        highlight="builders, not bystanders."
        subtitle="Mentors, alumni, founders, and current cohort builders — moving in the same direction. Get plugged into circles, sprints, and showcases that compound your progress."
      />

      {/* Pillars */}
      <section style={{ padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2
              style={{
                fontFamily: "'Space Grotesk',sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)',
                color: '#fff',
                letterSpacing: '-0.03em',
                marginBottom: '1rem',
              }}
            >
              Six pillars of the <span className="gradient-green">LEAP community</span>
            </h2>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {pillars.map(p => (
              <div
                key={p.title}
                className="tilt-card glass-dark"
                style={{
                  borderRadius: 18,
                  padding: '1.5rem',
                  border: '1px solid rgba(168,220,171,0.14)',
                }}
              >
                <div style={{ fontSize: '1.6rem', marginBottom: '0.75rem' }}>{p.icon}</div>
                <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: '1.05rem', color: '#fff', marginBottom: '0.5rem' }}>{p.title}</h3>
                <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.6 }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SpotlightLab />
      <Mentors />
      <FounderSocial />

      {/* Upcoming events */}
      <section style={{ padding: '5rem 1.5rem', background: 'rgba(0,0,0,0.18)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '0.72rem', fontWeight: 700, color: '#A8DCAB', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
              What's Next
            </span>
            <h2
              style={{
                fontFamily: "'Space Grotesk',sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(1.8rem, 3.2vw, 2.4rem)',
                color: '#fff',
                letterSpacing: '-0.03em',
                marginTop: '0.5rem',
              }}
            >
              Upcoming <span className="gradient-red">events</span>
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {events.map((e, i) => (
              <div
                key={i}
                className="tilt-card"
                style={{
                  borderRadius: 14,
                  padding: '1rem 1.25rem',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.25rem',
                  flexWrap: 'wrap',
                }}
              >
                <div
                  style={{
                    background: 'linear-gradient(135deg, rgba(205,28,24,0.18), rgba(81,151,85,0.18))',
                    border: '1px solid rgba(168,220,171,0.18)',
                    borderRadius: 10,
                    padding: '0.5rem 0.85rem',
                    minWidth: 78,
                    textAlign: 'center',
                  }}
                >
                  <p style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, color: '#fff', letterSpacing: '0.04em' }}>{e.date}</p>
                </div>
                <div style={{ flex: 1, minWidth: 200 }}>
                  <p style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, color: '#fff' }}>{e.title}</p>
                  <p style={{ fontSize: '0.8rem', color: 'rgba(255,168,150,0.7)' }}>{e.city}</p>
                </div>
                <span
                  style={{
                    fontFamily: "'Space Grotesk',sans-serif",
                    fontSize: '0.62rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    padding: '4px 10px',
                    borderRadius: 999,
                    background: 'rgba(168,220,171,0.12)',
                    color: '#A8DCAB',
                    border: '1px solid rgba(168,220,171,0.25)',
                  }}
                >
                  {e.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FounderQuote />

      {/* Closing CTA */}
      <section style={{ padding: '5rem 1.5rem', textAlign: 'center' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: "'Space Grotesk',sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
              color: '#fff',
              letterSpacing: '-0.03em',
              marginBottom: '1.25rem',
            }}
          >
            Be in the room with <span className="gradient-green">builders.</span>
          </h2>
          <p style={{ color: 'rgba(219,170,167,0.7)', lineHeight: 1.7, marginBottom: '2rem' }}>
            Join the cohort and get full community access — circles, mentors, demo days, and the alumni network.
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
