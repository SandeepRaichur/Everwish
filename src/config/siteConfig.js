/**
 * EVERWISH STUDIOS — CENTRALIZED WEBSITE CONFIGURATION
 * 
 * ══════════════════════════════════════════════════════════════════════════════════
 * 🌟 THE SINGLE SOURCE OF TRUTH FOR THE ENTIRE EVERWISH WEBSITE
 * ══════════════════════════════════════════════════════════════════════════════════
 * 
 * You can manage almost the entire Everwish website from this single file:
 * - Brand identity, typography & color palette
 * - Founder WhatsApp number, email & business hours
 * - Hero headline, taglines & value propositions
 * - Packages, pricing tiers & turnaround times
 * - How-it-works steps & FAQ questions
 * - Trust pillars & privacy commitments
 * - Birthday experience demos (romantic, best friend, family)
 * - Feature switches (toggle sections on or off with simple true/false)
 * - SEO tags, social cards & analytics provider
 * 
 * 💡 Need help? Read docs/EDITING_GUIDE.md for step-by-step instructions.
 */

export const siteConfig = {
  // ─────────────────────────────────────────────────────────────────────────────
  // 1. BRAND IDENTITY
  // ─────────────────────────────────────────────────────────────────────────────
  brand: {
    name: "Everwish",
    legalEntity: "Everwish Keepsake Studios",
    monogramLetter: "E",
    tagline: "Handcrafted Cinematic Birthday Websites",
    descriptor: "Personalized Digital Birthday Keepsakes",
    heroHeadline: "More than a birthday wish.",
    heroHeadlineItalic: "A moment they'll never forget.",
    heroSubheadline:
      "Beautiful, personalized birthday websites made from your photos, memories and words — created just for someone special. Handcrafted and delivered private in 24–48 hours.",
    heroBadge: "Handcrafted Personal Birthday Websites • From ₹499",
    heroStats: [
      { value: "100%", label: "Human-Coded Craft" },
      { value: "24–48h", label: "Standard Turnaround" },
      { value: "Private", label: "Ad-Free Keepsake URL" },
      { value: "₹499 – ₹1,499", label: "Introductory Prices" },
    ],
    description:
      "Crafting bespoke, cinematic birthday websites that preserve personal letters, photos, and music into timeless digital heirlooms for partners, friends, and family.",
    logoImage: null, // Optional path to custom logo image, e.g. "/logo.svg" (leave null to use monogram)
    copyrightNotice: "All rights reserved.",
    footerCredit: "Hand-coded with love in React & Tailwind CSS",

    // Luxury WCAG AAA Compliant Color Foundation
    colors: {
      midnightNavy: {
        base: "#10131D",
        deep: "#090B10",
        card: "#151926",
        surface: "#1D2233",
        border: "#293046",
      },
      champagneGold: {
        base: "#D9BD88",
        light: "#F4E7CD",
        dark: "#B59556",
        muted: "rgba(217, 189, 136, 0.15)",
      },
      warmIvory: {
        base: "#FFF5E7",
        dim: "#D8CFC0",
        muted: "rgba(255, 245, 231, 0.65)",
      },
      mutedRose: {
        base: "#D88F9A",
        light: "#F5CAD1",
        muted: "rgba(216, 143, 154, 0.16)",
      },
    },

    // Typography
    typography: {
      fontSerif: "Playfair Display, Georgia, serif",
      fontSans: "Plus Jakarta Sans, system-ui, sans-serif",
    },
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 2. BUSINESS CONTACT & OPERATIONAL INFORMATION
  // ─────────────────────────────────────────────────────────────────────────────
  business: {
    // ⚠️ FOUNDER SETUP: Replace with your real 10-digit WhatsApp number with country code (no + or spaces)
    whatsappNumber: "919999999999",
    isPhonePlaceholder: true, // Set to false once your real number is configured

    email: "hello@everwish.in",
    founderName: "Lead Designer & Founder",
    currency: "₹",
    currencyCode: "INR",

    // Studio hours & SLAs
    supportHours: "9:00 AM – 11:00 PM IST (7 Days a Week)",
    typicalReplyTime: "Under 30 minutes during studio hours",
    standardTurnaround: "24–48 hours from media receipt",
    expressRushTurnaround: "Under 12 hours (upon WhatsApp confirmation)",
    location: "Studio based in India • Delivering worldwide",

    // Social Media Links
    social: {
      whatsapp: "https://wa.me/919999999999",
      instagram: "https://instagram.com/everwish.in",
      twitter: "https://twitter.com/everwish_studio",
      email: "mailto:hello@everwish.in",
    },

    // Commercial Terms & Payments
    depositRequirement:
      "50% advance booking deposit via UPI / Bank Transfer; 50% upon staging approval",
    upiIdPlaceholder: "everwish@upi",
    revisionLimit: "2 rounds of included revisions before final reveal",
    hostingTerms: "1 full year of guaranteed static hosting included",

    // Optional Formspree / Web3Forms Form Endpoint
    // Leave as empty string "" for direct verified WhatsApp + Mailto high-conversion mode
    formSubmissionEndpoint: "",

    // Default Enquiry Messages
    defaultInquiryMessage:
      "Hi Everwish! I want to create a custom birthday website surprise for someone special. Can you share how we can get started?",
    rushInquiryMessage:
      "Hi Everwish! I need an express rush birthday website delivered within 12 hours. Is a slot available today?",
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 3. FEATURE SWITCHES (Toggle website sections & capabilities on/off)
  // ─────────────────────────────────────────────────────────────────────────────
  features: {
    showThemes: true, // Show 3 artistic directions & demo launcher
    showHowItWorks: true, // Show 4-step creation journey
    showPricing: true, // Show commercial pricing packages
    showEmotionalValue: true, // Show tactile simulations (letter, music, countdown)
    showTrustSection: true, // Show privacy pillars & guarantees
    showFaq: true, // Show FAQ accordion
    showInquiryForm: true, // Show interactive order brief intake form
    showFinalCta: true, // Show closing conversion section
    showDesignSystemTab: true, // Show architectural design tokens tab
    enablePasscodeLock: true, // Enable optional 4-digit PIN lock on private keepsakes
    enableAudioAutoplayPreview: false, // Respect user-initiated play only (strictly no autoplay)
    enableRushDeliveryOption: true, // Show <12h express rush delivery toggle
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 4. NAVIGATION & HEADER CONTROLS
  // ─────────────────────────────────────────────────────────────────────────────
  navigation: {
    links: [
      { label: "Experiences", href: "#experiences" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Pricing", href: "#pricing" },
      { label: "Why It Matters", href: "#why-it-matters" },
      { label: "FAQ", href: "#faq" },
    ],
    ctaButtonLabel: "Create a Birthday Surprise",
    statusBadge: "Taking Orders",
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 5. PACKAGES & COMMERCIAL PRICING
  // ─────────────────────────────────────────────────────────────────────────────
  packages: [
    {
      id: "starter",
      name: "Starter Keepsake",
      tagline: "Heartfelt, elegant, and delivered in 24 hours.",
      price: 499,
      originalPrice: 999,
      turnaround: "24 hours",
      popular: false,
      badgeText: "Introductory Rate",
      ctaLabel: "Choose Starter",
      features: [
        { label: "Personalized Midnight Greeting", included: true },
        { label: "Curated Photo Album (Up to 8 photos)", included: true },
        { label: "Heartfelt Personal Letter Section", included: true },
        { label: "Background Music Integration (Spotify/YouTube/MP3)", included: true },
        { label: "Private Unguessable Web Link", included: true },
        { label: "1 Full Year Cloud Hosting", included: true },
        { label: "1 Round of Revisions Included", included: true },
        { label: "Relationship Memory Timeline", included: false },
        { label: "Interactive Scratchcard / Secret Reveal", included: false },
        { label: "Audio Voice Note Wishes", included: false },
      ],
      idealFor: "Best friends, colleagues, and sweet budget-conscious surprises.",
    },
    {
      id: "personalized",
      name: "Personalized Signature",
      tagline: "Our most requested experience. Emotional, interactive, and deeply memorable.",
      price: 999,
      originalPrice: 1999,
      turnaround: "24–48 hours",
      popular: true,
      badgeText: "Most Popular Choice",
      ctaLabel: "Create Signature Surprise",
      features: [
        { label: "Personalized Midnight Greeting", included: true },
        { label: "Expanded Photo Gallery (Up to 18 photos)", included: true },
        { label: "Tactile Wax-Sealed Unfolding Letter", included: true },
        { label: "Relationship Memory Timeline (5 Milestones)", included: true },
        { label: "Interactive Scratchcard / Secret Reveal", included: true },
        { label: "Custom Background Soundtrack", included: true },
        { label: "Celebration Confetti Burst Animation", included: true },
        { label: "Private Link + Optional 4-Digit Passcode", included: true },
        { label: "2 Rounds of Quick Revisions", included: true },
        { label: "1 Full Year Cloud Hosting", included: true },
        { label: "Audio Voice Note Wishes", included: false },
      ],
      idealFor: "Romantic partners, spouses, and soulmates.",
    },
    {
      id: "grand",
      name: "Grand Heirloom",
      tagline: "The ultimate digital keepsake with audio voice notes and video embeds.",
      price: 1499,
      originalPrice: 2999,
      turnaround: "48 hours (Rush available)",
      popular: false,
      badgeText: "Ultimate Digital Keepsake",
      ctaLabel: "Commission Grand Heirloom",
      features: [
        { label: "Everything in Personalized Signature", included: true },
        { label: "Unlimited Photos & Video Clips", included: true },
        { label: "Voice Message Audio Player (From friends & family)", included: true },
        { label: "Extended Milestone Journey (10+ Milestones)", included: true },
        { label: "Interactive Memory Game / Trivia Quiz", included: true },
        { label: "Priority Designer 1-on-1 Consultation", included: true },
        { label: "Unlimited Polish Revisions", included: true },
        { label: "Optional Custom Domain Slug or Password", included: true },
        { label: "Print-Ready High-Res QR Gift Card Graphic", included: true },
        { label: "Permanent Archive Guarantee", included: true },
      ],
      idealFor: "Milestone birthdays (18th, 21st, 25th, 30th, 50th), parents, and grand gestures.",
    },
  ],

  // ─────────────────────────────────────────────────────────────────────────────
  // 6. HOW IT WORKS (The 4-Step Process)
  // ─────────────────────────────────────────────────────────────────────────────
  howItWorks: {
    overline: "The 4-Step Journey",
    title: "From shared memories to a",
    italicWord: "live midnight premiere.",
    subtitle:
      "A frictionless, personal process where you share your favorite photos and we personally compose your digital heirloom.",
    steps: [
      {
        stepNumber: "01",
        title: "Choose An Experience",
        description:
          "Pick your package (₹499, ₹999, or ₹1,499) and select the emotional vibe that matches your recipient.",
      },
      {
        stepNumber: "02",
        title: "Share Photos & Message",
        description:
          "Send your favorite photos, song link, and personal message directly over WhatsApp or a private Google Drive folder.",
      },
      {
        stepNumber: "03",
        title: "Approve The Creation",
        description:
          "Within 24–48 hours, receive a private staging link to preview on your phone. Request tweaks until you are thrilled.",
      },
      {
        stepNumber: "04",
        title: "Receive & Share Link",
        description:
          "Get your clean, ad-free link to send at 12:00 AM on WhatsApp, or embed into a printed QR code gift card.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 7. FREQUENTLY ASKED QUESTIONS (FAQ)
  // ─────────────────────────────────────────────────────────────────────────────
  faq: {
    overline: "Frequently Asked Questions",
    title: "Everything you need to",
    italicWord: "know before ordering.",
    subtitle:
      "Clear, honest answers about delivery timelines, song embeddings, privacy, revisions, and mobile compatibility.",
    items: [
      {
        question: "How do I share the website with the birthday person?",
        answer:
          "You receive a private, lightning-fast web link (e.g. everwish.in/w/ananya-24). You can text it at 12:00 AM sharp on WhatsApp or iMessage, or print our custom QR code gift card and place it inside a physical gift box or bouquet.",
      },
      {
        question: "How long does it take to make? Can I get it today for midnight?",
        answer:
          "Standard delivery is 24–48 hours from the moment you send your photos. If you need it tonight, we offer Express Rush Turnaround (<12 hours) upon availability confirmation on WhatsApp.",
      },
      {
        question: "How do I send my photos, memories and song choice?",
        answer:
          "As soon as you confirm your order, you can upload them to a private Google Drive folder or simply send them directly over WhatsApp as high-resolution documents.",
      },
      {
        question: "Can I choose any song I want?",
        answer:
          "Yes! You can choose any song on Spotify, YouTube, or your own audio recording. We embed an elegant music player with unobtrusive user-controlled playback.",
      },
      {
        question: "Are our personal photos and private letters kept secure?",
        answer:
          "100% confidential. Your website is published on an unguessable URL with strict search engine disallow directives (Google cannot index your site). We never share, sell, or publicize your photos or letters without explicit written permission.",
      },
      {
        question: "Can I request changes if something isn't perfect?",
        answer:
          "Absolutely. Every package includes up to 2 rounds of revisions. You will review a private preview link on your phone and can request photo swaps, text edits, or music adjustments before the final reveal.",
      },
      {
        question: "Will it work smoothly on both iPhone and Android?",
        answer:
          "Yes. Every website is built mobile-first and tested extensively across iOS Safari, Android Chrome, tablets, and desktop browsers to ensure silky smooth performance and crisp typography.",
      },
      {
        question: "How long will the website stay live on the internet?",
        answer:
          "Every website is guaranteed to remain active and hosted for a minimum of 1 full year at no recurring cost. We also provide a downloadable offline HTML archive upon request.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 8. TRUST PILLARS & ETHICS
  // ─────────────────────────────────────────────────────────────────────────────
  trust: {
    overline: "Trust & Confidentiality",
    title: "Your private memories are",
    italicWord: "sacred to us.",
    subtitle:
      "We build websites for intimate relationships. That means complete privacy protection, honest communication, and zero fabricated claims.",
    badgeText: "Studio Ethics",
    pillars: [
      {
        title: "Unlisted, Unindexed URLs",
        description:
          "Every Everwish website is configured with strict 'noindex' robot tags and published on unguessable links. Google and search engines cannot index your private photos or heartfelt notes.",
      },
      {
        title: "Zero Third-Party Tracking & Ads",
        description:
          "Unlike free website builders, we run zero advertisement networks, zero data brokers, and zero intrusive analytics scripts. Your recipient sees only your personal memories.",
      },
      {
        title: "Complete Media Control",
        description:
          "After your celebration, you can request complete deletion of original source photos and voice files from our studio storage, or choose to keep the website active for permanent bookmarking.",
      },
      {
        title: "Honest Human Guarantee",
        description:
          "No automated chatbots. You work 1-on-1 with the founder who personally ensures every image is beautifully framed and colors are balanced before delivery.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 9. ARTISTIC DIRECTIONS (Themes)
  // ─────────────────────────────────────────────────────────────────────────────
  themes: [
    {
      id: "romantic",
      title: "Romantic & Intimate",
      subtitle: "For Partners & Spouses",
      description:
        "Soft candlelight tones, elegant serif typography, unfolding wax-sealed love letters, and a chronological relationship timeline.",
      accentColor: "#D88F9A",
      tag: "Most Popular",
      bestFor: "Boyfriends, girlfriends, husbands, wives, and anniversaries.",
      features: [
        "Wax-sealed personal letter",
        "Romantic memory timeline",
        "Soft audio player integration",
        "Photo gallery with story captions",
      ],
    },
    {
      id: "playful",
      title: "Playful & Vibrant",
      subtitle: "For Best Friends & Soulmates",
      description:
        "Energetic scrapbook styling, inside jokes, roast-and-toast memory reveals, interactive scratch cards, and celebratory confetti.",
      accentColor: "#D9BD88",
      tag: "High Energy",
      bestFor: "Best friends, roommates, travel buddies, and siblings.",
      features: [
        "Inside joke reveals",
        "Interactive scratch card",
        "Scrapbook photo grid",
        "Celebration confetti cannon",
      ],
    },
    {
      id: "family",
      title: "Warm & Heartfelt",
      subtitle: "For Parents, Children & Siblings",
      description:
        "A timeless digital heirloom honoring family milestones, lifetime retrospectives, voice message audio clips, and deep gratitude.",
      accentColor: "#C2A370",
      tag: "Deeply Emotional",
      bestFor: "Parents (50th / 60th birthdays), children, and grandparents.",
      features: [
        "Family milestone retrospective",
        "Voice notes from relatives",
        "Generational photo journey",
        "Heartfelt gratitude letter",
      ],
    },
  ],

  // ─────────────────────────────────────────────────────────────────────────────
  // 10. BIRTHDAY DEMO EXPERIENCES DATA
  // ─────────────────────────────────────────────────────────────────────────────
  demos: {
    romantic: {
      id: "romantic",
      theme: "romantic",
      recipientName: "Ananya",
      senderName: "Aarav",
      occasion: "24th Birthday Midnight Surprise",
      targetAudience: "Romantic Partners (Dating, Married, Long-Distance)",
      vibe: "Cinematic, intimate, candlelit, deeply emotional.",
      passcode: "2024", // Optional 4-digit PIN for demo testing
      colors: {
        bg: "#100D14",
        surface: "#18131E",
        border: "rgba(216, 143, 154, 0.25)",
        primary: "#D88F9A",
        accent: "#E8B2BA",
        text: "#FFF0F2",
        gold: "#D9BD88",
      },
      audioTrack: {
        title: "Kasoor (Acoustic)",
        artist: "Prateek Kuhad",
        duration: "3:18",
        initialPlaying: false,
      },
      opening: {
        tag: "A Midnight Love Letter For You",
        headline: "Happy 24th Birthday, My Love.",
        subheadline:
          "Every song, midnight rain drive, and quiet cup of chai reminds me of how extraordinary you are. This little corner of the internet belongs only to you.",
        openingPrompt: "Tap to unseal your midnight letter",
      },
      personalLetter: {
        salutation: "Dearest Ananya,",
        bodyParagraphs: [
          "I still remember the first night we stayed up talking until 3:00 AM at the seaside café. We were both nervous, laughing at terrible jokes, and pretending we weren't falling head over heels.",
          "Over the last three years, you have taught me how to find wonder in the simplest ordinary moments — cooking burnt pasta together on rainy Tuesdays, getting lost in Old Goa, and holding my hand whenever life got noisy.",
          "Thank you for being my anchor, my confidante, and my favorite reason to smile. May this 24th year bring you as much boundless joy, warmth, and peace as you bring to everyone who loves you.",
        ],
        signoff: "Forever & always yours,",
        author: "Aarav",
        waxSealNumber: "Wax Seal #24",
      },
      photoCollection: [
        {
          id: "p1",
          caption: "Marine Drive, 11:45 PM",
          date: "Dec 14, 2021",
          story: "Two cups of cutting chai and four straight hours of conversation about our craziest dreams.",
          category: "Where It All Began",
        },
        {
          id: "p2",
          caption: "The Unplanned Goa Road Trip",
          date: "July 22, 2022",
          story: "We got drenched in a sudden July monsoon downpour and laughed till our ribs hurt.",
          category: "Monsoon Memories",
        },
        {
          id: "p3",
          caption: "Sunrise at Chapora Fort",
          date: "July 24, 2022",
          story: "Watching the sun rise over the Arabian Sea while sharing half an apple and complete silence.",
          category: "Golden Horizons",
        },
        {
          id: "p4",
          caption: "Our First Diwali Together",
          date: "Nov 12, 2023",
          story: "You spent three hours helping me light diyas on the terrace. The prettiest light in the room was you.",
          category: "Festivals of Light",
        },
        {
          id: "p5",
          caption: "Moving Into Our First Place",
          date: "Jan 18, 2024",
          story: "Sitting on unpacked cardboard boxes at midnight, eating spicy pizza with paper cups.",
          category: "Milestones",
        },
        {
          id: "p6",
          caption: "Sunday Morning in the Balcony",
          date: "Just Last Week",
          story: "Reading books, listening to acoustic vinyl, and realizing I never want to be anywhere else.",
          category: "Ordinary Magic",
        },
      ],
      timeline: [
        {
          year: "2021",
          title: "The First Nervous Coffee",
          description: "Met at 7 PM. Ended at midnight. Neither of us wanted to leave.",
        },
        {
          year: "2022",
          title: "The Midnight Highway Drive",
          description: "Singing off-key to 2000s Bollywood playlists with the windows rolled down.",
        },
        {
          year: "2023",
          title: "Meeting The Families",
          description: "Nervous smiles turned into laughter across the dinner table.",
        },
        {
          year: "2024",
          title: "Our First Shared Keys",
          description: "Turning four plain walls into a sanctuary full of warmth and plants.",
        },
        {
          year: "2026",
          title: "Celebrating 24 Beautiful Years of You",
          description: "And a lifetime of undiscovered adventures waiting ahead.",
        },
      ],
      interactiveMoment: {
        type: "waxEnvelope",
        title: "A Secret Midnight Promise",
        sealedLabel: "Tap to break the wax seal",
        unsealedNote:
          "My promise to you this year: To always listen first, to make you laugh when you're overwhelmed, and to never let a single day pass without reminding you how loved you are.",
      },
      closing: {
        title: "Happy 24th Birthday, Ananya.",
        message: "Here is to another 365 days of laughter, road trips, and growing together.",
        authorSignature: "All my love, Aarav ♡",
      },
    },

    playful: {
      id: "playful",
      theme: "playful",
      recipientName: "Kabir",
      senderName: "Rohan & The Squad",
      occasion: "26th Birthday Roast & Toast",
      targetAudience: "Best Friends, Squads, Siblings, Roommates",
      vibe: "Playful, energetic, high-spirited, full of inside jokes.",
      passcode: "2024",
      colors: {
        bg: "#0B101D",
        surface: "#141D2E",
        border: "rgba(217, 189, 136, 0.3)",
        primary: "#D9BD88",
        accent: "#F4E7CD",
        text: "#F4F7FF",
        gold: "#D9BD88",
      },
      audioTrack: {
        title: "Ilahi (Acoustic)",
        artist: "Arijit Singh",
        duration: "3:45",
        initialPlaying: false,
      },
      opening: {
        tag: "Certified Squad Milestone",
        headline: "Happy 26th Birthday, Legend!",
        subheadline:
          "From surviving 8 AM college lectures on zero sleep to pretending we have our adult lives figured out. This site is dedicated to the guy who keeps the group chat alive.",
        openingPrompt: "Tap to unroll the roast & toast",
      },
      personalLetter: {
        salutation: "Yo Kabir,",
        bodyParagraphs: [
          "Bro, 26 years on this planet and you still haven't learned how to arrive on time to a single dinner plan. But honestly, no trip or Saturday evening is complete without your chaotic energy.",
          "Through bad haircuts, terrible startup ideas at 2 AM, and every career panic in between, you have been the truest friend anyone could ask for. Always down for cutting chai at midnight, always ready to lend a hand.",
          "Here is to another year of terrible karaoke, legendary road trips, and pretending we know what we're doing. Have the absolute best birthday, brother!",
        ],
        signoff: "Your lifelong partners in crime,",
        author: "Rohan, Varun & The Boys",
        waxSealNumber: "Squad Pass #26",
      },
      photoCollection: [
        {
          id: "k1",
          caption: "College Canteen Debates",
          date: "August 2018",
          story: "Debating for 2 hours whether Maggi tastes better with cheese or schezwan sauce.",
          category: "College Archives",
        },
        {
          id: "k2",
          caption: "The Ladakh Bike Breakdown",
          date: "June 2021",
          story: "Stranded on the highway for 3 hours, eating cold biscuits and laughing hysterically.",
          category: "Highway Chronicles",
        },
        {
          id: "k3",
          caption: "First Day at the New Job",
          date: "Oct 2022",
          story: "Wearing a tie for the first time in 4 years. You looked completely lost.",
          category: "Adulting Attempts",
        },
        {
          id: "k4",
          caption: "Concert in Bangalore",
          date: "Dec 2023",
          story: "Screaming lyrics until we all lost our voices. Best night of the year.",
          category: "Live Nights",
        },
        {
          id: "k5",
          caption: "Last Week's FIFA Night",
          date: "Last Saturday",
          story: "You lost 4-0 and blamed the controller as usual.",
          category: "Classic Kabir",
        },
        {
          id: "k6",
          caption: "The Squad Reunion",
          date: "Diwali 2025",
          story: "No matter how busy life gets, some bonds never change.",
          category: "Forever Friends",
        },
      ],
      timeline: [
        {
          year: "2018",
          title: "Day 1 at the Dorms",
          description: "Bonded over shared hatred of 8 AM math lectures and love for cheap street food.",
        },
        {
          year: "2020",
          title: "Lockdown Gaming Marathons",
          description: "14 straight hours of Discord, gaming tournaments, and imaginary startup ideas.",
        },
        {
          year: "2022",
          title: "First Jobs & City Moves",
          description: "Different apartments, same group chat pinging 200 memes a day.",
        },
        {
          year: "2024",
          title: "The Himalayan Road Trip",
          description: "High altitude, zero phone signal, and the best conversations of our 20s.",
        },
        {
          year: "2026",
          title: "The 26th Birthday Milestone",
          description: "Officially closer to 30 than 20. But forever young at heart.",
        },
      ],
      interactiveMoment: {
        type: "scratchCard",
        title: "The Friendship Roast & Trivia Card",
        sealedLabel: "Tap to scratch & reveal the truth",
        scratchPrompt: "Scratch this card to uncover Kabir's greatest mystery...",
        hiddenReward:
          "Confirmed: Still owes everyone ₹350 for the 2021 Goa trip petrol! (Drinks are on you tonight! 🍻)",
      },
      closing: {
        title: "Keep Shining, Kabir!",
        message: "Now put your phone down and come outside — the party has started!",
        authorSignature: "Cheers, The Squad 🎉",
      },
    },

    family: {
      id: "family",
      theme: "family",
      recipientName: "Papa (Rajesh Sharma)",
      senderName: "Neha, Aditya & Mummy",
      occasion: "50th Golden Jubilee Birthday",
      targetAudience: "Parents, Grandparents, Family Milestones",
      vibe: "Warm, respectful, heartfelt, deeply nostalgic, honoring legacy.",
      passcode: "2024",
      colors: {
        bg: "#14120E",
        surface: "#1D1A14",
        border: "rgba(217, 189, 136, 0.28)",
        primary: "#C2A370",
        accent: "#E2C99D",
        text: "#FFF9F0",
        gold: "#D9BD88",
      },
      audioTrack: {
        title: "Jeena Isi Ka Naam Hai (Acoustic)",
        artist: "Mukesh / Heritage Strings",
        duration: "4:02",
        initialPlaying: false,
      },
      opening: {
        tag: "A Golden Jubilee Tribute",
        headline: "Celebrating 50 Years of Strength, Love & Wisdom.",
        subheadline:
          "To the man who gave us wings to fly and roots to always remember where home is. Happy 50th Birthday, Papa. This retrospective is our gift of gratitude to you.",
        openingPrompt: "Tap to open our family letter",
      },
      personalLetter: {
        salutation: "Respected & Dearest Papa,",
        bodyParagraphs: [
          "As we celebrate your 50th milestone, we look back at the countless quiet sacrifices you made without ever asking for recognition. From dropping us to school in the morning rain to staying up until we returned home safe.",
          "You taught us that real strength is gentle, that integrity is never negotiable, and that family is the greatest blessing in life. Every value we carry today is a reflection of your wisdom and example.",
          "We wish you good health, peaceful mornings, boundless happiness, and many more decades of watching your family flourish. We are so proud to be your children.",
        ],
        signoff: "With endless love, respect & gratitude,",
        author: "Neha, Aditya & Sunita",
        waxSealNumber: "Golden Seal #50",
      },
      photoCollection: [
        {
          id: "f1",
          caption: "Your University Convocation",
          date: "May 1996",
          story: "The proudest smile in the family. The first graduate in our lineage.",
          category: "Early Years",
        },
        {
          id: "f2",
          caption: "Mummy & Papa's Wedding Day",
          date: "December 1999",
          story: "25 years of unconditional partnership, mutual respect, and shared dreams.",
          category: "Togetherness",
        },
        {
          id: "f3",
          caption: "Our First Family Vacation to Shimla",
          date: "Summer 2005",
          story: "Carrying Aditya on your shoulders all the way up Mall Road without a word of complaint.",
          category: "Summer Journeys",
        },
        {
          id: "f4",
          caption: "Holding Neha For The First Time",
          date: "March 2001",
          story: "Tears in your eyes at the hospital nursery. The day you became a father.",
          category: "Fatherhood",
        },
        {
          id: "f5",
          caption: "Aditya's First Bike Ride",
          date: "November 2008",
          story: "Running alongside the bicycle for two hours on Sunday morning so he wouldn't fall.",
          category: "Quiet Love",
        },
        {
          id: "f6",
          caption: "Last Year's Family Gathering",
          date: "Diwali 2025",
          story: "Surrounded by your children, grandchildren, and three generations of love.",
          category: "The Golden Legacy",
        },
      ],
      timeline: [
        {
          year: "1974",
          title: "A Humble Beginning",
          description: "Born in Jaipur to teacher parents. Taught the values of discipline and humility.",
        },
        {
          year: "1996",
          title: "First Job & Relocation",
          description: "Moving to Mumbai with a single suitcase and a heart full of determination.",
        },
        {
          year: "1999",
          title: "Beginning The Family",
          description: "Married Sunita and laid the foundation for 25+ years of a warm and loving home.",
        },
        {
          year: "2015",
          title: "Building The Dream Home",
          description: "Every brick a testament to years of tireless hard work and family dedication.",
        },
        {
          year: "2026",
          title: "Golden 50th Jubilee",
          description: "Honored and celebrated by three generations of children who adore you.",
        },
      ],
      interactiveMoment: {
        type: "audioBlessings",
        title: "Recorded Voice Blessings From Family",
        sealedLabel: "Tap to listen to family voice notes",
        message: "Listen to heartfelt voice clips recorded by grandchildren, sisters, and cousins across India.",
      },
      closing: {
        title: "Happy 50th Birthday, Papa!",
        message: "May God bless you with abundant health, peace of mind, and joy in every day ahead.",
        authorSignature: "With all our hearts, The Sharma Family 💛",
      },
    },
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 11. SEO & SEARCH ENGINE METADATA
  // ─────────────────────────────────────────────────────────────────────────────
  seo: {
    productionDomain: "https://everwish.in",
    siteTitle: "Everwish | Handcrafted Cinematic Birthday Websites & Keepsakes",
    siteDescription:
      "Turn your most cherished memories into an unforgettable, cinematic birthday website. Bespoke digital keepsakes lovingly coded with personalized music, letters, and photo albums for partners, best friends, and family.",
    title: "Everwish | Handcrafted Cinematic Birthday Websites & Keepsakes",
    description:
      "Turn your most cherished memories into an unforgettable, cinematic birthday website. Bespoke digital keepsakes lovingly coded with personalized music, letters, and photo albums for partners, best friends, and family.",
    ogImage: "/og-image.svg",
    twitterHandle: "@everwish_studio",
    canonicalEnabled: true,
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 12. PRIVACY & DATA POLICIES
  // ─────────────────────────────────────────────────────────────────────────────
  policies: {
    privacyNotice:
      "We collect your contact details solely to communicate regarding your custom birthday website. We never sell, share, or market personal photos or notes to third parties.",
    fileRetentionDays: 30, // Days files are kept on founder staging for client revisions before secure purge
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// BACKWARD COMPATIBILITY NAMED EXPORTS
// These allow existing files to import tokens directly without breaking
// ─────────────────────────────────────────────────────────────────────────────
export const BRAND = {
  name: siteConfig.brand.name,
  tagline: siteConfig.brand.tagline,
  descriptor: siteConfig.brand.descriptor,
  phone: siteConfig.business.whatsappNumber,
  isPhonePlaceholder: siteConfig.business.isPhonePlaceholder,
  email: siteConfig.business.email,
  currency: siteConfig.business.currency,
  turnaroundDefault: siteConfig.business.standardTurnaround,
  guaranteeText: "100% human-coded. No generic templates.",
};

export const BUSINESS_CONFIG = siteConfig.business;
export const INITIAL_PACKAGES = siteConfig.packages;
export const EXPERIENCE_THEMES = siteConfig.themes;
export const FAQ_ITEMS = siteConfig.faq.items;
export const DEMO_EXPERIENCES = siteConfig.demos;
export const COLOR_PALETTE = siteConfig.brand.colors;
export const TYPOGRAPHY = siteConfig.brand.typography;

export default siteConfig;
