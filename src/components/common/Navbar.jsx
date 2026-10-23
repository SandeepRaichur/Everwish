import React, { useState } from 'react';
import { Menu, X, Sparkles, MessageCircle } from 'lucide-react';
import Button from './Button';
import Badge from './Badge';
import { BRAND } from '../../config/designTokens';

/**
 * Editorial Studio Navbar
 */
export default function Navbar({ onOpenOrderModal = null }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Themes & Vibe', href: '#themes' },
    { label: 'Pricing & Packages', href: '#pricing' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#10131D]/90 backdrop-blur-md border-b border-[#D9BD88]/15 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo & Monogram */}
        <a href="#" className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9BD88] rounded-lg p-1">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1D2233] to-[#090B10] border border-[#D9BD88]/40 flex items-center justify-center text-[#D9BD88] shadow-inner group-hover:border-[#D9BD88] transition-colors">
            {/* Monogram Seal */}
            <span className="font-serif font-bold text-lg tracking-wider text-[#D9BD88]">E</span>
          </div>
          <div className="flex flex-col text-left">
            <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-[#FFF5E7] group-hover:text-[#D9BD88] transition-colors flex items-center gap-1.5">
              Everwish <span className="font-sans text-[11px] font-semibold uppercase tracking-widest text-[#D9BD88]">Studios</span>
            </span>
            <span className="text-[10px] tracking-wider text-[#FFF5E7]/50 -mt-0.5 hidden sm:inline-block">
              Cinematic Birthday Websites
            </span>
          </div>

        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-[#FFF5E7]/75 hover:text-[#D9BD88] transition-colors py-1 relative focus:outline-none focus-visible:ring-1 focus-visible:ring-[#D9BD88] rounded"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls & WhatsApp Direct */}
        <div className="hidden sm:flex items-center gap-3">
          <Badge variant="emerald" size="sm" dot>
            Taking Orders
          </Badge>
          <Button
            variant="primary-gold"
            size="sm"
            icon={Sparkles}
            onClick={() => {
              if (onOpenOrderModal) {
                onOpenOrderModal();
              } else {
                const el = document.getElementById('pricing');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Start a Surprise
          </Button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-[#FFF5E7]/80 hover:text-[#D9BD88] hover:bg-[#1D2233] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9BD88]"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#090B10] border-b border-[#D9BD88]/20 px-6 py-6 space-y-4 animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-3" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#FFF5E7]/90 hover:text-[#D9BD88] py-2 border-b border-[#293046]/40"
              >
                {link.label}
              </a>
            ))}
          </nav>
          
          <div className="pt-2 flex flex-col gap-3">
            <Button
              variant="primary-gold"
              fullWidth
              icon={Sparkles}
              onClick={() => {
                setMobileMenuOpen(false);
                const el = document.getElementById('pricing');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Explore Packages & Pricing
            </Button>
            <Button
              variant="whatsapp"
              fullWidth
              icon={MessageCircle}
              href={`https://wa.me/${BRAND.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                "Hi! I'd like to consult about creating a custom birthday website surprise."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat on WhatsApp Directly
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
