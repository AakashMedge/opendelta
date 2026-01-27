"use client";

import React from 'react';

const BlogHero = () => {
    return (
        <section className="relative min-h-screen bg-[#F3F3F3] pt-[150px] pb-24 overflow-hidden flex flex-col justify-between">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 w-full">
                {/* Small Label */}
                <div className="text-[10px] md:text-[11px] font-black tracking-[0.2em] text-[#333] mb-12 uppercase">
                    EXPLORE OUR LATEST WORK
                </div>

                {/* Main Heading */}
                <div className="max-w-4xl mb-12">
                    <h1 className="text-[48px] md:text-[72px] lg:text-[88px] font-medium leading-none tracking-tight text-[#1A1A1A] mb-12 uppercase">
                        STAY INFORMED AND<br />INSPIRED
                    </h1>

                    <p className="text-[16px] md:text-[18px] leading-[1.6] text-[#444] font-medium max-w-2xl">
                        Welcome to our repository of challenges, where we showcase some of the causes the community is passionate about. Stay up-to-date, get inspired, and enhance your professional journey through our informative and engaging use cases.
                    </p>
                </div>
            </div>

            {/* Bottom Row */}
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 w-full flex justify-between items-end">
                {/* Social icons */}
                <div className="flex gap-4">
                    <SocialIcon type="instagram" />
                    <SocialIcon type="twitter" />
                </div>

                {/* Scroll Prompt */}
                <button className="flex items-center gap-3 group">
                    <span className="text-[10px] font-black tracking-[0.2em] text-[#1A1A1A]">SCROLL TO EXPLORE</span>
                    <div className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center transition-all group-hover:bg-black group-hover:text-white">
                        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="2.5">
                            <path d="M7 7l10 10M17 7v10H7" />
                        </svg>
                    </div>
                </button>
            </div>
        </section>
    );
};

const SocialIcon = ({ type }: { type: 'instagram' | 'twitter' }) => (
    <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all cursor-pointer">
        {type === 'instagram' ? (
            <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-current fill-none" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
        ) : (
            <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-current fill-none" strokeWidth="2"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
        )}
    </div>
);

export default BlogHero;
