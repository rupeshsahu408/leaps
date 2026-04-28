import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import Locations from '../components/Locations'

const detailedRegions = [
  {
    name: 'Mumbai Region',
    status: 'Live',
    color: '#CD1C18',
    summary: 'The Financial Hub & Startup Capital',
    highlights: [
      'Direct access to India\'s largest VC ecosystem',
      'Demo Days hosted in BKC partner spaces',
      'Mentor pool from fintech, media & D2C',
    ],
    students: '120+',
  },
  {
    name: 'Pune Region',
    status: 'Live',
    color: '#CD1C18',
    summary: 'The IT & Education Capital of Maharashtra',
    highlights: [
      'Anchor partnerships with engineering colleges',
      'Strong SaaS and product talent network',
      'Weekly builder meetups across Hinjewadi & Kothrud',
    ],
    students: '180+',
  },
  {
    name: 'Nashik Region',
    status: 'Soon',
    color: '#A8DCAB',
    summary: 'The Industrial & Agricultural Powerhouse',
    highlights: [
      'Agri-tech and manufacturing focus tracks',
      'Field projects with local cooperatives',
      'Pilot launching with select institutions',
    ],
    students: 'Q3 ‘26',
  },
  {
    name: 'Satara Region',
    status: 'Soon',
    color: '#A8DCAB',
    summary: 'The Emerging Tech & Education Hub',
    highlights: [
      'Tier-2 builder bootcamp model',
      'Hybrid cohorts for remote founders',
      'Scholarships available for first cohort',
    ],
    students: 'Q4 ‘26',
  },
  {
    name: 'Baramati Region',
    status: 'Soon',
    color: '#BE91BE',
    summary: 'The Innovation & Agri-Tech Center',
    highlights: [
      'Agri innovation challenges',
      'Public-private partnership pilot',
      'Founder residency programs in development',
    ],
    students: 'Q4 ‘26',
  },
  {
    name: 'Kolhapur Region',
    status: 'Soon',
    color: '#A8DCAB',
    summary: 'The Manufacturing & Entrepreneurial Core',
    highlights: [
      'D2C & manufacturing-led startup track',
      'Local supplier and distribution mentorship',
      'Outreach with regional college network',
    ],
    students: 'Q1 ‘27',
  },
]

export default function LocationsPage() {
  return (
    <>
      <PageHeader
        eyebrow="LEAP is Here"
        title="Empowering builders across"
        highlight="Maharashtra."
        subtitle="From Mumbai to Kolhapur — discover the regions where LEAP is live, expanding, and partnering with institutions to bring practical startup education to every campus."
      />

      <Locations />

      {/* Detailed region cards */}
      <section style={{ padding: '5rem 1.5rem', position: 'relative' }}>
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
              Inside each <span className="gradient-red">LEAP region</span>
            </h2>
            <p style={{ color: 'rgba(219,170,167,0.7)', maxWidth: 640, margin: '0 auto', lineHeight: 1.65 }}>
              Each region runs its own cohorts, partner network, and mentor pool — tuned to the local ecosystem.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {detailedRegions.map(r => (
              <div
                key={r.name}
                className="tilt-card glass-dark"
                style={{
                  borderRadius: 20,
                  padding: '1.75rem',
                  border: `1px solid ${r.color}33`,
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: -40,
                    right: -40,
                    width: 140,
                    height: 140,
                    borderRadius: '50%',
                    background: `radial-gradient(circle, ${r.color}33 0%, transparent 70%)`,
                    pointerEvents: 'none',
                  }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem', position: 'relative' }}>
                  <div>
                    <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, fontSize: '1.25rem', color: '#fff', marginBottom: 4 }}>
                      {r.name}
                    </h3>
                    <p style={{ fontSize: '0.82rem', color: 'rgba(255,168,150,0.7)' }}>{r.summary}</p>
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
                      background: `${r.color}20`,
                      color: r.color === '#CD1C18' ? '#FFA896' : r.color,
                      border: `1px solid ${r.color}55`,
                      flexShrink: 0,
                    }}
                  >
                    {r.status}
                  </span>
                </div>

                <ul style={{ listStyle: 'none', padding: 0, margin: '1rem 0 1.25rem', display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                  {r.highlights.map((h, i) => (
                    <li key={i} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                      <span style={{ color: '#A8DCAB', fontWeight: 800, lineHeight: 1.4 }}>›</span>
                      <span style={{ fontSize: '0.86rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.5 }}>{h}</span>
                    </li>
                  ))}
                </ul>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                  <div>
                    <p style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '0.62rem', fontWeight: 700, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                      {r.status === 'Live' ? 'Builders Active' : 'Cohort Launch'}
                    </p>
                    <p style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '1.1rem', fontWeight: 800, color: '#fff' }}>{r.students}</p>
                  </div>
                  <Link
                    to="/contact"
                    style={{
                      fontFamily: "'Space Grotesk',sans-serif",
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      color: '#A8DCAB',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                    }}
                  >
                    Get details
                    <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 6h8M6 2l4 4-4 4" /></svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
