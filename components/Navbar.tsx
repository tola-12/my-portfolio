"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { useToast } from "./ToastProvider";
import { soundFx } from "@/lib/sound";
import { ResumeModal } from "./ResumeModal";

export function Navbar() {
  const { showToast } = useToast();
  const [isSoundOn, setIsSoundOn] = useState(true);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsSoundOn(soundFx.isEnabled());
  }, []);

  const toggleSound = () => {
    const newState = soundFx.toggle();
    setIsSoundOn(newState);
    showToast(newState ? "🔊 Sound Effects Enabled" : "🔇 Sound Effects Muted");
  };

  const fireCelebration = () => {
    soundFx.playCelebration();
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#00F0FF", "#10B981", "#F59E0B", "#3B82F6"],
      });
    } catch {
      // fallback
    }
    showToast("🎉 Happy 21st Birthday, Hor Tola! Cheers to big milestones!");
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-white/5 bg-brand-dark/80 backdrop-blur-xl transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 py-3.5 flex items-center justify-between">
          {/* Brand Logo with Profile Picture */}
          <a
            href="#"
            onClick={() => soundFx.playClick()}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 via-emerald-500 to-blue-600 p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-lg shadow-cyan-500/20 overflow-hidden flex-shrink-0">
              <img
                src="/images/hortola_.jpg"
                alt="Hor Tola"
                className="w-full h-full object-cover rounded-[9px]"
              />
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-sm text-slate-100 tracking-tight flex items-center gap-1.5">
                Hor Tola
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
              </div>
              <div className="text-[11px] font-mono text-slate-400">
                Software Engineer & Tech Mentor
              </div>
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 text-sm font-medium text-slate-300">
            <a
              href="#about"
              onClick={() => soundFx.playClick()}
              className="px-3 py-1.5 rounded-lg hover:text-cyan-400 hover:bg-white/5 transition"
            >
              About
            </a>
            <a
              href="#skills"
              onClick={() => soundFx.playClick()}
              className="px-3 py-1.5 rounded-lg hover:text-cyan-400 hover:bg-white/5 transition"
            >
              Skills
            </a>
            <a
              href="#projects"
              onClick={() => soundFx.playClick()}
              className="px-3 py-1.5 rounded-lg hover:text-cyan-400 hover:bg-white/5 transition"
            >
              Projects
            </a>
            <a
              href="#terminal-section"
              onClick={() => soundFx.playClick()}
              className="px-3 py-1.5 rounded-lg hover:text-cyan-400 hover:bg-white/5 transition"
            >
              Terminal
            </a>
            <a
              href="#github-showcase"
              onClick={() => soundFx.playClick()}
              className="px-3 py-1.5 rounded-lg hover:text-cyan-400 hover:bg-white/5 transition"
            >
              GitHub
            </a>
            <a
              href="#testimonials"
              onClick={() => soundFx.playClick()}
              className="px-3 py-1.5 rounded-lg hover:text-cyan-400 hover:bg-white/5 transition"
            >
              Reviews
            </a>
          </nav>

          {/* Right CTAs */}
          <div className="flex items-center gap-2">
            {/* Audio Toggle */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggleSound}
              title={isSoundOn ? "Mute UI sounds" : "Enable UI sounds"}
              className="p-2 rounded-lg glass-panel hover:bg-white/10 text-slate-300 transition text-xs flex items-center justify-center cursor-pointer"
            >
              <span>{isSoundOn ? "🔊" : "🔇"}</span>
            </motion.button>

            {/* Resume / CV Modal Trigger */}
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                soundFx.playClick();
                setIsResumeOpen(true);
              }}
              className="px-3 py-1.5 rounded-lg glass-panel border border-cyan-500/30 text-cyan-300 text-xs font-mono font-medium hover:bg-cyan-500/10 transition hidden sm:inline-flex items-center gap-1.5 shadow-sm cursor-pointer"
            >
              <span>📄</span>
              <span>Resume</span>
            </motion.button>

            {/* Birthday / Milestone Trigger */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={fireCelebration}
              className="px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium hover:bg-emerald-500/20 transition flex items-center gap-1.5 cursor-pointer shadow-sm"
            >
              <span>🎉</span>
              <span className="font-semibold">Level 21</span>
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              onClick={() => soundFx.playClick()}
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-medium rounded-lg bg-white text-brand-dark font-semibold hover:bg-slate-200 transition shadow-md shadow-white/5 cursor-pointer"
            >
              Connect
            </motion.a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => {
                soundFx.playClick();
                setIsMobileMenuOpen(!isMobileMenuOpen);
              }}
              className="lg:hidden p-2 rounded-lg glass-panel text-slate-300 hover:text-white"
              aria-label="Toggle mobile menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer with AnimatePresence */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="lg:hidden border-t border-white/5 bg-brand-dark/95 backdrop-blur-2xl px-4 py-4 space-y-2 overflow-hidden"
            >
              {[
                { href: "#about", label: "About" },
                { href: "#skills", label: "Skills Matrix" },
                { href: "#projects", label: "Projects" },
                { href: "#terminal-section", label: "Terminal" },
                { href: "#github-showcase", label: "GitHub Open Source" },
                { href: "#testimonials", label: "Testimonials" },
                { href: "#contact", label: "Connect & Contact" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => {
                    soundFx.playClick();
                    setIsMobileMenuOpen(false);
                  }}
                  className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:text-cyan-400 hover:bg-white/5 transition"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 border-t border-white/5 flex gap-2">
                <button
                  onClick={() => {
                    soundFx.playClick();
                    setIsResumeOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex-1 py-2 rounded-lg glass-panel text-xs font-mono text-cyan-300 text-center cursor-pointer"
                >
                  📄 View Resume
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </>
  );
}
