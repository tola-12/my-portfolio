"use client";

import React from "react";
import { soundFx } from "@/lib/sound";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md transition-opacity duration-300"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto glass-panel rounded-2xl p-6 sm:p-8 space-y-6 border border-cyan-500/30 shadow-2xl"
      >
        {/* Close Button */}
        <button
          onClick={() => {
            soundFx.playClick();
            onClose();
          }}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-lg hover:bg-white/5 transition"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Modal Header */}
        <div className="border-b border-white/10 pb-4 space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-cyan-400 bg-cyan-950/70 border border-cyan-800/40 px-2.5 py-0.5 rounded">
              CURRICULUM VITAE
            </span>
            <span className="text-xs font-mono text-slate-400">Level 21 • 2026 Edition</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Hor Tola — Full-Stack Engineer
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 font-mono">
            Krong Battambang, Cambodia • hortola.dev@gmail.com • NUBB Senior IT Scholar
          </p>
        </div>

        {/* Executive Summary */}
        <div className="space-y-2">
          <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-300 font-semibold">
            Executive Summary
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            Full-Stack Software Engineer and Mobile Application Developer with 3+ years of practical project and training experience. Co-founder of award-winning AgriTech venture <strong>Grow2Growth</strong> (1st Place UNIPRENEUR S2, €4,000 A-SASSY Grant). ICT Computer Trainer at Future Leader Center (FLC) empowering 100+ underprivileged youth.
          </p>
        </div>

        {/* Key Competencies Matrix */}
        <div className="space-y-2">
          <h3 className="text-xs font-mono uppercase tracking-wider text-emerald-300 font-semibold">
            Core Competencies
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-mono">
            <div className="p-2 rounded-lg bg-white/5 border border-white/5 text-slate-200">
              <span className="text-cyan-400">Backend:</span> Laravel, PHP, Python, REST APIs
            </div>
            <div className="p-2 rounded-lg bg-white/5 border border-white/5 text-slate-200">
              <span className="text-cyan-400">Mobile:</span> Flutter, Dart, Cross-Platform
            </div>
            <div className="p-2 rounded-lg bg-white/5 border border-white/5 text-slate-200">
              <span className="text-cyan-400">Frontend:</span> Next.js, React, Tailwind CSS
            </div>
            <div className="p-2 rounded-lg bg-white/5 border border-white/5 text-slate-200">
              <span className="text-emerald-400">Database:</span> PostgreSQL, MySQL, SQLite, Prisma
            </div>
            <div className="p-2 rounded-lg bg-white/5 border border-white/5 text-slate-200">
              <span className="text-emerald-400">DevOps:</span> Docker, Git, Linux, ServBay
            </div>
            <div className="p-2 rounded-lg bg-white/5 border border-white/5 text-slate-200">
              <span className="text-emerald-400">Leadership:</span> ICT Training, Agile, Mentoring
            </div>
          </div>
        </div>

        {/* Honors & Major Wins */}
        <div className="space-y-2">
          <h3 className="text-xs font-mono uppercase tracking-wider text-amber-300 font-semibold">
            Honors & Grants
          </h3>
          <ul className="text-xs text-slate-300 space-y-1.5 font-mono">
            <li className="flex items-start gap-2">
              <span className="text-amber-400">🏆</span>
              <span><strong>1st Place Champion</strong> — DYNAMIC & UNIPRENEUR Season 2 (Grow2Growth)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400">💶</span>
              <span><strong>€4,000 Grant Winner</strong> — A-SASSY Youth-Led Fund for Agricultural Digitization</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400">🎓</span>
              <span><strong>Outstanding IT Senior Scholar</strong> — National University of Battambang (NUBB)</span>
            </li>
          </ul>
        </div>

        {/* Actions / Download Options */}
        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs font-mono text-slate-400">
            Available for full-time engineering & consulting
          </span>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => {
                soundFx.playClick();
                window.print();
              }}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-mono font-medium transition"
            >
              Print / Save PDF
            </button>
            <a
              href="mailto:hortola.dev@gmail.com?subject=Job%20Opportunity%20/%20Collaboration%20for%20Hor%20Tola"
              onClick={() => soundFx.playClick()}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-400 text-brand-dark text-xs font-mono font-bold tracking-tight hover:opacity-95 transition"
            >
              Contact Hor Tola &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
