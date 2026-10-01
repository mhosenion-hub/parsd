import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/site";

const mainLinks = [
  ["خانه", "/"],
  ["نمونه‌کارها", "/projects"],
  ["محصولات", "/products"],
  ["آموزش‌ها", "/articles"],
  ["درباره ما", "/about"],
] as const;

function ServiceMenu() {
  return (
    <div className="nav-dropdown">
      <Link className="nav-dropdown-trigger" href="/services" aria-haspopup="true">
        <span>خدمات</span>
        <span className="nav-dropdown-arrow" aria-hidden="true">⌄</span>
      </Link>
      <div className="nav-dropdown-menu" role="menu">
        <Link href="/services" role="menuitem" className="nav-dropdown-heading">همه خدمات</Link>
        {services.map((service) => (
          <Link key={service.slug} href={`/services/${service.slug}`} role="menuitem">
            {service.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

function MobileServiceMenu() {
  return (
    <details className="mobile-service-dropdown">
      <summary>
        <span>خدمات</span>
        <span className="mobile-service-arrow" aria-hidden="true">⌄</span>
      </summary>
      <div className="mobile-service-menu">
        <Link href="/services">همه خدمات</Link>
        {services.map((service) => (
          <Link key={service.slug} href={`/services/${service.slug}`}>
            {service.title}
          </Link>
        ))}
      </div>
    </details>
  );
}

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="brand-group">
          <Link className="brand" href="/" aria-label="پارس دژ">
            <Image className="brand-logo-anim" src="/pars-dej-logo-anim.gif" alt="پارس دژ" width={180} height={56} priority />
          </Link>
          <details className="mobile-nav">
            <summary aria-label="باز کردن منو">☰</summary>
            <div className="mobile-nav-panel">
              <Link href="/">خانه</Link>
              <MobileServiceMenu />
              {mainLinks.slice(1).map(([label, href]) => (
                <Link key={href} href={href}>{label}</Link>
              ))}
            </div>
          </details>
        </div>

        <nav className="nav desktop-nav" aria-label="ناوبری اصلی">
          <Link href="/">خانه</Link>
          <ServiceMenu />
          {mainLinks.slice(1).map(([label, href]) => (
            <Link key={href} href={href}>{label}</Link>
          ))}
        </nav>

        <div className="header-actions">
          <Link className="btn" href="/contact">درخواست مشاوره</Link>
        </div>
      </div>
    </header>
  );
}
