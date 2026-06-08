export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true" />

      <div className="hero-badge">
        <span className="pixel-emoji" aria-hidden="true">⚒</span>
        {' '}PIXELFORGE STUDIOS · EST. 2025.12.25
      </div>

      <h1 className="hero-title">
        PIXEL BY PIXEL,<br />
        WE BUILD <em>WORLDS</em>
      </h1>

      <p className="hero-sub">
        포켓몬 1세대의 그 설렘을 다시 손 안에서.<br />
        레트로 픽셀 RPG 모바일 게임 개발사
      </p>

      <a href="#features" className="btn-glass">
        게임 살펴보기 <span className="arrow">→</span>
      </a>
    </section>
  )
}
