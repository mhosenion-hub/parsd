export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">PARS DEJ / ABOUT</span>
          <h1>درباره پارس دژ</h1>
          <p>رویکرد ما، طراحی یکپارچه امنیت و زیرساخت برای پروژه‌های واقعی است.</p>
        </div>
      </section>

      <section className="section">
        <div className="container about-grid">
          <div>
            <span className="eyebrow">BIO</span>
            <h2>پارس دژ؛ از نیازسنجی تا اجرا و پشتیبانی</h2>
            <p style={{ lineHeight: 2, color: "var(--muted)" }}>
              پارس دژ در حوزه سامانه‌های امنیتی و زیرساخت‌های ارتباطی فعالیت می‌کند؛
              از اعلام سرقت، اعلام حریق و نظارت تصویری تا شبکه، VoIP و پشتیبانی.
              رویکرد مجموعه بر این است که هر پروژه ابتدا از نظر نیاز، شرایط فضا و مسیر اجرا
              بررسی شود و سپس راهکار، تجهیزات و مراحل اجرا به شکل منظم تعریف شوند.
            </p>
            <p style={{ lineHeight: 2, color: "var(--muted)" }}>
              هدف این رویکرد، ساخت سامانه‌هایی است که فقط در زمان نصب خوب به نظر نرسند،
              بلکه برای استفاده روزمره، توسعه و نگهداری نیز قابل فهم و قابل مدیریت باشند.
            </p>
          </div>

          <div className="about-box about-bio-panel">
            <strong>SECURITY + INFRASTRUCTURE</strong>
            <span>طراحی</span>
            <span>اجرا</span>
            <span>راه‌اندازی</span>
            <span>پشتیبانی</span>
          </div>
        </div>
      </section>

      <section className="section dark-section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">FOCUS</span>
              <h2>حوزه‌های فعالیت</h2>
              <p>زیرساخت و امنیت در یک مسیر فنی منسجم کنار هم قرار می‌گیرند.</p>
            </div>
          </div>
          <div className="grid services-grid">
            {[
              ["اعلام سرقت", "طراحی و اجرای سامانه‌های اعلام سرقت و حفاظت اماکن"],
              ["اعلام حریق", "طراحی و اجرای ساختار کشف و اعلام حریق"],
              ["CCTV", "نظارت تصویری، ضبط و دسترسی به تصاویر"],
              ["شبکه و VoIP", "زیرساخت ارتباطی، شبکه و تلفن تحت شبکه"],
              ["پشتیبانی", "عیب‌یابی، سرویس دوره‌ای و نگهداری سامانه‌ها"],
              ["مستندسازی", "نظم‌دهی مسیرها، تجهیزات و اطلاعات اجرایی پروژه"]
            ].map(([title, text]) => (
              <article className="card" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
