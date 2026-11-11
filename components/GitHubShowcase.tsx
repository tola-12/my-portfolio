"use client";

import React, { useEffect, useState } from "react";
import { GitHubProfile, GitHubRepo } from "@/lib/github";
import { soundFx } from "@/lib/sound";

export function GitHubShowcase() {
  const [profile, setProfile] = useState<GitHubProfile | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/github");
      const json = await res.json();
      if (json.success && json.user) {
        setProfile(json.user);
        setRepos(json.repos || []);
      }
    } catch {
      // fallback
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const languageColors: Record<string, string> = {
    PHP: "bg-indigo-400",
    Dart: "bg-teal-400",
    TypeScript: "bg-blue-400",
    JavaScript: "bg-amber-300",
    Python: "bg-emerald-400",
    HTML: "bg-orange-400",
    CSS: "bg-purple-400",
  };

  return (
    <section id="github-showcase" className="space-y-6 scroll-mt-24">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400">
              Open Source Activity
            </h2>
          </div>
          <p className="text-2xl sm:text-3xl font-extrabold text-white">
            Live GitHub Repositories
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              soundFx.playClick();
              loadData();
            }}
            disabled={loading}
            className="px-3 py-1.5 rounded-lg glass-panel text-xs font-mono text-cyan-300 hover:text-white transition flex items-center gap-1.5"
          >
            <span className={loading ? "animate-spin" : ""}>🔄</span>
            <span>{loading ? "Syncing..." : "Sync Live Stats"}</span>
          </button>

          <a
            href="https://github.com/hortola"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundFx.playClick()}
            className="px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-white text-xs font-mono font-medium transition flex items-center gap-1.5"
          >
            <span>github/hortola</span>
            <span>&rarr;</span>
          </a>
        </div>
      </div>

      {/* Profile Metrics Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs">
        <div className="glass-panel p-4 rounded-xl border border-white/5 space-y-1">
          <div className="text-slate-400">Public Repos</div>
          <div className="text-xl font-bold text-white">
            {profile?.public_repos ?? "12+"}
          </div>
        </div>
        <div className="glass-panel p-4 rounded-xl border border-white/5 space-y-1">
          <div className="text-slate-400">Total Followers</div>
          <div className="text-xl font-bold text-cyan-400">
            {profile?.followers ?? "18+"}
          </div>
        </div>
        <div className="glass-panel p-4 rounded-xl border border-white/5 space-y-1">
          <div className="text-slate-400">Primary Language</div>
          <div className="text-xl font-bold text-emerald-400">PHP / Dart</div>
        </div>
        <div className="glass-panel p-4 rounded-xl border border-white/5 space-y-1">
          <div className="text-slate-400">Ecosystem</div>
          <div className="text-xl font-bold text-teal-300">Laravel & Flutter</div>
        </div>
      </div>

      {/* Repositories Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {repos.length > 0 ? (
          repos.map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => soundFx.playBlip()}
              className="glass-panel p-5 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm font-bold text-white group-hover:text-cyan-400 transition truncate max-w-[200px]">
                    {repo.name}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500">
                    ★ {repo.stargazers_count}
                  </span>
                </div>
                <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                  {repo.description || "Public open-source software project built by Hor Tola."}
                </p>
              </div>

              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-white/5">
                <div className="flex items-center gap-1.5">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      languageColors[repo.language || ""] || "bg-cyan-400"
                    }`}
                  ></span>
                  <span>{repo.language || "Code"}</span>
                </div>
                <span>View on GitHub &rarr;</span>
              </div>
            </a>
          ))
        ) : (
          // Pre-rendered featured builds if offline or rate limited
          [
            {
              name: "grow2growth-api",
              desc: "Laravel backend REST API for rice seed lineage and agricultural verification in Battambang.",
              lang: "PHP",
              stars: 14,
              url: "https://github.com/hortola",
            },
            {
              name: "flc-smart-attendance",
              desc: "PWA portal automating student QR attendance and Power Automate parental notifications.",
              lang: "PHP",
              stars: 9,
              url: "https://github.com/hortola",
            },
            {
              name: "campus-learner-hub",
              desc: "Cross-platform Flutter app for offline course schedules, assignments, and curriculum tracking.",
              lang: "Dart",
              stars: 12,
              url: "https://github.com/hortola",
            },
          ].map((item, idx) => (
            <a
              key={idx}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => soundFx.playBlip()}
              className="glass-panel p-5 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm font-bold text-white group-hover:text-cyan-400 transition">
                    {item.name}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500">
                    ★ {item.stars}
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-white/5">
                <div className="flex items-center gap-1.5">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      languageColors[item.lang] || "bg-cyan-400"
                    }`}
                  ></span>
                  <span>{item.lang}</span>
                </div>
                <span>View on GitHub &rarr;</span>
              </div>
            </a>
          ))
        )}
      </div>
    </section>
  );
}

