import Link from "next/link";
export default function Footer() {
  return <footer className="site-footer"><div className="container">
    <div className="footer-grid">
      <div><h3>پارس دژ</h3><p>طراحی، اجرا و پشتیبانی سامانه‌های امنیتی و زیرساخت شبکه؛ از نیازسنجی تا راه‌اندازی و نگهداری.</p></div>
      <div><h3>دسترسی سریع</h3><p><Link href="/services">خدمات</Link><br/><Link href="/projects">نمونه‌سناریوها</Link><br/><Link href="/products">محصولات</Link><br/><Link href="/articles">آموزش‌ها</Link></p></div>
      <div><h3>بخش‌های مجموعه</h3><p><Link href="/about">درباره ما</Link><br/><Link href="/contact">ثبت درخواست</Link><br/><Link href="/services">حوزه‌های خدمات</Link></p></div>
      <div><h3>پروژه و پشتیبانی</h3><p>برای بررسی اولیه پروژه، خدمت موردنیاز و مسیر ادامه همکاری، درخواست خود را ثبت کنید.</p><Link className="text-link" href="/contact">ثبت درخواست ←</Link></div>
    </div><div className="copyright">© {new Date().getFullYear()} پارس دژ — تمامی حقوق محفوظ است.</div>
  </div></footer>;
}
