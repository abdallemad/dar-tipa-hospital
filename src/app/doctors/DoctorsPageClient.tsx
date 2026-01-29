"use client";

import { Navbar } from "@/components/sections/Navbar";
import { DoctorsHero } from "@/components/sections/doctors/DoctorsHero";
import { DoctorsList } from "@/components/sections/doctors/DoctorsList";
import { FinalCTA, Footer } from "@/components/sections/Footer";

export default function DoctorsPageClient() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <DoctorsHero />
      <DoctorsList />
      <FinalCTA />
      <Footer />
    </main>
  );
}
