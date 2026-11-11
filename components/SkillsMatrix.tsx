"use client";

import React, { useState } from "react";
import { soundFx } from "@/lib/sound";

interface SkillItem {
  name: string;
  domain: "backend" | "mobile_frontend" | "toolchain" | "design_ai";
  level: number;
  highlight: string;
  desc: string;
}

const operationalSkills: SkillItem[] = [
  // Backend & Systems
  {
    name: "PHP & Laravel",
    domain: "backend",
    level: 95,
    highlight: "Core Backend",
    desc: "MVC architecture, Eloquent ORM, REST API engineering, authentication systems.",
  },
  {
    name: "Python",
    domain: "backend",
    level: 82,
    highlight: "Logic & Automation",
    desc: "Backend scripting, procedural logic, and automated data pipelines.",
  },
  {
    name: "MySQL & Relational Schema",
    domain: "backend",
    level: 90,
    highlight: "Database",
    desc: "Relational database schema modeling, indexing, foreign keys, TablePlus.",
  },
  {
    name: "Linux Server Administration",
    domain: "backend",
    level: 80,
    highlight: "Systems",
    desc: "Ubuntu/Debian environment configuration, shell navigation, service monitoring.",
  },

  // Mobile & Frontend
  {
    name: "Flutter & Dart",
    domain: "mobile_frontend",
    level: 92,
    highlight: "Cross-Platform",
    desc: "Responsive UI state management, cross-platform compilation for iOS & Android.",
  },
  {
    name: "Modern HTML5 & CSS3",
    domain: "mobile_frontend",
    level: 95,
    highlight: "Web Standard",
    desc: "Flexbox, CSS Grid layouts, glassmorphic interfaces, responsive design principles.",
  },
  {
    name: "JavaScript & TypeScript",
    domain: "mobile_frontend",
    level: 88,
    highlight: "Frontend Logic",
    desc: "DOM manipulation, asynchronous event handling, type-safe Next.js & React components.",
  },
  {
    name: "Tailwind CSS",
    domain: "mobile_frontend",
    level: 94,
    highlight: "Styling System",
    desc: "Utility-first CSS architecture, custom theme extensions, micro-animations.",
  },

  // Developer Toolchain & Environment
  {
    name: "macOS (M1 Max Workstation)",
    domain: "toolchain",
    level: 95,
    highlight: "Battlestation",
    desc: "16\" MacBook Pro M1 Max (32GB RAM, 1TB SSD), Homebrew, Warp terminal, zsh workflows.",
  },
  {
    name: "Docker Containerization",
    domain: "toolchain",
    level: 85,
    highlight: "DevOps",
    desc: "Multi-stage Dockerfiles, docker-compose local microservices staging.",
  },
  {
    name: "ServBay & TablePlus",
    domain: "toolchain",
    level: 92,
    highlight: "Local Staging",
    desc: "High-performance PHP/MySQL local staging, visual database inspection.",
  },
  {
    name: "VS Code, Android Studio & Xcode",
    domain: "toolchain",
    level: 90,
    highlight: "IDE Arsenal",
    desc: "Cross-platform mobile simulators, Flutter debugging, native toolchain compilation.",
  },
  {
    name: "Git & Wireshark",
    domain: "toolchain",
    level: 88,
    highlight: "Version & Network",
    desc: "Branching workflows, GitHub Actions CI/CD, network packet inspection.",
  },

  // Design & Digital Productivity
  {
    name: "Figma UI/UX",
    domain: "design_ai",
    level: 90,
    highlight: "Product Design",
    desc: "Wireframing, interactive design system prototypes, user flow modeling.",
  },
  {
    name: "Canva & Brand Collateral",
    domain: "design_ai",
    level: 92,
    highlight: "Visual Identity",
    desc: "Pitch slide decks, educational curriculum graphics, team visual assets.",
  },
  {
    name: "Foundational AI & LLM Tools",
    domain: "design_ai",
    level: 90,
    highlight: "AI Productivity",
    desc: "Prompt engineering, Gemini / OpenAI API workflows, curriculum instruction for youth.",
  },
  {
    name: "Google Workspace & MS 365",
    domain: "design_ai",
    level: 94,
    highlight: "Operations",
    desc: "Collaborative sheets, automated form responses, institutional workflows.",
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
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400">
            Technical Skill Matrix
          </h2>
          <p className="text-2xl sm:text-3xl font-extrabold text-white">
            Operational Domains & Tooling
          </p>
        </div>

        {/* Domain Filter Pills */}
        <div className="flex flex-wrap gap-2 text-xs font-mono">
          {domains.map((dom) => (
            <button
              key={dom.key}
              onClick={() => handleSelect(dom.key)}
              onMouseEnter={() => soundFx.playBlip()}
              className={`px-3 py-1.5 rounded-lg transition ${
                activeDomain === dom.key
                  ? "bg-cyan-400 text-brand-dark font-bold shadow-lg shadow-cyan-500/20"
                  : "glass-panel text-slate-300 hover:text-white"
              }`}
            >
              {dom.label}
            </button>
          ))}
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((skill, idx) => (
          <div
            key={idx}
            onMouseEnter={() => soundFx.playBlip()}
            className="glass-panel rounded-2xl p-5 border border-white/5 hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1 space-y-3 group"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-800/40 px-2 py-0.5 rounded">
                {skill.highlight}
              </span>
              <span className="text-xs font-mono text-slate-400 font-semibold">
                {skill.level}%
              </span>
            </div>

            <div>
              <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition">
                {skill.name}
              </h3>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                {skill.desc}
              </p>
            </div>

            {/* Visual Progress Bar */}
            <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
              <div
                className="bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 h-full rounded-full transition-all duration-700"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
