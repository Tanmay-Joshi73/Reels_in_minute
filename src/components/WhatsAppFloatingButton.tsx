"use client";

import React, { useState } from "react";
import { MessageCircle } from "lucide-react";
import { siteContent } from "@/src/content/siteContent";

export default function WhatsAppFloatingButton() {
  const [isHovered, setIsHovered] = useState(false);

  const whatsappUrl = `https://wa.me/${siteContent.meta.whatsappNumber}?text=${encodeURIComponent(
    "Hi Reels in Minutes team! I want to check crew availability and get a quote for our event in Pune."
  )}`;

  return (
    <aside aria-label="Quick WhatsApp Contact" className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip on hover */}
      <div
        className={`hidden sm:flex items-center gap-2 bg-[#141418] text-white text-xs font-medium px-3.5 py-2 rounded-full border border-neutral-700 shadow-xl transition-all duration-200 ${
          isHovered
            ? "opacity-100 translate-x-0 pointer-events-auto"
            : "opacity-0 translate-x-3 pointer-events-none"
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span>Chat on WhatsApp · 10 min response</span>
      </div>

      {/* Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Chat with Reels in Minutes on WhatsApp"
        className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_10px_25px_rgba(37,211,102,0.4)] hover:shadow-[0_12px_30px_rgba(37,211,102,0.6)] hover:scale-105 active:scale-95 transition-all duration-200"
      >
        <MessageCircle className="w-7 h-7 fill-white text-transparent" />

        {/* Pulsing ping ring */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-[#0D0D0F]" />
        </span>
      </a>
    </aside>
  );
}
