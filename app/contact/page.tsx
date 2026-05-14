"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactPage() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
      subject: "New enquiry from marlboroughbuilders.com",
      name: data.get("name"),
      phone: data.get("phone"),
      email: data.get("email"),
      service: data.get("service"),
      message: data.get("message"),
    };

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      const result = await res.json();
      if (res.ok && result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
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

              <button
                type="submit"
                className="button button-primary"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending..." : "Send enquiry"}
              </button>

              {status === "success" && (
                <p className="form-message form-message-success" role="status">
                  Thanks for your enquiry. We will be in touch shortly.
                </p>
              )}
              {status === "error" && (
                <p className="form-message form-message-error" role="alert">
                  Something went wrong. Please try calling us on 07939 551481.
                </p>
              )}
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
