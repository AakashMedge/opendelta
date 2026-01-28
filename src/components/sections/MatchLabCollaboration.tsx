"use client";

import React, { useState, useEffect } from 'react';

const MatchLabCollaboration = () => {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        // Simulate a premium delay for the "processing" feel
        setTimeout(() => {
            setStatus('success');
            // Clear form immediately so it's ready when we revert
            setFormData({ name: '', email: '', message: '' });
        }, 800);
    };

    useEffect(() => {
        if (status === 'success') {
            const timer = setTimeout(() => {
                setStatus('idle');
            }, 3000); // Revert back after 3 seconds
            return () => clearTimeout(timer);
        }
    }, [status]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <section id="collaborate" className="bg-[#F3F3F3] pt-12 pb-12 overflow-hidden border-t border-black/5">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                <div className="mb-32">
                    <h2 className="text-[32px] md:text-[42px] font-medium text-[#1A1A1A] mb-4 uppercase">
                        LET&apos;S COLLABORATE
                    </h2>
                    <p className="text-[14px] md:text-[16px] text-[#666] mb-12">
                        Fill up the form and our team will get back to you..
                    </p>

                    <div className="min-h-[450px] relative">
                        {/* Status Overlay for Submit/Success */}
                        {status !== 'idle' && (
                            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#F3F3F3]/80 backdrop-blur-sm animate-in fade-in duration-500">
                                {status === 'submitting' ? (
                                    <div className="w-12 h-12 border-2 border-black/10 border-t-black rounded-full animate-spin"></div>
                                ) : (
                                    <div className="flex flex-col items-center animate-in zoom-in duration-500">
                                        <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center mb-6 shadow-2xl scale-110">
                                            <svg viewBox="0 0 24 24" className="w-12 h-12 text-white fill-none stroke-current" strokeWidth="3">
                                                <path d="M20 6L9 17L4 12" strokeLinecap="round" strokeLinejoin="round" className="animate-[check_0.5s_ease-in-out_forwards]" />
                                            </svg>
                                        </div>
                                        <span className="text-[10px] font-black tracking-[0.4em] text-black">RECEIVED</span>
                                    </div>
                                )}
                            </div>
                        )}

                        <form
                            onSubmit={handleSubmit}
                            className={`space-y-6 w-full lg:max-w-6xl transition-all duration-700 ${status !== 'idle' ? 'opacity-20 blur-sm scale-[0.98]' : 'opacity-100'}`}
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <FormInput
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    required
                                    value={formData.name}
                                    onChange={handleInputChange}
                                />
                                <FormInput
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    required
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="relative">
                                <textarea
                                    name="message"
                                    required
                                    placeholder="How can you contribute?"
                                    rows={8}
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    className="w-full bg-white border border-black/5 px-6 py-5 text-[14px] outline-none focus:border-black/40 focus:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] transition-all rounded-sm resize-none placeholder:text-[#BBB]"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={status !== 'idle'}
                                className="w-full bg-[#1A1A1A] text-white py-6 text-[11px] font-black tracking-[0.4em] hover:bg-black transition-all uppercase shadow-lg hover:shadow-xl active:scale-[0.99] disabled:opacity-50"
                            >
                                SEND MESSAGE
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

const FormInput = ({ ...props }: React.InputHTMLAttributes<HTMLInputElement>) => (
    <div className="relative">
        <input
            {...props}
            className="w-full bg-white border border-black/5 px-6 py-5 text-[14px] outline-none focus:border-black/40 focus:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] transition-all rounded-sm placeholder:text-[#BBB]"
        />
    </div>
);

export default MatchLabCollaboration;
