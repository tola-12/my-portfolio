"use client";

import React, { useState } from "react";
import { useToast } from "./ToastProvider";
import { soundFx } from "@/lib/sound";
import { ProfilePhoto } from "./ProfilePhoto";
import { ResumeModal } from "./ResumeModal";

export function HeroSection() {
  const { showToast } = useToast();
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const copyToClipboard = (text: string, customMessage: string) => {
    soundFx.playClick();
    navigator.clipboard.writeText(text);
    showToast(customMessage);
  };

  return (
    <>
      <section id="about" className="pt-4 sm:pt-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left Hero Text Content */}
          <div className="flex-1 space-y-6 max-w-2xl text-center lg:text-left">
            {/* Availability & Location Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel text-xs text-slate-300 font-mono border border-cyan-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Based in Krong Battambang, Cambodia 🇰🇭</span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
                Building Clean Systems. <br />
                <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-teal-300 bg-clip-text text-transparent">
                  Empowering People.
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed pt-2">
                I am a 4th-year Information Technology scholar at <strong>National University of Battambang (NUBB)</strong>, software developer, and <strong>ICT Curriculum Coordinator & Trainer</strong> at Future Leader Center (Puthi Komar Organization). I bridge backend logic (<span className="text-cyan-300 font-medium">Laravel, Python</span>) and mobile interfaces (<span className="text-emerald-300 font-medium">Flutter</span>) with community-driven solutions.
              </p>
            </div>

            {/* Key Metrics / Micro Stats Grid */}
            <div className="grid grid-cols-3 gap-3 py-3 border-y border-white/10 font-mono">
              <div className="text-left pl-2">
                <div className="text-2xl sm:text-3xl font-extrabold text-white">
                  4th <span className="text-cyan-400 text-sm">Year</span>
                </div>
                <div className="text-xs text-slate-400">IT Major @ NUBB</div>
              </div>
              <div className="text-left pl-2 border-l border-white/10">
                <div className="text-2xl sm:text-3xl font-extrabold text-white">
                  100+ <span className="text-emerald-400 text-sm">Youth</span>
                </div>
                <div className="text-xs text-slate-400">Trained in Tech & AI</div>
              </div>
              <div className="text-left pl-2 border-l border-white/10">
                <div className="text-2xl sm:text-3xl font-extrabold text-white">
                  €4k <span className="text-teal-400 text-sm">Grant</span>
                </div>
                <div className="text-xs text-slate-400">A-SASSY AgriTech</div>
              </div>
            </div>

            {/* Hero CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <a
                href="#projects"
                onClick={() => soundFx.playClick()}
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-400 text-brand-dark font-bold text-sm tracking-tight hover:opacity-95 transition shadow-lg shadow-cyan-500/25 flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
                Explore Flagship Work
              </a>

              <button
                onClick={() => {
                  soundFx.playClick();
                  setIsResumeOpen(true);
                }}
                className="px-4 py-3 rounded-xl glass-panel text-cyan-300 font-mono text-sm hover:text-white border border-cyan-500/30 transition flex items-center gap-2"
              >
                <span>📄</span>
                <span>View Full CV</span>
              </button>

              <a
                href="#terminal-section"
                onClick={() => soundFx.playClick()}
                className="px-4 py-3 rounded-xl glass-panel text-slate-200 font-mono text-sm hover:text-cyan-300 transition flex items-center gap-2"
              >
                <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Dev Console
              </a>

              <button
                onClick={() => copyToClipboard("hortola.dev@gmail.com", "Email copied to clipboard!")}
                className="px-3.5 py-3 rounded-xl glass-panel text-slate-400 hover:text-white transition text-sm flex items-center gap-1.5"
                title="Copy Email"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Copy
              </button>
            </div>
          </div>

          {/* Right Hero Visual: Cyberpunk Profile Photo */}
          <div className="w-full lg:w-5/12 flex justify-center">
            <ProfilePhoto />
          </div>
        </div>
      </section>

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </>
  );
}
