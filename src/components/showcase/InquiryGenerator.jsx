import React, { useState } from 'react';
import {
  MessageCircle,
  Mail,
  Clock,
  Sparkles,
  Phone,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/businessConfig';
import { INITIAL_PACKAGES, EXPERIENCE_THEMES } from '../../config/designTokens';
import { Input, Select, Textarea } from '../common/FormControls';
import Button from '../common/Button';
import Badge from '../common/Badge';

/**
 * Pure helper utilities extracted outside React component render cycle
 */
function generateOrderReference() {
  return `EW-${Math.floor(100000 + Math.random() * 900000)}`;
}

function getIsoTimestamp() {
  return new Date().toISOString();
}

/**
 * LeadEnquirySystem (InquiryGenerator)
 * Polished, mobile-first, high-conversion order enquiry system.
 * Connects directly to WhatsApp, email, or an optional headless form endpoint (Formspree/Web3Forms).
 */
export default function InquiryGenerator({
  preselectedPackage = 'personalized',
  preselectedTheme = 'romantic',
}) {
  const [formData, setFormData] = useState({
    customerName: '',
    contactMethod: 'WhatsApp', // 'WhatsApp' | 'Email' | 'Phone Call'
    contactDetail: '', // WhatsApp number or email
    recipientName: '',
    relationship: 'Partner',
    deliveryDate: '',
    packageId: preselectedPackage,
    themeId: preselectedTheme,
    songPreference: '',
    specialMessage: '',
    customizationNotes: '',
    rushDelivery: false,
  });

  const [orderReference, setOrderReference] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [submissionMode, setSubmissionMode] = useState('direct'); // 'endpoint' | 'direct'
  const [endpointError, setEndpointError] = useState(null);
  const [errors, setErrors] = useState({});

  const selectedPkg =
    INITIAL_PACKAGES.find((p) => p.id === formData.packageId) || INITIAL_PACKAGES[1];
  const selectedThemeObj =
    EXPERIENCE_THEMES.find((t) => t.id === formData.themeId) || EXPERIENCE_THEMES[0];

  const contactMethodOptions = [
    { value: 'WhatsApp', label: 'WhatsApp (Fastest response)' },
    { value: 'Email', label: 'Email' },
    { value: 'Phone Call', label: 'Direct Phone Call' },
  ];

  const relationshipOptions = [
    { value: 'Partner', label: 'Romantic Partner / Spouse' },
    { value: 'Best Friend', label: 'Best Friend / Soul Sister / Best Mate' },
    { value: 'Sibling', label: 'Sister / Brother' },
    { value: 'Parent', label: 'Mother / Father' },
    { value: 'Child', label: 'Son / Daughter' },
    { value: 'Other', label: 'Colleague / Mentor / Other Special Person' },
  ];

  const packageOptions = INITIAL_PACKAGES.map((pkg) => ({
    value: pkg.id,
    label: `${pkg.name} — ₹${pkg.price.toLocaleString('en-IN')} (${pkg.turnaround})`,
  }));

  const themeOptions = [
    ...EXPERIENCE_THEMES.map((th) => ({
      value: th.id,
      label: `${th.title} (Curated Direction)`,
    })),
    { value: 'custom', label: 'Custom Style (Discuss with Designer)' },
  ];

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: null }));
    }
    if (endpointError) {
      setEndpointError(null);
    }
  };

  const validate = () => {
    const errs = {};
    if (!formData.customerName.trim() || formData.customerName.trim().length < 2) {
      errs.customerName = 'Please enter your full name.';
    }

    if (!formData.contactDetail.trim()) {
      errs.contactDetail =
        formData.contactMethod === 'Email'
          ? 'Please enter your email address.'
          : 'Please enter your 10-digit WhatsApp / phone number.';
    } else {
      if (formData.contactMethod === 'Email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.contactDetail.trim())) {
          errs.contactDetail = 'Please enter a valid email address (e.g. name@example.com).';
        }
      } else {
        const phoneDigits = formData.contactDetail.replace(/[^0-9]/g, '');
        if (phoneDigits.length < 10) {
          errs.contactDetail = 'Please enter a valid 10-digit phone number.';
        }
      }
    }

    if (!formData.recipientName.trim()) {
      errs.recipientName = "Please enter the birthday person's name.";
    }

    if (!formData.deliveryDate) {
      errs.deliveryDate = 'Please select their birthday date or desired delivery target.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const constructPayloadText = (refId) => {
    const lines = [
      `*New Birthday Website Commission Brief [${refId}]*`,
      `=======================================`,
      `*From:* ${formData.customerName}`,
      `*Preferred Contact:* ${formData.contactMethod} (${formData.contactDetail})`,
      `*Recipient:* ${formData.recipientName} (${formData.relationship})`,
      `*Target Celebration Date:* ${formData.deliveryDate}`,
      `*Package Selected:* ${selectedPkg.name} (₹${selectedPkg.price})`,
      `*Visual Theme:* ${selectedThemeObj ? selectedThemeObj.title : 'Custom Style'}`,
      `*Song / Music Choice:* ${formData.songPreference || 'Designer recommendation requested'}`,
      `*Special Memories / Notes:* ${formData.specialMessage || 'None provided yet'}`,
      `*Customization / Budget Notes:* ${formData.customizationNotes || 'Standard package'}`,
      `*Express Rush Delivery (<12h):* ${formData.rushDelivery ? 'YES (urgent priority)' : 'Standard (24–48h)'}`,
      `=======================================`,
      `Sent via Everwish Studios Direct Website Intake`,
    ];
    return lines.join('\n');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const refId = generateOrderReference();
    setOrderReference(refId);

    // If a real headless form submission endpoint is configured in businessConfig.js:
    if (BUSINESS_CONFIG.formSubmissionEndpoint && BUSINESS_CONFIG.formSubmissionEndpoint.trim()) {
      setIsSubmitting(true);
      setEndpointError(null);
      try {
        const response = await fetch(BUSINESS_CONFIG.formSubmissionEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            orderReference: refId,
            ...formData,
            packageName: selectedPkg.name,
            packagePrice: selectedPkg.price,
            themeName: selectedThemeObj ? selectedThemeObj.title : 'Custom',
            fullBriefText: constructPayloadText(refId),
            submittedAt: getIsoTimestamp(),
          }),
        });

        if (response.ok) {
          setSubmissionMode('endpoint');
          setSubmissionSuccess(true);
        } else {
          throw new Error('Form service returned an error status.');
        }
      } catch {
        setEndpointError(
          'Unable to reach the automated form endpoint. We have automatically prepared your verified WhatsApp brief below so you can proceed without delay.'
        );
        setSubmissionMode('direct');
        setSubmissionSuccess(true);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      // Default direct high-conversion WhatsApp + Mailto mode
      setSubmissionMode('direct');
      setSubmissionSuccess(true);
    }
  };

  const whatsappMessage = constructPayloadText(orderReference || 'EW-SAMPLE');
  const whatsappUrl = `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const mailtoUrl = `mailto:${BUSINESS_CONFIG.email}?subject=${encodeURIComponent(
    `Birthday Website Commission: ${formData.recipientName || 'New Project'} [${orderReference || 'EW-REQ'}]`
  )}&body=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div id="order-inquiry" className="w-full max-w-4xl mx-auto scroll-mt-24">
      
      {/* Developer Placeholder Warning Notice (if default demo phone is active) */}
      {BUSINESS_CONFIG.isPhonePlaceholder && (
        <div className="mb-4 p-3.5 rounded-2xl bg-amber-950/40 border border-amber-500/40 text-amber-200 text-xs flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-mono uppercase px-2 py-0.5 rounded bg-amber-500/20 border border-amber-500/30 text-[10px] font-bold">
              Founder Setup Notice
            </span>
            <span>
              WhatsApp is set to demo number <code>+{BUSINESS_CONFIG.whatsappNumber}</code>. Update your real 10-digit number in <code>src/config/businessConfig.js</code>.
            </span>
          </div>
        </div>
      )}

      <div className="p-6 sm:p-10 rounded-3xl bg-[#151926]/95 border border-[#D9BD88]/30 shadow-2xl backdrop-blur-md">
        
        {/* Header / Commercial Terms Banner */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 mb-8 border-b border-[#293046]">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <Badge variant="gold" size="sm" dot>
                Direct Studio Intake
              </Badge>
              <span className="text-xs text-[#FFF5E7]/60 font-mono">
                Reply SLA: {BUSINESS_CONFIG.typicalReplyTime}
              </span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#FFF5E7]">
              Start Your Custom Birthday Surprise
            </h3>
            <p className="text-xs sm:text-sm text-[#FFF5E7]/70 mt-1 max-w-xl leading-relaxed">
              Tell us about the person you are celebrating. We compile everything into a ready-to-send brief so we can finalize details together.
            </p>
          </div>

          {/* Transparent Pricing Pill */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#10131D] border border-[#D9BD88]/40 shrink-0 text-left lg:text-right space-y-1">
            <span className="text-[10px] uppercase font-mono tracking-wider text-[#D9BD88] block">
              Package Selected
            </span>
            <div className="flex lg:justify-end items-baseline gap-2">
              <span className="text-2xl font-serif font-bold text-[#FFF5E7]">
                ₹{selectedPkg.price.toLocaleString('en-IN')}
              </span>
              <span className="text-xs text-[#FFF5E7]/50 line-through">
                ₹{selectedPkg.originalPrice.toLocaleString('en-IN')}
              </span>
            </div>
            <span className="text-[11px] text-[#D9BD88] block">
              ✓ Delivery in {selectedPkg.turnaround}
            </span>
            <span className="text-[10px] text-[#FFF5E7]/40 block">
              No advance charged to discuss
            </span>
          </div>
        </div>

        {/* ── SUCCESS STATE SCREEN ── */}
        {submissionSuccess ? (
          <div className="py-6 space-y-6 animate-in fade-in duration-300">
            
            <div className="p-8 rounded-3xl bg-[#10131D] border-2 border-[#D9BD88]/40 text-center max-w-xl mx-auto shadow-2xl space-y-5">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#D9BD88]/15 border border-[#D9BD88]/40 flex items-center justify-center text-[#D9BD88]">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div>
                <span className="text-xs font-mono tracking-widest uppercase text-[#D9BD88]">
                  Reference ID: {orderReference}
                  {submissionMode === 'endpoint' ? ' • Dispatched via Studio Gateway' : ' • Direct Brief'}
                </span>
                <h4 className="text-2xl font-serif font-bold text-[#FFF5E7] mt-1">
                  Your Project Brief Is Ready!
                </h4>
                <p className="text-xs sm:text-sm text-[#FFF5E7]/70 mt-2 leading-relaxed">
                  We've assembled your custom specifications for <strong>{formData.recipientName}</strong>'s surprise under the <strong>{selectedPkg.name}</strong> package (₹{selectedPkg.price}).
                </p>
              </div>

              {endpointError && (
                <div className="p-3 rounded-xl bg-amber-950/40 border border-amber-500/30 text-amber-200 text-xs text-left">
                  {endpointError}
                </div>
              )}

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  variant="whatsapp"
                  size="lg"
                  icon={MessageCircle}
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  Send to WhatsApp & Chat
                </Button>
                <Button
                  variant="secondary-outline"
                  size="lg"
                  icon={Mail}
                  href={mailtoUrl}
                  className="w-full sm:w-auto"
                >
                  Send via Email
                </Button>
              </div>

              {/* Next Steps Guidance */}
              <div className="pt-4 border-t border-[#293046] text-left text-xs text-[#FFF5E7]/60 space-y-2 font-light">
                <p className="font-semibold text-[#D9BD88] uppercase tracking-wider text-[10px]">
                  What happens next?
                </p>
                <p>1. The founder receives your brief and confirms availability within 30 minutes.</p>
                <p>2. We discuss your song choice and provide a secure link to upload your photos.</p>
                <p>3. You review your private staging link within 24–48 hours before the midnight reveal.</p>
              </div>
            </div>

            <div className="text-center pt-2">
              <button
                type="button"
                onClick={() => setSubmissionSuccess(false)}
                className="text-xs text-[#D9BD88] hover:underline cursor-pointer"
              >
                ← Edit details or modify package selection
              </button>
            </div>
          </div>
        ) : (
          /* ── MAIN INTAKE FORM ── */
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Row 1: Customer Name & Preferred Contact Method */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Input
                id="customerName"
                label="Your Name"
                placeholder="e.g. Rahul Sharma"
                value={formData.customerName}
                onChange={(e) => handleInputChange('customerName', e.target.value)}
                error={errors.customerName}
                required
              />

              <Select
                id="contactMethod"
                label="Preferred Contact Channel"
                options={contactMethodOptions}
                value={formData.contactMethod}
                onChange={(e) => handleInputChange('contactMethod', e.target.value)}
                helperText="How should we reach you?"
              />
            </div>

            {/* Row 2: Contact Detail & Birthday Person Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Input
                id="contactDetail"
                label={
                  formData.contactMethod === 'Email'
                    ? 'Your Email Address'
                    : 'Your WhatsApp / Phone Number'
                }
                type={formData.contactMethod === 'Email' ? 'email' : 'tel'}
                placeholder={
                  formData.contactMethod === 'Email'
                    ? 'e.g. rahul@gmail.com'
                    : 'e.g. 9876543210'
                }
                value={formData.contactDetail}
                onChange={(e) => handleInputChange('contactDetail', e.target.value)}
                error={errors.contactDetail}
                icon={formData.contactMethod === 'Email' ? Mail : Phone}
                required
              />

              <Input
                id="recipientName"
                label="Birthday Person's Name"
                placeholder="e.g. Ananya"
                value={formData.recipientName}
                onChange={(e) => handleInputChange('recipientName', e.target.value)}
                error={errors.recipientName}
                required
              />
            </div>

            {/* Row 3: Relationship & Celebration / Delivery Target Date */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Select
                id="relationship"
                label="Relationship to Birthday Person"
                options={relationshipOptions}
                value={formData.relationship}
                onChange={(e) => handleInputChange('relationship', e.target.value)}
              />

              <Input
                id="deliveryDate"
                type="date"
                label="Target Celebration Date"
                value={formData.deliveryDate}
                onChange={(e) => handleInputChange('deliveryDate', e.target.value)}
                error={errors.deliveryDate}
                helperText="When should the website be ready?"
                required
              />
            </div>

            {/* Row 4: Package & Preferred Theme */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Select
                id="packageId"
                label="Selected Package"
                options={packageOptions}
                value={formData.packageId}
                onChange={(e) => handleInputChange('packageId', e.target.value)}
                helperText="Can be adjusted during consultation"
              />

              <Select
                id="themeId"
                label="Preferred Visual Direction"
                options={themeOptions}
                value={formData.themeId}
                onChange={(e) => handleInputChange('themeId', e.target.value)}
                helperText="Every style is 100% human-customized"
              />
            </div>

            {/* Row 5: Song preference & Rush Delivery Checkbox */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Input
                id="songPreference"
                label="Favorite Song or Background Track"
                placeholder="e.g. Kasoor by Prateek Kuhad, or romantic acoustic"
                value={formData.songPreference}
                onChange={(e) => handleInputChange('songPreference', e.target.value)}
                helperText="Optional: Spotify, YouTube or MP3"
              />

              <div className="flex flex-col justify-end pb-1">
                <label className="flex items-start gap-3 p-3.5 rounded-xl bg-[#10131D]/80 border border-[#293046] cursor-pointer hover:border-[#D9BD88]/40 transition-colors">
                  <input
                    type="checkbox"
                    checked={formData.rushDelivery}
                    onChange={(e) => handleInputChange('rushDelivery', e.target.checked)}
                    className="mt-0.5 w-4 h-4 rounded text-[#D9BD88] focus:ring-[#D9BD88] accent-[#D9BD88]"
                  />
                  <div className="text-xs">
                    <span className="font-medium text-[#FFF5E7] block">
                      Express Rush Turnaround (&lt;12 Hours)
                    </span>
                    <span className="text-[#FFF5E7]/50 text-[11px]">
                      For urgent midnight surprises today (subject to studio availability)
                    </span>
                  </div>
                </label>
              </div>
            </div>

            {/* Row 6: Personal Letter / Special Memories Notes */}
            <Textarea
              id="specialMessage"
              label="Key Memories, Jokes, or Personal Message"
              placeholder="Tell us what you would like to include (e.g. 'Met in college 2021, road trip to Goa, want an interactive scratch card with inside jokes...')"
              value={formData.specialMessage}
              onChange={(e) => handleInputChange('specialMessage', e.target.value)}
              rows={3}
              maxLength={600}
              helperText="Share whatever comes to mind; we help structure it"
            />

            {/* Row 7: Optional Customization / Budget notes */}
            <Input
              id="customizationNotes"
              label="Optional Custom Requests or Special Features"
              placeholder="e.g. Extra video message embeds, custom domain slug, physical QR card advice"
              value={formData.customizationNotes}
              onChange={(e) => handleInputChange('customizationNotes', e.target.value)}
              helperText="Optional"
            />

            {/* Commercial terms & Privacy summary */}
            <div className="p-4 rounded-2xl bg-[#10131D]/60 border border-[#293046] text-xs text-[#FFF5E7]/70 space-y-2">
              <div className="flex items-center gap-2 text-[#D9BD88] font-medium">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>Commercial Terms & Privacy Guarantee</span>
              </div>
              <p className="leading-relaxed">
                • <strong>No Automatic Charges:</strong> Submitting this brief costs nothing. A 50% deposit is requested only after we confirm delivery feasibility.
              </p>
              <p className="leading-relaxed">
                • <strong>Privacy Commitment:</strong> {BUSINESS_CONFIG.privacyNotice}
              </p>
            </div>

            {/* Submit Action Bar */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#293046]">
              <div className="text-xs text-[#FFF5E7]/60 flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#D9BD88]" />
                <span>Founder reply within 30 minutes during studio hours.</span>
              </div>

              <Button
                type="submit"
                variant="primary-gold"
                size="lg"
                icon={Sparkles}
                loading={isSubmitting}
                className="w-full sm:w-auto"
              >
                {BUSINESS_CONFIG.formSubmissionEndpoint ? 'Submit Project Brief' : 'Generate Brief & Connect'}
              </Button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
