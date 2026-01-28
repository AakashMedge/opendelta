"use client";

import React from 'react';

const BlogHero = () => {
    return (
        <section className="relative min-h-[80vh] flex items-center bg-[#F8F9FA] overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-[#F3F3F3] -skew-x-12 translate-x-24" />
                <div className="absolute top-[20%] left-[10%] w-64 h-64 bg-black/2 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-[10%] right-[15%] w-96 h-96 bg-[#F90]/5 rounded-full blur-3xl" />

                {/* Modern Grid Pattern Overlay */}
                <div className="absolute inset-0 opacity-40 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[40px_40px]" />
            </div>

            <div
                className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 w-full pb-16 sm:pb-24 lg:pb-32"
                style={{ paddingTop: 'calc(var(--navbar-height, 100px) + 20px)' }}
            >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-end">
                    <div className="lg:col-span-8">
                        {/* Eyebrow */}
                        <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                            <div className="h-px w-8 sm:w-12 bg-[#F90]" />
                            <span className="text-[9px] sm:text-[10px] md:text-[11px] font-black tracking-[0.2em] sm:tracking-[0.3em] text-[#1A1A1A] uppercase">
                                Knowledge Hub & Insights
                            </span>
                        </div>

                        {/* Heading */}
                        <h1 className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] xl:text-[56px] font-medium leading-[0.9] tracking-tighter text-[#1A1A1A] mb-8 sm:mb-10 lg:mb-12 uppercase italic">
                            REWRITING<br />
                            <span className="text-[#F90]">POSSIBILITIES.</span>
                        </h1>

                        <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-relaxed text-[#555] font-medium max-w-2xl border-l-2 border-black/10 pl-4 sm:pl-6 md:pl-8 ml-1 sm:ml-2">
                            A curated repository of challenges, breakthroughs, and radical innovations from the grassroots of India. Stay informed, get inspired, and join the revolution.
                        </p>
                    </div>

                    <div className="lg:col-span-4 flex flex-col items-start lg:items-end gap-8 sm:gap-10 lg:gap-12">
                        <div className="flex gap-4 sm:gap-6">
                            <SocialIcon type="instagram" />
                            <SocialIcon type="twitter" />
                        </div>

                        <div className="text-right hidden lg:block">
                            <span className="text-[64px] font-black text-black/5 leading-none block">2026</span>
                            <span className="text-[10px] font-bold text-black/20 tracking-[0.5em] uppercase">Open Delta Ed.</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Indicator */}
            <div className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 sm:gap-4">
                <div className="w-px h-8 sm:h-12 bg-linear-to-b from-black/20 to-transparent" />
                <span className="text-[8px] sm:text-[9px] font-black tracking-[0.3em] sm:tracking-[0.4em] text-black/40 uppercase vertical-text">Scroll</span>
            </div>
        </section>
    );
};

const SocialIcon = ({ type }: { type: 'instagram' | 'twitter' }) => {
    const instagramUrl = "https://www.instagram.com/open_deltaco?igsh=b3Y2NXRhcjdudTY%3D&utm_source=qr";

    return (
        <a
            href={type === 'instagram' ? instagramUrl : "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 cursor-pointer group"
        >
            {type === 'instagram' ? (
                <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-current fill-none transition-transform group-hover:scale-110" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
            ) : (
                <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-current fill-none transition-transform group-hover:scale-110" strokeWidth="2">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
            )}
        </a>
    );
};

export default BlogHero;
