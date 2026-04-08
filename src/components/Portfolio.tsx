"use client";

import InstagramEmbed from "./InstagramEmbed";
import SectionBadge from "./SectionBadge";
import { COPY } from "@/lib/constants";

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-shock-black py-section-mobile md:py-section overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <SectionBadge>{COPY.portfolio.badge}</SectionBadge>
        <h2 className="font-syne font-bold text-white text-4xl md:text-5xl">
          Content That{" "}
          <span className="text-shock-blue">Converts</span>
        </h2>
      </div>

      {/* Instagram embeds — horizontal scroll */}
      <div
        className="flex gap-6 px-6 pb-4 overflow-x-auto snap-x snap-mandatory scroll-smooth"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {COPY.portfolio.items.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-80 snap-center"
          >
            <div className="rounded-2xl overflow-hidden border border-shock-border">
              <InstagramEmbed url={item.url} />
            </div>
          </div>
        ))}
      </div>

      {/* Fade edge */}
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-shock-black to-transparent pointer-events-none" />

      {/* Instagram profile CTA */}
      <div className="max-w-7xl mx-auto px-6 mt-10 flex items-center justify-center">
        <a
          href="https://www.instagram.com/shockmedia.ca"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-manrope text-shock-muted hover:text-shock-blue transition-colors duration-200 flex items-center gap-2"
        >
          <span>Follow us on Instagram</span>
          <span className="text-shock-border-visible">→</span>
        </a>
      </div>
    </section>
  );
}
