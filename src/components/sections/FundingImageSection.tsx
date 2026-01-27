"use client";

import React from 'react';
import Image from 'next/image';

const FundingImageSection = () => {
    return (
        <section className="bg-[#F1F5EB] px-4 md:px-10 pb-10">
            <div className="max-w-[1440px] mx-auto overflow-hidden">
                <div className="relative w-full aspect-video md:aspect-[21/9] lg:aspect-[3/1]">
                    <Image
                        src="/funding-money.png"
                        alt="Funding Illustration"
                        fill
                        className="object-cover rounded-none"
                    />
                </div>
            </div>
        </section>
    );
};

export default FundingImageSection;
