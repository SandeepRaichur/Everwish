import React, { useState } from 'react';
import { X, ShieldCheck, Lock, FileText, Clock, Trash2, CheckCircle } from 'lucide-react';
import Badge from './Badge';

/**
 * LegalModal (Privacy Policy, Service Terms, Security & Data Retention)
 * Comprehensive commercial transparency and data protection for Everwish Studios.
 */
export default function LegalModal({ isOpen, onClose, initialTab = 'privacy' }) {
  const [activeTab, setActiveTab] = useState(initialTab);

  if (!isOpen) return null;

  const tabs = [
    { id: 'privacy', label: 'Privacy & Photos', icon: ShieldCheck },
    { id: 'retention', label: 'File Retention & Deletion', icon: Trash2 },
    { id: 'security', label: 'Web Link & Passcode Security', icon: Lock },
    { id: 'terms', label: 'Service, Revisions & Terms', icon: FileText },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
    >
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-[#10131D] border border-[#D9BD88]/30 rounded-3xl shadow-2xl flex flex-col overflow-hidden">
        
        {/* Modal Header */}
        <div className="p-6 border-b border-[#293046] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1D2233] border border-[#D9BD88]/40 flex items-center justify-center text-[#D9BD88]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 id="legal-modal-title" className="font-serif text-xl font-bold text-[#FFF5E7]">
                Everwish Trust & Legal Commitments
              </h3>
              <p className="text-xs text-[#FFF5E7]/60">
                Transparent privacy practices, retention policies, and commercial terms.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-[#FFF5E7]/60 hover:text-[#FFF5E7] hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close legal modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-[#293046] overflow-x-auto bg-[#090B10]/60 px-4">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 py-3 px-4 text-xs font-medium border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'border-[#D9BD88] text-[#D9BD88]'
                    : 'border-transparent text-[#FFF5E7]/60 hover:text-[#FFF5E7]'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Modal Content Area */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-[#FFF5E7]/80 leading-relaxed font-light">
          
          {/* TAB 1: Privacy & Photos */}
          {activeTab === 'privacy' && (
            <div className="space-y-5 animate-in fade-in duration-150">
              <Badge variant="gold" size="sm">
                Privacy Guarantee
              </Badge>
              <h4 className="font-serif text-lg font-bold text-[#FFF5E7]">
                Why We Collect Information & How It Is Protected
              </h4>
              <p>
                At Everwish Studios, we treat your memories and personal milestones with absolute reverence. When you inquire or commission a custom birthday website, we collect only the minimal details necessary to craft your gift:
              </p>
              <ul className="space-y-2 pl-4 list-disc marker:text-[#D9BD88] text-xs">
                <li><strong>Customer contact detail:</strong> Used strictly to communicate via WhatsApp or Email regarding your design, staging reviews, and delivery.</li>
                <li><strong>Recipient details & celebration date:</strong> Used solely to personalize the letter, theme, and countdown timeline.</li>
                <li><strong>Customer-provided photos, music & letters:</strong> Assembled exclusively inside the private keepsake code.</li>
              </ul>
              <div className="p-4 rounded-2xl bg-[#151926] border border-[#293046] space-y-2">
                <span className="text-xs font-semibold text-[#D9BD88] uppercase tracking-wider block">
                  Zero Marketing or Public Exposure Promise
                </span>
                <p className="text-xs text-[#FFF5E7]/70">
                  We <strong>never sell, rent, or share</strong> your photos, contact information, or personal messages with any third party, marketing broker, or automated ad network. 
                </p>
                <p className="text-xs text-[#FFF5E7]/70">
                  <strong>Explicit Showcase Consent:</strong> We will never post screenshots of your personal birthday website on our marketing portfolio without your prior explicit written permission via WhatsApp. All showcase demos displayed on Everwish are fictional, illustrative mockups.
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: File Retention & Deletion */}
          {activeTab === 'retention' && (
            <div className="space-y-5 animate-in fade-in duration-150">
              <Badge variant="gold" size="sm">
                Data Hygiene
              </Badge>
              <h4 className="font-serif text-lg font-bold text-[#FFF5E7]">
                Practical File Retention & Secure Deletion Workflow
              </h4>
              <p>
                To maintain studio cleanliness and safeguard your privacy, Everwish operates under a structured 30-day retention schedule:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-[#151926] border border-[#293046] space-y-2">
                  <div className="flex items-center gap-2 text-[#D9BD88] font-semibold">
                    <Clock className="w-4 h-4" />
                    <span>Active Design & 30-Day Buffer</span>
                  </div>
                  <p className="text-[#FFF5E7]/70">
                    High-resolution photos and audio files you upload are stored in a private, encrypted folder during production and kept for <strong>30 days after the birthday</strong> in case you request minor adjustments or backup exports.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#151926] border border-[#293046] space-y-2">
                  <div className="flex items-center gap-2 text-[#D88F9A] font-semibold">
                    <Trash2 className="w-4 h-4" />
                    <span>Permanent Deletion Upon Request</span>
                  </div>
                  <p className="text-[#FFF5E7]/70">
                    You may message the founder at any point on WhatsApp to request immediate deletion of raw uploaded media. All staging files are automatically purged after 90 days.
                  </p>
                </div>
              </div>
              <p className="text-xs text-[#FFF5E7]/60">
                Your published website remains active on our lightning-fast cloud hosting, independent of raw local scratch files.
              </p>
            </div>
          )}

          {/* TAB 3: Web Link & Passcode Security */}
          {activeTab === 'security' && (
            <div className="space-y-5 animate-in fade-in duration-150">
              <Badge variant="rose" size="sm">
                Open Web Notice & Passcode Lock
              </Badge>
              <h4 className="font-serif text-lg font-bold text-[#FFF5E7]">
                How Your Website Link Works & Passcode Protection Option
              </h4>
              <p>
                Every finished Everwish website is hosted on modern static cloud infrastructure with SSL encryption (HTTPS). 
              </p>
              <div className="p-4 rounded-2xl bg-amber-950/20 border border-amber-500/30 text-xs text-amber-200/90 space-y-2">
                <strong className="block text-amber-300">Open Web Notice:</strong>
                <p>
                  Each website is assigned a unique, unguessable URL slug (e.g., <code>everwish.in/w/ananya-24-k7q9</code>). Because websites exist on the open web, <strong>anyone who possesses this web address will be able to view it</strong>. This makes it effortless to share with friends, family, or the birthday person without requiring them to install apps or log in.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#151926] border border-[#D9BD88]/30 text-xs space-y-2">
                <div className="flex items-center gap-2 text-[#D9BD88] font-semibold">
                  <Lock className="w-4 h-4" />
                  <span>Optional 4-Digit Passcode Protection (Free on Request)</span>
                </div>
                <p className="text-[#FFF5E7]/70">
                  If you prefer an extra layer of privacy for deeply intimate letters or photos, you can request an <strong>optional 4-digit PIN lock</strong> (e.g. birth year <code>2000</code> or secret anniversary code). When enabled, visitors must enter this PIN before the letter, gallery, and music unlock.
                </p>
              </div>
            </div>
          )}

          {/* TAB 4: Service, Revisions & Terms */}
          {activeTab === 'terms' && (
            <div className="space-y-5 animate-in fade-in duration-150">
              <Badge variant="gold" size="sm">
                Commercial Terms
              </Badge>
              <h4 className="font-serif text-lg font-bold text-[#FFF5E7]">
                Clear Commercial, Revision, Hosting & Refund Policies
              </h4>
              <div className="space-y-3 text-xs">
                <div className="p-3.5 rounded-xl bg-[#151926] border border-[#293046]">
                  <strong className="text-[#FFF5E7] block mb-1">1. Deposit & Payment Terms:</strong>
                  <span>A 50% advance booking deposit via UPI or bank transfer is required to secure your slot on our production calendar. The remaining 50% balance is payable only after you preview and approve the private staging link.</span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#151926] border border-[#293046]">
                  <strong className="text-[#FFF5E7] block mb-1">2. Turnaround & Revisions:</strong>
                  <span>Standard delivery is within 24–48 hours from receipt of your photos and personal text. Every package includes up to <strong>2 rounds of revisions</strong> (photo adjustments, typo corrections, background song swap) before final live activation.</span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#151926] border border-[#293046]">
                  <strong className="text-[#FFF5E7] block mb-1">3. Guaranteed Hosting Terms:</strong>
                  <span>Every custom birthday keepsake includes a minimum of <strong>1 full year of guaranteed static hosting</strong> at no recurring charge. We also provide a downloadable HTML keepsake bundle upon request.</span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#151926] border border-[#293046]">
                  <strong className="text-[#FFF5E7] block mb-1">4. Cancellation & Refund Policy:</strong>
                  <span>If you cancel before design assembly has begun, you receive a 100% full refund. Once design assembly is underway, the 50% deposit covers creative labor and is non-refundable.</span>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 border-t border-[#293046] bg-[#090B10]/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-1.5 text-[#D9BD88]">
            <CheckCircle className="w-4 h-4" />
            <span>Honest, human-first commercial standards.</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2 rounded-xl bg-[#D9BD88] text-[#10131D] font-semibold hover:bg-[#F4E7CD] transition-colors cursor-pointer"
          >
            I Understand
          </button>
        </div>

      </div>
    </div>
  );
}
