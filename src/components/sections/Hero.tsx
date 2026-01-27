"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
    { src: '/hero-illustration.png', alt: 'Intellectual collaboration' },
    { src: '/hero-2.png', alt: 'Bustling campus life' },
    { src: '/hero-3.png', alt: 'Innovation in the lab' },
];

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 4000); // Change image every 4 seconds
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative min-h-screen flex flex-col bg-[#F3F3F3] pt-[100px]">
            {/* Main Content Area */}
            <div className="flex-1 flex flex-col md:flex-row px-6 md:px-12 py-10 lg:py-16 gap-12 lg:gap-20">

                {/* Left Content */}
                <div className="flex-1 flex flex-col justify-center">
                    <h1 className="text-[36px] md:text-[54px] lg:text-[64px] font-medium leading-[1.1] tracking-tight text-[#1A1A1A] mb-8">
                        TAPPING INDIA'S<br />
                        <span className="font-bold">INTELLECTUAL</span><br />
                        <span className="font-bold">CAPITAL SURPLUS</span>
                    </h1>

                    <div className="space-y-6 text-[#333] text-[14px] md:text-[15px] lg:text-[16px] leading-relaxed max-w-2xl">
                        <p>
                            At the intersection of social responsibility and innovation lies <strong>Open Delta</strong>,
                            a <strong>not-for-profit foundation</strong> with a mission to transform <strong>grassroots
                                challenges into</strong> opportunities for <strong>groundbreaking solutions</strong>.
                        </p>
                        <p>
                            By tapping into <strong>India's</strong> rich reservoir of <strong>intellectual capacity</strong>,
                            Open Delta orchestrates <strong>thought experiments</strong> that push the boundaries of
                            <strong>conventional problem-solving</strong>.
                        </p>
                        <p>
                            The foundation's unique approach involves a meticulous process of <strong>identifying</strong>
                            critical <strong>issues</strong> at the <strong>community level</strong>, followed by the
                            strategic <strong>engagement</strong> of <strong>India's brightest minds</strong> to
                            <strong>develop</strong> fundamental <strong>innovations</strong>.
                        </p>
                        <p>
                            Through this methodology, Open Delta not only addresses immediate concerns but also
                            cultivates a sustainable <strong>ecosystem</strong> of creative <strong>thinking and
                                collaborative innovation</strong>, potentially <strong>revolutionizing</strong> the
                            landscape of <strong>social development</strong> in <strong>India</strong>.
                        </p>
                    </div>

                    <div className="mt-10 mb-8 md:mb-0">
                        <button className="px-10 py-3 bg-[#1A1A1A] text-white text-[12px] font-bold rounded-full tracking-widest hover:bg-gray-800 transition-colors">
                            JOIN US
                        </button>
                    </div>
                </div>

                {/* Right Illustration Slideshow */}
                <div className="flex-1 relative w-full flex items-center">
                    <div className="relative w-full aspect-4/5 min-h-[350px] md:min-h-[500px] lg:min-h-[600px] rounded-2xl overflow-hidden shadow-sm flex flex-col">
                        {/* Slide Wrapper */}
                        <div
                            className="absolute inset-0 transition-transform duration-1000 ease-in-out flex flex-col"
                            style={{ transform: `translateY(-${currentIndex * 100}%)` }}
                        >
                            {images.map((image, idx) => (
                                <div key={idx} className="relative w-full h-full shrink-0">
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                                        className="object-cover"
                                        priority={idx === 0}
                                    />
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>

            {/* Social Footer */}
            <div className="w-full px-6 md:px-12 py-8 bg-[#E6F4FE] lg:bg-transparent flex justify-between items-center text-[#1A1A1A]">
                <div className="flex gap-4">
                    <SocialIcon type="instagram" />
                    <SocialIcon type="twitter" />
                </div>
                <div className="flex items-center gap-2 group cursor-pointer">
                    <span className="text-[10px] font-bold tracking-widest">SCROLL TO EXPLORE</span>
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="2">
                        <path d="M7 7l10 10M17 7v10H7" />
                    </svg>
                </div>
            </div>
        </section>
    );
};

const SocialIcon = ({ type }: { type: 'instagram' | 'twitter' }) => (
    <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-white transition-colors cursor-pointer">
        {type === 'instagram' ? (
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
        ) : (
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
            </svg>
        )}
    </div>
);

export default Hero;