import Image from "next/image";
import Link from "next/link";

export default function IndustrySection() {
  return (
    <section className="s_wd_call_to_action o_animate" style={{ textAlign: "center" }}>
      <div className="container" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>

        {/* Applied the custom class to the h3 directly */}
        <h3 className="display-1 x_wd_fireworks_heading">
          On the way<br />to Industry 4.0
        </h3>

        <div className="o_animate o_animate--delay-1">
          <Link className="btn btn-primary btn-lg" href="/trial?selected_app=mrp">
            Start now - It&apos;s free
          </Link>
        </div>

        <Image
          src="https://odoocdn.com/openerp_website/static/src/img/arrows/secondary_arrow_sm_01.svg"
          className="cta-arrow w-[29px] h-[30px]"
          alt=""
          aria-hidden="true"
          width={29}
          height={15}
          loading="lazy"
        />

        <small>No credit card required<br />Instant access</small>
      </div>
    </section>
  );
}
