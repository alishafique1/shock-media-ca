import { Video, Compass, Calendar, Clapperboard } from "lucide-react";
import SectionBadge from "./SectionBadge";
import { COPY } from "@/lib/constants";

const ICON_MAP: Record<string, React.ElementType> = {
  Video,
  Compass,
  Calendar,
  Clapperboard,
};

export default function Services() {
  return (
    <section id="services" className="bg-shock-black py-section-mobile md:py-section">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <SectionBadge>{COPY.services.badge}</SectionBadge>
          <h2 className="font-syne font-bold text-white text-4xl md:text-5xl leading-tight">
            Everything You Need to{" "}
            <span className="text-shock-blue">Dominate</span> Social
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {COPY.services.items.map((item, i) => {
            const Icon = ICON_MAP[item.icon];
            return (
              <div
                key={i}
                className="reveal group bg-shock-surface border border-shock-border rounded-xl p-8 hover:border-shock-border-visible hover:-translate-y-1 transition-all duration-200"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-shock-blue/10 border border-shock-blue/20 flex items-center justify-center mb-6 group-hover:bg-shock-blue/20 transition-colors duration-200">
                  <Icon size={22} className="text-shock-blue" />
                </div>
                <h3 className="font-syne font-bold text-white text-lg mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-shock-muted text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
