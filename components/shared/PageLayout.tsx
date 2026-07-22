'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// ── Asset URLs ────────────────────────────────────────────────────────────────
const imgLogo        = "/marketmen.jpeg";
// All Figma asset URLs removed — replaced with inline SVGs below

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
    { label: 'Blogs',        href: '/blogs' },
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
    { label: 'Blogs',        href: '/blogs' },
    { label: 'Contact Us',   href: '/contact' },
  ];

  const eventServices = [
    'Corporate Events','Employee Engagement','Brand & Public Events',
    'Event IPs','Exhibition & Fabrication','Event Production','Rural Marketing',
  ];

  const socialIcons = [
    { icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>, alt: 'Facebook' },
    { icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>, alt: 'Twitter/X' },
    { icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>, alt: 'Instagram' },
    { icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>, alt: 'LinkedIn' },
  ];

  return (
    <footer className="bg-[#0f172a]">
      {/* WhatsApp bar */}
      <div className="border-b border-[rgba(255,255,255,0.07)]" style={{ backgroundImage: 'linear-gradient(177deg, rgba(30,159,212,0.125) 0%, rgba(141,198,63,0.082) 100%)' }}>
        <div className="max-w-[1280px] mx-auto px-8 py-5 flex items-center justify-between flex-wrap gap-4">
          <p className="text-[#cbd5e1] text-[14px] font-medium">Planning an event? Let&apos;s talk directly.</p>
          <a href="https://wa.me/919821103919" target="_blank" rel="noopener noreferrer"
            className="bg-[#25d366] text-white font-bold text-[13px] px-6 py-2.5 rounded-[14px] flex items-center gap-2 hover:bg-[#1fb85a] transition-colors">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
            Plan your event on WhatsApp
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-[1280px] mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Column 1 — brand */}
        <div className="flex flex-col gap-5">
          <div className="bg-white rounded-[14px] p-2 w-fit">
            <img src={imgLogo} alt="MarketMen" className="h-12 object-contain" />
          </div>
          <p className="text-[#94a3b8] text-[13px] leading-[21px]">
            MarketMen is India&apos;s trusted events and consumer connect company — delivering corporate events, employee engagement, brand activations, rural marketing, and experiential campaigns across India since 1989.
          </p>
          <div className="flex gap-3">
            {socialIcons.map(s => (
              <a key={s.alt} href="#" className="bg-[rgba(255,255,255,0.08)] rounded-[14px] w-9 h-9 flex items-center justify-center hover:bg-[rgba(255,255,255,0.15)] transition-colors">
                {s.icon}
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
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-white"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
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
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[#1e9fd4]"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <p className="text-[#94a3b8] text-[12px] leading-5">Thacker Compound, 274, B. Bharucha Road, Marzban Parsi Colony, Grant Road (East), Mumbai – 400 007</p>
            </div>
            <a href="tel:+919821103919" className="flex gap-2.5 items-center hover:text-white transition-colors">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 shrink-0 text-[#1e9fd4]"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.94a16 16 0 0 0 6.12 6.12l.99-.99a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <span className="text-[#94a3b8] text-[13px]">+91 98211 03919</span>
            </a>
            <a href="mailto:connect@marketmen.in" className="flex gap-2.5 items-center hover:text-white transition-colors">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 shrink-0 text-[#1e9fd4]"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
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
