import Image from "next/image";

export default function PlanningSection() {
    return (
        <section className="o_section text-center-lg no-padding-block">
            <div className="container">
                <Image
                    src="https://odoocdn.com/openerp_website/static/src/img/icons/calendar.svg"
                    height={100} width={100}
                    className="section-icon rotate-10 mx-auto o_animate"
                    alt="" aria-hidden="true" loading="lazy"
                />
                <h2 className="display-2 o_animate o_animate--delay-1">
                    Planning that puts you ahead of schedule
                </h2>
                <p className="o_animate o_animate--delay-2" style={{ maxWidth: "52ch", margin: "0 auto 1rem" }}>
                    <strong>Schedule manufacturing orders</strong> and plan resources with finite capacity planning.
                    Fine tune easily with the Gantt chart.
                </p>
                <div className="img-wide-wrap o_animate o_animate--delay-2">
                    <Image
                        src="https://odoocdn.com/openerp_website/static/src/img/apps/manufacturing/schedule.webp"
                        className="img-thumbnail" alt="Gantt chart planning"
                        width={1000} height={560} loading="lazy" decoding="async"
                    />
                </div>
            </div>
        </section>
    );
}
