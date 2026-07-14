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

function TermsSection({ icon, title, children }: { icon: string; title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h3 className="text-[18px] font-bold text-[#0f172a] mb-4 flex items-center gap-3">
        <span className="text-[22px]">{icon}</span>
        {title}
      </h3>
      <div className="text-[#475569] text-[15px] leading-7">{children}</div>
    </div>
  );
}

export default function TermsPage() {
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
              <span className="text-[#1e9fd4] text-[11px] font-semibold tracking-widest uppercase">Terms &amp; Conditions</span>
            </span>
            <h1 className="font-extrabold text-white leading-[1.1] tracking-[-1.5px] mb-4" style={{ fontSize: 'clamp(32px, 4.5vw, 54px)' }}>
              Terms &amp; <span className="text-[#1e9fd4]">Conditions</span>
            </h1>
            <p className="text-[#e2e8f0] text-[17px] font-medium leading-7 mb-8 max-w-[480px]">
              By accessing or using this website, users agree to these terms. Please read them carefully.
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
            <div className="w-48 h-48 bg-[rgba(141,198,63,0.12)] border border-[rgba(141,198,63,0.3)] rounded-full flex items-center justify-center">
              <span className="text-[80px]">⚖️</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Terms Content ── */}
      <section className="bg-white py-20 px-8">
        <div className="max-w-[768px] mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-0.5 rounded-full bg-[#1e9fd4]" />
            <p className="text-[#1e9fd4] text-[11px] font-bold tracking-[1.1px] uppercase">Legal Terms</p>
          </div>
          <h2 className="text-[36px] font-extrabold text-[#0f172a] tracking-[-0.5px] leading-[1.3] mb-10">
            Terms &amp; Conditions
          </h2>

          <TermsSection icon="🌐" title="Website Usage">
            <p className="mb-3">Content on this website is for informational purposes only. Users may not:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Misuse website content for commercial gain without permission</li>
              <li>Copy or reproduce proprietary material without written permission</li>
              <li>Use the platform for any unlawful activities</li>
            </ul>
          </TermsSection>

          <TermsSection icon="©️" title="Intellectual Property">
            <p>
              All concepts, designs, event formats, creatives, visuals and other materials published on
              this website are the exclusive intellectual property of MarketMen Consumer Connect &amp;
              Events Pvt. Ltd. Reproduction without prior written consent is prohibited.
            </p>
          </TermsSection>

          <TermsSection icon="📝" title="Project Discussions">
            <p>
              Submission of an enquiry, filling a form, or entering into a discussion does not constitute
              a confirmed project, booking, or legally binding agreement between the parties unless a
              formal agreement is signed.
            </p>
          </TermsSection>

          <TermsSection icon="💼" title="Commercials">
            <p className="mb-3">
              Project costs vary significantly depending on a combination of factors, including but not limited to:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Scope and scale of the event</li>
              <li>City and venue requirements</li>
              <li>Production requirements</li>
              <li>Timelines and lead time</li>
              <li>Manpower and staffing</li>
              <li>Fabrication and materials</li>
              <li>Logistics and transport</li>
              <li>Execution complexity</li>
            </ul>
          </TermsSection>

          <TermsSection icon="🤝" title="Third-Party Execution">
            <p>
              MarketMen may collaborate with verified execution partners, vendors, and sub-contractors
              to fulfil project requirements. MarketMen maintains single-point accountability to the
              client for all work regardless of third-party involvement.
            </p>
          </TermsSection>

          <TermsSection icon="⚖️" title="Limitation of Liability">
            <p className="mb-3">
              MarketMen shall not be held liable for delays, cancellations, or modifications arising from:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Force majeure events (natural disasters, pandemics, etc.)</li>
              <li>Government restrictions or regulations</li>
              <li>Venue limitations or last-minute venue cancellations</li>
              <li>Vendor failures or supply chain disruptions</li>
              <li>Adverse weather conditions</li>
              <li>Any circumstances beyond operational control</li>
            </ul>
          </TermsSection>

          <div className="border-t border-[#e2e8f0] pt-6 mt-6">
            <p className="text-[#94a3b8] text-[12px] text-center">
              Last updated: July 2025 · MarketMen Consumer Connect &amp; Events Pvt. Ltd.
            </p>
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
