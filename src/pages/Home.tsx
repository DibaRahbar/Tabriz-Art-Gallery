import { Link } from 'react-router-dom'
import { HomeCard, homeOnShow, homeSoon } from '../data'

const icon = (n: string) => `${import.meta.env.BASE_URL}icons/${n}.svg`

function Card({ c }: { c: HomeCard }) {
  return (
    <Link to={`/exhibition/${c.slug}`} className="card">
      <div className="card__tile">
        <img src={c.poster} alt={`${c.headline} poster`} style={{ aspectRatio: c.ratio }} loading="lazy" />
      </div>
      <div className="card__caption">
        <div className="card__row">
          <span className="card__title">{c.headline}</span>
          <span className="mono muted">{c.dates}</span>
        </div>
        <span className="card__sub">{c.sub}</span>
        {c.tags && <span className="mono muted card__tags">{c.tags.join('  ·  ')}</span>}
      </div>
    </Link>
  )
}

export default function Home() {
  return (
    <>
      <section className="hero" id="top">
        <h1 className="hero__title">Three Visions, One Space</h1>
        <div className="hero__sub">
          <p className="hero__sub-title">Infinite perspectives.</p>
          <div className="hero__intro">
            <p>Discover three unique venues under one roof, each telling its own story.</p>
            <Link to="/" state={{ scroll: 'exhibitions' }} className="strong">
              View exhibitions &nbsp;→
            </Link>
          </div>
        </div>

        <div className="venues" id="galleries">
          <Link to="/venue/doran" className="venue venue--offset">
            <div className="venue__art venue__art--square">
              <img src={`${import.meta.env.BASE_URL}images/doran-venue.png`} alt="" />
            </div>
            <div className="venue__caption">
              <span className="venue__name">Doran Free Space</span>
              <span className="muted-2">01</span>
            </div>
          </Link>
          <Link to="/venue/malek" className="venue">
            <div className="venue__art" style={{ background: '#56c4d0' }}>
              <img src={icon('arch')} alt="" style={{ left: 148, top: 85, width: 123, height: 246 }} />
              <span style={{ left: 193, top: 162, width: 32, height: 60, background: '#fff' }} />
            </div>
            <div className="venue__caption">
              <span className="venue__name">Malek Foundation</span>
              <span className="muted-2">02</span>
            </div>
          </Link>
          <Link to="/venue/kabood" className="venue venue--offset">
            <div className="venue__art venue__art--photo">
              <div className="venue__photo">
                <img src={`${import.meta.env.BASE_URL}images/kabood-venue.png`} alt="" />
              </div>
            </div>
            <div className="venue__caption">
              <span className="venue__name">Kabood Atelier</span>
              <span className="muted-2">03</span>
            </div>
          </Link>
        </div>
      </section>

      <section className="section" id="exhibitions">
        <div className="section__head">
          <div>
            <p className="eyebrow">(01) Programme</p>
            <h2 className="display display--112">Gallery exhibitions</h2>
          </div>
          <Link to="/venue/malek" className="underlined">
            View all &nbsp;→
          </Link>
        </div>

        <div className="group">
          <div className="group__header">
            <span className="group__label">
              <img className="dot" src={icon('active-dot')} width={6} height={6} alt="" />
              On show
            </span>
            <span className="mono muted">05</span>
          </div>
          <div className="grid3">
            {homeOnShow.map((c) => (
              <Card key={c.slug} c={c} />
            ))}
          </div>
        </div>

        <div className="group">
          <div className="group__header">
            <span className="group__label">Opening soon</span>
            <span className="mono muted">03</span>
          </div>
          <div className="grid3">
            {homeSoon.map((c, i) => (
              <Card key={i} c={c} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
