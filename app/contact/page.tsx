import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">PARS DEJ / CONTACT</span>
          <h1>ثبت درخواست</h1>
          <p>برای مشاوره، بررسی پروژه یا دریافت راهنمایی اولیه، درخواست خود را ثبت کنید.</p>
        </div>
      </section>

      <section className="section">
        <div className="container about-grid contact-layout">
          <div>
            <span className="eyebrow">HOW IT WORKS</span>
            <h2>درخواست شما از اینجا شروع می‌شود</h2>
            <p style={{ lineHeight: 2, color: "var(--muted)" }}>
              در فرم سمت مقابل، موضوع پروژه و توضیح کوتاهی از نیاز خود را وارد کنید.
              اطلاعات اولیه به شما کمک می‌کند مسیر بررسی، انتخاب خدمت و ادامه هماهنگی روشن‌تر باشد.
            </p>
            <ul className="check-list">
              <li>مشاوره و بررسی اولیه نیاز</li>
              <li>تعریف حوزه خدمت موردنیاز</li>
              <li>هماهنگی برای ادامه بررسی پروژه</li>
              <li>پیگیری و پشتیبانی پس از اجرا</li>
            </ul>

            <div className="contact-info-panel">
              <span>خدمات</span>
              <strong>اعلام سرقت · حریق · CCTV · شبکه · VoIP · پشتیبانی</strong>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
