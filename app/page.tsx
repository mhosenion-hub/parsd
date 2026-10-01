import Image from "next/image";
import Link from "next/link";
import { ProjectCards, ArticleCards, HomeServiceCards } from "@/components/Cards";

export default function HomePage() {
  return <>
    <section className="hero-home">
      <div className="hero-home-bg" aria-hidden="true" />
      <div className="hero-home-lines" aria-hidden="true" />
      <div className="container hero-home-inner">
        <div className="hero-home-copy">
          <span className="eyebrow">پارس دژ / SECURITY SYSTEMS</span>
          <h1>امنیت را <strong>طراحی</strong> می‌کنیم،<br />فقط نصب نمی‌کنیم.</h1>
          <p>طراحی و اجرای راهکارهای نظارت تصویری، اعلام سرقت، اعلام حریق، شبکه و ارتباطات؛ با یک هویت فنی و یکپارچه برای پروژه‌های واقعی.</p>
          <div className="hero-actions">
            <Link className="btn" href="/services">مشاهده خدمات</Link>
          </div>
          <div className="technical-stats" aria-label="خلاصه خدمات">
            <div><strong>6</strong><span>حوزه تخصصی</span></div>
            <div><strong>24/7</strong><span>نگهداری و پشتیبانی</span></div>
            <div><strong>360°</strong><span>نگاه یکپارچه</span></div>
          </div>
        </div>

        <div className="hero-security-visual" aria-hidden="true">
          <div className="hero-logo-ring">
            <span className="hero-ring r1" />
            <span className="hero-ring r2" />
            <span className="hero-ring r3" />
            <span className="hero-cross cross-x" />
            <span className="hero-cross cross-y" />
            <Image src="/pars-dej-logo-new.png" alt="پارس دژ" width={520} height={520} priority />
            <div className="hero-status-card">
              <span className="status-dot" />
              <strong>SECURITY / ACTIVE</strong>
              <small>MONITORING • CONTROL • SUPPORT</small>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section home-services-section">
      <div className="container service-showcase-shell">
        <div className="service-showcase-bg" aria-hidden="true" />
        <div className="section-head service-section-head">
          <div>
            <span className="eyebrow">خدمات ما</span>
            <h2>راهکارهای پارس دژ</h2>
            <p>هر حوزه با یک نشانه‌ی واقعی از همان سیستم معرفی می‌شود؛ ساده، واضح و قابل‌کلیک.</p>
          </div>
          <Link className="text-link" href="/services">همه خدمات ←</Link>
        </div>
        <HomeServiceCards />
      </div>
    </section>

    <section className="section dark-section">
      <div className="container">
        <div className="section-head">
          <div><span className="eyebrow">تجربه اجرایی</span><h2>نمونه‌سناریوهای اجرایی</h2><p>معماری فنی، اجرای تمیز و امکان توسعه در پروژه‌های مختلف.</p></div>
          <Link className="text-link" href="/projects">همه پروژه‌ها ←</Link>
        </div>
        <ProjectCards items={undefined} />
      </div>
    </section>

    <section className="section">
      <div className="container about-grid">
        <div>
          <span className="eyebrow">درباره پارس دژ</span>
          <h2>تجربه، فناوری، اعتماد</h2>
          <p style={{lineHeight:2,color:"var(--muted)"}}>پارس دژ در زمینه طراحی و اجرای سامانه‌های امنیتی و زیرساخت‌های ارتباطی فعالیت می‌کند؛ از اعلام سرقت و اعلام حریق تا نظارت تصویری، شبکه، VoIP و پشتیبانی. تمرکز این رویکرد بر نیازسنجی، اجرای منظم، راه‌اندازی و نگهداری قابل مدیریت است.</p>
          <ul className="check-list"><li>بررسی نیاز و مشاوره پیش از اجرا</li><li>راهکار متناسب با شرایط هر محل</li><li>توجه به مستندسازی و پشتیبانی</li></ul>
          <Link className="btn" href="/about">بیشتر درباره ما</Link>
        </div>
        <div className="about-tech-visual">
          <div className="radar"><span /><span /><span /><span /></div>
          <div className="about-logo-watermark">پارس دژ</div>
          <div className="about-tech-note">MONITORING / CONTROL / SUPPORT</div>
        </div>
      </div>
    </section>

    <section className="section dark-section">
      <div className="container">
        <div className="section-head">
          <div><span className="eyebrow">دانش و آموزش</span><h2>آخرین آموزش‌ها</h2><p>محتوای آموزشی برای آشنایی بهتر با تجهیزات و نگهداری سامانه‌ها.</p></div>
          <Link className="text-link" href="/articles">همه مقالات ←</Link>
        </div>
        <ArticleCards />
      </div>
    </section>

    <section className="section">
      <div className="container"><div className="cta"><div><h2>برای پروژه‌تان مشاوره می‌خواهید؟</h2><p>جزئیات نیاز خود را بفرستید تا درباره مسیر اجرا گفتگو کنیم.</p></div><Link className="btn" href="/contact">ارتباط با پارس دژ</Link></div></div>
    </section>
  </>;
}
