"use client";

import React, { useState, useRef } from "react";
import { siteContent, VideoReel } from "@/src/content/siteContent";
import { Play, Eye, Heart, Sparkles } from "lucide-react";
import ReelModalViewer from "./ReelModalViewer";

export default function ReelWall() {
  const content = siteContent.reelWall;
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [viewerOpen, setViewerOpen] = useState(false);
  const [viewerIndex, setViewerIndex] = useState(0);

  const filteredReels =
    selectedFilter === "All"
      ? content.reels
      : content.reels.filter((r) => r.category === selectedFilter);

  const handleOpenViewer = (reel: VideoReel) => {
    const idx = filteredReels.findIndex((r) => r.id === reel.id);
    setViewerIndex(idx >= 0 ? idx : 0);
    setViewerOpen(true);
  };

  return (
    <section id="work" className="py-24 sm:py-32 bg-[#0D0D0F] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
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

        {/* Filter Chips Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {content.filters.map((filter) => {
            const isActive = selectedFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-2 rounded-full text-xs font-mono font-bold tracking-wider uppercase transition-all duration-200 shrink-0 ${
                  isActive
                    ? "bg-[#E63946] text-white shadow-lg shadow-red-950 scale-105"
                    : "bg-[#141418] text-neutral-400 hover:text-white border border-neutral-800 hover:border-neutral-700"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Masonry-Style Responsive Grid of 9:16 Vertical Reels */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredReels.map((reel) => (
            <ReelCard
              key={reel.id}
              reel={reel}
              onSelect={() => handleOpenViewer(reel)}
            />
          ))}
        </div>

      </div>

      {/* Fullscreen TikTok / Reel Modal Viewer */}
      <ReelModalViewer
        reels={filteredReels}
        initialIndex={viewerIndex}
        isOpen={viewerOpen}
        onClose={() => setViewerOpen(false)}
      />
    </section>
  );
}

function ReelCard({
  reel,
  onSelect,
}: {
  reel: VideoReel;
  onSelect: () => void;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div
      onClick={onSelect}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#141418] border border-neutral-800 hover:border-[#E63946] transition-all duration-300 aspect-[9/16] cursor-pointer flex flex-col justify-between shadow-2xl hover:shadow-[0_15px_40px_rgba(230,57,70,0.2)] hover:-translate-y-1"
    >
      {/* Video & Poster */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          poster={reel.posterUrl}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isHovered ? "scale-105" : "scale-100"
          }`}
        >
          <source src={reel.videoUrl} type="video/mp4" />
        </video>
        {/* Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/60 pointer-events-none" />
      </div>

      {/* Top Header Information */}
      <div className="relative z-10 p-4 sm:p-5 flex items-center justify-between">
        <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 text-[10px] font-mono font-bold text-white uppercase">
          <span className="w-2 h-2 rounded-full bg-[#E63946] animate-rec-pulse" />
          <span>{reel.category}</span>
        </div>

        <div className="bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 text-[10px] font-mono text-[#E63946] font-bold">
          {reel.turnaround}
        </div>
      </div>

      {/* Center Play Button on Hover */}
      <div className="relative z-10 self-center">
        <div
          className={`w-14 h-14 rounded-full bg-[#E63946]/90 text-white flex items-center justify-center shadow-xl transition-all duration-200 ${
            isHovered ? "scale-110 opacity-100 bg-[#E63946]" : "scale-90 opacity-0 group-hover:opacity-100"
          }`}
        >
          <Play className="w-6 h-6 fill-white ml-1" />
        </div>
        {isHovered && (
          <span className="block text-center text-[9px] font-mono uppercase tracking-wider text-white mt-1">
            Tap Fullscreen
          </span>
        )}
      </div>

      {/* Bottom Content & Meta Metrics */}
      <div className="relative z-10 p-4 sm:p-5 space-y-2">
        <div className="text-[11px] font-mono text-neutral-300 flex items-center gap-1">
          <span>📍</span>
          <span className="truncate">{reel.location}</span>
        </div>

        <h3 className="text-base sm:text-lg font-black italic tracking-tight font-headline text-white group-hover:text-[#E63946] transition-colors leading-snug">
          {reel.title}
        </h3>

        {/* Views & Likes Strip */}
        <div className="pt-2 flex items-center justify-between text-xs font-mono text-neutral-400 border-t border-white/15">
          <span className="flex items-center gap-1">
            <Eye className="w-3.5 h-3.5 text-neutral-400" />
            <span className="text-white font-bold">{reel.views || "480K"}</span>
          </span>
          <span className="flex items-center gap-1">
            <Heart className="w-3.5 h-3.5 text-[#E63946] fill-[#E63946]" />
            <span className="text-white font-bold">{reel.likes || "32K"}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
