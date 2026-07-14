'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import PageLayout from '@/components/shared/PageLayout';

// ── Figma image assets ────────────────────────────────────────────────────────
const imgRuralHero  = "https://www.figma.com/api/mcp/asset/62d6ee6b-1abb-45a5-b1d1-1b2cde03f15d";
const imgMobileVan  = "https://www.figma.com/api/mcp/asset/116e8e64-4688-4f53-8b4b-331c59a9c099";
const imgVillage    = "https://www.figma.com/api/mcp/asset/491c9b59-d802-471b-91a3-415837169e41";
const imgHaat       = "https://www.figma.com/api/mcp/asset/d848ab41-1ef2-42cd-a3e6-888861ac052a";
const imgSampling   = "https://www.figma.com/api/mcp/asset/74d2fa38-f98a-4c4d-8b01-77bf6634b34d";
const imgNukkad     = "https://www.figma.com/api/mcp/asset/91d2ffe0-d4e8-4ad3-92e8-97bb3d36774c";
const imgDealer     = "https://www.figma.com/api/mcp/asset/5872b69a-2bb4-4b6e-98d6-31e70ed69231";
const imgDabur      = "https://www.figma.com/api/mcp/asset/3d4fd321-4d94-449f-ac2f-6b6e0a7a2a45";
const imgTVS        = "https://www.figma.com/api/mcp/asset/dc3b643d-715a-4dae-9f5f-a2d98bc2b5fe";
const imgCEAT       = "https://www.figma.com/api/mcp/asset/4a19382a-a7c8-4674-ae9e-42000589b99e";
const imgParivartan = "https://www.figma.com/api/mcp/asset/1346f6c0-928e-4a62-94e0-5d7bc7465f90";
const imgYESBank    = "https://www.figma.com/api/mcp/asset/cd81ed8f-a816-4cfd-b997-8df10d26da85";

// ── Why Choose Us features ────────────────────────────────────────────────────
const whyFeatures = [
  {
    icon: '🗺️',
    title: 'Pan-India Rural Network',
    desc: 'Active field teams across 500+ districts in 20+ states — Tier 2, Tier 3 and deep villages.',
  },
  {
    icon: '📡',
    title: 'GPS-Tracked Campaigns',
    desc: 'Every activation geo-tagged in real time. You know exactly where your brand is, always.',
  },
  {
    icon: '📸',
    title: '100% Photo Reporting',
    desc: 'Time-stamped photo and video proof of every touchpoint delivered with daily dashboards.',
  },
  {
    icon: '🤝',
    title: 'Single Point Accountability',
    desc: 'One dedicated project manager from planning to final report. Zero hand-off surprises.',
  },
  {
    icon: '📊',
    title: 'Outcome-Based Planning',
    desc: 'Campaigns designed around measurable impact — reach, trials, retailer onboarding, awareness.',
  },
];

// ── Activation format card ────────────────────────────────────────────────────
function FormatCard({ img, title, desc }: { img: string; title: string; desc: string }) {
  return (
    <div className="bg-white border border-[#e2e8f0] rounded-2xl overflow-hidden flex flex-col transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div className="h-44 overflow-hidden">
        <img src={img} alt={title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="p-5 flex flex-col gap-2">
        <p className="text-[#0f172a] font-bold text-[14px] leading-[21px]">{title}</p>
        <p className="text-[#64748b] text-[12px] leading-5">{desc}</p>
      </div>
    </div>
  );
}

// ── Stat pill ─────────────────────────────────────────────────────────────────
function StatPill({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <span className="text-[#1e9fd4] font-extrabold text-[28px] leading-none">{value}</span>
      <span className="text-[#cbd5e1] text-[12px] font-medium text-center">{label}</span>
    </div>
  );
}

// ── Case study card ───────────────────────────────────────────────────────────
function CaseCard({ img, brand, title, tag, result }: {
  img: string; brand: string; title: string; tag: string; result: string;
}) {
  return (
    <div className="bg-white border border-[#e2e8f0] rounded-2xl overflow-hidden flex flex-col transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div className="h-48 overflow-hidden relative">
        <img src={img} alt={title} className="w-full h-full object-cover" />
        <span className="absolute top-3 left-3 bg-[#1e9fd4] text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
          {tag}
        </span>
      </div>
      <div className="p-5 flex flex-col gap-2 flex-1">
        <p className="text-[#1e9fd4] text-[11px] font-bold uppercase tracking-wider">{brand}</p>
        <p className="text-[#0f172a] font-bold text-[14px] leading-[21px]">{title}</p>
        <p className="text-[#8dc63f] text-[12px] font-semibold">{result}</p>
        <Link href="/case-studies" className="text-[#1e9fd4] font-bold text-[12px] mt-auto hover:underline">
          View Case Study →
        </Link>
      </div>
    </div>
  );
}

// ── FAQ accordion ────────────────────────────────────────────────────────────
function FAQ({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-[#e2e8f0] rounded-2xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-[#f8fafc] transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span className="text-[#0f172a] font-semibold text-[14px] pr-4">{question}</span>
        <span className={`text-[#1e9fd4] text-[20px] font-bold shrink-0 transition-transform duration-200 ${open ? 'rotate-45' : ''}`}>+</span>
      </button>
      {open && (
        <div className="px-6 pb-5">
          <p className="text-[#64748b] text-[13px] leading-6">{answer}</p>
        </div>
      )}
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function OpportunitiesPage() {
  const formats = [
    { img: imgMobileVan,  title: 'Mobile Van Campaigns',  desc: 'Branded vans that travel village-to-village delivering demos, sampling and brand messaging.' },
    { img: imgVillage,    title: 'Village Meets',          desc: 'Community gatherings in villages creating intimate brand-consumer connections.' },
    { img: imgHaat,       title: 'Haat Bazaar Activations',desc: 'Weekly rural market activations reaching high-footfall haat bazaars across states.' },
    { img: imgSampling,   title: 'Product Sampling',       desc: 'Targeted product trials at consumer touchpoints in Tier 3 and rural markets.' },
    { img: imgNukkad,     title: 'Nukkad Shows',           desc: 'Street-level performances and live demonstrations driving awareness and trials.' },
    { img: imgDealer,     title: 'Dealer & Retailer Meets',desc: 'Channel engagement programs building loyalty and driving sell-through in rural trade.' },
  ];

  const caseStudies = [
    { img: imgDabur,      brand: 'Dabur',      title: 'Dabur Amla Rural Activation',   tag: 'FMCG',     result: '3.2 Cr+ Rural Lives Reached' },
    { img: imgTVS,        brand: 'TVS',        title: 'TVS PGM Programme',              tag: 'Auto',     result: '1200+ Villages Covered' },
    { img: imgCEAT,       brand: 'CEAT',       title: 'CEAT Farmers Campaign',          tag: 'Tyres',    result: '45,000+ Touchpoints' },
    { img: imgParivartan, brand: 'Govt.',       title: 'Parivartan – Government Scheme', tag: 'CSR',      result: '20+ States Covered' },
    { img: imgYESBank,    brand: 'YES Bank',   title: 'YES Bank Financial Literacy',    tag: 'Banking',  result: '500+ Districts Reached' },
  ];

  const faqs = [
    {
      question: 'What geographies do you cover for rural activation?',
      answer: 'We cover 500+ districts across 20+ states including major agricultural belts in UP, MP, Rajasthan, Maharashtra, Karnataka, and the Northeast. Our field teams are permanently placed, not just mobilized for campaigns.',
    },
    {
      question: 'How do you ensure campaign reporting from remote areas?',
      answer: 'Every activation is GPS-tracked with time-stamped photo and video reporting. Our proprietary dashboard gives brand managers real-time visibility of all field activities, regardless of location.',
    },
    {
      question: 'What is the minimum duration for a rural campaign?',
      answer: 'We recommend at least 4 weeks for meaningful impact, but we have executed high-intensity 2-week sprints for product launches. Campaign structure depends on your objectives and geography.',
    },
    {
      question: 'Can you combine rural activation with digital amplification?',
      answer: 'Yes. We produce video content and photography from every activation that can be repurposed for social media, digital ads, and regional language marketing. We also partner with digital agencies for integrated campaigns.',
    },
    {
      question: 'How do you handle language and cultural nuances across states?',
      answer: 'Our field teams are local hires who speak the regional language and understand local customs. All communication materials are translated and culturally adapted for each geography we operate in.',
    },
  ];

  return (
    <PageLayout>
      {/* ── Hero ── */}
      <section className="relative flex items-center overflow-hidden" style={{ minHeight: '580px' }}>
        <img src={imgRuralHero} alt="Rural Activation" className="absolute inset-0 w-full h-full object-cover object-center" loading="eager" fetchPriority="high" />
        <div className="absolute inset-0 bg-[rgba(10,6,24,0.75)]" />
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-8 py-20">
          <span className="inline-flex items-center gap-2 bg-[rgba(141,198,63,0.15)] border border-[rgba(141,198,63,0.4)] rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8dc63f]" />
            <span className="text-[#8dc63f] text-[11px] font-semibold tracking-widest uppercase">Rural India Specialists Since 1989</span>
          </span>
          <h1 className="font-extrabold text-white leading-[1.1] tracking-[-1.5px] mb-6 max-w-[700px]" style={{ fontSize: 'clamp(28px, 4.5vw, 56px)' }}>
            Rural Activation That Drives{' '}
            <span className="text-[#8dc63f]">Real Brand Growth</span>
          </h1>
          <p className="text-[#e2e8f0] text-[17px] font-medium max-w-[580px] leading-7 mb-8">
            We take your brand to the heart of Bharat — villages, haats, and communities that urban campaigns miss entirely.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="bg-[#8dc63f] text-[#0f172a] font-bold text-[14px] px-7 py-3.5 rounded-[14px] hover:bg-[#7bb336] transition-colors">
              Plan a Rural Campaign
            </Link>
            <Link href="/case-studies" className="border-2 border-[rgba(255,255,255,0.4)] text-white font-semibold text-[14px] px-7 py-3.5 rounded-[14px] hover:bg-[rgba(255,255,255,0.08)] transition-colors">
              View Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="bg-white py-20 px-8">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col items-center mb-12 text-center">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-0.5 rounded-full bg-[#8dc63f]" />
              <p className="text-[#8dc63f] text-[11px] font-bold tracking-[1.1px] uppercase">Why Choose Us</p>
            </div>
            <h2 className="text-[40px] font-extrabold text-[#0f172a] tracking-[-0.5px] leading-[1.3]">
              The MarketMen Rural Advantage
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {whyFeatures.map(f => (
              <div key={f.title} className="bg-[#f8fafc] border border-[#e2e8f0] rounded-2xl p-6 flex flex-col gap-3 hover:shadow-md transition-shadow">
                <span className="text-[32px]">{f.icon}</span>
                <p className="text-[#0f172a] font-bold text-[13px] leading-5">{f.title}</p>
                <p className="text-[#64748b] text-[12px] leading-5">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Activation Formats ── */}
      <section className="bg-[#f8fafc] py-20 px-8">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col items-center mb-12 text-center">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-0.5 rounded-full bg-[#1e9fd4]" />
              <p className="text-[#1e9fd4] text-[11px] font-bold tracking-[1.1px] uppercase">Activation Formats</p>
            </div>
            <h2 className="text-[40px] font-extrabold text-[#0f172a] tracking-[-0.5px] leading-[1.3]">
              Our Rural Activation Formats
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {formats.map(f => <FormatCard key={f.title} {...f} />)}
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="bg-gradient-to-r from-[#2b1f3a] to-[#142f4c] py-16 px-8">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-wrap justify-around gap-8 divide-x divide-[rgba(255,255,255,0.15)]">
            <StatPill value="3Cr+" label="Rural Lives Touched" />
            <StatPill value="1000+" label="Campaigns Executed" />
            <StatPill value="500+" label="Districts Covered" />
            <StatPill value="20+" label="States Active" />
            <StatPill value="100%" label="GPS Reporting" />
          </div>
        </div>
      </section>

      {/* ── Case Studies ── */}
      <section className="bg-white py-20 px-8">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col items-center mb-12 text-center">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-0.5 rounded-full bg-[#1e9fd4]" />
              <p className="text-[#1e9fd4] text-[11px] font-bold tracking-[1.1px] uppercase">Proven Results</p>
            </div>
            <h2 className="text-[40px] font-extrabold text-[#0f172a] tracking-[-0.5px] leading-[1.3]">
              Rural Campaign Case Studies
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.slice(0, 3).map(c => <CaseCard key={c.title} {...c} />)}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[700px] mx-auto mt-6">
            {caseStudies.slice(3).map(c => <CaseCard key={c.title} {...c} />)}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-[#f8fafc] py-20 px-8">
        <div className="max-w-[800px] mx-auto">
          <div className="flex flex-col items-center mb-12 text-center">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-0.5 rounded-full bg-[#1e9fd4]" />
              <p className="text-[#1e9fd4] text-[11px] font-bold tracking-[1.1px] uppercase">FAQs</p>
            </div>
            <h2 className="text-[36px] font-extrabold text-[#0f172a] tracking-[-0.5px] leading-[1.3]">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            {faqs.map(f => <FAQ key={f.question} {...f} />)}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-gradient-to-r from-[#2b1f3a] to-[#142f4c] py-20 px-8">
        <div className="max-w-[896px] mx-auto text-center">
          <h2 className="text-[44px] font-extrabold text-white leading-tight tracking-[-0.5px] mb-4">
            Ready to Reach Rural India?
          </h2>
          <p className="text-[#e2e8f0] text-[16px] mb-8">
            Share your brand objectives and we will design a rural activation strategy that delivers.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-[#8dc63f] text-[#0f172a] font-bold text-[14px] px-8 py-[18px] rounded-[14px] hover:bg-[#7bb336] transition-colors">
              Start Your Rural Campaign
            </Link>
            <a href="https://wa.me/919821103919" target="_blank" rel="noopener noreferrer"
              className="border-2 border-[#e2e8f0] text-white font-semibold text-[14px] px-8 py-[18px] rounded-[14px] hover:bg-[rgba(255,255,255,0.08)] transition-colors">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
