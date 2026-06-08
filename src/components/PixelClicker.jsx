import { useEffect, useState } from 'react'

const ranks = ['TIN', 'IRON', 'STEEL', 'ROYAL', 'MYTH']

function makeHit(x, y, amount, critical = false) {
  return {
    id: window.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random()}`,
    x,
    y,
    amount,
    critical,
  }
}

export default function PixelClicker({ standalone = false }) {
  const [bits, setBits] = useState(0)
  const [totalBits, setTotalBits] = useState(0)
  const [level, setLevel] = useState(1)
  const [hp, setHp] = useState(42)
  const [combo, setCombo] = useState(1)
  const [power, setPower] = useState(1)
  const [auto, setAuto] = useState(0)
  const [crit, setCrit] = useState(0)
  const [hits, setHits] = useState([])
  const [impact, setImpact] = useState(false)
  const [burst, setBurst] = useState(false)

  const maxHp = 36 + level * 6
  const rank = ranks[Math.min(Math.floor((level - 1) / 3), ranks.length - 1)]
  const powerCost = 20 + power * 18
  const autoCost = 55 + auto * 45
  const critCost = 35 + crit * 30
  const critChance = Math.min(10 + crit * 6, 55)

  function resolveHit({ x = 50, y = 50, manual = true } = {}) {
    const isCritical = Math.random() * 100 < critChance
    const baseDamage = power + level + (manual ? combo : 0)
    const damage = isCritical ? baseDamage * 3 : baseDamage
    const reward = Math.ceil(damage * (isCritical ? 1.4 : 1))

    setBits((value) => value + reward)
    setTotalBits((value) => value + reward)
    setCombo((value) => manual ? Math.min(value + 1, 12) : value)
    setImpact(true)
    setHits((value) => [...value.slice(-9), makeHit(x, y, reward, isCritical)])

    window.setTimeout(() => setImpact(false), 90)
    window.setTimeout(() => {
      setHits((value) => value.slice(1))
    }, 520)

    setHp((value) => {
      const next = value - damage
      if (next > 0) return next

      setLevel((current) => current + 1)
      setBits((current) => current + 35 + level * 6)
      setTotalBits((current) => current + 35 + level * 6)
      setCombo(1)
      setBurst(true)
      window.setTimeout(() => setBurst(false), 420)
      return 36 + (level + 1) * 6
    })
  }

  function hitCore(event) {
    const rect = event.currentTarget.getBoundingClientRect()
    resolveHit({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
      manual: true,
    })
  }

  function buyUpgrade(type) {
    const costs = { power: powerCost, auto: autoCost, crit: critCost }
    if (bits < costs[type]) return

    setBits((value) => value - costs[type])
    if (type === 'power') setPower((value) => value + 1)
    if (type === 'auto') setAuto((value) => value + 1)
    if (type === 'crit') setCrit((value) => value + 1)
  }

  useEffect(() => {
    if (auto <= 0) return undefined
    const timer = window.setInterval(() => {
      resolveHit({ x: 135, y: 135, manual: false })
    }, Math.max(1200 - auto * 80, 420))
    return () => window.clearInterval(timer)
  }, [auto, power, crit, level])

  return (
    <section className={`clicker ${standalone ? 'clicker--standalone' : ''}`} id="play">
      <div className="clicker__shell">
        <div className="clicker__copy">
          <span className="label">Playable Mini Game</span>
          <h1>FORGE POP</h1>
          <p>
            코어를 두드려 비트를 모으고 업그레이드를 사세요. 파워, 자동 채굴,
            크리티컬이 붙으면서 클리커답게 점점 굴러가기 시작합니다.
          </p>
          <div className="clicker__score">
            <span>{totalBits} TOTAL BITS</span>
            <span>LV {level} · {rank}</span>
          </div>
        </div>

        <div className={`clicker__machine ${impact ? 'clicker__machine--impact' : ''} ${burst ? 'clicker__machine--burst' : ''}`} aria-label="Forge Pop clicker game">
          <div className="clicker__top">
            <span>CORE LV {level}</span>
            <span>{bits} BITS</span>
          </div>

          <button
            type="button"
            className={`core-button ${impact ? 'core-button--pop' : ''}`}
            onClick={hitCore}
            aria-label="Hit the pixel core"
          >
            <span className="core-button__glow" aria-hidden="true" />
            <span className="core-button__ring" aria-hidden="true" />
            <span className="pixel-emoji core-button__emoji" aria-hidden="true">💎</span>
            {hits.map((hit) => (
              <span
                key={hit.id}
                className={`hit-pop ${hit.critical ? 'hit-pop--critical' : ''}`}
                style={{ left: hit.x, top: hit.y }}
              >
                {hit.critical ? 'CRIT ' : '+'}{hit.amount}
              </span>
            ))}
          </button>

          <div className="clicker__hud">
            <div>
              <span>CORE HP</span>
              <strong>{Math.max(hp, 0)} / {maxHp}</strong>
            </div>
            <div className="clicker__hp">
              <i style={{ width: `${Math.max((hp / maxHp) * 100, 0)}%` }} />
            </div>
            <div>
              <span>COMBO</span>
              <strong>x{combo}</strong>
            </div>
          </div>

          <div className="upgrade-grid" aria-label="Forge Pop upgrades">
            <button type="button" onClick={() => buyUpgrade('power')} disabled={bits < powerCost}>
              <span>HAMMER</span>
              <strong>LV {power}</strong>
              <i>{powerCost} BITS</i>
            </button>
            <button type="button" onClick={() => buyUpgrade('auto')} disabled={bits < autoCost}>
              <span>AUTO BOT</span>
              <strong>LV {auto}</strong>
              <i>{autoCost} BITS</i>
            </button>
            <button type="button" onClick={() => buyUpgrade('crit')} disabled={bits < critCost}>
              <span>LUCK</span>
              <strong>{critChance}%</strong>
              <i>{critCost} BITS</i>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
