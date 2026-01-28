"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/data/blogPosts';

const BlogList = () => {
    return (
        <section className="bg-white py-16 sm:py-20 md:py-24 lg:py-32 border-t border-black/5">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                {/* Section Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-6 mb-10 sm:mb-14 lg:mb-20">
                    <div className="max-w-xl">
                        <h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-medium tracking-tight text-[#1A1A1A] uppercase mb-2 sm:mb-4">
                            LATEST <span className="text-[#F90]">ENTRIES</span>
                        </h2>
                        <p className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] text-[#666]">
                            Explore detailed case studies and insights from our recent field work across diverse Indian landscapes.
                        </p>
                    </div>

                    <div className="hidden lg:block text-[#D1D1D1] text-[11px] lg:text-[12px] font-black tracking-[0.15em] lg:tracking-[0.2em]">
                        {blogPosts.length} POSTS TOTAL
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
                    {blogPosts.map((post) => (
                        <div key={post.id} className="group cursor-pointer">
                            <Link href={`/blog/${post.slug}`} className="block">
                                {/* Image Container with Premium Reveal Effect */}
                                <div className="relative aspect-4/3 overflow-hidden mb-6 sm:mb-8 lg:mb-10 bg-[#F3F3F3]">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-all duration-1000 ease-out group-hover:scale-110 group-hover:rotate-1"
                                        priority
                                    />
                                    {/* Overlay on hover */}
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                        <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="space-y-3 sm:space-y-4">
                                    <div className="flex items-center gap-2 sm:gap-3">
                                        <div className="h-px w-4 sm:w-6 bg-[#F90]" />
                                        <span className="text-[9px] sm:text-[10px] font-black tracking-[0.2em] sm:tracking-[0.3em] text-[#888] uppercase">
                                            {post.date}
                                        </span>
                                    </div>

                                    <h3 className="text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px] font-bold text-[#1A1A1A] leading-[1.3] uppercase tracking-tight line-clamp-3 min-h-[50px] sm:min-h-[60px] lg:min-h-[70px] group-hover:text-[#F90] transition-colors">
                                        {post.title}
                                    </h3>

                                    <p className="text-[13px] sm:text-[14px] leading-relaxed text-[#666] line-clamp-3 sm:line-clamp-4">
                                        {post.description}
                                    </p>

                                    <div className="pt-4 sm:pt-5 lg:pt-6 flex items-center gap-2">
                                        <span className="text-[9px] sm:text-[10px] font-black tracking-[0.3em] sm:tracking-[0.4em] uppercase text-[#1A1A1A]">View Article</span>
                                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#F90] scale-0 group-hover:scale-100 transition-transform duration-300" />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogList;
