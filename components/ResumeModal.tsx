"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { soundFx } from "@/lib/sound";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 15 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto glass-panel rounded-2xl p-4 sm:p-8 space-y-6 border border-cyan-500/30 shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={() => {
                soundFx.playClick();
                onClose();
              }}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-lg hover:bg-white/5 transition cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

        {/* Modal Header */}
        <div className="border-b border-white/10 pb-4 flex flex-col min-[420px]:flex-row min-[420px]:items-center gap-3 sm:gap-4 pr-8">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-400 to-emerald-400 p-[1.5px] overflow-hidden flex-shrink-0 shadow-lg shadow-cyan-500/20">
            <img
              src="/images/hortola_.jpg"
              alt="Hor Tola"
              className="w-full h-full object-cover rounded-[14px]"
            />
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-cyan-400 bg-cyan-950/70 border border-cyan-800/40 px-2.5 py-0.5 rounded">
                CURRICULUM VITAE
              </span>
              <span className="text-xs font-mono text-slate-400">Level 21 • 2026 Edition</span>
            </div>
            <h2 className="text-xl sm:text-3xl font-extrabold text-white">
              Hor Tola — Full-Stack Engineer
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 font-mono">
              Krong Battambang, Cambodia • hortola.dev@gmail.com • NUBB Senior IT Scholar
            </p>
          </div>
        </div>

        {/* Executive Summary */}
        <div className="space-y-2">
          <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-300 font-semibold">
            Executive Summary
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            Full-Stack Software Engineer, Mobile Application Developer, and ICT Trainer with 3+ years of practical project and instruction experience. Co-founder of award-winning AgriTech venture <strong>Grow2Growth</strong> (1st Place UNIPRENEUR S2, €4,000 A-SASSY Youth-Led Fund recipient). IT & Digital Media Lead for Team ខ្មែរដាំ ខ្មែរច្នៃ.
          </p>
        </div>

        {/* Experience & Leadership */}
        <div className="space-y-2.5">
          <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-300 font-semibold">
            Professional Experience & Leadership
          </h3>
          <div className="space-y-2 text-xs text-slate-300">
            <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1">
              <div className="flex flex-wrap justify-between items-center gap-1">
                <span className="font-bold text-white">ICT Curriculum Coordinator & Trainer</span>
                <span className="text-[11px] font-mono text-cyan-400">2025 - Present</span>
              </div>
              <div className="text-[11px] text-slate-400 font-mono">Future Leader Center (Puthi Komar Organization)</div>
              <p className="text-slate-300 text-xs leading-relaxed">
                Designed & taught curricula covering computer fundamentals, office productivity, digital design in Canva, and AI tools for 100+ youth; engineered internal QR attendance PWA to automate center operations.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1">
              <div className="flex flex-wrap justify-between items-center gap-1">
                <span className="font-bold text-white">Undergraduate Researcher & Software Builder</span>
                <span className="text-[11px] font-mono text-cyan-400">2022 - Present</span>
              </div>
              <div className="text-[11px] text-slate-400 font-mono">National University of Battambang (NUBB)</div>
              <p className="text-slate-300 text-xs leading-relaxed">
                Final-year IT scholar focusing on mobile application architectures (Flutter) and backend engineering (Laravel); active participant in regional innovation contests and AgriTech systems.
              </p>
            </div>
          </div>
        </div>

        {/* Key Competencies Matrix */}
        <div className="space-y-2">
          <h3 className="text-xs font-mono uppercase tracking-wider text-emerald-300 font-semibold">
            Core Competencies
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 text-xs font-mono">
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
          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
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
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

