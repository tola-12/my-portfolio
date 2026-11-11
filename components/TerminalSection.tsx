"use client";

import React, { useState, useRef, useEffect } from "react";
import confetti from "canvas-confetti";
import { useToast } from "./ToastProvider";
import { soundFx } from "@/lib/sound";

interface LogEntry {
  type: "echo" | "response" | "system";
  text: string;
}

const commandsMap: Record<string, string | (() => string)> = {
  help: `Available commands:
• <span class="text-cyan-300">experience</span> : Leadership & instruction roles at FLC & NUBB
• <span class="text-cyan-300">education</span>  : B.S. in IT journey at NUBB & English certifications
• <span class="text-cyan-300">projects</span>   : Flagship builds (Grow2Growth, FLC PWA, Banana Peel)
• <span class="text-cyan-300">skills</span>     : Core operational domains, frameworks & tooling
• <span class="text-cyan-300">grant</span>      : €4,000 A-SASSY Youth-Led Fund mission objectives
• <span class="text-cyan-300">hardware</span>   : Host specs: MacBook Pro 16" (M1 Max, 32GB RAM)
• <span class="text-cyan-300">quote</span>      : Personal engineering mantra & philosophy
• <span class="text-cyan-300">github</span>     : Live repository metrics & open-source summary
• <span class="text-cyan-300">awards</span>     : Grant wins, A-SASSY, & UNIPRENEUR awards
• <span class="text-cyan-300">whoami</span>     : Bio, credentials & Battambang roots
• <span class="text-cyan-300">sound</span>      : Toggle interface audio synthesizer
• <span class="text-cyan-300">party</span>      : Fire birthday confetti celebratory burst
• <span class="text-cyan-300">clear</span>      : Wipe the terminal buffer`,

  experience: `1. ICT Curriculum Coordinator & Trainer
   Future Leader Center (Puthi Komar Organization) | 2025 - Present
   • Designed & taught curricula: computer fundamentals, office suites, Canva, AI tools.
   • Mentored cohorts of 100+ youth in digital literacy and tech adoption.
   • Engineered internal QR attendance PWA to automate center administration.

2. Undergraduate Researcher & Software Builder
   National University of Battambang (NUBB) | 2022 - Present
   • Final-year senior scholar focusing on mobile architectures (Flutter) and backend APIs (Laravel).
   • Winner in regional innovation challenges & collaborative AgriTech ventures.

3. IT & Digital Media Lead
   Team ខ្មែរដាំ ខ្មែរច្នៃ (UNIPRENEUR Season 2)
   • Developed digital collateral & pitch presentation for banana peel packaging upcycling.`,

  education: `Degree       : Bachelor of Science in Information Technology (Senior Year)
Institution  : National University of Battambang (NUBB)
Focus        : Software Engineering, Mobile Architecture, Database Systems
Languages    : Khmer (Native), English (Advanced Professional via TASSEL & FLC)`,

  hardware: `Host    : Apple MacBook Pro 16-inch
Chip    : Apple M1 Max (High-Core GPU & CPU)
Memory  : 32 GB Unified RAM
Storage : 1 TB Fast NVMe SSD
Display : Liquid Retina XDR (120Hz ProMotion)
Tools   : VS Code, Android Studio, Xcode, Warp Terminal, TablePlus, ServBay`,

  grant: `Grant Name : A-SASSY Youth-Led Initiative Grant
Funding    : €4,000 Competitive Award
Objective  : Pilot localized lettuce seed production and traceability package in Takram village.
Impact     : Guarantee seed quality and provenance to eliminate unpredictable crop yields for farmers.`,

  quote: `"Based in Battambang, Cambodia, I bridge backend logic (Laravel, Python) and mobile interfaces (Flutter) with community-driven solutions—from digital attendance platforms for non-profit education centers to seed traceability ventures that empower local agriculture."`,

  skills: `Backend & Systems : PHP / Laravel (MVC, Eloquent, REST APIs), Python, MySQL, Linux
Mobile & Frontend : Flutter & Dart (Cross-Platform), Next.js, React, Tailwind CSS, TypeScript
Developer Tooling : macOS M1 Max, Docker, ServBay, TablePlus, VS Code, Git, Wireshark
Design & AI       : Figma UI/UX, Canva, Google Workspace, Microsoft 365, LLM Prompting`,

  projects: `1. Grow2Growth - Agricultural rice seed traceability platform (Award winner)
2. FLC Attendance PWA - Automated QR check-in & student ops portal
3. Campus Mobile Hub - Cross-platform Flutter course assistant
4. Power Platform Bots - Automated reporting for educational institutions`,

  github: `Profile : github.com/tola-12
Repos   : 12+ public repositories
Focus   : Laravel REST APIs, Flutter cross-platform clients, Next.js web applications
Status  : Open for open-source contributions & collaborations`,

  awards: `• 1st Place - DYNAMIC & UNIPRENEUR Season 2 (Grow2Growth)
• €4,000 Grant Recipient - A-SASSY Youth-Led Innovation Fund
• National University of Battambang (NUBB) Outstanding IT Candidate`,

  specs: `Hardware: 16-inch Apple MacBook Pro
Chip    : Apple M1 Max (High-Core GPU & CPU)
Memory  : 32 GB Unified RAM
Storage : 1 TB Fast NVMe SSD
OS      : macOS Sequoia / Linux CLI workflows
Editor  : VS Code + JetBrains + Warp Terminal`,

  whoami: `Name     : Hor Tola
Status   : 4th-Year Senior IT Scholar @ National University of Battambang (NUBB)
Role     : Computer Trainer & Curriculum Developer @ Future Leader Center
Location : Krong Battambang, Cambodia`,

  stack: `Architecture : Next.js 14 (App Router) + TypeScript
Rendering    : Server Components & Streaming SSR
Data Layer   : Prisma ORM with SQLite / PostgreSQL
Styling      : Tailwind CSS (Compiled PostCSS, zero CDN)
Deployment   : Vercel / Railway / Docker containerized`,

  date: () => {
    return `<span class="text-cyan-300 font-mono">Current Time: ${new Date().toLocaleString("en-US", { timeZone: "Asia/Phnom_Penh" })} (ICT / Cambodia Time)</span>`;
  },

  sound: () => {
    const isEnabled = soundFx.toggle();
    return isEnabled
      ? `<span class="text-emerald-400 font-bold">🔊 Interface sound effects enabled!</span>`
      : `<span class="text-amber-400 font-bold">🔇 Interface sound effects muted.</span>`;
  },
};

export function TerminalSection() {
  const { showToast } = useToast();
  const [logs, setLogs] = useState<LogEntry[]>([
    {
      type: "system",
      text: `<span class="text-emerald-400 font-bold">Welcome to Hor Tola's Dev Console v2.6 [Full-Stack Next.js Edition].</span><br /><span class="text-slate-400">Type <span class="text-cyan-400 font-bold">help</span> to view commands, or try <span class="text-cyan-400 font-bold">stack</span>, <span class="text-cyan-400 font-bold">projects</span>, <span class="text-cyan-400 font-bold">github</span>, <span class="text-cyan-400 font-bold">sound</span>, or <span class="text-cyan-400 font-bold">party</span>.</span>`,
    },
  ]);
  const [inputVal, setInputVal] = useState("");
  const terminalBodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [logs]);

  const handleCommand = () => {
    soundFx.playClick();
    const raw = inputVal.trim();
    if (!raw) return;

    const cmd = raw.toLowerCase();
    setInputVal("");

    if (cmd === "clear") {
      setLogs([]);
      return;
    }

    const newLogs: LogEntry[] = [
      ...logs,
      {
        type: "echo",
        text: `<span class="text-emerald-400 font-bold">ht@battambang:~$</span> ${escapeHTML(raw)}`,
      },
    ];

    if (cmd === "party") {
      soundFx.playCelebration();
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#00F0FF", "#10B981", "#F59E0B", "#3B82F6"],
        });
      } catch {}
      showToast("🎉 Happy 21st Birthday, Tola! Cheers to big milestones!");
      newLogs.push({
        type: "response",
        text: `<span class="text-emerald-400 font-bold">Party routine initiated! Happy 21st Birthday, Tola! 🎂🎉</span>`,
      });
    } else if (commandsMap[cmd]) {
      const resp = commandsMap[cmd];
      const out = typeof resp === "function" ? resp() : resp.replace(/\n/g, "<br/>");
      newLogs.push({
        type: "response",
        text: out,
      });
    } else {
      newLogs.push({
        type: "response",
        text: `<span class="text-rose-400">Command not recognized: '${escapeHTML(raw)}'. Type <span class="text-cyan-300">help</span> for available commands.</span>`,
      });
    }

    setLogs(newLogs);
  };

  function escapeHTML(str: string) {
    return str.replace(/[&<>'"]/g, (tag) => {
      const map: Record<string, string> = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#39;",
        '"': "&quot;",
      };
      return map[tag] || tag;
    });
  }

  return (
    <section id="terminal-section" className="space-y-6 scroll-mt-24">
      <div>
        <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400">
          Command Interface
        </h2>
        <p className="text-2xl sm:text-3xl font-extrabold text-white">
          Interactive Developer Console
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-[#0B0D13] shadow-2xl overflow-hidden font-mono text-sm">
        {/* Terminal Header Bar */}
        <div className="bg-[#121620] px-4 py-3 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
            <span className="text-xs text-slate-400 ml-2">
              tola@macbook-pro: ~/workspace
            </span>
          </div>
          <div className="text-[11px] text-slate-500 hidden sm:block">
            Type <code className="text-cyan-400">help</code> to list commands
          </div>
        </div>

        {/* Terminal Output Window */}
        <div
          ref={terminalBodyRef}
          className="p-5 space-y-3 h-72 overflow-y-auto text-xs sm:text-sm text-slate-300"
        >
          {logs.map((log, idx) => (
            <div
              key={idx}
              className={log.type === "echo" ? "text-slate-400" : "pl-2 text-slate-200 leading-relaxed"}
              dangerouslySetInnerHTML={{ __html: log.text }}
            />
          ))}
        </div>

        {/* Terminal Input Line */}
        <div className="p-3 bg-[#0e121b] border-t border-white/5 flex items-center gap-2">
          <span className="text-emerald-400 font-bold pl-2 select-none">
            ht@battambang:~$
          </span>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleCommand()}
            className="flex-1 bg-transparent text-white outline-none font-mono text-xs sm:text-sm placeholder-slate-600"
            placeholder="Type 'help' and press Enter..."
            autoComplete="off"
            spellCheck="false"
          />
          <button
            onClick={handleCommand}
            className="text-xs px-3 py-1 bg-white/10 hover:bg-cyan-500 hover:text-black rounded text-slate-300 font-mono transition"
          >
            Run
          </button>
        </div>
      </div>
    </section>
  );
}
