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
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', marginBottom: '1.25rem', textDecoration: 'none' }}>
              <div style={{ width: 50, height: 50, borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 6px 20px rgba(205,28,24,0.4), 0 0 0 1.5px rgba(205,28,24,0.4), 0 0 30px rgba(255,168,150,0.2)', padding: 4, flexShrink: 0 }}>
                <img src="/leap-logo.png" alt="LEAP Startup" style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '50%', display: 'block' }} />
              </div>
              <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, fontSize: '1.18rem', color: '#fff', letterSpacing: '-0.02em', lineHeight: 1 }}>
                LEAP<span style={{ color: '#A8DCAB' }}>.</span>
                <span style={{ display: 'block', fontFamily: "'Space Grotesk',sans-serif", fontSize: '0.58rem', fontWeight: 700, color: '#FFA896', letterSpacing: '0.22em', textTransform: 'uppercase', marginTop: 3 }}>
                  Startup School
                </span>
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

        {/* Crafted by Zyntra Team — premium credit ribbon */}
        <a
          href="https://www.instagram.com/zyntra___x/"
          target="_blank"
          rel="noopener noreferrer"
          className="zyntra-credit"
        >
          <span className="zyntra-glow" aria-hidden="true" />

          <span className="zyntra-logo-wrap" aria-hidden="true">
            <img src="/zyntra-logo.png" alt="Zyntra Team" className="zyntra-logo-img" />
          </span>

          <span className="zyntra-text-wrap">
            <span className="zyntra-eyebrow">Crafted with precision by</span>
            <span className="zyntra-name">
              Zyntra<span className="zyntra-accent">.</span> Team
            </span>
          </span>

          <span className="zyntra-divider" aria-hidden="true" />

          <span className="zyntra-ig">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            <span className="zyntra-handle">@zyntra___x</span>
            <svg className="zyntra-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </span>
        </a>

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

        /* === Zyntra Team — premium credit ribbon === */
        .zyntra-credit {
          position: relative;
          display: flex;
          align-items: center;
          gap: 1.1rem;
          width: fit-content;
          margin: 0 auto 2rem;
          padding: 0.75rem 1.4rem 0.75rem 0.75rem;
          border-radius: 999px;
          text-decoration: none;
          background:
            linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.015) 100%);
          border: 1px solid rgba(255,255,255,0.08);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          box-shadow:
            0 10px 30px -12px rgba(0,0,0,0.6),
            inset 0 1px 0 rgba(255,255,255,0.06);
          transition: transform 0.45s cubic-bezier(.2,.8,.2,1),
                      border-color 0.35s ease,
                      box-shadow 0.45s ease,
                      background 0.35s ease;
          overflow: hidden;
          isolation: isolate;
        }
        .zyntra-credit::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1px;
          background: linear-gradient(120deg,
            rgba(205,28,24,0) 0%,
            rgba(205,28,24,0.55) 30%,
            rgba(168,220,171,0.55) 60%,
            rgba(190,145,190,0) 100%);
          -webkit-mask:
            linear-gradient(#000 0 0) content-box,
            linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
                  mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.45s ease;
          pointer-events: none;
        }
        .zyntra-credit:hover { transform: translateY(-3px); border-color: rgba(255,255,255,0.14);
          box-shadow:
            0 22px 50px -18px rgba(205,28,24,0.45),
            0 8px 20px -10px rgba(168,220,171,0.18),
            inset 0 1px 0 rgba(255,255,255,0.1);
          background: linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.025) 100%);
        }
        .zyntra-credit:hover::before { opacity: 1; }

        .zyntra-glow {
          position: absolute;
          left: -10%;
          top: 50%;
          width: 60%;
          height: 220%;
          transform: translateY(-50%) rotate(8deg);
          background: radial-gradient(ellipse at center, rgba(205,28,24,0.18) 0%, transparent 65%);
          filter: blur(22px);
          z-index: -1;
          opacity: 0.7;
          pointer-events: none;
        }

        .zyntra-logo-wrap {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: radial-gradient(circle at 30% 30%, #1a1a1a 0%, #050505 80%);
          box-shadow:
            0 0 0 1.5px rgba(255,255,255,0.08),
            0 6px 18px rgba(0,0,0,0.55),
            inset 0 1px 0 rgba(255,255,255,0.08);
          flex-shrink: 0;
          overflow: hidden;
          transition: transform 0.5s cubic-bezier(.2,.8,.2,1), box-shadow 0.5s ease;
        }
        .zyntra-credit:hover .zyntra-logo-wrap {
          transform: rotate(-6deg) scale(1.06);
          box-shadow:
            0 0 0 1.5px rgba(168,220,171,0.35),
            0 10px 24px rgba(205,28,24,0.35),
            inset 0 1px 0 rgba(255,255,255,0.14);
        }
        .zyntra-logo-img {
          width: 130%;
          height: 130%;
          object-fit: cover;
          display: block;
          image-rendering: -webkit-optimize-contrast;
          filter: contrast(1.08) brightness(1.05);
        }

        .zyntra-text-wrap {
          display: flex;
          flex-direction: column;
          line-height: 1;
          gap: 4px;
        }
        .zyntra-eyebrow {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.62rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,168,150,0.85);
        }
        .zyntra-name {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1rem;
          font-weight: 800;
          letter-spacing: -0.01em;
          color: #fff;
          background: linear-gradient(90deg, #ffffff 0%, #f3e9e7 60%, #ffd9d2 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .zyntra-accent {
          color: #A8DCAB;
          -webkit-text-fill-color: #A8DCAB;
        }

        .zyntra-divider {
          width: 1px;
          height: 26px;
          background: linear-gradient(to bottom, transparent, rgba(255,255,255,0.18), transparent);
          flex-shrink: 0;
        }

        .zyntra-ig {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.78rem;
          font-weight: 600;
          color: rgba(255,255,255,0.65);
          letter-spacing: 0.01em;
          transition: color 0.3s ease, transform 0.3s ease;
        }
        .zyntra-credit:hover .zyntra-ig { color: #A8DCAB; }
        .zyntra-handle { white-space: nowrap; }
        .zyntra-arrow {
          opacity: 0.7;
          transition: transform 0.4s cubic-bezier(.2,.8,.2,1), opacity 0.3s ease;
        }
        .zyntra-credit:hover .zyntra-arrow {
          opacity: 1;
          transform: translate(3px, -3px);
        }

        @media (max-width: 520px) {
          .zyntra-credit {
            gap: 0.8rem;
            padding: 0.6rem 1rem 0.6rem 0.6rem;
          }
          .zyntra-logo-wrap { width: 38px; height: 38px; }
          .zyntra-eyebrow { font-size: 0.55rem; letter-spacing: 0.16em; }
          .zyntra-name { font-size: 0.9rem; }
          .zyntra-handle { display: none; }
          .zyntra-divider { height: 22px; }
        }
      `}</style>
    </footer>
  )
}
