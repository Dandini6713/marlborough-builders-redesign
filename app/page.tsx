import Image from "next/image";

const trustItems = [
  {
    title: "Clear quotations",
    text: "Straightforward pricing, clear scope and practical advice from the outset.",
  },
  {
    title: "Reliable communication",
    text: "A professional, organised approach from first enquiry through to completion.",
  },
  {
    title: "Quality workmanship",
    text: "High standards across both joinery and roofing, with a finish that reflects the trade properly.",
  },
  {
    title: "Domestic and commercial experience",
    text: "A trusted local company able to take on residential work as well as broader project needs.",
  },
];

const featuredProjects = [
  {
    category: "Joinery",
    title: "Bespoke interior joinery",
    image: "/assets/images/gallery/joinery/joinery-alcove-tv-unit.jpg",
    text: "Built-in storage, fitted details and practical interior craftsmanship with a clean, professional finish.",
  },
  {
    category: "Roofing",
    title: "Residential roofing work",
    image: "/assets/images/gallery/general/marlborough-roofing-hero.png",
    text: "Roofing repairs and replacement work presented with clearer proof of quality and capability.",
  },
  {
    category: "Joinery",
    title: "Staircases and fitted timber work",
    image: "/assets/images/gallery/joinery/oak-balustrade-completion.jpg",
    text: "Timber features and staircase work that help position the business as skilled, reliable and detail-conscious.",
  },
];

const processSteps = [
  "Initial conversation",
  "Site visit or scope review",
  "Clear quotation",
  "Work completed properly",
];

export default function Home() {
  return (
    <main className="site-shell">
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="/">
            <Image
              src="/marlborough_builders_emblem_roundel.svg"
              alt="Marlborough Builders"
              width={52}
              height={52}
              priority
            />
            <div className="brand-copy">
              <span className="brand-name">Marlborough Builders</span>
              <span className="brand-subtitle">Joinery & Roofing</span>
            </div>
          </a>

          <nav className="site-nav" aria-label="Primary">
            <a href="/about">About</a>
            <a href="/joinery">Joinery</a>
            <a href="/roofing">Roofing</a>
            <a href="/gallery">Gallery</a>
            <a href="/contact" className="button button-secondary">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section className="hero-section">
        <div className="container hero-layout">
          <div className="hero-copy">
            <p className="eyebrow">Prescot, Merseyside & North West</p>
            <h1>Joinery and roofing done properly</h1>
            <p className="hero-text">
              Marlborough Builders delivers quality joinery and roofing work for
              domestic and commercial clients across Prescot, Merseyside and the
              wider North West.
            </p>

            <div className="hero-actions">
              <a href="/contact" className="button button-primary">
                Request a quote
              </a>
              <a href="/gallery" className="button button-ghost">
                View recent work
              </a>
            </div>
          </div>

          <div className="hero-media">
            <div className="hero-image-main">
              <Image
                src="/assets/images/gallery/general/marlborough-hero.png"
                alt="High-quality joinery interior by Marlborough Builders"
                fill
                priority
                className="hero-image"
                sizes="(max-width: 960px) 100vw, 50vw"
              />
            </div>

            <div className="hero-image-secondary">
              <Image
                src="/assets/images/gallery/general/marlborough-roofing-hero.png"
                alt="Residential roofing work by Marlborough Builders"
                fill
                className="hero-image"
                sizes="(max-width: 960px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section trust-section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Why clients choose Marlborough Builders</p>
            <h2>Trusted local workmanship with a more professional standard.</h2>
            <p>
              A stronger site should reflect the same qualities clients expect on
              the job, clarity, reliability, quality and a professional finish.
            </p>
          </div>

          <div className="trust-grid">
            {trustItems.map((item) => (
              <article className="trust-card" key={item.title}>
                <p className="trust-card-label">Why it matters</p>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section featured-work-section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Featured work</p>
            <h2>Real projects presented more clearly.</h2>
            <p>
              Showing completed work more clearly helps the business feel more
              credible, more distinctive and less like a generic trade website.
            </p>
          </div>

          <div className="featured-work-grid">
            {featuredProjects.map((project) => (
              <article className="featured-work-card" key={project.title}>
                <div className="featured-work-image-wrap">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="featured-work-image"
                    sizes="(max-width: 960px) 100vw, 33vw"
                  />
                </div>
                <div className="featured-work-content">
                  <p className="card-kicker">{project.category}</p>
                  <h3>{project.title}</h3>
                  <p>{project.text}</p>
                  <a href="/gallery" className="featured-work-link">
                    View work
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container process-grid">
          <div className="section-heading compact">
            <p className="eyebrow">How it works</p>
            <h2>Clear process, straightforward communication.</h2>
            <p>
              One of the main improvements over the old site is making the
              business feel more structured, more established and easier to
              trust from the first visit.
            </p>
          </div>

          <ol className="process-list">
            {processSteps.map((step, index) => (
              <li key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{step}</strong>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container cta-panel">
          <div>
            <p className="eyebrow">Get in touch</p>
            <h2>Need joinery or roofing work in Prescot or across Merseyside?</h2>
            <p>
              Get in touch for a straightforward quote, practical advice and a
              professional approach from start to finish.
            </p>
          </div>
          <a href="/contact" className="button button-primary">
            Contact Marlborough Builders
          </a>
        </div>
      </section>
    </main>
  );
}
