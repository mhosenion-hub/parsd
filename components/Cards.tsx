import Image from "next/image";
import Link from "next/link";
import { services, projects, articles, products } from "@/data/site";

const serviceVisuals: Record<string, { file: string; label: string }> = {
  intrusion: { file: "icons8-administrator-100.png", label: "SECURITY" },
  "fire-alarm": { file: "icons8-automation-100.png", label: "FIRE" },
  cctv: { file: "icons8-ptz-camera-100.png", label: "CCTV" },
  voip: { file: "icons8-chat-bubble-100.png", label: "VOIP" },
  network: { file: "icons8-flow-chart-100.png", label: "NETWORK" },
  support: { file: "icons8-manager-100.png", label: "SUPPORT" },
};

export function HomeServiceCards() {
  return (
    <div className="service-cards-stage">
      <div className="service-orbit-icons" aria-hidden="true">
        <span><Image src="/cctv-icons/icons8-search-100.png" alt="" width={32} height={32} /></span>
        <span><Image src="/cctv-icons/icons8-location-100.png" alt="" width={32} height={32} /></span>
        <span><Image src="/cctv-icons/icons8-source-code-100.png" alt="" width={32} height={32} /></span>
        <span><Image src="/cctv-icons/icons8-cursor-100.png" alt="" width={32} height={32} /></span>
      </div>
      <div className="grid services-grid home-service-grid">
        {services.map((s) => {
          const visual = serviceVisuals[s.slug];
          return (
            <Link className="service-card" key={s.slug} href={`/services/${s.slug}`}>
              <Image className="service-card-background" src={`/service-backgrounds/${s.slug}.webp`} alt="" aria-hidden="true" fill sizes="(max-width: 900px) 100vw, 50vw" />
              <div className="service-card-background-shade" aria-hidden="true" />
              <div className="service-card-topline"><span>{visual?.label ?? "SERVICE"}</span><span>00{s.slug === "cctv" ? 3 : services.indexOf(s) + 1}</span></div>
              <div className="service-card-icon-panel">
                {visual ? <Image src={`/cctv-icons/${visual.file}`} alt="" width={72} height={72} /> : <span className="service-card-icon-fallback">{s.icon}</span>}
              </div>
              <div className="service-card-body">
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </div>
              <span className="service-card-button">ورود به خدمت <b>←</b></span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export function ServiceCards() {
  return <HomeServiceCards />;
}

export function ProjectCards({items=projects}:{items?:typeof projects}) { return <div className="grid project-grid">{items.map(p=><article className="card" key={p.slug}><div className="project-visual">▧</div><span className="tag">{p.category}</span><h3>{p.title}</h3><p>{p.description}</p><Link className="text-link" href={`/projects/${p.slug}`}>مشاهده پروژه ←</Link></article>)}</div>; }
export function ArticleCards() { return <div className="grid article-grid">{articles.slice(0,3).map((a,i)=><article className="card" key={a.title}><span className="tag">{a.category}</span><h3>{a.title}</h3><p>{a.description}</p><Link className="text-link" href={`/articles/${i+1}`}>مطالعه مقاله ←</Link></article>)}</div>; }
export function ProductCards() { return <div className="grid services-grid">{products.map(p=><article className="card" key={p.title}><div className="icon-box">▣</div><span className="tag">{p.category}</span><h3>{p.title}</h3><p>{p.description}</p><Link className="text-link" href="/contact">استعلام و مشاوره ←</Link></article>)}</div>; }
