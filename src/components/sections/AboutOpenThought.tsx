"use client";

import React, { useState, useEffect, useRef } from 'react';

const AboutOpenThought = () => {
    const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = entry.target.getAttribute('data-index');
                        if (index) {
                            setVisibleIndexes((prev) => Array.from(new Set([...prev, Number(index)])));
                        }
                    }
                });
            },
            { threshold: 0.1 }
        );

        const items = containerRef.current?.querySelectorAll('.reveal-item');
        items?.forEach((item) => observer.observe(item));

        return () => items?.forEach((item) => observer.unobserve(item));
    }, []);

    const sections = [
        {
            type: 'text',
            content: "While open-source has transformed the digital landscape, its impact has largely been confined to software and code. Platforms like GitHub and Stack Overflow have become repositories of technical knowledge, yet their scope is limited to programming-related solutions. But what if this collaborative model could extend beyond code—into governance, social welfare, urban planning, and more? Open Thought Experiment takes inspiration from the success of open-source but applies it to real-world challenges across industries and societies. Whether it's rethinking traffic congestion in urban cities or designing sustainable business models, our initiative aims to bring the same collaborative, crowd-powered innovation to broader, more impactful areas."
        },
        {
            type: 'subheading',
            content: "What are Open Thought Experiments?"
        },
        {
            type: 'text',
            content: "Thought experiments have long been the foundation of groundbreaking discoveries and paradigm shifts. They serve as cognitive tools that challenge our perceptions, inspire innovative ideas, and solve complex problems without physical trials. Some of history's most profound breakthroughs stem from thought experiments:"
        },
        {
            type: 'list',
            items: [
                { title: "Einstein's Theory of Relativity", desc: "Imagining riding a beam of light led to the understanding of space-time." },
                { title: "Schrödinger's Cat", desc: "A paradoxical illustration of quantum superposition that redefined our grasp of physics." },
                { title: "The Trolley Problem", desc: "A moral dilemma that continues to shape ethics in artificial intelligence and policymaking." },
                { title: "Meditation and Mindfulness Practices", desc: "Thought experiments within consciousness studies that enhance cognitive clarity and problem-solving." }
            ]
        },
        {
            type: 'text',
            content: "These examples prove that structured thinking can spark groundbreaking innovation. At Open Delta, we believe structured ideation in diverse fields will unlock radical solutions to modern challenges."
        },
        {
            type: 'subheading',
            content: "Why Thought Experiments Will Transform Innovation?"
        },
        {
            type: 'text',
            content: "Modern innovation has become overly linear, with most organizations following predefined paths and incremental improvements rather than disruptive transformation. Open Thought Experiment aims to break this cycle by fostering unconstrained ideation across diverse disciplines. Our approach encourages individuals and organizations to question assumptions, propose bold ideas, and reimagine solutions without resource-heavy investments. The future of innovation lies in collective intelligence, and through open thought experiments, we enable broader participation, richer insights, and faster progress toward meaningful change."
        }
    ];

    return (
        <section className="bg-white py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12" ref={containerRef}>
                {/* Title */}
                <h2
                    data-index="999"
                    className={`text-[10px] sm:text-[11px] md:text-[12px] lg:text-[14px] font-black tracking-[0.15em] sm:tracking-[0.2em] text-[#888] mb-10 sm:mb-12 lg:mb-16 uppercase reveal-item transition-all duration-700 ${visibleIndexes.includes(999) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                >
                    FROM OPEN SOURCE TO OPEN THOUGHT: EXPANDING THE HORIZON
                </h2>

                <div className="space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-16 max-w-5xl">
                    {sections.map((section, idx) => {
                        const isVisible = visibleIndexes.includes(idx);

                        if (section.type === 'subheading') {
                            return (
                                <h3
                                    key={idx}
                                    data-index={idx}
                                    className={`text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-medium tracking-tight text-[#1A1A1A] reveal-item transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                                >
                                    {section.content}
                                </h3>
                            );
                        }
                        if (section.type === 'list') {
                            return (
                                <ul key={idx} className="space-y-6">
                                    {section.items?.map((item, i) => (
                                        <li
                                            key={i}
                                            data-index={`${idx}${i}`}
                                            className={`flex gap-3 sm:gap-4 text-[14px] sm:text-[15px] md:text-[17px] lg:text-[18px] xl:text-[19px] text-[#333] reveal-item transition-all duration-700 ${visibleIndexes.includes(Number(`${idx}${i}`)) ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}
                                            style={{ transitionDelay: `${i * 100}ms` }}
                                        >
                                            <span className="shrink-0 mt-2.5 w-1.5 h-1.5 rounded-full bg-black"></span>
                                            <p className="leading-relaxed">
                                                <span className="font-bold text-[#111]">{item.title}</span> – {item.desc}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            );
                        }
                        return (
                            <p
                                key={idx}
                                data-index={idx}
                                className={`text-[14px] sm:text-[15px] md:text-[17px] lg:text-[18px] xl:text-[20px] leading-[1.6] text-[#444] font-medium reveal-item transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                            >
                                {section.content}
                            </p>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default AboutOpenThought;
