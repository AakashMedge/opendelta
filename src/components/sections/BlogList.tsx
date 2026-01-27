"use client";

import React from 'react';
import Image from 'next/image';

const blogPosts = [
    {
        id: 1,
        date: "APR 29, 2025",
        title: "AGRITECH BEYOND THE FARM: LEVERAGING EDGE TECHNOLOGIES TO BOOST RURAL LOGISTICS, STORAGE, AND MARKET ACCESS",
        description: "Agritech must move beyond farms to solve the critical bottlenecks of storage, logistics, and market access. This article explores how IoT, AI, and blockchain technologies, coupled with grassroots innovation models like Open Delta, are building scalable rural agritech ecosystems that empower smallholder farmers to thrive beyond the harvest.",
        image: "/blog-agritech.png",
    },
    {
        id: 2,
        date: "APR 28, 2025",
        title: "SMART WATER SYSTEMS FOR SMALL COMMUNITIES: HOW IOT, DATA, AND GRASSROOTS STEWARDSHIP ARE SOLVING THE RURAL WATER CRISIS",
        description: "With rural communities increasingly vulnerable to water scarcity, smart solutions that combine IoT, data analytics, and grassroots governance are emerging as game-changers. Open Delta is pioneering low-cost, scalable systems that empower small villages to manage their water sustainably and resiliently; one smart system at a time.",
        image: "/blog-water.png",
    },
    {
        id: 3,
        date: "APR 24, 2025",
        title: "WOMEN-LED INNOVATION ECOSYSTEMS IN GRAM PANCHAYATS: FOSTERING DECENTRALISED LEADERSHIP AND ENTREPRENEURSHIP THROUGH OPEN DELTA PARTNERSHIPS",
        description: "In gram panchayats across rural India, women are driving innovation at the grassroots. Through Open Delta's partnership-led ecosystem—offering decentralised leadership training, micro-infrastructure, and market access—local women entrepreneurs are solving real problems in health, education, and livelihood. When women lead from the front, transformation follows.",
        image: "/blog-women.png",
    },
    {
        id: 4,
        date: "APR 23, 2025",
        title: "MICRO INFRASTRUCTURE, MACRO IMPACT: HOW LOW-COST INNOVATIONS ARE TRANSFORMING RURAL EDUCATION, HEALTH, AND SANITATION",
        description: "From mobile clinics to bamboo schools, micro-infrastructure is flipping the rural development script. Low-cost, high-impact innovations backed by design thinking and community partnership are proving that transformation doesn't always require big budgets—just the right tools, people, and intent.",
        image: "/blog-micro.png",
    },
    {
        id: 5,
        date: "APR 20, 2025",
        title: "RETHINKING MOBILITY: HYPERLOCAL SOLUTIONS FOR LAST-MILE ACCESS IN RURAL INDIA",
        description: "Many villages across India still rely on infrequent, unplanned transportation modes. There's a chronic gap in access to emergency vehicles, farm-to-market logistics, and mobility for women and children. From pregnant mothers needing a safe ride to a health center to farmers losing harvest value due to delayed or absent transport—the system as it stands today is broken at the seams.",
        image: "/blog-mobility.png",
    },
    {
        id: 6,
        date: "APR 22, 2025",
        title: "DESIGNING RURAL INNOVATION LABS THAT ACTUALLY WORK",
        description: "In the heartlands of India, where conventional infrastructure often falls short, innovation is not a luxury—it's a necessity. From hyperlocal entrepreneurship models to modular innovation labs, Open Delta is championing rural transformation through systems that work on the ground. This isn't about grand theories, but field-tested frameworks and community-led experimentation that address real-world challenges. By fusing grassroots ingenuity with scalable frameworks, Open Delta is demonstrating how rural India can lead the innovation curve—not follow it.",
        image: "/blog-labs.png",
    },
    {
        id: 7,
        date: "APR 21, 2025",
        title: "REWIRING POSSIBILITIES: HOW OPEN DELTA IS USING INNOVATION TO SOLVE GRASSROOTS CHALLENGES",
        description: "In the heartlands of India, where conventional infrastructure often falls short, innovation is not a luxury—it's a necessity. From hyperlocal entrepreneurship models to modular innovation labs, Open Delta is championing rural transformation through systems that work on the ground. This isn't about grand theories, but field-tested frameworks and community-led experimentation that address real-world challenges. By fusing grassroots ingenuity with scalable frameworks, Open Delta is demonstrating how rural India can lead the innovation curve—not follow it.",
        image: "/blog-rewiring.png",
    },
    {
        id: 8,
        date: "APR 7, 2025",
        title: "UNLOCKING INDIA’S NEXT GROWTH ENGINE: THE IMPERATIVE OF RURAL TRANSFORMATION",
        description: "India's next wave of economic growth will not emerge solely from its urban centers—it will rise from its villages. With over 65% of the population residing in rural areas yet contributing less than a third of the GDP, the rural economy represents both India's greatest challenge and its most untapped opportunity. Rural transformation is not just a matter of social equity—it is a strategic imperative. By investing in agri-tech ecosystems, digital and physical infrastructure, rural entrepreneurship, and future-ready human capital, India could unlock $1.5–2 trillion in additional economic value by 2035. This is not about subsidy-driven development—it's about building resilient, self-sustaining rural ecosystems that fuel inclusive national growth. The real question is no longer if India should transform its rural economy—but how fast it can do so.",
        image: "/blog-growth.png",
    },
    {
        id: 9,
        date: "FEB 14, 2025",
        title: "CITY DEVELOPMENT: ADDRESSING MULTIFACETED PROBLEMS LEADING TO SOCIAL INEQUALITIES AND IMPROVING QUALITY OF LIFE THROUGH INNOVATION.",
        description: "For urban planners and policymakers, city development is not just about infrastructure but also about addressing systemic inequalities that impact the quality of life. By leveraging innovation, cities can transform into equitable, efficient, and sustainable ecosystems that cater to all socioeconomic groups.",
        image: "/blog-city.png",
    },
    {
        id: 10,
        date: "FEB 13, 2025",
        title: "PORT TRANSITION: ADAPTING TO UNCERTAINTIES LIKE CLIMATE CHANGE, SOCIAL RESPONSIBILITY, AND EMERGING DIGITIZATION TECHNOLOGIES.",
        description: "For port operators and logistics stakeholders, transitioning ports to meet modern challenges requires balancing environmental responsibility, technological advancements, and economic demands. The integration of digital solutions and sustainable practices ensures resilience against climate change and evolving global trade dynamics.",
        image: "/inception-1.png",
    },
    {
        id: 11,
        date: "FEB 15, 2025",
        title: "INTERDISCIPLINARY METHODOLOGY: DEVELOPING METHODS FOR INTEGRATING KNOWLEDGE FROM VARIOUS DISCIPLINES AND NON-ACADEMIC PARTNERS.",
        description: "The prediction is that by 2029, the job outlook for these two fields will grow by leveraging diverse perspectives and collaborative frameworks to solve complex societal problems.",
        image: "/inception-2.png",
    },
    {
        id: 12,
        date: "FEB 17, 2025",
        title: "CLIMATE RESILIENCE: DESIGNING SOLUTIONS FOR RISING SEA LEVELS AND OTHER CLIMATE-RELATED CHALLENGES IN DELTA REGIONS.",
        description: "For governments and coastal communities, rising sea levels and extreme weather events pose urgent threats. Climate resilience strategies integrate engineering, policy, and community-driven solutions to protect delta regions and ensure long-term sustainability.",
        image: "/hero-3.png",
    },
    {
        id: 13,
        date: "FEB 18, 2025",
        title: "SOCIAL INNOVATION: FOSTERING SOCIAL ENTERPRISES AND IMPACT-DRIVEN INITIATIVES TO ADDRESS SOCIETAL NEEDS.",
        description: "For governments and policymakers, social innovation provides a structured approach to addressing pressing societal challenges. By fostering social enterprises and impact-driven initiatives, we can create sustainable solutions that bridge gaps in healthcare, education, and economic development.",
        image: "/matchlab-hands.png",
    },
    {
        id: 14,
        date: "FEB 19, 2025",
        title: "TECHNOLOGY AND DIGITAL SKILLS: PROMOTING DIGITAL LITERACY AND TECHNOLOGICAL ADOPTION TO BRIDGE THE INNOVATION GAP",
        description: "For governments and policymakers, promoting digital literacy and technological adoption is essential to closing the innovation gap. Equipping citizens with digital skills empowers them to participate in the modern economy, enhances government service delivery, and drives national competitiveness.",
        image: "/hero-2.png",
    },
    {
        id: 15,
        date: "FEB 25, 2025",
        title: "RESEARCH AND DEVELOPMENT: INCREASING INVESTMENT IN R&D, PARTICULARLY IN EMERGING DEEPTECH FIELDS",
        description: "For governments and industries, increased investment in R&D—especially in DeepTech fields like AI, quantum computing, and biotechnology—is critical for economic competitiveness and solving grand societal challenges. Strategic R&D funding fosters breakthrough innovations that drive sustainable progress.",
        image: "/thinkspace-hero.png",
    },
    {
        id: 16,
        date: "FEB 19, 2025",
        title: "INTELLECTUAL PROPERTY: STRENGTHENING THE IP FRAMEWORK TO PROTECT AND COMMERCIALIZE INNOVATIONS.",
        description: "This might be a simple example, but if a computer can figure out how to walk on it's own, it needs protection for its innovation. Strengthening the IP framework is vital for the commercial viability of emerging technologies.",
        image: "/hero-illustration.png",
    },
    {
        id: 17,
        date: "FEB 24, 2025",
        title: "SUSTAINABLE DEVELOPMENT: FOCUSING ON CLEAN ENERGY, AGRICULTURE, AND ENVIRONMENTAL CONSERVATION INITIATIVES.",
        description: "For governments and communities, sustainable development is the key to balancing economic growth with environmental responsibility. By investing in clean energy, sustainable agriculture, and conservation efforts, societies can secure a healthier future while tackling climate change and resource scarcity.",
        image: "/focus-area.png",
    },
    {
        id: 18,
        date: "FEB 25, 2025",
        title: "DELTA SYSTEM: ANALYZING TRENDS, SHOCKS, STRESSES, AND INTERVENTIONS IN URBAN DELTA SYSTEMS AND THEIR INTERRELATIONS.",
        description: "For policymakers and urban planners, understanding delta systems is crucial for building resilient cities. By analyzing trends, shocks, and interventions, we can mitigate risks from climate change, population growth, and environmental degradation while ensuring sustainable urban development.",
        image: "/open-thought-hero.png",
    }
];

const BlogList = () => {
    return (
        <section className="bg-white py-24 md:py-32">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
                    {blogPosts.map((post) => (
                        <div key={post.id} className="flex flex-col group">
                            {/* Image Container */}
                            <div className="relative aspect-[4/3] overflow-hidden mb-8 shadow-sm">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    priority
                                />
                            </div>

                            {/* Date */}
                            <div className="text-[11px] font-black tracking-[0.2em] text-[#888] mb-4">
                                {post.date}
                            </div>

                            {/* Title */}
                            <h3 className="text-[18px] md:text-[20px] font-bold text-[#1A1A1A] leading-[1.3] mb-6 uppercase tracking-tight line-clamp-4 min-h-[105px]">
                                {post.title}
                            </h3>

                            {/* Description */}
                            <p className="text-[14px] md:text-[15px] leading-[1.6] text-[#555] mb-8 line-clamp-6">
                                {post.description}
                            </p>

                            {/* Button */}
                            <button className="mt-auto px-8 py-4 bg-[#1A1A1A] text-white text-[10px] font-black tracking-[0.3em] uppercase rounded-full hover:bg-black transition-all w-fit">
                                READ FULL POST
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogList;
