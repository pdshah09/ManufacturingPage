import Image from "next/image";

export default function Kaizen() {
  return (
    <section className="o_section o_section">
      <div className="container">
        <h2 className="display-2 text-center-lg o_animate">
          The perfect tool for <span className="x_wd_blue_highlight_scribble_05">Kaizen</span>
        </h2>
        <div className="o_animate o_animate--delay-1">
          <Image
            src="https://odoocdn.com/openerp_website/static/src/img/apps/manufacturing/kaizen.svg"
            className="w-100" alt="Kaizen continuous improvement diagram"
            width={1200} height={400} loading="lazy" decoding="async"
          />
        </div>
      </div>
    </section>
  );
}
