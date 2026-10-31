import { useEffect, useRef, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { Exhibition, exBySlug } from '../data'
import FactRows from '../components/FactRows'

const two = (n: number) => String(n).padStart(2, '0')

function Facts({ ex, inline }: { ex: Exhibition; inline?: boolean }) {
  // On mobile the panel is a popover opened by the "Details" header; on desktop it is always visible (CSS).
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const close = (e: PointerEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false)
    }
    const esc = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('pointerdown', close, { passive: true })
    document.addEventListener('keydown', esc)
    return () => {
      document.removeEventListener('pointerdown', close)
      document.removeEventListener('keydown', esc)
    }
  }, [open])

  return (
    <div className={'facts' + (open ? ' is-open' : '')} ref={ref}>
      <button type="button" className="facts__head" aria-expanded={open} aria-controls={`facts-${ex.slug}`} onClick={() => setOpen((o) => !o)}>
        <span>Details</span>
        <span>{ex.title}</span>
      </button>
      <div className="facts__body" id={`facts-${ex.slug}`}>
        <FactRows ex={ex} inline={inline} />
      </div>
    </div>
  )
}

export default function ExhibitionDetail() {
  const { slug } = useParams()
  const ex = slug ? exBySlug(slug) : undefined
  if (!ex) return <Navigate to="/" replace />

  const back = (
    <Link to={`/venue/${ex.venue}`} className="back mono">
      ←&nbsp;&nbsp;All exhibitions
    </Link>
  )

  if (ex.works) {
    const words = ex.title.split(' ')
    const last = words.length > 1 ? words.pop() : undefined
    return (
      <>
        <section className="detail-header detail-header--works">
          <div className="detail-header__left">
            {back}
            <div className="detail-title">
              <p className="eyebrow">(02) {ex.kind}</p>
              <h1 className="display display--176 display--tight">
                {last ? (
                  <>
                    {words.join(' ')}
                    <br />
                    <em>{last}</em>
                  </>
                ) : (
                  ex.title
                )}
              </h1>
              <p className="mono detail-dates">{ex.dates}</p>
            </div>
          </div>
          <Facts ex={ex} inline />
        </section>

        <section className="works">
          <div className="group__header">
            <span className="eyebrow">(03) Art works</span>
            <span className="mono muted">{two(ex.works.length)}</span>
          </div>
          <div className="works__grid">
            {ex.works.map((w, i) => (
              <figure key={w.img} className="work">
                <img src={w.img} alt={`${w.title}${w.meta ? ', ' + w.meta : ''}`} loading="lazy" />
                <figcaption>
                  <span className="work__row mono muted">
                    <span>
                      {two(i + 1)} / {two(ex.works!.length)}
                    </span>
                    <span>{w.year}</span>
                  </span>
                  <span className="work__title">{w.title}</span>
                  {w.meta && <span className="mono muted work__meta">{w.meta.replace(' · ', '  ·  ')}</span>}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <section className="detail-header">
        {back}
        <div className="detail-title">
          <p className="eyebrow">(02) {ex.kind}</p>
          <h1 className="display display--176 display--tight">{ex.title}</h1>
          <p className="mono detail-dates">{ex.dates}</p>
        </div>
      </section>

      <section className="detail-body">
        <figure className="detail-art">
          <img src={ex.cover} alt={`${ex.title} poster`} />
          <figcaption className="mono muted">01 / 01</figcaption>
        </figure>
        <Facts ex={ex} />
      </section>
    </>
  )
}
