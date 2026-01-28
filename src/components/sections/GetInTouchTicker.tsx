"use client";

import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';

const GetInTouchTicker = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const scroller = scrollRef.current;
        if (!scroller) return;

        let animationFrameId: number;
        let scrollPos = scroller.scrollLeft;
        const speed = 1.2; // Smooth constant speed consistent with other sections

        const step = () => {
            if (!isPaused) {
                scrollPos += speed;

                // Seamless loop logic
                const setWidth = scroller.scrollWidth / 3;
                if (scrollPos >= setWidth * 2) {
                    scrollPos = setWidth;
                }

                scroller.scrollLeft = scrollPos;
            } else {
                scrollPos = scroller.scrollLeft;
            }
            animationFrameId = requestAnimationFrame(step);
        };

        animationFrameId = requestAnimationFrame(step);
        return () => cancelAnimationFrame(animationFrameId);
    }, [isPaused]);

    return (
        <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden border-t border-black/5 w-full">
            <div className="w-full">
                {/* Scrolling Text Wrapper */}
                <Link
                    href="/funding-access"
                    className="relative flex overflow-hidden select-none mb-12 sm:mb-16 md:mb-20 lg:mb-24 cursor-pointer group"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <div
                        ref={scrollRef}
                        className="flex whitespace-nowrap min-w-full items-center overflow-x-hidden no-scrollbar"
                    >
                        {[...Array(9)].map((_, i) => (
                            <span key={i} className="text-[48px] sm:text-[64px] md:text-[100px] lg:text-[120px] xl:text-[140px] font-medium text-[#1A1A1A] uppercase leading-none tracking-tighter mx-4 sm:mx-6 md:mx-8 inline-block transition-colors group-hover:text-black">
                                GET IN TOUCH
                            </span>
                        ))}
                    </div>
                </Link>

                {/* Subtext Section */}
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 space-y-3 sm:space-y-4">
                    <h3 className="text-[14px] sm:text-[16px] md:text-[20px] lg:text-[24px] font-medium text-[#1A1A1A] uppercase tracking-wide">
                        LET&apos;S TRANSFORM INDIA TOGETHER
                    </h3>
                    <p className="text-[14px] sm:text-[16px] md:text-[20px] lg:text-[24px] font-medium text-[#1A1A1A] uppercase tracking-wide">
                        JOIN <span className="text-[#FF8C00]">OPEN</span> DELTA TODAY!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default GetInTouchTicker;
