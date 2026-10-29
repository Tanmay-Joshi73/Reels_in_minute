"use client";

import React, { useState } from "react";
import Navbar from "@/src/components/Navbar";
import HeroRecClock from "@/src/components/HeroRecClock";
import StatsStrip from "@/src/components/StatsStrip";
import WhoWeAre from "@/src/components/WhoWeAre";
import HowItWorksRace from "@/src/components/HowItWorksRace";
import WhatWeMake from "@/src/components/WhatWeMake";
import BuiltForIndustry from "@/src/components/BuiltForIndustry";
import ReelWall from "@/src/components/ReelWall";
import SelectedWork from "@/src/components/SelectedWork";
import TrustedBy from "@/src/components/TrustedBy";
import ParentCompany from "@/src/components/ParentCompany";
import Packages from "@/src/components/Packages";
import FaqAccordion from "@/src/components/FaqAccordion";
import ContactCta from "@/src/components/ContactCta";
import Footer from "@/src/components/Footer";
import BookCrewModal from "@/src/components/BookCrewModal";
import ReelModalViewer from "@/src/components/ReelModalViewer";
import { siteContent, VideoReel } from "@/src/content/siteContent";

export default function Home() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState("Single Event");

  // Single reel preview modal viewer for industry section
  const [singleReelViewerOpen, setSingleReelViewerOpen] = useState(false);
  const [singleReelList, setSingleReelList] = useState<VideoReel[]>([]);

  const handleOpenBooking = (tier?: string) => {
    if (tier) setSelectedTier(tier);
    setBookingModalOpen(true);
  };

  const handleOpenSingleReel = (videoUrl: string, title: string, location: string) => {
    const tempReel: VideoReel = {
      id: "preview-reel",
      title,
      category: "Events",
      location,
      turnaround: "10-15 min SLA",
      views: "640K",
      likes: "48K",
      videoUrl,
      posterUrl: "/images/reels/hero-reel-poster.jpg",
      description: `Sample vertical 9:16 reel demonstration for ${title} in Pune.`,
    };
    setSingleReelList([tempReel]);
    setSingleReelViewerOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0D0D0F] text-[#F5F2ED] flex flex-col selection:bg-[#E63946] selection:text-white">
      
      {/* 1. Navbar & Live Ticker */}
      <Navbar onOpenBooking={handleOpenBooking} />

      <main className="flex-1">
        {/* 2. Hero: REC Clock Hero */}
        <HeroRecClock onOpenBooking={() => handleOpenBooking("Single Event")} />

        {/* 3. Stats Strip: "Two months in" (Red background) */}
        <StatsStrip />

        {/* 4. Who We Are: Editorial, 10-15 min promise block, facts */}
        <WhoWeAre />

        {/* 5. How It Works: 4 steps & "Moment to Feed" scroll race with 15-minute stopwatch */}
        <HowItWorksRace />

        {/* 6. What We Make: 8 service cards with hover video preview */}
        <WhatWeMake onOpenBooking={handleOpenBooking} />

        {/* 7. Built for Every Industry: 8 cards + 4-column promise row */}
        <BuiltForIndustry
          onOpenBooking={handleOpenBooking}
          onOpenReelModal={handleOpenSingleReel}
        />

        {/* Reel Wall: Masonry grid of vertical reels + swipe viewer with sound */}
        <ReelWall />

        {/* 8. Selected Work: Sivru Fab Navratri case study + 4 cards + team photo slot */}
        <SelectedWork onOpenBooking={() => handleOpenBooking("Multi-Day Reel Desk")} />

        {/* 9. Trusted By: 3x4 logo grid with grayscale-to-white hover */}
        <TrustedBy />

        {/* 10. Parent Company: 23 years of Reddy Arts Media LLP behind every reel */}
        <ParentCompany />

        {/* 11. Packages: Rates on request. 3 tiers */}
        <Packages onSelectTier={handleOpenBooking} />

        {/* 12. FAQ: Accordion with owner verification TODO comments */}
        <FaqAccordion />

        {/* 13. Contact CTA: Red band to dark, direct phones, email, Instagram QR code */}
        <ContactCta onOpenBooking={() => handleOpenBooking("Single Event")} />
      </main>

      {/* 14. Footer: Both logos, legal brand disclaimer, navigation */}
      <Footer />

      {/* Interactive Booking Modal / WhatsApp Dispatch Drawer */}
      <BookCrewModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialTier={selectedTier}
      />

      {/* Single Reel Modal Viewer for industry previews */}
      <ReelModalViewer
        reels={singleReelList}
        initialIndex={0}
        isOpen={singleReelViewerOpen}
        onClose={() => setSingleReelViewerOpen(false)}
      />
    </div>
  );
}
