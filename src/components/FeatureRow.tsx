import Image from "next/image";
import { ReactNode } from "react";

interface FeatureRowProps {
  heading: ReactNode;
  body: ReactNode;
  imgSrc: string;
  imgAlt: string;
  imgWidth?: number;
  imgHeight?: number;
  reverse?: boolean;
  extraClass?: string;
}

export default function FeatureRow({
  heading,
  body,
  imgSrc,
  imgAlt,
  imgWidth = 700,
  imgHeight = 440,
  reverse,
  extraClass,
}: FeatureRowProps) {
  return (
    <section className={`o_section${extraClass ? " " + extraClass : ""}`}>
      <div className="container">
        <div className={`row row-feature${reverse ? " row-reverse" : ""}`}>
          <div className="col-text">{heading}{body}</div>
          <div className="col-media">
            <Image
              src={imgSrc}
              className="img-thumbnail"
              alt={imgAlt}
              width={imgWidth}
              height={imgHeight}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
