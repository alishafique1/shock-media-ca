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
        url: "https://www.instagram.com/p/DWzEDIsidRr/?igsh=bHdvOTUxdXh6bzNq",
      },
      {
        id: 2,
        url: "https://www.instagram.com/p/DWws4BXjvYh/?igsh=aGQ3ZGtmcm13bDc5",
      },
      {
        id: 3,
        url: "https://www.instagram.com/p/DWuWq2JEpiw/?igsh=dXlqNHR0ZnF3N2I3",
      },
      {
        id: 4,
        url: "https://www.instagram.com/p/DWrVg4wjSUl/?igsh=Y2xyajY3endpbG1t",
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
