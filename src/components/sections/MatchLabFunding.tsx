"use client";

import React from 'react';
import Link from 'next/link';

const MatchLabFunding = () => {
    return (
        <section className="bg-white py-24 md:py-32 border-t border-black/5">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
                    <div className="max-w-3xl">
                        <h2 className="text-[32px] md:text-[42px] font-medium text-[#1A1A1A] mb-8 uppercase tracking-tight">
                            FUNDING ACCESS
                        </h2>
                        <p className="text-[18px] md:text-[22px] text-[#444] mb-8 leading-relaxed font-medium">
                            Access funding, expert mentorship, and collaborative resources to turn ideas into action. We bridge the gap between innovation and capital to drive sustainable social change.
                        </p>
                        <Link
                            href="/funding-access"
                            className="inline-flex items-center gap-4 group"
                        >
                            <span className="text-[12px] font-black tracking-[0.3em] text-[#1A1A1A]">EXPLORE FUNDING</span>
                            <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center transition-all group-hover:bg-black group-hover:text-white">
                                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth="2.5">
                                    <path d="M7 17l10-10M17 17V7H7" />
                                </svg>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MatchLabFunding;
