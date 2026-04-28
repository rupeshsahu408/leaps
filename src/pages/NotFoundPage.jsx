import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <section
      className="mesh-bg"
      style={{
        minHeight: '70vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '5rem 1.5rem',
        textAlign: 'center',
      }}
    >
      <p
        style={{
          fontFamily: "'Space Grotesk',sans-serif",
          fontWeight: 800,
          fontSize: 'clamp(4rem, 12vw, 8rem)',
          letterSpacing: '-0.05em',
          lineHeight: 1,
          marginBottom: '1rem',
        }}
        className="gradient-red"
      >
        404
      </p>
      <h1 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(1.4rem, 3vw, 2rem)', color: '#fff', marginBottom: '0.75rem' }}>
        Page not found
      </h1>
      <p style={{ color: 'rgba(219,170,167,0.7)', maxWidth: 460, marginBottom: '2rem', lineHeight: 1.6 }}>
        That route doesn't exist (yet). Head back to the homepage to keep exploring LEAP.
      </p>
      <Link
        to="/"
        className="btn-3d"
        style={{
          fontFamily: "'Space Grotesk',sans-serif",
          fontWeight: 700,
          background: 'linear-gradient(135deg, #CD1C18, #9B1313)',
          color: '#fff',
          padding: '12px 28px',
          borderRadius: 999,
          textDecoration: 'none',
          boxShadow: '0 6px 24px rgba(205,28,24,0.45)',
        }}
      >
        Back to Home
      </Link>
    </section>
  )
}
