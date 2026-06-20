import Image from "next/image";
import PersonaBubble from "./PersonaBubble";

export default function BarcodeSection() {
    return (
        <>
            <section className="o_section pb-5 pb-lg-7 overflow-x-hidden custom-section">
    <div className="container custom-container">
        <div className="row align-items-center justify-content-between custom-row">
            <div className="col-lg-6 pb40 custom-col-left">
                <h2 className="display-2 mb-5 custom-heading">
                    <span className="x_wd_blue_highlight_02 custom-highlight">
                        Record
                    </span>{" "}
                    production and components
                </h2>
                <p className="custom-paragraph">
                    Use to process orders, accelerate operations, and reduce input errors.
                    Works right out of the box, blazing fast, and with no latency.
                </p>

                <div className="mt-16 pt-32 mx-32">
                    <PersonaBubble text="Works offline: No WiFi coverage issues!" />
                </div>
            </div>

            <div className="col-lg-6 x_wd_shape x_wd_shape_bottom x_wd_shape_rs text-center custom-col-right">
                <div className="custom-bg-shape" />
                
                <h5 className="display-5 text-o-color-8 custom-subheading">
                    Mobile barcode app
                </h5>
                
                <img
                    className="mx-auto rotate-320 o_rtl_no_rotate mb-3 custom-arrow"
                    width={60}
                    src="https://odoocdn.com/openerp_website/static/src/img/graphics/arrow_doodle_13.svg"
                    alt="arrow doodle"
                />
                
                <img
                    className="mx-auto w-50 barcode-img custom-app-img"
                    src="https://odoocdn.com/openerp_website/static/src/img/apps/manufacturing/barcode.webp"
                    alt="Mobile barcode app"
                />
            </div>
        </div>
    </div>
</section>
        </>
    );
}
