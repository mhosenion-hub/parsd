import Image from "next/image";
const icons = [
  ['icons8-wall-mount-camera-100.png','دوربین دیواری'],
  ['icons8-dome-camera-100.png','دوربین دام'],
  ['icons8-ptz-camera-100.png','دوربین PTZ'],
  ['icons8-search-100.png','جست‌وجو و پایش'],
  ['icons8-location-100.png','موقعیت مکانی'],
  ['icons8-home-100.png','امنیت ساختمان'],
  ['icons8-administrator-100.png','مدیریت سیستم'],
  ['icons8-manager-100.png','مدیریت پروژه'],
  ['icons8-profile-100.png','پروفایل کاربر'],
  ['icons8-conference-foreground-selected-100.png','مرکز کنترل'],
  ['icons8-chat-bubble-100.png','ارتباط و پیام'],
  ['icons8-source-code-100.png','زیرساخت نرم‌افزاری'],
  ['icons8-flow-chart-100.png','طراحی شبکه'],
  ['icons8-automation-100.png','اتوماسیون'],
  ['icons8-under-construction-100.png','اجرای پروژه'],
  ['icons8-cursor-100.png','کنترل هوشمند'],
] as const;

export default function TechnicalIconField() {
  return (
    <div className="technical-icon-field" aria-label="ابزارها و اجزای راهکارهای فنی پارس دژ">
      {icons.map(([file, title], i) => (
        <div className={`tech-icon-card tech-icon-card-${i + 1}`} key={file}>
          <div className="tech-icon-frame">
            <Image src={`/cctv-icons/${file}`} alt="" width={58} height={58} />
          </div>
          <span>{title}</span>
        </div>
      ))}
    </div>
  );
}
