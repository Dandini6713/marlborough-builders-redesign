import Image from "next/image";

export default function HeroV2() {
  return (
    <section className="hero-v2" aria-label="Marlborough Builders introduction">
      <div className="hero-v2-image-wrap">
        <Image
          src="/assets/images/hero/hero-staircase-dark.png"
          alt="Oak staircase hallway by Marlborough Builders"
          fill
          priority
          quality={85}
          sizes="100vw"
          className="hero-v2-image"
        />
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
