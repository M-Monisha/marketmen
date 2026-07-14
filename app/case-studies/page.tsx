'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import PageLayout from '@/components/shared/PageLayout';

// ── Figma image assets ────────────────────────────────────────────────────────
const imgStage       = "https://www.figma.com/api/mcp/asset/e6b3752f-cced-4216-ad9c-83e3ca8756dd";
const imgDistRide    = "https://www.figma.com/api/mcp/asset/b63e4243-f490-44d8-a750-1eb2b6d2fe37";
const imgDrReddy     = "https://www.figma.com/api/mcp/asset/33c8e80b-0de1-4eec-9587-d49ee258be9d";
const imgLubrizol    = "https://www.figma.com/api/mcp/asset/3fb66730-b2e9-4878-9eaf-8780b3986716";
const img24KManor    = "https://www.figma.com/api/mcp/asset/0e1de931-d914-45dd-9bc3-e413e197965a";
const imgParivartan  = "https://www.figma.com/api/mcp/asset/0b0ebcd0-371e-4f03-b022-0b4d48bb0d5b";
const imgEisai       = "https://www.figma.com/api/mcp/asset/3c09e97a-2461-4936-8c07-0347989e6732";
const imgColorsTV    = "https://www.figma.com/api/mcp/asset/d6e19939-676a-4ade-932e-c1c141290d05";
const imgMotherhood  = "https://www.figma.com/api/mcp/asset/4b6bdf94-2a75-48e9-aa46-3eea5082c17b";
const imgChampions   = "https://www.figma.com/api/mcp/asset/8ea4c003-0b3d-4623-ae96-2c2136ab7737";

// ── Filter categories ─────────────────────────────────────────────────────────
const FILTERS = ['All', 'Events', 'Employee Engagement', 'Event IPs', 'Brand Activation', 'Rural Marketing'];

// ── Case study data ───────────────────────────────────────────────────────────
type CaseStudy = {
  img: string;
  brand: string;
  title: string;
  category: string;
  location: string;
  reach: string;
  cities: string;
  roi: string;
};

const caseStudies: CaseStudy[] = [
  { img: imgDrReddy,    brand: "Dr. Reddy's",   title: "Dr. Reddy's Annual Conclave",      category: 'Events',              location: 'Hyderabad',    reach: '2,000+',   cities: '1',    roi: '4.5x' },
  { img: imgLubrizol,   brand: 'Lubrizol',       title: 'Lubrizol Dealer Meet',             category: 'Events',              location: 'Pan India',    reach: '5,000+',   cities: '18',   roi: '3.8x' },
  { img: img24KManor,   brand: '24K Manor',      title: '24K Manor Luxury Event',           category: 'Event IPs',           location: 'Mumbai',       reach: '1,200+',   cities: '1',    roi: '5.2x' },
  { img: imgParivartan, brand: 'Government',     title: 'Parivartan Rural Initiative',      category: 'Rural Marketing',     location: '20+ States',   reach: '3Cr+',     cities: '500+', roi: '6.1x' },
  { img: imgEisai,      brand: 'Eisai',          title: 'Eisai Employee Engagement Day',    category: 'Employee Engagement', location: 'Mumbai',       reach: '800+',     cities: '3',    roi: '4.0x' },
  { img: imgColorsTV,   brand: 'Colors TV',      title: 'Colors TV Brand Activation',       category: 'Brand Activation',    location: 'Pan India',    reach: '8.5 Lakh', cities: '25',   roi: '4.7x' },
  { img: imgMotherhood, brand: 'Motherhood',     title: 'Motherhood Hospitals CSR Drive',   category: 'Brand Activation',    location: 'Bangalore',    reach: '15,000+',  cities: '5',    roi: '3.5x' },
  { img: imgChampions,  brand: 'Champions',      title: 'Champions League IP Event',        category: 'Event IPs',           location: 'Delhi',        reach: '25,000+',  cities: '4',    roi: '5.8x' },
  { img: imgDrReddy,    brand: 'Pharma Brand',   title: 'Medical Conference & CME',         category: 'Events',              location: 'Chennai',      reach: '3,000+',   cities: '1',    roi: '4.2x' },
];

// ── Case Study Card ───────────────────────────────────────────────────────────
function CaseStudyCard({ cs }: { cs: CaseStudy }) {
  return (
    <div className="bg-white border border-[#e2e8f0] rounded-2xl overflow-hidden flex flex-col transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div className="h-48 overflow-hidden relative">
        <img src={cs.img} alt={cs.title} className="w-full h-full object-cover" />
        <span className="absolute top-3 left-3 bg-[#1e9fd4] text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
          {cs.category}
        </span>
      </div>
      <div className="p-5 flex flex-col gap-2.5 flex-1">
        <p className="text-[#1e9fd4] text-[11px] font-bold uppercase tracking-wider">{cs.brand}</p>
        <p className="text-[#0f172a] font-bold text-[14px] leading-[21px]">{cs.title}</p>
        <p className="text-[#64748b] text-[12px]">{cs.location}</p>
        <div className="grid grid-cols-3 gap-2 mt-1">
          {[
            { val: cs.reach, lbl: 'Reached' },
            { val: cs.cities, lbl: 'Cities' },
            { val: cs.roi, lbl: 'ROI', green: true },
          ].map(s => (
            <div key={s.lbl} className="bg-[#f8fafc] rounded-[12px] p-2 flex flex-col items-center">
              <span className={`font-extrabold text-[13px] ${s.green ? 'text-[#8dc63f]' : 'text-[#1e9fd4]'}`}>{s.val}</span>
              <span className="text-[#64748b] text-[10px]">{s.lbl}</span>
            </div>
          ))}
        </div>
        <button className="w-full border border-[#1e9fd4] rounded-[14px] h-9 text-[#1e9fd4] font-bold text-[12px] hover:bg-[#ebf7fc] transition-colors mt-auto">
          View Case Study →
        </button>
      </div>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function CaseStudiesPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [page, setPage] = useState(1);
  const PER_PAGE = 9;

  const filtered = activeFilter === 'All'
    ? caseStudies
    : caseStudies.filter(c => c.category === activeFilter);

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const handleFilter = (f: string) => {
    setActiveFilter(f);
    setPage(1);
  };

  return (
    <PageLayout>
      {/* ── Hero ── */}
      <section className="relative flex items-center overflow-hidden" style={{ minHeight: '420px' }}>
        <img src={imgStage} alt="Case Studies" className="absolute inset-0 w-full h-full object-cover object-center" loading="eager" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(248,250,252,0.92)] to-[rgba(248,250,252,0.75)]" />
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-8 py-20">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-0.5 rounded-full bg-[#1e9fd4]" />
            <p className="text-[#1e9fd4] text-[11px] font-bold tracking-[1.1px] uppercase">Proven Results</p>
          </div>
          <h1 className="font-extrabold text-[#0f172a] leading-[1.1] tracking-[-1.5px] mb-4" style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}>
            Case Studies
          </h1>
          <p className="text-[#475569] text-[17px] font-medium max-w-[560px] leading-7">
            Real campaigns. Measurable outcomes. See how India&apos;s leading brands trust MarketMen to deliver.
          </p>
        </div>
      </section>

      {/* ── Filter Tabs + Grid ── */}
      <section className="bg-[#f8fafc] py-20 px-8">
        <div className="max-w-[1280px] mx-auto">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-10">
            {FILTERS.map(f => (
              <button
                key={f}
                onClick={() => handleFilter(f)}
                className={`px-4 py-2 rounded-full text-[13px] font-semibold transition-all duration-200 ${
                  activeFilter === f
                    ? 'bg-[#1e9fd4] text-white shadow-md'
                    : 'bg-white text-[#475569] border border-[#e2e8f0] hover:border-[#1e9fd4] hover:text-[#1e9fd4]'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Featured Card */}
          {activeFilter === 'All' && page === 1 && (
            <div className="mb-8 bg-white border border-[#e2e8f0] rounded-2xl overflow-hidden flex flex-col md:flex-row transition-all hover:shadow-xl">
              <div className="md:w-1/2 h-64 md:h-auto overflow-hidden relative">
                <img src={imgDistRide} alt="Distinguished Gentlemen's Ride" className="w-full h-full object-cover" />
                <span className="absolute top-4 left-4 bg-[#8dc63f] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Featured
                </span>
              </div>
              <div className="md:w-1/2 p-8 flex flex-col gap-4 justify-center">
                <p className="text-[#1e9fd4] text-[11px] font-bold uppercase tracking-wider">Brand Activation</p>
                <h3 className="text-[#0f172a] font-extrabold text-[28px] leading-tight tracking-[-0.5px]">
                  Distinguished Gentlemen&apos;s Ride
                </h3>
                <p className="text-[#64748b] text-[14px] leading-6">
                  A premium international motorcycle event executed across multiple Indian cities, combining luxury brand experience with community building. MarketMen handled all on-ground logistics, permits, and brand activations.
                </p>
                <div className="flex gap-4 flex-wrap">
                  {[
                    { val: '12,000+', lbl: 'Riders' },
                    { val: '6 Cities', lbl: 'Coverage' },
                    { val: '5.4x ROI', lbl: 'Brand ROI', green: true },
                  ].map(s => (
                    <div key={s.lbl} className="bg-[#f8fafc] rounded-[14px] px-4 py-3 text-center">
                      <p className={`font-extrabold text-[16px] ${s.green ? 'text-[#8dc63f]' : 'text-[#1e9fd4]'}`}>{s.val}</p>
                      <p className="text-[#64748b] text-[11px]">{s.lbl}</p>
                    </div>
                  ))}
                </div>
                <button className="self-start border-2 border-[#1e9fd4] text-[#1e9fd4] font-bold text-[13px] px-6 py-3 rounded-[14px] hover:bg-[#ebf7fc] transition-colors">
                  Read Full Case Study →
                </button>
              </div>
            </div>
          )}

          {/* Grid */}
          {paginated.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginated.map((cs, i) => <CaseStudyCard key={i} cs={cs} />)}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-[#64748b] text-[16px]">No case studies found for this category yet.</p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-10">
              <button
                onClick={() => setPage(p => Math.max(1, p - 1))}
                disabled={page === 1}
                className="px-4 py-2 rounded-[12px] border border-[#e2e8f0] text-[13px] font-semibold text-[#475569] hover:border-[#1e9fd4] hover:text-[#1e9fd4] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                ← Prev
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(n => (
                <button
                  key={n}
                  onClick={() => setPage(n)}
                  className={`w-9 h-9 rounded-[12px] border text-[13px] font-semibold transition-colors ${
                    page === n
                      ? 'bg-[#1e9fd4] border-[#1e9fd4] text-white'
                      : 'border-[#e2e8f0] text-[#475569] hover:border-[#1e9fd4] hover:text-[#1e9fd4]'
                  }`}
                >
                  {n}
                </button>
              ))}
              <button
                onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="px-4 py-2 rounded-[12px] border border-[#e2e8f0] text-[13px] font-semibold text-[#475569] hover:border-[#1e9fd4] hover:text-[#1e9fd4] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                Next →
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-gradient-to-r from-[#2b1f3a] to-[#142f4c] py-20 px-8">
        <div className="max-w-[896px] mx-auto text-center">
          <h2 className="text-[44px] font-extrabold text-white leading-tight tracking-[-0.5px] mb-4">
            Want Results Like These?
          </h2>
          <p className="text-[#e2e8f0] text-[16px] mb-8">
            Let&apos;s build a campaign that becomes your next success story.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-[#1e9fd4] text-white font-bold text-[14px] px-8 py-[18px] rounded-[14px] hover:bg-[#1a8fbe] transition-colors">
              Start a Campaign
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
