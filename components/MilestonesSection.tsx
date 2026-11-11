"use client";

import React from "react";
import { motion } from "framer-motion";
import { soundFx } from "@/lib/sound";

export function MilestonesSection() {
  const milestones = [
    {
      period: "2026 (Q4) • Milestone Year",
      title: "Level 21 & Undergraduate Thesis — NUBB",
      desc: "Turned 21; expanded into UI/UX product design in Figma; advancing final-year undergraduate thesis research in Information Technology at National University of Battambang.",
      color: "bg-cyan-400",
      textColor: "text-cyan-400",
      badge: "Thesis & UI/UX",
    },
    {
      period: "2026 (Q3) • Grant Recognition",
      title: "Awarded €4,000 A-SASSY Youth-Led Initiative Grant",
      desc: "Secured competitive seed funding to pilot seed traceability and pure lettuce seed production in Takram village, empowering local agricultural value chains.",
      color: "bg-emerald-400",
      textColor: "text-emerald-400",
      badge: "€4k Grant Winner",
    },
    {
      period: "2026 (Q2) • Startup Competitions",
      title: "1st Place in DYNAMIC & UNIPRENEUR Season 2",
      desc: "Captured 1st Place across regional startup competitions with Grow2Growth; served as IT & Digital Media Lead for Team ខ្មែរដាំ ខ្មែរច្នៃ (Banana Peel Upcycling Initiative).",
      color: "bg-teal-400",
      textColor: "text-teal-400",
      badge: "1st Place Champion",
    },
    {
      period: "2025–2026 • Community Impact",
      title: "ICT Curriculum Coordinator & Trainer — Future Leader Center",
      desc: "Designed and delivered practical curricula covering computer fundamentals, office productivity, digital design in Canva, and AI tools for over 100+ aspiring youth at Puthi Komar Organization.",
      color: "bg-blue-400",
      textColor: "text-blue-400",
      badge: "100+ Youth Trained",
    },
    {
      period: "2023–2024 • Foundational Growth",
      title: "Intensive Tech & English Development — TASSEL & NUBB",
      desc: "Completed foundational digital literacy, soft skills, and advanced English coursework through TASSEL and Future Leader Center; laid the architectural groundwork for IT major at NUBB.",
      color: "bg-purple-400",
      textColor: "text-purple-400",
      badge: "Foundational Core",
    },
  ];

  return (
    <section id="milestones" className="space-y-6 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400">
          Chronological Milestones
        </h2>
        <p className="text-2xl sm:text-3xl font-extrabold text-white">
          Growth Journey & Achievements Timeline
        </p>
      </motion.div>

      <div className="relative border-l border-white/10 ml-4 sm:ml-8 pl-6 sm:pl-8 space-y-8">
        {milestones.map((m, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, delay: idx * 0.08, ease: "easeOut" }}
            onMouseEnter={() => soundFx.playBlip()}
            className="relative group cursor-default"
          >
            <div
              className={`absolute -left-[33px] sm:-left-[41px] top-1.5 w-4 h-4 rounded-full ${m.color} ring-4 ring-brand-dark transition-transform duration-300 group-hover:scale-125 shadow-[0_0_8px_currentColor]`}
            />
            <div className="space-y-1.5 transition-transform duration-200 group-hover:translate-x-1">
              <div className="flex items-center gap-2">
                <span className={`text-xs font-mono font-semibold ${m.textColor}`}>
                  {m.period}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/10">
                  {m.badge}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                {m.title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed max-w-3xl">
                {m.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
