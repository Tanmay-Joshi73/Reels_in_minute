"use client";

import React from "react";
import Link from "next/link";
import { siteContent } from "@/src/content/siteContent";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#070709] text-white border-t border-neutral-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-neutral-800">
          
          {/* Brand Info & Dual Logos */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-6">
              {/* Reels in Minutes Logo */}
              <div className="bg-white text-black px-3 py-1.5 rounded-sm shadow-md flex flex-col justify-center leading-none border border-white">
                <span className="text-xs font-black italic tracking-tighter uppercase font-headline">
                  REELS
                </span>
                <span className="text-[10px] font-black tracking-normal uppercase font-headline">
                  IN MINUTES
                </span>
              </div>

              <span className="text-neutral-600 font-mono text-sm">×</span>

              {/* Reddy Arts Media Logo */}
              <div className="h-9 flex items-center">
                <img
                  src="/images/logo-reddy-arts.png"
                  alt="Reddy Arts Media LLP Logo"
                  className="max-h-7 object-contain filter invert brightness-125"
                />
              </div>
            </div>

            <p className="text-xs sm:text-sm text-neutral-400 max-w-sm leading-relaxed">
              Pune&apos;s first instant video content agency. We shoot, cut, and post high-retention 4K vertical reels on site within 10 to 15 minutes while the event is still running.
            </p>

            <div className="text-xs font-mono text-neutral-400">
              <span className="text-[#E63946] font-bold">REELS IN MINUTES</span>, a Reddy Arts Media LLP brand.
              <br />
              Film and media production since 2003 · Pune, Maharashtra.
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold tracking-widest text-[#E63946] uppercase">
              NAVIGATION
            </h4>
            <ul className="space-y-2 text-xs font-medium text-neutral-300">
              <li>
                <a href="#work" className="hover:text-white transition">Reel Wall & Highlights</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition">How It Works & Race</a>
              </li>
              <li>
                <a href="#case-studies" className="hover:text-white transition">Selected Case Studies</a>
              </li>
              <li>
                <a href="#clients" className="hover:text-white transition">Trusted Partners</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition">About & Founders</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition">Book the Crew</a>
              </li>
            </ul>
          </div>

          {/* Production Specialties */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-bold tracking-widest text-[#E63946] uppercase">
              STUDIO DESK PUNE
            </h4>
            <div className="space-y-2 text-xs text-neutral-400 font-mono">
              <div>📍 Akurdi · Baner · Chakan MIDC · Pune Metro</div>
              <div>⚡ Standard SLA: 10–15 Minutes from Shutter to Feed</div>
              <div>📞 Dispatch: +91 97665 25043 / +91 81809 72669</div>
              <div>✉️ reelsinminutespune@gmail.com</div>
              <div className="pt-2 text-neutral-300">
                Instagram:{" "}
                <a
                  href={siteContent.contact.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E63946] hover:underline"
                >
                  @reels_in_minutes
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <div>
            © 2026 Reels in Minutes. All rights reserved. Sister brand of Reddy Arts Media LLP.
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top of page"
            className="flex items-center gap-1.5 hover:text-white transition text-xs font-mono text-neutral-400"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
