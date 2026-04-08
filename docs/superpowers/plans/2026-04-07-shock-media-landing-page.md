# Shock Media Toronto — Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** A premium, conversion-focused landing page for Shock Media Toronto — a video content and social media agency targeting local service businesses.

**Architecture:** Single-page Next.js 14 App Router application. Dark "Electric Cinema" aesthetic with electric blue (#0066FF) accent on pure black backgrounds. Sections composed vertically on a single route. CSS custom properties for the color system. Intersection Observer for scroll-triggered fade-in animations. No heavy animation libraries.

**Tech Stack:** Next.js 14, Tailwind CSS v3, Lucide React, Google Fonts (Syne + Manrope), Vercel deployment.

---

## File Map

```
src/
  app/
    layout.tsx            — Root layout, font loading, metadata
    page.tsx              — Composes all sections
    globals.css           — CSS variables, base resets, scrollbar styling
  components/
    Navbar.tsx            — Fixed nav with mobile hamburger
    Hero.tsx              — Full-viewport hero section
    Services.tsx          — 4-card services grid
    WhyUs.tsx             — Split layout with bold statement
    Portfolio.tsx         — Horizontal scroll carousel
    Process.tsx           — 3-step timeline
    Benefits.tsx          — 4-column stats grid
    FinalCTA.tsx          — Conversion section
    Footer.tsx            — Minimal footer
    Button.tsx            — Reusable button (primary + secondary)
    SectionBadge.tsx      — "WHAT WE DO" style labels
  lib/
    constants.ts          — Colors, copy strings, portfolio items
    useScrollReveal.ts    — Intersection Observer hook
```

---

## Task 1: Scaffold Next.js Project

**Files:**
- Create: `package.json`
- Create: `next.config.js`
- Create: `tailwind.config.ts`
- Create: `postcss.config.js`
- Create: `tsconfig.json`
- Create: `.gitignore`

- [ ] **Step 1: Create package.json**

```json
{
  "name": "shock-media-ca",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "14.2.5",
    "react": "^18",
    "react-dom": "^18",
    "lucide-react": "^0.400.0"
  },
  "devDependencies": {
    "typescript": "^5",
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "tailwindcss": "^3.4.1",
    "autoprefixer": "^10.0.1",
    "postcss": "^8",
    "eslint": "^8",
    "eslint-config-next": "14.2.5"
  }
}
```

- [ ] **Step 2: Create next.config.js**

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
```

- [ ] **Step 3: Create tailwind.config.ts**

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "shock-black": "#000000",
        "shock-dark": "#0A0A0A",
        "shock-surface": "#111111",
        "shock-border": "#1A1A1A",
        "shock-border-visible": "#222222",
        "shock-blue": "#0066FF",
        "shock-blue-dark": "#0055DD",
        "shock-muted": "#A0A0A0",
        "shock-subtle": "#666666",
      },
      fontFamily: {
        syne: ["var(--font-syne)", "sans-serif"],
        manrope: ["var(--font-manrope)", "sans-serif"],
      },
      spacing: {
        section: "120px",
        "section-mobile": "80px",
      },
    },
  },
  plugins: [],
};

export default config;
```

- [ ] **Step 4: Create postcss.config.js**

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

- [ ] **Step 5: Create tsconfig.json**

```json
{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": { "@/*": ["./src/*"] }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

- [ ] **Step 6: Create .gitignore**

```
# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
```

- [ ] **Step 7: Install dependencies**

Run: `cd /Users/alishafique/Code/shock-media-ca && npm install`

---

## Task 2: Global Styles, Fonts, and Constants

**Files:**
- Create: `src/app/globals.css`
- Create: `src/lib/constants.ts`

- [ ] **Step 1: Create src/app/globals.css**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --color-black: #000000;
  --color-dark: #0A0A0A;
  --color-surface: #111111;
  --color-border: #1A1A1A;
  --color-border-visible: #222222;
  --color-blue: #0066FF;
  --color-blue-dark: #0055DD;
  --color-white: #FFFFFF;
  --color-muted: #A0A0A0;
  --color-subtle: #666666;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  background-color: var(--color-black);
  color: var(--color-white);
}

body {
  font-family: var(--font-manrope), sans-serif;
  background-color: var(--color-black);
  color: var(--color-white);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Scrollbar styling */
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  background: var(--color-dark);
}
::-webkit-scrollbar-thumb {
  background: var(--color-border-visible);
  border-radius: 3px;
}
::-webkit-scrollbar-thumb:hover {
  background: var(--color-subtle);
}

/* Selection */
::selection {
  background-color: var(--color-blue);
  color: var(--color-white);
}

/* Focus styles */
:focus-visible {
  outline: 2px solid var(--color-blue);
  outline-offset: 2px;
}

/* Reveal animation base */
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
```

- [ ] **Step 2: Create src/lib/constants.ts**

```ts
// Color tokens — single source of truth
export const COLORS = {
  black: "#000000",
  dark: "#0A0A0A",
  surface: "#111111",
  border: "#1A1A1A",
  borderVisible: "#222222",
  blue: "#0066FF",
  blueDark: "#0055DD",
  white: "#FFFFFF",
  muted: "#A0A0A0",
  subtle: "#666666",
} as const;

// Copy / content strings
export const COPY = {
  nav: {
    logo: "/images/logo.png",
    links: [
      { label: "Services", href: "#services" },
      { label: "Portfolio", href: "#portfolio" },
      { label: "Process", href: "#process" },
      { label: "Contact", href: "#contact" },
    ],
    cta: "Get Started",
  },
  hero: {
    badge: "Toronto's Video Content Agency",
    headline: "We Turn Your Business Into Scroll-Stopping Content.",
    subheadline:
      "Short-form video for Instagram Reels, TikTok & YouTube Shorts — built to get your local business seen, remembered, and booked.",
    primaryCta: "Book a Free Strategy Call",
    secondaryCta: "See Our Work",
  },
  services: {
    badge: "What We Do",
    items: [
      {
        icon: "Video",
        title: "Short-Form Video Production",
        description:
          "Scroll-stopping Reels, TikToks & YouTube Shorts that put your business in front of thousands of potential customers.",
      },
      {
        icon: "Compass",
        title: "Content Strategy",
        description:
          "We build a posting roadmap around your business goals — hooks, trends, and content pillars that actually convert.",
      },
      {
        icon: "Calendar",
        title: "Social Media Management Support",
        description:
          "Content calendars, caption frameworks, and posting consistency so your social presence never goes quiet.",
      },
      {
        icon: "Clapperboard",
        title: "Cinematic Videography",
        description:
          "Premium brand films, founder interviews, and client testimonials that make your business look like an industry leader.",
      },
    ],
  },
  whyUs: {
    badge: "Why Shock Media",
    headline: "Your Competitors Are Already Posting. Are You?",
    subheadline:
      "Most local businesses post inconsistently, poorly, or not at all. We fix that.",
    items: [
      {
        title: "Built for Business Results",
        description:
          "We don't make art. We make content that gets views, generates leads, and fills your calendar.",
      },
      {
        title: "Premium Without the Premium Price",
        description:
          "Cinematic quality at a price that makes sense for local businesses. No bloated retainers.",
      },
      {
        title: "Consistency Is the Product",
        description:
          "One great post doesn't move the needle. We keep your content calendar full, week after week.",
      },
      {
        title: "Toronto-Based, Human-First",
        description:
          "No offshore teams, no AI slop. A real team that knows your city and your market.",
      },
    ],
  },
  portfolio: {
    badge: "Featured Work",
    items: [
      {
        id: 1,
        title: "Riverside Restaurant",
        type: "Instagram Reels",
        gradient: "from-blue-900/80 to-black/40",
      },
      {
        id: 2,
        title: "Urban Barbershop",
        type: "TikTok",
        gradient: "from-purple-900/80 to-black/40",
      },
      {
        id: 3,
        title: "Lakeside Gym",
        type: "YouTube Shorts",
        gradient: "from-green-900/80 to-black/40",
      },
      {
        id: 4,
        title: "Downtown Realtor",
        type: "Instagram Reels",
        gradient: "from-red-900/80 to-black/40",
      },
      {
        id: 5,
        title: "Queen West Salon",
        type: "TikTok",
        gradient: "from-pink-900/80 to-black/40",
      },
    ],
  },
  process: {
    badge: "How It Works",
    steps: [
      {
        number: "01",
        title: "Audit & Strategy",
        description:
          "We review your business, identify your audience, and build a content plan built for your goals.",
      },
      {
        number: "02",
        title: "Film & Create",
        description:
          "We shoot, edit, and deliver scroll-stopping content — ready to post, optimized for each platform.",
      },
      {
        number: "03",
        title: "Post & Grow",
        description:
          "We post consistently, keep your feeds alive, and help you engage the audience that converts.",
      },
    ],
  },
  benefits: {
    badge: "Why It Matters",
    items: [
      {
        icon: "Eye",
        stat: "Views",
        description: "Get in front of thousands of potential customers who have never heard of you.",
      },
      {
        icon: "PhoneCall",
        stat: "Leads",
        description: "Turn scrollers into booked appointments, inquiries, and paying customers.",
      },
      {
        icon: "Award",
        stat: "Trust",
        description: "Build a premium brand that customers remember, trust, and choose over competitors.",
      },
      {
        icon: "RefreshCw",
        stat: "Consistency",
        description: "Stay top of mind with a steady flow of content that never stops working.",
      },
    ],
  },
  finalCta: {
    badge: "Let's Talk",
    headline: "Ready to Look Premium Online?",
    subheadline:
      "Book a free strategy call with Shock Media. No pitch decks, no fluff — just a real conversation about how video can grow your business.",
    cta: "Book a Free Strategy Call",
    instagram: "@shockmedia.ca",
    email: "hello@shockmedia.ca",
  },
  footer: {
    copyright: "2026 Shock Media Toronto. All rights reserved.",
    instagram: "https://www.instagram.com/shockmedia.ca",
  },
} as const;
```

---

## Task 3: Layout, Fonts, and Page Root

**Files:**
- Create: `src/app/layout.tsx`

- [ ] **Step 1: Create src/app/layout.tsx**

```tsx
import type { Metadata } from "next";
import { Syne, Manrope } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shock Media Toronto — Video Content Agency",
  description:
    "We help local Toronto businesses grow through short-form video content for Instagram Reels, TikTok, and YouTube Shorts.",
  openGraph: {
    title: "Shock Media Toronto — Video Content Agency",
    description:
      "Short-form video content that gets local businesses seen, remembered, and booked.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${syne.variable} ${manrope.variable}`}>
      <head>
        <link rel="icon" href="/images/logo.png" type="image/png" />
      </head>
      <body className="font-manrope antialiased bg-shock-black text-shock-white">
        {children}
      </body>
    </html>
  );
}
```

---

## Task 4: Reusable Components — Button and SectionBadge

**Files:**
- Create: `src/components/Button.tsx`
- Create: `src/components/SectionBadge.tsx`

- [ ] **Step 1: Create src/components/Button.tsx**

```tsx
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-manrope font-semibold rounded-lg transition-all duration-200 cursor-pointer";

  const variants = {
    primary:
      "bg-shock-blue text-white hover:bg-shock-blue-dark active:scale-[0.98] hover:scale-[1.02]",
    secondary:
      "border border-white/30 text-white hover:border-white hover:bg-white/5 active:scale-[0.98]",
  };

  const sizes = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3.5 text-base",
    lg: "px-9 py-4 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
```

- [ ] **Step 2: Create src/components/SectionBadge.tsx**

```tsx
export default function SectionBadge({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-block text-xs font-manrope font-semibold uppercase tracking-[0.14em] text-shock-blue mb-4 ${className}`}
    >
      {children}
    </span>
  );
}
```

---

## Task 5: Scroll Reveal Hook

**Files:**
- Create: `src/lib/useScrollReveal.ts`

- [ ] **Step 1: Create src/lib/useScrollReveal.ts**

```ts
"use client";

import { useEffect, useRef } from "react";

export function useScrollReveal() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );

    // Observe all .reveal children
    const reveals = el.querySelectorAll(".reveal");
    reveals.forEach((r) => observer.observe(r));

    // Also observe the container itself
    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return ref;
}
```

---

## Task 6: Navbar Component

**Files:**
- Create: `src/components/Navbar.tsx`

- [ ] **Step 1: Create src/components/Navbar.tsx**

```tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Button from "./Button";
import { COPY } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/90 backdrop-blur-md border-b border-shock-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src={COPY.nav.logo}
              alt="Shock Media Toronto"
              width={140}
              height={40}
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {COPY.nav.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-manrope font-medium text-shock-muted hover:text-white transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button size="sm">{COPY.nav.cta}</Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile overlay menu */}
      <div
        className={`fixed inset-0 z-[100] bg-black transition-all duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-end">
            <button
              className="text-white p-2"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X size={28} />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center flex-1 gap-8">
            {COPY.nav.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-2xl font-syne font-bold text-white hover:text-shock-blue transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4">
              <Button size="lg">{COPY.nav.cta}</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
```

---

## Task 7: Hero Section

**Files:**
- Create: `src/components/Hero.tsx`

- [ ] **Step 1: Create src/components/Hero.tsx**

```tsx
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
```

---

## Task 8: Services Section

**Files:**
- Create: `src/components/Services.tsx`

- [ ] **Step 1: Create src/components/Services.tsx**

```tsx
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
```

---

## Task 9: Why Us Section

**Files:**
- Create: `src/components/WhyUs.tsx`

- [ ] **Step 1: Create src/components/WhyUs.tsx**

```tsx
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
```

---

## Task 10: Portfolio Section

**Files:**
- Create: `src/components/Portfolio.tsx`

- [ ] **Step 1: Create src/components/Portfolio.tsx**

```tsx
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

        {/* Fade edges hint */}
        <div className="absolute right-0 top-0 bottom-4 w-16 bg-gradient-to-l from-shock-black to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
```

---

## Task 11: Process Section

**Files:**
- Create: `src/components/Process.tsx`

- [ ] **Step 1: Create src/components/Process.tsx**

```tsx
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
```

---

## Task 12: Benefits Section

**Files:**
- Create: `src/components/Benefits.tsx`

- [ ] **Step 1: Create src/components/Benefits.tsx**

```tsx
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
```

---

## Task 13: Final CTA Section

**Files:**
- Create: `src/components/FinalCTA.tsx`

- [ ] **Step 1: Create src/components/FinalCTA.tsx**

```tsx
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
```

---

## Task 14: Footer

**Files:**
- Create: `src/components/Footer.tsx`

- [ ] **Step 1: Create src/components/Footer.tsx**

```tsx
import Image from "next/image";
import Link from "next/link";
import { Instagram } from "lucide-react";
import { COPY } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-shock-black border-t border-shock-border py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <Image
            src={COPY.nav.logo}
            alt="Shock Media Toronto"
            width={120}
            height={34}
            className="h-7 w-auto opacity-60"
          />
        </div>

        <p className="text-shock-subtle text-xs font-manrope">
          {COPY.footer.copyright}
        </p>

        <a
          href={COPY.footer.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-shock-subtle hover:text-shock-blue transition-colors duration-200"
        >
          <Instagram size={16} />
          <span className="text-sm font-manrope">{COPY.footer.instagram}</span>
        </a>
      </div>
    </footer>
  );
}
```

---

## Task 15: Main Page Composition and Scroll Reveal Integration

**Files:**
- Create: `src/app/page.tsx`

- [ ] **Step 1: Create src/app/page.tsx**

```tsx
"use client";

import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Benefits from "@/components/Benefits";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

function useScrollReveal() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    const reveals = el.querySelectorAll(".reveal");
    reveals.forEach((r) => observer.observe(r));
    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return ref;
}

export default function Home() {
  const pageRef = useScrollReveal();

  return (
    <div ref={pageRef}>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Portfolio />
        <Process />
        <Benefits />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
```

---

## Task 16: Final Verification

- [ ] **Step 1: Run build**

Run: `cd /Users/alishafique/Code/shock-media-ca && npm run build`
Expected: Builds without errors, all TypeScript compiles cleanly

- [ ] **Step 2: Start dev server and verify**

Run: `npm run dev`
Expected: Page loads at http://localhost:3000 with no console errors

- [ ] **Step 3: Verify all sections render**

Open page in browser and scroll through all sections: Hero, Services, Why Us, Portfolio, Process, Benefits, Final CTA, Footer.

- [ ] **Step 4: Verify mobile responsiveness**

Use browser devtools to test at 375px width — all grids should stack, hamburger menu should work.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: complete Shock Media Toronto landing page

- Electric Dark Cinema design with electric blue on pure black
- Hero, Services, Why Us, Portfolio, Process, Benefits, Final CTA, Footer
- Mobile-first responsive, scroll reveal animations
- Next.js 14 + Tailwind CSS, Lucide icons
- Vercel-ready deployment"
```
