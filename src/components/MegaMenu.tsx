"use client";
import Link from "next/link";
import { NAV_ROW1, NAV_ROW2, NavGroup } from "@/data/nav";

function NavGroupColumn({ group, onClose }: { group: NavGroup; onClose?: () => void }) {
  return (
    <div className={`o_nav_group${group.highlighted ? " o_highlighted" : ""}`}>
      <div className="o_nav_app_family" style={{ color: group.color }}>
        {group.title}
      </div>
      <ul>
        {group.links.map((l) => (
          <li key={l.label}>
            <Link
              href={l.href}
              className={group.highlighted ? "font-semibold" : ""}
              onClick={onClose}
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

interface MegaMenuProps {
  mobile?: boolean;
  onClose?: () => void;
}

export default function MegaMenu({ mobile = false, onClose }: MegaMenuProps) {
  const inner = (
    <div className="o_secondary_nav_inner">
      <div className="o_nav_row">
        {NAV_ROW1.map((g) => <NavGroupColumn key={g.title} group={g} onClose={onClose} />)}
      </div>
      <div className="o_nav_row">
        {NAV_ROW2.map((g) => <NavGroupColumn key={g.title} group={g} onClose={onClose} />)}
      </div>
      <div className="o_nav_footer">
        <Link href="https://apps.odoo.com/apps/modules" target="_blank" rel="noopener noreferrer" onClick={onClose}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
          Third party apps
        </Link>
        <Link href="/app/studio" onClick={onClose}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>
          </svg>
          Odoo Studio
        </Link>
        <Link href="https://www.odoo.sh" target="_blank" rel="noopener noreferrer" onClick={onClose}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z"/>
          </svg>
          Odoo Cloud Platform
        </Link>
      </div>
    </div>
  );

  // Mobile: render inline (no wrapper div with fixed positioning)
  if (mobile) return inner;

  // Desktop: render as fixed overlay panel
  return <div className="o_secondary_nav">{inner}</div>;
}
