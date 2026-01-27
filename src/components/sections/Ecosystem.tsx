"use client";

import React, { useState, useEffect } from 'react';
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

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="bg-white">
            <section className="py-24 lg:py-40 px-6 md:px-12 lg:px-20 overflow-hidden relative">
                {/* Background Accent Typography */}
                <div className="absolute top-20 right-[-5%] text-[20vw] font-black text-gray-50/50 select-none pointer-events-none uppercase leading-none -z-10 tracking-tighter">
                    ECOSYSTEM
                </div>

                <div className="max-w-7xl mx-auto">
                    {/* Header - Premium Refinement */}
                    <div className="mb-20 lg:mb-32">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="h-px w-12 bg-black/20" />
                            <span className="text-[10px] md:text-[11px] font-black tracking-[0.4em] text-[#888] uppercase max-w-sm">
                                DISMANTLING BARRIERS • CREATING POTENTIAL
                            </span>
                        </div>
                        <h2 className="text-[48px] md:text-[72px] lg:text-[96px] font-black leading-[0.9] text-[#1A1A1A] tracking-tighter uppercase mb-2">
                            OUR <span className="text-gray-200">ECOSYSTEM</span>
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
                                        className={`relative group flex items-center gap-8 pl-10 h-24 overflow-hidden transition-all duration-700 ${activeIndex === index ? 'opacity-100' : 'opacity-40 hover:opacity-100'
                                            }`}
                                    >
                                        {/* Indicator Line */}
                                        <div className={`absolute left-0 w-px bg-black transition-all duration-700 ${activeIndex === index ? 'h-full scale-y-100' : 'h-8 scale-y-0'
                                            }`} />

                                        <div className="flex flex-col">
                                            <span className="text-xs font-black text-gray-300 mb-1">0{index + 1}</span>
                                            <h3 className={`text-4xl font-black uppercase tracking-tighter transition-all duration-500 ${activeIndex === index ? 'translate-x-0' : '-translate-x-2'
                                                }`}>
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

                                {/* Bottom Floating Label (Premium touch) */}
                                <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
                                    <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl text-white">
                                        <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-60 block mb-1">SECTION</span>
                                        <span className="text-xl font-bold">{ecoItems[activeIndex].title}</span>
                                    </div>
                                    <div className="flex gap-2 mb-4">
                                        {ecoItems.map((_, i) => (
                                            <div
                                                key={i}
                                                className={`h-1.5 rounded-full transition-all duration-500 ${activeIndex === i ? 'w-8 bg-white' : 'w-1.5 bg-white/30'
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA & Premium Footer */}
            <section className="bg-white py-40 px-6 md:px-12 lg:px-20 border-t border-gray-50 overflow-hidden relative">
                {/* Decorative background circle */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150%] aspect-square bg-gray-50 rounded-full translate-y-1/2 -z-10" />

                <div className="max-w-7xl mx-auto flex flex-col items-center">
                    <div className="group cursor-pointer mb-40 text-center relative">
                        <h2 className="text-[40px] md:text-[64px] lg:text-[80px] font-black text-[#1A1A1A] uppercase leading-[0.9] tracking-tighter transition-all duration-700 group-hover:tracking-normal">
                            KICKSTART YOUR <br />
                            <span className="text-gray-300">INNOVATION</span> TODAY
                        </h2>
                        {/* Hover underline effect */}
                        <div className="absolute bottom-[-20px] left-0 w-0 h-1 bg-black group-hover:w-full transition-all duration-700" />
                    </div>

                    <div className="w-full flex flex-col md:flex-row justify-between items-center gap-12 pt-16 border-t border-gray-100">
                        {/* Back To Top Arrow Button */}
                        <button
                            onClick={scrollToTop}
                            className="bg-black text-white p-6 rounded-full group hover:scale-110 active:scale-95 transition-all duration-500 shadow-xl shadow-black/20"
                        >
                            <svg className="w-6 h-6 transition-transform group-hover:translate-y-[-4px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                            </svg>
                        </button>

                        <div className="flex flex-col items-center gap-2">
                            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-300">ESTABLISHED</span>
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#111]">OPEN DELTA 2026</span>
                        </div>

                        {/* Social Icons - Premium Styling */}
                        <div className="flex items-center gap-3">
                            {['𝕏', 'f', 'in'].map((social, i) => (
                                <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center hover:bg-black hover:text-white hover:scale-110 active:scale-90 transition-all text-sm font-bold shadow-sm">
                                    {social}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Ecosystem;
