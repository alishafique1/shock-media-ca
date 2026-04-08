import { Zap, ArrowRight } from "lucide-react";
import Button from "./Button";
import { COPY } from "@/lib/constants";

// Social media icon SVGs
function InstagramIcon({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

function TikTokIcon({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V9.3a8.18 8.18 0 004.77 1.52V7.23a4.85 4.85 0 01-1-.54z" fill="currentColor" />
    </svg>
  );
}

function YouTubeIcon({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.75 15.02l5.75-3.27-5.75-3.27v6.54z" fill="currentColor" />
    </svg>
  );
}

// Lightning bolt SVG connecting lines between icons
function LightningNetwork() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 400 400"
      preserveAspectRatio="xMidYMid meet"
      style={{ zIndex: 0 }}
    >
      <defs>
        <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0066FF" stopOpacity="0" />
          <stop offset="50%" stopColor="#0066FF" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#0066FF" stopOpacity="0" />
        </linearGradient>
        <filter id="lineGlow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Instagram → TikTok */}
      <polyline
        points="90,130 200,180 310,120"
        fill="none"
        stroke="url(#lineGrad)"
        strokeWidth="1.5"
        filter="url(#lineGlow)"
        className="animate-lightning-flicker"
        style={{ animationDelay: "0s" }}
      />

      {/* Instagram → YouTube */}
      <polyline
        points="90,130 200,260 200,310"
        fill="none"
        stroke="url(#lineGrad)"
        strokeWidth="1.5"
        filter="url(#lineGlow)"
        className="animate-lightning-flicker"
        style={{ animationDelay: "1.5s" }}
      />

      {/* TikTok → YouTube */}
      <polyline
        points="310,120 310,200 200,310"
        fill="none"
        stroke="url(#lineGrad)"
        strokeWidth="1.5"
        filter="url(#lineGlow)"
        className="animate-lightning-flicker"
        style={{ animationDelay: "0.8s" }}
      />

      {/* Center zap */}
      <g className="animate-float-bolt" style={{ animationDelay: "0.4s" }}>
        <Zap
          size={28}
          className="text-shock-blue"
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            filter: "drop-shadow(0 0 8px rgba(0,102,255,0.8))",
          }}
        />
      </g>
    </svg>
  );
}

// Individual social icon with glow
function SocialIcon({
  children,
  top,
  left,
  delay = 0,
}: {
  children: React.ReactNode;
  top: string;
  left: string;
  delay?: number;
}) {
  return (
    <div
      className="absolute flex items-center justify-center"
      style={{ top, left, animationDelay: `${delay}s` }}
    >
      {/* Outer glow ring */}
      <div
        className="absolute w-20 h-20 rounded-full animate-electric-pulse"
        style={{
          background: "radial-gradient(circle, rgba(0,102,255,0.15) 0%, transparent 70%)",
        }}
      />
      {/* Icon container */}
      <div
        className="relative z-10 w-16 h-16 rounded-2xl bg-[#060C1F]/80 border border-shock-blue/30 backdrop-blur-sm flex items-center justify-center text-shock-blue/80 hover:text-shock-blue transition-colors duration-300"
        style={{ animationDelay: `${delay}s` }}
      >
        {children}
      </div>
    </div>
  );
}

// Large SVG lightning bolt diagonal slash
function LightningSlash() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <svg
        viewBox="0 0 100 600"
        className="absolute top-0 left-0 w-full h-full"
        preserveAspectRatio="none"
        style={{ zIndex: 1 }}
      >
        <defs>
          <linearGradient id="boltGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0066FF" stopOpacity="0" />
            <stop offset="35%" stopColor="#0066FF" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#00AAFF" stopOpacity="1" />
            <stop offset="65%" stopColor="#0066FF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0066FF" stopOpacity="0" />
          </linearGradient>
          <filter id="boltGlow">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <polygon
          points="55,0 70,220 90,215 40,600 50,340 20,350"
          fill="url(#boltGrad)"
          filter="url(#boltGlow)"
          className="animate-lightning-flicker"
        />
      </svg>

      {/* Horizontal lightning branches */}
      <div
        className="absolute top-1/3 left-0 w-full h-px overflow-visible"
        style={{ animation: "lightningStrike 5s ease-in-out infinite 0.5s" }}
      >
        <div className="h-full bg-gradient-to-r from-transparent via-shock-blue/50 to-transparent" />
      </div>
      <div
        className="absolute top-1/2 left-0 w-3/4 h-px overflow-visible"
        style={{ animation: "lightningStrike 7s ease-in-out infinite 2s" }}
      >
        <div className="h-full bg-gradient-to-r from-transparent via-shock-blue/30 to-transparent" />
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* ── Background ── */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#060C1F] via-[#080D20] to-[#000000] pointer-events-none" />

      {/* ── Ambient glows ── */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-shock-blue/8 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-indigo-500/6 rounded-full blur-[80px] pointer-events-none" />

      {/* ── Subtle grid texture ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* ── Lightning slash ── */}
      <LightningSlash />

      {/* ── Main content grid ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-0 grid md:grid-cols-2 gap-16 items-center min-h-screen">

        {/* ── Left: copy ── */}
        <div className="flex flex-col items-start">
          {/* Badge */}
          <div className="animate-electric-border rounded-full px-4 py-1.5 mb-6 border bg-shock-blue/10">
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
          <p className="text-shock-muted text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
            {COPY.hero.subheadline}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact">
              <Button size="lg" className="gap-2 group">
                {COPY.hero.primaryCta}
                <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
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

        {/* ── Right: Social icons lightning network ── */}
        <div className="relative flex justify-center items-center py-12">
          {/* Ambient glow behind everything */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-80 h-80 rounded-full bg-shock-blue/10 blur-3xl animate-electric-pulse" />
          </div>

          {/* Icon constellation container */}
          <div className="relative w-80 h-80">
            {/* Lightning network SVG connecting the icons */}
            <LightningNetwork />

            {/* Instagram — top left */}
            <SocialIcon top="15%" left="5%" delay={0}>
              <InstagramIcon size={32} />
            </SocialIcon>

            {/* TikTok — top right */}
            <SocialIcon top="10%" left="55%" delay={0.4}>
              <TikTokIcon size={32} />
            </SocialIcon>

            {/* YouTube — bottom center */}
            <SocialIcon top="58%" left="30%" delay={0.8}>
              <YouTubeIcon size={32} />
            </SocialIcon>

            {/* Floating decorative zaps */}
            <div
              className="absolute top-1/2 right-0 animate-float-bolt"
              style={{ animationDelay: "0.3s" }}
            >
              <Zap size={24} className="text-shock-blue/40" />
            </div>
            <div
              className="absolute bottom-4 left-0 animate-float-bolt"
              style={{ animationDelay: "1s" }}
            >
              <Zap size={20} className="text-shock-blue/30" />
            </div>
            <div
              className="absolute top-4 right-1/4 animate-float-bolt hidden md:block"
              style={{ animationDelay: "1.6s" }}
            >
              <Zap size={16} className="text-shock-blue/20" />
            </div>
          </div>

          {/* Platform labels below */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <div className="flex items-center gap-3 bg-[#060C1F]/90 border border-shock-border-visible rounded-full px-5 py-2.5 backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-manrope font-medium text-shock-muted">Instagram</span>
              <span className="text-shock-border-visible">•</span>
              <span className="text-xs font-manrope font-medium text-shock-muted">TikTok</span>
              <span className="text-shock-border-visible">•</span>
              <span className="text-xs font-manrope font-medium text-shock-muted">YouTube</span>
            </div>
            <span className="text-xs font-manrope text-shock-subtle">Dominate every platform</span>
          </div>
        </div>
      </div>

      {/* ── Bottom fade ── */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#000000] to-transparent pointer-events-none" />
    </section>
  );
}
