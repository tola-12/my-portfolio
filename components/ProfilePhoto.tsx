"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { soundFx } from "@/lib/sound";

const photos = [
  {
    src: "/images/Hor_Tola.jpeg",
    label: "Studio Portrait",
    position: "object-top",
  },
  {
    src: "/images/hortola_.jpg",
    label: "Casual",
    position: "object-center",
  },
];

export function ProfilePhoto() {
  const [photoIndex, setPhotoIndex] = useState(0);
  const currentPhoto = photos[photoIndex];

  const handleTogglePhoto = () => {
    soundFx.playClick();
    setPhotoIndex((prev) => (prev + 1) % photos.length);
  };

  return (
    <div className="relative w-full max-w-md mx-auto group">
      {/* Background Cyberpunk Neon Glow Halo */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 via-emerald-500 to-blue-600 rounded-3xl blur-xl opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-glow-pulse"></div>

      {/* Main Glassmorphic Photo Card */}
      <div
        onMouseEnter={() => soundFx.playBlip()}
        className="relative rounded-2xl glass-panel p-3 border border-white/10 shadow-2xl overflow-hidden"
      >
        {/* Photo Container */}
        <div className="relative aspect-[4/4.8] sm:aspect-[4/5.2] w-full rounded-xl overflow-hidden bg-[#0a0d14] border border-white/5 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentPhoto.src}
              src={currentPhoto.src}
              alt="Hor Tola - Full-Stack Software Engineer"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.04 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className={`w-full h-full object-cover ${currentPhoto.position}`}
            />
          </AnimatePresence>

          {/* Cyberpunk Scanline & Vignette Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none"></div>

          {/* Cyberpunk Corner HUD brackets */}
          <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-cyan-400 pointer-events-none"></div>
          <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-cyan-400 pointer-events-none"></div>
          <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-emerald-400 pointer-events-none"></div>
          <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-emerald-400 pointer-events-none"></div>

          {/* Interactive Photo Switcher Badge in Top Right */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleTogglePhoto}
            title="Click to toggle photo angle"
            className="absolute top-3 right-3 z-10 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-mono text-cyan-300 hover:text-white hover:border-cyan-400 transition flex items-center gap-1.5 shadow-lg cursor-pointer"
          >
            <span>🔄</span>
            <span>Switch Photo</span>
          </motion.button>

          {/* Bottom Card Identity Overlay */}
          <div className="absolute bottom-0 inset-x-0 p-5 space-y-1 z-10">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono text-cyan-300 font-bold bg-cyan-950/80 border border-cyan-800/50 px-2 py-0.5 rounded">
                SOFTWARE ARCHITECT
              </span>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                ACTIVE
              </span>
            </div>
            <h3 className="text-2xl font-extrabold text-white tracking-tight">
              Hor Tola
            </h3>
            <p className="text-xs text-slate-300 font-mono">
              National University of Battambang (NUBB)
            </p>
          </div>
        </div>

        {/* Floating Cyberpunk Orbit Badges */}
        <div className="absolute -top-3 -left-3 px-3 py-1.5 rounded-xl glass-panel border border-cyan-500/40 text-cyan-300 font-mono text-xs shadow-lg animate-float">
          <span>⚡ Full-Stack & Mobile</span>
        </div>

        <div className="absolute -bottom-3 -right-3 px-3 py-1.5 rounded-xl glass-panel border border-emerald-500/40 text-emerald-300 font-mono text-xs shadow-lg">
          <span>🇰🇭 Krong Battambang</span>
        </div>
      </div>

      {/* Status Bar beneath card */}
      <div className="flex items-center justify-between pt-3 px-1 text-[11px] font-mono text-slate-400">
        <span>📸 Photo: <span className="text-cyan-400">{currentPhoto.label}</span></span>
        <button
          onClick={handleTogglePhoto}
          className="text-cyan-400 hover:underline cursor-pointer"
        >
          Toggle Angle &rarr;
        </button>
      </div>
    </div>
  );
}
