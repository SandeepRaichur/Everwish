import React from 'react';

/**
 * Accessible luxury Form Controls
 */

export function Input({
  id,
  label,
  type = 'text',
  placeholder = '',
  value,
  onChange,
  error = null,
  helperText = null,
  required = false,
  icon: Icon = null,
  className = '',
  disabled = false,
  ...rest
}) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && (
        <label
          htmlFor={id}
          className="text-xs sm:text-sm font-medium text-[#FFF5E7]/90 flex items-center justify-between"
        >
          <span>
            {label} {required && <span className="text-[#D88F9A]">*</span>}
          </span>
          {helperText && (
            <span className="text-[11px] text-[#FFF5E7]/50 font-normal">
              {helperText}
            </span>
          )}
        </label>
      )}

      <div className="relative">
        {Icon && (
          <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#FFF5E7]/40 pointer-events-none">
            <Icon className="w-4 h-4" />
          </div>
        )}
        <input
          id={id}
          name={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          required={required}
          className={`w-full bg-[#151926]/90 text-[#FFF5E7] placeholder:text-[#FFF5E7]/30 border text-sm rounded-xl py-2.5 transition-all duration-200 outline-none ${
            Icon ? 'pl-10 pr-4' : 'px-4'
          } ${
            error
              ? 'border-red-400/80 focus:border-red-400 focus:ring-1 focus:ring-red-400'
              : 'border-[#293046] hover:border-[#D9BD88]/40 focus:border-[#D9BD88] focus:ring-1 focus:ring-[#D9BD88]'
          } disabled:opacity-50 disabled:cursor-not-allowed`}
          {...rest}
        />
      </div>

      {error && (
        <p className="text-xs text-red-300/90 mt-0.5 flex items-center gap-1">
          <span aria-hidden="true">⚠</span> {error}
        </p>
      )}
    </div>
  );
}

export function Select({
  id,
  label,
  options = [],
  value,
  onChange,
  error = null,
  helperText = null,
  required = false,
  className = '',
  ...rest
}) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && (
        <label
          htmlFor={id}
          className="text-xs sm:text-sm font-medium text-[#FFF5E7]/90 flex items-center justify-between"
        >
          <span>
            {label} {required && <span className="text-[#D88F9A]">*</span>}
          </span>
          {helperText && (
            <span className="text-[11px] text-[#FFF5E7]/50 font-normal">
              {helperText}
            </span>
          )}
        </label>
      )}

      <select
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        required={required}
        className={`w-full bg-[#151926] text-[#FFF5E7] border text-sm rounded-xl px-4 py-2.5 transition-all duration-200 outline-none cursor-pointer ${
          error
            ? 'border-red-400/80 focus:border-red-400 focus:ring-1 focus:ring-red-400'
            : 'border-[#293046] hover:border-[#D9BD88]/40 focus:border-[#D9BD88] focus:ring-1 focus:ring-[#D9BD88]'
        }`}
        {...rest}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} className="bg-[#151926] text-[#FFF5E7]">
            {opt.label}
          </option>
        ))}
      </select>

      {error && (
        <p className="text-xs text-red-300/90 mt-0.5">{error}</p>
      )}
    </div>
  );
}

export function Textarea({
  id,
  label,
  placeholder = '',
  value,
  onChange,
  rows = 4,
  error = null,
  helperText = null,
  required = false,
  className = '',
  maxLength,
  ...rest
}) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && (
        <label
          htmlFor={id}
          className="text-xs sm:text-sm font-medium text-[#FFF5E7]/90 flex items-center justify-between"
        >
          <span>
            {label} {required && <span className="text-[#D88F9A]">*</span>}
          </span>
          {helperText && (
            <span className="text-[11px] text-[#FFF5E7]/50 font-normal">
              {helperText}
            </span>
          )}
        </label>
      )}

      <textarea
        id={id}
        name={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={rows}
        maxLength={maxLength}
        required={required}
        className={`w-full bg-[#151926]/90 text-[#FFF5E7] placeholder:text-[#FFF5E7]/30 border text-sm rounded-xl px-4 py-3 transition-all duration-200 outline-none resize-y ${
          error
            ? 'border-red-400/80 focus:border-red-400 focus:ring-1 focus:ring-red-400'
            : 'border-[#293046] hover:border-[#D9BD88]/40 focus:border-[#D9BD88] focus:ring-1 focus:ring-[#D9BD88]'
        }`}
        {...rest}
      />

      <div className="flex items-center justify-between text-[11px] text-[#FFF5E7]/40">
        {error ? (
          <p className="text-red-300/90">{error}</p>
        ) : (
          <span />
        )}
        {maxLength && (
          <span>
            {(value || '').length}/{maxLength}
          </span>
        )}
      </div>
    </div>
  );
}
