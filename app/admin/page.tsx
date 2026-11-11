import React from "react";
import Link from "next/link";
import { getContactMessages } from "@/app/actions/contact";
import { prisma } from "@/lib/prisma";
import { AdminMessageList } from "./AdminMessageList";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const messages = await getContactMessages();
  const reactions = await prisma.projectReaction.findMany();
  const totalLikes = reactions.reduce((acc, r) => acc + r.likes, 0);
  const unreadCount = messages.filter((m) => m.status === "UNREAD").length;

  return (
    <div className="min-h-screen bg-brand-dark text-slate-100 p-6 sm:p-10 font-sans">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              Admin Control Center
            </div>
            <h1 className="text-3xl font-bold text-white mt-1">
              Portfolio Inquiries & Metrics
            </h1>
          </div>

          <Link
            href="/"
            className="px-4 py-2 rounded-xl glass-panel text-xs font-mono text-cyan-300 hover:text-white transition flex items-center gap-2"
          >
            &larr; Back to Public Portfolio
          </Link>
        </div>

        {/* Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="glass-panel p-5 rounded-2xl border-white/5 space-y-1">
            <div className="text-xs font-mono text-slate-400">Total Leads</div>
            <div className="text-3xl font-bold text-white">{messages.length}</div>
            <div className="text-[11px] font-mono text-slate-500">Submitted via form</div>
          </div>

          <div className="glass-panel p-5 rounded-2xl border-white/5 space-y-1">
            <div className="text-xs font-mono text-amber-400">Unread Messages</div>
            <div className="text-3xl font-bold text-amber-300">{unreadCount}</div>
            <div className="text-[11px] font-mono text-slate-500">Requires follow-up</div>
          </div>

          <div className="glass-panel p-5 rounded-2xl border-white/5 space-y-1">
            <div className="text-xs font-mono text-rose-400">Project Applauds</div>
            <div className="text-3xl font-bold text-rose-300">{totalLikes}</div>
            <div className="text-[11px] font-mono text-slate-500">Across all builds</div>
          </div>
        </div>

        {/* Messages List / Management */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-white">Client Transmissions</h2>
            <span className="text-xs font-mono text-slate-400">
              Auto-synced with Prisma SQLite/PostgreSQL
            </span>
          </div>

          <AdminMessageList initialMessages={messages} />
        </div>
      </div>
    </div>
  );
}
