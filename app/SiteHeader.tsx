"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/joinery", label: "Joinery" },
  { href: "/roofing", label: "Roofing" },
  { href: "/gallery", label: "Gallery" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  function isActive(href: string) {
    return pathname === href || pathname.startsWith(href + "/");
  }

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
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={isActive(link.href) ? "nav-active" : undefined}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/contact"
            className={`button button-secondary${isActive("/contact") ? " nav-active" : ""}`}
          >
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
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={isActive(link.href) ? "nav-active" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/contact"
            className={isActive("/contact") ? "nav-active" : undefined}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
          <div className="mobile-nav-actions">
            <a className="phone-link" href="tel:07939551481">07939 551481</a>
            <a className="button button-primary button-sm" href="/contact" onClick={() => setMenuOpen(false)}>Get a quote</a>
          </div>
        </nav>
      )}
    </header>
  );
}
