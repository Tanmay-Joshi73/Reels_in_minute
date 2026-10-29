"use client";

import React from "react";
import { siteContent } from "@/src/content/siteContent";
import { Check, ArrowRight, Sparkles } from "lucide-react";

interface PackagesProps {
  onSelectTier: (tierName: string) => void;
}

export default function Packages({ onSelectTier }: PackagesProps) {
  const content = siteContent.packages;

  return (
    <section className="py-24 sm:py-32 bg-[#0D0D0F] text-white relative border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 section-label">
            <span className="w-2 h-2 rounded-full bg-[#E63946]" />
            <span>{content.sectionLabel}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black italic tracking-tight font-headline text-white leading-[1.08]">
            {content.headline}
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 font-medium">
            {content.subCopy}
          </p>
        </div>

        {/* 3 Tier Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {content.tiers.map((tier) => {
            const isFeatured = tier.id === "single-event";

            return (
              <div
                key={tier.id}
                className={`relative rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 ${
                  isFeatured
                    ? "bg-[#16161D] border-2 border-[#E63946] shadow-[0_20px_50px_rgba(230,57,70,0.18)] scale-[1.02]"
                    : "bg-[#141418] border border-neutral-800 hover:border-neutral-700 shadow-xl"
                }`}
              >
                {/* Badge Top */}
                {tier.badge && (
                  <div className="absolute -top-3.5 left-8 bg-[#E63946] text-white text-[10px] font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>{tier.badge}</span>
                  </div>
                )}

                <div>
                  {/* Tier Title */}
                  <h3 className="text-2xl sm:text-3xl font-black italic tracking-tight font-headline text-white mt-2 mb-1">
                    {tier.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 font-normal mb-6">
                    {tier.tagline}
                  </p>

                  {/* Turnaround Pill */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/50 border border-neutral-800 text-xs font-mono text-[#E63946] font-bold mb-8">
                    <span className="w-2 h-2 rounded-full bg-[#E63946] animate-rec-pulse" />
                    <span>{tier.turnaround}</span>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3 pt-4 border-t border-neutral-800/80 mb-8">
                    {tier.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300">
                        <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[2.5]" />
                        </div>
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Request a Quote CTA */}
                <div>
                  <button
                    onClick={() => onSelectTier(tier.name)}
                    className={`w-full py-4 rounded-xl font-black italic text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition duration-200 font-headline ${
                      isFeatured
                        ? "bg-[#E63946] hover:bg-[#b5161b] text-white shadow-lg shadow-red-950"
                        : "bg-neutral-900 hover:bg-neutral-800 text-white border border-neutral-700"
                    }`}
                  >
                    <span>{tier.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-[10px] text-neutral-500 text-center font-mono mt-2">
                    Custom rates sent within 2 hours of request
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
