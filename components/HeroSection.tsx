"use client";

import React from "react";
import { useToast } from "./ToastProvider";

export function HeroSection() {
  const { showToast } = useToast();

  const copyToClipboard = (text: string, customMessage: string) => {
    navigator.clipboard.writeText(text);
    showToast(customMessage);
  };

  return (
    <section id="about" className="pt-4 sm:pt-8">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
        {/* Left Hero Text */}
        <div className="flex-1 space-y-6 max-w-2xl">
          {/* Availability Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel text-xs text-slate-300 font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Based in Krong Battambang, Cambodia 🇰🇭</span>
          </div>

          {/* Headline */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Building Clean Systems. <br />
              <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-teal-300 bg-clip-text text-transparent">
                Empowering People.
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed pt-2">
              I’m <strong className="text-white font-semibold">Hor Tola</strong>, a Full-Stack Software Developer, Mobile Engineer, and ICT Trainer. 4th-year IT Scholar at National University of Battambang (NUBB) and Computer Trainer at Future Leader Center (FLC).
            </p>
          </div>

          {/* Key Metrics / Micro Stats */}
          <div className="grid grid-cols-3 gap-3 py-2 border-y border-white/10 font-mono">
            <div>
              <div className="text-2xl font-bold text-white">
                4th <span className="text-cyan-400 text-sm">Year</span>
              </div>
              <div className="text-xs text-slate-400">IT Major @ NUBB</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">
                100+ <span className="text-emerald-400 text-sm">Youth</span>
              </div>
              <div className="text-xs text-slate-400">Trained in Tech & AI</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">
                €4k <span className="text-teal-400 text-sm">Grant</span>
              </div>
              <div className="text-xs text-slate-400">A-SASSY AgriTech</div>
            </div>
          </div>

          {/* Hero Actions */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#projects"
              className="px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-brand-dark font-bold text-sm tracking-tight hover:opacity-95 transition shadow-lg shadow-cyan-500/20 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
              Explore Flagship Work
            </a>

            <a
              href="#terminal-section"
              className="px-5 py-3 rounded-xl glass-panel text-slate-200 font-mono text-sm hover:text-cyan-300 transition flex items-center gap-2"
            >
              <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Launch Terminal
            </a>

            <button
              onClick={() => copyToClipboard("hortola.dev@gmail.com", "Email copied!")}
              className="px-4 py-3 rounded-xl glass-panel text-slate-400 hover:text-white transition text-sm flex items-center gap-1.5"
              title="Copy Email"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Copy Email
            </button>
          </div>
        </div>

        {/* Right Visual Card / Avatar Badge */}
        <div className="w-full lg:w-96 flex flex-col items-center">
          <div className="relative w-full max-w-sm rounded-2xl p-[1px] bg-gradient-to-b from-cyan-500/40 via-white/10 to-transparent shadow-2xl">
            <div className="rounded-2xl bg-brand-card p-6 space-y-5">
              {/* Avatar Profile Header */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-500 to-emerald-400 p-[2px] shadow-lg shadow-cyan-500/20 flex-shrink-0">
                  <div className="w-full h-full rounded-[14px] bg-[#121620] flex items-center justify-center font-bold text-2xl text-cyan-300 font-mono">
                    HT
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white">Hor Tola</h3>
                  <p className="text-xs text-slate-400 font-mono">
                    National University of Battambang
                  </p>
                  <span className="inline-flex items-center gap-1 mt-1 text-[11px] font-mono text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    Year 4 Thesis & Capstone
                  </span>
                </div>
              </div>

              {/* Quick Status Snapshot */}
              <div className="space-y-2 text-xs font-mono bg-white/[0.03] p-3 rounded-xl border border-white/5 text-slate-300">
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">Primary Core:</span>
                  <span className="text-cyan-300 font-semibold">
                    Laravel • Flutter • Dart
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">Workstation:</span>
                  <span className="text-slate-200">16" MacBook Pro M1 Max</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Current Role:</span>
                  <span className="text-emerald-400">Trainer @ FLC Battambang</span>
                </div>
              </div>

              {/* Quote / Philosophy */}
              <p className="text-xs italic text-slate-400 leading-relaxed border-l-2 border-cyan-400/50 pl-3">
                "Writing structured, maintainable code to solve real local challenges in agriculture, education, and community management."
              </p>

              {/* Social Links */}
              <div className="flex items-center justify-between pt-1">
                <button
                  onClick={() => copyToClipboard("https://github.com/hortola", "GitHub link copied!")}
                  className="text-xs text-slate-400 hover:text-white flex items-center gap-1 font-mono"
                >
                  <span>github/hortola</span>
                </button>
                <button
                  onClick={() => copyToClipboard("+855 000 0000", "Phone copied!")}
                  className="text-xs text-cyan-400 hover:underline font-mono"
                >
                  Telegram / Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

