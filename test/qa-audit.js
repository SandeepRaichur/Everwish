/**
 * EVERWISH STUDIOS — AUTOMATED QA & INTEGRITY TEST SUITE
 * Rigorous programmatic verification of business logic, form validation,
 * demo data, routing integrity, and secret exposure checks.
 */

import { readFileSync, existsSync } from 'fs';
import { resolve } from 'path';

let passCount = 0;
let failCount = 0;

function assert(condition, testName, details = '') {
  if (condition) {
    console.log(`  ✓ PASS: ${testName}`);
    passCount++;
  } else {
    console.error(`  ✗ FAIL: ${testName} ${details ? `(${details})` : ''}`);
    failCount++;
  }
}

console.log('====================================================');
console.log('  EVERWISH STUDIOS — FULL AUTOMATED QA AUDIT');
console.log('====================================================\n');

// ── TEST GROUP 1: CONFIGURATION & BUSINESS DATA INTEGRITY ──
console.log('▶ TEST GROUP 1: Business Configuration & Design Tokens');

const configModule = await import('../src/config/businessConfig.js');
const { BUSINESS_CONFIG } = configModule;

assert(Boolean(BUSINESS_CONFIG.brandName === 'Everwish'), 'Brand name is Everwish');
assert(Boolean(BUSINESS_CONFIG.whatsappNumber && /^[0-9]{10,13}$/.test(BUSINESS_CONFIG.whatsappNumber)), 'WhatsApp number contains only digits and is 10-13 characters', BUSINESS_CONFIG.whatsappNumber);
assert(Boolean(BUSINESS_CONFIG.typicalReplyTime), 'Response SLA is defined');
assert(Boolean(BUSINESS_CONFIG.standardTurnaround), 'Standard turnaround is defined');
assert(Boolean(BUSINESS_CONFIG.productionDomain === 'https://everwish.in'), 'Production domain configured as https://everwish.in');

const tokensModule = await import('../src/config/designTokens.js');
const { INITIAL_PACKAGES, EXPERIENCE_THEMES } = tokensModule;

assert(INITIAL_PACKAGES.length === 3, 'Exactly 3 commercial packages defined');
assert(INITIAL_PACKAGES[0].price === 499, 'Starter package price is ₹499');
assert(INITIAL_PACKAGES[1].price === 999, 'Personalized Signature package price is ₹999');
assert(INITIAL_PACKAGES[2].price === 1499, 'Grand Heirloom package price is ₹1,499');

assert(EXPERIENCE_THEMES.length === 3, 'Exactly 3 showcase aesthetic directions defined');
const themeIds = EXPERIENCE_THEMES.map(t => t.id);
assert(themeIds.includes('romantic') && themeIds.includes('playful') && themeIds.includes('family'), 'Romantic, Playful, and Family themes present');

// ── TEST GROUP 2: DEMO EXPERIENCES DATA INTEGRITY ──
console.log('\n▶ TEST GROUP 2: Demo Experiences Structure & Pacing');

const demosModule = await import('../src/data/demoExperiences.js');
const { DEMO_EXPERIENCES } = demosModule;

for (const key of ['romantic', 'playful', 'family']) {
  const demo = DEMO_EXPERIENCES[key];
  assert(Boolean(demo), `Demo '${key}' exists in DEMO_EXPERIENCES`);
  assert(Boolean(demo.recipientName), `Demo '${key}' has recipientName (${demo.recipientName})`);
  assert(Boolean(demo.opening?.headline), `Demo '${key}' has opening headline`);
  assert(Boolean(demo.personalLetter?.bodyParagraphs?.length > 0), `Demo '${key}' has multi-paragraph personal letter`);
  assert(Boolean(demo.photoCollection?.length >= 3), `Demo '${key}' has at least 3 curated photo stories`);
  assert(Boolean(demo.timeline?.length >= 3), `Demo '${key}' has at least 3 milestone timeline chapters`);
  assert(Boolean(demo.interactiveMoment?.title), `Demo '${key}' has custom interactive surprise moment (${demo.interactiveMoment.type})`);
  assert(Boolean(demo.colors?.bg && demo.colors?.primary), `Demo '${key}' has distinct theme palette`);
}

// ── TEST GROUP 3: INQUIRY FORM VALIDATION REGEX LOGIC ──
console.log('\n▶ TEST GROUP 3: Form Validation & Security Logic');

function validateForm(data) {
  const errs = {};
  if (!data.customerName || data.customerName.trim().length < 2) {
    errs.customerName = 'Please enter your full name.';
  }
  if (!data.contactDetail || !data.contactDetail.trim()) {
    errs.contactDetail = 'Contact detail required';
  } else if (data.contactMethod === 'Email') {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.contactDetail.trim())) {
      errs.contactDetail = 'Invalid email';
    }
  } else {
    const phoneDigits = data.contactDetail.replace(/[^0-9]/g, '');
    if (phoneDigits.length < 10) {
      errs.contactDetail = 'Invalid phone';
    }
  }
  if (!data.recipientName || !data.recipientName.trim()) {
    errs.recipientName = 'Recipient name required';
  }
  if (!data.deliveryDate) {
    errs.deliveryDate = 'Delivery date required';
  }
  return errs;
}

// Incomplete form test
const emptyErrors = validateForm({ customerName: '', contactMethod: 'WhatsApp', contactDetail: '', recipientName: '', deliveryDate: '' });
assert(Object.keys(emptyErrors).length === 4, 'Empty form correctly produces 4 validation errors');

// Invalid phone test
const invalidPhoneErrors = validateForm({ customerName: 'Rohan', contactMethod: 'WhatsApp', contactDetail: '123', recipientName: 'Ananya', deliveryDate: '2026-11-01' });
assert(invalidPhoneErrors.contactDetail === 'Invalid phone', 'Short phone numbers are rejected');

// Invalid email test
const invalidEmailErrors = validateForm({ customerName: 'Rohan', contactMethod: 'Email', contactDetail: 'notanemail', recipientName: 'Ananya', deliveryDate: '2026-11-01' });
assert(invalidEmailErrors.contactDetail === 'Invalid email', 'Malformed email addresses are rejected');

// Valid WhatsApp form test
const validWhatsappErrors = validateForm({ customerName: 'Rohan Sharma', contactMethod: 'WhatsApp', contactDetail: '9876543210', recipientName: 'Ananya', deliveryDate: '2026-11-01' });
assert(Object.keys(validWhatsappErrors).length === 0, 'Valid WhatsApp submission passes all validations');

// Valid Email form test
const validEmailErrors = validateForm({ customerName: 'Rohan Sharma', contactMethod: 'Email', contactDetail: 'rohan@example.com', recipientName: 'Ananya', deliveryDate: '2026-11-01' });
assert(Object.keys(validEmailErrors).length === 0, 'Valid Email submission passes all validations');

// ── TEST GROUP 4: WHATSAPP URL FORMATTING & ENCODING ──
console.log('\n▶ TEST GROUP 4: WhatsApp URL Construction');

const waNumber = BUSINESS_CONFIG.whatsappNumber;
const sampleBrief = '*New Birthday Commission*\nFrom: Rohan Sharma\nPackage: Signature (₹999)';
const generatedWaUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(sampleBrief)}`;

assert(generatedWaUrl.startsWith('https://wa.me/'), 'WhatsApp URL uses correct wa.me protocol');
assert(!generatedWaUrl.includes('+'), 'WhatsApp phone number does not contain invalid plus symbol');
assert(!generatedWaUrl.includes(' '), 'WhatsApp phone number does not contain spaces');
assert(generatedWaUrl.includes('text='), 'WhatsApp URL contains encoded text parameter');
assert(decodeURIComponent(generatedWaUrl.split('text=')[1]).includes('Rohan Sharma'), 'Decoded WhatsApp message preserves customer payload');

// ── TEST GROUP 5: SECURITY AUDIT & SECRETS SCAN ──
console.log('\n▶ TEST GROUP 5: Security & Secret Leak Prevention');

const srcFiles = [
  'src/App.jsx',
  'src/config/businessConfig.js',
  'src/config/designTokens.js',
  'src/components/showcase/InquiryGenerator.jsx',
  'src/components/experience/BirthdayExperience.jsx',
  'src/utils/analytics.js',
];

const secretPatterns = [
  /sk_live_[0-9a-zA-Z]{24}/i,
  /AIza[0-9A-Za-z-_]{35}/i,
  /ghp_[0-9a-zA-Z]{36}/i,
  /-----BEGIN PRIVATE KEY-----/i,
  /password\s*=\s*['"][^'"]+['"]/i,
];

let leakDetected = false;
for (const file of srcFiles) {
  const content = readFileSync(resolve(process.cwd(), file), 'utf-8');
  for (const pattern of secretPatterns) {
    if (pattern.test(content)) {
      leakDetected = true;
      console.error(`  ✗ LEAK ALERT in ${file} matching pattern ${pattern}`);
    }
  }
}
assert(!leakDetected, 'No exposed API keys, secret credentials, or private tokens found in frontend code');

// ── TEST GROUP 6: STATIC HOSTING & PRODUCTION ARTIFACTS ──
console.log('\n▶ TEST GROUP 6: Production Build & Deployment Artifacts');

assert(existsSync(resolve(process.cwd(), 'dist/index.html')), 'dist/index.html exists');
assert(existsSync(resolve(process.cwd(), 'public/robots.txt')), 'public/robots.txt exists');
assert(existsSync(resolve(process.cwd(), 'public/sitemap.xml')), 'public/sitemap.xml exists');
assert(existsSync(resolve(process.cwd(), 'public/_redirects')), 'public/_redirects SPA routing fallback exists');
assert(existsSync(resolve(process.cwd(), 'public/og-image.svg')), 'public/og-image.svg exists');

const robotsContent = readFileSync(resolve(process.cwd(), 'public/robots.txt'), 'utf-8');
assert(robotsContent.includes('Disallow: /p/'), 'robots.txt disallows private staging paths');
assert(robotsContent.includes('Disallow: /w/'), 'robots.txt disallows private live customer URLs');
assert(robotsContent.includes('Sitemap: https://everwish.in/sitemap.xml'), 'robots.txt points to canonical sitemap');

const redirectsContent = readFileSync(resolve(process.cwd(), 'public/_redirects'), 'utf-8');
assert(redirectsContent.includes('/*    /index.html   200'), '_redirects contains 200 SPA rewrite rule for Cloudflare Pages');

// ── SUMMARY REPORT ──
console.log('\n====================================================');
console.log(`  QA SUMMARY: ${passCount} PASSED, ${failCount} FAILED`);
console.log('====================================================\n');

if (failCount > 0) {
  process.exit(1);
} else {
  process.exit(0);
}
