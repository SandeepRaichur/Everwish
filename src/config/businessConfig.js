/**
 * EVERWISH STUDIOS — BUSINESS CONFIGURATION & LEAD ROUTING
 * 
 * ⚠️ NOTE: All business configuration is now centrally managed in:
 *    src/config/siteConfig.js
 * 
 * This file re-exports from siteConfig.js for seamless backwards compatibility.
 */

import { siteConfig } from './siteConfig.js';

export const BUSINESS_CONFIG = {
  brandName: siteConfig.brand.name,
  legalEntity: siteConfig.brand.legalEntity,
  tagline: siteConfig.brand.tagline,
  whatsappNumber: siteConfig.business.whatsappNumber,
  isPhonePlaceholder: siteConfig.business.isPhonePlaceholder,
  email: siteConfig.business.email,
  founderName: siteConfig.business.founderName,
  supportHours: siteConfig.business.supportHours,
  typicalReplyTime: siteConfig.business.typicalReplyTime,
  standardTurnaround: siteConfig.business.standardTurnaround,
  expressRushTurnaround: siteConfig.business.expressRushTurnaround,
  currency: siteConfig.business.currency,
  depositRequirement: siteConfig.business.depositRequirement,
  upiIdPlaceholder: siteConfig.business.upiIdPlaceholder,
  formSubmissionEndpoint: siteConfig.business.formSubmissionEndpoint,
  productionDomain: siteConfig.seo.productionDomain,
  canonicalEnabled: siteConfig.seo.canonicalEnabled,
  analyticsProvider: "console",
  analyticsDomain: "everwish.in",
  analyticsMeasurementId: "",
  privacyNotice: siteConfig.policies.privacyNotice,
  fileRetentionDays: siteConfig.policies.fileRetentionDays,
  passcodeProtectionAvailable: siteConfig.features.enablePasscodeLock,
};

export default BUSINESS_CONFIG;
