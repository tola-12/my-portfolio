"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectItem } from "@/types/portfolio";
import { ProjectModal } from "./ProjectModal";
import { likeProject } from "@/app/actions/likes";
import { useToast } from "./ToastProvider";
import { soundFx } from "@/lib/sound";

const flagshipProjects: ProjectItem[] = [
  {
    id: "grow2growth",
    title: "Grow2Growth — Agricultural Seed Traceability",
    badge: "AgriTech • €4k Grant Winner",
    category: ["agritech", "fullstack"],
    timeline: "2024 - 2026",
    highlight: "🏆 1st Place UNIPRENEUR S2",
    description:
      "A localized seed production and traceability package designed to ensure seed quality and yield predictability from cultivation in Takram village to final harvest. Awarded €4,000 A-SASSY Youth-Led Fund.",
    techStack: ["Traceability MVP", "Supply Chain", "Laravel API", "Takram Pilot"],
    fullDetails: {
      title: "Grow2Growth — Agricultural Seed Traceability System",
      badge: "AgriTech Venture MVP • €4,000 Grant & UNIPRENEUR Champion",
      tech: "Product Traceability Architecture, Packaging Design, Supply Chain MVP, Takram Village Cultivation",
      desc: [
        "<strong>The Problem:</strong> Farmers and local gardeners face unpredictable lettuce crop yields due to inconsistent seed sourcing and lack of transparent provenance.",
        "<strong>The Solution:</strong> A localized seed production and traceability package designed to ensure seed quality verification from cultivation in Takram village to final harvest.",
        "<strong>Key Honors:</strong> First Place in DYNAMIC & UNIPRENEUR Season 2; Recipient of the €4,000 A-SASSY Youth-Led Initiative Grant to pilot seed traceability in Northwest Cambodia.",
      ],
    },
  },
  {
    id: "flc-attendance",
    title: "FLC Staff Attendance & Operations PWA",
    badge: "Web App • Production",
    category: ["fullstack", "community"],
    timeline: "Production",
    highlight: "Puthi Komar Organization",
    description:
      "A fast, responsive Progressive Web App enabling automated staff & student check-ins via dynamic QR verification, role-based access for administrative supervisors, and rapid record exports.",
    techStack: ["Laravel PWA", "MySQL", "QR Scanner", "Tailwind CSS"],
    fullDetails: {
      title: "Future Leader Center Staff Attendance & Operations Web App",
      badge: "Production Web App • Future Leader Center (Puthi Komar Organization)",
      tech: "Laravel, PWA, MySQL, Dynamic QR Scanning Engine, Tailwind CSS",
      desc: [
        "<strong>The Problem:</strong> Manual attendance logging and record management create administrative friction and delay operational reporting across student and staff cohorts.",
        "<strong>The Solution:</strong> A fast, responsive PWA enabling automated check-ins via dynamic QR code verification, role-based access for administrative supervisors, and rapid record exports.",
        "<strong>Measurable Impact:</strong> Replaced paper logs, reduced daily record entry latency by over 80%, and provided instantaneous cohort status for center directors.",
      ],
    },
  },
  {
    id: "banana-peel-initiative",
    title: "Eco-Friendly Banana Peel Product Initiative",
    badge: "Sustainable Innovation",
    category: ["community"],
    timeline: "UNIPRENEUR S2",
    highlight: "Team ខ្មែរដាំ ខ្មែរច្នៃ",
    description:
      "Served as IT & Digital Media Lead for Team ខ្មែរដាំ ខ្មែរច្នៃ, designing digital collateral, team coordination assets, and pitch presentations for upcycling agricultural banana peel byproduct into functional consumer packaging.",
    techStack: ["IT & Media Lead", "Digital Collateral", "Figma", "UNIPRENEUR S2"],
    fullDetails: {
      title: "Eco-Friendly Banana Peel Product Initiative (Team ខ្មែរដាំ ខ្មែរច្នៃ)",
      badge: "Sustainable Innovation • UNIPRENEUR Season 2",
      tech: "Figma UI/UX, Digital Collateral, Presentation Strategy, Agricultural Upcycling",
      desc: [
        "<strong>The Role:</strong> IT & Digital Media Lead for Team ខ្មែរដាំ ខ្មែរច្នៃ in the UNIPRENEUR Season 2 competition.",
        "<strong>The Solution:</strong> Developed digital collateral, team coordination assets, and pitch presentation architectures for upcycling agricultural byproduct (banana peels) into functional consumer packaging.",
        "<strong>Result:</strong> Successfully pitched the circular economy solution to regional enterprise juries, combining environmental sustainability with localized economic value.",
      ],
    },
  },
  {
    id: "campus-hub",
    title: "Campus Learner Mobile Companion Hub",
    badge: "Mobile • Cross-Platform",
    category: ["mobile"],
    timeline: "Mobile App",
    highlight: "Flutter & SQLite",
    description:
      "Cross-platform Flutter mobile client enabling students to track curriculum timetables, download lesson resources, and access offline exam reminders with local SQLite persistence.",
    techStack: ["Flutter", "Dart", "SQLite", "Provider"],
    fullDetails: {
      title: "Campus Learner Mobile Hub",
      badge: "Cross-Platform Mobile Application",
      tech: "Flutter, Dart, Provider State Management, SQLite, Material 3",
      desc: [
        "<strong>The Purpose:</strong> Mobile student assistant designed for resilient performance in areas with spotty internet connectivity.",
        "<strong>Architecture:</strong> Built with local SQLite caching for instant offline access to course syllabi, assignment deadlines, and grade records.",
      ],
    },
  },
];

export function ProjectsSection() {
  const [filter, setFilter] = useState("all");
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);
  const [likesMap, setLikesMap] = useState<Record<string, number>>({
    grow2growth: 46,
    "flc-attendance": 34,
    "banana-peel-initiative": 27,
    "campus-hub": 21,
  });
  const { showToast } = useToast();

  const handleLike = async (projectId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    soundFx.playCelebration();
    setLikesMap((prev) => ({
      ...prev,
      [projectId]: (prev[projectId] || 0) + 1,
    }));
    showToast("❤️ Project applauded! Saved to database.");

    try {
      await likeProject(projectId);
    } catch {
      // rollback
    }
  };

  const filteredProjects =
    filter === "all"
      ? flagshipProjects
      : flagshipProjects.filter((p) => p.category.includes(filter));

  return (
    <section id="projects" className="space-y-6 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="flex flex-col sm:flex-row sm:items-end justify-between gap-4"
      >
        <div>
          <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400">
            Engineering Portfolio
          </h2>
          <p className="text-2xl sm:text-3xl font-extrabold text-white">
            Flagship Projects & Community Solutions
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex overflow-x-auto sm:flex-wrap gap-2 pb-1 sm:pb-0 no-scrollbar text-xs font-mono">
          {[
            { key: "all", label: "All Builds" },
            { key: "fullstack", label: "Full-Stack" },
            { key: "mobile", label: "Mobile" },
            { key: "agritech", label: "AgriTech" },
            { key: "community", label: "Community" },
          ].map((item) => (
            <motion.button
              key={item.key}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                soundFx.playClick();
                setFilter(item.key);
              }}
              className={`whitespace-nowrap flex-shrink-0 px-3 py-1.5 rounded-lg transition ${
                filter === item.key
                  ? "bg-white text-black font-semibold shadow-lg shadow-white/10"
                  : "bg-white/5 hover:bg-white/10 text-slate-300"
              }`}
            >
              {item.label}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Project Cards Grid with Layout Animations */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.93, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.93, y: 10 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              onMouseEnter={() => soundFx.playBlip()}
              className="project-card glass-panel rounded-2xl overflow-hidden flex flex-col justify-between border border-white/5 hover:border-cyan-500/30 transition-colors"
            >
              <div className="p-5 sm:p-6 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
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

              <div className="px-5 sm:px-6 py-3.5 sm:py-4 bg-white/[0.02] border-t border-white/5 flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs text-emerald-400 font-mono font-medium">
                  {project.highlight}
                </span>
                <div className="flex items-center gap-3">
                  <motion.button
                    whileTap={{ scale: 0.85 }}
                    onClick={(e) => handleLike(project.id, e)}
                    className="text-xs font-mono text-slate-400 hover:text-rose-400 flex items-center gap-1 transition cursor-pointer"
                    title="Applaud project"
                  >
                    <span>👏</span>
                    <span>{likesMap[project.id] ?? 0}</span>
                  </motion.button>
                  <button
                    onClick={() => {
                      soundFx.playClick();
                      setActiveModalProject(project);
                    }}
                    className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition flex items-center gap-1 cursor-pointer"
                  >
                    Details &rarr;
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Details Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}
