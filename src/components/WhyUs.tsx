import { CheckCircle2 } from "lucide-react";
import SectionBadge from "./SectionBadge";
import { COPY } from "@/lib/constants";

export default function WhyUs() {
  return (
    <section className="bg-shock-dark py-section-mobile md:py-section relative overflow-hidden">
      {/* Diagonal slash decoration */}
      <div
        className="absolute top-0 left-0 w-1/3 h-full bg-shock-black/40 pointer-events-none"
        style={{
          clipPath: "polygon(0 0, 100% 0, 80% 100%, 0% 100%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: bold headline */}
          <div className="reveal">
            <SectionBadge>{COPY.whyUs.badge}</SectionBadge>
            <h2 className="font-syne font-bold text-white text-4xl md:text-5xl leading-tight mb-6">
              {COPY.whyUs.headline}
            </h2>
            <p className="text-shock-muted text-lg leading-relaxed">
              {COPY.whyUs.subheadline}
            </p>
          </div>

          {/* Right: benefit list */}
          <div className="flex flex-col gap-6">
            {COPY.whyUs.items.map((item, i) => (
              <div
                key={i}
                className="reveal flex gap-4 p-5 rounded-xl bg-shock-surface border border-shock-border hover:border-shock-border-visible transition-colors duration-200"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <CheckCircle2
                  size={22}
                  className="text-shock-blue flex-shrink-0 mt-0.5"
                />
                <div>
                  <h4 className="font-syne font-bold text-white mb-1">
                    {item.title}
                  </h4>
                  <p className="text-shock-muted text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
