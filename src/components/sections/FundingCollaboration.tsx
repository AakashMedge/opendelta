"use client";

import React from 'react';

const FundingCollaboration = () => {
    return (
        <section id="collaborate" className="bg-[#F3F3F3] pt-24 pb-12 overflow-hidden border-t border-black/5">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                {/* Form Section */}
                <div className="mb-32">
                    <h2 className="text-[32px] md:text-[42px] font-medium text-[#1A1A1A] mb-4 uppercase tracking-tight">
                        LET&apos;S COLLABORATE
                    </h2>
                    <p className="text-[14px] md:text-[16px] text-[#666] mb-12">
                        Fill up the form and our team will get back to you..
                    </p>

                    <form className="space-y-6 w-full lg:max-w-6xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full bg-white border border-black/5 px-6 py-5 text-[14px] outline-none focus:border-black/20 transition-all rounded-sm placeholder:text-[#AAA]"
                                />
                            </div>
                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full bg-white border border-black/5 px-6 py-5 text-[14px] outline-none focus:border-black/20 transition-all rounded-sm placeholder:text-[#AAA]"
                                />
                            </div>
                        </div>
                        <div className="relative">
                            <textarea
                                placeholder="How can you contribute?"
                                rows={8}
                                className="w-full bg-white border border-black/5 px-6 py-5 text-[14px] outline-none focus:border-black/20 transition-all rounded-sm resize-none placeholder:text-[#AAA]"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-[#1A1A1A] text-white py-5 text-[12px] font-black tracking-[0.3em] hover:bg-black transition-all uppercase"
                        >
                            SEND
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default FundingCollaboration;
