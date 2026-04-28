const socials = [
  {
    platform: 'Instagram',
    handle: '@shauryahelps',
    name: 'Shaurya Gaikwad',
    bio: 'Entrepreneur by Day & Creator by Night · Building @leap_startup · World Record Holder',
    stats: [
      { value: '71.4K', label: 'Followers' },
      { value: '389', label: 'Posts' },
      { value: '546', label: 'Following' },
    ],
    href: 'https://www.instagram.com/shauryahelps/',
    cta: 'Follow on Instagram',
    image: '/social/instagram-shaurya.png',
    accent: '#E1306C',
    accentSoft: 'rgba(225,48,108,0.18)',
    gradient: 'linear-gradient(135deg, #F58529 0%, #DD2A7B 50%, #8134AF 100%)',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2.5" y="2.5" width="19" height="19" rx="5" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
      </svg>
    ),
  },
  {
    platform: 'YouTube',
    handle: '@ShauryaGaikwad',
    name: 'Shaurya Gaikwad',
    bio: '14-year-old entrepreneur, public speaker & author. New videos every Sunday — building in public from school bench to startup stage.',
    stats: [
      { value: '2.8K', label: 'Subscribers' },
      { value: '69', label: 'Videos' },
      { value: 'Weekly', label: 'New Drops' },
    ],
    href: 'https://www.youtube.com/@ShauryaGaikwad',
    cta: 'Subscribe on YouTube',
    image: '/social/youtube-shaurya.png',
    accent: '#FF0033',
    accentSoft: 'rgba(255,0,51,0.18)',
    gradient: 'linear-gradient(135deg, #FF0033 0%, #CD1C18 100%)',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.6 7.2a2.5 2.5 0 0 0-1.76-1.77C18.25 5 12 5 12 5s-6.25 0-7.84.43A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.76 1.77C5.75 19 12 19 12 19s6.25 0 7.84-.43a2.5 2.5 0 0 0 1.76-1.77A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8ZM10 15V9l5.2 3-5.2 3Z" />
      </svg>
    ),
  },
]

export default function FounderSocial() {
  return (
    <section
      id="founder-social"
      style={{
        padding: '7rem 1.5rem',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(180deg, rgba(38,0,9,0) 0%, rgba(0,0,0,0.25) 50%, rgba(38,0,9,0) 100%)',
      }}
    >
      {/* Background glows */}
      <div
        style={{
          position: 'absolute', top: '10%', left: '8%',
          width: 420, height: 420, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(225,48,108,0.12) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute', bottom: '5%', right: '8%',
          width: 420, height: 420, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,0,51,0.14) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 5 }}>
        <hr className="hr-gradient" style={{ marginBottom: '4rem' }} />

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <div style={{ width: 28, height: 1.5, background: 'linear-gradient(90deg, transparent, #A8DCAB)' }} />
            <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '0.72rem', fontWeight: 700, color: '#A8DCAB', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
              Follow the Founder
            </span>
            <div style={{ width: 28, height: 1.5, background: 'linear-gradient(90deg, #A8DCAB, transparent)' }} />
          </div>
          <h2
            style={{
              fontFamily: "'Space Grotesk',sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              color: '#fff',
              letterSpacing: '-0.03em',
              lineHeight: 1.15,
              marginBottom: '1rem',
            }}
          >
            Building in <span className="gradient-red">public</span>, every single day.
          </h2>
          <p
            style={{
              fontSize: '1rem',
              color: 'rgba(219,170,167,0.7)',
              lineHeight: 1.65,
              maxWidth: 620,
              margin: '0 auto',
            }}
          >
            Get the unfiltered look behind LEAP — vlogs, lessons, AMAs, and the daily founder grind.
            Follow Shaurya across platforms.
          </p>
        </div>

        {/* Social cards */}
        <div className="social-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
          {socials.map(s => (
            <a
              key={s.platform}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="tilt-card"
              style={{
                position: 'relative',
                borderRadius: 24,
                overflow: 'hidden',
                textDecoration: 'none',
                background: 'rgba(20,0,5,0.6)',
                border: `1px solid ${s.accentSoft}`,
                boxShadow: `0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px ${s.accentSoft}`,
                display: 'flex',
                flexDirection: 'column',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
              }}
            >
              {/* Image preview frame */}
              <div
                style={{
                  position: 'relative',
                  padding: '1.5rem 1.5rem 0',
                }}
              >
                <div
                  style={{
                    position: 'relative',
                    borderRadius: 16,
                    overflow: 'hidden',
                    border: '1px solid rgba(255,255,255,0.08)',
                    background: '#000',
                    boxShadow: `0 8px 30px rgba(0,0,0,0.5), 0 0 0 1px ${s.accentSoft}`,
                  }}
                >
                  {/* Top toolbar dots */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      padding: '0.6rem 0.8rem',
                      background: 'rgba(0,0,0,0.7)',
                      borderBottom: '1px solid rgba(255,255,255,0.06)',
                    }}
                  >
                    {['#FF5F57', '#FEBC2E', '#28C840'].map(c => (
                      <span key={c} style={{ width: 9, height: 9, borderRadius: '50%', background: c }} />
                    ))}
                    <span style={{ marginLeft: 'auto', fontFamily: "'Space Grotesk',sans-serif", fontSize: '0.62rem', fontWeight: 700, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                      {s.platform.toLowerCase()}.com
                    </span>
                  </div>

                  <img
                    src={s.image}
                    alt={`${s.name} on ${s.platform}`}
                    loading="lazy"
                    decoding="async"
                    style={{
                      display: 'block',
                      width: '100%',
                      height: 'auto',
                      aspectRatio: '4 / 3',
                      objectFit: 'cover',
                      objectPosition: 'top center',
                      imageRendering: 'auto',
                    }}
                  />

                  {/* Hover-to-shine overlay */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: `linear-gradient(180deg, transparent 60%, rgba(0,0,0,0.6) 100%)`,
                      pointerEvents: 'none',
                    }}
                  />

                  {/* Live tag */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '3.4rem',
                      left: '0.85rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      padding: '4px 10px',
                      borderRadius: 999,
                      background: 'rgba(0,0,0,0.6)',
                      border: '1px solid rgba(168,220,171,0.35)',
                      backdropFilter: 'blur(10px)',
                      WebkitBackdropFilter: 'blur(10px)',
                    }}
                  >
                    <span className="dot-live" />
                    <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '0.62rem', fontWeight: 700, color: '#A8DCAB', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                      Active
                    </span>
                  </div>
                </div>
              </div>

              {/* Card body */}
              <div style={{ padding: '1.5rem' }}>
                {/* Header row */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1rem' }}>
                  <div
                    style={{
                      width: 46, height: 46,
                      borderRadius: 12,
                      background: s.gradient,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: '#fff',
                      boxShadow: `0 6px 20px ${s.accentSoft}`,
                      flexShrink: 0,
                    }}
                  >
                    {s.icon}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: '1.05rem', color: '#fff', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      {s.name}
                      <svg width="14" height="14" viewBox="0 0 24 24" fill={s.accent} aria-hidden>
                        <path d="M12 1l2.39 3.96L19 5.5l-3.5 3.42.83 4.83L12 11.5l-4.33 2.25.83-4.83L5 5.5l4.61-.54L12 1z" />
                      </svg>
                    </p>
                    <p style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '0.82rem', color: 'rgba(255,255,255,0.5)' }}>
                      {s.handle}
                    </p>
                  </div>
                </div>

                <p style={{ fontSize: '0.9rem', color: 'rgba(219,170,167,0.78)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  {s.bio}
                </p>

                {/* Stats */}
                <div
                  className="keep-grid"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '0.5rem',
                    padding: '0.85rem',
                    borderRadius: 12,
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    marginBottom: '1.25rem',
                  }}
                >
                  {s.stats.map(st => (
                    <div key={st.label} style={{ textAlign: 'center' }}>
                      <p style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, fontSize: '1.05rem', color: '#fff', letterSpacing: '-0.02em' }}>
                        {st.value}
                      </p>
                      <p style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '0.62rem', fontWeight: 600, color: 'rgba(255,255,255,0.45)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                        {st.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div
                  className="btn-3d"
                  style={{
                    fontFamily: "'Space Grotesk',sans-serif",
                    fontWeight: 700,
                    fontSize: '0.88rem',
                    letterSpacing: '0.04em',
                    background: s.gradient,
                    color: '#fff',
                    padding: '12px 0',
                    borderRadius: 12,
                    textAlign: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    boxShadow: `0 8px 26px ${s.accentSoft}`,
                  }}
                >
                  {s.icon}
                  {s.cta}
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 11l6-6M5 5h6v6" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 820px) {
          #founder-social .social-grid { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
        }
      `}</style>
    </section>
  )
}
