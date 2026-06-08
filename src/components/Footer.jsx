const links = {
  Product: ['Monster Chronicle', 'Dungeon Bits', 'Pixel Knights', 'Roadmap'],
  Company: ['About', 'Careers', 'Blog', 'Press Kit'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <div className="footer-brand__logo">
            <span>⚒</span> PIXELFORGE STUDIOS
          </div>
          <p>
            비트 하나로 세계를 만듭니다.<br />
            레트로 픽셀 RPG 모바일 게임 개발사.<br />
            Seoul, Korea · Est. 2025.12.25
          </p>
        </div>

        {Object.entries(links).map(([col, items]) => (
          <div className="footer-col" key={col}>
            <h4>{col}</h4>
            <ul>
              {items.map((item) => (
                <li key={item}><a href="#">{item}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer-bottom">
        <p>© 2025 – 2026 PIXELFORGE STUDIOS. All rights reserved.</p>
        <div className="footer-social">
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
          <a href="#">YouTube</a>
          <a href="#">Discord</a>
        </div>
      </div>
    </footer>
  )
}
