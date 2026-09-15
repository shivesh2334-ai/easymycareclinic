import { Phone } from "lucide-react";
import Image from "next/image";

export function SiteHeader({ clinicName }: { clinicName: string }) {
  return (
    <header className="sticky top-0 z-40 bg-paper/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
        <a href="#profile" className="focus-ring flex items-center" aria-label={`${clinicName} home`}>
          <span className="relative block h-12 w-36 overflow-hidden sm:h-14 sm:w-44">
            <Image
              src="/emc-logo.png"
              alt="EMC — Easy My Care"
              width={500}
              height={500}
              priority
              className="absolute left-1/2 top-1/2 h-[230px] w-[230px] max-w-none -translate-x-1/2 -translate-y-1/2 object-contain sm:h-[280px] sm:w-[280px]"
            />
          </span>
        </a>
        <nav className="flex items-center gap-5 text-sm text-sage">
          <a
            href="tel:+919891368298"
            aria-label="Call Easy My Care"
            className="focus-ring flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-pine"
          >
            <Phone size={15} strokeWidth={2} />
            <span className="hidden sm:inline">Call clinic</span>
          </a>
        </nav>
      </div>
      <div className="h-px bg-line" />
    </header>
  );
}
