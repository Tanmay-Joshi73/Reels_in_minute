import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { siteContent } from "@/src/content/siteContent";
import { ArrowLeft, Calendar, MapPin, Users, Film, CheckCircle2, Quote, MessageCircle } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(siteContent.caseStudiesData).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const cs = siteContent.caseStudiesData[slug];
  if (!cs) return { title: "Case Study Not Found" };

  return {
    title: `${cs.title} | Reels in Minutes Case Study`,
    description: cs.summary,
    openGraph: {
      title: `${cs.title} | Reels in Minutes`,
      description: cs.summary,
      images: [cs.sampleReels[0]?.posterUrl || "/images/hero-phone-reel-rgb.jpg"],
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const caseStudy = siteContent.caseStudiesData[slug];

  if (!caseStudy) {
    notFound();
  }

  const whatsappUrl = `https://wa.me/${siteContent.meta.whatsappNumber}?text=${encodeURIComponent(
    `Hi Reels in Minutes, I saw the ${caseStudy.title} case study and want to enquire about similar coverage for my event.`
  )}`;

  return (
    <main className="min-h-screen bg-[#0D0D0F] text-white pt-12 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <Link
          href="/#case-studies"
          className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to All Work & Case Studies</span>
        </Link>

        {/* Case Badge */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#E63946] animate-rec-pulse" />
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#E63946]">
            {caseStudy.badge}
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-5xl font-black italic tracking-tight font-headline text-white mb-4 leading-tight">
          {caseStudy.title}
        </h1>

        <p className="text-base sm:text-xl text-neutral-300 font-normal leading-relaxed mb-8">
          {caseStudy.subtitle}
        </p>

        {/* Meta Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-y border-neutral-800 text-xs font-mono mb-12">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#E63946]" />
            <span>{caseStudy.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-[#E63946]" />
            <span>{caseStudy.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-[#E63946]" />
            <span>{caseStudy.crewCount}</span>
          </div>
          <div className="flex items-center gap-2">
            <Film className="w-4 h-4 text-[#E63946]" />
            <span>{caseStudy.reelsDelivered}</span>
          </div>
        </div>

        {/* Stat Tiles Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14">
          {caseStudy.stats.map((st, i) => (
            <div key={i} className="bg-[#141418] p-5 rounded-2xl border border-neutral-800">
              <div className="text-3xl sm:text-4xl font-black italic font-headline text-[#E63946]">
                {st.value}
              </div>
              <div className="text-[11px] font-mono text-neutral-400 font-bold uppercase mt-1">
                {st.label}
              </div>
              {st.unit && (
                <div className="text-[10px] text-neutral-500 font-mono">{st.unit}</div>
              )}
            </div>
          ))}
        </div>

        {/* Embedded Video Reels */}
        {caseStudy.sampleReels && caseStudy.sampleReels.length > 0 && (
          <div className="mb-14">
            <h2 className="text-xs font-mono font-bold tracking-widest text-neutral-400 uppercase mb-6">
              EMBEDDED DELIVERED REELS (9:16 VERTICAL FORMAT)
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {caseStudy.sampleReels.map((reel, rIdx) => (
                <div
                  key={rIdx}
                  className="bg-[#141418] rounded-3xl overflow-hidden border border-neutral-800 p-4 shadow-xl"
                >
                  <div className="relative aspect-[9/15] rounded-2xl overflow-hidden bg-black mb-3">
                    <video
                      controls
                      playsInline
                      poster={reel.posterUrl}
                      className="w-full h-full object-cover"
                    >
                      <source src={reel.videoUrl} type="video/mp4" />
                    </video>
                  </div>
                  <div className="text-base font-bold text-white font-headline">
                    {reel.title}
                  </div>
                  <div className="text-xs text-neutral-400 font-mono mt-1">
                    {reel.caption}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Story Section */}
        <div className="space-y-6 text-sm sm:text-base text-neutral-300 leading-relaxed mb-14">
          <h2 className="text-xs font-mono font-bold tracking-widest text-[#E63946] uppercase">
            FULL OPERATION DEBRIEF
          </h2>
          <p className="font-medium text-white text-lg leading-relaxed">
            {caseStudy.summary}
          </p>
          {caseStudy.fullStory.map((storyP, idx) => (
            <p key={idx} className="text-neutral-400">
              {storyP}
            </p>
          ))}
        </div>

        {/* Deliverables Checklist */}
        <div className="bg-[#141418] p-8 rounded-3xl border border-neutral-800 space-y-4 mb-14">
          <h3 className="text-xs font-mono font-bold tracking-widest text-white uppercase">
            SCOPE OF DELIVERABLES
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-neutral-300">
            {caseStudy.deliverables.map((del, dIdx) => (
              <div key={dIdx} className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>{del}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial Quote */}
        {caseStudy.testimonial && (
          <div className="relative bg-gradient-to-r from-[#B5161B]/20 via-[#141418] to-transparent p-8 rounded-3xl border border-[#B5161B]/40 mb-14">
            <Quote className="w-8 h-8 text-[#E63946] mb-3 opacity-70" />
            <blockquote className="text-lg sm:text-xl italic font-headline text-white mb-3">
              &ldquo;{caseStudy.testimonial.quote}&rdquo;
            </blockquote>
            <div className="text-xs font-mono text-neutral-400">
              <span className="font-bold text-white">{caseStudy.testimonial.author}</span> ·{" "}
              {caseStudy.testimonial.designation}
            </div>
          </div>
        )}

        {/* Bottom Booking Action */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-[#B5161B] to-[#E63946] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-black italic font-headline text-white">
              Need instant coverage for your event?
            </h3>
            <p className="text-xs sm:text-sm text-white/90">
              We shoot, edit, and post on site in Pune with our 10–15 min SLA.
            </p>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-black hover:bg-neutral-900 text-white font-black italic text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400 fill-emerald-400" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

      </div>
    </main>
  );
}
