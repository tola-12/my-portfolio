"use client";

import React from "react";
import { soundFx } from "@/lib/sound";

interface Testimonial {
  name: string;
  role: string;
  organization: string;
  badge: string;
  badgeColor: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Faculty Leadership",
    role: "Senior IT Academic Advisor",
    organization: "National University of Battambang (NUBB)",
    badge: "Academic Excellence",
    badgeColor: "text-cyan-400 bg-cyan-950/60 border-cyan-800/40",
    quote:
      "Hor Tola stands out for his deep architectural curiosity and relentless focus on building clean, maintainable systems. His capstone work combines theoretical computer science with practical community solutions.",
  },
  {
    name: "Executive Management",
    role: "Program Director",
    organization: "Future Leader Center (FLC)",
    badge: "Impact & Mentorship",
    badgeColor: "text-emerald-400 bg-emerald-950/60 border-emerald-800/40",
    quote:
      "Tola is both a skilled developer and an inspiring mentor. Beyond training over 100 youth in modern digital and AI tools, he completely digitized our student operations with his custom QR attendance system.",
  },
  {
    name: "Innovation Jury Panel",
    role: "Venture Evaluation Committee",
    organization: "DYNAMIC & UNIPRENEUR S2",
    badge: "1st Place & €4k Grant Winner",
    badgeColor: "text-amber-400 bg-amber-950/60 border-amber-800/40",
    quote:
      "Grow2Growth won 1st Place because of its technical pragmatism and genuine agricultural impact. Tola's software architecture for seed traceability demonstrated rare maturity for a senior scholar.",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="space-y-6 scroll-mt-24">
      <div>
        <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400">
          Peer & Mentor Endorsements
        </h2>
        <p className="text-2xl sm:text-3xl font-extrabold text-white">
          Recommendations & Verified Impact
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((item, idx) => (
          <div
            key={idx}
            onMouseEnter={() => soundFx.playBlip()}
            className="glass-panel rounded-2xl p-6 border border-white/5 hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between space-y-4 group"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span
                  className={`text-[11px] font-mono border px-2 py-0.5 rounded ${item.badgeColor}`}
                >
                  {item.badge}
                </span>
                <span className="text-amber-400 text-xs">★★★★★</span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic border-l-2 border-white/10 pl-3">
                "{item.quote}"
              </p>
            </div>

            <div className="pt-3 border-t border-white/5 flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-emerald-400 p-[1.5px] flex-shrink-0">
                <div className="w-full h-full rounded-[10px] bg-[#121620] flex items-center justify-center font-mono font-bold text-xs text-white">
                  {item.name.slice(0, 2).toUpperCase()}
                </div>
              </div>
              <div>
                <div className="font-bold text-sm text-white">{item.name}</div>
                <div className="text-[11px] font-mono text-slate-400">
                  {item.role} • {item.organization}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
