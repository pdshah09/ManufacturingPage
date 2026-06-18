export type RelatedApp = {
  label: string;
  desc: string;
  href: string;
  icon: string;
};

export const RELATED_APPS: RelatedApp[] = [
  {
    label: "Sales",
    desc: "Schedule manufacturing based on sales",
    href: "/app/sales",
    icon: "https://download.odoocdn.com/icons/sale/static/description/icon.svg",
  },
  {
    label: "Inventory",
    desc: "Organize the supply chain",
    href: "/app/inventory",
    icon: "https://download.odoocdn.com/icons/stock/static/description/icon.svg",
  },
  {
    label: "Project",
    desc: "For engineering-to-order projects",
    href: "/app/project",
    icon: "https://download.odoocdn.com/icons/project/static/description/icon.svg",
  },
  {
    label: "PLM",
    desc: "Improve product designs with version control",
    href: "/app/plm",
    icon: "https://download.odoocdn.com/icons/mrp_plm/static/description/icon.svg",
  },
  {
    label: "Maintenance",
    desc: "Keep equipment running smoothly",
    href: "/app/maintenance",
    icon: "https://download.odoocdn.com/icons/maintenance/static/description/icon.svg",
  },
];
