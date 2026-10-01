import Link from "next/link";
import { projects } from "@/data/site";
import { notFound } from "next/navigation";

export const dynamicParams = false;

export function generateStaticParams(){
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetail({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const p=projects.find(x=>x.slug===slug);
  if(!p)notFound();

  return <>
    <section className="page-hero">
      <div className="container">
        <span className="tag">{p.category}</span>
        <h1>{p.title}</h1>
        <p>{p.description}</p>
      </div>
    </section>
    <section className="section">
      <div className="container content-narrow">
        <div className="project-visual project-visual-labeled"><span>{p.category}</span><strong>PARS DEJ / CASE SCENARIO</strong></div>
        <h2>دامنه سناریو</h2>
        <p>{p.scope}</p>
        <h2>رویکرد اجرایی</h2>
        <p>{p.approach}</p>
        <h2>نتیجه مورد انتظار</h2>
        <p>{p.result}</p>
        <div className="notice">این صفحه یک سناریوی محتوایی برای معرفی نحوه ارائه پروژه است و جایگزین اطلاعات یک پروژه واقعی، مشخصات قراردادی یا گزارش اجرایی نیست.</div>
        <Link className="btn" href="/contact">ثبت درخواست پروژه مشابه</Link>
      </div>
    </section>
  </>;
}
