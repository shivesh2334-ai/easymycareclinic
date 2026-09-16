import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ExternalLink, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Demystifying AI for Clinicians | Easy My Care",
  description: "A clinician-focused review of artificial intelligence, healthcare applications, primary-care use cases, limitations, ethics and responsible adoption.",
};

const definitions = [
  ["Machine learning", "Algorithms and models that enable computers to learn patterns from supplied data."],
  ["Algorithm", "A set of computational rules used to process data, learn patterns or produce an output."],
  ["Data", "Recorded raw information, including facts, measurements, text, voices, images and opinions."],
  ["Deep learning", "A subset of machine learning that commonly uses multi-layer neural networks and is widely applied to images, language and signals."],
  ["Generative AI", "Technology that identifies patterns in training data and produces new text, images, audio, video or code with similar characteristics."],
  ["Large language model", "An AI model trained on very large text collections to understand and generate human language."],
  ["Natural language processing", "Methods that allow computers to process, analyze and generate written or spoken language."],
  ["Chatbot", "A computer program designed to simulate a conversation with human users."],
  ["Token", "A small unit into which language models divide text for processing."],
  ["Entity", "A recognized person, place, organization, object or other meaningful item in text."],
  ["Node", "A point in a computational structure; in dialog systems it may represent a conversational state and possible replies."],
  ["Perceptron", "A foundational computational unit in a neural network, loosely inspired by a biological neuron."],
];

const challenges = [
  "Bias arising from unrepresentative, incomplete or poorly organized training data.",
  "Privacy, consent, cybersecurity, regulation, ethical obligations and legal responsibility.",
  "The need to assess algorithms as critically as medicines, devices and other clinical interventions.",
  "Reliability through appropriate validation, transparent limitations and continuing refinement with relevant data.",
  "Clear accountability for developers, institutions, clinicians and vendors.",
  "Ongoing monitoring after integration for safety, performance drift, usefulness and inequitable outcomes.",
];

const clinicalCases = [
  ["Insurance communication", "Preparing a structured reply to an insurance query", "ChatGPT 3.5"],
  ["Medical certificate", "Drafting a medical fitness certificate for employment", "ChatGPT 3.5"],
  ["Laboratory report", "Summarizing a blood-test report for clinical review", "Claude"],
  ["Clinical reasoning", "Drafting a case summary, differential diagnosis and treatment-plan outline", "Glass AI"],
];

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return <section className="mt-10"><h2 className="font-serif text-2xl font-semibold text-ink">{title}</h2><div className="mt-4 space-y-4 text-base leading-8 text-ink/75">{children}</div></section>;
}

export default function DemystifyingAIForClinicians() {
  return (
    <main className="min-h-screen pb-16">
      <article className="mx-auto max-w-3xl px-5 pt-8 sm:pt-14">
        <Link href="/#blogs" className="focus-ring inline-flex items-center gap-2 text-sm font-semibold text-pine hover:text-pine-dark"><ArrowLeft size={16} /> Back to blogs</Link>

        <header className="mt-8 overflow-hidden rounded-[2rem] border border-line bg-white shadow-[0_25px_80px_-45px_rgba(16,42,54,.4)]">
          <div className="grid gap-7 p-7 sm:grid-cols-[8rem_1fr] sm:items-center sm:p-10">
            <div className="relative h-28 w-28 overflow-hidden rounded-3xl border border-line bg-white"><Image src="/emc-logo.png" alt="Easy My Care" fill priority sizes="112px" className="object-contain p-3" /></div>
            <div><p className="text-xs font-bold uppercase tracking-[0.14em] text-pine">Clinical AI review</p><h1 className="mt-3 font-serif text-3xl font-semibold leading-tight text-ink sm:text-5xl">Demystifying AI for Clinicians</h1><p className="mt-4 text-base leading-7 text-ink/70">A practical introduction to artificial intelligence, its clinical applications and responsible adoption in healthcare.</p></div>
          </div>
          <div className="border-t border-line bg-card/60 px-7 py-5 text-sm leading-6 text-ink/70 sm:px-10">By Dr. Shivesh Kumar, Dr. R. M. Chhabra and Dr. Naresh Pamnani</div>
        </header>

        <Section title="Introduction">
          <p>In the rapidly evolving landscape of medicine, artificial intelligence is transforming how healthcare is delivered. Clinicians need to understand the AI ecosystem—particularly the composition and quality of datasets, the nature of algorithms, and the limitations of applications such as generative chatbots.</p>
          <p>AI may support care for specific patient populations, improve clinical workflows, assist drug development and help control healthcare expenditure. The central goal is not to replace clinicians, but to augment the capabilities of clinicians, patients and other stakeholders while preserving safe, effective and high-quality care.</p>
          <p>This review provides a practical foundation: data inputs, generated outputs, algorithms, healthcare applications, limitations, bias, governance and practice-based learning. It concludes with terminology and real-world examples of AI use by clinicians.</p>
        </Section>

        <Section title="What is artificial intelligence?">
          <p>Artificial intelligence is the simulation by computer systems of functions associated with human intelligence, including learning, reasoning, problem-solving, perception and language understanding. It brings together machine learning, deep learning, natural language processing and neural networks.</p>
          <p>AI can automate tasks, analyze complex information and generate predictions or content. However, it is not equivalent to human cognition. Current systems do not possess a clinician’s contextual judgment, moral responsibility, lived experience or general understanding. Their potential must therefore be considered alongside their limitations.</p>
        </Section>

        <Section title="Historical journey">
          <p>The roots of computation extend from early calculating devices such as the abacus to the nineteenth-century work of Charles Babbage and Ada Lovelace. In 1956, John McCarthy helped establish “artificial intelligence” as a field at the Dartmouth workshop.</p>
          <p>Early optimism in the 1960s and 1970s was followed by periods of reduced investment known as AI winters. Meanwhile, systems that augmented human capability—screen readers, voice-driven navigation and decision support—continued to develop. Increasing computing power, cloud infrastructure, digital data and improved algorithms accelerated the modern AI era.</p>
        </Section>

        <Section title="Basic principles">
          <p>AI is often discussed as narrow, broad and general intelligence. Narrow AI performs a specific task. Broad AI handles a related range of tasks. Artificial general intelligence remains a theoretical system able to learn, reason and adapt across domains in a human-like way.</p>
          <p>Healthcare data may be structured, semi-structured or unstructured. Structured data uses defined fields and relationships. Semi-structured formats, such as JSON or XML, contain organizational markers without a rigid table. Unstructured data includes clinical narratives, images, audio and video. The usefulness of an AI system depends heavily on how accurately these data are collected, organized, labelled and governed.</p>
          <p>Machine learning uses algorithms to learn patterns from data and make probabilistic predictions. In supervised learning, models learn from labelled examples. Unsupervised learning identifies patterns without predefined labels. Reinforcement learning improves through actions, feedback and iterative optimization.</p>
        </Section>

        <Section title="Applications of AI">
          <p>Natural language processing breaks language into tokens and analyzes entities, relationships and intent. Chatbots combine language processing with dialog management to generate responses. Computer-vision systems, including convolutional neural networks, identify patterns and objects in images. Generative models can create new text, images, audio, video and computer code.</p>
          <p>In healthcare, AI may assist with clinical documentation, medical-record review, diagnostic imaging, ECG analysis, pathology, molecular and genetic interpretation, prediction, personalized treatment and patient communication. Medical language models may be trained on biomedical text or longitudinal sequences of coded clinical events.</p>
          <p>AI-supported radiology and pathology can rapidly evaluate images and highlight suspicious findings. Predictive systems may identify patterns that suggest impending deterioration or unmet preventive-care needs. These tools can support earlier intervention, but their outputs must be interpreted within the clinical context.</p>
          <div className="rounded-2xl border border-line bg-white p-6"><h3 className="font-semibold text-ink">Examples of implementation</h3><ul className="mt-3 list-disc space-y-3 pl-5 text-sm leading-7"><li>dAIgnose has explored automated analysis of ultrasound images to support recognition of endometriosis.</li><li>PI-RADS provides a standardized framework for prostate MRI acquisition, interpretation and reporting.</li><li>PMcardio applies AI to ECG interpretation and clinical decision support across multiple cardiovascular conditions.</li></ul></div>
          <p>AI systems may produce incorrect results and may reproduce or amplify bias. Clinical end users need clear information about intended use, training populations, validation, trade-offs and failure modes. Prospective evaluation, post-deployment monitoring and ethical oversight are essential.</p>
        </Section>

        <Section title="A case for primary-care AI">
          <p>Primary care faces rising demand, limited time and heavy administrative work. Properly designed AI may improve access, safety, efficiency and continuity by supporting messaging, drafting clinical notes and authorization forms, identifying patients due for screening, generating follow-up reminders and summarizing laboratory results.</p>
          <p>AI may also assist with structured differential-diagnosis lists and evidence-informed care-plan drafts. These outputs should function as aids—not autonomous decisions—and remain subject to clinician verification, patient context and professional accountability.</p>
        </Section>

        <Section title="Challenges and safeguards">
          <div className="grid gap-3">{challenges.map(item => <div key={item} className="flex gap-3 rounded-2xl border border-line bg-white p-4 text-sm leading-6"><ShieldCheck className="mt-0.5 shrink-0 text-pine" size={18} aria-hidden /><span>{item}</span></div>)}</div>
          <p>Randomized and prospective clinical studies remain important for evaluating efficacy and safety. Developers and healthcare organizations should follow reporting guidelines, define accountability, engage diverse stakeholders and monitor deployed models for changing performance.</p>
        </Section>

        <Section title="The future">
          <p>AI has progressed from narrowly defined systems toward more versatile models. Predictions about general or super-intelligent AI remain hypothetical. In healthcare, the nearer-term opportunity is more concrete: responsible tools that improve preventive care, diagnosis, treatment and operational efficiency while remaining supervised by accountable professionals.</p>
        </Section>

        <Section title="Conclusion">
          <p>Artificial intelligence holds substantial promise for transforming clinical practice and improving patient outcomes. It can optimize workflows, augment clinical decision-making and support safer, more efficient and cost-effective care.</p>
          <p>Realizing that potential requires high-quality data, transparent validation, respect for privacy, attention to bias, clear accountability and continued human oversight. AI should be treated as a clinical partner and tool—not as a substitute for the clinician–patient relationship.</p>
        </Section>

        <Section title="Common AI terminology">
          <div className="overflow-hidden rounded-2xl border border-line bg-white">{definitions.map(([term, meaning]) => <div key={term} className="grid gap-1 border-b border-line p-4 last:border-b-0 sm:grid-cols-[10rem_1fr]"><strong className="text-sm text-ink">{term}</strong><span className="text-sm leading-6 text-ink/70">{meaning}</span></div>)}</div>
        </Section>

        <Section title="Cases where the authors used AI">
          <div className="grid gap-4 sm:grid-cols-2">{clinicalCases.map(([title, task, platform]) => <div key={title} className="rounded-2xl border border-line bg-white p-5"><h3 className="flex items-center gap-2 font-semibold text-ink"><CheckCircle2 className="text-pine" size={18} aria-hidden />{title}</h3><p className="mt-2 text-sm leading-6">{task}</p><p className="mt-3 font-mono text-xs text-sage">Platform: {platform}</p></div>)}</div>
        </Section>

        <Section title="References">
          <ol className="list-decimal space-y-3 pl-5 text-sm leading-7">
            <li>Eriksen AV, Möller S, Ryg J. Use of GPT-4 to Diagnose Complex Clinical Cases. <em>NEJM AI.</em> 2023;1(1). DOI: 10.1056/AIp2300031.</li>
            <li>Kohane IS. Injecting Artificial Intelligence into Medicine. <em>NEJM AI.</em> 2023;1(1). DOI: 10.1056/AIe2300197.</li>
            <li>Russell RG, et al. Competencies for the Use of Artificial Intelligence–Based Tools by Health Care Professionals. <em>Academic Medicine.</em> 2023;98(3):348–356.</li>
            <li>Vicente L, Matute H. Humans inherit artificial intelligence biases. <em>Scientific Reports.</em> 2023;13:15737.</li>
            <li>Badal K, Lee CM, Esserman LJ. Guiding principles for responsible development of AI tools for healthcare. <em>Communications Medicine.</em> 2023.</li>
            <li>Sarkar U, Bates DW. Using Artificial Intelligence to Improve Primary Care for Patients and Clinicians. <em>JAMA Internal Medicine.</em> 2024;184(4):343–344.</li>
            <li>He M, et al. Deployment of Artificial Intelligence in Real-World Practice: Opportunity and Challenge. <em>Asia-Pacific Journal of Ophthalmology.</em> 2020;9(4):299–307.</li>
            <li><a href="https://doi.org/10.1038/nature14539" target="_blank" rel="noreferrer" className="text-pine underline underline-offset-4">LeCun Y, Bengio Y, Hinton G. Deep learning. <em>Nature.</em> 2015;521:436–444. <ExternalLink className="ml-1 inline" size={13} /></a></li>
            <li>Bazoukis G, et al. The inclusion of augmented intelligence in medicine: A framework for successful implementation. <em>Cell Reports Medicine.</em> 2022;3(1):100485.</li>
            <li><a href="https://www.imdrf.org/sites/default/files/docs/imdrf/final/technical/imdrf-tech-131209-samd-key-definitions-140901.pdf" target="_blank" rel="noreferrer" className="text-pine underline underline-offset-4">IMDRF. Software as a Medical Device: Key Definitions. 2013. <ExternalLink className="ml-1 inline" size={13} /></a></li>
            <li><a href="https://www.who.int/publications/i/item/9789240029200" target="_blank" rel="noreferrer" className="text-pine underline underline-offset-4">World Health Organization. Ethics and Governance of Artificial Intelligence for Health. <ExternalLink className="ml-1 inline" size={13} /></a></li>
          </ol>
        </Section>

        <Section title="Authors">
          <div className="space-y-3 text-sm leading-7"><p><strong>Dr. Shivesh Kumar</strong> — Physician, consultant cardiologist and healthcare AI innovator.</p><p><strong>Dr. R. M. Chhabra</strong> — Senior Consultant Physician, Max Super Speciality Hospital, Shalimar Bagh and Saroj Super Speciality Hospital, Rohini, Delhi.</p><p><strong>Dr. Naresh Pamnani</strong> — Senior Consultant Physician and Director, Bhagwat Hospital, Sector 14, Rohini, Delhi.</p></div>
        </Section>

        <aside className="mt-12 rounded-2xl bg-ink p-6 text-sm leading-7 text-paper/80"><strong className="block text-paper">Clinical-use notice</strong>AI outputs can be incomplete, biased or incorrect. This article is educational and does not endorse autonomous AI diagnosis or treatment. Clinicians remain responsible for verification, patient-specific judgment, informed consent and compliance with applicable regulations.</aside>
      </article>
    </main>
  );
}
