export default function VideoSection() {
  return (
    <section style={{ padding: '5rem 1.5rem', position: 'relative', background: 'rgba(0,0,0,0.2)' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        {/* Label */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <div style={{ width: 28, height: 1.5, background: 'linear-gradient(90deg, transparent, #CD1C18)' }} />
            <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '0.7rem', fontWeight: 700, color: '#FFA896', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
              Watch the Introduction
            </span>
            <div style={{ width: 28, height: 1.5, background: 'linear-gradient(90deg, #CD1C18, transparent)' }} />
          </div>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', color: '#fff', letterSpacing: '-0.03em' }}>
            See LEAP <span className="gradient-green">in Action</span>
          </h2>
        </div>

        {/* Video embed */}
        <div
          className="tilt-card"
          style={{
            borderRadius: 24,
            overflow: 'hidden',
            border: '1px solid rgba(205,28,24,0.25)',
            boxShadow: '0 0 60px rgba(205,28,24,0.12), 0 30px 80px rgba(0,0,0,0.5)',
            aspectRatio: '16/9',
            position: 'relative',
          }}
        >
          <iframe
            src="https://www.youtube.com/embed/ZTYiSsl5tss"
            title="LEAP Action Cohort v1 Introduction"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ width: '100%', height: '100%', display: 'block' }}
          />
        </div>

        {/* Second video teaser */}
        <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
          <a
            href="https://www.youtube.com/watch?v=VNd2YQLk3jM"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'Space Grotesk',sans-serif",
              fontWeight: 600,
              fontSize: '0.85rem',
              color: '#A8DCAB',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              opacity: 0.8,
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = 1}
            onMouseLeave={e => e.currentTarget.style.opacity = 0.8}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <circle cx="9" cy="9" r="8" fill="rgba(168,220,171,0.15)" stroke="rgba(168,220,171,0.4)" strokeWidth="1"/>
              <path d="M7 6l5 3-5 3V6z" fill="#A8DCAB"/>
            </svg>
            Watch: LEAP Cohort v2 Introduction
          </a>
        </div>
      </div>
    </section>
  )
}
