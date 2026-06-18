import Image from "next/image";
import Link from "next/link";
import { RELATED_APPS } from "@/data/apps";

export default function RelatedApps() {
  return (
    <section className="s_wd_related_apps">
      <div className="container">
        <h3 className="display-2">
          One <span className="x_wd_display_underline">need</span>, one{" "}
          <span className="x_wd_display_underline">app</span>.
        </h3>
        <p className="lead">Expand as you grow.</p>
        <div className="related-apps-grid">
          {RELATED_APPS.map((app) => (
            <div key={app.label} className="x_wd_app_horizontal">
              <Link href={app.href} className="app-icon-link">
                <Image
                  width={68}
                  height={68}
                  src={app.icon}
                  alt={`Odoo ${app.label} icon`}
                  loading="lazy"
                />
              </Link>
              <div className="app-info">
                <h5>{app.label}</h5>
                <small>{app.desc}</small>
              </div>
            </div>
          ))}
        </div>
        <Link href="/page/all-apps" className="features-all-link">
          See all Apps
          <Image
            src="https://odoocdn.com/openerp_website/static/src/img/arrows/secondary_arrow_sm_03.svg"
            width={40}
            height={20}
            alt=""
            aria-hidden="true"
            loading="lazy"
          />
        </Link>
      </div>
    </section>
  );
}
