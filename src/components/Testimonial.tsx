import Image from "next/image";

export default function Testimonial() {
  return (
    <>
  <section className="s_wd_testimonial">
    <div className="s_wd_testimonial_container">

      <img
        className="d-none d-md-block s_wd_testimonial_arrow"
        width={150}
        src="https://odoocdn.com/openerp_website/static/src/img/arrows/grey_arrow_loop_02.svg"
        alt=""
      />

      <div className="row g-0 justify-content-between bg-200 rounded-2 p-4 p-md-6 position-relative s_wd_testimonial_card">

        <img
          className="position-absolute top-0 translate-middle d-none d-md-inline s_wd_testimonial_quote_icon"
          height={12}
          src="https://odoocdn.com/openerp_website/static/src/img/snippets/s_wd_testimonials/quote.svg"
          alt=""
        />

        <div className="col-lg-8 pb-3 pb-lg-0 s_wd_testimonial_left">
          <blockquote className="blockquote border-0 p-0 fst-normal s_wd_testimonial_blockquote">
            <p className="fw-bold fs-4 mb-0 s_wd_testimonial_text">
              Odoo allowed our company to efficiently manage a growth from a
              turnover of $2.4m to $15m in 4 years.
            </p>
          </blockquote>
        </div>

        <div className="col-lg-4 d-sm-flex flex-lg-column align-items-center align-items-lg-end s_wd_testimonial_right">
          <img
            className="d-none d-sm-block rounded-circle mt-lg-n7 mb-lg-2 me-3 me-lg-0 s_wd_testimonial_avatar"
            alt="Jacky Lecuivre picture"
            src="https://odoocdn.com/openerp_website/static/src/img/snippets/s_wd_testimonials/avatar/jacky_lecuivre.webp"
          />
          <div className="flex-grow-1 text-lg-end s_wd_testimonial_author">
            <b>Jacky Lecuivre</b>
            <br />
            <small>CEO at Coppercnic</small>
          </div>
          <img
            className="img-thumbnail rounded-1 mt-3 mt-sm-0 mt-lg-3 s_wd_testimonial_logo"
            width={76}
            src="https://odoocdn.com/openerp_website/static/src/img/snippets/s_wd_testimonials/logo/coppercnic.webp"
            alt="Coppercnic logo"
          />
        </div>

      </div>
    </div>
  </section>
</>

  );
}