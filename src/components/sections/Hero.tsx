"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex flex-col bg-white pt-[100px] lg:pt-[140px]">
            {/* Main Content Area */}
            <div className="flex-1 flex flex-col lg:flex-row px-6 md:px-12 lg:px-20 gap-16 lg:gap-32 items-start max-w-[1440px] mx-auto w-full">

                {/* Left Content */}
                <div className="flex-1 flex flex-col">
                    <h1 className="text-[36px] md:text-[48px] lg:text-[56px] font-medium leading-[1.05] tracking-tight text-[#1A1A1A] mb-12 uppercase">
                        TAPPING INDIA&apos;S<br />
                        INTELLECTUAL<br />
                        CAPITAL SURPLUS
                    </h1>

                    <div className="space-y-8 text-[#444] text-[15px] md:text-[16px] lg:text-[17px] leading-relaxed max-w-2xl">
                        <p>
                            At the intersection of social responsibility and innovation lies <strong>Open Delta</strong>,
                            a <strong>not-for-profit foundation</strong> with a mission to transform <strong>grassroots
                                challenges into</strong> opportunities for <strong>groundbreaking solutions</strong>.
                        </p>
                        <p>
                            By tapping into <strong>India&apos;s</strong> rich reservoir of <strong>intellectual capacity</strong>,
                            Open Delta orchestrates <strong>thought experiments</strong> that push the boundaries of
                            <strong>conventional problem-solving</strong>.
                        </p>
                        <p>
                            The foundation&apos;s unique approach involves a meticulous process of <strong>identifying</strong>
                            critical <strong>issues</strong> at the <strong>community level</strong>, followed by the
                            strategic <strong>engagement</strong> of <strong>India&apos;s brightest minds</strong> to
                            <strong>develop</strong> fundamental <strong>innovations</strong>.
                        </p>
                        <p>
                            Through this methodology, Open Delta not only addresses immediate concerns but also
                            cultivates a sustainable <strong>ecosystem</strong> of creative <strong>thinking and
                                collaborative innovation</strong>, potentially <strong>revolutionizing</strong> the
                            landscape of <strong>social development</strong> in <strong>India</strong>.
                        </p>
                    </div>

                    <div className="mt-12">
                        <Link href="/open-thought-prj" className="inline-block px-10 py-3.5 bg-[#1A1A1A] text-white text-[12px] font-bold rounded-full tracking-widest hover:bg-black/80 transition-all uppercase">
                            JOIN US
                        </Link>
                    </div>
                </div>

                {/* Right Image */}
                <div className="flex-1 w-full relative">
                    <div className="relative w-full aspect-4/5 rounded-[4px] overflow-hidden">
                        <Image
                            src="/hero-illustration.png"
                            alt="Intellectual collaboration illustration"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </div>

            {/* Bottom Footer Area */}
            <div className="w-full px-6 md:px-12 lg:px-20 py-10 flex justify-between items-center bg-white">
                <div className="flex gap-4">
                    <SocialIcon type="instagram" />
                    <SocialIcon type="twitter" />
                </div>

                <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
                    <span className="text-[10px] font-bold tracking-[0.2em] text-[#1A1A1A]">SCROLL TO EXPLORE</span>
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current transition-transform group-hover:translate-y-1" strokeWidth="2.5">
                        <path d="M7 13l5 5 5-5M12 6v12" />
                    </svg>
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
            className="w-9 h-9 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 group"
        >
            {type === 'instagram' ? (
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
            ) : (
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current transition-transform group-hover:scale-110" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
            )}
        </a>
    );
};

export default Hero;