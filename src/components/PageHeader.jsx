export default function PageHeader({ eyebrow, title, highlight, subtitle }) {
  return (
    <section
      className="mesh-bg"
      style={{
        position: 'relative',
        padding: '7rem 1.5rem 4rem',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(205,28,24,0.15)',
      }}
    >
      <div
        style={{
          position: 'absolute', top: '-10%', left: '-5%',
          width: 460, height: 460, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(205,28,24,0.22) 0%, transparent 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute', bottom: '-20%', right: '-5%',
          width: 380, height: 380, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(81,151,85,0.15) 0%, transparent 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ position: 'relative', zIndex: 5, maxWidth: 1100, margin: '0 auto', textAlign: 'center' }}>
        {eyebrow && (
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <div style={{ width: 28, height: 1.5, background: 'linear-gradient(90deg, transparent, #A8DCAB)' }} />
            <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '0.72rem', fontWeight: 700, color: '#A8DCAB', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
              {eyebrow}
            </span>
            <div style={{ width: 28, height: 1.5, background: 'linear-gradient(90deg, #A8DCAB, transparent)' }} />
          </div>
        )}

        <h1
          style={{
            fontFamily: "'Space Grotesk',sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(2.4rem, 5.5vw, 4.4rem)',
            lineHeight: 1.08,
            letterSpacing: '-0.03em',
            color: '#fff',
            marginBottom: subtitle ? '1.25rem' : 0,
            textShadow: '0 4px 30px rgba(0,0,0,0.4)',
          }}
        >
          {title}{' '}
          {highlight && <span className="gradient-red">{highlight}</span>}
        </h1>

        {subtitle && (
          <p
            style={{
              fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
              color: 'rgba(219,170,167,0.78)',
              lineHeight: 1.6,
              maxWidth: 720,
              margin: '0 auto',
            }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
