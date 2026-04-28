import { useState } from 'react'
import PageHeader from '../components/PageHeader'

const contactCards = [
  {
    icon: '✉️',
    eyebrow: 'Email',
    label: 'contact@leapstartup.com',
    href: 'mailto:contact@leapstartup.com',
    color: '#CD1C18',
  },
  {
    icon: '📞',
    eyebrow: 'Call',
    label: '+91 98765 43210',
    href: 'tel:+919876543210',
    color: '#A8DCAB',
  },
  {
    icon: '📍',
    eyebrow: 'Visit',
    label: 'Pune, Maharashtra — India',
    href: '#',
    color: '#BE91BE',
  },
  {
    icon: '🕒',
    eyebrow: 'Hours',
    label: 'Mon–Sat · 10:00 – 19:00 IST',
    href: '#',
    color: '#FFA896',
  },
]

const reasons = [
  'I want to join the next cohort',
  'I represent an institution',
  'I\'d like to mentor at LEAP',
  'Press / Media inquiry',
  'Partnership / Sponsorship',
  'Other',
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', reason: reasons[0], message: '' })

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's"
        highlight="talk."
        subtitle="Whether you're a student, an institution, a mentor, or a partner — drop a note and the LEAP team will get back within 48 hours."
      />

      {/* Contact grid */}
      <section style={{ padding: '4rem 1.5rem 2rem' }}>
        <div
          style={{
            maxWidth: 1100,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {contactCards.map(c => (
            <a
              key={c.eyebrow}
              href={c.href}
              className="tilt-card glass-dark"
              style={{
                borderRadius: 18,
                padding: '1.5rem',
                textDecoration: 'none',
                border: `1px solid ${c.color}33`,
                display: 'block',
              }}
            >
              <div
                style={{
                  width: 44, height: 44,
                  borderRadius: 12,
                  background: `${c.color}22`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.2rem',
                  marginBottom: '1rem',
                }}
              >
                {c.icon}
              </div>
              <p
                style={{
                  fontFamily: "'Space Grotesk',sans-serif",
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  color: 'rgba(255,255,255,0.45)',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  marginBottom: 4,
                }}
              >
                {c.eyebrow}
              </p>
              <p
                style={{
                  fontFamily: "'Space Grotesk',sans-serif",
                  fontWeight: 700,
                  color: c.color === '#CD1C18' ? '#FFA896' : c.color,
                  fontSize: '0.95rem',
                }}
              >
                {c.label}
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* Form + side info */}
      <section style={{ padding: '3rem 1.5rem 6rem' }}>
        <div
          style={{
            maxWidth: 1100,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: '3rem',
            alignItems: 'start',
          }}
          className="contact-grid"
        >
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="glass-dark"
            style={{
              borderRadius: 24,
              padding: '2.25rem',
              border: '1px solid rgba(168,220,171,0.15)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
            }}
          >
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                <div
                  style={{
                    width: 64, height: 64, borderRadius: '50%',
                    background: 'rgba(81,151,85,0.18)',
                    border: '1px solid rgba(168,220,171,0.4)',
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '1.25rem',
                  }}
                >
                  <svg width="28" height="28" fill="none" stroke="#A8DCAB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12l5 5L20 6" /></svg>
                </div>
                <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, fontSize: '1.4rem', color: '#fff', marginBottom: '0.5rem' }}>Message received.</h3>
                <p style={{ color: 'rgba(219,170,167,0.7)', lineHeight: 1.6 }}>Thanks {form.name || 'there'} — the LEAP team will be in touch within 48 hours.</p>
              </div>
            ) : (
              <>
                <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: '1.35rem', color: '#fff', marginBottom: '0.4rem' }}>
                  Send us a message
                </h3>
                <p style={{ color: 'rgba(219,170,167,0.7)', fontSize: '0.9rem', marginBottom: '1.75rem' }}>
                  Fill out the form below and we'll route your message to the right team.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }} className="row-2">
                  <FormField label="Your name" name="name" value={form.name} onChange={handleChange} required />
                  <FormField label="Email" name="email" type="email" value={form.email} onChange={handleChange} required />
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label style={labelStyle}>I'm reaching out about</label>
                  <select
                    name="reason"
                    value={form.reason}
                    onChange={handleChange}
                    style={{ ...inputStyle, appearance: 'none' }}
                  >
                    {reasons.map(r => <option key={r} value={r} style={{ background: '#38000A' }}>{r}</option>)}
                  </select>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={labelStyle}>Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    placeholder="Tell us a bit about what you're looking for…"
                    style={{ ...inputStyle, resize: 'vertical', fontFamily: 'inherit' }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-3d"
                  style={{
                    fontFamily: "'Space Grotesk',sans-serif",
                    fontWeight: 700, fontSize: '0.92rem', letterSpacing: '0.04em',
                    background: 'linear-gradient(135deg, #CD1C18 0%, #9B1313 100%)',
                    color: '#fff',
                    padding: '14px 0',
                    borderRadius: 14,
                    border: 'none',
                    width: '100%',
                    cursor: 'pointer',
                    boxShadow: '0 6px 24px rgba(205,28,24,0.45)',
                  }}
                >
                  Send Message
                </button>
              </>
            )}
          </form>

          {/* Side info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div
              className="glass-dark"
              style={{
                borderRadius: 20,
                padding: '1.75rem',
                border: '1px solid rgba(205,28,24,0.2)',
              }}
            >
              <span
                style={{
                  display: 'inline-block',
                  fontFamily: "'Space Grotesk',sans-serif",
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  color: '#FFA896',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  marginBottom: '0.75rem',
                }}
              >
                For Students
              </span>
              <h4 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: '1.1rem', color: '#fff', marginBottom: '0.5rem' }}>
                Want to join the cohort?
              </h4>
              <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>
                Cohort 2 is open: 1 April – 30 June 2026. Apply through the dedicated cohort form.
              </p>
            </div>

            <div
              className="glass-dark"
              style={{
                borderRadius: 20,
                padding: '1.75rem',
                border: '1px solid rgba(168,220,171,0.2)',
              }}
            >
              <span
                style={{
                  display: 'inline-block',
                  fontFamily: "'Space Grotesk',sans-serif",
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  color: '#A8DCAB',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  marginBottom: '0.75rem',
                }}
              >
                For Institutions
              </span>
              <h4 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: '1.1rem', color: '#fff', marginBottom: '0.5rem' }}>
                Bring LEAP to your campus
              </h4>
              <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>
                Use the official inquiry form on the Institutions page for partnerships and pilots.
              </p>
            </div>

            <div
              style={{
                borderRadius: 20,
                padding: '1.5rem',
                background: 'rgba(168,220,171,0.06)',
                border: '1px dashed rgba(168,220,171,0.2)',
              }}
            >
              <p style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '0.78rem', fontWeight: 600, color: 'rgba(168,220,171,0.7)', lineHeight: 1.6 }}>
                Average reply time: <span style={{ color: '#fff', fontWeight: 800 }}>under 48 hours</span>.
              </p>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 820px) {
            .contact-grid { grid-template-columns: 1fr !important; }
            .row-2 { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>
    </>
  )
}

const labelStyle = {
  display: 'block',
  fontFamily: "'Space Grotesk',sans-serif",
  fontSize: '0.72rem',
  fontWeight: 700,
  color: 'rgba(255,255,255,0.55)',
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  marginBottom: 6,
}

const inputStyle = {
  width: '100%',
  padding: '0.85rem 1rem',
  borderRadius: 12,
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(255,255,255,0.1)',
  color: '#fff',
  fontSize: '0.95rem',
  outline: 'none',
  fontFamily: 'inherit',
}

function FormField({ label, ...props }) {
  return (
    <div>
      <label style={labelStyle}>{label}</label>
      <input {...props} style={inputStyle} />
    </div>
  )
}
