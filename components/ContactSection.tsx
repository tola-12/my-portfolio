"use client";

import React, { useState, useTransition } from "react";
import { submitContactMessage } from "@/app/actions/contact";
import { useToast } from "./ToastProvider";

export function ContactSection() {
  const { showToast } = useToast();
  const [isPending, startTransition] = useTransition();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);
    const form = e.currentTarget;
    const formData = new FormData(form);

    startTransition(async () => {
      const result = await submitContactMessage({}, formData);
      if (result.error) {
        setErrorMessage(result.error);
        showToast(`❌ ${result.error}`);
      } else if (result.success && result.message) {
        showToast(result.message);
        form.reset();
      }
    });
  };

  const copyToClipboard = (text: string, customMessage: string) => {
    navigator.clipboard.writeText(text);
    showToast(customMessage);
  };

  return (
    <section id="contact" className="space-y-6 scroll-mt-24">
      <div className="glass-panel rounded-3xl p-8 sm:p-12 relative overflow-hidden border-cyan-500/20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Contact Info */}
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                Let’s Collaborate
              </span>
              <h2 className="text-3xl font-extrabold text-white">
                Have a project or want to build together?
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Available for impactful freelance software development, mobile apps, educational technology projects, and tech consultations.
              </p>
            </div>

            {/* Contact Handles */}
            <div className="space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                <span className="text-slate-400">Location:</span>
                <span className="text-white">Krong Battambang, Cambodia</span>
              </div>
              <div
                className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 cursor-pointer hover:border-cyan-500/40 transition"
                onClick={() => copyToClipboard("hortola.dev@gmail.com", "Email copied!")}
              >
                <span className="text-slate-400">Email:</span>
                <span className="text-cyan-400 font-semibold">
                  hortola.dev@gmail.com (Click to copy)
                </span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                <span className="text-slate-400">Telegram / Phone:</span>
                <span className="text-slate-200">Available upon request</span>
              </div>
            </div>

            <div className="pt-2">
              <div className="text-xs font-mono text-slate-400">Milestone status:</div>
              <div className="text-sm text-emerald-400 font-mono mt-1">
                Level 21 unlocked • Ready for new adventures.
              </div>
            </div>
          </div>

          {/* Right Interactive Form (Connected to Server Action & Telegram Webhook) */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {errorMessage && (
              <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-mono">
                {errorMessage}
              </div>
            )}

            <div>
              <label className="block text-xs font-mono text-slate-300 mb-1.5">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                required
                disabled={isPending}
                placeholder="Sokha, David, or Collaborator"
                className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-400 disabled:opacity-50"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-300 mb-1.5">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                required
                disabled={isPending}
                placeholder="you@domain.com"
                className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-400 disabled:opacity-50"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-300 mb-1.5">
                Message / Inquiry
              </label>
              <textarea
                name="message"
                required
                rows={4}
                disabled={isPending}
                placeholder="Tell me about your system, project idea, or collaboration..."
                className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-400 resize-none disabled:opacity-50"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isPending}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-400 text-brand-dark font-bold text-sm tracking-tight hover:opacity-95 transition shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2 disabled:opacity-75 cursor-pointer"
            >
              {isPending ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-black" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Transmitting...</span>
                </>
              ) : (
                <span>Transmit Message (Saved to DB + Telegram)</span>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

