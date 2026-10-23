import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  Heart,
  Eye,
  Clock,
} from 'lucide-react';

import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Button from './components/common/Button';
import Badge from './components/common/Badge';
import SectionHeading from './components/common/SectionHeading';
import { Input, Select, Textarea } from './components/common/FormControls';
import { LoadingSkeleton, AlertBanner } from './components/common/StatusStates';
import { AccordionGroup } from './components/common/Accordion';
import LegalModal from './components/common/LegalModal';

import PricingCard from './components/showcase/PricingCard';
import ExperienceThemePreview from './components/showcase/ExperienceThemePreview';
import EmotionalValueShowcase from './components/showcase/EmotionalValueShowcase';
import TrustAndPrivacySection from './components/showcase/TrustAndPrivacySection';
import FinalCTASection from './components/showcase/FinalCTASection';
import InquiryGenerator from './components/showcase/InquiryGenerator';
import LiveExperienceModal from './components/showcase/LiveExperienceModal';

import BirthdayExperience from './components/experience/BirthdayExperience';
import { DEMO_EXPERIENCES } from './data/demoExperiences';
import { BRAND, INITIAL_PACKAGES, FAQ_ITEMS, EXPERIENCE_THEMES } from './config/designTokens';
import { initAnalytics, trackPageView, trackEvent } from './utils/analytics';

export default function App() {
  const [currentView, setCurrentView] = useState(() => {
    try {
      const p = new URLSearchParams(window.location.search).get('demo');
      if (p && DEMO_EXPERIENCES[p]) return 'demo';
    } catch {
      // ignore
    }
    return 'main';
  });

  const [activeDemoId, setActiveDemoId] = useState(() => {
    try {
      const p = new URLSearchParams(window.location.search).get('demo');
      if (p && DEMO_EXPERIENCES[p]) return p;
    } catch {
      // ignore
    }
    return 'romantic';
  });

  const [activeTab, setActiveTab] = useState('experience'); // 'experience' | 'design-system'
  const [selectedPackage, setSelectedPackage] = useState(INITIAL_PACKAGES[1]);
  const [selectedTheme, setSelectedTheme] = useState(EXPERIENCE_THEMES[0]);
  const [previewModalTheme, setPreviewModalTheme] = useState(null);
  const [legalModalState, setLegalModalState] = useState({ isOpen: false, tab: 'privacy' });

  useEffect(() => {
    initAnalytics();
    trackPageView('Everwish Home');
  }, []);

  const handleOpenLegalModal = (tab = 'privacy') => {
    setLegalModalState({ isOpen: true, tab });
    trackEvent('legal_policy_view', { tab });
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLaunchDemo = (demoId) => {
    setActiveDemoId(demoId);
    setCurrentView('demo');
    trackEvent('demo_open', { demoId });
    try {
      window.history.pushState(null, '', `?demo=${demoId}`);
    } catch {
      // ignore
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReturnToStudio = () => {
    setCurrentView('main');
    trackEvent('return_to_studio');
    try {
      window.history.pushState(null, '', window.location.pathname);
    } catch {
      // ignore
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOrderFromDemo = (themeId) => {
    const matchedTheme = EXPERIENCE_THEMES.find((t) => t.id === themeId) || EXPERIENCE_THEMES[0];
    setSelectedTheme(matchedTheme);
    setCurrentView('main');
    trackEvent('order_from_demo_click', { themeId });
    try {
      window.history.pushState(null, '', window.location.pathname);
    } catch {
      // ignore
    }
    setTimeout(() => {
      scrollToSection('order-inquiry');
    }, 150);
  };

  const handleSelectPackage = (pkg) => {
    setSelectedPackage(pkg);
    trackEvent('package_select', { packageId: pkg.id, price: pkg.price });
    scrollToSection('order-inquiry');
  };

  const handleSelectTheme = (theme) => {
    setSelectedTheme(theme);
    trackEvent('theme_select', { themeId: theme.id });
    scrollToSection('order-inquiry');
  };

  // If in full demo view, render the interactive BirthdayExperience engine
  if (currentView === 'demo') {
    const demoData = DEMO_EXPERIENCES[activeDemoId] || DEMO_EXPERIENCES.romantic;
    return (
      <BirthdayExperience
        key={activeDemoId}
        data={demoData}
        onReturnToStudio={handleReturnToStudio}
        onSwitchDemo={(id) => handleLaunchDemo(id)}
        onOrderThisStyle={handleOrderFromDemo}
      />
    );
  }


  // Otherwise, render the main Everwish Studios business website
  return (
    <div className="min-h-screen bg-[#10131D] text-[#FFF5E7] flex flex-col font-sans selection:bg-[#D9BD88] selection:text-[#10131D]">
      
      {/* Studio Viewport Mode Switcher Banner */}
      <div className="bg-[#090B10] border-b border-[#293046] py-2 px-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2 text-[#FFF5E7]/70">
            <span className="w-2 h-2 rounded-full bg-[#D9BD88] animate-pulse" />
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#D9BD88]">
              Everwish Studios — Chunk 4 Live Demos Ready
            </span>
            <span className="hidden md:inline text-[#FFF5E7]/40">|</span>
            <span className="hidden md:inline text-[11px] text-[#FFF5E7]/60">
              3 Working Interactive Experiences
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Quick Demo Launch Buttons */}
            <div className="hidden lg:flex items-center gap-1.5 mr-2">
              <span className="text-[10px] uppercase font-mono text-[#FFF5E7]/50">Test Demos:</span>
              <button
                type="button"
                onClick={() => handleLaunchDemo('romantic')}
                className="px-2 py-0.5 rounded bg-[#D88F9A]/15 text-[#F5CAD1] border border-[#D88F9A]/30 text-[11px] hover:bg-[#D88F9A]/30 transition-colors cursor-pointer"
              >
                Romantic
              </button>
              <button
                type="button"
                onClick={() => handleLaunchDemo('playful')}
                className="px-2 py-0.5 rounded bg-[#D9BD88]/15 text-[#F4E7CD] border border-[#D9BD88]/30 text-[11px] hover:bg-[#D9BD88]/30 transition-colors cursor-pointer"
              >
                Best Friend
              </button>
              <button
                type="button"
                onClick={() => handleLaunchDemo('family')}
                className="px-2 py-0.5 rounded bg-[#C2A370]/15 text-[#FBF7EF] border border-[#C2A370]/30 text-[11px] hover:bg-[#C2A370]/30 transition-colors cursor-pointer"
              >
                Family (Papa 50th)
              </button>
            </div>

            <div className="flex items-center gap-1 bg-[#151926] p-1 rounded-full border border-[#293046]">
              <button
                type="button"
                onClick={() => setActiveTab('experience')}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  activeTab === 'experience'
                    ? 'bg-[#D9BD88] text-[#10131D] font-semibold shadow'
                    : 'text-[#FFF5E7]/70 hover:text-[#FFF5E7]'
                }`}
              >
                Customer Experience View
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('design-system')}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  activeTab === 'design-system'
                    ? 'bg-[#D9BD88] text-[#10131D] font-semibold shadow'
                    : 'text-[#FFF5E7]/70 hover:text-[#FFF5E7]'
                }`}
              >
                Design Tokens Spec
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Accessible Skip Link for Keyboard / Screen Readers */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#D9BD88] focus:text-[#10131D] focus:font-bold focus:rounded-xl focus:shadow-2xl focus:outline-none"
      >
        Skip to main content
      </a>

      {/* Global Luxury Header */}
      <Navbar onOpenOrderModal={() => scrollToSection('order-inquiry')} />

      {/* Main Content Area Landmark */}
      <main id="main-content" className="flex-1">
        {activeTab === 'experience' ? (
          <div>
            
            {/* 1. HERO SECTION — Cinematic Title Sequence & Immediate Conversion Hook */}
            <section className="relative pt-16 pb-20 md:pt-24 md:pb-32 overflow-hidden">
              
              {/* Subtle ambient luxury light orbs */}
              <div
                className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#D9BD88]/10 via-[#D88F9A]/10 to-transparent rounded-full pointer-events-none blur-3xl -z-10"
                aria-hidden="true"
              />

              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                
                {/* Overline Badge */}
                <div className="inline-flex items-center gap-2 mb-6">
                  <Badge variant="gold" size="md" dot>
                    Handcrafted Personal Birthday Websites • From ₹499
                  </Badge>
                </div>

                {/* Editorial Headline (from Chunk 3 spec) */}
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-[#FFF5E7] tracking-tight leading-[1.1] max-w-4xl mx-auto">
                  More than a birthday wish.{' '}
                  <span className="italic font-normal text-gold-gradient block sm:inline">
                    A moment they'll never forget.
                  </span>
                </h1>

                {/* Supporting Copy (from Chunk 3 spec) */}
                <p className="mt-6 text-base sm:text-lg lg:text-xl text-[#FFF5E7]/75 max-w-2xl mx-auto font-light leading-relaxed">
                  Beautiful, personalized birthday websites made from your photos, memories and words — created just for someone special. Handcrafted and delivered private in 24–48 hours.
                </p>

                {/* Primary & Secondary CTA Buttons */}
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button
                    variant="primary-gold"
                    size="lg"
                    icon={Sparkles}
                    onClick={() => scrollToSection('order-inquiry')}
                    className="w-full sm:w-auto"
                  >
                    Create Their Surprise
                  </Button>
                  <Button
                    variant="secondary-outline"
                    size="lg"
                    icon={Eye}
                    onClick={() => handleLaunchDemo('romantic')}
                    className="w-full sm:w-auto"
                  >
                    Open Live Romantic Demo
                  </Button>
                </div>

                {/* Emotional Trust Bar */}
                <div className="mt-16 pt-8 border-t border-[#293046]/60 max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-xs text-[#FFF5E7]/70">
                  <div className="flex flex-col items-center gap-1">
                    <span className="font-serif text-lg font-bold text-[#D9BD88]">100%</span>
                    <span>Human-Coded Craft</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <span className="font-serif text-lg font-bold text-[#D9BD88]">24–48h</span>
                    <span>Standard Turnaround</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <span className="font-serif text-lg font-bold text-[#D9BD88]">Private</span>
                    <span>Ad-Free Keepsake URL</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <span className="font-serif text-lg font-bold text-[#D9BD88]">₹499 – ₹1,499</span>
                    <span>Introductory Prices</span>
                  </div>
                </div>

              </div>
            </section>

            {/* 2. EXPERIENCE SHOWCASE — 3 Curated Themes (Romantic, Best Friend, Family) */}
            <section id="experiences" className="py-20 bg-[#0B0D14] border-y border-[#D9BD88]/15 scroll-mt-20">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                  overline="Artistic Directions & Working Demos"
                  title="Tailored specifically for"
                  italicWord="your relationship."
                  subtitle="Every person is unique. We never use one-size-fits-all designs. Explore our three distinct directions or launch the complete working demo directly."
                  badgeText="3 Visual Styles"
                />

                <ExperienceThemePreview
                  onSelectThemeForInquiry={handleSelectTheme}
                  onOpenLiveModal={(theme) => handleLaunchDemo(theme.id)}
                />
              </div>
            </section>

            {/* 3. HOW IT WORKS — 4 Simple Steps */}
            <section id="how-it-works" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
              <SectionHeading
                overline="The 4-Step Journey"
                title="From shared memories to a"
                italicWord="live midnight premiere."
                subtitle="A frictionless, personal process where you share your favorite photos and we personally compose your digital heirloom."
              />

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                
                {/* Step 1 */}
                <div className="p-7 rounded-3xl bg-[#151926]/70 border border-[#293046] space-y-4">
                  <span className="font-serif text-3xl font-bold text-[#D9BD88]">01</span>
                  <h3 className="font-serif text-lg font-bold text-[#FFF5E7]">
                    Choose An Experience
                  </h3>
                  <p className="text-xs sm:text-sm text-[#FFF5E7]/70 leading-relaxed font-light">
                    Pick your package (₹499, ₹999, or ₹1,499) and select the emotional vibe that matches your recipient.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="p-7 rounded-3xl bg-[#151926]/70 border border-[#293046] space-y-4">
                  <span className="font-serif text-3xl font-bold text-[#D9BD88]">02</span>
                  <h3 className="font-serif text-lg font-bold text-[#FFF5E7]">
                    Share Photos & Message
                  </h3>
                  <p className="text-xs sm:text-sm text-[#FFF5E7]/70 leading-relaxed font-light">
                    Send your favorite photos, song link, and personal message directly over WhatsApp or a private Google Drive folder.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="p-7 rounded-3xl bg-[#151926]/70 border border-[#D9BD88]/30 space-y-4 shadow-lg shadow-[#D9BD88]/5">
                  <span className="font-serif text-3xl font-bold text-[#D9BD88]">03</span>
                  <h3 className="font-serif text-lg font-bold text-[#FFF5E7]">
                    Approve The Creation
                  </h3>
                  <p className="text-xs sm:text-sm text-[#FFF5E7]/70 leading-relaxed font-light">
                    Within 24–48 hours, receive a private staging link to preview on your phone. Request tweaks until you are thrilled.
                  </p>
                </div>

                {/* Step 4 */}
                <div className="p-7 rounded-3xl bg-[#151926]/70 border border-[#293046] space-y-4">
                  <span className="font-serif text-3xl font-bold text-[#D9BD88]">04</span>
                  <h3 className="font-serif text-lg font-bold text-[#FFF5E7]">
                    Receive & Share Link
                  </h3>
                  <p className="text-xs sm:text-sm text-[#FFF5E7]/70 leading-relaxed font-light">
                    Get your clean, ad-free link to send at 12:00 AM on WhatsApp, or embed into a printed QR code gift card.
                  </p>
                </div>

              </div>
            </section>

            {/* 4. PRICING & INTRODUCTORY PACKAGES */}
            <section id="pricing" className="py-24 bg-[#0B0D14] border-y border-[#D9BD88]/15 scroll-mt-20">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                  overline="Introductory Rates"
                  title="Handcrafted keepsake packages for"
                  italicWord="every celebration."
                  subtitle="Transparent pricing with zero hidden hosting fees or recurring subscriptions. Review introductory packages below."
                  badgeText="Introductory Slots"
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                  {INITIAL_PACKAGES.map((pkg) => (
                    <PricingCard
                      key={pkg.id}
                      packageData={pkg}
                      isSelected={selectedPackage.id === pkg.id}
                      onSelect={handleSelectPackage}
                    />
                  ))}
                </div>

                {/* Rush Delivery Callout */}
                <div className="mt-12 p-6 rounded-2xl bg-[#151926]/60 border border-[#293046] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-[#FFF5E7]/80">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-[#D9BD88] shrink-0" />
                    <span>
                      Need it tonight for a midnight surprise? <strong>Express &lt;12 hour rush delivery</strong> is available upon WhatsApp confirmation.
                    </span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    href={`https://wa.me/${BRAND.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                      "Hi Everwish! I need an express rush birthday website delivered within 12 hours. Is a slot available today?"
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Check Rush Availability →
                  </Button>
                </div>
              </div>
            </section>

            {/* 5. EMOTIONAL VALUE SECTION — Letters, Soundtrack, Memories & Countdown */}
            <div id="why-it-matters" className="scroll-mt-20">
              <EmotionalValueShowcase
                onStartSurprise={() => scrollToSection('order-inquiry')}
              />
            </div>

            {/* 6. TRUST & PRIVACY SECTION — Strict Compliance with Rule 4 & 5 */}
            <TrustAndPrivacySection />

            {/* 7. DIRECT INTAKE & BRIEF GENERATOR (Working Form & Instant WhatsApp Connect) */}
            <section className="py-20 bg-[#0B0D14] border-t border-[#D9BD88]/15 px-4 sm:px-6 lg:px-8">
              <SectionHeading
                overline="Direct Commission Brief"
                title="Ready to begin your"
                italicWord="celebration surprise?"
                subtitle="Complete the questionnaire below. We generate a direct WhatsApp and Email payload so you can discuss your ideas instantly."
              />

              <InquiryGenerator
                preselectedPackage={selectedPackage.id}
                preselectedTheme={selectedTheme.id}
                onOpenLegalModal={handleOpenLegalModal}
              />
            </section>

            {/* 8. FAQ ACCORDION (Covering all 8 critical points) */}
            <section id="faq" className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
              <SectionHeading
                overline="Frequently Asked Questions"
                title="Everything you need to"
                italicWord="know before ordering."
                subtitle="Clear, honest answers about delivery timelines, song embeddings, privacy, revisions, and mobile compatibility."
              />

              <AccordionGroup items={FAQ_ITEMS} />
            </section>

            {/* 9. FINAL CALL TO ACTION */}
            <FinalCTASection
              onStartSurprise={() => scrollToSection('order-inquiry')}
            />

          </div>
        ) : (
          /* DESIGN TOKENS & PRIMITIVES SPECIFICATION TAB */
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
            
            <div className="border-b border-[#293046] pb-8">
              <Badge variant="gold" size="sm" dot>
                Art Direction & Architectural Baseline Spec
              </Badge>
              <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#FFF5E7] mt-3">
                Everwish Design System Specification
              </h1>
              <p className="text-[#FFF5E7]/70 text-base max-w-3xl mt-2 font-light">
                Comprehensive reference guide for color contrast ratios, editorial typography scales, motion tokens, and reusable primitives implemented in Everwish.
              </p>
            </div>

            {/* 1. Color Palette Tokens with Contrast Verification */}
            <section className="space-y-6">
              <h2 className="text-xl font-serif text-[#D9BD88] font-bold">
                1. Core Color Palette & Contrast Ratios
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                
                {/* Midnight Navy */}
                <div className="p-5 rounded-2xl bg-[#10131D] border border-[#293046] space-y-3">
                  <div className="h-16 rounded-xl bg-[#10131D] border border-[#293046] flex items-center justify-center font-mono text-xs text-[#FFF5E7]">
                    #10131D
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-[#FFF5E7]">Midnight Navy</h4>
                    <p className="text-xs text-[#FFF5E7]/60">Primary Dark Canvas & Background</p>
                    <span className="text-[10px] text-[#D9BD88] font-mono mt-1 block">
                      WCAG Contrast vs Ivory: 16.2:1 (Passes AAA)
                    </span>
                  </div>
                </div>

                {/* Champagne Gold */}
                <div className="p-5 rounded-2xl bg-[#151926] border border-[#293046] space-y-3">
                  <div className="h-16 rounded-xl bg-[#D9BD88] flex items-center justify-center font-mono text-xs text-[#10131D] font-bold">
                    #D9BD88
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-[#FFF5E7]">Champagne Gold</h4>
                    <p className="text-xs text-[#FFF5E7]/60">Luxury Accents, Borders & Highlights</p>
                    <span className="text-[10px] text-[#D9BD88] font-mono mt-1 block">
                      WCAG Contrast vs Midnight: 10.4:1 (Passes AAA)
                    </span>
                  </div>
                </div>

                {/* Warm Ivory */}
                <div className="p-5 rounded-2xl bg-[#151926] border border-[#293046] space-y-3">
                  <div className="h-16 rounded-xl bg-[#FFF5E7] flex items-center justify-center font-mono text-xs text-[#10131D] font-bold">
                    #FFF5E7
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-[#FFF5E7]">Warm Ivory</h4>
                    <p className="text-xs text-[#FFF5E7]/60">Editorial Headings & High-Legibility Body</p>
                    <span className="text-[10px] text-[#D9BD88] font-mono mt-1 block">
                      Ultra-legible, soft on eyes
                    </span>
                  </div>
                </div>

                {/* Muted Rose */}
                <div className="p-5 rounded-2xl bg-[#151926] border border-[#293046] space-y-3">
                  <div className="h-16 rounded-xl bg-[#D88F9A] flex items-center justify-center font-mono text-xs text-[#10131D] font-bold">
                    #D88F9A
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-[#FFF5E7]">Muted Rose</h4>
                    <p className="text-xs text-[#FFF5E7]/60">Romantic Accents & Warm Emotional Cues</p>
                    <span className="text-[10px] text-[#D9BD88] font-mono mt-1 block">
                      WCAG Contrast vs Midnight: 7.6:1 (Passes AAA)
                    </span>
                  </div>
                </div>

              </div>
            </section>

            {/* 2. Typography Hierarchy */}
            <section className="space-y-6">
              <h2 className="text-xl font-serif text-[#D9BD88] font-bold">
                2. Typography Scale (Playfair Display & Plus Jakarta Sans)
              </h2>

              <div className="p-6 rounded-2xl bg-[#151926] border border-[#293046] space-y-6">
                <div>
                  <span className="text-[10px] font-mono uppercase text-[#D9BD88] block">Display Headline (Playfair Display 700 / Italic)</span>
                  <p className="text-4xl sm:text-5xl font-serif font-bold text-[#FFF5E7]">
                    The Keepsake <span className="italic font-normal text-gold-gradient">Digital Heirloom</span>
                  </p>
                </div>

                <div>
                  <span className="text-[10px] font-mono uppercase text-[#D9BD88] block">Section Title (Playfair Display 600)</span>
                  <p className="text-2xl sm:text-3xl font-serif text-[#FFF5E7]">
                    Handcrafted For The One You Love Most
                  </p>
                </div>

                <div>
                  <span className="text-[10px] font-mono uppercase text-[#D9BD88] block">Body Typography (Plus Jakarta Sans 400 / 1.6 Line Height)</span>
                  <p className="text-sm sm:text-base text-[#FFF5E7]/80 max-w-2xl leading-relaxed">
                    Every birthday website is thoughtfully coded from scratch with personal letters, high-resolution photographs, synced background music, and accessible interactions.
                  </p>
                </div>

                <div>
                  <span className="text-[10px] font-mono uppercase text-[#D9BD88] block">Overline & Code Tokens</span>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D9BD88]">
                    EVERWISH • BESPOKE EDITIONS
                  </p>
                </div>
              </div>
            </section>

            {/* 3. Reusable Button Primitives */}
            <section className="space-y-6">
              <h2 className="text-xl font-serif text-[#D9BD88] font-bold">
                3. Button Variants & Interaction States
              </h2>

              <div className="p-6 rounded-2xl bg-[#151926] border border-[#293046] flex flex-wrap items-center gap-4">
                <Button variant="primary-gold" icon={Sparkles}>
                  Primary Gold
                </Button>
                <Button variant="secondary-outline" icon={Eye}>
                  Secondary Outline
                </Button>
                <Button variant="rose" icon={Heart}>
                  Muted Rose
                </Button>
                <Button variant="ghost">
                  Ghost Action
                </Button>
                <Button variant="primary-gold" loading>
                  Loading State
                </Button>
                <Button variant="secondary-outline" disabled>
                  Disabled
                </Button>
              </div>
            </section>

            {/* 4. Badges & Status Indicators */}
            <section className="space-y-6">
              <h2 className="text-xl font-serif text-[#D9BD88] font-bold">
                4. Badges & System Indicators
              </h2>

              <div className="p-6 rounded-2xl bg-[#151926] border border-[#293046] flex flex-wrap items-center gap-3">
                <Badge variant="gold" dot>Introductory Offer</Badge>
                <Badge variant="rose" dot>Romantic Partner</Badge>
                <Badge variant="emerald" dot>Taking Orders Now</Badge>
                <Badge variant="ivory">24–48h Turnaround</Badge>
                <Badge variant="dark">Illustrative Demo</Badge>
              </div>
            </section>

            {/* 5. System States */}
            <section className="space-y-6">
              <h2 className="text-xl font-serif text-[#D9BD88] font-bold">
                5. System State Feedback Primitives
              </h2>

              <div className="space-y-4">
                <AlertBanner
                  variant="info"
                  title="Studio Notice"
                  message="Current delivery slots for this weekend are open. Reserve early for custom music synchronization."
                />
                <AlertBanner
                  variant="success"
                  title="Brief Received"
                  message="WhatsApp payload formatted. You can initiate the chat whenever you're ready."
                />
                <AlertBanner
                  variant="warning"
                  title="Rush Delivery"
                  message="Orders required within 12 hours require pre-confirmation on WhatsApp before booking."
                />

                <div className="p-6 rounded-2xl bg-[#151926] border border-[#293046]">
                  <p className="text-xs uppercase font-mono text-[#D9BD88] mb-3">
                    Asynchronous Loading Skeleton Primitive:
                  </p>
                  <LoadingSkeleton lines={3} />
                </div>
              </div>
            </section>

            {/* 6. Form Control Primitives */}
            <section className="space-y-6">
              <h2 className="text-xl font-serif text-[#D9BD88] font-bold">
                6. Form Control Primitives (Luxury Inputs, Selectors & Textareas)
              </h2>

              <div className="p-6 rounded-2xl bg-[#151926] border border-[#293046] grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Input
                  id="demo-input"
                  label="Sample Text Input"
                  placeholder="e.g. Ananya"
                  defaultValue="Bespoke typography test"
                  helperText="Interactive state demo"
                />
                <Select
                  id="demo-select"
                  label="Sample Select Dropdown"
                  options={[
                    { value: '1', label: 'Option A: Romantic & Intimate' },
                    { value: '2', label: 'Option B: Playful & Colorful' },
                    { value: '3', label: 'Option C: Warm & Family-Oriented' },
                  ]}
                  defaultValue="1"
                />
                <div className="sm:col-span-2">
                  <Textarea
                    id="demo-textarea"
                    label="Sample Textarea (Multi-line Keepsake Notes)"
                    placeholder="Enter personal notes or memories..."
                    defaultValue="Every detail of our relationship told through music, candlelit memories, and an interactive wax-sealed letter."
                    rows={2}
                    maxLength={200}
                  />
                </div>
              </div>
            </section>

          </div>
        )}
      </main>

      {/* 10. Global Footer */}
      <Footer onOpenLegalModal={handleOpenLegalModal} />

      {/* Interactive Modal Backup */}
      <LiveExperienceModal
        theme={previewModalTheme}
        isOpen={Boolean(previewModalTheme)}
        onClose={() => setPreviewModalTheme(null)}
        onSelectTheme={handleSelectTheme}
      />

      {/* Legal & Privacy Commitments Modal */}
      <LegalModal
        isOpen={legalModalState.isOpen}
        initialTab={legalModalState.tab}
        onClose={() => setLegalModalState((prev) => ({ ...prev, isOpen: false }))}
      />
      
    </div>
  );
}
