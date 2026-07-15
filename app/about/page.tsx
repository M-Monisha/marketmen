'use client';

import React from 'react';
import Link from 'next/link';
import PageLayout from '@/components/shared/PageLayout';

// ── Images ────────────────────────────────────────────────────────────────────
const imgEvent1 = "https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&q=80&fit=crop";
const imgEvent2 = "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80&fit=crop";
const imgEvent3 = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&q=80&fit=crop";
const imgEvent4 = "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400&q=80&fit=crop";

// ── WhatsApp SVG ───────────────────────────────────────────────────────────────
function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" className="w-5 h-5 fill-white shrink-0">
      <path d="M16 2C8.268 2 2 8.268 2 16c0 2.47.675 4.783 1.85 6.766L2 30l7.447-1.822A13.94 13.94 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.6a11.56 11.56 0 01-5.9-1.617l-.423-.25-4.42 1.082 1.116-4.302-.276-.44A11.6 11.6 0 014.4 16C4.4 9.6 9.6 4.4 16 4.4S27.6 9.6 27.6 16 22.4 27.6 16 27.6zm6.362-8.668c-.348-.174-2.06-1.016-2.38-1.132-.318-.116-.55-.174-.78.174-.232.348-.898 1.132-1.102 1.364-.202.232-.404.26-.752.086-.348-.174-1.47-.542-2.8-1.728-1.034-.922-1.732-2.06-1.936-2.408-.202-.348-.022-.536.152-.71.156-.154.348-.404.522-.606.174-.202.232-.348.348-.58.116-.232.058-.434-.028-.608-.088-.174-.78-1.884-1.07-2.578-.28-.676-.566-.584-.78-.594l-.664-.012c-.232 0-.608.086-.926.434-.318.348-1.216 1.188-1.216 2.896s1.244 3.36 1.418 3.592c.174.232 2.45 3.738 5.94 5.24.83.358 1.478.572 1.982.732.832.264 1.59.226 2.188.138.668-.1 2.06-.842 2.35-1.656.29-.814.29-1.51.202-1.656-.086-.146-.318-.232-.666-.406z" />
    </svg>
  );
}

// ── Section Label ─────────────────────────────────────────────────────────────
function SectionLabel({ text, color = 'text-[#1e9fd4]', lineColor = 'bg-[#1e9fd4]' }: { text: string; color?: string; lineColor?: string }) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <div className={`w-6 h-0.5 rounded-full ${lineColor}`} />
      <p className={`${color} text-[11px] font-bold tracking-[1.1px] uppercase`}>{text}</p>
    </div>
  );
}

// ── Feature Card ──────────────────────────────────────────────────────────────
function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-white border border-[#e2e8f0] rounded-2xl p-4 flex flex-col gap-1.5 hover:shadow-md transition-shadow">
      <div className="w-1 h-6 bg-[#1e9fd4] rounded-full" />
      <p className="text-[#0f172a] font-bold text-[13px]">{title}</p>
      <p className="text-[#64748b] text-[11px] leading-5">{desc}</p>
    </div>
  );
}

// ── Core Value Card ────────────────────────────────────────────────────────────
function CoreValueCard({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-2xl p-4 flex flex-col gap-1.5 hover:shadow-md transition-shadow">
      <span className="text-[#1e9fd4] text-[11px] font-extrabold">{num}</span>
      <p className="text-[#0f172a] font-bold text-[12px]">{title}</p>
      <p className="text-[#64748b] text-[12px] leading-5">{desc}</p>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function AboutPage() {
  const whyCards = [
    { title: 'Creative & Professional', desc: 'Concepts that combine creative thinking with flawless professional execution.' },
    { title: 'Pan-India Network', desc: 'Operations across 200+ cities, metros, Tier 2, Tier 3 cities and rural India.' },
    { title: 'Scalable Events', desc: 'From intimate 50-person gatherings to multi-city campaigns touching millions.' },
    { title: 'End-to-End Execution', desc: 'Complete ownership from concept and production to on-ground delivery and reporting.' },
    { title: '100% Transparent', desc: 'Complete visibility at every step — no surprises, no hidden costs, clear accountability.' },
    { title: '37 Years of Trust', desc: 'Three and a half decades of delivering results for India\'s most trusted brands.' },
  ];

  const coreValues = [
    { num: '01', title: 'Excellence in Execution', desc: 'Every event, every time — delivering to the highest standard of quality.' },
    { num: '02', title: 'People-First Culture', desc: 'Our team and partners are the backbone of everything we build.' },
    { num: '03', title: 'Pan-India Reach', desc: 'Taking brands to every corner of India with local knowledge and national scale.' },
    { num: '04', title: 'Client-Centric Approach', desc: 'Your objectives shape our strategy. Your success is our success.' },
    { num: '05', title: 'Community Impact', desc: 'Events that create value not just for brands but for communities.' },
    { num: '06', title: '100% Accountability', desc: 'Single-point responsibility from brief to final execution report.' },
  ];

  const timeline = [
    { year: '1987', title: 'Founded', desc: 'MarketMen established in Mumbai as a pure-play events and consumer connect company.' },
    { year: '2000', title: 'Pan-India Expansion', desc: 'Expanded operations across Maharashtra, Gujarat and into major cities nationwide.' },
    { year: '2010', title: '500 Events Milestone', desc: 'Reached a landmark 500 successful events with operations in 200+ cities.' },
    { year: '2018', title: 'Event IPs Launched', desc: 'Launched proprietary event IP formats and expanded into digital-integrated activations.' },
    { year: '2024', title: 'Digital-First Approach', desc: 'Embraced tech-enabled event experiences and expanded presence to 500+ districts.' },
  ];

  return (
    <PageLayout>
      {/* ── Hero ── */}
      <section className="relative flex items-center overflow-hidden" style={{ minHeight: '560px' }}>
        <img src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=1400&q=90&fit=crop" alt="" className="absolute inset-0 w-full h-full object-cover object-center" loading="eager" />
        <div className="absolute inset-0 bg-[rgba(10,6,24,0.72)]" />
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-8 py-20 flex flex-wrap items-center gap-12">
          {/* Text */}
          <div className="flex-1 min-w-[280px]">
            <h1 className="font-extrabold text-white leading-[1.1] tracking-[-1.5px] mb-4" style={{ fontSize: 'clamp(32px, 4.5vw, 56px)' }}>
              Build Experiences<br />that <span className="text-[#1e9fd4]">matter</span>
            </h1>
            <p className="text-[#e2e8f0] text-[17px] font-medium leading-7 mb-8 max-w-[480px]">
              MarketMen is India&apos;s trusted pure-play events company — delivering corporate events, brand activations, and experiential campaigns across the country since 1987.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://wa.me/919821103919" target="_blank" rel="noopener noreferrer"
                className="bg-[#25d366] text-white font-bold text-[14px] px-6 py-3.5 rounded-[14px] flex items-center gap-2.5 hover:bg-[#1fb85a] transition-colors">
                <WhatsAppIcon />Chat on WhatsApp
              </a>
              <Link href="/events" className="border-2 border-[rgba(255,255,255,0.4)] text-white font-semibold text-[14px] px-6 py-3.5 rounded-[14px] hover:bg-[rgba(255,255,255,0.08)] transition-colors">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Who We Are ── */}
      <section className="bg-white py-20 px-8">
        <div className="max-w-[1280px] mx-auto">
          <div className="max-w-[760px] mx-auto text-center mb-12">
            <SectionLabel text="Our Story" />
            <h2 className="text-[40px] font-extrabold text-[#0f172a] tracking-[-0.5px] leading-[1.3] mb-6">
              Who We Are
            </h2>
            <p className="text-[#475569] text-[16px] leading-7 mb-4">
              MarketMen is a pure-play events company founded in 1987, headquartered in Mumbai. For over 37 years, we have been the trusted execution partner for India&apos;s leading corporations, brands, and institutions — delivering everything from corporate conferences and employee engagement programmes to large-scale brand activations and rural marketing campaigns.
            </p>
            <p className="text-[#475569] text-[16px] leading-7">
              Our strength lies in our pan-India network, deep operational expertise, and a people-first approach that puts client outcomes at the centre of everything we do. We own every engagement from brief to final report — no passing the buck, no surprises, just results.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14">
            {[
              { value: '37+', label: 'Years of Experience', color: 'text-[#1e9fd4]' },
              { value: '500+', label: 'Events Delivered', color: 'text-[#8dc63f]' },
              { value: '200+', label: 'Cities Covered', color: 'text-[#1e9fd4]' },
              { value: '1000+', label: 'Clients Served', color: 'text-[#8dc63f]' },
            ].map(s => (
              <div key={s.label} className="bg-[#f8fafc] border border-[#e2e8f0] rounded-2xl p-6 text-center">
                <span className={`font-extrabold text-[44px] leading-none ${s.color} block mb-2`}>{s.value}</span>
                <span className="text-[#64748b] text-[13px] font-medium">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="bg-[#f8fafc] py-20 px-8">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-14">
            <SectionLabel text="Our Journey" />
            <h2 className="text-[40px] font-extrabold text-[#0f172a] tracking-[-0.5px] leading-[1.3]">
              37 Years of Creating Impact
            </h2>
          </div>
          <div className="max-w-[720px] mx-auto flex flex-col gap-0">
            {timeline.map((item, i) => (
              <div key={item.year} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[#1e9fd4] flex items-center justify-center shrink-0 shadow-[0_0_0_4px_rgba(30,159,212,0.15)]">
                    <span className="text-white text-[11px] font-bold">{item.year.slice(2)}</span>
                  </div>
                  {i < timeline.length - 1 && <div className="w-0.5 bg-[#e2e8f0] flex-1 mt-2 mb-0 h-10" />}
                </div>
                <div className="pb-10 flex-1">
                  <p className="text-[#1e9fd4] font-bold text-[13px] uppercase tracking-wider mb-1">{item.year} · {item.title}</p>
                  <p className="text-[#475569] text-[14px] leading-6">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why MarketMen ── */}
      <section className="bg-white py-20 px-8">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col items-center mb-12 text-center">
            <SectionLabel text="Why Choose Us" />
            <h2 className="text-[40px] font-extrabold text-[#0f172a] tracking-[-0.5px] leading-[1.3]">
              Why MarketMen
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyCards.map(c => <FeatureCard key={c.title} {...c} />)}
          </div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="bg-gradient-to-br from-[#2b1f3a] to-[#142f4c] py-20 px-8">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col items-center mb-12 text-center">
            <SectionLabel text="What We Stand For" color="text-[#8dc63f]" lineColor="bg-[#8dc63f]" />
            <h2 className="text-[40px] font-extrabold text-white tracking-[-0.5px] leading-[1.3]">
              Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {coreValues.map(v => <CoreValueCard key={v.title} {...v} />)}
          </div>
        </div>
      </section>

      {/* ── Quote ── */}
      <section className="bg-[#f8fafc] py-16 px-8">
        <div className="max-w-[768px] mx-auto text-center">
          <p className="text-[26px] font-bold text-[#0f172a] leading-[1.4] mb-5 italic">
            &ldquo;Every event is an opportunity to create something unforgettable&rdquo;
          </p>
          <p className="text-[#1e9fd4] font-semibold text-[14px] tracking-wider uppercase">— The MarketMen Team</p>
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
            <a
              href="https://wa.me/919821103919"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25d366] text-white font-bold text-[14px] px-8 py-4 rounded-[14px] flex items-center gap-2.5 hover:bg-[#1fb85a] transition-colors"
            >
              <WhatsAppIcon />
              Chat on WhatsApp
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
