"use client";

import React from 'react';
import Link from 'next/link';

const KnowledgeHeader = () => {
    return (
        <section
            className="bg-white pb-24 overflow-hidden"
            style={{ paddingTop: 'calc(var(--navbar-height, 80px) + 40px)' }}
        >
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 text-center">
                <h1 className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] xl:text-[56px] font-medium text-[#1A1A1A] leading-tight uppercase tracking-tight mb-8">
                    ONE SOCIETAL PROBLEM AT A TIME
                </h1>

                <h2 className="text-[18px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] font-medium text-[#1A1A1A] uppercase mb-10">
                    GOOD THINGS TAKE TIME
                </h2>

                <p className="text-[12px] md:text-[14px] font-black tracking-[0.3em] text-black/40 mb-20 text-center uppercase">
                    Connect with us
                </p>

                <div className="max-w-4xl mx-auto text-left space-y-8 mb-24">
                    <p className="text-[16px] md:text-[18px] leading-[1.6] text-[#333]">
                        Open Delta&apos;s platform redefines problem-solving by dynamically matching societal challenges to solution architects based on expertise and relevance.
                    </p>
                    <p className="text-[16px] md:text-[18px] leading-[1.6] text-[#333]">
                        The process begins with a detailed analysis of the problems listed on the platform, categorizing them by sector, complexity, urgency, and potential impact.
                    </p>
                    <p className="text-[16px] md:text-[18px] leading-[1.6] text-[#333]">
                        Solution architects—comprising researchers, startups, and institutions—are then identified based on their track record, domain expertise, and innovative capabilities. This matching process is further enhanced by the involvement of our teams, who bring their strategic acumen to ensure solutions are viable for scaling and long-term implementation.
                    </p>
                    <p className="text-[16px] md:text-[18px] leading-[1.6] text-[#333]">
                        Our expertise is crucial in this dynamic matching process, as it provides a lens of practicality and scalability that bridges the gap between ideation and execution. We help identify high-potential solutions while mitigating risks associated with innovation. This ensures that the right problems are paired with the right minds, creating an ecosystem where resources are optimized for maximum societal benefit.
                    </p>
                    <p className="text-[16px] md:text-[18px] leading-[1.6] text-[#333]">
                        Ultimately, this approach not only accelerates problem-solving but also enhances the quality of solutions by aligning them with both societal needs and market dynamics.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center border-t border-black/5 pt-12 gap-8">
                    <div className="text-[10px] md:text-[12px] font-black tracking-[0.3em] text-[#1A1A1A] uppercase">
                        DYNAMIC MATCHING
                    </div>

                    <Link
                        href="/home"
                        className="px-8 py-3 border border-black rounded-full text-[10px] md:text-[12px] font-black tracking-[0.2em] text-black hover:bg-black hover:text-white transition-all uppercase"
                    >
                        BACK TO HOMEPAGE
                    </Link>

                    <div className="w-[100px] hidden md:block"></div> {/* Spacer to keep button centered */}
                </div>
            </div>
        </section>
    );
};

export default KnowledgeHeader;
