import React from 'react';
import { CheckCircle2, AlertTriangle, AlertCircle, Info, X } from 'lucide-react';

/**
 * Loading, Error, and Success State Primitives
 */

export function LoadingSkeleton({ className = '', lines = 3 }) {
  return (
    <div className={`space-y-3 animate-pulse ${className}`} role="status" aria-label="Loading content...">
      <div className="h-6 bg-[#293046]/60 rounded-md w-3/4" />
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className="h-4 bg-[#1D2233]/70 rounded-md"
          style={{ width: `${85 - i * 15}%` }}
        />
      ))}
      <span className="sr-only">Loading...</span>
    </div>
  );
}

export function AlertBanner({
  variant = 'info',
  title,
  message,
  onClose = null,
  className = '',
}) {
  const configs = {
    info: {
      icon: Info,
      bg: 'bg-[#151926] border-[#D9BD88]/40 text-[#FFF5E7]',
      iconColor: 'text-[#D9BD88]',
    },
    success: {
      icon: CheckCircle2,
      bg: 'bg-emerald-950/40 border-emerald-500/40 text-emerald-100',
      iconColor: 'text-emerald-400',
    },
    warning: {
      icon: AlertTriangle,
      bg: 'bg-amber-950/40 border-amber-500/40 text-amber-100',
      iconColor: 'text-amber-400',
    },
    error: {
      icon: AlertCircle,
      bg: 'bg-rose-950/40 border-rose-500/40 text-rose-100',
      iconColor: 'text-rose-400',
    },
  };

  const current = configs[variant] || configs.info;
  const Icon = current.icon;

  return (
    <div
      role="alert"
      className={`flex items-start gap-3.5 p-4 rounded-xl border backdrop-blur-md ${current.bg} ${className}`}
    >
      <Icon className={`w-5 h-5 shrink-0 mt-0.5 ${current.iconColor}`} aria-hidden="true" />
      <div className="flex-1 text-sm">
        {title && <p className="font-semibold mb-0.5">{title}</p>}
        {message && <p className="opacity-90 leading-relaxed">{message}</p>}
      </div>
      {onClose && (
        <button
          type="button"
          onClick={onClose}
          className="text-current opacity-60 hover:opacity-100 p-1 -mr-1 rounded-md transition-opacity"
          aria-label="Close notification"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}

export function SuccessStateCard({
  title = "Inquiry Formatted Successfully",
  description = "Your custom birthday project specs have been generated. Click below to initiate your private design chat on WhatsApp.",
  actionButton = null,
  orderReference = "EVERWISH-REQ-842",
}) {

  return (
    <div className="p-8 rounded-2xl bg-[#151926] border border-[#D9BD88]/40 text-center max-w-md mx-auto shadow-2xl">
      <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#D9BD88]/15 border border-[#D9BD88]/40 flex items-center justify-center text-[#D9BD88]">
        <CheckCircle2 className="w-8 h-8" />
      </div>
      <p className="text-[11px] font-mono tracking-widest uppercase text-[#D9BD88] mb-1">
        Ref: {orderReference}
      </p>
      <h3 className="text-xl font-serif text-[#FFF5E7] mb-2">{title}</h3>
      <p className="text-sm text-[#FFF5E7]/70 leading-relaxed mb-6">
        {description}
      </p>
      {actionButton}
    </div>
  );
}
