'use client';

import React from 'react';
import Link from 'next/link';
import PageLayout from '@/components/shared/PageLayout';
import { blogs } from '@/lib/blogs';

function BlogCard({ blog, featured = false }: { blog: typeof blogs[0]; featured?: boolean }) {
  if (featured) {
    return (
      <Link href={`/blogs/${blog.slug}`} className="group block bg-white border border-[#e2e8f0] rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 md:col-span-2 lg:col-span-3">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 h-64 md:h-auto overflow-hidden relative">
            <img
              src={blog.coverImage}
              alt={blog.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="eager"
            />
            <span className="absolute top-4 left-4 bg-[#1e9fd4] text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
              Featured
            </span>
          </div>
          <div className="md:w-1/2 p-8 flex flex-col justify-center gap-4">
            <div className="flex items-center gap-3">
              <span className="bg-[#ebf7fc] text-[#1e9fd4] text-[11px] font-bold px-3 py-1 rounded-full">{blog.category}</span>
              <span className="text-[#94a3b8] text-[12px]">{blog.readTime}</span>
            </div>
            <h2 className="text-[#0f172a] font-extrabold text-[24px] leading-tight tracking-[-0.3px] group-hover:text-[#1e9fd4] transition-colors">
              {blog.title}
            </h2>
            <p className="text-[#64748b] text-[14px] leading-7">{blog.excerpt}</p>
            <div className="flex items-center justify-between mt-2">
              <span className="text-[#94a3b8] text-[12px]">{blog.date}</span>
              <span className="text-[#1e9fd4] font-bold text-[13px] flex items-center gap-1 group-hover:gap-2 transition-all">
                Read Article →
              </span>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/blogs/${blog.slug}`} className="group block bg-white border border-[#e2e8f0] rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="h-48 overflow-hidden relative">
        <img
          src={blog.coverImage}
          alt={blog.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <span className="absolute top-3 left-3 bg-[#ebf7fc] text-[#1e9fd4] text-[10px] font-bold px-2.5 py-1 rounded-full">
          {blog.category}
        </span>
      </div>
      <div className="p-5 flex flex-col gap-2.5">
        <div className="flex items-center gap-2">
          <span className="text-[#94a3b8] text-[11px]">{blog.date}</span>
          <span className="text-[#e2e8f0]">·</span>
          <span className="text-[#94a3b8] text-[11px]">{blog.readTime}</span>
        </div>
        <h3 className="text-[#0f172a] font-bold text-[15px] leading-snug group-hover:text-[#1e9fd4] transition-colors">
          {blog.title}
        </h3>
        <p className="text-[#64748b] text-[12px] leading-5 line-clamp-2">{blog.excerpt}</p>
        <span className="text-[#1e9fd4] font-bold text-[12px] mt-1 flex items-center gap-1 group-hover:gap-2 transition-all">
          Read Article →
        </span>
      </div>
    </Link>
  );
}

export default function BlogsPage() {
  const [featured, ...rest] = blogs;

  return (
    <PageLayout>
      {/* ── Hero ── */}
      <section className="relative flex items-center overflow-hidden" style={{ minHeight: '420px' }}>
        <img
          src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1400&q=85&fit=crop"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-[rgba(10,6,24,0.72)]" />
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-8 py-20">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-0.5 rounded-full bg-[#1e9fd4]" />
            <p className="text-[#1e9fd4] text-[11px] font-bold tracking-[1.1px] uppercase">Insights & Blogs</p>
          </div>
          <h1 className="font-extrabold text-white leading-[1.1] tracking-[-1.5px] mb-4" style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}>
            Ideas That Move <span className="text-[#1e9fd4]">Brands Forward</span>
          </h1>
          <p className="text-[#e2e8f0] text-[17px] font-medium max-w-[560px] leading-7">
            Strategy, execution insights, and field-level learning from 37+ years of on-ground brand marketing across India.
          </p>
        </div>
      </section>

      {/* ── Blog Grid ── */}
      <section className="bg-[#f8fafc] py-20 px-8">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <BlogCard blog={featured} featured />
            {rest.map(blog => (
              <BlogCard key={blog.slug} blog={blog} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-gradient-to-r from-[#2b1f3a] to-[#142f4c] py-16 px-8">
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
              <svg viewBox="0 0 32 32" className="w-5 h-5 fill-white shrink-0">
                <path d="M16 2C8.268 2 2 8.268 2 16c0 2.47.675 4.783 1.85 6.766L2 30l7.447-1.822A13.94 13.94 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.6a11.56 11.56 0 01-5.9-1.617l-.423-.25-4.42 1.082 1.116-4.302-.276-.44A11.6 11.6 0 014.4 16C4.4 9.6 9.6 4.4 16 4.4S27.6 9.6 27.6 16 22.4 27.6 16 27.6zm6.362-8.668c-.348-.174-2.06-1.016-2.38-1.132-.318-.116-.55-.174-.78.174-.232.348-.898 1.132-1.102 1.364-.202.232-.404.26-.752.086-.348-.174-1.47-.542-2.8-1.728-1.034-.922-1.732-2.06-1.936-2.408-.202-.348-.022-.536.152-.71.156-.154.348-.404.522-.606.174-.202.232-.348.348-.58.116-.232.058-.434-.028-.608-.088-.174-.78-1.884-1.07-2.578-.28-.676-.566-.584-.78-.594l-.664-.012c-.232 0-.608.086-.926.434-.318.348-1.216 1.188-1.216 2.896s1.244 3.36 1.418 3.592c.174.232 2.45 3.738 5.94 5.24.83.358 1.478.572 1.982.732.832.264 1.59.226 2.188.138.668-.1 2.06-.842 2.35-1.656.29-.814.29-1.51.202-1.656-.086-.146-.318-.232-.666-.406z" />
              </svg>
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
