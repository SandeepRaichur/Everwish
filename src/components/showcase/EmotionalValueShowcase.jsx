import React, { useState } from 'react';
import { Mail, Play, Pause, Heart, Image as ImageIcon, Volume2 } from 'lucide-react';

import SectionHeading from '../common/SectionHeading';
import Badge from '../common/Badge';
import Button from '../common/Button';

/**
 * Emotional Value Section
 * Demonstrates why a personalized website creates an indelible emotional impact.
 * Features 4 tactile, interactive simulations:
 * 1. The Wax-Sealed Unfolding Letter
 * 2. The Synchronized Soundtrack Player
 * 3. The Interactive Memory Timeline Card
 * 4. The Midnight Countdown Clock
 */
export default function EmotionalValueShowcase({ onStartSurprise = null }) {
  const [letterOpen, setLetterOpen] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeMemoryIdx, setActiveMemoryIdx] = useState(0);

  const sampleMemories = [
    {
      year: "2021",
      tag: "Where It All Began",
      location: "Marine Drive, 11:45 PM",
      note: "Two cups of cutting chai and 4 straight hours of conversation about our craziest dreams.",
      imageDesc: "First photo ever taken together",
    },
    {
      year: "2023",
      tag: "The Unplanned Road Trip",
      location: "Old Goa & Chapora Fort",
      note: "We got drenched in a sudden July downpour, lost our hotel keys, and laughed till our ribs hurt.",
      imageDesc: "Sunset view over the Arabian sea",
    },
    {
      year: "Today",
      tag: "Celebrating Another Year",
      location: "Right Here, With You",
      note: "Every passing year only makes me realize how lucky I am to have you by my side. Happy Birthday!",
      imageDesc: "Forever our favorite memory",
    },
  ];

  return (
    <section className="py-24 bg-[#0B0D14] border-y border-[#D9BD88]/15 relative overflow-hidden">
      
      {/* Background ambient light */}
      <div
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#D88F9A]/5 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-[#D9BD88]/5 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          overline="Why A Website Lasts Forever"
          title="Physical gifts get forgotten."
          italicWord="Words and memories never do."
          subtitle="A personalized birthday website isn't another throwaway trinket. It's a digital heirloom that preserves your relationship's unique cadence, private jokes, and deepest gratitude."
          badgeText="The Everwish Difference"
        />

        {/* 4 Interactive Demonstrations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: The Interactive Wax-Sealed Letter */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#151926]/90 border border-[#293046] hover:border-[#D9BD88]/40 transition-all flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <Badge variant="rose" size="sm" dot>
                  Interactive Touch 01
                </Badge>
                <span className="text-xs font-mono text-[#D88F9A]">
                  Tap To Experience
                </span>
              </div>

              <h3 className="font-serif text-2xl text-[#FFF5E7] font-bold mb-2">
                The Unfolding Love Letter
              </h3>
              <p className="text-xs sm:text-sm text-[#FFF5E7]/70 leading-relaxed font-light mb-6">
                Instead of a standard greeting card that gets tucked in a drawer, your recipient taps a custom wax seal to reveal your heartfelt message in elegant editorial typography.
              </p>

              {/* Interactive Envelope Preview */}
              <div
                onClick={() => setLetterOpen(!letterOpen)}
                className="p-5 sm:p-6 rounded-2xl bg-[#10131D] border border-[#D88F9A]/30 hover:border-[#D88F9A] cursor-pointer transition-all duration-300 relative group"
                role="button"
                tabIndex={0}
                aria-expanded={letterOpen}
                aria-label="Toggle folded letter"
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setLetterOpen(!letterOpen)}
              >
                <div className="flex items-center justify-between text-xs text-[#D88F9A] mb-3">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Mail className="w-4 h-4" /> {letterOpen ? 'Click to fold letter' : 'Click wax seal to unseal'}
                  </span>
                  <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-[#D88F9A]/15 border border-[#D88F9A]/30">
                    Wax Seal #102
                  </span>
                </div>

                {letterOpen ? (
                  <div className="space-y-3 pt-2 text-[#FFF5E7] animate-in fade-in duration-300">
                    <p className="font-serif italic text-base sm:text-lg text-[#F5CAD1] leading-relaxed">
                      "I still remember the first night we stayed up talking until sunrise. Out of all the people in this world, nobody understands my quiet moments the way you do..."
                    </p>
                    <div className="pt-2 flex items-center justify-between text-xs text-[#FFF5E7]/50 font-serif italic border-t border-white/10">
                      <span>Forever & always,</span>
                      <span className="text-[#D88F9A] font-semibold">Your Favorite Human</span>
                    </div>
                  </div>
                ) : (
                  <div className="py-8 text-center text-xs text-[#FFF5E7]/50 flex flex-col items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-[#D88F9A]/20 border border-[#D88F9A]/40 flex items-center justify-center text-[#D88F9A]">
                      <Heart className="w-5 h-5 fill-current" />
                    </div>
                    <span>[ Sealed with love • Click to open ]</span>
                  </div>
                )}
              </div>
            </div>

            <p className="text-[11px] text-[#FFF5E7]/40 mt-4 italic">
              ✦ Every letter is privately styled with custom sign-offs, romantic or playful tones, and private inside references.
            </p>
          </div>

          {/* Card 2: The Synchronized Soundtrack */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#151926]/90 border border-[#293046] hover:border-[#D9BD88]/40 transition-all flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <Badge variant="gold" size="sm" dot>
                  Interactive Touch 02
                </Badge>
                <span className="text-xs font-mono text-[#D9BD88]">
                  Custom Audio Sync
                </span>
              </div>

              <h3 className="font-serif text-2xl text-[#FFF5E7] font-bold mb-2">
                The Synchronized Soundtrack
              </h3>
              <p className="text-xs sm:text-sm text-[#FFF5E7]/70 leading-relaxed font-light mb-6">
                Music carries memory. When they open the website at midnight, their favorite song gently plays in the background, setting an unforgettable atmospheric tone.
              </p>

              {/* Interactive Player Simulation */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#10131D] border border-[#D9BD88]/30 space-y-4">
                <div className="flex items-center gap-4">
                  {/* Rotating Vinyl Icon */}
                  <div
                    className={`w-14 h-14 rounded-full bg-gradient-to-tr from-[#1D2233] to-[#090B10] border-2 border-[#D9BD88]/50 flex items-center justify-center shrink-0 shadow-lg ${
                      isPlaying ? 'animate-spin' : ''
                    }`}
                    style={{ animationDuration: '6s' }}
                  >
                    <div className="w-4 h-4 rounded-full bg-[#D9BD88] border-2 border-[#10131D]" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="text-xs uppercase font-mono tracking-wider text-[#D9BD88]">
                      Custom Chosen Track
                    </p>
                    <p className="text-sm sm:text-base font-semibold text-[#FFF5E7] truncate">
                      "Kasoor" — Prateek Kuhad
                    </p>
                    <p className="text-xs text-[#FFF5E7]/50 truncate">
                      Synced to letter reveal & memory gallery
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-11 h-11 rounded-full bg-[#D9BD88] hover:bg-[#F4E7CD] text-[#10131D] flex items-center justify-center shrink-0 cursor-pointer shadow-md transition-all active:scale-95"
                    aria-label={isPlaying ? 'Pause music preview' : 'Play music preview'}
                  >
                    {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
                  </button>
                </div>

                {/* Progress bar & Equalizer */}
                <div className="space-y-1.5 pt-2 border-t border-[#293046]">
                  <div className="flex items-center justify-between text-[11px] text-[#FFF5E7]/50 font-mono">
                    <span>{isPlaying ? '0:42' : '0:00'}</span>
                    <span className="flex items-center gap-1 text-[#D9BD88]">
                      <Volume2 className="w-3.5 h-3.5" /> Background Audio Enabled
                    </span>
                    <span>3:18</span>
                  </div>
                  <div className="w-full h-1.5 bg-[#293046] rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-[#D9BD88] transition-all duration-500 ${
                        isPlaying ? 'w-2/5' : 'w-0'
                      }`}
                    />
                  </div>
                </div>
              </div>
            </div>

            <p className="text-[11px] text-[#FFF5E7]/40 mt-4 italic">
              ✦ Support for any song from Spotify, YouTube, or your own personal voice recordings and audio notes.
            </p>
          </div>

          {/* Card 3: Memory Timeline with Clickable Milestones */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#151926]/90 border border-[#293046] hover:border-[#D9BD88]/40 transition-all flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <Badge variant="gold" size="sm" dot>
                  Interactive Touch 03
                </Badge>
                <span className="text-xs font-mono text-[#D9BD88]">
                  Milestone Pacing
                </span>
              </div>

              <h3 className="font-serif text-2xl text-[#FFF5E7] font-bold mb-2">
                Curated Memory Timeline
              </h3>
              <p className="text-xs sm:text-sm text-[#FFF5E7]/70 leading-relaxed font-light mb-6">
                We organize your photos chronologically with location tags, dates, and micro-notes so they relive the entire adventure of knowing you.
              </p>

              {/* Memory switcher */}
              <div className="flex gap-2 mb-4">
                {sampleMemories.map((m, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveMemoryIdx(idx)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                      activeMemoryIdx === idx
                        ? 'bg-[#D9BD88] text-[#10131D] font-bold'
                        : 'bg-[#10131D] text-[#FFF5E7]/60 hover:text-[#FFF5E7] border border-[#293046]'
                    }`}
                  >
                    {m.year}
                  </button>
                ))}
              </div>

              {/* Active Memory Preview Box */}
              <div className="p-5 rounded-2xl bg-[#10131D] border border-[#293046] space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#D9BD88] font-semibold">
                    {sampleMemories[activeMemoryIdx].tag}
                  </span>
                  <span className="text-[#FFF5E7]/40 text-[11px] font-mono">
                    {sampleMemories[activeMemoryIdx].location}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#FFF5E7]/90 font-serif italic leading-relaxed">
                  "{sampleMemories[activeMemoryIdx].note}"
                </p>
                <div className="pt-2 text-[10px] text-[#D9BD88]/70 flex items-center gap-1.5 font-mono">
                  <ImageIcon className="w-3.5 h-3.5" /> High-Resolution Photo Frame Included
                </div>
              </div>
            </div>

            <p className="text-[11px] text-[#FFF5E7]/40 mt-4 italic">
              ✦ Supports up to 20 photos in the Personalized package and up to 40 photos with video embeds in Grand Heirloom.
            </p>
          </div>

          {/* Card 4: Midnight Countdown & Instant Delivery */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#151926]/90 border border-[#293046] hover:border-[#D9BD88]/40 transition-all flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <Badge variant="emerald" size="sm" dot>
                  Interactive Touch 04
                </Badge>
                <span className="text-xs font-mono text-emerald-400">
                  Midnight Reveal
                </span>
              </div>

              <h3 className="font-serif text-2xl text-[#FFF5E7] font-bold mb-2">
                The 12:00 AM Countdown
              </h3>
              <p className="text-xs sm:text-sm text-[#FFF5E7]/70 leading-relaxed font-light mb-6">
                Send the private link in advance. A subtle countdown ticks away until midnight strikes, unlocking the grand celebration message and fireworks confetti!
              </p>

              {/* Countdown Visual Simulation */}
              <div className="p-5 rounded-2xl bg-[#10131D] border border-emerald-500/30 text-center space-y-3">
                <p className="text-[11px] uppercase tracking-widest text-[#D9BD88] font-mono">
                  Countdown to Midnight Surprise:
                </p>
                <div className="grid grid-cols-4 gap-2 max-w-xs mx-auto">
                  <div className="p-2.5 rounded-xl bg-[#151926] border border-[#293046]">
                    <span className="font-serif text-xl sm:text-2xl font-bold text-[#FFF5E7] block">04</span>
                    <span className="text-[9px] uppercase tracking-wider text-[#FFF5E7]/40">Hours</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#151926] border border-[#293046]">
                    <span className="font-serif text-xl sm:text-2xl font-bold text-[#FFF5E7] block">28</span>
                    <span className="text-[9px] uppercase tracking-wider text-[#FFF5E7]/40">Mins</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#151926] border border-[#293046]">
                    <span className="font-serif text-xl sm:text-2xl font-bold text-[#D9BD88] block">16</span>
                    <span className="text-[9px] uppercase tracking-wider text-[#FFF5E7]/40">Secs</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#151926] border border-[#293046]">
                    <span className="font-serif text-xl sm:text-2xl font-bold text-emerald-400 block">✦</span>
                    <span className="text-[9px] uppercase tracking-wider text-[#FFF5E7]/40">Live</span>
                  </div>
                </div>
                <p className="text-[11px] text-emerald-300 font-medium pt-1">
                  ✓ Automatically triggers confetti & music playback at 12:00:00 AM
                </p>
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between">
              <span className="text-xs text-[#FFF5E7]/60">
                Turnaround: <strong>24–48 Hours</strong>
              </span>
              {onStartSurprise && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onStartSurprise}
                >
                  Create Your Surprise →
                </Button>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
