const spotlightItems = [
  { label: 'Education Problem Discovery', img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600' },
  { label: 'The Startup Journey Begins', img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=600' },
  { label: 'Real Customer Interviews', img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600' },
  { label: 'Pitch Practice Session', img: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=600' },
  { label: 'Building the First MVP', img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600' },
  { label: 'Real World Learning Action', img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600' },
  { label: 'Developing Founder Mindset', img: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=600' },
  { label: 'Student Success Stories', img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=600' },
  { label: 'Education Problem Discovery', img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600' },
  { label: 'The Startup Journey Begins', img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=600' },
  { label: 'Real Customer Interviews', img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600' },
  { label: 'Pitch Practice Session', img: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=600' },
  { label: 'Building the First MVP', img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600' },
  { label: 'Real World Learning Action', img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600' },
  { label: 'Developing Founder Mindset', img: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=600' },
  { label: 'Student Success Stories', img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=600' },
]

export default function SpotlightLab() {
  return (
    <section style={{ padding: '7rem 0', position: 'relative', overflow: 'hidden' }}>
      {/* Header */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem', marginBottom: '3.5rem', textAlign: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
          <div style={{ width: 28, height: 1.5, background: 'linear-gradient(90deg, transparent, #BE91BE)' }} />
          <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '0.7rem', fontWeight: 700, color: '#BE91BE', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
            Experience the Journey
          </span>
          <div style={{ width: 28, height: 1.5, background: 'linear-gradient(90deg, #BE91BE, transparent)' }} />
        </div>
        <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', color: '#fff', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
          A <span className="gradient-warm">Spotlight Lab</span>
        </h2>
      </div>

      {/* Scrolling gallery row 1 */}
      <div style={{ overflow: 'hidden', marginBottom: '1.5rem', maskImage: 'linear-gradient(90deg, transparent, #38000A 6%, #38000A 94%, transparent)' }}>
        <div style={{ display: 'flex', gap: '1.25rem', width: 'max-content', animation: 'spotScroll1 35s linear infinite' }}>
          {spotlightItems.map((item, i) => (
            <div
              key={i}
              style={{
                width: 280, height: 190, borderRadius: 16, overflow: 'hidden', flexShrink: 0, position: 'relative',
                border: '1px solid rgba(255,255,255,0.06)',
                boxShadow: '0 8px 30px rgba(0,0,0,0.4)',
              }}
            >
              <img src={item.img} alt={item.label} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '0.75rem 1rem', background: 'linear-gradient(transparent, rgba(0,0,0,0.8))' }}>
                <p style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: '0.82rem', color: '#fff' }}>{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scrolling gallery row 2 (reverse) */}
      <div style={{ overflow: 'hidden', maskImage: 'linear-gradient(90deg, transparent, #38000A 6%, #38000A 94%, transparent)' }}>
        <div style={{ display: 'flex', gap: '1.25rem', width: 'max-content', animation: 'spotScroll2 40s linear infinite' }}>
          {[...spotlightItems].reverse().map((item, i) => (
            <div
              key={i}
              style={{
                width: 280, height: 190, borderRadius: 16, overflow: 'hidden', flexShrink: 0, position: 'relative',
                border: '1px solid rgba(255,255,255,0.06)',
                boxShadow: '0 8px 30px rgba(0,0,0,0.4)',
              }}
            >
              <img src={item.img} alt={item.label} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '0.75rem 1rem', background: 'linear-gradient(transparent, rgba(0,0,0,0.8))' }}>
                <p style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: '0.82rem', color: '#fff' }}>{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes spotScroll1 {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes spotScroll2 {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  )
}
