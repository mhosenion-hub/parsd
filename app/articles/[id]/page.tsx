import Link from "next/link";
import { articles } from "@/data/site";
import { notFound } from "next/navigation";

export const dynamicParams = false;

export function generateStaticParams(){
  return articles.map((_,i)=>({id:String(i+1)}));
}

export default async function ArticleDetail({params}:{params:Promise<{id:string}>}){
  const {id}=await params;
  const a=articles[Number(id)-1];
  if(!a)notFound();

  return <>
    <section className="page-hero">
      <div className="container">
        <span className="tag">{a.category}</span>
        <h1>{a.title}</h1>
        <p>{a.description}</p>
      </div>
    </section>
    <section className="section">
      <div className="container content-narrow article-detail">
        <span className="eyebrow">PARS DEJ / KNOWLEDGE</span>
        <h2>مقدمه</h2>
        {a.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        <h2>نکات مهم</h2>
        <ul className="check-list">
          <li>نیاز واقعی محل را قبل از انتخاب تجهیزات مشخص کنید.</li>
          <li>شرایط محیط و بستر اجرای پروژه را در طراحی در نظر بگیرید.</li>
          <li>پس از اجرا، تست و مستندسازی را جدی بگیرید.</li>
          <li>برای جزئیات تخصصی، مشخصات فنی تجهیزات و الزامات پروژه را مرجع قرار دهید.</li>
        </ul>
        <div className="notice">این مطلب آموزشی و عمومی است و جایگزین طراحی مهندسی، دستورالعمل سازنده یا مشاوره تخصصی نیست.</div>
        <p><Link className="text-link" href="/articles">← بازگشت به آموزش‌ها</Link></p>
      </div>
    </section>
  </>;
}
