"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import Link from 'next/link';

const MatchLabHero = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToCollaborate = () => {
        const element = document.getElementById('collaborate');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const heroTranslate = scrollY * -0.3;
    const imageTranslate = scrollY * -0.15;

    return (
        <div className="bg-[#F3F3F3] selection:bg-black selection:text-white relative overflow-hidden">
            {/* 1. Hero Content Section */}
            <section
                className="relative px-4 sm:px-6 md:px-8 lg:px-12 pt-[100px] sm:pt-[120px] lg:pt-[150px] pb-8 sm:pb-12 z-20 bg-[#F3F3F3]"
                style={{ transform: `translateY(${heroTranslate}px)` }}
            >
                <div className="max-w-[1440px] mx-auto">
                    <div className="max-w-4xl">
                        <div className="text-[9px] sm:text-[10px] md:text-[11px] lg:text-[12px] font-black tracking-[0.15em] sm:tracking-[0.2em] text-[#333] mb-6 sm:mb-8 uppercase">
                            DYNAMIC MATCHING
                        </div>
                        <h1 className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] xl:text-[56px] font-medium leading-none tracking-tight text-[#1A1A1A] mb-8 sm:mb-10 lg:mb-12 uppercase">
                            ONE SOCIETAL PROBLEM<br />
                            AT A TIME
                        </h1>

                        <div className="max-w-3xl space-y-5 sm:space-y-6 lg:space-y-8 text-[#555]">
                            <p className="text-[14px] sm:text-[15px] md:text-[17px] lg:text-[18px] xl:text-[20px] leading-[1.6] text-[#333] font-medium">
                                Open Delta&apos;s platform redefines problem-solving by dynamically matching societal challenges to solution architects based on expertise and relevance.
                            </p>
                            <p className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[17px] leading-[1.6]">
                                The process begins with a detailed analysis of the problems listed on the platform, categorizing them by sector, complexity, urgency, and potential impact.
                            </p>
                            <p className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[17px] leading-[1.6]">
                                Solution architects—comprising researchers, startups, and institutions—are then identified based on their track record, domain expertise, and innovative capabilities. This matching process is further enhanced by the involvement of our teams, who bring their strategic acumen to ensure solutions are viable for scaling and long-term implementation.
                            </p>
                            <p className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[17px] leading-[1.6]">
                                Our expertise is crucial in this dynamic matching process, as it provides a lens of practicality and scalability that bridges the gap between ideation and execution. We help identify high-potential solutions while mitigating risks associated with innovation. This ensures that the right problems are paired with the right minds, creating an ecosystem where resources are optimized for maximum societal benefit.
                            </p>
                            <p className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[17px] leading-[1.6]">
                                Ultimately, this approach not only accelerates problem-solving but also enhances the quality of solutions by aligning them with both societal needs and market dynamics.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. The Image Section */}
            <div
                className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12"
                style={{
                    marginTop: '-150px',
                    transform: `translateY(${imageTranslate}px)`
                }}
            >
                <div className="max-w-4xl">
                    <Link href="/private-office" className="block group/hero">
                        <div className="relative w-full aspect-square md:aspect-video lg:aspect-square overflow-hidden bg-white shadow-sm transition-all duration-700 group-hover/hero:shadow-2xl group-hover/hero:scale-[1.01]">
                            <Image
                                src="/matchlab-hands.png"
                                alt="Dynamic Matching Illustration"
                                fill
                                className="object-contain p-4 md:p-8 transition-transform duration-1000 group-hover/hero:scale-105"
                                priority
                            />
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/0 group-hover/hero:bg-black/5 transition-colors duration-500" />
                        </div>
                    </Link>

                    {/* Bottom Prompt Bar */}
                    <div className="mt-4 sm:mt-6 flex justify-between items-end border-b border-black/5 pb-3 sm:pb-4">
                        <div className="flex gap-3 sm:gap-4">
                            <SocialIcon type="instagram" />
                            <SocialIcon type="twitter" />
                        </div>
                        <button
                            onClick={scrollToCollaborate}
                            className="flex items-center gap-3 group"
                        >
                            <span className="text-[9px] sm:text-[10px] font-black tracking-[0.15em] sm:tracking-[0.2em] text-[#1A1A1A]">SCROLL TO EXPLORE</span>
                            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="2.5">
                                    <path d="M7 7l10 10M17 7v10H7" />
                                </svg>
                            </div>
                        </button>
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

export default MatchLabHero;
