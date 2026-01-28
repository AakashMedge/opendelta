"use client";

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

const teamMembers = [
    {
        name: "Adhiraj Banerjee",
        role: "Managing partner - Arghya Ventures, Former Executive Director - IvyCamp, Co-founder - Alley Oop",
        image: "/adhiraj.png"
    },
    {
        name: "Shweta Shalini",
        role: "Social Entrepreneur, Chief Evangelist - Billennium Divas, Former Entrepreneur of The Year (2011)",
        image: "/shweta.png"
    },
    {
        name: "Shalini Aggarwal",
        role: "Co-Founder & CEO - Tena i, Co-Founder - Pepper Farms,",
        image: "/shalini.png"
    },
    {
        name: "Gauranga Das",
        role: "Leadership Coach, Spiritual Mentor, Director at Govardhan Eco Village (GEV)",
        image: "/gauranga.png"
    },
    {
        name: "Ananya Birla",
        role: "Director - Aditya Birla Group, Founder - Birla Cosmetics, CEO - Ikai Asia",
        image: "/ananya.png"
    },
    {
        name: "Namita Thapar",
        role: "Executive Director - Emcure Pharmaceuticals, Investor - Shark Tank India, Founder - Incredible Ventures Limited",
        image: "/namita.png"
    }
];

const ScrollingTeam = () => {
    // Use 4 sets of images for ultra-smooth infinite behavior on large screens
    const extendedMembers = [...teamMembers, ...teamMembers, ...teamMembers, ...teamMembers];
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isPaused, setIsPaused] = useState(false);

    // Track manual interaction
    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);

    useEffect(() => {
        const scroller = scrollRef.current;
        if (!scroller) return;

        let animationFrameId: number;
        let scrollPos = scroller.scrollLeft;
        const speed = 1.2; // Smooth constant speed

        const step = () => {
            if (!isPaused && !isDragging.current) {
                scrollPos += speed;

                // Loop seamlessly
                const setWidth = scroller.scrollWidth / 4;
                if (scrollPos >= setWidth * 2) {
                    scrollPos = setWidth;
                }

                scroller.scrollLeft = scrollPos;
            } else if (isDragging.current) {
                // While dragging, keep our tracking variable in sync
                scrollPos = scroller.scrollLeft;
            } else if (isPaused) {
                // While paused but NOT dragging (e.g. mouse is down), sync position
                scrollPos = scroller.scrollLeft;
            }

            animationFrameId = requestAnimationFrame(step);
        };

        animationFrameId = requestAnimationFrame(step);
        return () => cancelAnimationFrame(animationFrameId);
    }, [isPaused]);

    // Mouse drag handlers
    const handleMouseDown = (e: React.MouseEvent) => {
        isDragging.current = true;
        setIsPaused(true);
        startX.current = e.pageX - (scrollRef.current?.offsetLeft || 0);
        scrollLeft.current = scrollRef.current?.scrollLeft || 0;
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging.current || !scrollRef.current) return;
        e.preventDefault();
        const x = e.pageX - (scrollRef.current.offsetLeft || 0);
        const walk = (x - startX.current) * 1.5;
        scrollRef.current.scrollLeft = scrollLeft.current - walk;
    };

    const stopDragging = () => {
        isDragging.current = false;
        // Resume auto-scroll after a tiny delay for natural feeling
        setTimeout(() => setIsPaused(false), 50);
    };

    return (
        <div className="w-full bg-[#F3F3F3] py-12 sm:py-16 md:py-20 overflow-hidden border-t border-gray-200/30">
            <div
                ref={scrollRef}
                className="flex gap-6 sm:gap-8 md:gap-12 lg:gap-16 overflow-x-auto select-none cursor-grab active:cursor-grabbing px-4 sm:px-6 md:px-10 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={stopDragging}
                onMouseLeave={stopDragging}
                onTouchStart={() => setIsPaused(true)}
                onTouchEnd={() => setIsPaused(false)}
            >
                {extendedMembers.map((member, index) => (
                    <div
                        key={index}
                        className="shrink-0 w-[200px] sm:w-[260px] md:w-[320px] lg:w-[380px] xl:w-[400px] group pointer-events-none"
                    >
                        {/* Image Container */}
                        <div className="relative w-full aspect-[1.15/1] overflow-hidden rounded-xl sm:rounded-2xl md:rounded-[24px] lg:rounded-[32px] mb-5 sm:mb-6 md:mb-8 bg-transparent transition-all duration-700 ease-out group-hover:shadow-2xl group-hover:shadow-black/5 group-hover:-translate-y-2 pointer-events-auto">
                            <Image
                                src={member.image}
                                alt={member.name}
                                fill
                                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                sizes="(max-width: 768px) 260px, (max-width: 1024px) 340px, 400px"
                                priority={index < 4}
                            />
                        </div>

                        {/* Text UI */}
                        <div className="px-4 pointer-events-auto">
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#1A1A1A] mb-2 sm:mb-3 tracking-tight group-hover:text-black transition-colors">{member.name}</h3>
                            <div className="h-[2px] w-0 bg-black group-hover:w-full transition-all duration-500 mb-3 sm:mb-4 opacity-10" />
                            <p className="text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] text-[#666] font-medium leading-[1.6]">
                                {member.role}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ScrollingTeam;
