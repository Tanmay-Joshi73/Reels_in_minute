"use client";

import React, { useEffect, useState } from "react";

export default function ClapperIntro() {
  const [isOpen, setIsOpen] = useState(false);
  const [clapped, setClapped] = useState(false);

  useEffect(() => {
    // Check reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    // Check if shown in this session
    const hasSeen = sessionStorage.getItem("rim_clapper_seen");
    if (hasSeen) {
      return;
    }

    setIsOpen(true);

    // Audio click effect using Web Audio API
    const playSnapSound = () => {
      try {
        const audioCtx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = "square";
        osc.frequency.setValueAtTime(800, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(120, audioCtx.currentTime + 0.08);
        gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.08);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.09);
      } catch {
        // Audio might be blocked before user interaction, which is safe to ignore
      }
    };

    // Clapper snap at 400ms
    const timerSnap = setTimeout(() => {
      setClapped(true);
      playSnapSound();
    }, 450);

    // Auto-dismiss at 1500ms (< 2s requirement)
    const timerDismiss = setTimeout(() => {
      setIsOpen(false);
      sessionStorage.setItem("rim_clapper_seen", "true");
    }, 1500);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === " " || e.key === "Enter") {
        setIsOpen(false);
        sessionStorage.setItem("rim_clapper_seen", "true");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearTimeout(timerSnap);
      clearTimeout(timerDismiss);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  if (!isOpen) return null;

  const handleSkip = () => {
    setIsOpen(false);
    sessionStorage.setItem("rim_clapper_seen", "true");
  };

  return (
    <div
      onClick={handleSkip}
      className="fixed inset-0 z-[100000] flex flex-col items-center justify-center bg-[#070709] bg-opacity-98 backdrop-blur-md cursor-pointer transition-opacity duration-300"
    >
      <div className="relative flex flex-col items-center select-none scale-90 sm:scale-100">
        {/* Clapper Arm (Tilted then snaps flat) */}
        <div
          className={`relative w-72 sm:w-84 h-12 bg-white origin-bottom-left transition-transform duration-200 ease-in flex overflow-hidden rounded-t-sm shadow-2xl ${
            clapped ? "rotate-0" : "-rotate-20 -translate-y-2"
          }`}
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #0D0D0F, #0D0D0F 20px, #FFFFFF 20px, #FFFFFF 40px)",
          }}
        >
          {/* Hinge Pin */}
          <div className="absolute -left-1 bottom-0 w-3 h-3 rounded-full bg-[#E63946] border border-white" />
        </div>

        {/* Clapper Lower Board */}
        <div className="w-72 sm:w-84 bg-[#141418] border-2 border-neutral-700 p-4 rounded-b-md shadow-2xl text-white">
          {/* Header striped strip */}
          <div
            className="w-full h-4 mb-3 rounded-xs"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, #0D0D0F, #0D0D0F 14px, #FFFFFF 14px, #FFFFFF 28px)",
            }}
          />

          {/* Slate Fields */}
          <div className="grid grid-cols-3 gap-2 border-b border-neutral-700 pb-2 mb-2 text-center text-xs font-mono">
            <div>
              <div className="text-[10px] text-neutral-400">SCENE</div>
              <div className="font-bold text-white tracking-wider">PUNE</div>
            </div>
            <div>
              <div className="text-[10px] text-neutral-400">TAKE</div>
              <div className="font-bold text-[#E63946] tracking-wider">01</div>
            </div>
            <div>
              <div className="text-[10px] text-neutral-400">ROLL</div>
              <div className="font-bold text-white tracking-wider">15 MIN</div>
            </div>
          </div>

          <div className="space-y-1 text-[11px] font-mono">
            <div className="flex justify-between">
              <span className="text-neutral-400">PROD:</span>
              <span className="font-bold text-white tracking-wide">REELS IN MINUTES</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-400">DIRECTOR:</span>
              <span className="text-neutral-200">NAKUL REDDY</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-400">SPEED:</span>
              <span className="font-bold text-[#E63946]">10–15 MIN ON-SITE</span>
            </div>
          </div>
        </div>

        {/* Pulse REC status */}
        <div className="mt-6 flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#E63946] animate-rec-pulse" />
          <span className="text-xs font-mono tracking-widest text-neutral-300 uppercase">
            {clapped ? "ACTION · LIVE SPEED" : "STANDBY · ROLLING"}
          </span>
        </div>

        {/* Skip hint */}
        <p className="mt-3 text-[10px] text-neutral-500 font-mono tracking-wider">
          Click anywhere or press Esc to skip
        </p>
      </div>
    </div>
  );
}
