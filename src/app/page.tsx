import { getDoctorProfile } from "@/lib/get-doctor-profile";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { DoctorHero } from "@/components/DoctorHero";
import { BookingWidget } from "@/components/BookingWidget";
import { AboutDoctor } from "@/components/AboutDoctor";
import { CallbackCard } from "@/components/CallbackCard";
import { BlogSection } from "@/components/BlogSection";
import { BottomNavClient } from "@/components/BottomNavClient";
import { ClinicFacilities } from "@/components/ClinicFacilities";
import { DoctorTalk } from "@/components/DoctorTalk";

// Change this to your doctor's slug once you've added them in Supabase.
const DOCTOR_SLUG = process.env.NEXT_PUBLIC_DEFAULT_DOCTOR_SLUG ?? "demo";

export default async function Home() {
  const { doctor, clinics, experience, education, posts } = await getDoctorProfile(
    DOCTOR_SLUG
  );

  return (
    <div className="pb-20">
      <SiteHeader clinicName={clinics[0]?.name ?? "Clinic"} />

      <main>
        <DoctorHero doctor={doctor} />
        <ClinicFacilities />
        <BookingWidget doctorId={doctor.id} clinics={clinics} id="booking" />
        <div className="tear-divider mx-auto max-w-3xl" />

        <AboutDoctor name={doctor.full_name} experience={experience} education={education} />
        <div className="tear-divider mx-auto max-w-3xl" />

        <CallbackCard doctorId={doctor.id} email={doctor.email} />

        <BlogSection posts={posts} />

        <DoctorTalk
          title="Cardiology & Healthcare AI Videos"
          videoUrl="https://www.youtube.com/embed/0rjk1itg6BY"
        />
      </main>

      <SiteFooter clinicName={clinics[0]?.name ?? "Clinic"} />

      <BottomNavClient whatsapp={doctor.whatsapp} phone={doctor.phone} />
    </div>
  );
}
