import Image from "next/image";
import { ReactNode } from "react";

interface FeatureRowProps {
  reverse?: boolean;
  heading: ReactNode;
  body: ReactNode;
  imgSrc: string;
  imgAlt: string;
  imgWidth?: number;
  imgHeight?: number;
  className?: string;
}

export default function FeatureRow({
  reverse = false,
  heading,
  body,
  imgSrc,
  imgAlt,
  imgWidth = 680,
  imgHeight = 420,
  className = "",
}: FeatureRowProps) {
  return (
    <section className={`o_section ${className}`}>
      <div className="container">
        <div className={`row row-feature${reverse ? " row-reverse" : ""}${reverse ? " gap-row-mobile" : ""}`}>
          {/* Text column */}
          <div className="col-text o_animate o_animate--slide-left">
            {heading}
            <div style={{ marginTop: "0.875rem" }}>{body}</div>
          </div>

          {/* Media column */}
          <div className="col-media o_animate o_animate--slide-right o_animate--delay-1">
            <Image
              src={imgSrc}
              className="img-thumbnail"
              alt={imgAlt}
              width={imgWidth}
              height={imgHeight}
              loading="lazy"
              decoding="async"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
