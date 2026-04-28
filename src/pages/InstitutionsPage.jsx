import PageHeader from '../components/PageHeader'
import InstitutionsProblem from '../components/InstitutionsProblem'
import InstitutionsContact from '../components/InstitutionsContact'

const benefits = [
  {
    title: 'NAAC & NEP-aligned',
    body: 'LEAP supplies structured evidence for societal engagement, experiential learning, and outcomes-based education.',
    color: '#CD1C18',
  },
  {
    title: 'Industry-led curriculum',
    body: 'A 24-week, six-phase program co-designed with founders, operators, and investors — not abstract academia.',
    color: '#A8DCAB',
  },
  {
    title: 'Real student outcomes',
    body: 'Verified revenue proof, MVPs, pitch decks, and portfolios — quantifiable artefacts your placement cell can showcase.',
    color: '#BE91BE',
  },
  {
    title: 'Brand & PR ready',
    body: 'High-quality media assets, demo day footage, and founder stories that lift institutional reputation.',
    color: '#FFA896',
  },
  {
    title: 'Mentor & investor network',
    body: 'Direct access to 50+ mentors, regional VCs, and the LEAP alumni community for student placements and pilots.',
    color: '#519755',
  },
  {
    title: 'Plug-in delivery model',
    body: 'Hybrid in-class and out-class delivery integrates with your existing semesters — no curriculum overhaul required.',
    color: '#DBAAA7',
  },
]

const steps = [
  { n: '01', title: 'Discovery call', body: 'Share your campus profile, goals, and timelines with the LEAP team.' },
  { n: '02', title: 'Custom proposal', body: 'A tailored cohort plan, faculty integration, and outcomes pack within 48 hours.' },
  { n: '03', title: 'Pilot cohort', body: 'Launch with a 30–60 student pilot supported by LEAP mentors on-ground.' },
  { n: '04', title: 'Scale & report', body: 'Quarterly impact reports, NAAC artefacts, and expansion across departments.' },
]

export default function InstitutionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="For Institutions"
        title="Bring the Builder Movement"
        highlight="to your campus."
        subtitle="Partner with LEAP to embed practical, industry-led startup education inside your existing program — backed by real outcomes, mentors, and student-built ventures."
      />

      <InstitutionsProblem />

      {/* Benefits grid */}
      <section style={{ padding: '6rem 1.5rem', position: 'relative' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2
              style={{
                fontFamily: "'Space Grotesk',sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)',
                color: '#fff',
                letterSpacing: '-0.03em',
                marginBottom: '1rem',
              }}
            >
              Why colleges <span className="gradient-green">choose LEAP</span>
            </h2>
            <p style={{ color: 'rgba(219,170,167,0.7)', maxWidth: 640, margin: '0 auto', lineHeight: 1.65 }}>
              A complete plug-in program designed for institutional outcomes — academic, brand, and student employability.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {benefits.map(b => (
              <div
                key={b.title}
                className="tilt-card glass-dark"
                style={{
                  borderRadius: 18,
                  padding: '1.5rem',
                  border: `1px solid ${b.color}28`,
                }}
              >
                <div
                  style={{
                    width: 36, height: 36,
                    borderRadius: 10,
                    background: `${b.color}22`,
                    border: `1px solid ${b.color}50`,
                    marginBottom: '1rem',
                  }}
                />
                <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: '1.05rem', color: '#fff', marginBottom: '0.5rem' }}>{b.title}</h3>
                <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.6 }}>{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process timeline */}
      <section style={{ padding: '5rem 1.5rem', background: 'rgba(0,0,0,0.18)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2
              style={{
                fontFamily: "'Space Grotesk',sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)',
                color: '#fff',
                letterSpacing: '-0.03em',
                marginBottom: '0.5rem',
              }}
            >
              How partnerships <span className="gradient-red">work</span>
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {steps.map(s => (
              <div
                key={s.n}
                style={{
                  borderRadius: 16,
                  padding: '1.5rem',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(168,220,171,0.12)',
                }}
              >
                <p style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '0.72rem', fontWeight: 700, color: '#A8DCAB', letterSpacing: '0.16em' }}>{s.n}</p>
                <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: '1.05rem', color: '#fff', margin: '0.4rem 0 0.6rem' }}>{s.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.55 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <InstitutionsContact />
    </>
  )
}
