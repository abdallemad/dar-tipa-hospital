"use client";

import { Navbar } from "@/components/sections/Navbar";
import { ContactHero } from "@/components/sections/contact/ContactHero";
import { ContactTrustSignals } from "@/components/sections/contact/ContactTrustSignals";
import { ContactOptions } from "@/components/sections/contact/ContactOptions";
import { ContactForm } from "@/components/sections/contact/ContactForm";
import { ContactProcess } from "@/components/sections/contact/ContactProcess";
import { ContactEmergency } from "@/components/sections/contact/ContactEmergency";
import { Footer } from "@/components/sections/Footer";

export default function ContactPageClient() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ContactHero />
      <ContactTrustSignals />
      <ContactOptions />
      <ContactForm />
      <ContactProcess />
      <ContactEmergency />
      <Footer />
    </main>
  );
}
