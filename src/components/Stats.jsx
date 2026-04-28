const stats = [
  { value: '70%', label: 'Action-Based Learning', color: '#CD1C18', sub: 'vs 30% theory' },
  { value: '8wks', label: 'To First Revenue', color: '#A8DCAB', sub: 'From zero to first sale' },
  { value: '6', label: 'Curriculum Phases', color: '#BE91BE', sub: 'End-to-end startup journey' },
  { value: '3', label: 'Distinct Tracks', color: '#FFA896', sub: 'Founder · Builder · Creator' },
]

const testimonials = [
  {
    quote: "LEAP completely changed how I think about building. Within 6 weeks I had my first paying customer.",
    name: "Aditi M.",
    role: "Founder Track Graduate",
    color: '#CD1C18',
  },
  {
    quote: "I built and launched my first app using no-code tools. The Builder track was exactly what I needed.",
    name: "Rahul S.",
    role: "Builder Track Graduate",
    color: '#519755',
  },
  {
    quote: "My personal brand grew to 10K followers in 3 months. The Creator track frameworks are incredible.",
    name: "Priya K.",
    role: "Creator Track Graduate",
    color: '#BE91BE',
  },
]

export default function Stats() {
  return (
    <section id="community" style={{ padding: '7rem 1.5rem', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative */}
      <div style={{ position: 'absolute', bottom: '10%', left: '5%', width: 350, height: 350, borderRadius: '50%', background: 'radial-gradient(circle, rgba(81,151,85,0.1) 0%, transparent 70%)', filter: 'blur(50px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '5%', right: '5%', width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(190,145,190,0.1) 0%, transparent 70%)', filter: 'blur(50px)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <hr className="hr-gradient" style={{ marginBottom: '5rem' }} />

        {/* Stats grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginBottom: '5rem' }}>
          {stats.map((s, i) => (
            <div
              key={i}
              className="tilt-card glass"
              style={{ borderRadius: 20, padding: '1.75rem', textAlign: 'center', border: `1px solid ${s.color}20` }}
            >
              <div
                style={{
                  fontFamily: "'Space Grotesk',sans-serif",
                  fontWeight: 800,
                  fontSize: '3rem',
                  letterSpacing: '-0.04em',
                  background: `linear-gradient(135deg, ${s.color}, ${s.color}aa)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  lineHeight: 1,
                  marginBottom: '0.5rem',
                  textShadow: 'none',
                }}
              >
                {s.value}
              </div>
              <p style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: '0.9rem', color: '#fff', marginBottom: '0.3rem' }}>
                {s.label}
              </p>
              <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.4)' }}>{s.sub}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, fontSize: 'clamp(1.6rem, 3vw, 2.5rem)', color: '#fff', letterSpacing: '-0.03em' }}>
            From the <span className="gradient-warm">LEAP Community</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="tilt-card"
              style={{
                borderRadius: 20,
                padding: '2rem',
                background: `linear-gradient(135deg, ${t.color}14 0%, rgba(38,0,9,0.8) 100%)`,
                border: `1px solid ${t.color}25`,
                boxShadow: `0 8px 32px rgba(0,0,0,0.4), 0 0 20px ${t.color}15`,
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
              }}
            >
              {/* Quote mark */}
              <div style={{ fontSize: '3rem', lineHeight: 0.8, color: t.color, opacity: 0.5, fontFamily: 'Georgia, serif' }}>"</div>
              <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, fontStyle: 'italic' }}>
                {t.quote}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: 'auto' }}>
                <div style={{
                  width: 38, height: 38, borderRadius: '50%',
                  background: `linear-gradient(135deg, ${t.color}, ${t.color}66)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: "'Space Grotesk',sans-serif",
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  color: '#fff',
                  flexShrink: 0,
                }}>
                  {t.name[0]}
                </div>
                <div>
                  <p style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: '0.9rem', color: '#fff' }}>{t.name}</p>
                  <p style={{ fontSize: '0.75rem', color: t.color }}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
