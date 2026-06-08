const stats = [
  { number: '2025', label: 'FOUNDED' },
  { number: '3', label: 'GAMES' },
  { number: '12', label: 'MEMBERS' },
  { number: '50K+', label: 'PLAYERS' },
]

export default function About() {
  return (
    <section className="about" id="about">
      <p className="section-title">// ABOUT US</p>
      <h2 className="section-heading">
        우리는 픽셀 하나에
        <br />
        영혼을 담습니다
      </h2>
      <div className="about__grid">
        <div className="about__story">
          <p>
            <strong>PIXELFORGE STUDIOS</strong>는 2025년 크리스마스,
            "요즘 게임에서 잃어버린 그 감성"을 되찾겠다는 다짐으로 시작했습니다.
          </p>
          <br />
          <p>
            포켓몬스터 레드·블루를 처음 켰을 때의 두근거림,
            파이널판타지 픽셀 캐릭터가 걸어갈 때의 설렘.
            우리는 그 <strong>8비트 감성</strong>을 모바일에서 되살립니다.
          </p>
          <br />
          <p>
            최신 기술 위에 클래식한 픽셀 아트를 올려,
            누구나 손 안에서 즐길 수 있는 <strong>정통 RPG</strong>를 만듭니다.
            화려한 그래픽 대신 깊은 스토리, 복잡한 조작 대신 전략적 턴제 배틀.
          </p>
        </div>
        <div className="about__stats">
          {stats.map((s) => (
            <div className="stat-card" key={s.label}>
              <span className="stat-card__number">{s.number}</span>
              <span className="stat-card__label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
