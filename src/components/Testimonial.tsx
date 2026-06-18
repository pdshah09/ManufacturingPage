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
        <div className="testimonial-card">
          <Image
            src="https://odoocdn.com/openerp_website/static/src/img/snippets/s_wd_testimonials/quote.svg"
            height={70}
            width={70}
            className="testimonial-quote-icon"
            alt=""
            aria-hidden="true"
            loading="lazy"
          />
          <div className="testimonial-body">
            <blockquote>
              <p className="testimonial-quote">
                Odoo allowed our company to efficiently manage a growth from a
                turnover of $2.4m to $15m in 4 years.
              </p>
            </blockquote>
          </div>
          <div className="testimonial-author">
            <Image
              height={90}
              width={90}
              className="testimonial-avatar"
              src="https://odoocdn.com/openerp_website/static/src/img/snippets/s_wd_testimonials/avatar/jacky_lecuivre.webp"
              alt="Jacky Lecuivre"
              loading="lazy"
            />
            <div className="testimonial-author-info">
              <b>Jacky Lecuivre</b>
              <small>CEO at Coppercnic</small>
            </div>
            <Image
              width={100}
              height={50}
              className="img-thumbnail testimonial-logo"
              src="https://odoocdn.com/openerp_website/static/src/img/snippets/s_wd_testimonials/logo/coppercnic.webp"
              alt="Coppercnic logo"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
