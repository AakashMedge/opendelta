"use client";

import React, { useState, useEffect } from 'react';

const FundingAccessHero = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="relative min-h-screen bg-[#F1F5EB] pt-[150px] pb-24 overflow-hidden">
            <div className={`max-w-[1440px] mx-auto px-6 md:px-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                {/* Small Label */}
                <div className="text-[10px] md:text-[11px] font-black tracking-[0.2em] text-[#333] mb-12 uppercase">
                    DEMYSTIFYING FUNDING ACCESS
                </div>

                {/* Content Section */}
                <div className="max-w-4xl">
                    <h1 className="text-[32px] md:text-[48px] lg:text-[56px] font-medium leading-none tracking-tight text-[#1A1A1A] mb-12 uppercase">
                        DIVERSE FUNDING DRIVING SOCIAL CHANGE
                    </h1>

                    <div className="space-y-8 max-w-3xl">
                        <p className="text-[16px] md:text-[18px] leading-[1.6] text-[#333] font-medium">
                            In today&apos;s rapidly evolving world, the pursuit of social change initiatives requires more than just passion and good intentions. It demands a strategic approach to funding and expertise. By leveraging government grants, corporate funding, and venture capital insights, organizations can create a robust ecosystem for driving sustainable social impact.
                        </p>

                        <p className="text-[16px] md:text-[18px] leading-[1.6] text-[#333] font-medium">
                            Government grants offer a unique advantage in this landscape. These non-repayable funds allow organizations to focus entirely on their mission without the burden of debt. Moreover, securing such grants enhances an organization&apos;s credibility, often attracting additional support from other donors and partners. Government funding also comes with the benefit of aligning initiatives with national priorities, ensuring that social change efforts resonate with broader policy objectives.
                        </p>
                    </div>
                </div>

                {/* Social Bar */}
                <div className="mt-32 flex gap-4">
                    <SocialIcon type="instagram" />
                    <SocialIcon type="twitter" />
                </div>
            </div>
        </section>
    );
};

const SocialIcon = ({ type }: { type: 'instagram' | 'twitter' }) => {
    const instagramUrl = "https://www.instagram.com/open_deltaco?igsh=b3Y2NXRhcjdudTY%3D&utm_source=qr";

    return (
        <a
            href={type === 'instagram' ? instagramUrl : "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 cursor-pointer group"
        >
            {type === 'instagram' ? (
                <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-current fill-none transition-transform group-hover:scale-110" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
            ) : (
                <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-current fill-none transition-transform group-hover:scale-110" strokeWidth="2">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
            )}
        </a>
    );
};

export default FundingAccessHero;
