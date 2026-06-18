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
      {videoOpen && <VideoModal onClose={() => setVideoOpen(false)} />}

      {/* Hero Banner */}
      <section className="s_wd_hero_banner">
        <div className="container">
          <h1 className="display-1">
            The <span className="text-o-color-8">future</span> of MRP
          </h1>
          <div className="hero_lead_row">
            <div>
              <p className="lead">
                MRP + MES + PLM + Quality + Shop Floor + Maintenance.
                <br />
                All you need on one single platform, fast and easy to use.
              </p>
              <div className="hero_cta_group">
                <Link className="btn btn-primary" href="/trial?selected_app=mrp">
                  Start now - It&apos;s free
                </Link>
                <div className="o_schedule_demo">
                  <div className="dropdown">
                    <button className="btn btn-light dropdown-toggle" type="button" aria-expanded="false">
                      Meet an advisor
                    </button>
                    <ul className="dropdown-menu" role="menu">
                      <li>
                        <Link className="dropdown-item" href="/appointment/197" target="_blank" rel="noopener noreferrer">
                          Demo with an Expert (1–250 employees)
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="/appointment/3812" target="_blank" rel="noopener noreferrer">
                          Project Assessment (250+ employees)
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <small className="hero_small">Free, forever, with unlimited users.</small>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image / Video Trigger */}
      <section className="s_wd_hero_image">
        <div className="o_we_shape o_illustration_doodle_01" aria-hidden="true" />
        <div className="container">
          <div className="hero_img_wrap">
            <div className="x_wd_corner_highlight s_panel_video">
              <button
                type="button"
                className="btn_video_play"
                aria-label="Watch Qvoo Manufacturing showreel"
                onClick={() => setVideoOpen(true)}
              >
                <Image
                  src="https://odoocdn.com/openerp_website/static/src/img/apps/manufacturing/hero_image.webp"
                  className="img-thumbnail"
                  alt="Qvoo Manufacturing app interface"
                  width={1100}
                  height={620}
                  loading="eager"
                  priority
                  decoding="async"
                />
                <Image
                  src="https://odoocdn.com/openerp_website/static/src/img/icons/play.svg"
                  className="x_wd_video_play_icon"
                  alt=""
                  aria-hidden="true"
                  width={80}
                  height={80}
                  loading="eager"
                />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Persona Bubble */}
      <PersonaBubble text="Check out MES in action!" />
    </>
  );
}
