"use client";

import React, { useState, useEffect, useRef } from "react";
import { siteContent } from "@/src/content/siteContent";

export default function StatsStrip() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Animated counters
  const [counts, setCounts] = useState({
    reels: 0,
    views: 0,
    likes: 0,
    followers: 0,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const duration = 1800; // ms
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const ease = 1 - Math.pow(1 - progress, 3);

            setCounts({
              reels: Math.floor(ease * 340),
              views: Math.floor(ease * 19),
              likes: Math.floor(ease * 1),
              followers: Math.floor(ease * 6000),
            });

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.25 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const stats = [
    {
      id: "reels",
      value: `${counts.reels}+`,
      label: "REELS PRODUCED",
    },
    {
      id: "views",
      value: `${counts.views}M+`,
      label: "REEL VIEWS",
    },
    {
      id: "likes",
      value: `${counts.likes}M+`,
      label: "LIKES ACROSS THE HANDLE",
    },
    {
      id: "followers",
      value: `${counts.followers.toLocaleString()}+`,
      label: "ORGANIC INSTAGRAM FOLLOWERS",
    },
  ];

  return (
    <section
      ref={containerRef}
      aria-label="Two months in statistics"
      className="relative bg-gradient-to-r from-[#B5161B] via-[#D1282D] to-[#E63946] text-white py-14 sm:py-18 overflow-hidden shadow-2xl"
    >
      {/* Background subtle diagonal stripes */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #000, #000 20px, transparent 20px, transparent 40px)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Tag */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-6 border-b border-white/20">
          <div>
            <span className="text-[11px] font-mono tracking-widest uppercase font-bold text-white/80">
              02 · IN NUMBERS
            </span>
            <h2 className="text-3xl sm:text-5xl font-black italic tracking-tight font-headline text-white mt-1">
              {siteContent.statsStrip.headline}
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-white/90 max-w-md font-medium leading-relaxed">
            {siteContent.statsStrip.note}
          </p>
        </div>

        {/* 4 Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-black/20 backdrop-blur-sm p-6 rounded-2xl border border-white/15 hover:bg-black/30 transition-colors"
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl font-black italic tracking-tight font-headline text-white mb-2">
                {stat.value}
              </div>
              <div className="text-[11px] sm:text-xs font-mono font-bold tracking-wider text-white/90 uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <div className="mt-8 pt-4 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between text-xs text-white/80 font-mono gap-2">
          <span>{siteContent.statsStrip.footnote}</span>
          <span className="text-white font-semibold">100% Organic Reach · No Boosted Spend</span>
        </div>
      </div>
    </section>
  );
}
