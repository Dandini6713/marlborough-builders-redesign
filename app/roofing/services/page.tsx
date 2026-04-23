const sections = [
  {
    id: "slating",
    nav: "Slating",
    title: "Natural slate roofing",
    text: "Slate remains one of the most durable and attractive roofing materials available, but only when it is specified and fixed correctly. We install new slate roofs and carry out full slate re-roofs for homes and businesses alike. Different slate types suit different budgets and property styles, so we advise on the sensible route rather than pushing one answer for every job.",
    bullets: [
      "Natural slate new installations",
      "Full slate re-roofs",
      "Targeted slate repair and replacement",
      "Suitable for heritage and higher-detail properties",
    ],
  },
  {
    id: "tiling",
    nav: "Tiling",
    title: "Roof tiling — concrete, clay and interlocking systems",
    text: "We install all major roof tile types and advise on where each system makes the most sense. The aim is not just a watertight roof, but one that is proportionate to the property and realistic for the client's budget. Correct mortar work, fixings, alignment and finishing details are what separate reliable tiled roofs from those that start to fail early.",
    bullets: [
      "Concrete and clay tile installations",
      "Interlocking tile systems",
      "Full re-tiling projects",
      "Roofing packages for new-build work",
    ],
  },
  {
    id: "reroofs",
    nav: "Re-roofs",
    title: "Full roof replacement done right",
    text: "A full re-roof is a significant investment, so it should begin with proper inspection, not guesswork. We strip back, assess the underlying condition and rebuild the roof to suit the actual requirement. Just as importantly, we are clear when a targeted repair will solve the issue and a full replacement is unnecessary.",
    bullets: [
      "Full strip and replacement",
      "Inspection of deck, felt and battens",
      "Structural repair where required",
      "Domestic and commercial re-roofing",
    ],
  },
  {
    id: "flat-roofing",
    nav: "Flat roofing",
    title: "Flat roofing — felt, EPDM and GRP",
    text: "We install three main flat roofing systems and explain the trade-offs between them so clients can make a better decision. That means more clarity around lifespan, finish, budget and where each system works best. Correct falls, drainage and edge detailing are a major part of making flat roofs last, so they are treated as part of the system rather than an afterthought.",
    bullets: [
      "Torch-on felt systems",
      "EPDM rubber roofing",
      "GRP fibreglass flat roofs",
      "Domestic and commercial flat roof installations",
    ],
  },
  {
    id: "lead-work",
    nav: "Lead work",
    title: "Lead flashings, valleys and chimney details",
    text: "Poor leadwork is a common cause of leaks, especially around abutments, valleys and chimneys. We treat it as specialist work — correct steps, laps and allowance for thermal movement. This matters most on roofs where neat detailing and long-term durability both need to be taken seriously.",
    bullets: [
      "Chimney flashings and ridge details",
      "Valley gutters and abutments",
      "Step flashings",
      "Bespoke lead features",
    ],
  },
  {
    id: "roof-lights",
    nav: "Roof lights",
    title: "Velux windows and roof lights",
    text: "We supply and install Velux windows and roof lights with the correct flashing systems and integration into the surrounding roof covering. The joinery and structural opening work can also be coordinated where required. Done well, roof lights add value and improve the space. Done badly, they become a source of ongoing leaks and callbacks.",
    bullets: [
      "Velux supply and installation",
      "Flat roof light installations",
      "Correct flashing and weatherproofing",
      "Standard and non-standard configurations",
    ],
  },
  {
    id: "repairs",
    nav: "Repairs",
    title: "Leaks, storm damage and urgent roof repairs",
    text: "We respond to leaks, storm damage, slipped coverings and failed flashing details, helping clients understand both the immediate fix and any follow-on work that may be required. For many clients, reassurance comes from clarity here: what is temporary, what is permanent and what should happen next.",
    bullets: [
      "Emergency leak response",
      "Storm damage and slipped coverings",
      "Flashing and junction repairs",
      "Maintenance inspections and planned repairs",
    ],
  },
  {
    id: "guttering",
    nav: "Guttering",
    title: "Guttering, fascias and soffits",
    text: "We install and replace guttering, fascias, soffits and downpipes, either as stand-alone works or alongside wider roofing projects where it is more efficient to handle everything together. Correct falls, sizing and fixing details matter here just as much as on the main roof, particularly where poor drainage is already causing damp or staining issues below.",
    bullets: [
      "UPVC gutter replacement and installation",
      "Fascia and soffit upgrades",
      "Downpipe work and roofline coordination",
      "Cleaning and ongoing maintenance support",
    ],
  },
];

export default function RoofingServicesPage() {
  return (
    <main className="site-shell">
      <section className="section subpage-hero">
        <div className="container">
          <p className="eyebrow">Roofing services</p>
          <h1>Roofing services we cover</h1>
          <p className="subpage-hero-lead">
            From repairs and replacements through to lead work, flat roofing and
            roof windows.
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
          <p className="anchor-nav-label">Eight service areas we cover</p>
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
            <h2>Need to discuss roofing work?</h2>
            <p>
              Tell us what is going on and we will talk you through the sensible
              next step.
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
