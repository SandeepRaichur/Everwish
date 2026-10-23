/**
 * EVERWISH STUDIOS — PRIVACY-CONSCIOUS ANALYTICS DISPATCHER
 * 
 * Strict Privacy Rules:
 * 1. NEVER collects or transmits Personally Identifiable Information (PII):
 *    No names, phone numbers, email addresses, personal messages, or photos.
 * 2. Anonymized event logging only for UX bottlenecks and conversion tracking.
 * 3. Operates in 'console' mode during development without calling external servers.
 * 4. Easily switches to Plausible, Umami, or GA4 once configured by the founder.
 */

import { BUSINESS_CONFIG } from '../config/businessConfig';

// Denylist of forbidden PII properties to guarantee privacy
const FORBIDDEN_KEYS = [
  'name',
  'customername',
  'recipientname',
  'email',
  'phone',
  'contactdetail',
  'specialmessage',
  'message',
  'photos',
  'photo',
  'notes',
  'pin',
  'passcode',
];

/**
 * Filter out any accidentally passed sensitive strings
 */
function sanitizeEventProps(props = {}) {
  const clean = {};
  for (const [key, value] of Object.entries(props)) {
    const lowerKey = key.toLowerCase();
    if (!FORBIDDEN_KEYS.includes(lowerKey)) {
      if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
        clean[key] = value;
      }
    }
  }
  return clean;
}

/**
 * Initialize analytics script if an external provider is configured
 */
export function initAnalytics() {
  if (typeof window === 'undefined') return;

  const provider = BUSINESS_CONFIG.analyticsProvider;

  if (provider === 'plausible' && BUSINESS_CONFIG.analyticsDomain) {
    if (!document.getElementById('plausible-script')) {
      const script = document.createElement('script');
      script.id = 'plausible-script';
      script.defer = true;
      script.dataset.domain = BUSINESS_CONFIG.analyticsDomain;
      script.src = 'https://plausible.io/js/script.js';
      document.head.appendChild(script);
    }
  } else if (provider === 'ga4' && BUSINESS_CONFIG.analyticsMeasurementId) {
    if (!document.getElementById('ga4-script')) {
      const script = document.createElement('script');
      script.id = 'ga4-script';
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${BUSINESS_CONFIG.analyticsMeasurementId}`;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      window.gtag = function () {
        window.dataLayer.push(arguments);
      };
      window.gtag('js', new Date());
      window.gtag('config', BUSINESS_CONFIG.analyticsMeasurementId, {
        anonymize_ip: true,
      });
    }
  }
}

/**
 * Track a page view
 */
export function trackPageView(pageTitle, path = window.location.pathname + window.location.search) {
  const provider = BUSINESS_CONFIG.analyticsProvider;

  if (provider === 'console') {
    // Development transparency
    if (import.meta.env?.DEV) {
      console.log(`[Everwish Analytics - PageView] ${pageTitle} -> ${path}`);
    }
    return;
  }

  if (provider === 'plausible' && window.plausible) {
    window.plausible('pageview', { u: path });
  } else if (provider === 'ga4' && window.gtag) {
    window.gtag('event', 'page_view', {
      page_title: pageTitle,
      page_location: path,
    });
  }
}

/**
 * Track an anonymized conversion event
 */
export function trackEvent(eventName, rawProps = {}) {
  const cleanProps = sanitizeEventProps(rawProps);
  const provider = BUSINESS_CONFIG.analyticsProvider;

  if (provider === 'console') {
    if (import.meta.env?.DEV) {
      console.log(`[Everwish Analytics - Event] "${eventName}"`, cleanProps);
    }
    return;
  }

  if (provider === 'plausible' && window.plausible) {
    window.plausible(eventName, { props: cleanProps });
  } else if (provider === 'ga4' && window.gtag) {
    window.gtag('event', eventName, cleanProps);
  }
}
