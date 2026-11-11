import React from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { TerminalSection } from "@/components/TerminalSection";
import { BentoGrid } from "@/components/BentoGrid";
import { ProjectsSection } from "@/components/ProjectsSection";
import { MilestonesSection } from "@/components/MilestonesSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 pb-24 space-y-20">
        <HeroSection />
        <TerminalSection />
        <BentoGrid />
        <ProjectsSection />
        <MilestonesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

