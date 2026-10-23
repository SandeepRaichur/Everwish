import React, { useState } from 'react';
import { Sparkles, CheckCircle, RefreshCw } from 'lucide-react';

import Badge from '../common/Badge';

/**
 * Interactive Scratch Card & Friendship Trivia Component
 * Used in the Best Friend Demo
 */
export default function InteractiveScratchCard({
  question = "What is Kabir's most iconic real-life superpower?",
  answer = "Saying 'Bro I'm 5 mins away' when he is literally still wrapped in his blanket asleep.",
  statHighlight = "Friendship Rating: 100% Unbreakable",
}) {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <div className="w-full max-w-xl mx-auto p-6 sm:p-8 rounded-3xl bg-[#141D2E] border-2 border-[#D9BD88]/40 shadow-2xl relative overflow-hidden">
      
      {/* Top Banner */}
      <div className="flex items-center justify-between gap-3 mb-4">
        <Badge variant="gold" size="sm" dot>
          Interactive Best Friend Trivia
        </Badge>
        <span className="text-xs font-mono text-[#D9BD88]">
          Tap Card To Scratch
        </span>
      </div>

      <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#FFF8EB] mb-2">
        The Unofficial Friendship Quiz
      </h3>
      <p className="text-xs text-[#FFF8EB]/70 mb-5 leading-relaxed">
        {question}
      </p>

      {/* Scratch / Reveal Surface */}
      <div
        onClick={() => setIsRevealed(!isRevealed)}
        className={`p-6 sm:p-8 rounded-2xl border transition-all duration-500 cursor-pointer text-center select-none relative group ${
          isRevealed
            ? 'bg-[#0D131F] border-[#FFD166] shadow-inner'
            : 'bg-gradient-to-r from-[#D9BD88]/20 via-[#FFD166]/20 to-[#D9BD88]/20 border-dashed border-[#D9BD88] hover:border-solid hover:scale-[1.01]'
        }`}
        role="button"
        tabIndex={0}
        aria-expanded={isRevealed}
        aria-label="Scratch card reveal"
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setIsRevealed(!isRevealed)}
      >
        {isRevealed ? (
          <div className="space-y-3 animate-in zoom-in-95 duration-300">
            <span className="text-3xl sm:text-4xl block">😂 👑 🎯</span>
            <p className="font-serif italic text-base sm:text-lg text-[#FFD166] font-medium leading-relaxed">
              "{answer}"
            </p>
            <div className="pt-2 flex items-center justify-center gap-2 text-xs font-mono text-[#FFF8EB]/60">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>{statHighlight}</span>
            </div>
          </div>
        ) : (
          <div className="py-6 space-y-2">
            <div className="w-12 h-12 rounded-full bg-[#D9BD88]/20 border border-[#D9BD88]/40 mx-auto flex items-center justify-center text-[#D9BD88] group-hover:scale-110 transition-transform">
              <Sparkles className="w-6 h-6 animate-pulse" />
            </div>
            <p className="font-mono text-xs uppercase tracking-widest text-[#D9BD88] font-bold">
              [ Tap or Click to Scratch & Reveal ]
            </p>
            <p className="text-[11px] text-[#FFF8EB]/50">
              Warning: 100% accurate roast inside
            </p>
          </div>
        )}
      </div>

      {/* Bottom control */}
      <div className="mt-4 pt-3 border-t border-[#293046]/60 flex items-center justify-between text-[11px] text-[#FFF8EB]/50">
        <span>Interactive moment calibrated for best-friend laughs</span>
        {isRevealed && (
          <button
            type="button"
            onClick={() => setIsRevealed(false)}
            className="text-[#D9BD88] hover:underline flex items-center gap-1 cursor-pointer"
          >
            <RefreshCw className="w-3 h-3" /> Hide answer
          </button>
        )}
      </div>

    </div>
  );
}
