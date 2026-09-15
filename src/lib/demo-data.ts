import type { DoctorProfileData } from "@/types/doctor";

export const DEMO_PROFILE: DoctorProfileData = {
  doctor: {
    id: "demo-doctor",
    slug: "dr-shivesh-kumar",
    full_name: "Dr. Shivesh Kumar",
    credentials: "MD (Physician), PG Dip Cardiology, PGDE, HEMP (IIM Calcutta)",
    designation: "Consultant — Non-Invasive Cardiology",
    specialties: ["Preventive Cardiology", "Echocardiography", "Diabetes & Hypertension"],
    experience_years: 18,
    photo_url: "/dr-shivesh-kumar.jpeg",
    bio: "Physician and non-invasive cardiology consultant with more than 18 years of clinical experience. His practice combines evidence-based heart care, preventive medicine and accessible follow-up for families.",
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
      role: "Consultant, Non-Invasive Cardiology",
      organization: "Max Super Speciality Hospital, Shalimar Bagh",
      period: "2019 — Present",
      sort_order: 1,
    },
    {
      id: "exp-2",
      role: "Founder & Physician",
      organization: "Easy My Care Clinic, Dwarka",
      period: "Current",
      sort_order: 2,
    },
    {
      id: "exp-3",
      role: "Clinical Cardiology & Echocardiography",
      organization: "Sunderlal Jain, Saroj and Kalra Hospitals",
      period: "Previous appointments",
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
      slug: "home-blood-pressure-monitoring",
      title: "Choosing an Accurate Blood Pressure Monitor for Home Use",
      excerpt: "A practical guide to validated devices and correct measurement.",
      cover_image_url: null,
      tags: ["Hypertension", "Prevention"],
      published_at: new Date().toISOString(),
    },
    {
      id: "post-2",
      slug: "heart-risk-check",
      title: "Your Heart-Risk Check: What to Review Before Symptoms Begin",
      excerpt: "The numbers, habits and family history worth discussing at a preventive visit.",
      cover_image_url: null,
      tags: ["Cardiology", "Preventive Care"],
      published_at: new Date().toISOString(),
    },
  ],
};
