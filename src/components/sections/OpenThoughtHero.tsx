"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const OpenThoughtHero = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Animation progress calculation
    // As we scroll, the hero section moves up, the image moves up but stays behind
    const heroTranslate = scrollY * -0.3;
    const imageTranslate = scrollY * -0.15;

    const scrollToContribute = () => {
        const element = document.getElementById('contribute');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="bg-[#F7F0F0] selection:bg-black selection:text-white relative overflow-hidden">
            {/* 1. Hero Content Section - Stays ABOVE the image */}
            <section
                className="relative px-4 sm:px-6 md:px-8 lg:px-12 pb-12 sm:pb-16 lg:pb-24 z-20 bg-[#F7F0F0]"
                style={{
                    paddingTop: 'calc(var(--navbar-height, 100px) + 20px)',
                    transform: `translateY(${heroTranslate}px)`
                }}
            >
                <div className="max-w-[1440px] mx-auto">
                    <div className="max-w-4xl">
                        <div className="text-[9px] sm:text-[10px] md:text-[12px] font-black tracking-[0.15em] sm:tracking-[0.2em] text-[#333] mb-4 sm:mb-6 lg:mb-8 uppercase">
                            OPEN THOUGHT PROJECT
                        </div>
                        <h1 className="text-[26px] sm:text-[36px] md:text-[44px] lg:text-[52px] xl:text-[56px] font-medium leading-none tracking-tight text-[#1A1A1A] mb-8 sm:mb-10 lg:mb-12 uppercase">
                            A NEW ERA OF<br />
                            COLLECTIVE<br />
                            PROBLEM-SOLVING
                        </h1>

                        <div className="max-w-2xl">
                            <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[19px] xl:text-[20px] leading-[1.6] text-[#333] font-medium">
                                Envision a digital crucible where India&apos;s most pressing societal issues are brought to light, examined, and primed for solution. This is the essence of the Open Thought Experiment. Here, the nation&apos;s academic elite stand shoulder to shoulder with passionate citizens, each contributing their unique perspective on the challenges facing India. Through a simple registration process, this platform becomes a launchpad for transformative ideas, turning individual concerns into collective action.
                            </p>
                        </div>
                    </div>

                    {/* Bottom Prompt Bar */}
                    <div className="mt-12 sm:mt-16 lg:mt-24 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-black/5 pb-6 sm:pb-8">
                        <div className="flex gap-3 sm:gap-4">
                            <SocialIcon type="instagram" />
                            <SocialIcon type="twitter" />
                        </div>
                        <button
                            onClick={scrollToContribute}
                            className="flex items-center gap-2 sm:gap-3 group"
                        >
                            <span className="text-[9px] sm:text-[10px] font-black tracking-[0.15em] sm:tracking-[0.2em] text-[#1A1A1A]">SCROLL TO EXPLORE</span>
                            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-none stroke-current" strokeWidth="2.5">
                                    <path d="M7 7l10 10M17 7v10H7" />
                                </svg>
                            </div>
                        </button>
                    </div>
                </div>
            </section>

            {/* 2. The Image Section (Reveal - Behind the above section) */}
            <div
                className="relative z-10 w-full px-2 sm:px-4 md:px-[40px] pb-[60px] sm:pb-[80px] md:pb-[100px]"
                style={{
                    marginTop: '-100px', // Pull the image up to be tucked BEHIND the hero
                    transform: `translateY(${imageTranslate}px)`
                }}
            >
                <div className="w-full h-[300px] sm:h-[400px] md:h-[550px] lg:h-[750px] xl:h-[850px] relative overflow-hidden">
                    <div className="absolute inset-0 w-full h-[120%] -top-[10%]">
                        <Image
                            src="/open-thought-hero.png"
                            alt="Open Thought Project Illustration"
                            fill
                            className="object-cover rounded-none"
                            priority
                        />
                    </div>
                </div>
            </div>
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

export default OpenThoughtHero;
