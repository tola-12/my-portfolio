"use client";

import React from "react";
import { motion } from "framer-motion";
import { soundFx } from "@/lib/sound";

export function BentoGrid() {
  return (
    <section id="bento" className="space-y-6 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400">
          Bento Overview
        </h2>
        <p className="text-2xl sm:text-3xl font-extrabold text-white">
          Full-Stack Capability & Community Impact
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Bento 1: Core Tech Stack (Spans 2 Cols) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5, delay: 0.05 }}
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
          onMouseEnter={() => soundFx.playBlip()}
          className="glass-panel rounded-2xl p-6 md:col-span-2 flex flex-col justify-between relative overflow-hidden group border border-white/5 hover:border-cyan-500/30 transition-colors"
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-800/40 px-2.5 py-1 rounded-md">
                Primary Weapons
              </span>
              <span className="text-xs text-slate-400 font-mono">Modern Full-Stack</span>
            </div>
            <h3 className="text-xl font-bold text-white">Architecture & Tooling</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Specialized in scalable backend architectures with Laravel and sleek mobile cross-platform systems using Flutter & Dart. Paired with modern Next.js and Prisma ORM.
            </p>
          </div>

          {/* Badges Grid */}
          <div className="flex flex-wrap gap-2 pt-6">
            <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-200">
              Laravel / PHP
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-cyan-300">
              Flutter & Dart
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-200">
              Next.js & React
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-emerald-300">
              PostgreSQL & MySQL
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-200">
              Docker & ServBay
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-200">
              Tailwind CSS
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-200">
              Git / GitHub Actions
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-200">
              Figma UI/UX
            </span>
          </div>
        </motion.div>

        {/* Bento 2: Flagship AgriTech Win (Spans 2 Cols) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
          onMouseEnter={() => soundFx.playBlip()}
          className="glass-panel rounded-2xl p-6 md:col-span-1 lg:col-span-2 flex flex-col justify-between border border-emerald-500/20 hover:border-emerald-500/40 bg-gradient-to-br from-emerald-950/20 to-transparent transition-colors"
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-2.5 py-1 rounded-md">
                €4,000 Grant & 1st Place
              </span>
              <span className="text-xs font-mono text-emerald-300">
                DYNAMIC & UNIPRENEUR S2
              </span>
            </div>
            <h3 className="text-xl font-bold text-white">Grow2Growth AgriTech</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Localized seed production and traceability package designed to ensure seed quality verification from cultivation in Takram village to final harvest. Won <strong className="text-white">€4,000 A-SASSY Youth-Led Fund</strong> to eliminate unpredictable crop yields.
            </p>
          </div>
          <div className="pt-6 flex items-center justify-between text-xs font-mono text-slate-400">
            <span>Pilot: Takram Village Cultivation</span>
            <span className="text-emerald-400 font-semibold">1st Place Winner</span>
          </div>
        </motion.div>

        {/* Bento 3: Tech Mentor & Leadership */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
          onMouseEnter={() => soundFx.playBlip()}
          className="glass-panel rounded-2xl p-6 flex flex-col justify-between border border-white/5 hover:border-blue-500/30 transition-colors"
        >
          <div className="space-y-3">
            <span className="text-xs font-mono text-blue-400 bg-blue-950/60 border border-blue-800/40 px-2.5 py-1 rounded-md">
              Puthi Komar Organization
            </span>
            <h3 className="text-lg font-bold text-white">ICT Curriculum Trainer</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Teaching computer fundamentals, office suites, Canva design, and foundational AI tools to empower underprivileged youth at Future Leader Center.
            </p>
          </div>
          <div className="pt-4 text-xs font-mono text-cyan-300">
            100+ Students Mentored
          </div>
        </motion.div>

        {/* Bento 4: Operations & System Builder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
          onMouseEnter={() => soundFx.playBlip()}
          className="glass-panel rounded-2xl p-6 flex flex-col justify-between border border-white/5 hover:border-purple-500/30 transition-colors"
        >
          <div className="space-y-3">
            <span className="text-xs font-mono text-purple-400 bg-purple-950/60 border border-purple-800/40 px-2.5 py-1 rounded-md">
              Operations PWA
            </span>
            <h3 className="text-lg font-bold text-white">FLC Staff QR Attendance</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Progressive Web App enabling automated check-ins via dynamic QR code verification, role-based supervisor access, and rapid record exports.
            </p>
          </div>
          <div className="pt-4 text-xs font-mono text-purple-300">
            Paperless Operations
          </div>
        </motion.div>

        {/* Bento 5: Rig & Specs (Spans 2 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5, delay: 0.25 }}
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
          onMouseEnter={() => soundFx.playBlip()}
          className="glass-panel rounded-2xl p-6 md:col-span-2 flex flex-col justify-between border border-white/5 hover:border-amber-500/30 transition-colors"
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-amber-400 bg-amber-950/60 border border-amber-800/40 px-2.5 py-1 rounded-md">
                Battlestation Rig
              </span>
              <span className="text-xs font-mono text-slate-400">Apple Silicon</span>
            </div>
            <h3 className="text-lg font-bold text-white">16" MacBook Pro (M1 Max)</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              High-performance workstation running 32GB Unified RAM and 1TB NVMe storage. Paired with Warp Terminal, VS Code, ServBay, TablePlus, and Docker.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-2 pt-4 text-center font-mono text-xs">
            <div className="p-2 rounded bg-white/5 border border-white/5">
              <div className="text-slate-400">RAM</div>
              <div className="font-bold text-white">32 GB</div>
            </div>
            <div className="p-2 rounded bg-white/5 border border-white/5">
              <div className="text-slate-400">Storage</div>
              <div className="font-bold text-white">1 TB SSD</div>
            </div>
            <div className="p-2 rounded bg-white/5 border border-white/5">
              <div className="text-slate-400">Display</div>
              <div className="font-bold text-white">Liquid XDR</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
