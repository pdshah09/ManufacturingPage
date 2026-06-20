import Image from "next/image";

export default function Paperless() {
    return (
        <>
            <section className="pb-5 pb-lg-7 paperless-section">
                <div className="container paperless-container">
                    <div className="row align-items-center justify-content-between paperless-row">
                        <div className="col-lg-6 position-relative order-2 order-lg-1 paperless-col paperless-col-img">
                        <img
                            className="img-thumbnail w-25 position-absolute mt-n7 ms-n7 d-none d-lg-inline paperless-thumbnail paperless-img-tl"
                            src="https://odoocdn.com/openerp_website/static/src/img/apps/manufacturing/become_paperless_03.webp"
                            alt="img1"
                        />
                        <img
                            className="img-thumbnail w-25 position-absolute start-50 bottom-0 ms-5 mb-n8 d-none d-lg-inline paperless-thumbnail paperless-img-br"
                            src="https://odoocdn.com/openerp_website/static/src/img/apps/manufacturing/become_paperless_01.webp"
                            alt="img2"
                        />
                        <img
                            className="img-thumbnail w-100 w-lg-75 paperless-thumbnail paperless-img-main"
                            src="https://odoocdn.com/openerp_website/static/src/img/apps/manufacturing/become_paperless_02.webp"
                            alt="Shop Floor Dashboard"
                        />
                        </div>
                        <div className="col-lg-6 col-xl-5 order-1 order-lg-2 paperless-col paperless-col-text">
                        <h2 className="display-2 mb-5 paperless-heading">
                            Become a <span className="x_wd_red_highlight_scribble_01 paperless-highlight">paperless</span> company
                        </h2>
                        <p className="paperless-paragraph">
                            <strong className="paperless-strong">
                            The Shop Floor app helps streamline your manufacturing line.
                            </strong>{" "}
                            Through the tablet-optimized dashboard, you can organize workers, workcenters, worksheets, quality tests, and much more.
                        </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

/*
<section className="o_section o_section">
        <div className="container">
            <div className="row row-feature">
                <div className="col-media col-media--overlap o_animate o_animate--slide-left" style={{ position: "relative" }}>
                <Image
                    src="https://odoocdn.com/openerp_website/static/src/img/apps/manufacturing/become_paperless_03.webp"
                    className="img-thumbnail paperless-float paperless-float--tl"
                    alt="" loading="lazy" width={200} height={160}
                />
                <Image
                    src="https://odoocdn.com/openerp_website/static/src/img/apps/manufacturing/become_paperless_01.webp"
                    className="img-thumbnail paperless-float paperless-float--br"
                    alt="" loading="lazy" width={200} height={160}
                />
                <Image
                    src="https://odoocdn.com/openerp_website/static/src/img/apps/manufacturing/become_paperless_02.webp"
                    className="img-thumbnail paperless-main" alt="Paperless shop floor"
                    width={600} height={400} loading="lazy" decoding="async"
                />
                </div>
                <div className="col-text o_animate o_animate--slide-right o_animate--delay-1">
                <h2 className="display-2">
                    Become a <span className="x_wd_red_highlight_scribble_01">paperless</span> company
                </h2>
                <p><strong>The Shop Floor app helps streamline your manufacturing line.</strong> Through the tablet-optimized dashboard, you can organize workers, workcenters, worksheets, quality tests, and much more.</p>
                </div>
            </div>
        </div>
    </section>
*/