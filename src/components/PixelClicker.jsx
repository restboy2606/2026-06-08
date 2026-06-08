import { useState } from 'react'

const ranks = ['TIN', 'IRON', 'STEEL', 'ROYAL', 'MYTH']

export default function PixelClicker() {
  const [bits, setBits] = useState(0)
  const [hp, setHp] = useState(24)
  const [combo, setCombo] = useState(1)
  const [rank, setRank] = useState(0)
  const [hits, setHits] = useState([])
  const [popped, setPopped] = useState(false)

  const damage = rank + combo
  const maxHp = 24 + rank * 8

  function hitCore(event) {
    const rect = event.currentTarget.getBoundingClientRect()
    const nextHp = hp - damage
    const id = window.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random()}`
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    setBits((value) => value + damage)
    setCombo((value) => Math.min(value + 1, 9))
    setHits((value) => [...value.slice(-7), { id, x, y, damage }])
    setPopped(true)
    window.setTimeout(() => setHits((value) => value.filter((hit) => hit.id !== id)), 520)
    window.setTimeout(() => setPopped(false), 120)

    if (nextHp <= 0) {
      setHp(maxHp + 8)
      setRank((value) => Math.min(value + 1, ranks.length - 1))
      setCombo(1)
      setBits((value) => value + 20 + rank * 10)
      return
    }

    setHp(nextHp)
  }

  return (
    <section className="clicker" id="play">
      <div className="clicker__shell">
        <div className="clicker__copy">
          <span className="label">Playable Demo</span>
          <h2>FORGE POP</h2>
          <p>
            로열 코어를 두드려 비트를 모으는 아주 작은 픽셀 클리커입니다.
            짧게 눌러도 반응이 오고, 연타하면 콤보가 살아납니다.
          </p>
        </div>

        <div className="clicker__machine" aria-label="Forge Pop clicker game">
          <div className="clicker__top">
            <span>RANK {ranks[rank]}</span>
            <span>{bits} BITS</span>
          </div>

          <button
            type="button"
            className={`core-button ${popped ? 'core-button--pop' : ''}`}
            onClick={hitCore}
            aria-label="Hit the pixel core"
          >
            <span className="core-button__glow" aria-hidden="true" />
            <span className="pixel-emoji core-button__emoji" aria-hidden="true">💎</span>
            {hits.map((hit) => (
              <span
                key={hit.id}
                className="hit-pop"
                style={{ left: hit.x, top: hit.y }}
              >
                +{hit.damage}
              </span>
            ))}
          </button>

          <div className="clicker__hud">
            <div>
              <span>CORE</span>
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
        </div>
      </div>
    </section>
  )
}
