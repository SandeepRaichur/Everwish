/**
 * EVERWISH STUDIOS — BUSINESS CONFIGURATION & LEAD ROUTING
 * Centralized business configuration for founder contact, pricing rules, and form endpoints.
 * 
 * ⚠️ FOUNDER SETUP INSTRUCTIONS:
 * 1. Replace `whatsappNumber` below with your real 10-digit WhatsApp business number with country code (e.g. 919876543210).
 * 2. If you wish to receive leads via email using a free serverless form service (e.g., Formspree or Web3Forms),
 *    paste your endpoint URL into `formSubmissionEndpoint`.
 *    If left blank (""), the system operates in direct WhatsApp + Mailto high-conversion mode.
 */

export const BUSINESS_CONFIG = {
  brandName: "Everwish",
  legalEntity: "Everwish Keepsake Studios",
  tagline: "Handcrafted Cinematic Birthday Websites",
  
  // ── CONTACT CHANNELS ──
  // Development placeholder — update with your real WhatsApp business number:
  whatsappNumber: "919999999999", // Format: [country code][10-digit number], no '+' or spaces
  isPhonePlaceholder: true, // Set to false once you configure your real number
  email: "hello@everwish.in",
  founderName: "Lead Designer & Founder",
  
  // ── OPERATIONAL SERVICE LEVEL AGREEMENTS (SLAs) ──
  supportHours: "9:00 AM – 11:00 PM IST (7 Days a Week)",
  typicalReplyTime: "Under 30 minutes during studio hours",
  standardTurnaround: "24–48 hours from media receipt",
  expressRushTurnaround: "Under 12 hours (upon WhatsApp confirmation)",
  
  // ── COMMERCIAL & PAYMENT TERMS ──
  currency: "₹",
  depositRequirement: "50% advance booking deposit via UPI / Bank Transfer; 50% upon staging approval",
  upiIdPlaceholder: "everwish@upi",
  
  // ── OPTIONAL HEADLESS FORM ENDPOINT (Web3Forms / Formspree) ──
  // If provided, the enquiry form will POST JSON to this endpoint.
  // If empty string (""), the form provides instant client-side verified WhatsApp and Email payload generation.
  formSubmissionEndpoint: "",
  
  // ── SEO & DOMAIN CONFIGURATION ──
  productionDomain: "https://everwish.in",
  canonicalEnabled: true,

  // ── PRIVACY-CONSCIOUS ANALYTICS CONFIGURATION ──
  // Options: 'console' (default development logger) | 'plausible' | 'umami' | 'ga4' | 'disabled'
  // Strict rule: NEVER transmits personal names, phone numbers, emails, photos, or message text.
  analyticsProvider: "console",
  analyticsDomain: "everwish.in",
  analyticsMeasurementId: "", // e.g. "G-XXXXXXXXXX" when GA4 is configured

  // ── PRIVACY & RETENTION COMMITMENTS ──
  privacyNotice:
    "We collect your contact details solely to communicate regarding your custom birthday website. We never sell, share, or market personal photos or notes to third parties.",
  fileRetentionDays: 30, // Days files are retained on founder local staging for client revisions before secure purge
  passcodeProtectionAvailable: true, // Enables optional 4-digit PIN lock on private birthday websites
};
