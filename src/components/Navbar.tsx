"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, MessageCircle } from "lucide-react";
import { siteContent } from "@/src/content/siteContent";
import LiveTicker from "./LiveTicker";

interface NavbarProps {
  onOpenBooking: (tier?: string) => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "Clients", href: "#clients" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full">
      <LiveTicker />

      <nav
        aria-label="Main navigation"
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "bg-[#0D0D0F]/90 backdrop-blur-md border-b border-neutral-800 py-3 shadow-xl"
            : "bg-transparent py-4 sm:py-5 border-b border-white/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            aria-label="Reels in Minutes Home"
            className="flex items-center gap-3 group"
          >
            {/* Signature Logo Box: white rectangle with black italic REELS above bold IN MINUTES */}
            <div className="bg-white text-black px-2.5 py-1 rounded-sm shadow-md flex flex-col justify-center leading-none border border-white/80 group-hover:scale-105 transition-transform duration-200">
              <span className="text-[11px] font-black italic tracking-tighter uppercase font-headline">
                REELS
              </span>
              <span className="text-[9px] font-black tracking-normal uppercase font-headline">
                IN MINUTES
              </span>
            </div>

            <div className="hidden sm:flex flex-col">
              <span className="text-xs font-mono tracking-widest text-neutral-400 font-semibold uppercase">
                PUNE INSTANT DESK
              </span>
              <span className="text-[10px] text-neutral-500 font-mono">
                REDDY ARTS MEDIA · 2003
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-7 text-xs font-semibold uppercase tracking-wider text-neutral-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-white transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#E63946] hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right CTAs */}
          <div className="flex items-center gap-3">
            {/* Quick WhatsApp Link for Desktop */}
            <a
              href={`https://wa.me/${siteContent.meta.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Direct WhatsApp Message"
              className="hidden lg:flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-neutral-300 hover:text-white border border-neutral-800 rounded-lg bg-neutral-900/50 hover:bg-neutral-800 transition"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400/20" />
              <span>+91 97665 25043</span>
            </a>

            {/* Red "Book the Crew" Button */}
            <button
              onClick={() => onOpenBooking()}
              className="relative group overflow-hidden px-4 sm:px-5 py-2.5 rounded-lg bg-[#E63946] hover:bg-[#b5161b] text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-[0_4px_18px_rgba(230,57,70,0.4)] hover:shadow-[0_6px_22px_rgba(230,57,70,0.6)] flex items-center gap-1.5"
            >
              <span className="w-2 h-2 rounded-full bg-white animate-rec-pulse" />
              <span>Book the Crew</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="md:hidden p-2 text-neutral-300 hover:text-white rounded-lg border border-neutral-800"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0D0D0F]/95 backdrop-blur-xl border-b border-neutral-800 px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col space-y-3 text-sm font-semibold uppercase tracking-wider text-neutral-300">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 border-b border-neutral-800/60 hover:text-[#E63946] transition flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-neutral-600 text-xs">→</span>
                </a>
              ))}
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-lg bg-[#E63946] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-white animate-rec-pulse" />
                <span>Book the Crew Now</span>
              </button>

              <a
                href={`https://wa.me/${siteContent.meta.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs font-semibold flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp: +91 97665 25043</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
