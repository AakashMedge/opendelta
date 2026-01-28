"use client";

import React from 'react';

const HomeFooter = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const instagramUrl = "https://www.instagram.com/open_deltaco?igsh=b3Y2NXRhcjdudTY%3D&utm_source=qr";

    return (
        <section className="bg-white pt-16 sm:pt-20 md:pt-24 lg:pt-32 pb-10 sm:pb-12 lg:pb-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 overflow-hidden">
            <div className="max-w-[1440px] mx-auto text-center mb-16 sm:mb-24 md:mb-32 lg:mb-40">
                <h2 className="text-[32px] sm:text-[48px] md:text-[64px] lg:text-[96px] xl:text-[120px] font-black leading-none tracking-tight text-[#111] uppercase select-none">
                    KICKSTART YOUR<br />
                    <span className="text-[#FF8C00]">INNOVATION</span> TODAY
                </h2>
            </div>

            <div className="max-w-[1440px] mx-auto border-t border-black/5 pt-8 sm:pt-10 lg:pt-12">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8 lg:gap-12 relative">
                    {/* Back Top Button */}
                    <button
                        onClick={scrollToTop}
                        className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-black flex items-center justify-center text-white shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition-all duration-500 hover:scale-110 active:scale-95 group z-10"
                        title="Scroll to top"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            className="w-5 h-5 sm:w-6 sm:h-6 fill-none stroke-current"
                            strokeWidth="3"
                        >
                            <path d="M12 19V5M5 12l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    {/* Center Text */}
                    <div className="flex flex-col items-center gap-1 md:absolute md:left-1/2 md:-translate-x-1/2 text-center order-first md:order-none">
                        <span className="text-[8px] sm:text-[9px] font-black tracking-[0.4em] sm:tracking-[0.5em] text-[#BBB] uppercase">ESTABLISHED</span>
                        <span className="text-[10px] sm:text-[11px] font-black tracking-[0.2em] sm:tracking-[0.3em] uppercase">
                            <span className="text-[#FF8C00]">OPEN</span> <span className="text-[#111]">DELTA @2026</span>
                        </span>
                        <span className="text-[9px] sm:text-[10px] text-gray-400 tracking-wider sm:tracking-widest font-medium mt-1 normal-case">Made with ❤️ by Sharnel</span>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-3 sm:gap-4">
                        <SocialButton
                            href="#"
                            label="𝕏"
                            isGraphic={false}
                        />
                        <SocialButton
                            href={instagramUrl}
                            label="Instagram"
                            isGraphic={true}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const SocialButton = ({ href, label, isGraphic }: { href: string; label: string; isGraphic: boolean }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#f8f9fa] border border-black/5 flex items-center justify-center text-black hover:bg-black hover:text-white transition-all duration-300 group shadow-sm"
    >
        {isGraphic ? (
            <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5 fill-none stroke-current transition-transform group-hover:scale-110" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
        ) : (
            <span className="text-[12px] sm:text-[14px] font-black transition-transform group-hover:scale-110">{label}</span>
        )}
    </a>
);

export default HomeFooter;
