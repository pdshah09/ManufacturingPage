"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import VideoModal from "./VideoModal";
import PersonaBubble from "./PersonaBubble";

export default function HeroSection() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <>
      {/* Hero banner */}
      <section className="s_wd_hero_banner">
        <div className="container">
          <h1 className="display-1">
            The <span className="x_wd_display_underline">future</span> of MRP
          </h1>
          <p className="lead" style={{ marginBottom: "0.5rem" }}>
            MRP + MES + PLM + Quality + Shop Floor Maintenance.<br className="hidden sm:block" />
            All you need on one single platform, fast and easy to use.
          </p>
          <div className="hero_cta_group">
            <div className="dropdown o_schedule_demo">
              <button className="btn btn-primary" aria-haspopup="true">
                Start now - It&apos;s free
                <svg width="14" height="14" viewBox="0 0 12 12" fill="none" aria-hidden="true"
                  style={{ marginLeft: "0.375rem" }}>
                  <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5"
                    strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <ul className="dropdown-menu" role="menu">
                <li><Link href="/trial?selected_app=mrp" className="dropdown-item" role="menuitem">Start for free</Link></li>
                <li><Link href="/contactus" className="dropdown-item" role="menuitem">Schedule a demo</Link></li>
              </ul>
            </div>
            <Link href="/app/manufacturing" className="btn btn-light">See a demo</Link>
          </div>
          <small className="hero_small">No credit card required. Instant access.</small>
        </div>
      </section>

      {/* Hero image + video */}
      <section className="s_wd_hero_image">
        <div className="o_we_shape o_illustration_doodle_01" aria-hidden="true" />
        <div className="container">
          <div className="hero_img_wrap">
            <div className="x_wd_corner_highlight">
              <div className="s_panel_video">
                <button
                  className="btn_video_play"
                  aria-label="Watch Manufacturing demo video"
                  onClick={() => setVideoOpen(true)}
                >
                  <Image
                    src="https://odoocdn.com/openerp_website/static/src/img/apps/manufacturing/screen.webp"
                    className="img-thumbnail"
                    alt="Manufacturing ERP screenshot"
                    width={1200} height={720}
                    loading="eager" decoding="async" priority
                  />
                  <div className="x_wd_video_play_icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="var(--o-brand)" aria-hidden="true">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Persona bubble */}
      <div className="container" style={{ position: "relative" }}>
        <PersonaBubble text="Check out MES in action!" />
      </div>

      {videoOpen && <VideoModal onClose={() => setVideoOpen(false)} />}
    </>
  );
}
