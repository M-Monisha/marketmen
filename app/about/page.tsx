'use client';

import React from 'react';
import Link from 'next/link';
import PageLayout from '@/components/shared/PageLayout';

// ── Images ────────────────────────────────────────────────────────────────────
const imgHero = "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=1400&q=90&fit=crop";

// ── Brand logos (public folder) ───────────────────────────────────────────────
const brands = [
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

// ── Stat item ─────────────────────────────────────────────────────────────────
function StatItem({ value, label, color }: { value: string; label: string; color: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <span className={`font-extrabold text-[40px] leading-none ${color}`}>{value}</span>
      <span className="text-[#cbd5e1] text-[13px] font-medium text-center">{label}</span>
    </div>
  );
}

// ── Value card ────────────────────────────────────────────────────────────────
function ValueCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="bg-white border border-[#e2e8f0] rounded-2xl p-6 flex flex-col gap-3 hover:shadow-md transition-shadow">
      <span className="text-[32px]">{icon}</span>
      <p className="text-[#0f172a] font-bold text-[15px]">{title}</p>
      <p className="text-[#64748b] text-[13px] leading-6">{desc}</p>
    </div>
  );
}

// ── Timeline item ─────────────────────────────────────────────────────────────
function TimelineItem({ year, text }: { year: string; text: string }) {
  return (
    <div className="flex gap-5">
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 rounded-full bg-[#1e9fd4] flex items-center justify-center shrink-0">
          <span className="text-white text-[10px] font-bold">{year.slice(2)}</span>
        </div>
        <div className="w-0.5 bg-[#e2e8f0] flex-1 mt-2 last:hidden" />
      </div>
      <div className="pb-8">
        <p className="text-[#1e9fd4] font-bold text-[14px] mb-1">{year}</p>
        <p className="text-[#475569] text-[14px] leading-6">{text}</p>
      </div>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function AboutPage() {
  const values = [
    { icon: '🔍', title: 'Transparency',           desc: 'Complete visibility into every campaign — GPS tracking, photo reporting, and real-time dashboards.' },
    { icon: '🎯', title: 'Single Point Accountability', desc: 'One dedicated project manager owns your campaign from brief to final report.' },
    { icon: '📡', title: 'GPS Tracking',            desc: 'Every field activation geo-tagged and time-stamped so you always know where your brand is.' },
    { icon: '🌐', title: 'Pan-India Network',       desc: 'Active presence in 500+ districts across 20+ states — Tier 1, Tier 2, Tier 3, and rural.' },
  ];

  const milestones = [
    { year: '1989', text: 'MarketMen founded in Mumbai as a pure-play events and consumer connect company.' },
    { year: '2000', text: 'Expanded into rural marketing and BTL activations across Maharashtra and Gujarat.' },
    { year: '2010', text: 'Pan-India network established — operations in 200+ cities across 15+ states.' },
    { year: '2018', text: 'Launched proprietary GPS reporting technology for real-time campaign tracking.' },
    { year: '2024', text: 'Present in 500+ districts, 20+ states with 35+ years of uninterrupted execution excellence.' },
  ];

  return (
    <PageLayout>
      {/* ── Hero ── */}
      <section className="relative flex items-center overflow-hidden" style={{ minHeight: '520px' }}>
        <img src={imgHero} alt="About MarketMen" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-[rgba(10,6,24,0.72)]" />
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-8 py-20">
          <span className="inline-flex items-center gap-2 bg-[rgba(30,159,212,0.15)] border border-[rgba(30,159,212,0.4)] rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1e9fd4]" />
            <span className="text-[#1e9fd4] text-[11px] font-semibold tracking-widest uppercase">Founded 1989 · Mumbai</span>
          </span>
          <h1 className="font-extrabold text-white leading-[1.1] tracking-[-1.5px] mb-4 max-w-[760px]" style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}>
            About <span className="text-[#1e9fd4]">MarketMen</span>
          </h1>
          <p className="text-[#e2e8f0] text-[20px] font-semibold max-w-[640px] leading-8">
            India&apos;s Most Trusted Event Execution Partner Since 1989
          </p>
        </div>
      </section>

      {/* ── Story ── */}
      <section className="bg-white py-20 px-8">
        <div className="max-w-[1280px] mx-auto flex flex-wrap gap-14 items-start">
          {/* Text */}
          <div className="flex-1 min-w-[280px]">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-0.5 rounded-full bg-[#1e9fd4]" />
              <p className="text-[#1e9fd4] text-[11px] font-bold tracking-[1.1px] uppercase">Our Story</p>
            </div>
            <h2 className="text-[40px] font-extrabold text-[#0f172a] tracking-[-0.5px] leading-[1.3] mb-6">
              35 Years of Execution Excellence
            </h2>
            <div className="flex flex-col gap-4 text-[#475569] text-[15px] leading-7">
              <p>
                Founded in 1989 in Mumbai, MarketMen started as a pure-play events company with one simple belief: that great execution is the difference between a good idea and real brand impact.
              </p>
              <p>
                Over three and a half decades, we have grown into India&apos;s most comprehensive on-ground execution partner — delivering corporate events, brand activations, rural marketing campaigns, employee engagement programs, and experiential marketing across the country.
              </p>
              <p>
                From Fortune 500 multinationals to homegrown Indian brands, our clients trust us to be their single point of accountability — one partner who owns the brief from strategy through execution to reporting.
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="flex-1 min-w-[280px]">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-6 h-0.5 rounded-full bg-[#8dc63f]" />
              <p className="text-[#8dc63f] text-[11px] font-bold tracking-[1.1px] uppercase">Our Journey</p>
            </div>
            {milestones.map(m => <TimelineItem key={m.year} {...m} />)}
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="bg-gradient-to-r from-[#2b1f3a] to-[#142f4c] py-16 px-8">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            <StatItem value="35+"   label="Years of Experience" color="text-[#1e9fd4]" />
            <StatItem value="500+"  label="Events Per Year"     color="text-[#8dc63f]" />
            <StatItem value="200+"  label="Cities Covered"      color="text-[#1e9fd4]" />
            <StatItem value="3Cr+"  label="People Reached"      color="text-[#8dc63f]" />
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="bg-[#f8fafc] py-20 px-8">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col items-center mb-12 text-center">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-0.5 rounded-full bg-[#1e9fd4]" />
              <p className="text-[#1e9fd4] text-[11px] font-bold tracking-[1.1px] uppercase">What We Stand For</p>
            </div>
            <h2 className="text-[40px] font-extrabold text-[#0f172a] tracking-[-0.5px] leading-[1.3]">
              Our Values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map(v => <ValueCard key={v.title} {...v} />)}
          </div>
        </div>
      </section>

      {/* ── Clients Marquee ── */}
      <section className="bg-white py-16 px-8">
        <div className="max-w-[1280px] mx-auto mb-10 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-6 h-0.5 rounded-full bg-[#1e9fd4]" />
            <p className="text-[#1e9fd4] text-[11px] font-bold tracking-[1.1px] uppercase">Trusted By</p>
          </div>
          <h2 className="text-[36px] font-extrabold text-[#0f172a] tracking-[-0.5px] leading-[1.2]">
            Brands That Trust MarketMen
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

      {/* ── CTA ── */}
      <section className="bg-gradient-to-r from-[#2b1f3a] to-[#142f4c] py-20 px-8">
        <div className="max-w-[896px] mx-auto text-center">
          <h2 className="text-[44px] font-extrabold text-white leading-tight tracking-[-0.5px] mb-4">
            Let&apos;s Build Your Next Campaign
          </h2>
          <p className="text-[#e2e8f0] text-[16px] mb-8">
            35 years of experience. One committed execution partner. Ready when you are.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-[#1e9fd4] text-white font-bold text-[14px] px-8 py-[18px] rounded-[14px] hover:bg-[#1a8fbe] transition-colors">
              Get in Touch
            </Link>
            <Link href="/case-studies" className="border-2 border-[#e2e8f0] text-white font-semibold text-[14px] px-8 py-[18px] rounded-[14px] hover:bg-[rgba(255,255,255,0.08)] transition-colors">
              See Our Work
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
