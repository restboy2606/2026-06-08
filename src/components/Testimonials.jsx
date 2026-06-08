const testimonials = [
  {
    name: '이하준',
    handle: '@hajun_plays',
    avatar: '🧑',
    text: '몬스터 크로니클 완전 중독임... <strong>포켓몬 1세대 하던 그 설렘</strong>이 그대로야. 출퇴근 때 손을 못 놓겠다 ㅋㅋ',
    likes: '1.2K',
    date: 'Jun 1, 2026',
    featured: true,
  },
  {
    name: 'Sakura_gamer',
    handle: '@sakura_rpg',
    avatar: '👩',
    text: 'Dungeon Bits is insane. Every run feels completely different. This is <strong>the best mobile roguelike</strong> I\'ve played in years.',
    likes: '847',
    date: 'May 28, 2026',
    featured: false,
  },
  {
    name: '박재민',
    handle: '@jaemin_dev',
    avatar: '🧔',
    text: '픽셀 나이츠 길드 레이드 진짜 재밌다. <strong>그래픽이 단순한데 전략이 깊음.</strong> 친구들이랑 밤새 했네',
    likes: '523',
    date: 'Jun 3, 2026',
    featured: false,
  },
  {
    name: 'RetroKing88',
    handle: '@retroking88',
    avatar: '👨‍🦱',
    text: 'Been waiting for a game that captures <strong>that old-school pixel RPG soul</strong>. PIXELFORGE finally delivered. Top tier.',
    likes: '391',
    date: 'Jun 5, 2026',
    featured: false,
  },
]

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-header">
        <span className="pill">Reviews</span>
        <h2>플레이어들이<br />직접 전하는 이야기</h2>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((t) => (
          <div key={t.handle} className={`tweet-card ${t.featured ? 'tweet-card--featured' : ''}`}>
            <div className="tweet-head">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div className="tweet-avatar">{t.avatar}</div>
                <div className="tweet-info">
                  <span className="tweet-name">{t.name}</span>
                  <span className="tweet-handle">{t.handle}</span>
                </div>
              </div>
              <span className="tweet-x">𝕏</span>
            </div>

            <p
              className="tweet-text"
              dangerouslySetInnerHTML={{ __html: t.text }}
            />

            <div className="tweet-footer">
              <div className="tweet-meta">
                <span className="tweet-likes">♥ {t.likes}</span>
                <span>{t.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
