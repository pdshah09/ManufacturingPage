import Image from "next/image";

export default function Testimonial() {
  return (
    <section className="s_wd_testimonial">
      <div className="container">
        <Image
          src="https://odoocdn.com/openerp_website/static/src/img/arrows/grey_arrow_loop_02.svg"
          width={150}
          height={100}
          className="testimonial-arrow"
          alt=""
          aria-hidden="true"
          loading="lazy"
        />
        <div className="testimonial-card o_animate">
          <blockquote className="testimonial-quote">
            &ldquo;Odoo allowed our company to efficiently manage a growth from a turnover of $2.4m to $35m in 4 years.&rdquo;
          </blockquote>
          <div className="testimonial-author">
            <Image
              src="https://odoocdn.com/openerp_website/static/src/img/customers/liz_carr.jpg"
              alt="Liz Carr"
              width={48}
              height={48}
              loading="lazy"
            />
            <div>
              <div className="testimonial-name">Liz Carr</div>
              <div className="testimonial-title">COO, Mangrove</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
