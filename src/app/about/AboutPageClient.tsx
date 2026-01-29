"use client";

import { Navbar } from "@/components/sections/Navbar";
import { PageHeader } from "@/components/sections/about/PageHeader";
import { MissionVision } from "@/components/sections/about/MissionVision";
import { Values } from "@/components/sections/about/Values";
import { TeamPreview } from "@/components/sections/about/TeamPreview";
import { Environment } from "@/components/sections/about/Environment";
import { FinalCTA, Footer } from "@/components/sections/Footer";

export default function AboutPageClient() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHeader
        title="من نحن"
        description="تعرف على دار طيبة ورحلتنا في تقديم أفضل خدمات الرعاية النفسية وعلاج الإدمان."
      />
      <MissionVision />
      <Values />
      <TeamPreview />
      <Environment />
      <FinalCTA />
      <Footer />
    </main>
  );
}
