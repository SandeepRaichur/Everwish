import React from 'react';

/**
 * Editorial Badge / Status Indicator
 * Refined pill tags for packages, turnaround times, and status cues.
 */
export default function Badge({
  children,
  variant = 'gold',
  size = 'md',
  dot = false,
  className = '',
}) {
  const sizeStyles = {
    sm: 'text-[11px] px-2.5 py-0.5 tracking-wider font-medium',
    md: 'text-xs px-3 py-1 tracking-wider font-medium',
  };

  const variantStyles = {
    gold: 'bg-[#D9BD88]/15 text-[#F4E7CD] border border-[#D9BD88]/30',
    rose: 'bg-[#D88F9A]/15 text-[#F5CAD1] border border-[#D88F9A]/30',
    ivory: 'bg-[#FFF5E7]/10 text-[#FFF5E7] border border-[#FFF5E7]/20',
    emerald: 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30',
    dark: 'bg-[#090B10] text-[#D8CFC0] border border-[#293046]',
  };

  const dotColors = {
    gold: 'bg-[#D9BD88]',
    rose: 'bg-[#D88F9A]',
    ivory: 'bg-[#FFF5E7]',
    emerald: 'bg-emerald-400 animate-pulse',
    dark: 'bg-[#8E8A80]',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full uppercase tracking-wider ${
        sizeStyles[size] || sizeStyles.md
      } ${variantStyles[variant] || variantStyles.gold} ${className}`}
    >
      {dot && (
        <span
          className={`w-1.5 h-1.5 rounded-full shrink-0 ${dotColors[variant] || dotColors.gold}`}
          aria-hidden="true"
        />
      )}
      <span>{children}</span>
    </span>
  );
}
