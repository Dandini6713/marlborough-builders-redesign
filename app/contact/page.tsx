"use client";

import { FormEvent } from "react";

export default function ContactPage() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert("Thanks — we'll be in touch shortly.");
  }

  return (
    <main className="site-shell">
      <section className="section contact-section">
        <div className="container">
          <div className="section-heading">
            <h1>Get in touch</h1>
            <p>
              Tell us what you need and we will give you honest advice and a
              clear price. No obligation.
            </p>
          </div>

          <div className="contact-grid">
            <form className="contact-form" onSubmit={handleSubmit}>
              <label className="form-field">
                <span>Name</span>
                <input type="text" name="name" required />
              </label>

              <label className="form-field">
                <span>Phone</span>
                <input type="tel" name="phone" />
              </label>

              <label className="form-field">
                <span>Email</span>
                <input type="email" name="email" required />
              </label>

              <label className="form-field">
                <span>What do you need?</span>
                <select name="service" defaultValue="">
                  <option value="" disabled>Select a service</option>
                  <option value="Joinery">Joinery</option>
                  <option value="Roofing">Roofing</option>
                  <option value="Both">Both</option>
                  <option value="Not sure">Not sure</option>
                </select>
              </label>

              <label className="form-field">
                <span>Message</span>
                <textarea name="message" rows={5} required />
              </label>

              <button type="submit" className="button button-primary">
                Send enquiry
              </button>
            </form>

            <aside className="contact-details-card">
              <h2>Contact details</h2>

              <dl className="contact-dl">
                <dt>Phone</dt>
                <dd>
                  <a href="tel:07939551481">07939 551481</a>
                </dd>

                <dt>Address</dt>
                <dd>28 Marlborough Road, Prescot, Merseyside, L34 6LE</dd>

                <dt>Hours</dt>
                <dd>Monday to Friday, 9:00am to 5:30pm</dd>

                <dt>Company no.</dt>
                <dd>15420682</dd>
              </dl>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
