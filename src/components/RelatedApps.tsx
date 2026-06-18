import Image from "next/image";
import Link from "next/link";

const APPS = [
  { name: "Inventory", href: "/app/inventory", icon: "https://odoocdn.com/openerp_website/static/src/img/apps/icons/inventory.svg" },
  { name: "Purchase", href: "/app/purchase", icon: "https://odoocdn.com/openerp_website/static/src/img/apps/icons/purchase.svg" },
  { name: "PLM", href: "/app/plm", icon: "https://odoocdn.com/openerp_website/static/src/img/apps/icons/plm.svg" },
  { name: "Maintenance", href: "/app/maintenance", icon: "https://odoocdn.com/openerp_website/static/src/img/apps/icons/maintenance.svg" },
  { name: "Quality", href: "/app/quality", icon: "https://odoocdn.com/openerp_website/static/src/img/apps/icons/quality.svg" },
  { name: "Project", href: "/app/project", icon: "https://odoocdn.com/openerp_website/static/src/img/apps/icons/project.svg" },
];

export default function RelatedApps() {
  return (
    <section className="s_wd_related_apps">
      <div className="container">
        <p className="o_animate" style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 700, color: "var(--o-text)", opacity: 0.6, marginBottom: "0.25rem" }}>
          Expand as you grow
        </p>
        <h2 className="display-2 o_animate o_animate--delay-1" style={{ marginBottom: "0.5rem" }}>
          One need, one app.
        </h2>
        <div className="related-apps-grid">
          {APPS.map((app, i) => (
            <Link
              key={app.name}
              href={app.href}
              className={`related-app-card o_animate o_animate--delay-${(i % 4) + 1}`}
            >
              <Image src={app.icon} alt={app.name} width={40} height={40} loading="lazy" />
              <span>{app.name}</span>
            </Link>
          ))}
        </div>
        <Link href="/apps" className="related-apps-link o_animate o_animate--delay-2">
          See all Apps
          <Image
            src="https://odoocdn.com/openerp_website/static/src/img/arrows/secondary_arrow_sm_03.svg"
            width={40} height={20} alt="" aria-hidden="true" loading="lazy"
          />
        </Link>
      </div>
    </section>
  );
}
