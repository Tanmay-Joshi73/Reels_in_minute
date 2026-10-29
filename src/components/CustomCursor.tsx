"use client";

import React, { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Check if device supports touch
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Track clickable elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      if (
        target.closest("button") ||
        target.closest("a") ||
        target.closest("input") ||
        target.closest("select") ||
        target.closest("textarea") ||
        target.closest("[data-cursor-hover]")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isVisible]);

  if (isTouch || !isVisible) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 pointer-events-none z-[99999] transition-transform duration-75 ease-out will-change-transform"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      }}
    >
      {/* Outer Halo */}
      <div
        className={`-translate-x-1/2 -translate-y-1/2 rounded-full border border-[#E63946] transition-all duration-200 ${
          isHovered
            ? "w-10 h-10 bg-[#E63946]/15 scale-125 border-white"
            : "w-6 h-6 bg-transparent scale-100"
        }`}
      />
      {/* Inner REC Dot */}
      <div
        className={`absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-150 ${
          isHovered
            ? "w-2.5 h-2.5 bg-white shadow-[0_0_8px_#E63946]"
            : "w-2 h-2 bg-[#E63946] shadow-[0_0_6px_#E63946]"
        }`}
      />
      {/* Tiny REC label on hover */}
      {isHovered && (
        <span className="absolute left-3 top-[-10px] text-[9px] font-mono font-bold tracking-widest text-[#E63946] bg-[#0D0D0F]/90 px-1 py-0.5 rounded border border-[#E63946]/30 uppercase select-none">
          REC
        </span>
      )}
    </div>
  );
}
