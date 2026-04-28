const tracks = [
  {
    id: 'founder',
    label: 'The Comprehensive Path',
    title: 'The Founder',
    icon: '🚀',
    emoji: '🏗️',
    description: 'Aspiring entrepreneurs ready to commit to a full-scale venture.',
    colorClass: 'glow-border-red',
    cardClass: 'card-bg',
    accentColor: '#CD1C18',
    tagBg: 'rgba(205,28,24,0.15)',
    tagBorder: 'rgba(205,28,24,0.35)',
    tagColor: '#FFA896',
    inside: [
      'Problem Discovery & Validation',
      'Revenue Strategy & Sales',
      'Scale, Policy & AI Systems',
      'Public Expo & Market Launch',
      'Capital Raising & Sustainability',
    ],
    output: [
      'A real startup with verified revenue',
      'Investor-ready 10-slide pitch deck',
      'Verified Revenue Proof Portfolio',
      'Direct network with VCs & Mentors',
    ],
  },
  {
    id: 'builder',
    label: 'The Technical Path',
    title: 'The Builder',
    icon: '⚡',
    emoji: '💻',
    description: 'Product-focused individuals who want to master building and testing fast.',
    colorClass: 'glow-border-green',
    cardClass: 'card-bg-green',
    accentColor: '#519755',
    tagBg: 'rgba(81,151,85,0.15)',
    tagBorder: 'rgba(168,220,171,0.35)',
    tagColor: '#A8DCAB',
    inside: [
      'MVP Frameworks & No-Code',
      'Generative AI Integration',
      'Rapid User Testing Blitz',
      'Product-Market Fit Sprints',
      'Technical Product Management',
    ],
    output: [
      'A functional, live MVP',
      'Technical Product Portfolio',
      '100+ points of user validation',
      'Mastery of No-Code/AI tools',
    ],
  },
  {
    id: 'creator',
    label: 'The Distribution Path',
    title: 'The Creator',
    icon: '✨',
    emoji: '📣',
    description: 'Individuals looking to build distribution, influence, and sales mastery.',
    colorClass: 'glow-border-lavender',
    cardClass: 'card-bg-lavender',
    accentColor: '#BE91BE',
    tagBg: 'rgba(190,145,190,0.12)',
    tagBorder: 'rgba(190,145,190,0.3)',
    tagColor: '#BE91BE',
    inside: [
      'Personal Branding Mastery',
      '48-Hour Content Sprints',
      'GTM Strategy & Distribution',
      'Sales Negotiation & CRM',
      'Platform Algorithm Logic',
    ],
    output: [
      'High-traction personal brand',
      'Viral content portfolio',
      'Verified sales track record',
      'Community of brand ambassadors',
    ],
  },
]

function CheckIcon({ color }) {
  return (
    <svg width="16" height="16" fill="none" viewBox="0 0 16 16" style={{ flexShrink: 0, marginTop: 2 }}>
      <circle cx="8" cy="8" r="7" fill={color} fillOpacity="0.15" />
      <path d="M5 8l2.5 2.5L11 5.5" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default function Tracks() {
  return (
    <section id="tracks" style={{ padding: '7rem 1.5rem', position: 'relative', overflow: 'hidden' }}>
      {/* Background glow blobs */}
      <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', width: 700, height: 400, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(205,28,24,0.07) 0%, transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Section header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <div style={{ width: 30, height: 1.5, background: 'linear-gradient(90deg, transparent, #CD1C18)' }} />
            <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '0.72rem', fontWeight: 700, color: '#FFA896', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
              Choose Your Path
            </span>
            <div style={{ width: 30, height: 1.5, background: 'linear-gradient(90deg, #CD1C18, transparent)' }} />
          </div>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
            What your Student <span className="gradient-green">Learns</span> and <span className="gradient-red">Experiences</span>
          </h2>
        </div>

        {/* Cards grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.75rem' }}>
          {tracks.map((track) => (
            <div
              key={track.id}
              className={`tilt-card ${track.colorClass} ${track.cardClass}`}
              style={{ borderRadius: 24, padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', position: 'relative', overflow: 'hidden' }}
            >
              {/* Decorative corner orb */}
              <div style={{ position: 'absolute', top: -30, right: -30, width: 120, height: 120, borderRadius: '50%', background: `radial-gradient(circle, ${track.accentColor}30 0%, transparent 70%)`, pointerEvents: 'none' }} />

              {/* Top */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <div
                    className="icon-circle"
                    style={{ background: `linear-gradient(135deg, ${track.accentColor}30, ${track.accentColor}10)`, border: `1px solid ${track.accentColor}30` }}
                  >
                    {track.emoji}
                  </div>
                  <div>
                    <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: track.tagColor, display: 'block' }}>
                      {track.label}
                    </span>
                  </div>
                </div>
                <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, fontSize: '1.75rem', color: '#fff', letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>
                  {track.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'rgba(219,170,167,0.75)', lineHeight: 1.6 }}>
                  {track.description}
                </p>
              </div>

              <hr className="hr-gradient" />

              {/* Inside */}
              <div>
                <p style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '0.75rem' }}>
                  What's Inside
                </p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {track.inside.map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.88rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.5 }}>
                      <CheckIcon color={track.accentColor} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <hr className="hr-gradient" />

              {/* Output */}
              <div>
                <p style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '0.75rem' }}>
                  The Output
                </p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {track.output.map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.88rem', color: track.tagColor, lineHeight: 1.5 }}>
                      <span style={{ color: track.accentColor, fontSize: '1rem', lineHeight: 1.5, flexShrink: 0 }}>→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <a
                href="#curriculum"
                style={{
                  marginTop: 'auto',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontFamily: "'Space Grotesk',sans-serif",
                  fontWeight: 700,
                  fontSize: '0.82rem',
                  color: track.tagColor,
                  textDecoration: 'none',
                  letterSpacing: '0.04em',
                  transition: 'gap 0.2s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.gap = '0.7rem'}
                onMouseLeave={e => e.currentTarget.style.gap = '0.4rem'}
              >
                Explore Full Curriculum
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 7h8M7 3l4 4-4 4"/>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
