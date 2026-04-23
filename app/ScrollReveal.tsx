"use client";

import { useEffect } from "react";

const SELECTORS = [
  ".trust-card",
  ".featured-work-card",
  ".testimonial-card",
  ".stat-card",
  ".cta-panel",
  ".numbered-card",
  ".audience-panel",
  ".typical-jobs-list li",
  ".service-detail-section",
  ".process-step",
  ".contact-form",
  ".contact-details-card",
  ".about-intro-grid",
  ".gallery-card-clickable",
].join(", ");

export default function ScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(SELECTORS);

    // Apply stagger delays to sibling groups
    const parents = new Set<Element>();
    elements.forEach((el) => {
      if (el.parentElement) parents.add(el.parentElement);
    });
    parents.forEach((parent) => {
      const children = Array.from(parent.children).filter((child) =>
        child.matches(SELECTORS),
      );
      children.forEach((child, i) => {
        (child as HTMLElement).style.transitionDelay = `${i * 0.1}s`;
      });
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    elements.forEach((el) => {
      el.classList.add("reveal");
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
