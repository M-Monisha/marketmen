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

function PolicySection({ icon, title, children }: { icon: string; title: string; children: React.ReactNode }) {
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

export default function PrivacyPolicyPage() {
  return (
    <PageLayout>
      {/* ── Hero ── */}
      <section className="relative flex items-center overflow-hidden" style={{ minHeight: '480px' }}>
        <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1400&q=80&fit=crop" alt="" className="absolute inset-0 w-full h-full object-cover object-center" loading="eager" />
        <div className="absolute inset-0 bg-[rgba(10,6,24,0.75)]" />
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-8 py-20 flex flex-wrap items-center gap-12">
          <div className="flex-1 min-w-[280px]">
            <h1 className="font-extrabold text-white leading-[1.1] tracking-[-1.5px] mb-4" style={{ fontSize: 'clamp(32px, 4.5vw, 54px)' }}>
              Your Privacy <span className="text-[#1e9fd4]">Matters</span>
            </h1>
            <p className="text-[#e2e8f0] text-[17px] font-medium leading-7 mb-8 max-w-[480px]">
              MarketMen Consumer Connect &amp; Events Pvt. Ltd. respects your privacy and is committed to protecting your personal information.
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

      {/* ── Policy Content ── */}
      <section className="bg-white py-20 px-8">
        <div className="max-w-[768px] mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-0.5 rounded-full bg-[#1e9fd4]" />
            <p className="text-[#1e9fd4] text-[11px] font-bold tracking-[1.1px] uppercase">Our Commitment</p>
          </div>
          <h2 className="text-[36px] font-extrabold text-[#0f172a] tracking-[-0.5px] leading-[1.3] mb-10">
            Privacy Policy
          </h2>

          <PolicySection icon="📋" title="Information We May Collect">
            <p className="mb-3">When you interact with our website or reach out to us, we may collect the following:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Name</li>
              <li>Company name</li>
              <li>Phone number</li>
              <li>Email address</li>
              <li>Event requirements</li>
              <li>City / location information</li>
            </ul>
          </PolicySection>

          <PolicySection icon="🎯" title="How Information Is Used">
            <p className="mb-3">Information collected is used strictly for:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Responding to enquiries</li>
              <li>Event discussions and proposals</li>
              <li>Service communication</li>
              <li>Project coordination</li>
              <li>Internal analysis and service improvement</li>
            </ul>
          </PolicySection>

          <PolicySection icon="🔒" title="Data Sharing">
            <p>
              MarketMen does not sell personal information to third parties. Information shared internally is
              strictly for project and service delivery purposes only.
            </p>
          </PolicySection>

          <PolicySection icon="🍪" title="Cookies & Analytics">
            <p>
              The website may use cookies or analytics tools to improve user experience and understand
              visitor behaviour. No personal browsing data is sold or shared with third-party advertisers.
            </p>
          </PolicySection>

          <PolicySection icon="🔗" title="Third-Party Links">
            <p>
              External links shared on the website may lead to third-party sites. MarketMen is not responsible
              for the content, privacy practices, or accuracy of those external websites.
            </p>
          </PolicySection>

          <PolicySection icon="✅" title="Consent">
            <p>
              By using this website or submitting an enquiry, users agree to the terms outlined in this
              Privacy Policy. If you have concerns about how your data is used, please contact us directly.
            </p>
          </PolicySection>

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
