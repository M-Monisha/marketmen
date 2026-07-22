'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Search, User, Menu, X as XIcon, Play, ChevronLeft, ChevronRight, Star, Clock, Calendar } from 'lucide-react';

// ── Animated counter hook ─────────────────────────────────────────────────────
function useCountUp(target: number, duration = 1500, started = false) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setVal(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);
  return val;
}

// ── Intersection observer hook ────────────────────────────────────────────────
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

// ── Asset URLs ────────────────────────────────────────────────────────────────
const imgLogo        = "/marketmen.jpeg";
const imgNavArrow    = null; // replaced with inline icon
const imgNavConnect  = null; // replaced with inline icon
const imgHeroImg     = "https://www.figma.com/api/mcp/asset/693ae6aa-26b7-487c-bea7-87778958e27b";
const imgHeroArrow   = "https://www.figma.com/api/mcp/asset/f5bd3af5-f88d-4442-8133-b5491a4c6769";

// Services icons — lucide names used in ServiceCard
const imgSvcBrand    = "brand";
const imgSvcRetail   = "retail";
const imgSvcCorpEvt  = "corporate";
const imgSvcEmpEng   = "engagement";
const imgSvcRural    = "rural";
const imgSvcEvent    = "event";
const imgSvcMedia    = "media";
const imgSvcPermit   = "permit";
const imgSvcVideo    = "video";
const imgSvcCreative = "creative";

// Map icon keys to lucide components for ServiceCard & WhyCard
const svcIconMap: Record<string, React.ReactNode> = {
  brand:      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>,
  retail:     <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>,
  corporate:  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>,
  engagement: <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  rural:      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
  event:      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  media:      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="2.18"/><line x1="7" y1="2" x2="7" y2="22"/><line x1="17" y1="2" x2="17" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="2" y1="7" x2="7" y2="7"/><line x1="2" y1="17" x2="7" y2="17"/><line x1="17" y1="17" x2="22" y2="17"/><line x1="17" y1="7" x2="22" y2="7"/></svg>,
  permit:     <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>,
  video:      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>,
  creative:   <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>,
  // why-us icons
  vendor:  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>,
  pm:      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
  nation:  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
  gps:     <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  photo:   <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>,
  price:   <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
  fast:    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
  finance: <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
  account: <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  link:    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>,
};

// Footer icons
const imgFooterLogo  = "https://www.figma.com/api/mcp/asset/d9d312d3-959b-4de2-b6d5-9d0669e3371b";
const imgWhatsApp    = "https://www.figma.com/api/mcp/asset/5b4fc69f-6dfe-464f-a5aa-e64d0e2e1a21";
const imgFooterFB    = "https://www.figma.com/api/mcp/asset/001b7cde-449e-41bf-9178-2e4d356b1f17";
const imgFooterTW    = "https://www.figma.com/api/mcp/asset/61179628-0d3f-4040-b54a-c4191b318a25";
const imgFooterIG    = "https://www.figma.com/api/mcp/asset/30e4148a-c8f3-4b7c-a2d1-f4b8de0f3e05";
const imgFooterLI    = "https://www.figma.com/api/mcp/asset/3ad432ad-dc1d-40e4-801c-4392c54ca8df";
const imgFooterEmail = "https://www.figma.com/api/mcp/asset/d6d1559c-cd5c-4a73-9e05-f9afef357307";
const imgFooterPin   = "https://www.figma.com/api/mcp/asset/29e5fbe6-6368-476f-afd5-54217276f1b5";
const imgFooterPhone = "https://www.figma.com/api/mcp/asset/992f6165-74ac-4f59-b75f-aedcb9c125c9";
const imgFooterMail  = "https://www.figma.com/api/mcp/asset/3286bb81-5f3f-413c-a81b-5a8256bb28b3";

// Brand logos (public folder)
const brands = [
  { src: '/marketmen.jpeg', alt: 'MarketMen' },
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

// ── Reusable sub-components ───────────────────────────────────────────────────
function SectionLabel({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <div className="w-6 h-0.5 rounded-full bg-[#1e9fd4]" />
      <p className="text-[#1e9fd4] text-[11px] font-bold tracking-[1.1px] uppercase">{children}</p>
    </div>
  );
}

function ServiceCard({ icon, title, desc, bg, bgImg }: { icon: string; title: string; desc: string; bg: string; bgImg: string }) {
  return (
    <div className="relative rounded-xl overflow-hidden border border-[#e2e8f0] flex flex-col gap-2 transition-all duration-200 hover:-translate-y-1 hover:shadow-md cursor-pointer group">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={bgImg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-white/85 group-hover:bg-white/75 transition-all duration-200" />
      </div>
      {/* Content */}
      <div className="relative p-3.5 flex flex-col gap-2">
        <div className={`${bg} rounded-lg w-8 h-8 flex items-center justify-center shrink-0 text-[#1e9fd4]`}>
          {svcIconMap[icon] ?? <span className="text-xs">●</span>}
        </div>
        <p className="text-[#0f172a] font-bold text-[12px] leading-4">{title}</p>
        <p className="text-[#1e293b] text-[11px] leading-4 font-medium">{desc}</p>
      </div>
    </div>
  );
}

function WhyCard({ icon, title, desc, bg }: { icon: string; title: string; desc: string; bg: string }) {
  return (
    <div className="bg-white border border-[#e2e8f0] rounded-2xl p-[17px] flex flex-col gap-2 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg cursor-pointer">
      <div className={`${bg} rounded-xl w-9 h-9 flex items-center justify-center shrink-0 text-[#1e9fd4]`}>
        {svcIconMap[icon] ?? <span className="text-xs">●</span>}
      </div>
      <p className="text-[#0f172a] font-bold text-[12px] leading-[18px] pt-3">{title}</p>
      <p className="text-[#64748b] text-[11px] leading-[17.875px]">{desc}</p>
    </div>
  );
}

function StatItem({ value, label, color, started }: { value: string; label: string; color: string; started?: boolean }) {
  // Extract numeric part for counting, keep suffix
  const match = value.match(/^([\d.]+)(.*)$/);
  const numeric = match ? parseFloat(match[1]) : 0;
  const suffix = match ? match[2] : value;
  const isNumeric = !!match && !isNaN(numeric);
  const counted = useCountUp(Math.floor(numeric), 1400, started ?? false);
  const display = isNumeric ? `${counted}${suffix}` : value;

  return (
    <div className="flex items-center gap-2">
      <div className={`${color} w-1.5 h-8 rounded-full shrink-0`} />
      <div>
        <p className="text-[#1e9fd4] font-extrabold text-[15px] leading-[22.5px]">{display}</p>
        <p className="text-[#64748b] text-[11px] leading-[16.5px]">{label}</p>
      </div>
    </div>
  );
}

// ── Header ────────────────────────────────────────────────────────────────────
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { label: 'Home',          href: '/' },
    { label: 'About Us',      href: '/about' },
    { label: 'Events',        href: '/events', hasArrow: true },
    { label: 'Opportunities', href: '/opportunities' },
    { label: 'Case Studies',  href: '/case-studies' },
    { label: 'Blogs',         href: '/blogs' },
    { label: 'Contact Us',    href: '/contact' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[rgba(27,20,45,0.85)] backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.25)]' : 'bg-gradient-to-r from-[#2b1f3a] to-[#142f4c]'}`}>
      <div className="max-w-[1280px] mx-auto px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="shrink-0 group">
          <div className="bg-white rounded-xl px-4 py-2.5 shadow-[0_0_28px_rgba(30,159,212,0.55)] group-hover:shadow-[0_0_40px_rgba(30,159,212,0.8)] transition-shadow duration-300">
            <img src={imgLogo} alt="MarketMen" className="h-20 w-auto object-contain" />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map(link => (
            <Link
              key={link.label}
              href={link.href}
              className="text-white text-[13px] font-medium px-3 py-2 rounded-[10px] hover:bg-[rgba(255,255,255,0.08)] transition-colors flex items-center gap-1"
            >
              {link.label}
              {link.hasArrow && <span className="text-[10px]">▾</span>}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link href="/contact" className="hidden md:flex bg-white text-[#2b1f3a] text-[13px] font-semibold px-5 py-2.5 rounded-[14px] items-center gap-2 hover:bg-gray-100 transition-colors">
          Let&apos;s Connect →
        </Link>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 h-0.5 bg-white mb-1" />
          <div className="w-5 h-0.5 bg-white mb-1" />
          <div className="w-5 h-0.5 bg-white" />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#1a1030] px-6 py-4 flex flex-col gap-3">
          {navLinks.map(link => (
            <Link key={link.label} href={link.href} className="text-white text-[14px] font-medium py-1" onClick={() => setMenuOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="bg-white text-[#2b1f3a] text-[13px] font-semibold px-4 py-2 rounded-[14px] text-center mt-2" onClick={() => setMenuOpen(false)}>
            Let&apos;s Connect
          </Link>
        </div>
      )}
    </header>
  );
}

// ── Stat Card (hero stats) ────────────────────────────────────────────────────
function StatCard({ num, suffix = '', display, label, gradient, started }: {
  num: number; suffix?: string; display?: string; label: string; gradient: string; started: boolean;
}) {
  const counted = useCountUp(num, 1400, started);
  const val = display ?? `${counted}${suffix}`;
  return (
    <div className="bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.09)] rounded-xl px-3 py-2.5 flex items-center gap-2.5 hover:bg-[rgba(255,255,255,0.1)] transition-colors">
      <span className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent font-extrabold text-[15px] leading-tight shrink-0`}>{val}</span>
      <p className="text-[#94a3b8] text-[10px] font-medium leading-3.5">{label}</p>
    </div>
  );
}

// ── Counter display (large, for hero stats panel) ────────────────────────────
function CounterDisplay({ num, suffix = '', display, gradient, started }: {
  num: number; suffix?: string; display?: string; gradient: string; started: boolean;
}) {
  const counted = useCountUp(num, 1400, started);
  const val = display || `${counted}${suffix}`;
  return (
    <span className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent font-extrabold text-[28px] leading-none shrink-0 w-[90px]`}>
      {val}
    </span>
  );
}

// ── Cinematic Hero Section ────────────────────────────────────────────────────
const HERO_VIDEO = '/hero.mp4';

// ── FadeIn wrapper ────────────────────────────────────────────────────────────
function FadeInHero({ children, delay = 0, duration = 1000, className = '' }: {
  children: React.ReactNode; delay?: number; duration?: number; className?: string;
}) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);
  return (
    <div
      className={`transition-opacity ${className}`}
      style={{ opacity: visible ? 1 : 0, transitionDuration: `${duration}ms` }}
    >
      {children}
    </div>
  );
}

// ── Animated Heading (character by character) ─────────────────────────────────
function AnimatedHeading({ lines, initialDelay = 200, charDelay = 30 }: {
  lines: string[]; initialDelay?: number; charDelay?: number;
}) {
  const [started, setStarted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setStarted(true), initialDelay);
    return () => clearTimeout(t);
  }, [initialDelay]);

  return (
    <>
      {lines.map((line, li) => {
        const prevChars = lines.slice(0, li).reduce((s, l) => s + l.length, 0);
        return (
          <span key={li} className="block whitespace-nowrap">
            {line.split('').map((ch, ci) => {
              const delay = (prevChars + ci) * charDelay;
              return (
                <span
                  key={ci}
                  className="inline-block"
                  style={{
                    opacity: started ? 1 : 0,
                    transform: started ? 'translateX(0)' : 'translateX(-18px)',
                    transition: `opacity 500ms ease ${delay}ms, transform 500ms ease ${delay}ms`,
                  }}
                >
                  {ch === ' ' ? '\u00A0' : ch}
                </span>
              );
            })}
          </span>
        );
      })}
    </>
  );
}

function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home',          href: '/' },
    { label: 'About Us',      href: '/about' },
    { label: 'Events',        href: '/events' },
    { label: 'Opportunities', href: '/opportunities' },
    { label: 'Case Studies',  href: '/case-studies' },
    { label: 'Blogs',         href: '/blogs' },
    { label: 'Contact Us',    href: '/contact' },
  ];

  return (
    <div
      className="relative w-full h-screen overflow-hidden bg-black"
      style={{ fontFamily: "'Inter', 'Montserrat', sans-serif" }}
    >
      {/* ── Background Video ── */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0, willChange: 'transform', transform: 'translateZ(0)', WebkitTransform: 'translateZ(0)' }}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        disablePictureInPicture
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* ── Dark overlay so text is readable ── */}
      <div className="absolute inset-0 bg-black/65" style={{ zIndex: 1 }} />

      {/* ── Navbar ── */}
      <div className="relative px-6 md:px-12 lg:px-16 pt-6" style={{ zIndex: 50 }}>
        <nav className="liquid-glass rounded-xl px-4 py-2 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="shrink-0 group">
            <div className="bg-white rounded-lg px-3 py-1.5 shadow-[0_0_20px_rgba(30,159,212,0.4)] group-hover:shadow-[0_0_32px_rgba(30,159,212,0.7)] transition-shadow duration-300">
              <img src={imgLogo} alt="MarketMen" className="h-14 w-auto object-contain" />
            </div>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.label}
                href={link.href}
                className="text-white text-sm hover:text-gray-300 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right CTA */}
          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="hidden sm:inline-flex bg-white text-black px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors"
            >
              Start a Chat
            </Link>
            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(o => !o)}
              className="liquid-glass md:hidden flex items-center justify-center w-9 h-9 rounded-lg text-white relative"
              aria-label="Menu"
            >
              <span className={`absolute transition-all duration-300 ${menuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                <XIcon size={18} />
              </span>
              <span className={`absolute transition-all duration-300 ${menuOpen ? 'opacity-0 scale-50' : 'opacity-100 scale-100'}`}>
                <Menu size={18} />
              </span>
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <div
          className={`md:hidden mt-1 liquid-glass rounded-xl overflow-hidden transition-all duration-300 ease-out ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
        >
          <div className="flex flex-col py-2 px-4">
            {navLinks.map(link => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-white text-sm py-2.5 px-2 rounded-lg hover:bg-white/10 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 mb-1 bg-white text-black px-6 py-2 rounded-lg text-sm font-medium text-center hover:bg-gray-100 transition-colors"
            >
              Start a Chat
            </Link>
          </div>
        </div>
      </div>

      {/* ── Hero Content — centred, all screen sizes ── */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center px-6 md:px-12 text-center"
        style={{ zIndex: 10 }}
      >
        {/* Heading */}
        <h1
          className="text-white font-normal mb-6"
          style={{ fontSize: 'clamp(36px, 7vw, 80px)', letterSpacing: '-0.04em', lineHeight: 1.05 }}
        >
          <AnimatedHeading
            lines={["India's On-Ground", "Brand Growth Partner"]}
            initialDelay={200}
            charDelay={25}
          />
        </h1>

        {/* Description */}
        <FadeInHero delay={800} duration={1000}>
          <p className="text-gray-200 mb-8 max-w-2xl" style={{ fontSize: 'clamp(15px, 2vw, 20px)', lineHeight: 1.7 }}>
            Helping brands execute BTL campaigns, retail branding, rural activation, and corporate experiences — one trusted execution partner across India.
          </p>
        </FadeInHero>

        {/* Buttons */}
        <FadeInHero delay={1200} duration={1000}>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-black px-8 py-3.5 rounded-lg font-medium hover:bg-gray-100 transition-colors text-sm md:text-base"
            >
              Start a Chat
            </Link>
            <Link
              href="/opportunities"
              className="liquid-glass border border-white/20 text-white px-8 py-3.5 rounded-lg font-medium hover:bg-white hover:text-black transition-colors text-sm md:text-base"
            >
              Explore Now
            </Link>
          </div>
        </FadeInHero>
      </div>
    </div>
  );
}

// ── What We Do ────────────────────────────────────────────────────────────────
const services = [
  { icon: imgSvcBrand,    title: 'Brand Activation',      desc: 'High-impact on-ground activations that connect brands directly with consumers across India.',      bg: 'bg-[#ebf7fc]', bgImg: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400&q=70&fit=crop' },
  { icon: imgSvcRetail,   title: 'Retail Branding',       desc: 'Transforming retail spaces with impactful branding solutions that drive footfall and sales.',       bg: 'bg-[#f3fae8]', bgImg: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&q=70&fit=crop' },
  { icon: imgSvcCorpEvt,  title: 'Corporate Events',      desc: 'End-to-end corporate event management with flawless execution at any scale.',                      bg: 'bg-[#ebf7fc]', bgImg: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&q=70&fit=crop' },
  { icon: imgSvcEmpEng,   title: 'Employee Engagement',   desc: 'Meaningful engagement programs that build culture, morale, and team spirit.',                      bg: 'bg-[#f3fae8]', bgImg: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=70&fit=crop' },
  { icon: imgSvcRural,    title: 'Rural Marketing',       desc: 'Deep rural reach through haats, village meets, and targeted rural activation formats.',            bg: 'bg-[#ebf7fc]', bgImg: 'https://images.unsplash.com/photo-1465188162913-8fb5709d6d57?w=400&q=70&fit=crop' },
  { icon: imgSvcEvent,    title: 'Event IPs',             desc: 'Proprietary event formats and intellectual properties for recurring brand experiences.',            bg: 'bg-[#f3fae8]', bgImg: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&q=70&fit=crop' },
  { icon: imgSvcMedia,    title: 'Media & Production',    desc: 'Comprehensive media planning, space booking, and large-scale production services.',                 bg: 'bg-[#ebf7fc]', bgImg: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=400&q=70&fit=crop' },
  { icon: imgSvcPermit,   title: 'Permissions & Liaison', desc: 'Expert handling of government permissions and stakeholder coordination.',                           bg: 'bg-[#f3fae8]', bgImg: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&q=70&fit=crop' },
  { icon: imgSvcVideo,    title: 'Video Production',      desc: 'Professional video content that captures campaign stories and brand narratives.',                   bg: 'bg-[#ebf7fc]', bgImg: 'https://images.unsplash.com/photo-1601506521793-dc748fc80b67?w=400&q=70&fit=crop' },
  { icon: imgSvcCreative, title: 'Creative Design',       desc: 'Striking visual communication that elevates brand identity across all touchpoints.',                bg: 'bg-[#f3fae8]', bgImg: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&q=70&fit=crop' },
];

function WhatWeDoSection() {
  return (
    <section className="bg-white py-20 px-8">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col items-center mb-14 text-center">
          <SectionLabel>What We Do</SectionLabel>
          <h2 className="text-[40px] font-extrabold text-[#0f172a] tracking-[-0.5px] leading-[60px]">
            One Partner. Complete Execution.
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {services.map(s => <ServiceCard key={s.title} {...s} />)}
        </div>
      </div>
    </section>
  );
}

// ── Why Choose Us ─────────────────────────────────────────────────────────────
const whyCards = [
  { icon: 'vendor',  title: 'Verified Vendors',           desc: 'Pan-India vetted vendor network for seamless execution.', bg: 'bg-[#ebf7fc]' },
  { icon: 'pm',      title: 'Dedicated PMs',              desc: 'Single project manager from brief to final report.', bg: 'bg-[#f3fae8]' },
  { icon: 'nation',  title: 'Nationwide Execution',       desc: 'Present in 500+ districts across 25+ states.', bg: 'bg-[#ebf7fc]' },
  { icon: 'gps',     title: 'GPS Campaign Tracking',      desc: 'Real-time location tracking of all field activities.', bg: 'bg-[#f3fae8]' },
  { icon: 'photo',   title: 'Photo & Video Reporting',    desc: '100% visual documentation of every campaign touchpoint.', bg: 'bg-[#ebf7fc]' },
  { icon: 'price',   title: 'Transparent Pricing',        desc: 'Detailed cost breakdowns with zero hidden charges.', bg: 'bg-[#f3fae8]' },
  { icon: 'fast',    title: 'Fast Turnaround',            desc: 'Agile teams that mobilize quickly for urgent campaigns.', bg: 'bg-[#ebf7fc]' },
  { icon: 'finance', title: 'Financial Discipline',       desc: 'SOC-audited processes and GST-compliant billing.', bg: 'bg-[#f3fae8]' },
  { icon: 'account', title: 'Single Point Accountability', desc: 'One partner, complete responsibility—start to finish.', bg: 'bg-[#ebf7fc]' },
];

function WhyUsSection() {
  return (
    <section className="bg-[#f8fafc] py-20 px-8">
      <div className="max-w-[1280px] mx-auto flex flex-wrap gap-8">
        {/* Left text */}
        <div className="flex-1 min-w-[280px] flex flex-col justify-center">
          <SectionLabel>Why Choose Us</SectionLabel>
          <h2 className="text-[40px] font-extrabold text-[#0f172a] tracking-[-0.5px] leading-[60px]">
            Why India&apos;s Leading Brands Choose With Us
          </h2>
          <p className="text-[#64748b] text-[15px] leading-[24.375px] mt-6 mb-6">
            From Fortune 500 companies to homegrown brands, we have been the trusted on-ground execution partner for campaigns that demand scale, transparency, and measurable results.
          </p>
          <a href="#approach" className="flex items-center gap-2 text-[#1e9fd4] font-bold text-[14px]">
          </a>
        </div>

        {/* Right grid */}
        <div className="flex-1 min-w-[280px] grid grid-cols-3 gap-3">
          {whyCards.map(c => <WhyCard key={c.title} {...c} />)}
        </div>
      </div>
    </section>
  );
}

// ── Fade-in wrapper ───────────────────────────────────────────────────────────
function FadeIn({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const { ref, inView } = useInView(0.1);
  return (
    <div ref={ref} className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}>
      {children}
    </div>
  );
}

// ── Insights Section ──────────────────────────────────────────────────────────
const insights = [
  {
    date: 'Dec 12, 2024',
    category: 'Strategy',
    title: 'BTL vs ATL: Why On-Ground Is Winning in 2024',
    excerpt: 'Why growing brands are shifting budget to on-ground — and what makes it measurable now.',
    img: '/blog 1.jpeg',
    slug: 'btl-vs-atl-why-on-ground-is-winning-in-2024',
  },
  {
    date: 'Nov 28, 2024',
    category: 'Rural Marketing',
    title: 'How to Plan a Haat Bazaar Campaign for FMCG Brands',
    excerpt: 'The underrated channel that delivers sampling, trial, and sales in a single day.',
    img: '/blog 2.jpeg',
    slug: 'how-to-plan-a-haat-bazaar-campaign-for-fmcg-brands',
  },
  {
    date: 'Nov 15, 2024',
    category: 'Retail Branding',
    title: 'Shop-in-Shop Branding: A Complete Playbook',
    excerpt: 'From site selection to maintenance — how to turn a shelf into a mini-showroom.',
    img: '/blog 3.jpeg',
    slug: 'shop-in-shop-branding-a-complete-playbook',
  },
];

function InsightsSection() {
  return (
    <section className="bg-[#f8fafc] py-20 px-8" id="insights">
      <div className="max-w-[1280px] mx-auto">
        <FadeIn>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
            <div>
              <SectionLabel>Insights</SectionLabel>
              <h2 className="text-[40px] font-extrabold text-[#0f172a] tracking-[-0.5px] leading-[1.2]">
                Ideas That Move Brands Forward
              </h2>
            </div>
            <Link href="/blogs" className="text-[#1e9fd4] font-bold text-[14px] flex items-center gap-1 hover:underline shrink-0">
              All Articles →
            </Link>
          </div>
        </FadeIn>

        {/* Featured large card + 2 small cards */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Featured */}
          <FadeIn className="lg:col-span-3">
            <Link href={`/blogs/${insights[0].slug}`} className="group block bg-white border border-[#e2e8f0] rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
              <div className="h-44 overflow-hidden relative">
                <img src={insights[0].img} alt={insights[0].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                <span className="absolute top-4 left-4 bg-[#1e9fd4] text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
                  {insights[0].category}
                </span>
              </div>
              <div className="p-4 flex flex-col gap-3">
                <p className="text-[#94a3b8] text-[12px]">{insights[0].date}</p>
                <h3 className="text-[#0f172a] font-extrabold text-[16px] leading-snug tracking-[-0.3px] group-hover:text-[#1e9fd4] transition-colors">
                  {insights[0].title}
                </h3>
                <p className="text-[#64748b] text-[13px] leading-6">{insights[0].excerpt}</p>
                <span className="text-[#1e9fd4] font-bold text-[13px] flex items-center gap-1 mt-1 group-hover:gap-2 transition-all">
                  Read Article →
                </span>
              </div>
            </Link>
          </FadeIn>

          {/* 2 stacked small cards */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {insights.slice(1).map((a, i) => (
              <FadeIn key={i}>
                <Link href={`/blogs/${a.slug}`} className="group flex gap-4 bg-white border border-[#e2e8f0] rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-24 shrink-0 overflow-hidden">
                    <img src={a.img} alt={a.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  </div>
                  <div className="py-4 pr-4 flex flex-col gap-2 justify-center">
                    <div className="flex items-center gap-2">
                      <span className="bg-[#f3fae8] text-[#5a8a1a] text-[10px] font-bold px-2.5 py-1 rounded-full">{a.category}</span>
                    </div>
                    <p className="text-[#94a3b8] text-[11px]">{a.date}</p>
                    <h3 className="text-[#0f172a] font-bold text-[12px] leading-snug group-hover:text-[#1e9fd4] transition-colors line-clamp-2">
                      {a.title}
                    </h3>
                    <span className="text-[#1e9fd4] font-bold text-[12px] flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read →
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Floating WhatsApp Button ───────────────────────────────────────────────────
function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919821103919"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25d366] w-14 h-14 rounded-full flex items-center justify-center shadow-[0_4px_24px_rgba(37,211,102,0.5)] hover:scale-110 transition-transform duration-200"
      aria-label="Chat on WhatsApp"
    >
      <svg viewBox="0 0 32 32" className="w-7 h-7 fill-white">
        <path d="M16 2C8.268 2 2 8.268 2 16c0 2.47.675 4.783 1.85 6.766L2 30l7.447-1.822A13.94 13.94 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.6a11.56 11.56 0 01-5.9-1.617l-.423-.25-4.42 1.082 1.116-4.302-.276-.44A11.6 11.6 0 014.4 16C4.4 9.6 9.6 4.4 16 4.4S27.6 9.6 27.6 16 22.4 27.6 16 27.6zm6.362-8.668c-.348-.174-2.06-1.016-2.38-1.132-.318-.116-.55-.174-.78.174-.232.348-.898 1.132-1.102 1.364-.202.232-.404.26-.752.086-.348-.174-1.47-.542-2.8-1.728-1.034-.922-1.732-2.06-1.936-2.408-.202-.348-.022-.536.152-.71.156-.154.348-.404.522-.606.174-.202.232-.348.348-.58.116-.232.058-.434-.028-.608-.088-.174-.78-1.884-1.07-2.578-.28-.676-.566-.584-.78-.594l-.664-.012c-.232 0-.608.086-.926.434-.318.348-1.216 1.188-1.216 2.896s1.244 3.36 1.418 3.592c.174.232 2.45 3.738 5.94 5.24.83.358 1.478.572 1.982.732.832.264 1.59.226 2.188.138.668-.1 2.06-.842 2.35-1.656.29-.814.29-1.51.202-1.656-.086-.146-.318-.232-.666-.406z"/>
      </svg>
    </a>
  );
}
const imgOppArrow    = null;
const imgOppReadMore = null;

const imgGanesh      = '/ganesh.webp';
const imgGarbha      = '/garba.webp';
const imgEmpCal      = '/employee engagement.jpeg';
const imgRetailExp   = '/retail expansion.jpeg';
const imgCollege     = '/college festival branding.jpeg';
const imgRuralCamp   = '/rural meets.jpeg';
const imgCSR         = '/rural meet .jpeg';

const opportunities = [
  { img: '/ganesh.webp',                    title: 'Ganesh Festival Brand Activation', desc: 'Pan-city activations during Ganeshotsav with massive crowd engagement.' },
  { img: '/garba.webp',                     title: 'Garbha Event Management',          desc: 'Premium garba event sponsorships across Gujarat and Maharashtra.' },
  { img: '/employee engagement.jpeg',       title: 'Employee Engagement Calendar',     desc: 'Year-round engagement programs designed for corporate teams.' },
  { img: '/retail expansion.jpeg',          title: 'Retail Expansion Program',         desc: 'Branded retail rollouts across modern trade and general trade.' },
  { img: '/college festival branding.jpeg', title: 'College Festival Branding',        desc: 'Youth-focused brand activations at top college fests.' },
  { img: '/rural meets.jpeg',               title: 'Rural Marketing Campaigns',        desc: 'Deep Bharat outreach programs connecting brands with rural consumers.' },
  { img: '/rural meet .jpeg',               title: 'CSR & Government Projects',        desc: 'Purpose-driven campaigns aligned with government schemes and corporate CSR mandates.' },
];

function OpportunityCard({ img, title, desc }: { img: string; title: string; desc: string }) {
  return (
    <div className="rounded-xl overflow-hidden border border-[#e2e8f0] transition-all duration-200 hover:-translate-y-1 hover:shadow-lg cursor-pointer group">
      {/* Image container — fixed height, image fills it */}
      <div className="relative h-40 overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {/* Dark gradient from bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        {/* Title pinned to bottom of image */}
        <div className="absolute bottom-0 left-0 right-0 p-3">
          <p className="text-white font-bold text-[13px] leading-snug drop-shadow">{title}</p>
        </div>
      </div>
      {/* Description below image */}
      <div className="bg-[#0f172a] px-3 py-2.5">
        <p className="text-gray-300 text-[11px] leading-4">{desc}</p>
      </div>
    </div>
  );
}

function OpportunitiesSection() {
  return (
    <section className="bg-white py-20 px-8" id="opportunities">
      <div className="max-w-[1280px] mx-auto">
        {/* Header row */}
        <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
          <div>
            <SectionLabel>Opportunities</SectionLabel>
            <h2 className="text-[40px] font-extrabold text-[#0f172a] tracking-[-0.5px] leading-[60px]">
              Instead of Waiting for Opportunities,<br />We Create Them.
            </h2>
          </div>
          <a href="#" className="border-2 border-[#1e9fd4] text-[#1e9fd4] font-bold text-[13px] px-[22px] py-3 rounded-[14px] flex items-center gap-2 hover:bg-[#ebf7fc] transition-colors shrink-0">
            View All Opportunities →
          </a>
        </div>
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {opportunities.map(o => <OpportunityCard key={o.title} {...o} />)}
        </div>
      </div>
    </section>
  );
}

// Division logos — local files from /public
const imgDivMM     = '/marketmen.jpeg';
const imgDivRetail = '/pertingo.jpeg';
const imgDivLocal  = '/blook.jpeg';
const imgDivTech   = '/blookhub.jpeg';

const divisions = [
  {
    logo: imgDivMM,
    logoText: 'MarketMen', logoTextColor: 'text-[#17a15c]',
    borderColor: 'border-[rgba(30,212,69,0.19)]',
    bg: 'linear-gradient(160deg, rgba(94,212,30,0.082) 0%, rgba(23,161,92,0.125) 100%)',
    dotColor: 'bg-[#1ed41e]',
    textColor: 'text-[#476949]',
    linkColor: 'text-[#25d366]',
    items: ['Brand Activation','Experiential Marketing','Rural Marketing','Employee Engagement','Video & Photo Production','Event IPs'],
  },
  {
    logo: imgDivRetail,
    logoText: 'Pertingo', logoTextColor: 'text-[#c48807]',
    borderColor: 'border-[rgba(177,115,17,0.19)]',
    bg: 'linear-gradient(160deg, rgba(222,126,42,0.082) 0%, rgba(180,111,0,0.125) 100%)',
    dotColor: 'bg-[#bc9836]',
    textColor: 'text-[#696147]',
    linkColor: 'text-[#c48807]',
    items: ['Retail Branding','Visual Merchandising','Shop-in-Shop Solutions','Trade Marketing','Channel Programs','In-Store Promotions'],
  },
  {
    logo: imgDivLocal,
    logoText: 'BLook', logoTextColor: 'text-[#4a1ee9]',
    borderColor: 'border-[rgba(74,30,233,0.19)]',
    bg: 'linear-gradient(160deg, rgba(50,30,233,0.082) 0%, rgba(72,43,179,0.125) 100%)',
    dotColor: 'bg-[#321ee9]',
    textColor: 'text-[#514769]',
    linkColor: 'text-[#4a1ee9]',
    items: ['Hyperlocal Marketing','Community Marketing','Space Monetization','Retail Media Solutions','Brand Visibility Campaigns','Consumer Engagement'],
  },
  {
    logo: imgDivTech,
    logoText: 'BLookHub', logoTextColor: 'text-[#c015af]',
    borderColor: 'border-[rgba(192,21,189,0.19)]',
    bg: 'linear-gradient(160deg, rgba(192,21,155,0.082) 0%, rgba(246,100,231,0.125) 100%)',
    dotColor: 'bg-[#c015af]',
    textColor: 'text-[#694762]',
    linkColor: 'text-[#c015af]',
    items: ['White-Label SaaS Platforms','Visitor Management Systems','QR & Registration Solutions','Queue Management Systems','Event Technology Solutions','Custom Business Applications'],
  },
];

function DivisionCard({ logo, logoText, logoTextColor, borderColor, bg, dotColor, textColor, linkColor, items }: typeof divisions[0]) {
  return (
    <div className={`bg-white border border-[#e2e8f0] rounded-2xl overflow-hidden flex flex-col`}>
      {/* Logo header */}
      <div className={`border-b-2 ${borderColor} px-5 py-4`} style={{ backgroundImage: bg }}>
        {logo
          ? <img src={logo} alt="" className="h-12 object-contain" />
          : <span className={`font-extrabold text-[18px] ${logoTextColor}`}>{logoText}</span>
        }
      </div>
      {/* List */}
      <div className="px-5 py-4 flex flex-col gap-1.5 flex-1">
        {items.map(item => (
          <div key={item} className="flex items-center gap-2">
            <div className={`${dotColor} w-1.5 h-1.5 rounded-full shrink-0`} />
            <p className={`${textColor} text-[11px] leading-[16.5px]`}>{item}</p>
          </div>
        ))}
      </div>
      {/* Know More */}
      <div className="px-5 pb-4">
        <a href="#" className={`${linkColor} font-bold text-[12px] flex items-center gap-1`}>
          Know More →
        </a>
      </div>
    </div>
  );
}

function DivisionsSection() {
  return (
    <section className="bg-[#f8fafc] py-20 px-8">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col items-center mb-14 text-center">
          <SectionLabel>Our Divisions</SectionLabel>
          <h2 className="text-[40px] font-extrabold text-[#0f172a] tracking-[-0.5px] leading-[60px]">
            Our Specialist Divisions
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {divisions.map((d, i) => <DivisionCard key={i} {...d} />)}
        </div>
      </div>
    </section>
  );
}

// ── Case Studies ──────────────────────────────────────────────────────────────
// Figma asset images (valid 7 days)
const imgCSDabur   = "https://www.figma.com/api/mcp/asset/3df0db78-8046-4618-8b3f-9526259b3ef3";
const imgCSDealer  = "https://www.figma.com/api/mcp/asset/0f2abfb9-8545-4388-82c5-691b58d0aa0a";
const imgCSRural   = "https://www.figma.com/api/mcp/asset/5e564b03-d042-4565-837d-59df1cc10ef8";

const caseStudies = [
  {
    img: imgCSDabur,
    brandBg: 'bg-[#ae1d0b]', brandLetter: 'D', brand: 'Dabur',
    title: 'Chyawanprash Winter Campaign', location: '12 States',
    stats: [
      { value: '2.4 Cr+', label: 'People Reached', green: false },
      { value: '340+',    label: 'Cities',          green: false },
      { value: '4.2x',   label: 'ROI',              green: true  },
    ],
  },
  {
    img: imgCSDealer,
    brandBg: 'bg-[#00108f]', brandLetter: 'C', brand: 'CEAT Tyres',
    title: 'Dealer Meet & Product Launch', location: 'Pan India',
    stats: [
      { value: '18,000+', label: 'People Reached', green: false },
      { value: '85',      label: 'Cities',          green: false },
      { value: '3.8x',   label: 'ROI',              green: true  },
    ],
  },
  {
    img: imgCSRural,
    brandBg: 'bg-[#052f6d]', brandLetter: 'C', brand: 'CEAT Tyres',
    title: 'Rural Mechanic Meet', location: 'UP, MP, Rajasthan',
    stats: [
      { value: '45,000+', label: 'People Reached', green: false },
      { value: '120+',    label: 'Cities',          green: false },
      { value: '5.1x',   label: 'ROI',              green: true  },
    ],
  },
];

function CaseStudyCard({ img, brandBg, brandLetter, brand, title, location, stats }: typeof caseStudies[0]) {
  return (
    <div className="bg-white border border-[#e2e8f0] rounded-2xl overflow-hidden flex flex-col transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      {/* Image */}
      <div className="h-36 shrink-0 overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
      </div>
      {/* Content */}
      <div className="p-4 flex flex-col gap-0 flex-1">
        {/* Brand row */}
        <div className="flex items-center gap-2 mb-3">
          <div className={`${brandBg} w-8 h-8 rounded-[10px] flex items-center justify-center shrink-0`}>
            <span className="text-white font-extrabold text-[11px]">{brandLetter}</span>
          </div>
          <span className="text-[#0f172a] font-bold text-[13px]">{brand}</span>
        </div>
        {/* Title */}
        <p className="text-[#0f172a] font-bold text-[14px] leading-[21px] mb-1">{title}</p>
        {/* Location */}
        <p className="text-[#64748b] text-[12px] leading-[18px] mb-4">{location}</p>
        {/* Stats — 3 pills */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          {stats.map(s => (
            <div key={s.label} className="bg-[#f8fafc] rounded-[14px] p-1.5 flex flex-col items-center">
              <span className={`font-extrabold text-[12px] leading-[21px] ${s.green ? 'text-[#8dc63f]' : 'text-[#1e9fd4]'}`}>{s.value}</span>
              <span className="text-[#64748b] text-[10px] text-center leading-[15px]">{s.label}</span>
            </div>
          ))}
        </div>
        {/* CTA button */}
        <button className="w-full border border-[#1e9fd4] rounded-[14px] h-8 text-[#1e9fd4] font-bold text-[11px] hover:bg-[#ebf7fc] transition-colors mt-auto">
          View Case Study →
        </button>
      </div>
    </div>
  );
}

function CaseStudiesSection() {
  return (
    <section className="bg-[#f8fafc] py-20 px-8" id="case-studies">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col items-center mb-12 text-center">
          <SectionLabel>Case Studies</SectionLabel>
          <h2 className="text-[40px] font-extrabold text-[#0f172a] tracking-[-0.5px] leading-[60px]">
            Recent Success Stories
          </h2>
        </div>
        {/* Preload images */}
        <div className="hidden" aria-hidden="true">
          <img src={imgCSDabur} alt="" fetchPriority="high" />
          <img src={imgCSDealer} alt="" fetchPriority="high" />
          <img src={imgCSRural} alt="" fetchPriority="high" />
        </div>
        {/* Horizontal scroll on mobile, fixed 3-col grid on desktop */}
        <div className="flex gap-6 overflow-x-auto pb-4 lg:overflow-visible lg:pb-0 lg:grid lg:grid-cols-3 snap-x snap-mandatory lg:snap-none">
          {caseStudies.map(c => (
            <div key={c.title} className="min-w-[280px] sm:min-w-[320px] lg:min-w-0 snap-start">
              <CaseStudyCard {...c} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Trusted By (Marquee) ──────────────────────────────────────────────────────
function TrustedBySection() {
  return (
    <section className="py-16 px-8 bg-white" id="trusted">
      <div className="max-w-[1280px] mx-auto mb-10 text-center">
        <SectionLabel>Trusted By</SectionLabel>
        <h2 className="text-[40px] font-extrabold text-[#0f172a] tracking-[-0.5px] leading-[1.2]">
          Trusted by Leading Brands Across India
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
  );
}

// ── CTA Banner ────────────────────────────────────────────────────────────────
function CTASection() {
  return (
    <section className="bg-gradient-to-r from-[#2b1f3a] to-[#142f4c] py-20 px-8" id="contact">
      <div className="max-w-[896px] mx-auto text-center">
        <h2 className="text-[44px] font-extrabold text-white leading-tight tracking-[-0.5px]">
          Ready to Build Your Next Campaign?
        </h2>
        <p className="text-[#e2e8f0] text-[16px] font-normal mt-4 mb-8">
          Let&apos;s discuss your goals and create measurable brand impact across India.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#schedule" className="bg-[#1e9fd4] text-white font-bold text-[14px] px-8 py-[18px] rounded-[14px] flex items-center gap-2 hover:bg-[#1a8fbe] transition-colors">
            Schedule Strategy Session
            <img src={imgHeroArrow} alt="" className="w-4 h-4" />
          </a>
          <a href="#expert" className="border-2 border-[#e2e8f0] text-white font-semibold text-[14px] px-8 py-[18px] rounded-[14px] hover:bg-[rgba(255,255,255,0.08)] transition-colors">
            Talk to an Expert
          </a>
        </div>
      </div>
    </section>
  );
}

// ── Footer ────────────────────────────────────────────────────────────────────
function Footer() {
  const [email, setEmail] = useState('');
  const quickLinks = [
    { label: 'Home',          href: '/' },
    { label: 'About Us',      href: '/about' },
    { label: 'Events',        href: '/events' },
    { label: 'Opportunities', href: '/opportunities' },
    { label: 'Case Studies',  href: '/case-studies' },
    { label: 'Contact Us',    href: '/contact' },
  ];
  const eventServices = ['Corporate Events','Employee Engagement','Brand & Public Events','Event IPs','Exhibition & Fabrication','Event Production','Rural Marketing'];
  const socialIcons  = [
    { src: imgFooterFB, alt: 'Facebook' },
    { src: imgFooterTW, alt: 'Twitter' },
    { src: imgFooterIG, alt: 'Instagram' },
    { src: imgFooterLI, alt: 'LinkedIn' },
  ];

  return (
    <footer className="bg-[#0f172a]">
      {/* WhatsApp bar */}
      <div className="border-b border-[rgba(255,255,255,0.07)]" style={{ backgroundImage: 'linear-gradient(177deg, rgba(30,159,212,0.125) 0%, rgba(141,198,63,0.082) 100%)' }}>
        <div className="max-w-[1280px] mx-auto px-8 py-5 flex items-center justify-between flex-wrap gap-4">
          <p className="text-[#cbd5e1] text-[14px] font-medium">Planning an event? Let&apos;s talk directly.</p>
          <a href="https://wa.me/919821103919" target="_blank" rel="noopener noreferrer"
            className="bg-[#25d366] text-white font-bold text-[13px] px-6 py-2.5 rounded-[14px] flex items-center gap-2 hover:bg-[#1fb85a] transition-colors">
            <img src={imgWhatsApp} alt="" className="w-4 h-4" />
            Plan your event on WhatsApp
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-[1280px] mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Column 1 — brand */}
        <div className="flex flex-col gap-5">
          <div className="bg-white rounded-[14px] p-2 w-fit">
            <img src={imgFooterLogo} alt="MarketMen" className="h-12 object-contain" />
          </div>
          <p className="text-[#94a3b8] text-[13px] leading-[21px]">
            MarketMen is India&apos;s trusted events and consumer connect company — delivering corporate events, employee engagement, brand activations, rural marketing, and experiential campaigns across India since 1989.
          </p>
          <div className="flex gap-3">
            {socialIcons.map(s => (
              <a key={s.alt} href="#" className="bg-[rgba(255,255,255,0.08)] rounded-[14px] w-9 h-9 flex items-center justify-center hover:bg-[rgba(255,255,255,0.15)] transition-colors">
                <img src={s.src} alt={s.alt} className="w-4 h-4 object-contain" />
              </a>
            ))}
          </div>
          <div>
            <p className="text-[#1e9fd4] text-[11px] font-bold tracking-[1.1px] uppercase mb-3">Newsletter</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="flex-1 bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.12)] rounded-[14px] px-3 py-2.5 text-[12px] text-white placeholder-[rgba(255,255,255,0.5)] outline-none focus:border-[#1e9fd4]"
              />
              <button className="bg-[#1e9fd4] rounded-[14px] w-10 h-10 flex items-center justify-center hover:bg-[#1a8fbe] transition-colors shrink-0">
                <img src={imgFooterEmail} alt="Subscribe" className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Column 2 — quick links */}
        <div>
          <p className="text-[#1e9fd4] text-[11px] font-bold tracking-[1.1px] uppercase mb-5">Quick Links</p>
          <div className="flex flex-col gap-2.5">
            {quickLinks.map(l => (
              <Link key={l.label} href={l.href} className="text-[#94a3b8] text-[13px] hover:text-white transition-colors">{l.label}</Link>
            ))}
          </div>
        </div>

        {/* Column 3 — info links (moved here) */}
        <div>
          <p className="text-[#8dc63f] text-[11px] font-bold tracking-[1.1px] uppercase mb-5">Info</p>
          <div className="flex flex-col gap-2.5">
            {[
              { label: 'Partner With MarketMen', href: '/partner' },
              { label: 'Cities & Coverage',       href: '/cities' },
              { label: 'FAQs',                    href: '/faqs' },
              { label: 'Privacy Policy',          href: '/privacy-policy' },
              { label: 'Terms & Conditions',      href: '/terms' },
            ].map(l => (
              <a key={l.label} href={l.href} className="text-[#94a3b8] text-[13px] hover:text-white transition-colors">{l.label}</a>
            ))}
          </div>
        </div>

        {/* Column 4 — contact */}
        <div>
          <p className="text-[#1e9fd4] text-[11px] font-bold tracking-[1.1px] uppercase mb-5">Contact Us</p>
          <div className="flex flex-col gap-4">
            <div className="flex gap-2.5 items-start">
              <img src={imgFooterPin} alt="" className="w-3.5 h-3.5 mt-0.5 shrink-0" />
              <p className="text-[#94a3b8] text-[12px] leading-5">Thacker Compound, 274, B. Bharucha Road, Marzban Parsi Colony, Grant Road (East), Mumbai – 400 007</p>
            </div>
            <a href="tel:+919821103919" className="flex gap-2.5 items-center hover:text-white transition-colors">
              <img src={imgFooterPhone} alt="" className="w-3.5 h-3.5 shrink-0" />
              <span className="text-[#94a3b8] text-[13px]">+91 98211 03919</span>
            </a>
            <a href="mailto:connect@marketmen.in" className="flex gap-2.5 items-center hover:text-white transition-colors">
              <img src={imgFooterMail} alt="" className="w-3.5 h-3.5 shrink-0" />
              <span className="text-[#94a3b8] text-[13px]">connect@marketmen.in</span>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-[rgba(255,255,255,0.07)]">
        <div className="max-w-[1280px] mx-auto px-8 py-5 flex flex-wrap items-center justify-between gap-4">
          <p className="text-[#475569] text-[12px]">Copyright © Market Men Consumer Connect &amp; Events Pvt. Ltd. · All Rights Reserved</p>
          <div className="flex gap-5">
            {['Privacy Policy','Terms & Conditions','FAQs'].map(l => (
              <a key={l} href="#" className="text-[#475569] text-[12px] hover:text-white transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

// ── Main Export ───────────────────────────────────────────────────────────────
export function NewsHomePage() {
  return (
    <div className="home w-full overflow-x-hidden font-['Montserrat',sans-serif]">
      <FloatingWhatsApp />
      <main>
        <HeroSection />
        <FadeIn><WhatWeDoSection /></FadeIn>
        <FadeIn><WhyUsSection /></FadeIn>
        <FadeIn><OpportunitiesSection /></FadeIn>
        <FadeIn><DivisionsSection /></FadeIn>
        <FadeIn><CaseStudiesSection /></FadeIn>
        <FadeIn><TrustedBySection /></FadeIn>
        <FadeIn><InsightsSection /></FadeIn>
        <FadeIn><CTASection /></FadeIn>
      </main>
      <Footer />
    </div>
  );
}
