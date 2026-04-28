import { useState } from 'react'

const links = ['Home', 'Platform', 'Locations', 'Institutions', 'Community', 'Contact']

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'rgba(38,0,9,0.85)',
        backdropFilter: 'blur(28px)',
        WebkitBackdropFilter: 'blur(28px)',
        borderBottom: '1px solid rgba(205,28,24,0.18)',
        boxShadow: '0 4px 30px rgba(0,0,0,0.4), 0 1px 0 rgba(255,168,150,0.06)',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>
        {/* Logo */}
        <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div
            style={{
              width: 40, height: 40,
              borderRadius: 10,
              background: 'linear-gradient(135deg, #CD1C18, #9B1313)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 4px 16px rgba(205,28,24,0.5)',
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 800,
              fontSize: '1rem',
              color: '#fff',
              letterSpacing: '-0.02em',
            }}
          >
            L
          </div>
          <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '1.15rem', color: '#fff', letterSpacing: '-0.02em' }}>
            LEAP<span style={{ color: '#A8DCAB' }}>.</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="desktop-nav">
          {links.map(l => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 500,
                fontSize: '0.88rem',
                color: 'rgba(255,255,255,0.65)',
                textDecoration: 'none',
                transition: 'color 0.2s',
                letterSpacing: '0.01em',
              }}
              onMouseEnter={e => e.target.style.color = '#A8DCAB'}
              onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.65)'}
            >
              {l}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#join"
          className="btn-3d"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: '0.85rem',
            letterSpacing: '0.04em',
            background: 'linear-gradient(135deg, #CD1C18 0%, #9B1313 100%)',
            color: '#fff',
            padding: '10px 22px',
            borderRadius: 999,
            textDecoration: 'none',
            display: 'inline-block',
            boxShadow: '0 4px 20px rgba(205,28,24,0.4)',
          }}
        >
          Join Now
        </a>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', color: '#fff', padding: 4 }}
          className="hamburger"
        >
          <svg width="22" height="16" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M2 2l18 12M2 14L20 2" strokeLinecap="round"/>
            ) : (
              <>
                <line x1="0" y1="3" x2="22" y2="3" strokeLinecap="round"/>
                <line x1="0" y1="8" x2="22" y2="8" strokeLinecap="round"/>
                <line x1="0" y1="13" x2="22" y2="13" strokeLinecap="round"/>
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ padding: '1rem 1.5rem 1.5rem', borderTop: '1px solid rgba(205,28,24,0.15)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}
              style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500, color: 'rgba(255,255,255,0.75)', textDecoration: 'none', fontSize: '0.95rem' }}>
              {l}
            </a>
          ))}
          <a href="#join"
            style={{ background: 'linear-gradient(135deg,#CD1C18,#9B1313)', color: '#fff', padding: '12px 20px', borderRadius: 999, textDecoration: 'none', fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, textAlign: 'center', boxShadow: '0 4px 16px rgba(205,28,24,0.4)' }}>
            Join Now
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
    </nav>
  )
}
