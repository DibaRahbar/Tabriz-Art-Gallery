import { Link } from 'react-router-dom'
import { Exhibition } from '../data'

/** Rows of the exhibition "Details" panel; shared by the page and the mobile menu. */
export default function FactRows({ ex, inline, onNavigate }: { ex: Exhibition; inline?: boolean; onNavigate?: () => void }) {
  return (
    <>
      {ex.artists &&
        (inline ? (
          <div className="fact fact--inline">
            <h3>Artists</h3>
            <span className="muted">{ex.artists}</span>
          </div>
        ) : (
          <div className="fact fact--block">
            <h3>Artists</h3>
            <p>{ex.artists}</p>
          </div>
        ))}
      <div className="fact fact--static">
        <h3>Tour 360</h3>
        <span>See more&nbsp;&nbsp;→</span>
      </div>
      <div className="fact fact--static">
        <h3>Download catalog</h3>
        <span>Download&nbsp;&nbsp;→</span>
      </div>
      {ex.hoursNote ? (
        <div className="fact fact--block">
          <h3>Hours / Location</h3>
          {ex.hoursNote.map((l) => (
            <p key={l}>{l}</p>
          ))}
        </div>
      ) : (
        <Link to="/contact" className="fact" onClick={onNavigate}>
          <h3>Hours / Location</h3>
          <span>View&nbsp;&nbsp;→</span>
        </Link>
      )}
    </>
  )
}
