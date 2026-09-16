import { Phone } from "lucide-react";
import Image from "next/image";

export function SiteHeader({ clinicName }: { clinicName: string }) {
  return (
    <header className="sticky top-0 z-40 bg-paper/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-3">
        <a
          href="#profile"
          className="focus-ring flex min-w-0 items-center gap-2 sm:gap-3"
          aria-label={`${clinicName} home`}
        >
          <span className="relative block h-10 w-32 shrink-0 sm:h-12 sm:w-[154px]">
            <Image
              src="/emc-logo-header.png"
              alt="EMC — Easy My Care"
              fill
              priority
              sizes="(min-width: 640px) 154px, 128px"
              className="object-contain object-left"
            />
          </span>
          <span
            className="-rotate-3 whitespace-nowrap text-[1.7rem] leading-none text-rust sm:text-[2.05rem]"
            style={{ fontFamily: '"Brush Script MT", "Segoe Script", cursive' }}
          >
            Clinic
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
