import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import SocialBar from './SocialBar'

const links = [
  { label: 'Home', to: '/' },
  { label: 'Platform', to: '/platform' },
  { label: 'Locations', to: '/locations' },
  { label: 'Institutions', to: '/institutions' },
  { label: 'Community', to: '/community' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const isActive = (to) =>
    to === '/' ? location.pathname === '/' : location.pathname.startsWith(to)

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
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          <div
            style={{
              width: 44, height: 44,
              borderRadius: '50%',
              background: '#fff',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 4px 18px rgba(205,28,24,0.45), 0 0 0 1.5px rgba(205,28,24,0.4), 0 0 24px rgba(255,168,150,0.25)',
              padding: 3,
              flexShrink: 0,
            }}
          >
            <img
              src="/leap-logo.png"
              alt="LEAP Startup"
              style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '50%', display: 'block' }}
            />
          </div>
          <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: '1.18rem', color: '#fff', letterSpacing: '-0.02em', lineHeight: 1 }}>
            LEAP<span style={{ color: '#A8DCAB' }}>.</span>
            <span style={{ display: 'block', fontFamily: "'Space Grotesk',sans-serif", fontSize: '0.55rem', fontWeight: 700, color: '#FFA896', letterSpacing: '0.22em', textTransform: 'uppercase', marginTop: 2 }}>
              Startup School
            </span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="desktop-nav">
          {links.map(l => {
            const active = isActive(l.to)
            return (
              <NavLink
                key={l.to}
                to={l.to}
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: active ? 700 : 500,
                  fontSize: '0.88rem',
                  color: active ? '#A8DCAB' : 'rgba(255,255,255,0.7)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                  letterSpacing: '0.01em',
                  position: 'relative',
                  paddingBottom: 4,
                  borderBottom: active ? '1.5px solid #A8DCAB' : '1.5px solid transparent',
                }}
              >
                {l.label}
              </NavLink>
            )
          })}
        </div>

        {/* Right cluster: socials + CTA */}
        <div className="desktop-cta" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <SocialBar size={34} />
        <Link
          to="/join"
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
        </Link>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          style={{ display: 'none', background: 'rgba(205,28,24,0.12)', border: '1px solid rgba(205,28,24,0.25)', borderRadius: 10, cursor: 'pointer', color: '#fff', padding: '8px 10px', alignItems: 'center', justifyContent: 'center' }}
          className="hamburger"
          aria-label="Toggle menu"
        >
          <svg width="22" height="16" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M2 2l18 12M2 14L20 2" strokeLinecap="round" />
            ) : (
              <>
                <line x1="0" y1="3" x2="22" y2="3" strokeLinecap="round" />
                <line x1="0" y1="8" x2="22" y2="8" strokeLinecap="round" />
                <line x1="0" y1="13" x2="22" y2="13" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ padding: '1rem 1.5rem 1.5rem', borderTop: '1px solid rgba(205,28,24,0.15)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              style={({ isActive }) => ({
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: isActive ? 700 : 500,
                color: isActive ? '#A8DCAB' : 'rgba(255,255,255,0.78)',
                textDecoration: 'none',
                fontSize: '0.95rem',
              })}
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/join"
            onClick={() => setOpen(false)}
            style={{ background: 'linear-gradient(135deg,#CD1C18,#9B1313)', color: '#fff', padding: '12px 20px', borderRadius: 999, textDecoration: 'none', fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, textAlign: 'center', boxShadow: '0 4px 16px rgba(205,28,24,0.4)' }}
          >
            Join Now
          </Link>
          <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '0.25rem' }}>
            <SocialBar size={40} />
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: inline-flex !important; }
          .desktop-cta { display: none !important; }
        }
        @media (max-width: 480px) {
          nav .container-row { padding: 0 1rem !important; }
        }
      `}</style>
    </nav>
  )
}
