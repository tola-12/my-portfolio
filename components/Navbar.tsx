"use client";

import React from "react";
import confetti from "canvas-confetti";
import { useToast } from "./ToastProvider";

export function Navbar() {
  const { showToast } = useToast();

  const fireCelebration = () => {
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#00F0FF", "#10B981", "#F59E0B", "#3B82F6"],
      });
    } catch {
      // fallback
    }
    showToast("🎉 Happy 21st Birthday, Hor Tola! Cheers to big milestones!");
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/5 bg-brand-dark/80 backdrop-blur-xl transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 py-3.5 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 via-emerald-500 to-blue-600 p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-lg shadow-cyan-500/20">
            <div className="w-full h-full bg-brand-dark rounded-[10px] flex items-center justify-center font-mono font-bold text-sm tracking-tighter text-white">
              HT<span className="text-cyan-400">.</span>
            </div>
          </div>
          <div className="hidden sm:block">
            <div className="font-bold text-sm text-slate-100 tracking-tight flex items-center gap-1.5">
              Hor Tola
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
            </div>
            <div className="text-[11px] font-mono text-slate-400">
              Software Engineer & Tech Mentor
            </div>
          </div>
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 text-sm font-medium text-slate-300">
          <a
            href="#about"
            className="px-3.5 py-1.5 rounded-lg hover:text-cyan-400 hover:bg-white/5 transition"
          >
            About
          </a>
          <a
            href="#terminal-section"
            className="px-3.5 py-1.5 rounded-lg hover:text-cyan-400 hover:bg-white/5 transition"
          >
            Terminal
          </a>
          <a
            href="#bento"
            className="px-3.5 py-1.5 rounded-lg hover:text-cyan-400 hover:bg-white/5 transition"
          >
            Highlights
          </a>
          <a
            href="#projects"
            className="px-3.5 py-1.5 rounded-lg hover:text-cyan-400 hover:bg-white/5 transition"
          >
            Projects
          </a>
          <a
            href="#milestones"
            className="px-3.5 py-1.5 rounded-lg hover:text-cyan-400 hover:bg-white/5 transition"
          >
            Milestones
          </a>
        </nav>

        {/* Right CTAs */}
        <div className="flex items-center gap-2.5">
          <button
            id="confetti-btn"
            onClick={fireCelebration}
            className="px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium hover:bg-emerald-500/20 transition flex items-center gap-1.5 cursor-pointer shadow-sm"
          >
            <span>🎉</span>
            <span className="font-semibold">Level 21</span>
          </button>

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-medium rounded-lg bg-white text-brand-dark font-semibold hover:bg-slate-200 transition shadow-md shadow-white/5"
          >
            Connect
          </a>
        </div>
      </div>
    </header>
  );
}

