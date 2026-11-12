"use client";

import React, { useState, useTransition } from "react";
import { motion } from "framer-motion";
import { submitContactMessage } from "@/app/actions/contact";
import { useToast } from "./ToastProvider";
import { soundFx } from "@/lib/sound";

export function ContactSection() {
  const { showToast } = useToast();
  const [isPending, startTransition] = useTransition();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    soundFx.playClick();
    setErrorMessage(null);
    const form = e.currentTarget;
    const formData = new FormData(form);

    startTransition(async () => {
      const result = await submitContactMessage({}, formData);
      if (result.error) {
        setErrorMessage(result.error);
        showToast(`❌ ${result.error}`);
      } else if (result.success && result.message) {
        soundFx.playCelebration();
        showToast(result.message);
        form.reset();
      }
    });
  };

  const copyToClipboard = (text: string, customMessage: string) => {
    soundFx.playClick();
    navigator.clipboard.writeText(text);
    showToast(customMessage);
  };

  return (
    <section id="contact" className="space-y-6 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="glass-panel rounded-3xl p-5 sm:p-8 lg:p-12 relative overflow-hidden border-cyan-500/20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Left Contact Info */}
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                Let’s Collaborate
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                Have an ambitious project or want to build together?
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Available for impactful freelance software development, cross-platform mobile apps, institutional automation, and tech mentorship consultations.
              </p>
            </div>

            {/* Contact Handles */}
            <div className="space-y-3 font-mono text-xs">
              <div className="flex flex-col min-[420px]:flex-row min-[420px]:items-center justify-between gap-1 sm:gap-2 p-3.5 rounded-xl bg-white/5 border border-white/5">
                <span className="text-slate-400">Location:</span>
                <span className="text-white">Krong Battambang, Cambodia 🇰🇭</span>
              </div>

              <div
                className="flex flex-col min-[420px]:flex-row min-[420px]:items-center justify-between gap-1 sm:gap-2 p-3.5 rounded-xl bg-white/5 border border-white/5 cursor-pointer hover:border-cyan-500/40 transition group"
                onClick={() => copyToClipboard("hortola.dev@gmail.com", "Email copied to clipboard!")}
              >
                <span className="text-slate-400">Email:</span>
                <span className="text-cyan-400 font-semibold group-hover:underline break-all min-[420px]:text-right">
                  hortola.dev@gmail.com (Click to copy)
                </span>
              </div>

              <div className="flex flex-col min-[420px]:flex-row min-[420px]:items-center justify-between gap-1 sm:gap-2 p-3.5 rounded-xl bg-white/5 border border-white/5">
                <span className="text-slate-400">Direct Chat:</span>
                <div className="flex items-center gap-2">
                  <a
                    href="https://t.me/hortola"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundFx.playClick()}
                    className="text-cyan-400 hover:underline font-semibold"
                  >
                    Telegram &rarr;
                  </a>
                  <span className="text-slate-500">•</span>
                  <a
                    href="mailto:hortola.dev@gmail.com"
                    onClick={() => soundFx.playClick()}
                    className="text-emerald-400 hover:underline font-semibold"
                  >
                    Send Email &rarr;
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <div className="text-xs font-mono text-slate-400">Current Status:</div>
              <div className="text-sm text-emerald-400 font-mono mt-1 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Open for freelance & full-stack roles • Level 21 Edition</span>
              </div>
            </div>
          </div>

          {/* Right Interactive Form (Connected to Server Action, Prisma & Telegram Webhook) */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Honeypot anti-spam */}
            <input
              type="text"
              name="_gotcha"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
            />

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

            <motion.button
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isPending}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-400 text-brand-dark font-bold text-sm tracking-tight hover:opacity-95 transition shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2 disabled:opacity-75 cursor-pointer"
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
                <span>Transmit Message <span className="hidden sm:inline">(Saved to DB + Instant Telegram Alert)</span></span>
              )}
            </motion.button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
