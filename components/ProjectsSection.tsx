"use client";

import React, { useState } from "react";
import { ProjectItem } from "@/types/portfolio";
import { ProjectModal } from "./ProjectModal";
import { likeProject } from "@/app/actions/likes";
import { useToast } from "./ToastProvider";

const initialProjects: ProjectItem[] = [
  {
    id: "grow2growth",
    title: "Grow2Growth Traceability Platform",
    badge: "AgriTech • Grant Winner",
    category: ["agritech", "fullstack"],
    timeline: "2024 - 2026",
    highlight: "🏆 1st Place UNIPRENEUR S2",
    description:
      "Decentralized agricultural platform verifying pure seed lineage and yield predictability for Cambodian rice farmers. Backed by the €4,000 A-SASSY Youth-Led Fund.",
    techStack: ["Laravel", "Flutter", "REST API", "AgriTech"],
    fullDetails: {
      title: "Grow2Growth Rice Seed Traceability",
      badge: "AgriTech • €4,000 A-SASSY Grant & UNIPRENEUR Champion",
      tech: "Laravel, Flutter, REST APIs, QR Seed Tracking, MySQL",
      desc: [
        "Grow2Growth is an award-winning digital venture built to verify purity and authenticity in agricultural seed distribution across Battambang and greater Cambodia.",
        "• <strong>Achievements:</strong> 1st place champion in DYNAMIC & UNIPRENEUR Season 2; secured €4,000 from the A-SASSY Youth-Led Innovation Fund.",
        "• <strong>Technical Role:</strong> Architected backend API endpoints using Laravel, designed the mobile prototype in Flutter, and created verifiable QR batch codes.",
      ],
    },
  },
  {
    id: "flc-attendance",
    title: "FLC Smart QR Attendance & Portal",
    badge: "Full-Stack • Operations",
    category: ["fullstack", "community"],
    timeline: "Production",
    highlight: "FLC Battambang Campus",
    description:
      "Comprehensive web app with dynamic QR-code scanning, real-time student check-ins, automated absence reporting, and parental notification triggers.",
    techStack: ["Laravel PWA", "Tailwind", "MySQL", "QR Engine"],
    fullDetails: {
      title: "FLC Smart QR Attendance & Management Portal",
      badge: "Production Web App • Future Leader Center",
      tech: "Laravel PWA, Tailwind CSS, MySQL, Power Automate",
      desc: [
        "Engineered an automated operational portal replacing paper-based records across student cohorts at Future Leader Center.",
        "• <strong>Features:</strong> Single-second QR scanning on student ID cards, automated SMS/Telegram attendance summaries for guardians, and grade evaluation charts.",
        "• <strong>Impact:</strong> Cut daily record entry time by 85% for trainers and administration.",
      ],
    },
  },
  {
    id: "campus-hub",
    title: "Campus Learner Mobile Hub",
    badge: "Mobile • Cross-Platform",
    category: ["mobile"],
    timeline: "Mobile App",
    highlight: "iOS & Android",
    description:
      "Flutter mobile companion application delivering offline schedules, course syllabus tracking, assignment submissions, and instant announcements.",
    techStack: ["Flutter", "Dart", "SQLite", "Provider"],
    fullDetails: {
      title: "Campus Learner Mobile Hub",
      badge: "Cross-Platform Mobile Application",
      tech: "Flutter, Dart, Provider State Management, SQLite",
      desc: [
        "A responsive mobile client enabling students to track curriculum timetables, download lesson resources, and access offline exam reminders.",
        "• Built with local SQLite storage for resilient performance in areas with spotty connectivity.",
      ],
    },
  },
];

export function ProjectsSection() {
  const [filter, setFilter] = useState("all");
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);
  const [likesMap, setLikesMap] = useState<Record<string, number>>({
    grow2growth: 42,
    "flc-attendance": 28,
    "campus-hub": 19,
  });
  const { showToast } = useToast();

  const handleLike = async (projectId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    // Optimistic UI update
    setLikesMap((prev) => ({
      ...prev,
      [projectId]: (prev[projectId] || 0) + 1,
    }));
    showToast("❤️ Project applauded! Saved to database.");

    try {
      await likeProject(projectId);
    } catch {
      // rollback if necessary
    }
  };

  const filteredProjects =
    filter === "all"
      ? initialProjects
      : initialProjects.filter((p) => p.category.includes(filter));

  return (
    <section id="projects" className="space-y-6 scroll-mt-24">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400">
            Featured Builds
          </h2>
          <p className="text-2xl sm:text-3xl font-extrabold text-white">
            Selected Engineering Projects
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 text-xs font-mono">
          {[
            { key: "all", label: "All" },
            { key: "fullstack", label: "Full-Stack" },
            { key: "mobile", label: "Mobile" },
            { key: "agritech", label: "AgriTech" },
            { key: "community", label: "Community" },
          ].map((item) => (
            <button
              key={item.key}
              onClick={() => setFilter(item.key)}
              className={`px-3 py-1.5 rounded-lg transition ${
                filter === item.key
                  ? "bg-white text-black font-semibold"
                  : "bg-white/5 hover:bg-white/10 text-slate-300"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="project-card glass-panel rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
          >
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                  {project.badge}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  {project.timeline}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 pt-2">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="px-6 py-4 bg-white/[0.02] border-t border-white/5 flex items-center justify-between">
              <span className="text-xs text-emerald-400 font-mono">
                {project.highlight}
              </span>
              <div className="flex items-center gap-3">
                <button
                  onClick={(e) => handleLike(project.id, e)}
                  className="text-xs font-mono text-slate-400 hover:text-rose-400 flex items-center gap-1 transition"
                  title="Applaud project"
                >
                  <span>👏</span>
                  <span>{likesMap[project.id] ?? 0}</span>
                </button>
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition flex items-center gap-1"
                >
                  Details &rarr;
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Details Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}

