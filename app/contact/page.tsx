'use client';

import React, { useState } from 'react';
import PageLayout from '@/components/shared/PageLayout';

// ── Contact illustration ───────────────────────────────────────────────────────
const imgIllustration = "https://www.figma.com/api/mcp/asset/485f1f8d-cc67-4c3a-866e-d3ef8de73ff8";

// ── Contact Card ──────────────────────────────────────────────────────────────
function ContactCard({
  icon, title, lines, action, actionLabel, color,
}: {
  icon: React.ReactNode;
  title: string;
  lines: string[];
  action: string;
  actionLabel: string;
  color: string;
}) {
  return (
    <div className="bg-white border border-[#e2e8f0] rounded-2xl p-6 flex flex-col gap-4 hover:shadow-lg transition-shadow">
      <div className={`w-12 h-12 rounded-2xl ${color} flex items-center justify-center shrink-0`}>
        {icon}
      </div>
      <div>
        <p className="text-[#0f172a] font-bold text-[16px] mb-2">{title}</p>
        {lines.map(l => (
          <p key={l} className="text-[#64748b] text-[13px] leading-6">{l}</p>
        ))}
      </div>
      <a href={action} className="text-[#1e9fd4] font-bold text-[13px] hover:underline">
        {actionLabel} →
      </a>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    'w-full bg-[#f8fafc] border border-[#e2e8f0] rounded-[14px] px-4 py-3.5 text-[14px] text-[#0f172a] placeholder-[#94a3b8] outline-none focus:border-[#1e9fd4] focus:ring-2 focus:ring-[rgba(30,159,212,0.15)] transition-all';

  return (
    <PageLayout>
      {/* ── Hero ── */}
      <section className="relative flex items-center overflow-hidden" style={{ minHeight: '480px' }}>
        <img src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1400&q=80&fit=crop" alt="" className="absolute inset-0 w-full h-full object-cover object-center" loading="eager" />
        <div className="absolute inset-0 bg-[rgba(10,6,24,0.75)]" />

        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-8 py-20 flex flex-wrap items-center gap-12">
          {/* Text */}
          <div className="flex-1 min-w-[280px]">
            <h1 className="font-extrabold text-white leading-[1.1] tracking-[-1.5px] mb-4" style={{ fontSize: 'clamp(32px, 4.5vw, 54px)' }}>
              Have an Event in Mind?
            </h1>
            <p className="text-[#e2e8f0] text-[17px] font-medium leading-7 mb-8 max-w-[480px]">
              Tell us about your project and we&apos;ll get back with a customised proposal within 24 hours.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/919821103919"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25d366] text-white font-bold text-[14px] px-6 py-3.5 rounded-[14px] flex items-center gap-2.5 hover:bg-[#1fb85a] transition-colors"
              >
                <svg viewBox="0 0 32 32" className="w-5 h-5 fill-white shrink-0">
                  <path d="M16 2C8.268 2 2 8.268 2 16c0 2.47.675 4.783 1.85 6.766L2 30l7.447-1.822A13.94 13.94 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.6a11.56 11.56 0 01-5.9-1.617l-.423-.25-4.42 1.082 1.116-4.302-.276-.44A11.6 11.6 0 014.4 16C4.4 9.6 9.6 4.4 16 4.4S27.6 9.6 27.6 16 22.4 27.6 16 27.6zm6.362-8.668c-.348-.174-2.06-1.016-2.38-1.132-.318-.116-.55-.174-.78.174-.232.348-.898 1.132-1.102 1.364-.202.232-.404.26-.752.086-.348-.174-1.47-.542-2.8-1.728-1.034-.922-1.732-2.06-1.936-2.408-.202-.348-.022-.536.152-.71.156-.154.348-.404.522-.606.174-.202.232-.348.348-.58.116-.232.058-.434-.028-.608-.088-.174-.78-1.884-1.07-2.578-.28-.676-.566-.584-.78-.594l-.664-.012c-.232 0-.608.086-.926.434-.318.348-1.216 1.188-1.216 2.896s1.244 3.36 1.418 3.592c.174.232 2.45 3.738 5.94 5.24.83.358 1.478.572 1.982.732.832.264 1.59.226 2.188.138.668-.1 2.06-.842 2.35-1.656.29-.814.29-1.51.202-1.656-.086-.146-.318-.232-.666-.406z" />
                </svg>
                Chat on WhatsApp
              </a>
              <a href="#enquiry-form" className="border-2 border-[rgba(255,255,255,0.4)] text-white font-semibold text-[14px] px-6 py-3.5 rounded-[14px] hover:bg-[rgba(255,255,255,0.08)] transition-colors">
                Send Enquiry
              </a>
            </div>
          </div>
          {/* Illustration */}
          <div className="flex-1 min-w-[240px] flex justify-center">
            <img src={imgIllustration} alt="Contact us" className="max-w-[360px] w-full object-contain drop-shadow-2xl" />
          </div>
        </div>
      </section>

      {/* ── Reach Out ── */}
      <section className="bg-[#f8fafc] py-20 px-8">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col items-center mb-12 text-center">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-0.5 rounded-full bg-[#1e9fd4]" />
              <p className="text-[#1e9fd4] text-[11px] font-bold tracking-[1.1px] uppercase">Reach Out</p>
            </div>
            <h2 className="text-[40px] font-extrabold text-[#0f172a] tracking-[-0.5px] leading-[1.3]">
              Ways to Connect
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-[900px] mx-auto">
            <ContactCard
              icon={
                <svg className="w-6 h-6 text-white fill-white" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              }
              title="Call Us"
              lines={['+91 98211 03919', 'Mon–Sat, 9am–7pm IST']}
              action="tel:+919821103919"
              actionLabel="Call Now"
              color="bg-[#1e9fd4]"
            />
            <ContactCard
              icon={
                <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              }
              title="Email Us"
              lines={['connect@marketmen.in', 'We reply within 24 hours']}
              action="mailto:connect@marketmen.in"
              actionLabel="Send Email"
              color="bg-[#8dc63f]"
            />
            <ContactCard
              icon={
                <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              }
              title="Visit Us"
              lines={['274, B. Bharucha Road,', 'Grant Road (E), Mumbai – 400 007']}
              action="https://maps.google.com/?q=274+B.+Bharucha+Road+Mumbai"
              actionLabel="Get Directions"
              color="bg-[#2b1f3a]"
            />
          </div>
        </div>
      </section>

      {/* ── Enquiry Form ── */}
      <section className="bg-white py-20 px-8" id="enquiry-form">
        <div className="max-w-[720px] mx-auto">
          <div className="flex flex-col items-center mb-10 text-center">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-0.5 rounded-full bg-[#1e9fd4]" />
              <p className="text-[#1e9fd4] text-[11px] font-bold tracking-[1.1px] uppercase">Enquiry Form</p>
            </div>
            <h2 className="text-[40px] font-extrabold text-[#0f172a] tracking-[-0.5px] leading-[1.3]">
              Tell Us About Your Project
            </h2>
            <p className="text-[#64748b] text-[15px] mt-3 leading-7">
              Fill in the details below and our team will respond with a customised proposal within 24 hours.
            </p>
          </div>

          {submitted ? (
            <div className="bg-[#f3fae8] border border-[#8dc63f] rounded-2xl p-10 text-center">
              <div className="w-16 h-16 bg-[#8dc63f] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 fill-white" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
              </div>
              <h3 className="text-[#0f172a] font-bold text-[22px] mb-2">Message Sent!</h3>
              <p className="text-[#64748b] text-[14px]">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 bg-[#f8fafc] border border-[#e2e8f0] rounded-2xl p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-[#0f172a] text-[13px] font-semibold">Full Name *</label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    required
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    className={inputClass}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[#0f172a] text-[13px] font-semibold">Email Address *</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    required
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    className={inputClass}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[#0f172a] text-[13px] font-semibold">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+91 00000 00000"
                  value={form.phone}
                  onChange={e => setForm({ ...form, phone: e.target.value })}
                  className={inputClass}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[#0f172a] text-[13px] font-semibold">Message *</label>
                <textarea
                  placeholder="Tell us about your event — type, scale, location, timeline..."
                  required
                  rows={5}
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  className={`${inputClass} resize-none`}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#1e9fd4] text-white font-bold text-[14px] py-4 rounded-[14px] hover:bg-[#1a8fbe] transition-colors shadow-[0_4px_24px_rgba(30,159,212,0.35)]"
              >
                Send Message →
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="bg-gradient-to-r from-[#1e9fd4] to-[#142f4c] py-16 px-8">
        <div className="max-w-[896px] mx-auto text-center">
          <h2 className="text-[36px] font-extrabold text-white leading-tight tracking-[-0.5px] mb-3">
            Planning an Event? Let&apos;s Build It Right.
          </h2>
          <p className="text-[rgba(255,255,255,0.8)] text-[15px] mb-0">
            From brief to execution — one partner, complete accountability.
          </p>
        </div>
      </section>
    </PageLayout>
  );
}
