import React from 'react';
import Image from 'next/image';

const cards = [
    {
        title: "Obstacle Navigation",
        desc: "Issue identifying and prioritizing the most pressing problems that align with resources, and potential impact, while considering the dynamic nature of social challenges and the need for sustainable, long-term solutions",
        img: "/inception-obstacle-navigation.png"
    },
    {
        title: "Profitability Contraints",
        desc: "The dilemma of pursuing a social mission and achieving financial sustainability, as profitability constraints can limit the ability to address critical societal issues that may not generate immediate revenue",
        img: "/inception-profitability-constraints.png"
    },
    {
        title: "Solution Absence",
        desc: "Failure to accurately identify and prioritize the most pressing societal issues, leading to misaligned efforts and ineffective interventions that do not address the root causes of problems",
        img: "/inception-solution-absence.png"
    },
    {
        title: "Funding Gap",
        desc: "A significant funding gap, particularly in indirect costs and organizational development, which can hinder their ability to scale impact",
        img: "/inception-funding-gap.png"
    },
    {
        title: "Sustainability",
        desc: "Issues that align with the core mission, have long-term relevance, and can generate lasting impact through interventions that empower communities and foster systemic change",
        img: "/inception-sustainability.png"
    }
];

const Inception = () => {
    return (
        <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-28 xl:py-32 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 overflow-hidden">
            {/* Header Section */}
            <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-16 xl:gap-24 mb-10 sm:mb-14 lg:mb-20 xl:mb-24 max-w-[1440px] mx-auto">
                <div className="flex-1">
                    <span className="text-[10px] sm:text-[11px] md:text-[12px] font-bold tracking-[0.15em] sm:tracking-[0.2em] text-[#666] uppercase mb-3 sm:mb-4 block">
                        THE INCEPTION
                    </span>
                    <h2 className="text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px] xl:text-[56px] font-medium leading-[1.1] text-[#1A1A1A] tracking-tight max-w-xl uppercase">
                        WHAT CATALYZED THE FORMATION OF OUR ERA?
                    </h2>
                </div>

                <div className="flex-1 flex flex-col justify-end">
                    <p className="text-[14px] sm:text-[15px] md:text-[17px] lg:text-[18px] xl:text-[19px] leading-relaxed text-[#444] font-medium">
                        <strong><span className="text-[#FF8C00]">Open</span> Delta</strong> emerged from a critical realization: Traditional <strong>venture capital
                            mathematics</strong> often <strong>sidelined</strong> crucial <strong>grassroots challenges</strong> due to
                        <strong>profitability constraints</strong>. However, we've revolutionized this approach by assembling
                        <strong>a team of futurists</strong> who bring a <strong>fresh perspective</strong> to social innovation.
                        Our teams employ a <strong>unique methodology</strong> that balances <strong>social impact
                            with financial sustainability</strong>, allowing us to tackle previously <strong>overlooked problems</strong>.
                        By leveraging the <strong>expertise</strong> of our network of <strong>innovative thinkers</strong>, we're
                        able to chart <strong>augmented solutions</strong> that <strong>transcend</strong> conventional
                        profitability metrics. This <strong>synergy</strong> enables us to <strong>address</strong> pressing
                        <strong>societal issues</strong> while ensuring the <strong>longevity and scalability</strong> of our
                        initiatives, effectively <strong>bridging the gap</strong> between <strong>social good</strong> and
                        <strong>financial viability</strong>.
                    </p>
                </div>
            </div>

            {/* Mobile/Tablet Card Grid */}
            <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-[1440px] mx-auto">
                {cards.map((card, idx) => (
                    <div
                        key={idx}
                        className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/5] sm:aspect-[3/4] group"
                    >
                        <Image
                            src={card.img}
                            alt={card.title}
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-4 sm:p-6">
                            <h3 className="text-white text-[18px] sm:text-[20px] font-bold mb-2">{card.title}</h3>
                            <p className="text-white/80 text-[12px] sm:text-[13px] leading-relaxed line-clamp-3">
                                {card.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Premium Accordion Gallery - Desktop Only */}
            <div className="hidden lg:flex gap-3 xl:gap-4 h-[300px] xl:h-[320px] w-full max-w-[1440px] mx-auto">
                {cards.map((card, idx) => (
                    <div
                        key={idx}
                        className="relative rounded-[24px] xl:rounded-[32px] overflow-hidden flex-1 hover:flex-[2.5] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group cursor-pointer"
                    >
                        {/* Background Image */}
                        <Image
                            src={card.img}
                            alt={card.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />

                        {/* Overlay Content */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 xl:p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                            <h3 className="text-white text-[24px] xl:text-[28px] font-bold mb-2 xl:mb-3 whitespace-nowrap">{card.title}</h3>
                            <p className="text-white/80 text-[13px] xl:text-[14px] leading-relaxed line-clamp-3">
                                {card.desc}
                            </p>
                        </div>

                        {/* Passive Title (Vertical) - Optional premium detail */}
                        <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300">
                            <span className="text-white/40 font-bold uppercase tracking-widest text-[10px] xl:text-xs [writing-mode:vertical-lr] rotate-180">
                                {card.title}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Inception;
