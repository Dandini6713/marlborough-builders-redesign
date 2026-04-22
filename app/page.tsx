import Image from "next/image";

const trustPoints = [
  "Prescot based",
  "Joinery and roofing specialists",
  "Domestic and commercial work",
  "Serving Merseyside and the North West",
];

const featuredServices = [
  {
    title: "Joinery",
    text: "Bespoke joinery, fitted interiors, structural timber work and practical upgrades carried out with care and attention to detail.",
  },
  {
    title: "Roofing",
    text: "Roofing repairs, replacements and ongoing roofing works delivered with clear advice, reliable workmanship and a straightforward approach.",
  },
];

const featuredProjects = [
  {
    category: "Joinery",
    title: "Residential joinery projects",
    text: "A refined showcase for kitchens, fitted work and bespoke timber details.",
  },
  {
    category: "Roofing",
    title: "Roof repairs and replacements",
    text: "A stronger presentation of roofing capability, project types and completed work.",
  },
  {
    category: "Commercial",
    title: "Commercial and mixed-scope work",
    text: "Clearer evidence of experience across practical commercial jobs and larger-scale works.",
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
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Prescot, Merseyside & North West</p>
            <h1>Built properly, finished with care.</h1>
            <p className="hero-text">
              A modern, dependable building company specialising in joinery and
              roofing work for domestic and commercial clients across the North
              West.
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

          <div className="hero-panel">
            <div className="hero-card">
              <p className="panel-label">A better direction for the redesign</p>
              <ul className="trust-list">
                {trustPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-strip">
        <div className="container trust-strip-inner">
          {trustPoints.map((point) => (
            <span key={point}>{point}</span>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Specialist divisions</p>
            <h2>Joinery and roofing services with a stronger identity.</h2>
            <p>
              The new site should present Marlborough Builders as one trusted
              company with two clear specialisms, not a generic trade template.
            </p>
          </div>

          <div className="card-grid two-up">
            {featuredServices.map((service) => (
              <article className="feature-card" key={service.title}>
                <p className="card-kicker">{service.title}</p>
                <h3>{service.title} services</h3>
                <p>{service.text}</p>
                <a href={`/${service.title.toLowerCase()}`}>Explore {service.title.toLowerCase()}</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Selected work</p>
            <h2>A more professional, project-led portfolio.</h2>
            <p>
              This section will evolve into a stronger showcase of completed
              work, clearer project types and better visual proof.
            </p>
          </div>

          <div className="card-grid three-up">
            {featuredProjects.map((project) => (
              <article className="project-card" key={project.title}>
                <p className="card-kicker">{project.category}</p>
                <h3>{project.title}</h3>
                <p>{project.text}</p>
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
              One of the goals of the redesign is to make the business feel more
              structured, more established and easier to trust.
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
            <p className="eyebrow">Next stage</p>
            <h2>Now we can build the homepage properly.</h2>
            <p>
              This is the new structural base for the Marlborough Builders
              redesign. The next step is refining layout, typography, imagery
              and page content section by section.
            </p>
          </div>
          <a href="/contact" className="button button-primary">
            Get in touch
          </a>
        </div>
      </section>
    </main>
  );
}
