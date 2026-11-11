import React from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { TechMarquee } from "@/components/TechMarquee";
import { SkillsMatrix } from "@/components/SkillsMatrix";
import { BentoGrid } from "@/components/BentoGrid";
import { ProjectsSection } from "@/components/ProjectsSection";
import { TerminalSection } from "@/components/TerminalSection";
import { GitHubShowcase } from "@/components/GitHubShowcase";
import { MilestonesSection } from "@/components/MilestonesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-12 pb-24 space-y-24">
        {/* 1. Hero Section with Cyberpunk Profile Photo */}
        <HeroSection />

        {/* 2. Acquired Languages & Frameworks Infinite Marquee */}
        <TechMarquee />

        {/* 3. Interactive Skills Matrix with Category Tabs */}
        <SkillsMatrix />

        {/* 3. Bento Grid Overview */}
        <BentoGrid />

        {/* 4. Engineering Projects Gallery with Likes & Modal */}
        <ProjectsSection />

        {/* 5. Interactive Dev Terminal */}
        <TerminalSection />

        {/* 6. Live GitHub Repositories & Open Source Sync */}
        <GitHubShowcase />

        {/* 7. Journey & Academic Milestones */}
        <MilestonesSection />

        {/* 8. Verified Testimonials & Recommendations */}
        <TestimonialsSection />

        {/* 9. Contact Section with Server Action & Telegram Webhook */}
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
