import type { DoctorProfileData } from "@/types/doctor";

export const DEMO_PROFILE: DoctorProfileData = {
  doctor: {
    id: "demo-doctor",
    slug: "dr-shivesh-kumar",
    full_name: "Dr. Shivesh Kumar",
    credentials: "MD (Physician), PG Dip Cardiology, PGDE, HEMP (IIM Calcutta)",
    designation: "Physician · Consultant Cardiologist · Healthcare AI Innovator",
    specialties: ["Non-Invasive Cardiology", "Critical Care", "Healthcare AI"],
    experience_years: 20,
    photo_url: "/dr-shivesh-kumar.jpeg",
    bio: "Physician and non-invasive consultant cardiologist, and healthcare AI innovator with more than 20 years of experience spanning cardiovascular medicine, critical care, healthcare leadership, digital health transformation, and artificial intelligence.",
    phone: "919891368298",
    whatsapp: "919891368298",
    email: "support@emc.ooo",
  },
  clinics: [
    { id: "demo-clinic-1", name: "Easy My Care Clinic", address: "Dwarka", city: "New Delhi" },
  ],
  experience: [
    {
      id: "exp-1",
      role: "Consultant, Cardiology",
      organization: "Yatharth Super Speciality Hospital, Model Town, Delhi",
      period: "June 2026 — Present",
      sort_order: 1,
    },
    {
      id: "exp-2",
      role: "Consultant, Non-Invasive Cardiology",
      organization: "Max Super Speciality Hospital, Shalimar Bagh, Delhi",
      period: "2020 — June 2026",
      sort_order: 2,
    },
    {
      id: "exp-3",
      role: "Consultant Cardiology (NIC)",
      organization: "Saroj Super Speciality Hospital, Rohini, Delhi",
      period: "2018 — 2020",
      sort_order: 3,
    },
  ],
  education: [
    {
      id: "edu-1",
      qualification: "PG Diploma in Cardiology",
      institution: "Middlesex University, UK",
      year: "2008",
      sort_order: 1,
    },
    {
      id: "edu-2",
      qualification: "PG Diploma in Echocardiography",
      institution: "Annamalai University",
      year: "2009",
      sort_order: 2,
    },
    {
      id: "edu-3",
      qualification: "Healthcare Executive Management Programme",
      institution: "IIM Calcutta",
      year: "2016",
      sort_order: 3,
    },
  ],
  posts: [
    {
      id: "post-1",
      slug: "selecting-an-accurate-blood-pressure-monitor",
      title: "Selecting an Accurate Blood Pressure Monitor for Home Use",
      excerpt: "Cardiology Today, Vol. XXVII, No. 4 · July–August 2023",
      cover_image_url: null,
      tags: ["Publication", "Hypertension"],
      published_at: "2023-08-01T00:00:00.000Z",
    },
    {
      id: "post-2",
      slug: "demystifying-ai-for-clinicians",
      title: "Demystifying AI for Clinicians",
      excerpt: "Shivesh Kumar et al. · A clinician-focused introduction to artificial intelligence in healthcare.",
      cover_image_url: null,
      tags: ["Publication", "Healthcare AI"],
      published_at: "2026-01-01T00:00:00.000Z",
    },
  ],
};
