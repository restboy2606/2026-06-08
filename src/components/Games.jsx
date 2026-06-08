const games = [
  {
    emoji: '🐉',
    artClass: 'game-card__art--monster',
    genre: 'MONSTER COLLECT RPG',
    genreColor: 'green',
    title: 'MONSTER CHRONICLE',
    titleKr: '몬스터 크로니클',
    desc: '151종의 픽셀 몬스터를 수집하고 육성하라. 잃어버린 대륙을 횡단하며 전설의 몬스터를 찾아 떠나는 정통 수집형 RPG.',
    tags: ['PIXEL ART', 'TURN-BASED', 'COLLECT', 'STORY'],
  },
  {
    emoji: '⚔️',
    artClass: 'game-card__art--dungeon',
    genre: 'ROGUELIKE DUNGEON',
    genreColor: 'red',
    title: 'DUNGEON BITS',
    titleKr: '던전 비츠',
    desc: '매번 새롭게 생성되는 99층 던전. 픽셀 용사가 한 칸씩 전진하며 전략적 턴제 배틀로 보스를 돌파하는 로그라이크.',
    tags: ['ROGUELIKE', 'TACTICAL', 'PERMA-DEATH', 'LOOT'],
  },
  {
    emoji: '🏰',
    artClass: 'game-card__art--knights',
    genre: 'PIXEL MMORPG',
    genreColor: 'blue',
    title: 'PIXEL KNIGHTS',
    titleKr: '픽셀 나이츠 온라인',
    desc: '레트로 픽셀 세계에서 만나는 대규모 온라인 RPG. 길드를 결성하고, 보스 레이드에 도전하고, 나만의 성을 건설하라.',
    tags: ['MMORPG', 'GUILD', 'PVP', 'CRAFTING'],
  },
]

export default function Games() {
  return (
    <section className="games" id="games">
      <p className="section-title">// OUR GAMES</p>
      <h2 className="section-heading">
        픽셀로 빚은
        <br />
        세 개의 세계
      </h2>
      <div className="games__grid">
        {games.map((g) => (
          <article className="game-card" key={g.title}>
            <div className={`game-card__art ${g.artClass}`}>
              <span>{g.emoji}</span>
            </div>
            <div className="game-card__body">
              <p className={`game-card__genre game-card__genre--${g.genreColor}`}>
                {g.genre}
              </p>
              <h3 className="game-card__title">
                {g.title}
                <br />
                {g.titleKr}
              </h3>
              <p className="game-card__desc">{g.desc}</p>
              <div className="game-card__tags">
                {g.tags.map((t) => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
