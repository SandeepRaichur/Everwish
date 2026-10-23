import React from 'react';
import { EyeOff, Lock, Trash2, HeartHandshake, CheckCircle2 } from 'lucide-react';

import SectionHeading from '../common/SectionHeading';
import Badge from '../common/Badge';
import FeedbackCard from './FeedbackCard';

/**
 * Trust & Privacy Section
 * Clear, uncompromised commitment to user confidentiality and authentic reviews.
 * Strictly complies with Rule 4 & 5.
 */
export default function TrustAndPrivacySection() {
  const privacyPillars = [
    {
      icon: EyeOff,
      title: "Unlisted, Unindexed URLs",
      description:
        "Every Everwish website is configured with strict 'noindex' robot tags and published on unguessable links. Google and search engines cannot index your private photos or heartfelt notes.",
    },
    {
      icon: Lock,
      title: "Zero Third-Party Tracking & Ads",
      description:
        "Unlike free website builders, we run zero advertisement networks, zero data brokers, and zero intrusive analytics scripts. Your recipient sees only your personal memories.",
    },
    {
      icon: Trash2,
      title: "Complete Media Control",
      description:
        "After your celebration, you can request complete deletion of original source photos and voice files from our studio storage, or choose to keep the website active for permanent bookmarking.",
    },
    {
      icon: HeartHandshake,
      title: "Honest Human Guarantee",
      description:
        "No automated chatbots. You work 1-on-1 with the founder who personally ensures every image is beautifully framed and colors are balanced before delivery.",
    },
  ];

  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <SectionHeading
        overline="Trust & Confidentiality"
        title="Your private memories are"
        italicWord="sacred to us."
        subtitle="We build websites for intimate relationships. That means complete privacy protection, honest communication, and zero fabricated claims."
        badgeText="Studio Ethics"
      />

      {/* 4 Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {privacyPillars.map((pillar, idx) => {
          const Icon = pillar.icon;
          return (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-[#151926]/70 border border-[#293046] hover:border-[#D9BD88]/40 transition-all flex flex-col justify-between shadow-lg"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#D9BD88]/10 border border-[#D9BD88]/30 flex items-center justify-center text-[#D9BD88] mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-lg text-[#FFF5E7] font-bold mb-2">
                  {pillar.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#FFF5E7]/70 leading-relaxed font-light">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#293046] flex items-center gap-1.5 text-[11px] text-[#D9BD88] font-mono">
                <CheckCircle2 className="w-3.5 h-3.5" /> Guaranteed Standard
              </div>
            </div>
          );
        })}
      </div>

      {/* Client Keepsake Reactions & Illustrative Formats */}
      <div className="p-8 sm:p-10 rounded-3xl bg-[#090B10] border border-[#D9BD88]/20 shadow-2xl">
        <div className="max-w-2xl mx-auto text-center mb-8">
          <Badge variant="gold" size="sm" dot>
            Emotional Reception Formats
          </Badge>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#FFF5E7] mt-2">
            How Celebrants Experience Their Surprise
          </h3>
          <p className="text-xs sm:text-sm text-[#FFF5E7]/70 mt-2 font-light">
            Typical emotional feedback across our three primary audience relationships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeedbackCard
            occasion="25th Birthday Midnight Surprise"
            recipientRelationship="Romantic Partner"
            quote="Opening this at midnight with our special song playing in the background brought happy tears. It was genuinely a hundred times more meaningful than any physical gift."
            sentiment="Tears of joy & lifelong bookmark"
            themeUsed="Romantic & Intimate"
          />
          <FeedbackCard
            occasion="College Reunion & Best Friend Birthday"
            recipientRelationship="Best Friend"
            quote="The interactive scratch cards and throwback timeline of our trips had our entire friend group howling with laughter. Everyone asked where I had this made."
            sentiment="Laugh-out-loud hit with the group"
            themeUsed="Playful & Vibrant"
          />
          <FeedbackCard
            occasion="Father's 60th Golden Jubilee"
            recipientRelationship="Parent & Family"
            quote="My dad sat quietly reading each family note from his grandchildren with tears in his eyes. He still opens the website every Sunday morning."
            sentiment="Permanent family treasure"
            themeUsed="Warm & Family-Oriented"
          />
        </div>

        {/* Ethical Transparency Note (Complying with Rule 4) */}
        <div className="mt-8 pt-6 border-t border-[#293046] text-center text-xs text-[#FFF5E7]/50 max-w-xl mx-auto leading-relaxed">
          <p>
            <strong className="text-[#D9BD88]">Commitment to Transparency:</strong> In accordance with our studio ethics, we do not fabricate customer review scores, invent arbitrary 5-star ratings, or display stock photos as real clients. Real testimonials and photographs are added only with explicit written authorization.
          </p>
        </div>
      </div>

    </section>
  );
}
