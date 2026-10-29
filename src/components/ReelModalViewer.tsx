"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { X, Volume2, VolumeX, Play, Pause, ChevronUp, ChevronDown, Heart, Share2, Sparkles } from "lucide-react";
import { VideoReel } from "@/src/content/siteContent";

interface ReelModalViewerProps {
  reels: VideoReel[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

export default function ReelModalViewer({
  reels,
  initialIndex,
  isOpen,
  onClose,
}: ReelModalViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [liked, setLiked] = useState<Record<string, boolean>>({});
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % reels.length);
  }, [reels.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + reels.length) % reels.length);
  }, [reels.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowDown" || e.key === "j") handleNext();
      if (e.key === "ArrowUp" || e.key === "k") handlePrev();
      if (e.key === " " || e.key === "k") {
        e.preventDefault();
        togglePlay();
      }
      if (e.key === "m") setIsMuted((prev) => !prev);
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
  }, [isOpen, onClose, handleNext, handlePrev]);

  // Autoplay with sound on reel change
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {
        // Fallback to muted if browser blocks unmuted autoplay
        if (videoRef.current) {
          videoRef.current.muted = true;
          setIsMuted(true);
          videoRef.current.play().catch(() => {});
        }
      });
      setIsPlaying(true);
    }
  }, [currentIndex]);

  if (!isOpen || reels.length === 0) return null;

  const currentReel = reels[currentIndex];

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const toggleLike = () => {
    setLiked((prev) => ({ ...prev, [currentReel.id]: !prev[currentReel.id] }));
  };

  const handleShare = () => {
    const shareText = `Check out this reel by Reels in Minutes Pune: ${currentReel.title} (${currentReel.location})`;
    if (navigator.share) {
      navigator.share({
        title: currentReel.title,
        text: shareText,
        url: window.location.href,
      }).catch(() => {});
    } else {
      window.open(
        `https://wa.me/?text=${encodeURIComponent(shareText + " " + window.location.href)}`,
        "_blank"
      );
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[100000] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-0 sm:p-4 select-none"
    >
      {/* Close button top right */}
      <button
        onClick={onClose}
        aria-label="Close fullscreen reel viewer"
        className="absolute top-4 right-4 z-50 w-11 h-11 rounded-full bg-neutral-900/80 hover:bg-[#E63946] border border-white/20 text-white flex items-center justify-center transition-colors"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Swipe Next/Prev arrows on desktop */}
      <div className="hidden lg:flex flex-col gap-3 absolute right-8 top-1/2 -translate-y-1/2 z-40">
        <button
          onClick={handlePrev}
          aria-label="Previous reel"
          className="w-12 h-12 rounded-full bg-neutral-900/80 hover:bg-[#E63946] border border-white/15 text-white flex items-center justify-center transition"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
        <button
          onClick={handleNext}
          aria-label="Next reel"
          className="w-12 h-12 rounded-full bg-neutral-900/80 hover:bg-[#E63946] border border-white/15 text-white flex items-center justify-center transition"
        >
          <ChevronDown className="w-6 h-6" />
        </button>
      </div>

      {/* Vertical 9:16 Frame Player Container */}
      <div className="relative w-full sm:w-[380px] md:w-[420px] h-full sm:h-[92vh] max-h-[880px] bg-black sm:rounded-[36px] overflow-hidden sm:border sm:border-neutral-800 shadow-[0_0_80px_rgba(0,0,0,0.9)] flex flex-col justify-between">
        
        {/* Active Reel Video */}
        <video
          ref={videoRef}
          key={currentReel.videoUrl}
          src={currentReel.videoUrl}
          poster={currentReel.posterUrl}
          playsInline
          loop
          muted={isMuted}
          onClick={togglePlay}
          className="absolute inset-0 w-full h-full object-cover cursor-pointer"
        />

        {/* Play/Pause Center Indicator */}
        {!isPlaying && (
          <div
            onClick={togglePlay}
            className="absolute inset-0 z-20 flex items-center justify-center bg-black/40 cursor-pointer"
          >
            <div className="w-16 h-16 rounded-full bg-[#E63946]/90 text-white flex items-center justify-center shadow-2xl scale-110 transition-transform">
              <Play className="w-8 h-8 fill-white ml-1" />
            </div>
          </div>
        )}

        {/* Top Header Controls */}
        <div className="relative z-30 pt-6 sm:pt-4 px-4 flex items-center justify-between text-white bg-gradient-to-b from-black/80 via-black/30 to-transparent">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E63946] animate-rec-pulse" />
            <span className="font-mono text-xs font-bold tracking-widest uppercase">
              REC {currentReel.turnaround}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsMuted(!isMuted)}
              aria-label={isMuted ? "Unmute sound" : "Mute sound"}
              className="p-2 rounded-full bg-black/50 hover:bg-black/80 border border-white/20 text-white transition"
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
            </button>
          </div>
        </div>

        {/* Right Floating Social Action Bar */}
        <div className="absolute right-3.5 bottom-28 z-30 flex flex-col items-center gap-5 text-white">
          {/* Like */}
          <button
            onClick={toggleLike}
            aria-label="Like reel"
            className="flex flex-col items-center gap-1 group"
          >
            <div
              className={`w-11 h-11 rounded-full flex items-center justify-center transition-all ${
                liked[currentReel.id]
                  ? "bg-[#E63946] text-white scale-110"
                  : "bg-black/60 text-white border border-white/20 group-hover:bg-[#E63946]"
              }`}
            >
              <Heart
                className={`w-5 h-5 ${
                  liked[currentReel.id] ? "fill-white" : ""
                }`}
              />
            </div>
            <span className="text-[10px] font-mono font-bold">
              {currentReel.likes || "74K"}
            </span>
          </button>

          {/* Share */}
          <button
            onClick={handleShare}
            aria-label="Share reel"
            className="flex flex-col items-center gap-1 group"
          >
            <div className="w-11 h-11 rounded-full bg-black/60 text-white border border-white/20 flex items-center justify-center group-hover:bg-emerald-600 transition">
              <Share2 className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-mono font-bold">Share</span>
          </button>
        </div>

        {/* Bottom Details & Captions */}
        <div className="relative z-30 p-5 bg-gradient-to-t from-black/95 via-black/70 to-transparent text-white space-y-2">
          {/* Category Chip */}
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono uppercase tracking-wider font-bold bg-[#E63946] px-2.5 py-0.5 rounded text-white">
              {currentReel.category}
            </span>
            <span className="text-xs text-neutral-300 font-mono">
              📍 {currentReel.location}
            </span>
          </div>

          <h3 className="text-lg sm:text-xl font-black italic tracking-tight font-headline">
            {currentReel.title}
          </h3>

          <p className="text-xs text-neutral-300 leading-relaxed font-normal line-clamp-3">
            {currentReel.description}
          </p>

          <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-neutral-400 border-t border-white/10">
            <span>Reel {currentIndex + 1} of {reels.length}</span>
            <span className="text-white font-semibold flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#E63946]" />
              Posted Live on Site
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
