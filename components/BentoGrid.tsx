import React from "react";

export function BentoGrid() {
  return (
    <section id="bento" className="space-y-6 scroll-mt-24">
      <div>
        <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400">
          Bento Overview
        </h2>
        <p className="text-2xl sm:text-3xl font-extrabold text-white">
          Full-Stack Capability & Impact
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Bento 1: Core Tech Stack (Spans 2 Cols) */}
        <div className="glass-panel rounded-2xl p-6 md:col-span-2 flex flex-col justify-between relative overflow-hidden group">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-800/40 px-2.5 py-1 rounded-md">
                Primary Weapons
              </span>
              <span className="text-xs text-slate-400 font-mono">Modern Full-Stack</span>
            </div>
            <h3 className="text-xl font-bold text-white">Architecture & Tooling</h3>
            <p className="text-sm text-slate-300">
              Specialized in scalable backend architectures with Laravel/Node and sleek mobile cross-platform systems using Flutter & Dart.
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
              PostgreSQL & Prisma
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
        </div>

        {/* Bento 2: Flagship AgriTech Win (Spans 2 Cols) */}
        <div className="glass-panel rounded-2xl p-6 md:col-span-1 lg:col-span-2 flex flex-col justify-between border-emerald-500/20 bg-gradient-to-br from-emerald-950/20 to-transparent">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-2.5 py-1 rounded-md">
                Grant & 1st Place
              </span>
              <span className="text-xs font-mono text-emerald-300">
                DYNAMIC & UNIPRENEUR
              </span>
            </div>
            <h3 className="text-xl font-bold text-white">Grow2Growth AgriTech</h3>
            <p className="text-sm text-slate-300">
              Co-founded and engineered seed traceability for rice varieties. Won{" "}
              <strong className="text-white">€4,000 A-SASSY Youth-Led Fund</strong> to empower local farmers and guarantee seed purity.
            </p>
          </div>
          <div className="pt-6 flex items-center justify-between text-xs font-mono text-slate-400">
            <span>Focus: Seed Quality & Traceability</span>
            <span className="text-emerald-400 font-semibold">1st Place Winner</span>
          </div>
        </div>

        {/* Bento 3: Tech Mentor & Leadership */}
        <div className="glass-panel rounded-2xl p-6 flex flex-col justify-between">
          <div className="space-y-3">
            <span className="text-xs font-mono text-blue-400 bg-blue-950/60 border border-blue-800/40 px-2.5 py-1 rounded-md">
              FLC Leadership
            </span>
            <h3 className="text-lg font-bold text-white">Computer Trainer</h3>
            <p className="text-sm text-slate-300">
              Teaching digital skills, modern AI productivity workflows, and office suites to empower underprivileged youth in Battambang.
            </p>
          </div>
          <div className="pt-4 text-xs font-mono text-cyan-300">
            100+ Students Mentored
          </div>
        </div>

        {/* Bento 4: Operations & System Builder */}
        <div className="glass-panel rounded-2xl p-6 flex flex-col justify-between">
          <div className="space-y-3">
            <span className="text-xs font-mono text-purple-400 bg-purple-950/60 border border-purple-800/40 px-2.5 py-1 rounded-md">
              Automation
            </span>
            <h3 className="text-lg font-bold text-white">FLC Ops PWA</h3>
            <p className="text-sm text-slate-300">
              Automated institutional attendance and record management using Laravel PWA with QR check-in & Power Platform tools.
            </p>
          </div>
          <div className="pt-4 text-xs font-mono text-purple-300">
            Paperless Operations
          </div>
        </div>

        {/* Bento 5: Rig & Specs (Spans 2 cols) */}
        <div className="glass-panel rounded-2xl p-6 md:col-span-2 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-amber-400 bg-amber-950/60 border border-amber-800/40 px-2.5 py-1 rounded-md">
                Battlestation
              </span>
              <span className="text-xs font-mono text-slate-400">Always Optimized</span>
            </div>
            <h3 className="text-lg font-bold text-white">16" MacBook Pro (M1 Max)</h3>
            <p className="text-sm text-slate-300">
              High-performance workstation running 32GB Unified RAM and 1TB NVMe storage. Paired with Warp Terminal, VS Code, and ServBay local staging.
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
        </div>
      </div>
    </section>
  );
}

