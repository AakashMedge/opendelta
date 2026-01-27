"use client";

import React from 'react';

const GetInTouchTicker = () => {
    return (
        <section className="bg-white py-24 overflow-hidden border-t border-black/5 w-full">
            <div className="w-full">
                {/* Scrolling Text Wrapper */}
                <div className="relative flex overflow-hidden select-none mb-24">
                    <div
                        className="flex whitespace-nowrap min-w-full items-center"
                        style={{ animation: 'marquee 30s linear infinite' }}
                    >
                        {[...Array(6)].map((_, i) => (
                            <span key={i} className="text-[15vw] font-medium text-[#1A1A1A] uppercase leading-none tracking-tighter mx-4 inline-block">
                                GET IN TOUCH
                            </span>
                        ))}
                    </div>

                    <div
                        className="absolute top-0 flex whitespace-nowrap min-w-full items-center"
                        style={{ animation: 'marquee2 30s linear infinite' }}
                    >
                        {[...Array(6)].map((_, i) => (
                            <span key={i} className="text-[15vw] font-medium text-[#1A1A1A] uppercase leading-none tracking-tighter mx-4 inline-block">
                                GET IN TOUCH
                            </span>
                        ))}
                    </div>
                </div>

                {/* Subtext Section */}
                <div className="max-w-[1440px] mx-auto px-6 md:px-12 space-y-4">
                    <h3 className="text-[18px] md:text-[24px] font-medium text-[#1A1A1A] uppercase tracking-wide">
                        LET&apos;S TRANSFORM INDIA TOGETHER
                    </h3>
                    <p className="text-[18px] md:text-[24px] font-medium text-[#1A1A1A] uppercase tracking-wide">
                        JOIN OPEN DELTA TODAY!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default GetInTouchTicker;
