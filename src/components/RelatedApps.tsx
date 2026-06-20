import Image from "next/image";
import Link from "next/link";

const apps = [
  {
    href: "https://www.odoo.com/app/sales",
    icon: "https://download.odoocdn.com/icons/sale/static/description/icon.svg",
    alt: "Odoo Sales icon",
    name: "Sales",
    desc: "Schedule manufacturing based on sales",
  },
  {
    href: "https://www.odoo.com/app/inventory",
    icon: "https://download.odoocdn.com/icons/stock/static/description/icon.svg",
    alt: "Odoo Inventory icon",
    name: "Inventory",
    desc: "Organize the supply chain",
  },
  {
    href: "https://www.odoo.com/app/project",
    icon: "https://download.odoocdn.com/icons/project/static/description/icon.svg",
    alt: "Odoo Project icon",
    name: "Project",
    desc: "For engineering-to-order projects",
  },
  {
    href: "https://www.odoo.com/app/plm",
    icon: "https://download.odoocdn.com/icons/mrp_plm/static/description/icon.svg",
    alt: "Odoo PLM icon",
    name: "PLM",
    desc: "Improve product designs with version control",
  },
  {
    href: "https://www.odoo.com/app/maintenance",
    icon: "https://download.odoocdn.com/icons/maintenance/static/description/icon.svg",
    alt: "Odoo Maintenance icon",
    name: "Maintenance",
    desc: "Keep equipment running smoothly",
  },
];

export default function RelatedApps() {
  return (
    <section className="s_wd_related_apps">
      <div className="container">
        <h3 className="display-2">
          One{" "}
          <span className="x_wd_display_underline">need</span>, one{" "}
          <span className="x_wd_display_underline">app</span>.
        </h3>
        <p className="lead">Expand as you grow.</p>

        <div className="row">
          {apps.map((app) => (
            <div key={app.name} className="o_app_icon_entry">
              <div className="x_wd_app_horizontal">
                <a className="stretched-link" href={app.href}>
                  <img height={52} width={52} alt={app.alt} src={app.icon} />
                </a>
                <div className="x_wd_app_text">
                  <h5>{app.name}</h5>
                  <small>{app.desc}</small>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Link className="features-all-link" href="https://www.odoo.com/page/all-apps">
          <span className="features-all-text">See all Apps</span>
          <Image
            className="features-all-image"
            alt="arrow-slide"
            height={20}
            width={40}
            src="https://odoocdn.com/openerp_website/static/src/img/arrows/secondary_arrow_sm_03.svg"
          />
        </Link>
      </div>
    </section>
  );
}
