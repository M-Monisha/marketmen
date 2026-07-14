'use client';

import React from 'react';
import Link from 'next/link';
import PageLayout from '@/components/shared/PageLayout';

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" className="w-5 h-5 fill-white shrink-0">
      <path d="M16 2C8.268 2 2 8.268 2 16c0 2.47.675 4.783 1.85 6.766L2 30l7.447-1.822A13.94 13.94 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.6a11.56 11.56 0 01-5.9-1.617l-.423-.25-4.42 1.082 1.116-4.302-.276-.44A11.6 11.6 0 014.4 16C4.4 9.6 9.6 4.4 16 4.4S27.6 9.6 27.6 16 22.4 27.6 16 27.6zm6.362-8.668c-.348-.174-2.06-1.016-2.38-1.132-.318-.116-.55-.174-.78.174-.232.348-.898 1.132-1.102 1.364-.202.232-.404.26-.752.086-.348-.174-1.47-.542-2.8-1.728-1.034-.922-1.732-2.06-1.936-2.408-.202-.348-.022-.536.152-.71.156-.154.348-.404.522-.606.174-.202.232-.348.348-.58.116-.232.058-.434-.028-.608-.088-.174-.78-1.884-1.07-2.578-.28-.676-.566-.584-.78-.594l-.664-.012c-.232 0-.608.086-.926.434-.318.348-1.216 1.188-1.216 2.896s1.244 3.36 1.418 3.592c.174.232 2.45 3.738 5.94 5.24.83.358 1.478.572 1.982.732.832.264 1.59.226 2.188.138.668-.1 2.06-.842 2.35-1.656.29-.814.29-1.51.202-1.656-.086-.146-.318-.232-.666-.406z" />
    </svg>
  );
}

const majorCities = [
  { emoji: '🏙️', name: 'Mumbai' },
  { emoji: '🏛️', name: 'Pune' },
  { emoji: '🏛️', name: 'Delhi NCR' },
  { emoji: '🌿', name: 'Bengaluru' },
  { emoji: '🕌', name: 'Hyderabad' },
  { emoji: '🎭', name: 'Chennai' },
  { emoji: '🏗️', name: 'Ahmedabad' },
  { emoji: '🌉', name: 'Kolkata' },
  { emoji: '🏰', name: 'Jaipur' },
  { emoji: '🌳', name: 'Chandigarh' },
];

const additionalCities = [
  'Nagpur', 'Indore', 'Lucknow', 'Surat', 'Coimbatore',
  'Kochi', 'Bhubaneswar', 'Guwahati', 'Patna', 'Ranchi', 'Goa',
];

const services = [
  'Employee Engagement Programs',
  'Annual Days & Conferences',
  'Exhibition Stall Design & Fabrication',
  'Mall Activations & Promotions',
  'Society & Community Activations',
  'Event IPs & Public Engagements',
  'Rural & Outreach Campaigns',
  'Tech-enabled Experiences',
  'Production & Fabrication Support',
  'Multi-City Execution Support',
];

const supports = [
  { icon: '🗺️', title: 'Pan-India rollout planning' },
  { icon: '🎯', title: 'Centralised coordination' },
  { icon: '👥', title: 'Vendor & manpower deployment' },
  { icon: '📊', title: 'Reporting & supervision' },
  { icon: '🏙️', title: 'City-wise customization' },
];

export default function CitiesPage() {
  return (
    <PageLayout>
      {/* ── Hero ── */}
      <section className="relative flex items-center overflow-hidden bg-gradient-to-br from-[#2b1f3a] via-[#1a1832] to-[#142f4c]" style={{ minHeight: '480px' }}>
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-[rgba(30,159,212,0.08)] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[rgba(141,198,63,0.06)] rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-8 py-20 flex flex-wrap items-center gap-12">
          <div className="flex-1 min-w-[280px]">
            <span className="inline-flex items-center gap-2 bg-[rgba(30,159,212,0.15)] border border-[rgba(30,159,212,0.4)] rounded-full px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1e9fd4]" />
              <span className="text-[#1e9fd4] text-[11px] font-semibold tracking-widest uppercase">Cities &amp; Coverage</span>
            </span>
            <h1 className="font-extrabold text-white leading-[1.1] tracking-[-1.5px] mb-4" style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}>
              Delivering Events &amp; Experiences <span className="text-[#1e9fd4]">Across India</span>
            </h1>
            <p className="text-[#e2e8f0] text-[17px] font-medium leading-7 mb-8 max-w-[480px]">
              A pan-India presence with active operations across metros, Tier 2 &amp; Tier 3 cities and rural markets.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://wa.me/919821103919" target="_blank" rel="noopener noreferrer"
                className="bg-[#25d366] text-white font-bold text-[14px] px-6 py-3.5 rounded-[14px] flex items-center gap-2.5 hover:bg-[#1fb85a] transition-colors">
                <WhatsAppIcon />Chat on WhatsApp
              </a>
              <Link href="/contact" className="border-2 border-[rgba(255,255,255,0.4)] text-white font-semibold text-[14px] px-6 py-3.5 rounded-[14px] hover:bg-[rgba(255,255,255,0.08)] transition-colors">
                Connect With Us
              </Link>
            </div>
          </div>
          <div className="flex-1 min-w-[200px] flex justify-center">
            <div className="w-48 h-48 bg-[rgba(30,159,212,0.12)] border border-[rgba(30,159,212,0.25)] rounded-full flex items-center justify-center">
              <span className="text-[80px]">🗺️</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Major Cities ── */}
      <section className="bg-white py-20 px-8">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-0.5 rounded-full bg-[#1e9fd4]" />
            <p className="text-[#1e9fd4] text-[11px] font-bold tracking-[1.1px] uppercase">Where We Work</p>
          </div>
          <h2 className="text-[36px] font-extrabold text-[#0f172a] tracking-[-0.5px] leading-[1.3] mb-10">
            Major Operational Cities
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-14">
            {majorCities.map(city => (
              <div key={city.name} className="bg-[#f8fafc] border border-[#e2e8f0] rounded-2xl p-5 flex flex-col items-center gap-3 hover:shadow-md hover:border-[#1e9fd4] transition-all cursor-default">
                <span className="text-[36px]">{city.emoji}</span>
                <span className="font-bold text-[14px] text-[#0f172a] text-center">{city.name}</span>
              </div>
            ))}
          </div>

          {/* Additional Cities */}
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-0.5 rounded-full bg-[#8dc63f]" />
            <p className="text-[#8dc63f] text-[11px] font-bold tracking-[1.1px] uppercase">Additional Cities</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {additionalCities.map(city => (
              <span key={city} className="bg-[#f0fdf4] border border-[#86efac] text-[#166534] text-[13px] font-semibold px-4 py-2 rounded-full">
                {city}
              </span>
            ))}
            <span className="bg-[#fef9c3] border border-[#fde047] text-[#854d0e] text-[13px] font-semibold px-4 py-2 rounded-full">
              ✦ And more based on project scope
            </span>
          </div>
        </div>
      </section>

      {/* ── Services Across Cities ── */}
      <section className="bg-[#f8fafc] py-20 px-8">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-0.5 rounded-full bg-[#1e9fd4]" />
            <p className="text-[#1e9fd4] text-[11px] font-bold tracking-[1.1px] uppercase">Our Capabilities</p>
          </div>
          <h2 className="text-[36px] font-extrabold text-[#0f172a] tracking-[-0.5px] leading-[1.3] mb-10">
            Services Available Across Cities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {services.map(service => (
              <div key={service} className="flex items-center gap-3 bg-white border border-[#e2e8f0] rounded-2xl px-5 py-4">
                <div className="w-5 h-5 rounded-full bg-[#1e9fd4] flex items-center justify-center shrink-0">
                  <svg className="w-3 h-3 fill-white" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                </div>
                <span className="text-[#0f172a] text-[14px] font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MarketMen Supports ── */}
      <section className="bg-gradient-to-br from-[#2b1f3a] to-[#142f4c] py-20 px-8">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-0.5 rounded-full bg-[#8dc63f]" />
            <p className="text-[#8dc63f] text-[11px] font-bold tracking-[1.1px] uppercase">How We Help</p>
          </div>
          <h2 className="text-[36px] font-extrabold text-white tracking-[-0.5px] leading-[1.3] mb-10">
            MarketMen Supports
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {supports.map(s => (
              <div key={s.title} className="bg-[rgba(255,255,255,0.07)] border border-[rgba(255,255,255,0.1)] rounded-2xl p-6 flex flex-col gap-3 hover:bg-[rgba(255,255,255,0.1)] transition-colors">
                <span className="text-[32px]">{s.icon}</span>
                <p className="text-white font-semibold text-[14px] leading-snug">{s.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-gradient-to-r from-[#1e9fd4] to-[#142f4c] py-16 px-8">
        <div className="max-w-[896px] mx-auto text-center">
          <h2 className="text-[36px] font-extrabold text-white leading-tight tracking-[-0.5px] mb-3">
            Planning an Event? Let&apos;s Build It Right.
          </h2>
          <p className="text-[rgba(255,255,255,0.8)] text-[15px] mb-8">
            From brief to execution — one partner, complete accountability.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://wa.me/919821103919" target="_blank" rel="noopener noreferrer"
              className="bg-[#25d366] text-white font-bold text-[14px] px-8 py-4 rounded-[14px] flex items-center gap-2.5 hover:bg-[#1fb85a] transition-colors">
              <WhatsAppIcon />Chat on WhatsApp
            </a>
            <Link href="/contact" className="border-2 border-[rgba(255,255,255,0.5)] text-white font-semibold text-[14px] px-8 py-4 rounded-[14px] hover:bg-[rgba(255,255,255,0.08)] transition-colors">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
