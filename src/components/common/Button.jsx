import React from 'react';

/**
 * Luxury Button Primitive
 * Supports primary gold, secondary outline, ghost, WhatsApp green, and muted rose styles.
 */
export default function Button({
  children,
  variant = 'primary-gold',
  size = 'md',
  icon: Icon = null,
  iconPosition = 'left',
  fullWidth = false,
  disabled = false,
  loading = false,
  href = null,
  onClick,
  className = '',
  type = 'button',
  ariaLabel,
  ...rest
}) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9BD88] focus-visible:ring-offset-2 focus-visible:ring-offset-[#10131D] disabled:opacity-50 disabled:cursor-not-allowed select-none active:scale-[0.98] cursor-pointer tracking-wide';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 rounded-full gap-1.5',
    md: 'text-sm px-5 py-2.5 rounded-full gap-2',
    lg: 'text-base px-7 py-3.5 rounded-full gap-2.5 font-semibold',
  };

  const variantStyles = {
    'primary-gold':
      'bg-gradient-to-r from-[#D9BD88] to-[#C9A96E] text-[#10131D] font-semibold hover:from-[#E4CCA0] hover:to-[#D9BD88] shadow-md hover:shadow-lg hover:shadow-[#D9BD88]/20 border border-[#F4E7CD]/30',
    'secondary-outline':
      'bg-transparent text-[#FFF5E7] border border-[#D9BD88]/40 hover:border-[#D9BD88] hover:bg-[#D9BD88]/10 hover:text-[#FFF5E7]',
    'ghost':
      'bg-transparent text-[#FFF5E7]/80 hover:text-[#D9BD88] hover:bg-[#FFF5E7]/5 border border-transparent',
    'whatsapp':
      'bg-[#25D366] text-[#0A2012] font-semibold hover:bg-[#20bd5a] shadow-md hover:shadow-lg hover:shadow-[#25D366]/20 border border-[#85F4AD]/30',
    'rose':
      'bg-[#D88F9A] text-[#10131D] font-semibold hover:bg-[#E2A1AB] shadow-md hover:shadow-lg hover:shadow-[#D88F9A]/20 border border-[#F5CAD1]/30',
  };

  const combinedClasses = `
    ${baseStyles}
    ${sizeStyles[size] || sizeStyles.md}
    ${variantStyles[variant] || variantStyles['primary-gold']}
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `.trim();

  const content = (
    <>
      {loading ? (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      ) : Icon && iconPosition === 'left' ? (
        <Icon className="w-4 h-4 shrink-0 transition-transform group-hover:-translate-x-0.5" aria-hidden="true" />
      ) : null}

      <span>{children}</span>

      {!loading && Icon && iconPosition === 'right' ? (
        <Icon className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
      ) : null}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        aria-label={ariaLabel}
        {...rest}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={combinedClasses}
      aria-label={ariaLabel}
      {...rest}
    >
      {content}
    </button>
  );
}
