"use client";

import React, { useState, useRef } from "react";
import { siteContent } from "@/src/content/siteContent";
import { Play, ArrowUpRight } from "lucide-react";

interface WhatWeMakeProps {
  onOpenBooking: (tier?: string) => void;
}

export default function WhatWeMake({ onOpenBooking }: WhatWeMakeProps) {
  const content = siteContent.whatWeMake;
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section className="py-24 sm:py-32 bg-[#0D0D0F] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
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

        {/* 8 Service Cards Grid (4 columns on lg, 2 on md, 1 on sm) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.services.map((service) => {
            const isHovered = hoveredCard === service.id;

            return (
              <ServiceCard
                key={service.id}
                service={service}
                isHovered={isHovered}
                onHover={() => setHoveredCard(service.id)}
                onLeave={() => setHoveredCard(null)}
                onBook={() => onOpenBooking(service.title)}
              />
            );
          })}
        </div>

      </div>
    </section>
  );
}

function ServiceCard({
  service,
  isHovered,
  onHover,
  onLeave,
  onBook,
}: {
  service: typeof siteContent.whatWeMake.services[0];
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
  onBook: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    onHover();
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    onLeave();
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative rounded-2xl overflow-hidden bg-[#141418] border border-neutral-800 hover:border-[#E63946] transition-all duration-300 flex flex-col justify-between aspect-[9/14] sm:aspect-[9/15] shadow-xl"
    >
      {/* Background Poster & Video Preview */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Video preview */}
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          poster={service.posterUrl}
          className={`w-full h-full object-cover transition-transform duration-700 ease-out ${
            isHovered ? "scale-105 opacity-100" : "scale-100 opacity-75"
          }`}
        >
          <source src={service.videoUrl} type="video/mp4" />
        </video>

        {/* Gradient dark overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0F] via-[#0D0D0F]/60 to-[#0D0D0F]/40" />
      </div>

      {/* Top Header Card Info */}
      <div className="relative z-10 p-5 flex items-center justify-between">
        <span className="text-xs font-mono font-bold tracking-widest text-[#E63946] bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
          {service.number}
        </span>

        <span className="text-[10px] font-mono tracking-wider uppercase text-neutral-300 bg-neutral-900/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
          {service.category}
        </span>
      </div>

      {/* Center Play Indicator on Hover */}
      <div className="relative z-10 self-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <div className="w-12 h-12 rounded-full bg-[#E63946]/90 text-white flex items-center justify-center shadow-lg shadow-red-950 scale-90 group-hover:scale-100 transition-transform">
          <Play className="w-5 h-5 fill-white ml-0.5" />
        </div>
      </div>

      {/* Bottom Content Info */}
      <div className="relative z-10 p-5 pt-0 space-y-2.5">
        <h3 className="text-xl font-black italic tracking-tight font-headline text-white group-hover:text-[#E63946] transition-colors">
          {service.title}
        </h3>

        <p className="text-xs text-neutral-300 leading-relaxed font-normal line-clamp-3">
          {service.description}
        </p>

        {/* Action Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onBook();
          }}
          className="w-full mt-2 py-2 px-3 rounded-lg bg-neutral-900/90 hover:bg-[#E63946] text-white text-[11px] font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors border border-white/10 group-hover:border-transparent"
        >
          <span>Book Format</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
