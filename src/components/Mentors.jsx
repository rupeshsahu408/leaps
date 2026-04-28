import { Link } from 'react-router-dom'

const mentors = [
  {
    name: 'Indraneel Chitale',
    role: 'Managing Partner @Chitale Bandhu Mithaiwale',
    bio: 'Scaling traditional businesses with modern technology.',
    img: 'https://i.postimg.cc/prdszdrc/indraneel.jpg',
    color: '#CD1C18',
  },
  {
    name: 'Sagar Babar',
    role: 'Founder & CEO @Comsense Media',
    bio: '200k+ Instagram • Master of B2B sales and international market expansion.',
    img: 'https://i.postimg.cc/hGTmZR6H/783c083e-845e-4006-ae39-61194baa0471.jpg',
    color: '#519755',
  },
  {
    name: 'Shaurya Gaikwad',
    role: 'Founder & CEO @LEAP',
    bio: 'Instagram 70k+ • Deep tech specialist and startup ecosystem builder.',
    img: 'https://i.postimg.cc/Kzxqcf2z/IMG-4002.jpg',
    color: '#A8DCAB',
  },
  {
    name: 'Raul John Aju',
    role: 'AI Kid of India',
    bio: 'Instagram 300k+ • Expert in business transformation and operational excellence.',
    img: 'https://i.postimg.cc/K83s04Nf/30-day-cha-enge-(Instagram-Post-(45))(1).png',
    color: '#FFA896',
  },
  {
    name: 'Dev Taneja',
    role: 'Founder & CEO @Unjob.ai',
    bio: 'Instagram 50k+ • Specialist in building scalable digital products and UX.',
    img: 'https://i.postimg.cc/DfCjF1Yh/1763913027633.jpg',
    color: '#BE91BE',
  },
  {
    name: 'Mann Jadwani',
    role: 'Founder and CEO @Neural Arc',
    bio: 'Instagram 70k+ • Expert in brand building and digital transformation.',
    img: 'https://i.postimg.cc/T1TZSGwq/image_removebg_preview_(1).png',
    color: '#DBAAA7',
  },
]

export default function Mentors() {
  return (
    <section id="community" style={{ padding: '7rem 1.5rem', position: 'relative', overflow: 'hidden' }}>
      {/* BG */}
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 0%, rgba(205,28,24,0.07) 0%, transparent 60%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 5 }}>
        <hr className="hr-gradient" style={{ marginBottom: '5rem' }} />

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <div style={{ width: 28, height: 1.5, background: 'linear-gradient(90deg, transparent, #FFA896)' }} />
            <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '0.7rem', fontWeight: 700, color: '#FFA896', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
              Industry Leaders
            </span>
            <div style={{ width: 28, height: 1.5, background: 'linear-gradient(90deg, #FFA896, transparent)' }} />
          </div>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', color: '#fff', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '1rem' }}>
            Meet the <span className="gradient-red">Mentors</span>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(219,170,167,0.65)', maxWidth: 480, margin: '0 auto' }}>
            Learn from industry leaders and founders who have built real businesses.
          </p>
        </div>

        {/* Mentor grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '3.5rem' }}>
          {mentors.map((mentor, i) => (
            <div
              key={i}
              className="tilt-card"
              style={{
                borderRadius: 20,
                overflow: 'hidden',
                border: `1px solid ${mentor.color}20`,
                background: `linear-gradient(160deg, ${mentor.color}10 0%, rgba(38,0,9,0.85) 100%)`,
                boxShadow: `0 8px 32px rgba(0,0,0,0.4), 0 0 20px ${mentor.color}08`,
              }}
            >
              {/* Photo */}
              <div style={{ height: 220, overflow: 'hidden', position: 'relative' }}>
                <img
                  src={mentor.img}
                  alt={mentor.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block', transition: 'transform 0.4s ease' }}
                  onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                  onError={e => {
                    e.target.style.display = 'none'
                    e.target.parentElement.style.background = `linear-gradient(135deg, ${mentor.color}30, rgba(38,0,9,0.9))`
                    e.target.parentElement.innerHTML = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:3rem;">${mentor.name[0]}</div>`
                  }}
                />
                {/* Gradient bottom */}
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 60, background: `linear-gradient(transparent, rgba(38,0,9,0.9))` }} />
              </div>

              {/* Info */}
              <div style={{ padding: '1.25rem 1.5rem' }}>
                <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: '1.05rem', color: '#fff', marginBottom: '0.3rem' }}>
                  {mentor.name}
                </h3>
                <p style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '0.75rem', fontWeight: 600, color: mentor.color, marginBottom: '0.6rem' }}>
                  {mentor.role}
                </p>
                <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.55 }}>
                  {mentor.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className="glass-dark"
          style={{
            borderRadius: 20,
            padding: '2rem',
            textAlign: 'center',
            border: '1px solid rgba(205,28,24,0.2)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <p style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: '1.15rem', color: '#fff' }}>
            Join the next cohort.
          </p>
          <p style={{ fontSize: '0.9rem', color: 'rgba(219,170,167,0.65)' }}>
            Get mentored by the best in the industry.
          </p>
          <Link
            to="/join"
            className="btn-3d"
            style={{
              fontFamily: "'Space Grotesk',sans-serif",
              fontWeight: 700, fontSize: '0.88rem', letterSpacing: '0.04em',
              background: 'linear-gradient(135deg, #CD1C18, #9B1313)',
              color: '#fff', padding: '12px 28px', borderRadius: 999,
              textDecoration: 'none',
              boxShadow: '0 4px 20px rgba(205,28,24,0.4)',
            }}
          >
            Apply Now
          </Link>
          <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.3)' }}>
            ✦ TO BE ANNOUNCED SOON — Stay tuned for the reveal
          </p>
        </div>
      </div>
    </section>
  )
}
