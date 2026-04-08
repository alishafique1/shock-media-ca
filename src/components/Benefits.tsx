import { Eye, PhoneCall, Award, RefreshCw } from "lucide-react";
import SectionBadge from "./SectionBadge";
import { COPY } from "@/lib/constants";

const ICON_MAP: Record<string, React.ElementType> = {
  Eye,
  PhoneCall,
  Award,
  RefreshCw,
};

export default function Benefits() {
  return (
    <section className="bg-shock-black py-section-mobile md:py-section">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <SectionBadge className="block text-center">{COPY.benefits.badge}</SectionBadge>
          <h2 className="font-syne font-bold text-white text-4xl md:text-5xl">
            What You <span className="text-shock-blue">Actually</span> Get
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {COPY.benefits.items.map((item, i) => {
            const Icon = ICON_MAP[item.icon];
            return (
              <div
                key={i}
                className="reveal text-center flex flex-col items-center"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-shock-blue/10 border border-shock-blue/20 flex items-center justify-center mb-5">
                  <Icon size={28} className="text-shock-blue" />
                </div>
                <h3 className="font-syne font-bold text-white text-xl mb-3">
                  {item.stat}
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