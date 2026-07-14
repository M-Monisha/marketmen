'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// ── Asset URLs ────────────────────────────────────────────────────────────────
const imgLogo        = "https://www.figma.com/api/mcp/asset/3c49f5af-41d0-4316-9b1d-27b9adb8072c";
const imgNavArrow    = "https://www.figma.com/api/mcp/asset/385959db-6e75-43b3-9a1a-fdc7ca96c5fd";
const imgNavConnect  = "https://www.figma.com/api/mcp/asset/e799bb3a-b8ff-4a51-b7b0-d1518afcac6f";
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

// ── Header ────────────────────────────────────────────────────────────────────
export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Home',         href: '/' },
    { label: 'About Us',     href: '/about' },
    { label: 'Events',       href: '/events', hasArrow: true },
    { label: 'Opportunities',href: '/opportunities' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Contact Us',   href: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[rgba(27,20,45,0.85)] backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.25)]' : 'bg-gradient-to-r from-[#2b1f3a] to-[#142f4c]'}`}>
      <div className="max-w-[1280px] mx-auto px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="shrink-0 group">
          <div className="bg-white rounded-xl px-4 py-2.5 shadow-[0_0_28px_rgba(30,159,212,0.55)] group-hover:shadow-[0_0_40px_rgba(30,159,212,0.8)] transition-shadow duration-300">
            <img src={imgLogo} alt="MarketMen" className="h-14 w-auto object-contain" />
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
              {link.hasArrow && <img src={imgNavArrow} alt="" className="w-3 h-3" />}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link href="/contact" className="hidden md:flex bg-white text-[#2b1f3a] text-[13px] font-semibold px-5 py-2.5 rounded-[14px] items-center gap-2 hover:bg-gray-100 transition-colors">
          Let&apos;s Connect
          <img src={imgNavConnect} alt="" className="w-3 h-3" />
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

// ── Floating WhatsApp Button ──────────────────────────────────────────────────
export function FloatingWhatsApp() {
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

// ── Footer ────────────────────────────────────────────────────────────────────
export function Footer() {
  const [email, setEmail] = useState('');

  const quickLinks = [
    { label: 'Home',         href: '/' },
    { label: 'About Us',     href: '/about' },
    { label: 'Events',       href: '/events' },
    { label: 'Opportunities',href: '/opportunities' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Contact Us',   href: '/contact' },
  ];

  const eventServices = [
    'Corporate Events','Employee Engagement','Brand & Public Events',
    'Event IPs','Exhibition & Fabrication','Event Production','Rural Marketing',
  ];

  const socialIcons = [
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

        {/* Column 3 — event services */}
        <div>
          <p className="text-[#8dc63f] text-[11px] font-bold tracking-[1.1px] uppercase mb-5">Event Services</p>
          <div className="flex flex-col gap-2.5">
            {eventServices.map(l => (
              <a key={l} href="#" className="text-[#94a3b8] text-[13px] hover:text-white transition-colors">{l}</a>
            ))}
          </div>
        </div>

        {/* Column 4 — contact */}
        <div>
          <p className="text-[#1e9fd4] text-[11px] font-bold tracking-[1.1px] uppercase mb-5">Contact Us</p>
          <div className="flex flex-col gap-4 mb-8">
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
          <p className="text-[#8dc63f] text-[11px] font-bold tracking-[1.1px] uppercase mb-3">Info</p>
          <div className="flex flex-col gap-2">
            <Link href="/partner" className="text-[#64748b] text-[12px] hover:text-white transition-colors">Partner With MarketMen</Link>
            <Link href="/cities" className="text-[#64748b] text-[12px] hover:text-white transition-colors">Cities &amp; Coverage</Link>
            <Link href="/faqs" className="text-[#64748b] text-[12px] hover:text-white transition-colors">FAQs</Link>
            <Link href="/privacy-policy" className="text-[#64748b] text-[12px] hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-[#64748b] text-[12px] hover:text-white transition-colors">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-[rgba(255,255,255,0.07)]">
        <div className="max-w-[1280px] mx-auto px-8 py-5 flex flex-wrap items-center justify-between gap-4">
          <p className="text-[#475569] text-[12px]">Copyright © Market Men Consumer Connect &amp; Events Pvt. Ltd. · All Rights Reserved</p>
          <div className="flex gap-5">
            <Link href="/privacy-policy" className="text-[#475569] text-[12px] hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-[#475569] text-[12px] hover:text-white transition-colors">Terms &amp; Conditions</Link>
            <Link href="/faqs" className="text-[#475569] text-[12px] hover:text-white transition-colors">FAQs</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ── Page Layout Wrapper ───────────────────────────────────────────────────────
export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full overflow-x-hidden font-['Montserrat',sans-serif]">
      <Header />
      <FloatingWhatsApp />
      <main className="pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
}
