"use client";

import React from "react";
import { siteContent } from "@/src/content/siteContent";

export default function LiveTicker() {
  const items = siteContent.liveTicker;

  return (
    <div className="bg-[#101014] border-b border-neutral-800 text-[11px] font-mono tracking-wider py-1.5 px-4 overflow-hidden relative z-40 select-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2 pr-4 shrink-0 bg-[#101014] z-10">
          <span className="w-2 h-2 rounded-full bg-[#E63946] animate-rec-pulse shrink-0" />
          <span className="text-white font-bold tracking-widest text-[10px] uppercase">
            LIVE DESK
          </span>
          <span className="text-neutral-500 hidden sm:inline">|</span>
        </div>

        {/* Marquee Ticker */}
        <div className="overflow-hidden whitespace-nowrap w-full relative">
          <div className="animate-marquee flex items-center gap-8 text-neutral-300">
            {items.concat(items).map((item, idx) => (
              <span key={`${item.id}-${idx}`} className="inline-flex items-center gap-2 text-xs">
                <span className="text-neutral-200">{item.text}</span>
                <span className="text-neutral-600">///</span>
              </span>
            ))}
          </div>
        </div>

        {/* Speed tag right */}
        <div className="hidden md:flex items-center gap-2 pl-4 shrink-0 bg-[#101014] z-10 text-[10px] text-neutral-400">
          <span>PUNE, MH</span>
          <span className="text-[#E63946] font-bold">10-15 MIN SLA</span>
        </div>
      </div>
    </div>
  );
}
