export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <div className="footer-brand__logo">
            <span className="pixel-emoji" aria-hidden="true">⚒</span>
            {' '}PIXELFORGE STUDIOS
          </div>
          <p>
            비트 하나로 세계를 만듭니다.<br />
            레트로 픽셀 RPG 모바일 게임 개발사.<br />
            Seoul · Est. 2025.12.25
          </p>
        </div>

        <div className="footer-col">
          <h4>Game</h4>
          <ul>
            <li><a href={`${import.meta.env.BASE_URL}play.html`}>Forge Pop</a></li>
            <li><a href="#features">Game Info</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:ssujklim@gmail.com">ssujklim@gmail.com</a></li>
            <li><a href="https://github.com/restboy2606" target="_blank" rel="noreferrer">GitHub</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 – 2026 PIXELFORGE STUDIOS. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  )
}
