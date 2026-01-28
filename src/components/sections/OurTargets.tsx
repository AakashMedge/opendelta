"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const targetAreas = [
    {
        id: "city",
        num: "01",
        text: "CITY DEVELOPMENT: ADDRESSING MULTIFACETED PROBLEMS LEADING TO SOCIAL INEQUALITIES AND IMPROVING QUALITY OF LIFE THROUGH INNOVATION.",
        image: "/focus-city.png"
    },
    {
        id: "port",
        num: "02",
        text: "PORT TRANSITION: ADAPTING TO UNCERTAINTIES LIKE CLIMATE CHANGE, SOCIAL RESPONSIBILITY, AND EMERGING DIGITIZATION TECHNOLOGIES.",
        image: "/focus-port.png"
    },
    {
        id: "method",
        num: "03",
        text: "INTERDISCIPLINARY METHODOLOGY: DEVELOPING METHODS FOR INTEGRATING KNOWLEDGE FROM VARIOUS DISCIPLINES AND NON-ACADEMIC PARTNERS.",
        image: "/focus-method.png"
    },
    {
        id: "climate",
        num: "04",
        text: "CLIMATE RESILIENCE: DESIGNING SOLUTIONS FOR RISING SEA LEVELS AND OTHER CLIMATE-RELATED CHALLENGES IN DELTA REGIONS.",
        image: "/focus-climate.png"
    },
    {
        id: "social",
        num: "05",
        text: "SOCIAL INNOVATION: FOSTERING SOCIAL ENTERPRISES AND IMPACT-DRIVEN INITIATIVES TO ADDRESS SOCIETAL NEEDS.",
        image: "/focus-social.png"
    },
    {
        id: "tech",
        num: "06",
        text: "TECHNOLOGY AND DIGITAL SKILLS: PROMOTING DIGITAL LITERACY AND TECHNOLOGIAL ADOPTION TO BRIDGE THE INNOVATION GAP",
        image: "/focus-tech.png"
    },
    {
        id: "rd",
        num: "07",
        text: "RESEARCH AND DEVELOPMENT: INCREASING INVESTMENT IN R&D, PARTICULARLY IN EMERGING DEEPTECH FIELDS",
        image: "/focus-rd.png"
    },
    {
        id: "ip",
        num: "08",
        text: "INTELLECTUAL PROPERTY: STRENGTHENING THE IP FRAMEWORK TO PROTECT AND COMMERCIALIZE INNOVATIONS.",
        image: "/focus-ip.png"
    },
    {
        id: "sustainable",
        num: "09",
        text: "SUSTAINABLE DEVELOPMENT: FOCUSING ON CLEAN ENERGY, AGRICULTURE, AND ENVIRONMENTAL CONSERVATION INITIATIVES.",
        image: "/focus-sustainable.png"
    },
    {
        id: "delta",
        num: "10",
        text: "DELTA SYSTEM: ANALYZING TRENDS, SHOCKS, STRESSES, AND INTERVENTIONS IN URBAN DELTA SYSTEMS AND THEIR INTERRELATIONS.",
        image: "/focus-delta.png"
    }
];

const OurTargets = () => {
    // Only allow one area open at a time for a premium, controlled feel
    const [activeId, setActiveId] = useState<string | null>(null);

    const toggleArea = (id: string) => {
        setActiveId(activeId === id ? null : id);
    };

    return (
        <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-28 xl:py-32 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 overflow-hidden">
            {/* Header Section */}
            <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-16 xl:gap-24 items-start mb-12 sm:mb-16 md:mb-20 lg:mb-28 max-w-[1440px] mx-auto">
                <div className="flex-1">
                    <span className="text-[10px] sm:text-[11px] md:text-[12px] font-bold tracking-[0.15em] sm:tracking-[0.2em] text-[#666] uppercase mb-3 sm:mb-4 block">
                        OUR TARGETS
                    </span>
                    <h2 className="text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px] xl:text-[56px] font-medium leading-[1.1] text-[#1A1A1A] tracking-tight max-w-2xl uppercase">
                        AREAS WE FOCUS ON
                    </h2>
                </div>

                <div className="flex-1 lg:mt-10">
                    <p className="text-[14px] sm:text-[15px] md:text-[17px] lg:text-[18px] xl:text-[19px] leading-relaxed text-[#444] font-medium">
                        We orchestrate a multifaceted approach to address India&apos;s grassroots challenges.
                        The process initiates with a thorough analysis and filtration of societal issues,
                        leveraging various sourcing methods to identify critical problems around the following areas
                    </p>
                </div>
            </div>

            {/* Premium Click-to-Expand List Section */}
            <div className="border-t border-black/10 max-w-[1440px] mx-auto">
                {targetAreas.map((area) => (
                    <div
                        key={area.id}
                        className={`border-b border-black/10 transition-all duration-500 ease-in-out cursor-pointer group hover:bg-gray-50/50 px-4 -mx-4`}
                        onClick={() => toggleArea(area.id)}
                    >
                        {/* 1. Sequential Image Reveal */}
                        <div
                            className={`relative transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-[24px] ${activeId === area.id ? 'h-[180px] sm:h-[240px] md:h-[360px] lg:h-[500px] mt-8 sm:mt-10 lg:mt-12 mb-4' : 'h-0'
                                }`}
                        >
                            <Image
                                src={area.image}
                                alt="Focus Area Focus"
                                fill
                                className={`object-cover transition-transform duration-1000 ${activeId === area.id ? 'scale-100' : 'scale-110'}`}
                                sizes="(max-width: 1200px) 100vw, 80vw"
                            />
                        </div>

                        {/* 2. Text Row with Interactive Icon and Accent Line */}
                        <div className="py-6 sm:py-8 md:py-10 lg:py-14 flex items-center justify-between">
                            <div className="flex items-start gap-4 sm:gap-6 md:gap-10">
                                {/* Vertical Accent Line + Number */}
                                <div className="flex items-center gap-4 mt-1.5">
                                    <div className={`w-[2px] h-4 transition-all duration-500 bg-black ${activeId === area.id ? 'opacity-100 scale-y-150' : 'opacity-0 scale-y-50'
                                        }`} />
                                    <span className={`text-[12px] md:text-[14px] font-bold transition-colors duration-500 ${activeId === area.id ? 'text-black' : 'text-gray-300'
                                        }`}>
                                        {area.num}
                                    </span>
                                </div>
                                <h3 className={`text-[13px] sm:text-[15px] md:text-[18px] lg:text-[20px] xl:text-[22px] font-medium leading-relaxed uppercase tracking-wide transition-colors duration-500 max-w-4xl ${activeId === area.id ? 'text-black' : 'text-[#555] group-hover:text-black'
                                    }`}>
                                    {area.text}
                                </h3>
                            </div>

                            {/* Spinning Plus/Minus Icon */}
                            <div className="hidden md:flex shrink-0 ml-8 items-center justify-center w-12 h-12 rounded-full border border-black/5 group-hover:border-black/20 transition-all duration-500">
                                <div className="relative w-4 h-4">
                                    <div className={`absolute top-1/2 left-0 w-full h-[2px] bg-black transition-transform duration-500 ${activeId === area.id ? 'rotate-180' : ''}`} />
                                    <div className={`absolute left-1/2 top-0 h-full w-[2px] bg-black transition-transform duration-500 ${activeId === area.id ? 'rotate-90 scale-0' : 'rotate-0'}`} />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer Tag */}
            <div className="mt-12">
                <button className="group relative bg-[#1A1A1A] text-white text-[10px] font-bold py-3 px-6 rounded-full uppercase tracking-widest hover:pr-10 transition-all duration-500">
                    Continuity Hire
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-2 group-hover:translate-x-0">
                        →
                    </span>
                </button>
            </div>
        </section>
    );
};

export default OurTargets;
