"use client";

import React from 'react';

const AboutThinkSpace = () => {
    const [visibleIndexes, setVisibleIndexes] = React.useState<number[]>([]);
    const containerRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = Number(entry.target.getAttribute('data-index'));
                        setVisibleIndexes((prev) => Array.from(new Set([...prev, index])));
                    }
                });
            },
            { threshold: 0.2 }
        );

        const items = containerRef.current?.querySelectorAll('.reveal-item');
        items?.forEach((item) => observer.observe(item));

        return () => items?.forEach((item) => observer.unobserve(item));
    }, []);

    const paragraphs = [
        "The growing complexity of societal challenges necessitates interdisciplinary approaches to problem-solving. As the COVID-19 pandemic has demonstrated, addressing global issues requires expertise from various fields, including epidemiology, public health, economics, and political science. This complexity drives the need for collaborative efforts that transcend traditional disciplinary boundaries.",
        "In our increasingly distracted world, the value of uninterrupted, focused discussions cannot be overstated. Think Spaces offer sanctuaries for collective contemplation, providing environments free from distractions where diverse minds can converge to tackle pressing societal issues. These spaces foster deep reflection and collaborative problem-solving, nurturing ideas with the potential to reshape our nation's future.",
        "Historically, intellectual gatherings have led to transformative ideas. The Nobel Prize-winning work of Elinor Ostrom on protecting common pool resources exemplifies how interdisciplinary research can address complex social challenges. Ostrom's research brought together insights from environmental science, law, political science, and economics, demonstrating the power of collaborative thinking in solving seemingly intractable problems.",
        "Think Spaces foster serendipitous connections between diverse fields, leading to novel solutions. Serendipity, or the accidental discovery of information, plays a crucial role in problem-solving and innovation. By creating environments that encourage unexpected encounters and collaborations, Think Spaces can spark new ideas and approaches that may not have been possible within the confines of a single discipline.",
        "The power of collective intelligence in solving complex problems is evident in the interdisciplinary approach to research. By bringing together researchers from different fields, interdisciplinary teams can leverage diverse perspectives, methodologies, and analytical tools to develop more comprehensive and robust solutions to complex issues. This collaborative approach enhances research quality and promotes innovation by combining the strengths of various disciplines.",
        "Think Spaces provide a judgment-free environment that encourages risk-taking and unconventional thinking. Embracing risk in idea creation can lead to breakthroughs by pushing individuals out of their comfort zones and encouraging them to explore bold and innovative ideas. By reframing problems and considering different perspectives, participants in Think Spaces can break free from traditional thinking patterns and develop creative solutions to complex challenges."
    ];

    return (
        <section className="bg-white py-20 md:py-32 overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12" ref={containerRef}>
                {/* Section Title */}
                <div className="text-[12px] md:text-[14px] font-black tracking-[0.2em] text-[#888] mb-12 uppercase reveal-item opacity-0 translate-y-4 transition-all duration-700 data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0" data-index="-1" data-visible={visibleIndexes.includes(-1)}>
                    ABOUT THINKSPACE
                </div>

                {/* Content Paragraphs */}
                <div className="space-y-10 md:space-y-12">
                    {paragraphs.map((text, index) => (
                        <p
                            key={index}
                            data-index={index}
                            data-visible={visibleIndexes.includes(index)}
                            className="text-[16px] md:text-[18px] lg:text-[20px] leading-[1.6] text-[#333] font-medium max-w-6xl reveal-item opacity-0 translate-y-10 transition-all duration-1000 data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0"
                        >
                            {text}
                        </p>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutThinkSpace;
