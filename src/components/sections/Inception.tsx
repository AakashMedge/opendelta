import React from 'react';
import Image from 'next/image';

const cards = [
    {
        title: "Obstacle Navigation",
        desc: "Issue identifying and prioritizing the most pressing problems that align with resources, and potential impact.",
        img: "/inception-1.png"
    },
    {
        title: "Intellectual Capital",
        desc: "Tapping into legacy knowledge and modern innovation systems to solve complex social equations.",
        img: "/inception-2.png"
    },
    {
        title: "Strategic Alignment",
        desc: "Ensuring every initiative perfectly mirrors our core mission and long-term vision for change.",
        img: "/inception-1.png"
    },
    {
        title: "Scalable Impact",
        desc: "Designing solutions that can grow naturally across borders and different societal segments.",
        img: "/inception-2.png"
    },
    {
        title: "Sustainability",
        desc: "Issues that align with the core mission, have long-term relevance, and can generate lasting impact through interventions that empower communities.",
        img: "/inception-1.png"
    }
];

const Inception = () => {
    return (
        <section className="bg-white py-20 lg:py-32 px-6 md:px-12 lg:px-20 overflow-hidden">
            {/* Header Section */}
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-16 lg:mb-24">
                <div className="flex-1">
                    <span className="text-[12px] font-bold tracking-[0.2em] text-[#666] uppercase mb-4 block">
                        THE INCEPTION
                    </span>
                    <h2 className="text-[36px] md:text-[48px] lg:text-[56px] font-medium leading-[1.1] text-[#1A1A1A] tracking-tight max-w-xl uppercase">
                        WHAT CATALYZED THE FORMATION OF OUR MOVEMENT?
                    </h2>
                </div>

                <div className="flex-1 flex flex-col justify-end">
                    <p className="text-[16px] md:text-[18px] lg:text-[19px] leading-relaxed text-[#444] font-medium">
                        <strong>Open Delta</strong> emerged from a critical realization: Traditional <strong>venture capital
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

            {/* Premium Accordion Gallery - Desktop Only */}
            <div className="hidden lg:flex gap-4 h-[320px] w-full">
                {cards.map((card, idx) => (
                    <div
                        key={idx}
                        className="relative rounded-[32px] overflow-hidden flex-1 hover:flex-[2.5] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group cursor-pointer"
                    >
                        {/* Background Image */}
                        <Image
                            src={card.img}
                            alt={card.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />

                        {/* Overlay Content */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                            <h3 className="text-white text-[28px] font-bold mb-3 whitespace-nowrap">{card.title}</h3>
                            <p className="text-white/80 text-[14px] leading-relaxed line-clamp-3">
                                {card.desc}
                            </p>
                        </div>

                        {/* Passive Title (Vertical) - Optional premium detail */}
                        <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300">
                            <span className="text-white/40 font-bold uppercase tracking-widest text-xs [writing-mode:vertical-lr] rotate-180">
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
