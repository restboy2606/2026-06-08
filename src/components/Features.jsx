const features = [
  {
    num: '01',
    subtitle: 'Monster Collect RPG',
    title: 'MONSTER\nCHRONICLE',
    desc: '151종의 픽셀 몬스터를 수집하고 육성하라. 잃어버린 대륙을 횡단하며 전설의 몬스터를 찾아 떠나는 정통 턴제 수집 RPG. 포켓몬의 그 설렘을 그대로.',
    tags: [{ label: 'COLLECT', color: 'green' }, { label: 'TURN-BASED', color: 'green' }, { label: 'STORY', color: 'green' }],
    screen: 'green',
    emoji: '🐉',
    screenTitle: 'MONSTER CHRONICLE',
    hp: 78, mp: 45,
    dotColor: '#4ade80',
    reverse: false,
  },
  {
    num: '02',
    subtitle: 'Roguelike Dungeon',
    title: 'DUNGEON\nBITS',
    desc: '매번 새롭게 생성되는 99층 던전. 죽을 때마다 더 강해지는 퍼마데스 로그라이크. 단 한 번의 실수가 모든 것을 앗아간다. 당신은 몇 층까지 내려갈 수 있는가.',
    tags: [{ label: 'ROGUELIKE', color: 'red' }, { label: 'PERMA-DEATH', color: 'red' }, { label: 'LOOT', color: 'red' }],
    screen: 'red',
    emoji: '💀',
    screenTitle: 'DUNGEON BITS · F.47',
    hp: 22, mp: 60,
    dotColor: '#f87171',
    reverse: true,
  },
  {
    num: '03',
    subtitle: 'Pixel MMORPG',
    title: 'PIXEL\nKNIGHTS',
    desc: '전 세계 플레이어와 함께하는 대규모 픽셀 온라인 RPG. 길드를 결성하고 보스 레이드에 도전하라. 나만의 픽셀 성을 건설하고 전설의 기사로 거듭나라.',
    tags: [{ label: 'MMORPG', color: 'blue' }, { label: 'GUILD', color: 'blue' }, { label: 'PVP', color: 'blue' }],
    screen: 'blue',
    emoji: '🏰',
    screenTitle: 'PIXEL KNIGHTS ONLINE',
    hp: 95, mp: 88,
    dotColor: '#60a5fa',
    reverse: false,
  },
]

function GameScreen({ screen, emoji, screenTitle, hp, mp, dotColor }) {
  return (
    <div className="feature-media">
      <div className={`game-screen game-screen--${screen}`}>
        <div className="game-screen__grid" aria-hidden="true" />
        <div className="game-screen__bar">
          <div className="game-screen__dot" style={{ background: dotColor }} />
          <div className="game-screen__dot" style={{ background: 'rgba(255,255,255,0.12)' }} />
          <div className="game-screen__dot" style={{ background: 'rgba(255,255,255,0.12)' }} />
          <span className="game-screen__title">{screenTitle}</span>
        </div>
        <div className="game-screen__body">
          <div className="game-sprite">{emoji}</div>
          <div className="game-stats">
            <div className="game-stat-row">
              <span className="game-stat-label">HP</span>
              <div className="game-stat-bar">
                <div className="game-stat-fill" style={{ width: `${hp}%` }} />
              </div>
            </div>
            <div className="game-stat-row">
              <span className="game-stat-label">MP</span>
              <div className="game-stat-bar">
                <div className="game-stat-fill" style={{ width: `${mp}%`, opacity: 0.6 }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Features() {
  return (
    <section className="features" id="features">
      <div className="features-header">
        <span className="pill">Our Games</span>
        <h2>픽셀로 빚은<br />세 개의 세계</h2>
      </div>

      {features.map((f) => (
        <div
          key={f.num}
          className={`feature-item ${f.reverse ? 'feature-item--reverse' : ''}`}
        >
          <div className="feature-text">
            <span className="feature-num">— {f.num}</span>
            <h3>
              <small>{f.subtitle}</small>
              {f.title.split('\n').map((line, i) => (
                <span key={i} style={{ display: 'block' }}>{line}</span>
              ))}
            </h3>
            <p>{f.desc}</p>
            <div>
              {f.tags.map((t) => (
                <span key={t.label} className={`feature-tag feature-tag--${t.color}`}>
                  {t.label}
                </span>
              ))}
            </div>
          </div>
          <GameScreen {...f} />
        </div>
      ))}
    </section>
  )
}
