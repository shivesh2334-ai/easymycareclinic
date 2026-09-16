import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ExternalLink, HeartPulse } from "lucide-react";

export const metadata: Metadata = {
  title: "Selecting an Accurate Blood Pressure Monitor for Home Use | Dr. Shivesh Kumar",
  description: "A practical guide to selecting, sizing and using a validated home blood pressure monitor accurately.",
};

const classifications = [
  ["Grade 1 hypertension", "Systolic 140–159 mmHg and/or diastolic 90–99 mmHg"],
  ["Grade 2 hypertension", "Systolic 160–179 mmHg and/or diastolic 100–109 mmHg"],
  ["Grade 3 hypertension", "Systolic ≥180 mmHg and/or diastolic ≥110 mmHg"],
  ["Isolated systolic hypertension", "Systolic ≥140 mmHg with diastolic <90 mmHg"],
  ["Hypertensive urgency", "Severe, usually asymptomatic hypertension without acute target-organ damage"],
  ["Hypertensive emergency", "Severe hypertension with acute cardiac, neurological or renal target-organ damage"],
];

const selectionFactors = [
  {
    title: "1. Accuracy and validation",
    body: "Choose an upper-arm cuff oscillometric monitor that has successfully passed a recognized validation protocol. Accurate measurement also depends on correct preparation, positioning, cuff placement and repeated readings.",
  },
  {
    title: "2. Correct cuff size",
    body: "Measure the midpoint circumference of the upper arm. The inflatable bladder should be about 80% of the arm circumference in length and about 40% in width. A cuff that is too small may read falsely high; one that is too large may read falsely low.",
  },
  {
    title: "3. Clear display",
    body: "The screen should be easy to read and clearly display systolic pressure, diastolic pressure and pulse rate.",
  },
  {
    title: "4. Memory",
    body: "A useful monitor stores dated readings for later review. Memory for more than one user can be valuable for families.",
  },
  {
    title: "5. Price and practical features",
    body: "The device should be affordable, durable and easy to use. Depending on individual needs, useful extras may include irregular-heartbeat detection, Bluetooth connectivity, data sharing, battery-life indicators and a well-designed companion app.",
  },
];

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="font-serif text-2xl font-semibold text-ink">{title}</h2>
      <div className="mt-4 space-y-4 text-base leading-8 text-ink/75">{children}</div>
    </section>
  );
}

export default function BloodPressureMonitorArticle() {
  return (
    <main className="min-h-screen pb-16">
      <article className="mx-auto max-w-3xl px-5 pt-8 sm:pt-14">
        <Link href="/#blogs" className="focus-ring inline-flex items-center gap-2 text-sm font-semibold text-pine hover:text-pine-dark">
          <ArrowLeft size={16} /> Back to blogs
        </Link>

        <header className="mt-8 rounded-[2rem] border border-line bg-white p-7 shadow-[0_25px_80px_-45px_rgba(16,42,54,.4)] sm:p-10">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pine text-white"><HeartPulse aria-hidden size={24} /></div>
          <p className="mt-6 text-xs font-bold uppercase tracking-[0.14em] text-pine">Home blood pressure monitoring</p>
          <h1 className="mt-3 font-serif text-3xl font-semibold leading-tight text-ink sm:text-5xl">Selecting an Accurate Blood Pressure Monitor for Home Use</h1>
          <p className="mt-6 text-base leading-7 text-ink/70">By Dr. Shivesh Kumar, MD (Physician), PGDC, PGDE, HEMP (IIM Calcutta)</p>
          <p className="mt-1 text-sm leading-6 text-sage">Published in Cardiology Today, Vol. XXVII, No. 4 · July–August 2023</p>
        </header>

        <Section title="Background">
          <p>Rohit is a young office professional who is generally healthy and lives with his elderly parents. One day, while his mother was checking her blood pressure, he tried the monitor too. To his surprise, it displayed 170/90 mmHg. Worried, he rushed to the emergency room, where a repeat measurement was normal.</p>
          <p>After the incident, Rohit attended our medical practice regularly for several months. Counselling did not adequately relieve his anxiety, and anti-anxiety medication was eventually required. It took almost six months before he felt free from the worry triggered by that single reading.</p>
          <p>Rohit is not alone. As self-measurement becomes common, patients frequently ask which monitor to buy or whether a device they already own is reliable. Even clinicians can find it challenging to distinguish sustained hypertension from borderline readings, white-coat hypertension or masked hypertension without measurements obtained through a reliable method.</p>
        </Section>

        <Section title="Introduction">
          <p>Hypertension is a major global health concern and an important contributor to illness and premature death. India carries a substantial burden, while awareness, treatment and control remain inadequate. Choosing an accurate and dependable device is therefore essential for both patients and healthcare professionals.</p>
          <p>In India, blood pressure instruments are regulated by the Central Drugs Standard Control Organisation under the Medical Devices Rules, 2017. Buyers should prefer devices approved by the appropriate regulator and validated through a recognized international protocol.</p>
        </Section>

        <Section title="Understanding blood pressure">
          <p>Blood pressure is recorded in millimetres of mercury (mmHg) using two numbers. Systolic pressure is the pressure in the arteries when the heart contracts; diastolic pressure is the pressure when the heart relaxes between beats.</p>
          <div className="overflow-hidden rounded-2xl border border-line bg-white">
            {classifications.map(([name, value]) => (
              <div key={name} className="grid gap-1 border-b border-line p-4 last:border-b-0 sm:grid-cols-[12rem_1fr]">
                <strong className="text-sm text-ink">{name}</strong><span className="text-sm leading-6 text-ink/70">{value}</span>
              </div>
            ))}
          </div>
          <p className="rounded-2xl border-l-4 border-pine bg-card p-5 text-ink"><strong>Seek urgent medical care</strong> for a very high reading accompanied by chest pain, severe breathlessness, weakness, confusion, vision loss, severe headache or other acute symptoms.</p>
        </Section>

        <Section title="How blood pressure should be measured">
          <p>Screening and diagnosis should be performed by a physician or trained healthcare professional using a validated device and a standardized technique. Rest quietly for about five minutes, sit with the back supported, keep feet flat and legs uncrossed, and support the arm at heart level.</p>
          <p>With an auscultatory measurement, inflate the cuff to at least 30 mmHg beyond the point at which the radial pulse disappears, then deflate at approximately 2–3 mmHg per second. Record systolic pressure at the first Korotkoff sound and diastolic pressure when the sounds disappear.</p>
          <p>Home measurement offers convenience, comfort and a better picture of blood pressure outside the clinic, but only when the monitor and technique are reliable. Take multiple measurements according to your clinician’s advice rather than acting on one isolated reading.</p>
        </Section>

        <Section title="Types of blood pressure monitor">
          <h3 className="font-semibold text-ink">Auscultation-based devices</h3>
          <p>Mercury sphygmomanometers were traditionally considered the reference standard, but mercury is toxic and is being phased out of healthcare. Aneroid instruments are a mechanical alternative, but they require regular calibration and trained auscultation with a stethoscope.</p>
          <h3 className="pt-2 font-semibold text-ink">Oscillometric devices</h3>
          <p>Digital oscillometric monitors detect arterial oscillations during cuff deflation and use an algorithm to estimate blood pressure. Their portability and lower training requirement have made validated upper-arm devices the preferred choice for most people measuring blood pressure at home.</p>
          <h3 className="pt-2 font-semibold text-ink">Wrist and finger devices</h3>
          <p>These are generally less reliable because readings are highly sensitive to position and device design. An upper-arm monitor is preferred whenever a correctly sized cuff can be used. A validated wrist device may be considered when an upper-arm cuff cannot fit, with careful attention to technique.</p>
        </Section>

        <Section title="Selecting a monitor for home use">
          <p>For most people, select a validated automatic upper-arm cuff oscillometric device. Consider the following:</p>
          <div className="grid gap-4">
            {selectionFactors.map((item) => (
              <div key={item.title} className="rounded-2xl border border-line bg-white p-5">
                <h3 className="flex items-center gap-2 font-semibold text-ink"><CheckCircle2 size={18} className="text-pine" aria-hidden />{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-ink/70">{item.body}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Conclusion">
          <p>Selecting an accurate, validated and appropriately sized home blood pressure monitor is essential for good hypertension management. The monitor should be practical to use, have a clear display and memory, and remain affordable. Check its accuracy and calibration periodically according to the manufacturer’s instructions and your clinician’s advice.</p>
          <p>Blood pressure monitors are valuable tools, but they do not replace medical assessment. If you are concerned about your readings or treatment, consult a healthcare professional for interpretation and an appropriate care plan.</p>
        </Section>

        <Section title="References">
          <ol className="list-decimal space-y-3 pl-5 text-sm leading-7">
            <li><a className="text-pine underline underline-offset-4" href="https://www.who.int/news-room/fact-sheets/detail/hypertension" target="_blank" rel="noreferrer">World Health Organization: Hypertension <ExternalLink className="ml-1 inline" size={13} /></a></li>
            <li><a className="text-pine underline underline-offset-4" href="https://cdsco.gov.in/opencms/export/sites/CDSCO_WEB/Pdf-documents/NewDrugs_Cosmetics_2016/Medical_Devices_Rules_2017.pdf" target="_blank" rel="noreferrer">CDSCO: Medical Devices Rules, 2017 <ExternalLink className="ml-1 inline" size={13} /></a></li>
            <li><a className="text-pine underline underline-offset-4" href="https://www.heart.org/en/health-topics/high-blood-pressure/understanding-blood-pressure-readings/home-blood-pressure-monitoring" target="_blank" rel="noreferrer">American Heart Association: Home Blood Pressure Monitoring <ExternalLink className="ml-1 inline" size={13} /></a></li>
            <li>Anchala R, Kannuri NK, Pant H, et al. Hypertension in India: a systematic review and meta-analysis of prevalence, awareness, and control. <em>J Hypertens.</em> 2014;32(6):1170–1177.</li>
            <li><a className="text-pine underline underline-offset-4" href="https://www.who.int/publications/m/item/step-2-of-the-stepwise-approach-to-ncd-risk-factor-surveillance-(steps)-guide-to-physical-measurements" target="_blank" rel="noreferrer">World Health Organization: Guide to Physical Measurements <ExternalLink className="ml-1 inline" size={13} /></a></li>
            <li>Ministry of Health & Family Welfare, Government of India. Hypertension Screening, Diagnosis, Assessment, and Management of Primary Hypertension in Adults in India.</li>
          </ol>
        </Section>

        <aside className="mt-12 rounded-2xl bg-ink p-6 text-sm leading-7 text-paper/80">
          <strong className="block text-paper">Medical information notice</strong>
          This article is for general education and is not a substitute for individual medical advice, diagnosis or emergency care. Blood-pressure thresholds and treatment decisions should be interpreted by a qualified clinician in the context of the patient.
        </aside>
      </article>
    </main>
  );
}
