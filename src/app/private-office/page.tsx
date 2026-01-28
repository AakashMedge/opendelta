"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Navbar from "@/components/layout/Navbar";
import MatchLabFooter from "@/components/sections/MatchLabFooter";
import GetInTouchTicker from "@/components/sections/GetInTouchTicker";

const SocialIcon = ({ type }: { type: 'instagram' | 'twitter' }) => {
    const instagramUrl = "https://www.instagram.com/open_deltaco?igsh=b3Y2NXRhcjdudTY%3D&utm_source=qr";

    return (
        <a
            href={type === 'instagram' ? instagramUrl : "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 cursor-pointer group"
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

const ServiceItem = ({ num, title, desc, defaultOpen }: { num: string; title: string; desc: string; defaultOpen: boolean }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className="border-b border-black/10 transition-all duration-500 overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-8 flex justify-between items-center group text-left"
            >
                <h3 className="text-[18px] md:text-[20px] font-medium text-[#1A1A1A] tracking-tight uppercase">
                    {num}/ {title}
                </h3>
                <div className={`w-10 h-10 rounded-full border border-black/10 flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-black text-white' : 'bg-transparent text-black group-hover:bg-black group-hover:text-white'}`}>
                    <svg viewBox="0 0 24 24" className={`w-4 h-4 fill-none stroke-current transition-transform duration-500 ${isOpen ? 'rotate-180' : 'rotate-0'}`} strokeWidth="2.5">
                        <path d="M7 7l10 10M17 7v10H7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </button>
            <div className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[200px] pb-8 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <p className="text-[14px] md:text-[15px] text-[#666] leading-relaxed max-w-xl">
                    {desc}
                </p>
            </div>
        </div>
    );
};

const FAQItem = ({ num, question, answer }: { num: string; question: string; answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-t border-black">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-10 md:py-12 flex justify-between items-center group text-left"
            >
                <h3 className="text-[18px] md:text-[22px] lg:text-[24px] font-medium text-[#1A1A1A] tracking-tight uppercase pr-8">
                    {num}/ {question}
                </h3>
                <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full border border-black flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-black text-white' : 'bg-transparent text-black group-hover:bg-black group-hover:text-white'}`}>
                    <svg viewBox="0 0 24 24" className={`w-5 h-5 fill-none stroke-current transition-transform duration-500 ${isOpen ? 'rotate-180' : '-rotate-45'}`} strokeWidth="2.5">
                        <path d="M7 17l10-10M17 17V7H7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </button>
            <div className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] pb-12 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <p className="text-[15px] md:text-[17px] text-[#555] leading-relaxed max-w-3xl font-medium">
                    {answer}
                </p>
            </div>
        </div>
    );
};

const PricingCard = ({ num, title, price, features }: { num: string; title: string; price: string; features: string[] }) => {
    return (
        <div className="group bg-white p-8 md:p-10 lg:p-12 border border-black/5 hover:border-black/20 transition-all duration-700 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] flex flex-col h-full rounded-[2px]">
            <h3 className="text-[20px] md:text-[24px] font-medium text-[#1A1A1A] mb-12 tracking-tight uppercase group-hover:translate-x-1 transition-transform duration-500">
                {num}/ {title}
            </h3>

            <ul className="space-y-6 mb-16 grow">
                {features.map((feature, index) => (
                    <li key={index} className="text-[15px] text-[#555] font-medium flex items-center gap-3">
                        <div className="w-1 h-1 bg-black/20 rounded-full" />
                        {feature}
                    </li>
                ))}
            </ul>

            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row lg:items-start xl:items-center justify-between pt-10 border-t border-black/5 mt-auto gap-8">
                <div className="flex items-baseline gap-1">
                    <span className="text-[32px] md:text-[40px] font-medium text-[#1A1A1A] tracking-tighter">${price}</span>
                    <span className="text-[12px] text-[#888] font-black tracking-widest uppercase">/Month</span>
                </div>
                <a
                    href="https://marcframe.lemonsqueezy.com/checkout"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#1A1A1A] text-white text-[11px] font-black tracking-[0.2em] px-8 py-5 rounded-full hover:bg-black transition-all uppercase whitespace-nowrap text-center shadow-lg hover:shadow-xl active:scale-95 w-full sm:w-auto lg:w-full xl:w-auto"
                >
                    GET STARTED
                </a>
            </div>
        </div>
    );
};

const PrivateOffice = () => {
    const scrollToExplore = () => {
        const detailsSection = document.getElementById('details');
        if (detailsSection) {
            detailsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <Navbar />
            <main className="bg-white">
                {/* Hero Section */}
                <section className="pt-[140px] px-6 md:px-12 bg-white">
                    <div className="max-w-[1440px] mx-auto">
                        {/* Header Content */}
                        <div className="mb-20">
                            <h1 className="text-[48px] md:text-[80px] lg:text-[100px] font-medium leading-none tracking-tight text-[#1A1A1A] uppercase mb-12">
                                PRIVATE OFFICE
                            </h1>

                            <div className="flex justify-between items-center border-b border-black/5 pb-6">
                                <div className="flex gap-4">
                                    <SocialIcon type="instagram" />
                                    <SocialIcon type="twitter" />
                                </div>
                                <button
                                    onClick={scrollToExplore}
                                    className="flex items-center gap-3 group"
                                >
                                    <span className="text-[10px] font-black tracking-[0.2em] text-[#1A1A1A]">SCROLL TO EXPLORE</span>
                                    <div className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                                        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="2.5">
                                            <path d="M7 7l10 10M17 7v10H7" />
                                        </svg>
                                    </div>
                                </button>
                            </div>
                        </div>

                        {/* Hero Image */}
                        <div className="relative w-full aspect-4/3 md:aspect-16/10 overflow-hidden rounded-[2px]">
                            <Image
                                src="/private-office-hero.png"
                                alt="Private Office Space"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </section>

                {/* Service Details Section */}
                <section id="details" className="py-24 md:py-32 px-6 md:px-12 bg-white">
                    <div className="max-w-[1440px] mx-auto">
                        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
                            {/* Left: Content */}
                            <div className="flex-1 w-full lg:w-auto">
                                <span className="text-[10px] font-black tracking-[0.3em] text-[#888] uppercase block mb-6 px-1">SERVICE DETAILS</span>
                                <h2 className="text-[32px] md:text-[42px] lg:text-[48px] font-medium leading-[1.1] text-[#1A1A1A] uppercase mb-10 tracking-tight">
                                    YOUR DEDICATED SPACE FOR<br />PRODUCTIVITY AND PRIVACY
                                </h2>

                                <p className="text-[15px] md:text-[16px] text-[#555] leading-relaxed mb-16 max-w-2xl px-1">
                                    Our private office space is the epitome of professional tranquility. Ideal for businesses seeking a dedicated, secure environment, these fully furnished offices offer the perfect blend of privacy and community. With ergonomic furniture, high-speed internet, and access to all Open Delta amenities, you&apos;ll have everything you need to work efficiently and comfortably.
                                </p>

                                {/* Interactive Accordion List */}
                                <div className="space-y-0 border-t border-black/10">
                                    <ServiceItem
                                        num="1"
                                        title="FULLY FURNISHED"
                                        desc="Enjoy a ready-to-use office with premium furnishings and decor."
                                        defaultOpen={true}
                                    />
                                    <ServiceItem
                                        num="2"
                                        title="PRIVACY"
                                        desc="Your own lockable private space to focus on your work."
                                        defaultOpen={true}
                                    />
                                    <ServiceItem
                                        num="3"
                                        title="HIGH-SPEED INTERNET"
                                        desc="Stay connected with fast and reliable internet."
                                        defaultOpen={true}
                                    />
                                    <ServiceItem
                                        num="4"
                                        title="ACCESS TO AMENITIES"
                                        desc="Enjoy all the perks of Open Delta, including meeting rooms, networking events, and more."
                                        defaultOpen={true}
                                    />
                                    <ServiceItem
                                        num="5"
                                        title="CUSTOMIZABLE"
                                        desc="Personalize your office layout to match your unique needs."
                                        defaultOpen={false}
                                    />
                                    <ServiceItem
                                        num="6"
                                        title="24/7 ACCESS"
                                        desc="Work on your own schedule with round-the-clock access."
                                        defaultOpen={false}
                                    />
                                    <ServiceItem
                                        num="7"
                                        title="SUPPORTIVE COMMUNITY"
                                        desc="Be part of a collaborative environment while maintaining privacy."
                                        defaultOpen={false}
                                    />
                                </div>
                            </div>

                            {/* Right: Vertical Image - Sticky Wrapper */}
                            <div className="w-full lg:w-[450px] xl:w-[500px] lg:sticky lg:top-[140px] z-10 hidden lg:block">
                                <div className="relative aspect-2/3 w-full overflow-hidden rounded-[8px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] bg-[#F5F5F5]">
                                    <Image
                                        src="/private-office-details-v.png"
                                        alt="Private Office Portrait"
                                        fill
                                        className="object-cover transition-transform duration-1000 hover:scale-105"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent pointer-events-none" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pricing Plans Section */}
                <section className="py-24 md:py-32 px-6 md:px-12 bg-[#F9F9F9]">
                    <div className="max-w-[1440px] mx-auto">
                        {/* Header */}
                        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-20">
                            <div className="max-w-2xl">
                                <span className="text-[10px] font-black tracking-[0.3em] text-[#888] uppercase block mb-6">THE RIGHT PLAN, JUST FOR YOU</span>
                                <h2 className="text-[32px] md:text-[48px] lg:text-[56px] font-medium leading-[1.1] text-[#1A1A1A] uppercase tracking-tight">
                                    FLEXIBLE PLANS TO FIT<br />YOUR UNIQUE NEEDS
                                </h2>
                            </div>
                            <div className="max-w-lg lg:pt-16">
                                <p className="text-[15px] md:text-[16px] text-[#555] leading-relaxed font-medium">
                                    Select from a range of membership options tailored to your requirements. Open Delta offers flexible pricing to accommodate solo entrepreneurs and large teams alike.
                                </p>
                            </div>
                        </div>

                        {/* Pricing Cards Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-4">
                            <PricingCard
                                num="1"
                                title="SILVER PACKAGE"
                                price="250"
                                features={["Dedicated Desk", "High-Speed Internet", "Networking Events", "Coffee & Refreshments"]}
                            />
                            <PricingCard
                                num="2"
                                title="GOLD PACKAGE"
                                price="500"
                                features={["Private Office", "24/7 Access", "Meeting Room Credits", "Premium Amenities"]}
                            />
                            <PricingCard
                                num="3"
                                title="PLATINUM PACKAGE"
                                price="800"
                                features={["Executive Suite", "Unlimited 24/7 Access", "Priority Meeting Room Booking", "VIP Networking Events"]}
                            />
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-24 md:py-32 px-6 md:px-12 bg-white">
                    <div className="max-w-[1440px] mx-auto">
                        <div className="text-center mb-20">
                            <span className="text-[10px] font-black tracking-[0.4em] text-[#888] uppercase block mb-4">DISCOVER THE INFORMATION YOU NEED</span>
                            <h2 className="text-[32px] md:text-[48px] font-medium text-[#1A1A1A] uppercase tracking-tight">
                                YOUR QUESTIONS, ANSWERED
                            </h2>
                        </div>

                        <div className="max-w-4xl mx-auto space-y-0 border-b border-black">
                            <FAQItem
                                num="1"
                                question="What is co-working, and how does it work at Open Delta?"
                                answer="Co-working is a shared workspace where professionals from various fields work independently but share a common infrastructure. At Open Delta, we provide flexible workspaces, private offices, and access to various amenities. Members can choose the plan that best suits their needs and work in a collaborative and productive environment."
                            />
                            <FAQItem
                                num="2"
                                question="What amenities are included in my membership?"
                                answer="Depending on your membership level, you may have access to high-speed internet, meeting rooms, communal areas, kitchen facilities, coffee and refreshments, and networking events. Our Platinum members enjoy additional benefits, including priority meeting room booking and exclusive VIP networking events."
                            />
                            <FAQItem
                                num="3"
                                question="Can I book a meeting room even if I'm not a private office member?"
                                answer="Yes, all Open Delta members, regardless of their package, have access to book meeting rooms. Private office members receive meeting room credits as part of their package, while other members can book meeting rooms on an as-needed basis."
                            />
                            <FAQItem
                                num="4"
                                question="Are there any hidden costs or additional fees?"
                                answer="No, we are committed to transparency. Our pricing is straightforward and inclusive. You only pay the monthly fee for your chosen package, and any additional services or extras can be added at your discretion."
                            />
                            <FAQItem
                                num="5"
                                question="What are the networking events like, and how often do they occur?"
                                answer="Our networking events are designed to foster connections and collaboration. They range from casual meetups to more structured sessions. The frequency depends on your package, with Silver members having weekly events, Gold members enjoying monthly events, and Platinum members having access to exclusive VIP networking opportunities."
                            />
                        </div>
                    </div>
                </section>

                {/* Get In Touch Ticker Section */}
                <GetInTouchTicker />

                <MatchLabFooter />
            </main>
        </>
    );
};

export default PrivateOffice;
