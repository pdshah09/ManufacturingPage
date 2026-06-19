import Image from "next/image";
import React, { ReactNode } from "react";

export default function FeatureRow() {
  return (
    <>
      <section
        className="pb-2 pb-md-4"
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
              className="col-lg-6 offset-lg-4"
              style={{
                boxSizing: "border-box",
                maxWidth: "100%",
                paddingRight: "calc(32px * .5)",
                paddingLeft: "calc(32px * .5)",
                marginTop: "0",
                flex: "0 0 auto",
                flexShrink: 0,
                width: "50%",
                marginLeft: "33.3333%",
                minHeight: "24px",
              }}
            >
              <Image
                className="o_rtl_flip mx-auto mb-4"
                height={120}
                width={28}
                alt="feature arrow"
                src="https://odoocdn.com/openerp_website/static/src/img/arrows/grey_arrow_dot_02.svg"
                style={{
                  boxSizing: "border-box",
                  verticalAlign: "middle",
                  display: "block",
                  marginRight: "auto",
                  marginLeft: "auto",
                  marginBottom: "1.5rem",
                  marginTop: "3rem",
                }}
              />
            </div>
            <div
              className="col-lg-6"
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
                <span
                  className="x_wd_green_highlight_03"
                  style={{
                    boxSizing: "border-box",
                    backgroundPosition: "center bottom",
                    whiteSpace: "nowrap",
                    backgroundImage:
                      'url("https://odoocdn.com/openerp_website/static/src/img/highlights/green_highlight_03.svg")',
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                  }}
                >
                  Real-time
                </span>{" "}
                simulated operations
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
                  Simulate manufacturing orders
                </strong>{" "}
                with real-time capacity planning, components availability, and
                cost control.
              </p>
              <p
                style={{
                  boxSizing: "border-box",
                  marginBottom: "16px",
                  marginTop: "0px",
                  fontSize: "1.25rem",
                }}
              >
                Get just-in-time replenishment propositions and choose how to
                fulfill parts: make or buy, sub-contract, deliver from another
                warehouse, etc.
              </p>
            </div>
            <div
              className="col-lg-6"
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
              }}
            >
              <img
                className="img-thumbnail"
                src="https://odoocdn.com/openerp_website/static/src/img/apps/manufacturing/operations.webp"
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
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
