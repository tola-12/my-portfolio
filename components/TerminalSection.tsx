"use client";

import React, { useState, useRef, useEffect } from "react";
import confetti from "canvas-confetti";
import { useToast } from "./ToastProvider";

interface LogEntry {
  type: "echo" | "response" | "system";
  text: string;
}

const commandsMap: Record<string, string | (() => string)> = {
  help: `Available commands:
• <span class="text-cyan-300">skills</span>   : Output core languages, frameworks & platforms
• <span class="text-cyan-300">projects</span> : Show key production systems & GitHub builds
• <span class="text-cyan-300">awards</span>   : Grant wins, A-SASSY, & UNIPRENEUR awards
• <span class="text-cyan-300">specs</span>    : Developer machine hardware & setup
• <span class="text-cyan-300">whoami</span>   : Bio and education credentials
• <span class="text-cyan-300">stack</span>    : Full-stack Next.js App Router + Prisma runtime
• <span class="text-cyan-300">party</span>    : Fire birthday confetti celebratory burst
• <span class="text-cyan-300">clear</span>    : Wipe the terminal buffer`,

  skills: `Frontend : Tailwind CSS, React, Next.js, Responsive Web Design, TypeScript
Backend  : Laravel (PHP), Node.js, Python, REST APIs, Server Actions
Mobile   : Flutter, Dart, Cross-Platform Architecture
Database : PostgreSQL, SQLite, MySQL, Prisma ORM, TablePlus
DevOps   : Docker, Git, GitHub Actions, Linux (Ubuntu/Debian), ServBay`,

  projects: `1. Grow2Growth - Agricultural rice seed traceability platform (Award winner)
2. FLC Attendance PWA - Automated QR check-in & student ops portal
3. Campus Mobile Hub - Cross-platform Flutter course assistant
4. Power Platform Bots - Automated reporting for educational institutions`,

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
};

export function TerminalSection() {
  const { showToast } = useToast();
  const [logs, setLogs] = useState<LogEntry[]>([
    {
      type: "system",
      text: `<span class="text-emerald-400 font-bold">Welcome to Hor Tola's Dev Console v2.6 [Full-Stack Next.js Edition].</span><br /><span class="text-slate-400">Type <span class="text-cyan-400 font-bold">help</span> to view commands, or try <span class="text-cyan-400 font-bold">stack</span>, <span class="text-cyan-400 font-bold">projects</span>, <span class="text-cyan-400 font-bold">skills</span>, <span class="text-cyan-400 font-bold">specs</span>, or <span class="text-cyan-400 font-bold">party</span>.</span>`,
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
    <section id="terminal-section" className="scroll-mt-24">
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

