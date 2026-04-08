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
        syne: ["Syne", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
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
