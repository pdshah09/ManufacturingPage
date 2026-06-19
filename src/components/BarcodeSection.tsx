import Image from "next/image";
import PersonaBubble from "./PersonaBubble";

export default function BarcodeSection() {
    return (
        <>
            <section
                className="o_section pb-5 pb-lg-7 overflow-x-hidden"
                style={{
                    boxSizing: "border-box",
                    position: "relative",
                    overflowX: "hidden",
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
                            className="col-lg-6 pb40"
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
                                paddingBottom: "40px",
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
                                    className="x_wd_blue_highlight_02"
                                    style={{
                                        boxSizing: "border-box",
                                        backgroundPosition: "center bottom",
                                        whiteSpace: "nowrap",
                                        backgroundImage:
                                            'url("https://odoocdn.com/openerp_website/static/src/img/highlights/blue_highlight_02.svg")',
                                        backgroundRepeat: "no-repeat",
                                        backgroundSize: "contain",
                                    }}
                                >
                                    Record
                                </span>{" "}
                                production and components
                            </h2>
                            <p
                                style={{
                                    boxSizing: "border-box",
                                    marginBottom: "100px",
                                    marginTop: "0px",
                                    fontSize: "1.25rem",
                                }}
                            >
                                Use to process orders, accelerate operations, and reduce input
                                errors. Works right out of the box, blazing fast, and with no
                                latency.
                            </p>

                            <div className="mt-16 pt-32 mx-32">
                                <PersonaBubble text="Works offline: No WiFi coverage issues!" />
                            </div>

                        </div>

                        <div
                            className="col-lg-6 x_wd_shape x_wd_shape_bottom x_wd_shape_rs text-center"
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
                                zIndex: 0,
                                textAlign: "center",
                            }}
                        >
                            {/* Endless Background Shape */}
                            <div
                                style={{
                                    position: "absolute",
                                    top: "50%",
                                    bottom: "0",
                                    left: "-10%",
                                    right: "-100vw",
                                    backgroundColor: "#f4f5f8",
                                    borderTopLeftRadius: "500px",
                                    borderBottomLeftRadius: "500px",
                                    zIndex: -1,
                                }}
                            />

                            <h5
                                className="display-5 text-o-color-8"
                                style={{
                                    boxSizing: "border-box",
                                    marginTop: "0px",
                                    marginBottom: "1rem",
                                    fontFamily: "Caveat",
                                    fontWeight: 700,
                                    fontSize: "2rem",
                                    lineHeight: 1.1,
                                    color: "rgb(27, 182, 249)",
                                }}
                            >
                                Mobile barcode app
                            </h5>
                            <img
                                className="mx-auto rotate-320 o_rtl_no_rotate mb-3"
                                width={60}
                                src="https://odoocdn.com/openerp_website/static/src/img/graphics/arrow_doodle_13.svg"
                                style={{
                                    boxSizing: "border-box",
                                    verticalAlign: "middle",
                                    rotate: "320deg",
                                    display: "block",
                                    marginRight: "auto",
                                    marginLeft: "auto",
                                    marginBottom: "1rem",
                                }}
                                alt="arrow doodle"
                            />
                            <img
                                className="mx-auto w-50"
                                src="https://odoocdn.com/openerp_website/static/src/img/apps/manufacturing/barcode.webp"
                                style={{
                                    boxSizing: "border-box",
                                    verticalAlign: "middle",
                                    display: "block",
                                    width: "50%",
                                    marginRight: "auto",
                                    marginLeft: "auto",
                                }}
                                alt="Mobile barcode app"
                            />
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}
