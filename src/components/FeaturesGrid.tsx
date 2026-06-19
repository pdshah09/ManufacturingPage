"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

const FEATURES = [
  {
    title: "Master production schedule",
    body: "The MPS is perfect for your S&OP meeting, to align objectives of sales people and the manufacturing department.",
    img: "https://odoocdn.com/openerp_website/static/src/img/apps/manufacturing/features_01.webp",
    overflow: true,
  },
  {
    title: "Leverage by-products",
    body: "Produce residual products by adding by-products to bills of materials.",
  },
  {
    title: "Powerful yet simple",
    body: "Although Odoo has all the features you need to deploy a modern manufacturing line, it remains very simple to use, and does not require advanced trainings for workers.",
  },
  {
    title: "Up/down stream traceability",
    body: "Track components, or manufacture in batches (lots) or serial numbers. Get a clear traceability of all operations in just a click.",
  },
  {
    title: "IoT integrations",
    body: "Connect barcode printers, automate quality measures, or setup your machine from the shop floor app, using the IoT box.",
  },
];

export default function FeaturesGrid() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll<HTMLElement>(".s_wd_features_item");
    if (!cards) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("o_animated");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
    );
    cards.forEach((c) => io.observe(c));
    return () => io.disconnect();
  }, []);

  return (
    <section className="s_wd_features">
      <div className="container">
        <h2 className="display-2 o_animate">
          All the <span className="x_wd_display_circle">features</span>
          <br />
          done <span className="x_wd_display_underline">right</span>
          <span className="text-o-color-8">.</span>
        </h2>
        <div className="features-grid" ref={gridRef}>
          <div className="features-col">
            {FEATURES.slice(0, 2).map((f, i) => (
              <div
                key={f.title}
                className={`s_wd_features_item o_animate o_animate--delay-${i + 1}${f.overflow ? " s_wd_features_item--overflow" : ""
                  }`}
              >
                <div className="s_wd_features_icon">
                  <Image
                    src="https://odoocdn.com/openerp_website/static/src/img/icons/yellow_star.svg"
                    alt="" loading="lazy" width={32} height={32}
                  />
                </div>
                <h4 className="s_wd_features_title">{f.title}</h4>
                <p>{f.body}</p>
                {f.img && (
                  <Image
                    src={f.img}
                    className="img-thumbnail features-preview"
                    alt={f.title}
                    width={600} height={340} loading="lazy"
                  />
                )}
              </div>
            ))}
          </div>

          <div className="features-col">
            {FEATURES.slice(2).map((f, i) => (
              <div
                key={f.title}
                className={`s_wd_features_item o_animate o_animate--delay-${i + 1}`}
              >
                <div className="s_wd_features_icon">
                  <Image
                    src="https://odoocdn.com/openerp_website/static/src/img/icons/yellow_star.svg"
                    alt="" loading="lazy" width={32} height={32}
                  />
                </div>
                <h4 className="s_wd_features_title">{f.title}</h4>
                <p>{f.body}</p>
              </div>
            ))}
          </div>
        </div>

        <Link
          className="features-all-link"
          href="https://www.odoo.com/app/manufacturing-features"
        >
          <span className="features-all-text">See all features</span>
          <Image
            className="features-all-image"
            alt="arrow"
            height={20}
            width={40}
            src="https://odoocdn.com/openerp_website/static/src/img/arrows/secondary_arrow_sm_03.svg"
          />
        </Link>

      </div>

    </section>
  );
}
