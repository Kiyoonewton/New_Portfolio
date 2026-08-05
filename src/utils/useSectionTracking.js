"use client";
import { useEffect } from "react";
import { trackEvent } from "./analytics";

const SECTIONS = [
  { id: "about", label: "Viewed About section" },
  { id: "work", label: "Viewed Experience section" },
  { id: "project", label: "Viewed Projects section" },
  { id: "contact", label: "Viewed Contact section" },
];

export default function useSectionTracking(ready) {
  useEffect(() => {
    if (!ready) return;

    const seen = new Set();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || seen.has(entry.target.id)) return;
          seen.add(entry.target.id);

          const section = SECTIONS.find((s) => s.id === entry.target.id);
          if (!section) return;

          trackEvent({
            event: "section_view",
            label: section.label,
            page: window.location.pathname,
          });
        });
      },
      { threshold: 0.4 }
    );

    const elements = SECTIONS.map((s) => document.getElementById(s.id)).filter(Boolean);
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [ready]);
}
