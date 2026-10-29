"use client";

import React, { useState, useEffect } from "react";
import { X, Send, MessageCircle, Calendar, MapPin, Film, CheckCircle2 } from "lucide-react";
import { siteContent } from "@/src/content/siteContent";

interface BookCrewModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTier?: string;
}

export default function BookCrewModal({
  isOpen,
  onClose,
  initialTier = "Single Event",
}: BookCrewModalProps) {
  const [tier, setTier] = useState(initialTier);
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [venue, setVenue] = useState("");
  const [reelCount, setReelCount] = useState("4 to 6 Reels (Single Event)");
  const [clientPhone, setClientPhone] = useState("");
  const [clientName, setClientName] = useState("");
  const [brief, setBrief] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialTier) {
      setTier(initialTier);
    }
  }, [initialTier]);

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

  if (!isOpen) return null;

  const buildBriefText = () => {
    return (
      `*NEW CREW BOOKING INQUIRY — REELS IN MINUTES*\n\n` +
      `👤 *Name:* ${clientName || "Not specified"}\n` +
      `📞 *Phone:* ${clientPhone || "Not specified"}\n` +
      `🎪 *Event:* ${eventName || "Not specified"}\n` +
      `📅 *Date:* ${eventDate || "Flexible / TBD"}\n` +
      `📍 *Venue/City:* ${venue || "Pune"}\n` +
      `📦 *Package:* ${tier}\n` +
      `🎬 *Reel Count:* ${reelCount}\n` +
      `📝 *Brief:* ${brief || "Standard on-site 10-15 min turnaround coverage required."}\n\n` +
      `_Sent via reelsinminutes.com website booking desk_`
    );
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = buildBriefText();
    const waUrl = `https://wa.me/${siteContent.meta.whatsappNumber}?text=${encodeURIComponent(text)}`;
    
    // Also trigger mailto in background
    const mailto = `mailto:${siteContent.meta.email}?subject=${encodeURIComponent(
      `[Crew Booking] ${eventName || "Event Inquiry"} - ${eventDate || "TBD"}`
    )}&body=${encodeURIComponent(text)}`;

    window.open(waUrl, "_blank");
    
    // Attempt mailto trigger
    try {
      const a = document.createElement("a");
      a.href = mailto;
      a.style.display = "none";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch {
      // safe fallback
    }

    setIsSubmitted(true);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl bg-[#141418] border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden my-8"
      >
        {/* Modal Header */}
        <div className="relative bg-gradient-to-r from-[#B5161B] to-[#E63946] px-6 py-5 text-white flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2.5 h-2.5 rounded-full bg-white animate-rec-pulse" />
              <span className="text-[10px] font-mono tracking-widest uppercase font-bold text-white/90">
                LIVE DISPATCH DESK · PUNE
              </span>
            </div>
            <h2 id="booking-modal-title" className="text-xl sm:text-2xl font-black italic tracking-tight font-headline">
              BOOK THE CREW
            </h2>
            <p className="text-xs text-white/80 font-medium">
              We shoot, edit, and post on site. Turnaround: 10–15 min.
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close booking modal"
            className="w-9 h-9 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSubmitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/40">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold font-headline text-white">
              Inquiry Dispatched!
            </h3>
            <p className="text-sm text-neutral-300 max-w-md mx-auto">
              Your brief has been forwarded to our field director on WhatsApp ({siteContent.meta.phonePrimary}) and emailed to {siteContent.meta.email}.
            </p>
            <p className="text-xs text-neutral-400 font-mono">
              ⚡ Typical response time: under 15 minutes during business hours.
            </p>
            <div className="pt-4">
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white text-sm font-semibold transition"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleWhatsAppSubmit} className="p-6 space-y-5 text-sm">
            {/* Tier Selector */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                Select Package Tier
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {siteContent.packages.tiers.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => {
                      setTier(t.name);
                      if (t.id === "single-event") setReelCount("4 to 6 Reels (Single Event)");
                      if (t.id === "multi-day-desk") setReelCount("8 to 12 Reels per day");
                      if (t.id === "multi-event-command") setReelCount("Custom Multi-Venue Volume");
                    }}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      tier === t.name
                        ? "bg-[#E63946]/15 border-[#E63946] text-white"
                        : "bg-[#0D0D0F] border-neutral-800 text-neutral-400 hover:border-neutral-700"
                    }`}
                  >
                    <div className="font-bold text-sm text-white font-headline">{t.name}</div>
                    <div className="text-[11px] text-neutral-400 mt-0.5">{t.turnaround}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Event Name & Date */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                  Event Name / Brand *
                </label>
                <div className="relative">
                  <Film className="absolute left-3 top-2.5 w-4 h-4 text-neutral-500" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Navratri Fest / Tech Offsite / Varmala"
                    value={eventName}
                    onChange={(e) => setEventName(e.target.value)}
                    className="w-full bg-[#0D0D0F] border border-neutral-800 rounded-lg pl-9 pr-3 py-2 text-white placeholder-neutral-600 focus:outline-none focus:border-[#E63946] transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                  Event Date(s) *
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-2.5 w-4 h-4 text-neutral-500" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. 15th Nov 2026 or 9 Days"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    className="w-full bg-[#0D0D0F] border border-neutral-800 rounded-lg pl-9 pr-3 py-2 text-white placeholder-neutral-600 focus:outline-none focus:border-[#E63946] transition"
                  />
                </div>
              </div>
            </div>

            {/* Location & Estimated Reel Count */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                  Venue / Location in Pune *
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-2.5 w-4 h-4 text-neutral-500" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. D Y Patil Akurdi / JW Marriott / MIDC"
                    value={venue}
                    onChange={(e) => setVenue(e.target.value)}
                    className="w-full bg-[#0D0D0F] border border-neutral-800 rounded-lg pl-9 pr-3 py-2 text-white placeholder-neutral-600 focus:outline-none focus:border-[#E63946] transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                  Target Reel Count
                </label>
                <select
                  value={reelCount}
                  onChange={(e) => setReelCount(e.target.value)}
                  className="w-full bg-[#0D0D0F] border border-neutral-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#E63946] transition"
                >
                  <option value="3 to 5 Reels (Highlight Burst)">3 to 5 Reels (Highlight Burst)</option>
                  <option value="6 to 8 Reels (Full Night)">6 to 8 Reels (Full Night)</option>
                  <option value="10 to 16 Reels (Multi-Day Expo/Fest)">10 to 16 Reels (Multi-Day Expo/Fest)</option>
                  <option value="Custom Multi-Venue Volume">Custom Multi-Venue Volume (5 simultaneous events)</option>
                </select>
              </div>
            </div>

            {/* Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                  Your Name / Organizer
                </label>
                <input
                  type="text"
                  placeholder="e.g. Rahul Patil"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full bg-[#0D0D0F] border border-neutral-800 rounded-lg px-3 py-2 text-white placeholder-neutral-600 focus:outline-none focus:border-[#E63946] transition"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                  WhatsApp Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +91 98765 43210"
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  className="w-full bg-[#0D0D0F] border border-neutral-800 rounded-lg px-3 py-2 text-white placeholder-neutral-600 focus:outline-none focus:border-[#E63946] transition"
                />
              </div>
            </div>

            {/* Brief / Special Requests */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                Event Brief / Requirements (Drone, VIPs, Timings)
              </label>
              <textarea
                rows={2}
                placeholder="Tell us what you want captured and any specific timeline..."
                value={brief}
                onChange={(e) => setBrief(e.target.value)}
                className="w-full bg-[#0D0D0F] border border-neutral-800 rounded-lg px-3 py-2 text-white placeholder-neutral-600 focus:outline-none focus:border-[#E63946] transition"
              />
            </div>

            {/* Submit Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-black font-black uppercase tracking-wider text-xs transition duration-200 shadow-lg shadow-emerald-950"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Send via WhatsApp (+91 97665 25043)</span>
              </button>

              <button
                type="submit"
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#E63946] hover:bg-[#b5161b] text-white font-bold text-xs uppercase tracking-wider transition duration-200"
              >
                <Send className="w-4 h-4" />
                <span>Submit & Email</span>
              </button>
            </div>

            <p className="text-[11px] text-neutral-500 text-center font-mono">
              Also notifies <span className="text-neutral-300">{siteContent.meta.email}</span>. No spam, immediate quote.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
