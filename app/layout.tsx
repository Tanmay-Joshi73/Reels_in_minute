import type { Metadata, Viewport } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import FilmGrain from "@/src/components/FilmGrain";
import CustomCursor from "@/src/components/CustomCursor";
import ClapperIntro from "@/src/components/ClapperIntro";
import WhatsAppFloatingButton from "@/src/components/WhatsAppFloatingButton";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-montserrat",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0D0D0F",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "REELS IN MINUTES | Your Reel Is Live Before You Leave | Pune Instant Video Crew",
  description:
    "Pune's first instant content service. We shoot, edit and post on site, and hand over finished reels within 10 to 15 minutes while your event is running. A sister brand of Reddy Arts Media LLP (est. 2003).",
  keywords: [
    "instant reels Pune",
    "event videographer Pune",
    "same-day event reels",
    "Garba night videography Pune",
    "drone reels Pune",
    "corporate reels Pune",
    "industrial plant videography MIDC",
    "wedding ceremony reels Pune",
    "Reels in Minutes",
    "Reddy Arts Media LLP",
    "Nakul Reddy",
    "Sameer Phalak",
  ],
  authors: [{ name: "Reels in Minutes" }, { name: "Reddy Arts Media LLP" }],
  creator: "Reels in Minutes",
  metadataBase: new URL("https://reelsinminutes.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "REELS IN MINUTES | Instant Video Content Agency · Pune",
    description:
      "We shoot, edit and post on site, delivering finished 4K vertical reels within 10–15 minutes while the event is still running.",
    url: "https://reelsinminutes.com",
    siteName: "Reels in Minutes",
    images: [
      {
        url: "/images/hero-phone-reel-rgb.jpg",
        width: 1200,
        height: 630,
        alt: "Reels in Minutes · Your reel is live before you leave",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "REELS IN MINUTES | Your Reel Is Live Before You Leave",
    description: "Instant on-site shooting, editing & posting in 10-15 minutes across Pune.",
    images: ["/images/hero-phone-reel-rgb.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://reelsinminutes.com/#business",
        "name": "Reels in Minutes",
        "legalName": "Reels in Minutes (Reddy Arts Media LLP)",
        "url": "https://reelsinminutes.com",
        "telephone": "+919766525043",
        "email": "reelsinminutespune@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "addressCountry": "IN",
        },
        "description":
          "Instant on-site video production agency in Pune delivering 4K vertical reels within 10-15 minutes during live events.",
        "founder": [
          { "@type": "Person", "name": "Nakul Reddy" },
          { "@type": "Person", "name": "Sameer Phalak" },
        ],
        "parentOrganization": {
          "@type": "Organization",
          "name": "Reddy Arts Media LLP",
          "foundingDate": "2003",
        },
        "sameAs": ["https://instagram.com/reels_in_minutes"],
      },
      {
        "@type": "VideoObject",
        "name": "Live Event Reel Turnaround in 14 Minutes",
        "description":
          "Watch the on-site shooting, live editing and publishing pipeline of Reels in Minutes at Pune events.",
        "thumbnailUrl": "https://reelsinminutes.com/images/reels/hero-reel-poster.jpg",
        "uploadDate": "2026-10-01T20:00:00+05:30",
        "contentUrl": "https://reelsinminutes.com/videos/hero-reel.mp4",
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${inter.variable} scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google Analytics 4 Placeholder */}
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" /> */}
        {/* Meta Pixel Placeholder */}
      </head>
      <body className="min-h-screen bg-[#0D0D0F] text-[#F5F2ED] relative overflow-x-hidden selection:bg-[#E63946] selection:text-white">
        <FilmGrain />
        <CustomCursor />
        <ClapperIntro />
        {children}
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
