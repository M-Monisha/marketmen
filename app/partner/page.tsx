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

const partnerCategories = [
  'Fabrication', 'Printing', 'Branding', 'Event Production', 'Sound/Light/AV',
  'Stage/Trussing', 'Promoters/Manpower', 'Anchors/Emcees', 'Artists/Performers',
  'Permissions/Local Coordination', 'Rural Activation Partner',
  'Mall/Society/Corporate Park Permissions', 'Tech/Event Software',
  'Photography/Videography', 'Logistics/Transport', 'Thermacoel/Fibre Statues Fabricators',
  'Gifting Manufacturers', 'Flea Market Organisers', 'Mela Organisers',
  'Van Campaign Organisers', 'Ganpati Festival/Mandal Organisers',
  'Retail Branding Fabricators', 'Auto Hood Branding Organisers',
  'Lift Branding Partners', 'Other',
];

interface FormState {
  name: string; website: string; contactPerson: string; mobile: string;
  email: string; city: string; areasYouCover: string;
  categories: string[];
  yearsExperience: string; hasGst: string; hasRateCard: string;
  bankName: string; bankLocation: string; accountNumber: string; ifscCode: string;
  pastClients: string; references: string; remarks: string;
  consent: string;
}

const inputClass = 'w-full bg-[#f8fafc] border border-[#e2e8f0] rounded-[14px] px-4 py-3.5 text-[14px] text-[#0f172a] placeholder-[#94a3b8] outline-none focus:border-[#1e9fd4] focus:ring-2 focus:ring-[rgba(30,159,212,0.15)] transition-all';
const labelClass = 'text-[#0f172a] text-[13px] font-semibold mb-1 block';
const sectionHeadingClass = 'text-[16px] font-bold text-[#0f172a] mb-4 pb-2 border-b border-[#e2e8f0]';

function UploadArea({ label }: { label: string }) {
  return (
    <div className="border-2 border-dashed border-[#e2e8f0] rounded-[14px] p-6 flex flex-col items-center gap-3 bg-[#f8fafc] hover:border-[#1e9fd4] transition-colors cursor-pointer">
      <div className="w-10 h-10 bg-[rgba(30,159,212,0.1)] rounded-full flex items-center justify-center">
        <svg className="w-5 h-5 text-[#1e9fd4]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
        </svg>
      </div>
      <p className="text-[#64748b] text-[13px] text-center font-medium">{label}</p>
      <span className="text-[#1e9fd4] text-[12px] font-semibold border border-[#1e9fd4] rounded-[10px] px-4 py-1.5 hover:bg-[rgba(30,159,212,0.07)]">
        Choose File
      </span>
    </div>
  );
}

export default function PartnerPage() {
  const [form, setForm] = useState<FormState>({
    name: '', website: '', contactPerson: '', mobile: '', email: '', city: '', areasYouCover: '',
    categories: [],
    yearsExperience: '', hasGst: '', hasRateCard: '',
    bankName: '', bankLocation: '', accountNumber: '', ifscCode: '',
    pastClients: '', references: '', remarks: '',
    consent: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const set = (key: keyof FormState, value: string) => setForm(prev => ({ ...prev, [key]: value }));

  const toggleCategory = (cat: string) => {
    setForm(prev => ({
      ...prev,
      categories: prev.categories.includes(cat)
        ? prev.categories.filter(c => c !== cat)
        : [...prev.categories, cat],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
              <span className="text-[#1e9fd4] text-[11px] font-semibold tracking-widest uppercase">Partner With MarketMen</span>
            </span>
            <h1 className="font-extrabold text-white leading-[1.1] tracking-[-1.5px] mb-4" style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}>
              Join MarketMen&apos;s <span className="text-[#1e9fd4]">Verified Partner Network</span>
            </h1>
            <p className="text-[#e2e8f0] text-[17px] font-medium leading-7 mb-8 max-w-[480px]">
              Become a trusted execution partner and grow your business with India&apos;s leading events company.
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
              <span className="text-[80px]">🤝</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Registration Form ── */}
      <section className="bg-[#f8fafc] py-20 px-8">
        <div className="max-w-[768px] mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-0.5 rounded-full bg-[#1e9fd4]" />
            <p className="text-[#1e9fd4] text-[11px] font-bold tracking-[1.1px] uppercase">Join Our Network</p>
          </div>
          <h2 className="text-[36px] font-extrabold text-[#0f172a] tracking-[-0.5px] leading-[1.3] mb-10">
            Partner Registration Form
          </h2>

          {submitted ? (
            <div className="bg-[#f3fae8] border border-[#8dc63f] rounded-2xl p-12 text-center">
              <div className="w-16 h-16 bg-[#8dc63f] rounded-full flex items-center justify-center mx-auto mb-5">
                <svg className="w-8 h-8 fill-white" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
              </div>
              <h3 className="text-[#0f172a] font-bold text-[24px] mb-3">Registration Submitted!</h3>
              <p className="text-[#64748b] text-[15px] leading-7">
                Thank you for registering as a MarketMen partner. Our team will review your details and get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">

              {/* 1. Basic Information */}
              <div className="bg-white border border-[#e2e8f0] rounded-2xl p-7">
                <p className={sectionHeadingClass}>1. Basic Information</p>
                <div className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div><label className={labelClass}>Name / Agency Name *</label><input required type="text" placeholder="Your name or agency" value={form.name} onChange={e => set('name', e.target.value)} className={inputClass} /></div>
                    <div><label className={labelClass}>Website Link</label><input type="url" placeholder="https://yoursite.com" value={form.website} onChange={e => set('website', e.target.value)} className={inputClass} /></div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div><label className={labelClass}>Contact Person *</label><input required type="text" placeholder="Full name" value={form.contactPerson} onChange={e => set('contactPerson', e.target.value)} className={inputClass} /></div>
                    <div><label className={labelClass}>Mobile / WhatsApp *</label><input required type="tel" placeholder="+91 00000 00000" value={form.mobile} onChange={e => set('mobile', e.target.value)} className={inputClass} /></div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div><label className={labelClass}>Email ID *</label><input required type="email" placeholder="you@email.com" value={form.email} onChange={e => set('email', e.target.value)} className={inputClass} /></div>
                    <div><label className={labelClass}>City / Base Location *</label><input required type="text" placeholder="City" value={form.city} onChange={e => set('city', e.target.value)} className={inputClass} /></div>
                  </div>
                  <div><label className={labelClass}>Areas You Cover *</label><textarea required rows={3} placeholder="List cities, states, or regions you can cover..." value={form.areasYouCover} onChange={e => set('areasYouCover', e.target.value)} className={`${inputClass} resize-none`} /></div>
                </div>
              </div>

              {/* 2. Partner Category */}
              <div className="bg-white border border-[#e2e8f0] rounded-2xl p-7">
                <p className={sectionHeadingClass}>2. Partner Category (Select all that apply)</p>
                <div className="flex flex-wrap gap-2">
                  {partnerCategories.map(cat => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => toggleCategory(cat)}
                      className={`text-[12px] font-semibold px-3.5 py-2 rounded-[10px] border transition-all ${form.categories.includes(cat) ? 'bg-[#1e9fd4] border-[#1e9fd4] text-white' : 'bg-[#f8fafc] border-[#e2e8f0] text-[#475569] hover:border-[#1e9fd4]'}`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Business Information */}
              <div className="bg-white border border-[#e2e8f0] rounded-2xl p-7">
                <p className={sectionHeadingClass}>3. Business Information</p>
                <div className="flex flex-col gap-4">
                  <div><label className={labelClass}>Years of Experience</label><input type="text" placeholder="e.g. 5 years" value={form.yearsExperience} onChange={e => set('yearsExperience', e.target.value)} className={inputClass} /></div>
                  <div>
                    <label className={labelClass}>GST Registered?</label>
                    <div className="flex gap-4 mt-1">
                      {['Yes', 'No'].map(opt => (
                        <label key={opt} className="flex items-center gap-2 cursor-pointer">
                          <input type="radio" name="gst" value={opt} checked={form.hasGst === opt} onChange={() => set('hasGst', opt)} className="accent-[#1e9fd4]" />
                          <span className="text-[14px] text-[#0f172a]">{opt}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className={labelClass}>Have a Rate Card?</label>
                    <div className="flex gap-4 mt-1">
                      {['Yes', 'No'].map(opt => (
                        <label key={opt} className="flex items-center gap-2 cursor-pointer">
                          <input type="radio" name="rateCard" value={opt} checked={form.hasRateCard === opt} onChange={() => set('hasRateCard', opt)} className="accent-[#1e9fd4]" />
                          <span className="text-[14px] text-[#0f172a]">{opt}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* 4. Document Uploads */}
              <div className="bg-white border border-[#e2e8f0] rounded-2xl p-7">
                <p className={sectionHeadingClass}>4. Document Uploads</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <UploadArea label="Upload Rate Card *" />
                  <UploadArea label="Upload Company Profile / Work Photos *" />
                </div>
              </div>

              {/* 5. Bank Details */}
              <div className="bg-white border border-[#e2e8f0] rounded-2xl p-7">
                <p className={sectionHeadingClass}>5. Bank Details</p>
                <div className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div><label className={labelClass}>Bank Name</label><input type="text" placeholder="Bank name" value={form.bankName} onChange={e => set('bankName', e.target.value)} className={inputClass} /></div>
                    <div><label className={labelClass}>Bank Location</label><input type="text" placeholder="City / Branch" value={form.bankLocation} onChange={e => set('bankLocation', e.target.value)} className={inputClass} /></div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div><label className={labelClass}>Account Number</label><input type="text" placeholder="Account number" value={form.accountNumber} onChange={e => set('accountNumber', e.target.value)} className={inputClass} /></div>
                    <div><label className={labelClass}>IFSC Code</label><input type="text" placeholder="IFSC code" value={form.ifscCode} onChange={e => set('ifscCode', e.target.value)} className={inputClass} /></div>
                  </div>
                  <UploadArea label="Upload Cancel Cheque" />
                </div>
              </div>

              {/* 6. Experience & References */}
              <div className="bg-white border border-[#e2e8f0] rounded-2xl p-7">
                <p className={sectionHeadingClass}>6. Experience &amp; References</p>
                <div className="flex flex-col gap-4">
                  <div><label className={labelClass}>Past Clients / Projects</label><textarea rows={3} placeholder="List notable clients or projects you have worked on..." value={form.pastClients} onChange={e => set('pastClients', e.target.value)} className={`${inputClass} resize-none`} /></div>
                  <div><label className={labelClass}>3–4 Agency References *</label><textarea required rows={3} placeholder="Provide 3–4 agency or client references with contact details..." value={form.references} onChange={e => set('references', e.target.value)} className={`${inputClass} resize-none`} /></div>
                  <div><label className={labelClass}>Remarks</label><textarea rows={3} placeholder="Any additional information you'd like to share..." value={form.remarks} onChange={e => set('remarks', e.target.value)} className={`${inputClass} resize-none`} /></div>
                </div>
              </div>

              {/* 7. Consent */}
              <div className="bg-white border border-[#e2e8f0] rounded-2xl p-7">
                <p className={sectionHeadingClass}>7. Consent</p>
                <div>
                  <label className={labelClass}>I consent to be contacted by MarketMen *</label>
                  <div className="flex gap-4 mt-1">
                    {['Yes', 'No'].map(opt => (
                      <label key={opt} className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="consent" value={opt} required checked={form.consent === opt} onChange={() => set('consent', opt)} className="accent-[#1e9fd4]" />
                        <span className="text-[14px] text-[#0f172a]">{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 items-center">
                <button type="submit" className="bg-[#1e9fd4] text-white font-bold text-[14px] px-10 py-4 rounded-[14px] hover:bg-[#1a8fbe] transition-colors shadow-[0_4px_24px_rgba(30,159,212,0.35)]">
                  Become a Partner →
                </button>
                <Link href="/contact" className="text-[#1e9fd4] font-semibold text-[14px] hover:underline">
                  Contact MarketMen
                </Link>
              </div>
            </form>
          )}
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
