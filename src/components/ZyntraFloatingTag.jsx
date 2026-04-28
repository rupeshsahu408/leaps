import { useEffect, useState } from 'react'

export default function ZyntraFloatingTag() {
  const [visible, setVisible] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 300)
    return () => clearTimeout(t)
  }, [])

  if (hidden) return null

  return (
    <>
      <a
        href="https://www.instagram.com/zyntra___x/"
        target="_blank"
        rel="noopener noreferrer"
        className={`zyntra-float ${visible ? 'is-in' : ''} ${expanded ? 'is-expanded' : ''}`}
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
        onFocus={() => setExpanded(true)}
        onBlur={() => setExpanded(false)}
        aria-label="Built by Zyntra Team — visit Instagram"
      >
        <span className="zyntra-float-glow" aria-hidden="true" />

        <span className="zyntra-float-logo" aria-hidden="true">
          <img src="/zyntra-logo.png" alt="" />
          <span className="zyntra-float-pulse" />
        </span>

        <span className="zyntra-float-text">
          <span className="zyntra-float-eyebrow">Built by</span>
          <span className="zyntra-float-name">
            Zyntra<span className="zyntra-float-dot">.</span>
          </span>
        </span>

        <span className="zyntra-float-arrow" aria-hidden="true">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </span>
      </a>

      <button
        type="button"
        aria-label="Hide Zyntra tag"
        className={`zyntra-float-close ${visible ? 'is-in' : ''}`}
        onClick={(e) => { e.preventDefault(); e.stopPropagation(); setHidden(true) }}
      >
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>

      <style>{`
        .zyntra-float {
          position: fixed;
          right: 18px;
          bottom: 18px;
          z-index: 9998;
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          padding: 7px 12px 7px 7px;
          border-radius: 999px;
          text-decoration: none;
          color: #fff;
          background: linear-gradient(135deg, rgba(20,3,7,0.85) 0%, rgba(40,6,12,0.85) 100%);
          border: 1px solid rgba(255,255,255,0.09);
          backdrop-filter: blur(16px) saturate(140%);
          -webkit-backdrop-filter: blur(16px) saturate(140%);
          box-shadow:
            0 12px 30px -10px rgba(0,0,0,0.65),
            0 4px 12px -6px rgba(205,28,24,0.35),
            inset 0 1px 0 rgba(255,255,255,0.08);
          opacity: 0;
          transform: translateY(20px) scale(0.92);
          transition:
            opacity 0.6s cubic-bezier(.2,.8,.2,1),
            transform 0.6s cubic-bezier(.2,.8,.2,1),
            border-color 0.35s ease,
            box-shadow 0.45s ease,
            background 0.35s ease,
            padding 0.35s cubic-bezier(.2,.8,.2,1);
          isolation: isolate;
          overflow: hidden;
        }
        .zyntra-float.is-in {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        .zyntra-float::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1px;
          background: linear-gradient(120deg,
            rgba(205,28,24,0) 0%,
            rgba(205,28,24,0.55) 35%,
            rgba(168,220,171,0.55) 65%,
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
        .zyntra-float:hover {
          border-color: rgba(255,255,255,0.16);
          box-shadow:
            0 18px 40px -12px rgba(205,28,24,0.45),
            0 6px 18px -8px rgba(168,220,171,0.18),
            inset 0 1px 0 rgba(255,255,255,0.12);
        }
        .zyntra-float:hover::before { opacity: 1; }

        .zyntra-float-glow {
          position: absolute;
          inset: -40%;
          background: radial-gradient(circle at 30% 50%, rgba(205,28,24,0.28) 0%, transparent 60%);
          filter: blur(18px);
          z-index: -1;
          opacity: 0.85;
          pointer-events: none;
        }

        .zyntra-float-logo {
          position: relative;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: radial-gradient(circle at 30% 30%, #1a1a1a 0%, #050505 80%);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          flex-shrink: 0;
          box-shadow:
            0 0 0 1.2px rgba(255,255,255,0.1),
            0 4px 10px rgba(0,0,0,0.55),
            inset 0 1px 0 rgba(255,255,255,0.08);
          transition: transform 0.5s cubic-bezier(.2,.8,.2,1), box-shadow 0.5s ease;
        }
        .zyntra-float:hover .zyntra-float-logo {
          transform: rotate(-8deg) scale(1.06);
          box-shadow:
            0 0 0 1.2px rgba(168,220,171,0.4),
            0 6px 14px rgba(205,28,24,0.4),
            inset 0 1px 0 rgba(255,255,255,0.14);
        }
        .zyntra-float-logo img {
          width: 135%;
          height: 135%;
          object-fit: cover;
          display: block;
          image-rendering: -webkit-optimize-contrast;
          filter: contrast(1.08) brightness(1.06);
        }

        .zyntra-float-pulse {
          position: absolute;
          right: -2px;
          bottom: -2px;
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: #A8DCAB;
          box-shadow: 0 0 0 2px rgba(20,3,7,0.95), 0 0 10px rgba(168,220,171,0.7);
          animation: zyntra-pulse 2.4s ease-in-out infinite;
        }
        @keyframes zyntra-pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.25); opacity: 0.65; }
        }

        .zyntra-float-text {
          display: flex;
          flex-direction: column;
          line-height: 1;
          gap: 3px;
          white-space: nowrap;
          margin-left: 2px;
        }
        .zyntra-float-eyebrow {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.52rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,168,150,0.9);
        }
        .zyntra-float-name {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.85rem;
          font-weight: 800;
          letter-spacing: -0.01em;
          color: #fff;
        }
        .zyntra-float-dot { color: #A8DCAB; }

        .zyntra-float-arrow {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.45);
          margin-left: 4px;
          transition: color 0.3s ease, transform 0.4s cubic-bezier(.2,.8,.2,1);
        }
        .zyntra-float:hover .zyntra-float-arrow {
          color: #A8DCAB;
          transform: translate(2px, -2px);
        }

        /* Close (dismiss) button — appears on hover */
        .zyntra-float-close {
          position: fixed;
          right: 8px;
          bottom: 56px;
          z-index: 9999;
          width: 20px;
          height: 20px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(20,3,7,0.95);
          color: rgba(255,255,255,0.55);
          cursor: pointer;
          opacity: 0;
          transform: translateY(6px) scale(0.7);
          transition:
            opacity 0.25s ease,
            transform 0.25s ease,
            color 0.2s ease,
            border-color 0.2s ease,
            background 0.2s ease;
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }
        .zyntra-float-close.is-in:hover,
        .zyntra-float-close.is-in:focus-visible {
          opacity: 1;
          transform: translateY(0) scale(1);
          color: #fff;
          border-color: rgba(205,28,24,0.6);
          background: rgba(205,28,24,0.25);
        }
        .zyntra-float:hover ~ .zyntra-float-close.is-in,
        .zyntra-float-close.is-in:focus-visible {
          opacity: 0.85;
          transform: translateY(0) scale(1);
        }

        @media (max-width: 520px) {
          .zyntra-float {
            right: 12px;
            bottom: 12px;
            padding: 6px 10px 6px 6px;
            gap: 0.4rem;
          }
          .zyntra-float-logo { width: 26px; height: 26px; }
          .zyntra-float-name { font-size: 0.78rem; }
          .zyntra-float-eyebrow { font-size: 0.48rem; }
          .zyntra-float.is-expanded .zyntra-float-text { max-width: 110px; }
          .zyntra-float-close { right: 4px; bottom: 48px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .zyntra-float, .zyntra-float-text, .zyntra-float-arrow,
          .zyntra-float-logo, .zyntra-float-pulse, .zyntra-float-close {
            transition: none !important;
            animation: none !important;
          }
        }
      `}</style>
    </>
  )
}
