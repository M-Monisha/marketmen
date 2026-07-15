'use client';

import React from 'react';
import Link from 'next/link';
import PageLayout from '@/components/shared/PageLayout';

// ── Images ────────────────────────────────────────────────────────────────────
const imgHero       = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1400&q=90&fit=crop";
const imgCorporate  = "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80&fit=crop";
const imgEmployee   = "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80&fit=crop";
const imgBrand      = "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80&fit=crop";
const imgExhibition = "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80&fit=crop";

// ── Stat item ─────────────────────────────────────────────────────────────────
function HeroStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1 px-8 first:pl-0 last:pr-0">
      <span className="text-[#1e9fd4] font-extrabold text-[32px] leading-none">{value}</span>
      <span className="text-[#cbd5e1] text-[13px] font-medium text-center">{label}</span>
    </div>
  );
}

// ── Category Card ─────────────────────────────────────────────────────────────
function CategoryCard({ img, title, desc }: { img: string; title: string; desc: string }) {
  return (
    <div className="relative rounded-2xl overflow-hidden group cursor-pointer">
      <img src={img} alt={title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,6,24,0.85)] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <p className="text-white font-bold text-[16px] leading-tight mb-1">{title}</p>
        <p className="text-[#94a3b8] text-[12px] leading-[18px]">{desc}</p>
      </div>
    </div>
  );
}

// ── Service Section ───────────────────────────────────────────────────────────
function ServiceSection({
  img, title, label, points, reverse = false,
}: {
  img: string; title: string; label: string; points: string[]; reverse?: boolean;
}) {
  return (
    <div className={`flex flex-wrap gap-10 items-center ${reverse ? 'flex-row-reverse' : ''}`}>
      <div className="flex-1 min-w-[280px]">
        <div className="rounded-2xl overflow-hidden shadow-xl">
          <img src={img} alt={title} className="w-full h-72 object-cover" />
        </div>
      </div>
      <div className="flex-1 min-w-[280px] flex flex-col gap-4">
        <span className="inline-flex items-center gap-2">
          <span className="w-6 h-0.5 bg-[#1e9fd4] rounded-full" />
          <span className="text-[#1e9fd4] text-[11px] font-bold tracking-[1.1px] uppercase">{label}</span>
        </span>
        <h3 className="text-[#0f172a] font-extrabold text-[28px] leading-tight tracking-[-0.5px]">{title}</h3>
        <ul className="flex flex-col gap-2.5 mt-2">
          {points.map(p => (
            <li key={p} className="flex items-start gap-3">
              <span className="mt-1.5 w-2 h-2 rounded-full bg-[#1e9fd4] shrink-0" />
              <span className="text-[#475569] text-[14px] leading-[22px]">{p}</span>
            </li>
          ))}
        </ul>
        <Link href="/contact" className="mt-2 self-start bg-[#1e9fd4] text-white font-bold text-[13px] px-6 py-3 rounded-[14px] hover:bg-[#1a8fbe] transition-colors">
          Get a Quote →
        </Link>
      </div>
    </div>
  );
}

// ── Gallery Image ─────────────────────────────────────────────────────────────
function GalleryImg({ src, alt, tall = false }: { src: string; alt: string; tall?: boolean }) {
  return (
    <div className={`rounded-2xl overflow-hidden ${tall ? 'row-span-2' : ''}`}>
      <img src={src} alt={alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" style={{ minHeight: tall ? '440px' : '200px' }} />
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function EventsPage() {
  const categories = [
    { img: imgCorporate,  title: 'Corporate Events',      desc: 'Conferences, summits, product launches, award nights, and more.' },
    { img: imgEmployee,   title: 'Employee Engagement',   desc: 'Team-building retreats, appreciation days, cultural celebrations.' },
    { img: imgBrand,      title: 'Brand & Public Events', desc: 'Consumer activations, pop-ups, festivals, brand experiences.' },
    { img: imgExhibition, title: 'Event IPs',             desc: 'Owned intellectual properties that create recurring brand moments.' },
  ];

  return (
    <PageLayout>
      {/* ── Hero ── */}
      <section className="relative flex items-center overflow-hidden" style={{ minHeight: '520px' }}>
        <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1400&q=90&fit=crop" alt="" className="absolute inset-0 w-full h-full object-cover object-center" loading="eager" />
        <div className="absolute inset-0 bg-[rgba(10,6,24,0.72)]" />
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-8 py-20">
          <h1 className="font-extrabold text-white leading-[1.1] tracking-[-1.5px] mb-4" style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}>
            Events
          </h1>
          <p className="text-[#e2e8f0] text-[17px] font-semibold max-w-[600px] leading-7 mb-10">
            End-to-end event execution across India — corporate, brand, and public events that leave lasting impressions.
          </p>
          {/* Stats bar */}
          <div className="flex flex-wrap gap-y-6 divide-x divide-[rgba(255,255,255,0.15)]">
            <HeroStat value="500+" label="Events Executed" />
            <HeroStat value="200+" label="Cities Covered" />
            <HeroStat value="35+" label="Years Experience" />
            <HeroStat value="100%" label="End-to-End" />
          </div>
        </div>
      </section>

      {/* ── Event Categories ── */}
      <section className="bg-white py-20 px-8">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col items-center mb-12 text-center">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-0.5 rounded-full bg-[#1e9fd4]" />
              <p className="text-[#1e9fd4] text-[11px] font-bold tracking-[1.1px] uppercase">What We Offer</p>
            </div>
            <h2 className="text-[40px] font-extrabold text-[#0f172a] tracking-[-0.5px] leading-[1.3]">
              Event Categories
            </h2>
            <p className="text-[#64748b] text-[15px] mt-4 max-w-[560px] leading-7">
              From intimate corporate gatherings to large-scale public events, we handle every format with precision.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {categories.map(c => <CategoryCard key={c.title} {...c} />)}
          </div>
        </div>
      </section>

      {/* ── Service Sections ── */}
      <section className="bg-white py-20 px-8">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-20">
          <ServiceSection
            img={imgCorporate}
            label="Corporate Events"
            title="Flawless Corporate Event Execution"
            points={[
              'Product launches, conferences & summits',
              'Award nights & recognition ceremonies',
              'Annual general meetings & investor meets',
              'Dealer meets & channel partner events',
              'Town halls and leadership conclaves',
            ]}
          />
          <ServiceSection
            img={imgBrand}
            label="Brand & Public Events"
            title="High-Impact Brand Experiences"
            points={[
              'Consumer activations at malls, markets & haats',
              'Festival sponsorships and on-ground tie-ups',
              'Experiential pop-up events',
              'IPL & sports event activations',
              'Road shows and mobile brand vans',
            ]}
            reverse
          />
          <ServiceSection
            img={imgExhibition}
            label="Exhibition & Fabrication"
            title="World-Class Stall Design & Fabrication"
            points={[
              'Custom stall design and build',
              'Large format print and signage',
              'Modular exhibition systems',
              'LED installations and AV integration',
              'Pan-India logistics and dismantling',
            ]}
          />
          <ServiceSection
            img={imgEmployee}
            label="Event Production"
            title="Full-Scale Event Production Services"
            points={[
              'Sound, light and AV production',
              'Stage and set design',
              'Artist and entertainment bookings',
              'Guest management and F&B',
              'Live streaming and video coverage',
            ]}
            reverse
          />
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-gradient-to-r from-[#2b1f3a] to-[#142f4c] py-20 px-8">
        <div className="max-w-[896px] mx-auto text-center">
          <h2 className="text-[44px] font-extrabold text-white leading-tight tracking-[-0.5px] mb-4">
            Ready to Plan Your Next Event?
          </h2>
          <p className="text-[#e2e8f0] text-[16px] mb-8">
            Share your brief and our events team will get back within 24 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-[#1e9fd4] text-white font-bold text-[14px] px-8 py-[18px] rounded-[14px] hover:bg-[#1a8fbe] transition-colors">
              Request a Proposal
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
