import Image from "next/image";

export default function SixSigma() {
    return (
        <section className="o_section no-padding-block">
            <div className="container">
                <Image
                    src="https://odoocdn.com/openerp_website/static/src/img/icons/tick.svg"
                    width={100} height={100}
                    className="section-icon mx-auto o_animate"
                    alt="" aria-hidden="true" loading="lazy"
                />
                <h2 className="display-2 text-center-lg o_animate o_animate--delay-1">
                    Get ready for <span className="x_wd_green_highlight_scribble_03">Six-Sigma</span> level 6!
                </h2>
                <div className="row row-feature">
                    <div className="col-text col-text--narrow o_animate o_animate--slide-left o_animate--delay-1">
                        <p>Get statistical analysis of quality issues, and set control point instantly available in the shop floor with instructions.</p>
                        <p style={{ marginTop: "1rem" }}>Workers can send feedback through the app as they notice waste in the manufacturing process. When ideas and information flow that smoothly, quality is raised to another level...</p>
                    </div>
                    <div className="col-media col-media--wide o_animate o_animate--slide-right o_animate--delay-2">
                        <Image
                            src="https://odoocdn.com/openerp_website/static/src/img/apps/manufacturing/sigma_6.webp"
                            className="img-thumbnail" alt="Six Sigma quality control"
                            width={800} height={480} loading="lazy" decoding="async"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
