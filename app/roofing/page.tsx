import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Roofing Services in Prescot & Merseyside | Marlborough Builders",
  description:
    "Slating, tiling, flat roofs, lead work, Velux windows, guttering and emergency repairs for homes and commercial buildings across the Northwest.",
};

const roofingProjects = [
  {
    image: "/assets/images/gallery/roofing/new-roof-tiling-detail.jpg",
    kicker: "Tiling",
    title: "New roof tiling",
    text: "New roof tiles laid over fresh underlay to give the roof a neat, even finish.",
  },
  {
    image: "/assets/images/gallery/roofing/natural-slate-roof.jpg",
    kicker: "Slating",
    title: "Natural slate roof",
    text: "Natural slate roofing completed with clean lines and tidy detailing.",
  },
  {
    image: "/assets/images/gallery/roofing/chimney-lead-flashing.jpg",
    kicker: "Lead work",
    title: "Chimney lead flashing",
    text: "Lead flashing fitted neatly around the chimney base to keep the roof weather-tight.",
  },
];

const services = [
  { num: "01", title: "Slating", text: "Natural slate installations and replacements for homes, heritage properties and commercial buildings." },
  { num: "02", title: "Tiling", text: "Concrete, clay and interlocking tile systems installed correctly and with the right fixing detail." },
  { num: "03", title: "Re-roofs", text: "Full strip and replacement projects approached with proper inspection and practical sequencing." },
  { num: "04", title: "Flat roofing", text: "Felt, EPDM and GRP systems for extensions, garages and larger commercial roof areas." },
  { num: "05", title: "Lead work", text: "Flashings, valleys and specialist lead details carried out with the care they require." },
  { num: "06", title: "Velux and roof lights", text: "Supply and installation with the correct flashing kits and weatherproof detailing." },
  { num: "07", title: "Repairs and emergencies", text: "Leaks, storm damage, missing slates and urgent roof issues — stabilised and sorted quickly." },
  { num: "08", title: "Guttering and fascias", text: "Roofline upgrades, replacement guttering and associated maintenance work." },
];

const focusPoints = [
  "Honest assessment of whether repair or replacement is actually needed.",
  "Domestic and commercial roofing handled by an experienced on-site team.",
  "Support across everything from full re-roofs to roofline details and maintenance.",
];

export default function RoofingPage() {
  return (
    <main className="site-shell">
      <section className="section subpage-hero">
        <div className="container">
          <p className="eyebrow">Roofing division</p>
          <h1>Roofing done right, from repairs to full re-roofs</h1>
          <p className="subpage-hero-lead">
            Slating, tiling, flat roofs, lead work, Velux windows, guttering and
            emergency repairs — for homes and commercial buildings across the
            Northwest.
          </p>
          <div className="hero-actions">
            <a href="/contact" className="button button-primary">
              Get a quote
            </a>
            <a href="/roofing/services" className="button button-ghost">
              View full services
            </a>
          </div>
        </div>
      </section>

      <section className="section typical-jobs-section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Roofing focus</p>
            <h2>We will tell you what actually needs doing</h2>
          </div>
          <ul className="typical-jobs-list">
            {focusPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section featured-work-section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Featured work</p>
            <h2>Recent roofing work</h2>
          </div>

          <div className="featured-work-grid">
            {roofingProjects.map((project) => (
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
                  <p className="card-kicker">{project.kicker}</p>
                  <h3>{project.title}</h3>
                  <p>{project.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Services</p>
            <h2>What our roofing team covers</h2>
          </div>

          <div className="numbered-grid">
            {services.map((s) => (
              <article className="numbered-card" key={s.num}>
                <span className="numbered-card-num">{s.num}</span>
                <div>
                  <strong>{s.title}</strong>
                  <p>{s.text}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="section-footer-link">
            <a href="/roofing/services" className="featured-work-link">
              See full roofing service detail
            </a>
          </div>
        </div>
      </section>

      <section className="section audience-section">
        <div className="container">
          <div className="section-heading">
            <h2>Homes, businesses and landlords</h2>
          </div>

          <div className="audience-grid">
            <div className="audience-panel">
              <h3>For homeowners and landlords</h3>
              <ul>
                <li>Homes, extensions, garages and outbuildings</li>
                <li>Tidy working practices and daily clean-up</li>
                <li>Advice that is clear about urgency and budget</li>
              </ul>
            </div>
            <div className="audience-panel">
              <h3>For businesses and commercial sites</h3>
              <ul>
                <li>Deadlines and coordination with other trades on site</li>
                <li>Managed properties and landlord instructions</li>
                <li>Work phased around your opening hours or programme</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container cta-panel">
          <div>
            <p className="eyebrow">Get in touch</p>
            <h2>Need a roofing quote?</h2>
            <p>
              Whether it is a repair, a full re-roof or you just want a second
              opinion — give us a call and we will tell you where you stand.
            </p>
          </div>
          <div className="hero-actions">
            <a href="/contact" className="button button-primary">
              Get a quote
            </a>
            <a href="tel:07939551481" className="button button-ghost">
              Call 07939 551481
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
