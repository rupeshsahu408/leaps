import { Link } from 'react-router-dom'

const tracks = [
  {
    id: 'founder',
    label: 'The Comprehensive Path',
    title: 'The Founder',
    emoji: '🏗️',
    description: 'Aspiring entrepreneurs ready to commit to a full-scale venture.',
    img: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=800',
    colorClass: 'glow-border-red',
    accentColor: '#CD1C18',
    tagColor: '#FFA896',
    cardGrad: 'linear-gradient(180deg, rgba(205,28,24,0.12) 0%, rgba(38,0,9,0.95) 100%)',
    borderColor: 'rgba(205,28,24,0.28)',
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
    emoji: '💻',
    description: 'Product-focused individuals who want to master building and testing fast.',
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
    colorClass: 'glow-border-green',
    accentColor: '#519755',
    tagColor: '#A8DCAB',
    cardGrad: 'linear-gradient(180deg, rgba(81,151,85,0.12) 0%, rgba(26,0,5,0.95) 100%)',
    borderColor: 'rgba(168,220,171,0.2)',
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
    emoji: '📣',
    description: 'Individuals looking to build distribution, influence, and sales mastery.',
    img: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=800',
    colorClass: 'glow-border-lavender',
    accentColor: '#BE91BE',
    tagColor: '#BE91BE',
    cardGrad: 'linear-gradient(180deg, rgba(190,145,190,0.1) 0%, rgba(38,0,9,0.95) 100%)',
    borderColor: 'rgba(190,145,190,0.22)',
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

function Check({ color }) {
  return (
    <svg width="15" height="15" fill="none" viewBox="0 0 15 15" style={{ flexShrink: 0, marginTop: 3 }}>
      <circle cx="7.5" cy="7.5" r="7" fill={color} fillOpacity="0.15"/>
      <path d="M4.5 7.5l2.5 2.5 3.5-4" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default function Tracks() {
  return (
    <section id="tracks" style={{ padding: '7rem 1.5rem', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', width: 700, height: 400, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(205,28,24,0.07) 0%, transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <hr className="hr-gradient" style={{ marginBottom: '5rem' }} />

        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <div style={{ width: 30, height: 1.5, background: 'linear-gradient(90deg, transparent, #CD1C18)' }} />
            <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '0.72rem', fontWeight: 700, color: '#FFA896', letterSpacing: '0.18em', textTransform: 'uppercase' }}>Choose Your Path</span>
            <div style={{ width: 30, height: 1.5, background: 'linear-gradient(90deg, #CD1C18, transparent)' }} />
          </div>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
            What your Student{' '}
            <span className="gradient-green">Learns</span>{' '}
            and{' '}
            <span className="gradient-red">Experiences</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))', gap: '2rem' }}>
          {tracks.map((track) => (
            <div
              key={track.id}
              className="tilt-card"
              style={{
                borderRadius: 24,
                overflow: 'hidden',
                border: `1px solid ${track.borderColor}`,
                background: 'rgba(26,0,5,0.9)',
                boxShadow: `0 20px 60px rgba(0,0,0,0.5), 0 0 30px ${track.accentColor}10`,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Hero image */}
              <div style={{ height: 200, overflow: 'hidden', position: 'relative', flexShrink: 0 }}>
                <img
                  src={track.img}
                  alt={track.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.5s ease' }}
                  onMouseEnter={e => e.target.style.transform = 'scale(1.06)'}
                  onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                />
                {/* Gradient overlay on image */}
                <div style={{ position: 'absolute', inset: 0, background: track.cardGrad }} />
                {/* Tag on image */}
                <div style={{ position: 'absolute', top: '1rem', left: '1rem', background: `${track.accentColor}22`, border: `1px solid ${track.accentColor}40`, borderRadius: 999, padding: '4px 12px' }}>
                  <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: track.tagColor }}>{track.label}</span>
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1.25rem', flex: 1 }}>
                <div>
                  <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, fontSize: '1.75rem', color: '#fff', letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>{track.title}</h3>
                  <p style={{ fontSize: '0.88rem', color: 'rgba(219,170,167,0.7)', lineHeight: 1.6 }}>{track.description}</p>
                </div>

                <hr className="hr-gradient" />

                <div>
                  <p style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '0.65rem' }}>What's Inside</p>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                    {track.inside.map((item, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.86rem', color: 'rgba(255,255,255,0.72)', lineHeight: 1.5 }}>
                        <Check color={track.accentColor} />{item}
                      </li>
                    ))}
                  </ul>
                </div>

                <hr className="hr-gradient" />

                <div>
                  <p style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '0.65rem' }}>The Output</p>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                    {track.output.map((item, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.86rem', color: track.tagColor, lineHeight: 1.5 }}>
                        <span style={{ color: track.accentColor, flexShrink: 0, lineHeight: 1.5 }}>→</span>{item}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/platform"
                  style={{
                    marginTop: 'auto', display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                    fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: '0.82rem',
                    color: track.tagColor, textDecoration: 'none', letterSpacing: '0.04em',
                    transition: 'gap 0.2s ease',
                  }}
                  onMouseEnter={e => e.currentTarget.style.gap = '0.7rem'}
                  onMouseLeave={e => e.currentTarget.style.gap = '0.4rem'}
                >
                  Explore Full Curriculum
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7h8M7 3l4 4-4 4"/></svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
