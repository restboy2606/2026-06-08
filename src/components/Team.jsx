const members = [
  {
    avatar: '🧙',
    name: '김도현',
    role: 'CEO / GAME DIRECTOR',
    bio: '15년차 게임 기획자. "재미없으면 다 소용없다"가 신조.',
  },
  {
    avatar: '🎨',
    name: '박서연',
    role: 'ART DIRECTOR',
    bio: '도트 장인. 16x16 안에 캐릭터의 영혼을 불어넣는다.',
  },
  {
    avatar: '💻',
    name: '이준혁',
    role: 'LEAD DEVELOPER',
    bio: 'Unity & React Native 풀스택. 60fps 픽셀 렌더링의 달인.',
  },
  {
    avatar: '🎵',
    name: '최윤아',
    role: 'SOUND DESIGNER',
    bio: '칩튠 작곡가. 8비트 사운드로 귀를 사로잡는 멜로디스트.',
  },
]

export default function Team() {
  return (
    <section className="team" id="team">
      <p className="section-title">// TEAM</p>
      <h2 className="section-heading">
        픽셀 세계를 만드는
        <br />
        사람들
      </h2>
      <div className="team__grid">
        {members.map((m) => (
          <div className="team-card" key={m.name}>
            <div className="team-card__avatar">{m.avatar}</div>
            <h3 className="team-card__name">{m.name}</h3>
            <p className="team-card__role">{m.role}</p>
            <p className="team-card__bio">{m.bio}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
