"use client";

import React, { useState } from "react";
import { siteContent } from "@/src/content/siteContent";
import { Play } from "lucide-react";

interface BuiltForIndustryProps {
  onOpenBooking: (industry?: string) => void;
  onOpenReelModal: (reelUrl: string, title: string, location: string) => void;
}

export default function BuiltForIndustry({
  onOpenBooking,
  onOpenReelModal,
}: BuiltForIndustryProps) {
  const content = siteContent.builtForIndustry;
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-24 sm:py-32 bg-[#F5F2ED] text-[#0D0D0F] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase font-bold text-[#B5161B] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#B5161B]" />
              <span>{content.sectionLabel}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black italic tracking-tight font-headline text-[#0D0D0F] leading-[1.08]">
              {content.headline}
            </h2>
          </div>
          <p className="text-sm sm:text-base text-neutral-700 max-w-md font-medium leading-relaxed">
            {content.subCopy}
          </p>
        </div>

        {/* 8 Industry Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {content.industries.map((ind, idx) => (
            <div
              key={ind.id}
              onClick={() => setActiveTab(idx)}
              className="bg-white rounded-2xl p-6 border border-neutral-200/80 hover:border-[#B5161B] hover:shadow-xl transition-all duration-200 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                {/* Header Tag */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-[#B5161B] bg-red-50 px-2.5 py-1 rounded-md">
                    {ind.number}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500">
                    {ind.sampleTag}
                  </span>
                </div>

                <h3 className="text-xl font-black italic tracking-tight font-headline text-[#0D0D0F] group-hover:text-[#B5161B] transition-colors mb-2">
                  {ind.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal mb-5">
                  {ind.description}
                </p>
              </div>

              {/* Sample Reel Slot */}
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenReelModal(ind.videoUrl, ind.title, ind.sampleTag);
                }}
                className="relative rounded-xl overflow-hidden aspect-[16/9] bg-neutral-900 border border-neutral-200 flex items-center justify-center group/reel"
              >
                {/* Poster */}
                <img
                  src={ind.posterUrl}
                  alt={`${ind.title} sample reel preview`}
                  className="w-full h-full object-cover group-hover/reel:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover/reel:bg-black/20 transition-colors" />
                
                <div className="relative z-10 w-9 h-9 rounded-full bg-[#E63946] text-white flex items-center justify-center shadow-lg group-hover/reel:scale-110 transition-transform">
                  <Play className="w-4 h-4 fill-white ml-0.5" />
                </div>

                <div className="absolute bottom-2 left-2 z-10 bg-black/70 backdrop-blur-xs text-white text-[10px] font-mono px-2 py-0.5 rounded">
                  Sample Reel
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 4-Column Promise Row */}
        <div className="bg-[#0D0D0F] text-white rounded-3xl p-8 sm:p-12 shadow-2xl">
          <div className="mb-8 pb-6 border-b border-neutral-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-mono font-bold tracking-widest text-[#E63946] uppercase">
                THE REELS IN MINUTES ADVANTAGE
              </span>
              <h3 className="text-2xl sm:text-3xl font-black italic font-headline text-white mt-1">
                Engineered for speed, built on twenty-three years of film.
              </h3>
            </div>
            <button
              onClick={() => onOpenBooking()}
              className="px-6 py-3 rounded-xl bg-[#E63946] hover:bg-[#b5161b] text-white font-bold text-xs uppercase tracking-wider transition-colors shrink-0"
            >
              Book the Crew
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.promiseRow.map((p, idx) => (
              <div key={idx} className="space-y-2 border-l-2 border-[#E63946] pl-4">
                <div className="text-lg font-black italic font-headline text-white">
                  {p.title}
                </div>
                <div className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal">
                  {p.description}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
