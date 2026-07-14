'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import PageLayout from '@/components/shared/PageLayout';

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" className="w-5 h-5 fill-white shrink-0">
      <path d="M16 2C8.268 2 2 8.268 2 16c0 2.47.675 4.783 1.85 6.766L2 30l7.447-1.822A13.94 13.94 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.6a11.56 11.56 0 01-5.9-1.617l-.423-.25-4.42 1.082 1.116-4.302-.276-.44A11.6 11.6 0 014.4 16C4.4 9.6 9.6 4.4 16 4.4S27.6 9.6 27.6 16 22.4 27.6 16 27.6zm6.362-8.668c-.348-.174-2.06-1.016-2.38-1.132-.318-.116-.55-.174-.78.174-.232.348-.898 1.132-1.102 1.364-.202.232-.404.26-.752.086-.348-.174-1.47-.542-2.8-1.728-1.034-.922-1.732-2.06-1.936-2.408-.202-.348-.022-.536.152-.71.156-.154.348-.404.522-.606.174-.202.232-.348.348-.58.116-.232.058-.434-.028-.608-.088-.174-.78-1.884-1.07-2.578-.28-.676-.566-.584-.78-.594l-.664-.012c-.232 0-.608.086-.926.434-.318.348-1.216 1.188-1.216 2.896s1.244 3.36 1.418 3.592c.174.232 2.45 3.738 5.94 5.24.83.358 1.478.572 1.982.732.832.264 1.59.226 2.188.138.668-.1 2.06-.842 2.35-1.656.29-.814.29-1.51.202-1.656-.086-.146-.318-.232-.666-.406z" />
    </svg>
  );
}

const faqs = [
  {
    q: "What types of events does MarketMen handle?",
    a: "MarketMen supports corporate events, employee engagement programmes, brand activations, rural marketing, exhibition fabrication, event IPs and multi-city campaigns."
  },
  {
    q: "Do you work across India?",
    a: "Yes. MarketMen supports projects across metros, Tier 2, Tier 3 cities and rural India across 20+ states."
  },
  {
    q: "Do you provide customised concepts?",
    a: "Yes. Most engagements are customised based on audience, brand objectives and budget."
  },
  {
    q: "Do you provide fixed packages?",
    a: "MarketMen primarily follows a consultative approach. Pricing is based on scope, not fixed packages."
  },
  {
    q: "Can MarketMen execute multi-city campaigns?",
    a: "Yes. We support both single-city and multi-location simultaneous execution."
  },
  {
    q: "Does MarketMen provide fabrication & production?",
    a: "Yes. We support exhibition stalls, stage setups, branded fabrication and AV production."
  },
  {
    q: "Do you provide manpower and artists?",
    a: "Yes. Through the MM Engagement Network, MarketMen sources trained promoters, anchors, artists and field staff."
  },
  {
    q: "How early should we connect for an event?",
    a: "Lead time depends on event complexity. Certain projects need 4–8 weeks; others can be mobilised faster."
  },
  {
    q: "Do you work only with corporates?",
    a: "No. MarketMen also supports brands, agencies, educational institutions and government bodies."
  },
  {
    q: "How can we discuss a requirement?",
    a: "You can connect with MarketMen through WhatsApp, email, or the contact form on our website."
  },
];

function AccordionItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <div className="border border-[#e2e8f0] rounded-2xl overflow-hidden mb-3">
      <button
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-[#f8fafc] transition-colors"
        onClick={onToggle}
        aria-expanded={open}
      >
        <span className="font-semibold text-[15px] text-[#0f172a] leading-snug">{q}</span>
        <span className={`shrink-0 w-6 h-6 rounded-full border-2 border-[#1e9fd4] flex items-center justify-center transition-transform duration-200 ${open ? 'rotate-45' : ''}`}>
          <svg className="w-3 h-3 text-[#1e9fd4]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>
      {open && (
        <div className="px-6 pb-5 bg-white">
          <p className="text-[#475569] text-[14px] leading-7">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <PageLayout>
      {/* ── Hero ── */}
      <section className="relative flex items-center overflow-hidden bg-gradient-to-br from-[#2b1f3a] via-[#1a1832] to-[#142f4c]" style={{ minHeight: '480px' }}>
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-[rgba(30,159,212,0.08)] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[rgba(141,198,63,0.06)] rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-8 py-20">
          <div className="max-w-[640px]">
            <span className="inline-flex items-center gap-2 bg-[rgba(30,159,212,0.15)] border border-[rgba(30,159,212,0.4)] rounded-full px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1e9fd4]" />
              <span className="text-[#1e9fd4] text-[11px] font-semibold tracking-widest uppercase">FAQs</span>
            </span>
            <h1 className="font-extrabold text-white leading-[1.1] tracking-[-1.5px] mb-4" style={{ fontSize: 'clamp(32px, 4.5vw, 54px)' }}>
              Frequently Asked <span className="text-[#1e9fd4]">Questions</span>
            </h1>
            <p className="text-[#e2e8f0] text-[17px] font-medium leading-7 mb-8 max-w-[480px]">
              Find answers to the most common questions about MarketMen&apos;s services, process, and coverage.
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
        </div>
      </section>

      {/* ── FAQ Accordion ── */}
      <section className="bg-[#f8fafc] py-20 px-8">
        <div className="max-w-[768px] mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-0.5 rounded-full bg-[#1e9fd4]" />
            <p className="text-[#1e9fd4] text-[11px] font-bold tracking-[1.1px] uppercase">Common Questions</p>
          </div>
          <h2 className="text-[36px] font-extrabold text-[#0f172a] tracking-[-0.5px] leading-[1.3] mb-10">
            All FAQs
          </h2>
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              q={faq.q}
              a={faq.a}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </section>

      {/* ── Still Have Questions ── */}
      <section className="bg-white py-16 px-8">
        <div className="max-w-[600px] mx-auto text-center">
          <h2 className="text-[32px] font-extrabold text-[#0f172a] tracking-[-0.5px] leading-[1.3] mb-4">
            Still Have Questions?
          </h2>
          <p className="text-[#64748b] text-[15px] leading-7 mb-8">
            Our team is happy to answer any specific questions you have about your project or event requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-[#1e9fd4] text-white font-bold text-[14px] px-8 py-4 rounded-[14px] hover:bg-[#1a8fbe] transition-colors">
              Connect With Us
            </Link>
            <a href="https://wa.me/919821103919" target="_blank" rel="noopener noreferrer"
              className="bg-[#25d366] text-white font-bold text-[14px] px-8 py-4 rounded-[14px] flex items-center gap-2.5 hover:bg-[#1fb85a] transition-colors">
              <WhatsAppIcon />WhatsApp
            </a>
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
