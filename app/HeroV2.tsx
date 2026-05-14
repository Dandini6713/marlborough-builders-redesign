"use client";

import { useEffect, useRef } from "react";

export default function HeroV2() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");

    const apply = () => {
      if (mq.matches) {
        video.pause();
      } else {
        const playPromise = video.play();
        if (playPromise && typeof playPromise.catch === "function") {
          playPromise.catch(() => {});
        }
      }
    };

    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  return (
    <section className="hero-v2" aria-label="Marlborough Builders introduction">
      <div className="hero-v2-image-wrap">
        <video
          ref={videoRef}
          className="hero-v2-image"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/assets/images/hero/hero-staircase-dark.png"
        >
          <source src="/assets/images/hero/hero-background.mp4" type="video/mp4" />
        </video>
        <div className="hero-v2-vignette" aria-hidden="true" />
      </div>

      <div className="hero-v2-content">
        <div className="hero-v2-top">
          <span className="hero-v2-meta-label">Marlborough Builders — Est. Prescot</span>
          <span className="hero-v2-meta-label hero-v2-meta-right">Joinery / Roofing / Divisions</span>
        </div>

        <div className="hero-v2-centre">
          <h1 className="hero-v2-title">
            <span>Marlborough</span>
            <span>Builders</span>
          </h1>
          <p className="hero-v2-tagline">
            <span>Built properly.</span>
            <span>Finished right.</span>
          </p>
        </div>

        <div className="hero-v2-bottom">
          <div className="hero-v2-meta-stack">
            <span className="hero-v2-meta-label">Thirty years of craftsmanship</span>
            <span className="hero-v2-meta-label">Two specialist divisions</span>
          </div>
          <a className="hero-v2-cta" href="/contact">
            <span>Discuss a project</span>
            <span className="hero-v2-cta-arrow" aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
