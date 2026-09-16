import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Headphones, HeartPulse } from "lucide-react";

export const metadata: Metadata = {
  title: "Sudden Cardiac Death: An Expert Interview | Easy My Care",
  description: "Listen to Dr. Shivesh Kumar discuss sudden cardiac death, risk factors, warning signs, prevention and emergency response.",
};

const topics = [
  "What sudden cardiac death means and how it differs from a heart attack",
  "Common cardiac causes and people who may be at higher risk",
  "Warning symptoms that should never be ignored",
  "The importance of CPR, an AED and rapid emergency response",
  "Screening, prevention and follow-up for at-risk patients",
];

export default function SuddenCardiacDeathInterview() {
  return (
    <main className="min-h-screen pb-16">
      <article className="mx-auto max-w-3xl px-5 pt-8 sm:pt-14">
        <Link href="/#blogs" className="focus-ring inline-flex items-center gap-2 text-sm font-semibold text-pine hover:text-pine-dark">
          <ArrowLeft size={16} /> Back to blogs
        </Link>

        <header className="mt-8 overflow-hidden rounded-[2rem] border border-line bg-white shadow-[0_25px_80px_-45px_rgba(16,42,54,.4)]">
          <div className="grid gap-7 p-7 sm:grid-cols-[8rem_1fr] sm:items-center sm:p-10">
            <div className="relative h-28 w-28 overflow-hidden rounded-3xl border border-line bg-white p-3 shadow-sm">
              <Image src="/emc-logo.png" alt="Easy My Care" fill priority sizes="112px" className="object-contain p-3" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-pine">Easy My Care audio interview</p>
              <h1 className="mt-3 font-serif text-3xl font-semibold leading-tight text-ink sm:text-5xl">Sudden Cardiac Death</h1>
              <p className="mt-4 text-base leading-7 text-ink/70">An expert conversation with Dr. Shivesh Kumar, physician and consultant cardiologist.</p>
            </div>
          </div>
        </header>

        <section className="mt-8 rounded-[2rem] border border-line bg-ink p-6 text-paper sm:p-8" aria-labelledby="listen-heading">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-pine"><Headphones size={22} aria-hidden /></span>
            <div><p className="text-xs uppercase tracking-wider text-paper/60">Interview podcast</p><h2 id="listen-heading" className="font-serif text-xl font-semibold">Listen to the full discussion</h2></div>
          </div>
          <audio className="mt-6 w-full" controls preload="metadata">
            <source src="https://easy-my-care-doctor.drshivesh.chatgpt.site/sudden-cardiac-death-interview-optimized.mp3" type="audio/mpeg" />
            Your browser does not support the audio player.
          </audio>
        </section>

        <section className="mt-10">
          <div className="flex items-center gap-3"><HeartPulse className="text-pine" aria-hidden /><h2 className="font-serif text-2xl font-semibold text-ink">In this interview</h2></div>
          <p className="mt-4 text-base leading-8 text-ink/75">Sudden cardiac death can occur without warning, but understanding risk, recognizing symptoms and acting quickly can save lives. This interview explains the issue in clear language for patients, families and healthcare professionals.</p>
          <ul className="mt-6 grid gap-3">
            {topics.map((topic) => <li key={topic} className="rounded-2xl border border-line bg-white px-5 py-4 text-sm leading-6 text-ink/75">{topic}</li>)}
          </ul>
        </section>

        <aside className="mt-10 rounded-2xl border-l-4 border-pine bg-card p-6 text-sm leading-7 text-ink/75">
          <strong className="block text-ink">Emergency note</strong>
          If someone is unresponsive and not breathing normally, call emergency services immediately, begin CPR and use an automated external defibrillator if available. This interview is for education and does not replace individual medical advice or emergency care.
        </aside>
      </article>
    </main>
  );
}
