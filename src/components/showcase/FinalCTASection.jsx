import React from 'react';
import { Sparkles, MessageCircle, Clock, ShieldCheck, Heart } from 'lucide-react';
import Button from '../common/Button';
import Badge from '../common/Badge';
import { BRAND } from '../../config/designTokens';

/**
 * Final Call To Action Section
 * High-conversion closing banner with obvious, friction-free paths to order.
 */
export default function FinalCTASection({ onStartSurprise = null }) {
  const whatsappUrl = `https://wa.me/${BRAND.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    "Hi Everwish! I want to create a custom birthday website surprise for someone special. Can you share how we can get started?"
  )}`;

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-[#10131D] via-[#151926] to-[#090B10] border-t border-[#D9BD88]/20">
      
      {/* Ambient background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-r from-[#D9BD88]/10 via-[#D88F9A]/10 to-[#D9BD88]/10 blur-3xl pointer-events-none -z-10 rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        <div className="inline-flex items-center gap-2">
          <Badge variant="gold" size="md" dot>
            Taking Orders For This Month
          </Badge>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#FFF5E7] tracking-tight leading-tight">
          Ready to make their midnight{' '}
          <span className="italic font-normal text-gold-gradient block sm:inline">
            truly unforgettable?
          </span>
        </h2>

        <p className="text-sm sm:text-base lg:text-lg text-[#FFF5E7]/75 max-w-2xl mx-auto font-light leading-relaxed">
          Select an experience, share your favorite photos, and let us handcraft a personalized birthday website they will cherish for a lifetime.
        </p>

        {/* Dual High-Conversion CTA Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="primary-gold"
            size="lg"
            icon={Sparkles}
            onClick={() => {
              if (onStartSurprise) {
                onStartSurprise();
              } else {
                const el = document.getElementById('order-inquiry');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="w-full sm:w-auto"
          >
            Create Their Surprise
          </Button>

          <Button
            variant="whatsapp"
            size="lg"
            icon={MessageCircle}
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            Chat Directly on WhatsApp
          </Button>
        </div>

        {/* Reassurance points */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-[#FFF5E7]/60">
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-[#D9BD88]" /> Standard Turnaround: 24–48 Hours
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#D9BD88]" /> 100% Private & Ad-Free Link
          </span>
          <span className="flex items-center gap-1.5">
            <Heart className="w-4 h-4 text-[#D88F9A]" /> Revisions Included Before Delivery
          </span>
        </div>

      </div>
    </section>
  );
}
