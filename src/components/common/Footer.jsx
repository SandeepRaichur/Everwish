import React from 'react';
import { siteConfig } from '../../config/siteConfig.js';
import { Heart, MessageCircle, Mail, ShieldCheck, Clock } from 'lucide-react';

const CURRENT_YEAR = new Date().getFullYear();

/**
 * Editorial Studio Footer (Driven by centralized siteConfig.js)
 */
export default function Footer({ onOpenLegalModal = null }) {
  return (
    <footer className="bg-[#090B10] border-t border-[#D9BD88]/20 pt-16 pb-12 text-[#FFF5E7]/70 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[#293046]/60">
          
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#1D2233] border border-[#D9BD88]/40 flex items-center justify-center text-[#D9BD88] font-serif font-bold text-base">
                {siteConfig.brand.monogramLetter || 'E'}
              </div>
              <span className="font-serif text-xl font-bold text-[#FFF5E7] tracking-tight">
                {siteConfig.brand.name} <span className="font-sans text-xs uppercase text-[#D9BD88] tracking-widest">Studios</span>
              </span>

            </div>
            <p className="max-w-md text-sm text-[#FFF5E7]/70 leading-relaxed font-light">
              {siteConfig.brand.description}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs text-[#D9BD88]">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" /> Handcrafted in {siteConfig.business.standardTurnaround}
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" /> 100% Private &amp; Ad-Free Link
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#D9BD88]">
              Experiences
            </h4>
            <ul className="space-y-2 text-sm">
              {siteConfig.navigation.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-[#FFF5E7] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#D9BD88]">
              Direct Studio Contact
            </h4>
            <p className="text-xs text-[#FFF5E7]/60">
              Personalized commissions crafted by the lead designer.
            </p>
            <div className="space-y-2 pt-1">
              <a
                href={`https://wa.me/${siteConfig.business.whatsappNumber}?text=${encodeURIComponent(
                  siteConfig.business.defaultInquiryMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#25D366] hover:underline"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp: +{siteConfig.business.whatsappNumber}
              </a>
              <a
                href={`mailto:${siteConfig.business.email}`}
                className="flex items-center gap-2 text-sm text-[#FFF5E7]/80 hover:text-[#D9BD88] transition-colors"
              >
                <Mail className="w-4 h-4" /> {siteConfig.business.email}
              </a>
            </div>
          </div>
        </div>

        {/* Commercial Integrity & Legal Disclaimers (Strict Compliance with Rule 4 & 5) */}
        <div className="py-8 space-y-3 text-xs text-[#FFF5E7]/50 leading-relaxed border-b border-[#293046]/40">
          <p>
            <strong className="text-[#FFF5E7]/70">Illustrative Showcase Notice:</strong> All sample recipient mockups, audio visualizer previews, and testimonial layouts presented on this website are illustrative conceptual demonstrations created by {siteConfig.brand.name} Studios to demonstrate design capability, interaction pacing, and responsive typography. No real customer photos or private data are published without explicit consent.
          </p>

          <p>
            <strong className="text-[#FFF5E7]/70">Pricing &amp; Delivery Policy:</strong> Listed package rates represent introductory side-hustle studio pricing. Standard turnaround is {siteConfig.business.standardTurnaround} from receipt of customer media and questionnaire.
          </p>
        </div>

        {/* Bottom Bar with Trust & Legal Modals */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#FFF5E7]/50">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 text-xs text-[#FFF5E7]/60">
            <span>© {CURRENT_YEAR} {siteConfig.brand.name}. {siteConfig.brand.copyrightNotice}</span>
            <button
              type="button"
              onClick={() => onOpenLegalModal && onOpenLegalModal('privacy')}
              className="hover:text-[#D9BD88] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={() => onOpenLegalModal && onOpenLegalModal('retention')}
              className="hover:text-[#D9BD88] transition-colors cursor-pointer"
            >
              File Retention &amp; Deletion
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={() => onOpenLegalModal && onOpenLegalModal('security')}
              className="hover:text-[#D9BD88] transition-colors cursor-pointer"
            >
              Passcode Security
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={() => onOpenLegalModal && onOpenLegalModal('terms')}
              className="hover:text-[#D9BD88] transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
          </div>

          <p className="flex items-center gap-1.5">
            {siteConfig.brand.footerCredit} <Heart className="w-3.5 h-3.5 text-[#D88F9A] fill-current" />
          </p>
        </div>

      </div>
    </footer>
  );
}
