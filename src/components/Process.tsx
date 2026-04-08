import SectionBadge from "./SectionBadge";
import { COPY } from "@/lib/constants";

export default function Process() {
  return (
    <section id="process" className="bg-shock-dark py-section-mobile md:py-section relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <SectionBadge className="block text-center">{COPY.process.badge}</SectionBadge>
          <h2 className="font-syne font-bold text-white text-4xl md:text-5xl">
            Three Steps to{" "}
            <span className="text-shock-blue">Growth</span>
          </h2>
        </div>

        <div className="relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-10 left-[16.67%] right-[16.67%] h-px bg-shock-border" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6">
            {COPY.process.steps.map((step, i) => (
              <div
                key={i}
                className="reveal text-center flex flex-col items-center"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="relative z-10 w-20 h-20 rounded-full bg-shock-black border-2 border-shock-blue flex items-center justify-center mb-6">
                  <span className="font-syne font-bold text-shock-blue"
                    style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}>
                    {step.number}
                  </span>
                </div>
                <h3 className="font-syne font-bold text-white text-xl mb-3">
                  {step.title}
                </h3>
                <p className="text-shock-muted text-sm leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}