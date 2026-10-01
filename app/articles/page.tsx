import Link from "next/link";
import { articles } from "@/data/site";

export default function ArticlesPage(){
  return <>
    <section className="page-hero">
      <div className="container">
        <span className="eyebrow">PARS DEJ / KNOWLEDGE</span>
        <h1>آموزش‌ها و مقالات</h1>
        <p>راهنماهای مقدماتی برای شناخت بهتر امنیت، شبکه، نظارت تصویری و نگهداری سامانه‌ها.</p>
      </div>
    </section>
    <section className="section">
      <div className="container grid article-grid">
        {articles.map((a,i)=><article className="card" key={a.title}>
          <span className="tag">{a.category}</span>
          <h3>{a.title}</h3>
          <p>{a.description}</p>
          <Link className="text-link" href={`/articles/${i+1}`}>مطالعه مقاله ←</Link>
        </article>)}
      </div>
    </section>
  </>;
}
