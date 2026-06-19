import Image from "next/image";

export default function Paperless() {
  return (
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
  );
}
