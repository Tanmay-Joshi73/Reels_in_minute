# REELS IN MINUTES — Production Marketing Website

> **"Your reel is live before you leave."**  
> Pune's first instant video content service. We shoot, edit and post on site, delivering finished 4K vertical reels within 10 to 15 minutes while the event is still running.  
> *A sister brand of Reddy Arts Media LLP (Film and media production since 2003).*

---

## 🚀 Overview & Brand System

- **Brand:** Reels in Minutes (Reddy Arts Media LLP)
- **Tagline:** *"Your reel is live before you leave."*
- **SLA Promise:** 10–15 minutes on-site turnaround
- **Founders:** Nakul Reddy & Sameer Phalak
- **Parent Studio:** Raj Reddy & Nikhil Reddy (Reddy Arts Media LLP, est. 2003)
- **Primary Color Palette:**
  - Near-black `#0D0D0F`
  - Deep Red `#B5161B`
  - Bright Red `#E63946`
  - Warm Off-White `#F5F2ED`
  - White `#FFFFFF`
- **Typography:** Montserrat (800/900 italic) for headlines, Inter for body, mono for technical and section badges (`01 · WHO WE ARE`).

---

## ⚡ Unique Signature Features

1. **REC Clock Hero**: Tilted vertical 9:16 phone frame playing a looping vertical reel, pulsing red REC dot, and real-time live-counting `REC 00:00:00` timer. Floating badge: *"Reel posted · 14 min after the moment"*.
2. **"Moment to Feed" Scroll Race**: Sticky section with a 15-minute stopwatch. As the user scrolls or scrubs, 4 checkpoints light up: *Shoot (0:00) → Edit (4:00) → Render (9:00) → Post (12:00) → LIVE (15:00)*.
3. **Reel Wall**: Masonry grid of 9:16 vertical reels with category filter chips (*All, Events, Drone, Corporate, Industrial, Wedding, Documentary, Promotional*). Videos autoplay muted on hover and open into a fullscreen TikTok-style vertical swipe viewer with sound and playback controls.
4. **Live Ticker**: Slim marquee banner above the navbar displaying real-time field dispatch updates (editable in the content file).
5. **Count-Up Numbers**: Animated counters on the "Two months in" red stats strip (*340+ reels, 19M+ views, 1M+ likes, 6,000+ followers*) and case studies.
6. **Book the Crew Form / Drawer**: Pre-fills a WhatsApp message to `+91 97665 25043` with event details and date, and emails the brief to `reelsinminutespune@gmail.com`.
7. **Cinema Details**:
   - Camera clapper / slate page-load intro (<2 seconds, skippable with single click or `Esc`, with sound effect and `prefers-reduced-motion` compliance).
   - Custom red REC-dot cursor with trailing halo on desktop.
   - Subtle film-grain CSS overlay.
   - Scannable Instagram QR code pointing to `@reels_in_minutes`.

---

## 📂 Project Structure

```
reels_in_minute/
├── app/
│   ├── layout.tsx              # SEO metadata, Google Fonts, JSON-LD schema, global overlays
│   ├── globals.css             # Tailwind v4, brand tokens, film grain, animations
│   ├── page.tsx                # Homepage assembling all 14 sections in required order
│   ├── robots.ts               # Robots.txt generator for SEO crawlers
│   ├── sitemap.ts              # Dynamic sitemap including case study routes
│   └── case-studies/[slug]/
│       └── page.tsx            # Dedicated SSR case study routes (e.g. Sivru Fab, Jugnu Drone Show)
├── src/
│   ├── content/
│   │   └── siteContent.ts      # 🌟 SINGLE EDITABLE CONTENT FILE (all copy, stats, links & videos)
│   └── components/
│       ├── Navbar.tsx          # Sticky navbar with logo, links, and booking trigger
│       ├── LiveTicker.tsx      # Top breaking marquee ticker
│       ├── HeroRecClock.tsx    # Signature REC Clock hero with tilted phone frame
│       ├── StatsStrip.tsx      # Red "Two months in" animated stats strip
│       ├── WhoWeAre.tsx        # Editorial section with large 10-15 min promise block
│       ├── HowItWorksRace.tsx  # 15-minute stopwatch scroll race & steps
│       ├── WhatWeMake.tsx      # 8 service cards with video hover previews
│       ├── BuiltForIndustry.tsx# 8 industry cards + 4-column promise row
│       ├── ReelWall.tsx        # Filterable vertical masonry reel wall
│       ├── ReelModalViewer.tsx # Fullscreen TikTok-style swipe reel player with audio
│       ├── SelectedWork.tsx    # Featured Navratri case study, 4 cards & team photo
│       ├── CaseStudyDetailModal.tsx # In-depth case study modal viewer
│       ├── TrustedBy.tsx       # 3x4 partner logo grid with grayscale-to-white hover
│       ├── ParentCompany.tsx   # 23 years of Reddy Arts Media LLP heritage & leadership
│       ├── Packages.tsx        # 3 non-priced tiers with "Request a quote" buttons
│       ├── FaqAccordion.tsx    # Accessible accordion with owner confirmation notes
│       ├── ContactCta.tsx      # Red transition band, phone, WhatsApp & Instagram QR code
│       ├── Footer.tsx          # Dual branding logos & legal disclaimer
│       ├── BookCrewModal.tsx   # Interactive booking modal (WhatsApp + email dispatch)
│       ├── ClapperIntro.tsx    # Camera slate page-load animation
│       ├── CustomCursor.tsx    # Desktop red REC-dot cursor
│       ├── FilmGrain.tsx       # Subtle CSS film-grain overlay
│       └── WhatsAppFloatingButton.tsx # Quick floating WhatsApp chat button
├── public/
│   ├── images/
│   │   ├── hero-phone-reel.png # Transparent phone mock reel extracted from PDF
│   │   ├── team-stage-akurdi.jpg # Real team photo on stage at D Y Patil Akurdi
│   │   ├── reddy-arts-media-history.jpg # Reddy Arts Media LLP film production history
│   │   ├── partner-*.png       # 12 extracted partner logos with alpha transparency
│   │   ├── qr/instagram-qr.png # Real scannable QR code for @reels_in_minutes
│   │   └── reels/*-poster.jpg  # 9:16 vertical poster previews for all reels
│   └── videos/
│       ├── hero-reel.mp4       # 9:16 vertical concert stage highlight reel
│       ├── garba-night.mp4     # 9:16 vertical Navratri Garba 8,000+ crowd reel
│       ├── drone-dagdusheth.mp4# 9:16 vertical Jugnu drone light show reel
│       ├── pune-metro.mp4      # 9:16 vertical Pune Metro transit reel
│       ├── industrial-plant.mp4# 9:16 vertical MIDC manufacturing robot line reel
│       ├── corporate-launch.mp4# 9:16 vertical tech summit & awards reel
│       ├── wedding-ceremony.mp4# 9:16 vertical royal Varmala ceremony reel
│       └── college-fest.mp4    # 9:16 vertical Indus Fiesta campus concert reel
```

---

## 🛠️ Local Setup & Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Validate production build:**
   ```bash
   npm run build
   ```

---

## ☁️ Deployment Instructions (Vercel)

This project is built using Next.js (App Router) + TypeScript + Tailwind CSS and is 100% ready for one-click deployment on **Vercel**:

1. Push this repository to GitHub / GitLab / Bitbucket.
2. Sign in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import the `reels_in_minute` repository.
4. Framework Preset will automatically detect **Next.js**.
5. Click **Deploy**. Vercel will build and assign your production URL (e.g. `reelsinminutes.com`).

---

## 📝 How to Update Content (Single File Guide)

All copy, stats, phone numbers, client rosters, live ticker lines, and video links are located in:
**`src/content/siteContent.ts`**

- **To add/change a reel:** Update the `siteContent.reelWall.reels` array with new MP4 URLs, posters, titles, and metrics.
- **To update the live ticker:** Edit `siteContent.liveTicker` array.
- **To update contact info:** Edit `siteContent.meta` or `siteContent.contact`.

---

## 📌 Assumptions & Owner TODOs

The following points should be reviewed and confirmed by the business owner:

1. **Drone Airspace Clearance Lead Times (`FaqAccordion.tsx`):**
   - *Current assumption:* Standard DGCA compliance with direct venue permissions.
   - *TODO:* Confirm if red/yellow civic zones in Pune require a mandatory 7-day advance permit notice.
2. **Outstation Travel Policy (`FaqAccordion.tsx`):**
   - *Current assumption:* Pune, PCMC, Chakan, and Hinjewadi have zero travel fees. Outstation travels (Mumbai, Nashik, Kolhapur) include travel + stay allowance.
   - *TODO:* Owner to confirm exact travel billing policy.
3. **Advance Booking Deposit (`FaqAccordion.tsx`):**
   - *Current assumption:* 50% advance booking deposit required to lock crew calendar dates.
   - *TODO:* Owner to verify standard deposit percentage.
4. **Analytics IDs (`app/layout.tsx`):**
   - Placeholders are present for Google Analytics 4 (`G-XXXXXXXXXX`) and Meta Pixel (`XXXXXXXXXX`). Replace with active production measurement IDs once available.
