"use client";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useCallback, useState } from "react";
import PersonaBubble from "./PersonaBubble";

// Modal (and its video embed) is only needed after a click — keep it out of the initial bundle.
const VideoModal = dynamic(() => import("./VideoModal"), { ssr: false });

export default function HeroSection() {
  const [videoOpen, setVideoOpen] = useState(false);

  const openVideo = useCallback(() => setVideoOpen(true), []);
  const closeVideo = useCallback(() => setVideoOpen(false), []);

  return (
    <>
      {/* ── Hero copy block ── */}
      <section className="s_wd_hero_banner s_wd_hero_banner--replica">
        <div className="container">
          <div className="hero-copy">
            <h1 className="hero-title-original">
              The <span className="hero-title-accent">future</span> of MRP
            </h1>

            <p className="hero-lead-original">
              MRP + MES + PLM + Quality + Shop Floor + Maintenance.
              <br />
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
                onClick={openVideo}
              >
                Meet an advisor
              </button>
            </div>

            <p className="hero-proof-original">
              Free, forever, with unlimited users. <Link href="#why">See why</Link>
            </p>
          </div>
        </div>
      </section>

      {/* ── Hero media (product screenshot + accent shapes) ── */}
      <section className="s_wd_hero_image s_wd_hero_media--replica">
        <div className="o_we_shape o_illustration_doodle_01" aria-hidden="true" />
        <div className="container hero-media-container">
          {/* Starburst accent (top-left) */}

          <Image
            src="/HeroStarburst.svg"
            alt=""
            className="hero-starburst"
            aria-hidden="true"
            width={96}
            height={96}
          />


          {/* Framed product screenshot */}
          <div className="hero_img_wrap">
            <div className="x_wd_corner_highlight">
              <div className="s_panel_video">
                <button
                  type="button"
                  className="btn_video_play"
                  aria-label="Watch Manufacturing demo video"
                  onClick={openVideo}
                >
                  <Image
                    src="/images/thumbnail.webp"
                    className="img-thumbnail"
                    alt="Manufacturing ERP screenshot"
                    width={1200}
                    height={720}
                    sizes="(max-width: 768px) 100vw, 1200px"
                    priority
                  />

                  <div className="x_wd_video_play_icon" aria-hidden="true">
                    {/* <svg viewBox="0 0 24 24" fill="var(--o-brand)" aria-hidden="true">
                      <path d="M8 5v14l11-7z" />
                    </svg> */}
                    <Image
                      alt="play icon"
                      width={48}
                      height={48}
                      src="https://odoocdn.com/openerp_website/static/src/img/icons/play.svg"
                      loading="lazy"
                    />
                  </div>

                </button>
              </div>
            </div>
          </div>

          {/* Persona bubble anchored below screenshot */}
          {/* <PersonaBubble text="Check out MES in action!" /> */}
        </div>
      </section>

      {videoOpen && <VideoModal onClose={closeVideo} />}
    </>
  );
}