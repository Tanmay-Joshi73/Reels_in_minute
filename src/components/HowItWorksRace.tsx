"use client";

import React, { useState, useEffect, useRef } from "react";
import { siteContent } from "@/src/content/siteContent";
import { Camera, Scissors, Sparkles, Send, CheckCircle2 } from "lucide-react";

export default function HowItWorksRace() {
  const content = siteContent.howItWorks;
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [stopwatchTime, setStopwatchTime] = useState("00:00");

  const icons = [Camera, Scissors, Sparkles, Send];

  // Track scroll position inside the section
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowH = window.innerHeight;

      // Calculate progress 0 to 1
      const totalDist = rect.height - windowH;
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / (totalDist || 1)));

      if (progress < 0.25) {
        setActiveStep(0);
        setStopwatchTime("00:00");
      } else if (progress < 0.5) {
        setActiveStep(1);
        setStopwatchTime("04:00");
      } else if (progress < 0.75) {
        setActiveStep(2);
        setStopwatchTime("09:00");
      } else {
        setActiveStep(3);
        setStopwatchTime("12:00");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="services"
      ref={containerRef}
      className="relative py-24 sm:py-32 bg-[#0D0D0F] text-white border-b border-neutral-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 section-label mb-3">
              <span className="w-2 h-2 rounded-full bg-[#E63946]" />
              <span>{content.sectionLabel}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black italic tracking-tight font-headline text-white max-w-3xl leading-[1.08]">
              {content.headline}
            </h2>
          </div>
          <p className="text-sm sm:text-base text-neutral-400 max-w-md font-medium leading-relaxed">
            {content.subCopy}
          </p>
        </div>

        {/* Sticky Stopwatch & Timeline Control Bar */}
        <div className="sticky top-24 z-30 mb-16 bg-[#141418]/95 backdrop-blur-xl p-5 sm:p-6 rounded-2xl border border-neutral-800 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-800">
            {/* Stopwatch HUD */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-[#0D0D0F] px-4 py-2 rounded-xl border border-neutral-800">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E63946] animate-rec-pulse" />
                <span className="font-mono text-xs text-neutral-400 font-bold uppercase tracking-wider">
                  MOMENT TO FEED:
                </span>
                <span className="font-mono text-2xl font-black text-[#E63946] tracking-widest">
                  {stopwatchTime}
                </span>
              </div>
              <div className="text-xs font-mono text-neutral-400 hidden lg:block">
                <span>{activeStep === 3 ? "⚡ PUBLISHED LIVE" : "IN-PROGRESS TURNAROUND"}</span>
              </div>
            </div>

            {/* Quick-Jump Step Selectors */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
              {content.steps.map((st, idx) => (
                <button
                  key={st.number}
                  onClick={() => {
                    setActiveStep(idx);
                    setStopwatchTime(st.time);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold tracking-wider transition-all flex items-center gap-1.5 shrink-0 ${
                    activeStep === idx
                      ? "bg-[#E63946] text-white shadow-lg shadow-red-950"
                      : "bg-[#0D0D0F] text-neutral-400 hover:text-white border border-neutral-800"
                  }`}
                >
                  <span>{st.time}</span>
                  <span className="text-[10px] opacity-80 uppercase font-sans font-semibold">
                    {st.title.split(" ")[0]}
                  </span>
                </button>
              ))}
              <div className="px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>15:00 LIVE</span>
              </div>
            </div>
          </div>

          {/* Progress Race Track Line */}
          <div className="relative w-full h-2 bg-neutral-900 rounded-full mt-4 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#B5161B] via-[#E63946] to-emerald-400 rounded-full transition-all duration-300 ease-out"
              style={{
                width: `${((activeStep + 1) / 4) * 100}%`,
              }}
            />
          </div>
        </div>

        {/* 4 Interactive Race Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.steps.map((step, idx) => {
            const Icon = icons[idx];
            const isActive = activeStep === idx;
            const isCompleted = activeStep > idx;

            return (
              <div
                key={step.number}
                onClick={() => {
                  setActiveStep(idx);
                  setStopwatchTime(step.time);
                }}
                className={`cursor-pointer rounded-2xl p-6 sm:p-7 border transition-all duration-300 relative flex flex-col justify-between ${
                  isActive
                    ? "bg-[#16161D] border-[#E63946] shadow-[0_15px_35px_rgba(230,57,70,0.15)] scale-[1.02]"
                    : isCompleted
                    ? "bg-[#111115] border-neutral-800 text-neutral-300 hover:border-neutral-700"
                    : "bg-[#0E0E12] border-neutral-900 text-neutral-500 hover:border-neutral-800"
                }`}
              >
                {/* Step Top HUD */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`font-mono text-xs font-bold px-2.5 py-1 rounded-md ${
                        isActive
                          ? "bg-[#E63946] text-white"
                          : isCompleted
                          ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                          : "bg-neutral-900 text-neutral-500"
                      }`}
                    >
                      {step.time}
                    </span>

                    <span className="font-mono text-xs text-neutral-500 font-semibold">
                      STEP {step.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors ${
                      isActive
                        ? "bg-[#E63946]/20 text-[#E63946]"
                        : "bg-neutral-900 text-neutral-400"
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3
                    className={`text-xl font-black italic tracking-tight font-headline mb-2 ${
                      isActive ? "text-white" : "text-neutral-200"
                    }`}
                  >
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal mb-4">
                    {step.description}
                  </p>
                </div>

                {/* Extended Details */}
                <div className="pt-4 border-t border-neutral-800/80 text-xs text-neutral-400 leading-normal">
                  {step.detail}
                </div>

                {/* Active Indicator Glow */}
                {isActive && (
                  <span className="absolute -top-1 -right-1 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E63946] opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#E63946]" />
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* Live Race Finish Banner */}
        <div className="mt-12 bg-gradient-to-r from-neutral-950 via-[#141418] to-neutral-950 p-6 rounded-2xl border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-bold text-white font-headline">
                Result: Live on feed while the event is still running
              </div>
              <div className="text-xs text-neutral-400 font-mono">
                No next-week Google Drive folders. No forgotten memories.
              </div>
            </div>
          </div>
          <div className="font-mono text-xs font-bold text-[#E63946] uppercase tracking-wider bg-[#E63946]/10 px-4 py-2 rounded-lg border border-[#E63946]/30">
            Average Speed: 11 to 14 minutes
          </div>
        </div>

      </div>
    </section>
  );
}
