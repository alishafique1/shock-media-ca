import Image from "next/image";
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