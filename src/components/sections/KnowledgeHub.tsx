"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const hubContent = [
    {
        num: "01",
        title: "Design Thinking",
        desc: "We champion collaborative creativity by applying design thinking to uncover deep insights and co-create impactful solutions for society.",
        img: "/hub-design-thinking.png",
    },
    {
        num: "02",
        title: "Systems Innovation",
        desc: "Orchestrate systems innovation, uniting diverse changemakers to reimagine, connect, and transform entire ecosystems for sustainable social good.",
        img: "/hub-systems-innovation.png",
    },
    {
        num: "03",
        title: "Agile Development",
        desc: "Rapid iteration and adaptive progress as we respond to evolving social challenges with real-world results.",
        img: "/hub-agile-development.png",
    },
    {
        num: "04",
        title: "Contextual Matching",
        desc: "We dynamically match societal challenges to solution architects based on expertise, ensuring the right minds tackle the right problems.",
        img: "/knowledge_innovation.png",
    }
];

const KnowledgeHub = () => {
    return (
        <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-28 xl:py-32 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 overflow-hidden">
            {/* Header Section */}
            <div className="mb-12 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-32 border-b border-[#E5E5E5] pb-6 sm:pb-8">
                {/* 1. Label - Above */}
                <div className="mb-2">
                    <span className="text-[9px] sm:text-[10px] md:text-[11px] font-bold tracking-[0.15em] sm:tracking-[0.2em] text-[#666] uppercase">
                        INFORMATION REPOSITORY
                    </span>
                </div>

                {/* Horizontal Row for Heading, Link, Description */}
                <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-4 sm:gap-5 lg:gap-12">
                    {/* 2. Heading */}
                    <h2 className="text-[26px] sm:text-[32px] md:text-[44px] lg:text-[52px] xl:text-[56px] font-bold leading-none text-[#1A1A1A] tracking-tighter uppercase">
                        KNOWLEDGE <span className="text-[#F90]">HUB</span>
                    </h2>

                    {/* 3. Link */}
                    <Link href="/blog" className="group flex items-center gap-2 sm:gap-3 mb-2">
                        <span className="text-[9px] sm:text-[10px] font-black tracking-[0.15em] sm:tracking-[0.2em] text-[#1A1A1A] uppercase transition-colors group-hover:text-[#F90]">VIEW ALL INSIGHTS</span>
                        <div className="w-6 h-6 rounded-full border border-black/10 flex items-center justify-center transition-all group-hover:bg-[#F90] group-hover:border-[#F90] group-hover:text-white">
                            <svg viewBox="0 0 24 24" className="w-3 h-3 fill-none stroke-current" strokeWidth="2.5">
                                <path d="M7 7l10 10M17 7v10H7" />
                            </svg>
                        </div>
                    </Link>

                    {/* 4. Description */}
                    <p className="text-[12px] sm:text-[13px] md:text-[14px] leading-relaxed text-[#444] font-medium max-w-[300px] text-right lg:text-left hidden xl:block mb-1">
                        We orchestrate a multifaceted approach to address India&apos;s grassroots challenges. Modern sourcing methods to identify critical problems.
                    </p>
                </div>
            </div>

            {/* Content Cards */}
            <div className="max-w-[1440px] mx-auto space-y-16 sm:space-y-20 md:space-y-24 lg:space-y-32 xl:space-y-40">
                {hubContent.map((item, idx) => (
                    <div
                        key={idx}
                        className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 sm:gap-10 md:gap-12 lg:gap-20 xl:gap-24`}
                    >
                        {/* Premium Image Card */}
                        <div className="flex-1 w-full flex justify-center">
                            <Link href="/blog" className="w-full max-w-[550px] block">
                                <div className="relative w-full aspect-[4/5] md:aspect-square bg-white rounded-[40px] p-4 md:p-6 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-700 hover:scale-[1.02] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] group/img">
                                    <div className="relative w-full h-full rounded-[30px] overflow-hidden">
                                        <Image
                                            src={item.img}
                                            alt={item.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover/img:scale-110"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                    </div>
                                </div>
                            </Link>
                        </div>

                        {/* Text Content */}
                        <div className="flex-1 space-y-6 lg:space-y-8">
                            <div className="flex items-center gap-4">
                                <span className="text-[12px] font-bold text-[#D1D1D1]">{item.num}</span>
                                <div className="h-[1px] w-12 bg-[#D1D1D1]" />
                            </div>

                            <Link href="/blog" className="block group/title">
                                <h3 className="text-[28px] sm:text-[32px] md:text-[40px] lg:text-[48px] xl:text-[56px] font-bold text-[#1A1A1A] leading-tight tracking-tight transition-colors group-hover/title:text-[#F90]">
                                    {item.title}
                                </h3>
                            </Link>

                            <p className="text-[14px] sm:text-[15px] md:text-[17px] lg:text-[18px] xl:text-[20px] text-[#666] leading-relaxed max-w-md">
                                {item.desc}
                            </p>

                            <Link href="/blog">
                                <button className="flex items-center gap-3 group px-0 border-none bg-transparent cursor-pointer">
                                    <span className="text-[10px] sm:text-[11px] md:text-[12px] font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#1A1A1A]">
                                        Discover More
                                    </span>
                                    <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center transition-all duration-300 group-hover:bg-black group-hover:border-black group-hover:text-white">
                                        <svg
                                            className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default KnowledgeHub;
