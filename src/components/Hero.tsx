import Image from "next/image";
import { Zap, ArrowRight } from "lucide-react";
import Button from "./Button";
import { COPY } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* ── Brighter gradient background ── */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#05091E] via-[#08091A] to-[#000000] pointer-events-none" />

      {/* ── Ambient glow blobs ── */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-shock-blue/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-indigo-500/8 rounded-full blur-3xl pointer-events-none" />

      {/* ── Static grid lines (subtle texture) ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* ── Lightning bolt decorative elements ── */}
      {/* Top-left bolt */}
      <div className="absolute top-24 left-12 animate-lightning-flicker pointer-events-none">
        <Zap size={32} className="text-shock-blue drop-shadow-[0_0_8px_rgba(0,102,255,0.8)]" />
      </div>
      {/* Top-right bolt */}
      <div
        className="absolute top-32 right-20 animate-lightning-flicker pointer-events-none"
        style={{ animationDelay: "1.3s" }}
      >
        <Zap size={24} className="text-shock-blue/60" />
      </div>
      {/* Mid-left bolt */}
      <div
        className="absolute top-1/2 left-8 animate-lightning-flicker pointer-events-none hidden md:block"
        style={{ animationDelay: "0.7s" }}
      >
        <Zap size={18} className="text-shock-blue/40" />
      </div>

      {/* ── Electric vertical lines ── */}
      <div className="absolute right-[15%] top-0 w-px h-full pointer-events-none overflow-hidden">
        <div
          className="w-full bg-gradient-to-b from-transparent via-shock-blue/30 to-transparent"
          style={{ animation: "lightningStrike 6s ease-in-out infinite 1s" }}
        />
      </div>
      <div className="absolute right-[25%] top-0 w-px h-full pointer-events-none overflow-hidden hidden lg:block">
        <div
          className="w-full bg-gradient-to-b from-transparent via-shock-blue/15 to-transparent"
          style={{ animation: "lightningStrike 8s ease-in-out infinite 3s" }}
        />
      </div>

      {/* ── Scan line sweep ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.04]">
        <div
          className="absolute left-0 right-0 h-px bg-white"
          style={{ animation: "scanLine 8s linear infinite" }}
        />
      </div>

      {/* ── Diagonal slash ── */}
      <div
        className="absolute top-0 right-0 w-2/5 h-full pointer-events-none"
        style={{
          clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)",
          background: "linear-gradient(135deg, rgba(0,102,255,0.06) 0%, transparent 60%)",
        }}
      />

      {/* ── Main content grid ── */}
      <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-0 grid md:grid-cols-2 gap-12 items-center min-h-screen">

        {/* ── Left: copy ── */}
        <div className="flex flex-col items-start">
          {/* Badge */}
          <div className="animate-electric-border rounded-full px-4 py-1.5 mb-6 border bg-shock-blue/5">
            <span className="text-xs font-manrope font-semibold uppercase tracking-[0.14em] text-shock-blue">
              {COPY.hero.badge}
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-syne font-bold text-white leading-[1.05] mb-6"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
          >
            {COPY.hero.headline}
          </h1>

          {/* Subheadline */}
          <p className="text-shock-muted text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
            {COPY.hero.subheadline}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact">
              <Button size="lg" className="gap-2 group">
                {COPY.hero.primaryCta}
                <ArrowRight
                  size={18}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Button>
            </a>
            <a href="#portfolio">
              <Button variant="secondary" size="lg">
                {COPY.hero.secondaryCta}
              </Button>
            </a>
          </div>

          {/* Stats row */}
          <div className="flex items-center gap-8 mt-12 pt-8 border-t border-shock-border">
            <div>
              <p className="font-syne font-bold text-white text-2xl">3</p>
              <p className="text-shock-subtle text-xs mt-0.5">Platforms</p>
            </div>
            <div className="w-px h-8 bg-shock-border" />
            <div>
              <p className="font-syne font-bold text-white text-2xl">Toronto</p>
              <p className="text-shock-subtle text-xs mt-0.5">Based</p>
            </div>
            <div className="w-px h-8 bg-shock-border" />
            <div>
              <p className="font-syne font-bold text-shock-blue text-2xl">24hr</p>
              <p className="text-shock-subtle text-xs mt-0.5">Delivery</p>
            </div>
          </div>
        </div>

        {/* ── Right: Visual — electric logo showcase ── */}
        <div className="relative flex justify-center items-center">
          {/* Glow ring behind logo */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-72 h-72 rounded-full bg-shock-blue/10 blur-3xl animate-electric-pulse" />
          </div>

          {/* Logo card with electric border */}
          <div className="relative animate-electric-border rounded-3xl p-10 bg-[#0A0A1A]/80 border border-shock-blue/30 backdrop-blur-sm">
            <Image
              src={COPY.nav.logo}
              alt="Shock Media Toronto"
              width={280}
              height={80}
              className="w-64 md:w-72 h-auto"
              priority
            />

            {/* Floating bolt decoration */}
            <div
              className="absolute -top-3 -right-3 animate-float-bolt"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="w-10 h-10 rounded-xl bg-shock-blue/20 border border-shock-blue/40 flex items-center justify-center backdrop-blur-sm">
                <Zap size={20} className="text-shock-blue" />
              </div>
            </div>
            <div
              className="absolute -bottom-3 -left-3 animate-float-bolt"
              style={{ animationDelay: "1.2s" }}
            >
              <div className="w-8 h-8 rounded-lg bg-shock-blue/15 border border-shock-blue/30 flex items-center justify-center">
                <Zap size={16} className="text-shock-blue/80" />
              </div>
            </div>
          </div>

          {/* Platform badges */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-[#0A0A1A]/90 border border-shock-border-visible rounded-full px-5 py-2.5 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs font-manrope font-medium text-shock-muted">
              Instagram Reels
            </span>
            <span className="text-shock-border-visible">•</span>
            <span className="text-xs font-manrope font-medium text-shock-muted">TikTok</span>
            <span className="text-shock-border-visible">•</span>
            <span className="text-xs font-manrope font-medium text-shock-muted">Shorts</span>
          </div>
        </div>
      </div>

      {/* ── Bottom fade into next section ── */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#000000] to-transparent pointer-events-none" />
    </section>
  );
}
