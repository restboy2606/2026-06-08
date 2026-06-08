const row1 = [
  { emoji: '🐉', label: 'MONSTER BATTLE',  cls: 'gc--1' },
  { emoji: '⚔️',  label: 'DUNGEON F.47',    cls: 'gc--2' },
  { emoji: '🏰',  label: 'GUILD HALL',      cls: 'gc--3' },
  { emoji: '🗺️',  label: 'WORLD MAP',       cls: 'gc--4' },
  { emoji: '⚡',  label: 'CAPTURE EVENT',   cls: 'gc--5' },
  { emoji: '🌿',  label: 'FOREST DUNGEON',  cls: 'gc--6' },
  { emoji: '🔥',  label: 'BOSS ENCOUNTER',  cls: 'gc--7' },
  { emoji: '🌊',  label: 'OCEAN TEMPLE',    cls: 'gc--8' },
]
const row2 = [
  { emoji: '🌙',  label: 'NIGHT MARKET',    cls: 'gc--4' },
  { emoji: '💎',  label: 'RARE LOOT',       cls: 'gc--3' },
  { emoji: '🦊',  label: 'RARE MONSTER',    cls: 'gc--1' },
  { emoji: '🗡️',  label: 'PVP ARENA',       cls: 'gc--7' },
  { emoji: '❄️',  label: 'ICE CAVE',        cls: 'gc--8' },
  { emoji: '🌋',  label: 'VOLCANO LAIR',    cls: 'gc--5' },
  { emoji: '🧙',  label: 'WIZARD TOWER',    cls: 'gc--6' },
  { emoji: '💀',  label: 'FINAL BOSS',      cls: 'gc--2' },
]

function MarqueeRow({ items, reverse }) {
  const all = [...items, ...items]
  return (
    <div className={`marquee-row ${reverse ? 'marquee-row--reverse' : ''}`}>
      <div className="marquee-track">
        {all.map((item, i) => (
          <div key={i} className={`gallery-card ${item.cls}`}>
            <div className="gallery-card__overlay" aria-hidden="true" />
            <div className="gallery-card__inner">
              <span className="gallery-card__emoji">{item.emoji}</span>
              <span className="gallery-card__label">{item.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <div className="gallery-header">
        <span className="label">Game World</span>
        <h2>지금 개발 중인<br />세 개의 세계</h2>
      </div>
      <MarqueeRow items={row1} reverse={false} />
      <MarqueeRow items={row2} reverse={true} />
    </section>
  )
}
