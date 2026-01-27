"use client";

import React, { useEffect, useRef, useState } from 'react';

const AboutFunding = () => {
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

    const paragraphs = [
        {
            text: "Open Delta, a platform that uniquely positions itself at the intersection of social innovation and venture capital expertise. We leverage their strategic insights to enhance the scalability and feasibility of social initiatives. This combination of social innovation and seasoned expertise creates resilient solutions",
            isBold: true
        },
        {
            text: "One of our key strengths lies in our ability to facilitate cross-sector collaboration.",
            isBold: false
        },
        {
            text: "By connecting diverse stakeholders - from government agencies to corporations and NGOs - the platform creates synergies that address social challenges more effectively.",
            isBold: false
        },
        {
            text: "Furthermore, guidance on financial management, growth strategies, and impact measurement - essential skills for any social entrepreneur looking to create lasting change. The involvement of reputable industrial veterans also acts as a magnet, attracting additional investment and amplifying the overall impact of social initiatives.",
            isBold: false
        },
        {
            text: "By combining the benefits of government and corporate funding with industry expertise, Open Delta is creating a powerful ecosystem for driving sustainable social change. This approach not only maximizes the impact of individual initiatives but also paves the way for a more collaborative and effective approach to addressing society's most pressing challenges.",
            isBold: false
        }
    ];

    return (
        <section ref={sectionRef} className="bg-white py-24 md:py-32 overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                <div className="max-w-5xl space-y-10">
                    {paragraphs.map((p, idx) => (
                        <p
                            key={idx}
                            className={`
                                text-[17px] md:text-[20px] lg:text-[22px] leading-[1.6] text-[#333] transition-all duration-1000
                                ${p.isBold ? 'font-bold' : 'font-medium opacity-80'}
                                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                            `}
                            style={{ transitionDelay: `${idx * 150}ms` }}
                        >
                            {p.text}
                        </p>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutFunding;
