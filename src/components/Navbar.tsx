"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import MegaMenu from "./MegaMenu";
import { SUB_NAV_LINKS } from "@/data/nav";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileMegaOpen, setMobileMegaOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const megaRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (megaRef.current && !megaRef.current.contains(e.target as Node)) {
        setMegaOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const closeAll = () => {
    setMobileOpen(false);
    setMobileMegaOpen(false);
  };

  return (
    <header id="top" className={`o_main_header${scrolled ? " o_main_header--scrolled" : ""}`}>
      <div className="o_header_inner o_header_inner--replica">

        {/* ── Logo ── */}
        <Link href="/" aria-label="Qvoo" className="o_header_logo" onClick={closeAll}>
          <Image
            src="/images/QVOO_Logo.png" alt="Qvoo"
            width={140} height={80} loading="eager" priority
            style={{ objectFit: "contain" }}
          />
        </Link>

        {/* ── Desktop nav (hidden below 1024px) ── */}
        <nav className="o_primary_nav_desktop" aria-label="Main navigation">
          <ul>
            {/* Manufacturing trigger */}
            <li className="o_nav_has_dropdown" ref={megaRef}
              onMouseLeave={() => setMegaOpen(false)}>
              <button
                className="o_nav_mega_btn"
                aria-expanded={megaOpen}
                aria-haspopup="true"
                onMouseEnter={() => setMegaOpen(true)}
                onClick={() => setMegaOpen((v) => !v)}
              >
                <span className="o_app_name_title">Manufacturing</span>
                <svg
                  className={`o_nav_chevron${megaOpen ? " o_nav_chevron--open" : ""}`}
                  width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5"
                    strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {megaOpen && <MegaMenu onClose={() => setMegaOpen(false)} />}
            </li>

            {/* Overview · Features · PLM · Maintenance · Quality */}
            {SUB_NAV_LINKS.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className={l.label === "Overview" ? "o_nav_active" : ""}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* ── Desktop CTA: Sign in + Try it free ── */}
        <ul className="o_header_buttons">
          <li className="o_header_signin_item">
            <Link href="/web/login" className="o_nav_link o_nav_signin">Sign in</Link>
          </li>
          <li>
            <Link href="/trial?selected_app=mrp" className="btn btn-primary btn-sm trial_link">
              Try it free
            </Link>
          </li>
        </ul>

        {/* ── Mobile hamburger ── */}
        <button
          className={`o_mobile_menu_toggle${mobileOpen ? " o_mobile_menu_toggle--open" : ""}`}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* ── Mobile drawer ── */}
      <nav
        className={`o_primary_nav${mobileOpen ? " o_primary_nav--open" : ""}`}
        aria-label="Mobile navigation"
        aria-hidden={!mobileOpen}
        style={{ display: mobileOpen ? "flex" : "none" }}
      >
        <ul>
          <li>
            <button
              className="o_nav_mega_btn"
              style={{ width: "100%", justifyContent: "space-between" }}
              onClick={() => setMobileMegaOpen((v) => !v)}
              aria-expanded={mobileMegaOpen}
            >
              <span className="o_app_name_title">Manufacturing</span>
              <svg
                className={`o_nav_chevron${mobileMegaOpen ? " o_nav_chevron--open" : ""}`}
                width="14" height="14" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5"
                  strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            {mobileMegaOpen && (
              <div className="o_mobile_mega">
                <MegaMenu mobile onClose={closeAll} />
              </div>
            )}
          </li>

          {SUB_NAV_LINKS.map((l) => (
            <li key={l.label}>
              <Link
                href={l.href}
                onClick={closeAll}
                className={l.label === "Overview" ? "o_nav_active" : ""}
              >
                {l.label}
              </Link>
            </li>
          ))}

          <li>
            <Link href="/web/login" onClick={closeAll}
              className="o_nav_mega_btn" style={{ width: "100%" }}>
              Sign in
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
