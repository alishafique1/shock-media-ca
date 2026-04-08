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
