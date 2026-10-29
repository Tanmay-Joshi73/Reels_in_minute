"use client";

import React from "react";
import { siteContent } from "@/src/content/siteContent";
import { Phone, Mail, Globe, MapPin, ArrowRight, MessageCircle } from "lucide-react";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

interface ContactCtaProps {
  onOpenBooking: () => void;
}

export default function ContactCta({ onOpenBooking }: ContactCtaProps) {
  const content = siteContent.contact;

  return (
    <section id="contact" className="relative">
      
      {/* 1. Red Impact Transition Band */}
      <div className="bg-gradient-to-r from-[#B5161B] via-[#D1282D] to-[#E63946] py-14 sm:py-20 text-white shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-[11px] font-mono tracking-widest font-bold text-white/80 uppercase">
              {content.sectionLabel}
            </span>
            <h2 className="text-3xl sm:text-5xl font-black italic tracking-tight font-headline text-white max-w-2xl leading-[1.08]">
              {content.headline}
            </h2>
            <p className="text-sm sm:text-base text-white/90 max-w-xl font-medium">
              {content.subCopy}
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-5 rounded-2xl bg-black hover:bg-neutral-900 text-white font-black italic text-sm uppercase tracking-wider transition-all duration-200 shadow-2xl hover:scale-105 active:scale-95 flex items-center justify-center gap-3 shrink-0 font-headline"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#E63946] animate-rec-pulse" />
            <span>Book the Crew</span>
            <ArrowRight className="w-4 h-4 text-[#E63946]" />
          </button>
        </div>
      </div>

      {/* 2. Dark Contact Details & QR Code Section */}
      <div className="bg-[#070709] text-white py-20 sm:py-28 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Direct Phone, WhatsApp, Email & Address Details */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className="text-xs font-mono font-bold tracking-widest text-[#E63946] uppercase mb-2 block">
                  DIRECT CONTACT CHANNELS
                </span>
                <h3 className="text-2xl sm:text-4xl font-black italic tracking-tight font-headline text-white">
                  Send us your dates. We confirm crew within 2 hours.
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phone & WhatsApp Primary */}
                <a
                  href={`https://wa.me/${siteContent.meta.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#141418] border border-neutral-800 hover:border-[#25D366] p-5 rounded-2xl transition duration-200 group"
                >
                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-bold uppercase mb-1">
                    <MessageCircle className="w-4 h-4 fill-emerald-400" />
                    <span>Phone & WhatsApp</span>
                  </div>
                  <div className="text-lg font-bold font-headline text-white group-hover:text-emerald-400 transition-colors">
                    +91 97665 25043
                  </div>
                  <div className="text-xs text-neutral-500 font-mono mt-1">
                    Nakul Reddy · Field Desk
                  </div>
                </a>

                {/* Secondary Phone */}
                <a
                  href="tel:+918180972669"
                  className="bg-[#141418] border border-neutral-800 hover:border-[#E63946] p-5 rounded-2xl transition duration-200 group"
                >
                  <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 font-bold uppercase mb-1">
                    <Phone className="w-4 h-4 text-[#E63946]" />
                    <span>Alternate Phone</span>
                  </div>
                  <div className="text-lg font-bold font-headline text-white group-hover:text-[#E63946] transition-colors">
                    +91 81809 72669
                  </div>
                  <div className="text-xs text-neutral-500 font-mono mt-1">
                    Sameer Phalak · Co-Founder
                  </div>
                </a>

                {/* Email Address */}
                <a
                  href={`mailto:${content.email.address}`}
                  className="bg-[#141418] border border-neutral-800 hover:border-[#E63946] p-5 rounded-2xl transition duration-200 group sm:col-span-2"
                >
                  <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 font-bold uppercase mb-1">
                    <Mail className="w-4 h-4 text-[#E63946]" />
                    <span>Email ({content.email.note})</span>
                  </div>
                  <div className="text-base sm:text-lg font-bold font-mono text-white group-hover:text-[#E63946] transition-colors break-all">
                    {content.email.address}
                  </div>
                </a>
              </div>

              {/* Location & Instagram tags */}
              <div className="flex flex-wrap items-center gap-6 pt-2 text-xs font-mono text-neutral-400 border-t border-neutral-800/80">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#E63946]" />
                  <span>{content.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-[#E63946]" />
                  <span>{content.website}</span>
                </div>
                <a
                  href={content.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition"
                >
                  <InstagramIcon className="w-4 h-4 text-[#E63946]" />
                  <span>{content.instagram.handle}</span>
                </a>
              </div>
            </div>

            {/* Right Column: Instagram QR Code Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="bg-[#141418] border-2 border-neutral-800 hover:border-[#E63946] p-8 sm:p-10 rounded-3xl text-center space-y-6 max-w-sm shadow-2xl transition-all duration-300">
                
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-[#E63946] text-xs font-mono font-bold uppercase">
                  <InstagramIcon className="w-3.5 h-3.5" />
                  <span>@reels_in_minutes</span>
                </div>

                {/* Real Scannable Instagram QR Code */}
                <div className="w-48 h-48 mx-auto p-3 bg-white rounded-2xl shadow-xl flex items-center justify-center">
                  <img
                    src={content.instagram.qrImage}
                    alt="Scan Instagram QR Code for @reels_in_minutes"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="space-y-2">
                  <p className="text-xs sm:text-sm text-neutral-300 font-medium leading-relaxed">
                    {content.instagram.qrText}
                  </p>
                  <a
                    href={content.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#E63946] hover:underline uppercase pt-1"
                  >
                    <span>Open on Instagram</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
