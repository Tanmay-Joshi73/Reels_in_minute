"use client";

import React, { useEffect } from "react";
import { X, Calendar, MapPin, Users, Film, CheckCircle2, Quote, ArrowRight } from "lucide-react";
import { siteContent, CaseStudy } from "@/src/content/siteContent";

interface CaseStudyDetailModalProps {
  slug: string | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export default function CaseStudyDetailModal({
  slug,
  isOpen,
  onClose,
  onOpenBooking,
}: CaseStudyDetailModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !slug) return null;

  const caseStudy: CaseStudy | undefined = siteContent.caseStudiesData[slug];

  if (!caseStudy) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      className="fixed inset-0 z-[100000] bg-black/90 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 overflow-y-auto select-none"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl bg-[#141418] border border-neutral-800 rounded-3xl shadow-2xl overflow-hidden my-6 max-h-[92vh] flex flex-col"
      >
        {/* Sticky Header Bar */}
        <div className="bg-[#181820] border-b border-neutral-800 px-6 py-4 flex items-center justify-between z-20 shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E63946] animate-rec-pulse" />
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#E63946]">
              {caseStudy.badge}
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close case study"
            className="w-9 h-9 rounded-full bg-neutral-900 hover:bg-[#E63946] text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Modal Content */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-8 text-neutral-200">
          
          {/* Main Title & Subtitle */}
          <div>
            <h2
              id="case-study-title"
              className="text-2xl sm:text-4xl font-black italic tracking-tight font-headline text-white mb-2"
            >
              {caseStudy.title}
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 font-medium">
              {caseStudy.subtitle}
            </p>
          </div>

          {/* Quick Meta Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-4 border-y border-neutral-800 text-xs font-mono">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#E63946]" />
              <span className="truncate">{caseStudy.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#E63946]" />
              <span>{caseStudy.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-[#E63946]" />
              <span>{caseStudy.crewCount}</span>
            </div>
            <div className="flex items-center gap-2">
              <Film className="w-4 h-4 text-[#E63946]" />
              <span>{caseStudy.reelsDelivered}</span>
            </div>
          </div>

          {/* Stat Tiles Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {caseStudy.stats.map((st, i) => (
              <div key={i} className="bg-[#0D0D0F] p-4 rounded-xl border border-neutral-800">
                <div className="text-2xl sm:text-3xl font-black italic font-headline text-[#E63946]">
                  {st.value}
                </div>
                <div className="text-[10px] font-mono text-neutral-400 font-bold uppercase mt-1">
                  {st.label}
                </div>
                {st.unit && (
                  <div className="text-[10px] text-neutral-500 font-mono">{st.unit}</div>
                )}
              </div>
            ))}
          </div>

          {/* Embedded Sample Reel Videos in 9:16 layout */}
          {caseStudy.sampleReels && caseStudy.sampleReels.length > 0 && (
            <div>
              <h3 className="text-xs font-mono font-bold tracking-widest text-neutral-400 uppercase mb-4">
                EMBEDDED DELIVERED REELS
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {caseStudy.sampleReels.map((reel, rIdx) => (
                  <div
                    key={rIdx}
                    className="bg-[#0D0D0F] rounded-2xl overflow-hidden border border-neutral-800 p-3"
                  >
                    <div className="relative aspect-[9/14] rounded-xl overflow-hidden bg-black mb-3">
                      <video
                        controls
                        playsInline
                        poster={reel.posterUrl}
                        className="w-full h-full object-cover"
                      >
                        <source src={reel.videoUrl} type="video/mp4" />
                      </video>
                    </div>
                    <div className="text-sm font-bold text-white font-headline">
                      {reel.title}
                    </div>
                    <div className="text-xs text-neutral-400 font-mono mt-0.5">
                      {reel.caption}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Full Narrative Breakdown */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono font-bold tracking-widest text-[#E63946] uppercase">
              THE EXECUTION BREAKDOWN
            </h3>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
              {caseStudy.summary}
            </p>
            {caseStudy.fullStory.map((storyP, pIdx) => (
              <p
                key={pIdx}
                className="text-xs sm:text-sm text-neutral-400 leading-relaxed"
              >
                {storyP}
              </p>
            ))}
          </div>

          {/* Deliverables Checklist */}
          <div className="bg-[#0D0D0F] p-6 rounded-2xl border border-neutral-800 space-y-3">
            <h4 className="text-xs font-mono font-bold tracking-widest text-white uppercase">
              DELIVERABLES INCLUDED
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-300">
              {caseStudy.deliverables.map((del, dIdx) => (
                <div key={dIdx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{del}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial Quote if present */}
          {caseStudy.testimonial && (
            <div className="relative bg-gradient-to-r from-[#B5161B]/20 to-transparent p-6 rounded-2xl border border-[#B5161B]/40">
              <Quote className="w-8 h-8 text-[#E63946] mb-2 opacity-60" />
              <blockquote className="text-base sm:text-lg italic font-headline text-white mb-2">
                &ldquo;{caseStudy.testimonial.quote}&rdquo;
              </blockquote>
              <div className="text-xs font-mono text-neutral-400">
                <span className="font-bold text-white">{caseStudy.testimonial.author}</span> ·{" "}
                {caseStudy.testimonial.designation}
              </div>
            </div>
          )}

          {/* Footer Modal CTA */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-neutral-800">
            <div>
              <div className="text-sm font-bold text-white font-headline">
                Planning a similar scale event in Pune?
              </div>
              <div className="text-xs text-neutral-400 font-mono">
                Get a tailored multi-crew deployment plan in under 2 hours.
              </div>
            </div>

            <button
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#E63946] hover:bg-[#b5161b] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition"
            >
              <span>Book For Your Event</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
