import { ProjectCards } from "@/components/Cards";

export default function ProjectsPage(){
  return <>
    <section className="page-hero">
      <div className="container">
        <span className="eyebrow">PARS DEJ / PROJECTS</span>
        <h1>نمونه سناریوهای اجرایی</h1>
        <p>نمونه ساختارهایی برای نمایش نحوه تعریف مسئله، راهکار و دامنه اجرای پروژه.</p>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <ProjectCards/>
      </div>
    </section>
  </>;
}
