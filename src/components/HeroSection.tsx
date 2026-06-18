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
      {/* ── Hero copy block ── */}
      <section className="s_wd_hero_banner s_wd_hero_banner--replica">
        <div className="container">
          <div className="hero-copy">

            <h1 className="hero-title-original">
              The{" "}
              <span className="hero-title-accent">future</span>
              {" "}of MRP
            </h1>

            <p className="hero-lead-original">
              MRP + MES + PLM + Quality + Shop Floor + Maintenance.<br />
              All you need on one single platform, fast and easy to use.
            </p>

            <div className="hero-cta-original">
              <Link
                className="btn btn-primary btn-lg hero-primary-btn"
                href="/trial?selected_app=mrp"
              >
                Start now - It&apos;s free
              </Link>
              <button
                type="button"
                className="btn btn-light btn-lg hero-secondary-btn"
                onClick={() => setVideoOpen(true)}
              >
                Meet an advisor
              </button>
            </div>

            <p className="hero-proof-original">
              Free, forever, with unlimited users.{" "}
              <Link href="#why">See why</Link>
            </p>

          </div>
        </div>
      </section>

      {/* ── Hero media (product screenshot + accent shapes) ── */}
      <section className="s_wd_hero_image s_wd_hero_media--replica">
        <div className="o_we_shape o_illustration_doodle_01" aria-hidden="true" />
        <div className="container" style={{ position: "relative" }}>

          {/* Starburst accent (top-left) */}
          <div className="hero-starburst" aria-hidden="true">
            <span /><span /><span /><span />
          </div>

          {/* Framed product screenshot */}
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
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Persona bubble anchored below screenshot */}
          <PersonaBubble text="Check out MES in action!" />
        </div>
      </section>

      {videoOpen && <VideoModal onClose={() => setVideoOpen(false)} />}
    </>
  );
}
