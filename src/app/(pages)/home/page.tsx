"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import FeatureRow from "@/components/FeatureRow";
import FeaturesGrid from "@/components/FeaturesGrid";
import RelatedApps from "@/components/RelatedApps";
import Testimonial from "@/components/Testimonial";
import UsersMosaicSection from "@/components/UserMosaicSection";
import IndustrySection from "@/components/IndustrySection";
import Kaizen from "@/components/Kaizen";
import SixSigma from "@/components/SixSigma";
import Paperless from "@/components/Paperless";
import BarcodeSection from "@/components/BarcodeSection";
import PlanningSection from "@/components/PlanningSection";
import PersonaBubble from "@/components/PersonaBubble";

function useScrollAnimate() {
  useEffect(() => {
    const run = () => {
      const els = document.querySelectorAll<HTMLElement>(".o_animate:not(.o_animated)");
      if (!els.length) return;
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              (e.target as HTMLElement).classList.add("o_animated");
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -48px 0px" }
      );
      els.forEach((el) => io.observe(el));
      return () => io.disconnect();
    };
    // slight delay so dynamic components mount first
    const t = setTimeout(run, 50);
    return () => clearTimeout(t);
  }, []);
}

export default function HomePage() {
  useScrollAnimate();

  return (
    <>
      <Link className="o_skip_to_content" href="#wrap">Skip to Content</Link>
      <main id="wrap">
        {/* 1. Hero */}
        <HeroSection />

        <div className="relative flex justify-center items-center py-8 bg-[#f4f5f8]">
          <PersonaBubble text="Check out MES in action!" />
        </div>

        {/* 2. Real-time Simulated Operations */}
        <FeatureRow />
        {/* <FeatureRow
          heading={
            <>
              <div className="col-lg-6 offset-lg-4">
                <Image src="https://odoocdn.com/openerp_website/static/src/img/arrows/grey_arrow_dot_02.svg" height={120} width={28} className="o_rtl_flip mx-auto mb-4" alt="" loading="lazy" />
              </div>

              <h2 className="display-2">
                <span className="x_wd_green_highlight_03">Real-time</span> simulated operations
              </h2>
            </>
          }
          body={
            <>
              <p><strong>Simulate manufacturing orders</strong> with real-time capacity planning, components availability, and cost control.</p>
              <p style={{ marginTop: "1rem" }}>Get just-in-time replenishment propositions and choose how to fulfill parts: make or buy, sub-contract, deliver from another warehouse, etc.</p>
            </>
          }
          imgSrc="https://odoocdn.com/openerp_website/static/src/img/apps/manufacturing/operations.webp"
          imgAlt="Real-time simulated operations"
        /> */}

        {/* 3. Planning / Gantt */}
        <PlanningSection />

        {/* 4. Record production / Barcode */}
        <BarcodeSection />

        {/* 5. Paperless Shop Floor */}
        <Paperless />

        {/* 6. Six-Sigma */}
        <SixSigma />

        {/* 7. Kaizen */}
        <Kaizen />

        {/* 8. Features Grid */}
        <FeaturesGrid />

        {/* 9. Related Apps */}
        <RelatedApps />

        {/* 10. Join 15M users */}
        {/* <section className="s_wd_users">
          <div className="container">
            <div className="s_wd_users_center o_animate">
              <h2 className="display-2">
                Join 15 million
                <span className="x_wd_display_sup">
                  <Image
                    src="https://odoocdn.com/openerp_website/static/src/img/graphics/arrow_circular_down_left.svg"
                    height={40} width={40} alt="" aria-hidden="true" loading="lazy"
                  />
                  happy
                </span>{" "}users
              </h2>
              <span className="users-sub">who grow their business with Qvoo</span>
            </div>
          </div>
        </section> */}
        <UsersMosaicSection />

        {/* 11. Testimonial */}
        <Testimonial />

        {/* 12. Industry 4.0 CTA */}
        <IndustrySection />

      </main>
    </>
  );
}
