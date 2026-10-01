import Link from "next/link";

export default function NotFound() {
  return (
    <section className="not-found-page" aria-labelledby="not-found-title">
      <div className="not-found-grid" aria-hidden="true" />
      <div className="container not-found-inner">
        <div className="not-found-code">404</div>
        <span className="eyebrow">PARS DEJ / PAGE NOT FOUND</span>
        <h1 id="not-found-title">این صفحه پیدا نشد</h1>
        <p>
          آدرس واردشده وجود ندارد یا صفحه جابه‌جا شده است. از یکی از مسیرهای زیر
          ادامه بدهید.
        </p>
        <div className="hero-actions not-found-actions">
          <Link className="btn" href="/">بازگشت به خانه</Link>
          <Link className="btn secondary" href="/services">مشاهده خدمات</Link>
        </div>
      </div>
    </section>
  );
}
