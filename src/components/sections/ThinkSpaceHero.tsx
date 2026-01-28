"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const ThinkSpaceHero = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const paragraphs = [
        "The growing complexity of societal challenges necessitates interdisciplinary approaches to problem-solving. As the COVID-19 pandemic has demonstrated, addressing global issues requires expertise from various fields, including epidemiology, public health, economics, and political science. This complexity drives the need for collaborative efforts that transcend traditional disciplinary boundaries.",
        "In our increasingly distracted world, the value of uninterrupted, focused discussions cannot be overstated. Think Spaces offer sanctuaries for collective contemplation, providing environments free from distractions where diverse minds can converge to tackle pressing societal issues. These spaces foster deep reflection and collaborative problem-solving, nurturing ideas with the potential to reshape our nation's future.",
        "Historically, intellectual gatherings have led to transformative ideas. The Nobel Prize-winning work of Elinor Ostrom on protecting common pool resources exemplifies how interdisciplinary research can address complex social challenges. Ostrom's research brought together insights from environmental science, law, political science, and economics, demonstrating the power of collaborative thinking in solving seemingly intractable problems."
    ];

    // Animation progress calculation
    const heroScrollFactor = 0.3;

    return (
        <div className="bg-[#E9F2F7] selection:bg-black selection:text-white">
            {/* 1. Hero Content Section */}
            <section
                className="relative px-4 sm:px-6 md:px-8 lg:px-12 pb-8 sm:pb-12 overflow-hidden z-10"
                style={{ paddingTop: 'calc(var(--navbar-height, 100px) + 20px)' }}
            >
                <div
                    className="max-w-[1440px] mx-auto transition-transform duration-100 ease-out"
                    style={{ transform: `translateY(${scrollY * -heroScrollFactor}px)` }}
                >
                    <div className="max-w-4xl">
                        <div className="text-[9px] sm:text-[10px] md:text-[12px] font-black tracking-[0.2em] sm:tracking-[0.3em] text-[#333] mb-4 sm:mb-6 uppercase">
                            THINKSPACE
                        </div>
                        <h1 className="text-[26px] sm:text-[36px] md:text-[44px] lg:text-[52px] xl:text-[56px] font-medium leading-[1.05] tracking-tight text-[#1A1A1A] mb-8 sm:mb-10 lg:mb-12">
                            THE LOST ART OF<br />
                            COMMUNAL THINKING
                        </h1>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 xl:gap-12">
                            <p className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] leading-[1.6] text-[#444] font-medium">
                                Imagine a modern-day phenomenon, where the spirit of Socratic dialogue meets 21st-century innovation. This is Think Space – a concept that resurrects the lost art of communal thinking in today&apos;s digitally saturated world.
                            </p>
                            <p className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] leading-[1.6] text-[#444] font-medium">
                                These physical and virtual forums provide a safe harbor for India&apos;s brightest minds to assemble, deliberate, and ideate on critical societal issues. Think Space is more than just a location; it&apos;s a catalyst for transformative ideas, where the collective intelligence of participants is harnessed to address the complex challenges facing our nation.
                            </p>
                        </div>
                    </div>

                    {/* Bottom Prompt Bar */}
                    <div className="mt-12 sm:mt-16 lg:mt-24 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-black/5 pb-6 sm:pb-8">
                        <div className="flex gap-3 sm:gap-4">
                            <SocialIcon type="instagram" />
                            <SocialIcon type="twitter" />
                        </div>
                        <div className="flex items-center gap-2 sm:gap-3">
                            <span className="text-[9px] sm:text-[10px] font-black tracking-[0.15em] sm:tracking-[0.2em] text-[#1A1A1A]">SCROLL TO EXPLORE</span>
                            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-black/10 flex items-center justify-center">
                                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-none stroke-current" strokeWidth="2.5">
                                    <path d="M7 7l10 10M17 7v10H7" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. The Image Section (Reveal - Contained Height) */}
            <div className="w-full bg-[#E9F2F7] px-2 sm:px-4 md:px-[40px] pb-[40px] sm:pb-[60px] md:pb-[80px] z-0">
                <div className="w-full h-[280px] sm:h-[400px] md:h-[550px] lg:h-[700px] xl:h-[800px] relative overflow-hidden">
                    <div
                        className="absolute inset-0 w-full h-[100%] -top-[10%] transition-transform duration-200 ease-out"
                        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
                    >
                        <Image
                            src="/thinkspace-hero-new.png"
                            alt="Communal Thinking Illustration"
                            fill
                            className="object-cover object-center"
                            priority
                        />
                    </div>
                </div>
            </div>

            {/* 3. About ThinkSpace Section (Sliding OVER the image bottom) */}
            <section
                className="relative z-20 bg-white pt-12 sm:pt-16 lg:pt-24 pb-20 sm:pb-28 lg:pb-40"
                style={{ marginTop: `calc(-80px + ${scrollY * -0.05}px)` }} // Dynamic overlap
            >
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                    <div className="text-[10px] sm:text-[12px] md:text-[14px] font-black tracking-[0.15em] sm:tracking-[0.2em] text-[#888] mb-8 sm:mb-10 lg:mb-12 uppercase">
                        ABOUT THINKSPACE
                    </div>
                    <div className="space-y-6 sm:space-y-8 lg:space-y-12 max-w-5xl">
                        {paragraphs.map((text, index) => (
                            <p
                                key={index}
                                className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] xl:text-[26px] leading-[1.5] text-[#1A1A1A] font-medium"
                            >
                                {text}
                            </p>
                        ))}
                    </div>
                </div>
            </section>
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
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-black/20 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 cursor-pointer group"
        >
            {type === 'instagram' ? (
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-current fill-none transition-transform group-hover:scale-110" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
            ) : (
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-current fill-none transition-transform group-hover:scale-110" strokeWidth="2">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
            )}
        </a>
    );
};

export default ThinkSpaceHero;
