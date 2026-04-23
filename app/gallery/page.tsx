"use client";

import { useState } from "react";
import Image from "next/image";

const galleryItems = [
  { category: "joinery", image: "/assets/images/gallery/joinery/kitchen-installation.png", title: "Fitted kitchen", text: "Handleless units, worktops and splashback fitted for a clean, practical finish." },
  { category: "roofing", image: "/assets/images/gallery/roofing/natural-slate-roof.jpg", title: "Natural slate roof", text: "Natural slate roofing completed with clean lines and tidy detailing." },
  { category: "joinery", image: "/assets/images/gallery/joinery/oak-metal-balustrade-detail.jpg", title: "Oak and metal balustrade", text: "New oak handrail and black metal balustrade fitted to an existing staircase." },
  { category: "roofing", image: "/assets/images/gallery/roofing/re-roof-battens-and-membrane.jpg", title: "Re-roofing works", text: "New membrane and battens fitted to prepare the roof for a full re-cover." },
  { category: "joinery", image: "/assets/images/gallery/joinery/commercial-interior-fit-out.jpeg", title: "Commercial interior fit-out", text: "Partitions, doors and finishing work completed to create a clean, practical workspace." },
  { category: "roofing", image: "/assets/images/gallery/roofing/flat-roof-finish.jpg", title: "Flat roof finish", text: "Flat roofing completed with neat trims and a rooflight set cleanly into the roof." },
  { category: "joinery", image: "/assets/images/gallery/joinery/interior-timber-frame-and-joists.jpg", title: "Internal timber framing", text: "Stud walls and joists built out to form the main structure of the space." },
  { category: "roofing", image: "/assets/images/gallery/roofing/chimney-lead-flashing.jpg", title: "Chimney lead flashing", text: "Lead flashing fitted neatly around the chimney base to keep the roof weather-tight." },
  { category: "joinery", image: "/assets/images/gallery/joinery/outbuilding-shed-door-installation-collage.jpg", title: "Timber garage doors", text: "Bespoke timber garage doors made and fitted to suit the outbuilding." },
  { category: "roofing", image: "/assets/images/gallery/roofing/new-roof-tiling-detail.jpg", title: "New roof tiling", text: "New roof tiles laid over fresh underlay to give the roof a neat, even finish." },
];

type Filter = "all" | "joinery" | "roofing";

export default function GalleryPage() {
  const [filter, setFilter] = useState<Filter>("all");

  const visible =
    filter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter);

  return (
    <main className="site-shell">
      <section className="section subpage-hero">
        <div className="container">
          <p className="eyebrow">Project gallery</p>
          <h1>Recent joinery and roofing work</h1>
          <p className="subpage-hero-lead">
            A selection of recent jobs from both divisions. See more on Instagram
            through our joinery and roofing accounts.
          </p>
        </div>
      </section>

      <div className="container gallery-cta-bar">
        <p>
          Like what you see? If you want something similar,{" "}
          <a href="tel:07939551481">call 07939 551481</a> or{" "}
          <a href="/contact">get a quote</a>.
        </p>
      </div>

      <section className="section">
        <div className="container">
          <div className="gallery-filters">
            {(["all", "joinery", "roofing"] as Filter[]).map((f) => (
              <button
                key={f}
                className={`filter-btn${filter === f ? " filter-btn-active" : ""}`}
                onClick={() => setFilter(f)}
              >
                {f === "all" ? "All" : f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>

          <div className="gallery-grid">
            {visible.map((item) => (
              <article className="featured-work-card" key={item.title}>
                <div className="featured-work-image-wrap">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="featured-work-image"
                    sizes="(max-width: 640px) 100vw, (max-width: 960px) 50vw, 33vw"
                  />
                </div>
                <div className="featured-work-content">
                  <p className="card-kicker">{item.category}</p>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="gallery-instagram">
            <p>
              See more recent joinery work on{" "}
              <a
                href="https://www.instagram.com/marlboroughjoinerydivision/"
                target="_blank"
                rel="noopener noreferrer"
              >
                @marlboroughjoinerydivision
              </a>{" "}
              and more recent roofing work on{" "}
              <a
                href="https://www.instagram.com/marlborough_roofing/"
                target="_blank"
                rel="noopener noreferrer"
              >
                @marlboroughroofing
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container cta-panel">
          <div>
            <p className="eyebrow">Get in touch</p>
            <h2>Want something similar?</h2>
            <p>
              Give us a call or send a message and we can talk through your job.
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
