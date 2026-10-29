"use client";

import React, { useState } from "react";
import { siteContent } from "@/src/content/siteContent";
import { ChevronDown } from "lucide-react";

export default function FaqAccordion() {
  const content = siteContent.faq;
  const [openId, setOpenId] = useState<string | null>("faq-turnaround");

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-24 sm:py-32 bg-[#0D0D0F] text-white border-t border-neutral-900 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 section-label">
            <span className="w-2 h-2 rounded-full bg-[#E63946]" />
            <span>{content.sectionLabel}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black italic tracking-tight font-headline text-white leading-[1.08]">
            {content.headline}
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 font-medium">
            Everything you need to know about our instant field production workflow.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {content.items.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className="bg-[#141418] border border-neutral-800 rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 group"
                >
                  <span className="text-base sm:text-lg font-bold font-headline text-white group-hover:text-[#E63946] transition-colors">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-neutral-900 border border-neutral-700 text-white flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-[#E63946] border-[#E63946]" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-xs sm:text-sm text-neutral-300 leading-relaxed space-y-3 border-t border-neutral-800/60 pt-4">
                    <p>{item.answer}</p>
                    {item.ownerTodo && (
                      <div className="text-[11px] font-mono text-neutral-500 bg-black/40 p-2 rounded border border-neutral-800">
                        {item.ownerTodo}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
