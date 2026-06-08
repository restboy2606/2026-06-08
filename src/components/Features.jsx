export default function Features() {
  return (
    <section className="features" id="features">
      <div className="features-header">
        <span className="pill">Featured Game</span>
        <h2>게임 소개는<br />하나면 충분합니다</h2>
      </div>

      <div className="feature-item">
        <div className="feature-text">
          <span className="feature-num">— 01</span>
          <h3>
            <small>Pixel Clicker</small>
            <span style={{ display: 'block' }}>FORGE</span>
            <span style={{ display: 'block' }}>POP</span>
          </h3>
          <p>
            PIXELFORGE STUDIOS의 첫 번째 웹 미니게임. 화면 중앙의 로열 코어를
            클릭해 비트를 모으고, 콤보를 쌓고, 랭크를 올리는 가벼운 클리커입니다.
            단순하지만 누를 때마다 반응이 확실하게 오도록 설계했습니다.
          </p>
          <div>
            <span className="feature-tag feature-tag--blue">CLICKER</span>
            <span className="feature-tag feature-tag--green">COMBO</span>
            <span className="feature-tag feature-tag--red">IMPACT</span>
          </div>
        </div>

        <a href="#play" className="feature-media feature-media--link" aria-label="Play Forge Pop">
          <div className="game-screen game-screen--blue">
            <div className="game-screen__grid" aria-hidden="true" />
            <div className="game-screen__bar">
              <div className="game-screen__dot" style={{ background: '#60a5fa' }} />
              <div className="game-screen__dot" style={{ background: 'rgba(255,255,255,0.12)' }} />
              <div className="game-screen__dot" style={{ background: 'rgba(255,255,255,0.12)' }} />
              <span className="game-screen__title">FORGE POP · PLAYABLE</span>
            </div>
            <div className="game-screen__body">
              <div className="game-sprite pixel-emoji">💎</div>
              <div className="game-stats">
                <div className="game-stat-row">
                  <span className="game-stat-label">HIT</span>
                  <div className="game-stat-bar"><div className="game-stat-fill" style={{ width: '86%' }} /></div>
                </div>
                <div className="game-stat-row">
                  <span className="game-stat-label">POP</span>
                  <div className="game-stat-bar"><div className="game-stat-fill" style={{ width: '64%', opacity: 0.6 }} /></div>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </section>
  )
}
