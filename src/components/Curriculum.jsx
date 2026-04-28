import { useState } from 'react'

const phases = [
  {
    week: 'Weeks 01 – 04',
    title: 'Problem Discovery',
    subtitle: '"From Observation to Prototype"',
    color: '#CD1C18',
    items: [
      { cat: 'Communication & Self', lessons: ['How to Give an Inspiring Speech', 'How to Write Persuasively', 'Societal observation and structured problem recording'] },
      { cat: 'Finance & Fintech', lessons: ['How to Understand Basic Financial Terminology', 'How to Read and Analyse Financial Statements', 'Unit economics and profitability understanding'] },
      { cat: 'Solution Mapping', lessons: ['Reverse Pitch Sessions: Pitching problems back to community', 'Converting identified real problems into practical solutions', 'Foundation for startup idea development'] },
    ],
    outcome: 'Identified 10+ real community problems with validated prototypes',
  },
  {
    week: 'Weeks 05 – 08',
    title: 'Revenue Strategy',
    subtitle: '"From Idea to First Rupee"',
    color: '#9B1313',
    items: [
      { cat: 'Sales & Marketing', lessons: ['Cold outreach mastery', 'Pricing strategy and positioning', 'Customer persona development'] },
      { cat: 'Product Development', lessons: ['MVP definition and scoping', 'Rapid prototyping with no-code tools', 'User feedback loops'] },
    ],
    outcome: 'First paying customer within 8 weeks',
  },
  {
    week: 'Weeks 09 – 12',
    title: 'Scale & AI Systems',
    subtitle: '"Automate, Delegate, Scale"',
    color: '#519755',
    items: [
      { cat: 'AI Integration', lessons: ['Generative AI for business workflows', 'Automation tools: Zapier, Make, n8n', 'AI-powered marketing & customer support'] },
      { cat: 'Operations & Policy', lessons: ['Legal basics: Incorporating, IP, contracts', 'Hiring your first team member', 'Standard Operating Procedures'] },
    ],
    outcome: 'Automated operations saving 20+ hours/week',
  },
  {
    week: 'Weeks 13 – 16',
    title: 'Public Expo & Launch',
    subtitle: '"Go to Market Live"',
    color: '#A8DCAB',
    items: [
      { cat: 'Go-To-Market', lessons: ['Distribution channel strategy', 'Launch playbooks and PR', 'Community building and virality'] },
      { cat: 'Brand & Content', lessons: ['Visual identity basics', 'Content calendar and system', 'Influencer and partnership strategy'] },
    ],
    outcome: 'Public product launch with 500+ user waitlist',
  },
  {
    week: 'Weeks 17 – 20',
    title: 'Investor Pitch',
    subtitle: '"Tell the Story, Raise the Money"',
    color: '#BE91BE',
    items: [
      { cat: 'Fundraising', lessons: ['How VCs think and evaluate startups', 'Building a 10-slide pitch deck', 'Term sheets, valuation, and dilution basics'] },
      { cat: 'Financial Modelling', lessons: ['3-year revenue projections', 'Cap table management', 'Unit economics at scale'] },
    ],
    outcome: 'Investor-ready pitch with 5+ VC introductions',
  },
  {
    week: 'Weeks 21 – 24',
    title: 'Demo Day',
    subtitle: '"Ship It. Show It. Sell It."',
    color: '#FFA896',
    items: [
      { cat: 'Demo Day Prep', lessons: ['Live product demonstration', 'Storytelling under pressure', 'Q&A handling and objection management'] },
      { cat: 'Alumni Network', lessons: ['Joining the LEAP founder community', 'Mentorship and accountability circles', 'Access to LEAP investor network'] },
    ],
    outcome: 'Live demo in front of investors, mentors & press',
  },
]

export default function Curriculum() {
  const [activePhase, setActivePhase] = useState(0)
  const phase = phases[activePhase]

  return (
    <section id="curriculum" style={{ padding: '7rem 1.5rem', position: 'relative', background: 'rgba(0,0,0,0.15)' }}>
      {/* Top hr */}
      <hr className="hr-gradient" style={{ marginBottom: '5rem' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <div style={{ width: 30, height: 1.5, background: 'linear-gradient(90deg, transparent, #A8DCAB)' }} />
            <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '0.72rem', fontWeight: 700, color: '#A8DCAB', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
              Course Overview
            </span>
            <div style={{ width: 30, height: 1.5, background: 'linear-gradient(90deg, #A8DCAB, transparent)' }} />
          </div>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: '#fff', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
            Master Concepts{' '}
            <span className="gradient-red">Inside</span>{' '}
            And{' '}
            <span className="gradient-green">Outside</span>{' '}
            the Classroom
          </h2>
        </div>

        {/* Phase tabs */}
        <div className="phase-scroll" style={{ marginBottom: '2.5rem', gap: '0.6rem', padding: '0.25rem 0' }}>
          {phases.map((p, i) => (
            <button
              key={i}
              onClick={() => setActivePhase(i)}
              style={{
                fontFamily: "'Space Grotesk',sans-serif",
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.04em',
                padding: '8px 18px',
                borderRadius: 999,
                border: activePhase === i ? `1.5px solid ${p.color}` : '1.5px solid rgba(255,255,255,0.1)',
                background: activePhase === i ? `${p.color}22` : 'transparent',
                color: activePhase === i ? p.color : 'rgba(255,255,255,0.45)',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                whiteSpace: 'nowrap',
                boxShadow: activePhase === i ? `0 0 16px ${p.color}40` : 'none',
              }}
            >
              Phase {i + 1}
            </button>
          ))}
        </div>

        {/* Phase detail */}
        <div
          key={activePhase}
          className="fade-up glass-dark"
          style={{ borderRadius: 24, padding: '2.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem', border: `1px solid ${phase.color}30`, boxShadow: `0 0 40px ${phase.color}15, 0 20px 60px rgba(0,0,0,0.4)` }}
        >
          {/* Left */}
          <div>
            <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '0.7rem', fontWeight: 700, color: phase.color, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              {phase.week}
            </span>
            <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, fontSize: '2rem', color: '#fff', letterSpacing: '-0.02em', margin: '0.4rem 0 0.25rem', lineHeight: 1.1 }}>
              {phase.title}
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.45)', fontStyle: 'italic', marginBottom: '2rem' }}>
              {phase.subtitle}
            </p>

            {phase.items.map((item, j) => (
              <div key={j} style={{ marginBottom: '1.5rem' }}>
                <p style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '0.78rem', fontWeight: 700, color: phase.color, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
                  {item.cat}
                </p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  {item.lessons.map((l, k) => (
                    <li key={k} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.88rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.5 }}>
                      <span style={{ color: phase.color, flexShrink: 0, fontSize: '1rem' }}>·</span>
                      {l}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Right */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Outcome card */}
            <div
              style={{
                borderRadius: 16,
                padding: '1.75rem',
                background: `linear-gradient(135deg, ${phase.color}18 0%, rgba(38,0,9,0.6) 100%)`,
                border: `1px solid ${phase.color}25`,
              }}
            >
              <p style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '0.7rem', fontWeight: 700, color: phase.color, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                Student Outcomes
              </p>
              <p style={{ fontSize: '1rem', color: '#fff', lineHeight: 1.6 }}>
                {phase.outcome}
              </p>
            </div>

            {/* Navigation */}
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: 'auto' }}>
              <button
                onClick={() => setActivePhase(Math.max(0, activePhase - 1))}
                disabled={activePhase === 0}
                style={{
                  flex: 1, padding: '12px', borderRadius: 12,
                  background: activePhase === 0 ? 'rgba(255,255,255,0.04)' : 'rgba(205,28,24,0.15)',
                  border: activePhase === 0 ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(205,28,24,0.3)',
                  color: activePhase === 0 ? 'rgba(255,255,255,0.25)' : '#FFA896',
                  cursor: activePhase === 0 ? 'default' : 'pointer',
                  fontFamily: "'Space Grotesk',sans-serif",
                  fontWeight: 600, fontSize: '0.82rem',
                  transition: 'all 0.2s',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem',
                }}
              >
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 7H3M7 3L3 7l4 4"/>
                </svg>
                Prev Phase
              </button>
              <button
                onClick={() => setActivePhase(Math.min(phases.length - 1, activePhase + 1))}
                disabled={activePhase === phases.length - 1}
                style={{
                  flex: 1, padding: '12px', borderRadius: 12,
                  background: activePhase === phases.length - 1 ? 'rgba(255,255,255,0.04)' : 'rgba(168,220,171,0.12)',
                  border: activePhase === phases.length - 1 ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(168,220,171,0.25)',
                  color: activePhase === phases.length - 1 ? 'rgba(255,255,255,0.25)' : '#A8DCAB',
                  cursor: activePhase === phases.length - 1 ? 'default' : 'pointer',
                  fontFamily: "'Space Grotesk',sans-serif",
                  fontWeight: 600, fontSize: '0.82rem',
                  transition: 'all 0.2s',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem',
                }}
              >
                Next Phase
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 7h8M7 3l4 4-4 4"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #curriculum .fade-up { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
