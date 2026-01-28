"use client";

import React from 'react';

const HomeFooter = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const instagramUrl = "https://www.instagram.com/open_deltaco?igsh=b3Y2NXRhcjdudTY%3D&utm_source=qr";

    return (
        <section className="bg-white pt-32 pb-16 px-6 md:px-12 lg:px-20 overflow-hidden">
            <div className="max-w-[1440px] mx-auto text-center mb-40">
                <h2 className="text-[48px] md:text-[80px] lg:text-[120px] font-black leading-none tracking-tight text-[#111] uppercase select-none">
                    KICKSTART YOUR<br />
                    <span className="text-[#FF8C00]">INNOVATION</span> TODAY
                </h2>
            </div>

            <div className="max-w-[1440px] mx-auto border-t border-black/5 pt-12">
                <div className="flex flex-col md:flex-row justify-between items-center gap-12 relative">
                    {/* Back Top Button */}
                    <button
                        onClick={scrollToTop}
                        className="w-16 h-16 rounded-full bg-black flex items-center justify-center text-white shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition-all duration-500 hover:scale-110 active:scale-95 group z-10"
                        title="Scroll to top"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            className="w-6 h-6 fill-none stroke-current"
                            strokeWidth="3"
                        >
                            <path d="M12 19V5M5 12l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    {/* Center Text */}
                    <div className="flex flex-col items-center gap-1 md:absolute md:left-1/2 md:-translate-x-1/2 text-center">
                        <span className="text-[9px] font-black tracking-[0.5em] text-[#BBB] uppercase">ESTABLISHED</span>
                        <span className="text-[11px] font-black tracking-[0.3em] uppercase">
                            <span className="text-[#FF8C00]">OPEN</span> <span className="text-[#111]">DELTA @2026</span>
                        </span>
                        <span className="text-[10px] text-gray-400 tracking-widest font-medium mt-1 normal-case">Made with ❤️ by Sharnel</span>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-4">
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
        className="w-10 h-10 rounded-full bg-[#f8f9fa] border border-black/5 flex items-center justify-center text-black hover:bg-black hover:text-white transition-all duration-300 group shadow-sm"
    >
        {isGraphic ? (
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current transition-transform group-hover:scale-110" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
        ) : (
            <span className="text-[14px] font-black transition-transform group-hover:scale-110">{label}</span>
        )}
    </a>
);

export default HomeFooter;
