// (pages)/home/page.tsx — pixel-perfect Odoo Manufacturing page replica
import Image from "next/image";
import Link from "next/link";

/* ── Nav Data ── */
const NAV_GROUPS_ROW1 = [
  {
    title: "Finance",
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

const NAV_GROUPS_ROW2 = [
  {
    title: "Human Resources",
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
    links: [
      { label: "Discuss", href: "/app/discuss" },
      { label: "Artificial Intelligence", href: "/app/artificial-intelligence" },
      { label: "IoT", href: "/app/iot" },
      { label: "VoIP", href: "/app/voip" },
      { label: "Knowledge", href: "/app/knowledge" },
    ],
  },
];

const RELATED_APPS = [
  {
    label: "Sales",
    desc: "Schedule manufacturing based on sales",
    href: "/app/sales",
    icon: "//download.odoocdn.com/icons/sale/static/description/icon.svg",
  },
  {
    label: "Inventory",
    desc: "Organize the supply chain",
    href: "/app/inventory",
    icon: "//download.odoocdn.com/icons/stock/static/description/icon.svg",
  },
  {
    label: "Project",
    desc: "For engineering-to-order projects",
    href: "/app/project",
    icon: "//download.odoocdn.com/icons/project/static/description/icon.svg",
  },
  {
    label: "PLM",
    desc: "Improve product designs with version control",
    href: "/app/plm",
    icon: "//download.odoocdn.com/icons/mrp_plm/static/description/icon.svg",
  },
  {
    label: "Maintenance",
    desc: "Keep equipment running smoothly",
    href: "/app/maintenance",
    icon: "//download.odoocdn.com/icons/maintenance/static/description/icon.svg",
  },
];

export default function HomePage() {
  return (
    <>
      <Link className="o_skip_to_content" href="#wrap">Skip to Content</Link>

      {/* ─────────────── NAVBAR ─────────────── */}
      <header id="top" className="o_main_header">
        <div className="o_header_inner">
          {/* <Link href="/" className="o_logo" aria-label="Odoo">
            <span className="sr-only">Odoo</span>
          </Link> */}
          <Link href="/" aria-label="Qvoo">
            <Image
              src="/images/QVOO_Logo.png"
              alt="Qvoo – Real Estate CRM"
              width={120}
              height={120}
              loading="eager"
              priority
              style={{ width: 'auto', height: '90px' }}
            />
          </Link>

          <button className="o_mobile_menu_toggle" aria-label="Open menu" aria-expanded="false">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M2 5h16M2 10h16M2 15h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>

          <nav className="o_primary_nav" aria-label="Main navigation">
            <ul>
              <li className="o_nav_has_dropdown">
                <Link href="#" aria-expanded="false" aria-haspopup="true">
                  <span className="o_app_name_title">Manufacturing</span>
                  <svg className="o_nav_chevron" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
                <div className="o_secondary_nav">
                  <div className="o_secondary_nav_inner">
                    <div className="o_nav_row">
                      {NAV_GROUPS_ROW1.map((g) => (
                        <div key={g.title} className={`o_nav_group${g.highlighted ? " o_highlighted" : ""}`}>
                          <div className="o_nav_app_family">{g.title}</div>
                          <ul>
                            {g.links.map((l) => (
                              <li key={l.label}><Link href={l.href}>{l.label}</Link></li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="o_nav_row">
                      {NAV_GROUPS_ROW2.map((g) => (
                        <div key={g.title} className="o_nav_group">
                          <div className="o_nav_app_family">{g.title}</div>
                          <ul>
                            {g.links.map((l) => (
                              <li key={l.label}><Link href={l.href}>{l.label}</Link></li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="o_nav_footer">
                      <Link href="https://apps.odoo.com/apps/modules" target="_blank" rel="noopener noreferrer">Third party apps</Link>
                      <Link href="/app/studio">Odoo Studio</Link>
                      <Link href="https://www.odoo.sh" target="_blank" rel="noopener noreferrer">Odoo Cloud Platform</Link>
                    </div>
                  </div>
                </div>
              </li>
              <li><Link href="/pricing">Pricing</Link></li>
              <li><Link href="/resources">Resources</Link></li>
              <li><Link href="/partners">Partners</Link></li>
              <li><Link href="/about">About</Link></li>
            </ul>
          </nav>

          <ul className="o_header_buttons">
            <li><Link href="/web/login" className="o_nav_link">Sign in</Link></li>
            <li><Link href="/trial?selected_app=mrp" className="btn btn-primary btn-sm trial_link">Try it free</Link></li>
          </ul>
        </div>
      </header>

      {/* ─────────────── MAIN ─────────────── */}
      <main id="wrap">

        {/* ── 1. Hero Banner ── */}
        <section className="s_wd_hero_banner">
          <div className="container">
            <h1 className="display-1">
              The <span className="text-o-color-8">future</span> of MRP
            </h1>
            <div className="hero_lead_row">
              <div>
                <p className="lead">MRP + MES + PLM + Quality + Shop Floor + Maintenance.<br/>All you need on one single platform, fast and easy to use.</p>
                <div className="hero_cta_group">
                  <Link className="btn btn-primary" href="/trial?selected_app=mrp">Start now - It&apos;s free</Link>
                  <div className="o_schedule_demo">
                    <div className="dropdown">
                      <button className="btn btn-light dropdown-toggle" type="button" aria-expanded="false" aria-haspopup="true">
                        Meet an advisor
                      </button>
                      <ul className="dropdown-menu" role="menu">
                        <li><Link className="dropdown-item" href="/appointment/7440" target="_blank" rel="noopener noreferrer">Micro Business (1–5 employees)</Link></li>
                        <li><Link className="dropdown-item" href="/appointment/181" target="_blank" rel="noopener noreferrer">Small Business (6–50 employees)</Link></li>
                        <li><Link className="dropdown-item" href="/appointment/6865" target="_blank" rel="noopener noreferrer">Midsized company (51–250 employees)</Link></li>
                        <li><Link className="dropdown-item" href="/appointment/1113" target="_blank" rel="noopener noreferrer">Large company (250+ employees)</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <small className="hero_small">Free, forever, with unlimited users.</small>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. Hero Image ── */}
        {/* <section className="s_wd_hero_image">
          <div className="o_we_shape o_illustration_doodle_01" aria-hidden="true"/>
          <div className="container">
            <div className="hero_img_wrap">
              <div className="x_wd_corner_highlight s_panel_video">
                <Link href="#" className="btn_video_play" aria-label="Watch Odoo Manufacturing demo">
                  
                  <Image
                    src="https://odoocdn.com/openerp_website/static/src/img/apps/manufacturing/hero_image.webp"
                    className="img-thumbnail"
                    alt="Odoo Manufacturing app interface"
                    width={1100} height={620} loading="eager" decoding="async"
                  />

                  <Image
                    src="https://odoocdn.com/openerp_website/static/src/img/icons/play.svg"
                    className="x_wd_video_play_icon"
                    alt="" aria-hidden="true"
                    width={80} height={80} loading="eager"
                  />
                </Link>
              </div>
            </div>
          </div>
        </section> */}

        <section className="s_wd_hero_image">
          <div className="o_we_shape o_illustration_doodle_01" aria-hidden="true" />
          <div className="container">
            <div className="hero_img_wrap">
              <div className="x_wd_corner_highlight s_panel_video">
                {/* Thumbnail acts as YouTube link opener */}
                <a
                  href="https://www.youtube.com/watch?v=uWg9-UUr4Dw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn_video_play"
                  aria-label="Watch Qvoo Manufacturing demo on YouTube"
                >
                  <Image
                    src="https://odoocdn.com/openerp_website/static/src/img/apps/manufacturing/hero_image.webp"
                    className="img-thumbnail"
                    alt="Qvoo Manufacturing app interface"
                    width={1100}
                    height={620}
                    loading="eager"
                    priority
                    decoding="async"
                  />
                  <Image
                    src="https://odoocdn.com/openerp_website/static/src/img/icons/play.svg"
                    className="x_wd_video_play_icon"
                    alt=""
                    aria-hidden="true"
                    width={80}
                    height={80}
                    loading="eager"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. Persona Bubble ── */}
        <div className="s_wd_persona">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <Image className="s_wd_persona_bg" alt="" aria-hidden="true"
            src="https://odoocdn.com/openerp_website/static/src/img/snippets/s_wd_persona/bg_blue.svg"
            width={200} height={120} loading="lazy"/>
          <div className="s_wd_persona_bubble"><i>Check out MES in action!</i></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <Image alt="" aria-hidden="true" className="s_wd_persona_icon"
            src="https://odoocdn.com/openerp_website/static/src/img/snippets/s_wd_persona/bob.png"
            width={60} height={60} loading="lazy"/>
        </div>

        {/* ── 4. Real-time Simulated Operations ── */}
        <section className="o_section">
          <div className="container">
            <div className="row row-feature row-reverse">
              <div className="col-text">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <Image src="https://odoocdn.com/openerp_website/static/src/img/arrows/grey_arrow_dot_02.svg"
                  height={120} width={80} className="feature-arrow" alt="" aria-hidden="true" loading="lazy"/>
                <h2 className="display-2">
                  <span className="x_wd_green_highlight_03">Real-time</span> simulated operations
                </h2>
                <p><strong>Simulate manufacturing orders</strong> with real-time capacity planning, components availability, and cost control.</p>
                <p>Get just-in-time replenishment propositions and choose how to fulfill parts: make or buy, sub-contract, deliver from another warehouse, etc.</p>
              </div>
              <div className="col-media">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <Image src="https://odoocdn.com/openerp_website/static/src/img/apps/manufacturing/operations.webp"
                  className="img-thumbnail" alt="Real-time simulated operations"
                  width={700} height={440} loading="lazy" decoding="async"/>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. Planning / Gantt ── */}
        <section className="o_section text-center-lg">
          <div className="container">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <Image src="https://odoocdn.com/openerp_website/static/src/img/icons/calendar.svg"
              height={100} width={100} className="section-icon rotate-10" alt="" aria-hidden="true" loading="lazy"/>
            <h2 className="display-2">Planning that puts you ahead of schedule</h2>
            <p><strong>Schedule manufacturing orders</strong> and plan resources with finite capacity planning.<br/>Fine tune easily with the Gantt chart.</p>
            <div className="img-wide-wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <Image src="https://odoocdn.com/openerp_website/static/src/img/apps/manufacturing/schedule.webp"
                className="img-thumbnail" alt="Gantt chart planning"
                width={1000} height={560} loading="lazy" decoding="async"/>
            </div>
          </div>
        </section>

        {/* ── 6. Record production / Barcode ── */}
        <section className="o_section overflow-x-hidden">
          <div className="container">
            <div className="row row-feature">
              <div className="col-text">
                <h2 className="display-2">
                  <span className="x_wd_blue_highlight_02">Record</span> production and components
                </h2>
                <p>Use to process orders, accelerate operations, and reduce input errors. Works right out of the box, blazing fast, and with no latency.</p>
                <div className="s_wd_persona s_wd_persona--inline">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <Image className="s_wd_persona_bg" alt="" aria-hidden="true"
                    src="https://odoocdn.com/openerp_website/static/src/img/snippets/s_wd_persona/bg_blue.svg"
                    width={200} height={120} loading="lazy"/>
                  <div className="s_wd_persona_bubble"><i>Works offline: No WiFi coverage issues!</i></div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <Image alt="" aria-hidden="true" className="s_wd_persona_icon"
                    src="https://odoocdn.com/openerp_website/static/src/img/snippets/s_wd_persona/bob.png"
                    width={60} height={60} loading="lazy"/>
                </div>
              </div>
              <div className="col-media text-center">
                <h5 className="display-5 text-o-color-8">Mobile barcode app</h5>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <Image src="https://odoocdn.com/openerp_website/static/src/img/graphics/arrow_doodle_13.svg"
                  className="rotate-320" width={60} height={60} alt="" aria-hidden="true" loading="lazy"/>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <Image src="https://odoocdn.com/openerp_website/static/src/img/apps/manufacturing/barcode.webp"
                  className="barcode-img" alt="Mobile barcode app"
                  width={320} height={560} loading="lazy" decoding="async"/>
              </div>
            </div>
          </div>
        </section>

        {/* ── 7. Paperless Shop Floor ── */}
        <section className="o_section">
          <div className="container">
            <div className="row row-feature row-reverse">
              <div className="col-media col-media--overlap">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <Image src="https://odoocdn.com/openerp_website/static/src/img/apps/manufacturing/become_paperless_03.webp"
                  className="img-thumbnail paperless-float paperless-float--tl" alt="" loading="lazy" width={200} height={160}/>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <Image src="https://odoocdn.com/openerp_website/static/src/img/apps/manufacturing/become_paperless_01.webp"
                  className="img-thumbnail paperless-float paperless-float--br" alt="" loading="lazy" width={200} height={160}/>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <Image src="https://odoocdn.com/openerp_website/static/src/img/apps/manufacturing/become_paperless_02.webp"
                  className="img-thumbnail paperless-main" alt="Paperless shop floor"
                  width={600} height={400} loading="lazy" decoding="async"/>
              </div>
              <div className="col-text">
                <h2 className="display-2">
                  Become a <span className="x_wd_red_highlight_scribble_01">paperless</span> company
                </h2>
                <p><strong>The Shop Floor app helps streamline your manufacturing line.</strong> Through the tablet-optimized dashboard, you can organize workers, workcenters, worksheets, quality tests, and much more.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 8. Six-Sigma ── */}
        <section className="o_section">
          <div className="container">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <Image src="https://odoocdn.com/openerp_website/static/src/img/icons/tick.svg"
              width={100} height={100} className="section-icon mx-auto" alt="" aria-hidden="true" loading="lazy"/>
            <h2 className="display-2 text-center-lg">
              Get ready for <span className="x_wd_green_highlight_scribble_03">Six-Sigma</span> level 6!
            </h2>
            <div className="row row-feature">
              <div className="col-text col-text--narrow">
                <p>Get statistical analysis of quality issues, and set control point instantly available in the shop floor with instructions.</p>
                <p>Workers can send feedback through the app as they notice waste in the manufacturing process. When ideas and information flow that smoothly, quality is raised to another level...</p>
              </div>
              <div className="col-media col-media--wide">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <Image src="https://odoocdn.com/openerp_website/static/src/img/apps/manufacturing/sigma_6.webp"
                  className="img-thumbnail" alt="Six Sigma quality control"
                  width={800} height={480} loading="lazy" decoding="async"/>
              </div>
            </div>
          </div>
        </section>

        {/* ── 9. Kaizen ── */}
        <section className="o_section">
          <div className="container">
            <h2 className="display-2 text-center-lg">
              The perfect tool for <span className="x_wd_blue_highlight_scribble_05">Kaizen</span>
            </h2>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <Image src="https://odoocdn.com/openerp_website/static/src/img/apps/manufacturing/kaizen.svg"
              className="w-100" alt="Kaizen continuous improvement diagram"
              width={1200} height={400} loading="lazy" decoding="async"/>
          </div>
        </section>

        {/* ── 10. Features Grid ── */}
        <section className="s_wd_features">
          <div className="container">
            <h2 className="display-2">
              All the <span className="x_wd_display_circle">features</span><br/>
              done <span className="x_wd_display_underline">right</span><span className="text-o-color-8">.</span>
            </h2>
            <div className="features-grid">
              <div className="features-col">
                <div className="s_wd_features_item s_wd_features_item--overflow">
                  <div className="s_wd_features_icon">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <Image src="https://odoocdn.com/openerp_website/static/src/img/icons/yellow_star.svg" alt="" loading="lazy" width={32} height={32}/>
                  </div>
                  <h4 className="s_wd_features_title">Master production schedule</h4>
                  <p>The MPS is perfect for your S&amp;OP meeting, to align objectives of sales people and the manufacturing department.</p>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <Image src="https://odoocdn.com/openerp_website/static/src/img/apps/manufacturing/features_01.webp"
                    className="img-thumbnail features-preview" alt="Master production schedule"
                    width={600} height={340} loading="lazy"/>
                </div>
                <div className="s_wd_features_item">
                  <div className="s_wd_features_icon">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <Image src="https://odoocdn.com/openerp_website/static/src/img/icons/yellow_star.svg" alt="" loading="lazy" width={32} height={32}/>
                  </div>
                  <h4 className="s_wd_features_title">Leverage by-products</h4>
                  <p>Produce residual products by adding by-products to bills of materials.</p>
                </div>
              </div>
              <div className="features-col">
                <div className="s_wd_features_item">
                  <div className="s_wd_features_icon">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <Image src="https://odoocdn.com/openerp_website/static/src/img/icons/yellow_star.svg" alt="" loading="lazy" width={32} height={32}/>
                  </div>
                  <h4 className="s_wd_features_title">Powerful yet simple</h4>
                  <p>Although Odoo has all the features you need to deploy a modern manufacturing line, it remains very simple to use, and does not require advanced trainings for workers.</p>
                </div>
                <div className="s_wd_features_item">
                  <div className="s_wd_features_icon">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <Image src="https://odoocdn.com/openerp_website/static/src/img/icons/yellow_star.svg" alt="" loading="lazy" width={32} height={32}/>
                  </div>
                  <h4 className="s_wd_features_title">Up/down stream traceability</h4>
                  <p>Track components, or manufacture in batches (lots) or serial numbers. Get a clear traceability of all operations in just a click.</p>
                </div>
                <div className="s_wd_features_item">
                  <div className="s_wd_features_icon">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <Image src="https://odoocdn.com/openerp_website/static/src/img/icons/yellow_star.svg" alt="" loading="lazy" width={32} height={32}/>
                  </div>
                  <h4 className="s_wd_features_title">IoT integrations</h4>
                  <p>Connect barcode printers, automate quality measures, or setup your machine from the shop floor app, using the IoT box.</p>
                </div>
              </div>
            </div>
            <Link href="/app/manufacturing-features" className="features-all-link">
              See all features
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <Image src="https://odoocdn.com/openerp_website/static/src/img/arrows/secondary_arrow_sm_03.svg"
                width={40} height={20} alt="" aria-hidden="true" loading="lazy"/>
            </Link>
          </div>
        </section>

        {/* ── 11. Related Apps ── */}
        <section className="s_wd_related_apps">
          <div className="container">
            <h3 className="display-2">One <span className="x_wd_display_underline">need</span>, one <span className="x_wd_display_underline">app</span>.</h3>
            <p className="lead">Expand as you grow.</p>
            <div className="related-apps-grid">
              {RELATED_APPS.map((app) => (
                <div key={app.label} className="x_wd_app_horizontal">
                  <Link href={app.href} className="app-icon-link">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <Image width={68} height={68}
                      src={app.icon}
                      alt={`Odoo ${app.label} icon`} loading="lazy"
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
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <Image src="https://odoocdn.com/openerp_website/static/src/img/arrows/secondary_arrow_sm_03.svg"
                width={40} height={20} alt="" aria-hidden="true" loading="lazy"/>
            </Link>
          </div>
        </section>

        {/* ── 12. Join 15 million users ── */}
        <section className="s_wd_users">
          <div className="container">
            <div className="s_wd_users_center">
              <h2 className="display-2">
                Join 15 million
                <span className="x_wd_display_sup">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <Image src="https://odoocdn.com/openerp_website/static/src/img/graphics/arrow_circular_down_left.svg"
                    height={40} width={40} alt="" aria-hidden="true" loading="lazy"/>
                  happy
                </span>{" "}users
              </h2>
              <span className="users-sub">who grow their business with Odoo</span>
            </div>
          </div>
        </section>

        {/* ── 13. Testimonial ── */}
        <section className="s_wd_testimonial">
          <div className="container">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <Image src="https://odoocdn.com/openerp_website/static/src/img/arrows/grey_arrow_loop_02.svg"
              width={150} height={100} className="testimonial-arrow" alt="" aria-hidden="true" loading="lazy"/>
            <div className="testimonial-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <Image src="https://odoocdn.com/openerp_website/static/src/img/snippets/s_wd_testimonials/quote.svg"
                height={70} width={70} className="testimonial-quote-icon" alt="" aria-hidden="true" loading="lazy"/>
              <div className="testimonial-body">
                <blockquote>
                  <p className="testimonial-quote">Odoo allowed our company to efficiently manage a growth from a turnover of $2.4m to $15m in 4 years.</p>
                </blockquote>
              </div>
              <div className="testimonial-author">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <Image height={90} width={90} className="testimonial-avatar"
                  src="https://odoocdn.com/openerp_website/static/src/img/snippets/s_wd_testimonials/avatar/jacky_lecuivre.webp"
                  alt="Jacky Lecuivre" loading="lazy"/>
                <div className="testimonial-author-info">
                  <b>Jacky Lecuivre</b>
                  <small>CEO at Coppercnic</small>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <Image width={100} height={50} className="img-thumbnail testimonial-logo"
                  src="https://odoocdn.com/openerp_website/static/src/img/snippets/s_wd_testimonials/logo/coppercnic.webp"
                  alt="Coppercnic logo" loading="lazy"/>
              </div>
            </div>
          </div>
        </section>

        {/* ── 14. Industry 4.0 CTA ── */}
        <section className="s_wd_call_to_action">
          <div className="container">
            <h3 className="display-1">
              <span className="x_wd_display_fireworks_01">On the way</span><br/> to Industry 4.0
            </h3>
            <Link className="btn btn-primary btn-lg" href="/trial?selected_app=mrp">Start now - It&apos;s free</Link>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <Image src="https://odoocdn.com/openerp_website/static/src/img/arrows/secondary_arrow_sm_01.svg"
              className="cta-arrow" alt="" aria-hidden="true" width={40} height={40} loading="lazy"/>
            <small>No credit card required<br/>Instant access</small>
          </div>
        </section>

      </main>

      {/* ─────────────── FOOTER ─────────────── */}
      <footer id="bottom" className="o_footer">
        <div id="footer" className="container">
          <div className="o_footer_logo" aria-label="Odoo" role="img"/>
          <div className="o_footer_grid">
            <div className="o_footer_col">
              <div className="o_footer_sub">
                <div>
                  <span className="o_footer_title">Community</span>
                  <ul className="o_footer_links">
                    <li><Link href="/slides/all/tag/odoo-tutorials-9">Tutorials</Link></li>
                    <li><Link href="/page/docs">Documentation</Link></li>
                    <li><Link href="/forum/help-1">Forum</Link></li>
                  </ul>
                </div>
                <div>
                  <span className="o_footer_title">Open Source</span>
                  <ul className="o_footer_links">
                    <li><Link href="/page/download">Download</Link></li>
                    <li><Link href="https://github.com/odoo/odoo" target="_blank" rel="noopener noreferrer">Github</Link></li>
                    <li><Link href="https://runbot.odoo.com/" target="_blank" rel="noopener noreferrer">Runbot</Link></li>
                    <li><Link href="https://github.com/odoo/odoo/wiki/Translations" target="_blank" rel="noopener noreferrer">Translations</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="o_footer_col">
              <span className="o_footer_title">Services</span>
              <ul className="o_footer_links">
                <li><Link href="https://www.odoo.sh" target="_blank" rel="noopener noreferrer">Odoo.sh Hosting</Link></li>
                <li><Link href="/help">Support</Link></li>
                <li><Link href="https://upgrade.odoo.com" target="_blank" rel="noopener noreferrer">Upgrade</Link></li>
                <li><Link href="/page/developers-on-demand">Custom Developments</Link></li>
                <li><Link href="/education/program">Education</Link></li>
                <li><Link href="/accounting-firms">Find an Accountant</Link></li>
                <li><Link href="/partners">Find a Partner</Link></li>
                <li><Link href="/become-a-partner">Become a Partner</Link></li>
              </ul>
            </div>
            <div className="o_footer_col">
              <span className="o_footer_title">About us</span>
              <ul className="o_footer_links">
                <li><Link href="/page/about-us">Our company</Link></li>
                <li><Link href="/page/brand-assets">Brand Assets</Link></li>
                <li><Link href="/contactus">Contact us</Link></li>
                <li><Link href="/jobs">Jobs</Link></li>
                <li><Link href="/events">Events</Link></li>
                <li><Link href="//podcast.odoo.com" target="_blank" rel="noopener noreferrer">Podcast</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/blog/6">Customers</Link></li>
                <li><Link href="/legal">Legal</Link> &bull; <Link href="/privacy">Privacy</Link></li>
                <li><Link href="/security">Security</Link></li>
              </ul>
            </div>
            <div className="o_footer_col o_footer_right">
              <div className="o_footer_social">
                <Link href="https://twitter.com/Odoo" target="_blank" rel="noopener noreferrer" aria-label="Odoo on Twitter">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.261 5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </Link>
                <Link href="https://www.linkedin.com/company/odoo" target="_blank" rel="noopener noreferrer" aria-label="Odoo on LinkedIn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </Link>
                <Link href="https://www.facebook.com/odoo" target="_blank" rel="noopener noreferrer" aria-label="Odoo on Facebook">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </Link>
                <Link href="https://www.github.com/odoo" target="_blank" rel="noopener noreferrer" aria-label="Odoo on GitHub">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="o_footer_bottom">
          <div className="container o_footer_bottom_inner">
            <span>© {new Date().getFullYear()} Odoo S.A.</span>
            <div className="o_footer_bottom_links">
              <Link href="/legal">Legal</Link>
              <Link href="/privacy">Privacy</Link>
              <Link href="/security">Security</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
