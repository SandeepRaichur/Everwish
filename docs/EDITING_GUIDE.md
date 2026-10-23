# Everwish — Website Customization & Editing Guide

Welcome to Everwish! This guide explains how to customize and maintain your website without needing to touch complex React component code.

---

## 1. The Master File: Which File to Edit

Almost all website content, branding, pricing, contact details, features, and demos are controlled by a single master configuration file:

📁 **`src/config/siteConfig.js`**

You do **not** need to edit individual React components to make standard business updates. Whenever you save changes to `src/config/siteConfig.js`, Vite's Hot Module Replacement (HMR) will instantly refresh your browser preview.

---

## 2. How to Change the Brand Name and Tagline

Open `src/config/siteConfig.js` and locate Section 1: **`brand`**:

```javascript
brand: {
  name: "Everwish",                           // Your brand wordmark
  legalEntity: "Everwish Keepsake Studios",   // Legal copyright entity
  tagline: "Handcrafted Cinematic Birthday Websites",
  descriptor: "Personalized Digital Birthday Keepsakes",
  heroHeadline: "More than a birthday wish.",  // Main hero headline
  heroHeadlineItalic: "A moment they'll never forget.", // Gold gradient italic accent
  heroSubheadline: "Beautiful, personalized birthday websites made from your photos...",
  heroBadge: "Handcrafted Personal Birthday Websites • From ₹499",
  heroStats: [
    { value: "100%", label: "Human-Coded Craft" },
    { value: "24–48h", label: "Standard Turnaround" },
    { value: "Private", label: "Ad-Free Keepsake URL" },
    { value: "₹499 – ₹1,499", label: "Introductory Prices" },
  ],
  // ...
}
```

* **Brand Name**: Changing `name` automatically updates the Navbar brand, Footer, Studio header, and copyright notices.
* **Hero Headline**: Changing `heroHeadline` and `heroHeadlineItalic` immediately alters the primary visual opener on the home page.
* **Hero Stats**: You can add, edit, or reorder stats in `heroStats`.

---

## 3. How to Update WhatsApp Number & Social Links

Locate Section 2: **`business`**:

```javascript
business: {
  // ⚠️ YOUR WHATSAPP NUMBER: Include country code with NO spaces, dashes, or '+'
  // Example for India: "919876543210"
  whatsappNumber: "919999999999",
  isPhonePlaceholder: true, // Set to false once you enter your real phone number!

  email: "hello@everwish.in",
  supportHours: "9:00 AM – 11:00 PM IST (7 Days a Week)",
  typicalReplyTime: "Under 30 minutes during studio hours",
  standardTurnaround: "24–48 hours from media receipt",

  social: {
    whatsapp: "https://wa.me/919999999999",
    instagram: "https://instagram.com/everwish.in",
    twitter: "https://twitter.com/everwish_studio",
    email: "mailto:hello@everwish.in",
  },
  
  defaultInquiryMessage: "Hi Everwish! I want to create a custom birthday website surprise...",
  rushInquiryMessage: "Hi Everwish! I need an express rush birthday website delivered within 12 hours..."
}
```

* **WhatsApp CTA Integration**: Every "Chat on WhatsApp", "Check Rush Availability", and "Inquiry Form" action across the entire website automatically constructs its WhatsApp link using `business.whatsappNumber`.
* **Founder Setup Notice**: When `isPhonePlaceholder` is `true`, a subtle amber reminder appears in the order intake form advising you to add your real number. Set it to `false` when ready.

---

## 4. How to Change Prices and Packages

Locate Section 5: **`packages`**:

```javascript
packages: [
  {
    id: "starter",
    name: "Starter Keepsake",
    tagline: "Heartfelt, elegant, and delivered in 24 hours.",
    price: 499,          // Current selling price (in INR)
    originalPrice: 999,  // Strikethrough price
    turnaround: "24 hours",
    popular: false,      // Set to true to highlight with a gold border
    badgeText: "Introductory Rate",
    ctaLabel: "Choose Starter",
    features: [
      { label: "Personalized Midnight Greeting", included: true },
      { label: "Curated Photo Album (Up to 8 photos)", included: true },
      // ...
    ],
    idealFor: "Best friends, colleagues, and sweet budget-conscious surprises.",
  },
  // ...
]
```

* **Updating Prices**: Change `price: 499` to your new amount (e.g. `price: 599`). The pricing table, inquiry dropdowns, package pill cards, and WhatsApp commission payload formatters will immediately reflect the new rate.
* **Adding Feature Bullets**: Add `{ label: "New feature name", included: true }` to the `features` array.
* **Highlighting the Popular Choice**: Set `popular: true` on your preferred tier to give it the champagne gold highlight and elevated shadow.

---

## 5. How to Change Images and Media

Locate `brand.logoImage` or the image paths inside `themes` and `demos`:

```javascript
brand: {
  // Path to your logo in /public folder (e.g. "/logo.svg" or "/my-logo.png")
  // If set to null, the site elegantly renders the stylized monogram letter
  logoImage: null, 
}
```

For birthday demo photos and artwork:
1. Place image files into the **`public/`** folder (e.g., `public/images/romantic-cover.webp`).
2. Reference them starting with `/` in `siteConfig.js`:
   ```javascript
   image: "/images/romantic-cover.webp"
   ```
3. Use modern compressed formats (`.webp` or `.svg`) to ensure lightning-fast mobile loading.

---

## 6. How to Add or Remove a Section (Feature Switches)

Locate Section 3: **`features`**:

```javascript
features: {
  showThemes: true,              // 3 artistic directions & live demo launcher
  showHowItWorks: true,          // 4-step creation journey
  showPricing: true,             // Commercial pricing cards & tiers
  showEmotionalValue: true,      // Letters, music player, & memory countdown preview
  showTrustSection: true,        // Privacy pillars & customer data safeguards
  showFaq: true,                 // FAQ accordion
  showInquiryForm: true,         // Interactive order intake questionnaire
  showFinalCta: true,            // Closing conversion section
  showDesignSystemTab: true,     // Top navigation tab for design tokens spec
  enableRushDeliveryOption: true // <12h express rush delivery toggle in intake form
}
```

* **To hide any section**: Change its value to `false`. For example: `showFaq: false` immediately hides the FAQ section from the page without causing layout shifts or console errors.
* **To re-enable**: Change it back to `true`.

---

## 7. How to Customize Birthday Demos

Locate Section 10: **`demos`**. Everwish comes bundled with 3 interactive experiences:
- `demos.romantic` (Ananya — 24th Birthday)
- `demos.playful` (Kabir — 22nd Birthday)
- `demos.family` (Papa — Golden 50th Jubilee)

Each demo object contains:
* `recipientName`: Name of the birthday person.
* `senderName`: Who the gift is from.
* `opening`: Cinematic opening greeting, headline, and subtext.
* `personalLetter`: Multi-paragraph heartfelt letter.
* `photoCollection`: Array of photos with captions, dates, categories, and memory stories.
* `timeline`: Milestone years, titles, and descriptions.
* `interactiveMoment`:
  - `waxEnvelope` (tactile unsealing letter animation)
  - `scratchCard` (interactive coin scratch reveal for inside jokes)
  - `audioBlessings` (audio player simulation with family voice messages)
* `closing`: Celebratory closing message and signature.

To add or modify milestones, simply add an object to the `timeline` array:
```javascript
{
  year: "2024",
  title: "First Trip Together",
  description: "Late night walks by the beach and missing our morning train."
}
```

---

## 8. How to Test Changes Locally

1. **Start the local dev server** (if not already running):
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

2. **Run the Automated QA Audit**:
   ```bash
   node test/qa-audit.js
   ```
   This validates all 7 test groups (76+ automated checks) covering configuration integrity, URLs, form validation, and security leaks.

3. **Check Code Quality & Linting**:
   ```bash
   npx oxlint
   ```
   Ensure 0 errors and 0 warnings are returned.

4. **Test the Production Build**:
   ```bash
   npm run build
   ```
   Verifies that the Vite bundler compiles clean production assets into `dist/`.

---

## 9. How to Deploy Changes

Everwish is fully configured for zero-configuration, lightning-fast deployment on modern static hosting platforms:

### Option A: Cloudflare Pages (Recommended)
1. Push your updated code to your GitHub repository:
   ```bash
   git add .
   git commit -m "chore: update pricing and contact details in siteConfig"
   git push origin main
   ```
2. In the Cloudflare Pages dashboard:
   - **Framework Preset**: `Vite`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
3. Cloudflare Pages automatically detects changes and redeploys your site in under 60 seconds.

### Option B: Vercel or Netlify
* **Build command**: `npm run build`
* **Output directory**: `dist`
* SPA redirects are already handled by `public/_redirects`.

---

## 10. Settings That Still Require Editing Outside `siteConfig.js`

While `siteConfig.js` controls almost everything on your site, the following 3 items must be configured in external files or third-party dashboards due to web browser and DNS architecture:

| Setting | Location | Reason |
| :--- | :--- | :--- |
| **Raw HTML Metadata** | `index.html` | Raw HTML `<title>`, `<meta description>`, and `<meta property="og:*">` tags reside in `index.html` so that non-JavaScript social scrapers (WhatsApp link preview, iMessage, Twitter bot) can read metadata before client-side JavaScript execution. |
| **Custom Domain & DNS** | Cloudflare / Namecheap / GoDaddy | Connecting your custom domain (e.g. `everwish.in`) requires adding CNAME/A records in your DNS provider's dashboard. |
| **Google Search Console** | Google Search Console Dashboard | Verifying site ownership requires adding a DNS TXT record or uploading an HTML verification token file into `public/`. |
