import Image from "next/image";
import Link from "next/link";

export default function IndustrySection() {
  return (
    <section className="s_wd_call_to_action">
          <div className="container">
            
            <h3 className="display-1 o_animate">
              <Image
                      src="/indusl.svg"
                      height={70}
                      width={60}
                      className="position-absolute top-0 translate-middle d-none d-md-inline"
                      alt="quote"
                      aria-hidden="true"
                      loading="lazy"
            />
            <Image
                      src="/indusr.svg"
                      height={70}
                      width={60}
                      className="position-absolute left-0 translate-middle d-none d-md-inline"
                      alt="quote"
                      aria-hidden="true"
                      loading="lazy"
            />
            
              <span className="x_wd_display_fireworks_01">On the way</span><br /> to Industry 4.0
            </h3>
            <div className="o_animate o_animate--delay-1">
              <Link className="btn btn-primary btn-lg" href="/trial?selected_app=mrp">
                Start now - It&apos;s free
              </Link>
            </div>
            <Image
              src="https://odoocdn.com/openerp_website/static/src/img/arrows/secondary_arrow_sm_01.svg"
              className="cta-arrow" alt="" aria-hidden="true" width={40} height={40} loading="lazy"
            />
            <small>No credit card required<br />Instant access</small>
          </div>
        </section>
  );
}
