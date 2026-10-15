const BOOKING_URL = "https://www.easymycareclinic.com/#booking";
const REVIEW_URL = "https://g.page/r/CRRVFQ-_ftGhEBE/review";

function qrUrl(value: string) {
  return `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(value)}`;
}

export function ClinicQRCodes() {
  const items = [
    {
      title: "Book an Appointment",
      description: "Scan to choose a date and evening appointment slot.",
      href: BOOKING_URL,
      action: "Open booking",
    },
    {
      title: "Review Easy My Care",
      description: "Scan to share your experience on Google.",
      href: REVIEW_URL,
      action: "Write a review",
    },
  ];

  return (
    <section className="mx-auto max-w-4xl px-5 py-10" aria-labelledby="clinic-qr-heading">
      <div className="mb-5 text-center">
        <p className="text-xs font-bold uppercase tracking-[.14em] text-pine">Quick access</p>
        <h2 id="clinic-qr-heading" className="mt-1 font-serif text-2xl font-semibold text-ink sm:text-3xl">
          Scan to Book or Review
        </h2>
        <p className="mt-2 text-sm text-sage">
          Use your phone camera to open appointment booking or leave a Google review.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <article key={item.title} className="rounded-xl border border-line bg-white/60 p-5 text-center">
            <a
              href={item.href}
              target={item.href.startsWith("https://g.page") ? "_blank" : undefined}
              rel={item.href.startsWith("https://g.page") ? "noreferrer" : undefined}
              className="focus-ring mx-auto block w-fit rounded-xl bg-white p-3"
              aria-label={item.action}
            >
              <img
                src={qrUrl(item.href)}
                alt={`QR code for ${item.title}`}
                width={220}
                height={220}
                loading="lazy"
                className="h-48 w-48 sm:h-52 sm:w-52"
              />
            </a>
            <h3 className="mt-4 font-serif text-xl font-semibold text-ink">{item.title}</h3>
            <p className="mx-auto mt-1 max-w-xs text-sm text-sage">{item.description}</p>
            <a
              href={item.href}
              target={item.href.startsWith("https://g.page") ? "_blank" : undefined}
              rel={item.href.startsWith("https://g.page") ? "noreferrer" : undefined}
              className="focus-ring mt-4 inline-flex rounded-full border border-pine px-4 py-2 text-sm font-semibold text-pine hover:bg-pine hover:text-paper"
            >
              {item.action}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
