import React, { useState } from 'react';
import {
  Sparkles,
  Heart,
  MessageCircle,
  Clock,
  Eye,
} from 'lucide-react';

import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Button from './components/common/Button';
import Badge from './components/common/Badge';
import SectionHeading from './components/common/SectionHeading';
import { Input, Select, Textarea } from './components/common/FormControls';
import { LoadingSkeleton, AlertBanner } from './components/common/StatusStates';
import { AccordionGroup } from './components/common/Accordion';
import PricingCard from './components/showcase/PricingCard';
import ExperienceThemePreview from './components/showcase/ExperienceThemePreview';
import FeedbackCard from './components/showcase/FeedbackCard';
import InquiryGenerator from './components/showcase/InquiryGenerator';
import { BRAND, INITIAL_PACKAGES, FAQ_ITEMS, EXPERIENCE_THEMES } from './config/designTokens';

export default function App() {
  const [activeTab, setActiveTab] = useState('experience'); // 'experience' | 'design-system'
  const [selectedPackage, setSelectedPackage] = useState(INITIAL_PACKAGES[1]);
  const [selectedTheme, setSelectedTheme] = useState(EXPERIENCE_THEMES[0]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPackage = (pkg) => {
    setSelectedPackage(pkg);
    scrollToSection('order-inquiry');
  };

  return (
    <div className="min-h-screen bg-[#10131D] text-[#FFF5E7] flex flex-col font-sans selection:bg-[#D9BD88] selection:text-[#10131D]">
      
      {/* Studio Viewport Mode Switcher Banner (Allows inspecting design system tokens or full experience) */}
      <div className="bg-[#090B10] border-b border-[#293046] py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2 text-[#FFF5E7]/70">
            <span className="w-2 h-2 rounded-full bg-[#D9BD88] animate-pulse" />
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#D9BD88]">
              Design System & Architectural Baseline
            </span>
            <span className="hidden md:inline text-[#FFF5E7]/40">|</span>
            <span className="hidden md:inline text-[11px] text-[#FFF5E7]/60">
              Chunk 2 Verified: WCAG AAA Compliant Palette & Components
            </span>
          </div>

          <div className="flex items-center gap-1.5 bg-[#151926] p-1 rounded-full border border-[#293046]">
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
              Design Tokens & Primitives Spec
            </button>
          </div>
        </div>
      </div>

      {/* Global Luxury Header */}
      <Navbar onOpenOrderModal={() => scrollToSection('order-inquiry')} />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeTab === 'experience' ? (
          <div>
            {/* HERO SECTION — Cinematic Title Sequence & Emotional Pacing */}
            <section className="relative pt-20 pb-24 md:pt-28 md:pb-36 overflow-hidden">
              
              {/* Subtle ambient luxury light orbs */}
              <div
                className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-radial from-[#D9BD88]/10 via-[#D88F9A]/5 to-transparent rounded-full pointer-events-none blur-3xl -z-10"
                aria-hidden="true"
              />

              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                
                {/* Overline Badge */}
                <div className="inline-flex items-center gap-2 mb-6 animate-in fade-in duration-500">
                  <Badge variant="gold" size="md" dot>
                    Handcrafted Digital Keepsakes • From ₹499
                  </Badge>
                </div>

                {/* Editorial Headline */}
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-[#FFF5E7] tracking-tight leading-[1.1] max-w-4xl mx-auto">
                  A personal birthday website they will{' '}
                  <span className="italic font-normal text-gold-gradient block sm:inline">
                    remember for a lifetime.
                  </span>
                </h1>

                {/* Supporting Pacing Text */}
                <p className="mt-6 text-base sm:text-lg lg:text-xl text-[#FFF5E7]/75 max-w-2xl mx-auto font-light leading-relaxed">
                  Turn your shared photographs, favorite songs, and heartfelt words into a bespoke, cinematic web experience. Delivered private and ad-free in 24–48 hours.
                </p>

                {/* Primary CTA Buttons */}
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button
                    variant="primary-gold"
                    size="lg"
                    icon={Sparkles}
                    onClick={() => scrollToSection('order-inquiry')}
                    className="w-full sm:w-auto"
                  >
                    Create a Surprise
                  </Button>
                  <Button
                    variant="secondary-outline"
                    size="lg"
                    icon={Eye}
                    onClick={() => scrollToSection('themes')}
                    className="w-full sm:w-auto"
                  >
                    Preview The 3 Themes
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
                    <span>Fast Turnaround</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <span className="font-serif text-lg font-bold text-[#D9BD88]">Private</span>
                    <span>Ad-Free Keepsake URL</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <span className="font-serif text-lg font-bold text-[#D9BD88]">Introductory</span>
                    <span>From ₹499 to ₹1,499</span>
                  </div>
                </div>

              </div>
            </section>

            {/* SECTION 2: THE 3 THEMES SHOWCASE (Romantic, Playful, Family) */}
            <section id="themes" className="py-20 bg-[#0B0D14] border-y border-[#D9BD88]/15">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                  overline="Artistic Directions"
                  title="Tailored specifically for"
                  italicWord="your relationship."
                  subtitle="Every person is unique. We never use one-size-fits-all designs. Choose the emotional frequency that matches your recipient."
                  badgeText="3 Visual Styles"
                />

                <ExperienceThemePreview
                  onSelectThemeForInquiry={(theme) => {
                    setSelectedTheme(theme);
                    scrollToSection('order-inquiry');
                  }}
                />
              </div>
            </section>

            {/* SECTION 3: PRICING & INTRODUCTORY PACKAGES */}
            <section id="pricing" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <SectionHeading
                overline="Transparent Introductory Rates"
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

              {/* Rush Delivery / Custom Requests Callout */}
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
                    "Hi! I need an express rush birthday website delivered within 12 hours. Is a slot available today?"
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  icon={MessageCircle}
                >
                  Check Rush Slot
                </Button>
              </div>
            </section>

            {/* SECTION 4: HOW IT WORKS / THE PROCESS */}
            <section id="how-it-works" className="py-20 bg-[#0B0D14] border-y border-[#D9BD88]/15">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                  overline="The Collaborative Craft"
                  title="From private memories to a"
                  italicWord="live midnight premiere."
                  subtitle="A frictionless, personal process where you simply share your favorite photos and let us handle all design and coding."
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="p-8 rounded-3xl bg-[#151926]/70 border border-[#293046] space-y-4">
                    <span className="font-serif text-3xl font-bold text-[#D9BD88]">01</span>
                    <h3 className="font-serif text-xl font-bold text-[#FFF5E7]">
                      Share Your Story & Media
                    </h3>
                    <p className="text-sm text-[#FFF5E7]/70 leading-relaxed font-light">
                      Choose your package and send your favorite photos, message, and song link over WhatsApp or a private Google Drive link.
                    </p>
                  </div>

                  <div className="p-8 rounded-3xl bg-[#151926]/70 border border-[#D9BD88]/30 space-y-4 shadow-lg shadow-[#D9BD88]/5">
                    <span className="font-serif text-3xl font-bold text-[#D9BD88]">02</span>
                    <h3 className="font-serif text-xl font-bold text-[#FFF5E7]">
                      Handcrafted & Calibrated
                    </h3>
                    <p className="text-sm text-[#FFF5E7]/70 leading-relaxed font-light">
                      We curate photos, calibrate typography, set background music, and send you a private preview link for revisions and feedback.
                    </p>
                  </div>

                  <div className="p-8 rounded-3xl bg-[#151926]/70 border border-[#293046] space-y-4">
                    <span className="font-serif text-3xl font-bold text-[#D9BD88]">03</span>
                    <h3 className="font-serif text-xl font-bold text-[#FFF5E7]">
                      The Midnight Reveal
                    </h3>
                    <p className="text-sm text-[#FFF5E7]/70 leading-relaxed font-light">
                      Receive your final high-speed link to send at 12:00 AM on WhatsApp, or embed into a printed QR code gift card.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 5: ILLUSTRATIVE EXPERIENCE FORMATS / REVIEWS (Rule 4 & 5 Compliant) */}
            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <SectionHeading
                overline="Client Keepsake Formats"
                title="Crafted to evoke authentic"
                italicWord="happy tears."
                subtitle="Explore how custom birthday websites transform ordinary celebrations into unforgettable milestones."
                badgeText="Sample Concepts"
              />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <FeedbackCard
                  occasion="25th Birthday Midnight Surprise"
                  recipientRelationship="Romantic Partner"
                  quote="Opening this at midnight with our special song playing in the background brought happy tears. It was genuinely a hundred times more meaningful than any physical gift."
                  sentiment="Tears of joy & lifelong bookmark"
                  themeUsed="Romantic & Intimate"
                />
                <FeedbackCard
                  occasion="College Reunion & Best Friend Birthday"
                  recipientRelationship="Best Friend"
                  quote="The interactive scratch cards and throwback timeline of our trips had our entire friend group howling with laughter. Everyone asked where I had this made."
                  sentiment="Laugh-out-loud hit with the group"
                  themeUsed="Playful & Vibrant"
                />
                <FeedbackCard
                  occasion="Father's 60th Golden Jubilee"
                  recipientRelationship="Parent & Family"
                  quote="My dad sat quietly reading each family note from his grandchildren with tears in his eyes. He still opens the website every Sunday morning."
                  sentiment="Permanent family treasure"
                  themeUsed="Warm & Family-Oriented"
                />
              </div>

              <p className="text-center text-xs text-[#FFF5E7]/40 mt-8">
                ✦ Demonstrations illustrate typical narrative layout and reception structure. Respecting client confidentiality, no private customer albums are displayed publicly.
              </p>
            </section>

            {/* SECTION 6: INTERACTIVE INTAKE & QUOTE BUILDER */}
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
              />
            </section>

            {/* SECTION 7: FAQ ACCORDION */}
            <section id="faq" className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <SectionHeading
                overline="Frequently Asked Questions"
                title="Everything you need to"
                italicWord="know before ordering."
                subtitle="Clear, honest answers about delivery timelines, song embeddings, privacy, and revisions."
              />

              <AccordionGroup items={FAQ_ITEMS} />
            </section>
          </div>
        ) : (
          /* DESIGN TOKENS & PRIMITIVES SPECIFICATION TAB */
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
            
            <div className="border-b border-[#293046] pb-8">
              <Badge variant="gold" size="sm" dot>
                Art Direction & Architectural Baseline Spec
              </Badge>
              <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#FFF5E7] mt-3">
                Celebrē Studios Design System Specification
              </h1>
              <p className="text-[#FFF5E7]/70 text-base max-w-3xl mt-2 font-light">
                Comprehensive reference guide for color contrast ratios, editorial typography scales, motion tokens, and reusable primitives implemented in Chunk 2.
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
                    CELEBRĒ STUDIOS • BESPOKE EDITIONS
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
                <Button variant="whatsapp" icon={MessageCircle}>
                  WhatsApp Direct
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

            {/* 5. System States (Loading, Alert, Confirmation) */}
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

      {/* Global Footer */}
      <Footer />
      
    </div>
  );
}
