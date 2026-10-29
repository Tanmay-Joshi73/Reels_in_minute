"use client";

import React from "react";
import { siteContent } from "@/src/content/siteContent";

export default function TrustedBy() {
  const content = siteContent.trustedBy;

  return (
    <section id="clients" className="py-24 sm:py-32 bg-[#0D0D0F] text-white border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
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

        {/* 3x4 Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {content.logos.map((logo, idx) => (
            <div
              key={idx}
              className="group bg-[#141418] border border-neutral-800/80 hover:border-[#E63946]/50 rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center min-h-[130px] sm:min-h-[150px] transition-all duration-300 hover:shadow-[0_10px_30px_rgba(230,57,70,0.1)] relative"
            >
              {/* Partner Logo with Grayscale to White / Colored hover */}
              <div className="relative w-full h-16 flex items-center justify-center">
                <img
                  src={logo.image}
                  alt={logo.alt}
                  onError={(e) => {
                    // Fallback to text if missing
                    e.currentTarget.style.display = "none";
                    const fallback = e.currentTarget.nextElementSibling;
                    if (fallback) fallback.classList.remove("hidden");
                  }}
                  className="max-h-12 max-w-[85%] object-contain filter grayscale brightness-90 contrast-125 opacity-70 group-hover:grayscale-0 group-hover:brightness-110 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-105"
                />
                {/* Text Placeholder Fallback */}
                <span className="hidden text-center text-xs sm:text-sm font-bold font-headline uppercase tracking-wider text-neutral-300 group-hover:text-white">
                  {logo.name}
                </span>
              </div>

              {/* Subtle hover label */}
              <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                {logo.name}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom Assurance Note */}
        <div className="mt-12 text-center text-xs font-mono text-neutral-500">
          From Pune Municipal corporations and police protocols to college fests and industrial MIDC safety floors.
        </div>

      </div>
    </section>
  );
}
