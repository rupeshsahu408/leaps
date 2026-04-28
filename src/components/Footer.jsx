import { Link } from 'react-router-dom'
import SocialBar from './SocialBar'

const footerLinks = {
  Platform: [
    { label: 'The Founder', to: '/platform' },
    { label: 'The Builder', to: '/platform' },
    { label: 'The Creator', to: '/platform' },
    { label: 'Curriculum', to: '/platform' },
  ],
  Company: [
    { label: 'Home', to: '/' },
    { label: 'Locations', to: '/locations' },
    { label: 'Institutions', to: '/institutions' },
    { label: 'Contact', to: '/contact' },
  ],
  Community: [
    { label: 'Alumni Network', to: '/community' },
    { label: 'Mentors', to: '/community' },
    { label: 'Events', to: '/community' },
    { label: 'Join Cohort', to: '/join' },
  ],
}

export default function Footer() {
  return (
    <footer
      style={{
        position: 'relative',
        background: 'rgba(0,0,0,0.3)',
        borderTop: '1px solid rgba(205,28,24,0.15)',
        overflow: 'hidden',
      }}
    >
      <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 500, height: 200, background: 'radial-gradient(ellipse, rgba(205,28,24,0.08) 0%, transparent 70%)', filter: 'blur(40px)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '4rem 1.5rem 2rem', position: 'relative', zIndex: 10 }}>
        {/* Top */}
        <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1.2fr', gap: '2.5rem', marginBottom: '3rem' }}>
          {/* Brand */}
          <div>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem', textDecoration: 'none' }}>
              <div style={{ width: 38, height: 38, borderRadius: 10, background: 'linear-gradient(135deg, #CD1C18, #9B1313)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(205,28,24,0.4)', fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, fontSize: '0.95rem', color: '#fff' }}>L</div>
              <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: '1.1rem', color: '#fff' }}>
                LEAP<span style={{ color: '#A8DCAB' }}>.</span>
              </span>
            </Link>
            <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, maxWidth: 260, marginBottom: '1.25rem' }}>
              India's First Practical Startup School. Bridge the gap between theory and execution.
            </p>
            <Link
              to="/join"
              style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(168,220,171,0.08)', border: '1px solid rgba(168,220,171,0.2)', borderRadius: 999, padding: '5px 12px' }}
            >
              <span className="dot-live" />
              <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '0.7rem', fontWeight: 700, color: '#A8DCAB', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Cohort 2 Open</span>
            </Link>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([cat, links]) => (
            <div key={cat}>
              <p style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '0.72rem', fontWeight: 700, color: '#FFA896', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>{cat}</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {links.map(l => (
                  <li key={l.label}>
                    <Link to={l.to} style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.45)', textDecoration: 'none', transition: 'color 0.2s', display: 'block' }}
                      onMouseEnter={e => e.target.style.color = '#A8DCAB'}
                      onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.45)'}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Connect column with social icons */}
          <div>
            <p style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '0.72rem', fontWeight: 700, color: '#FFA896', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>Follow</p>
            <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.6, marginBottom: '1rem' }}>
              Behind-the-scenes, lessons, and the daily founder grind from Shaurya.
            </p>
            <SocialBar size={40} />
          </div>
        </div>

        <hr className="hr-gradient" style={{ marginBottom: '1.75rem' }} />

        {/* Bottom */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)' }}>
            © 2026 LEAP Startup School. Founded by{' '}
            <a href="https://www.instagram.com/shauryahelps/" target="_blank" rel="noopener noreferrer"
              style={{ color: '#FFA896', textDecoration: 'none' }}
              onMouseEnter={e => e.target.style.color = '#A8DCAB'}
              onMouseLeave={e => e.target.style.color = '#FFA896'}
            >
              Shaurya Gaikwad
            </a>
            . All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {['Privacy Policy', 'Terms of Service', 'Sitemap'].map(l => (
              <a key={l} href="#" style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.25)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = '#A8DCAB'}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.25)'}
              >{l}</a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  )
}
