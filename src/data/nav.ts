export type NavLink = { label: string; href: string };
export type NavGroup = {
  title: string;
  color: string;
  highlighted?: boolean;
  links: NavLink[];
};

export const NAV_ROW1: NavGroup[] = [
  {
    title: "Finance",
    color: "rgb(1,126,132)",
    links: [
      { label: "Accounting", href: "/app/accounting" },
      { label: "Invoicing", href: "/app/invoicing" },
      { label: "Expenses", href: "/app/expenses" },
      { label: "Spreadsheet (BI)", href: "/app/spreadsheet" },
      { label: "Documents", href: "/app/documents" },
      { label: "Sign", href: "/app/sign" },
    ],
  },
  {
    title: "Sales",
    color: "rgb(228,111,120)",
    links: [
      { label: "CRM", href: "/app/crm" },
      { label: "Sales", href: "/app/sales" },
      { label: "POS Shop", href: "/app/point-of-sale-shop" },
      { label: "POS Restaurant", href: "/app/point-of-sale-restaurant" },
      { label: "Subscriptions", href: "/app/subscriptions" },
      { label: "Rental", href: "/app/rental" },
    ],
  },
  {
    title: "Websites",
    color: "rgb(71,115,143)",
    links: [
      { label: "Website Builder", href: "/app/website" },
      { label: "eCommerce", href: "/app/ecommerce" },
      { label: "Blog", href: "/app/blog" },
      { label: "Forum", href: "/app/forum" },
      { label: "Live Chat", href: "/app/live-chat" },
      { label: "eLearning", href: "/app/elearning" },
    ],
  },
  {
    title: "Supply Chain",
    color: "rgb(110,109,153)",
    highlighted: true,
    links: [
      { label: "Inventory", href: "/app/inventory" },
      { label: "Manufacturing", href: "/app/manufacturing" },
      { label: "PLM", href: "/app/plm" },
      { label: "Purchase", href: "/app/purchase" },
      { label: "Maintenance", href: "/app/maintenance" },
      { label: "Quality", href: "/app/quality" },
    ],
  },
];

export const NAV_ROW2: NavGroup[] = [
  {
    title: "Human Resources",
    color: "rgb(92,91,128)",
    links: [
      { label: "Employees", href: "/app/employees" },
      { label: "Recruitment", href: "/app/recruitment" },
      { label: "Time Off", href: "/app/time-off" },
      { label: "Appraisals", href: "/app/appraisals" },
      { label: "Referrals", href: "/app/referrals" },
      { label: "Fleet", href: "/app/fleet" },
    ],
  },
  {
    title: "Marketing",
    color: "rgb(240,115,70)",
    links: [
      { label: "Social Marketing", href: "/app/social-marketing" },
      { label: "Email Marketing", href: "/app/email-marketing" },
      { label: "SMS Marketing", href: "/app/sms-marketing" },
      { label: "Events", href: "/app/events" },
      { label: "Marketing Automation", href: "/app/marketing-automation" },
      { label: "Surveys", href: "/app/surveys" },
    ],
  },
  {
    title: "Services",
    color: "rgb(213,101,62)",
    links: [
      { label: "Project", href: "/app/project" },
      { label: "Timesheets", href: "/app/timesheet" },
      { label: "Field Service", href: "/app/field-service" },
      { label: "Helpdesk", href: "/app/helpdesk" },
      { label: "Planning", href: "/app/planning" },
      { label: "Appointments", href: "/app/appointments" },
    ],
  },
  {
    title: "Productivity",
    color: "rgb(113,75,103)",
    links: [
      { label: "Discuss", href: "/app/discuss" },
      { label: "Artificial Intelligence", href: "/app/artificial-intelligence" },
      { label: "IoT", href: "/app/iot" },
      { label: "VoIP", href: "/app/voip" },
      { label: "Knowledge", href: "/app/knowledge" },
      { label: "WhatsApp", href: "/app/whatsapp" },
    ],
  },
];

export const SUB_NAV_LINKS = [
  { label: "Overview", href: "/app/manufacturing" },
  { label: "Features", href: "/app/manufacturing-features" },
  { label: "PLM", href: "/app/plm" },
  { label: "Maintenance", href: "/app/maintenance" },
  { label: "Quality", href: "/app/quality" },
];
