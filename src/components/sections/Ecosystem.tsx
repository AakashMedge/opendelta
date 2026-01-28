"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const ecoItems = [
    {
        id: "think",
        title: "Think Space",
        image: "/hero-illustration.png",
        num: "01",
        desc: "A dedicated environment for deep contemplation and radical ideation."
    },
    {
        id: "project",
        title: "Open Thought Project",
        image: "/hero-2.png",
        num: "02",
        desc: "Collaborative initiatives that turn abstract concepts into tangible models."
    },
    {
        id: "dynamic",
        title: "Dynamic Matching",
        image: "/inception-1.png",
        num: "03",
        desc: "AI-driven alignment of social challenges with the most relevant innovators."
    },
    {
        id: "funding",
        title: "Demystifying Funding Access",
        image: "/hero-3.png",
        num: "04",
        desc: "Bridging the gap between impactful projects and sustainable capital."
    }
];

const Ecosystem = () => {
    const [activeIndex, setActiveIndex] = useState(0);



    return (
        <div className="bg-white">
            <section className="py-24 lg:py-40 px-6 md:px-12 lg:px-20 overflow-hidden relative">
                <div className="max-w-7xl mx-auto">
                    {/* Header - Premium Refinement */}
                    <div className="mb-20 lg:mb-32">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="h-px w-12 bg-black/20" />
                            <span className="text-[10px] md:text-[11px] font-black tracking-[0.4em] text-[#888] uppercase max-w-sm">
                                DISMANTLING BARRIERS • CREATING POTENTIAL
                            </span>
                        </div>
                        <h2 className="text-[32px] md:text-[48px] lg:text-[56px] font-medium leading-[0.9] text-[#1A1A1A] tracking-tighter uppercase mb-2">
                            OUR <span className="text-[#F90]">ECOSYSTEM</span>
                        </h2>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-stretch">

                        {/* LEFT: Selector Column (Desktop) / Tab Scroll (Mobile) */}
                        <div className="w-full lg:w-[450px] flex flex-col justify-center">
                            {/* Mobile Horizontal Scroll Nav */}
                            <div className="flex lg:hidden overflow-x-auto pb-8 gap-4 no-scrollbar scroll-px-6 -mx-6 px-6 snap-x group">
                                {ecoItems.map((item, index) => (
                                    <button
                                        key={item.id}
                                        onClick={() => setActiveIndex(index)}
                                        className={`flex-shrink-0 snap-center px-6 py-4 rounded-2xl border transition-all duration-500 text-sm font-bold uppercase tracking-widest ${activeIndex === index
                                            ? 'bg-black text-white border-black shadow-xl scale-105'
                                            : 'bg-white text-gray-400 border-gray-100 hover:border-gray-300'
                                            }`}
                                    >
                                        {item.title}
                                    </button>
                                ))}
                            </div>

                            {/* Desktop Vertical Menu */}
                            <div className="hidden lg:flex flex-col gap-6 relative">
                                {ecoItems.map((item, index) => (
                                    <button
                                        key={item.id}
                                        onClick={() => setActiveIndex(index)}
                                        className={`relative group flex flex-col items-start justify-center gap-2 pl-0 h-24 overflow-hidden transition-all duration-700 ${activeIndex === index ? 'opacity-100' : 'opacity-40 hover:opacity-100'
                                            }`}
                                    >
                                        <div className="flex flex-col items-start text-left">
                                            <span className="text-xs font-bold text-gray-300 mb-1">0{index + 1}</span>
                                            <h3 className={`text-[16px] md:text-[20px] lg:text-[24px] font-medium uppercase tracking-tighter transition-all duration-500`}>
                                                {item.title}
                                            </h3>
                                        </div>
                                    </button>
                                ))}
                            </div>

                            {/* Active Description */}
                            <div className="mt-12 lg:mt-20">
                                <p className="text-lg md:text-xl lg:text-2xl text-gray-400 font-medium leading-relaxed max-w-md transition-all duration-700">
                                    {ecoItems[activeIndex].desc}
                                </p>
                            </div>
                        </div>

                        {/* RIGHT: Image Display with Parallax/Mask feel */}
                        <div className="flex-1 w-full relative">
                            <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[16/10] w-full rounded-[48px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] group">
                                {ecoItems.map((item, index) => (
                                    <div
                                        key={item.id}
                                        className={`absolute inset-0 transition-all duration-1000 ease-[cubic-bezier(0.2,1,0.3,1)] ${activeIndex === index ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20 pointer-events-none'
                                            }`}
                                    >
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-110"
                                            sizes="(max-width: 1024px) 100vw, 60vw"
                                        />

                                        {/* Animated Contrast Mask */}
                                        <div className={`absolute inset-0 bg-black/10 transition-opacity duration-1000 ${activeIndex === index ? 'opacity-100' : 'opacity-0'
                                            }`} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Ecosystem;
