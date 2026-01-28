"use client";

import React from 'react';
import Link from 'next/link';

const ContributionSection = () => {
    const [isVisible, setIsVisible] = React.useState(false);
    const sectionRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true);
            },
            { threshold: 0.1 }
        );

        const currentSection = sectionRef.current;
        if (currentSection) observer.observe(currentSection);

        return () => {
            if (currentSection) observer.unobserve(currentSection);
        };
    }, []);

    const contributorTasks = [
        'Access the Think Space platform and select "Join the Thinktank." OR "Join as a Contributor"',
        'Create a profile, highlighting your skills, experiences, and interests.',
        'Take a short "Thought Profiler" quiz to match you with relevant Think Spaces.',
        'View recommended Think Space sessions based on your profile.',
        'Register for events, choosing in-person or virtual participation.',
        'Access pre-session resources to familiarize yourself with the topic.',
        'Attend the Think Space, actively contributing ideas and perspectives.',
        'Collaborate with other participants on developing solution frameworks.',
        'Submit post-session reflections and continue discussions on the platform\'s forums.'
    ];

    const hostTasks = [
        'Access the Think Space portal and select "Become a Host."',
        'Complete a detailed application, including your background and proposed Think Space topic.',
        'Once approved, undergo a brief online training on facilitating effective Think Space sessions.',
        'Explore the Open Thought Experiment Topics',
        'Schedule your Think Space event, choosing between physical or virtual formats.',
        'Receive pre-session materials and guidelines via email.',
        'Use the platform\'s tools to invite contributors and manage registrations.',
        'Facilitate the Think Space session, guiding discussions and capturing key insights.'
    ];

    return (
        <section ref={sectionRef} className="bg-[#E9F2F7] py-12 sm:py-16 md:py-24 lg:py-28 xl:py-32 overflow-hidden">
            <div className={`max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                {/* Left Heading */}
                <div className="lg:w-1/4">
                    <h2 className="text-[28px] sm:text-[32px] md:text-[44px] lg:text-[54px] xl:text-[64px] font-medium leading-[1.1] tracking-tight text-[#1A1A1A]">
                        HOW<br />
                        CAN I<br />
                        CONTRIBUTE
                    </h2>
                </div>

                {/* Lists Grid */}
                <div className="lg:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-16">
                    {/* Contributors Column */}
                    <div className={`flex flex-col transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                        <h3 className="text-[24px] sm:text-[28px] md:text-[36px] lg:text-[42px] font-medium leading-none text-[#1A1A1A] mb-6 sm:mb-8 uppercase tracking-tight">
                            FOR<br />
                            CONTRIBUTORS
                        </h3>
                        <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10 lg:mb-12">
                            {contributorTasks.map((task, idx) => (
                                <li key={idx} className="flex gap-2 sm:gap-3 text-[13px] sm:text-[14px] md:text-[15px] text-[#444] leading-relaxed">
                                    <span className="shrink-0 mt-2 w-1 h-1 rounded-full bg-black"></span>
                                    <span>{task}</span>
                                </li>
                            ))}
                        </ul>
                        <Link
                            href="/coming-soon"
                            className="w-fit mt-auto px-8 py-3 bg-[#1A1A1A] text-white text-[11px] font-black tracking-widest rounded-full hover:bg-black/80 transition-all uppercase text-center"
                        >
                            POST A THOUGHT
                        </Link>
                    </div>

                    {/* Hosts Column */}
                    <div className={`flex flex-col transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                        <h3 className="text-[24px] sm:text-[28px] md:text-[36px] lg:text-[42px] font-medium leading-none text-[#1A1A1A] mb-6 sm:mb-8 uppercase tracking-tight">
                            FOR<br />
                            HOSTS
                        </h3>
                        <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10 lg:mb-12">
                            {hostTasks.map((task, idx) => (
                                <li key={idx} className="flex gap-2 sm:gap-3 text-[13px] sm:text-[14px] md:text-[15px] text-[#444] leading-relaxed">
                                    <span className="shrink-0 mt-2 w-1 h-1 rounded-full bg-black"></span>
                                    <span>{task}</span>
                                </li>
                            ))}
                        </ul>
                        <Link
                            href="/coming-soon"
                            className="w-fit mt-auto px-8 py-3 bg-[#1A1A1A] text-white text-[11px] font-black tracking-widest rounded-full hover:bg-black/80 transition-all uppercase text-center"
                        >
                            HOST A THOUGHT
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContributionSection;
