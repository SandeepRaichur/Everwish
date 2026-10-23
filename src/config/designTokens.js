import { BUSINESS_CONFIG } from './businessConfig.js';

/**
 * EVERWISH — DESIGN SYSTEM TOKENS & BUSINESS CONFIG
 * Centralized design tokens and business rules.
 */

export const BRAND = {
  name: BUSINESS_CONFIG.brandName,
  tagline: BUSINESS_CONFIG.tagline,
  descriptor: "Personalized Digital Birthday Keepsakes",
  phone: BUSINESS_CONFIG.whatsappNumber,
  isPhonePlaceholder: BUSINESS_CONFIG.isPhonePlaceholder,
  email: BUSINESS_CONFIG.email,
  currency: BUSINESS_CONFIG.currency,
  turnaroundDefault: BUSINESS_CONFIG.standardTurnaround,
  guaranteeText: "100% human-coded. No generic templates.",
};



export const COLOR_PALETTE = {
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
};

export const EXPERIENCE_THEMES = [
  {
    id: "romantic",
    title: "Romantic & Intimate",
    badge: "Most Requested for Partners",
    tagline: "A poetic love letter told through music, candlelit memories, and hidden messages.",
    palette: {
      primary: "#D88F9A",
      bg: "#120E15",
      accent: "#E8B2BA",
      text: "#FFF0F2",
    },
    sampleRecipient: "Aarav for Ananya",
    highlights: [
      "Custom background soundtrack with subtle play/pause vinyl disc",
      "Interactive sealed digital envelope that unfolds your personal letter",
      "Cinematic photo timeline: 'The day we met' to 'Our favorite trips'",
      "Secret clickable polaroids revealing voice notes or video snippets",
    ],
    vibe: "Warm, candlelit, tear-jerking, private keepsake.",
  },
  {
    id: "playful",
    title: "Playful & Vibrant",
    badge: "Best for Best Friends & Siblings",
    tagline: "An energetic tribute filled with inside jokes, meme reels, and celebratory energy.",
    palette: {
      primary: "#D9BD88",
      bg: "#101622",
      accent: "#FFD166",
      text: "#FFF8EB",
    },
    sampleRecipient: "Rohan for Kabir",
    highlights: [
      "Confetti burst trigger with custom sound effect toggle",
      "Interactive 'Roast & Toast' expandable friendship cards",
      "Memory scratch-cards that reveal hilarious throwback photos",
      "Group birthday wishlist or countdown to the midnight celebration",
    ],
    vibe: "Celebratory, laugh-out-loud, vibrant, unforgettable.",
  },
  {
    id: "family",
    title: "Warm & Family-Oriented",
    badge: "Timeless for Parents & Mentors",
    tagline: "A dignified retrospective honoring milestones, family wisdom, and lifelong love.",
    palette: {
      primary: "#D9BD88",
      bg: "#141312",
      accent: "#C2A370",
      text: "#FBF7EF",
    },
    sampleRecipient: "The Sharma Family for Papa's 50th",
    highlights: [
      "Chronological journey from 1974 to today with archival photo frames",
      "Collated audio greetings from relatives and children across the globe",
      "Family tree or generation quotes with elegant gold borders",
      "Permanent ad-free link that can be bookmarked and cherished forever",
    ],
    vibe: "Heartfelt, generational, reverent, emotionally profound.",
  },
];

export const INITIAL_PACKAGES = [
  {
    id: "starter",
    name: "Starter Keepsake",
    price: 499,
    originalPrice: 799,
    turnaround: "24 hours",
    badge: "Quick Turnaround",
    tagline: "Perfect for a surprise midnight digital birthday card.",
    features: [
      "1 Custom Single-Page Cinematic Website",
      "Up to 8 curated photos in an elegant grid",
      "Personalized birthday letter or heartfelt message",
      "Background music of your choice",
      "Mobile-optimized responsive design",
      "Active link hosted for 6 months (renewable)",
    ],
    cta: "Choose Starter",
    popular: false,
  },
  {
    id: "personalized",
    name: "Personalized Story",
    price: 999,
    originalPrice: 1499,
    turnaround: "24–48 hours",
    badge: "Most Popular",
    tagline: "Our signature narrative experience that captures your entire journey together.",
    features: [
      "Everything in Starter, plus:",
      "Up to 20 photos with interactive polaroid reveals",
      "Timeline of special memories ('How we met', trips, milestones)",
      "Interactive digital envelope with seal unlock animation",
      "Audio message / voice note embedding",
      "Choice of 3 curated themes (Romantic, Playful, or Warm)",
      "Active link hosted for 1 year",
    ],
    cta: "Choose Personalized",
    popular: true,
  },
  {
    id: "premium",
    name: "Grand Heirloom",
    price: 1499,
    originalPrice: 2499,
    turnaround: "48 hours",
    badge: "VIP Custom",
    tagline: "A fully tailored cinematic production with unlimited storytelling touches.",
    features: [
      "Everything in Personalized, plus:",
      "Up to 40 photos + 2 custom video messages embedded",
      "Interactive quiz or 'Reasons Why I Love You / You Are Special' cards",
      "Secret message / countdown to midnight surprise",
      "Custom domain-ready or personalized URL slug (e.g., everwish.in/riya-25)",
      "Priority 1-on-1 revision consultation on WhatsApp",
      "Lifetime permanent hosting & high-res offline archive download",
    ],
    cta: "Choose Grand Heirloom",
    popular: false,
  },
];

export const FAQ_ITEMS = [
  {
    question: "How does the ordering and creation process work?",
    answer: "You pick a package and share your photos, message, and favorite song via our simple WhatsApp intake or Google Drive link. I handcraft the website within 24–48 hours, send you a private preview link for revisions, and once you approve, deliver the final live link to surprise your special person at midnight.",
  },
  {
    question: "Are there any hidden hosting fees or recurring subscriptions?",
    answer: "No. All prices (₹499 Starter, ₹999 Personalized, ₹1,499 Grand Heirloom) are transparent, one-time fees. There are zero subscriptions, zero hosting maintenance charges, and no surprise add-ons.",
  },
  {
    question: "What is your revision policy if I want changes?",
    answer: "Every order includes revisions before final delivery. Starter includes 1 round of adjustments; Personalized includes 2 rounds of pacing/photo tweaks; and Grand Heirloom includes priority 1-on-1 revision consultation on WhatsApp until you are completely thrilled with the result.",
  },
  {
    question: "Can I choose my own background music and photos?",
    answer: "Yes, absolutely! You can specify any song (Spotify link, YouTube link, or MP3 file) and send your favorite photos. We color-tune, compress for fast loading, and arrange them chronologically to build an emotional journey.",
  },
  {
    question: "Will the website work smoothly on iPhone and Android?",
    answer: "Yes. Every website is built mobile-first and tested thoroughly on modern iOS, Android, tablet, and desktop browsers. Touch interactions (such as tapping to unseal wax envelopes or flipping polaroids) work fluidly on all touchscreen devices.",
  },
  {
    question: "How long will the birthday website link stay live?",
    answer: "Starter websites remain active for 6 months, Personalized Story websites stay active for 1 year, and Grand Heirloom websites enjoy permanent lifetime hosting. You also receive an offline archive so your memories are preserved forever.",
  },
  {
    question: "How are my private photos, letters, and memories protected?",
    answer: "Your privacy is our highest priority. Websites are published with 'noindex' headers on unlisted, obfuscated URLs so search engines cannot index them. We never display third-party advertisements, never share your data, and can archive or delete media upon request after your celebration.",
  },
  {
    question: "Can you deliver an express rush surprise in under 12 hours?",
    answer: "Yes! When studio capacity permits, we accept express rush commissions for tonight's midnight surprise. Message us directly on WhatsApp before submitting your brief to confirm current rush slot availability.",
  },
];

