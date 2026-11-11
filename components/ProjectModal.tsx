"use client";

import React from "react";
import { ProjectItem } from "@/types/portfolio";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-opacity duration-300"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-xl glass-panel rounded-2xl p-6 sm:p-8 space-y-4 border-cyan-500/30"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-2"
          aria-label="Close modal"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="space-y-4">
          <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-800/40 px-2.5 py-1 rounded-md inline-block">
            {project.fullDetails.badge}
          </span>
          <h3 className="text-2xl font-bold text-white">{project.fullDetails.title}</h3>
          <p className="text-sm font-mono text-slate-400 border-b border-white/10 pb-3">
            Tech: <span className="text-emerald-300">{project.fullDetails.tech}</span>
          </p>
          <div className="text-sm text-slate-300 leading-relaxed space-y-3">
            {project.fullDetails.desc.map((paragraph, idx) => (
              <p key={idx} dangerouslySetInnerHTML={{ __html: paragraph }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

