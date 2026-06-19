"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";


/* ────────────────────────────────────────────────────────────
   Footer.tsx
   Exact responsive replica of the Odoo "Footer" snippet
   (id="bottom" / data-name="Footer") from comp.txt, rebuilt
   with the existing design-system classes from globals.css:
   .o_footer, .o_footer_grid, .o_footer_col, .o_footer_sub,
   .o_footer_right, .o_footer_title, .o_footer_links,
   .o_footer_social, .o_footer_bottom, .o_footer_bottom_links,
   .o_footer_copy
   ──────────────────────────────────────────────────────────── */

/* ── Data: 1:1 with the link columns in comp.txt ── */

type FooterLink = { label: string; href: string };
type FooterColumn = { title: string; links: FooterLink[] };

const communityLinks: FooterLink[] = [
  { label: "Tutorials", href: "https://www.odoo.com/slides/all/tag/odoo-tutorials-9" },
  { label: "Documentation", href: "https://www.odoo.com/page/docs" },
  { label: "Forum", href: "https://www.odoo.com/forum/help-1" },
];

const openSourceLinks: FooterLink[] = [
  { label: "Download", href: "https://www.odoo.com/page/download" },
  { label: "Github", href: "https://github.com/odoo/odoo" },
  { label: "Runbot", href: "https://runbot.odoo.com/" },
  { label: "Translations", href: "https://github.com/odoo/odoo/wiki/Translations" },
];

const servicesColumn: FooterColumn = {
  title: "Services",
  links: [
    { label: "Odoo.sh Hosting", href: "https://www.odoo.sh" },
    { label: "Support", href: "https://www.odoo.com/help" },
    { label: "Upgrade", href: "https://upgrade.odoo.com" },
    { label: "Custom Developments", href: "https://www.odoo.com/page/developers-on-demand" },
    { label: "Education", href: "https://www.odoo.com/education/program" },
    { label: "Find an Accountant", href: "https://www.odoo.com/accounting-firms" },
    { label: "Find a Partner", href: "https://www.odoo.com/partners" },
    { label: "Become a Partner", href: "https://www.odoo.com/become-a-partner" },
  ],
};

const aboutColumn: FooterColumn = {
  title: "About us",
  links: [
    { label: "Our company", href: "https://www.odoo.com/page/about-us" },
    { label: "Brand Assets", href: "https://www.odoo.com/page/brand-assets" },
    { label: "Contact us", href: "https://www.odoo.com/contactus" },
    { label: "Jobs", href: "https://www.odoo.com/jobs" },
    { label: "Events", href: "https://www.odoo.com/events" },
    { label: "Podcast", href: "https://podcast.odoo.com/" },
    { label: "Blog", href: "https://www.odoo.com/blog" },
    { label: "Customers", href: "https://www.odoo.com/blog/6" },
    { label: "Legal", href: "https://www.odoo.com/legal" },
    { label: "Privacy", href: "https://www.odoo.com/privacy" },
    { label: "Security", href: "https://www.odoo.com/security" },
  ],
};

type SocialLink = { label: string; href: string; icon: React.FC };

const IconFacebook: React.FC = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
    <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.78-3.9 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.91h-2.33V22c4.78-.79 8.44-4.94 8.44-9.94Z" />
  </svg>
);
const IconTwitter: React.FC = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
    <path d="M18.9 2H22l-7.6 8.7L23 22h-7.1l-5.5-7.2L4.1 22H1l8.1-9.3L1 2h7.3l5 6.6L18.9 2Zm-1.2 18h1.7L7.1 4H5.3l12.4 16Z" />
  </svg>
);
const IconLinkedin: React.FC = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.83v1.64h.05c.53-1 1.84-2.06 3.79-2.06 4.06 0 4.81 2.67 4.81 6.14V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21h-4V9Z" />
  </svg>
);
const IconGithub: React.FC = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
    <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.4 9.4 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.7-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
  </svg>
);
const IconInstagram: React.FC = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
    <path d="M12 2c2.72 0 3.06.01 4.12.06 1.06.05 1.79.22 2.43.47.66.26 1.21.6 1.76 1.15.5.5.85 1.06 1.11 1.76.25.64.42 1.37.47 2.43.05 1.06.06 1.4.06 4.12s-.01 3.06-.06 4.12c-.05 1.06-.22 1.79-.47 2.43-.26.66-.6 1.21-1.15 1.76-.5.5-1.06.85-1.76 1.11-.64.25-1.37.42-2.43.47-1.06.05-1.4.06-4.12.06s-3.06-.01-4.12-.06c-1.06-.05-1.79-.22-2.43-.47-.66-.26-1.21-.6-1.76-1.15a4.92 4.92 0 0 1-1.11-1.76c-.25-.64-.42-1.37-.47-2.43C2.01 15.06 2 14.72 2 12s.01-3.06.06-4.12c.05-1.06.22-1.79.47-2.43.26-.66.61-1.21 1.15-1.76A4.92 4.92 0 0 1 5.44 2.58c.64-.25 1.37-.42 2.43-.47C8.94 2.01 9.28 2 12 2Zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4Zm5.2-8.4a1.17 1.17 0 1 1-2.34 0 1.17 1.17 0 0 1 2.34 0Z" />
  </svg>
);
const IconTiktok: React.FC = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
    <path d="M16.6 2h-3.3v13.6a2.6 2.6 0 1 1-1.86-2.5V9.6a6 6 0 1 0 5.16 5.94V8.4a8 8 0 0 0 4.4 1.3V6.4a4.7 4.7 0 0 1-4.4-4.4Z" />
  </svg>
);
const IconPhone: React.FC = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
    <path d="M6.6 10.8c1.4 2.7 3.9 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.5.6 3.6.1.4 0 .8-.3 1l-2.2 2.2Z" />
  </svg>
);
const IconWhatsapp: React.FC = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
    <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.6 0-3.1-.4-4.5-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.7.8-.8 1-.2.2-.3.2-.5.1-.2-.1-1-.4-1.9-1.2-.7-.6-1.2-1.4-1.3-1.6-.2-.2 0-.4.1-.5.1-.1.2-.3.4-.4.1-.2.2-.3.2-.5.1-.2 0-.4 0-.5-.1-.1-.6-1.5-.8-2-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.2s1 2.6 1.1 2.7c.1.2 2 3 4.8 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z" />
  </svg>
);

const socialLinks: SocialLink[] = [
  { label: "Facebook", href: "https://www.facebook.com/odoo", icon: IconFacebook },
  { label: "Twitter", href: "https://twitter.com/Odoo", icon: IconTwitter },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/odoo", icon: IconLinkedin },
  { label: "Github", href: "https://github.com/odoo/odoo", icon: IconGithub },
  { label: "Instagram", href: "https://www.instagram.com/odoo.official", icon: IconInstagram },
  { label: "TikTok", href: "https://www.tiktok.com/@odoo", icon: IconTiktok },
  { label: "Call us", href: "tel:+917940500100", icon: IconPhone },
  { label: "WhatsApp", href: "https://wa.me/916357077743", icon: IconWhatsapp },
];

const languages: { code: string; label: string; flag: string }[] = [
  { code: "en", label: "English", flag: "us" },
  { code: "ar", label: "العربيّة", flag: "sa" },
  { code: "es", label: "Español", flag: "es" },
  { code: "fr", label: "Français", flag: "fr" },
  { code: "de", label: "Deutsch", flag: "de" },
  { code: "pt_BR", label: "Português (BR)", flag: "br" },
];

const bottomLinks: FooterLink[] = [
  { label: "Legal", href: "https://www.odoo.com/legal" },
  { label: "Privacy", href: "https://www.odoo.com/privacy" },
  { label: "Security", href: "https://www.odoo.com/security" },
];

/* ── Sub-components ── */

function FooterLinkColumn({ title, links }: FooterColumn) {
  return (
    <div className="o_footer_col">
      <span className="o_footer_title">{title}</span>
      <ul className="o_footer_links">
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.href} target="_blank" rel="noopener noreferrer">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function LanguageSelector() {
  const [open, setOpen] = React.useState(false);
  const [current, setCurrent] = React.useState(languages[0]);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div ref={ref} style={{ position: "relative" }}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="true"
        aria-expanded={open}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.4rem",
          padding: "0.35rem 0.7rem",
          fontSize: "0.8rem",
          fontWeight: 500,
          color: "rgba(255,255,255,0.7)",
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: "0.375rem",
          cursor: "pointer",
        }}
      >
        <span aria-hidden="true">🌐</span>
        {current.label}
        <span
          aria-hidden="true"
          style={{
            transform: open ? "rotate(180deg)" : "none",
            transition: "transform 0.2s",
            fontSize: "0.65rem",
          }}
        >
          ▾
        </span>
      </button>

      {open && (
        <ul
          role="menu"
          style={{
            position: "absolute",
            bottom: "calc(100% + 6px)",
            right: 0,
            minWidth: "180px",
            maxHeight: "260px",
            overflowY: "auto",
            background: "#23252f",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "0.5rem",
            boxShadow: "0 12px 32px rgba(0,0,0,0.4)",
            listStyle: "none",
            padding: "0.35rem",
            zIndex: 20,
          }}
        >
          {languages.map((lang) => (
            <li key={lang.code}>
              <button
                type="button"
                role="menuitem"
                onClick={() => {
                  setCurrent(lang);
                  setOpen(false);
                }}
                style={{
                  display: "flex",
                  width: "100%",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.4rem 0.5rem",
                  fontSize: "0.8rem",
                  color: "rgba(255,255,255,0.85)",
                  background: "transparent",
                  border: "none",
                  borderRadius: "0.35rem",
                  cursor: "pointer",
                  textAlign: "left",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.08)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
              >
                {lang.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/* ── Footer ── */

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="o_footer">
      <div className="container">
        {/* Logo */}
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <a href="/" aria-label="Home" style={{ display: "inline-block" }}>
            <Image
                      src="/images/QVOO_Logo.png"
                      alt="Qvoo"
                      width={120}
                      height={32}
                      className="o_footer_logo_img"
                      loading="lazy"
            />
          </a>
        </div>

        {/* Main grid: link columns (left) + about/social (right) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "2.5rem",
          }}
          className="o_footer_main_grid"
        >
          <div className="o_footer_grid">
            <div className="o_footer_col">
              <div className="o_footer_sub">
                <FooterLinkColumn title="Community" links={communityLinks} />
                <FooterLinkColumn title="Open Source" links={openSourceLinks} />
              </div>
            </div>
            <FooterLinkColumn title={servicesColumn.title} links={servicesColumn.links} />
            <FooterLinkColumn title={aboutColumn.title} links={aboutColumn.links} />

            {/* Right-hand block: language selector, blurb, socials */}
            <div className="o_footer_right">
              <LanguageSelector />

              <hr
                style={{
                  width: "100%",
                  border: "none",
                  borderTop: "1px solid rgba(255,255,255,0.1)",
                  margin: "0.5rem 0",
                }}
              />

              <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>
                We're a suite of open source business apps that cover all your company
                needs: CRM, eCommerce, accounting, inventory, point of sale, project
                management, etc.
              </p>
              <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>
                Our unique value proposition is to be at the same time very easy to use
                and fully integrated.
              </p>

              <div className="o_footer_social">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="o_footer_bottom_wrap" style={{ borderTop: "1px solid rgba(255,255,255,0.1)", marginTop: "2rem" }}>
        <div className="container" style={{ paddingBlock: "1.25rem" }}>
          <div className="o_footer_bottom">
            <span className="o_footer_copy">© {year} Your Company. All rights reserved.</span>
            <ul className="o_footer_bottom_links">
              {bottomLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} target="_blank" rel="noopener noreferrer">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <style>{`
        .o_footer_main_grid { }

        @media (min-width: 768px) {
          .o_footer_grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (min-width: 1024px) {
          .o_footer_grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }

        @media (max-width: 767px) {
          .o_footer_col .o_footer_sub {
            grid-template-columns: 1fr 1fr;
          }
          .o_footer_right {
            align-items: flex-start;
          }
          .o_footer_bottom {
            flex-direction: column;
            align-items: flex-start;
            text-align: left;
          }
        }
      `}</style>
    </footer>
  );
}