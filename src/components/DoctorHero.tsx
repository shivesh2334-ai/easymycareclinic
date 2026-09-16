import { CalendarCheck, Clock3, MapPin, ShieldCheck } from "lucide-react";
import Image from "next/image";
import type { Doctor } from "@/types/doctor";

export function DoctorHero({ doctor }: { doctor: Doctor }) {
  const initials = doctor.full_name
    .split(" ")
    .filter((w) => w[0] === w[0]?.toUpperCase())
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

  return (
    <section className="mx-auto max-w-5xl px-5 pb-8 pt-10 sm:pt-16" id="profile">
      <div className="overflow-hidden rounded-[2rem] border border-line bg-white shadow-[0_25px_80px_-35px_rgba(16,42,54,.35)]">
        <div className="grid gap-8 p-6 sm:grid-cols-[1fr_auto] sm:p-10">
        <div className="flex items-start gap-5">
          <div
            className="relative flex h-24 w-20 shrink-0 items-center justify-center overflow-hidden rounded-2xl border-2 border-white bg-gradient-to-br from-pine to-ink text-white font-serif text-2xl font-semibold shadow-lg sm:h-36 sm:w-28 sm:rounded-3xl sm:text-3xl"
          >
            {doctor.photo_url ? (
              <Image
                src={doctor.photo_url}
                alt={`Portrait of ${doctor.full_name}`}
                fill
                priority
                sizes="(min-width: 640px) 112px, 80px"
                className="object-cover object-top"
              />
            ) : (
              <span aria-hidden>{initials || "Dr"}</span>
            )}
          </div>
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-pine">
              {doctor.designation ?? "Consultant"}
            </p>
            <h1 className="font-serif text-3xl font-semibold leading-tight text-ink sm:text-5xl">
              {doctor.full_name}
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink/70 sm:text-base">{doctor.credentials}</p>
            {doctor.bio && (
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/75">{doctor.bio}</p>
            )}
          </div>
        </div>
        <a href="#booking" className="focus-ring flex h-fit items-center justify-center gap-2 rounded-xl bg-pine px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-pine-dark"><CalendarCheck size={18}/> Book appointment</a>
      </div>
      <div className="flex flex-wrap items-center gap-2 px-6 pb-6 sm:px-10">
        {doctor.specialties.map((s) => (
          <span
            key={s}
            className="rounded-full bg-card px-3 py-1.5 text-xs font-semibold text-pine-dark"
          >
            {s}
          </span>
        ))}
        {doctor.experience_years != null && (
          <span className="rounded-full border border-line px-3 py-1.5 text-xs font-semibold text-ink">
            {doctor.experience_years}+ yrs experience
          </span>
        )}
      </div>
      <div className="grid border-t border-line bg-card/50 sm:grid-cols-3">
        <div className="flex items-center gap-3 px-6 py-4"><MapPin className="text-pine" size={19}/><span className="text-sm"><strong className="block text-ink">Dwarka, New Delhi</strong><span className="text-sage">Easy My Care Clinic</span></span></div>
        <div className="flex items-center gap-3 border-t border-line px-6 py-4 sm:border-l sm:border-t-0"><Clock3 className="text-pine" size={19}/><span className="text-sm"><strong className="block text-ink">Evening clinic</strong><span className="text-sage">5:30 PM – 9:00 PM</span></span></div>
        <div className="flex items-center gap-3 border-t border-line px-6 py-4 sm:border-l sm:border-t-0"><ShieldCheck className="text-pine" size={19}/><span className="text-sm"><strong className="block text-ink">18+ years</strong><span className="text-sage">Clinical experience</span></span></div>
      </div>
      </div>
    </section>
  );
}
