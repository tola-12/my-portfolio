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
  MySqlIcon,
  DockerIcon,
  GitIcon,
  LinuxIcon,
  FigmaIcon,
} from "./icons/TechIcons";

interface SkillItem {
  name: string;
  domain: "backend" | "mobile_frontend" | "toolchain" | "design_ai";
  level: number;
  highlight: string;
  desc: string;
  icon?: React.ReactNode;
}

const operationalSkills: SkillItem[] = [
  // Backend & Systems
  {
    name: "PHP & Laravel",
    domain: "backend",
    level: 95,
    highlight: "Core Backend",
    desc: "MVC architecture, Eloquent ORM, REST API engineering, authentication systems.",
    icon: (
      <div className="flex items-center gap-1.5">
        <PhpIcon className="w-5 h-5" size={20} />
        <LaravelIcon className="w-5 h-5" size={20} />
      </div>
    ),
  },
  {
    name: "Python",
    domain: "backend",
    level: 82,
    highlight: "Logic & Automation",
    desc: "Backend scripting, procedural logic, and automated data pipelines.",
    icon: <PythonIcon className="w-5 h-5" size={20} />,
  },
  {
    name: "MySQL & Relational Schema",
    domain: "backend",
    level: 90,
    highlight: "Database",
    desc: "Relational database schema modeling, indexing, foreign keys, TablePlus.",
    icon: <MySqlIcon className="w-5 h-5" size={20} />,
  },
  {
    name: "Linux Server Administration",
    domain: "backend",
    level: 80,
    highlight: "Systems",
    desc: "Ubuntu/Debian environment configuration, shell navigation, service monitoring.",
    icon: <LinuxIcon className="w-5 h-5" size={20} />,
  },

  // Mobile & Frontend
  {
    name: "Flutter & Dart",
    domain: "mobile_frontend",
    level: 92,
    highlight: "Cross-Platform",
    desc: "Responsive UI state management, cross-platform compilation for iOS & Android.",
    icon: (
      <div className="flex items-center gap-1.5">
        <FlutterIcon className="w-5 h-5" size={20} />
        <DartIcon className="w-5 h-5" size={20} />
      </div>
    ),
  },
  {
    name: "Modern HTML5 & CSS3",
    domain: "mobile_frontend",
    level: 95,
    highlight: "Web Standard",
    desc: "Flexbox, CSS Grid layouts, glassmorphic interfaces, responsive design principles.",
    icon: (
      <div className="flex items-center gap-1.5">
        <Html5Icon className="w-5 h-5" size={20} />
        <Css3Icon className="w-5 h-5" size={20} />
      </div>
    ),
  },
  {
    name: "JavaScript & TypeScript",
    domain: "mobile_frontend",
    level: 88,
    highlight: "Frontend Logic",
    desc: "DOM manipulation, asynchronous event handling, type-safe Next.js & React components.",
    icon: (
      <div className="flex items-center gap-1.5">
        <JavaScriptIcon className="w-5 h-5" size={20} />
        <TypeScriptIcon className="w-5 h-5" size={20} />
      </div>
    ),
  },
  {
    name: "Tailwind CSS",
    domain: "mobile_frontend",
    level: 94,
    highlight: "Styling System",
    desc: "Utility-first CSS architecture, custom theme extensions, micro-animations.",
    icon: <TailwindIcon className="w-5 h-5" size={20} />,
  },

  // Developer Toolchain & Environment
  {
    name: "macOS (M1 Max Workstation)",
    domain: "toolchain",
    level: 95,
    highlight: "Battlestation",
    desc: "16\" MacBook Pro M1 Max (32GB RAM, 1TB SSD), Homebrew, Warp terminal, zsh workflows.",
    icon: <span className="text-slate-200 text-lg font-bold"></span>,
  },
  {
    name: "Docker Containerization",
    domain: "toolchain",
    level: 85,
    highlight: "DevOps",
    desc: "Multi-stage Dockerfiles, docker-compose local microservices staging.",
    icon: <DockerIcon className="w-5 h-5" size={20} />,
  },
  {
    name: "ServBay & TablePlus",
    domain: "toolchain",
    level: 92,
    highlight: "Local Staging",
    desc: "High-performance PHP/MySQL local staging, visual database inspection.",
    icon: <MySqlIcon className="w-5 h-5" size={20} />,
  },
  {
    name: "VS Code, Android Studio & Xcode",
    domain: "toolchain",
    level: 90,
    highlight: "IDE Arsenal",
    desc: "Cross-platform mobile simulators, Flutter debugging, native toolchain compilation.",
    icon: <span className="text-base">💻</span>,
  },
  {
    name: "Git & Wireshark",
    domain: "toolchain",
    level: 88,
    highlight: "Version & Network",
    desc: "Branching workflows, GitHub Actions CI/CD, network packet inspection.",
    icon: <GitIcon className="w-5 h-5" size={20} />,
  },

  // Design & Digital Productivity
  {
    name: "Figma UI/UX",
    domain: "design_ai",
    level: 90,
    highlight: "Product Design",
    desc: "Wireframing, interactive design system prototypes, user flow modeling.",
    icon: <FigmaIcon className="w-5 h-5" size={20} />,
  },
  {
    name: "Canva & Brand Collateral",
    domain: "design_ai",
    level: 92,
    highlight: "Visual Identity",
    desc: "Pitch slide decks, educational curriculum graphics, team visual assets.",
    icon: <span className="text-cyan-400 font-bold font-mono text-sm">C</span>,
  },
  {
    name: "Foundational AI & LLM Tools",
    domain: "design_ai",
    level: 90,
    highlight: "AI Productivity",
    desc: "Prompt engineering, Gemini / OpenAI API workflows, curriculum instruction for youth.",
    icon: <span className="text-base">✨</span>,
  },
  {
    name: "Google Workspace & MS 365",
    domain: "design_ai",
    level: 94,
    highlight: "Operations",
    desc: "Collaborative sheets, automated form responses, institutional workflows.",
    icon: <span className="text-base">📊</span>,
  },
];

export function SkillsMatrix() {
  const [activeDomain, setActiveDomain] = useState<string>("all");

  const domains = [
    { key: "all", label: "All Arsenal" },
    { key: "backend", label: "Backend & Systems" },
    { key: "mobile_frontend", label: "Mobile & Frontend" },
    { key: "toolchain", label: "Toolchain & Environment" },
    { key: "design_ai", label: "Design & Digital Productivity" },
  ];

  const filtered =
    activeDomain === "all"
      ? operationalSkills
      : operationalSkills.filter((s) => s.domain === activeDomain);

  const handleSelect = (key: string) => {
    soundFx.playClick();
    setActiveDomain(key);
  };

  return (
    <section id="skills" className="space-y-6 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="flex flex-col sm:flex-row sm:items-end justify-between gap-4"
      >
        <div>
          <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400">
            Technical Skill Matrix
          </h2>
          <p className="text-2xl sm:text-3xl font-extrabold text-white">
            Operational Domains & Tooling
          </p>
        </div>

        {/* Domain Filter Pills */}
        <div className="flex overflow-x-auto sm:flex-wrap gap-2 pb-1 sm:pb-0 no-scrollbar text-xs font-mono">
          {domains.map((dom) => (
            <motion.button
              key={dom.key}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleSelect(dom.key)}
              onMouseEnter={() => soundFx.playBlip()}
              className={`whitespace-nowrap flex-shrink-0 px-3 py-1.5 rounded-lg transition relative ${
                activeDomain === dom.key
                  ? "bg-cyan-400 text-brand-dark font-bold shadow-lg shadow-cyan-500/25"
                  : "glass-panel text-slate-300 hover:text-white hover:border-cyan-500/30"
              }`}
            >
              {dom.label}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Skills Grid with AnimatePresence & Layout transitions */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((skill) => (
            <motion.div
              layout
              key={skill.name}
              initial={{ opacity: 0, scale: 0.92, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 10 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              onMouseEnter={() => soundFx.playBlip()}
              className="glass-panel rounded-2xl p-4 sm:p-5 border border-white/5 hover:border-cyan-500/30 transition-colors space-y-3 group"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-800/40 px-2 py-0.5 rounded">
                  {skill.highlight}
                </span>
                <span className="text-xs font-mono text-slate-400 font-semibold">
                  {skill.level}%
                </span>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-3">
                  {skill.icon && (
                    <div className="p-2 rounded-xl bg-white/5 border border-white/5 group-hover:scale-110 group-hover:border-cyan-500/30 transition-all flex items-center justify-center flex-shrink-0">
                      {skill.icon}
                    </div>
                  )}
                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition">
                    {skill.name}
                  </h3>
                </div>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  {skill.desc}
                </p>
              </div>

              {/* Animated Progress Bar */}
              <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
                <motion.div
                  className="bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 h-full rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.85, delay: 0.1, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
