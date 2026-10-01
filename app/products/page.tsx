import { ProductCards } from "@/components/Cards";

export default function ProductsPage(){
  return <>
    <section className="page-hero">
      <div className="container">
        <span className="eyebrow">PARS DEJ / PRODUCTS</span>
        <h1>محصولات و تجهیزات</h1>
        <p>دسته‌های اصلی تجهیزات مورد استفاده در پروژه‌های امنیتی و ارتباطی پارس دژ.</p>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div>
            <h2>دسته‌بندی تجهیزات</h2>
            <p>انتخاب مدل و مشخصات نهایی باید بر اساس شرایط هر پروژه و نیاز واقعی انجام شود.</p>
          </div>
        </div>
        <ProductCards/>
      </div>
    </section>
  </>;
}
