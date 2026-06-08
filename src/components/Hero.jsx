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
        손맛 좋은 픽셀 클리커부터 작게 시작합니다.<br />
        클릭하고, 터뜨리고, 비트를 모으세요.
      </p>

      <a href="#play" className="btn-glass">
        바로 플레이 <span className="arrow">→</span>
      </a>
    </section>
  )
}
