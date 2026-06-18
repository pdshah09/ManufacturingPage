"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import MegaMenu from "./MegaMenu";
import { SUB_NAV_LINKS } from "@/data/nav";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const megaRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
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

  return (
    <header
      id="top"
      className={`o_main_header${scrolled ? " o_main_header--scrolled" : ""}`}
    >
      <div className="o_header_inner">
        {/* Logo — Qvoo_long */}
        <Link href="/" aria-label="Qvoo">
          <Image
            src="/images/QVOO_Logo.png"
            alt="Qvoo"
            width={160}
            height={90}
            loading="eager"
            priority
            style={{ width: "auto", height: "90px", objectFit: "contain" }}
          />
        </Link>

        {/* Mobile toggle */}
        <button
          className="o_mobile_menu_toggle"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M2 5h16M2 10h16M2 15h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          )}
        </button>

        {/* Primary nav */}
        <nav
          className={`o_primary_nav${mobileOpen ? " o_primary_nav--open" : ""}`}
          aria-label="Main navigation"
        >
          <ul>
            <li className="o_nav_has_dropdown" ref={megaRef}>
              <button
                className="o_nav_mega_btn"
                aria-expanded={megaOpen}
                aria-haspopup="true"
                onClick={() => setMegaOpen((v) => !v)}
                onMouseEnter={() => setMegaOpen(true)}
              >
                <span className="o_app_name_title">Manufacturing</span>
                <svg
                  className={`o_nav_chevron${megaOpen ? " o_nav_chevron--open" : ""}`}
                  width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"
                >
                  <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5"
                    strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {megaOpen && <MegaMenu />}
            </li>
            {SUB_NAV_LINKS.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className={l.href === "/app/manufacturing" ? "o_nav_active" : ""}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA buttons */}
        <ul className="o_header_buttons">
          <li>
            <Link href="/web/login" className="o_nav_link">Sign in</Link>
          </li>
          <li>
            <Link href="/trial?selected_app=mrp" className="btn btn-primary btn-sm trial_link">
              Try it free
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
