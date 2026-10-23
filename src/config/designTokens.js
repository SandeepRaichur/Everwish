/**
 * EVERWISH STUDIOS — DESIGN SYSTEM TOKENS & BUSINESS CONFIG
 * 
 * ⚠️ NOTE: Design tokens and business content are now centrally managed in:
 *    src/config/siteConfig.js
 * 
 * This file re-exports from siteConfig.js for backwards compatibility.
 */

import { siteConfig } from './siteConfig.js';

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

export const COLOR_PALETTE = siteConfig.brand.colors;
export const TYPOGRAPHY = siteConfig.brand.typography;
export const INITIAL_PACKAGES = siteConfig.packages;

export const EXPERIENCE_THEMES = siteConfig.themes.map((t) => ({
  ...t,
  badge: t.badge || t.tag,
  tagline: t.tagline || t.description,
  palette: t.palette || {
    primary: t.accentColor,
    bg: t.id === 'romantic' ? '#120E15' : t.id === 'playful' ? '#101622' : '#141312',
    accent: t.accentColor,
    text: '#FFF5E7',
  },
  sampleRecipient:
    t.sampleRecipient ||
    (t.id === 'romantic'
      ? 'Aarav for Ananya'
      : t.id === 'playful'
      ? 'Rohan for Kabir'
      : "The Sharma Family for Papa's 50th"),
  highlights: t.highlights || t.features,
  vibe: t.vibe || t.description,
}));

export const FAQ_ITEMS = siteConfig.faq.items;

export default {
  BRAND,
  COLOR_PALETTE,
  TYPOGRAPHY,
  INITIAL_PACKAGES,
  EXPERIENCE_THEMES,
  FAQ_ITEMS,
};
