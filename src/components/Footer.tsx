import { Link, useLocation } from 'react-router-dom'
import { venues } from '../data'
import InstagramIcon from './InstagramIcon'

interface FooterLink {
  label: string
  to?: string
  scroll?: string
}

const home: FooterLink = { label: 'Home', to: '/', scroll: 'top' }
const exhibitions: FooterLink = { label: 'Exhibitions', to: '/', scroll: 'exhibitions' }
const contact: FooterLink = { label: 'Contact', to: '/contact' }
const ex = (label: string, slug: string): FooterLink => ({ label, to: `/exhibition/${slug}` })

// Three footer variants exist in Figma: default, Doran listing, Kabood listing.
const variants = {
  default: {
    quick: [home, { label: 'Galleries', to: '/', scroll: 'galleries' }, exhibitions, contact],
    exhibition: [ex('La’l — Group', 'lal'), ex('19Hz project', '19hz-project'), ex('Bitter Almond', 'bitter-almond')],
  },
  doran: {
    quick: [home, exhibitions, { label: 'Online sale' }, contact],
    exhibition: [ex('19Hz project', '19hz-project'), ex('Contemporary project', 'contemporary-project-feb-mar-2025'), ex('Metamorphosis', 'contemporary-art-project-2024')],
  },
  kabood: {
    quick: [home, exhibitions, { label: 'Online sale' }, contact],
    exhibition: [ex('Mehrdad Khataei', 'mehrdad-khataei'), ex('Rabia', 'rabia-arzhang-projects-01'), ex('Bitter Almond', 'bitter-almond')],
  },
}

function renderLink(l: FooterLink) {
  return l.to ? (
    <Link key={l.label} to={l.to} state={l.scroll ? { scroll: l.scroll } : undefined}>
      {l.label}
    </Link>
  ) : (
    <span key={l.label} className="is-disabled">
      {l.label}
    </span>
  )
}

export default function Footer() {
  const { pathname } = useLocation()
  const v = pathname === '/venue/doran' ? variants.doran : pathname === '/venue/kabood' ? variants.kabood : variants.default

  return (
    <footer className="footer">
      <div className="footer__top">
        <p className="footer__tagline">
          Three venues,
          <br />
          one roof.
        </p>
        <div className="footer__cols">
          <div className="footer__col">
            <h4>Quick link</h4>
            {v.quick.map(renderLink)}
          </div>
          <div className="footer__col">
            <h4>Exhibition</h4>
            {v.exhibition.map(renderLink)}
          </div>
          <div className="footer__col">
            <h4>Social media</h4>
            {venues.map((x) => {
              const inner = (
                <>
                  <InstagramIcon />
                  {x.instagram}
                </>
              )
              return x.instagramUrl ? (
                <a key={x.id} className="footer__social" href={x.instagramUrl} target="_blank" rel="noreferrer">
                  {inner}
                </a>
              ) : (
                <span key={x.id} className="footer__social is-disabled">
                  {inner}
                </span>
              )
            })}
          </div>
        </div>
      </div>
      <p className="footer__wordmark">Tabriz Art Gallery</p>
      <div className="footer__bottom">
        <span className="muted">© 2026 @DibaRahbar. All rights reserved.</span>
        <button type="button" className="footer__top-btn" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Back to top
        </button>
      </div>
    </footer>
  )
}
