export default function BottomCTA() {
  return (
    <section className="bottom-cta" id="cta">
      <div className="bottom-cta-bg" aria-hidden="true" />
      <div className="bottom-cta-inner">
        <span className="label" style={{ display: 'block', marginBottom: '1.5rem' }}>
          Contact
        </span>
        <h2>함께 만들어 가고<br />싶으신가요?</h2>
        <p>
          협업, 파트너십, 채용 문의 모두 환영합니다.
        </p>
        <a href="mailto:ssujklim@gmail.com" className="btn-solid">
          메일 보내기 <span className="arrow">→</span>
        </a>
        <span className="cta-email">
          또는 직접 메일: <a href="mailto:ssujklim@gmail.com">ssujklim@gmail.com</a>
        </span>
      </div>
    </section>
  )
}
