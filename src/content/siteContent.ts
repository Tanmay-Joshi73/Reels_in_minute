/**
 * REELS IN MINUTES — Single Editable Content File
 * 
 * Edit any copy, stats, live ticker lines, client lists, FAQs,
 * packages, or video reel URLs directly in this file.
 */

export interface VideoReel {
  id: string;
  title: string;
  category: "Events" | "Drone" | "Corporate" | "Industrial" | "Wedding" | "Documentary" | "Promotional";
  location: string;
  turnaround: string;
  views?: string;
  likes?: string;
  videoUrl: string; // Vertical MP4 video URL (self-hosted or CDN/Instagram embed)
  posterUrl: string;
  description: string;
  featured?: boolean;
}

export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  badge: string;
  category: string;
  client: string;
  location: string;
  duration: string;
  date: string;
  crowd?: string;
  crewCount: string;
  reelsDelivered: string;
  summary: string;
  fullStory: string[];
  stats: { label: string; value: string; unit?: string }[];
  deliverables: string[];
  sampleReels: {
    title: string;
    videoUrl: string;
    posterUrl: string;
    caption: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    designation: string;
  };
}

export const siteContent = {
  meta: {
    siteName: "Reels in Minutes",
    legalName: "Reels in Minutes (A sister brand of Reddy Arts Media LLP)",
    tagline: "Your reel is live before you leave.",
    corePromise: "We shoot, edit and post on site, and hand over finished reels within 10 to 15 minutes, while the event is still running.",
    location: "Pune, Maharashtra, India",
    established: "August 2026",
    parentEst: "2003",
    siteUrl: "https://reelsinminutes.com",
    instagramHandle: "@reels_in_minutes",
    instagramUrl: "https://instagram.com/reels_in_minutes",
    phonePrimary: "+91 97665 25043",
    phoneSecondary: "+91 81809 72669",
    whatsappNumber: "919766525043",
    email: "reelsinminutespune@gmail.com",
  },

  // Live Ticker items shown at the top of the screen (editable)
  liveTicker: [
    { id: 1, text: "● LIVE NOW: Garba Night 6 · Akurdi, 3 reels posted today" },
    { id: 2, text: "⚡ SPEED RECORD: 11 min 42 sec from stage fireworks to client Instagram" },
    { id: 3, text: "📍 CURRENTLY ON GROUND: D Y Patil Indus Fiesta · 4 crews shooting" },
    { id: 4, text: "🔥 19M+ organic views across Pune events in under 60 days" },
    { id: 5, text: "🚁 DRONE DESK: Dagdusheth Halwai Ganpati Jugnu drone reel viral across MH" },
  ],

  // Hero Section
  hero: {
    sectionLabel: "00 · INSTANT VIDEO DESK",
    headlinePart1: "Your reel is live",
    headlineAccent: "before you leave.",
    subCopy:
      "Pune's first instant content service. We shoot, edit and post on site, and hand over finished reels within 10 to 15 minutes, while the event is still running.",
    ctaPrimary: "Book the Crew",
    ctaSecondary: "Watch Reels",
    recClockInitial: "REC 00:14:02",
    floatingPill: "Reel posted · 14 min after the moment",
    heroReel: {
      videoUrl: "/videos/hero-reel.mp4",
      posterUrl: "/images/reels/hero-reel-poster.jpg",
      caption: "Live from D Y Patil Akurdi Stage · Finished in 14 min",
    },
  },

  // Two Months In Stats Strip (Red background)
  statsStrip: {
    headline: "Two months in.",
    stats: [
      { id: "reels", value: 340, suffix: "+", label: "REELS PRODUCED" },
      { id: "views", value: 19, suffix: "M+", label: "REEL VIEWS" },
      { id: "likes", value: 1, suffix: "M+", label: "LIKES ACROSS THE HANDLE" },
      { id: "followers", value: 6000, suffix: "+", label: "ORGANIC INSTAGRAM FOLLOWERS" },
    ],
    note: "Every number here is organic. No paid promotion, just reels that people wanted to share while the event was still happening.",
    footnote: "Figures from the @reels_in_minutes Instagram handle, August to October 2026.",
  },

  // 01 · WHO WE ARE
  whoWeAre: {
    sectionLabel: "01 · WHO WE ARE",
    headline: "Shot, cut and posted while the event is still on.",
    paragraphs: [
      "Reels in Minutes launched in August 2026 as the instant content arm of Reddy Arts Media, a production house with more than two decades in film and media. We are a team of 10 to 15 people who shoot on site, edit on site and post on the spot.",
      "Most content reaches the feed days after the moment has passed. Ours goes out while people are still in the room, which is when they share it. We keep the quality the same at that speed and at volume, whether the brief is a factory floor, a festival ground or a wedding.",
    ],
    promiseBox: {
      time: "10–15",
      unit: "min",
      copy: "From the moment it happens to a finished reel in your hands. That is the promise in our name, and we keep it across events, corporate work, weddings, institutions and public bodies.",
    },
    facts: [
      { label: "LAUNCHED", value: "August 2026", sub: "Pune, Maharashtra" },
      { label: "CO-FOUNDERS", value: "Nakul Reddy & Sameer Phalak", sub: "Reddy Arts Media LLP" },
      { label: "CREW", value: "10 to 15 members", sub: "Shooters, editors, drone operators" },
    ],
  },

  // 02 · HOW IT WORKS & Moment to Feed Race
  howItWorks: {
    sectionLabel: "02 · HOW IT WORKS",
    headline: "The 15-minute stopwatch from shutter to feed.",
    subCopy: "A tightly coordinated pit crew at your venue. No delays, no waiting for next-week drives.",
    steps: [
      {
        number: "01",
        time: "0:00",
        title: "Shoot on site",
        description: "Cinema cameras, gimbals and drones, run by a crew sized to the event.",
        detail: "Our shooters capture raw high-speed 4K vertical footage. Wireless card-runners or high-speed field docks transfer data straight to the editing table in seconds.",
      },
      {
        number: "02",
        time: "4:00",
        title: "Edit on site",
        description: "Editors sit at the venue, cutting while the event runs.",
        detail: "Dedicated edit rigs inside our field desk cut the best moments in real time, matching music beats, pacing, and hook dynamics while the crowd is peaking.",
      },
      {
        number: "03",
        time: "9:00",
        title: "Render in high quality",
        description: "Colour, sound, captions and branding, finished for vertical screens.",
        detail: "Pro color grading, loud punchy audio mastering, kinetic subtitles, and sponsor logos are locked in for a clean 9:16 export.",
      },
      {
        number: "04",
        time: "12:00",
        title: "Post instantly",
        description: "Delivered to your team or posted straight to your handles.",
        detail: "Collaborator invites accepted, audio synced, and captions placed before the crowd leaves the arena or before the reception begins.",
      },
    ],
  },

  // 03 · WHAT WE MAKE (8 Services)
  whatWeMake: {
    sectionLabel: "03 · WHAT WE MAKE",
    headline: "One crew, every kind of reel.",
    subCopy: "Engineered specifically for short-form retention, high shareability, and immediate reach.",
    services: [
      {
        id: "event",
        number: "01",
        title: "Event reels",
        category: "Events",
        description: "Same-day highlights from fests, concerts, launches and celebrations.",
        videoUrl: "/videos/hero-reel.mp4",
        posterUrl: "/images/reels/hero-reel-poster.jpg",
      },
      {
        id: "promotional",
        number: "02",
        title: "Promotional reels",
        category: "Promotional",
        description: "Pre-event buzz, ticket pushes and lead generation campaigns.",
        videoUrl: "/videos/garba-night.mp4",
        posterUrl: "/images/reels/garba-night-poster.jpg",
      },
      {
        id: "drone",
        number: "03",
        title: "Drone reels",
        category: "Drone",
        description: "Aerial reveals of venues, crowds, plants and drone shows.",
        videoUrl: "/videos/drone-dagdusheth.mp4",
        posterUrl: "/images/reels/drone-dagdusheth-poster.jpg",
      },
      {
        id: "corporate",
        number: "04",
        title: "Corporate reels",
        category: "Corporate",
        description: "Launches, town halls, offsites, awards and leadership messages.",
        videoUrl: "/videos/corporate-launch.mp4",
        posterUrl: "/images/reels/corporate-launch-poster.jpg",
      },
      {
        id: "industrial",
        number: "05",
        title: "Industrial reels",
        category: "Industrial",
        description: "Plant walkthroughs, machine demos, safety days and inaugurations.",
        videoUrl: "/videos/industrial-plant.mp4",
        posterUrl: "/images/reels/industrial-plant-poster.jpg",
      },
      {
        id: "documentary",
        number: "06",
        title: "Documentary reels",
        category: "Documentary",
        description: "Short-form stories about people, process and purpose.",
        videoUrl: "/videos/pune-metro.mp4",
        posterUrl: "/images/reels/pune-metro-poster.jpg",
      },
      {
        id: "wedding",
        number: "07",
        title: "Wedding reels",
        category: "Wedding",
        description: "Ceremony reels delivered before the reception ends.",
        videoUrl: "/videos/wedding-ceremony.mp4",
        posterUrl: "/images/reels/wedding-ceremony-poster.jpg",
      },
      {
        id: "daily-desk",
        number: "08",
        title: "Daily reel desk",
        category: "Events",
        description: "A crew stationed at multi-day expos and festivals, posting every day.",
        videoUrl: "/videos/college-fest.mp4",
        posterUrl: "/images/reels/college-fest-poster.jpg",
      },
    ],
  },

  // 04 · BUILT FOR EVERY INDUSTRY
  builtForIndustry: {
    sectionLabel: "04 · BUILT FOR EVERY INDUSTRY",
    headline: "If it happens, it can be on your feed today.",
    subCopy: "From heavy manufacturing floors in MIDC to 10,000-person concert grounds.",
    industries: [
      {
        id: "midc",
        number: "01",
        title: "Industry & MIDC",
        description: "Plant walkthroughs, machine demos, safety drills, inaugurations and visitor days. Shot to floor safety and access rules.",
        sampleTag: "MIDC / Chakan / Bhosari",
        videoUrl: "/videos/industrial-plant.mp4",
        posterUrl: "/images/reels/industrial-plant-poster.jpg",
      },
      {
        id: "corporate",
        number: "02",
        title: "Corporate",
        description: "Launches, town halls, awards, offsites and leadership messages, cut for LinkedIn and Instagram on the same day.",
        sampleTag: "Townhalls & Summits",
        videoUrl: "/videos/corporate-launch.mp4",
        posterUrl: "/images/reels/corporate-launch-poster.jpg",
      },
      {
        id: "expos",
        number: "03",
        title: "Expos & exhibitions",
        description: "A daily reel desk on the floor: stall highlights, product demos, speaker clips and footfall, posted while the expo is open.",
        sampleTag: "Auto Cluster / PIECC",
        videoUrl: "/videos/college-fest.mp4",
        posterUrl: "/images/reels/college-fest-poster.jpg",
      },
      {
        id: "festivals",
        number: "04",
        title: "Events & festivals",
        description: "Concerts, Garba nights, Ganeshotsav, marathons and fests, with multiple crews and drones when the crowd runs into thousands.",
        sampleTag: "Navratri / Dagdusheth",
        videoUrl: "/videos/garba-night.mp4",
        posterUrl: "/images/reels/garba-night-poster.jpg",
      },
      {
        id: "institutions",
        number: "05",
        title: "Institutions",
        description: "Fests, convocations, alumni meets, admissions reels and incubation showcases.",
        sampleTag: "Universities & Campus",
        videoUrl: "/videos/college-fest.mp4",
        posterUrl: "/images/reels/college-fest-poster.jpg",
      },
      {
        id: "weddings",
        number: "06",
        title: "Weddings",
        description: "Same-day reels from the ceremony, ready to share before the guests leave.",
        sampleTag: "Ceremony to Reception",
        videoUrl: "/videos/wedding-ceremony.mp4",
        posterUrl: "/images/reels/wedding-ceremony-poster.jpg",
      },
      {
        id: "gov-ngo",
        number: "07",
        title: "Government & NGOs",
        description: "Public events, awareness campaigns and civic milestones, handled with protocol and a clean turnaround.",
        sampleTag: "Civic & Police Milestones",
        videoUrl: "/videos/pune-metro.mp4",
        posterUrl: "/images/reels/pune-metro-poster.jpg",
      },
      {
        id: "brands-startups",
        number: "08",
        title: "Brands & startups",
        description: "Product launches, store openings, founder stories and campaign series.",
        sampleTag: "D2C & Tech Brands",
        videoUrl: "/videos/hero-reel.mp4",
        posterUrl: "/images/reels/hero-reel-poster.jpg",
      },
    ],
    // Under them, 4-column promise row:
    promiseRow: [
      {
        title: "Speed with quality",
        description: "Finished in minutes, at the quality of a full production house.",
      },
      {
        title: "Volume at once",
        description: "Up to five events covered at the same time across Pune.",
      },
      {
        title: "One crew",
        description: "Shooting, editing and posting by one accountable team.",
      },
      {
        title: "23 years behind us",
        description: "Backed by Reddy Arts Media, in production since 2003.",
      },
    ],
  },

  // 05 · REEL WALL (Masonry Grid with Swipe Viewer)
  reelWall: {
    sectionLabel: "05 · REEL WALL",
    headline: "Live footage from real Pune events.",
    subCopy: "Hover on desktop or tap on mobile to preview muted. Click any reel to open in fullscreen swipe viewer with audio.",
    filters: [
      "All",
      "Events",
      "Drone",
      "Corporate",
      "Industrial",
      "Wedding",
      "Documentary",
      "Promotional",
    ],
    reels: [
      {
        id: "reel-1",
        title: "Garba Night 6 · Akurdi Ground",
        category: "Events",
        location: "D Y Patil Ground, Akurdi",
        turnaround: "12 min turnaround",
        views: "1.4M",
        likes: "92K",
        videoUrl: "/videos/garba-night.mp4",
        posterUrl: "/images/reels/garba-night-poster.jpg",
        description: "8,000+ dancers on ground. Shot at 10:15 PM, edited on site, live on Instagram at 10:27 PM.",
        featured: true,
      },
      {
        id: "reel-2",
        title: "Jugnu Drone Show · Dagdusheth Halwai",
        category: "Drone",
        location: "Ganeshotsav, Pune",
        turnaround: "14 min turnaround",
        views: "2.8M",
        likes: "180K",
        videoUrl: "/videos/drone-dagdusheth.mp4",
        posterUrl: "/images/reels/drone-dagdusheth-poster.jpg",
        description: "Overall media for the massive 500-drone aerial formation over Dagdusheth Ganpati during Ganeshotsav.",
        featured: true,
      },
      {
        id: "reel-3",
        title: "Pune Metro Interchange Milestone",
        category: "Documentary",
        location: "Civil Court Station, Pune",
        turnaround: "15 min turnaround",
        views: "640K",
        likes: "45K",
        videoUrl: "/videos/pune-metro.mp4",
        posterUrl: "/images/reels/pune-metro-poster.jpg",
        description: "Ongoing civic partner capturing ridership milestones, underground escalators, and fast city connectivity.",
      },
      {
        id: "reel-4",
        title: "Chakan MIDC Robotic Line Walkthrough",
        category: "Industrial",
        location: "Chakan Industrial Zone, Pune",
        turnaround: "15 min turnaround",
        views: "310K",
        likes: "21K",
        videoUrl: "/videos/industrial-plant.mp4",
        posterUrl: "/images/reels/industrial-plant-poster.jpg",
        description: "Shot strictly to safety and PPE protocols. Cut on site with custom motion graphics for leadership review.",
      },
      {
        id: "reel-5",
        title: "Indus Fiesta Concert · Stage Fireworks",
        category: "Events",
        location: "D Y Patil University, Akurdi",
        turnaround: "11 min turnaround",
        views: "980K",
        likes: "74K",
        videoUrl: "/videos/hero-reel.mp4",
        posterUrl: "/images/reels/hero-reel-poster.jpg",
        description: "Celebrity performer entry and pyro explosion posted while the crowd was singing the chorus.",
      },
      {
        id: "reel-6",
        title: "Annual Tech Offsite & Leadership Keynote",
        category: "Corporate",
        location: "JW Marriott Senapati Bapat Rd",
        turnaround: "13 min turnaround",
        views: "220K",
        likes: "14K",
        videoUrl: "/videos/corporate-launch.mp4",
        posterUrl: "/images/reels/corporate-launch-poster.jpg",
        description: "Same-day cut optimized for LinkedIn and executive personal branding before the gala dinner.",
      },
      {
        id: "reel-7",
        title: "Royal Varmala Ceremony & Petal Shower",
        category: "Wedding",
        location: "Sunny's World, Pashan Sus, Pune",
        turnaround: "14 min turnaround",
        views: "890K",
        likes: "68K",
        videoUrl: "/videos/wedding-ceremony.mp4",
        posterUrl: "/images/reels/wedding-ceremony-poster.jpg",
        description: "Varmala ceremony reel ready to play on the big LED wall and shared on family WhatsApp groups before dinner.",
      },
      {
        id: "reel-8",
        title: "Sivru Fab Ticket Rush Promotional Reel",
        category: "Promotional",
        location: "Pune City",
        turnaround: "10 min turnaround",
        views: "1.1M",
        likes: "85K",
        videoUrl: "/videos/garba-night.mp4",
        posterUrl: "/images/reels/garba-night-poster.jpg",
        description: "Early-bird ticket phase reel that drove 12,000+ booking clicks in 72 hours across Pimpri-Chinchwad.",
      },
    ] as VideoReel[],
  },

  // 06 · SELECTED WORK
  selectedWork: {
    sectionLabel: "06 · SELECTED WORK",
    headline: "Proven at full scale.",
    subCopy: "From multi-night festival crowds to high-security civic projects.",
    featuredCase: {
      slug: "sivru-fab-navratri-2026",
      badge: "CASE FEATURE · NAVRATRI 2026",
      title: "Sivru Fab Corner, D Y Patil Ground, Akurdi",
      description:
        "We handled media for one of Pune’s biggest Garba nights for all nine days. That covered promotional reels before the event, lead generation for ticket sales, and full coverage every night, with reels out while the dancing was still going on.",
      stats: [
        { value: "9", label: "DAYS" },
        { value: "8,000+", label: "CROWD PER NIGHT" },
        { value: "10+", label: "CREW ON GROUND" },
        { value: "Live", label: "SAME-NIGHT REELS" },
      ],
      videoUrl: "/videos/garba-night.mp4",
      posterUrl: "/images/reels/garba-night-poster.jpg",
    },
    cards: [
      {
        slug: "jugnu-drone-show",
        badge: "FESTIVAL · DRONE SHOW",
        title: "Jugnu Drone Show",
        description: "Overall media for the drone show at Dagdusheth Halwai Ganpati during the Ganeshotsav festival.",
        videoUrl: "/videos/drone-dagdusheth.mp4",
        posterUrl: "/images/reels/drone-dagdusheth-poster.jpg",
      },
      {
        slug: "five-events-nine-nights",
        badge: "NAVRATRI · ACROSS PUNE",
        title: "Five events, nine nights",
        description: "Four to five Garba events covered at the same time across Pune, every night of Navratri.",
        videoUrl: "/videos/garba-night.mp4",
        posterUrl: "/images/reels/garba-night-poster.jpg",
      },
      {
        slug: "dy-patil-akurdi",
        badge: "INSTITUTION · AKURDI",
        title: "D Y Patil, Akurdi",
        description: "Media and marketing for Indus Fiesta, the Alumni Meet and Convocation at D Y Patil International University, with 16 reels across four days in October 2026.",
        videoUrl: "/videos/college-fest.mp4",
        posterUrl: "/images/reels/college-fest-poster.jpg",
      },
      {
        slug: "pune-metro",
        badge: "CIVIC · ONGOING",
        title: "Pune Metro",
        description: "An ongoing partner for regular reels on Pune’s metro, its riders and its milestones.",
        videoUrl: "/videos/pune-metro.mp4",
        posterUrl: "/images/reels/pune-metro-poster.jpg",
      },
    ],
    teamPhoto: {
      src: "/images/team-stage-akurdi.jpg",
      caption: "On stage at D Y Patil, Akurdi",
      description: "Our 10+ field crew after delivering 16 consecutive live reels during the 2026 convocation and fest.",
    },
  },

  // Case Studies Full Detail Data (for detail modal & /case-studies/[slug] routes)
  caseStudiesData: {
    "sivru-fab-navratri-2026": {
      slug: "sivru-fab-navratri-2026",
      title: "Sivru Fab Corner, D Y Patil Ground, Akurdi",
      subtitle: "Full 9-night media takeover, live reels on ground, and ticket sale lead generation.",
      badge: "FEATURED CASE · NAVRATRI 2026",
      category: "Festival & Garba",
      client: "Sivru Fab Corner & Event Management",
      location: "D Y Patil Ground, Akurdi, Pune",
      duration: "9 Consecutive Nights",
      date: "Navratri 2026",
      crowd: "8,000+ per night",
      crewCount: "10+ members on ground",
      reelsDelivered: "42 reels over 9 days",
      summary:
        "Handling one of Pune's largest Navratri celebrations meant zero room for post-production lag. We deployed a dual-station edit desk on site, 3 gimbal camera operators, 1 high-speed drone pilot, and an upload coordinator. Reels were posted every 45 minutes while thousands danced on the turf.",
      fullStory: [
        "Phase 1 (Pre-Event): Two weeks before Day 1, we produced 8 promotional high-energy teaser reels highlighting the sound setup, VIP lounge, and artist lineup. These reels drove organic ticket booking queries and helped sell out weekend passes.",
        "Phase 2 (On-Site Execution): Every evening from 7:00 PM to 12:30 AM, our field editors received memory cards within 3 minutes of standout moments (celebrity arrivals, maha aarti, best dancer circles). Each reel was graded, audio-synced, and delivered in under 12 minutes.",
        "Phase 3 (Reach & Retention): Attendees were finding themselves on the @reels_in_minutes and client Instagram handles while still at the venue. Tagging, story reshares, and engagement skyrocketed by 420% compared to previous years.",
      ],
      stats: [
        { label: "NIGHTS COVERED", value: "9", unit: "Days" },
        { label: "NIGHTLY FOOTFALL", value: "8,000+", unit: "Attendees" },
        { label: "CREW DEPLOYED", value: "10+", unit: "Specialists" },
        { label: "AVERAGE SPEED", value: "12", unit: "Minutes" },
        { label: "TOTAL ORGANIC VIEWS", value: "6.2M+", unit: "Across series" },
      ],
      deliverables: [
        "42 vertical 9:16 reels delivered on site",
        "8 pre-event promotional reels for ticket sales",
        "Nightly Drone aerial reveals of 8,000+ crowd",
        "Full collaborative posting to client Instagram handle",
      ],
      sampleReels: [
        {
          title: "Night 6 Highlight Reel",
          videoUrl: "/videos/garba-night.mp4",
          posterUrl: "/images/reels/garba-night-poster.jpg",
          caption: "Live from the arena floor · Delivered in 12 min",
        },
        {
          title: "Drone Maha Aarti Reveal",
          videoUrl: "/videos/drone-dagdusheth.mp4",
          posterUrl: "/images/reels/drone-dagdusheth-poster.jpg",
          caption: "Aerial view of 8,000 hands raised for Aarti",
        },
      ],
      testimonial: {
        quote: "Our crowd was watching the reels while standing on the dance floor. The speed completely changed how our event was perceived online.",
        author: "Event Director",
        designation: "Sivru Fab Corner, Pune",
      },
    },
    "jugnu-drone-show": {
      slug: "jugnu-drone-show",
      title: "Jugnu Drone Show · Dagdusheth Halwai Ganpati",
      subtitle: "Capturing 500 synchronized drones lighting up the Pune night sky for Ganeshotsav.",
      badge: "FESTIVAL · DRONE SHOW",
      category: "Aerial & Festival",
      client: "Jugnu Drone Light Show & Trust Committee",
      location: "Dagdusheth Halwai Ganpati, Pune",
      duration: "Ganeshotsav Festival",
      date: "September 2026",
      crowd: "50,000+ onlookers",
      crewCount: "6 members",
      reelsDelivered: "8 high-impact reels",
      summary:
        "The Jugnu drone show required micro-second sync between ground crowd reactions and aerial formations. Our camera operators positioned themselves at heritage vantage points across Old Pune, capturing the precise moments the sky illuminated.",
      fullStory: [
        "Covering a drone show requires multi-angle telephoto and ultra-wide tracking. Our team coordinated via two-way radios to capture the exact trigger of the Ganpati Trishul and Om sky formations.",
        "Within 14 minutes of the 12-minute show concluding, the first vertical reel was live on Instagram, reaching over 2.8 million organic viewers across Maharashtra within 24 hours.",
      ],
      stats: [
        { label: "DRONES IN SKY", value: "500", unit: "Synchronized" },
        { label: "VIEWS GENERATED", value: "2.8M+", unit: "Organic" },
        { label: "TURNAROUND TIME", value: "14", unit: "Minutes" },
      ],
      deliverables: ["8 aerial and ground hybrid reels", "Multi-angle 4K vertical exports", "Collaborative post launch"],
      sampleReels: [
        {
          title: "Dagdusheth Drone Formation",
          videoUrl: "/videos/drone-dagdusheth.mp4",
          posterUrl: "/images/reels/drone-dagdusheth-poster.jpg",
          caption: "Aerial reveal cut in 14 minutes",
        },
      ],
    },
    "five-events-nine-nights": {
      slug: "five-events-nine-nights",
      title: "Five Events, Nine Nights · Simultaneous Coverage",
      subtitle: "Proving volume at once across Pune during peak Navratri rush.",
      badge: "NAVRATRI · MULTI-CREW COMMAND",
      category: "Multi-Crew Command",
      client: "Multiple Event Organizers",
      location: "Akurdi, Kothrud, Baner, Hadapsar, Viman Nagar",
      duration: "9 Consecutive Nights",
      date: "October 2026",
      crowd: "25,000+ combined nightly",
      crewCount: "15 members across 5 units",
      reelsDelivered: "120+ reels across all venues",
      summary:
        "Demonstrated our signature 'Volume at once' capability. Five independent field units operated simultaneously across five Pune zones, each with dedicated editors uploading live reels to respective client accounts within 15 minutes.",
      fullStory: [
        "Managing 5 live crews simultaneously during Pune's biggest festival week required centralized asset routing and strict 15-minute SLA enforcement.",
        "Every crew maintained the same cinema-grade color science, sound mastering, and instant publishing cadence. No dropped reels, no postponed edits.",
      ],
      stats: [
        { label: "SIMULTANEOUS CREWS", value: "5", unit: "Units" },
        { label: "TOTAL REELS POSTED", value: "120+", unit: "In 9 nights" },
        { label: "ON-TIME SLA RATE", value: "98.5%", unit: "Under 15 min" },
      ],
      deliverables: ["5 parallel editing desks", "Daily end-of-night content packets", "Zero delay publishing"],
      sampleReels: [
        {
          title: "Multi-Venue Garba Highlights",
          videoUrl: "/videos/garba-night.mp4",
          posterUrl: "/images/reels/garba-night-poster.jpg",
          caption: "Parallel coverage across 5 Pune grounds",
        },
      ],
    },
    "dy-patil-akurdi": {
      slug: "dy-patil-akurdi",
      title: "D Y Patil, Akurdi · Indus Fiesta & Convocation",
      subtitle: "16 reels across four days for Indus Fiesta, Alumni Meet, and Convocation.",
      badge: "INSTITUTION · 4-DAY MARATHON",
      category: "Institutional & Campus",
      client: "D Y Patil International University & Educational Complex",
      location: "Akurdi Campus, Pune",
      duration: "4 Days",
      date: "October 2026",
      crowd: "6,000+ students and alumni",
      crewCount: "8 members",
      reelsDelivered: "16 reels across 4 days",
      summary:
        "Four consecutive days of non-stop campus milestones: formal academic convocation in the morning, alumni networking in the afternoon, and high-energy music fest at night. 16 polished reels were broadcast to the student community instantly.",
      fullStory: [
        "Campus events demand versatile storytelling: transitioning from dignified convocation hooding ceremonies with chancellors to electric concert pyro shows within hours.",
        "The D Y Patil team relied on our crew to post reels that students could share to their stories before leaving the auditorium or fest ground.",
      ],
      stats: [
        { label: "EVENT DAYS", value: "4", unit: "Days" },
        { label: "REELS PRODUCED", value: "16", unit: "Reels" },
        { label: "INSTITUTION PARTNERSHIP", value: "4th", unit: "Consecutive Year" },
      ],
      deliverables: ["16 high-resolution campus reels", "Alumni speech clips", "Fest night concert montage"],
      sampleReels: [
        {
          title: "Indus Fiesta Finale",
          videoUrl: "/videos/college-fest.mp4",
          posterUrl: "/images/reels/college-fest-poster.jpg",
          caption: "Live stage concert highlights",
        },
      ],
    },
    "pune-metro": {
      slug: "pune-metro",
      title: "Pune Metro · Civic Speed & Rider Stories",
      subtitle: "Ongoing partner capturing Pune's metro milestones, rider experiences, and connectivity.",
      badge: "CIVIC & TRANSIT · ONGOING",
      category: "Civic & Government",
      client: "Pune Mahametro (Maha Metro)",
      location: "Line 1 & Line 2 across Pune",
      duration: "Ongoing Partnership",
      date: "2026",
      crewCount: "4 members",
      reelsDelivered: "24+ milestone reels",
      summary:
        "Translating public infrastructure into relatable, aesthetically modern vertical reels for the youth of Pune. Highlighting underground architectural feats, speed, safety, and daily commuter stories.",
      fullStory: [
        "Government and civic bodies often struggle with modern social media pacing. Our reels for Pune Metro bring clean typography, crisp drone perspectives of the elevated viaducts, and relatable passenger testimonials.",
        "Turnaround speeds ensure inauguration rides and new route launches appear on feeds the same hour official ribbon-cuttings occur.",
      ],
      stats: [
        { label: "STATIONS COVERED", value: "18+", unit: "Stations" },
        { label: "ENGAGEMENT INCREASE", value: "+340%", unit: "On civic handle" },
        { label: "PARTNERSHIP DURATION", value: "Ongoing", unit: "Monthly desk" },
      ],
      deliverables: ["Station walk-throughs", "Underground architecture reveals", "Passenger quick-bites"],
      sampleReels: [
        {
          title: "Civil Court Underground Hub",
          videoUrl: "/videos/pune-metro.mp4",
          posterUrl: "/images/reels/pune-metro-poster.jpg",
          caption: "Interchange speed reel",
        },
      ],
    },
  } as Record<string, CaseStudy>,

  // 07 · TRUSTED BY (3x4 Partner Logo Grid)
  trustedBy: {
    sectionLabel: "07 · TRUSTED BY",
    headline: "Trusted in our first two months.",
    subCopy: "Manufacturers, institutions, public bodies, event houses and consumer brands across Pune.",
    logos: [
      { name: "Honda BigWing", image: "/images/partner-honda-bigwing.png", alt: "Honda BigWing Pune" },
      { name: "Pune Metro", image: "/images/partner-pune-metro.png", alt: "Pune Metro (Maha Metro)" },
      { name: "Maharashtra Police", image: "/images/partner-maharashtra-police.png", alt: "Maharashtra Police" },
      { name: "TEDx", image: "/images/partner-tedx.png", alt: "TEDx" },
      { name: "D Y Patil Educational Complex", image: "/images/partner-dypatil-complex.png", alt: "D Y Patil Educational Complex" },
      { name: "DY Patil Dnyansagar Incubation", image: "/images/partner-dypatil-incubation.png", alt: "DY Patil Dnyansagar Incubation" },
      { name: "Ramaastra Aerospace & Defence", image: "/images/partner-ramaastra.png", alt: "Ramaastra Aerospace & Defence" },
      { name: "Pravin Patil Productions", image: "/images/partner-pravin-patil.png", alt: "Pravin Patil Productions" },
      { name: "Iconic Events (BNK Group)", image: "/images/partner-iconic-events.png", alt: "Iconic Events BNK Group" },
      { name: "Dream Story Events", image: "/images/partner-dream-story.png", alt: "Dream Story Events" },
      { name: "Sivru Fab Corner", image: "/images/partner-sivru-fab.png", alt: "Sivru Fab Corner" },
      { name: "Stanvee", image: "/images/partner-stanvee.png", alt: "Stanvee" },
    ],
  },

  // 08 · PARENT COMPANY (Reddy Arts Media LLP)
  parentCompany: {
    sectionLabel: "08 · OUR PARENT COMPANY",
    headline: "Twenty three years of film, behind every reel.",
    subCopy:
      "Reddy Arts Media LLP began in 2003 with a single camera. It now works in three fields: education, industry, and government and civic life. Its camera teams, drone units and post-production studio stand behind every Reels in Minutes job.",
    stats: [
      { value: "23", label: "Years in weddings, South India and Maharashtra" },
      { value: "06", label: "Years of corporate and industrial films" },
      { value: "05", label: "Years of institutional and campus work" },
      { value: "04", label: "Consecutive years with D Y Patil, Akurdi" },
    ],
    photo: {
      src: "/images/reddy-arts-media-history.jpg",
      caption: "Reddy Arts Media LLP film production crew on location",
      sub: "Film & media production since 2003",
    },
    clientLists: [
      {
        category: "EDUCATION",
        clients: [
          "National Insurance Academy",
          "FLAME University",
          "NICMAR University",
          "D Y Patil Educational Complex",
          "VIBGYOR Group of Schools",
        ],
      },
      {
        category: "INDUSTRY",
        clients: [
          "Honda BigWing",
          "Hyundai Manufacturing Plant",
          "Canon Machineries",
          "Mungi Group",
        ],
      },
      {
        category: "GOVERNMENT & CIVIC",
        clients: [
          "Government of Maharashtra",
          "Pune Mahametro",
          "Maharashtra Police",
          "Election Commission",
          "Collector Offices, Pune & Nanded",
        ],
      },
      {
        category: "CONCERTS",
        clients: ["Honey Singh", "Mithoon", "Euphoria"],
      },
    ],
    leadership: [
      {
        name: "Raj Reddy",
        role: "FOUNDER, REDDY ARTS MEDIA",
        note: "Founded Reddy Arts Media LLP in 2003 with a single camera. Over 23 years of cinema-grade production across South India & Maharashtra.",
      },
      {
        name: "Nikhil Reddy",
        role: "CO-FOUNDER, REDDY ARTS MEDIA",
        note: "Leads technical infrastructure, high-end cinema units, drone systems, and multi-camera live broadcast setups.",
      },
      {
        name: "Nakul Reddy",
        role: "CO-FOUNDER, BOTH STUDIOS",
        note: "Pioneered Reels in Minutes to bridge the gap between heavy production craft and the speed of modern mobile feeds.",
      },
    ],
  },

  // 09 · PACKAGES ("Rates on request.")
  packages: {
    sectionLabel: "09 · PACKAGES",
    headline: "Rates on request.",
    subCopy: "Choose the deployment model that fits your event. Custom quotes tailored within 2 hours.",
    tiers: [
      {
        id: "single-event",
        name: "Single Event",
        tagline: "For conferences, concerts, ceremonies & launches",
        turnaround: "10–15 min per reel",
        features: [
          "1 Shooter + 1 On-Site Editor",
          "Up to 4–6 instant 9:16 reels delivered during event",
          "Live card handover / wireless field ingest",
          "Color graded, audio mastered with trending music & branding",
          "Collaborator post ready or direct raw file transfer",
          "Standard delivery: finished before event concludes",
        ],
        badge: "MOST POPULAR",
        ctaText: "Request a quote",
      },
      {
        id: "multi-day-desk",
        name: "Multi-Day Reel Desk",
        tagline: "Stationed on-site for expos, fests & sports tournaments",
        turnaround: "Continuous daily delivery",
        features: [
          "Dedicated field edit desk set up at venue",
          "2 Shooters + 1 Dedicated On-Site Editor",
          "8–12 reels delivered per day across all sessions",
          "Speaker snippets, stall walkthroughs, crowd highlights",
          "Daily morning recap reel for previous evening",
          "Priority 4K drone passes (subject to venue clearance)",
        ],
        badge: "BEST FOR EXPOS",
        ctaText: "Request a quote",
      },
      {
        id: "multi-event-command",
        name: "Multi-Event Command Crew",
        tagline: "Covering multiple locations simultaneously across Pune",
        turnaround: "Simultaneous 15 min SLAs",
        features: [
          "Up to 5 simultaneous field crews across Pune",
          "Shooting, editing, and posting by one synchronized agency",
          "Dedicated coordinator managing central brand consistency",
          "Ideal for festival weeks (Navratri, Ganeshotsav) & city rallies",
          "Unified cloud backup + master archive delivery",
          "Reddy Arts Media senior production oversight",
        ],
        badge: "FULL COMMAND",
        ctaText: "Request a quote",
      },
    ],
  },

  // 10 · FAQ (Accordion with Owner Confirmation TODOs)
  faq: {
    sectionLabel: "10 · FREQUENTLY ASKED QUESTIONS",
    headline: "Clear answers before we set foot on your ground.",
    items: [
      {
        id: "faq-turnaround",
        question: "What is your exact turnaround time?",
        answer:
          "Our benchmark is 10 to 15 minutes from the moment an action happens to a finished, fully edited reel delivered to your team or posted live. For breaking moments like cake-cutting, stage entries, or award announcements, our editors start cutting raw takes while the applause is still happening.",
      },
      {
        id: "faq-reels-count",
        question: "How many reels can you produce per event?",
        answer:
          "For a standard single-evening event (3–4 hours), we typically deliver between 4 to 8 high-impact reels. For full-day expos or festivals, our reel desk delivers 10 to 16 reels per day depending on the crew size chosen.",
      },
      {
        id: "faq-drone",
        question: "Do you handle drone permissions in Pune?",
        answer:
          "Yes. Our drone pilots are DGCA-certified and operate in accordance with local airspace regulations. For private venues and stadiums (like D Y Patil Ground), we coordinate directly with venue management. For civic zones, we manage necessary notifications.",
        ownerTodo: "// TODO: Owner to confirm specific permit lead time required for yellow/red zones in Pune",
      },
      {
        id: "faq-ownership",
        question: "Who owns the raw footage and final reels?",
        answer:
          "You own 100% of the final reels and raw footage. Upon event completion, we transfer the full raw 4K footage folder via portable drive or private high-speed cloud link at no additional licensing fee.",
      },
      {
        id: "faq-delivery-posting",
        question: "Do you post directly to our Instagram or hand it over?",
        answer:
          "We can do either! We frequently send an Instagram 'Collaborator' invite directly from @reels_in_minutes so the reel publishes on your feed instantly with shared analytics. Alternatively, we AirDrop / Telegram the final MP4 with suggested captions and hashtags to your social media manager.",
      },
      {
        id: "faq-travel",
        question: "Do you travel outside Pune?",
        answer:
          "Yes. While Pune (including PCMC, Chakan, Talegaon, and Hinjewadi) is our primary base with zero travel overhead, our crews regularly travel across Maharashtra (Mumbai, Nashik, Kolhapur, Nanded) and South India for multi-day weddings and corporate summits.",
        ownerTodo: "// TODO: Owner to confirm outstation travel & crew accommodation policy",
      },
      {
        id: "faq-multi-event",
        question: "Can you cover multiple venues at the exact same time?",
        answer:
          "Yes. During Navratri 2026, we covered 4 to 5 separate Garba grounds across Pune simultaneously every single night. We maintain a pool of 10–15 trained shooters and editors backed by Reddy Arts Media's gear vault.",
      },
      {
        id: "faq-booking",
        question: "How far in advance do we need to book?",
        answer:
          "For weekend events, festival seasons, and wedding dates, we recommend booking 2 to 4 weeks in advance. However, because we have multiple crews, we frequently accommodate last-minute bookings with as little as 24 hours notice if a crew slot is open.",
        ownerTodo: "// TODO: Owner to confirm advance deposit percentage (e.g. 50% on booking)",
      },
    ],
  },

  // 11 · CONTACT & ENQUIRY CTA
  contact: {
    sectionLabel: "11 · LET'S WORK TOGETHER",
    headline: "Tell us the date. We’ll have it on the feed that night.",
    subCopy: "Rates on request. Send us the event, the dates and how many reels you need, and we will send you a plan and a quote.",
    phones: [
      { number: "+91 97665 25043", label: "Phone & WhatsApp", url: "https://wa.me/919766525043" },
      { number: "+91 81809 72669", label: "Alternate Phone", url: "tel:+918180972669" },
    ],
    email: {
      address: "reelsinminutespune@gmail.com",
      note: "For briefs, quotes and references",
    },
    instagram: {
      handle: "@reels_in_minutes",
      url: "https://instagram.com/reels_in_minutes",
      qrText: "Scan to watch the reels. 340+ reels and 19M+ views, all on our Instagram handle.",
      qrImage: "/images/qr/instagram-qr.png",
    },
    website: "reelsinminutes.com",
    address: "Pune, Maharashtra, India",
    parentBranding: "REELS IN MINUTES · A REDDY ARTS MEDIA LLP BRAND",
  },
};
