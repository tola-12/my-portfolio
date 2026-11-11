import React from "react";

export function MilestonesSection() {
  const milestones = [
    {
      year: "2026 • Present",
      title: "Year 4 Senior IT Scholar & Thesis — NUBB",
      desc: "National University of Battambang (NUBB). Completing final capstone research, leading software architecture modules, and preparing for graduation.",
      color: "bg-cyan-400",
      textColor: "text-cyan-400",
    },
    {
      year: "2025 • Grant Winner",
      title: "A-SASSY Youth-Led Fund Recipient (€4,000)",
      desc: "Awarded competitive seed funding to scale digital agriculture tooling and support rural youth innovation in Northwest Cambodia.",
      color: "bg-emerald-400",
      textColor: "text-emerald-400",
    },
    {
      year: "2024 • Competition Champion",
      title: "1st Place in DYNAMIC & UNIPRENEUR Season 2",
      desc: "Co-founded Grow2Growth, pitching and demonstrating practical technological innovation for local agricultural value chains.",
      color: "bg-teal-400",
      textColor: "text-teal-400",
    },
    {
      year: "2023 - Present",
      title: "Computer Trainer & ICT Mentor — Future Leader Center",
      desc: "Teaching computer basics, Microsoft 365, Google Workspace, modern AI tools, and introductory coding to over 100 students.",
      color: "bg-blue-400",
      textColor: "text-blue-400",
    },
  ];

  return (
    <section id="milestones" className="space-y-6 scroll-mt-24">
      <div>
        <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400">
          Growth Journey
        </h2>
        <p className="text-2xl sm:text-3xl font-extrabold text-white">
          Key Milestones & Education
        </p>
      </div>

      <div className="relative border-l border-white/10 ml-4 sm:ml-8 pl-6 sm:pl-8 space-y-8">
        {milestones.map((m, idx) => (
          <div key={idx} className="relative group">
            <div
              className={`absolute -left-[33px] sm:-left-[41px] top-1.5 w-4 h-4 rounded-full ${m.color} ring-4 ring-brand-dark`}
            />
            <div className="space-y-1">
              <span className={`text-xs font-mono ${m.textColor}`}>{m.year}</span>
              <h3 className="text-lg font-bold text-white">{m.title}</h3>
              <p className="text-sm text-slate-300">{m.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

