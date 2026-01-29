"use client";

import { Navbar } from "@/components/sections/Navbar";
import { ServicesHero } from "@/components/sections/services/ServicesHero";
import { ServicesOverview } from "@/components/sections/services/ServicesOverview";
import { ServicesDetails } from "@/components/sections/services/ServicesDetails";
import { TreatmentPrograms } from "@/components/sections/services/TreatmentPrograms";
import { ServiceApproach } from "@/components/sections/services/ServiceApproach";
import { ServiceDifferentiators } from "@/components/sections/services/ServiceDifferentiators";
import { ServiceFinalCTA } from "@/components/sections/services/ServiceFinalCTA";
import { Footer } from "@/components/sections/Footer";

export default function ServicesPageClient() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ServicesHero />
      <ServicesOverview />
      <ServicesDetails />
      <TreatmentPrograms />
      <ServiceApproach />
      <ServiceDifferentiators />
      <ServiceFinalCTA />
      <Footer />
    </main>
  );
}
