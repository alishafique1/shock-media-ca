import Image from "next/image";
import { Play } from "lucide-react";
import Button from "./Button";
import { COPY } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-shock-black pt-20">
      {/* Background diagonal slash decoration */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full bg-shock-dark/50 pointer-events-none"
        style={{
          clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0% 100%)",
        }}
      />
      <div className="absolute top-1/4 right-[10%] w-px h-1/2 bg-gradient-to-b from-transparent via-shock-blue/20 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-0 grid md:grid-cols-2 gap-12 items-center min-h-screen">
        {/* Left: copy */}
        <div className="flex flex-col items-start">
          <span className="inline-block text-xs font-manrope font-semibold uppercase tracking-[0.14em] text-shock-blue mb-6 border border-shock-blue/30 px-3 py-1.5 rounded-full">
            {COPY.hero.badge}
          </span>

          <h1 className="font-syne font-bold text-white leading-[1.05] mb-6"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}>
            {COPY.hero.headline}
          </h1>

          <p className="text-shock-muted text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
            {COPY.hero.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact">
              <Button size="lg">{COPY.hero.primaryCta}</Button>
            </a>
            <a href="#portfolio">
              <Button variant="secondary" size="lg">
                {COPY.hero.secondaryCta}
              </Button>
            </a>
          </div>
        </div>

        {/* Right: video thumbnail area */}
        <div className="relative flex justify-center items-center">
          <div className="relative w-full max-w-sm aspect-[9/16] rounded-2xl overflow-hidden border border-shock-border-visible group cursor-pointer">
            {/* Gradient background as video placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-shock-blue/30 via-shock-dark to-shock-black" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <div className="relative">
                <div className="absolute inset-0 bg-shock-blue/30 rounded-full blur-xl group-hover:bg-shock-blue/50 transition-all duration-300" />
                <div className="relative w-20 h-20 rounded-full bg-shock-blue/20 border-2 border-shock-blue flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                  <Play size={32} className="text-white ml-1" fill="white" />
                </div>
              </div>
              <span className="text-sm text-shock-muted font-manrope">
                Watch Showreel
              </span>
            </div>
            {/* Bottom gradient overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent" />
          </div>

          {/* Decorative floating badge */}
          <div className="absolute -bottom-4 -left-4 bg-shock-surface border border-shock-border-visible rounded-xl px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-manrope text-shock-muted">
                Reels • TikTok • Shorts
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}