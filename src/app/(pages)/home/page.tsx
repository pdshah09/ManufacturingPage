import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import FeatureRow from "@/components/FeatureRow";
import PersonaBubble from "@/components/PersonaBubble";
import FeaturesGrid from "@/components/FeaturesGrid";
import RelatedApps from "@/components/RelatedApps";
import Testimonial from "@/components/Testimonial";

export default function HomePage() {
  return (
    <>
      <Link className="o_skip_to_content" href="#wrap">Skip to Content</Link>

      <main id="wrap">
        {/* 1–3: Hero + video trigger + persona */}
        <HeroSection />

        {/* 4. Real-time Simulated Operations */}
        <FeatureRow
          reverse
          heading={
            <>
              <Image
                src="https://odoocdn.com/openerp_website/static/src/img/arrows/grey_arrow_dot_02.svg"
                height={120} width={80} className="feature-arrow" alt="" aria-hidden="true" loading="lazy"
              />
              <h2 className="display-2">
                <span className="x_wd_green_highlight_03">Real-time</span> simulated operations
              </h2>
            </>
          }
          body={
            <>
              <p><strong>Simulate manufacturing orders</strong> with real-time capacity planning, components availability, and cost control.</p>
              <p>Get just-in-time replenishment propositions and choose how to fulfill parts: make or buy, sub-contract, deliver from another warehouse, etc.</p>
            </>
          }
          imgSrc="https://odoocdn.com/openerp_website/static/src/img/apps/manufacturing/operations.webp"
          imgAlt="Real-time simulated operations"
        />

        {/* 5. Planning / Gantt */}
        <section className="o_section text-center-lg">
          <div className="container">
            <Image src="https://odoocdn.com/openerp_website/static/src/img/icons/calendar.svg"
              height={100} width={100} className="section-icon rotate-10" alt="" aria-hidden="true" loading="lazy" />
            <h2 className="display-2">Planning that puts you ahead of schedule</h2>
            <p><strong>Schedule manufacturing orders</strong> and plan resources with finite capacity planning.<br />Fine tune easily with the Gantt chart.</p>
            <div className="img-wide-wrap">
              <Image src="https://odoocdn.com/openerp_website/static/src/img/apps/manufacturing/schedule.webp"
                className="img-thumbnail" alt="Gantt chart planning"
                width={1000} height={560} loading="lazy" decoding="async" />
            </div>
          </div>
        </section>

        {/* 6. Record production / Barcode */}
        <section className="o_section overflow-x-hidden">
          <div className="container">
            <div className="row row-feature">
              <div className="col-text">
                <h2 className="display-2">
                  <span className="x_wd_blue_highlight_02">Record</span> production and components
                </h2>
                <p>Use to process orders, accelerate operations, and reduce input errors. Works right out of the box, blazing fast, and with no latency.</p>
                <PersonaBubble text="Works offline: No WiFi coverage issues!" inline />
              </div>
              <div className="col-media text-center">
                <h5 className="display-5 text-o-color-8">Mobile barcode app</h5>
                <Image src="https://odoocdn.com/openerp_website/static/src/img/graphics/arrow_doodle_13.svg"
                  className="rotate-320" width={60} height={60} alt="" aria-hidden="true" loading="lazy" />
                <Image src="https://odoocdn.com/openerp_website/static/src/img/apps/manufacturing/barcode.webp"
                  className="barcode-img" alt="Mobile barcode app"
                  width={320} height={560} loading="lazy" decoding="async" />
              </div>
            </div>
          </div>
        </section>

        {/* 7. Paperless Shop Floor */}
        <section className="o_section">
          <div className="container">
            <div className="row row-feature row-reverse">
              <div className="col-media col-media--overlap">
                <Image src="https://odoocdn.com/openerp_website/static/src/img/apps/manufacturing/become_paperless_03.webp"
                  className="img-thumbnail paperless-float paperless-float--tl" alt="" loading="lazy" width={200} height={160} />
                <Image src="https://odoocdn.com/openerp_website/static/src/img/apps/manufacturing/become_paperless_01.webp"
                  className="img-thumbnail paperless-float paperless-float--br" alt="" loading="lazy" width={200} height={160} />
                <Image src="https://odoocdn.com/openerp_website/static/src/img/apps/manufacturing/become_paperless_02.webp"
                  className="img-thumbnail paperless-main" alt="Paperless shop floor"
                  width={600} height={400} loading="lazy" decoding="async" />
              </div>
              <div className="col-text">
                <h2 className="display-2">
                  Become a <span className="x_wd_red_highlight_scribble_01">paperless</span> company
                </h2>
                <p><strong>The Shop Floor app helps streamline your manufacturing line.</strong> Through the tablet-optimized dashboard, you can organize workers, workcenters, worksheets, quality tests, and much more.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Six-Sigma */}
        <section className="o_section">
          <div className="container">
            <Image src="https://odoocdn.com/openerp_website/static/src/img/icons/tick.svg"
              width={100} height={100} className="section-icon mx-auto" alt="" aria-hidden="true" loading="lazy" />
            <h2 className="display-2 text-center-lg">
              Get ready for <span className="x_wd_green_highlight_scribble_03">Six-Sigma</span> level 6!
            </h2>
            <div className="row row-feature">
              <div className="col-text col-text--narrow">
                <p>Get statistical analysis of quality issues, and set control point instantly available in the shop floor with instructions.</p>
                <p>Workers can send feedback through the app as they notice waste in the manufacturing process. When ideas and information flow that smoothly, quality is raised to another level...</p>
              </div>
              <div className="col-media col-media--wide">
                <Image src="https://odoocdn.com/openerp_website/static/src/img/apps/manufacturing/sigma_6.webp"
                  className="img-thumbnail" alt="Six Sigma quality control"
                  width={800} height={480} loading="lazy" decoding="async" />
              </div>
            </div>
          </div>
        </section>

        {/* 9. Kaizen */}
        <section className="o_section">
          <div className="container">
            <h2 className="display-2 text-center-lg">
              The perfect tool for <span className="x_wd_blue_highlight_scribble_05">Kaizen</span>
            </h2>
            <Image src="https://odoocdn.com/openerp_website/static/src/img/apps/manufacturing/kaizen.svg"
              className="w-100" alt="Kaizen continuous improvement diagram"
              width={1200} height={400} loading="lazy" decoding="async" />
          </div>
        </section>

        {/* 10. Features Grid */}
        <FeaturesGrid />

        {/* 11. Related Apps */}
        <RelatedApps />

        {/* 12. Join 15M users */}
        <section className="s_wd_users">
          <div className="container">
            <div className="s_wd_users_center">
              <h2 className="display-2">
                Join 15 million
                <span className="x_wd_display_sup">
                  <Image src="https://odoocdn.com/openerp_website/static/src/img/graphics/arrow_circular_down_left.svg"
                    height={40} width={40} alt="" aria-hidden="true" loading="lazy" />
                  happy
                </span>{" "}users
              </h2>
              <span className="users-sub">who grow their business with Odoo</span>
            </div>
          </div>
        </section>

        {/* 13. Testimonial */}
        <Testimonial />

        {/* 14. Industry 4.0 CTA */}
        <section className="s_wd_call_to_action">
          <div className="container">
            <h3 className="display-1">
              <span className="x_wd_display_fireworks_01">On the way</span><br /> to Industry 4.0
            </h3>
            <Link className="btn btn-primary btn-lg" href="/trial?selected_app=mrp">Start now - It&apos;s free</Link>
            <Image src="https://odoocdn.com/openerp_website/static/src/img/arrows/secondary_arrow_sm_01.svg"
              className="cta-arrow" alt="" aria-hidden="true" width={40} height={40} loading="lazy" />
            <small>No credit card required<br />Instant access</small>
          </div>
        </section>
      </main>
    </>
  );
}
