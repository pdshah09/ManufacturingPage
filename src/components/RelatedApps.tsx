import Image from "next/image";
import Link from "next/link";

export default function RelatedApps() {
  return (
    <>
      <section
        className="s_wd_related_apps py-5 py-lg-7"
        style={{
          boxSizing: "border-box",
          position: "relative",
          paddingTop: "6rem",
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
          <h3
            className="display-2 mb-4"
            style={{
              boxSizing: "border-box",
              color: "#111827",
              marginTop: "0px",
              fontFamily: "Caveat",
              fontWeight: 700,
              fontSize: "4.75rem",
              lineHeight: 1,
              marginBottom: "1.5rem",
            }}
          >
            One{" "}
            <span
              className="x_wd_display_underline"
              style={{
                boxSizing: "border-box",
                backgroundPosition: "center bottom 10%",
                backgroundImage:
                  'url("https://odoocdn.com/openerp_website/static/src/img/graphics/underline.svg")',
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
              }}
            >
              need
            </span>
            , one{" "}
            <span
              className="x_wd_display_underline"
              style={{
                boxSizing: "border-box",
                backgroundPosition: "center bottom 10%",
                backgroundImage:
                  'url("https://odoocdn.com/openerp_website/static/src/img/graphics/underline.svg")',
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
              }}
            >
              app
            </span>
            .
          </h3>
          <p
            className="lead mb-5"
            style={{
              boxSizing: "border-box",
              marginTop: "0px",
              fontWeight: 300,
              fontSize: "1.5rem",
              marginBottom: "3rem",
            }}
          >
            Expand as you grow.
          </p>
          <div
            className="row g-4"
            style={{
              boxSizing: "border-box",
              display: "flex",
              flexWrap: "wrap",
              marginTop: "calc(-1 * 1.5rem)",
              marginRight: "calc(-.5 * 1.5rem)",
              marginLeft: "calc(-.5 * 1.5rem)",
            }}
          >
            <div
              className="col-lg-6 col-xl-4 o_app_icon_entry"
              style={{
                boxSizing: "border-box",
                maxWidth: "100%",
                paddingRight: "calc(1.5rem * .5)",
                paddingLeft: "calc(1.5rem * .5)",
                marginTop: "1.5rem",
                flex: "0 0 auto",
                flexShrink: 0,
                width: "33.3333%",
                minHeight: "24px",
              }}
            >
              <div
                className="x_wd_app_horizontal position-relative h-100"
                style={{
                  boxSizing: "border-box",
                  borderRadius: "0.25rem",
                  transition: "0.2s ease-in-out",
                  backgroundColor: "rgb(249, 250, 251)",
                  position: "relative",
                  height: "100%",
                }}
              >
                <div
                  className="d-flex"
                  style={{ boxSizing: "border-box", display: "flex" }}
                >
                  <a
                    className="stretched-link"
                    href="https://www.odoo.com/app/sales"
                    style={{
                      boxSizing: "border-box",
                      textDecoration: "none",
                      color: "rgba(113, 75, 103, var(--link-opacity, 1))",
                      fontWeight: 600,
                    }}
                  >
                    <img
                      className="bg-white shadow-sm rounded-1 p-2 m-3"
                      height={52}
                      width={52}
                      alt="Odoo Sales icon"
                      src="https://download.odoocdn.com/icons/sale/static/description/icon.svg"
                      style={{
                        boxSizing: "border-box",
                        verticalAlign: "middle",
                        color: "rgb(17, 24, 39)",
                        boxShadow: "0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)",
                        margin: "1rem",
                        padding: "0.5rem",
                        backgroundColor: "rgb(255, 255, 255)",
                        borderRadius: "0.25rem 0.25rem 0.25rem 0.25rem",
                      }}
                    />
                  </a>
                  <div
                    className="align-self-center my-3 me-4"
                    style={{
                      boxSizing: "border-box",
                      alignSelf: "center",
                      marginTop: "1rem",
                      marginBottom: "1rem",
                      marginRight: "1.5rem",
                    }}
                  >
                    <h5
                      className="mb-1"
                      style={{
                        boxSizing: "border-box",
                        fontFamily:
                          'Inter, "Odoo Unicode Support Noto", sans-serif',
                        fontWeight: 600,
                        color: "#111827",
                        fontSize: "1.25rem",
                        lineHeight: 1.2,
                        marginTop: "0px",
                        marginBottom: "0.25rem",
                      }}
                    >
                      Sales
                    </h5>
                    <small
                      className="d-block text-muted"
                      style={{
                        boxSizing: "border-box",
                        fontSize: "0.875em",
                        display: "block",
                        color: "rgba(55, 65, 81, 0.75)",
                      }}
                    >
                      Schedule manufacturing based on sales
                    </small>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-xl-4 o_app_icon_entry"
              style={{
                boxSizing: "border-box",
                maxWidth: "100%",
                paddingRight: "calc(1.5rem * .5)",
                paddingLeft: "calc(1.5rem * .5)",
                marginTop: "1.5rem",
                flex: "0 0 auto",
                flexShrink: 0,
                width: "33.3333%",
                minHeight: "24px",
              }}
            >
              <div
                className="x_wd_app_horizontal position-relative h-100"
                style={{
                  boxSizing: "border-box",
                  borderRadius: "0.25rem",
                  transition: "0.2s ease-in-out",
                  backgroundColor: "rgb(249, 250, 251)",
                  position: "relative",
                  height: "100%",
                }}
              >
                <div
                  className="d-flex"
                  style={{ boxSizing: "border-box", display: "flex" }}
                >
                  <a
                    className="stretched-link"
                    href="https://www.odoo.com/app/inventory"
                    style={{
                      boxSizing: "border-box",
                      textDecoration: "none",
                      color: "rgba(113, 75, 103, var(--link-opacity, 1))",
                      fontWeight: 600,
                    }}
                  >
                    <img
                      className="bg-white shadow-sm rounded-1 p-2 m-3"
                      height={52}
                      width={52}
                      alt="Odoo Inventory icon"
                      src="https://download.odoocdn.com/icons/stock/static/description/icon.svg"
                      style={{
                        boxSizing: "border-box",
                        verticalAlign: "middle",
                        color: "rgb(17, 24, 39)",
                        boxShadow: "0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)",
                        margin: "1rem",
                        padding: "0.5rem",
                        backgroundColor: "rgb(255, 255, 255)",
                        borderRadius: "0.25rem 0.25rem 0.25rem 0.25rem",
                      }}
                    />
                  </a>
                  <div
                    className="align-self-center my-3 me-4"
                    style={{
                      boxSizing: "border-box",
                      alignSelf: "center",
                      marginTop: "1rem",
                      marginBottom: "1rem",
                      marginRight: "1.5rem",
                    }}
                  >
                    <h5
                      className="mb-1"
                      style={{
                        boxSizing: "border-box",
                        fontFamily:
                          'Inter, "Odoo Unicode Support Noto", sans-serif',
                        fontWeight: 600,
                        color: "#111827",
                        fontSize: "1.25rem",
                        lineHeight: 1.2,
                        marginTop: "0px",
                        marginBottom: "0.25rem",
                      }}
                    >
                      Inventory
                    </h5>
                    <small
                      className="d-block text-muted"
                      style={{
                        boxSizing: "border-box",
                        fontSize: "0.875em",
                        display: "block",
                        color: "rgba(55, 65, 81, 0.75)",
                      }}
                    >
                      Organize the supply chain
                    </small>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-xl-4 o_app_icon_entry"
              style={{
                boxSizing: "border-box",
                maxWidth: "100%",
                paddingRight: "calc(1.5rem * .5)",
                paddingLeft: "calc(1.5rem * .5)",
                marginTop: "1.5rem",
                flex: "0 0 auto",
                flexShrink: 0,
                width: "33.3333%",
                minHeight: "24px",
              }}
            >
              <div
                className="x_wd_app_horizontal position-relative h-100"
                style={{
                  boxSizing: "border-box",
                  borderRadius: "0.25rem",
                  transition: "0.2s ease-in-out",
                  backgroundColor: "rgb(249, 250, 251)",
                  position: "relative",
                  height: "100%",
                }}
              >
                <div
                  className="d-flex"
                  style={{ boxSizing: "border-box", display: "flex" }}
                >
                  <a
                    className="stretched-link"
                    href="https://www.odoo.com/app/project"
                    style={{
                      boxSizing: "border-box",
                      textDecoration: "none",
                      color: "rgba(113, 75, 103, var(--link-opacity, 1))",
                      fontWeight: 600,
                    }}
                  >
                    <img
                      className="bg-white shadow-sm rounded-1 p-2 m-3"
                      height={52}
                      width={52}
                      alt="Odoo Project icon"
                      src="https://download.odoocdn.com/icons/project/static/description/icon.svg"
                      style={{
                        boxSizing: "border-box",
                        verticalAlign: "middle",
                        color: "rgb(17, 24, 39)",
                        boxShadow: "0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)",
                        margin: "1rem",
                        padding: "0.5rem",
                        backgroundColor: "rgb(255, 255, 255)",
                        borderRadius: "0.25rem 0.25rem 0.25rem 0.25rem",
                      }}
                    />
                  </a>
                  <div
                    className="align-self-center my-3 me-4"
                    style={{
                      boxSizing: "border-box",
                      alignSelf: "center",
                      marginTop: "1rem",
                      marginBottom: "1rem",
                      marginRight: "1.5rem",
                    }}
                  >
                    <h5
                      className="mb-1"
                      style={{
                        boxSizing: "border-box",
                        fontFamily:
                          'Inter, "Odoo Unicode Support Noto", sans-serif',
                        fontWeight: 600,
                        color: "#111827",
                        fontSize: "1.25rem",
                        lineHeight: 1.2,
                        marginTop: "0px",
                        marginBottom: "0.25rem",
                      }}
                    >
                      Project
                    </h5>
                    <small
                      className="d-block text-muted"
                      style={{
                        boxSizing: "border-box",
                        fontSize: "0.875em",
                        display: "block",
                        color: "rgba(55, 65, 81, 0.75)",
                      }}
                    >
                      For engineering-to-order projects
                    </small>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-xl-4 o_app_icon_entry"
              style={{
                boxSizing: "border-box",
                maxWidth: "100%",
                paddingRight: "calc(1.5rem * .5)",
                paddingLeft: "calc(1.5rem * .5)",
                marginTop: "1.5rem",
                flex: "0 0 auto",
                flexShrink: 0,
                width: "33.3333%",
                minHeight: "24px",
              }}
            >
              <div
                className="x_wd_app_horizontal position-relative h-100"
                style={{
                  boxSizing: "border-box",
                  borderRadius: "0.25rem",
                  transition: "0.2s ease-in-out",
                  backgroundColor: "rgb(249, 250, 251)",
                  position: "relative",
                  height: "100%",
                }}
              >
                <div
                  className="d-flex"
                  style={{ boxSizing: "border-box", display: "flex" }}
                >
                  <a
                    className="stretched-link"
                    href="https://www.odoo.com/app/plm"
                    style={{
                      boxSizing: "border-box",
                      textDecoration: "none",
                      color: "rgba(113, 75, 103, var(--link-opacity, 1))",
                      fontWeight: 600,
                    }}
                  >
                    <img
                      className="bg-white shadow-sm rounded-1 p-2 m-3"
                      height={52}
                      width={52}
                      alt="Odoo PLM icon"
                      src="https://download.odoocdn.com/icons/mrp_plm/static/description/icon.svg"
                      style={{
                        boxSizing: "border-box",
                        verticalAlign: "middle",
                        color: "rgb(17, 24, 39)",
                        boxShadow: "0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)",
                        margin: "1rem",
                        padding: "0.5rem",
                        backgroundColor: "rgb(255, 255, 255)",
                        borderRadius: "0.25rem 0.25rem 0.25rem 0.25rem",
                      }}
                    />
                  </a>
                  <div
                    className="align-self-center my-3 me-4"
                    style={{
                      boxSizing: "border-box",
                      alignSelf: "center",
                      marginTop: "1rem",
                      marginBottom: "1rem",
                      marginRight: "1.5rem",
                    }}
                  >
                    <h5
                      className="mb-1"
                      style={{
                        boxSizing: "border-box",
                        fontFamily:
                          'Inter, "Odoo Unicode Support Noto", sans-serif',
                        fontWeight: 600,
                        color: "#111827",
                        fontSize: "1.25rem",
                        lineHeight: 1.2,
                        marginTop: "0px",
                        marginBottom: "0.25rem",
                      }}
                    >
                      PLM
                    </h5>
                    <small
                      className="d-block text-muted"
                      style={{
                        boxSizing: "border-box",
                        fontSize: "0.875em",
                        display: "block",
                        color: "rgba(55, 65, 81, 0.75)",
                      }}
                    >
                      Improve product designs with version control
                    </small>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-xl-4 o_app_icon_entry"
              style={{
                boxSizing: "border-box",
                maxWidth: "100%",
                paddingRight: "calc(1.5rem * .5)",
                paddingLeft: "calc(1.5rem * .5)",
                marginTop: "1.5rem",
                flex: "0 0 auto",
                flexShrink: 0,
                width: "33.3333%",
                minHeight: "24px",
              }}
            >
              <div
                className="x_wd_app_horizontal position-relative h-100"
                style={{
                  boxSizing: "border-box",
                  borderRadius: "0.25rem",
                  transition: "0.2s ease-in-out",
                  backgroundColor: "rgb(249, 250, 251)",
                  position: "relative",
                  height: "100%",
                }}
              >
                <div
                  className="d-flex"
                  style={{ boxSizing: "border-box", display: "flex" }}
                >
                  <a
                    className="stretched-link"
                    href="https://www.odoo.com/app/maintenance"
                    style={{
                      boxSizing: "border-box",
                      textDecoration: "none",
                      color: "rgba(113, 75, 103, var(--link-opacity, 1))",
                      fontWeight: 600,
                    }}
                  >
                    <img
                      className="bg-white shadow-sm rounded-1 p-2 m-3"
                      height={52}
                      width={52}
                      alt="Odoo Maintenance icon"
                      src="https://download.odoocdn.com/icons/maintenance/static/description/icon.svg"
                      style={{
                        boxSizing: "border-box",
                        verticalAlign: "middle",
                        color: "rgb(17, 24, 39)",
                        boxShadow: "0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)",
                        margin: "1rem",
                        padding: "0.5rem",
                        backgroundColor: "rgb(255, 255, 255)",
                        borderRadius: "0.25rem 0.25rem 0.25rem 0.25rem",
                      }}
                    />
                  </a>
                  <div
                    className="align-self-center my-3 me-4"
                    style={{
                      boxSizing: "border-box",
                      alignSelf: "center",
                      marginTop: "1rem",
                      marginBottom: "1rem",
                      marginRight: "1.5rem",
                    }}
                  >
                    <h5
                      className="mb-1"
                      style={{
                        boxSizing: "border-box",
                        fontFamily:
                          'Inter, "Odoo Unicode Support Noto", sans-serif',
                        fontWeight: 600,
                        color: "#111827",
                        fontSize: "1.25rem",
                        lineHeight: 1.2,
                        marginTop: "0px",
                        marginBottom: "0.25rem",
                      }}
                    >
                      Maintenance
                    </h5>
                    <small
                      className="d-block text-muted"
                      style={{
                        boxSizing: "border-box",
                        fontSize: "0.875em",
                        display: "block",
                        color: "rgba(55, 65, 81, 0.75)",
                      }}
                    >
                      Keep equipment running smoothly
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Link
            className="features-all-link"
            href="https://www.odoo.com/page/all-apps"
          >
            <span className="features-all-text">See all Apps</span>
            <Image
              className="features-all-image"
              alt="arrow-slide"
              height={20}
              width={40}
              src="https://odoocdn.com/openerp_website/static/src/img/arrows/secondary_arrow_sm_03.svg"
            />
          </Link>

        </div>
      </section>
    </>

  );
}
