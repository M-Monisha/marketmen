'use client';

import React, { useState, useEffect, useRef } from 'react';

// ── Animated counter hook ─────────────────────────────────────────────────────
function useCountUp(target: number, duration = 1500, started = false) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setVal(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);
  return val;
}

// ── Intersection observer hook ────────────────────────────────────────────────
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

// ── Asset URLs from Figma (valid for 7 days) ──────────────────────────────────
const imgLogo        = "https://www.figma.com/api/mcp/asset/3c49f5af-41d0-4316-9b1d-27b9adb8072c";
const imgNavArrow    = "https://www.figma.com/api/mcp/asset/385959db-6e75-43b3-9a1a-fdc7ca96c5fd";
const imgNavConnect  = "https://www.figma.com/api/mcp/asset/e799bb3a-b8ff-4a51-b7b0-d1518afcac6f";
const imgHeroImg     = "https://www.figma.com/api/mcp/asset/693ae6aa-26b7-487c-bea7-87778958e27b";
const imgHeroArrow   = "https://www.figma.com/api/mcp/asset/f5bd3af5-f88d-4442-8133-b5491a4c6769";

// Services icons
const imgSvcBrand    = "https://www.figma.com/api/mcp/asset/5aa8d2d8-d8e6-4306-8d42-6975e12e7469";
const imgSvcRetail   = "https://www.figma.com/api/mcp/asset/1dddc0b5-7a63-4430-aa84-86b2f7af92bc";
const imgSvcCorpEvt  = "https://www.figma.com/api/mcp/asset/94333c4b-8cce-425d-9d79-5a658fc761e3";
const imgSvcEmpEng   = "https://www.figma.com/api/mcp/asset/1970ca94-393d-45c0-bd74-1187e523ce4a";
const imgSvcRural    = "https://www.figma.com/api/mcp/asset/1507966d-e982-4fef-b860-28c907a8be94";
const imgSvcEvent    = "https://www.figma.com/api/mcp/asset/9178b186-a27c-4c36-b0f3-73ae40afaa5a";
const imgSvcMedia    = "https://www.figma.com/api/mcp/asset/aa602bd6-f165-4160-bca2-94a461f3f7e6";
const imgSvcPermit   = "https://www.figma.com/api/mcp/asset/b515b6f1-8b96-4307-9189-d0a1addb92aa";
const imgSvcVideo    = "https://www.figma.com/api/mcp/asset/abf23e4a-4284-4472-97da-3d4599f131d5";
const imgSvcCreative = "https://www.figma.com/api/mcp/asset/a0038811-03c0-4010-b0c5-174a6aa32367";

// Why Us icons
const imgWhyLink     = "https://www.figma.com/api/mcp/asset/e40e867b-66f3-4122-a774-8c32f575a6b5";
const imgWhyVendor   = "https://www.figma.com/api/mcp/asset/196a8a13-6c8e-413b-b66b-3fe7a2fa7633";
const imgWhyPM       = "https://www.figma.com/api/mcp/asset/42d1e8e9-08ca-4ca0-846f-bc670ad210de";
const imgWhyNation   = "https://www.figma.com/api/mcp/asset/d85f06e7-051f-49c9-84da-0b94c77743bd";
const imgWhyGPS      = "https://www.figma.com/api/mcp/asset/3a73e966-9805-4a71-87e5-3f2ccb19d0b5";
const imgWhyPhoto    = "https://www.figma.com/api/mcp/asset/62ebc169-2208-4ce1-9c02-ab006c55c63c";
const imgWhyPrice    = "https://www.figma.com/api/mcp/asset/98b4cc5d-65e5-41b4-bdb8-b5574c185eb1";
const imgWhyFast     = "https://www.figma.com/api/mcp/asset/5b7b16e7-83ec-43b8-9c0b-94a165987a9d";
const imgWhyFinance  = "https://www.figma.com/api/mcp/asset/18b198b7-10f5-430e-bd10-8d904a86fa58";
const imgWhyAccount  = "https://www.figma.com/api/mcp/asset/082797a0-64c4-4692-921d-d1da8f754965";

// Footer icons
const imgFooterLogo  = "https://www.figma.com/api/mcp/asset/d9d312d3-959b-4de2-b6d5-9d0669e3371b";
const imgWhatsApp    = "https://www.figma.com/api/mcp/asset/5b4fc69f-6dfe-464f-a5aa-e64d0e2e1a21";
const imgFooterFB    = "https://www.figma.com/api/mcp/asset/001b7cde-449e-41bf-9178-2e4d356b1f17";
const imgFooterTW    = "https://www.figma.com/api/mcp/asset/61179628-0d3f-4040-b54a-c4191b318a25";
const imgFooterIG    = "https://www.figma.com/api/mcp/asset/30e4148a-c8f3-4b7c-a2d1-f4b8de0f3e05";
const imgFooterLI    = "https://www.figma.com/api/mcp/asset/3ad432ad-dc1d-40e4-801c-4392c54ca8df";
const imgFooterEmail = "https://www.figma.com/api/mcp/asset/d6d1559c-cd5c-4a73-9e05-f9afef357307";
const imgFooterPin   = "https://www.figma.com/api/mcp/asset/29e5fbe6-6368-476f-afd5-54217276f1b5";
const imgFooterPhone = "https://www.figma.com/api/mcp/asset/992f6165-74ac-4f59-b75f-aedcb9c125c9";
const imgFooterMail  = "https://www.figma.com/api/mcp/asset/3286bb81-5f3f-413c-a81b-5a8256bb28b3";

// Brand logos (public folder)
const brands = [
  { src: '/marketmen.jpeg', alt: 'MarketMen' },
  { src: '/bajaj.png',      alt: 'Bajaj' },
  { src: '/goodrej.jpg',    alt: 'Godrej' },
  { src: '/indiagate.webp', alt: 'India Gate' },
  { src: '/itc.webp',       alt: 'ITC' },
  { src: '/reddys.webp',    alt: "Dr. Reddy's" },
  { src: '/sony.png',       alt: 'Sony' },
  { src: '/unilever.png',   alt: 'Unilever' },
  { src: '/yesbank.png',    alt: 'Yes Bank' },
  { src: '/zee5.webp',      alt: 'ZEE5' },
];

// ── Reusable sub-components ───────────────────────────────────────────────────
function SectionLabel({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <div className="w-6 h-0.5 rounded-full bg-[#1e9fd4]" />
      <p className="text-[#1e9fd4] text-[11px] font-bold tracking-[1.1px] uppercase">{children}</p>
    </div>
  );
}

function ServiceCard({ icon, title, desc, bg }: { icon: string; title: string; desc: string; bg: string }) {
  return (
    <div className="bg-white border border-[#e2e8f0] rounded-2xl p-5 flex flex-col gap-3 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg cursor-pointer">
      <div className={`${bg} rounded-xl w-11 h-11 flex items-center justify-center shrink-0`}>
        <img src={icon} alt={title} className="w-[18px] h-[18px] object-contain" />
      </div>
      <p className="text-[#0f172a] font-bold text-[13px] leading-5">{title}</p>
      <p className="text-[#64748b] text-[12px] leading-5">{desc}</p>
    </div>
  );
}

function WhyCard({ icon, title, desc, bg }: { icon: string; title: string; desc: string; bg: string }) {
  return (
    <div className="bg-white border border-[#e2e8f0] rounded-2xl p-[17px] flex flex-col gap-2 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg cursor-pointer">
      <div className={`${bg} rounded-xl w-9 h-9 flex items-center justify-center shrink-0`}>
        <img src={icon} alt={title} className="w-4 h-4 object-contain" />
      </div>
      <p className="text-[#0f172a] font-bold text-[12px] leading-[18px] pt-3">{title}</p>
      <p className="text-[#64748b] text-[11px] leading-[17.875px]">{desc}</p>
    </div>
  );
}

function StatItem({ value, label, color, started }: { value: string; label: string; color: string; started?: boolean }) {
  // Extract numeric part for counting, keep suffix
  const match = value.match(/^([\d.]+)(.*)$/);
  const numeric = match ? parseFloat(match[1]) : 0;
  const suffix = match ? match[2] : value;
  const isNumeric = !!match && !isNaN(numeric);
  const counted = useCountUp(Math.floor(numeric), 1400, started ?? false);
  const display = isNumeric ? `${counted}${suffix}` : value;

  return (
    <div className="flex items-center gap-2">
      <div className={`${color} w-1.5 h-8 rounded-full shrink-0`} />
      <div>
        <p className="text-[#1e9fd4] font-extrabold text-[15px] leading-[22.5px]">{display}</p>
        <p className="text-[#64748b] text-[11px] leading-[16.5px]">{label}</p>
      </div>
    </div>
  );
}

// ── Header ────────────────────────────────────────────────────────────────────
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navLinks = ['About Us', 'Opportunities', 'Case Studies', 'Contact Us'];
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[rgba(27,20,45,0.85)] backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.25)]' : 'bg-gradient-to-r from-[#2b1f3a] to-[#142f4c]'}`}>
      <div className="max-w-[1280px] mx-auto px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="shrink-0">
          <img src={imgLogo} alt="MarketMen" className="h-12 object-contain" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          <a href="/" className="bg-[rgba(235,247,252,0.1)] text-white text-[13px] font-medium px-3 py-2 rounded-[10px]">Home</a>
          {navLinks.map(link => (
            <a key={link} href="#" className="text-white text-[13px] font-medium px-3 py-2 rounded-[10px] hover:bg-[rgba(255,255,255,0.08)] transition-colors flex items-center gap-1">
              {link}
              {link === 'Events' && <img src={imgNavArrow} alt="" className="w-3 h-3" />}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a href="#contact" className="hidden md:flex bg-white text-[#2b1f3a] text-[13px] font-semibold px-5 py-2.5 rounded-[14px] items-center gap-2 hover:bg-gray-100 transition-colors">
          Let&apos;s Connect
          <img src={imgNavConnect} alt="" className="w-3 h-3" />
        </a>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 h-0.5 bg-white mb-1" />
          <div className="w-5 h-0.5 bg-white mb-1" />
          <div className="w-5 h-0.5 bg-white" />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#1a1030] px-6 py-4 flex flex-col gap-3">
          {['Home', ...navLinks].map(link => (
            <a key={link} href="#" className="text-white text-[14px] font-medium py-1">{link}</a>
          ))}
          <a href="#contact" className="bg-white text-[#2b1f3a] text-[13px] font-semibold px-4 py-2 rounded-[14px] text-center mt-2">
            Let&apos;s Connect
          </a>
        </div>
      )}
    </header>
  );
}

// ── Hero Section ──────────────────────────────────────────────────────────────
function HeroSection() {
  const tags = ['Brand Activations','BTL Marketing','Retail Branding','Rural Marketing','Employee Engagement','Corporate Events','Event IPs','Video Production'];
  const { ref: statsRef, inView: statsInView } = useInView();
  return (
    <section className="bg-gradient-to-r from-[#2b1f3a] to-[#142f4c] pt-20">
      <div className="max-w-[1280px] mx-auto px-8 py-16 flex flex-wrap items-center gap-10">
        {/* Left column */}
        <div className="flex-1 min-w-[300px] flex flex-col gap-5">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#ebf7fc] border border-[#bae4f5] rounded-full px-[17px] py-[9px] self-start">
            <div className="w-2 h-2 rounded-full bg-[#1e9fd4] opacity-88" />
            <p className="text-[#1e9fd4] text-[12px] font-semibold">35+ Years of Execution Excellence</p>
          </div>

          {/* Headline — fluid type size */}
          <h1 className="font-extrabold leading-[1.15] tracking-[-1px] text-[#1e9fd4]" style={{ fontSize: 'clamp(28px, 5vw, 52px)' }}>
            India&apos;s On-Ground<br />
            <span className="text-white">Brand Growth</span>{' '}
            <span className="text-[#1e9fd4]">Partner</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-white text-[18px] font-medium leading-7">
            From Strategy to Execution. Anywhere in India.
          </p>

          {/* Body */}
          <p className="text-[#e2e2e2] text-[15px] font-normal leading-[1.625] max-w-[584px]">
            Helping brands execute BTL campaigns, retail branding, rural activation, employee engagement, event IPs, and corporate experiences with one trusted execution partner across India.
          </p>

          {/* Tag pills */}
          <div className="flex flex-wrap gap-2">
            {tags.map(tag => (
              <span key={tag} className="bg-[rgba(241,245,249,0.1)] border border-[rgba(226,232,240,0.2)] rounded-full px-[13px] py-[7px] text-white text-[11px] font-semibold">
                {tag}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 pt-0">
            <a href="#contact" className="bg-[#1e9fd4] text-white text-[14px] font-bold px-6 py-[14px] rounded-[14px] flex items-center gap-2 hover:bg-[#1a8fbe] transition-colors">
              Book Strategy Consultation
              <img src={imgHeroArrow} alt="" className="w-4 h-4" />
            </a>
            <a href="#opportunities" className="border-2 border-[#e2e8f0] text-white text-[14px] font-semibold px-[26px] py-[14px] rounded-[14px] hover:bg-[rgba(255,255,255,0.08)] transition-colors">
              Explore Opportunities
            </a>
          </div>

          {/* Stats with animated counters */}
          <div ref={statsRef} className="border-t border-[#e2e8f0] pt-8 grid grid-cols-2 gap-y-5">
            <StatItem value="35+" label="Years Experience" color="bg-[#1e9fd4]" started={statsInView} />
            <StatItem value="Pan India" label="Network" color="bg-[#8dc63f]" started={statsInView} />
            <StatItem value="100%" label="Transparent Reporting" color="bg-[#8dc63f]" started={statsInView} />
            <StatItem value="1 Partner" label="Single Point Accountability" color="bg-[#1e9fd4]" started={statsInView} />
          </div>
        </div>

        {/* Right column — hero image */}
        <div className="flex-1 min-w-[300px]">
          <div className="rounded-3xl overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]">
            <img src={imgHeroImg} alt="MarketMen event execution" className="w-full h-[500px] object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

// ── What We Do ────────────────────────────────────────────────────────────────
const services = [
  { icon: imgSvcBrand,    title: 'Brand Activation',     desc: 'High-impact on-ground activations that connect brands directly with consumers across India.', bg: 'bg-[#ebf7fc]' },
  { icon: imgSvcRetail,   title: 'Retail Branding',      desc: 'Transforming retail spaces with impactful branding solutions that drive footfall and sales.', bg: 'bg-[#f3fae8]' },
  { icon: imgSvcCorpEvt,  title: 'Corporate Events',     desc: 'End-to-end corporate event management with flawless execution at any scale.', bg: 'bg-[#ebf7fc]' },
  { icon: imgSvcEmpEng,   title: 'Employee Engagement',  desc: 'Meaningful engagement programs that build culture, morale, and team spirit.', bg: 'bg-[#f3fae8]' },
  { icon: imgSvcRural,    title: 'Rural Marketing',      desc: 'Deep rural reach through haats, village meets, and targeted rural activation formats.', bg: 'bg-[#ebf7fc]' },
  { icon: imgSvcEvent,    title: 'Event IPs',            desc: 'Proprietary event formats and intellectual properties for recurring brand experiences.', bg: 'bg-[#f3fae8]' },
  { icon: imgSvcMedia,    title: 'Media & Production',   desc: 'Comprehensive media planning, space booking, and large-scale production services.', bg: 'bg-[#ebf7fc]' },
  { icon: imgSvcPermit,   title: 'Permissions & Liaison',desc: 'Expert handling of government permissions and stakeholder coordination.', bg: 'bg-[#f3fae8]' },
  { icon: imgSvcVideo,    title: 'Video Production',     desc: 'Professional video content that captures campaign stories and brand narratives.', bg: 'bg-[#ebf7fc]' },
  { icon: imgSvcCreative, title: 'Creative Design',      desc: 'Striking visual communication that elevates brand identity across all touchpoints.', bg: 'bg-[#f3fae8]' },
];

function WhatWeDoSection() {
  return (
    <section className="bg-white py-20 px-8">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col items-center mb-14 text-center">
          <SectionLabel>What We Do</SectionLabel>
          <h2 className="text-[40px] font-extrabold text-[#0f172a] tracking-[-0.5px] leading-[60px]">
            One Partner. Complete Execution.
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {services.map(s => <ServiceCard key={s.title} {...s} />)}
        </div>
      </div>
    </section>
  );
}

// ── Why Choose Us ─────────────────────────────────────────────────────────────
const whyCards = [
  { icon: imgWhyVendor,  title: 'Verified Vendors',          desc: 'Pan-India vetted vendor network for seamless execution.', bg: 'bg-[#ebf7fc]' },
  { icon: imgWhyPM,      title: 'Dedicated PMs',             desc: 'Single project manager from brief to final report.', bg: 'bg-[#f3fae8]' },
  { icon: imgWhyNation,  title: 'Nationwide Execution',      desc: 'Present in 500+ districts across 25+ states.', bg: 'bg-[#ebf7fc]' },
  { icon: imgWhyGPS,     title: 'GPS Campaign Tracking',     desc: 'Real-time location tracking of all field activities.', bg: 'bg-[#f3fae8]' },
  { icon: imgWhyPhoto,   title: 'Photo & Video Reporting',   desc: '100% visual documentation of every campaign touchpoint.', bg: 'bg-[#ebf7fc]' },
  { icon: imgWhyPrice,   title: 'Transparent Pricing',       desc: 'Detailed cost breakdowns with zero hidden charges.', bg: 'bg-[#f3fae8]' },
  { icon: imgWhyFast,    title: 'Fast Turnaround',           desc: 'Agile teams that mobilize quickly for urgent campaigns.', bg: 'bg-[#ebf7fc]' },
  { icon: imgWhyFinance, title: 'Financial Discipline',      desc: 'SOC-audited processes and GST-compliant billing.', bg: 'bg-[#f3fae8]' },
  { icon: imgWhyAccount, title: 'Single Point Accountability',desc: 'One partner, complete responsibility—start to finish.', bg: 'bg-[#ebf7fc]' },
];

function WhyUsSection() {
  return (
    <section className="bg-[#f8fafc] py-20 px-8">
      <div className="max-w-[1280px] mx-auto flex flex-wrap gap-8">
        {/* Left text */}
        <div className="flex-1 min-w-[280px] flex flex-col justify-center">
          <SectionLabel>Why Choose Us</SectionLabel>
          <h2 className="text-[40px] font-extrabold text-[#0f172a] tracking-[-0.5px] leading-[60px]">
            Why India&apos;s Leading Brands Choose With Us
          </h2>
          <p className="text-[#64748b] text-[15px] leading-[24.375px] mt-6 mb-6">
            From Fortune 500 companies to homegrown brands, we have been the trusted on-ground execution partner for campaigns that demand scale, transparency, and measurable results.
          </p>
          <a href="#approach" className="flex items-center gap-2 text-[#1e9fd4] font-bold text-[14px]">
            Learn about our approach
            <img src={imgWhyLink} alt="" className="w-4 h-4" />
          </a>
        </div>

        {/* Right grid */}
        <div className="flex-1 min-w-[280px] grid grid-cols-3 gap-3">
          {whyCards.map(c => <WhyCard key={c.title} {...c} />)}
        </div>
      </div>
    </section>
  );
}

// ── Fade-in wrapper ───────────────────────────────────────────────────────────
function FadeIn({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const { ref, inView } = useInView(0.1);
  return (
    <div ref={ref} className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}>
      {children}
    </div>
  );
}

// ── Insights Section ──────────────────────────────────────────────────────────
const imgInsight1 = "https://www.figma.com/api/mcp/asset/bd7a97a2-017a-4cc5-ba86-02d99b0ee033";
const imgInsight2 = "https://www.figma.com/api/mcp/asset/6bb90760-a177-4bbd-9ba6-2c4084a1a495";
const imgInsight3 = "https://www.figma.com/api/mcp/asset/b0eddc1c-dfc5-4114-b3e9-cac1c7176cfe";

const insights = [
  { date: 'Dec 12, 2024', title: 'BTL vs ATL: Why On-Ground Is Winning in 2024',          img: imgInsight1 },
  { date: 'Nov 28, 2024', title: 'How to Plan a Haat Bazaar Campaign for FMCG Brands',    img: imgInsight2 },
  { date: 'Nov 15, 2024', title: 'Shop-in-Shop Branding: A Complete Playbook',             img: imgInsight3 },
];

function InsightsSection() {
  return (
    <section className="bg-white py-20 px-8" id="insights">
      <div className="max-w-[1280px] mx-auto">
        <FadeIn>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
            <div>
              <SectionLabel>Insights</SectionLabel>
              <h2 className="text-[40px] font-extrabold text-[#0f172a] tracking-[-0.5px] leading-[60px]">
                Insights That Help Brands Stay Ahead
              </h2>
            </div>
            <a href="#" className="text-[#1e9fd4] font-bold text-[14px] flex items-center gap-1 hover:underline">
              All Articles →
            </a>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {insights.map((a, i) => (
            <FadeIn key={i}>
              <div className="bg-white border border-[#e2e8f0] rounded-2xl overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
                <div className="h-44 overflow-hidden">
                  <img src={a.img} alt={a.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-5 flex flex-col gap-2">
                  <p className="text-[#64748b] text-[11px]">{a.date}</p>
                  <p className="text-[#0f172a] font-bold text-[13px] leading-5">{a.title}</p>
                  <a href="#" className="text-[#1e9fd4] font-bold text-[12px] flex items-center gap-1 mt-1">Read Article →</a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Floating WhatsApp Button ───────────────────────────────────────────────────
function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919821103919"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25d366] w-14 h-14 rounded-full flex items-center justify-center shadow-[0_4px_24px_rgba(37,211,102,0.5)] hover:scale-110 transition-transform duration-200"
      aria-label="Chat on WhatsApp"
    >
      <svg viewBox="0 0 32 32" className="w-7 h-7 fill-white">
        <path d="M16 2C8.268 2 2 8.268 2 16c0 2.47.675 4.783 1.85 6.766L2 30l7.447-1.822A13.94 13.94 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.6a11.56 11.56 0 01-5.9-1.617l-.423-.25-4.42 1.082 1.116-4.302-.276-.44A11.6 11.6 0 014.4 16C4.4 9.6 9.6 4.4 16 4.4S27.6 9.6 27.6 16 22.4 27.6 16 27.6zm6.362-8.668c-.348-.174-2.06-1.016-2.38-1.132-.318-.116-.55-.174-.78.174-.232.348-.898 1.132-1.102 1.364-.202.232-.404.26-.752.086-.348-.174-1.47-.542-2.8-1.728-1.034-.922-1.732-2.06-1.936-2.408-.202-.348-.022-.536.152-.71.156-.154.348-.404.522-.606.174-.202.232-.348.348-.58.116-.232.058-.434-.028-.608-.088-.174-.78-1.884-1.07-2.578-.28-.676-.566-.584-.78-.594l-.664-.012c-.232 0-.608.086-.926.434-.318.348-1.216 1.188-1.216 2.896s1.244 3.36 1.418 3.592c.174.232 2.45 3.738 5.94 5.24.83.358 1.478.572 1.982.732.832.264 1.59.226 2.188.138.668-.1 2.06-.842 2.35-1.656.29-.814.29-1.51.202-1.656-.086-.146-.318-.232-.666-.406z"/>
      </svg>
    </a>
  );
}
const imgOppArrow    = "https://www.figma.com/api/mcp/asset/31095440-83d8-48d8-bba2-36db45b85940";
const imgOppReadMore = "https://www.figma.com/api/mcp/asset/f8729e5b-012d-4708-a647-374ebb9a60b5";

const imgGanesh      = "https://www.figma.com/api/mcp/asset/bd7a97a2-017a-4cc5-ba86-02d99b0ee033";
const imgGarbha      = "https://www.figma.com/api/mcp/asset/dc59f4d7-182b-4884-9554-a9828667e94a";
const imgEmpCal      = "https://www.figma.com/api/mcp/asset/63f87c81-7b2b-42fc-b2be-872d63d7e90e";
const imgRetailExp   = "https://www.figma.com/api/mcp/asset/b0eddc1c-dfc5-4114-b3e9-cac1c7176cfe";
const imgCollege     = "https://www.figma.com/api/mcp/asset/ffd3902f-4d24-4c12-82d0-bafa4dcb9ed2";
const imgRuralCamp   = "https://www.figma.com/api/mcp/asset/6bb90760-a177-4bbd-9ba6-2c4084a1a495";
const imgCSR         = "https://www.figma.com/api/mcp/asset/5626d768-c94c-4666-8999-b2a4d3673869";

const opportunities = [
  { img: imgGanesh,   title: 'Ganesh Festival Brand Activation', desc: 'Pan-city activations during Ganeshotsav with massive crowd engagement.',        tag: 'Festival' },
  { img: imgGarbha,   title: 'Garbha Event Management',          desc: 'Premium garba event sponsorships across Gujarat and Maharashtra.',              tag: 'Events' },
  { img: imgEmpCal,   title: 'Employee Engagement Calendar',     desc: 'Year-round engagement programs designed for corporate teams.',                  tag: 'Corporate' },
  { img: imgRetailExp,title: 'Retail Expansion Program',         desc: 'Branded retail rollouts across modern trade and general trade.',                tag: 'Retail' },
  { img: imgCollege,  title: 'College Festival Branding',        desc: 'Youth-focused brand activations at top college fests.',                        tag: 'Youth' },
  { img: imgRuralCamp,title: 'Rural Marketing Campaigns',        desc: 'Deep Bharat outreach programs connecting brands with rural consumers.',         tag: 'Rural' },
  { img: imgCSR,      title: 'CSR & Government Projects',        desc: 'Purpose-driven campaigns aligned with government schemes and corporate CSR mandates.', tag: 'CSR' },
];

function OpportunityCard({ img, title, desc, tag }: { img: string; title: string; desc: string; tag: string }) {
  return (
    <div className="bg-white border border-[#e2e8f0] rounded-2xl overflow-hidden flex flex-col transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div className="h-48 shrink-0 overflow-hidden relative">
        <img src={img} alt={title} className="w-full h-full object-cover" />
        <span className="absolute top-3 left-3 bg-[#1e9fd4] text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
          {tag}
        </span>
      </div>
      <div className="p-5 flex flex-col gap-2 flex-1">
        <p className="text-[#0f172a] font-bold text-[14px] leading-[21px]">{title}</p>
        <p className="text-[#64748b] text-[12px] leading-5 flex-1">{desc}</p>
        <a href="#" className="flex items-center gap-1 text-[#1e9fd4] font-bold text-[12px] mt-1">
          Read More
          <img src={imgOppReadMore} alt="" className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}

function OpportunitiesSection() {
  return (
    <section className="bg-white py-20 px-8" id="opportunities">
      <div className="max-w-[1280px] mx-auto">
        {/* Header row */}
        <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
          <div>
            <SectionLabel>Opportunities</SectionLabel>
            <h2 className="text-[40px] font-extrabold text-[#0f172a] tracking-[-0.5px] leading-[60px]">
              Instead of Waiting for Opportunities,<br />We Create Them.
            </h2>
          </div>
          <a href="#" className="border-2 border-[#1e9fd4] text-[#1e9fd4] font-bold text-[13px] px-[22px] py-3 rounded-[14px] flex items-center gap-2 hover:bg-[#ebf7fc] transition-colors shrink-0">
            View All Opportunities
            <img src={imgOppArrow} alt="" className="w-3.5 h-3.5" />
          </a>
        </div>
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {opportunities.map(o => <OpportunityCard key={o.title} {...o} />)}
        </div>
      </div>
    </section>
  );
}

// ── Our Specialist Divisions ──────────────────────────────────────────────────
const imgDivMM     = "https://www.figma.com/api/mcp/asset/58d2e479-9a1f-4f3d-a0f1-79a7af8d8f1c";
const imgDivRetail = "https://www.figma.com/api/mcp/asset/e148aa53-893e-4661-93c3-7f4eda0632ac";
const imgDivLocal  = "https://www.figma.com/api/mcp/asset/3d8d389f-593d-49c7-a6d5-80ed89b34f32";
const imgDivTech   = "https://www.figma.com/api/mcp/asset/f42bdfa7-47d3-4536-a4e6-717fe3442fa3";
const imgDivKM     = "https://www.figma.com/api/mcp/asset/dc13dfe0-9e9e-4662-bbb0-b7740ac6a236";
const imgDivOrange = "https://www.figma.com/api/mcp/asset/3202cba3-7155-4d4e-b9e4-fc1bc5156448";
const imgDivBlue   = "https://www.figma.com/api/mcp/asset/074d6993-fd44-4e5a-8350-346e77e8a5fd";
const imgDivPink   = "https://www.figma.com/api/mcp/asset/7b85d153-0aa2-4863-b342-cd797ff53f33";

const divisions = [
  {
    logo: imgDivMM,
    borderColor: 'border-[rgba(30,212,69,0.19)]',
    bg: 'linear-gradient(160deg, rgba(94,212,30,0.082) 0%, rgba(23,161,92,0.125) 100%)',
    dotColor: 'bg-[#1ed41e]',
    textColor: 'text-[#476949]',
    linkColor: 'text-[#25d366]',
    linkIcon: imgDivKM,
    items: ['Brand Activation','Experiential Marketing','Rural Marketing','Employee Engagement','Video & Photo Production','Event IPs'],
  },
  {
    logo: imgDivRetail,
    borderColor: 'border-[rgba(177,115,17,0.19)]',
    bg: 'linear-gradient(160deg, rgba(222,126,42,0.082) 0%, rgba(180,111,0,0.125) 100%)',
    dotColor: 'bg-[#bc9836]',
    textColor: 'text-[#696147]',
    linkColor: 'text-[#c48807]',
    linkIcon: imgDivOrange,
    items: ['Retail Branding','Visual Merchandising','Shop-in-Shop Solutions','Trade Marketing','Channel Programs','In-Store Promotions'],
  },
  {
    logo: imgDivLocal,
    borderColor: 'border-[rgba(74,30,233,0.19)]',
    bg: 'linear-gradient(160deg, rgba(50,30,233,0.082) 0%, rgba(72,43,179,0.125) 100%)',
    dotColor: 'bg-[#321ee9]',
    textColor: 'text-[#514769]',
    linkColor: 'text-[#4a1ee9]',
    linkIcon: imgDivBlue,
    items: ['Hyperlocal Marketing','Community Marketing','Space Monetization','Retail Media Solutions','Brand Visibility Campaigns','Consumer Engagement'],
  },
  {
    logo: imgDivTech,
    borderColor: 'border-[rgba(192,21,189,0.19)]',
    bg: 'linear-gradient(160deg, rgba(192,21,155,0.082) 0%, rgba(246,100,231,0.125) 100%)',
    dotColor: 'bg-[#c015af]',
    textColor: 'text-[#694762]',
    linkColor: 'text-[#c015af]',
    linkIcon: imgDivPink,
    items: ['White-Label SaaS Platforms','Visitor Management Systems','QR & Registration Solutions','Queue Management Systems','Event Technology Solutions','Custom Business Applications'],
  },
];

function DivisionCard({ logo, borderColor, bg, dotColor, textColor, linkColor, linkIcon, items }: typeof divisions[0]) {
  return (
    <div className={`bg-white border border-[#e2e8f0] rounded-2xl overflow-hidden flex flex-col`}>
      {/* Logo header */}
      <div className={`border-b-2 ${borderColor} px-5 py-4`} style={{ backgroundImage: bg }}>
        <img src={logo} alt="" className="h-12 object-contain" />
      </div>
      {/* List */}
      <div className="px-5 py-4 flex flex-col gap-1.5 flex-1">
        {items.map(item => (
          <div key={item} className="flex items-center gap-2">
            <div className={`${dotColor} w-1.5 h-1.5 rounded-full shrink-0`} />
            <p className={`${textColor} text-[11px] leading-[16.5px]`}>{item}</p>
          </div>
        ))}
      </div>
      {/* Know More */}
      <div className="px-5 pb-4">
        <a href="#" className={`${linkColor} font-bold text-[12px] flex items-center gap-1`}>
          Know More
          <img src={linkIcon} alt="" className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}

function DivisionsSection() {
  return (
    <section className="bg-[#f8fafc] py-20 px-8">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col items-center mb-14 text-center">
          <SectionLabel>Our Divisions</SectionLabel>
          <h2 className="text-[40px] font-extrabold text-[#0f172a] tracking-[-0.5px] leading-[60px]">
            Our Specialist Divisions
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {divisions.map((d, i) => <DivisionCard key={i} {...d} />)}
        </div>
      </div>
    </section>
  );
}

// ── Case Studies ──────────────────────────────────────────────────────────────
const imgChyawan  = "https://www.figma.com/api/mcp/asset/a3d2831a-8b5f-4f58-a904-16a66618aeb3";
const imgDealer   = "https://www.figma.com/api/mcp/asset/27cfaa09-54aa-4a35-a7bd-5d579bd48241";
const imgMechanic = "https://www.figma.com/api/mcp/asset/95ddf56f-6fff-476d-9a0d-89153323d97d";

const caseStudies = [
  {
    img: imgChyawan,
    brandBg: 'bg-[#ae1d0b]',
    brandLetter: 'D',
    brand: 'Dabur',
    title: 'Chyawanprash Winter Campaign',
    location: '12 States',
    stats: [{ value: '2.4 Cr+', label: 'People Reached' }, { value: '340+', label: 'Cities' }, { value: '4.2x', label: 'ROI', green: true }],
  },
  {
    img: imgDealer,
    brandBg: 'bg-[#00108f]',
    brandLetter: 'C',
    brand: 'CEAT Tyres',
    title: 'Dealer Meet & Product Launch',
    location: 'Pan India',
    stats: [{ value: '18,000+', label: 'People Reached' }, { value: '85', label: 'Cities' }, { value: '3.8x', label: 'ROI', green: true }],
  },
  {
    img: imgMechanic,
    brandBg: 'bg-[#052f6d]',
    brandLetter: 'C',
    brand: 'CEAT Tyres',
    title: 'Rural Mechanic Meet',
    location: 'UP, MP, Rajasthan',
    stats: [{ value: '45,000+', label: 'People Reached' }, { value: '120+', label: 'Cities' }, { value: '5.1x', label: 'ROI', green: true }],
  },
];

function CaseStudyCard({ img, brandBg, brandLetter, brand, title, location, stats }: typeof caseStudies[0]) {
  return (
    <div className="bg-white border border-[#e2e8f0] rounded-2xl overflow-hidden flex flex-col">
      <div className="h-52 shrink-0 overflow-hidden">
        <img src={img} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6 flex flex-col gap-3 flex-1">
        {/* Brand row */}
        <div className="flex items-center gap-2">
          <div className={`${brandBg} w-8 h-8 rounded-[10px] flex items-center justify-center shrink-0`}>
            <span className="text-white font-extrabold text-[11px]">{brandLetter}</span>
          </div>
          <span className="text-[#0f172a] font-bold text-[13px]">{brand}</span>
        </div>
        <p className="text-[#0f172a] font-bold text-[14px] leading-[21px]">{title}</p>
        <p className="text-[#64748b] text-[12px]">{location}</p>
        {/* Stats */}
        <div className="grid grid-cols-3 gap-2">
          {stats.map(s => (
            <div key={s.label} className="bg-[#f8fafc] rounded-[14px] p-2 flex flex-col items-center">
              <span className={`font-extrabold text-[14px] leading-[21px] ${s.green ? 'text-[#8dc63f]' : 'text-[#1e9fd4]'}`}>{s.value}</span>
              <span className="text-[#64748b] text-[10px] text-center leading-[15px]">{s.label}</span>
            </div>
          ))}
        </div>
        {/* CTA */}
        <button className="w-full border border-[#1e9fd4] rounded-[14px] h-10 text-[#1e9fd4] font-bold text-[12px] hover:bg-[#ebf7fc] transition-colors mt-auto">
          View Case Study →
        </button>
      </div>
    </div>
  );
}

function CaseStudiesSection() {
  return (
    <section className="bg-[#f8fafc] py-20 px-8" id="case-studies">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col items-center mb-12 text-center">
          <SectionLabel>Case Studies</SectionLabel>
          <h2 className="text-[40px] font-extrabold text-[#0f172a] tracking-[-0.5px] leading-[60px]">
            Recent Success Stories
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map(c => <CaseStudyCard key={c.title} {...c} />)}
        </div>
      </div>
    </section>
  );
}

// ── Trusted By (Marquee) ──────────────────────────────────────────────────────
function TrustedBySection() {
  return (
    <section className="py-16 px-8 bg-white" id="trusted">
      <div className="max-w-[1280px] mx-auto mb-10 text-center">
        <SectionLabel>Trusted By</SectionLabel>
        <h2 className="text-[40px] font-extrabold text-[#0f172a] tracking-[-0.5px] leading-[1.2]">
          Trusted by Leading Brands Across India
        </h2>
      </div>
      <div className="marquee-wrapper">
        <div className="marquee-track">
          {[...brands, ...brands].map((b, i) => (
            <div key={i} className="w-[160px] h-[100px] mx-4 flex items-center justify-center bg-white rounded-xl border border-[#e2e8f0] p-3 shrink-0">
              <img src={b.src} alt={b.alt} className="max-h-[70px] max-w-[120px] object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── CTA Banner ────────────────────────────────────────────────────────────────
function CTASection() {
  return (
    <section className="bg-gradient-to-r from-[#2b1f3a] to-[#142f4c] py-20 px-8" id="contact">
      <div className="max-w-[896px] mx-auto text-center">
        <h2 className="text-[44px] font-extrabold text-white leading-tight tracking-[-0.5px]">
          Ready to Build Your Next Campaign?
        </h2>
        <p className="text-[#e2e8f0] text-[16px] font-normal mt-4 mb-8">
          Let&apos;s discuss your goals and create measurable brand impact across India.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#schedule" className="bg-[#1e9fd4] text-white font-bold text-[14px] px-8 py-[18px] rounded-[14px] flex items-center gap-2 hover:bg-[#1a8fbe] transition-colors">
            Schedule Strategy Session
            <img src={imgHeroArrow} alt="" className="w-4 h-4" />
          </a>
          <a href="#expert" className="border-2 border-[#e2e8f0] text-white font-semibold text-[14px] px-8 py-[18px] rounded-[14px] hover:bg-[rgba(255,255,255,0.08)] transition-colors">
            Talk to an Expert
          </a>
        </div>
      </div>
    </section>
  );
}

// ── Footer ────────────────────────────────────────────────────────────────────
function Footer() {
  const [email, setEmail] = useState('');
  const quickLinks   = ['Home','About Us','Events','Opportunities','Case Studies','Contact Us'];
  const eventServices = ['Corporate Events','Employee Engagement','Brand & Public Events','Event IPs','Exhibition & Fabrication','Event Production','Rural Marketing'];
  const socialIcons  = [
    { src: imgFooterFB, alt: 'Facebook' },
    { src: imgFooterTW, alt: 'Twitter' },
    { src: imgFooterIG, alt: 'Instagram' },
    { src: imgFooterLI, alt: 'LinkedIn' },
  ];

  return (
    <footer className="bg-[#0f172a]">
      {/* WhatsApp bar */}
      <div className="border-b border-[rgba(255,255,255,0.07)]" style={{ backgroundImage: 'linear-gradient(177deg, rgba(30,159,212,0.125) 0%, rgba(141,198,63,0.082) 100%)' }}>
        <div className="max-w-[1280px] mx-auto px-8 py-5 flex items-center justify-between flex-wrap gap-4">
          <p className="text-[#cbd5e1] text-[14px] font-medium">Planning an event? Let&apos;s talk directly.</p>
          <a href="https://wa.me/919821103919" target="_blank" rel="noopener noreferrer"
            className="bg-[#25d366] text-white font-bold text-[13px] px-6 py-2.5 rounded-[14px] flex items-center gap-2 hover:bg-[#1fb85a] transition-colors">
            <img src={imgWhatsApp} alt="" className="w-4 h-4" />
            Plan your event on WhatsApp
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-[1280px] mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Column 1 — brand */}
        <div className="flex flex-col gap-5">
          <div className="bg-white rounded-[14px] p-2 w-fit">
            <img src={imgFooterLogo} alt="MarketMen" className="h-12 object-contain" />
          </div>
          <p className="text-[#94a3b8] text-[13px] leading-[21px]">
            MarketMen is India&apos;s trusted events and consumer connect company — delivering corporate events, employee engagement, brand activations, rural marketing, and experiential campaigns across India since 1989.
          </p>
          <div className="flex gap-3">
            {socialIcons.map(s => (
              <a key={s.alt} href="#" className="bg-[rgba(255,255,255,0.08)] rounded-[14px] w-9 h-9 flex items-center justify-center hover:bg-[rgba(255,255,255,0.15)] transition-colors">
                <img src={s.src} alt={s.alt} className="w-4 h-4 object-contain" />
              </a>
            ))}
          </div>
          <div>
            <p className="text-[#1e9fd4] text-[11px] font-bold tracking-[1.1px] uppercase mb-3">Newsletter</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="flex-1 bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.12)] rounded-[14px] px-3 py-2.5 text-[12px] text-white placeholder-[rgba(255,255,255,0.5)] outline-none focus:border-[#1e9fd4]"
              />
              <button className="bg-[#1e9fd4] rounded-[14px] w-10 h-10 flex items-center justify-center hover:bg-[#1a8fbe] transition-colors shrink-0">
                <img src={imgFooterEmail} alt="Subscribe" className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Column 2 — quick links */}
        <div>
          <p className="text-[#1e9fd4] text-[11px] font-bold tracking-[1.1px] uppercase mb-5">Quick Links</p>
          <div className="flex flex-col gap-2.5">
            {quickLinks.map(l => (
              <a key={l} href="#" className="text-[#94a3b8] text-[13px] hover:text-white transition-colors">{l}</a>
            ))}
          </div>
        </div>

        {/* Column 3 — event services */}
        <div>
          <p className="text-[#8dc63f] text-[11px] font-bold tracking-[1.1px] uppercase mb-5">Event Services</p>
          <div className="flex flex-col gap-2.5">
            {eventServices.map(l => (
              <a key={l} href="#" className="text-[#94a3b8] text-[13px] hover:text-white transition-colors">{l}</a>
            ))}
          </div>
        </div>

        {/* Column 4 — contact */}
        <div>
          <p className="text-[#1e9fd4] text-[11px] font-bold tracking-[1.1px] uppercase mb-5">Contact Us</p>
          <div className="flex flex-col gap-4 mb-8">
            <div className="flex gap-2.5 items-start">
              <img src={imgFooterPin} alt="" className="w-3.5 h-3.5 mt-0.5 shrink-0" />
              <p className="text-[#94a3b8] text-[12px] leading-5">Thacker Compound, 274, B. Bharucha Road, Marzban Parsi Colony, Grant Road (East), Mumbai – 400 007</p>
            </div>
            <a href="tel:+919821103919" className="flex gap-2.5 items-center hover:text-white transition-colors">
              <img src={imgFooterPhone} alt="" className="w-3.5 h-3.5 shrink-0" />
              <span className="text-[#94a3b8] text-[13px]">+91 98211 03919</span>
            </a>
            <a href="mailto:connect@marketmen.in" className="flex gap-2.5 items-center hover:text-white transition-colors">
              <img src={imgFooterMail} alt="" className="w-3.5 h-3.5 shrink-0" />
              <span className="text-[#94a3b8] text-[13px]">connect@marketmen.in</span>
            </a>
          </div>
          <p className="text-[#8dc63f] text-[11px] font-bold tracking-[1.1px] uppercase mb-3">Info</p>
          <div className="flex flex-col gap-2">
            {['Partner With MarketMen','Cities & Coverage','FAQs','Privacy Policy','Terms & Conditions'].map(l => (
              <a key={l} href="#" className="text-[#64748b] text-[12px] hover:text-white transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-[rgba(255,255,255,0.07)]">
        <div className="max-w-[1280px] mx-auto px-8 py-5 flex flex-wrap items-center justify-between gap-4">
          <p className="text-[#475569] text-[12px]">Copyright © Market Men Consumer Connect &amp; Events Pvt. Ltd. · All Rights Reserved</p>
          <div className="flex gap-5">
            {['Privacy Policy','Terms & Conditions','FAQs'].map(l => (
              <a key={l} href="#" className="text-[#475569] text-[12px] hover:text-white transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

// ── Main Export ───────────────────────────────────────────────────────────────
export function NewsHomePage() {
  return (
    <div className="home w-full overflow-x-hidden font-['Montserrat',sans-serif]">
      <Header />
      <FloatingWhatsApp />
      <main>
        <HeroSection />
        <FadeIn><WhatWeDoSection /></FadeIn>
        <FadeIn><WhyUsSection /></FadeIn>
        <FadeIn><OpportunitiesSection /></FadeIn>
        <FadeIn><DivisionsSection /></FadeIn>
        <FadeIn><CaseStudiesSection /></FadeIn>
        <FadeIn><TrustedBySection /></FadeIn>
        <FadeIn><InsightsSection /></FadeIn>
        <FadeIn><CTASection /></FadeIn>
      </main>
      <Footer />
    </div>
  );
}
