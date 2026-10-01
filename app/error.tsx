"use client";

import Link from "next/link";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Keep the browser console useful during local testing.
    console.error("PARS DEJ route error", error);
  }, [error]);

  return (
    <section className="not-found-page" aria-labelledby="error-title">
      <div className="not-found-grid" aria-hidden="true" />
      <div className="container not-found-inner">
        <div className="not-found-code">ERROR</div>
        <span className="eyebrow">PARS DEJ / SOMETHING WENT WRONG</span>
        <h1 id="error-title">یک خطای موقت رخ داد</h1>
        <p>
          صفحه را دوباره بارگذاری کنید. این صفحه برای تست راحت‌تر خطاهای runtime
          در محیط توسعه آماده شده است.
        </p>
        <div className="hero-actions not-found-actions">
          <button className="btn" type="button" onClick={() => reset()}>
            تلاش دوباره
          </button>
          <Link className="btn secondary" href="/">
            بازگشت به خانه
          </Link>
        </div>
      </div>
    </section>
  );
}
