import Image from "next/image";

export default function Testimonial() {
  return (
    <>
      <section
        className="s_wd_testimonial"
      >
        <div
          className="container"
          style={{
            boxSizing: "border-box",
            position: "relative",
            width: "100%",
            paddingRight: "calc(50px * .5)",
            paddingLeft: "calc(50px * .5)",
            marginRight: "auto",
            marginLeft: "auto",
            maxWidth: "1320px",
          }}
        >
          <img
            className="d-none d-md-block rotate-350 mt-n5 me-6 mb-5 ms-auto"
            width={150}
            src="https://odoocdn.com/openerp_website/static/src/img/arrows/grey_arrow_loop_02.svg"
            style={{
              boxSizing: "border-box",
              verticalAlign: "middle",
              rotate: "350deg",
              marginRight: "4rem",
              marginBottom: "3rem",
              marginLeft: "auto",
              marginTop: "-3rem",
              display: "block",
            }}
          />
          <div
            className="row g-0 justify-content-between bg-200 rounded-2 p-4 p-md-6 position-relative"
            style={{
              boxSizing: "border-box",
              display: "flex",
              flexWrap: "wrap",
              marginTop: "calc(-1 * 0)",
              marginRight: "calc(-.5 * 0)",
              marginLeft: "calc(-.5 * 0)",
              color: "rgb(17, 24, 39)",
              position: "relative",
              justifyContent: "space-between",
              padding: "4rem",
              backgroundColor: "rgb(243, 244, 246)",
              borderRadius: "0.625rem 0.625rem 0.625rem 0.625rem",
            }}
          >
            <img
              className="position-absolute top-0 translate-middle d-none d-md-inline h-[70px]"
              height={70}
              src="https://odoocdn.com/openerp_website/static/src/img/snippets/s_wd_testimonials/quote.svg"
              style={{
                boxSizing: "border-box",
                verticalAlign: "middle",
                flexShrink: 0,
                width: "100%",
                maxWidth: "100%",
                paddingRight: "calc(0 * .5)",
                paddingLeft: "calc(0 * .5)",
                marginTop: "0",
                position: "absolute",
                top: "0px",
                transform: "translate(-50%, -50%)",
                display: "inline",
              }}
            />
            <div
              className="col-lg-8 pb-3 pb-lg-0"
              style={{
                boxSizing: "border-box",
                maxWidth: "100%",
                paddingRight: "calc(0 * .5)",
                paddingLeft: "calc(0 * .5)",
                marginTop: "0",
                flex: "0 0 auto",
                flexShrink: 0,
                width: "66.6667%",
                minHeight: "24px",
                paddingBottom: "0px",
              }}
            >
              <blockquote
                className="blockquote border-0 p-0 fst-normal"
                style={{
                  boxSizing: "border-box",
                  margin: "0px 0px 1rem",
                  borderLeft: "5px solid rgb(230, 233, 237)",
                  marginBottom: "0px",
                  fontSize: "1.125rem",
                  border: "0px",
                  borderTopColor: "currentcolor",
                  borderRightColor: "currentcolor",
                  borderBottomColor: "currentcolor",
                  padding: "0px",
                  fontStyle: "normal",
                }}
              >
                <p
                  className="fw-bold fs-4 mb-0"
                  style={{
                    boxSizing: "border-box",
                    marginTop: "0px",
                    marginBottom: "0px",
                    fontWeight: 600,
                    fontSize: "1.5rem",
                  }}
                >
                  Odoo allowed our company to efficiently manage a growth from a
                  turnover of $2.4m to $15m in 4 years.
                </p>
              </blockquote>
            </div>
            <div
              className="col-lg-4 d-sm-flex flex-lg-column align-items-center align-items-lg-end"
              style={{
                boxSizing: "border-box",
                maxWidth: "100%",
                paddingRight: "calc(0 * .5)",
                paddingLeft: "calc(0 * .5)",
                marginTop: "0",
                flex: "0 0 auto",
                flexShrink: 0,
                width: "33.3333%",
                minHeight: "24px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
              }}
            >
              <img
                className="d-none d-sm-block rounded-circle mt-lg-n7 mb-lg-2 me-3 me-lg-0 h-[6rem] w-[6rem]"
                height={20}
                alt="Jacky Lecuivre picture"
                src="https://odoocdn.com/openerp_website/static/src/img/snippets/s_wd_testimonials/avatar/jacky_lecuivre.webp"
                style={{
                  boxSizing: "border-box",
                  verticalAlign: "middle",
                  display: "block",
                  marginRight: "0px",
                  marginBottom: "1rem",
                  marginTop: "-6rem",
                  borderRadius: "50%",
                }}
              />
              <div
                className="flex-grow-1 text-lg-end"
                style={{
                  boxSizing: "border-box",
                  flexGrow: 1,
                  textAlign: "right",
                }}
              >
                <b style={{ boxSizing: "border-box", fontWeight: 600 }}>
                  Jacky Lecuivre
                </b>
                <br style={{ boxSizing: "border-box" }} />
                <small style={{ boxSizing: "border-box", fontSize: "0.875em" }}>
                  CEO at Coppercnic
                </small>
              </div>
              <img
                className="img-thumbnail rounded-1 mt-3 mt-sm-0 mt-lg-3"
                width={76}
                src="https://odoocdn.com/openerp_website/static/src/img/snippets/s_wd_testimonials/logo/coppercnic.webp"
                style={{
                  boxSizing: "border-box",
                  verticalAlign: "middle",
                  padding: "0.75rem",
                  border:
                    "0 solid color-mix(in srgb, currentColor 15%, transparent)",
                  backgroundColor: "#ffffff",
                  maxWidth: "100%",
                  height: "auto",
                  boxShadow: "rgba(0, 0, 0, 0.1) 0px 0.5rem 1rem",
                  marginTop: "1rem",
                  borderRadius: "0.25rem 0.25rem 0.25rem 0.25rem",
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </>

  );
}


/*

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
          <Image
          src="https://odoocdn.com/openerp_website/static/src/img/snippets/s_wd_testimonials/quote.svg"
          height={70}
          width={60}
          className="position-absolute top-0 translate-middle d-none d-md-inline"
          alt="quote"
          aria-hidden="true"
          loading="lazy"
        />
          <blockquote className="testimonial-quote">
            &ldquo;Odoo allowed our company to efficiently manage a growth from a turnover of $2.4m to $35m in 4 years.&rdquo;
          </blockquote>
          <div className="testimonial-author">
            <Image
              src="https://odoocdn.com/openerp_website/static/src/img/snippets/s_wd_testimonials/avatar/jacky_lecuivre.webp"
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

*/