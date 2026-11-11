"use client";

import React, { useState } from "react";
import { updateMessageStatus, deleteContactMessage } from "@/app/actions/contact";

interface ContactMessageRecord {
  id: string;
  name: string;
  email: string;
  message: string;
  status: string;
  createdAt: Date;
}

export function AdminMessageList({
  initialMessages,
}: {
  initialMessages: ContactMessageRecord[];
}) {
  const [messages, setMessages] = useState(initialMessages);

  const handleStatusChange = async (id: string, newStatus: string) => {
    setMessages((prev) =>
      prev.map((m) => (m.id === id ? { ...m, status: newStatus } : m))
    );
    await updateMessageStatus(id, newStatus);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this message?")) return;
    setMessages((prev) => prev.filter((m) => m.id !== id));
    await deleteContactMessage(id);
  };

  if (messages.length === 0) {
    return (
      <div className="glass-panel p-12 rounded-2xl text-center space-y-2">
        <div className="text-2xl">📬</div>
        <div className="text-sm text-slate-300 font-medium">No messages yet</div>
        <div className="text-xs text-slate-500 font-mono">
          When visitors fill out the contact form, submissions will appear here.
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {messages.map((msg) => (
        <div
          key={msg.id}
          className="glass-panel p-5 rounded-2xl border-white/5 space-y-3 transition hover:border-cyan-500/20"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-3">
            <div className="flex items-center gap-3">
              <span
                className={`text-[11px] font-mono px-2 py-0.5 rounded ${
                  msg.status === "UNREAD"
                    ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                    : msg.status === "REPLIED"
                    ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                    : "bg-white/5 text-slate-400"
                }`}
              >
                {msg.status}
              </span>
              <span className="font-bold text-white text-sm">{msg.name}</span>
              <span className="text-xs text-cyan-400 font-mono">
                &lt;{msg.email}&gt;
              </span>
            </div>

            <div className="text-xs font-mono text-slate-500">
              {new Date(msg.createdAt).toLocaleString()}
            </div>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed whitespace-pre-wrap">
            {msg.message}
          </p>

          <div className="flex items-center justify-between pt-2 border-t border-white/5 text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="text-slate-500">Status:</span>
              <button
                onClick={() => handleStatusChange(msg.id, "READ")}
                className={`px-2 py-1 rounded transition ${
                  msg.status === "READ"
                    ? "bg-white/10 text-white"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Read
              </button>
              <button
                onClick={() => handleStatusChange(msg.id, "REPLIED")}
                className={`px-2 py-1 rounded transition ${
                  msg.status === "REPLIED"
                    ? "bg-emerald-500/20 text-emerald-300"
                    : "text-slate-400 hover:text-emerald-400"
                }`}
              >
                Replied
              </button>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={`mailto:${msg.email}?subject=Re:%20Portfolio%20Inquiry`}
                className="px-3 py-1 rounded bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20 transition"
              >
                Reply via Email &rarr;
              </a>
              <button
                onClick={() => handleDelete(msg.id)}
                className="px-2 py-1 text-slate-500 hover:text-rose-400 transition"
                title="Delete message"
              >
                ✕
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

