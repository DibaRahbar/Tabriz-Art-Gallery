import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation, useParams } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import VenuePage from './pages/VenuePage'
import ExhibitionDetail from './pages/ExhibitionDetail'
import Contact from './pages/Contact'
import { VenueId, venuePages } from './data'
import useReveal from './useReveal'

function Venue() {
  const { id } = useParams()
  if (!id || !(id in venuePages)) return <Navigate to="/" replace />
  return <VenuePage id={id as VenueId} />
}

export default function App() {
  const location = useLocation()
  useReveal(location.pathname)
  useEffect(() => {
    const target = (location.state as { scroll?: string } | null)?.scroll
    if (target && target !== 'top') {
      document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.scrollTo(0, 0)
    }
  }, [location.key])

  return (
    <>
      <Nav />
      <main>
        <div key={location.pathname} className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/venue/:id" element={<Venue />} />
          <Route path="/exhibition/:slug" element={<ExhibitionDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        </div>
      </main>
      <Footer />
    </>
  )
}
