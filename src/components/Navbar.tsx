"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import MegaMenu from "./MegaMenu";
import { SUB_NAV_LINKS } from "@/data/nav";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen]     = useState(false);
  const [mobileMegaOpen, setMobileMegaOpen] = useState(false);
  const [scrolled, setScrolled]     = useState(false);
  const megaRef = useRef<HTMLLIElement>(null);

  /* ── scroll shadow ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── close mega on outside click (desktop) ── */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (megaRef.current && !megaRef.current.contains(e.target as Node)) {
        setMegaOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  /* ── lock body scroll when mobile drawer open ── */
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
      <div className="o_header_inner">

        {/* ── Logo ── */}
        <Link href="/" aria-label="Qvoo" className="o_header_logo" onClick={closeAll}>
          <Image
            src="/images/QVOO_Logo.png" alt="Qvoo"
            width={140} height={80} loading="eager" priority
            style={{ objectFit: "contain" }}
          />
        </Link>

        {/* ── Desktop primary nav (hidden on mobile) ── */}
        <nav className="o_primary_nav" aria-label="Main navigation">
          <ul>
            {/* Manufacturing + mega-menu */}
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

            {/* Sub-nav links: Overview, Features, PLM, Maintenance, Quality */}
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

        {/* ── CTA: Sign in + Try it free ── */}
        <ul className="o_header_buttons">
          <li className="hidden lg:flex">
            <Link href="/web/login" className="o_nav_link o_nav_signin">Sign in</Link>
          </li>
          <li>
            <Link href="/trial?selected_app=mrp" className="btn btn-primary btn-sm trial_link">
              Try it free
            </Link>
          </li>
        </ul>

        {/* ── Mobile hamburger (shows on <1024px) ── */}
        <button
          className="o_mobile_menu_toggle"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
              <path d="M4 4l14 14M18 4L4 18" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
              <path d="M2 5.5h18M2 11h18M2 16.5h18" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
            </svg>
          )}
        </button>
      </div>

      {/* ══════════════════════════════════════
          MOBILE DRAWER
      ══════════════════════════════════════ */}
      <nav
        className={`o_primary_nav${mobileOpen ? " o_primary_nav--open" : ""}`}
        aria-label="Mobile navigation"
        aria-hidden={!mobileOpen}
        style={{ display: mobileOpen ? "flex" : "none" }}
      >
        <ul>
          {/* Manufacturing accordion */}
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

            {/* Inline mega-menu for mobile */}
            {mobileMegaOpen && (
              <div className="o_mobile_mega">
                <MegaMenu mobile onClose={closeAll} />
              </div>
            )}
          </li>

          {/* Overview / Features / PLM / Maintenance / Quality */}
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

          {/* Sign in inside mobile drawer */}
          <li>
            <Link
              href="/web/login"
              onClick={closeAll}
              className="o_nav_mega_btn"
              style={{ width: "100%" }}
            >
              Sign in
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
