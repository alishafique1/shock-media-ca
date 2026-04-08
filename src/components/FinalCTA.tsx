import { Instagram, Mail, ArrowRight } from "lucide-react";
import Button from "./Button";
import SectionBadge from "./SectionBadge";
import { COPY } from "@/lib/constants";

export default function FinalCTA() {
  return (
    <section id="contact" className="bg-shock-dark py-section-mobile md:py-section relative overflow-hidden">
      {/* Diagonal slash decoration */}
      <div
        className="absolute bottom-0 right-0 w-1/2 h-full bg-shock-black/30 pointer-events-none"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 20% 100%)",
        }}
      />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <SectionBadge className="block text-center">{COPY.finalCta.badge}</SectionBadge>

        <h2 className="font-syne font-bold text-white text-4xl md:text-6xl leading-tight mb-6">
          {COPY.finalCta.headline}
        </h2>

        <p className="text-shock-muted text-lg md:text-xl leading-relaxed mb-10">
          {COPY.finalCta.subheadline}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a href="https://www.instagram.com/shockmedia.ca" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="gap-2">
              {COPY.finalCta.cta}
              <ArrowRight size={18} />
            </Button>
          </a>
        </div>

        {/* Contact details */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href={COPY.finalCta.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-shock-muted hover:text-shock-blue transition-colors duration-200"
          >
            <Instagram size={16} />
            <span className="text-sm font-manrope">{COPY.finalCta.instagram}</span>
          </a>
          <span className="hidden sm:block text-shock-border-visible">|</span>
          <a
            href={`mailto:${COPY.finalCta.email}`}
            className="flex items-center gap-2 text-shock-muted hover:text-shock-blue transition-colors duration-200"
          >
            <Mail size={16} />
            <span className="text-sm font-manrope">{COPY.finalCta.email}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
