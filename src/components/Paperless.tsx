import Image from "next/image";

export default function Paperless() {
    return (
        <>
            <section
                className="pb-5 pb-lg-7"
                style={{
                    boxSizing: "border-box",
                    position: "relative",
                    paddingBottom: "6rem",
                }}
            >
                <div
                    className="container"
                    style={{
                        boxSizing: "border-box",
                        position: "relative",
                        width: "100%",
                        paddingRight: "calc(32px * .5)",
                        paddingLeft: "calc(32px * .5)",
                        marginRight: "auto",
                        marginLeft: "auto",
                        maxWidth: "1320px",
                    }}
                >
                    <div
                        className="row align-items-center justify-content-between"
                        style={{
                            boxSizing: "border-box",
                            display: "flex",
                            flexWrap: "wrap",
                            marginTop: "calc(-1 * 0)",
                            marginRight: "calc(-.5 * 32px)",
                            marginLeft: "calc(-.5 * 32px)",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <div
                            className="col-lg-6 position-relative order-2 order-lg-1"
                            style={{
                                boxSizing: "border-box",
                                maxWidth: "100%",
                                paddingRight: "calc(32px * .5)",
                                paddingLeft: "calc(32px * .5)",
                                marginTop: "0",
                                flex: "0 0 auto",
                                flexShrink: 0,
                                width: "50%",
                                minHeight: "24px",
                                position: "relative",
                                order: 1,
                            }}
                        >
                            <img
                                className="img-thumbnail w-25 position-absolute mt-n7 ms-n7 d-none d-lg-inline"
                                src="https://odoocdn.com/openerp_website/static/src/img/apps/manufacturing/become_paperless_03.webp"
                                style={{
                                    boxSizing: "border-box",
                                    verticalAlign: "middle",
                                    padding: "0.75rem",
                                    border:
                                        "0 solid color-mix(in srgb, currentColor 15%, transparent)",
                                    borderRadius: "0.625rem",
                                    backgroundColor: "#ffffff",
                                    maxWidth: "100%",
                                    height: "auto",
                                    boxShadow: "rgba(0, 0, 0, 0.1) 0px 0.5rem 1rem",
                                    position: "absolute",
                                    width: "25%",
                                    marginTop: "-6rem",
                                    marginLeft: "-6rem",
                                    display: "inline",
                                }}
                            />
                            <img
                                className="img-thumbnail w-25 position-absolute start-50 bottom-0 ms-5 mb-n8 d-none d-lg-inline"
                                src="https://odoocdn.com/openerp_website/static/src/img/apps/manufacturing/become_paperless_01.webp"
                                style={{
                                    boxSizing: "border-box",
                                    verticalAlign: "middle",
                                    padding: "0.75rem",
                                    border:
                                        "0 solid color-mix(in srgb, currentColor 15%, transparent)",
                                    borderRadius: "0.625rem",
                                    backgroundColor: "#ffffff",
                                    maxWidth: "100%",
                                    height: "auto",
                                    boxShadow: "rgba(0, 0, 0, 0.1) 0px 0.5rem 1rem",
                                    position: "absolute",
                                    bottom: "0px",
                                    left: "50%",
                                    width: "25%",
                                    marginLeft: "3rem",
                                    marginBottom: "-8rem",
                                    display: "inline",
                                }}
                            />
                            <img
                                className="img-thumbnail w-100 w-lg-75"
                                src="https://odoocdn.com/openerp_website/static/src/img/apps/manufacturing/become_paperless_02.webp"
                                style={{
                                    boxSizing: "border-box",
                                    verticalAlign: "middle",
                                    padding: "0.75rem",
                                    border:
                                        "0 solid color-mix(in srgb, currentColor 15%, transparent)",
                                    borderRadius: "0.625rem",
                                    backgroundColor: "#ffffff",
                                    maxWidth: "100%",
                                    height: "auto",
                                    boxShadow: "rgba(0, 0, 0, 0.1) 0px 0.5rem 1rem",
                                    width: "75%",
                                }}
                            />
                        </div>
                        <div
                            className="col-lg-6 col-xl-5 order-1 order-lg-2"
                            style={{
                                boxSizing: "border-box",
                                maxWidth: "100%",
                                paddingRight: "calc(32px * .5)",
                                paddingLeft: "calc(32px * .5)",
                                marginTop: "0",
                                flex: "0 0 auto",
                                flexShrink: 0,
                                width: "41.6667%",
                                minHeight: "24px",
                                order: 2,
                            }}
                        >
                            <h2
                                className="display-2 mb-5"
                                style={{
                                    boxSizing: "border-box",
                                    color: "#111827",
                                    marginTop: "0px",
                                    fontFamily: "Caveat",
                                    fontWeight: 700,
                                    fontSize: "4.75rem",
                                    lineHeight: 1,
                                    marginBottom: "3rem",
                                }}
                            >
                                Become a{" "}
                                <span
                                    className="x_wd_red_highlight_scribble_01"
                                    style={{
                                        boxSizing: "border-box",
                                        backgroundPosition: "50% 65%",
                                        whiteSpace: "nowrap",
                                        backgroundImage:
                                            'url("https://odoocdn.com/openerp_website/static/src/img/highlights/red_highlight_scribble_01.svg")',
                                        backgroundRepeat: "no-repeat",
                                        backgroundSize: "contain",
                                    }}
                                >
                                    paperless
                                </span>{" "}
                                company
                            </h2>
                            <p
                                style={{
                                    boxSizing: "border-box",
                                    marginBottom: "16px",
                                    marginTop: "0px",
                                    fontSize: "1.25rem",
                                }}
                            >
                                <strong style={{ boxSizing: "border-box", fontWeight: 600 }}>
                                    The Shop Floor app helps streamline your manufacturing line.
                                </strong>{" "}
                                Through the tablet-optimized dashboard, you can organize
                                workers, workcenters, worksheets, quality tests, and much more.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <style
                dangerouslySetInnerHTML={{
                    __html: `
html {
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 100%;
}

body {
  box-sizing: border-box;
  margin: 0px;
  font-family: "Inter", "Odoo Unicode Support Noto", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #374151;
  text-align: var(--body-text-align);
  background-color: #ffffff;
  text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  position: relative;
  width: 100%;
  height: 100%;
  direction: ltr;
  -webkit-font-smoothing: antialiased;
}
`,
                }}
            />
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