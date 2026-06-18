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
      if (megaRef.current && !megaRef.current.contains(e.target as Node))
        setMegaOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const closeAll = () => { setMobileOpen(false); setMobileMegaOpen(false); };

  return (
    <header className={`o_main_header${scrolled ? " o_main_header--scrolled" : ""}`}>
      <div className="o_header_inner">

        {/* Logo */}
        <Link href="/" aria-label="Qvoo home" className="o_header_logo" onClick={closeAll}>
          <Image
            src="/images/QVOO_Logo.png"
            alt="Qvoo"
            width={120}
            height={40}
            priority
            style={{ objectFit: "contain", height: "40px", width: "auto" }}
          />
        </Link>

        {/* ── Desktop nav (single row, hidden below 1024px) ── */}
        <nav className="o_desktop_nav" aria-label="Main navigation">
          <ul>
            {/* Manufacturing mega-menu trigger */}
            <li className="o_has_mega" ref={megaRef} onMouseLeave={() => setMegaOpen(false)}>
              <button
                className="o_nav_item"
                aria-expanded={megaOpen}
                aria-haspopup="true"
                onMouseEnter={() => setMegaOpen(true)}
                onClick={() => setMegaOpen(v => !v)}
              >
                Manufacturing
                <svg
                  className={`o_chevron${megaOpen ? " o_chevron--open" : ""}`}
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 4l4 4 4-4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              {megaOpen && <MegaMenu onClose={() => setMegaOpen(false)} />}
            </li>

            {/* Separator */}
            <li aria-hidden="true" className="o_nav_sep" />

            {/* Overview · Features · PLM · Maintenance · Quality */}
            {SUB_NAV_LINKS.map(l => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className={`o_nav_item${
                    l.label === "Overview" ? " o_nav_item--active" : ""
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* ── Desktop actions ── */}
        <div className="o_header_actions">
          <Link href="/web/login" className="o_signin_link">Sign in</Link>
          <Link
            href="/trial?selected_app=mrp"
            className="btn btn-primary btn-sm trial_link"
          >
            Try it free
          </Link>
        </div>

        {/* ── Mobile hamburger (hidden ≥1024px) ── */}
        <button
          className={`o_hamburger${mobileOpen ? " o_hamburger--open" : ""}`}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(v => !v)}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* ── Mobile drawer ── */}
      {mobileOpen && (
        <nav className="o_mobile_nav" aria-label="Mobile navigation">
          <ul>
            <li>
              <button
                className="o_nav_item o_nav_item--full"
                onClick={() => setMobileMegaOpen(v => !v)}
                aria-expanded={mobileMegaOpen}
              >
                Manufacturing
                <svg
                  className={`o_chevron${mobileMegaOpen ? " o_chevron--open" : ""}`}
                  width="14"
                  height="14"
                  viewBox="0 0 12 12"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 4l4 4 4-4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              {mobileMegaOpen && (
                <div className="o_mobile_mega_wrap">
                  <MegaMenu mobile onClose={closeAll} />
                </div>
              )}
            </li>

            {SUB_NAV_LINKS.map(l => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  onClick={closeAll}
                  className={`o_nav_item o_nav_item--full${
                    l.label === "Overview" ? " o_nav_item--active" : ""
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}

            <li>
              <Link
                href="/web/login"
                onClick={closeAll}
                className="o_nav_item o_nav_item--full"
              >
                Sign in
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
