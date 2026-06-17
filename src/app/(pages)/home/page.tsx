// (pages)/home/page.tsx
import Link from "next/link";

/* ── Nav Data ── */
const NAV_ITEMS = [
  {
    label: "Manufacturing",
    groups: [
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
        links: [
          { label: "Inventory", href: "/app/inventory" },
          { label: "Manufacturing", href: "/app/manufacturing" },
          { label: "PLM", href: "/app/plm" },
          { label: "Purchase", href: "/app/purchase" },
          { label: "Maintenance", href: "/app/maintenance" },
          { label: "Quality", href: "/app/quality" },
        ],
      },
    ],
    footer: [
      { label: "Third party apps", href: "https://apps.odoo.com/apps/modules" },
      { label: "Odoo Studio", href: "/app/studio" },
      { label: "Odoo Cloud Platform", href: "https://www.odoo.sh" },
    ],
  },
  { label: "Pricing", href: "/pricing", groups: [] },
  { label: "Resources", href: "/resources", groups: [] },
  { label: "Partners", href: "/partners", groups: [] },
  { label: "About", href: "/about", groups: [] },
];

const FEATURE_SECTIONS = [
  {
    id: "simulated-ops",
    eyebrow: "Production planning",
    title: (
      <>
        <span className="highlight-green">Real-time</span> simulated operations
      </>
    ),
    body: [
      "Simulate manufacturing orders with real-time capacity planning, components availability, and cost control.",
      "Get just-in-time replenishment propositions and choose how to fulfill parts: make or buy, sub-contract, deliver from another warehouse, etc.",
    ],
    image: {
      src: "https://odoocdn.com/openerp_website/static/src/img/apps/manufacturing/operations.webp",
      alt: "Real-time simulated operations in Odoo Manufacturing",
    },
    arrow: "https://odoocdn.com/openerp_website/static/src/img/arrows/grey_arrow_dot_02.svg",
    reverse: false,
  },
];

export default function HomePage() {
  return (
    <>
      {/* Skip to content */}
      <a className="skip-link" href="#wrap">
        Skip to Content
      </a>

      {/* ── Navbar ── */}
      <header id="top" className="navbar">
        <div className="navbar__inner">
          {/* Logo */}
          <Link href="/" className="navbar__logo" aria-label="Odoo home" />

          {/* Centered mega-nav */}
          <nav aria-label="Main navigation">
            <ul className="navbar__menu-center">
              {NAV_ITEMS.map((item) => (
                <li key={item.label} className="group">
                  {"href" in item && item.href ? (
                    <Link href={item.href}>
                      <span>{item.label}</span>
                    </Link>
                  ) : (
                    <a href="#" aria-expanded="false" aria-haspopup="true">
                      <span>{item.label}</span>
                    </a>
                  )}

                  {item.groups.length > 0 && (
                    <div
                      className="navbar__dropdown"
                      role="region"
                      aria-label={`${item.label} menu`}
                    >
                      <div className="navbar__dropdown-inner">
                        {item.groups.map((group) => (
                          <div key={group.title} className="navbar__dropdown-group">
                            <div
                              className="navbar__dropdown-group-title"
                              style={{ color: group.color }}
                            >
                              {group.title}
                            </div>
                            <ul>
                              {group.links.map((link) => (
                                <li key={link.label}>
                                  <Link href={link.href}>{link.label}</Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      {"footer" in item && item.footer && (
                        <div className="navbar__dropdown-footer">
                          {item.footer.map((f) => (
                            <a key={f.label} href={f.href}>
                              {f.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Right actions */}
          <div className="navbar__actions" aria-label="Account actions">
            <a
              href="https://wa.me/916357077743"
              className="btn-whatsapp"
              aria-label="Contact via WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
            <Link href="/web/login">Sign in</Link>
            <Link href="/trial?selected_app=mrp" className="btn-try">
              Try it free
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="navbar__hamburger"
            aria-label="Open menu"
            aria-expanded="false"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M2 5h16M2 10h16M2 15h16"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* ── Main ── */}
      <main id="wrap">
        {/* ── Hero Section ── */}
        <section className="hero" aria-label="Hero">
          <div className="hero__bg-doodle" aria-hidden="true" />

          <div className="hero__content">
            <div style={{ maxWidth: "var(--content-wide)", margin: "0 auto" }}>
              <span className="hero__eyebrow">Odoo Manufacturing</span>
              <h1 className="hero__title">
                Manufacturing,{" "}
                <em style={{ color: "var(--color-primary)" }}>simplified</em>
              </h1>
              <p className="hero__subtitle">
                Run your entire production floor from one integrated platform.
                From work orders to quality checks — all in real time.
              </p>
              <div className="hero__ctas">
                <Link href="/trial?selected_app=mrp" className="btn-primary">
                  Try it free
                </Link>
                <Link href="/app/manufacturing" className="btn-secondary">
                  Learn more
                </Link>
              </div>
            </div>
          </div>

          {/* Hero Media */}
          <div className="hero__media">
            <div className="hero__media-wrap">
              <a href="#" aria-label="Watch Odoo Manufacturing demo video">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://odoocdn.com/openerp_website/static/src/img/apps/manufacturing/hero_image.webp"
                  alt="Odoo Manufacturing app interface"
                  width={1200}
                  height={680}
                  className="hero__media-img"
                  loading="lazy"
                  decoding="async"
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://odoocdn.com/openerp_website/static/src/img/icons/play.svg"
                  alt=""
                  aria-hidden="true"
                  width={80}
                  height={80}
                  className="hero__play-btn"
                  loading="lazy"
                  decoding="async"
                />
              </a>
            </div>
          </div>
        </section>

        {/* ── CTA Banner ── */}
        <div className="cta-banner" aria-label="Callout">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://odoocdn.com/openerp_website/static/src/img/snippets/s_wd_persona/bg_blue.svg"
            alt=""
            aria-hidden="true"
            width={200}
            height={120}
            className="cta-banner__bg"
            loading="lazy"
            decoding="async"
          />
          <div className="cta-banner__bubble">
            <em>Check out MES in action!</em>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://odoocdn.com/openerp_website/static/src/img/snippets/s_wd_persona/bob.png"
            alt=""
            aria-hidden="true"
            width={60}
            height={60}
            className="cta-banner__avatar"
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* ── Feature Sections ── */}
        {FEATURE_SECTIONS.map((feat) => (
          <section
            key={feat.id}
            className="section"
            aria-labelledby={`feat-${feat.id}`}
          >
            <div className="section__inner">
              {feat.arrow && (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    paddingRight: "50%",
                    marginBottom: "var(--space-6)",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={feat.arrow}
                    alt=""
                    aria-hidden="true"
                    width={60}
                    height={120}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              )}
              <div
                className={`feature-row${
                  feat.reverse ? " feature-row--reverse" : ""
                }`}
              >
                <div className="feature-row__text">
                  {feat.eyebrow && (
                    <span className="section__eyebrow">{feat.eyebrow}</span>
                  )}
                  <h2 id={`feat-${feat.id}`} className="section__title">
                    {feat.title}
                  </h2>
                  {feat.body.map((para, i) => (
                    <p key={i} className="section__body">
                      {i === 0 ? (
                        <strong>{para.split(". ")[0] + "."}</strong>
                      ) : null}
                      {i === 0
                        ? " " + para.split(". ").slice(1).join(". ")
                        : para}
                    </p>
                  ))}
                </div>
                <div className="feature-row__media">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={feat.image.src}
                    alt={feat.image.alt}
                    width={700}
                    height={440}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* ── Stats / Social Proof ── */}
        <section
          className="section section--gray section--center"
          aria-label="Stats"
        >
          <div className="section__inner">
            <div className="stats-grid">
              {[
                { number: "12M+", label: "Users worldwide" },
                { number: "77+", label: "Countries" },
                { number: "45+", label: "Integrated apps" },
                { number: "98%", label: "Customer satisfaction" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="stat__number">{s.number}</div>
                  <div className="stat__label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA Bottom ── */}
        <section
          className="section section--center"
          aria-label="Get started"
          style={{ paddingBlock: "var(--space-20)" }}
        >
          <div className="section__inner">
            <h2
              className="section__title"
              style={{ marginBottom: "var(--space-4)", textAlign: "center" }}
            >
              Ready to streamline your production?
            </h2>
            <p
              className="section__body"
              style={{
                marginInline: "auto",
                textAlign: "center",
                marginBottom: "var(--space-8)",
              }}
            >
              Join thousands of manufacturers already using Odoo to run leaner,
              faster operations.
            </p>
            <div className="hero__ctas" style={{ justifyContent: "center" }}>
              <Link href="/trial?selected_app=mrp" className="btn-primary">
                Start free trial
              </Link>
              <Link href="/contactus" className="btn-secondary">
                Talk to sales
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="site-footer" aria-label="Site footer">
        <div className="footer__inner">
          <div className="footer__brand">
            <div
              style={{
                width: 68,
                height: 22,
                backgroundImage:
                  "url('https://www.odoo.com/openerp_website/static/src/img/2016/logos/odoo_logo.svg')",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                marginBottom: "var(--space-4)",
              }}
              aria-label="Odoo"
              role="img"
            />
            <p style={{ fontSize: "var(--text-sm)", maxWidth: "36ch" }}>
              The only platform you will ever need to help run your business.
            </p>
          </div>

          <div>
            <p className="footer__heading">Product</p>
            <ul className="footer__links">
              <li>
                <Link href="/app/manufacturing">Manufacturing</Link>
              </li>
              <li>
                <Link href="/app/inventory">Inventory</Link>
              </li>
              <li>
                <Link href="/app/accounting">Accounting</Link>
              </li>
              <li>
                <Link href="/app/crm">CRM</Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="footer__heading">Resources</p>
            <ul className="footer__links">
              <li>
                <Link href="/documentation">Documentation</Link>
              </li>
              <li>
                <Link href="/slides">Tutorials</Link>
              </li>
              <li>
                <Link href="/forum">Forum</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="footer__heading">Company</p>
            <ul className="footer__links">
              <li>
                <Link href="/about">About us</Link>
              </li>
              <li>
                <Link href="/partners">Partners</Link>
              </li>
              <li>
                <Link href="/jobs">Careers</Link>
              </li>
              <li>
                <Link href="/contactus">Contact</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>
            © {new Date().getFullYear()} Odoo S.A. All rights reserved.
          </span>
          <div style={{ display: "flex", gap: "var(--space-4)", flexWrap: "wrap" }}>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
