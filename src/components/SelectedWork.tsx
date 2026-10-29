"use client";

import React, { useState } from "react";
import { siteContent } from "@/src/content/siteContent";
import { Play, ArrowUpRight, Camera } from "lucide-react";
import CaseStudyDetailModal from "./CaseStudyDetailModal";

interface SelectedWorkProps {
  onOpenBooking: () => void;
}

export default function SelectedWork({ onOpenBooking }: SelectedWorkProps) {
  const content = siteContent.selectedWork;
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  return (
    <section id="case-studies" className="py-24 sm:py-32 bg-[#0D0D0F] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 section-label mb-3">
              <span className="w-2 h-2 rounded-full bg-[#E63946]" />
              <span>{content.sectionLabel}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black italic tracking-tight font-headline text-white leading-[1.08]">
              {content.headline}
            </h2>
          </div>
          <p className="text-sm sm:text-base text-neutral-400 max-w-md font-medium leading-relaxed">
            {content.subCopy}
          </p>
        </div>

        {/* Featured Large Case Study: Sivru Fab Corner Navratri 2026 */}
        <div className="mb-16 bg-[#141418] rounded-3xl border border-neutral-800 overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E63946]/15 border border-[#E63946]/40 text-[#E63946] text-xs font-mono font-bold uppercase tracking-wider mb-4">
                  <span className="w-2 h-2 rounded-full bg-[#E63946] animate-rec-pulse" />
                  <span>{content.featuredCase.badge}</span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-black italic tracking-tight font-headline text-white mb-4">
                  {content.featuredCase.title}
                </h3>

                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
                  {content.featuredCase.description}
                </p>
              </div>

              {/* 4 Stat Tiles */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-y border-neutral-800">
                {content.featuredCase.stats.map((stat, sIdx) => (
                  <div key={sIdx} className="bg-[#0D0D0F] p-4 rounded-xl border border-neutral-800/80">
                    <div className="text-2xl sm:text-3xl font-black italic font-headline text-[#E63946]">
                      {stat.value}
                    </div>
                    <div className="text-[10px] font-mono text-neutral-400 font-bold uppercase mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <button
                  onClick={() => setActiveSlug(content.featuredCase.slug)}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#E63946] hover:bg-[#b5161b] text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 group shadow-lg shadow-red-950"
                >
                  <span>View Case Study & Reels</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
                <span className="text-xs text-neutral-400 font-mono">
                  Includes embedded 9:16 deliverables
                </span>
              </div>
            </div>

            {/* Right Video / Visual Column */}
            <div
              onClick={() => setActiveSlug(content.featuredCase.slug)}
              className="lg:col-span-5 relative bg-black min-h-[380px] lg:min-h-full cursor-pointer group flex items-center justify-center overflow-hidden"
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                poster={content.featuredCase.posterUrl}
                className="absolute inset-0 w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-700"
              >
                <source src={content.featuredCase.videoUrl} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />

              <div className="relative z-10 w-16 h-16 rounded-full bg-[#E63946]/90 text-white flex items-center justify-center shadow-2xl scale-95 group-hover:scale-110 transition-transform">
                <Play className="w-8 h-8 fill-white ml-1" />
              </div>

              <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-xs font-mono text-white/90 bg-black/60 backdrop-blur-md px-3 py-2 rounded-lg border border-white/10">
                <span>D Y Patil Ground · Akurdi</span>
                <span className="text-[#E63946] font-bold">12 min turnaround</span>
              </div>
            </div>

          </div>
        </div>

        {/* 4 Showcase Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {content.cards.map((card) => (
            <div
              key={card.slug}
              onClick={() => setActiveSlug(card.slug)}
              className="bg-[#141418] rounded-2xl border border-neutral-800 hover:border-[#E63946] transition-all duration-300 p-6 flex flex-col justify-between group cursor-pointer shadow-xl"
            >
              <div>
                <span className="text-[10px] font-mono tracking-widest font-bold text-[#E63946] uppercase block mb-3">
                  {card.badge}
                </span>

                <h4 className="text-xl font-black italic tracking-tight font-headline text-white group-hover:text-[#E63946] transition-colors mb-3">
                  {card.title}
                </h4>

                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal mb-6">
                  {card.description}
                </p>
              </div>

              {/* Thumbnail with hover play */}
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-black border border-neutral-800">
                <img
                  src={card.posterUrl}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-[#E63946]/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-4 h-4 fill-white ml-0.5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Photo Slot: "On stage at D Y Patil, Akurdi" */}
        <div className="relative rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl bg-[#141418]">
          <div className="relative aspect-[21/9] min-h-[300px] w-full">
            <img
              src={content.teamPhoto.src}
              alt="Reels in Minutes crew on stage at D Y Patil, Akurdi"
              className="w-full h-full object-cover"
            />
            {/* Cinematic gradient fade */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

            <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 z-10 max-w-xl">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#E63946] uppercase tracking-wider mb-2">
                <Camera className="w-4 h-4" />
                <span>ON GROUND FIELD CREW</span>
              </div>
              <h3 className="text-xl sm:text-3xl font-black italic tracking-tight font-headline text-white mb-1">
                {content.teamPhoto.caption}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 font-mono">
                {content.teamPhoto.description}
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Case Study Detail Modal */}
      <CaseStudyDetailModal
        slug={activeSlug}
        isOpen={Boolean(activeSlug)}
        onClose={() => setActiveSlug(null)}
        onOpenBooking={onOpenBooking}
      />
    </section>
  );
}
