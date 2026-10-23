import React, { useState } from 'react';
import {
  Heart,
  Sparkles,
  Play,
  Pause,
  ArrowLeft,
  RotateCcw,
  Mail,
  Image as ImageIcon,
  ArrowRight,
  Lock,
} from 'lucide-react';
import Badge from '../common/Badge';
import Button from '../common/Button';
import InteractiveScratchCard from './InteractiveScratchCard';
import VoiceMessagePlayer from './VoiceMessagePlayer';

/**
 * Master Reusable Birthday Experience Engine
 * Drives Demo A (Romantic), Demo B (Best Friend), and Demo C (Family)
 * strictly separated from data, with 5-phase pacing and sales integration.
 */
export default function BirthdayExperience({
  data,
  onOrderThisStyle = null,
  onReturnToStudio = null,
  onSwitchDemo = null,
}) {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [letterUnfolded, setLetterUnfolded] = useState(true);
  const [secretMomentRevealed, setSecretMomentRevealed] = useState(false);
  const [confettiActive, setConfettiActive] = useState(false);
  const [activePhotoCategory, setActivePhotoCategory] = useState('All');
  const [isPasscodeLocked, setIsPasscodeLocked] = useState(Boolean(data.passcode));
  const [enteredPin, setEnteredPin] = useState('');
  const [pinError, setPinError] = useState(false);
  const correctPin = data.passcode || '2024';

  const triggerConfetti = () => {
    setConfettiActive(true);
    setTimeout(() => setConfettiActive(false), 3000);
  };

  const handleRestart = () => {
    setLetterUnfolded(false);
    setSecretMomentRevealed(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleUnlockPin = (e) => {
    e.preventDefault();
    if (enteredPin.trim() === correctPin) {
      setIsPasscodeLocked(false);
      setPinError(false);
      triggerConfetti();
    } else {
      setPinError(true);
    }
  };

  // Distinct photo styles per theme
  const getPhotoCardStyle = () => {
    if (data.theme === 'romantic') {
      return 'bg-[#18131E] border border-[#D88F9A]/30 hover:border-[#D88F9A] shadow-xl';
    }
    if (data.theme === 'playful') {
      return 'bg-[#141D2E] border-2 border-[#D9BD88]/40 hover:rotate-1 shadow-2xl transition-transform';
    }
    return 'bg-[#1A1815] border border-[#D9BD88]/30 hover:border-[#D9BD88] shadow-xl';
  };

  const categories = ['All', ...new Set(data.photoCollection.map((p) => p.category))];
  const filteredPhotos =
    activePhotoCategory === 'All'
      ? data.photoCollection
      : data.photoCollection.filter((p) => p.category === activePhotoCategory);

  return (
    <div
      className="min-h-screen text-[#FFF5E7] font-sans selection:bg-[#D9BD88] selection:text-[#10131D] relative pb-28"
      style={{ backgroundColor: data.colors.bg }}
    >
      {/* Confetti Animation Overlay */}
      {confettiActive && (
        <div
          className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center animate-in fade-in duration-300"
          aria-hidden="true"
        >
          <div className="text-4xl sm:text-6xl animate-bounce text-center">
            ✨ 🎉 🎂 💖 🥳 🥂 ✨
            <p className="text-sm font-mono text-[#D9BD88] mt-2 bg-black/80 px-4 py-1 rounded-full">
              Midnight Celebration Confetti!
            </p>
          </div>
        </div>
      )}

      {/* ── TOP PERSISTENT DEMO CONTROLLER BAR ── */}
      <header className="sticky top-0 z-40 bg-[#090B10]/95 backdrop-blur-md border-b border-[#293046] py-3 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          
          {/* Left: Back & Demo Label */}
          <div className="flex items-center gap-3">
            {onReturnToStudio && (
              <button
                type="button"
                onClick={onReturnToStudio}
                className="flex items-center gap-1.5 text-xs text-[#FFF5E7]/70 hover:text-[#D9BD88] transition-colors p-1.5 rounded-lg hover:bg-[#1D2233] cursor-pointer"
                title="Return to Everwish Studios"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Back to Studio</span>
              </button>
            )}

            <div className="flex items-center gap-2">
              <Badge variant="gold" size="sm" dot>
                Illustrative Demo
              </Badge>
              <span className="text-[11px] font-mono text-[#FFF5E7]/50 hidden lg:inline">
                Theme: {data.occasion}
              </span>
            </div>
          </div>

          {/* Center / Switcher: Jump between 3 Demos */}
          {onSwitchDemo && (
            <div className="flex items-center gap-1 bg-[#151926] p-1 rounded-full border border-[#293046] text-xs">
              <button
                type="button"
                onClick={() => onSwitchDemo('romantic')}
                className={`px-3 py-1 rounded-full font-medium transition-colors cursor-pointer ${
                  data.id === 'romantic'
                    ? 'bg-[#D88F9A] text-[#10131D] font-bold'
                    : 'text-[#FFF5E7]/60 hover:text-white'
                }`}
              >
                Romantic
              </button>
              <button
                type="button"
                onClick={() => onSwitchDemo('playful')}
                className={`px-3 py-1 rounded-full font-medium transition-colors cursor-pointer ${
                  data.id === 'playful'
                    ? 'bg-[#D9BD88] text-[#10131D] font-bold'
                    : 'text-[#FFF5E7]/60 hover:text-white'
                }`}
              >
                Best Friend
              </button>
              <button
                type="button"
                onClick={() => onSwitchDemo('family')}
                className={`px-3 py-1 rounded-full font-medium transition-colors cursor-pointer ${
                  data.id === 'family'
                    ? 'bg-[#C2A370] text-[#10131D] font-bold'
                    : 'text-[#FFF5E7]/60 hover:text-white'
                }`}
              >
                Family (Papa's 50th)
              </button>
            </div>
          )}

          {/* Right: Sound Control & Revisit Action */}
          <div className="flex items-center gap-3">
            {/* Audio Toggle (Strict rule: Never autoplay) */}
            {data.audioTrack && (
              <button
                type="button"
                onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono border transition-all cursor-pointer ${
                  isPlayingAudio
                    ? 'bg-[#D9BD88] text-[#10131D] border-[#F4E7CD] shadow-md font-bold'
                    : 'bg-[#151926] text-[#FFF5E7]/80 border-[#293046] hover:border-[#D9BD88]'
                }`}
                aria-label={isPlayingAudio ? 'Mute background soundtrack' : 'Play background soundtrack'}
              >
                {isPlayingAudio ? (
                  <>
                    <Pause className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate max-w-[120px]">{data.audioTrack.title}</span>
                    <span className="flex items-end gap-0.5 h-3 ml-0.5">
                      <span className="w-0.5 h-2 bg-current animate-bounce" />
                      <span className="w-0.5 h-3 bg-current animate-bounce delay-75" />
                      <span className="w-0.5 h-1.5 bg-current animate-bounce delay-150" />
                    </span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 shrink-0 text-[#D9BD88]" />
                    <span>Play Music</span>
                  </>
                )}
              </button>
            )}

            {/* Passcode Protection Toggle Button */}
            <button
              type="button"
              onClick={() => {
                setIsPasscodeLocked(!isPasscodeLocked);
                setPinError(false);
                setEnteredPin('');
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono border transition-all cursor-pointer ${
                isPasscodeLocked
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 shadow-sm'
                  : 'bg-[#151926] text-[#FFF5E7]/70 border-[#293046] hover:border-[#D9BD88]'
              }`}
              title="Test optional passcode protection feature"
            >
              <Lock className="w-3.5 h-3.5 text-[#D9BD88]" />
              <span className="hidden sm:inline">{isPasscodeLocked ? 'Locked' : 'Test PIN Lock'}</span>
            </button>

            {/* Restart button */}
            <button
              type="button"
              onClick={handleRestart}
              className="p-1.5 rounded-lg text-[#FFF5E7]/60 hover:text-[#FFF5E7] hover:bg-[#1D2233] transition-colors cursor-pointer"
              title="Restart Experience"
              aria-label="Restart Experience"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>

        </div>
      </header>

      {/* ── PASSCODE LOCK SCREEN (Optional Privacy Shield) ── */}
      {isPasscodeLocked ? (
        <div className="py-24 px-4 sm:px-6 lg:px-8 max-w-lg mx-auto text-center space-y-6 animate-in fade-in zoom-in-95 duration-200">
          <div className="w-20 h-20 mx-auto rounded-3xl bg-[#1D2233] border-2 border-[#D9BD88]/40 flex items-center justify-center text-[#D9BD88] shadow-2xl">
            <Lock className="w-10 h-10 animate-pulse" />
          </div>

          <div>
            <Badge variant="rose" size="sm" dot>
              Passcode Protected Keepsake
            </Badge>
            <h2 className="text-3xl font-serif font-bold text-[#FFF5E7] mt-3">
              Private Birthday Surprise
            </h2>
            <p className="text-xs sm:text-sm text-[#FFF5E7]/70 mt-2 leading-relaxed">
              This keepsake for <strong>{data.recipientName}</strong> has been secured with a private 4-digit PIN by the sender.
            </p>
          </div>

          <form onSubmit={handleUnlockPin} className="p-6 rounded-3xl bg-[#151926] border border-[#293046] space-y-4 shadow-2xl">
            <div>
              <label htmlFor="passcode-pin" className="block text-xs font-mono uppercase tracking-widest text-[#D9BD88] mb-2">
                Enter 4-Digit Birthday PIN
              </label>
              <input
                id="passcode-pin"
                type="password"
                maxLength={6}
                autoFocus
                placeholder="••••"
                value={enteredPin}
                onChange={(e) => {
                  setEnteredPin(e.target.value);
                  if (pinError) setPinError(false);
                }}
                className="w-full text-center text-3xl font-mono tracking-[0.5em] px-4 py-3 rounded-2xl bg-[#10131D] border border-[#D9BD88]/40 text-[#FFF5E7] focus:outline-none focus:ring-2 focus:ring-[#D9BD88]"
              />
            </div>

            {pinError && (
              <p className="text-xs text-rose-400 font-mono">
                Incorrect PIN. Please check with {data.senderName}.
              </p>
            )}

            <button
              type="submit"
              className="w-full py-3 rounded-2xl bg-[#D9BD88] text-[#10131D] font-bold text-sm hover:bg-[#F4E7CD] transition-all transform hover:scale-[1.02] cursor-pointer shadow-lg"
            >
              Unlock Keepsake
            </button>

            {/* Demo testing shortcut */}
            <div className="pt-2 border-t border-white/10">
              <button
                type="button"
                onClick={() => {
                  setEnteredPin(correctPin);
                  setPinError(false);
                }}
                className="text-[11px] text-[#D9BD88] hover:underline font-mono cursor-pointer"
              >
                [ Test Shortcut: Auto-fill Demo PIN ({correctPin}) ]
              </button>
            </div>
          </form>
        </div>
      ) : (
        <>
          {/* ── PHASE 1: INTRIGUING CINEMATIC OPENING ── */}
          <section className="pt-20 pb-24 md:pt-28 md:pb-36 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        
        {/* Mood-colored ambient backdrop aura */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full blur-3xl pointer-events-none -z-10 opacity-30"
          style={{ backgroundColor: data.colors.primary }}
          aria-hidden="true"
        />

        <div className="max-w-4xl mx-auto space-y-6">
          <Badge
            variant={data.theme === 'romantic' ? 'rose' : 'gold'}
            size="md"
            dot
          >
            {data.opening.tag}
          </Badge>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-[#FFF5E7] tracking-tight leading-[1.15]">
            {data.opening.headline}
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-[#FFF5E7]/80 max-w-2xl mx-auto font-light leading-relaxed">
            {data.opening.subheadline}
          </p>

          <div className="pt-6">
            <button
              type="button"
              onClick={() => {
                setLetterUnfolded(true);
                const el = document.getElementById('letter-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all transform hover:scale-105 cursor-pointer shadow-lg active:scale-95"
              style={{
                backgroundColor: data.colors.primary,
                color: data.colors.bg,
              }}
            >
              <Mail className="w-4 h-4" />
              <span>{data.opening.openingPrompt}</span>
            </button>
          </div>

          <div className="pt-12 text-xs text-[#FFF5E7]/40 flex items-center justify-center gap-2 font-mono">
            <span>Scroll down to relive the memories</span>
            <span>↓</span>
          </div>
        </div>
      </section>

      {/* ── PHASE 2: PERSONAL CONNECTION (THE LETTER) ── */}
      <section id="letter-section" className="py-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
        
        <div
          className="p-8 sm:p-12 rounded-3xl border shadow-2xl relative transition-all"
          style={{
            backgroundColor: data.colors.surface,
            borderColor: data.colors.border,
          }}
        >
          {/* Header of Letter with Seal stamp */}
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10 text-xs">
            <div className="flex items-center gap-2">
              <span className="font-serif italic text-[#D9BD88] text-sm">
                From: {data.senderName}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-[11px] text-[#FFF5E7]/50 uppercase tracking-widest px-2.5 py-0.5 rounded bg-white/5 border border-white/10">
                {data.personalLetter.waxSealNumber}
              </span>
              <button
                type="button"
                onClick={() => setLetterUnfolded(!letterUnfolded)}
                className="text-xs text-[#D9BD88] hover:underline cursor-pointer"
              >
                {letterUnfolded ? 'Fold' : 'Unfold'}
              </button>
            </div>
          </div>

          {/* Letter Body */}
          {letterUnfolded ? (
            <div className="space-y-5 text-[#FFF5E7]/90 leading-relaxed font-serif text-base sm:text-lg animate-in fade-in duration-300">
              <p className="font-bold text-xl text-[#D9BD88]">
                {data.personalLetter.salutation}
              </p>

              {data.personalLetter.bodyParagraphs.map((paragraph, idx) => (
                <p key={idx} className="font-light italic text-[#FFF5E7]/85">
                  "{paragraph}"
                </p>
              ))}

              <div className="pt-6 border-t border-white/10 flex flex-col items-end text-right font-serif">
                <span className="text-xs text-[#FFF5E7]/60 italic">
                  {data.personalLetter.signoff}
                </span>
                <span className="text-lg font-bold text-[#D9BD88] mt-1">
                  {data.personalLetter.author}
                </span>
              </div>
            </div>
          ) : (
            <div
              onClick={() => setLetterUnfolded(true)}
              className="py-6 text-center cursor-pointer text-xs text-[#D9BD88] font-mono uppercase tracking-wider hover:underline"
            >
              [ Letter is folded • Click to unseal and read ]
            </div>
          )}


        </div>
      </section>

      {/* ── PHASE 3: EMOTIONAL & PLAYFUL MIDDLE (PHOTOS & TIMELINE) ── */}
      
      {/* Photo Gallery Showcase */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <Badge variant="gold" size="sm" dot>
            Curated Photo Album
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#FFF5E7] mt-3">
            Moments Frozen in Time
          </h2>
          <p className="text-xs sm:text-sm text-[#FFF5E7]/70 mt-2 font-light">
            Every picture tells a chapter of our story.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActivePhotoCategory(cat)}
                className={`px-3 py-1 rounded-full text-xs font-mono transition-colors cursor-pointer ${
                  activePhotoCategory === cat
                    ? 'bg-[#D9BD88] text-[#10131D] font-bold'
                    : 'bg-white/5 text-[#FFF5E7]/60 hover:text-white border border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              className={`p-5 sm:p-6 rounded-3xl flex flex-col justify-between ${getPhotoCardStyle()}`}
            >
              <div>
                {/* Visual Placeholder Art Canvas with High Aesthetics */}
                <div className="aspect-[4/3] rounded-2xl bg-gradient-to-tr from-[#1D2233] to-[#090B10] border border-white/10 flex flex-col items-center justify-center p-4 text-center relative overflow-hidden group">
                  <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-[#D9BD88] mb-2 group-hover:scale-110 transition-transform">
                    <ImageIcon className="w-5 h-5" />
                  </div>
                  <p className="text-xs font-serif font-medium text-[#FFF5E7] line-clamp-1">
                    {photo.caption}
                  </p>
                  <span className="text-[10px] font-mono text-[#D9BD88]/80 mt-1">
                    {photo.date}
                  </span>
                </div>

                <div className="mt-4 space-y-1.5">
                  <div className="flex items-center justify-between text-[11px] text-[#D9BD88]">
                    <span className="font-mono uppercase tracking-wider">{photo.category}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#FFF5E7]/80 font-serif italic leading-relaxed">
                    "{photo.story}"
                  </p>
                </div>
              </div>

              <div className="pt-3 mt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-[#FFF5E7]/40 font-mono">
                <span>Curated Image</span>
                <span>Everwish High-Res</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Relationship / Retrospective Timeline */}
      <section className="py-20 bg-[#090B10]/80 border-y border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <Badge variant="gold" size="sm" dot>
              The Journey Together
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#FFF5E7] mt-3">
              Milestone Timeline
            </h2>
            <p className="text-xs sm:text-sm text-[#FFF5E7]/70 mt-2 font-light">
              From the day our paths crossed to celebrating this milestone today.
            </p>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 sm:before:left-1/2 before:-translate-x-1/2 before:w-0.5 before:bg-[#D9BD88]/30">
            {data.timeline.map((item, idx) => (
              <div
                key={idx}
                className="relative flex flex-col sm:flex-row items-start gap-6 sm:gap-10 group"
              >
                {/* Year Marker Pill */}
                <div className="sm:w-1/2 sm:text-right">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#151926] border border-[#D9BD88]/40 text-xs font-mono font-bold text-[#D9BD88]">
                    {item.year}
                  </span>
                  <h3 className="text-base sm:text-lg font-serif font-bold text-[#FFF5E7] mt-1">
                    {item.title}
                  </h3>
                </div>

                {/* Center Node */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-1.5 w-3 h-3 rounded-full bg-[#D9BD88] border-2 border-[#10131D] group-hover:scale-125 transition-transform shrink-0" />

                {/* Narrative Snippet */}
                <div className="sm:w-1/2 pl-8 sm:pl-0">
                  <p className="text-xs sm:text-sm text-[#FFF5E7]/75 font-light leading-relaxed p-4 rounded-2xl bg-white/5 border border-white/10">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── PHASE 4: INTERACTIVE MOMENT (TAILORED PER THEME) ── */}
      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Theme A (Romantic): Secret Midnight Promise */}
        {data.theme === 'romantic' && (
          <div className="max-w-xl mx-auto p-8 rounded-3xl bg-[#18131E] border border-[#D88F9A]/40 shadow-2xl text-center space-y-5">
            <Badge variant="rose" size="sm" dot>
              Midnight Secret Promise
            </Badge>
            <h3 className="font-serif text-2xl font-bold text-[#FFF5E7]">
              {data.interactiveMoment.title}
            </h3>
            <p className="text-xs text-[#FFF5E7]/70">
              A private note that only unseals when you choose to open it.
            </p>

            <div
              onClick={() => setSecretMomentRevealed(!secretMomentRevealed)}
              className="p-6 rounded-2xl bg-[#100D14] border border-[#D88F9A]/30 hover:border-[#D88F9A] cursor-pointer transition-all duration-300 group"
              role="button"
              tabIndex={0}
              aria-expanded={secretMomentRevealed}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setSecretMomentRevealed(!secretMomentRevealed)}
            >
              {secretMomentRevealed ? (
                <div className="space-y-3 animate-in fade-in duration-300">
                  <span className="text-2xl text-[#D88F9A]">✦ ♡ ✦</span>
                  <p className="font-serif italic text-base text-[#F5CAD1] leading-relaxed">
                    "{data.interactiveMoment.unsealedNote}"
                  </p>
                  <p className="text-[11px] text-[#FFF5E7]/40 font-mono">
                    [ Click to fold secret promise ]
                  </p>
                </div>
              ) : (
                <div className="py-4 space-y-2">
                  <div className="w-12 h-12 rounded-full bg-[#D88F9A]/20 border border-[#D88F9A]/40 mx-auto flex items-center justify-center text-[#D88F9A] group-hover:scale-110 transition-transform">
                    <Heart className="w-6 h-6 fill-current" />
                  </div>
                  <p className="text-xs font-mono uppercase tracking-wider text-[#D88F9A] font-bold">
                    {data.interactiveMoment.sealedLabel}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Theme B (Best Friend): Interactive Scratch Card */}
        {data.theme === 'playful' && (
          <InteractiveScratchCard
            question={data.interactiveMoment.question}
            answer={data.interactiveMoment.answer}
            statHighlight={data.interactiveMoment.statHighlight}
          />
        )}

        {/* Theme C (Family): Voice Message Player */}
        {data.theme === 'family' && data.voiceMessage && (
          <VoiceMessagePlayer
            speaker={data.voiceMessage.speaker}
            duration={data.voiceMessage.duration}
            transcript={data.voiceMessage.transcript}
          />
        )}

      </section>

      {/* ── PHASE 5: SATISFYING CONCLUSION & CELEBRATION ── */}
      <section className="py-20 text-center max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <Badge variant="gold" size="md">
          Midnight Wish
        </Badge>

        <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#FFF5E7]">
          {data.closing.title}
        </h2>

        <p className="text-sm sm:text-base text-[#FFF5E7]/80 max-w-xl mx-auto font-light leading-relaxed">
          {data.closing.message}
        </p>

        <p className="font-serif italic text-lg text-[#D9BD88] font-bold">
          {data.closing.authorSignature}
        </p>

        {/* Interactive Confetti & Celebration Button */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            onClick={triggerConfetti}
            className="px-6 py-3 rounded-full bg-[#D9BD88] hover:bg-[#F4E7CD] text-[#10131D] font-bold text-xs uppercase tracking-wider transition-all transform hover:scale-105 active:scale-95 shadow-xl cursor-pointer"
          >
            🎉 Tap To Send Midnight Confetti!
          </button>
          <button
            type="button"
            onClick={handleRestart}
            className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-[#FFF5E7] text-xs font-semibold border border-white/20 transition-all cursor-pointer"
          >
            ↺ Revisit From Beginning
          </button>
        </div>

      </section>
      </>
      )}

      {/* ── BOTTOM STICKY SALES CONVERSION BAR (Sales Integration) ── */}
      <div className="fixed bottom-0 inset-x-0 z-40 bg-[#090B10]/95 backdrop-blur-md border-t border-[#D9BD88]/30 py-3.5 px-4 shadow-2xl">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          
          <div className="flex items-center gap-2.5 text-center sm:text-left">
            <Sparkles className="w-4 h-4 text-[#D9BD88] shrink-0" />
            <p className="text-[#FFF5E7]/90">
              Loved this <strong className="text-[#D9BD88] capitalize">{data.theme}</strong> birthday experience?{' '}
              <span className="hidden md:inline text-[#FFF5E7]/60">
                Create a personalized version for your special someone in 24–48 hours.
              </span>
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {onReturnToStudio && (
              <button
                type="button"
                onClick={onReturnToStudio}
                className="text-xs text-[#FFF5E7]/70 hover:text-white underline cursor-pointer"
              >
                Back to Everwish
              </button>
            )}

            <Button
              variant="primary-gold"
              size="sm"
              icon={ArrowRight}
              iconPosition="right"
              onClick={() => onOrderThisStyle && onOrderThisStyle(data.theme)}
            >
              Order This Style (From ₹499)
            </Button>
          </div>

        </div>
      </div>

    </div>
  );
}
