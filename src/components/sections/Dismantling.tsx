import React from 'react';

const Dismantling = () => {
    return (
        <section className="bg-[#EBEBEB] py-12 sm:py-16 md:py-20 lg:py-28 xl:py-32 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
            <div className="max-w-4xl mx-auto space-y-8 sm:space-y-10 lg:space-y-12">
                {/* Main Heading */}
                <div className="space-y-6">
                    <h2 className="text-[24px] sm:text-[28px] md:text-[36px] lg:text-[48px] xl:text-[56px] font-bold leading-[1.1] text-[#1A1A1A] uppercase tracking-tight">
                        DISMANTLING CONVENTIONAL THINKING
                    </h2>
                    <p className="text-[14px] sm:text-[15px] md:text-[17px] lg:text-[18px] xl:text-[20px] text-[#444] font-medium leading-relaxed">
                        Open Delta represents a paradigm shift in the approach to innovation, addressing three key
                        barriers that have long constrained progress
                    </p>
                </div>

                {/* Points Section */}
                <div className="space-y-10 sm:space-y-12 lg:space-y-16 pt-6 sm:pt-8">
                    {/* Point 1 */}
                    <div className="space-y-4">
                        <h3 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-bold text-[#1A1A1A]">
                            Dismantling Conventional Thinking
                        </h3>
                        <p className="text-[16px] md:text-[18px] text-[#555] leading-relaxed">
                            Open Delta challenges the status quo by fostering an environment that encourages diverse
                            perspectives and unconventional ideas. By bringing together thinkers, academics, startups,
                            and thought leaders, the platform creates a melting pot of ideas that transcends traditional
                            boundaries.
                        </p>
                    </div>

                    {/* Point 2 */}
                    <div className="space-y-4">
                        <h3 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-bold text-[#1A1A1A]">
                            Breaking Down Silos
                        </h3>
                        <p className="text-[16px] md:text-[18px] text-[#555] leading-relaxed">
                            One of the most significant barriers to innovation is the isolation of knowledge and resources
                            within organizational silos. Open Delta tackles this issue by facilitating connections between
                            researchers, companies, NGOs, and funding sources. Promoting cross-functional
                            collaboration and knowledge sharing. Creating a unified platform for problem-solving that
                            spans across sectors and disciplines. This interconnected approach ensures that ideas and
                            resources flow freely, leading to more holistic and effective solutions to complex societal
                            issues.
                        </p>
                    </div>

                    {/* Point 3 */}
                    <div className="space-y-6">
                        <h3 className="text-[20px] md:text-[24px] font-bold text-[#1A1A1A]">
                            Mitigating Risk Aversion
                        </h3>
                        <div className="space-y-6">
                            <p className="text-[16px] md:text-[18px] text-[#555] leading-relaxed">
                                Innovation inherently involves risk, and fear of failure often stifles creativity and progress.
                            </p>

                            <ul className="space-y-4">
                                <li className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] text-[#555] leading-relaxed pl-6 relative before:content-[''] before:absolute before:left-0 before:top-3 before:w-2 before:h-[2px] before:bg-black">
                                    Leveraging the expertise and methodologies of the group in the absence of the usual financial
                                    constraints.
                                </li>
                                <li className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] text-[#555] leading-relaxed pl-6 relative before:content-[''] before:absolute before:left-0 before:top-3 before:w-2 before:h-[2px] before:bg-black">
                                    Creating a supportive ecosystem that values experimentation and learning from failures
                                </li>
                                <li className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] text-[#555] leading-relaxed pl-6 relative before:content-[''] before:absolute before:left-0 before:top-3 before:w-2 before:h-[2px] before:bg-black">
                                    Distributing risk across a network of stakeholders, reducing the burden on any single entity
                                </li>
                            </ul>

                            <p className="text-[16px] md:text-[18px] text-[#555] leading-relaxed">
                                By reframing risk as an opportunity for growth and learning. Open Delta encourages bold,
                                transformative ideas that might otherwise be overlooked in more conservative environments.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dismantling;
