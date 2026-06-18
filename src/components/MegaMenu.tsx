"use client";
import Link from "next/link";
import { NAV_ROW1, NAV_ROW2, NavGroup } from "@/data/nav";

function NavGroupColumn({ group }: { group: NavGroup }) {
  return (
    <div
      className={`o_nav_group${group.highlighted ? " o_highlighted" : ""}`}
      style={{ "--group-color": group.color } as React.CSSProperties}
    >
      <div className="o_nav_app_family" style={{ color: group.color }}>
        {group.title}
      </div>
      <ul>
        {group.links.map((l) => (
          <li key={l.label}>
            <Link
              href={l.href}
              className={group.highlighted ? "font-semibold" : ""}
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function MegaMenu() {
  return (
    <div className="o_secondary_nav">
      <div className="o_secondary_nav_inner">
        <div className="o_nav_row">
          {NAV_ROW1.map((g) => (
            <NavGroupColumn key={g.title} group={g} />
          ))}
        </div>
        <div className="o_nav_row">
          {NAV_ROW2.map((g) => (
            <NavGroupColumn key={g.title} group={g} />
          ))}
        </div>
        <div className="o_nav_footer">
          <Link href="https://apps.odoo.com/apps/modules" target="_blank" rel="noopener noreferrer">
            Third party apps
          </Link>
          <Link href="/app/studio">Odoo Studio</Link>
          <Link href="https://www.odoo.sh" target="_blank" rel="noopener noreferrer">
            Odoo Cloud Platform
          </Link>
        </div>
      </div>
    </div>
  );
}
