import React, { useState } from 'react';
import { MessageCircle, Mail, Clock, Sparkles } from 'lucide-react';
import { BRAND, INITIAL_PACKAGES, EXPERIENCE_THEMES } from '../../config/designTokens';
import { Input, Select, Textarea } from '../common/FormControls';
import Button from '../common/Button';
import Badge from '../common/Badge';
import { SuccessStateCard } from '../common/StatusStates';

/**
 * High-Conversion Interactive Order & Inquiry Form
 * Compiles custom specs directly into WhatsApp & Email payloads with zero backend dependency.
 */
export default function InquiryGenerator({
  preselectedPackage = 'personalized',
  preselectedTheme = 'romantic',
}) {
  const [formData, setFormData] = useState({
    customerName: '',
    recipientName: '',
    relationship: 'Partner',
    birthdayDate: '',
    packageId: preselectedPackage,
    themeId: preselectedTheme,
    songPreference: '',
    specialMessage: '',
    rushDelivery: false,
  });

  const [orderReference, setOrderReference] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});


  const selectedPkg = INITIAL_PACKAGES.find((p) => p.id === formData.packageId) || INITIAL_PACKAGES[1];
  const selectedThemeObj = EXPERIENCE_THEMES.find((t) => t.id === formData.themeId) || EXPERIENCE_THEMES[0];

  const relationshipOptions = [
    { value: 'Partner', label: 'Partner / Spouse / Significant Other' },
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

  const themeOptions = EXPERIENCE_THEMES.map((th) => ({
    value: th.id,
    label: `${th.title} (${th.vibe.slice(0, 32)}...)`,
  }));

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: null }));
    }
  };

  const validate = () => {
    const errs = {};
    if (!formData.customerName.trim()) {
      errs.customerName = 'Please enter your name.';
    }
    if (!formData.recipientName.trim()) {
      errs.recipientName = "Please enter the birthday person's name.";
    }
    if (!formData.birthdayDate) {
      errs.birthdayDate = 'Please select their birthday date or surprise target.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const constructPayload = () => {
    const lines = [
      `*New Birthday Website Commission Request*`,
      `---------------------------------------`,
      `*From:* ${formData.customerName}`,
      `*Recipient:* ${formData.recipientName} (${formData.relationship})`,
      `*Birthday Target Date:* ${formData.birthdayDate}`,
      `*Selected Package:* ${selectedPkg.name} (₹${selectedPkg.price})`,
      `*Visual Theme:* ${selectedThemeObj.title}`,
      `*Favorite Song/Artist:* ${formData.songPreference || 'Studio selection recommended'}`,
      `*Notes / Special Story:* ${formData.specialMessage || 'None specified yet'}`,
      `*Rush Delivery Requested:* ${formData.rushDelivery ? 'YES (urgent priority)' : 'Standard (24–48h)'}`,
      `---------------------------------------`,
      `Sent via Celebrē Studios Website Intake`,
    ];
    return lines.join('\n');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setOrderReference(`CEL-${Math.floor(100000 + Math.random() * 900000)}`);
      setSubmitted(true);
    }
  };

  const whatsappUrl = `https://wa.me/${BRAND.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    constructPayload()
  )}`;

  const mailtoUrl = `mailto:${BRAND.email}?subject=${encodeURIComponent(
    `Birthday Website Commission: ${formData.recipientName} (${selectedPkg.name})`
  )}&body=${encodeURIComponent(constructPayload())}`;

  return (
    <div id="order-inquiry" className="w-full max-w-4xl mx-auto">
      <div className="p-6 sm:p-10 rounded-3xl bg-[#151926]/95 border border-[#D9BD88]/30 shadow-2xl backdrop-blur-md">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-[#293046]">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Badge variant="gold" size="sm" dot>
                Direct Studio Intake
              </Badge>
              <span className="text-xs text-[#FFF5E7]/50 font-mono">
                Average reply time: &lt; 30 mins
              </span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#FFF5E7]">
              Start Your Custom Birthday Surprise
            </h3>
            <p className="text-xs sm:text-sm text-[#FFF5E7]/70 mt-1">
              Fill in your wishes below. We compile everything into a ready-to-send WhatsApp or Email brief.
            </p>
          </div>

          {/* Quick Price Estimate Pill */}
          <div className="p-4 rounded-2xl bg-[#10131D] border border-[#D9BD88]/40 shrink-0 text-right">
            <span className="text-[10px] uppercase tracking-wider text-[#D9BD88] block">
              Estimated Total
            </span>
            <span className="text-2xl font-serif font-bold text-[#FFF5E7]">
              ₹{selectedPkg.price.toLocaleString('en-IN')}
            </span>
            <span className="text-[11px] text-[#FFF5E7]/50 block">
              {selectedPkg.turnaround} turnaround
            </span>
          </div>
        </div>

        {submitted ? (
          <div className="py-6 space-y-6 animate-in fade-in duration-300">
            <SuccessStateCard
              title="Your Project Brief Is Ready!"
              description={`We've prepared your custom project brief for ${formData.recipientName}'s ${formData.relationship} surprise under the ${selectedPkg.name} package.`}
              orderReference={orderReference || 'CEL-SAMPLE'}
              actionButton={

                <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                  <Button
                    variant="whatsapp"
                    size="lg"
                    icon={MessageCircle}
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open in WhatsApp & Chat
                  </Button>
                  <Button
                    variant="secondary-outline"
                    size="lg"
                    icon={Mail}
                    href={mailtoUrl}
                  >
                    Send as Email
                  </Button>
                </div>
              }
            />

            <div className="text-center pt-2">
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="text-xs text-[#D9BD88] hover:underline cursor-pointer"
              >
                ← Edit details or modify package
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Row 1: Names */}
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

            {/* Row 2: Relationship & Target Date */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Select
                id="relationship"
                label="Relationship to Birthday Person"
                options={relationshipOptions}
                value={formData.relationship}
                onChange={(e) => handleInputChange('relationship', e.target.value)}
              />
              <Input
                id="birthdayDate"
                type="date"
                label="Birthday Date / Midnight Surprise Target"
                value={formData.birthdayDate}
                onChange={(e) => handleInputChange('birthdayDate', e.target.value)}
                error={errors.birthdayDate}
                required
              />
            </div>

            {/* Row 3: Package & Theme Choice */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Select
                id="packageId"
                label="Select Package"
                options={packageOptions}
                value={formData.packageId}
                onChange={(e) => handleInputChange('packageId', e.target.value)}
                helperText="Can be upgraded later"
              />
              <Select
                id="themeId"
                label="Preferred Visual Direction"
                options={themeOptions}
                value={formData.themeId}
                onChange={(e) => handleInputChange('themeId', e.target.value)}
                helperText="Customized to your story"
              />
            </div>

            {/* Row 4: Music & Emotional Notes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Input
                id="songPreference"
                label="Favorite Song / Background Music"
                placeholder="e.g. Kasoor by Prateek Kuhad, or romantic acoustic"
                value={formData.songPreference}
                onChange={(e) => handleInputChange('songPreference', e.target.value)}
                helperText="We embed and sync this"
              />

              <div className="flex flex-col justify-end pb-1">
                <label className="flex items-start gap-3 p-3 rounded-xl bg-[#10131D]/80 border border-[#293046] cursor-pointer hover:border-[#D9BD88]/40 transition-colors">
                  <input
                    type="checkbox"
                    checked={formData.rushDelivery}
                    onChange={(e) => handleInputChange('rushDelivery', e.target.checked)}
                    className="mt-0.5 w-4 h-4 rounded text-[#D9BD88] focus:ring-[#D9BD88] accent-[#D9BD88]"
                  />
                  <div className="text-xs">
                    <span className="font-medium text-[#FFF5E7] block">
                      Express Rush Delivery (&lt;12 Hours)
                    </span>
                    <span className="text-[#FFF5E7]/50 text-[11px]">
                      Subject to schedule availability (no extra advance charged until confirmed)
                    </span>
                  </div>
                </label>
              </div>
            </div>

            {/* Row 5: Heartfelt Notes / Personal Message preview */}
            <Textarea
              id="specialMessage"
              label="Key Memories, Inside Jokes, or Personal Notes"
              placeholder="Tell us a little bit about what you want to say or key photos you have (e.g., 'Met in college 2021, love road trips, want a secret countdown at midnight...')"
              value={formData.specialMessage}
              onChange={(e) => handleInputChange('specialMessage', e.target.value)}
              rows={3}
              maxLength={500}
            />

            {/* Submission Actions */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#293046]">
              <div className="text-xs text-[#FFF5E7]/60 flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#D9BD88]" />
                <span>Zero advance payment required to discuss and draft.</span>
              </div>

              <Button
                type="submit"
                variant="primary-gold"
                size="lg"
                icon={Sparkles}
                className="w-full sm:w-auto"
              >
                Generate Brief & Connect
              </Button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
