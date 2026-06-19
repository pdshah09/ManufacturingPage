import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaPhoneAlt,
  FaWhatsapp,
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

export default function Footer() {
  return (
    <>
      <footer
        id="bottom"
        className="o_footer o_colored_level o_cc o_footer_slideout"
        style={{
          boxSizing: "border-box",
          backgroundImage: "none",
          backgroundColor: "rgb(37, 39, 51)",
          color: "rgb(255, 255, 255)",
          flex: "0 0 auto",
        }}
      >
        <div
          id="footer"
          className="container o_not_editable"
          style={{
            boxSizing: "border-box",
            width: "100%",
            paddingRight: "calc(32px * .5)",
            paddingLeft: "calc(32px * .5)",
            marginRight: "auto",
            marginLeft: "auto",
            maxWidth: "1320px",
          }}
        >
          {/* <span
            className="o_logo o_logo_inverse d-block mx-auto o_footer_logo my-5 invert"
            style={{
              boxSizing: "border-box",
              backgroundImage:
                'url("/images/logo.webp")',
              backgroundRepeat: "no-repeat",
              width: "120px",
              height: "32px",
              backgroundSize: "auto 30px",
              backgroundPosition: "100% 0px",
              position: "relative",
              display: "block",
              marginRight: "auto",
              marginLeft: "auto",
              marginTop: "3rem",
              marginBottom: "3rem",
            }}
          /> */}
          <Image
            src="/images/logo.webp"
            alt="Qvoo"
            width={120}
            height={25}
            className="mx-auto o_footer_logo_img invert"
            loading="lazy"
          />
          <div
            className="row"
            style={{
              boxSizing: "border-box",
              display: "flex",
              flexWrap: "wrap",
              marginTop: "calc(-1 * 0)",
              marginRight: "calc(-.5 * 32px)",
              marginLeft: "calc(-.5 * 32px)",
            }}
          >
            <div
              className="col-12 col-lg-7 col-xl-6"
              style={{
                boxSizing: "border-box",
                maxWidth: "100%",
                paddingRight: "calc(32px * .5)",
                paddingLeft: "calc(32px * .5)",
                marginTop: "0",
                flex: "0 0 auto",
                flexShrink: 0,
                width: "50%",
              }}
            >
              <div
                className="row"
                style={{
                  boxSizing: "border-box",
                  display: "flex",
                  flexWrap: "wrap",
                  marginTop: "calc(-1 * 0)",
                  marginRight: "calc(-.5 * 32px)",
                  marginLeft: "calc(-.5 * 32px)",
                }}
              >
                <div
                  className="col-12 col-md-4 mb-3 mb-md-0"
                  style={{
                    boxSizing: "border-box",
                    maxWidth: "100%",
                    paddingRight: "calc(32px * .5)",
                    paddingLeft: "calc(32px * .5)",
                    marginTop: "0",
                    flex: "0 0 auto",
                    flexShrink: 0,
                    width: "33.3333%",
                    marginBottom: "0px",
                  }}
                >
                  <div
                    className="row"
                    style={{
                      boxSizing: "border-box",
                      display: "flex",
                      flexWrap: "wrap",
                      marginTop: "calc(-1 * 0)",
                      marginRight: "calc(-.5 * 32px)",
                      marginLeft: "calc(-.5 * 32px)",
                    }}
                  >
                    <div
                      className="col-6 col-md-12"
                      style={{
                        boxSizing: "border-box",
                        maxWidth: "100%",
                        paddingRight: "calc(32px * .5)",
                        paddingLeft: "calc(32px * .5)",
                        marginTop: "0",
                        flex: "0 0 auto",
                        flexShrink: 0,
                        width: "100%",
                      }}
                    >
                      <span
                        className="o_footer_title"
                        style={{
                          boxSizing: "border-box",
                          fontSize: "1.25rem",
                          fontWeight: 500,
                        }}
                      >
                        Community
                      </span>
                      <ul
                        className="o_footer_links list-unstyled"
                        style={{
                          boxSizing: "border-box",
                          listStyle: "none",
                          paddingLeft: "0px",
                          listStyleType: "none",
                          marginBottom: "1.25rem",
                          marginTop: "0.5rem",
                        }}
                      >
                        <li style={{ boxSizing: "border-box" }}>
                          <a
                            href="https://www.odoo.com/slides/all/tag/odoo-tutorials-9"
                            style={{
                              boxSizing: "border-box",
                              textDecoration: "none",
                              color: "rgb(173, 181, 189)",
                              fontSize: "0.875rem",
                              fontWeight: 500,
                            }}
                          >
                            Tutorials
                          </a>
                        </li>
                        <li style={{ boxSizing: "border-box" }}>
                          <a
                            href="https://www.odoo.com/page/docs"
                            style={{
                              boxSizing: "border-box",
                              textDecoration: "none",
                              color: "rgb(173, 181, 189)",
                              fontSize: "0.875rem",
                              fontWeight: 500,
                            }}
                          >
                            Documentation
                          </a>
                        </li>
                        <li style={{ boxSizing: "border-box" }}>
                          <a
                            href="https://www.odoo.com/forum/help-1"
                            style={{
                              boxSizing: "border-box",
                              textDecoration: "none",
                              color: "rgb(173, 181, 189)",
                              fontSize: "0.875rem",
                              fontWeight: 500,
                            }}
                          >
                            Forum
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div
                      className="col-6 col-md-12"
                      style={{
                        boxSizing: "border-box",
                        maxWidth: "100%",
                        paddingRight: "calc(32px * .5)",
                        paddingLeft: "calc(32px * .5)",
                        marginTop: "0",
                        flex: "0 0 auto",
                        flexShrink: 0,
                        width: "100%",
                      }}
                    >
                      <span
                        className="o_footer_title"
                        style={{
                          boxSizing: "border-box",
                          fontSize: "1.25rem",
                          fontWeight: 500,
                        }}
                      >
                        Open Source
                      </span>
                      <ul
                        className="o_footer_links list-unstyled"
                        style={{
                          boxSizing: "border-box",
                          listStyle: "none",
                          paddingLeft: "0px",
                          listStyleType: "none",
                          marginBottom: "1.25rem",
                          marginTop: "0.5rem",
                        }}
                      >
                        <li style={{ boxSizing: "border-box" }}>
                          <a
                            href="https://www.odoo.com/page/download"
                            style={{
                              boxSizing: "border-box",
                              textDecoration: "none",
                              color: "rgb(173, 181, 189)",
                              fontSize: "0.875rem",
                              fontWeight: 500,
                            }}
                          >
                            Download
                          </a>
                        </li>
                        <li
                          className="divider"
                          style={{ boxSizing: "border-box", height: "0.75rem" }}
                        />
                        <li style={{ boxSizing: "border-box" }}>
                          <a
                            href="https://github.com/odoo/odoo"
                            style={{
                              boxSizing: "border-box",
                              textDecoration: "none",
                              color: "rgb(173, 181, 189)",
                              fontSize: "0.875rem",
                              fontWeight: 500,
                            }}
                          >
                            Github
                          </a>
                        </li>
                        <li style={{ boxSizing: "border-box" }}>
                          <a
                            href="https://runbot.odoo.com/"
                            style={{
                              boxSizing: "border-box",
                              textDecoration: "none",
                              color: "rgb(173, 181, 189)",
                              fontSize: "0.875rem",
                              fontWeight: 500,
                            }}
                          >
                            Runbot
                          </a>
                        </li>
                        <li style={{ boxSizing: "border-box" }}>
                          <a
                            href="https://github.com/odoo/odoo/wiki/Translations"
                            style={{
                              boxSizing: "border-box",
                              textDecoration: "none",
                              color: "rgb(173, 181, 189)",
                              fontSize: "0.875rem",
                              fontWeight: 500,
                            }}
                          >
                            Translations
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  className="col-6 col-md-4"
                  style={{
                    boxSizing: "border-box",
                    maxWidth: "100%",
                    paddingRight: "calc(32px * .5)",
                    paddingLeft: "calc(32px * .5)",
                    marginTop: "0",
                    flex: "0 0 auto",
                    flexShrink: 0,
                    width: "33.3333%",
                  }}
                >
                  <span
                    className="o_footer_title"
                    style={{
                      boxSizing: "border-box",
                      fontSize: "1.25rem",
                      fontWeight: 500,
                    }}
                  >
                    Services
                  </span>
                  <ul
                    className="o_footer_links list-unstyled"
                    style={{
                      boxSizing: "border-box",
                      listStyle: "none",
                      paddingLeft: "0px",
                      listStyleType: "none",
                      marginBottom: "1.25rem",
                      marginTop: "0.5rem",
                    }}
                  >
                    <li style={{ boxSizing: "border-box" }}>
                      <a
                        href="https://www.odoo.sh/"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          color: "rgb(173, 181, 189)",
                          fontSize: "0.875rem",
                          fontWeight: 500,
                        }}
                      >
                        Odoo.sh Hosting
                      </a>
                    </li>
                    <li
                      className="divider"
                      style={{ boxSizing: "border-box", height: "0.75rem" }}
                    />
                    <li style={{ boxSizing: "border-box" }}>
                      <a
                        href="https://www.odoo.com/help"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          color: "rgb(173, 181, 189)",
                          fontSize: "0.875rem",
                          fontWeight: 500,
                        }}
                      >
                        Support
                      </a>
                    </li>
                    <li style={{ boxSizing: "border-box" }}>
                      <a
                        href="https://upgrade.odoo.com/"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          color: "rgb(173, 181, 189)",
                          fontSize: "0.875rem",
                          fontWeight: 500,
                        }}
                      >
                        Upgrade
                      </a>
                    </li>
                    <li style={{ boxSizing: "border-box" }}>
                      <a
                        href="https://www.odoo.com/page/developers-on-demand"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          color: "rgb(173, 181, 189)",
                          fontSize: "0.875rem",
                          fontWeight: 500,
                        }}
                      >
                        Custom Developments
                      </a>
                    </li>
                    <li style={{ boxSizing: "border-box" }}>
                      <a
                        href="https://www.odoo.com/education/program"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          color: "rgb(173, 181, 189)",
                          fontSize: "0.875rem",
                          fontWeight: 500,
                        }}
                      >
                        Education
                      </a>
                    </li>
                    <li
                      className="divider"
                      style={{ boxSizing: "border-box", height: "0.75rem" }}
                    />
                    <li style={{ boxSizing: "border-box" }}>
                      <a
                        href="https://www.odoo.com/accounting-firms"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          color: "rgb(173, 181, 189)",
                          fontSize: "0.875rem",
                          fontWeight: 500,
                        }}
                      >
                        Find an Accountant
                      </a>
                    </li>
                    <li
                      className="divider"
                      style={{ boxSizing: "border-box", height: "0.75rem" }}
                    />
                    <li style={{ boxSizing: "border-box" }}>
                      <a
                        href="https://www.odoo.com/partners"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          color: "rgb(173, 181, 189)",
                          fontSize: "0.875rem",
                          fontWeight: 500,
                        }}
                      >
                        Find a Partner
                      </a>
                    </li>
                    <li style={{ boxSizing: "border-box" }}>
                      <a
                        href="https://www.odoo.com/become-a-partner"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          color: "rgb(173, 181, 189)",
                          fontSize: "0.875rem",
                          fontWeight: 500,
                        }}
                      >
                        Become a Partner
                      </a>
                    </li>
                  </ul>
                </div>
                <div
                  className="col-6 col-md-4 mb-4"
                  style={{
                    boxSizing: "border-box",
                    maxWidth: "100%",
                    paddingRight: "calc(32px * .5)",
                    paddingLeft: "calc(32px * .5)",
                    marginTop: "0",
                    flex: "0 0 auto",
                    flexShrink: 0,
                    width: "33.3333%",
                    marginBottom: "1.5rem",
                  }}
                >
                  <span
                    className="o_footer_title"
                    style={{
                      boxSizing: "border-box",
                      fontSize: "1.25rem",
                      fontWeight: 500,
                    }}
                  >
                    About us
                  </span>
                  <ul
                    className="o_footer_links list-unstyled"
                    style={{
                      boxSizing: "border-box",
                      listStyle: "none",
                      paddingLeft: "0px",
                      listStyleType: "none",
                      marginBottom: "1.25rem",
                      marginTop: "0.5rem",
                    }}
                  >
                    <li style={{ boxSizing: "border-box" }}>
                      <a
                        href="https://www.odoo.com/page/about-us"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          color: "rgb(173, 181, 189)",
                          fontSize: "0.875rem",
                          fontWeight: 500,
                        }}
                      >
                        Our company
                      </a>
                    </li>
                    <li style={{ boxSizing: "border-box" }}>
                      <a
                        href="https://www.odoo.com/page/brand-assets"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          color: "rgb(173, 181, 189)",
                          fontSize: "0.875rem",
                          fontWeight: 500,
                        }}
                      >
                        Brand Assets
                      </a>
                    </li>
                    <li style={{ boxSizing: "border-box" }}>
                      <a
                        href="https://www.odoo.com/contactus"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          color: "rgb(173, 181, 189)",
                          fontSize: "0.875rem",
                          fontWeight: 500,
                        }}
                      >
                        Contact us
                      </a>
                    </li>
                    <li style={{ boxSizing: "border-box" }}>
                      <a
                        href="https://www.odoo.com/jobs"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          color: "rgb(173, 181, 189)",
                          fontSize: "0.875rem",
                          fontWeight: 500,
                        }}
                      >
                        Jobs
                      </a>
                    </li>
                    <li
                      className="divider"
                      style={{ boxSizing: "border-box", height: "0.75rem" }}
                    />
                    <li style={{ boxSizing: "border-box" }}>
                      <a
                        href="https://www.odoo.com/events"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          color: "rgb(173, 181, 189)",
                          fontSize: "0.875rem",
                          fontWeight: 500,
                        }}
                      >
                        Events
                      </a>
                    </li>
                    <li style={{ boxSizing: "border-box" }}>
                      <a
                        href="https://podcast.odoo.com/"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          color: "rgb(173, 181, 189)",
                          fontSize: "0.875rem",
                          fontWeight: 500,
                        }}
                      >
                        Podcast
                      </a>
                    </li>
                    <li style={{ boxSizing: "border-box" }}>
                      <a
                        href="https://www.odoo.com/blog"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          color: "rgb(173, 181, 189)",
                          fontSize: "0.875rem",
                          fontWeight: 500,
                        }}
                      >
                        Blog
                      </a>
                    </li>
                    <li style={{ boxSizing: "border-box" }}>
                      <a
                        href="https://www.odoo.com/blog/6"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          color: "rgb(173, 181, 189)",
                          fontSize: "0.875rem",
                          fontWeight: 500,
                        }}
                      >
                        Customers
                      </a>
                    </li>
                    <li
                      className="divider"
                      style={{ boxSizing: "border-box", height: "0.75rem" }}
                    />
                    <li style={{ boxSizing: "border-box" }}>
                      <a
                        href="https://www.odoo.com/legal"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          color: "rgb(173, 181, 189)",
                          fontSize: "0.875rem",
                          fontWeight: 500,
                        }}
                      >
                        Legal
                      </a>{" "}
                      <span
                        className="small text-muted"
                        style={{
                          boxSizing: "border-box",
                          fontSize: "0.875em",
                          color: "rgba(255, 255, 255, 0.7)",
                        }}
                      >
                        •
                      </span>{" "}
                      <a
                        href="https://www.odoo.com/privacy"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          color: "rgb(173, 181, 189)",
                          fontSize: "0.875rem",
                          fontWeight: 500,
                        }}
                      >
                        Privacy
                      </a>
                    </li>
                    <li style={{ boxSizing: "border-box" }}>
                      <a
                        href="https://www.odoo.com/security"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          color: "rgb(173, 181, 189)",
                          fontSize: "0.875rem",
                          fontWeight: 500,
                        }}
                      >
                        Security
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="col-12 col-lg-5 col-xl-5 offset-xl-1"
              style={{
                boxSizing: "border-box",
                maxWidth: "100%",
                paddingRight: "calc(32px * .5)",
                paddingLeft: "calc(32px * .5)",
                marginTop: "0",
                flex: "0 0 auto",
                flexShrink: 0,
                width: "41.6667%",
                marginLeft: "8.33333%",
              }}
            >
              <div
                className="d-flex align-items-center justify-content-between"
                style={{
                  boxSizing: "border-box",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div
                  className="js_language_selector o_language_selector dropdown d-print-none"
                  style={{ boxSizing: "border-box", position: "relative" }}
                >
                  <button
                    className="border-0 dropdown-toggle btn btn-sm btn-outline-secondary"
                    type="button"
                    aria-expanded="true"
                    aria-haspopup="true"
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      textTransform: "none",
                      appearance: "button",
                      padding: "0.5rem 1rem",
                      borderRadius: "0.25rem",
                      display: "flex",
                      fontFamily: "var(--btn-font-family)",
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      lineHeight: 1.5,
                      textAlign: "center",
                      verticalAlign: "middle",
                      userSelect: "none",
                      transition: "none",
                      whiteSpace: "nowrap",
                      cursor: "pointer",
                      color: "rgb(173, 181, 189)",
                      borderColor: "transparent",
                      paddingLeft: "0px",
                      backgroundColor: "transparent",
                      boxShadow: "none",
                      border: "0px",
                    }}
                  >
                    <img
                      className="o_lang_flag"
                      src="https://odoocdn.com/base/static/img/country_flags/us.png?height=25"
                      style={{
                        boxSizing: "border-box",
                        borderRadius: "50rem",
                        width: "1em",
                        height: "1em",
                        objectFit: "cover",
                        boxShadow: "rgba(0, 0, 0, 0.427) 1px 1px 1px",
                        maxHeight: "20px",
                        marginRight: "5px",
                        verticalAlign: "middle",
                      }}
                    />
                    <span style={{ boxSizing: "border-box" }}>English</span>
                  </button>
                  <div
                    className="dropdown-menu"
                    role="menu"
                    style={{
                      boxSizing: "border-box",
                      padding: "0.5rem 0",
                      margin: "0px",
                      listStyle: "none",
                      border:
                        "0 solid color-mix(in srgb, currentColor 15%, transparent)",
                      borderRadius: "0.25rem",
                      position: "absolute",
                      zIndex: 1000,
                      display: "none",
                      fontSize: "1rem",
                      color: "#374151",
                      textAlign: "left",
                      backgroundColor: "#ffffff",
                      backgroundClip: "border-box",
                      boxShadow: "rgba(0, 0, 0, 0.1) 0px 0.5rem 1rem",
                      scrollbarWidth: "thin",
                      overflow: "auto",
                      maxHeight: "230px",
                      minWidth: "12rem",
                      marginTop: "2rem",
                      transform: "translate3d(0px, 0px, 0px)",
                    }}
                  >
                    <a
                      className="dropdown-item js_change_lang"
                      href="https://www.odoo.com/ar/app/manufacturing"
                      role="menuitem"
                      title=" الْعَرَبيّة"
                      style={{
                        boxSizing: "border-box",
                        textDecoration: "none",
                        padding: "0.25rem 1rem",
                        whiteSpace: "nowrap",
                        border: "0px",
                        borderRadius: "var(--dropdown-item-border-radius, 0)",
                        display: "block",
                        width: "100%",
                        clear: "both",
                        fontWeight: 400,
                        textAlign: "inherit",
                        backgroundColor: "transparent",
                        fontSize: "0.75rem",
                        color: "#374151",
                      }}
                    >
                      <img
                        className="o_lang_flag"
                        src="https://odoocdn.com/web/image/res.lang/23/flag_image?height=25"
                        style={{
                          boxSizing: "border-box",
                          verticalAlign: "middle",
                          borderRadius: "50rem",
                          width: "1em",
                          height: "1em",
                          marginRight: "0.2em",
                          objectFit: "cover",
                          boxShadow: "rgba(0, 0, 0, 0.427) 1px 1px 1px",
                          minHeight: "1px",
                        }}
                      />
                      <span style={{ boxSizing: "border-box" }}>
                        {" "}
                        الْعَرَبيّة
                      </span>
                    </a>
                    <a
                      className="dropdown-item js_change_lang"
                      href="https://www.odoo.com/ca_ES/app/manufacturing"
                      role="menuitem"
                      title=" Català"
                      style={{
                        boxSizing: "border-box",
                        textDecoration: "none",
                        padding: "0.25rem 1rem",
                        whiteSpace: "nowrap",
                        border: "0px",
                        borderRadius: "var(--dropdown-item-border-radius, 0)",
                        display: "block",
                        width: "100%",
                        clear: "both",
                        fontWeight: 400,
                        textAlign: "inherit",
                        backgroundColor: "transparent",
                        fontSize: "0.75rem",
                        color: "#374151",
                      }}
                    >
                      <img
                        className="o_lang_flag"
                        src="https://odoocdn.com/web/image/res.lang/30/flag_image?height=25"
                        style={{
                          boxSizing: "border-box",
                          verticalAlign: "middle",
                          borderRadius: "50rem",
                          width: "1em",
                          height: "1em",
                          marginRight: "0.2em",
                          objectFit: "cover",
                          boxShadow: "rgba(0, 0, 0, 0.427) 1px 1px 1px",
                          minHeight: "1px",
                        }}
                      />
                      <span style={{ boxSizing: "border-box" }}> Català</span>
                    </a>
                    <a
                      className="dropdown-item js_change_lang"
                      href="https://www.odoo.com/zh_CN/app/manufacturing"
                      role="menuitem"
                      title=" 简体中文"
                      style={{
                        boxSizing: "border-box",
                        textDecoration: "none",
                        padding: "0.25rem 1rem",
                        whiteSpace: "nowrap",
                        border: "0px",
                        borderRadius: "var(--dropdown-item-border-radius, 0)",
                        display: "block",
                        width: "100%",
                        clear: "both",
                        fontWeight: 400,
                        textAlign: "inherit",
                        backgroundColor: "transparent",
                        fontSize: "0.75rem",
                        color: "#374151",
                      }}
                    >
                      <img
                        className="o_lang_flag"
                        src="https://odoocdn.com/base/static/img/country_flags/cn.png?height=25"
                        style={{
                          boxSizing: "border-box",
                          verticalAlign: "middle",
                          borderRadius: "50rem",
                          width: "1em",
                          height: "1em",
                          marginRight: "0.2em",
                          objectFit: "cover",
                          boxShadow: "rgba(0, 0, 0, 0.427) 1px 1px 1px",
                          minHeight: "1px",
                        }}
                      />
                      <span style={{ boxSizing: "border-box" }}> 简体中文</span>
                    </a>
                    <a
                      className="dropdown-item js_change_lang"
                      href="https://www.odoo.com/zh_TW/app/manufacturing"
                      role="menuitem"
                      title=" 繁體中文 (台灣)"
                      style={{
                        boxSizing: "border-box",
                        textDecoration: "none",
                        padding: "0.25rem 1rem",
                        whiteSpace: "nowrap",
                        border: "0px",
                        borderRadius: "var(--dropdown-item-border-radius, 0)",
                        display: "block",
                        width: "100%",
                        clear: "both",
                        fontWeight: 400,
                        textAlign: "inherit",
                        backgroundColor: "transparent",
                        fontSize: "0.75rem",
                        color: "#374151",
                      }}
                    >
                      <img
                        className="o_lang_flag"
                        src="https://odoocdn.com/base/static/img/country_flags/tw.png?height=25"
                        style={{
                          boxSizing: "border-box",
                          verticalAlign: "middle",
                          borderRadius: "50rem",
                          width: "1em",
                          height: "1em",
                          marginRight: "0.2em",
                          objectFit: "cover",
                          boxShadow: "rgba(0, 0, 0, 0.427) 1px 1px 1px",
                          minHeight: "1px",
                        }}
                      />
                      <span style={{ boxSizing: "border-box" }}>
                        {" "}
                        繁體中文 (台灣)
                      </span>
                    </a>
                    <a
                      className="dropdown-item js_change_lang"
                      href="https://www.odoo.com/cs_CZ/app/manufacturing"
                      role="menuitem"
                      title=" Čeština"
                      style={{
                        boxSizing: "border-box",
                        textDecoration: "none",
                        padding: "0.25rem 1rem",
                        whiteSpace: "nowrap",
                        border: "0px",
                        borderRadius: "var(--dropdown-item-border-radius, 0)",
                        display: "block",
                        width: "100%",
                        clear: "both",
                        fontWeight: 400,
                        textAlign: "inherit",
                        backgroundColor: "transparent",
                        fontSize: "0.75rem",
                        color: "#374151",
                      }}
                    >
                      <img
                        className="o_lang_flag"
                        src="https://odoocdn.com/base/static/img/country_flags/cz.png?height=25"
                        style={{
                          boxSizing: "border-box",
                          verticalAlign: "middle",
                          borderRadius: "50rem",
                          width: "1em",
                          height: "1em",
                          marginRight: "0.2em",
                          objectFit: "cover",
                          boxShadow: "rgba(0, 0, 0, 0.427) 1px 1px 1px",
                          minHeight: "1px",
                        }}
                      />
                      <span style={{ boxSizing: "border-box" }}> Čeština</span>
                    </a>
                    <a
                      className="dropdown-item js_change_lang"
                      href="https://www.odoo.com/da_DK/app/manufacturing"
                      role="menuitem"
                      title=" Dansk"
                      style={{
                        boxSizing: "border-box",
                        textDecoration: "none",
                        padding: "0.25rem 1rem",
                        whiteSpace: "nowrap",
                        border: "0px",
                        borderRadius: "var(--dropdown-item-border-radius, 0)",
                        display: "block",
                        width: "100%",
                        clear: "both",
                        fontWeight: 400,
                        textAlign: "inherit",
                        backgroundColor: "transparent",
                        fontSize: "0.75rem",
                        color: "#374151",
                      }}
                    >
                      <img
                        className="o_lang_flag"
                        src="https://odoocdn.com/base/static/img/country_flags/dk.png?height=25"
                        style={{
                          boxSizing: "border-box",
                          verticalAlign: "middle",
                          borderRadius: "50rem",
                          width: "1em",
                          height: "1em",
                          marginRight: "0.2em",
                          objectFit: "cover",
                          boxShadow: "rgba(0, 0, 0, 0.427) 1px 1px 1px",
                          minHeight: "1px",
                        }}
                      />
                      <span style={{ boxSizing: "border-box" }}> Dansk</span>
                    </a>
                    <a
                      className="dropdown-item js_change_lang"
                      href="https://www.odoo.com/nl_NL/app/manufacturing"
                      role="menuitem"
                      title=" Nederlands"
                      style={{
                        boxSizing: "border-box",
                        textDecoration: "none",
                        padding: "0.25rem 1rem",
                        whiteSpace: "nowrap",
                        border: "0px",
                        borderRadius: "var(--dropdown-item-border-radius, 0)",
                        display: "block",
                        width: "100%",
                        clear: "both",
                        fontWeight: 400,
                        textAlign: "inherit",
                        backgroundColor: "transparent",
                        fontSize: "0.75rem",
                        color: "#374151",
                      }}
                    >
                      <img
                        className="o_lang_flag"
                        src="https://odoocdn.com/base/static/img/country_flags/nl.png?height=25"
                        style={{
                          boxSizing: "border-box",
                          verticalAlign: "middle",
                          borderRadius: "50rem",
                          width: "1em",
                          height: "1em",
                          marginRight: "0.2em",
                          objectFit: "cover",
                          boxShadow: "rgba(0, 0, 0, 0.427) 1px 1px 1px",
                          minHeight: "1px",
                        }}
                      />
                      <span style={{ boxSizing: "border-box" }}>
                        {" "}
                        Nederlands
                      </span>
                    </a>
                    <a
                      className="dropdown-item js_change_lang active"
                      href="https://www.odoo.com/app/manufacturing"
                      role="menuitem"
                      title="English"
                      style={{
                        boxSizing: "border-box",
                        padding: "0.25rem 1rem",
                        whiteSpace: "nowrap",
                        border: "0px",
                        borderRadius: "var(--dropdown-item-border-radius, 0)",
                        display: "block",
                        width: "100%",
                        clear: "both",
                        fontWeight: 400,
                        textAlign: "inherit",
                        textDecoration: "none",
                        backgroundColor: "#714b67",
                        fontSize: "0.75rem",
                        color: "var(--dropdown-link-active-color, #111827)",
                      }}
                    >
                      <img
                        className="o_lang_flag"
                        src="https://odoocdn.com/base/static/img/country_flags/us.png?height=25"
                        style={{
                          boxSizing: "border-box",
                          verticalAlign: "middle",
                          borderRadius: "50rem",
                          width: "1em",
                          height: "1em",
                          marginRight: "0.2em",
                          objectFit: "cover",
                          boxShadow: "rgba(0, 0, 0, 0.427) 1px 1px 1px",
                          minHeight: "1px",
                        }}
                      />
                      <span style={{ boxSizing: "border-box" }}>English</span>
                    </a>
                    <a
                      className="dropdown-item js_change_lang"
                      href="https://www.odoo.com/fi_FI/app/manufacturing"
                      role="menuitem"
                      title=" Suomi"
                      style={{
                        boxSizing: "border-box",
                        textDecoration: "none",
                        padding: "0.25rem 1rem",
                        whiteSpace: "nowrap",
                        border: "0px",
                        borderRadius: "var(--dropdown-item-border-radius, 0)",
                        display: "block",
                        width: "100%",
                        clear: "both",
                        fontWeight: 400,
                        textAlign: "inherit",
                        backgroundColor: "transparent",
                        fontSize: "0.75rem",
                        color: "#374151",
                      }}
                    >
                      <img
                        className="o_lang_flag"
                        src="https://odoocdn.com/base/static/img/country_flags/fi.png?height=25"
                        style={{
                          boxSizing: "border-box",
                          verticalAlign: "middle",
                          borderRadius: "50rem",
                          width: "1em",
                          height: "1em",
                          marginRight: "0.2em",
                          objectFit: "cover",
                          boxShadow: "rgba(0, 0, 0, 0.427) 1px 1px 1px",
                          minHeight: "1px",
                        }}
                      />
                      <span style={{ boxSizing: "border-box" }}> Suomi</span>
                    </a>
                    <a
                      className="dropdown-item js_change_lang"
                      href="https://www.odoo.com/fr_FR/app/manufacturing"
                      role="menuitem"
                      title=" Français"
                      style={{
                        boxSizing: "border-box",
                        textDecoration: "none",
                        padding: "0.25rem 1rem",
                        whiteSpace: "nowrap",
                        border: "0px",
                        borderRadius: "var(--dropdown-item-border-radius, 0)",
                        display: "block",
                        width: "100%",
                        clear: "both",
                        fontWeight: 400,
                        textAlign: "inherit",
                        backgroundColor: "transparent",
                        fontSize: "0.75rem",
                        color: "#374151",
                      }}
                    >
                      <img
                        className="o_lang_flag"
                        src="https://odoocdn.com/base/static/img/country_flags/fr.png?height=25"
                        style={{
                          boxSizing: "border-box",
                          verticalAlign: "middle",
                          borderRadius: "50rem",
                          width: "1em",
                          height: "1em",
                          marginRight: "0.2em",
                          objectFit: "cover",
                          boxShadow: "rgba(0, 0, 0, 0.427) 1px 1px 1px",
                          minHeight: "1px",
                        }}
                      />
                      <span style={{ boxSizing: "border-box" }}> Français</span>
                    </a>
                    <a
                      className="dropdown-item js_change_lang"
                      href="https://www.odoo.com/de_DE/app/manufacturing"
                      role="menuitem"
                      title=" Deutsch"
                      style={{
                        boxSizing: "border-box",
                        textDecoration: "none",
                        padding: "0.25rem 1rem",
                        whiteSpace: "nowrap",
                        border: "0px",
                        borderRadius: "var(--dropdown-item-border-radius, 0)",
                        display: "block",
                        width: "100%",
                        clear: "both",
                        fontWeight: 400,
                        textAlign: "inherit",
                        backgroundColor: "transparent",
                        fontSize: "0.75rem",
                        color: "#374151",
                      }}
                    >
                      <img
                        className="o_lang_flag"
                        src="https://odoocdn.com/base/static/img/country_flags/de.png?height=25"
                        style={{
                          boxSizing: "border-box",
                          verticalAlign: "middle",
                          borderRadius: "50rem",
                          width: "1em",
                          height: "1em",
                          marginRight: "0.2em",
                          objectFit: "cover",
                          boxShadow: "rgba(0, 0, 0, 0.427) 1px 1px 1px",
                          minHeight: "1px",
                        }}
                      />
                      <span style={{ boxSizing: "border-box" }}> Deutsch</span>
                    </a>
                    <a
                      className="dropdown-item js_change_lang"
                      href="https://www.odoo.com/hi_IN/app/manufacturing"
                      role="menuitem"
                      title=" हिंदी"
                      style={{
                        boxSizing: "border-box",
                        textDecoration: "none",
                        padding: "0.25rem 1rem",
                        whiteSpace: "nowrap",
                        border: "0px",
                        borderRadius: "var(--dropdown-item-border-radius, 0)",
                        display: "block",
                        width: "100%",
                        clear: "both",
                        fontWeight: 400,
                        textAlign: "inherit",
                        backgroundColor: "transparent",
                        fontSize: "0.75rem",
                        color: "#374151",
                      }}
                    >
                      <img
                        className="o_lang_flag"
                        src="https://odoocdn.com/base/static/img/country_flags/in.png?height=25"
                        style={{
                          boxSizing: "border-box",
                          verticalAlign: "middle",
                          borderRadius: "50rem",
                          width: "1em",
                          height: "1em",
                          marginRight: "0.2em",
                          objectFit: "cover",
                          boxShadow: "rgba(0, 0, 0, 0.427) 1px 1px 1px",
                          minHeight: "1px",
                        }}
                      />
                      <span style={{ boxSizing: "border-box" }}> हिंदी</span>
                    </a>
                    <a
                      className="dropdown-item js_change_lang"
                      href="https://www.odoo.com/id_ID/app/manufacturing"
                      role="menuitem"
                      title=" Bahasa Indonesia"
                      style={{
                        boxSizing: "border-box",
                        textDecoration: "none",
                        padding: "0.25rem 1rem",
                        whiteSpace: "nowrap",
                        border: "0px",
                        borderRadius: "var(--dropdown-item-border-radius, 0)",
                        display: "block",
                        width: "100%",
                        clear: "both",
                        fontWeight: 400,
                        textAlign: "inherit",
                        backgroundColor: "transparent",
                        fontSize: "0.75rem",
                        color: "#374151",
                      }}
                    >
                      <img
                        className="o_lang_flag"
                        src="https://odoocdn.com/base/static/img/country_flags/id.png?height=25"
                        style={{
                          boxSizing: "border-box",
                          verticalAlign: "middle",
                          borderRadius: "50rem",
                          width: "1em",
                          height: "1em",
                          marginRight: "0.2em",
                          objectFit: "cover",
                          boxShadow: "rgba(0, 0, 0, 0.427) 1px 1px 1px",
                          minHeight: "1px",
                        }}
                      />
                      <span style={{ boxSizing: "border-box" }}>
                        {" "}
                        Bahasa Indonesia
                      </span>
                    </a>
                    <a
                      className="dropdown-item js_change_lang"
                      href="https://www.odoo.com/it_IT/app/manufacturing"
                      role="menuitem"
                      title=" Italiano"
                      style={{
                        boxSizing: "border-box",
                        textDecoration: "none",
                        padding: "0.25rem 1rem",
                        whiteSpace: "nowrap",
                        border: "0px",
                        borderRadius: "var(--dropdown-item-border-radius, 0)",
                        display: "block",
                        width: "100%",
                        clear: "both",
                        fontWeight: 400,
                        textAlign: "inherit",
                        backgroundColor: "transparent",
                        fontSize: "0.75rem",
                        color: "#374151",
                      }}
                    >
                      <img
                        className="o_lang_flag"
                        src="https://odoocdn.com/base/static/img/country_flags/it.png?height=25"
                        style={{
                          boxSizing: "border-box",
                          verticalAlign: "middle",
                          borderRadius: "50rem",
                          width: "1em",
                          height: "1em",
                          marginRight: "0.2em",
                          objectFit: "cover",
                          boxShadow: "rgba(0, 0, 0, 0.427) 1px 1px 1px",
                          minHeight: "1px",
                        }}
                      />
                      <span style={{ boxSizing: "border-box" }}> Italiano</span>
                    </a>
                    <a
                      className="dropdown-item js_change_lang"
                      href="https://www.odoo.com/ja_JP/app/manufacturing"
                      role="menuitem"
                      title=" 日本語"
                      style={{
                        boxSizing: "border-box",
                        textDecoration: "none",
                        padding: "0.25rem 1rem",
                        whiteSpace: "nowrap",
                        border: "0px",
                        borderRadius: "var(--dropdown-item-border-radius, 0)",
                        display: "block",
                        width: "100%",
                        clear: "both",
                        fontWeight: 400,
                        textAlign: "inherit",
                        backgroundColor: "transparent",
                        fontSize: "0.75rem",
                        color: "#374151",
                      }}
                    >
                      <img
                        className="o_lang_flag"
                        src="https://odoocdn.com/base/static/img/country_flags/jp.png?height=25"
                        style={{
                          boxSizing: "border-box",
                          verticalAlign: "middle",
                          borderRadius: "50rem",
                          width: "1em",
                          height: "1em",
                          marginRight: "0.2em",
                          objectFit: "cover",
                          boxShadow: "rgba(0, 0, 0, 0.427) 1px 1px 1px",
                          minHeight: "1px",
                        }}
                      />
                      <span style={{ boxSizing: "border-box" }}> 日本語</span>
                    </a>
                    <a
                      className="dropdown-item js_change_lang"
                      href="https://www.odoo.com/ko_KR/app/manufacturing"
                      role="menuitem"
                      title=" 한국어 (KR)"
                      style={{
                        boxSizing: "border-box",
                        textDecoration: "none",
                        padding: "0.25rem 1rem",
                        whiteSpace: "nowrap",
                        border: "0px",
                        borderRadius: "var(--dropdown-item-border-radius, 0)",
                        display: "block",
                        width: "100%",
                        clear: "both",
                        fontWeight: 400,
                        textAlign: "inherit",
                        backgroundColor: "transparent",
                        fontSize: "0.75rem",
                        color: "#374151",
                      }}
                    >
                      <img
                        className="o_lang_flag"
                        src="https://odoocdn.com/base/static/img/country_flags/kr.png?height=25"
                        style={{
                          boxSizing: "border-box",
                          verticalAlign: "middle",
                          borderRadius: "50rem",
                          width: "1em",
                          height: "1em",
                          marginRight: "0.2em",
                          objectFit: "cover",
                          boxShadow: "rgba(0, 0, 0, 0.427) 1px 1px 1px",
                          minHeight: "1px",
                        }}
                      />
                      <span style={{ boxSizing: "border-box" }}>
                        {" "}
                        한국어 (KR)
                      </span>
                    </a>
                    <a
                      className="dropdown-item js_change_lang"
                      href="https://www.odoo.com/lt_LT/app/manufacturing"
                      role="menuitem"
                      title=" Lietuvių kalba"
                      style={{
                        boxSizing: "border-box",
                        textDecoration: "none",
                        padding: "0.25rem 1rem",
                        whiteSpace: "nowrap",
                        border: "0px",
                        borderRadius: "var(--dropdown-item-border-radius, 0)",
                        display: "block",
                        width: "100%",
                        clear: "both",
                        fontWeight: 400,
                        textAlign: "inherit",
                        backgroundColor: "transparent",
                        fontSize: "0.75rem",
                        color: "#374151",
                      }}
                    >
                      <img
                        className="o_lang_flag"
                        src="https://odoocdn.com/base/static/img/country_flags/lt.png?height=25"
                        style={{
                          boxSizing: "border-box",
                          verticalAlign: "middle",
                          borderRadius: "50rem",
                          width: "1em",
                          height: "1em",
                          marginRight: "0.2em",
                          objectFit: "cover",
                          boxShadow: "rgba(0, 0, 0, 0.427) 1px 1px 1px",
                          minHeight: "1px",
                        }}
                      />
                      <span style={{ boxSizing: "border-box" }}>
                        {" "}
                        Lietuvių kalba
                      </span>
                    </a>
                    <a
                      className="dropdown-item js_change_lang"
                      href="https://www.odoo.com/pl_PL/app/manufacturing"
                      role="menuitem"
                      title=" Język polski"
                      style={{
                        boxSizing: "border-box",
                        textDecoration: "none",
                        padding: "0.25rem 1rem",
                        whiteSpace: "nowrap",
                        border: "0px",
                        borderRadius: "var(--dropdown-item-border-radius, 0)",
                        display: "block",
                        width: "100%",
                        clear: "both",
                        fontWeight: 400,
                        textAlign: "inherit",
                        backgroundColor: "transparent",
                        fontSize: "0.75rem",
                        color: "#374151",
                      }}
                    >
                      <img
                        className="o_lang_flag"
                        src="https://odoocdn.com/base/static/img/country_flags/pl.png?height=25"
                        style={{
                          boxSizing: "border-box",
                          verticalAlign: "middle",
                          borderRadius: "50rem",
                          width: "1em",
                          height: "1em",
                          marginRight: "0.2em",
                          objectFit: "cover",
                          boxShadow: "rgba(0, 0, 0, 0.427) 1px 1px 1px",
                          minHeight: "1px",
                        }}
                      />
                      <span style={{ boxSizing: "border-box" }}>
                        {" "}
                        Język polski
                      </span>
                    </a>
                    <a
                      className="dropdown-item js_change_lang"
                      href="https://www.odoo.com/pt_BR/app/manufacturing"
                      role="menuitem"
                      title=" Português (BR)"
                      style={{
                        boxSizing: "border-box",
                        textDecoration: "none",
                        padding: "0.25rem 1rem",
                        whiteSpace: "nowrap",
                        border: "0px",
                        borderRadius: "var(--dropdown-item-border-radius, 0)",
                        display: "block",
                        width: "100%",
                        clear: "both",
                        fontWeight: 400,
                        textAlign: "inherit",
                        backgroundColor: "transparent",
                        fontSize: "0.75rem",
                        color: "#374151",
                      }}
                    >
                      <img
                        className="o_lang_flag"
                        src="https://odoocdn.com/base/static/img/country_flags/br.png?height=25"
                        style={{
                          boxSizing: "border-box",
                          verticalAlign: "middle",
                          borderRadius: "50rem",
                          width: "1em",
                          height: "1em",
                          marginRight: "0.2em",
                          objectFit: "cover",
                          boxShadow: "rgba(0, 0, 0, 0.427) 1px 1px 1px",
                          minHeight: "1px",
                        }}
                      />
                      <span style={{ boxSizing: "border-box" }}>
                        {" "}
                        Português (BR)
                      </span>
                    </a>
                    <a
                      className="dropdown-item js_change_lang"
                      href="https://www.odoo.com/ro_RO/app/manufacturing"
                      role="menuitem"
                      title=" română"
                      style={{
                        boxSizing: "border-box",
                        textDecoration: "none",
                        padding: "0.25rem 1rem",
                        whiteSpace: "nowrap",
                        border: "0px",
                        borderRadius: "var(--dropdown-item-border-radius, 0)",
                        display: "block",
                        width: "100%",
                        clear: "both",
                        fontWeight: 400,
                        textAlign: "inherit",
                        backgroundColor: "transparent",
                        fontSize: "0.75rem",
                        color: "#374151",
                      }}
                    >
                      <img
                        className="o_lang_flag"
                        src="https://odoocdn.com/base/static/img/country_flags/ro.png?height=25"
                        style={{
                          boxSizing: "border-box",
                          verticalAlign: "middle",
                          borderRadius: "50rem",
                          width: "1em",
                          height: "1em",
                          marginRight: "0.2em",
                          objectFit: "cover",
                          boxShadow: "rgba(0, 0, 0, 0.427) 1px 1px 1px",
                          minHeight: "1px",
                        }}
                      />
                      <span style={{ boxSizing: "border-box" }}> română</span>
                    </a>
                    <a
                      className="dropdown-item js_change_lang"
                      href="https://www.odoo.com/ru_RU/app/manufacturing"
                      role="menuitem"
                      title=" русский язык"
                      style={{
                        boxSizing: "border-box",
                        textDecoration: "none",
                        padding: "0.25rem 1rem",
                        whiteSpace: "nowrap",
                        border: "0px",
                        borderRadius: "var(--dropdown-item-border-radius, 0)",
                        display: "block",
                        width: "100%",
                        clear: "both",
                        fontWeight: 400,
                        textAlign: "inherit",
                        backgroundColor: "transparent",
                        fontSize: "0.75rem",
                        color: "#374151",
                      }}
                    >
                      <img
                        className="o_lang_flag"
                        src="https://odoocdn.com/base/static/img/country_flags/ru.png?height=25"
                        style={{
                          boxSizing: "border-box",
                          verticalAlign: "middle",
                          borderRadius: "50rem",
                          width: "1em",
                          height: "1em",
                          marginRight: "0.2em",
                          objectFit: "cover",
                          boxShadow: "rgba(0, 0, 0, 0.427) 1px 1px 1px",
                          minHeight: "1px",
                        }}
                      />
                      <span style={{ boxSizing: "border-box" }}>
                        {" "}
                        русский язык
                      </span>
                    </a>
                    <a
                      className="dropdown-item js_change_lang"
                      href="https://www.odoo.com/sk_SK/app/manufacturing"
                      role="menuitem"
                      title=" Slovenský jazyk"
                      style={{
                        boxSizing: "border-box",
                        textDecoration: "none",
                        padding: "0.25rem 1rem",
                        whiteSpace: "nowrap",
                        border: "0px",
                        borderRadius: "var(--dropdown-item-border-radius, 0)",
                        display: "block",
                        width: "100%",
                        clear: "both",
                        fontWeight: 400,
                        textAlign: "inherit",
                        backgroundColor: "transparent",
                        fontSize: "0.75rem",
                        color: "#374151",
                      }}
                    >
                      <img
                        className="o_lang_flag"
                        src="https://odoocdn.com/base/static/img/country_flags/sk.png?height=25"
                        style={{
                          boxSizing: "border-box",
                          verticalAlign: "middle",
                          borderRadius: "50rem",
                          width: "1em",
                          height: "1em",
                          marginRight: "0.2em",
                          objectFit: "cover",
                          boxShadow: "rgba(0, 0, 0, 0.427) 1px 1px 1px",
                          minHeight: "1px",
                        }}
                      />
                      <span style={{ boxSizing: "border-box" }}>
                        {" "}
                        Slovenský jazyk
                      </span>
                    </a>
                    <a
                      className="dropdown-item js_change_lang"
                      href="https://www.odoo.com/sl_SI/app/manufacturing"
                      role="menuitem"
                      title=" Slovenščina"
                      style={{
                        boxSizing: "border-box",
                        textDecoration: "none",
                        padding: "0.25rem 1rem",
                        whiteSpace: "nowrap",
                        border: "0px",
                        borderRadius: "var(--dropdown-item-border-radius, 0)",
                        display: "block",
                        width: "100%",
                        clear: "both",
                        fontWeight: 400,
                        textAlign: "inherit",
                        backgroundColor: "transparent",
                        fontSize: "0.75rem",
                        color: "#374151",
                      }}
                    >
                      <img
                        className="o_lang_flag"
                        src="https://odoocdn.com/base/static/img/country_flags/si.png?height=25"
                        style={{
                          boxSizing: "border-box",
                          verticalAlign: "middle",
                          borderRadius: "50rem",
                          width: "1em",
                          height: "1em",
                          marginRight: "0.2em",
                          objectFit: "cover",
                          boxShadow: "rgba(0, 0, 0, 0.427) 1px 1px 1px",
                          minHeight: "1px",
                        }}
                      />
                      <span style={{ boxSizing: "border-box" }}>
                        {" "}
                        Slovenščina
                      </span>
                    </a>
                    <a
                      className="dropdown-item js_change_lang"
                      href="https://www.odoo.com/es/app/manufacturing"
                      role="menuitem"
                      title=" Español (América Latina)"
                      style={{
                        boxSizing: "border-box",
                        textDecoration: "none",
                        padding: "0.25rem 1rem",
                        whiteSpace: "nowrap",
                        border: "0px",
                        borderRadius: "var(--dropdown-item-border-radius, 0)",
                        display: "block",
                        width: "100%",
                        clear: "both",
                        fontWeight: 400,
                        textAlign: "inherit",
                        backgroundColor: "transparent",
                        fontSize: "0.75rem",
                        color: "#374151",
                      }}
                    >
                      <img
                        className="o_lang_flag"
                        src="https://odoocdn.com/base/static/img/country_flags/419.png?height=25"
                        style={{
                          boxSizing: "border-box",
                          verticalAlign: "middle",
                          borderRadius: "50rem",
                          width: "1em",
                          height: "1em",
                          marginRight: "0.2em",
                          objectFit: "cover",
                          boxShadow: "rgba(0, 0, 0, 0.427) 1px 1px 1px",
                          minHeight: "1px",
                        }}
                      />
                      <span style={{ boxSizing: "border-box" }}>
                        {" "}
                        Español (América Latina)
                      </span>
                    </a>
                    <a
                      className="dropdown-item js_change_lang"
                      href="https://www.odoo.com/es_ES/app/manufacturing"
                      role="menuitem"
                      title=" Español"
                      style={{
                        boxSizing: "border-box",
                        textDecoration: "none",
                        padding: "0.25rem 1rem",
                        whiteSpace: "nowrap",
                        border: "0px",
                        borderRadius: "var(--dropdown-item-border-radius, 0)",
                        display: "block",
                        width: "100%",
                        clear: "both",
                        fontWeight: 400,
                        textAlign: "inherit",
                        backgroundColor: "transparent",
                        fontSize: "0.75rem",
                        color: "#374151",
                      }}
                    >
                      <img
                        className="o_lang_flag"
                        src="https://odoocdn.com/base/static/img/country_flags/es.png?height=25"
                        style={{
                          boxSizing: "border-box",
                          verticalAlign: "middle",
                          borderRadius: "50rem",
                          width: "1em",
                          height: "1em",
                          marginRight: "0.2em",
                          objectFit: "cover",
                          boxShadow: "rgba(0, 0, 0, 0.427) 1px 1px 1px",
                          minHeight: "1px",
                        }}
                      />
                      <span style={{ boxSizing: "border-box" }}> Español</span>
                    </a>
                    <a
                      className="dropdown-item js_change_lang"
                      href="https://www.odoo.com/sv_SE/app/manufacturing"
                      role="menuitem"
                      title=" Svenska"
                      style={{
                        boxSizing: "border-box",
                        textDecoration: "none",
                        padding: "0.25rem 1rem",
                        whiteSpace: "nowrap",
                        border: "0px",
                        borderRadius: "var(--dropdown-item-border-radius, 0)",
                        display: "block",
                        width: "100%",
                        clear: "both",
                        fontWeight: 400,
                        textAlign: "inherit",
                        backgroundColor: "transparent",
                        fontSize: "0.75rem",
                        color: "#374151",
                      }}
                    >
                      <img
                        className="o_lang_flag"
                        src="https://odoocdn.com/base/static/img/country_flags/se.png?height=25"
                        style={{
                          boxSizing: "border-box",
                          verticalAlign: "middle",
                          borderRadius: "50rem",
                          width: "1em",
                          height: "1em",
                          marginRight: "0.2em",
                          objectFit: "cover",
                          boxShadow: "rgba(0, 0, 0, 0.427) 1px 1px 1px",
                          minHeight: "1px",
                        }}
                      />
                      <span style={{ boxSizing: "border-box" }}> Svenska</span>
                    </a>
                    <a
                      className="dropdown-item js_change_lang"
                      href="https://www.odoo.com/th_TH/app/manufacturing"
                      role="menuitem"
                      title=" ภาษาไทย"
                      style={{
                        boxSizing: "border-box",
                        textDecoration: "none",
                        padding: "0.25rem 1rem",
                        whiteSpace: "nowrap",
                        border: "0px",
                        borderRadius: "var(--dropdown-item-border-radius, 0)",
                        display: "block",
                        width: "100%",
                        clear: "both",
                        fontWeight: 400,
                        textAlign: "inherit",
                        backgroundColor: "transparent",
                        fontSize: "0.75rem",
                        color: "#374151",
                      }}
                    >
                      <img
                        className="o_lang_flag"
                        src="https://odoocdn.com/base/static/img/country_flags/th.png?height=25"
                        style={{
                          boxSizing: "border-box",
                          verticalAlign: "middle",
                          borderRadius: "50rem",
                          width: "1em",
                          height: "1em",
                          marginRight: "0.2em",
                          objectFit: "cover",
                          boxShadow: "rgba(0, 0, 0, 0.427) 1px 1px 1px",
                          minHeight: "1px",
                        }}
                      />
                      <span style={{ boxSizing: "border-box" }}> ภาษาไทย</span>
                    </a>
                    <a
                      className="dropdown-item js_change_lang"
                      href="https://www.odoo.com/tr_TR/app/manufacturing"
                      role="menuitem"
                      title=" Türkçe"
                      style={{
                        boxSizing: "border-box",
                        textDecoration: "none",
                        padding: "0.25rem 1rem",
                        whiteSpace: "nowrap",
                        border: "0px",
                        borderRadius: "var(--dropdown-item-border-radius, 0)",
                        display: "block",
                        width: "100%",
                        clear: "both",
                        fontWeight: 400,
                        textAlign: "inherit",
                        backgroundColor: "transparent",
                        fontSize: "0.75rem",
                        color: "#374151",
                      }}
                    >
                      <img
                        className="o_lang_flag"
                        src="https://odoocdn.com/base/static/img/country_flags/tr.png?height=25"
                        style={{
                          boxSizing: "border-box",
                          verticalAlign: "middle",
                          borderRadius: "50rem",
                          width: "1em",
                          height: "1em",
                          marginRight: "0.2em",
                          objectFit: "cover",
                          boxShadow: "rgba(0, 0, 0, 0.427) 1px 1px 1px",
                          minHeight: "1px",
                        }}
                      />
                      <span style={{ boxSizing: "border-box" }}> Türkçe</span>
                    </a>
                    <a
                      className="dropdown-item js_change_lang"
                      href="https://www.odoo.com/uk_UA/app/manufacturing"
                      role="menuitem"
                      title=" українська"
                      style={{
                        boxSizing: "border-box",
                        textDecoration: "none",
                        padding: "0.25rem 1rem",
                        whiteSpace: "nowrap",
                        border: "0px",
                        borderRadius: "var(--dropdown-item-border-radius, 0)",
                        display: "block",
                        width: "100%",
                        clear: "both",
                        fontWeight: 400,
                        textAlign: "inherit",
                        backgroundColor: "transparent",
                        fontSize: "0.75rem",
                        color: "#374151",
                      }}
                    >
                      <img
                        className="o_lang_flag"
                        src="https://odoocdn.com/base/static/img/country_flags/ua.png?height=25"
                        style={{
                          boxSizing: "border-box",
                          verticalAlign: "middle",
                          borderRadius: "50rem",
                          width: "1em",
                          height: "1em",
                          marginRight: "0.2em",
                          objectFit: "cover",
                          boxShadow: "rgba(0, 0, 0, 0.427) 1px 1px 1px",
                          minHeight: "1px",
                        }}
                      />
                      <span style={{ boxSizing: "border-box" }}>
                        {" "}
                        українська
                      </span>
                    </a>
                    <a
                      className="dropdown-item js_change_lang"
                      href="https://www.odoo.com/vi_VN/app/manufacturing"
                      role="menuitem"
                      title=" Tiếng Việt"
                      style={{
                        boxSizing: "border-box",
                        textDecoration: "none",
                        padding: "0.25rem 1rem",
                        whiteSpace: "nowrap",
                        border: "0px",
                        borderRadius: "var(--dropdown-item-border-radius, 0)",
                        display: "block",
                        width: "100%",
                        clear: "both",
                        fontWeight: 400,
                        textAlign: "inherit",
                        backgroundColor: "transparent",
                        fontSize: "0.75rem",
                        color: "#374151",
                      }}
                    >
                      <img
                        className="o_lang_flag"
                        src="https://odoocdn.com/base/static/img/country_flags/vn.png?height=25"
                        style={{
                          boxSizing: "border-box",
                          verticalAlign: "middle",
                          borderRadius: "50rem",
                          width: "1em",
                          height: "1em",
                          marginRight: "0.2em",
                          objectFit: "cover",
                          boxShadow: "rgba(0, 0, 0, 0.427) 1px 1px 1px",
                          minHeight: "1px",
                        }}
                      />
                      <span style={{ boxSizing: "border-box" }}>
                        {" "}
                        Tiếng Việt
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <hr
                className="mt-3 mb-4"
                style={{
                  boxSizing: "border-box",
                  margin: "1rem 0px",
                  borderRight: "0px",
                  borderBottom: "0px",
                  borderLeft: "0px",
                  borderImage: "initial",
                  borderTop:
                    "1px solid color-mix(in srgb, currentColor 15%, transparent)",
                  color: "inherit",
                  opacity: 1,
                  borderTopColor: "rgb(108, 117, 125)",
                  marginTop: "1rem",
                  marginBottom: "1.5rem",
                }}
              />
              <p
                className="small text-muted"
                style={{
                  boxSizing: "border-box",
                  marginBottom: "16px",
                  marginTop: "0px",
                  fontSize: "0.875em",
                  color: "rgba(255, 255, 255, 0.7)",
                }}
              >
                Qvoo is a suite of open source business apps that cover all your
                company needs: CRM, eCommerce, accounting, inventory, point of
                sale, project management, etc.
              </p>
              <p
                className="small text-muted mb-4"
                style={{
                  boxSizing: "border-box",
                  marginTop: "0px",
                  fontSize: "0.875em",
                  marginBottom: "1.5rem",
                  color: "rgba(255, 255, 255, 0.7)",
                }}
              >
                Qvoo&apos;s unique value proposition is to be at the same time very
                easy to use and fully integrated.
              </p>

              <div className="o_footer_social_media mb-4 flex flex-wrap items-center gap-6">
                {SOCIAL_LINKS.map(({ href, icon: Icon }) => (
                  <Link
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[rgb(173,181,189)] hover:text-white transition-colors"
                  >
                    <Icon size={16} />
                  </Link>
                ))}
              </div>


              {/* <div
                className="o_footer_social_media mb-4"
                style={{ boxSizing: "border-box", marginBottom: "1.5rem" }}
              >
                <a
                  className="me-3"
                  href="https://www.facebook.com/odoo"
                  target="_blank"
                  style={{
                    boxSizing: "border-box",
                    textDecoration: "none",
                    color: "rgb(173, 181, 189)",
                    marginRight: "1rem",
                  }}
                >
                  <i
                    className="fa fa-fw fa-facebook"
                    style={{
                      boxSizing: "border-box",
                      fontVariant: "normal",
                      display: "inline-block",
                      fontStyle: "normal",
                      fontSizeAdjust: "none",
                      fontLanguageOverride: "normal",
                      fontKerning: "auto",
                      fontOpticalSizing: "auto",
                      fontFeatureSettings: "normal",
                      fontVariationSettings: "normal",
                      fontWeight: "normal",
                      fontStretch: "normal",
                      lineHeight: 1,
                      fontSize: "inherit",
                      textRendering: "auto",
                      WebkitFontSmoothing: "antialiased",
                      width: "1.28571em",
                      textAlign: "center",
                      fontFamily: "FontAwesome",
                    }}
                  />
                </a>
                <a
                  className="me-3"
                  href="https://twitter.com/Odoo"
                  target="_blank"
                  style={{
                    boxSizing: "border-box",
                    textDecoration: "none",
                    color: "rgb(173, 181, 189)",
                    marginRight: "1rem",
                  }}
                >
                  <i
                    className="fa fa-fw fa-twitter"
                    style={{
                      boxSizing: "border-box",
                      fontVariant: "normal",
                      display: "inline-block",
                      fontStyle: "normal",
                      fontSizeAdjust: "none",
                      fontLanguageOverride: "normal",
                      fontKerning: "auto",
                      fontOpticalSizing: "auto",
                      fontFeatureSettings: "normal",
                      fontVariationSettings: "normal",
                      fontWeight: "normal",
                      fontStretch: "normal",
                      lineHeight: 1,
                      fontSize: "inherit",
                      textRendering: "auto",
                      WebkitFontSmoothing: "antialiased",
                      width: "1.28571em",
                      textAlign: "center",
                      fontFamily: "odoo_ui_icons",
                    }}
                  />
                </a>
                <a
                  className="me-3"
                  href="https://www.linkedin.com/company/odoo"
                  target="_blank"
                  style={{
                    boxSizing: "border-box",
                    textDecoration: "none",
                    color: "rgb(173, 181, 189)",
                    marginRight: "1rem",
                  }}
                >
                  <i
                    className="fa fa-fw fa-linkedin"
                    style={{
                      boxSizing: "border-box",
                      fontVariant: "normal",
                      display: "inline-block",
                      fontStyle: "normal",
                      fontSizeAdjust: "none",
                      fontLanguageOverride: "normal",
                      fontKerning: "auto",
                      fontOpticalSizing: "auto",
                      fontFeatureSettings: "normal",
                      fontVariationSettings: "normal",
                      fontWeight: "normal",
                      fontStretch: "normal",
                      lineHeight: 1,
                      fontSize: "inherit",
                      textRendering: "auto",
                      WebkitFontSmoothing: "antialiased",
                      width: "1.28571em",
                      textAlign: "center",
                      fontFamily: "FontAwesome",
                    }}
                  />
                </a>
                <a
                  className="me-3"
                  href="https://github.com/odoo/odoo"
                  target="_blank"
                  style={{
                    boxSizing: "border-box",
                    textDecoration: "none",
                    color: "rgb(173, 181, 189)",
                    marginRight: "1rem",
                  }}
                >
                  <i
                    className="fa fa-fw fa-github"
                    style={{
                      boxSizing: "border-box",
                      fontVariant: "normal",
                      display: "inline-block",
                      fontStyle: "normal",
                      fontSizeAdjust: "none",
                      fontLanguageOverride: "normal",
                      fontKerning: "auto",
                      fontOpticalSizing: "auto",
                      fontFeatureSettings: "normal",
                      fontVariationSettings: "normal",
                      fontWeight: "normal",
                      fontStretch: "normal",
                      lineHeight: 1,
                      fontSize: "inherit",
                      textRendering: "auto",
                      WebkitFontSmoothing: "antialiased",
                      width: "1.28571em",
                      textAlign: "center",
                      fontFamily: "FontAwesome",
                    }}
                  />
                </a>
                <a
                  className="me-3"
                  href="https://www.instagram.com/odoo.official"
                  target="_blank"
                  style={{
                    boxSizing: "border-box",
                    textDecoration: "none",
                    color: "rgb(173, 181, 189)",
                    marginRight: "1rem",
                  }}
                >
                  <i
                    className="fa fa-fw fa-instagram"
                    style={{
                      boxSizing: "border-box",
                      fontVariant: "normal",
                      display: "inline-block",
                      fontStyle: "normal",
                      fontSizeAdjust: "none",
                      fontLanguageOverride: "normal",
                      fontKerning: "auto",
                      fontOpticalSizing: "auto",
                      fontFeatureSettings: "normal",
                      fontVariationSettings: "normal",
                      fontWeight: "normal",
                      fontStretch: "normal",
                      lineHeight: 1,
                      fontSize: "inherit",
                      textRendering: "auto",
                      WebkitFontSmoothing: "antialiased",
                      width: "1.28571em",
                      textAlign: "center",
                      fontFamily: "FontAwesome",
                    }}
                  />
                </a>
                <a
                  className="me-3"
                  href="https://www.tiktok.com/@odoo"
                  target="_blank"
                  style={{
                    boxSizing: "border-box",
                    textDecoration: "none",
                    color: "rgb(173, 181, 189)",
                    marginRight: "1rem",
                  }}
                >
                  <i
                    className="fa fa-fw fa-tiktok"
                    style={{
                      boxSizing: "border-box",
                      fontVariant: "normal",
                      display: "inline-block",
                      fontStyle: "normal",
                      fontSizeAdjust: "none",
                      fontLanguageOverride: "normal",
                      fontKerning: "auto",
                      fontOpticalSizing: "auto",
                      fontFeatureSettings: "normal",
                      fontVariationSettings: "normal",
                      fontWeight: "normal",
                      fontStretch: "normal",
                      lineHeight: 1,
                      fontSize: "inherit",
                      textRendering: "auto",
                      WebkitFontSmoothing: "antialiased",
                      width: "1.28571em",
                      textAlign: "center",
                      fontFamily: "odoo_ui_icons",
                    }}
                  />
                </a>
                <a
                  className="me-3"
                  href="tel:+917940500100"
                  target="_blank"
                  style={{
                    boxSizing: "border-box",
                    textDecoration: "none",
                    color: "rgb(173, 181, 189)",
                    marginRight: "1rem",
                  }}
                >
                  <i
                    className="fa fa-fw fa-phone"
                    style={{
                      boxSizing: "border-box",
                      fontVariant: "normal",
                      display: "inline-block",
                      fontStyle: "normal",
                      fontSizeAdjust: "none",
                      fontLanguageOverride: "normal",
                      fontKerning: "auto",
                      fontOpticalSizing: "auto",
                      fontFeatureSettings: "normal",
                      fontVariationSettings: "normal",
                      fontWeight: "normal",
                      fontStretch: "normal",
                      lineHeight: 1,
                      fontSize: "inherit",
                      textRendering: "auto",
                      WebkitFontSmoothing: "antialiased",
                      width: "1.28571em",
                      textAlign: "center",
                      fontFamily: "FontAwesome",
                    }}
                  />
                </a>
                <a
                  href="https://wa.me/916357077743"
                  target="_blank"
                  style={{
                    boxSizing: "border-box",
                    textDecoration: "none",
                    color: "rgb(173, 181, 189)",
                  }}
                >
                  <i
                    className="fa fa-fw fa-whatsapp"
                    style={{
                      boxSizing: "border-box",
                      fontVariant: "normal",
                      display: "inline-block",
                      fontStyle: "normal",
                      fontSizeAdjust: "none",
                      fontLanguageOverride: "normal",
                      fontKerning: "auto",
                      fontOpticalSizing: "auto",
                      fontFeatureSettings: "normal",
                      fontVariationSettings: "normal",
                      fontWeight: "normal",
                      fontStretch: "normal",
                      lineHeight: 1,
                      fontSize: "inherit",
                      textRendering: "auto",
                      WebkitFontSmoothing: "antialiased",
                      width: "1.28571em",
                      textAlign: "center",
                      fontFamily: "FontAwesome",
                    }}
                  />
                </a>
              </div> */}

            </div>
          </div>
        </div>

        <div
          className="o_footer_copyright o_not_editable"
          style={{
            boxSizing: "border-box",
            backgroundImage: "none",
            backgroundColor: "rgb(26, 28, 36)",
            color: "rgb(255, 255, 255)",
          }}
        >
          <div
            className="container py-3 text-center"
            style={{
              boxSizing: "border-box",
              width: "100%",
              paddingRight: "calc(32px * .5)",
              paddingLeft: "calc(32px * .5)",
              marginRight: "auto",
              marginLeft: "auto",
              maxWidth: "1320px",
              paddingTop: "1rem",
              paddingBottom: "1rem",
              textAlign: "center",
            }}
          >

            <a
              className="small"
              href="https://www.odoo.com/app/website"
              style={{
                boxSizing: "border-box",
                textDecoration: "none",
                color: "rgb(173, 181, 189)",
                fontSize: "0.875rem",
                fontWeight: 500,
                display: "inline-flex", // Locks them on the same line
                alignItems: "center",   // Centers them vertically
                gap: "5px",             // Replaces the marginLeft hack
              }}
            >
              Website made with
              <img
                src="/images/logo.webp"
                alt="Qvoo"
                width={47}
                height={15}
                className="o_footer_logo_img invert"
                loading="lazy"
              />
            </a>

          </div>
        </div>

      </footer>
    </>
  );
}
