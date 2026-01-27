"use client";

import React from 'react';
import Image from 'next/image';

const hubContent = [
    {
        num: "01",
        title: "Design Thinking",
        desc: "We champion collaborative creativity by applying design thinking to uncover deep insights and co-create impactful solutions for society.",
        img: "/hero-2.png",
    },
    {
        num: "02",
        title: "Systems Innovation",
        desc: "Orchestrate systems innovation, uniting diverse changemakers to reimagine, connect, and transform entire ecosystems for sustainable social good.",
        img: "/inception-1.png",
    },
    {
        num: "03",
        title: "Agile Development",
        desc: "Rapid iteration and adaptive progress as we respond to evolving social challenges with real-world results.",
        img: "/hero-3.png",
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
                    <h2 className="text-[40px] md:text-[56px] lg:text-[64px] font-bold leading-none text-[#1A1A1A] tracking-tighter uppercase whitespace-nowrap">
                        KNOWLEDGE <span className="text-[#D1D1D1]">HUB</span>
                    </h2>
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
                            <div className="relative w-full max-w-[550px] aspect-[4/5] md:aspect-square bg-white rounded-[40px] p-4 md:p-6 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] transition-transform duration-700 hover:scale-[1.02]">
                                <div className="relative w-full h-full rounded-[30px] overflow-hidden">
                                    <Image
                                        src={item.img}
                                        alt={item.title}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Text Content */}
                        <div className="flex-1 space-y-6 lg:space-y-8">
                            <div className="flex items-center gap-4">
                                <span className="text-[12px] font-bold text-[#D1D1D1]">{item.num}</span>
                                <div className="h-[1px] w-12 bg-[#D1D1D1]" />
                            </div>

                            <h3 className="text-[36px] md:text-[48px] lg:text-[56px] font-bold text-[#1A1A1A] leading-tight tracking-tight">
                                {item.title}
                            </h3>

                            <p className="text-[16px] md:text-[18px] lg:text-[20px] text-[#666] leading-relaxed max-w-md">
                                {item.desc}
                            </p>

                            <button className="flex items-center gap-3 group">
                                <span className="text-[12px] font-black uppercase tracking-[0.2em] text-[#1A1A1A]">
                                    Discover More
                                </span>
                                <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center transition-all duration-300 group-hover:bg-black group-hover:border-black">
                                    <svg
                                        className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default KnowledgeHub;
