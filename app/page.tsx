import Image from "next/image";

const trustItems = [
  {
    title: "Clear quotations",
    text: "Clear scope, straightforward pricing and practical advice before work starts.",
  },
  {
    title: "Reliable communication",
    text: "A professional, organised approach from first enquiry through to completion.",
  },
  {
    title: "Quality workmanship",
    text: "Joinery and roofing work carried out with care, attention to detail and a proper finish.",
  },
  {
    title: "Domestic and commercial experience",
    text: "Trusted for residential work as well as broader project requirements across the North West.",
  },
];

const featuredProjects = [
  {
    category: "Joinery",
    title: "Oak balustrade and fitted joinery",
    image: "/assets/images/gallery/joinery/oak-glass-balustrade-after.jpg",
    text: "A fitted joinery project with clean timber detailing, a more refined finish and a stronger premium feel.",
  },
  {
    category: "Roofing",
    title: "Residential roof repair and re-slating",
    image: "/assets/images/gallery/general/marlborough-roofing-hero.png",
    text: "A roofing project centred on replacing damaged sections, improving weather protection and leaving the roof looking right.",
  },
  {
    category: "Joinery",
    title: "Oak staircase and joinery detailing",
    image: "/assets/images/gallery/joinery/joinery-staircase-oak-overview.jpg",
    text: "A staircase-focused joinery project that better reflects the quality, finish and detail Marlborough Builders can deliver.",
  },
];

const testimonials = [
  {
    quote: "Brilliant craftsmanship, tidy workers and everything finished when they said it would be.",
    author: "Paul T",
    location: "Prescot",
  },
  {
    quote: "Professional from start to finish, fair on price and no stress at any point.",
    author: "Sandra K",
    location: "Whiston",
  },
  {
    quote: "Reliable team, no drama on site and exactly the sort of people you want on a commercial job.",
    author: "Dave R",
    location: "Knowsley",
  },
];

const processSteps = [
  "Initial enquiry",
  "Site visit and advice",
  "Clear quotation",
  "Work completed properly",
];

export default function Home() {
  return (
    <main className="site-shell">
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

      <div className="container stat-band">
        <article className="stat-card">
          <strong>Prescot based</strong>
          <span>Working across Merseyside and the wider Northwest</span>
        </article>
        <article className="stat-card">
          <strong>30+ years</strong>
          <span>Hands-on trade experience across joinery and roofing</span>
        </article>
        <article className="stat-card">
          <strong>Domestic + Commercial</strong>
          <span>Comfortable in occupied homes and live working sites</span>
        </article>
        <article className="stat-card">
          <strong>Registered Ltd</strong>
          <span>Companies House no. 15420682</span>
        </article>
      </div>

      <section className="section trust-section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Why clients choose Marlborough Builders</p>
            <h2>Clear quotations, reliable communication and work carried out to a proper standard</h2>
            <p>
              A good building company should be clear from the outset, reliable on the job and leave work finished to a proper standard.
            </p>
          </div>

          <div className="trust-grid">
            {trustItems.map((item) => (
              <article className="trust-card" key={item.title}>
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
            <h2>Recent joinery and roofing work</h2>
            <p>
              Examples of the type of work Marlborough Builders delivers across domestic and commercial projects.
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

      <section className="section testimonials-section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">What people say</p>
            <h2>A few words from recent clients</h2>
            <p>
              Short notes from homeowners and commercial clients we have worked for recently.
            </p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((t) => (
              <article className="testimonial-card" key={t.author}>
                <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
                <footer>{t.author}, {t.location}</footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container process-grid">
          <div className="section-heading compact">
            <p className="eyebrow">How it works</p>
            <h2>A straightforward process from first enquiry to completion.</h2>
            <p>
              Keeping jobs clear from the outset helps make the whole process easier to manage,
              from the first conversation through to the finished work.
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
              Get in touch for a clear quotation, practical advice and work carried out to a proper standard.
            </p>
          </div>
          <a href="/contact" className="button button-primary">
            Request a quote
          </a>
        </div>
      </section>
    </main>
  );
}
