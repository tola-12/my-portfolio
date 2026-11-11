"use client";

import React, { useState } from "react";
import { soundFx } from "@/lib/sound";

interface SkillItem {
  name: string;
  category: "backend" | "frontend" | "mobile" | "database" | "ai";
  level: number;
  highlight: string;
  desc: string;
}

const skillsData: SkillItem[] = [
  // Backend
  {
    name: "Laravel / PHP",
    category: "backend",
    level: 95,
    highlight: "Primary Core",
    desc: "RESTful APIs, Sanctum, Eloquent, Service Patterns, Queues & Events.",
  },
  {
    name: "Python",
    category: "backend",
    level: 80,
    highlight: "Data & Scripts",
    desc: "Automation scripts, data manipulation, machine learning workflows.",
  },
  {
    name: "REST APIs & Microservices",
    category: "backend",
    level: 90,
    highlight: "Architecture",
    desc: "JWT Auth, Rate Limiting, API Versioning, Webhooks & Third-party integrations.",
  },
  // Mobile
  {
    name: "Flutter & Dart",
    category: "mobile",
    level: 90,
    highlight: "Mobile Core",
    desc: "Cross-platform iOS & Android, offline-first SQLite, Provider & Riverpod.",
  },
  {
    name: "Mobile UI/UX Design",
    category: "mobile",
    level: 85,
    highlight: "Design to Code",
    desc: "Material 3, Cupertino, smooth animations, responsive touch interfaces.",
  },
  // Frontend
  {
    name: "Next.js & React",
    category: "frontend",
    level: 88,
    highlight: "Modern Fullstack",
    desc: "App Router, Server Actions, Server Components, Streaming SSR.",
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    level: 95,
    highlight: "Design System",
    desc: "Responsive dark modes, glassmorphism, micro-animations, PostCSS pipelines.",
  },
  {
    name: "TypeScript & Modern JS",
    category: "frontend",
    level: 88,
    highlight: "Type Safety",
    desc: "Strict type models, asynchronous flows, DOM APIs, event buses.",
  },
  // Database & DevOps
  {
    name: "MySQL & PostgreSQL",
    category: "database",
    level: 90,
    highlight: "Relational",
    desc: "Schema design, indexing, foreign keys, TablePlus & migrations.",
  },
  {
    name: "Prisma ORM",
    category: "database",
    level: 88,
    highlight: "Type-Safe DB",
    desc: "Declarative schema modeling, atomic transactions, auto-migrations.",
  },
  {
    name: "Docker & Linux CLI",
    category: "database",
    level: 82,
    highlight: "DevOps",
    desc: "Multi-stage Dockerfiles, Docker Compose, Ubuntu/Debian server administration.",
  },
  {
    name: "Git & GitHub Actions",
    category: "database",
    level: 90,
    highlight: "CI/CD",
    desc: "Branching strategies, automated build & test workflows, version release tagging.",
  },
  // AI & Tools
  {
    name: "AI Prompt Engineering & LLM APIs",
    category: "ai",
    level: 88,
    highlight: "Modern Workflow",
    desc: "Integrating Gemini / OpenAI APIs into web workflows, AI productivity curriculum.",
  },
  {
    name: "Microsoft Power Platform",
    category: "ai",
    level: 85,
    highlight: "FLC Operations",
    desc: "Power Automate workflows, institutional attendance triggers & reporting.",
  },
];

export function SkillsMatrix() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { key: "all", label: "All Weapons" },
    { key: "backend", label: "Backend & APIs" },
    { key: "mobile", label: "Mobile / Flutter" },
    { key: "frontend", label: "Frontend & UI" },
    { key: "database", label: "Databases & DevOps" },
    { key: "ai", label: "AI & Automation" },
  ];

  const filtered =
    activeCategory === "all"
      ? skillsData
      : skillsData.filter((s) => s.category === activeCategory);

  const handleSelect = (key: string) => {
    soundFx.playClick();
    setActiveCategory(key);
  };

  return (
    <section id="skills" className="space-y-6 scroll-mt-24">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400">
            Technical Proficiency
          </h2>
          <p className="text-2xl sm:text-3xl font-extrabold text-white">
            Core Engineering Arsenal
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 text-xs font-mono">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => handleSelect(cat.key)}
              onMouseEnter={() => soundFx.playBlip()}
              className={`px-3 py-1.5 rounded-lg transition ${
                activeCategory === cat.key
                  ? "bg-cyan-400 text-brand-dark font-bold shadow-lg shadow-cyan-500/20"
                  : "glass-panel text-slate-300 hover:text-white"
              }`}
            >
              {cat.label}
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

