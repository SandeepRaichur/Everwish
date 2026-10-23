import React from 'react';

/**
 * Editorial Section Heading
 * Balances an upscale serif headline with an overline and supportive subtitle.
 */
export default function SectionHeading({
  overline,
  title,
  italicWord,
  subtitle,
  align = 'center',
  badgeText = null,
  className = '',
}) {
  const isCenter = align === 'center';

  return (
    <div
      className={`max-w-3xl mb-12 sm:mb-16 ${
        isCenter ? 'mx-auto text-center' : 'text-left'
      } ${className}`}
    >
      {/* Overline & Badge */}
      <div className={`flex items-center gap-3 mb-3 ${isCenter ? 'justify-center' : 'justify-start'}`}>
        {overline && (
          <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#D9BD88] uppercase">
            {overline}
          </p>
        )}
        {badgeText && (
          <span className="text-[10px] tracking-widest px-2.5 py-0.5 rounded-full uppercase bg-[#D9BD88]/10 text-[#F4E7CD] border border-[#D9BD88]/20 font-medium">
            {badgeText}
          </span>
        )}
      </div>

      {/* Main Headline */}
      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif text-[#FFF5E7] tracking-tight leading-[1.15]">
        {title}{' '}
        {italicWord && (
          <span className="italic font-normal text-gold-gradient">
            {italicWord}
          </span>
        )}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className="mt-4 text-sm sm:text-base lg:text-lg text-[#FFF5E7]/70 leading-relaxed font-light">
          {subtitle}
        </p>
      )}

      {/* Subtle editorial dividing rule */}
      <div
        className={`mt-6 h-[1px] w-16 bg-gradient-to-r from-transparent via-[#D9BD88]/40 to-transparent ${
          isCenter ? 'mx-auto' : ''
        }`}
        aria-hidden="true"
      />
    </div>
  );
}
