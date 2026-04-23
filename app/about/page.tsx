import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Marlborough Builders | Family-Run Joinery & Roofing, Prescot",
  description:
    "Over 30 years of hands-on trade experience across joinery and roofing. Separate specialist teams, no subcontractors, and honest advice from first call to finished job.",
};

const values = [
  {
    title: "Hands-on approach",
    text: "We stay close to every job. You deal with us directly, not a project manager passing messages along.",
  },
  {
    title: "Specialist teams",
    text: "Separate joinery and roofing teams, each with the right skills and experience for the work at hand.",
  },
  {
    title: "Clear from the outset",
    text: "Straightforward pricing, honest advice and no surprises between quotation and final invoice.",
  },
  {
    title: "Domestic and commercial",
    text: "Comfortable working in occupied homes, rental properties and live commercial sites across the region.",
  },
];

export default function AboutPage() {
  return (
    <main className="site-shell">
      <section className="section about-intro">
        <div className="container">
          <h1 className="about-title">About Marlborough Builders</h1>

          <div className="about-intro-grid">
            <div className="about-body">
              <p>
                We are a family-run building company based in Prescot, covering
                Merseyside and the Northwest.
              </p>
              <p>
                Marlborough Builders is a family-run company with a hands-on
                approach and over 30 years of trade experience across joinery and
                roofing. We keep things simple: clear quotations, reliable
                communication and work finished to a proper standard.
              </p>
              <p>
                We run separate joinery and roofing teams, each with the right
                skills and experience for the work they carry out. That means
                better results whether the job is a fitted staircase, a full
                re-slate or a commercial maintenance contract.
              </p>
              <p>
                Our clients include homeowners, landlords and commercial customers
                across Prescot, Merseyside and the wider Northwest. We are just as
                comfortable in an occupied family home as we are on a live working
                site.
              </p>
              <p>
                Marlborough Builders is a registered limited company (Companies
                House no. 15420682). You deal with us directly from the first phone
                call through to the finished job — no subcontractors passing
                messages, no layers between you and the people doing the work.
              </p>
            </div>
            <div className="about-van-col">
              <Image
                src="/assets/images/gallery/general/marlborough-van.png"
                alt="Marlborough Builders van on site"
                width={1220}
                height={680}
                className="about-van"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section about-values-section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">How we work</p>
            <h2>Our approach</h2>
          </div>

          <div className="trust-grid">
            {values.map((item) => (
              <article className="trust-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container cta-panel">
          <div>
            <p className="eyebrow">Get in touch</p>
            <h2>Want to talk about a project?</h2>
            <p>
              Get in touch for a clear quotation, practical advice and work
              carried out to a proper standard.
            </p>
          </div>
          <a href="/contact" className="button button-primary">
            Contact us
          </a>
        </div>
      </section>
    </main>
  );
}
