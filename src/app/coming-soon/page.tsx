"use client";

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';

const ComingSoon = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen bg-[#F3F3F3] flex flex-col">
            <Navbar />

            {/* Main Content */}
            <main className="flex-1 flex flex-col items-center justify-center px-6">
                {/* Three Dots Animation */}
                <div className="flex gap-4 mb-16">
                    <div className="w-8 h-8 bg-black rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                    <div className="w-8 h-8 bg-black rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="w-8 h-8 bg-black rounded-full animate-bounce"></div>
                </div>

                {/* Text Content */}
                <div className="text-center mb-12">
                    <h1 className="text-[42px] md:text-[64px] font-medium tracking-tight text-[#1A1A1A] uppercase">
                        GOOD THINGS TAKE TIME
                    </h1>
                </div>

                {/* Back Button */}
                <Link
                    href="/home"
                    className="px-10 py-3 border border-black/20 rounded-full text-[11px] font-black tracking-widest hover:bg-black hover:text-white transition-all uppercase"
                >
                    BACK TO HOMEPAGE
                </Link>
            </main>

            {/* Simple Footer */}
            <footer className="px-6 md:px-12 py-12 flex flex-col md:flex-row justify-between items-center bg-[#F3F3F3] border-t border-black/5 gap-8">
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
                <div className="text-[10px] font-black tracking-[0.2em] uppercase">
                    <span className="text-[#FF8C00]">OPEN</span> <span className="text-[#888]">DELTA 2026</span>
                </div>

                {/* Socials */}
                <div className="flex gap-4">
                    <SocialIcon type="instagram" />
                    <SocialIcon type="twitter" />
                </div>
            </footer>
        </div>
    );
};

const SocialIcon = ({ type }: { type: 'instagram' | 'twitter' }) => {
    const instagramUrl = "https://www.instagram.com/open_deltaco?igsh=b3Y2NXRhcjdudTY%3D&utm_source=qr";

    return (
        <a
            href={type === 'instagram' ? instagramUrl : "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 cursor-pointer group text-[#111]"
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

export default ComingSoon;
