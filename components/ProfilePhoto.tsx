"use client";

import React, { useState } from "react";
import { soundFx } from "@/lib/sound";

export function ProfilePhoto() {
  const [imgSrc, setImgSrc] = useState<string>("/images/profile.jpg");
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      // Try profile.png next, otherwise fallback to SVG placeholder
      if (imgSrc.endsWith(".jpg")) {
        setImgSrc("/images/profile.png");
      } else {
        setHasError(true);
        setImgSrc("/images/profile-placeholder.svg");
      }
    }
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
        <div className="relative aspect-[4/4.5] sm:aspect-[4/5] w-full rounded-xl overflow-hidden bg-[#0a0d14] border border-white/5 flex items-center justify-center">
          <img
            src={imgSrc}
            alt="Hor Tola - Full-Stack Software Engineer"
            onError={handleError}
            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 filter group-hover:brightness-105"
          />

          {/* Cyberpunk Scanline & Corner Accents */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none"></div>

          {/* Cyberpunk Corner HUD brackets */}
          <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-cyan-400 pointer-events-none"></div>
          <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-cyan-400 pointer-events-none"></div>
          <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-emerald-400 pointer-events-none"></div>
          <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-emerald-400 pointer-events-none"></div>

          {/* Bottom Card Identity Overlay */}
          <div className="absolute bottom-0 inset-x-0 p-4 space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono text-cyan-300 font-bold bg-cyan-950/70 border border-cyan-800/50 px-2 py-0.5 rounded">
                SOFTWARE ARCHITECT
              </span>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                ACTIVE
              </span>
            </div>
            <h3 className="text-xl font-extrabold text-white tracking-tight">
              Hor Tola
            </h3>
            <p className="text-xs text-slate-300 font-mono">
              National University of Battambang (NUBB)
            </p>
          </div>
        </div>

        {/* Floating Cyberpunk Orbit Badges */}
        <div className="absolute -top-3 -right-3 px-3 py-1.5 rounded-xl glass-panel border border-cyan-500/40 text-cyan-300 font-mono text-xs shadow-lg animate-float">
          <span>⚡ Full-Stack & Mobile</span>
        </div>

        <div className="absolute -bottom-3 -left-3 px-3 py-1.5 rounded-xl glass-panel border border-emerald-500/40 text-emerald-300 font-mono text-xs shadow-lg">
          <span>🇰🇭 Krong Battambang</span>
        </div>
      </div>

      {/* Helpful Hint beneath image */}
      <div className="text-center pt-3 text-[11px] font-mono text-slate-500">
        Tip: Place your photo as <code className="text-cyan-400 font-semibold">public/images/profile.jpg</code> to personalize!
      </div>
    </div>
  );
}
