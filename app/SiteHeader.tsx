"use client";

import { useState } from "react";
import Image from "next/image";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
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
            <span className="brand-subtitle">Joinery &amp; Roofing</span>
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

        <div className="header-actions">
          <a className="phone-link" href="tel:07939551481">07939 551481</a>
          <a className="button button-primary button-sm" href="/contact">Get a quote</a>
        </div>

        <button
          className="burger"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {menuOpen && (
        <nav className="mobile-nav" aria-label="Mobile">
          <a href="/about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="/joinery" onClick={() => setMenuOpen(false)}>Joinery</a>
          <a href="/roofing" onClick={() => setMenuOpen(false)}>Roofing</a>
          <a href="/gallery" onClick={() => setMenuOpen(false)}>Gallery</a>
          <a href="/contact" onClick={() => setMenuOpen(false)}>Contact</a>
          <div className="mobile-nav-actions">
            <a className="phone-link" href="tel:07939551481">07939 551481</a>
            <a className="button button-primary button-sm" href="/contact" onClick={() => setMenuOpen(false)}>Get a quote</a>
          </div>
        </nav>
      )}
    </header>
  );
}
