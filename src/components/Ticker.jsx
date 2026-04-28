const items = [
  { label: '1 APR – 30 JUNE 2026', dot: true },
  { label: 'OPEN FOR JOINING' },
  { label: 'BECOME A FULL STACK MARKETER' },
  { label: 'COHORT 2 NOW LIVE', dot: true },
  { label: 'BUILD A REAL STARTUP IN 8 WEEKS' },
  { label: 'DEMO DAY • INVESTOR PITCH • REVENUE', dot: true },
  { label: 'JOIN THE LEAP MOVEMENT' },
  { label: '1 APR – 30 JUNE 2026', dot: true },
  { label: 'OPEN FOR JOINING' },
  { label: 'BECOME A FULL STACK MARKETER' },
  { label: 'COHORT 2 NOW LIVE', dot: true },
  { label: 'BUILD A REAL STARTUP IN 8 WEEKS' },
  { label: 'DEMO DAY • INVESTOR PITCH • REVENUE', dot: true },
  { label: 'JOIN THE LEAP MOVEMENT' },
]

export default function Ticker() {
  return (
    <div
      className="ticker-wrapper"
      style={{
        background: 'linear-gradient(90deg, #9B1313 0%, #CD1C18 50%, #9B1313 100%)',
        padding: '10px 0',
        position: 'relative',
        zIndex: 50,
      }}
    >
      <div className="ticker-track">
        {items.map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.14em',
              color: '#fff',
              marginRight: '2.5rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              whiteSpace: 'nowrap',
            }}
          >
            {item.dot && (
              <span
                style={{
                  width: 7, height: 7, borderRadius: '50%',
                  background: '#A8DCAB',
                  boxShadow: '0 0 8px rgba(168,220,171,0.9)',
                  display: 'inline-block',
                }}
              />
            )}
            {item.label}
          </span>
        ))}
      </div>
    </div>
  )
}
