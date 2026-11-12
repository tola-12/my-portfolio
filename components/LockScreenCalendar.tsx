"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import {
  Lock,
  Unlock,
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
  Wifi,
  BatteryCharging,
  MapPin,
  Sparkles,
  Sun,
} from "lucide-react";
import { soundFx } from "@/lib/sound";
import { useToast } from "./ToastProvider";

type ClockTheme = "frost" | "cyber" | "sunset";

const CLOCK_THEMES: Record<
  ClockTheme,
  { label: string; gradient: string; dot: string; glow: string }
> = {
  frost: {
    label: "iOS Frost",
    gradient: "from-white via-slate-100 to-slate-400",
    dot: "bg-white",
    glow: "rgba(255, 255, 255, 0.15)",
  },
  cyber: {
    label: "Cyber Neon",
    gradient: "from-cyan-300 via-teal-200 to-emerald-400",
    dot: "bg-cyan-400",
    glow: "rgba(0, 240, 255, 0.25)",
  },
  sunset: {
    label: "Sunset Gold",
    gradient: "from-amber-200 via-orange-300 to-rose-400",
    dot: "bg-amber-400",
    glow: "rgba(245, 158, 11, 0.25)",
  },
};

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function getCambodiaDateParts(date: Date) {
  // Always read accurate Asia/Phnom_Penh parts for consistent Battambang local time
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Phnom_Penh",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  const parts = formatter.formatToParts(date);
  const map: Record<string, string> = {};
  for (const p of parts) {
    map[p.type] = p.value;
  }

  const hour24 = parseInt(map.hour === "24" ? "0" : map.hour, 10);
  const minute = map.minute;
  const second = map.second;
  const year = parseInt(map.year, 10);
  const monthIndex = parseInt(map.month, 10) - 1;
  const day = parseInt(map.day, 10);
  const weekday = map.weekday;

  return { year, monthIndex, day, weekday, hour24, minute, second };
}

export function LockScreenCalendar() {
  const { showToast } = useToast();
  const [now, setNow] = useState<Date | null>(null);
  const [use24Hour, setUse24Hour] = useState(false);
  const [theme, setTheme] = useState<ClockTheme>("cyber");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [flashlightOn, setFlashlightOn] = useState(false);

  // Calendar browsing state
  const [viewYear, setViewYear] = useState(2026);
  const [viewMonth, setViewMonth] = useState(10); // 0-indexed (10 = November)
  const [selectedDay, setSelectedDay] = useState<{
    year: number;
    month: number;
    day: number;
  } | null>(null);

  useEffect(() => {
    const initial = new Date();
    setNow(initial);
    const kh = getCambodiaDateParts(initial);
    setViewYear(kh.year);
    setViewMonth(kh.monthIndex);
    setSelectedDay({ year: kh.year, month: kh.monthIndex, day: kh.day });

    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const khNow = useMemo(() => {
    if (!now) return null;
    return getCambodiaDateParts(now);
  }, [now]);

  // Format Time string cleanly for iPhone Lock Screen
  const timeDisplay = useMemo(() => {
    if (!khNow) {
      return { main: "07:25", seconds: "00", period: "AM" };
    }
    const { hour24, minute, second } = khNow;
    const period = hour24 >= 12 ? "PM" : "AM";
    let displayHour = hour24;
    if (!use24Hour) {
      displayHour = hour24 % 12 || 12;
    }
    const hh = String(displayHour).padStart(2, "0");
    return {
      main: `${hh}:${minute}`,
      seconds: second,
      period,
    };
  }, [khNow, use24Hour]);

  // Format Big Date like "12 November 2026"
  const bigDateText = useMemo(() => {
    if (!khNow) return "12 November 2026";
    return `${khNow.day} ${MONTHS[khNow.monthIndex]} ${khNow.year}`;
  }, [khNow]);

  const weekdayText = khNow ? khNow.weekday : "Thursday";

  // Build Monthly Calendar Cells (with leading & trailing muted days)
  const calendarCells = useMemo(() => {
    const firstDayOfMonth = new Date(viewYear, viewMonth, 1).getDay();
    const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
    const daysInPrevMonth = new Date(viewYear, viewMonth, 0).getDate();

    const cells: {
      day: number;
      month: number;
      year: number;
      inCurrentMonth: boolean;
    }[] = [];

    // Leading days from previous month
    for (let i = firstDayOfMonth - 1; i >= 0; i--) {
      const prevMonth = viewMonth === 0 ? 11 : viewMonth - 1;
      const prevYear = viewMonth === 0 ? viewYear - 1 : viewYear;
      cells.push({
        day: daysInPrevMonth - i,
        month: prevMonth,
        year: prevYear,
        inCurrentMonth: false,
      });
    }

    // Current month days
    for (let d = 1; d <= daysInMonth; d++) {
      cells.push({
        day: d,
        month: viewMonth,
        year: viewYear,
        inCurrentMonth: true,
      });
    }

    // Trailing days to complete grid rows (35 or 42)
    const totalCells = cells.length <= 35 ? 35 : 42;
    let nextDay = 1;
    while (cells.length < totalCells) {
      const nextMonth = viewMonth === 11 ? 0 : viewMonth + 1;
      const nextYear = viewMonth === 11 ? viewYear + 1 : viewYear;
      cells.push({
        day: nextDay++,
        month: nextMonth,
        year: nextYear,
        inCurrentMonth: false,
      });
    }

    return cells;
  }, [viewYear, viewMonth]);

  const handlePrevMonth = () => {
    soundFx.playClick();
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((y) => y - 1);
    } else {
      setViewMonth((m) => m - 1);
    }
  };

  const handleNextMonth = () => {
    soundFx.playClick();
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((y) => y + 1);
    } else {
      setViewMonth((m) => m + 1);
    }
  };

  const handleJumpToday = () => {
    soundFx.playClick();
    if (!khNow) return;
    setViewYear(khNow.year);
    setViewMonth(khNow.monthIndex);
    setSelectedDay({ year: khNow.year, month: khNow.monthIndex, day: khNow.day });
    showToast(`📅 Jumped to Today: ${khNow.day} ${MONTHS[khNow.monthIndex]} ${khNow.year}`);
  };

  const triggerParty = () => {
    soundFx.playCelebration();
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.7 },
        colors: ["#00F0FF", "#10B981", "#F59E0B"],
      });
    } catch {
      // safe fallback
    }
    showToast("✨ Level 21 • Building Clean Systems in Battambang!");
  };

  const selectedDateObj = selectedDay
    ? new Date(selectedDay.year, selectedDay.month, selectedDay.day)
    : null;
  const selectedWeekday = selectedDateObj
    ? selectedDateObj.toLocaleDateString("en-US", { weekday: "long" })
    : weekdayText;
  const isSelectedToday =
    selectedDay &&
    khNow &&
    selectedDay.year === khNow.year &&
    selectedDay.month === khNow.monthIndex &&
    selectedDay.day === khNow.day;

  const activeTheme = CLOCK_THEMES[theme];

  return (
    <section id="calendar" className="space-y-6 scroll-mt-24">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="flex flex-col sm:flex-row sm:items-end justify-between gap-4"
      >
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400">
              Live Standby & Schedule
            </h2>
          </div>
          <p className="text-2xl sm:text-3xl font-extrabold text-white">
            iOS Lock Screen Clock & Calendar
          </p>
        </div>

        {/* Clock Controls (Format + Theme Switcher) */}
        <div className="flex flex-wrap items-center gap-2">
          {/* 12H / 24H Toggle */}
          <button
            onClick={() => {
              soundFx.playClick();
              setUse24Hour((prev) => !prev);
            }}
            className="px-3 py-1.5 rounded-lg glass-panel text-xs font-mono text-slate-300 hover:text-white border border-white/10 hover:border-cyan-500/40 transition cursor-pointer"
          >
            {use24Hour ? "24H Format" : "12H Format"}
          </button>

          {/* Theme Dots */}
          <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg glass-panel border border-white/10">
            <span className="text-[11px] font-mono text-slate-400 mr-1">Tint:</span>
            {(Object.keys(CLOCK_THEMES) as ClockTheme[]).map((tKey) => (
              <button
                key={tKey}
                onClick={() => {
                  soundFx.playClick();
                  setTheme(tKey);
                }}
                title={CLOCK_THEMES[tKey].label}
                className={`w-4 h-4 rounded-full transition-transform cursor-pointer ${
                  CLOCK_THEMES[tKey].dot
                } ${
                  theme === tKey
                    ? "scale-125 ring-2 ring-white/80 ring-offset-2 ring-offset-[#08090C]"
                    : "opacity-50 hover:opacity-100"
                }`}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Main Split Grid: iPhone Lock Screen + Interactive Calendar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* LEFT: iPhone Lock Screen Inspired Clock & Big Date Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`lg:col-span-7 relative rounded-[2.25rem] p-6 sm:p-8 flex flex-col justify-between overflow-hidden border transition-all duration-500 min-h-[430px] ${
            flashlightOn
              ? "border-cyan-400/60 shadow-[0_0_70px_rgba(0,240,255,0.25)]"
              : "border-white/15 shadow-2xl"
          }`}
          style={{
            background:
              "radial-gradient(circle at 20% 15%, rgba(0, 240, 255, 0.14), transparent 50%), radial-gradient(circle at 85% 80%, rgba(16, 185, 129, 0.14), transparent 55%), rgba(12, 15, 23, 0.85)",
            backdropFilter: "blur(24px)",
          }}
        >
          {/* Animated Ambient Glow Blob */}
          <motion.div
            animate={{
              scale: flashlightOn ? [1, 1.15, 1] : [1, 1.05, 1],
              opacity: flashlightOn ? 0.45 : 0.2,
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full blur-[90px] pointer-events-none"
            style={{ background: activeTheme.glow }}
          />

          {/* Top iPhone Status Bar & Interactive Dynamic Island */}
          <div className="relative z-10 flex items-center justify-between text-xs font-mono text-slate-300">
            <div className="flex items-center gap-1.5 font-semibold tracking-tight">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden sm:inline">Battambang, KH</span>
              <span className="sm:hidden">BTB, KH</span>
            </div>

            {/* Dynamic Island */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                soundFx.playClick();
                setIsUnlocked((u) => !u);
              }}
              className="px-4 py-1.5 rounded-full bg-black/90 border border-white/10 shadow-lg flex items-center gap-2 cursor-pointer group"
              title="Click to toggle Lock status"
            >
              <AnimatePresence mode="wait">
                {isUnlocked ? (
                  <motion.span
                    key="unlock"
                    initial={{ scale: 0.6, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.6, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Unlock className="w-3.5 h-3.5 text-emerald-400" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="lock"
                    initial={{ scale: 0.6, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.6, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Lock className="w-3.5 h-3.5 text-cyan-400" />
                  </motion.span>
                )}
              </AnimatePresence>
              <span className="text-[11px] font-mono text-slate-200 tracking-wide">
                {isUnlocked ? "Face ID Unlocked" : "StandBy Mode"}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            </motion.button>

            <div className="flex items-center gap-2 text-slate-300">
              <Wifi className="w-3.5 h-3.5 text-cyan-400" />
              <div className="flex items-center gap-1 text-[11px]">
                <BatteryCharging className="w-4 h-4 text-emerald-400" />
                <span className="hidden sm:inline">100%</span>
              </div>
            </div>
          </div>

          {/* CENTER HERO: iPhone Lock Screen Big Date & Giant Time */}
          <div className="relative z-10 my-auto py-8 flex flex-col items-center text-center space-y-2 select-none">
            {/* Weekday Badge */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-cyan-400 font-semibold"
            >
              {weekdayText}
            </motion.div>

            {/* Big Prominent Date: e.g., 12 November 2026 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-2xl sm:text-4xl md:text-[2.65rem] font-bold text-white tracking-tight drop-shadow-sm"
            >
              {bigDateText}
            </motion.div>

            {/* Giant iOS Lock Screen Clock */}
            <div className="relative flex items-baseline justify-center pt-1">
              <div
                className={`text-[4.75rem] sm:text-[6.75rem] md:text-[7.5rem] font-extrabold leading-none tracking-tight tabular-nums bg-gradient-to-b ${activeTheme.gradient} bg-clip-text text-transparent drop-shadow-[0_12px_32px_rgba(0,0,0,0.45)]`}
                style={{ fontVariantNumeric: "tabular-nums" }}
              >
                {timeDisplay.main}
              </div>

              {/* Seconds & AM/PM Tag beside the giant digits */}
              <div className="ml-2 sm:ml-3 flex flex-col items-start font-mono">
                <span className="text-lg sm:text-2xl font-bold text-cyan-300 tabular-nums leading-none">
                  :{timeDisplay.seconds}
                </span>
                {!use24Hour && (
                  <span className="text-xs sm:text-sm font-semibold text-slate-400 mt-1">
                    {timeDisplay.period}
                  </span>
                )}
                <span className="text-[10px] text-emerald-400/90 mt-1 uppercase tracking-wider">
                  ICT UTC+7
                </span>
              </div>
            </div>

            {/* iOS Lock Screen Circular / Pill Widgets Strip */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 pt-5">
              <div className="px-3.5 py-2 rounded-2xl bg-white/[0.06] backdrop-blur-md border border-white/10 flex items-center gap-2 text-xs font-mono text-slate-200">
                <Sun className="w-4 h-4 text-amber-300" />
                <span>29°C Clear</span>
              </div>

              <div className="px-3.5 py-2 rounded-2xl bg-white/[0.06] backdrop-blur-md border border-white/10 flex items-center gap-2 text-xs font-mono text-slate-200">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Hor Tola • Available</span>
              </div>

              <div className="px-3.5 py-2 rounded-2xl bg-white/[0.06] backdrop-blur-md border border-white/10 flex items-center gap-2 text-xs font-mono text-cyan-300">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Level 21 Edition</span>
              </div>
            </div>
          </div>

          {/* Bottom iPhone Lock Screen Action Buttons & Home Indicator */}
          <div className="relative z-10 flex items-center justify-between pt-2">
            {/* Flashlight / Glow Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                soundFx.playClick();
                setFlashlightOn((prev) => !prev);
              }}
              className={`w-10 h-10 rounded-full flex items-center justify-center border backdrop-blur-md transition cursor-pointer ${
                flashlightOn
                  ? "bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.7)]"
                  : "bg-white/10 text-slate-200 border-white/10 hover:bg-white/20"
              }`}
              title="Toggle Ambient Screen Light"
              aria-label="Toggle Ambient Light"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </motion.button>

            {/* iOS Home Bar */}
            <div className="flex flex-col items-center gap-1">
              <span className="text-[10px] font-mono text-slate-500 tracking-wider uppercase">
                iOS StandBy
              </span>
              <div className="w-28 sm:w-36 h-1.5 rounded-full bg-white/30" />
            </div>

            {/* Celebration Trigger Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={triggerParty}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-cyan-500/20 text-slate-200 hover:text-cyan-300 border border-white/10 backdrop-blur-md flex items-center justify-center transition cursor-pointer"
              title="Celebrate Milestone"
              aria-label="Celebrate Milestone"
            >
              <span className="text-base">🎉</span>
            </motion.button>
          </div>
        </motion.div>

        {/* RIGHT: Interactive Monthly Calendar Widget */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="lg:col-span-5 glass-panel rounded-[2.25rem] p-6 sm:p-7 border border-white/10 flex flex-col justify-between space-y-5 shadow-2xl"
        >
          {/* Calendar Top Header */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-emerald-400/20 border border-cyan-400/30 flex flex-col items-center justify-center font-mono">
                  <span className="text-[9px] uppercase text-cyan-300 font-bold leading-none">
                    {MONTHS[khNow ? khNow.monthIndex : 10].slice(0, 3)}
                  </span>
                  <span className="text-xl font-black text-white leading-tight">
                    {khNow ? khNow.day : 12}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-tight">
                    {MONTHS[viewMonth]} {viewYear}
                  </h3>
                  <p className="text-xs font-mono text-slate-400">
                    Interactive Monthly Planner
                  </p>
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-1.5">
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={handlePrevMonth}
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/5 transition cursor-pointer"
                  aria-label="Previous Month"
                >
                  <ChevronLeft className="w-4 h-4" />
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={handleJumpToday}
                  className="px-2.5 py-1.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 text-xs font-mono font-semibold border border-cyan-500/20 transition cursor-pointer"
                >
                  Today
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={handleNextMonth}
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/5 transition cursor-pointer"
                  aria-label="Next Month"
                >
                  <ChevronRight className="w-4 h-4" />
                </motion.button>
              </div>
            </div>

            {/* Weekday Names */}
            <div className="grid grid-cols-7 gap-1 text-center text-[11px] font-mono font-semibold text-slate-400 uppercase tracking-wider pt-2 border-t border-white/5">
              {WEEKDAYS.map((dayName, i) => (
                <div
                  key={dayName}
                  className={i === 0 || i === 6 ? "text-cyan-400/70" : ""}
                >
                  {dayName}
                </div>
              ))}
            </div>

            {/* Calendar Days Matrix */}
            <div className="grid grid-cols-7 gap-1.5">
              {calendarCells.map((cell, idx) => {
                const isToday =
                  khNow &&
                  cell.day === khNow.day &&
                  cell.month === khNow.monthIndex &&
                  cell.year === khNow.year;

                const isSelected =
                  selectedDay &&
                  cell.day === selectedDay.day &&
                  cell.month === selectedDay.month &&
                  cell.year === selectedDay.year;

                return (
                  <motion.button
                    key={`${cell.year}-${cell.month}-${cell.day}-${idx}`}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.92 }}
                    onClick={() => {
                      soundFx.playBlip();
                      setSelectedDay({
                        year: cell.year,
                        month: cell.month,
                        day: cell.day,
                      });
                      if (!cell.inCurrentMonth) {
                        setViewMonth(cell.month);
                        setViewYear(cell.year);
                      }
                    }}
                    className={`relative h-10 rounded-xl flex items-center justify-center text-xs font-mono transition-colors cursor-pointer ${
                      isToday
                        ? "bg-gradient-to-br from-cyan-400 to-emerald-400 text-brand-dark font-black shadow-lg shadow-cyan-500/25"
                        : isSelected
                        ? "bg-white/15 text-white font-bold border border-cyan-400/60"
                        : cell.inCurrentMonth
                        ? "text-slate-200 hover:bg-white/10"
                        : "text-slate-600 hover:text-slate-400"
                    }`}
                  >
                    <span>{cell.day}</span>
                    {isToday && (
                      <span className="absolute bottom-1 w-1 h-1 rounded-full bg-brand-dark" />
                    )}
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Selected Date Status Banner */}
          <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 space-y-1.5">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-cyan-400 font-semibold flex items-center gap-1.5">
                <CalendarIcon className="w-3.5 h-3.5" />
                {selectedDay
                  ? `${selectedWeekday}, ${selectedDay.day} ${MONTHS[selectedDay.month]} ${selectedDay.year}`
                  : bigDateText}
              </span>
              {isSelectedToday && (
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  TODAY
                </span>
              )}
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {isSelectedToday
                ? "Active workspace in Krong Battambang. Available for freelance builds, Laravel/Flutter engineering, and tech mentoring."
                : "Select any date or jump back to Today to view availability and milestones."}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
