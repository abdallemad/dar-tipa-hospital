"use client";

import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { WhoWeHelp } from "@/components/sections/WhoWeHelp";
import { OurApproach } from "@/components/sections/OurApproach";
import { WhyDarTayba } from "@/components/sections/WhyDarTayba";
import { Gallery } from "@/components/sections/Gallery";
import { Doctors } from "@/components/sections/Doctors";
import { Testimonials } from "@/components/sections/Testimonials";
import { FinalCTA, Footer } from "@/components/sections/Footer";

export default function HomePageClient() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <WhoWeHelp />
      <OurApproach />
      <WhyDarTayba />
      <Gallery />
      <Doctors />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </main>
  );
}
