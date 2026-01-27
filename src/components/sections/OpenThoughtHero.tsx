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
                className="relative px-6 md:px-12 pt-[150px] pb-24 z-20 bg-[#F7F0F0]"
                style={{ transform: `translateY(${heroTranslate}px)` }}
            >
                <div className="max-w-[1440px] mx-auto">
                    <div className="max-w-4xl">
                        <div className="text-[10px] md:text-[12px] font-black tracking-[0.2em] text-[#333] mb-8 uppercase">
                            OPEN THOUGHT PROJECT
                        </div>
                        <h1 className="text-[48px] md:text-[72px] lg:text-[88px] font-medium leading-none tracking-tight text-[#1A1A1A] mb-12 uppercase">
                            A NEW ERA OF<br />
                            COLLECTIVE<br />
                            PROBLEM-SOLVING
                        </h1>

                        <div className="max-w-2xl">
                            <p className="text-[16px] md:text-[18px] lg:text-[20px] leading-[1.6] text-[#333] font-medium">
                                Envision a digital crucible where India's most pressing societal issues are brought to light, examined, and primed for solution. This is the essence of the Open Thought Experiment. Here, the nation's academic elite stand shoulder to shoulder with passionate citizens, each contributing their unique perspective on the challenges facing India. Through a simple registration process, this platform becomes a launchpad for transformative ideas, turning individual concerns into collective action.
                            </p>
                        </div>
                    </div>

                    {/* Bottom Prompt Bar */}
                    <div className="mt-24 flex justify-between items-end border-b border-black/5 pb-8">
                        <div className="flex gap-4">
                            <SocialIcon type="instagram" />
                            <SocialIcon type="twitter" />
                        </div>
                        <button
                            onClick={scrollToContribute}
                            className="flex items-center gap-3 group"
                        >
                            <span className="text-[10px] font-black tracking-[0.2em] text-[#1A1A1A]">SCROLL TO EXPLORE</span>
                            <div className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="2.5">
                                    <path d="M7 7l10 10M17 7v10H7" />
                                </svg>
                            </div>
                        </button>
                    </div>
                </div>
            </section>

            {/* 2. The Image Section (Reveal - Behind the above section) */}
            <div
                className="relative z-10 w-full px-[10px] md:px-[40px] pb-[100px]"
                style={{
                    marginTop: '-150px', // Pull the image up to be tucked BEHIND the hero
                    transform: `translateY(${imageTranslate}px)`
                }}
            >
                <div className="w-full h-[450px] md:h-[650px] lg:h-[850px] relative overflow-hidden">
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

const SocialIcon = ({ type }: { type: 'instagram' | 'twitter' }) => (
    <div className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center hover:bg-black hover:text-white transition-all cursor-pointer">
        {type === 'instagram' ? (
            <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-current fill-none" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
        ) : (
            <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-current fill-none" strokeWidth="2"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
        )}
    </div>
);

export default OpenThoughtHero;
