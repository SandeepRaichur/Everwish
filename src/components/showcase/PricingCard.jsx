import React from 'react';
import { Check, Clock, ArrowRight } from 'lucide-react';
import Button from '../common/Button';
import Badge from '../common/Badge';

/**
 * Luxury Pricing Card Primitive
 */
export default function PricingCard({
  packageData,
  isSelected = false,
  onSelect = null,
  currency = '₹',
}) {
  const {
    _id,
    name,
    price,
    originalPrice,
    turnaround,
    badge,
    tagline,
    features,
    cta,
    popular,
  } = packageData;


  const discount = Math.round(((originalPrice - price) / originalPrice) * 100);

  return (
    <div
      className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
        popular
          ? 'bg-gradient-to-b from-[#1D2233] to-[#151926] border-2 border-[#D9BD88] shadow-2xl shadow-[#D9BD88]/10 -translate-y-1'
          : 'bg-[#151926]/80 border border-[#293046] hover:border-[#D9BD88]/50 shadow-xl'
      } ${isSelected ? 'ring-2 ring-[#D9BD88]' : ''}`}
    >
      {/* Popular Highlight Ribbon */}
      {popular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <Badge variant="gold" size="sm" dot>
            Most Popular Choice
          </Badge>
        </div>
      )}

      <div>
        {/* Top Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <h3 className="font-serif text-xl sm:text-2xl text-[#FFF5E7] font-bold">
              {name}
            </h3>
            <p className="text-xs text-[#FFF5E7]/60 mt-1 line-clamp-2">
              {tagline}
            </p>
          </div>
          {badge && !popular && (
            <Badge variant="ivory" size="sm">
              {badge}
            </Badge>
          )}
        </div>

        {/* Turnaround Badge */}
        <div className="inline-flex items-center gap-1.5 text-xs text-[#D9BD88] bg-[#D9BD88]/10 px-3 py-1 rounded-full border border-[#D9BD88]/20 mb-6">
          <Clock className="w-3.5 h-3.5" />
          <span>Delivery in {turnaround}</span>
        </div>

        {/* Price Block */}
        <div className="mb-6 pb-6 border-b border-[#293046]">
          <div className="flex items-baseline gap-2">
            <span className="text-xs font-medium text-[#FFF5E7]/60">From</span>
            <span className="font-serif text-4xl sm:text-5xl font-bold text-[#FFF5E7] tracking-tight">
              {currency}{price.toLocaleString('en-IN')}
            </span>
            {originalPrice && (
              <span className="text-sm text-[#FFF5E7]/40 line-through">
                {currency}{originalPrice.toLocaleString('en-IN')}
              </span>
            )}
            {discount > 0 && (
              <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                Save {discount}%
              </span>
            )}
          </div>
          <p className="text-[11px] text-[#FFF5E7]/40 mt-1">
            One-time payment • No subscription • 100% bespoke code
          </p>
        </div>

        {/* Feature List */}
        <div className="space-y-3 mb-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#D9BD88]">
            Included in this experience:
          </p>
          <ul className="space-y-2.5 text-xs sm:text-sm text-[#FFF5E7]/80">
            {features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span className="w-4 h-4 rounded-full bg-[#D9BD88]/15 text-[#D9BD88] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
                <span className={i === 0 && popular ? 'font-medium text-[#FFF5E7]' : ''}>
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Card Action */}
      <div className="pt-2">
        <Button
          variant={popular ? 'primary-gold' : 'secondary-outline'}
          fullWidth
          size="md"
          icon={ArrowRight}
          iconPosition="right"
          onClick={() => onSelect && onSelect(packageData)}
        >
          {cta || 'Select Package'}
        </Button>
      </div>
    </div>
  );
}
