import React, { useState } from 'react';
import { X, Play, Pause, Mail, CheckCircle, ShieldCheck, ArrowRight } from 'lucide-react';

import Button from '../common/Button';
import Badge from '../common/Badge';

/**
 * Full-Screen Live Experience Preview Modal
 * Provides a working, interactive demonstration of what the recipient sees.
 */
export default function LiveExperienceModal({
  theme,
  isOpen,
  onClose,
  onSelectTheme,
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [letterOpen, setLetterOpen] = useState(false);
  const [confettiActive, setConfettiActive] = useState(false);

  if (!isOpen || !theme) return null;

  const triggerConfetti = () => {
    setConfettiActive(true);
    setTimeout(() => setConfettiActive(false), 2500);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-preview-title"
    >
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-3xl bg-[#090B10] border-2 border-[#D9BD88]/40 shadow-2xl overflow-hidden">
        
        {/* Top Control Bar */}
        <div className="px-5 py-3.5 bg-[#151926] border-b border-[#293046] flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            <span className="ml-2 font-mono text-xs text-[#FFF5E7]/70 hidden sm:inline">
              everwish.in/preview-{theme.id}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Badge variant="gold" size="sm" dot>
              Full Interactive Simulation
            </Badge>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-full bg-[#10131D] text-[#FFF5E7]/70 hover:text-white hover:bg-[#293046] transition-colors focus:outline-none focus:ring-1 focus:ring-[#D9BD88]"
              aria-label="Close interactive preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Simulated Website Canvas */}
        <div
          className="flex-1 overflow-y-auto p-6 sm:p-10 transition-colors duration-300"
          style={{ backgroundColor: theme.palette.bg }}
        >
          {/* Confetti simulation overlay */}
          {confettiActive && (
            <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center">
              <div className="text-3xl sm:text-5xl animate-bounce">
                ✨ 🎊 🎉 🎂 💖 🥳 🥂 ✨
              </div>
            </div>
          )}

          {/* Interactive Navigation inside preview */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10 text-xs">
            <div className="flex items-center gap-2">
              <span className="font-serif italic text-white/80">
                A personal surprise crafted for {theme.sampleRecipient.split(' ')[0]}
              </span>
            </div>

            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white/90 border border-white/20 transition-all cursor-pointer text-xs font-mono"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5 text-[#D9BD88]" /> : <Play className="w-3.5 h-3.5 text-[#D9BD88]" />}
              <span>{isPlaying ? 'SOUND ON' : 'PLAY SOUNDTRACK'}</span>
              {isPlaying && (
                <span className="flex items-end gap-0.5 h-3 ml-1">
                  <span className="w-0.5 h-2 bg-[#D9BD88] animate-bounce" />
                  <span className="w-0.5 h-3 bg-[#D9BD88] animate-bounce delay-75" />
                  <span className="w-0.5 h-1.5 bg-[#D9BD88] animate-bounce delay-150" />
                </span>
              )}
            </button>
          </div>

          {/* Hero of the simulated birthday site */}
          <div className="py-12 sm:py-16 text-center space-y-5 max-w-2xl mx-auto">
            <Badge variant="rose" size="md">
              Midnight Celebration Edition
            </Badge>

            <h1 id="modal-preview-title" className="text-3xl sm:text-5xl font-serif text-white font-bold leading-tight">
              {theme.id === 'romantic' && (
                <>
                  Happy 24th Birthday, <span className="italic text-[#D88F9A]">My Dearest Love.</span>
                </>
              )}
              {theme.id === 'playful' && (
                <>
                  Happy Birthday To The Absolute <span className="italic text-[#D9BD88]">Legend.</span>
                </>
              )}
              {theme.id === 'family' && (
                <>
                  Celebrating 50 Years Of <span className="italic text-[#D9BD88]">Wisdom & Grace.</span>
                </>
              )}
            </h1>

            <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed">
              {theme.tagline}
            </p>

            {/* Confetti Trigger Button for Playful */}
            {theme.id === 'playful' && (
              <div className="pt-2">
                <button
                  type="button"
                  onClick={triggerConfetti}
                  className="px-4 py-2 rounded-full bg-[#D9BD88] text-[#10131D] font-bold text-xs uppercase tracking-wider hover:bg-[#F4E7CD] transition-all cursor-pointer shadow-lg active:scale-95"
                >
                  🎉 Tap For Confetti Burst!
                </button>
              </div>
            )}
          </div>

          {/* Wax-Sealed Letter Interactive Widget */}
          <div className="max-w-xl mx-auto my-8">
            <div
              onClick={() => setLetterOpen(!letterOpen)}
              className="p-6 rounded-2xl bg-white/5 border border-white/20 hover:border-[#D9BD88] transition-all duration-300 cursor-pointer text-left"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setLetterOpen(!letterOpen)}
              aria-label="Unfold letter"
            >
              <div className="flex items-center justify-between text-xs text-[#D9BD88] mb-2 font-mono">
                <span className="flex items-center gap-1.5 font-semibold">
                  <Mail className="w-4 h-4" /> {letterOpen ? 'Click to fold letter' : 'Click wax seal to read letter'}
                </span>
                <span>Sealed with wax</span>
              </div>

              {letterOpen ? (
                <div className="space-y-3 pt-3 animate-in fade-in duration-300 text-white">
                  <p className="font-serif italic text-base leading-relaxed text-[#FFF5E7]">
                    "No gift wrapped in paper could ever capture what you mean to me. Every shared cup of tea, midnight drive, and quiet glance has made my world infinitely richer. Happy Birthday, always."
                  </p>
                  <p className="text-right text-xs font-serif text-[#D9BD88] italic">
                    — From {theme.sampleRecipient.split(' ')[0]}
                  </p>
                </div>
              ) : (
                <p className="text-xs text-white/60 py-2">
                  [ Private wax-sealed message • Click to unfold ]
                </p>
              )}
            </div>
          </div>

          {/* Personalization Breakdown */}
          <div className="mt-12 p-6 rounded-2xl bg-white/5 border border-white/10 max-w-2xl mx-auto space-y-3">
            <p className="text-xs uppercase font-mono tracking-wider text-[#D9BD88] font-bold">
              ✦ What Can Be Customized For Your Recipient:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-white/80">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Recipient Name & Birthday Year
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Your Favorite Song Synchronization
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> 8 to 40 High-Res Curated Photos
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Personal Letter & Secret Notes
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Voice Note / Audio Embedding
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Custom URL (e.g. everwish.in/name)
              </li>
            </ul>
          </div>
        </div>

        {/* Modal Bottom Action Bar */}
        <div className="p-4 sm:p-5 bg-[#151926] border-t border-[#293046] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-[#FFF5E7]/70 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#D9BD88]" />
            <span>Handcrafted in 24–48h • No templates • Zero public exposure</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Button
              variant="secondary-outline"
              size="sm"
              onClick={onClose}
              className="w-1/2 sm:w-auto"
            >
              Close Preview
            </Button>
            <Button
              variant="primary-gold"
              size="sm"
              icon={ArrowRight}
              iconPosition="right"
              onClick={() => {
                onClose();
                if (onSelectTheme) onSelectTheme(theme);
              }}
              className="w-1/2 sm:w-auto"
            >
              Select This Theme
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
}
