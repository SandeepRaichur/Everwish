import React, { useState } from 'react';
import { Play, Pause, Volume2, Mic } from 'lucide-react';

import Badge from '../common/Badge';

/**
 * Interactive Audio Voice Message Player Component
 * Used in the Family Demo to simulate recorded greetings from relatives
 */
export default function VoiceMessagePlayer({
  speaker = "Voice Note from Neha & Grandkids (London)",
  duration = "1:18",
  transcript = "\"Happy 50th Birthday Dad! Kabir and Ananya made a drawing for you today and we can't wait to see you next month. We love you so, so much!\"",
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);

  return (
    <div className="w-full max-w-xl mx-auto p-6 sm:p-8 rounded-3xl bg-[#1A1815] border-2 border-[#D9BD88]/30 shadow-2xl space-y-5">
      
      {/* Top Banner */}
      <div className="flex items-center justify-between gap-3">
        <Badge variant="gold" size="sm" dot>
          Recorded Voice Greeting
        </Badge>
        <span className="text-xs font-mono text-[#D9BD88] flex items-center gap-1">
          <Mic className="w-3.5 h-3.5" /> High-Fidelity Audio
        </span>
      </div>

      <div>
        <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#FBF7EF]">
          Family Audio Greeting
        </h3>
        <p className="text-xs text-[#FBF7EF]/70 mt-1">
          {speaker}
        </p>
      </div>

      {/* Audio Player Interface */}
      <div className="p-4 sm:p-5 rounded-2xl bg-[#121110] border border-[#293046] flex flex-col sm:flex-row items-center gap-4">
        
        {/* Play/Pause Button */}
        <button
          type="button"
          onClick={() => setIsPlaying(!isPlaying)}
          className="w-12 h-12 rounded-full bg-[#D9BD88] hover:bg-[#F4E7CD] text-[#121110] flex items-center justify-center shrink-0 shadow-lg cursor-pointer transition-transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#D9BD88]"
          aria-label={isPlaying ? 'Pause family voice message' : 'Play family voice message'}
        >
          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
        </button>

        {/* Dynamic Waveform Simulation */}
        <div className="flex-1 w-full space-y-1.5">
          <div className="flex items-center justify-between text-[11px] font-mono text-[#FBF7EF]/60">
            <span className="flex items-center gap-1 text-[#D9BD88]">
              <Volume2 className="w-3 h-3" /> {isPlaying ? 'Playing Audio Blessing...' : 'Ready to listen'}
            </span>
            <span>{isPlaying ? '0:24 / ' : ''}{duration}</span>
          </div>

          <div className="flex items-center justify-between gap-1 h-8 px-2 py-1 bg-[#1A1815] rounded-xl border border-[#293046]/50">
            {Array.from({ length: 28 }).map((_, idx) => {
              const baseHeight = 20 + Math.sin(idx * 0.5) * 60;
              return (
                <span
                  key={idx}
                  className={`w-1 rounded-full transition-all duration-300 ${
                    isPlaying
                      ? 'bg-[#D9BD88] animate-pulse'
                      : 'bg-[#D9BD88]/30'
                  }`}
                  style={{
                    height: isPlaying ? `${Math.max(15, (baseHeight + (idx % 3) * 15) % 100)}%` : `${baseHeight * 0.5}%`,
                    animationDelay: `${idx * 40}ms`,
                  }}
                />
              );
            })}
          </div>
        </div>

      </div>

      {/* Transcript Accordion / Reveal */}
      <div className="pt-2">
        <button
          type="button"
          onClick={() => setShowTranscript(!showTranscript)}
          className="text-xs text-[#D9BD88] hover:underline cursor-pointer flex items-center gap-1"
        >
          <span>{showTranscript ? 'Hide message transcript' : 'Read message transcript'}</span>
        </button>

        {showTranscript && (
          <div className="mt-3 p-4 rounded-xl bg-[#121110] border border-[#293046] text-xs font-serif italic text-[#FBF7EF]/90 leading-relaxed animate-in fade-in duration-200">
            {transcript}
          </div>
        )}
      </div>

    </div>
  );
}
