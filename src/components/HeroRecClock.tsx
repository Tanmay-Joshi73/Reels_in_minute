"use client";

import React, { useState, useEffect, useRef } from "react";
import { Play, Volume2, VolumeX, ArrowDown, Sparkles, CheckCircle2 } from "lucide-react";
import { siteContent } from "@/src/content/siteContent";

interface HeroRecClockProps {
  onOpenBooking: () => void;
}

export default function HeroRecClock({ onOpenBooking }: HeroRecClockProps) {
  const [timecode, setTimecode] = useState("00:14:02:18");
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Live REC timecode counter
  useEffect(() => {
    let start = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const totalSec = 14 * 60 + Math.floor(elapsed / 1000);
      const m = Math.floor(totalSec / 60);
      const s = totalSec % 60;
      const ms = Math.floor((elapsed % 1000) / 40); // 25 fps frames
      setTimecode(`00:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}:${ms.toString().padStart(2, "0")}`);
    }, 40);

    return () => clearInterval(interval);
  }, []);

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-8 pb-16 sm:py-20 overflow-hidden">
      {/* Background radial spotlight */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#E63946]/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#B5161B]/15 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Sub-copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Section Tag */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#141418] border border-neutral-800 text-xs font-mono uppercase tracking-widest text-neutral-300 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-[#E63946] animate-rec-pulse" />
              <span className="font-bold text-white">PUNE&apos;S 1ST INSTANT REEL CREW</span>
              <span className="text-neutral-600">·</span>
              <span className="text-neutral-400">REDDY ARTS MEDIA (EST. 2003)</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black italic tracking-tight font-headline text-white leading-[1.04]">
              {siteContent.hero.headlinePart1}{" "}
              <span className="text-[#E63946] relative inline-block">
                {siteContent.hero.headlineAccent}
                {/* Underline flourish */}
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-[#E63946]/40"
                  viewBox="0 0 300 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 9C60 3 180 2 297 9"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Sub-Copy */}
            <p className="text-base sm:text-xl text-neutral-300 font-normal max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {siteContent.hero.subCopy}
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#E63946] hover:bg-[#b5161b] text-white font-black italic text-sm uppercase tracking-wider transition-all duration-200 shadow-[0_8px_30px_rgba(230,57,70,0.5)] hover:shadow-[0_10px_35px_rgba(230,57,70,0.7)] hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2.5 font-headline"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-white animate-rec-pulse" />
                <span>{siteContent.hero.ctaPrimary}</span>
              </button>

              <a
                href="#work"
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-[#141418] hover:bg-neutral-800 border border-neutral-700/80 text-white font-bold text-sm uppercase tracking-wider transition-all duration-200 hover:border-neutral-500 flex items-center justify-center gap-2 group"
              >
                <Play className="w-4 h-4 fill-white text-white group-hover:scale-110 transition-transform" />
                <span>{siteContent.hero.ctaSecondary}</span>
                <ArrowDown className="w-3.5 h-3.5 text-neutral-400 group-hover:translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Trust Badges Bar */}
            <div className="pt-4 grid grid-cols-3 gap-4 border-t border-neutral-800/80 text-left">
              <div>
                <div className="text-xl sm:text-2xl font-black text-white font-headline">10–15 min</div>
                <div className="text-[11px] text-neutral-400 font-mono">Turnaround On Site</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-[#E63946] font-headline">19M+</div>
                <div className="text-[11px] text-neutral-400 font-mono">Organic Reel Views</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-white font-headline">23 Yrs</div>
                <div className="text-[11px] text-neutral-400 font-mono">Film Media Legacy</div>
              </div>
            </div>
          </div>

          {/* Right Column: Signature Tilted Vertical 9:16 Phone Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end phone-perspective relative">
            
            {/* Ambient Red Glow behind phone */}
            <div className="absolute inset-0 bg-[#E63946]/20 blur-3xl -z-10 rounded-full scale-75" />

            {/* Floating Live Pill Badge */}
            <div className="absolute -top-4 sm:-top-6 right-2 sm:right-6 z-30 bg-[#141418]/95 backdrop-blur-md border border-[#E63946]/40 text-white px-4 py-2 rounded-full shadow-2xl flex items-center gap-2.5 text-xs font-semibold animate-bounce [animation-duration:3s]">
              <div className="w-5 h-5 rounded-full bg-[#E63946] text-white flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-3.5 h-3.5" />
              </div>
              <span className="font-mono text-neutral-200">
                {siteContent.hero.floatingPill}
              </span>
            </div>

            {/* The Signature Tilted 9:16 Phone Container */}
            <div className="relative w-[280px] sm:w-[320px] aspect-[9/16] rounded-[44px] p-3.5 bg-neutral-900 border-[3px] border-neutral-700/80 tilted-phone-card select-none">
              
              {/* Phone Notch / Dynamic Island */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-30 flex items-center justify-between px-3">
                <div className="w-2.5 h-2.5 rounded-full bg-neutral-900 border border-neutral-800" />
                <div className="w-2 h-2 rounded-full bg-[#E63946]/80 animate-pulse" />
              </div>

              {/* Inner Screen */}
              <div className="relative w-full h-full rounded-[34px] overflow-hidden bg-black flex flex-col justify-between">
                
                {/* Looping Vertical Reel Video */}
                <video
                  ref={videoRef}
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  poster={siteContent.hero.heroReel.posterUrl}
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src={siteContent.hero.heroReel.videoUrl} type="video/mp4" />
                </video>

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60 pointer-events-none" />

                {/* Top Camera REC HUD */}
                <div className="relative z-20 pt-8 px-4 flex items-center justify-between text-white font-mono text-[11px]">
                  <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/10">
                    <span className="w-2 h-2 rounded-full bg-[#E63946] animate-rec-pulse" />
                    <span className="font-bold tracking-wider text-white">REC</span>
                  </div>

                  <div className="bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/10 font-bold tracking-wider text-[#E63946]">
                    {timecode}
                  </div>
                </div>

                {/* Center Audio Unmute Toggle Button */}
                <div className="relative z-20 self-center">
                  <button
                    onClick={toggleSound}
                    aria-label={isMuted ? "Unmute reel sound" : "Mute reel sound"}
                    className="w-12 h-12 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-[#E63946] hover:border-[#E63946] transition-all duration-200 active:scale-90 shadow-xl"
                  >
                    {isMuted ? (
                      <VolumeX className="w-5 h-5 text-white/90" />
                    ) : (
                      <Volume2 className="w-5 h-5 text-white animate-pulse" />
                    )}
                  </button>
                  <span className="block text-center text-[9px] font-mono text-white/70 mt-1 uppercase tracking-wider">
                    {isMuted ? "Tap for sound" : "Sound On"}
                  </span>
                </div>

                {/* Bottom Live Pill & Location Overlay */}
                <div className="relative z-20 p-4 space-y-2">
                  <div className="bg-black/75 backdrop-blur-md border border-white/10 rounded-xl p-3 text-white space-y-1">
                    <div className="flex items-center justify-between text-[10px] font-mono">
                      <span className="text-[#E63946] font-bold flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        LIVE PUBLISH
                      </span>
                      <span className="text-white/60">14 MIN AGO</span>
                    </div>
                    <div className="text-xs font-bold leading-tight font-headline">
                      D Y Patil Stage Highlight Reel
                    </div>
                    <div className="text-[10px] text-neutral-400">
                      📍 Akurdi Ground, Pune · 8,000+ Crowd
                    </div>
                  </div>

                  {/* Instagram Like & View Meter Bar */}
                  <div className="flex items-center justify-between px-1 text-[11px] font-mono text-white/90">
                    <span>❤️ 74.2K likes</span>
                    <span>👀 980K views</span>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
