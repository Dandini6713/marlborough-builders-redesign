import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Joinery Services in Prescot & Merseyside | Marlborough Builders",
  description:
    "Fitted furniture, staircases, structural carpentry, loft conversions and kitchens for domestic and commercial clients across the Northwest.",
};

const joineryProjects = [
  {
    image: "/assets/images/gallery/joinery/media-wall-finishing-collage.jpg",
    kicker: "Built-in joinery",
    title: "Media walls and alcove units",
    text: "Custom-built media walls, alcove cabinetry and shelving designed to give a room a cleaner layout and more useful built-in storage.",
  },
  {
    image: "/assets/images/gallery/joinery/oak-metal-balustrade-detail.jpg",
    kicker: "Domestic stair work",
    title: "Stair refurbishment",
    text: "Updated flights, handrails, balustrades and newel details to improve the look, safety and finish of an existing staircase.",
  },
  {
    image: "/assets/images/gallery/joinery/interior-timber-frame-and-joists.jpg",
    kicker: "First-fix carpentry",
    title: "Structural and first-fix carpentry",
    text: "Stud walls, timber framing, floor structures and first-fix carpentry completed as part of wider renovation, conversion and refurbishment works.",
  },
  {
    image: "/assets/images/gallery/joinery/joinery-loft-conversion-complete.jpg",
    kicker: "Loft work",
    title: "Loft conversions",
    text: "Structural joinery and first-fix work for loft conversions — from floor and framing through to usable space under the roof.",
  },
  {
    image: "/assets/images/gallery/joinery/timber-side-gate-installation.jpg",
    kicker: "External timber work",
    title: "Fencing, gates and external timberwork",
    text: "Bespoke timber fencing, side gates and external joinery including outbuilding doors, built for durability, privacy and a clean finish.",
  },
  {
    image: "/assets/images/gallery/joinery/kitchen.installation1.jpeg",
    kicker: "Kitchen fitting",
    title: "Kitchen installations",
    text: "Kitchen fitting and installation work including cabinetry, finishing joinery and precise fitting to create a clean, functional result.",
  },
];

const typicalJobs = [
  "Built-in furniture that needs to fit difficult spaces cleanly.",
  "Structural and first-fix carpentry tied into wider renovation work.",
  "Stair, loft and kitchen projects where clean fitting matters.",
];

export default function JoineryPage() {
  return (
    <main className="site-shell">
      <section className="section subpage-hero">
        <div className="container">
          <p className="eyebrow">Joinery division</p>
          <h1>Joinery that fits right and lasts</h1>
          <p className="subpage-hero-lead">
            Fitted furniture, staircase work, structural carpentry, loft
            conversions, kitchens and more — for homes and businesses across the
            Northwest.
          </p>
          <div className="hero-actions">
            <a href="/contact" className="button button-primary">
              Get a quote
            </a>
            <a href="/joinery/services" className="button button-ghost">
              View full services
            </a>
          </div>
        </div>
      </section>

      <section className="section typical-jobs-section">
        <div className="container">
          <div className="section-heading">
            <h2>Typical joinery jobs</h2>
          </div>
          <ul className="typical-jobs-list">
            {typicalJobs.map((job) => (
              <li key={job}>{job}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section featured-work-section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">What we do</p>
            <h2>Joinery work we cover</h2>
          </div>

          <div className="service-card-grid">
            {joineryProjects.map((project) => (
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

          <div className="section-footer-link">
            <a href="/joinery/services" className="featured-work-link">
              See full joinery service detail
            </a>
          </div>
        </div>
      </section>

      <section className="section approach-section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Our approach</p>
            <h2>Measure properly, fit it well, finish it neatly</h2>
            <p>
              The best joinery looks like it was always there. That comes from
              measuring twice, taking the time to get it right and not cutting
              corners on the finish.
            </p>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container cta-panel">
          <div>
            <p className="eyebrow">Get in touch</p>
            <h2>Need a quote for joinery work?</h2>
            <p>
              Tell us what you need and we will come out, have a look and give
              you a clear price.
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
