import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import MatchLabFooter from '@/components/sections/MatchLabFooter';
import GetInTouchTicker from '@/components/sections/GetInTouchTicker';
import { blogPosts } from '@/data/blogPosts';

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    // Get 3 related posts (excluding current one)
    const relatedPosts = blogPosts.filter(p => p.slug !== slug).slice(0, 3);

    return (
        <>
            <Navbar />
            <main className="bg-[#F3F3F3] min-h-screen pt-32 md:pt-40 pb-20">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
                    {/* Title */}
                    <div className="mb-12">
                        <h1 className="text-[32px] md:text-[48px] lg:text-[56px] font-bold text-[#1A1A1A] leading-[1.05] uppercase tracking-tight max-w-6xl">
                            {post.title}
                        </h1>
                    </div>

                    {/* Metadata Row */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 border-t border-black/10 pt-10">
                        <div>
                            <span className="text-[10px] md:text-[11px] font-black tracking-[0.2em] text-[#888] uppercase block mb-3">
                                POSTED BY
                            </span>
                            <span className="text-[15px] md:text-[17px] font-bold text-[#1A1A1A]">
                                {post.postedBy || "OPEN DELTA"}
                            </span>
                        </div>
                        <div>
                            <span className="text-[10px] md:text-[11px] font-black tracking-[0.2em] text-[#888] uppercase block mb-3">
                                POSTED AT
                            </span>
                            <span className="text-[15px] md:text-[17px] font-bold text-[#1A1A1A]">
                                {post.postedAt || "UNCATEGORY"}
                            </span>
                        </div>
                        <div>
                            <span className="text-[10px] md:text-[11px] font-black tracking-[0.2em] text-[#888] uppercase block mb-3">
                                POSTED ON
                            </span>
                            <span className="text-[15px] md:text-[17px] font-bold text-[#1A1A1A]">
                                {post.date}
                            </span>
                        </div>
                    </div>

                    {/* Hero Image */}
                    <div className="relative w-full aspect-4/3 md:aspect-21/9 overflow-hidden rounded-[20px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] mb-20">
                        <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Content Section */}
                    <div className="max-w-[800px] mx-auto pb-32">
                        <div className="space-y-12">
                            {post.content && post.content.map((section, idx) => {
                                if (section.type === 'paragraph') {
                                    return (
                                        <p key={idx} className="text-[18px] md:text-[20px] leading-[1.7] text-[#333]">
                                            {section.text}
                                        </p>
                                    );
                                }
                                if (section.type === 'heading') {
                                    return (
                                        <h2 key={idx} className="text-[28px] md:text-[36px] font-bold text-[#1A1A1A] tracking-tight uppercase pt-6">
                                            {section.text}
                                        </h2>
                                    );
                                }
                                if (section.type === 'list' && section.items) {
                                    return (
                                        <ul key={idx} className="space-y-4 pt-4">
                                            {section.items.map((item, itemIdx) => (
                                                <li key={itemIdx} className="flex gap-4 text-[18px] md:text-[20px] leading-[1.7] text-[#333]">
                                                    <span className="text-[#F90] mt-1.5 shrink-0">•</span>
                                                    <span dangerouslySetInnerHTML={{ __html: item }} />
                                                </li>
                                            ))}
                                        </ul>
                                    );
                                }
                                return null;
                            })}
                        </div>
                    </div>

                    {/* Related Articles Section */}
                    <section className="border-t border-black/10 pt-20 pb-32">
                        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-16">
                            <div className="max-w-2xl">
                                <span className="text-[10px] md:text-[11px] font-black tracking-[0.2em] text-[#888] uppercase block mb-6">
                                    EXPLORE MORE ARTICLES
                                </span>
                                <h2 className="text-[32px] md:text-[48px] lg:text-[56px] font-bold text-[#1A1A1A] leading-[1.1] uppercase tracking-tighter">
                                    DISCOVER MORE<br />INSIGHTS AND<br />INSPIRATION
                                </h2>
                            </div>
                            <div className="lg:max-w-sm">
                                <p className="text-[14px] md:text-[15px] leading-relaxed text-[#555] font-medium">
                                    Keep exploring our blog for a wealth of knowledge and inspiration. Check out these related posts to delve deeper into the topics that matter to you. Let our content empower your professional journey.
                                </p>
                            </div>
                        </div>

                        {/* Articles List */}
                        <div className="space-y-0">
                            {relatedPosts.map((relatedPost) => (
                                <Link
                                    key={relatedPost.id}
                                    href={`/blog/${relatedPost.slug}`}
                                    className="group block border-t border-black/10 py-12 transition-all hover:bg-black/2"
                                >
                                    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                                        <div className="relative w-full md:w-[320px] aspect-video overflow-hidden rounded-lg shrink-0">
                                            <Image
                                                src={relatedPost.image}
                                                alt={relatedPost.title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                        </div>
                                        <h3 className="text-[16px] md:text-[20px] lg:text-[24px] font-bold text-[#1A1A1A] leading-tight uppercase tracking-tight group-hover:text-[#F90] transition-colors">
                                            {relatedPost.title}
                                        </h3>
                                    </div>
                                </Link>
                            ))}
                            <div className="border-t border-black/10"></div>
                        </div>
                    </section>
                </div>

                <div className="mt-20">
                    <GetInTouchTicker />
                </div>
            </main>
            <MatchLabFooter />
        </>
    );
}
