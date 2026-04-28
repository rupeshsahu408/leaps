const problems = [
  { icon: '📚', label: 'Strong theoretical foundation' },
  { icon: '🏛️', label: 'Structured learning environment' },
  { icon: '🔍', label: 'Need for more practical exposure' },
  { icon: '🔗', label: 'Opportunity to connect with real-world work' },
]

const solutions = [
  { icon: '🛠️', label: 'Learn by doing real work' },
  { icon: '🌍', label: 'Work on real-world problems' },
  { icon: '💪', label: 'Build practical skills' },
  { icon: '🚀', label: 'Improve career readiness' },
]

export default function InstitutionsProblem() {
  return (
    <section style={{ padding: '6rem 1.5rem', position: 'relative', overflow: 'hidden' }}>
      {/* Background */}
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 50%, rgba(155,19,19,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <hr className="hr-gradient" style={{ marginBottom: '5rem' }} />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          {/* Left — Problem */}
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(205,28,24,0.1)', border: '1px solid rgba(205,28,24,0.25)', borderRadius: 999, padding: '5px 14px', marginBottom: '1.5rem' }}>
              <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '0.68rem', fontWeight: 700, color: '#FFA896', letterSpacing: '0.12em', textTransform: 'uppercase' }}>The Opportunity</span>
            </div>
            <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)', color: '#fff', letterSpacing: '-0.03em', lineHeight: 1.2, marginBottom: '1.5rem' }}>
              Strong Foundations, Now Ready for{' '}
              <span className="gradient-red">Real-World Learning.</span>
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'rgba(219,170,167,0.75)', lineHeight: 1.75, marginBottom: '2rem' }}>
              Colleges already provide strong academic knowledge. Now students need more real-world experience to apply what they learn.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {problems.map((p, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.85rem 1rem', borderRadius: 12, background: 'rgba(205,28,24,0.06)', border: '1px solid rgba(205,28,24,0.12)' }}>
                  <span style={{ fontSize: '1.1rem' }}>{p.icon}</span>
                  <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 500, fontSize: '0.9rem', color: 'rgba(255,255,255,0.75)' }}>{p.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Solution */}
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(81,151,85,0.1)', border: '1px solid rgba(168,220,171,0.25)', borderRadius: 999, padding: '5px 14px', marginBottom: '1.5rem' }}>
              <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '0.68rem', fontWeight: 700, color: '#A8DCAB', letterSpacing: '0.12em', textTransform: 'uppercase' }}>The Solution</span>
            </div>
            <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, fontSize: 'clamp(1.3rem, 2.5vw, 1.9rem)', color: '#fff', letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: '1.5rem' }}>
              We Focus on <span className="gradient-green">Real Work.</span>
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'rgba(219,170,167,0.75)', lineHeight: 1.75, marginBottom: '2rem' }}>
              We work with colleges to add practical learning. Students apply their knowledge by building, testing, and working on real problems.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {solutions.map((s, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.85rem 1rem', borderRadius: 12, background: 'rgba(81,151,85,0.08)', border: '1px solid rgba(168,220,171,0.15)' }}>
                  <span style={{ fontSize: '1.1rem' }}>{s.icon}</span>
                  <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 500, fontSize: '0.9rem', color: 'rgba(255,255,255,0.75)' }}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          section .grid-2 { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  )
}
