import React from 'react';

const Mission = () => {
    return (
        <section className="bg-[#FAF3F0] py-20 lg:py-32 px-6 md:px-12 lg:px-20">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
                {/* Left: Title */}
                <div className="flex-1">
                    <span className="text-[12px] font-bold tracking-[0.2em] text-[#666] uppercase mb-4 block">
                        MISSION FULFILLMENT
                    </span>
                    <h2 className="text-[36px] md:text-[48px] lg:text-[56px] font-medium leading-[1.1] text-[#1A1A1A] tracking-tight max-w-xl uppercase">
                        HOW DOES THE ORGANIZATION FUNCTION?
                    </h2>
                </div>

                {/* Right: Detailed Text */}
                <div className="flex-1 space-y-8 text-[16px] md:text-[18px] lg:text-[19px] leading-relaxed text-[#444] font-medium">
                    <p>
                        At <strong>Open Delta</strong>, we're <strong>pioneering</strong> a revolutionary <strong>approach</strong> that turns <strong>grassroots challenges</strong> into <strong>launchpads for innovation</strong>.
                    </p>

                    <p>
                        Picture this: a <strong>nationwide Open Thought Experiment</strong> that digs deep into the
                        fabric of our society, <strong>unearthing</strong> the <strong>issues</strong> that truly <strong>matter</strong>.
                        But we're just getting started. We then <strong>unleash</strong> the <strong>full force of India's
                            intellectual might</strong> – a <strong>dream team</strong> of <strong>startups, researchers,
                                universities, brilliant individuals</strong>, and dedicated <strong>NGOs</strong>.
                    </p>

                    <p>
                        As these minds work their magic, we're out there, blazing trails in the funding
                        wilderness, forging <strong>alliances</strong> with forward-thinking <strong>government agencies</strong>,
                        socially conscious <strong>corporations</strong>, and passionate <strong>NGOs</strong>.
                    </p>

                    <p>
                        Our secret weapon? The art of context.
                    </p>

                    <p>
                        We don't just connect problems to solutions; we create a perfect <strong>harmony</strong> between
                        <strong>challenges</strong> and <strong>change-makers</strong>. And when it's time to turn ideas into
                        action, we're there every step of the way, <strong>nurturing</strong> each <strong>project</strong> from
                        its first breath to its <strong>full-grown impact</strong>.
                    </p>

                    <p>
                        This is more than problem-solving – <strong>it's a movement to reshape India's future,
                            one innovative solution at a time.</strong>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Mission;
