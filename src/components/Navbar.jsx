import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <a href="#" className="nav__logo">
        <span className="pixel-emoji nav__logo-icon" aria-hidden="true">⚒</span>
        PIXELFORGE
      </a>

      <nav>
        <ul className="nav__links">
          <li><a href="#play">Play</a></li>
          <li><a href="#features">Game</a></li>
          <li><a href="#cta">Contact</a></li>
        </ul>
      </nav>

      <a href="#play" className="nav__cta">PLAY NOW →</a>
    </header>
  )
}
