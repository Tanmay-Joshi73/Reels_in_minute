"use client";

import React from "react";
import { siteContent } from "@/src/content/siteContent";
import { Award, Film, Building2, GraduationCap } from "lucide-react";

export default function ParentCompany() {
  const content = siteContent.parentCompany;
  const categoryIcons = [GraduationCap, Building2, Award, Film];

  return (
    <section className="py-24 sm:py-32 bg-[#F5F2ED] text-[#0D0D0F] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase font-bold text-[#B5161B]">
            <span className="w-2 h-2 rounded-full bg-[#B5161B]" />
            <span>{content.sectionLabel}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black italic tracking-tight font-headline text-[#0D0D0F] leading-[1.08]">
            {content.headline}
          </h2>
          <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
            {content.subCopy}
          </p>
        </div>

        {/* 4 Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {content.stats.map((st, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-neutral-200/80 shadow-sm flex flex-col justify-between"
            >
              <div className="text-5xl sm:text-6xl font-black italic tracking-tight font-headline text-[#B5161B] mb-2">
                {st.value}
              </div>
              <div className="text-xs sm:text-sm text-neutral-800 font-medium leading-snug">
                {st.label}
              </div>
            </div>
          ))}
        </div>

        {/* Production Photo & Legacy Banner */}
        <div className="rounded-3xl overflow-hidden border border-neutral-300 shadow-xl mb-16 bg-neutral-900 text-white grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7 relative aspect-[16/10] sm:aspect-[16/9] w-full">
            <img
              src={content.photo.src}
              alt={content.photo.caption}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 z-10 text-xs font-mono text-white/90">
              📍 {content.photo.caption}
            </div>
          </div>

          <div className="lg:col-span-5 p-8 sm:p-10 space-y-4">
            <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#E63946]">
              {content.photo.sub}
            </span>
            <h3 className="text-2xl sm:text-3xl font-black italic font-headline text-white">
              Cinema pedigree meets mobile velocity.
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              Every vertical reel produced by Reels in Minutes inherits the color science, broadcast optics, and sound design refined over two decades of high-end film production by Reddy Arts Media LLP.
            </p>
            <div className="pt-2 text-xs font-mono text-neutral-400">
              ESTABLISHED 2003 · PUNE & SOUTH INDIA
            </div>
          </div>
        </div>

        {/* 4 Client Rosters by Sector */}
        <div className="mb-20">
          <h3 className="text-xs font-mono font-bold tracking-widest text-[#B5161B] uppercase mb-6">
            REDDY ARTS MEDIA · CLIENT ROSTERS ACROSS SECTORS
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.clientLists.map((cat, cIdx) => {
              const Icon = categoryIcons[cIdx] || Film;
              return (
                <div
                  key={cat.category}
                  className="bg-white rounded-2xl p-6 border border-neutral-200/80 shadow-sm space-y-4"
                >
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#0D0D0F] uppercase pb-3 border-b border-neutral-100">
                    <Icon className="w-4 h-4 text-[#B5161B]" />
                    <span>{cat.category}</span>
                  </div>

                  <ul className="space-y-2">
                    {cat.clients.map((client, i) => (
                      <li
                        key={i}
                        className="text-xs sm:text-sm text-neutral-700 font-medium flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B5161B]" />
                        <span>{client}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Leadership Profiles */}
        <div>
          <h3 className="text-xs font-mono font-bold tracking-widest text-[#B5161B] uppercase mb-6">
            STUDIO LEADERSHIP
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.leadership.map((leader, lIdx) => (
              <div
                key={lIdx}
                className="bg-white p-7 rounded-2xl border border-neutral-200 shadow-sm space-y-3"
              >
                <div>
                  <h4 className="text-xl font-black italic font-headline text-[#0D0D0F]">
                    {leader.name}
                  </h4>
                  <div className="text-[11px] font-mono font-bold text-[#B5161B] uppercase mt-0.5">
                    {leader.role}
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {leader.note}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
