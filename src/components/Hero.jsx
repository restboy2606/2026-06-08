export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__grid-bg" />
      <div className="hero__badge">EST. 2025.12.25</div>
      <h1 className="hero__title">
        PIXEL<span>FORGE</span>
        <br />
        STUDIOS
      </h1>
      <p className="hero__subtitle">
        비트 바이 비트, 세계를 만들다
        <br />
        레트로 픽셀 RPG 모바일 게임 개발사
      </p>
      <div className="hero__cta-group">
        <a href="#games" className="btn-pixel btn-pixel--primary">
          ▶ OUR GAMES
        </a>
        <a href="#contact" className="btn-pixel btn-pixel--outline">
          ✉ CONTACT US
        </a>
      </div>
      <div className="hero__scroll-hint">▼ SCROLL DOWN ▼</div>
    </section>
  )
}
