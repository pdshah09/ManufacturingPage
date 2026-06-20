"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  FaFacebook, FaLinkedin, FaGithub, FaInstagram, FaPhoneAlt, FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter, FaTiktok } from "react-icons/fa6";

const SOCIAL_LINKS = [
  { href: "https://www.facebook.com/odoo", icon: FaFacebook },
  { href: "https://twitter.com/Odoo", icon: FaXTwitter },
  { href: "https://www.linkedin.com/company/odoo", icon: FaLinkedin },
  { href: "https://github.com/odoo/odoo", icon: FaGithub },
  { href: "https://www.instagram.com/odoo.official", icon: FaInstagram },
  { href: "https://www.tiktok.com/@odoo", icon: FaTiktok },
  { href: "tel:+917940500100", icon: FaPhoneAlt },
  { href: "https://wa.me/916357077743", icon: FaWhatsapp },
];

const LANGS = [
  { code: "ar", href: "/ar/app/manufacturing", flag: "https://odoocdn.com/web/image/res.lang/23/flag_image?height=25", label: "الْعَرَبيّة" },
  { code: "ca", href: "/ca_ES/app/manufacturing", flag: "https://odoocdn.com/web/image/res.lang/30/flag_image?height=25", label: "Català" },
  { code: "zh_CN", href: "/zh_CN/app/manufacturing", flag: "https://odoocdn.com/base/static/img/country_flags/cn.png?height=25", label: "简体中文" },
  { code: "zh_TW", href: "/zh_TW/app/manufacturing", flag: "https://odoocdn.com/base/static/img/country_flags/tw.png?height=25", label: "繁體中文 (台灣)" },
  { code: "cs", href: "/cs_CZ/app/manufacturing", flag: "https://odoocdn.com/base/static/img/country_flags/cz.png?height=25", label: "Čeština" },
  { code: "da", href: "/da_DK/app/manufacturing", flag: "https://odoocdn.com/base/static/img/country_flags/dk.png?height=25", label: "Dansk" },
  { code: "nl", href: "/nl_NL/app/manufacturing", flag: "https://odoocdn.com/base/static/img/country_flags/nl.png?height=25", label: "Nederlands" },
  { code: "en", href: "/app/manufacturing", flag: "https://odoocdn.com/base/static/img/country_flags/us.png?height=25", label: "English", active: true },
  { code: "fi", href: "/fi_FI/app/manufacturing", flag: "https://odoocdn.com/base/static/img/country_flags/fi.png?height=25", label: "Suomi" },
  { code: "fr", href: "/fr_FR/app/manufacturing", flag: "https://odoocdn.com/base/static/img/country_flags/fr.png?height=25", label: "Français" },
  { code: "de", href: "/de_DE/app/manufacturing", flag: "https://odoocdn.com/base/static/img/country_flags/de.png?height=25", label: "Deutsch" },
  { code: "hi", href: "/hi_IN/app/manufacturing", flag: "https://odoocdn.com/base/static/img/country_flags/in.png?height=25", label: "हिंदी" },
  { code: "id", href: "/id_ID/app/manufacturing", flag: "https://odoocdn.com/base/static/img/country_flags/id.png?height=25", label: "Bahasa Indonesia" },
  { code: "it", href: "/it_IT/app/manufacturing", flag: "https://odoocdn.com/base/static/img/country_flags/it.png?height=25", label: "Italiano" },
  { code: "ja", href: "/ja_JP/app/manufacturing", flag: "https://odoocdn.com/base/static/img/country_flags/jp.png?height=25", label: "日本語" },
  { code: "ko", href: "/ko_KR/app/manufacturing", flag: "https://odoocdn.com/base/static/img/country_flags/kr.png?height=25", label: "한국어 (KR)" },
  { code: "lt", href: "/lt_LT/app/manufacturing", flag: "https://odoocdn.com/base/static/img/country_flags/lt.png?height=25", label: "Lietuvių kalba" },
  { code: "pl", href: "/pl_PL/app/manufacturing", flag: "https://odoocdn.com/base/static/img/country_flags/pl.png?height=25", label: "Język polski" },
  { code: "pt_BR", href: "/pt_BR/app/manufacturing", flag: "https://odoocdn.com/base/static/img/country_flags/br.png?height=25", label: "Português (BR)" },
  { code: "ro", href: "/ro_RO/app/manufacturing", flag: "https://odoocdn.com/base/static/img/country_flags/ro.png?height=25", label: "română" },
  { code: "ru", href: "/ru_RU/app/manufacturing", flag: "https://odoocdn.com/base/static/img/country_flags/ru.png?height=25", label: "русский язык" },
  { code: "sk", href: "/sk_SK/app/manufacturing", flag: "https://odoocdn.com/base/static/img/country_flags/sk.png?height=25", label: "Slovenský jazyk" },
  { code: "sl", href: "/sl_SI/app/manufacturing", flag: "https://odoocdn.com/base/static/img/country_flags/si.png?height=25", label: "Slovenščina" },
  { code: "es_419", href: "/es/app/manufacturing", flag: "https://odoocdn.com/base/static/img/country_flags/419.png?height=25", label: "Español (América Latina)" },
  { code: "es", href: "/es_ES/app/manufacturing", flag: "https://odoocdn.com/base/static/img/country_flags/es.png?height=25", label: "Español" },
  { code: "sv", href: "/sv_SE/app/manufacturing", flag: "https://odoocdn.com/base/static/img/country_flags/se.png?height=25", label: "Svenska" },
  { code: "th", href: "/th_TH/app/manufacturing", flag: "https://odoocdn.com/base/static/img/country_flags/th.png?height=25", label: "ภาษาไทย" },
  { code: "tr", href: "/tr_TR/app/manufacturing", flag: "https://odoocdn.com/base/static/img/country_flags/tr.png?height=25", label: "Türkçe" },
  { code: "uk", href: "/uk_UA/app/manufacturing", flag: "https://odoocdn.com/base/static/img/country_flags/ua.png?height=25", label: "українська" },
  { code: "vi", href: "/vi_VN/app/manufacturing", flag: "https://odoocdn.com/base/static/img/country_flags/vn.png?height=25", label: "Tiếng Việt" },
];

const NAV_COLS = [
  {
    title: "Community",
    links: [
      { label: "Tutorials", href: "https://www.odoo.com/slides/all/tag/odoo-tutorials-9" },
      { label: "Documentation", href: "https://www.odoo.com/page/docs" },
      { label: "Forum", href: "https://www.odoo.com/forum/help-1" },
    ],
  },
  {
    title: "Open Source",
    links: [
      { label: "Download", href: "https://www.odoo.com/page/download" },
      { divider: true },
      { label: "Github", href: "https://github.com/odoo/odoo" },
      { label: "Runbot", href: "https://runbot.odoo.com/" },
      { label: "Translations", href: "https://github.com/odoo/odoo/wiki/Translations" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Odoo.sh Hosting", href: "https://www.odoo.sh/" },
      { divider: true },
      { label: "Support", href: "https://www.odoo.com/help" },
      { label: "Upgrade", href: "https://upgrade.odoo.com/" },
      { label: "Custom Developments", href: "https://www.odoo.com/page/developers-on-demand" },
      { label: "Education", href: "https://www.odoo.com/education/program" },
      { divider: true },
      { label: "Find an Accountant", href: "https://www.odoo.com/accounting-firms" },
      { divider: true },
      { label: "Find a Partner", href: "https://www.odoo.com/partners" },
      { label: "Become a Partner", href: "https://www.odoo.com/become-a-partner" },
    ],
  },
  {
    title: "About us",
    links: [
      { label: "Our company", href: "https://www.odoo.com/page/about-us" },
      { label: "Brand Assets", href: "https://www.odoo.com/page/brand-assets" },
      { label: "Contact us", href: "https://www.odoo.com/contactus" },
      { label: "Jobs", href: "https://www.odoo.com/jobs" },
      { divider: true },
      { label: "Events", href: "https://www.odoo.com/events" },
      { label: "Podcast", href: "https://podcast.odoo.com/" },
      { label: "Blog", href: "https://www.odoo.com/blog" },
      { label: "Customers", href: "https://www.odoo.com/blog/6" },
      { divider: true },
      { label: "Legal • Privacy", href: "https://www.odoo.com/legal", href2: "https://www.odoo.com/privacy", label2: "Privacy" },
      { label: "Security", href: "https://www.odoo.com/security" },
    ],
  },
];

export default function Footer() {
  const [langOpen, setLangOpen] = useState(false);

  return (
    <>
      <footer id="bottom" className="o_footer o_colored_level o_cc o_footer_slideout">
        <div id="footer" className="o_footer_container o_not_editable">

          {/* Logo */}
          <div className="o_footer_logo_wrap">
            <Image src="/images/logo.webp" alt="Qvoo" width={120} height={25}
              className="o_footer_logo_img invert" loading="lazy" />
          </div>

          {/* Nav grid — 4 columns */}
          <div className="o_footer_nav_grid">
            {NAV_COLS.map((col) => (
              <div key={col.title} className="o_footer_nav_section">
                <span className="o_footer_title">{col.title}</span>
                <ul className="o_footer_links">
                  {col.links.map((item, i) =>
                    "divider" in item ? (
                      <li key={i} className="o_footer_divider" />
                    ) : item.label === "Legal • Privacy" ? (
                      <li key={i}>
                        <a href={item.href} className="o_footer_link">Legal</a>
                        <span className="o_footer_dot"> • </span>
                        <a href={item.href2} className="o_footer_link">Privacy</a>
                      </li>
                    ) : (
                      <li key={i}>
                        <a href={item.href} className="o_footer_link">{item.label}</a>
                      </li>
                    )
                  )}
                </ul>
              </div>
            ))}
          </div>

          {/* Language selector */}
          <div className="o_footer_bottom_row">
            <div className="o_lang_selector">
              <button
                className="o_lang_btn"
                onClick={() => setLangOpen((v) => !v)}
                aria-expanded={langOpen}
              >
                <img
                  src="https://odoocdn.com/base/static/img/country_flags/us.png?height=25"
                  alt="US flag" className="o_lang_flag"
                />
                <span>English</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" className={`o_lang_caret${langOpen ? " open" : ""}`}>
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              {langOpen && (
                <div className="o_lang_dropdown">
                  {LANGS.map((l) => (
                    <a key={l.code} href={l.href} className={`o_lang_item${l.active ? " active" : ""}`}>
                      <img src={l.flag} alt="" className="o_lang_flag" />
                      <span>{l.label}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Divider + description + socials */}
          <hr className="o_footer_hr" />
          <p className="o_footer_desc">
            Qvoo is a suite of open source business apps that cover all your company needs:
            CRM, eCommerce, accounting, inventory, point of sale, project management, etc.
          </p>
          <p className="o_footer_desc">
            Qvoo&apos;s unique value proposition is to be at the same time very easy to use
            and fully integrated.
          </p>
          <div className="o_footer_social_media">
            {SOCIAL_LINKS.map(({ href, icon: Icon }) => (
              <Link key={href} href={href} target="_blank" rel="noopener noreferrer"
                className="o_footer_social_link">
                <Icon size={16} />
              </Link>
            ))}
          </div>

        </div>

        {/* Copyright bar */}
        <div className="o_footer_copyright o_not_editable">
          <div className="o_footer_copyright_inner">
            <a href="https://www.odoo.com/app/website" className="o_footer_copyright_link">
              Website made with
              <img src="/images/logo.webp" alt="Qvoo" width={47} height={15}
                className="o_footer_logo_img invert" loading="lazy" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}