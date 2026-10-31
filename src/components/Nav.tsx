import { useEffect, useState } from 'react'
import { Link, matchPath, useLocation } from 'react-router-dom'
import { exBySlug, venues } from '../data'
import FactRows from './FactRows'

const icon = `${import.meta.env.BASE_URL}icons`
const DESKTOP = '(min-width: 1001px)'

/** Doran and Kabood listing pages show "Online sale" where the other pages show "Gallery". */
export const hasOnlineSale = (pathname: string) => pathname === '/venue/doran' || pathname === '/venue/kabood'

type Section = 'gallery' | 'details' | null

export default function Nav() {
  const { pathname } = useLocation()
  const active = pathname === '/' ? 'home' : pathname === '/contact' ? 'contact' : 'exhibitions'

  // mobile menu state
  const [open, setOpen] = useState(false)
  const [section, setSection] = useState<Section>(null)
  const closeMenu = () => {
    setOpen(false)
    setSection(null)
  }
  const toggleSection = (s: Exclude<Section, null>) => setSection((cur) => (cur === s ? null : s))

  const slug = matchPath('/exhibition/:slug', pathname)?.params.slug
  const exhibition = slug ? exBySlug(slug) : undefined

  useEffect(closeMenu, [pathname])

  useEffect(() => {
    if (!open) return
    const esc = (e: KeyboardEvent) => e.key === 'Escape' && closeMenu()
    const mq = window.matchMedia(DESKTOP)
    const onChange = () => mq.matches && closeMenu()
    document.addEventListener('keydown', esc)
    mq.addEventListener('change', onChange)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', esc)
      mq.removeEventListener('change', onChange)
      document.body.style.overflow = prev
    }
  }, [open])

  const item = (key: string, label: string, to: string | null, scroll?: string) => {
    const isActive = active === key
    const cls = 'nav__link' + (isActive ? ' is-active' : '') + (to ? '' : ' is-disabled')
    const body = (
      <>
        {isActive && <img className="dot" src={`${icon}/active-dot.svg`} width={6} height={6} alt="" />}
        {label}
      </>
    )
    return to ? (
      <Link key={key} to={to} state={scroll ? { scroll } : undefined} className={cls}>
        {body}
      </Link>
    ) : (
      <span key={key} className={cls} aria-disabled="true">
        {body}
      </span>
    )
  }

  const menuLink = (key: string, label: string, to: string, scroll?: string) => (
    <li>
      <Link to={to} state={scroll ? { scroll } : undefined} className={'menu__item' + (active === key ? ' is-active' : '')} onClick={closeMenu}>
        {active === key && <img className="dot" src={`${icon}/active-dot.svg`} width={6} height={6} alt="" />}
        {label}
      </Link>
    </li>
  )

  const group = (id: Exclude<Section, null>, label: string, children: React.ReactNode) => (
    <li className={'menu__group' + (section === id ? ' is-expanded' : '')}>
      <button
        type="button"
        className="menu__item"
        aria-expanded={section === id}
        aria-controls={`menu-${id}`}
        onClick={() => toggleSection(id)}
      >
        {label}
        <span className="menu__chev" aria-hidden="true" />
      </button>
      <div id={`menu-${id}`} className={'menu__sub' + (section === id ? ' is-open' : '')}>
        <div className="menu__sub-inner">{children}</div>
      </div>
    </li>
  )

  return (
    <header className="nav">
      <Link to="/" state={{ scroll: 'top' }} aria-label="Tabriz Art Gallery, home" onClick={closeMenu}>
        <img className="nav__logo" src={`${icon}/logo.svg`} width={124} height={35} alt="t.a.g Tabriz Art Gallery" />
      </Link>
      <nav className="nav__links">
        {item('home', 'Home', '/', 'top')}
        {item('exhibitions', 'Exhibitions', '/', 'exhibitions')}
        {hasOnlineSale(pathname) ? item('sale', 'Online sale', null) : item('gallery', 'Gallery', '/', 'galleries')}
        {item('contact', 'Contact', '/contact')}
      </nav>

      <button
        type="button"
        className={'nav__burger' + (open ? ' is-open' : '')}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => (open ? closeMenu() : setOpen(true))}
      >
        <span />
        <span />
      </button>

      <div
        id="mobile-menu"
        className={'nav__panel' + (open ? ' is-open' : '')}
        inert={!open}
        onPointerDown={(e) => {
          // a tap outside the open section collapses it
          if (!(e.target as Element).closest('.menu__group.is-expanded')) setSection(null)
        }}
      >
        <ul className="menu">
          {menuLink('home', 'Home', '/', 'top')}
          {menuLink('exhibitions', 'Exhibitions', '/', 'exhibitions')}
          {group(
            'gallery',
            'Gallery',
            venues.map((v) => (
              <Link key={v.id} to={`/venue/${v.id}`} className="menu__subitem" onClick={closeMenu}>
                {v.name}
              </Link>
            )),
          )}
          {hasOnlineSale(pathname) && (
            <li>
              <span className="menu__item is-disabled" aria-disabled="true">
                Online sale
              </span>
            </li>
          )}
          {exhibition &&
            group(
              'details',
              'Details',
              <div className="menu__facts">
                <FactRows ex={exhibition} onNavigate={closeMenu} />
              </div>,
            )}
          {menuLink('contact', 'Contact', '/contact')}
        </ul>
      </div>
    </header>
  )
}
