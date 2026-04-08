import { Play } from "lucide-react";
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

      {/* Horizontal scroll carousel */}
      <div className="relative">
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
              className="flex-shrink-0 w-64 snap-center"
            >
              <div
                className={`relative w-full aspect-[9/16] rounded-2xl overflow-hidden bg-gradient-to-br ${item.gradient} border border-shock-border group cursor-pointer`}
              >
                {/* Play overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/20 transition-all duration-200">
                    <Play size={22} className="text-white ml-0.5" fill="white" />
                  </div>
                </div>

                {/* Bottom info */}
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/90 to-transparent">
                  <h4 className="font-syne font-bold text-white mb-1">
                    {item.title}
                  </h4>
                  <span className="text-xs font-manrope text-shock-muted uppercase tracking-wider">
                    {item.type}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fade edge hint */}
        <div className="absolute right-0 top-0 bottom-4 w-16 bg-gradient-to-l from-shock-black to-transparent pointer-events-none" />
      </div>
    </section>
  );
}