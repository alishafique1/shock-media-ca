"use client";

import { useEffect, useRef } from "react";

export function useScrollReveal() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );

    // Observe all .reveal children
    const reveals = el.querySelectorAll(".reveal");
    reveals.forEach((r) => observer.observe(r));

    // Also observe the container itself
    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return ref;
}