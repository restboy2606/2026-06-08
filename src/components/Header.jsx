export default function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <a href="#" className="header__logo">
          <span className="header__logo-icon">⚒️</span>
          PIXELFORGE
        </a>
        <nav>
          <ul className="header__nav">
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#games">GAMES</a></li>
            <li><a href="#team">TEAM</a></li>
            <li><a href="#contact">CONTACT</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
