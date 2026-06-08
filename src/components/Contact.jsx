export default function Contact() {
  return (
    <section className="contact" id="contact">
      <p className="section-title">// CONTACT</p>
      <h2 className="section-heading">
        함께 모험을
        <br />
        떠나시겠습니까?
      </h2>
      <div className="contact__wrapper">
        <div>
          <div className="contact__info-item">
            <p className="contact__info-label">ADDRESS</p>
            <p className="contact__info-value">
              서울특별시 강남구 테헤란로 123
              <br />
              픽셀타워 8F
            </p>
          </div>
          <div className="contact__info-item">
            <p className="contact__info-label">EMAIL</p>
            <p className="contact__info-value">hello@pixelforge.studio</p>
          </div>
          <div className="contact__info-item">
            <p className="contact__info-label">BUSINESS HOURS</p>
            <p className="contact__info-value">
              MON — FRI 10:00 ~ 19:00
              <br />
              (점심시간 12:00 ~ 13:00)
            </p>
          </div>
          <div className="contact__info-item">
            <p className="contact__info-label">CAREERS</p>
            <p className="contact__info-value">
              픽셀 장인을 상시 모집합니다
              <br />
              careers@pixelforge.studio
            </p>
          </div>
        </div>
        <form className="contact__form" onSubmit={(e) => e.preventDefault()}>
          <input
            className="contact__input"
            type="text"
            placeholder="이름"
          />
          <input
            className="contact__input"
            type="email"
            placeholder="이메일"
          />
          <textarea
            className="contact__textarea"
            placeholder="메시지를 입력하세요..."
          />
          <button className="btn-pixel btn-pixel--primary" type="submit">
            ▶ SEND MESSAGE
          </button>
        </form>
      </div>
    </section>
  )
}
