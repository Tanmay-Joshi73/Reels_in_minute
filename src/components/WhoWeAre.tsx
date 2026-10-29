"use client";

import React from "react";
import { siteContent } from "@/src/content/siteContent";
import { Zap, Camera, Laptop, Share2 } from "lucide-react";

export default function WhoWeAre() {
  const content = siteContent.whoWeAre;

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#F5F2ED] text-[#0D0D0F] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase font-bold text-[#B5161B] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#B5161B]" />
            <span>{content.sectionLabel}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black italic tracking-tight font-headline text-[#0D0D0F] max-w-4xl leading-[1.08]">
            {content.headline}
          </h2>
        </div>

        {/* 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch mb-16">
          
          {/* Left Column: Narrative paragraphs & 4 Mini Pillars */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 flex flex-col justify-between">
            <div className="space-y-5 text-base sm:text-lg text-neutral-800 leading-relaxed font-normal">
              {content.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* 4 Pillars Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-neutral-300">
              <div className="p-3 bg-white/80 rounded-xl border border-neutral-200">
                <Camera className="w-5 h-5 text-[#B5161B] mb-2" />
                <div className="font-bold text-xs font-headline">01 Shoot on site</div>
                <div className="text-[11px] text-neutral-600 mt-0.5">Cinema cameras & drones</div>
              </div>

              <div className="p-3 bg-white/80 rounded-xl border border-neutral-200">
                <Laptop className="w-5 h-5 text-[#B5161B] mb-2" />
                <div className="font-bold text-xs font-headline">02 Edit on site</div>
                <div className="text-[11px] text-neutral-600 mt-0.5">Rigs at the venue</div>
              </div>

              <div className="p-3 bg-white/80 rounded-xl border border-neutral-200">
                <Zap className="w-5 h-5 text-[#B5161B] mb-2" />
                <div className="font-bold text-xs font-headline">03 Render 9:16</div>
                <div className="text-[11px] text-neutral-600 mt-0.5">Color, sound & captions</div>
              </div>

              <div className="p-3 bg-white/80 rounded-xl border border-neutral-200">
                <Share2 className="w-5 h-5 text-[#B5161B] mb-2" />
                <div className="font-bold text-xs font-headline">04 Post live</div>
                <div className="text-[11px] text-neutral-600 mt-0.5">While crowd is in room</div>
              </div>
            </div>
          </div>

          {/* Right Column: Large Red 10-15 Min Promise Block */}
          <div className="lg:col-span-5 flex">
            <div className="w-full bg-[#B5161B] text-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden group">
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700" />
              
              <div>
                <span className="text-[11px] font-mono tracking-widest uppercase font-bold text-white/80 block mb-4">
                  THE REELS IN MINUTES PROMISE
                </span>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-7xl sm:text-8xl font-black italic tracking-tighter font-headline leading-none">
                    {content.promiseBox.time}
                  </span>
                  <span className="text-2xl sm:text-3xl font-black italic font-headline text-white/90">
                    {content.promiseBox.unit}
                  </span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-white/95 leading-relaxed font-medium">
                {content.promiseBox.copy}
              </p>

              <div className="mt-8 pt-6 border-t border-white/20 flex items-center justify-between text-xs font-mono text-white/80">
                <span>EST. AUGUST 2026</span>
                <span className="font-bold text-white">PUNE, MH</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Facts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-neutral-300">
          {content.facts.map((fact, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-neutral-200/80 shadow-sm">
              <div className="text-[11px] font-mono font-bold tracking-widest text-[#B5161B] uppercase mb-1">
                {fact.label}
              </div>
              <div className="text-xl font-black italic font-headline text-[#0D0D0F]">
                {fact.value}
              </div>
              <div className="text-xs text-neutral-500 font-mono mt-1">
                {fact.sub}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
