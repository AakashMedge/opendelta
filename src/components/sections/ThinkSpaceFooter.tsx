"use client";

import React from 'react';

const ThinkSpaceFooter = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <section className="bg-[#F3F3F3] pt-20 pb-12">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                {/* Big Info Text */}
                <div className="max-w-5xl mb-32">
                    <p className="text-[20px] md:text-[28px] lg:text-[32px] font-medium leading-[1.3] text-[#111] uppercase tracking-tight">
                        BOTH ROLES OFFER OPPORTUNITIES TO EARN "THOUGHT LEADER" STATUS BASED ON THE QUALITY AND IMPACT OF CONTRIBUTIONS, ENCOURAGING ONGOING ENGAGEMENT IN INDIA'S SOCIETAL PROBLEM-SOLVING EFFORT.
                    </p>
                </div>

                {/* Footer Bottom Row */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-black/5 gap-8">
                    {/* Back Top */}
                    <button
                        onClick={scrollToTop}
                        className="flex items-center gap-2 group cursor-pointer"
                    >
                        <span className="text-[10px] font-black tracking-[0.2em] text-[#111]">BACK TOP</span>
                        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current transition-transform group-hover:-translate-y-1" strokeWidth="2.5">
                            <path d="M7 17l10-10M17 17V7H7" />
                        </svg>
                    </button>

                    {/* Copyright */}
                    <div className="flex flex-col items-center justify-center text-[10px] font-black tracking-[0.2em] uppercase">
                        <div><span className="text-[#FF8C00]">OPEN</span> <span className="text-[#888]">DELTA @2026</span></div>
                        <div className="text-[10px] text-gray-400 tracking-widest font-medium mt-1 normal-case">Made with ❤️ by Sharnel</div>
                    </div>

                    {/* Socials */}
                    <div className="flex gap-4">
                        <SocialIcon type="instagram" />
                        <SocialIcon type="twitter" />
                    </div>
                </div>
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
            className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 cursor-pointer group"
        >
            {type === 'instagram' ? (
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current transition-transform group-hover:scale-110" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
            ) : (
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current transition-transform group-hover:scale-110" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
            )}
        </a>
    );
};

export default ThinkSpaceFooter;
