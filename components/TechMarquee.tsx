"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { soundFx } from "@/lib/sound";
import {
  PhpIcon,
  LaravelIcon,
  PythonIcon,
  FlutterIcon,
  DartIcon,
  JavaScriptIcon,
  TypeScriptIcon,
  Html5Icon,
  Css3Icon,
  TailwindIcon,
  ReactIcon,
  NextjsIcon,
  CPlusPlusIcon,
  JavaIcon,
  MySqlIcon,
  PostgreSqlIcon,
  SqliteIcon,
  DockerIcon,
  GitIcon,
  LinuxIcon,
  BashIcon,
  FigmaIcon,
} from "./icons/TechIcons";

interface TechItem {
  id: string;
  name: string;
  type: "language" | "framework" | "database" | "tool";
  experience: string;
  highlight: string;
  glowColor: string;
  icon: React.ReactNode;
}

const languagesTrack: TechItem[] = [
  {
    id: "php",
    name: "PHP",
    type: "language",
    experience: "3+ Years",
    highlight: "Core Backend Engine & Eloquent ORM",
    glowColor: "rgba(119, 123, 180, 0.4)",
    icon: <PhpIcon className="w-8 h-8" size={32} />,
  },
  {
    id: "dart",
    name: "Dart",
    type: "language",
    experience: "2+ Years",
    highlight: "Cross-Platform Mobile Logic for Flutter",
    glowColor: "rgba(1, 117, 194, 0.4)",
    icon: <DartIcon className="w-8 h-8" size={32} />,
  },
  {
    id: "python",
    name: "Python",
    type: "language",
    experience: "2+ Years",
    highlight: "Data Scripting, Procedural & Automation",
    glowColor: "rgba(55, 118, 171, 0.4)",
    icon: <PythonIcon className="w-8 h-8" size={32} />,
  },
  {
    id: "typescript",
    name: "TypeScript",
    type: "language",
    experience: "2+ Years",
    highlight: "Type-Safe Full-Stack & Next.js Apps",
    glowColor: "rgba(49, 120, 198, 0.4)",
    icon: <TypeScriptIcon className="w-8 h-8" size={32} />,
  },
  {
    id: "javascript",
    name: "JavaScript",
    type: "language",
    experience: "3+ Years",
    highlight: "Dynamic DOM, Async APIs & Web Standards",
    glowColor: "rgba(247, 223, 30, 0.4)",
    icon: <JavaScriptIcon className="w-8 h-8" size={32} />,
  },
  {
    id: "cpp",
    name: "C / C++",
    type: "language",
    experience: "Academic Core",
    highlight: "Computer Science Fundamentals @ NUBB",
    glowColor: "rgba(0, 89, 156, 0.4)",
    icon: <CPlusPlusIcon className="w-8 h-8" size={32} />,
  },
  {
    id: "java",
    name: "Java",
    type: "language",
    experience: "Academic Core",
    highlight: "OOP Architecture & Android SDK Basis",
    glowColor: "rgba(237, 139, 0, 0.4)",
    icon: <JavaIcon className="w-8 h-8" size={32} />,
  },
  {
    id: "html5",
    name: "HTML5",
    type: "language",
    experience: "4+ Years",
    highlight: "Semantic Structure & Web Accessibility",
    glowColor: "rgba(227, 79, 38, 0.4)",
    icon: <Html5Icon className="w-8 h-8" size={32} />,
  },
  {
    id: "css3",
    name: "CSS3",
    type: "language",
    experience: "4+ Years",
    highlight: "Flexbox, CSS Grid & Glassmorphism",
    glowColor: "rgba(21, 114, 182, 0.4)",
    icon: <Css3Icon className="w-8 h-8" size={32} />,
  },
  {
    id: "bash",
    name: "Bash / Shell",
    type: "language",
    experience: "2+ Years",
    highlight: "Automated Scripts & Server Ops",
    glowColor: "rgba(16, 185, 129, 0.4)",
    icon: <BashIcon className="w-8 h-8" size={32} />,
  },
];

const frameworksTrack: TechItem[] = [
  {
    id: "laravel",
    name: "Laravel",
    type: "framework",
    experience: "3+ Years",
    highlight: "REST APIs, Auth, MVC, Eloquent",
    glowColor: "rgba(255, 45, 32, 0.4)",
    icon: <LaravelIcon className="w-8 h-8" size={32} />,
  },
  {
    id: "flutter",
    name: "Flutter",
    type: "framework",
    experience: "2+ Years",
    highlight: "iOS & Android Cross-Platform Apps",
    glowColor: "rgba(2, 86, 155, 0.4)",
    icon: <FlutterIcon className="w-8 h-8" size={32} />,
  },
  {
    id: "react",
    name: "React",
    type: "framework",
    experience: "2+ Years",
    highlight: "Declarative Component State & Hooks",
    glowColor: "rgba(97, 218, 251, 0.4)",
    icon: <ReactIcon className="w-8 h-8" size={32} />,
  },
  {
    id: "nextjs",
    name: "Next.js 14",
    type: "framework",
    experience: "Full-Stack",
    highlight: "App Router, SSR, Server Actions",
    glowColor: "rgba(255, 255, 255, 0.4)",
    icon: <NextjsIcon className="w-8 h-8" size={32} />,
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    type: "framework",
    experience: "3+ Years",
    highlight: "Utility-First Cyberpunk Glass Design",
    glowColor: "rgba(6, 182, 212, 0.4)",
    icon: <TailwindIcon className="w-8 h-8" size={32} />,
  },
  {
    id: "mysql",
    name: "MySQL",
    type: "database",
    experience: "3+ Years",
    highlight: "Relational Schemas & Index Optimization",
    glowColor: "rgba(0, 117, 143, 0.4)",
    icon: <MySqlIcon className="w-8 h-8" size={32} />,
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    type: "database",
    experience: "Production",
    highlight: "Prisma ORM & Relational Modeling",
    glowColor: "rgba(51, 103, 145, 0.4)",
    icon: <PostgreSqlIcon className="w-8 h-8" size={32} />,
  },
  {
    id: "sqlite",
    name: "SQLite",
    type: "database",
    experience: "Mobile & Local",
    highlight: "Campus Hub Offline Persistence",
    glowColor: "rgba(0, 240, 255, 0.4)",
    icon: <SqliteIcon className="w-8 h-8" size={32} />,
  },
  {
    id: "docker",
    name: "Docker",
    type: "tool",
    experience: "Containerization",
    highlight: "Isolated Multi-Container Staging",
    glowColor: "rgba(36, 150, 237, 0.4)",
    icon: <DockerIcon className="w-8 h-8" size={32} />,
  },
  {
    id: "git",
    name: "Git & GitHub",
    type: "tool",
    experience: "Daily Workflow",
    highlight: "Version Branches, CI/CD Actions",
    glowColor: "rgba(240, 80, 50, 0.4)",
    icon: <GitIcon className="w-8 h-8" size={32} />,
  },
  {
    id: "linux",
    name: "Linux (Debian/Ubuntu)",
    type: "tool",
    experience: "Server Admin",
    highlight: "CLI Environments & Web Daemons",
    glowColor: "rgba(252, 198, 36, 0.4)",
    icon: <LinuxIcon className="w-8 h-8" size={32} />,
  },
  {
    id: "figma",
    name: "Figma",
    type: "tool",
    experience: "UI/UX Design",
    highlight: "Prototypes, Wireframes & Design Systems",
    glowColor: "rgba(242, 78, 30, 0.4)",
    icon: <FigmaIcon className="w-8 h-8" size={32} />,
  },
];

export function TechMarquee() {
  const [activeItem, setActiveItem] = useState<TechItem | null>(null);
  const [viewMode, setViewMode] = useState<"stream" | "grid">("stream");

  const allTech = [...languagesTrack, ...frameworksTrack];

  return (
    <section id="languages" className="space-y-6 scroll-mt-24">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
        className="flex flex-col sm:flex-row sm:items-end justify-between gap-4"
      >
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400">
              Acquired Knowledge & Tech Arsenal
            </h2>
          </div>
          <p className="text-2xl sm:text-3xl font-extrabold text-white">
            Languages & Frameworks I Have Learned
          </p>
        </div>

        {/* View Mode Switcher */}
        <div className="flex items-center gap-1.5 sm:gap-2 p-1 rounded-xl glass-panel text-xs font-mono w-full sm:w-auto">
          <button
            onClick={() => {
              soundFx.playClick();
              setViewMode("stream");
            }}
            className={`flex-1 sm:flex-none justify-center whitespace-nowrap px-3 py-1.5 rounded-lg transition cursor-pointer flex items-center gap-1.5 ${
              viewMode === "stream"
                ? "bg-cyan-400 text-brand-dark font-bold shadow-md shadow-cyan-500/20"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <span>🌀</span>
            <span>Live Stream</span>
          </button>
          <button
            onClick={() => {
              soundFx.playClick();
              setViewMode("grid");
            }}
            className={`flex-1 sm:flex-none justify-center whitespace-nowrap px-3 py-1.5 rounded-lg transition cursor-pointer flex items-center gap-1.5 ${
              viewMode === "grid"
                ? "bg-cyan-400 text-brand-dark font-bold shadow-md shadow-cyan-500/20"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <span>⊞</span>
            <span>Interactive Grid ({allTech.length})</span>
          </button>
        </div>
      </motion.div>

      {/* STREAM MODE: Infinite Dual-Track Animated Ribbons */}
      {viewMode === "stream" && (
        <div className="space-y-4 relative py-2 overflow-hidden">
          {/* Edge Blur Gradients */}
          <div className="absolute top-0 bottom-0 left-0 w-6 sm:w-24 bg-gradient-to-r from-brand-dark to-transparent z-20 pointer-events-none"></div>
          <div className="absolute top-0 bottom-0 right-0 w-6 sm:w-24 bg-gradient-to-l from-brand-dark to-transparent z-20 pointer-events-none"></div>

          {/* Track 1: Languages (Left-to-Right Continuous Flow) */}
          <div className="overflow-hidden">
            <div className="animate-marquee-infinite gap-3 sm:gap-3.5 pr-3 sm:pr-3.5">
              {[...languagesTrack, ...languagesTrack].map((tech, idx) => (
                <motion.div
                  key={`${tech.id}-${idx}`}
                  whileHover={{ scale: 1.08, y: -3 }}
                  onMouseEnter={() => soundFx.playBlip()}
                  onClick={() => {
                    soundFx.playClick();
                    setActiveItem(tech);
                  }}
                  className="flex items-center gap-2.5 sm:gap-3 px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl glass-panel border border-white/5 hover:border-cyan-400/40 transition-colors cursor-pointer group shadow-lg flex-shrink-0"
                  style={{
                    boxShadow: `0 0 0 1px rgba(255, 255, 255, 0.05)`,
                  }}
                >
                  <div className="transition-transform duration-300 group-hover:scale-110">
                    {tech.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-sm text-white group-hover:text-cyan-300 transition-colors font-mono">
                      {tech.name}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">
                      {tech.experience}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Track 2: Frameworks, Databases & Tools (Reverse Continuous Flow) */}
          <div className="overflow-hidden">
            <div className="animate-marquee-infinite-reverse gap-3.5 pr-3.5">
              {[...frameworksTrack, ...frameworksTrack].map((tech, idx) => (
                <motion.div
                  key={`${tech.id}-${idx}`}
                  whileHover={{ scale: 1.08, y: -3 }}
                  onMouseEnter={() => soundFx.playBlip()}
                  onClick={() => {
                    soundFx.playClick();
                    setActiveItem(tech);
                  }}
                  className="flex items-center gap-2.5 sm:gap-3 px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl glass-panel border border-white/5 hover:border-emerald-400/40 transition-colors cursor-pointer group shadow-lg flex-shrink-0"
                  style={{
                    boxShadow: `0 0 0 1px rgba(255, 255, 255, 0.05)`,
                  }}
                >
                  <div className="transition-transform duration-300 group-hover:scale-110">
                    {tech.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-sm text-white group-hover:text-emerald-300 transition-colors font-mono">
                      {tech.name}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">
                      {tech.experience}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <p className="text-center text-[11px] font-mono text-slate-500 pt-1">
            ⚡ Hover over any icon to pause the stream • Click any language to view full context
          </p>
        </div>
      )}

      {/* GRID MODE: Staggered Interactive Cards Grid */}
      {viewMode === "grid" && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5"
        >
          {allTech.map((tech, idx) => (
            <motion.div
              key={tech.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.03, duration: 0.3 }}
              whileHover={{ y: -5, scale: 1.04 }}
              onMouseEnter={() => soundFx.playBlip()}
              onClick={() => {
                soundFx.playClick();
                setActiveItem(tech);
              }}
              className="glass-panel p-4 rounded-xl border border-white/5 hover:border-cyan-500/40 transition-colors cursor-pointer flex flex-col items-center text-center space-y-2 group"
            >
              <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                {tech.icon}
              </div>
              <div className="font-bold text-sm text-white group-hover:text-cyan-300 transition-colors font-mono">
                {tech.name}
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400">
                {tech.type.toUpperCase()}
              </span>
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Interactive Detail Modal for clicked language */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveItem(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 15 }}
              transition={{ type: "spring", stiffness: 350, damping: 28 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md glass-panel rounded-2xl p-5 sm:p-7 space-y-4 border border-cyan-500/30 shadow-2xl"
            >
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 transition cursor-pointer"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 shadow-lg">
                  {activeItem.icon}
                </div>
                <div>
                  <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-widest">
                    {activeItem.type}
                  </span>
                  <h3 className="text-2xl font-bold text-white font-mono">
                    {activeItem.name}
                  </h3>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 space-y-2 text-xs font-mono">
                <div className="flex justify-between text-slate-400">
                  <span>Experience:</span>
                  <span className="text-white font-bold">{activeItem.experience}</span>
                </div>
                <div className="text-slate-300 leading-relaxed pt-1 border-t border-white/5">
                  <span className="text-cyan-400">Role & Usage:</span> {activeItem.highlight}
                </div>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                Learned and applied by Hor Tola across academic research at NUBB, curriculum instruction at Future Leader Center, or production full-stack systems.
              </p>

              <button
                onClick={() => setActiveItem(null)}
                className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-mono font-medium transition cursor-pointer"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

