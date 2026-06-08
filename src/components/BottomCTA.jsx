export default function BottomCTA() {
  return (
    <section className="bottom-cta" id="cta">
      <div className="bottom-cta-bg" aria-hidden="true" />
      <div className="bottom-cta-inner">
        <span className="pill pill--light" style={{ marginBottom: '2rem', display: 'inline-block' }}>
          지금 바로 시작하기
        </span>
        <h2>당신의 모험은<br />지금부터입니다</h2>
        <p>
          픽셀 하나에 담긴 세계. 지금 다운로드하고<br />
          전설의 첫 페이지를 직접 써내려가세요.
        </p>
        <a href="#" className="btn-solid">
          무료로 플레이하기 <span className="arrow">→</span>
        </a>
      </div>
    </section>
  )
}
