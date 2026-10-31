import { FormEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { venues } from '../data'
import InstagramIcon from '../components/InstagramIcon'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const navigate = useNavigate()
  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    // No backend yet: the Figma design only specifies the form, not where it posts.
    setSent(true)
  }

  return (
    <>
      <section className="contact-head">
        <p className="eyebrow">(02) Contact</p>
        <h1 className="display display--176">
          Get in
          <br />
          <em>touch</em>
        </h1>
      </section>

      <section className="venue-list">
        <div className="group__header venue-list__head">
          <span className="eyebrow">(03) More details</span>
          <span className="mono muted">03</span>
        </div>
        {venues.map((v, i) => (
          <div
            className="venue-row"
            key={v.id}
            onClick={(e) => {
              if (!(e.target as HTMLElement).closest('a')) navigate(`/venue/${v.id}`)
            }}
          >
            <div className="venue-row__name">
              <span className="mono muted">{String(i + 1).padStart(2, '0')}</span>
              <h2 className="display display--60">
                <Link to={`/venue/${v.id}`}>{v.name}</Link>
              </h2>
            </div>
            <div className="venue-row__col">
              <h4>Address</h4>
              <p>
                {v.address[0]}
                <br />
                {v.address[1]}
              </p>
            </div>
            <div className="venue-row__col venue-row__col--phone">
              <h4>Phone</h4>
              <p>{v.phone}</p>
            </div>
            <div className="venue-row__col venue-row__col--actions">
              <h4>Actions</h4>
              <a href={`tel:${v.phone.replace(/\s/g, '')}`}>Call us&nbsp;&nbsp;→</a>
              <a href={`https://www.google.com/maps/search/${encodeURIComponent(v.name + ' Tabriz')}`} target="_blank" rel="noreferrer">
                Go to map&nbsp;&nbsp;→
              </a>
              {v.instagramUrl && (
                <a className="venue-row__ig" href={v.instagramUrl} target="_blank" rel="noreferrer">
                  <InstagramIcon />@{v.instagramUrl.split('/').filter(Boolean).pop()}
                </a>
              )}
            </div>
          </div>
        ))}
      </section>

      <section className="hours">
        <div className="hours__intro">
          <h2 className="display display--88">
            Opening
            <br />
            <em>hours</em>
          </h2>
          <p>If you’re unable to visit the gallery during opening hours, contact us and we’ll do what we can to coordinate a private opening.</p>
        </div>
        <div className="hours__list">
          {venues.map((v) => (
            <div className="hours__item" key={v.id}>
              <h3>{v.name}</h3>
              <p>{v.hours}</p>
              <span className="mono muted upper">Off days: {v.offDays}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="drop">
        <h2 className="display display--88">
          Drop us
          <br />
          <em>a line</em>
        </h2>
        <form className="form" onSubmit={onSubmit}>
          <label className="field">
            <span>Full name</span>
            <input name="name" placeholder="Enter your name" required />
          </label>
          <div className="form__pair">
            <label className="field">
              <span>Email</span>
              <input name="email" type="email" placeholder="Enter your email" required />
            </label>
            <label className="field">
              <span>Phone</span>
              <input name="phone" type="tel" placeholder="Enter your phone" />
            </label>
          </div>
          <label className="field">
            <span>Message</span>
            <textarea name="message" rows={4} placeholder="How can we help you?" required />
          </label>
          <button type="submit" className="btn">
            {sent ? 'Thank you  ✓' : 'Send message  →'}
          </button>
        </form>
      </section>
    </>
  )
}
