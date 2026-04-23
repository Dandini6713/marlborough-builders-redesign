const sections = [
  {
    id: "fitted-furniture",
    nav: "Fitted furniture",
    title: "Made to suit the room, not forced into it",
    text: "We design and fit wardrobes, shelving, alcove units, media walls and home office furniture around the shape of the property. That is particularly valuable in period homes, extensions and loft spaces where off-the-shelf joinery often wastes space. Every project is measured carefully and finished to suit the interior, whether that means painted, lacquered or natural timber surfaces.",
    bullets: [
      "Fitted wardrobes and bedroom storage",
      "Alcove units, shelving and display joinery",
      "Home office furniture and desk systems",
      "Media walls and built-in living space storage",
    ],
  },
  {
    id: "staircases",
    nav: "Staircases",
    title: "Staircase installations and refurbishments",
    text: "We install new staircase systems and refurbish existing flights, including balustrades, handrails, trims and finishing details. The aim is always a staircase that feels solid, in proportion to the house and finished properly for the space. We work in oak, pine or painted finishes to suit both traditional and more contemporary interiors.",
    bullets: [
      "New staircase installations",
      "Refurbishments and re-finishing",
      "Oak, pine and painted solutions",
      "Balustrade and handrail work",
    ],
  },
  {
    id: "fix-carpentry",
    nav: "Fix carpentry",
    title: "First and second fix carpentry for renovations and extensions",
    text: "We carry out framing and structural work at first fix stage, then return for second fix elements such as architraves, skirting, internal doors, linings and flooring. This side of the division is especially useful for contractors, developers and homeowners managing extensions, refurbishments and staged building works.",
    bullets: [
      "Door frames, linings and internal finishing",
      "Skirting, architraves and trims",
      "Flooring installation",
      "Carpentry packages for extensions and renovations",
    ],
  },
  {
    id: "timber-framing",
    nav: "Timber framing",
    title: "Stud walls, framing and structural timber work",
    text: "We construct stud partition walls, framed elements and timber structures for extensions, loft conversions, garage conversions and commercial projects. Where drawings or engineering information are provided, we work to them. If it is not yet clear what is needed, we help you pin down the right next step before work starts.",
    bullets: [
      "Stud partition walls and internal framing",
      "Timber frame extension work",
      "Loft and garage conversion carpentry",
      "Commercial structural carpentry support",
    ],
  },
  {
    id: "outdoor-joinery",
    nav: "Outdoor joinery",
    title: "Outdoor timber work built to handle the elements",
    text: "We take on selected outdoor joinery such as pergolas, timber screens and exterior timber features where the job needs to be measured right and finished cleanly. This suits domestic projects where the outside of the property needs the same standard of fitting and detailing as the work inside it.",
    bullets: [
      "Pergolas and simple timber structures",
      "Timber screens and privacy features",
      "External storage and utility joinery",
      "Weather-aware fixing and finishing",
    ],
  },
  {
    id: "fencing-gates",
    nav: "Fencing & gates",
    title: "Fencing and gates supplied and fitted",
    text: "We supply and install timber fencing, boundary panels and side gates, with an eye on durability, privacy and overall finish. Whether it is a full run of fencing or a straightforward gate replacement, the work is measured on site and fitted to suit rather than forced in.",
    bullets: [
      "Timber fencing and boundary panels",
      "Side gates and framed gate sets",
      "Posts, rails and treated timber installation",
      "Practical advice on layout, privacy and finish",
    ],
  },
  {
    id: "commercial-joinery",
    nav: "Commercial joinery",
    title: "Joinery for commercial and business premises",
    text: "We take on commercial joinery projects including fit-outs, shopfront interiors, partitions, furniture and site carpentry. The approach is shaped around commercial timescales and the realities of working around other trades or occupied premises. Where required, we can phase work to reduce disruption and keep the space usable throughout.",
    bullets: [
      "Retail and shop fit-out joinery",
      "Office partitions and fitted work",
      "Bar and hospitality joinery",
      "Commercial site carpentry support",
    ],
  },
];

export default function JoineryServicesPage() {
  return (
    <main className="site-shell">
      <section className="section subpage-hero">
        <div className="container">
          <p className="eyebrow">Detailed joinery services</p>
          <h1>Joinery services we cover</h1>
          <p className="subpage-hero-lead">
            Everything from fitted furniture and staircases to structural
            carpentry and commercial fit-outs.
          </p>
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

      <div className="container">
        <nav className="anchor-nav" aria-label="Service sections">
          <p className="anchor-nav-label">Seven service areas we cover</p>
          <ul>
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`}>{s.nav}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {sections.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          className={`section service-detail-section${i % 2 === 1 ? " service-detail-alt" : ""}`}
        >
          <div className="container service-detail-inner">
            <div className="service-detail-copy">
              <h2>{s.title}</h2>
              <p>{s.text}</p>
            </div>
            <ul className="service-detail-bullets">
              {s.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      <section className="section cta-section">
        <div className="container cta-panel">
          <div>
            <p className="eyebrow">Get in touch</p>
            <h2>Need advice on a joinery job?</h2>
            <p>
              Tell us what you need and we will advise on the best way to tackle
              it.
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
