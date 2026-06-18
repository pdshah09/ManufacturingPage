import Image from "next/image";
import Link from "next/link";

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
  return (
    <section className="s_wd_features">
      <div className="container">
        <h2 className="display-2">
          All the <span className="x_wd_display_circle">features</span>
          <br />
          done <span className="x_wd_display_underline">right</span>
          <span className="text-o-color-8">.</span>
        </h2>
        <div className="features-grid">
          <div className="features-col">
            {FEATURES.slice(0, 2).map((f) => (
              <div
                key={f.title}
                className={`s_wd_features_item${f.overflow ? " s_wd_features_item--overflow" : ""}`}
              >
                <div className="s_wd_features_icon">
                  <Image
                    src="https://odoocdn.com/openerp_website/static/src/img/icons/yellow_star.svg"
                    alt=""
                    loading="lazy"
                    width={32}
                    height={32}
                  />
                </div>
                <h4 className="s_wd_features_title">{f.title}</h4>
                <p>{f.body}</p>
                {f.img && (
                  <Image
                    src={f.img}
                    className="img-thumbnail features-preview"
                    alt={f.title}
                    width={600}
                    height={340}
                    loading="lazy"
                  />
                )}
              </div>
            ))}
          </div>
          <div className="features-col">
            {FEATURES.slice(2).map((f) => (
              <div key={f.title} className="s_wd_features_item">
                <div className="s_wd_features_icon">
                  <Image
                    src="https://odoocdn.com/openerp_website/static/src/img/icons/yellow_star.svg"
                    alt=""
                    loading="lazy"
                    width={32}
                    height={32}
                  />
                </div>
                <h4 className="s_wd_features_title">{f.title}</h4>
                <p>{f.body}</p>
              </div>
            ))}
          </div>
        </div>
        <Link href="/app/manufacturing-features" className="features-all-link">
          See all features
          <Image
            src="https://odoocdn.com/openerp_website/static/src/img/arrows/secondary_arrow_sm_03.svg"
            width={40}
            height={20}
            alt=""
            aria-hidden="true"
            loading="lazy"
          />
        </Link>
      </div>
    </section>
  );
}
