import {
  Activity,
  FlaskConical,
  Gauge,
  HeartPulse,
  TestTubes,
  Wind,
} from "lucide-react";

const facilities = [
  { name: "ECG", detail: "Heart rhythm assessment", icon: HeartPulse },
  { name: "TMT", detail: "Cardiac stress testing", icon: Activity },
  { name: "PFT", detail: "Lung function assessment", icon: Gauge },
  { name: "Oxygen", detail: "Oxygen support at clinic", icon: Wind },
  { name: "Nebulization", detail: "Respiratory treatment", icon: FlaskConical },
  { name: "Lab Collection", detail: "Convenient sample collection", icon: TestTubes },
];

export function ClinicFacilities() {
  return (
    <section className="mx-auto max-w-5xl px-5 pb-12" aria-labelledby="clinic-facilities-heading">
      <div className="rounded-[2rem] border border-line bg-white p-6 shadow-[0_20px_60px_-40px_rgba(16,42,54,.35)] sm:p-8">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-pine">Easy My Care Clinic</p>
        <h2 id="clinic-facilities-heading" className="mt-2 font-serif text-2xl font-semibold text-ink">
          Facilities at Clinic
        </h2>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map(({ name, detail, icon: Icon }) => (
            <div key={name} className="flex items-center gap-4 rounded-2xl border border-line bg-card/50 p-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-pine text-white">
                <Icon size={21} strokeWidth={1.8} aria-hidden="true" />
              </span>
              <span>
                <strong className="block text-base font-semibold text-ink">{name}</strong>
                <span className="text-sm leading-relaxed text-ink/65">{detail}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
