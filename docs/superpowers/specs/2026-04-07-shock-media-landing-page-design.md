# Shock Media Toronto — Landing Page Design Spec

**Date:** 2026-04-07
**Project:** Premium landing page for Shock Media Toronto (video content & social media agency)

---

## 1. Concept & Vision

Shock Media helps local Toronto businesses look premium online and turn short-form video content into real growth. The landing page must feel like a serious 2026 growth agency — not a videographer's portfolio. Dark, cinematic, electric. The message is sharp and business-outcome-focused: this isn't about "cool content," it's about views, leads, and customers.

**Tagline direction:** "We turn your business into scroll-stopping content."

---

## 2. Design Language

### Aesthetic Direction
**"Electric Dark Cinema"** — deep black backgrounds, electric blue (#0066FF) as the singular accent, white typography. Inspired by high-end film studios and premium SaaS products. The lightning bolt from the logo is the core visual motif — diagonal slashes, angled dividers, accent lines.

### Color Palette
| Role | Hex |
|---|---|
| Background (primary) | `#000000` |
| Background (alt sections) | `#0A0A0A` |
| Background (card surfaces) | `#111111` |
| Border / divider subtle | `#1A1A1A` |
| Border / divider visible | `#222222` |
| Accent (electric blue) | `#0066FF` |
| Accent (glow variant) | `#0055DD` |
| Text (primary / headline) | `#FFFFFF` |
| Text (body / muted) | `#A0A0A0` |
| Text (subtle label) | `#666666` |

### Typography
- **Headlines:** Syne (Google Fonts) — Bold, geometric, unapologetically modern
- **Body / UI:** Manrope (Google Fonts) — Clean, premium, highly readable
- **Labels / badges:** Manrope, uppercase, letter-spacing 0.12em

### Spatial System
- Base unit: 8px
- Section vertical padding: 120px desktop / 80px mobile
- Container max-width: 1200px, centered
- Card border-radius: 12px
- Button border-radius: 8px

### Motion Philosophy
Subtle and purposeful only. No parallax, no heavy animations. This is a business page — speed = premium.
- **Scroll entry:** `opacity: 0 → 1` + `translateY(24px → 0)`, duration 600ms, `ease-out`
- **Stagger:** 80ms delay between sibling elements
- **Hover states:** Scale 1.02 on cards, color transitions 200ms on buttons/links
- **No entrance animations on mobile** (respect `prefers-reduced-motion`)

### Visual Assets
- **Logo:** `/public/images/logo.png` — white variant for dark backgrounds
- **Icons:** Lucide React — consistent 24px stroke icons
- **Portfolio thumbnails:** Gradient-overlaid image placeholders with play button overlay
- **Decorative:** Diagonal slash dividers using CSS clip-path or SVG

---

## 3. Layout & Structure

### Page Sections (in order)

1. **Hero** — Full viewport height, dark, centered content + optional video area
2. **Services** — 4-card grid on dark background
3. **Why Us** — Split layout: bold statement + benefit list
4. **Portfolio** — Horizontal scroll carousel with video thumbnails
5. **Process** — 3-step horizontal timeline
6. **Benefits** — 4-column icon + stat grid
7. **Final CTA** — Full-width centered conversion section

### Responsive Strategy
- Mobile-first CSS
- All multi-column grids collapse to single column on mobile
- Hero text scales: `clamp(2.5rem, 6vw, 5rem)` for main headline
- Portfolio becomes horizontally scrollable on touch (snap scroll)
- Navigation: hamburger on mobile, desktop horizontal nav

---

## 4. Features & Interactions

### Navigation
- Fixed top nav, dark background with slight blur (`backdrop-filter`)
- Logo left, nav links center/right, CTA button right
- Mobile: hamburger → full-screen overlay menu
- Active section highlight via scroll spy

### Hero Section
- Full-viewport height
- Main headline: large, bold, white
- Subheadline: muted color, one line
- Two CTA buttons: primary (blue filled) + secondary (outlined)
- Right side (desktop): video thumbnail with play button that opens a modal or loops muted
- Diagonal slash decorative element (CSS clip-path or SVG)

### Services Section
- Section label badge: "WHAT WE DO"
- 4 cards in 2×2 grid:
  1. **Short-Form Video Production** — Reels, TikToks, YouTube Shorts
  2. **Content Strategy** — Posting schedules, hooks, trends
  3. **Social Media Management Support** — Content calendar, caption support
  4. **Cinematic Videography** — Brand films, testimonials, founder content
- Each card: icon, bold title, one-line description, subtle hover lift

### Why Us Section
- Left: Large bold headline statement ("Your competitors are already posting. Are you?")
- Right: 3–4 bullet-style benefit items with checkmark icons and short descriptions
- Diagonal divider between sections

### Portfolio Section
- Horizontal scroll container
- 4–6 portfolio cards: gradient thumbnail with play overlay
- Caption below each: client name + content type
- Snap scroll behavior on desktop (click through), free scroll on mobile

### Process Section
- Label badge: "HOW IT WORKS"
- 3 steps horizontally:
  1. **Audit & Strategy** — "We review your business and create a content plan"
  2. **Film & Create** — "We shoot, edit, and deliver scroll-stopping content"
  3. **Post & Grow** — "We post consistently and help you engage your audience"
- Step number in large electric blue text
- Connected by a horizontal line

### Benefits Section
- Label badge: "WHY IT MATTERS"
- 4 stats in a row:
  1. **Views** — "Get in front of thousands of potential customers"
  2. **Leads** — "Turn scrollers into booked appointments and inquiries"
  3. **Trust** — "Build a premium brand that customers remember"
  4. **Consistency** — "Stay top of mind with a steady content flow"
- Each: large icon, bold stat label, short description

### Final CTA Section
- Full-width dark section, centered
- Headline: "Ready to look premium online?"
- Subheadline: "Book a free strategy call with Shock Media."
- Primary CTA button: "Let's Talk" → opens contact modal or links to Instagram DM
- Instagram handle: `@shockmedia.ca`
- Subtle diagonal slash decorative element

### Footer
- Minimal: logo, copyright, Instagram link, email

---

## 5. Component Inventory

### NavBar
- **States:** Default (transparent on hero), scrolled (dark bg + blur), mobile-open
- Logo + 4 links + CTA button

### Button (Primary)
- Background: `#0066FF`, text: white, padding: 14px 28px, radius: 8px
- **Hover:** Background `#0055DD`, scale 1.02
- **Active:** scale 0.98

### Button (Secondary / Outlined)
- Border: 1px solid `#FFFFFF40`, text: white, bg: transparent
- **Hover:** border-color white, background `#FFFFFF10`

### ServiceCard
- Background: `#111111`, border: 1px solid `#1A1A1A`, padding: 32px, radius: 12px
- **Hover:** border-color `#222222`, translateY(-4px), transition 200ms

### PortfolioCard
- Aspect ratio: 9:16 (vertical video format)
- Gradient overlay: `linear-gradient(to top, #00000080, transparent)`
- Play button centered: white circle with blue triangle
- **Hover:** scale 1.03, play button pulses

### ProcessStep
- Number: 48px, color `#0066FF`, font Syne Bold
- Title: 18px, white, Manrope semibold
- Description: 14px, `#A0A0A0`
- Connector line: 1px `#1A1A1A` horizontal line

### BenefitItem
- Icon: 32px Lucide icon in `#0066FF`
- Label: 20px white bold
- Description: 14px muted

### SectionBadge
- Uppercase, tracked, 12px, color `#0066FF`, margin-bottom 16px

---

## 6. Technical Approach

### Stack
- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS v3
- **Icons:** Lucide React
- **Fonts:** Google Fonts via `next/font/google` (Syne, Manrope)
- **Animations:** CSS transitions + Intersection Observer for scroll entries (no heavy animation library)
- **Deployment:** Vercel (zero-config)

### File Structure
```
src/
  app/
    layout.tsx        — Root layout, fonts, metadata
    page.tsx          — Single page: all sections composed
    globals.css       — CSS variables, base styles, scrollbar
  components/
    Navbar.tsx
    Hero.tsx
    Services.tsx
    WhyUs.tsx
    Portfolio.tsx
    Process.tsx
    Benefits.tsx
    FinalCTA.tsx
    Footer.tsx
    Button.tsx        — Reusable button variants
    SectionBadge.tsx  — Reusable section label
  lib/
    constants.ts     — Color tokens, copy strings
public/
  images/
    logo.png
    portfolio/        — Placeholder portfolio images
```

### Performance Targets
- LCP < 2.5s
- CLS < 0.1
- No layout shift from fonts (font-display: swap with size-adjust)
- Images: next/image for all image assets

### Key Implementation Notes
- Use CSS custom properties for the color palette so it's easy to adjust
- Intersection Observer hook for scroll-triggered fade-in animations
- Portfolio horizontal scroll: `scroll-snap-type: x mandatory` + `scroll-snap-align: center`
- Navbar scroll behavior: add shadow + solid bg after 50px scroll
- Mobile nav: use React state, animate with `aria-expanded` + CSS transitions
