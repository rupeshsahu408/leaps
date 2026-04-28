import { useState } from 'react'

const phases = [
  {
    week: 'Weeks 01 – 04',
    title: 'Problem Discovery',
    subtitle: '"From Observation to Prototype"',
    color: '#CD1C18',
    inClass: [
      {
        cat: 'Communication & Self',
        items: ['How to Give an Inspiring Speech', 'How to Write Persuasively', 'Societal observation and structured problem recording'],
      },
      {
        cat: 'Finance & Fintech',
        items: ['How to Understand Basic Financial Terminology', 'How to Read and Analyse Financial Statements', 'Unit economics and profitability understanding'],
      },
      {
        cat: 'Solution Mapping',
        items: ['Reverse Pitch Sessions: Pitching problems back to community', 'Converting identified real problems into practical solutions', 'Foundation for startup idea development'],
      },
    ],
    outClass: [
      {
        label: 'Community Problem Wall',
        desc: 'Students interact directly with local communities, market vendors, and residents to identify pain points and document real problems.',
        img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800',
        tag: 'Discovery',
      },
      {
        label: 'Build Sprint',
        desc: 'A time-limited creation challenge where students compete to produce the most complete prototype in a fixed window.',
        img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800',
        tag: 'Building',
      },
    ],
    studentOutcomes: ['Identified 10+ real community problems', 'Built first functional prototype', 'Mastered problem-to-solution mapping'],
    collegeBenefits: ['NAAC evidence for societal engagement', 'High-quality media assets for college PR'],
  },
  {
    week: 'Weeks 05 – 08',
    title: 'Revenue Strategy',
    subtitle: '"From Idea to First Rupee"',
    color: '#9B1313',
    inClass: [
      { cat: 'Sales & Marketing', items: ['Cold outreach mastery', 'Pricing strategy and positioning', 'Customer persona development'] },
      { cat: 'Product Development', items: ['MVP definition and scoping', 'Rapid prototyping with no-code tools', 'User feedback loops'] },
    ],
    outClass: [
      { label: 'Customer Discovery Sprint', desc: 'Go out and talk to 20 potential customers in 48 hours. Record insights and iterate on your offering.', img: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&q=80&w=800', tag: 'Sales' },
    ],
    studentOutcomes: ['First paying customer within 8 weeks', 'Validated pricing model', 'Built first sales pipeline'],
    collegeBenefits: ['Live case studies for business departments', 'Real entrepreneurship outcomes for NIRF ranking'],
  },
  {
    week: 'Weeks 09 – 12',
    title: 'Scale & AI Systems',
    subtitle: '"Automate, Delegate, Scale"',
    color: '#519755',
    inClass: [
      { cat: 'AI Integration', items: ['Generative AI for business workflows', 'Automation tools: Zapier, Make, n8n', 'AI-powered marketing & customer support'] },
      { cat: 'Operations & Policy', items: ['Legal basics: Incorporating, IP, contracts', 'Hiring your first team member', 'Standard Operating Procedures'] },
    ],
    outClass: [
      { label: 'AI Tools Workshop', desc: 'Hands-on session building AI-powered workflows for your specific startup.', img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&q=80&w=800', tag: 'AI' },
    ],
    studentOutcomes: ['Automated operations saving 20+ hours/week', 'First AI integration deployed', 'Legal structure established'],
    collegeBenefits: ['AI literacy credentials for students', 'Industry-ready graduates with automation skills'],
  },
  {
    week: 'Weeks 13 – 16',
    title: 'Public Expo & Launch',
    subtitle: '"Go to Market Live"',
    color: '#A8DCAB',
    inClass: [
      { cat: 'Go-To-Market', items: ['Distribution channel strategy', 'Launch playbooks and PR', 'Community building and virality'] },
      { cat: 'Brand & Content', items: ['Visual identity basics', 'Content calendar and system', 'Influencer and partnership strategy'] },
    ],
    outClass: [
      { label: 'Campus Launch Day', desc: 'Students publicly launch their startups on campus, driving real sales and building brand presence.', img: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=800', tag: 'Launch' },
    ],
    studentOutcomes: ['Public product launch with 500+ user waitlist', 'Cohesive brand identity', 'Content system running autonomously'],
    collegeBenefits: ['High-visibility campus event for PR', 'Real innovation showcase for accreditation'],
  },
  {
    week: 'Weeks 17 – 20',
    title: 'Investor Pitch',
    subtitle: '"Tell the Story, Raise the Money"',
    color: '#BE91BE',
    inClass: [
      { cat: 'Fundraising', items: ['How VCs think and evaluate startups', 'Building a 10-slide pitch deck', 'Term sheets, valuation, and dilution basics'] },
      { cat: 'Financial Modelling', items: ['3-year revenue projections', 'Cap table management', 'Unit economics at scale'] },
    ],
    outClass: [
      { label: 'Mock Investor Rounds', desc: 'Simulate real investor meetings with practicing VCs and angel investors from the LEAP network.', img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800', tag: 'Fundraising' },
    ],
    studentOutcomes: ['Investor-ready pitch with 5+ VC introductions', 'Complete financial model', 'Term sheet literacy'],
    collegeBenefits: ['Alumni investor panel participation opportunity', 'College-industry linkage for placement rankings'],
  },
  {
    week: 'Weeks 21 – 24',
    title: 'Demo Day',
    subtitle: '"Ship It. Show It. Sell It."',
    color: '#FFA896',
    inClass: [
      { cat: 'Demo Day Prep', items: ['Live product demonstration', 'Storytelling under pressure', 'Q&A handling and objection management'] },
      { cat: 'Alumni Network', items: ['Joining the LEAP founder community', 'Mentorship and accountability circles', 'Access to LEAP investor network'] },
    ],
    outClass: [
      { label: 'Public Demo Day', desc: 'Live event in front of investors, mentors, press, and fellow founders. The culmination of your 24-week journey.', img: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&q=80&w=800', tag: 'Demo Day' },
    ],
    studentOutcomes: ['Live demo in front of investors, mentors & press', 'Joining the LEAP alumni network', 'Startup launched, revenue proven'],
    collegeBenefits: ['Prestigious event for college media', 'Proof of 24-week entrepreneurship program for accreditation bodies'],
  },
]

export default function Curriculum() {
  const [activePhase, setActivePhase] = useState(0)
  const [tab, setTab] = useState('inClass')
  const phase = phases[activePhase]

  return (
    <section id="curriculum" style={{ padding: '7rem 1.5rem', position: 'relative', background: 'rgba(0,0,0,0.18)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <hr className="hr-gradient" style={{ marginBottom: '5rem' }} />

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <div style={{ width: 30, height: 1.5, background: 'linear-gradient(90deg, transparent, #A8DCAB)' }} />
            <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '0.72rem', fontWeight: 700, color: '#A8DCAB', letterSpacing: '0.18em', textTransform: 'uppercase' }}>Course Overview</span>
            <div style={{ width: 30, height: 1.5, background: 'linear-gradient(90deg, #A8DCAB, transparent)' }} />
          </div>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: '#fff', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
            Master Concepts{' '}
            <span className="gradient-red">Inside</span>{' '}
            And{' '}
            <span className="gradient-green">Outside</span>{' '}
            the Classroom
          </h2>
          <p style={{ marginTop: '1rem', fontSize: '0.88rem', color: 'rgba(255,255,255,0.4)', fontStyle: 'italic' }}>
            Each term for experienced professionals lasts 1–2 months and 2–3 months for freshers.
            Designed to build on the previous phase, taking you from zero to a market-ready founder.
            <br/>
            <strong style={{ color: 'rgba(255,168,150,0.6)' }}>24 Weeks Total · 6 Phases</strong>
          </p>
        </div>

        {/* Phase tabs */}
        <div className="phase-scroll" style={{ marginBottom: '2.5rem', gap: '0.6rem', padding: '0.25rem 0' }}>
          {phases.map((p, i) => (
            <button
              key={i}
              onClick={() => { setActivePhase(i); setTab('inClass') }}
              style={{
                fontFamily: "'Space Grotesk',sans-serif", fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.04em',
                padding: '8px 20px', borderRadius: 999,
                border: activePhase === i ? `1.5px solid ${p.color}` : '1.5px solid rgba(255,255,255,0.1)',
                background: activePhase === i ? `${p.color}22` : 'transparent',
                color: activePhase === i ? p.color : 'rgba(255,255,255,0.4)',
                cursor: 'pointer', transition: 'all 0.25s ease', whiteSpace: 'nowrap',
                boxShadow: activePhase === i ? `0 0 16px ${p.color}35` : 'none',
              }}
            >
              Phase {i + 1}
            </button>
          ))}
        </div>

        {/* Phase detail */}
        <div
          key={`${activePhase}-outer`}
          className="fade-up glass-dark"
          style={{ borderRadius: 24, overflow: 'hidden', border: `1px solid ${phase.color}28`, boxShadow: `0 0 40px ${phase.color}12, 0 24px 70px rgba(0,0,0,0.45)` }}
        >
          {/* Phase header */}
          <div style={{ padding: '2rem 2.5rem', background: `linear-gradient(135deg, ${phase.color}16 0%, rgba(38,0,9,0.5) 100%)`, borderBottom: `1px solid ${phase.color}20` }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '0.7rem', fontWeight: 700, color: phase.color, letterSpacing: '0.12em', textTransform: 'uppercase' }}>{phase.week}</span>
                <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, fontSize: '2rem', color: '#fff', letterSpacing: '-0.02em', margin: '0.35rem 0 0.2rem', lineHeight: 1.1 }}>{phase.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.4)', fontStyle: 'italic' }}>{phase.subtitle}</p>
              </div>
              {/* In Class / Out Class tabs */}
              <div style={{ display: 'flex', background: 'rgba(0,0,0,0.3)', borderRadius: 10, padding: '4px', gap: '4px', alignSelf: 'flex-start' }}>
                {[{ k: 'inClass', l: 'In Class' }, { k: 'outClass', l: 'Out Class' }].map(({ k, l }) => (
                  <button key={k} onClick={() => setTab(k)} style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: '0.78rem', padding: '6px 16px', borderRadius: 7, border: 'none', cursor: 'pointer', transition: 'all 0.2s', background: tab === k ? phase.color : 'transparent', color: tab === k ? '#fff' : 'rgba(255,255,255,0.4)' }}>
                    {l}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div style={{ padding: '2rem 2.5rem' }}>
            {tab === 'inClass' ? (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem' }}>
                {/* Left — curriculum items */}
                <div>
                  {phase.inClass.map((item, j) => (
                    <div key={j} style={{ marginBottom: '1.75rem' }}>
                      <p style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '0.75rem', fontWeight: 700, color: phase.color, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.6rem' }}>{item.cat}</p>
                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                        {item.items.map((l, k) => (
                          <li key={k} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.88rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.55 }}>
                            <span style={{ color: phase.color, flexShrink: 0, fontSize: '1rem', lineHeight: 1.5 }}>·</span>{l}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Right — outcomes & college benefits */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div style={{ borderRadius: 14, padding: '1.5rem', background: `linear-gradient(135deg, ${phase.color}14, rgba(38,0,9,0.5))`, border: `1px solid ${phase.color}20` }}>
                    <p style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '0.7rem', fontWeight: 700, color: phase.color, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Student Outcomes</p>
                    {phase.studentOutcomes.map((o, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.4rem' }}>
                        <span style={{ color: phase.color, flexShrink: 0 }}>✓</span>
                        <span style={{ fontSize: '0.86rem', color: '#fff', lineHeight: 1.5 }}>{o}</span>
                      </div>
                    ))}
                  </div>

                  <div style={{ borderRadius: 14, padding: '1.5rem', background: 'rgba(168,220,171,0.06)', border: '1px solid rgba(168,220,171,0.12)' }}>
                    <p style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '0.7rem', fontWeight: 700, color: '#A8DCAB', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>College Benefits</p>
                    {phase.collegeBenefits.map((b, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.4rem' }}>
                        <span style={{ color: '#A8DCAB', flexShrink: 0 }}>✓</span>
                        <span style={{ fontSize: '0.86rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.5 }}>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                {phase.outClass.map((item, j) => (
                  <div key={j} className="tilt-card" style={{ borderRadius: 18, overflow: 'hidden', border: `1px solid ${phase.color}22`, boxShadow: `0 8px 30px rgba(0,0,0,0.4)` }}>
                    <div style={{ height: 180, overflow: 'hidden', position: 'relative' }}>
                      <img src={item.img} alt={item.label} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}/>
                      <div style={{ position: 'absolute', top: '1rem', left: '1rem', background: `${phase.color}33`, border: `1px solid ${phase.color}50`, borderRadius: 999, padding: '3px 10px' }}>
                        <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: phase.color }}>{item.tag}</span>
                      </div>
                    </div>
                    <div style={{ padding: '1.25rem 1.5rem', background: `linear-gradient(135deg, ${phase.color}10, rgba(38,0,9,0.9))` }}>
                      <h4 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: '1rem', color: '#fff', marginBottom: '0.5rem' }}>{item.label}</h4>
                      <p style={{ fontSize: '0.84rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Nav buttons */}
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '2rem' }}>
              <button onClick={() => setActivePhase(Math.max(0, activePhase - 1))} disabled={activePhase === 0}
                style={{ flex: 1, padding: '11px', borderRadius: 10, background: activePhase === 0 ? 'rgba(255,255,255,0.04)' : 'rgba(205,28,24,0.12)', border: activePhase === 0 ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(205,28,24,0.25)', color: activePhase === 0 ? 'rgba(255,255,255,0.2)' : '#FFA896', cursor: activePhase === 0 ? 'default' : 'pointer', fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: '0.82rem', transition: 'all 0.2s', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}>
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 7H3M7 3L3 7l4 4"/></svg>
                Prev Phase
              </button>
              <button onClick={() => setActivePhase(Math.min(phases.length - 1, activePhase + 1))} disabled={activePhase === phases.length - 1}
                style={{ flex: 1, padding: '11px', borderRadius: 10, background: activePhase === phases.length - 1 ? 'rgba(255,255,255,0.04)' : 'rgba(168,220,171,0.1)', border: activePhase === phases.length - 1 ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(168,220,171,0.22)', color: activePhase === phases.length - 1 ? 'rgba(255,255,255,0.2)' : '#A8DCAB', cursor: activePhase === phases.length - 1 ? 'default' : 'pointer', fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: '0.82rem', transition: 'all 0.2s', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}>
                Next Phase
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7h8M7 3l4 4-4 4"/></svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #curriculum .phase-inner-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
