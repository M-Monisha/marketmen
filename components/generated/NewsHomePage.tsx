'use client';

import React, { useState } from 'react';

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
    <div className="bg-white border border-[#e2e8f0] rounded-2xl p-5 flex flex-col gap-3">
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
    <div className="bg-white border border-[#e2e8f0] rounded-2xl p-[17px] flex flex-col gap-2">
      <div className={`${bg} rounded-xl w-9 h-9 flex items-center justify-center shrink-0`}>
        <img src={icon} alt={title} className="w-4 h-4 object-contain" />
      </div>
      <p className="text-[#0f172a] font-bold text-[12px] leading-[18px] pt-3">{title}</p>
      <p className="text-[#64748b] text-[11px] leading-[17.875px]">{desc}</p>
    </div>
  );
}

function StatItem({ value, label, color }: { value: string; label: string; color: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className={`${color} w-1.5 h-8 rounded-full shrink-0`} />
      <div>
        <p className="text-[#1e9fd4] font-extrabold text-[15px] leading-[22.5px]">{value}</p>
        <p className="text-[#64748b] text-[11px] leading-[16.5px]">{label}</p>
      </div>
    </div>
  );
}

// ── Header ────────────────────────────────────────────────────────────────────
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = ['About Us', 'Opportunities', 'Case Studies', 'Contact Us'];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#2b1f3a] to-[#142f4c] shadow-[0_10px_7.5px_rgba(0,0,0,0.1),0_4px_3px_rgba(0,0,0,0.1)]">
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

          {/* Headline */}
          <h1 className="text-[52px] font-extrabold leading-[1.15] tracking-[-1px] text-[#1e9fd4]">
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

          {/* Stats */}
          <div className="border-t border-[#e2e8f0] pt-8 grid grid-cols-2 gap-y-5">
            <StatItem value="35+" label="Years Experience" color="bg-[#1e9fd4]" />
            <StatItem value="Pan India" label="Network" color="bg-[#8dc63f]" />
            <StatItem value="100%" label="Transparent Reporting" color="bg-[#8dc63f]" />
            <StatItem value="1 Partner" label="Single Point Accountability" color="bg-[#1e9fd4]" />
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
      <main>
        <HeroSection />
        <WhatWeDoSection />
        <WhyUsSection />
        <TrustedBySection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
