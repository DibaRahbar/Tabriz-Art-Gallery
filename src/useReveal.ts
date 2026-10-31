import { useLayoutEffect } from 'react'

// Existing elements only: tag them, then fade/rise each one once as it scrolls into view.
const HEADINGS = '.hero__title, .hero__sub-title, .list-hero h1, .detail-title h1, .contact-head h1, .hours__intro h2, .drop h2, .footer__tagline, .footer__wordmark'
const BLOCKS = [
  '.hero__intro', '.venue', '.section__head', '.group__header', '.card', '.vcard', '.mcard', '.work', '.detail-art', '.facts',
  '.list-hero .eyebrow', '.list-hero__intro', '.years', '.detail-title .eyebrow', '.detail-dates', '.back', '.contact-head .eyebrow',
  '.venue-row', '.hours__intro p', '.hours__item', '.form', '.footer__cols',
].join(', ')

const STAGGER_MS = 60
const MAX_STEPS = 5

export default function useReveal(routeKey: string) {
  useLayoutEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return
    const tag = (selector: string, kind: string) =>
      document.querySelectorAll<HTMLElement>(selector).forEach((el) => {
        if (!el.hasAttribute('data-reveal')) el.setAttribute('data-reveal', kind)
      })
    tag(HEADINGS, 'lg')
    tag(BLOCKS, 'md')

    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries.filter((e) => e.isIntersecting).map((e) => e.target as HTMLElement)
        hit.sort((a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top || a.getBoundingClientRect().left - b.getBoundingClientRect().left)
        hit.forEach((el, i) => {
          el.style.setProperty('--d', `${Math.min(i, MAX_STEPS) * STAGGER_MS}ms`)
          el.classList.add('is-in')
          io.unobserve(el)
        })
      },
      { rootMargin: '0px 0px -6% 0px', threshold: 0.06 },
    )
    document.querySelectorAll('[data-reveal]:not(.is-in)').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [routeKey])
}
