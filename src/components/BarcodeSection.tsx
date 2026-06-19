import Image from "next/image";
import PersonaBubble from "./PersonaBubble";

export default function BarcodeSection() {
  return (
    <section className="o_section" style={{ overflow: "hidden" }}>
        <div className="container">
            <div className="row row-feature">
                <div className="col-text o_animate o_animate--slide-left">
                <h2 className="display-2">
                    <span className="x_wd_blue_highlight_02">Record</span> production and components
                </h2>
                <p>Use to process orders, accelerate operations, and reduce input errors. Works right out of the box, blazing fast, and with no latency.</p>
                <PersonaBubble text="Works offline: No WiFi coverage issues!" inline />
                </div>
                <div className="col-media text-center-lg o_animate o_animate--slide-right o_animate--delay-1">
                <h5 className="display-5">Mobile barcode app</h5>
                <Image
                    src="https://odoocdn.com/openerp_website/static/src/img/graphics/arrow_doodle_13.svg"
                    className="rotate-320" width={60} height={60} alt="" aria-hidden="true" loading="lazy"
                    style={{ marginInline: "auto", marginBottom: "0.5rem" }}
                />
                <Image
                    src="https://odoocdn.com/openerp_website/static/src/img/apps/manufacturing/barcode.webp"
                    className="barcode-img" alt="Mobile barcode app"
                    width={320} height={560} loading="lazy" decoding="async"
                />
                </div>
            </div>
        </div>
    </section>
  );
}
