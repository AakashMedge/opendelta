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
        <section className="bg-white py-20 lg:py-32 px-6 md:px-12 lg:px-20 overflow-hidden">
            {/* Header Section */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-24 items-start mb-24 lg:mb-32">
                <div className="flex-1">
                    <span className="text-[10px] md:text-[12px] font-bold tracking-[0.2em] text-[#666] uppercase mb-4 block">
                        INFORMATION REPOSITORY
                    </span>
                    <div className="flex flex-col md:flex-row md:items-end gap-6 justify-between w-full">
                        <h2 className="text-[40px] md:text-[56px] lg:text-[64px] font-bold leading-none text-[#1A1A1A] tracking-tighter uppercase">
                            KNOWLEDGE <span className="text-[#F90]">HUB</span>
                        </h2>
                        <Link href="/blog" className="group flex items-center gap-2 mb-1">
                            <span className="text-[11px] font-black tracking-[0.2em] text-[#1A1A1A] uppercase">VIEW ALL INSIGHTS</span>
                            <div className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center transition-all group-hover:bg-black group-hover:text-white">
                                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="3">
                                    <path d="M7 7l10 10M17 7v10H7" />
                                </svg>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="flex-1 flex items-start gap-8 lg:mt-10">
                    <div className="w-[1px] h-16 bg-black shrink-0 hidden md:block" />
                    <p className="text-[16px] md:text-[18px] lg:text-[19px] leading-relaxed text-[#1A1A1A] font-medium max-w-lg">
                        We orchestrate a multifaceted approach to address <strong>India&apos;s grassroots challenges</strong>.
                        Modern sourcing methods to identify <strong>critical problems</strong>.
                    </p>
                </div>
            </div>

            {/* Content Cards */}
            <div className="max-w-7xl mx-auto space-y-24 lg:space-y-40">
                {hubContent.map((item, idx) => (
                    <div
                        key={idx}
                        className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-24`}
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
                                <h3 className="text-[36px] md:text-[48px] lg:text-[56px] font-bold text-[#1A1A1A] leading-tight tracking-tight transition-colors group-hover/title:text-[#F90]">
                                    {item.title}
                                </h3>
                            </Link>

                            <p className="text-[16px] md:text-[18px] lg:text-[20px] text-[#666] leading-relaxed max-w-md">
                                {item.desc}
                            </p>

                            <Link href="/blog">
                                <button className="flex items-center gap-3 group px-0 border-none bg-transparent cursor-pointer">
                                    <span className="text-[12px] font-black uppercase tracking-[0.2em] text-[#1A1A1A]">
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
