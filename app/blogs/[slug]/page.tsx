'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import PageLayout from '@/components/shared/PageLayout';
import { blogs, getBlogBySlug } from '@/lib/blogs';

export default function BlogPostPage() {
  const params = useParams();
  const slug = typeof params?.slug === 'string' ? params.slug : '';
  const blog = getBlogBySlug(slug);

  // Get other blogs for "More Articles"
  const otherBlogs = blogs.filter(b => b.slug !== slug).slice(0, 2);

  if (!blog) {
    return (
      <PageLayout>
        <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 py-20">
          <h1 className="text-[#0f172a] font-extrabold text-[32px]">Article not found</h1>
          <Link href="/blogs" className="text-[#1e9fd4] font-bold hover:underline">← Back to Blogs</Link>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      {/* ── Hero ── */}
      <section className="relative flex items-end overflow-hidden" style={{ minHeight: '480px' }}>
        <img
          src={blog.coverImage}
          alt={blog.title}
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,6,24,0.92)] via-[rgba(10,6,24,0.55)] to-[rgba(10,6,24,0.2)]" />
        <div className="relative z-10 w-full max-w-[900px] mx-auto px-8 pb-14 pt-32">
          <Link href="/blogs" className="inline-flex items-center gap-2 text-[#94a3b8] text-[13px] font-medium hover:text-white transition-colors mb-6">
            ← All Articles
          </Link>
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="bg-[#1e9fd4] text-white text-[11px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
              {blog.category}
            </span>
            <span className="text-[#94a3b8] text-[13px]">{blog.date}</span>
            <span className="text-[#475569]">·</span>
            <span className="text-[#94a3b8] text-[13px]">{blog.readTime}</span>
          </div>
          <h1 className="font-extrabold text-white leading-[1.1] tracking-[-1px]" style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>
            {blog.title}
          </h1>
        </div>
      </section>

      {/* ── Article Body ── */}
      <section className="bg-white py-16 px-8">
        <div className="max-w-[760px] mx-auto">

          {/* Excerpt / intro callout */}
          <div className="border-l-4 border-[#1e9fd4] bg-[#f0f9ff] rounded-r-2xl px-6 py-5 mb-10">
            <p className="text-[#0f172a] text-[16px] leading-7 font-medium italic">{blog.excerpt}</p>
          </div>

          {/* Sections */}
          {blog.sections.map((section, i) => (
            <div key={i} className="mb-10">
              {section.heading && (
                <h2 className="text-[#0f172a] font-extrabold text-[22px] leading-tight tracking-[-0.3px] mb-4 mt-8">
                  {section.heading}
                </h2>
              )}
              {section.subheadings && section.subheadings.map((sub, j) => (
                <div key={j} className="mb-6">
                  <h3 className="text-[#0f172a] font-bold text-[17px] leading-snug mb-2">{sub.title}</h3>
                  <p className="text-[#475569] text-[15px] leading-[1.8]">{sub.body}</p>
                </div>
              ))}
              {section.body && (
                <div className="text-[#475569] text-[15px] leading-[1.8] whitespace-pre-line">{section.body}</div>
              )}
              {section.bullets && (
                <ul className="mt-3 flex flex-col gap-2.5">
                  {section.bullets.map((b, k) => (
                    <li key={k} className="flex items-start gap-3">
                      <span className="mt-2 w-2 h-2 rounded-full bg-[#1e9fd4] shrink-0" />
                      <span className="text-[#475569] text-[15px] leading-[1.8]">{b}</span>
                    </li>
                  ))}
                </ul>
              )}
              {section.closing && (
                <p className="text-[#475569] text-[15px] leading-[1.8] mt-4">{section.closing}</p>
              )}
            </div>
          ))}

          {/* Share / back */}
          <div className="border-t border-[#e2e8f0] pt-8 mt-8 flex flex-wrap items-center justify-between gap-4">
            <Link href="/blogs" className="text-[#1e9fd4] font-bold text-[14px] hover:underline flex items-center gap-1">
              ← Back to All Articles
            </Link>
            <a
              href="https://wa.me/919821103919"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25d366] text-white font-bold text-[13px] px-5 py-2.5 rounded-[12px] flex items-center gap-2 hover:bg-[#1fb85a] transition-colors"
            >
              <svg viewBox="0 0 32 32" className="w-4 h-4 fill-white shrink-0">
                <path d="M16 2C8.268 2 2 8.268 2 16c0 2.47.675 4.783 1.85 6.766L2 30l7.447-1.822A13.94 13.94 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.6a11.56 11.56 0 01-5.9-1.617l-.423-.25-4.42 1.082 1.116-4.302-.276-.44A11.6 11.6 0 014.4 16C4.4 9.6 9.6 4.4 16 4.4S27.6 9.6 27.6 16 22.4 27.6 16 27.6zm6.362-8.668c-.348-.174-2.06-1.016-2.38-1.132-.318-.116-.55-.174-.78.174-.232.348-.898 1.132-1.102 1.364-.202.232-.404.26-.752.086-.348-.174-1.47-.542-2.8-1.728-1.034-.922-1.732-2.06-1.936-2.408-.202-.348-.022-.536.152-.71.156-.154.348-.404.522-.606.174-.202.232-.348.348-.58.116-.232.058-.434-.028-.608-.088-.174-.78-1.884-1.07-2.578-.28-.676-.566-.584-.78-.594l-.664-.012c-.232 0-.608.086-.926.434-.318.348-1.216 1.188-1.216 2.896s1.244 3.36 1.418 3.592c.174.232 2.45 3.738 5.94 5.24.83.358 1.478.572 1.982.732.832.264 1.59.226 2.188.138.668-.1 2.06-.842 2.35-1.656.29-.814.29-1.51.202-1.656-.086-.146-.318-.232-.666-.406z" />
              </svg>
              Discuss with Us
            </a>
          </div>
        </div>
      </section>

      {/* ── More Articles ── */}
      {otherBlogs.length > 0 && (
        <section className="bg-[#f8fafc] py-16 px-8">
          <div className="max-w-[1280px] mx-auto">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-6 h-0.5 rounded-full bg-[#1e9fd4]" />
              <p className="text-[#1e9fd4] text-[11px] font-bold tracking-[1.1px] uppercase">More Articles</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[760px]">
              {otherBlogs.map(b => (
                <Link key={b.slug} href={`/blogs/${b.slug}`} className="group bg-white border border-[#e2e8f0] rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="h-40 overflow-hidden">
                    <img src={b.coverImage} alt={b.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-5">
                    <p className="text-[#94a3b8] text-[11px] mb-1">{b.date} · {b.readTime}</p>
                    <p className="text-[#0f172a] font-bold text-[14px] leading-snug group-hover:text-[#1e9fd4] transition-colors">{b.title}</p>
                    <span className="text-[#1e9fd4] font-bold text-[12px] mt-2 inline-block">Read Article →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className="bg-gradient-to-r from-[#1e9fd4] to-[#142f4c] py-16 px-8">
        <div className="max-w-[896px] mx-auto text-center">
          <h2 className="text-[32px] font-extrabold text-white leading-tight tracking-[-0.5px] mb-3">
            Planning a Campaign? Let&apos;s Talk.
          </h2>
          <p className="text-[rgba(255,255,255,0.8)] text-[15px] mb-8">
            From strategy to on-ground execution — one partner, complete accountability.
          </p>
          <Link href="/contact" className="bg-white text-[#0f172a] font-bold text-[14px] px-8 py-4 rounded-[14px] hover:bg-gray-100 transition-colors inline-block">
            Get in Touch →
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
