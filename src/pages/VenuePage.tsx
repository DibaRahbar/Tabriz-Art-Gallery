import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { VenueCard, VenueId, cardYear, exBySlug, venuePages } from '../data'

const dot = `${import.meta.env.BASE_URL}icons/active-dot.svg`
const two = (n: number) => String(n).padStart(2, '0')

interface Item {
  c: VenueCard
  title: string
  card: string
}

function Tile({ src, alt, full }: { src: string; alt: string; full?: boolean }) {
  return (
    <div className={'vtile' + (full ? ' vtile--full' : '')}>
      <img src={src} alt={alt} loading="lazy" />
    </div>
  )
}

export default function VenuePage({ id }: { id: VenueId }) {
  const def = venuePages[id]
  const [year, setYear] = useState('All')

  const items: Item[] = useMemo(
    () =>
      def.cards.map((c) => {
        const ex = exBySlug(c.slug)!
        return { c, title: c.title ?? ex.title, card: ex.card }
      }),
    [def],
  )
  const years = useMemo(() => {
    const m = new Map<string, number>()
    items.forEach((i) => m.set(cardYear(i.c), (m.get(cardYear(i.c)) ?? 0) + 1))
    return [...m.entries()].sort((a, b) => Number(b[0]) - Number(a[0]))
  }, [items])
  const shown = items.filter((i) => year === 'All' || cardYear(i.c) === year)

  const cardLink = (i: Item, idx: number, extra?: string, showIndex = true) => (
    <Link key={i.c.slug} to={`/exhibition/${i.c.slug}`} className={'vcard' + (extra ? ' ' + extra : '')}>
      <Tile src={i.card} alt={`${i.title} poster`} />
      <div className="vcard__meta">
        <span className="mono muted">{i.c.dates}</span>
        {showIndex && <span className="mono muted">{two(idx + 1)}</span>}
      </div>
      <span className="vcard__title">{i.title}</span>
    </Link>
  )

  const upcoming = def.upcoming ? shown.filter((i) => items.indexOf(i) < def.upcoming!) : []
  const past = def.upcoming ? shown.filter((i) => items.indexOf(i) >= def.upcoming!) : shown

  return (
    <>
      <section className="list-hero">
        <div>
          <p className="eyebrow">{def.eyebrow}</p>
          <h1 className="display display--176">
            {def.heading[0]}
            <br />
            <em>{def.heading[1]}</em>
          </h1>
          <p className="list-hero__intro">{def.intro}</p>
        </div>
        <div className="years">
          <div className="years__head">
            <span>{def.filterLabel}</span>
            <span>Shows</span>
          </div>
          <button type="button" className={'years__row' + (year === 'All' ? ' is-active' : '')} onClick={() => setYear('All')}>
            <span>
              {year === 'All' && <img className="dot" src={dot} width={6} height={6} alt="" />}All
            </span>
            <span className="mono">{two(items.length)}</span>
          </button>
          {years.map(([y, n]) => (
            <button key={y} type="button" className={'years__row' + (year === y ? ' is-active' : '')} onClick={() => setYear(y)}>
              <span>
                {year === y && <img className="dot" src={dot} width={6} height={6} alt="" />}
                {y}
              </span>
              <span className="mono">{two(n)}</span>
            </button>
          ))}
        </div>
      </section>

      {id === 'malek' && (
        <section className="section section--tight">
          <div className="group__header">
            <span className="eyebrow">(03) All exhibitions</span>
            <span className="mono muted">{two(shown.length)}</span>
          </div>
          <div className="masonry">
            {[0, 1].map((col) => (
              <div key={col} className={'masonry__col' + (col === 1 ? ' masonry__col--offset' : '')}>
                {shown
                  .filter((_, k) => (k < Math.ceil(shown.length / 2) ? 0 : 1) === col)
                  .map((i) => (
                    <Link key={i.c.slug} to={`/exhibition/${i.c.slug}`} className="mcard">
                      <Tile src={i.card} alt={`${i.title} poster`} full />
                      <div className="vcard__meta">
                        <span className="mono muted">{i.c.dates}</span>
                        <span className="mono muted upper">{i.c.kind}</span>
                      </div>
                      <span className="mcard__title">{i.title}</span>
                      <span className="mcard__note muted">{i.c.note}</span>
                    </Link>
                  ))}
              </div>
            ))}
          </div>
        </section>
      )}

      {id === 'doran' && (
        <>
          {upcoming.length > 0 && (
            <section className="section section--tight">
              <div className="group__header">
                <span className="eyebrow">(02) Upcoming</span>
                <span className="mono muted">{two(upcoming.length)}</span>
              </div>
              <div className="grid2">{upcoming.map((i, k) => cardLink(i, k, k % 2 ? 'is-offset vcard--big' : 'vcard--big'))}</div>
            </section>
          )}
          {past.length > 0 && (
            <section className="section section--tight">
              <div className="group__header">
                <span className="eyebrow">(03) Past</span>
                <span className="mono muted">{two(past.length)}</span>
              </div>
              <div className="grid4">{past.map((i, k) => cardLink(i, k, k % 2 ? 'is-offset' : ''))}</div>
            </section>
          )}
        </>
      )}

      {id === 'kabood' &&
        years
          .filter(([y]) => year === 'All' || y === year)
          .map(([y, n]) => (
            <section className="section section--tight" key={y}>
              <div className="group__header group__header--year">
                <h2 className="display display--60 muted-year">{y}</h2>
                <span className="mono muted">{two(n)}</span>
              </div>
              <div className="grid4">
                {items
                  .filter((i) => cardYear(i.c) === y)
                  .map((i, k) => cardLink(i, k, k % 2 ? 'is-offset' : ''))}
              </div>
            </section>
          ))}
    </>
  )
}
