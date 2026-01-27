"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const OpenThoughtFooter = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true);
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const contributionSteps = [
        "Navigate to the Open Thought Experiment website.",
        "Click on \"Become a Thought Leader\" to start registration.",
        "Fill in the registration form with personal and professional details.",
        "Upload a brief bio and profile picture (optional).",
        "Select your areas of expertise from a comprehensive list.",
        "Create a secure account with a unique username and password.",
        "Verify your account through the confirmation email.",
        "Upon first login, take a brief orientation tour of the platform.",
        "Visit the \"Challenge Hub\" to explore existing issues.",
        "To contribute, select \"Initiate a Challenge.\"",
        "Provide a detailed description of the societal issue you've identified.",
        "Include relevant data, potential stakeholders, and possible impact scenarios.",
        "Submit your challenge for peer review and publication."
    ];

    return (
        <section id="contribute" ref={sectionRef} className="bg-[#F9F7F5] pt-24 md:pt-32 pb-12 overflow-hidden border-t border-black/5">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                {/* Main Content Row */}
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-32">
                    {/* Left: Heading */}
                    <div className="lg:w-[45%]">
                        <h2 className={`text-[40px] md:text-[54px] lg:text-[72px] font-medium leading-[1.05] tracking-tight text-[#1A1A1A] transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            HOW<br />
                            CAN I CONTRIBUTE
                        </h2>
                    </div>

                    {/* Right: Steps */}
                    <div className={`lg:w-[55%] transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <h3 className="text-[32px] md:text-[42px] font-medium text-[#1A1A1A] mb-8 uppercase tracking-tight">
                            FOR CONTRIBUTORS
                        </h3>
                        <ul className="space-y-4 mb-12">
                            {contributionSteps.map((step, idx) => (
                                <li key={idx} className="flex gap-4 text-[14px] md:text-[15px] text-[#444] leading-relaxed">
                                    <span className="shrink-0 mt-2 w-1 h-1 rounded-full bg-black"></span>
                                    <span>{step}</span>
                                </li>
                            ))}
                        </ul>
                        <Link
                            href="/coming-soon"
                            className="inline-block px-8 py-4 bg-[#1A1A1A] text-white text-[11px] font-black tracking-widest rounded-full hover:bg-black/80 transition-all uppercase text-center"
                        >
                            BECOME A THOUGHT LEADER
                        </Link>
                    </div>
                </div>

                {/* Footer Bottom Row */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-black/5 gap-8">
                    {/* Back Top */}
                    <button
                        onClick={scrollToTop}
                        className="flex items-center gap-2 group cursor-pointer"
                    >
                        <span className="text-[10px] font-black tracking-[0.2em] text-[#111]">BACK TOP</span>
                        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current transition-transform group-hover:-translate-y-1" strokeWidth="2.5">
                            <path d="M7 17l10-10M17 17V7H7" />
                        </svg>
                    </button>

                    {/* Copyright */}
                    <div className="text-[10px] font-black tracking-[0.2em] text-[#888]">
                        OPEN DELTA 2026
                    </div>

                    {/* Socials */}
                    <div className="flex gap-4">
                        <SocialIcon type="instagram" />
                        <SocialIcon type="twitter" />
                    </div>
                </div>
            </div>
        </section>
    );
};

const SocialIcon = ({ type }: { type: 'instagram' | 'twitter' }) => (
    <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all cursor-pointer group">
        {type === 'instagram' ? (
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
        ) : (
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
            </svg>
        )}
    </div>
);

export default OpenThoughtFooter;
