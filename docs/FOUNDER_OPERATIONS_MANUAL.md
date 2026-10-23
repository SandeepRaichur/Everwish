# Everwish Studios — Founder Operations & Lead Fulfillment Manual

*Standard Operating Procedures (SOP) for Solo Founder Lead Ingestion, Creative Production, and Customer Fulfillment.*

---

## Executive Summary & Guiding Philosophy

Everwish is a boutique digital keepsake studio where personalized birthday websites are created with handcrafted care. Because we do not rely on generic automated template mills, our competitive advantage lies in:
1. **Rapid, empathetic communication** (under 30-minute founder response during studio hours).
2. **Zero-friction onboarding** (customers do not create accounts or navigate complex portals).
3. **Transparent commercial clarity** (honest pricing, 50% deposit policy, no surprise costs).
4. **Cinematic, emotional execution** (handcrafted pacing, personalized audio/video, and seamless mobile polish).

This document serves as your operational blueprint from the moment a lead lands on your phone or inbox through to final midnight delivery and client testimonial acquisition.

---

## Master 8-Step Lead-to-Fulfillment Workflow

```
[ Step 1: Receive Lead ]
          │ (WhatsApp / Email / Form)
          ▼
[ Step 2: Review Requirements ]
          │ (Check date, package scope, song, feasibility)
          ▼
[ Step 3: Confirm Availability & Package ]
          │ (Send personalized greeting + scope clarification)
          ▼
[ Step 4: Request 50% Advance Booking Deposit ]
          │ (Send UPI QR / payment link, acknowledge receipt)
          ▼
[ Step 5: Collect Approved Media & Content ]
          │ (Share private Google Drive upload link or WhatsApp media drop)
          ▼
[ Step 6: Handcraft & Mobile-Test Website ]
          │ (Configure tokens, music player, timeline, scratchcard, test iOS/Android)
          ▼
[ Step 7: Deliver Staging URL, Revise & Finalize ]
          │ (Customer review -> instant polish -> collect final 50% -> live midnight reveal)
          ▼
[ Step 8: Post-Midnight Follow-Up & Feedback ]
          │ (Check how the reveal went, capture screenshot review, request referrals)
```

---

## Step 1: Receiving the Lead

### Ingestion Channels
1. **WhatsApp Direct Ingestion (Primary Channel):**
   - Visitor fills out the website inquiry form and taps **"Send to WhatsApp & Chat"**.
   - Your WhatsApp will receive a pre-formatted message payload with Reference ID (`EW-XXXXXX`), customer name, recipient name, relationship, target date, selected package, music preference, and personal notes.
2. **Direct Mailto Ingestion:**
   - For visitors who prefer email, the form generates an identical pre-structured draft sent to `hello@everwish.in`.
3. **Optional Headless Form Endpoint (Web3Forms / Formspree):**
   - When configured in `src/config/businessConfig.js`, leads are emailed to you instantly via webhook with JSON payload.

### Immediate Action (Within 15–30 Minutes)
- Check your phone notification.
- Save the customer's contact as:
  `[EW] CustomerName - RecipientName (Target Date)`
  *(Example: `[EW] Rahul - Ananya (Oct 28)`)*.

---

## Step 2: Review Requirements & Feasibility

Before replying, spend 2 minutes reviewing the inquiry brief against your calendar:
1. **Target Date vs. Studio Turnaround:**
   - **Starter Keepsake (₹499):** 24-hour turnaround feasible.
   - **Personalized Signature (₹999):** Standard 24–48 hours.
   - **Grand Heirloom (₹1,499):** 48 hours recommended (voice notes + timeline + scratch card).
   - **Express Rush (<12 Hours):** Requires immediate availability. Add ₹300 rush fee if requested same-day.
2. **Scope Complexity:**
   - Did they request custom audio, multiple family video messages, or a specific song?
   - Verify whether their requested song is readily available on Spotify or YouTube.

---

## Step 3: Confirm Availability & Package

Send an immediate, warm, professional message acknowledging their project. Avoid sounding like an automated bot.

### Copy-Paste WhatsApp Script 1 — Availability Confirmation:
```text
Hi {{customerName}}! 👋 This is Sandeep from Everwish Studios.

I received your inquiry for {{recipientName}}'s birthday surprise on {{deliveryDate}}! 

The {{packageName}} package is a wonderful fit for this — I love the idea of {{mentionOnePersonalDetail, e.g. "including the road trip memories and Kasoor as the background song"}}.

We have calendar availability to build and deliver the private staging link by {{stagingDate, e.g. tomorrow evening by 8:00 PM}}, giving you plenty of time to review everything before the midnight reveal.

Does this timeline work for you?
```

---

## Step 4: Request 50% Advance Booking Deposit

We never ask for payment before confirming feasibility. Once the customer agrees to the timeline:

### Terms of Payment:
- **50% Advance Deposit:** Books the slot on your production calendar and begins design work.
- **50% Balance:** Payable only after the customer reviews the working staging website and gives 100% approval.

### Copy-Paste WhatsApp Script 2 — Payment Request:
```text
Perfect! To lock in your production slot and start assembling {{recipientName}}'s website:

• Package: {{packageName}} (₹{{totalPrice}})
• Advance Deposit (50%): ₹{{depositAmount}}
• Balance (50%): ₹{{depositAmount}} payable upon your final approval

You can transfer via UPI to:
👉 UPI ID: everwish@upi (or scan QR code attached below)

Please reply with a quick screenshot once done, and I will immediately share your private photo upload folder! 📸✨
```

*(Attach your official UPI QR Code graphic).*

### Upon Payment Confirmation:
Send immediate receipt acknowledgment:
```text
Payment of ₹{{depositAmount}} received with thanks! 🎉 Your commission is officially locked in (Ref: {{orderReference}}). Let's gather the photos and memories next.
```

---

## Step 5: Collect Approved Media & Content

To prevent scattered files and WhatsApp image compression, use a clean submission link or dedicated WhatsApp media drop.

### Organization Method:
1. **Google Drive / Dropbox Folder (Recommended):**
   - Create a Google Drive folder: `Everwish / Projects / [Ref] Customer - Recipient`.
   - Set share permissions to "Anyone with the link can edit/upload".
2. **WhatsApp Document Upload (Fallback):**
   - Ask customer to send photos as "Documents" to preserve high-resolution clarity.

### Copy-Paste WhatsApp Script 3 — Content Checklist:
```text
Here is your private, secure upload link for {{recipientName}}'s photos:
🔗 [Paste Google Drive Link]

Here is what we need to make it magical:
1. Photos: {{minPhotos}}–{{maxPhotos}} of your favorite high-res photos (ordered chronologically or numbered if you have a preference).
2. Key Moments: Dates, years, or short 1-line captions for the memory timeline.
3. Personal Letter: The exact note or wishes you want revealed when they tap the sealed envelope.
4. Voice Note (Optional): If you chose Grand Heirloom, record a 30–60 second voice wish directly in WhatsApp!

Take your time today. As soon as you finish uploading, give me a quick ping here! 🙌
```

---

## Step 6: Handcraft & Mobile-Test the Website

### Production Steps:
1. **Create Client Experience Branch / Route:**
   - Duplicate the appropriate template structure from `src/data/demoExperiences.js`.
   - Set up the client data object:
     - `recipientName`: e.g. "Ananya"
     - `celebrantAge`: e.g. "24"
     - `coverImage`: high-res portrait hero photo.
     - `audioTrack`: selected MP3 or Spotify/YouTube background soundtrack.
     - `envelopeLetter`: client's handwritten or heartfelt letter text.
     - `gallery`: formatted photos with captions.
     - `milestones`: relationship timeline cards.
     - `scratchCard`: custom inside jokes and reward message.
2. **Quality & Responsiveness Checks (Desktop & Mobile):**
   - Verify on mobile viewport (iPhone 375px & Android 412px).
   - Ensure all touch targets are at least 44×44px.
   - Verify audio autoplay permissions (with clear user-initiated play fallback).
   - Test scratch card swipe action on touchscreen.
   - Check photo aspect ratios so faces are never cropped awkwardly.
   - Run `npx oxlint` to ensure 0 lint errors.

---

## Step 7: Deliver Private Staging URL, Revise & Finalize

### Staging Delivery:
Send the preview link at least 4–6 hours before the planned reveal.

### Copy-Paste WhatsApp Script 4 — Staging Review:
```text
Hi {{customerName}}! 🌟 {{recipientName}}'s birthday surprise website is ready for your private preview:

🔗 Staging Link: https://everwish.in/p/{{clientSlug}}?preview=true

Please open this on your phone (with sound on 🎵) to experience it exactly as {{recipientName}} will!

Take a look and let me know:
- Any typos in dates or names?
- Any photo order you'd like adjusted?
- Any word changes in the personal letter?

We have up to 2 rounds of quick revisions included. Once you're 100% happy, we finalize the live midnight link!
```

### Addressing Revisions:
- Execute small text and photo swaps immediately (usually under 20 minutes).
- Once approved, send the final balance request:

### Copy-Paste WhatsApp Script 5 — Final Approval & Balance:
```text
I am so thrilled you love it! ❤️

Here is the final step:
• Remaining Balance (50%): ₹{{depositAmount}}
👉 UPI ID: everwish@upi

Once confirmed, I will activate the live, permanent birthday link and generate your custom QR gift card graphic for the midnight reveal!
```

### Final Delivery:
```text
Here is your official live birthday surprise URL:
🔗 https://everwish.in/w/{{clientSlug}}

💡 Pro-tips for the reveal tonight:
1. Send it at 12:00 AM sharp with: "I made something special for you — put your headphones on and open this: [URL]".
2. Or print the attached high-resolution QR card and place it inside a physical gift box or bouquet! 🎁

Wishing {{recipientName}} the most magical birthday! Let me know tomorrow how they reacted! 🥳
```

---

## Step 8: Post-Midnight Follow-Up & Feedback

Wait until late morning the next day (e.g. 11:30 AM) to follow up. Happy customers at this moment are your highest-converting source of word-of-mouth referrals.

### Copy-Paste WhatsApp Script 6 — Morning-After Follow-Up:
```text
Good morning {{customerName}}! ☀️ Hope the birthday celebrations last night were unforgettable! 

How did {{recipientName}} react when they opened their website? Did they love the surprise? 🥰
```

### Capturing the Review:
When they reply enthusiastically:
```text
That brings me so much joy to hear! 🥹 Moments like that are exactly why I run Everwish Studios.

Would you mind if I share a screenshot of your kind words (with your names and personal details blurred for privacy) on our reviews section?

Also, whenever your friends or family have an upcoming milestone, feel free to pass on my number — I'd love to craft something special for them as well! ✨
```

---

## Operational Troubleshooting & FAQs

| Scenario | Recommended Founder Action |
| :--- | :--- |
| **Customer wants delivery in 4 hours** | Check your calendar. If you can deliver, confirm immediately and quote standard package + ₹300 express surge. If unavailable, politely decline rather than missing a midnight deadline. |
| **Photos provided are low quality/blurry** | Run them through a lightweight image enhancer, or politely ask the customer: *"This photo is quite small; do you have the original file from your camera roll rather than a WhatsApp forwarded version?"* |
| **Customer asks for audio that is copyrighted** | Explain that we embed authorized streaming audio previews or client-provided MP3 files for personal non-commercial family gifts. |
| **Customer requests refund before staging** | Full refund if work has not started. If work has started, retain 50% deposit for creative labor as stated in our commercial terms. |
| **Customer asks for hosting longevity** | Clarify that their website stays active and hosted for a minimum of 1 full year with no recurring hosting charges. |

---

*Manual maintained by Everwish Keepsake Studios. Last updated: October 2026.*
