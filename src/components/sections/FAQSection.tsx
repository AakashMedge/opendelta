"use client";

import React, { useState } from 'react';

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "1/ WHAT IS OPEN DELTA?",
            answer: "Open Delta is a collaborative innovation ecosystem where intellectual leaders, researchers, policymakers, and problem-solvers come together to address societal challenges. We operate through ThinkSpace and Open Thought Experiments, using structured methodologies to solve real-world problems at scale."
        },
        {
            question: "2/ HOW DOES OPEN DELTA WORK?",
            answer: "We provide a platform where members can:\n• Participate in Open Thought Experiments to brainstorm and refine ideas.\n• Engage in ThinkSpace, a network of virtual and physical spaces for structured problem-solving.\n• Access funding, expert mentorship, and collaborative resources to turn ideas into action."
        },
        {
            question: "3/ WHO CAN JOIN OPEN DELTA?",
            answer: "Open Delta is open to:\n• Researchers, scientists, and academics\n• Industry experts and entrepreneurs\n• Policymakers and government representatives\n• Social innovators and problem-solvers from any field"
        },
        {
            question: "4/ HOW DO I BECOME A MEMBER?",
            answer: "You can apply through our website, where we evaluate members based on their expertise, contribution potential, and alignment with Open Delta's mission. Some roles may require invitation or recommendation."
        },
        {
            question: "5/ WHAT IS THINKSPACE?",
            answer: "ThinkSpace is an intellectual incubator—a network of physical and virtual environments where individuals collaborate on solutions to critical societal issues. It enables real-time discussions, structured problem-solving, and execution strategies."
        },
        {
            question: "6/ HOW DOES OPEN THOUGHT EXPERIMENT WORK?",
            answer: "An Open Thought Experiment is a structured, collaborative process where diverse minds come together to explore potential solutions to large-scale problems. These experiments challenge conventional thinking and push the boundaries of innovation through iterative brainstorming and refinement."
        },
        {
            question: "7/ CAN ANYONE CONTRIBUTE TO AN OPEN THOUGHT EXPERIMENT?",
            answer: "Yes! Anyone with relevant expertise, fresh perspectives, or an interest in contributing meaningful solutions can participate in thought experiments."
        },
        {
            question: "8/ HOW ARE THINKSPACE AND OPEN THOUGHT EXPERIMENTS DIFFERENT?",
            answer: "• ThinkSpace is the environment where structured collaboration takes place.\n• Open Thought Experiments are the problem-solving sessions within ThinkSpace, designed to generate actionable solutions."
        },
        {
            question: "9/ HOW DOES OPEN DELTA SUPPORT PROJECT FUNDING?",
            answer: "We connect problem-solvers with:\n• Grants & Sponsorships from governments and private organizations.\n• Venture Philanthropy & Impact Investments to fund scalable solutions.\n• Corporate R&D Collaborations to drive industry-backed innovations."
        },
        {
            question: "10/ HOW DOES OPEN DELTA ENSURE FINANCIAL TRANSPARENCY?",
            answer: "We operate on open governance models with publicly accessible dashboards that track fund disbursement, impact metrics, and allocation strategies in real time."
        },
        {
            question: "11/ CAN STARTUPS AND ENTERPRISES COLLABORATE WITH OPEN DELTA?",
            answer: "Yes! We partner with startups, enterprises, and research labs to provide funding, resources, and access to our ThinkSpace ecosystem for innovation-driven projects."
        },
        {
            question: "12/ WHAT IS DYNAMIC MATCHING?",
            answer: "Dynamic Matching is our AI-driven collaboration system that connects problem-solvers with the right resources, funding opportunities, and expert networks based on their expertise, project needs, and societal impact goals."
        },
        {
            question: "13/ HOW DOES OPEN DELTA FACILITATE PARTNERSHIPS?",
            answer: "We use real-time analytics and knowledge graphs to match intellectual capital with problem statements, ensuring the best minds collaborate on the most pressing issues."
        },
        {
            question: "14/ HOW DO PROJECTS MOVE FROM IDEAS TO REAL-WORLD IMPACT?",
            answer: "• Phase 1: Idea generation through Open Thought Experiments.\n• Phase 2: Prototyping and validation in ThinkSpace.\n• Phase 3: Funding, resource allocation, and expert mentorship.\n• Phase 4: Implementation through corporate, government, or independent channels."
        },
        {
            question: "15/ HOW DOES OPEN DELTA MEASURE SUCCESS?",
            answer: "We track impact using key performance indicators (KPIs) such as:\n• Societal upliftment and policy influence\n• Cost reduction and solution scalability\n• Tech adoption rates and stakeholder engagement"
        },
        {
            question: "16/ HOW CAN I CONTRIBUTE TO OPEN DELTA?",
            answer: "You can:\n✓ Join as a researcher, entrepreneur, or policy innovator.\n✓ Participate in Open Thought Experiments.\n✓ Host or join ThinkSpace discussions.\n✓ Provide funding, mentorship, or collaboration opportunities."
        },
        {
            question: "17/ WHAT ARE THE LONG-TERM GOALS OF OPEN DELTA?",
            answer: "Our vision is to create a self-sustaining ecosystem of innovation, where intellectual capital is continuously mobilized to:\n✓ Solve large-scale social challenges through structured collaboration.\n✓ Bridge institutional voids by connecting thinkers, policymakers, and industries.\n✓ Expand globally, allowing Open Delta to become a universal framework for problem-solving and innovation."
        },
        {
            question: "18/ HOW CAN ORGANIZATIONS OR GOVERNMENTS COLLABORATE WITH OPEN DELTA?",
            answer: "Governments, corporations, and institutions can:\n• Partner with Open Delta to co-develop solutions for policy and governance challenges.\n• Contribute funding, research, and infrastructure to fuel ThinkSpace and Open Thought Experiments.\n• Utilize our Dynamic Matching system to connect with top innovators for high-impact projects."
        },
        {
            question: "19/ HOW DO I STAY UPDATED ON OPEN DELTA'S PROGRESS?",
            answer: "• Follow our updates through our website and social media channels.\n• Subscribe to our insight reports to track key innovations and problem-solving initiatives.\n• Join our ThinkSpace sessions to directly engage with ongoing experiments."
        }
    ];

    return (
        <section className="bg-white py-24 md:py-32">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                <div className="text-center mb-20 animate-fade-in">
                    <h3 className="text-[12px] font-black tracking-[0.4em] text-[#888] mb-4 uppercase">
                        DISCOVER THE INFORMATION YOU NEED
                    </h3>
                    <h2 className="text-[32px] md:text-[48px] font-medium text-[#1A1A1A] uppercase tracking-tight">
                        YOUR QUESTIONS, ANSWERED
                    </h2>
                </div>

                <div className="max-w-4xl mx-auto">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-t border-black/10 last:border-b last:border-black/10">
                            <button
                                onClick={() => setOpenIndex(index === openIndex ? null : index)}
                                className="w-full py-8 md:py-12 flex justify-between items-center group text-left"
                            >
                                <span className={`text-[19px] md:text-[26px] font-medium uppercase tracking-tight pr-8 transition-colors duration-300 ${openIndex === index ? 'text-[#1A1A1A]' : 'text-[#222]'}`}>
                                    {faq.question}
                                </span>
                                <div className={`flex-shrink-0 w-10 md:w-12 h-10 md:h-12 rounded-full bg-[#1A1A1A] flex items-center justify-center transition-all duration-500`}>
                                    <svg
                                        viewBox="0 0 24 24"
                                        className={`w-5 h-5 md:w-6 md:h-6 fill-none stroke-white transition-transform duration-500 ${openIndex === index ? 'rotate-180' : 'rotate-90'}`}
                                        strokeWidth="3"
                                    >
                                        <path d="M7 17l10-10M17 17V7H7" strokeLinecap="square" />
                                    </svg>
                                </div>
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${openIndex === index ? 'max-h-[800px] opacity-100 pb-12' : 'max-h-0 opacity-0'}`}
                            >
                                <div className="text-[16px] md:text-[18px] text-[#555] font-medium leading-[1.6] whitespace-pre-line max-w-3xl">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
