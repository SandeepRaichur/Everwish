import React from 'react';
import { Quote } from 'lucide-react';
import Badge from '../common/Badge';

/**
 * Editorial Keepsake Feedback / Story Card
 * Designed to showcase emotional reception while complying with Rule 4 & 5 (marked as illustrative concept structure)
 */
export default function FeedbackCard({
  occasion = '25th Birthday Midnight Surprise',
  recipientRelationship = 'Partner',
  quote = "Opening this at midnight with our special song playing in the background brought happy tears. It was genuinely a hundred times more meaningful than any physical gift.",
  sentiment = 'Tears of joy & lifelong bookmark',
  themeUsed = 'Romantic & Intimate',
  isIllustrative = true,
}) {
  return (
    <div className="p-6 sm:p-7 rounded-2xl bg-[#151926]/80 border border-[#293046] hover:border-[#D9BD88]/40 transition-all flex flex-col justify-between shadow-lg">
      <div>
        <div className="flex items-center justify-between gap-2 mb-4">
          <Badge variant="rose" size="sm">
            {recipientRelationship}
          </Badge>
          {isIllustrative && (
            <span className="text-[10px] tracking-wider uppercase font-mono text-[#D9BD88]/70 border border-[#D9BD88]/20 px-2 py-0.5 rounded">
              Illustrative Experience
            </span>
          )}
        </div>

        <Quote className="w-6 h-6 text-[#D9BD88]/30 mb-3" />

        <p className="text-sm sm:text-base text-[#FFF5E7]/90 font-serif italic leading-relaxed mb-4">
          "{quote}"
        </p>

        {sentiment && (
          <p className="text-xs text-[#D9BD88]/90 font-medium mb-2">
            ✦ Reaction: {sentiment}
          </p>
        )}
      </div>

      <div className="pt-4 border-t border-[#293046]/80 flex items-center justify-between text-xs text-[#FFF5E7]/60">
        <span className="font-medium text-[#FFF5E7]">
          {occasion}
        </span>
        <span className="text-[#D9BD88] text-[11px]">
          Theme: {themeUsed}
        </span>
      </div>
    </div>
  );
}

