const milestones = [
  {
    year: '2022',
    age: 'Age 11',
    icon: '🌱',
    title: 'The first spark',
    body: 'Started reading every business book and watching every founder interview. Decided that classrooms alone were never going to be enough.',
    color: '#FFA896',
    accent: 'rgba(255,168,150,0.25)',
  },
  {
    year: '2023',
    age: 'Age 12',
    icon: '🎤',
    title: 'Public speaking & Antarrashtriya Udhyog Ratna Puraskar',
    body: 'Started speaking on entrepreneurship for school students. Awarded by the American Council of Training and Development for early enterprise work.',
    color: '#A8DCAB',
    accent: 'rgba(168,220,171,0.25)',
  },
  {
    year: '2024',
    age: 'Age 13',
    icon: '📕',
    title: 'Author & World Record Holder',
    body: 'Published a book for young entrepreneurs and entered the World & India Book of Records — the youngest entrepreneurship author from Maharashtra.',
    color: '#BE91BE',
    accent: 'rgba(190,145,190,0.25)',
  },
  {
    year: '2025',
    age: 'Age 14',
    icon: '🚀',
    title: 'LEAP Startup School — Cohort 1',
    body: 'Launched LEAP, India\'s first practical startup school. Cohort 1 onboarded the first wave of student-founders across Maharashtra.',
    color: '#CD1C18',
    accent: 'rgba(205,28,24,0.3)',
  },
  {
    year: '2026',
    age: 'Now',
    icon: '🏗️',
    title: 'Cohort 2 + The Builder Movement',
    body: 'Cohort 2 goes live (April–June). Building public, partnering with institutions, and scaling the practical-education movement city by city.',
    color: '#A8DCAB',
    accent: 'rgba(168,220,171,0.3)',
    live: true,
  },
]

// Recreated from the live @shauryahelps grid — links go to the public profile
const reels = [
  {
    title: 'AI तुमचा Job घेणार? की नवे Jobs देणार?',
    tagline: 'Future of work',
    views: '142K',
    likes: '8.2K',
    bg: 'linear-gradient(160deg, #1a0d2e 0%, #2d1b4e 50%, #4a1654 100%)',
    accent: '#BE91BE',
  },
  {
    title: 'Women Safety = Big Business?',
    tagline: 'Hard conversations',
    views: '96K',
    likes: '5.4K',
    bg: 'linear-gradient(160deg, #2d0a14 0%, #4a1622 50%, #7d1a2e 100%)',
    accent: '#FFA896',
  },
  {
    title: 'Google मोफत शिकवतो?',
    tagline: 'Free education exposed',
    views: '218K',
    likes: '12.1K',
    bg: 'linear-gradient(160deg, #0a1a2e 0%, #142d4a 50%, #1e4a7d 100%)',
    accent: '#7DB3E8',
  },
  {
    title: 'You stepped out of school',
    tagline: 'For the dropouts',
    views: '74K',
    likes: '4.8K',
    bg: 'linear-gradient(160deg, #1a1a0a 0%, #3d2e14 50%, #6b4a1e 100%)',
    accent: '#E8C77D',
  },
  {
    title: 'Startup School • LEAP Action Cohort',
    tagline: 'Behind the scenes',
    views: '301K',
    likes: '18.6K',
    bg: 'linear-gradient(160deg, #38000A 0%, #6b1a1a 50%, #9B1313 100%)',
    accent: '#FFA896',
  },
  {
    title: 'अगर आपको आपका Khud ka business…',
    tagline: 'Founder mindset',
    views: '163K',
    likes: '9.7K',
    bg: 'linear-gradient(160deg, #0a1a14 0%, #14382e 50%, #1e6b54 100%)',
    accent: '#A8DCAB',
  },
]

const PROFILE_URL = 'https://www.instagram.com/shauryahelps/'

function PlayIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M8 5v14l11-7L8 5z" />
    </svg>
  )
}

function ReelCard({ reel }) {
  return (
    <a
      href={PROFILE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="reel-card"
      aria-label={`Watch on Instagram: ${reel.title}`}
      style={{
        position: 'relative',
        display: 'block',
        aspectRatio: '9 / 16',
        borderRadius: 18,
        overflow: 'hidden',
        textDecoration: 'none',
        background: reel.bg,
        border: '1px solid rgba(255,255,255,0.08)',
        boxShadow: `0 12px 40px rgba(0,0,0,0.45), 0 0 0 1px ${reel.accent}30`,
        transition: 'transform 0.35s cubic-bezier(0.23,1,0.32,1), box-shadow 0.35s ease',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-6px) scale(1.02)'
        e.currentTarget.style.boxShadow = `0 22px 60px rgba(0,0,0,0.55), 0 0 0 1px ${reel.accent}90, 0 0 30px ${reel.accent}40`
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0) scale(1)'
        e.currentTarget.style.boxShadow = `0 12px 40px rgba(0,0,0,0.45), 0 0 0 1px ${reel.accent}30`
      }}
    >
      {/* Decorative grid lines (faux video thumbnail) */}
      <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0, opacity: 0.08, pointerEvents: 'none' }}>
        <defs>
          <pattern id={`reel-grid-${reel.title.length}`} width="22" height="22" patternUnits="userSpaceOnUse">
            <path d="M 22 0 L 0 0 0 22" fill="none" stroke="#fff" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#reel-grid-${reel.title.length})`} />
      </svg>

      {/* Top stripe: Reel logo */}
      <div
        style={{
          position: 'absolute',
          top: 12, left: 12,
          display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
          padding: '4px 9px',
          borderRadius: 999,
          background: 'rgba(0,0,0,0.5)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          border: '1px solid rgba(255,255,255,0.1)',
        }}
      >
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
          <rect x="2.5" y="2.5" width="19" height="19" rx="5" stroke="#fff" strokeWidth="1.8" />
          <path d="M9 8.5v7l6-3.5-6-3.5z" fill="#fff" />
        </svg>
        <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '0.6rem', fontWeight: 700, color: '#fff', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          Reel
        </span>
      </div>

      {/* Top right: views */}
      <div
        style={{
          position: 'absolute',
          top: 12, right: 12,
          display: 'inline-flex', alignItems: 'center', gap: '0.3rem',
          padding: '4px 9px',
          borderRadius: 999,
          background: 'rgba(0,0,0,0.5)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
        }}
      >
        <svg width="11" height="11" viewBox="0 0 24 24" fill="#fff" aria-hidden>
          <path d="M12 4.5C7 4.5 2.7 7.6 1 12c1.7 4.4 6 7.5 11 7.5s9.3-3.1 11-7.5c-1.7-4.4-6-7.5-11-7.5zm0 12.5a5 5 0 110-10 5 5 0 010 10zm0-8a3 3 0 100 6 3 3 0 000-6z" />
        </svg>
        <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '0.62rem', fontWeight: 700, color: '#fff' }}>
          {reel.views}
        </span>
      </div>

      {/* Center play button */}
      <div
        className="reel-play"
        style={{
          position: 'absolute',
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 56, height: 56,
          borderRadius: '50%',
          background: 'rgba(0,0,0,0.55)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.18)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#fff',
          boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
          paddingLeft: 4,
        }}
      >
        <PlayIcon size={22} />
      </div>

      {/* Bottom: title + likes */}
      <div
        style={{
          position: 'absolute',
          bottom: 0, left: 0, right: 0,
          padding: '2.5rem 1rem 1rem',
          background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.85) 70%)',
        }}
      >
        <p
          style={{
            fontFamily: "'Space Grotesk',sans-serif",
            fontWeight: 700,
            fontSize: '0.78rem',
            color: reel.accent,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            marginBottom: 6,
          }}
        >
          {reel.tagline}
        </p>
        <p
          style={{
            fontFamily: "'Space Grotesk',sans-serif",
            fontWeight: 800,
            fontSize: '0.95rem',
            color: '#fff',
            lineHeight: 1.25,
            marginBottom: '0.55rem',
            letterSpacing: '-0.01em',
          }}
        >
          {reel.title}
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', color: 'rgba(255,255,255,0.75)' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-7-4.5-9.5-9C.7 8.4 2.6 4.5 6 4.5c2 0 3.5 1 4.5 2.5C11.5 5.5 13 4.5 15 4.5c3.4 0 5.3 3.9 3.5 7.5C19 16.5 12 21 12 21z" /></svg>
            <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '0.7rem', fontWeight: 600 }}>{reel.likes}</span>
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.4 8.4 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.4 8.4 0 01-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.4 8.4 0 013.8-.9h.5a8.5 8.5 0 018 8v.5z" /></svg>
            <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '0.7rem', fontWeight: 600 }}>Comment</span>
          </span>
        </div>
      </div>
    </a>
  )
}

export default function MyJourney() {
  return (
    <section
      id="my-journey"
      style={{
        padding: '7rem 1.5rem',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(180deg, rgba(38,0,9,0) 0%, rgba(0,0,0,0.3) 50%, rgba(38,0,9,0) 100%)',
      }}
    >
      {/* Background glows */}
      <div style={{ position: 'absolute', top: '5%', left: '-5%', width: 480, height: 480, borderRadius: '50%', background: 'radial-gradient(circle, rgba(205,28,24,0.14) 0%, transparent 70%)', filter: 'blur(70px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '5%', right: '-5%', width: 480, height: 480, borderRadius: '50%', background: 'radial-gradient(circle, rgba(190,145,190,0.13) 0%, transparent 70%)', filter: 'blur(70px)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 5 }}>
        <hr className="hr-gradient" style={{ marginBottom: '4rem' }} />

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: 780, marginLeft: 'auto', marginRight: 'auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <div style={{ width: 28, height: 1.5, background: 'linear-gradient(90deg, transparent, #FFA896)' }} />
            <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '0.72rem', fontWeight: 700, color: '#FFA896', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
              My Journey
            </span>
            <div style={{ width: 28, height: 1.5, background: 'linear-gradient(90deg, #FFA896, transparent)' }} />
          </div>
          <h2
            style={{
              fontFamily: "'Space Grotesk',sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(1.9rem, 4vw, 3.2rem)',
              color: '#fff',
              letterSpacing: '-0.03em',
              lineHeight: 1.12,
              marginBottom: '1.25rem',
            }}
          >
            From a school bench to building <span className="gradient-red">India's first practical startup school.</span>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(219,170,167,0.78)', lineHeight: 1.7, maxWidth: 640, margin: '0 auto' }}>
            Five years in. From reading founder interviews at 11 to launching cohorts of student-founders at 14 — the journey isn't over, it's just starting.
          </p>
        </div>

        {/* Timeline */}
        <div className="timeline-wrap" style={{ position: 'relative', marginBottom: '6rem' }}>
          {/* Vertical line */}
          <div
            className="timeline-line"
            style={{
              position: 'absolute',
              left: '50%',
              top: 0,
              bottom: 0,
              width: 2,
              background: 'linear-gradient(180deg, transparent, rgba(205,28,24,0.4) 8%, rgba(168,220,171,0.4) 92%, transparent)',
              transform: 'translateX(-50%)',
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {milestones.map((m, i) => {
              const left = i % 2 === 0
              return (
                <div
                  key={m.year}
                  className="timeline-row"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 80px 1fr',
                    alignItems: 'center',
                    gap: '0',
                  }}
                >
                  {/* Left side */}
                  <div
                    className={left ? 'timeline-card-side' : 'timeline-empty-side'}
                    style={{
                      visibility: left ? 'visible' : 'hidden',
                      paddingRight: '1.5rem',
                      textAlign: 'right',
                    }}
                  >
                    {left && (
                      <div
                        className="tilt-card"
                        style={{
                          display: 'inline-block',
                          maxWidth: 460,
                          textAlign: 'left',
                          background: 'rgba(20,0,5,0.7)',
                          border: `1px solid ${m.accent}`,
                          borderRadius: 18,
                          padding: '1.5rem',
                          backdropFilter: 'blur(12px)',
                          WebkitBackdropFilter: 'blur(12px)',
                          boxShadow: `0 12px 40px rgba(0,0,0,0.45), 0 0 0 1px ${m.accent}`,
                        }}
                      >
                        <p style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '0.7rem', fontWeight: 700, color: m.color, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 6 }}>
                          {m.age}
                        </p>
                        <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, fontSize: '1.15rem', color: '#fff', letterSpacing: '-0.02em', marginBottom: 8, lineHeight: 1.3 }}>
                          {m.title}
                        </h3>
                        <p style={{ fontSize: '0.88rem', color: 'rgba(219,170,167,0.78)', lineHeight: 1.6 }}>
                          {m.body}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Center node */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem' }}>
                    <div
                      style={{
                        width: 48, height: 48,
                        borderRadius: '50%',
                        background: `linear-gradient(135deg, ${m.color}, ${m.color}88)`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '1.3rem',
                        boxShadow: `0 6px 22px ${m.accent}, 0 0 0 4px rgba(38,0,9,1), 0 0 0 5px ${m.accent}`,
                        position: 'relative',
                        zIndex: 2,
                      }}
                    >
                      {m.icon}
                    </div>
                    <span
                      style={{
                        fontFamily: "'Space Grotesk',sans-serif",
                        fontWeight: 800,
                        fontSize: '0.78rem',
                        color: m.color,
                        letterSpacing: '0.05em',
                        background: 'rgba(38,0,9,0.95)',
                        padding: '2px 8px',
                        borderRadius: 4,
                      }}
                    >
                      {m.year}
                    </span>
                    {m.live && (
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontFamily: "'Space Grotesk',sans-serif", fontSize: '0.6rem', fontWeight: 700, color: '#A8DCAB', letterSpacing: '0.12em', textTransform: 'uppercase', background: 'rgba(38,0,9,0.95)', padding: '2px 6px', borderRadius: 4 }}>
                        <span className="dot-live" /> Now
                      </span>
                    )}
                  </div>

                  {/* Right side */}
                  <div
                    className={!left ? 'timeline-card-side' : 'timeline-empty-side'}
                    style={{
                      visibility: !left ? 'visible' : 'hidden',
                      paddingLeft: '1.5rem',
                      textAlign: 'left',
                    }}
                  >
                    {!left && (
                      <div
                        className="tilt-card"
                        style={{
                          display: 'inline-block',
                          maxWidth: 460,
                          background: 'rgba(20,0,5,0.7)',
                          border: `1px solid ${m.accent}`,
                          borderRadius: 18,
                          padding: '1.5rem',
                          backdropFilter: 'blur(12px)',
                          WebkitBackdropFilter: 'blur(12px)',
                          boxShadow: `0 12px 40px rgba(0,0,0,0.45), 0 0 0 1px ${m.accent}`,
                        }}
                      >
                        <p style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '0.7rem', fontWeight: 700, color: m.color, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 6 }}>
                          {m.age}
                        </p>
                        <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, fontSize: '1.15rem', color: '#fff', letterSpacing: '-0.02em', marginBottom: 8, lineHeight: 1.3 }}>
                          {m.title}
                        </h3>
                        <p style={{ fontSize: '0.88rem', color: 'rgba(219,170,167,0.78)', lineHeight: 1.6 }}>
                          {m.body}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Reels gallery header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.65rem' }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: 'linear-gradient(135deg, #F58529 0%, #DD2A7B 50%, #8134AF 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 6px 20px rgba(221,42,123,0.35)' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <rect x="2.5" y="2.5" width="19" height="19" rx="5" stroke="#fff" strokeWidth="1.8" />
                  <circle cx="12" cy="12" r="4.2" stroke="#fff" strokeWidth="1.8" />
                  <circle cx="17.5" cy="6.5" r="1.2" fill="#fff" />
                </svg>
              </div>
              <div>
                <p style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '0.7rem', fontWeight: 700, color: '#FFA896', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                  Reels from the journey
                </p>
                <p style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, fontSize: '1.6rem', color: '#fff', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
                  Latest from <span style={{ color: '#DD2A7B' }}>@shauryahelps</span>
                </p>
              </div>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'rgba(219,170,167,0.7)', maxWidth: 520, lineHeight: 1.6 }}>
              Real-talk reels on entrepreneurship, AI, education, and the daily founder grind — straight from the source.
            </p>
          </div>

          <a
            href={PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-3d"
            style={{
              fontFamily: "'Space Grotesk',sans-serif",
              fontWeight: 700,
              fontSize: '0.85rem',
              letterSpacing: '0.04em',
              background: 'linear-gradient(135deg, #F58529 0%, #DD2A7B 50%, #8134AF 100%)',
              color: '#fff',
              padding: '11px 22px',
              borderRadius: 999,
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              boxShadow: '0 8px 24px rgba(221,42,123,0.35)',
              flexShrink: 0,
            }}
          >
            See all on Instagram
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 11l6-6M5 5h6v6" />
            </svg>
          </a>
        </div>

        {/* Reels grid */}
        <div className="reels-grid keep-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
          {reels.map((r, i) => <ReelCard key={i} reel={r} />)}
        </div>

        {/* Bottom mini-stat strip */}
        <div
          style={{
            marginTop: '3.5rem',
            padding: '1.5rem 1.75rem',
            borderRadius: 18,
            background: 'rgba(20,0,5,0.6)',
            border: '1px solid rgba(225,48,108,0.2)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.25rem',
          }}
        >
          {[
            { v: '71.4K', l: 'Followers' },
            { v: '389', l: 'Posts' },
            { v: '1.4M+', l: 'Reel views' },
            { v: 'Daily', l: 'New content' },
          ].map(s => (
            <div key={s.l} style={{ flex: '1 1 120px', textAlign: 'center' }}>
              <p style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, fontSize: '1.4rem', color: '#fff', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
                {s.v}
              </p>
              <p style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '0.65rem', fontWeight: 700, color: 'rgba(255,168,150,0.75)', letterSpacing: '0.14em', textTransform: 'uppercase', marginTop: 4 }}>
                {s.l}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 820px) {
          #my-journey .reels-grid { grid-template-columns: repeat(2, 1fr) !important; }
          #my-journey .timeline-row {
            grid-template-columns: 60px 1fr !important;
            gap: 1rem !important;
          }
          #my-journey .timeline-line { left: 30px !important; transform: none !important; }
          #my-journey .timeline-card-side {
            visibility: visible !important;
            padding: 0 !important;
            text-align: left !important;
            grid-column: 2 !important;
          }
          #my-journey .timeline-empty-side { display: none !important; }
          #my-journey .timeline-row > div:nth-child(2) { grid-column: 1; }
        }
        @media (max-width: 460px) {
          #my-journey .reels-grid { grid-template-columns: 1fr 1fr !important; gap: 0.75rem !important; }
        }
      `}</style>
    </section>
  )
}
