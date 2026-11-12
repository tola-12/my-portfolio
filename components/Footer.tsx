import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 text-center text-xs font-mono text-slate-500">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
        <div>
          Designed & Architected by{" "}
          <span className="text-slate-300 font-semibold">Hor Tola</span> • Krong Battambang
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 text-slate-400">
          <span>Level 21 Edition</span>
          <span>•</span>
          <Link
            href="/admin"
            className="hover:text-cyan-400 transition underline underline-offset-4"
          >
            Admin Portal
          </Link>
          <span>•</span>
          <span>Full-Stack Next.js 14 + Prisma</span>
        </div>
      </div>
    </footer>
  );
}
