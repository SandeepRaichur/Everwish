import React, { useState } from 'react';
import { Heart, Sparkles, Users, Mail, Play, Pause, ExternalLink } from 'lucide-react';
import { EXPERIENCE_THEMES } from '../../config/designTokens';

import Badge from '../common/Badge';
import Button from '../common/Button';

/**
 * Interactive Experience Theme Previewer
 * Showcases the 3 visual directions: Romantic & Intimate, Playful & Colorful, Warm & Family-Oriented
 */
export default function ExperienceThemePreview({
  onSelectThemeForInquiry = null,
  onOpenLiveModal = null,
}) {
  const [activeThemeId, setActiveThemeId] = useState('romantic');
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [envelopeOpen, setEnvelopeOpen] = useState(false);

  const activeTheme = EXPERIENCE_THEMES.find((t) => t.id === activeThemeId) || EXPERIENCE_THEMES[0];

  const getThemeIcon = (id) => {
    switch (id) {
      case 'romantic':
        return Heart;
      case 'playful':
        return Sparkles;
      case 'family':
        return Users;
      default:
        return Heart;
    }
  };


  return (
    <div className="w-full">
      {/* Theme Selection Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-8" role="tablist" aria-label="Birthday Themes">
        {EXPERIENCE_THEMES.map((theme) => {
          const Icon = getThemeIcon(theme.id);
          const isSelected = activeThemeId === theme.id;
          return (
            <button
              key={theme.id}
              role="tab"
              aria-selected={isSelected}
              onClick={() => {
                setActiveThemeId(theme.id);
                setEnvelopeOpen(false);
              }}
              className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${
                isSelected
                  ? 'bg-[#1D2233] text-[#FFF5E7] border-2 border-[#D9BD88] shadow-lg shadow-[#D9BD88]/10'
                  : 'bg-[#151926]/60 text-[#FFF5E7]/70 border border-[#293046] hover:text-[#FFF5E7] hover:border-[#D9BD88]/40'
              }`}
            >
              <Icon
                className={`w-4 h-4 ${
                  isSelected
                    ? theme.id === 'romantic'
                      ? 'text-[#D88F9A]'
                      : 'text-[#D9BD88]'
                    : 'text-[#FFF5E7]/40'
                }`}
              />
              <span>{theme.title}</span>
              {theme.badge && (
                <span className="hidden md:inline-block text-[10px] px-2 py-0.5 rounded-full bg-[#10131D] text-[#D9BD88] border border-[#D9BD88]/20">
                  {theme.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Main Preview Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Column: Theme Details & Specifications */}
        <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-[#151926]/90 border border-[#293046] shadow-xl">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Badge
                variant={activeTheme.id === 'romantic' ? 'rose' : 'gold'}
                size="sm"
                dot
              >
                Theme Direction 0{EXPERIENCE_THEMES.indexOf(activeTheme) + 1}
              </Badge>
              <span className="text-xs font-mono text-[#FFF5E7]/50">
                CSS / Motion Calibrated
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#FFF5E7]">
              {activeTheme.title}
            </h3>

            <p className="text-sm text-[#FFF5E7]/80 leading-relaxed font-light">
              {activeTheme.tagline}
            </p>

            <div className="p-4 rounded-2xl bg-[#10131D]/80 border border-[#293046]">
              <p className="text-[11px] uppercase tracking-wider text-[#D9BD88] font-semibold mb-1">
                Atmospheric Vibe
              </p>
              <p className="text-xs text-[#FFF5E7]/90 italic">
                "{activeTheme.vibe}"
              </p>
            </div>

            {/* Signature Features */}
            <div className="space-y-2 pt-2">
              <p className="text-xs uppercase tracking-wider text-[#D9BD88] font-semibold">
                Signature Interactive Touches:
              </p>
              <ul className="space-y-2 text-xs text-[#FFF5E7]/75">
                {activeTheme.highlights.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#D9BD88] text-sm shrink-0 leading-none mt-0.5">✦</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-[#293046] flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-xs text-[#FFF5E7]/60">
              Sample: <strong className="text-[#FFF5E7]">{activeTheme.sampleRecipient}</strong>
            </span>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              {onOpenLiveModal && (
                <Button
                  variant="secondary-outline"
                  size="sm"
                  icon={ExternalLink}
                  onClick={() => onOpenLiveModal(activeTheme)}
                  className="flex-1 sm:flex-initial"
                >
                  Full Demo
                </Button>
              )}
              {onSelectThemeForInquiry && (
                <Button
                  variant="primary-gold"
                  size="sm"
                  onClick={() => onSelectThemeForInquiry(activeTheme)}
                  className="flex-1 sm:flex-initial"
                >
                  Select Experience
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Live Simulated Device Mockup */}

        <div className="lg:col-span-7 rounded-3xl bg-[#090B10] border-2 border-[#D9BD88]/30 shadow-2xl overflow-hidden flex flex-col">
          
          {/* Simulated Browser Bar */}
          <div className="px-4 py-3 bg-[#151926] border-b border-[#293046] flex items-center justify-between text-xs text-[#FFF5E7]/60">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
              <span className="ml-2 font-mono text-[11px] text-[#FFF5E7]/40 truncate max-w-[200px]">
                everwish.in/preview-{activeTheme.id}
              </span>

            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => onOpenLiveModal && onOpenLiveModal(activeTheme)}
                className="text-[10px] uppercase font-mono tracking-wider bg-[#10131D] hover:bg-[#1D2233] text-[#D9BD88] px-2.5 py-1 rounded-full border border-[#D9BD88]/40 transition-colors flex items-center gap-1 cursor-pointer"
                title="Open full interactive demo"
              >
                <span>Full Experience</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </button>
            </div>
          </div>


          {/* Dynamic Theme Canvas Content */}
          <div
            className="p-6 sm:p-8 flex-1 flex flex-col justify-between transition-colors duration-500"
            style={{ backgroundColor: activeTheme.palette.bg }}
          >
            {/* Header within mock */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs">
              <span className="font-serif italic text-white/70">
                A personal surprise crafted for {activeTheme.sampleRecipient.split(' ')[0]}
              </span>
              
              {/* Audio controller toggle simulation */}
              <button
                type="button"
                onClick={() => setIsAudioPlaying(!isAudioPlaying)}
                className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white/90 transition-all cursor-pointer border border-white/20"
                aria-label="Toggle background music simulation"
              >
                {isAudioPlaying ? (
                  <>
                    <Pause className="w-3 h-3 text-[#D9BD88]" />
                    <span className="text-[10px] font-mono tracking-wider">SOUND ON</span>
                    <span className="flex items-end gap-0.5 h-3 ml-1">
                      <span className="w-0.5 h-2 bg-[#D9BD88] animate-bounce" />
                      <span className="w-0.5 h-3 bg-[#D9BD88] animate-bounce delay-75" />
                      <span className="w-0.5 h-1.5 bg-[#D9BD88] animate-bounce delay-150" />
                    </span>
                  </>
                ) : (
                  <>
                    <Play className="w-3 h-3 text-[#D9BD88]" />
                    <span className="text-[10px] font-mono tracking-wider">PREVIEW MUSIC</span>
                  </>
                )}
              </button>
            </div>

            {/* Simulated Hero / Center Story Section */}
            <div className="py-8 sm:py-10 text-center space-y-4">
              <p
                className="text-xs uppercase tracking-[0.25em] font-semibold"
                style={{ color: activeTheme.palette.primary }}
              >
                {activeTheme.id === 'romantic'
                  ? 'Happy 24th Birthday, My Love'
                  : activeTheme.id === 'playful'
                  ? 'Happy Birthday To My Favorite Human'
                  : 'Celebrating 50 Years Of Wisdom & Grace'}
              </p>

              <h4 className="text-2xl sm:text-4xl font-serif text-white font-bold leading-tight max-w-lg mx-auto">
                {activeTheme.id === 'romantic' && (
                  <>
                    Every song reminds me of <span className="italic text-[#D88F9A]">the moment we met.</span>
                  </>
                )}
                {activeTheme.id === 'playful' && (
                  <>
                    Here's to another year of <span className="italic text-[#D9BD88]">unfiltered chaos & memories.</span>
                  </>
                )}
                {activeTheme.id === 'family' && (
                  <>
                    A lifetime of unconditional devotion, <span className="italic text-[#D9BD88]">celebrated forever.</span>
                  </>
                )}
              </h4>

              {/* Theme-Specific Interactive Widget Simulation */}
              <div className="pt-4 max-w-md mx-auto">
                {activeTheme.id === 'romantic' && (
                  <div
                    onClick={() => setEnvelopeOpen(!envelopeOpen)}
                    className="p-4 rounded-2xl bg-white/5 border border-[#D88F9A]/30 hover:border-[#D88F9A] cursor-pointer transition-all duration-300 text-left group"
                  >
                    <div className="flex items-center justify-between text-xs text-[#D88F9A] mb-2">
                      <span className="flex items-center gap-1.5 font-medium">
                        <Mail className="w-3.5 h-3.5" /> Tap to {envelopeOpen ? 'fold' : 'unfold'} private letter
                      </span>
                      <span className="text-[10px] opacity-75">Sealed with wax</span>
                    </div>
                    {envelopeOpen ? (
                      <p className="text-xs text-white/90 italic font-serif leading-relaxed animate-in fade-in duration-300">
                        "From our first nervous coffee at 7 PM to driving under midnight rain, you've made every ordinary second feel extraordinary..."
                      </p>
                    ) : (
                      <p className="text-xs text-white/60">
                        [Click to reveal personal letter note preview]
                      </p>
                    )}
                  </div>
                )}

                {activeTheme.id === 'playful' && (
                  <div className="grid grid-cols-2 gap-3 text-left">
                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#D9BD88]/40 transition-colors">
                      <span className="text-[10px] uppercase font-mono text-[#D9BD88] block">Stat of the Year</span>
                      <span className="text-lg font-bold text-white">418</span>
                      <p className="text-[11px] text-white/60">Inside jokes shared</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#D9BD88]/40 transition-colors">
                      <span className="text-[10px] uppercase font-mono text-[#D9BD88] block">Friendship Meter</span>
                      <span className="text-lg font-bold text-white">100% Unfiltered</span>
                      <p className="text-[11px] text-white/60">Zero boring days</p>
                    </div>
                  </div>
                )}

                {activeTheme.id === 'family' && (
                  <div className="p-4 rounded-xl bg-white/5 border border-[#D9BD88]/30 text-left">
                    <div className="flex items-center gap-2 text-xs text-[#D9BD88] mb-1 font-mono">
                      <span>Timeline: 1974 — Present</span>
                    </div>
                    <p className="text-xs text-white/80 leading-relaxed font-serif">
                      "To the rock of our family: thank you for teaching us dignity, kindness, and endless perseverance."
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Footer of mock */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-white/50">
              <span>Personalized Audio & Curated Gallery</span>
              <span>100% Mobile Responsive Keepsake</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
