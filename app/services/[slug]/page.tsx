import Link from "next/link";
import { services } from "@/data/site";
import { notFound } from "next/navigation";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export default async function ServiceDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) notFound();

  return (
    <div className="service-detail-page" data-service={slug}>
      <section className="service-detail-hero">
        <div className="container service-detail-inner">
          <div className="service-detail-copy">
            <span className="eyebrow">خدمات پارس دژ / SERVICE</span>
            <h1>{s.title}</h1>
            <p>{s.overview}</p>
            <div className="hero-actions">
              <Link className="btn" href="/contact">ثبت درخواست</Link>
              <Link className="btn secondary" href="/services">بازگشت به خدمات</Link>
            </div>
          </div>
          <div className="service-detail-glass" aria-hidden="true" />
        </div>
      </section>

      <section className="section service-detail-content">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">SERVICE OVERVIEW</span>
              <h2>ساختار این خدمت</h2>
              <p>{s.description}</p>
            </div>
          </div>

          <div className="grid service-info-grid">
            <article className="card">
              <span className="tag">WHAT WE COVER</span>
              <h3>موارد قابل پوشش</h3>
              <ul className="check-list">
                {s.features.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
            <article className="card">
              <span className="tag">PROCESS</span>
              <h3>مراحل همکاری</h3>
              <ol className="steps-list">
                {s.steps.map((item, index) => <li key={item}><b>0{index + 1}</b><span>{item}</span></li>)}
              </ol>
            </article>
          </div>

          <div className="service-detail-description card">
            <span className="tag">PARS DEJ APPROACH</span>
            <h3>رویکرد اجرایی</h3>
            <p>{s.overview}</p>
            <Link className="btn" href="/contact">ثبت درخواست این خدمت</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
