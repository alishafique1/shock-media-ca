"use client";

import { useEffect, useRef } from "react";

interface InstagramEmbedProps {
  url: string;
  className?: string;
}

export default function InstagramEmbed({ url, className = "" }: InstagramEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Instagram embed script
    if (!document.getElementById("instagram-embed-script")) {
      const script = document.createElement("script");
      script.id = "instagram-embed-script";
      script.src = "//www.instagram.com/embed.js";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }

    // Process new embeds after script loads
    const processEmbeds = () => {
      if (typeof window !== "undefined" && (window as any).instgrm) {
        (window as any).instgrm.Embeds.process();
      }
    };

    // If script already loaded, process immediately
    if (typeof window !== "undefined" && (window as any).instgrm) {
      setTimeout(processEmbeds, 100);
    } else {
      const check = setInterval(() => {
        if ((window as any).instgrm) {
          clearInterval(check);
          setTimeout(processEmbeds, 200);
        }
      }, 200);
      // Timeout safety valve
      setTimeout(() => clearInterval(check), 10000);
    }
  }, [url]);

  return (
    <div
      ref={containerRef}
      className={`instagram-embed-wrapper ${className}`}
    >
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{
          background: "#000",
          border: 0,
          borderRadius: "12px",
          display: "flex",
          justifyContent: "center",
          maxWidth: "100%",
          width: "100%",
        }}
      >
        <a
          href={url}
          style={{
            color: "#A0A0A0",
            fontFamily: "Manrope, sans-serif",
            fontSize: "12px",
            textDecoration: "none",
            padding: "12px",
          }}
        >
          View on Instagram
        </a>
      </blockquote>
    </div>
  );
}
