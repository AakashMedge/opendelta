"use client";

import React, { useState, useEffect, useRef } from 'react';

const OpenThoughtProcess = () => {
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

    const steps = [
        {
            title: "Community-Driven Problem Listing",
            desc: "Individuals, organizations, or communities can propose pressing challenges ranging from environmental sustainability to urban mobility. Problems will be categorized based on urgency, complexity, and impact potential."
        },
        {
            title: "Collaborative Ideation Spaces",
            desc: "Thought experiment sessions can be hosted in physical and virtual spaces such as offices, co-working spaces, cafes, or rented venues. Diverse stakeholders, including policymakers, business leaders, students, and citizens, will engage in structured discussions, brainstorming, and hypothesis testing."
        },
        {
            title: "Solution Development & Refinement",
            desc: "Proposed solutions will undergo rigorous peer review and iteration cycles to ensure feasibility and scalability. Cross-industry experts and mentors will provide insights and validate the concepts."
        },
        {
            title: "Real-World Implementation",
            desc: "Viable solutions will be packaged into actionable blueprints, which governments, NGOs, and businesses can adopt and scale. Successful experiments will be documented and shared across the Open Delta community to inspire further exploration."
        }
    ];

    return (
        <section ref={sectionRef} className="bg-[#FAF4F2] py-24 md:py-32 overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 lg:gap-24">
                {/* Left Side: Heading */}
                <div className="lg:w-[40%]">
                    <h2 className={`text-[40px] md:text-[54px] lg:text-[64px] font-medium leading-[1.1] tracking-tight text-[#1A1A1A] uppercase transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        HOW DOES OPEN<br />
                        THOUGHT EXPERIMENT<br />
                        WORK?
                    </h2>
                </div>

                {/* Right Side: Content */}
                <div className="lg:w-[60%] space-y-12">
                    {/* Intro Text */}
                    <p className={`text-[16px] md:text-[18px] lg:text-[20px] leading-[1.6] text-[#444] font-medium transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        Our platform democratizes innovation by offering a structured yet flexible framework to identify, analyze, and implement solutions for societal challenges. The process works in a few simple yet powerful steps:
                    </p>

                    {/* Process Steps */}
                    <div className="space-y-12">
                        {steps.map((step, idx) => (
                            <div
                                key={idx}
                                className={`space-y-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                                style={{ transitionDelay: `${500 + (idx * 150)}ms` }}
                            >
                                <h3 className="text-[18px] md:text-[20px] font-bold text-[#1A1A1A]">
                                    {step.title}
                                </h3>
                                <p className="text-[15px] md:text-[17px] leading-[1.6] text-[#555] font-medium max-w-2xl">
                                    {step.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OpenThoughtProcess;
