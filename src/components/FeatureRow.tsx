"use client";
import Image from "next/image";
import { ReactNode, useEffect, useRef } from "react";

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
  const textRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = [textRef.current, mediaRef.current].filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("o_animated");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className={`o_section${extraClass ? " " + extraClass : ""}`}>
      <div className="container">
        <div className={`row row-feature${reverse ? " row-reverse" : ""}`}>
          <div
            ref={textRef}
            className={`col-text o_animate${reverse ? " o_animate--slide-right" : " o_animate--slide-left"}`}
          >
            {heading}
            {body}
          </div>
          <div
            ref={mediaRef}
            className={`col-media o_animate${reverse ? " o_animate--slide-left" : " o_animate--slide-right"} o_animate--delay-1`}
          >
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
