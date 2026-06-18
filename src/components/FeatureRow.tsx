import Image from "next/image";
import { ReactNode } from "react";

interface FeatureRowProps {
  heading: ReactNode;
  body: ReactNode;
  imgSrc: string;
  imgAlt: string;
  reverse?: boolean;
  bgLight?: boolean;
}

export default function FeatureRow({
  heading, body, imgSrc, imgAlt, reverse = false, bgLight = false,
}: FeatureRowProps) {
  return (
    <section className={`o_section${bgLight ? " o_section--bg-light" : ""}`}>
      <div className="container">
        <div className={`row row-feature${reverse ? " row-reverse" : ""}`}>
          <div className={`col-text o_animate${reverse ? " o_animate--slide-right" : " o_animate--slide-left"}`}>
            {heading}
            <div style={{ color: "var(--o-text)", fontSize: "clamp(0.9375rem, 0.875rem + 0.3vw, 1.125rem)" }}>
              {body}
            </div>
          </div>
          <div className={`col-media o_animate${reverse ? " o_animate--slide-left" : " o_animate--slide-right"} o_animate--delay-1`}>
            <Image
              src={imgSrc} alt={imgAlt}
              width={700} height={440}
              loading="lazy" decoding="async"
              className="img-thumbnail"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
