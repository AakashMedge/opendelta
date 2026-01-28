"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menuItems = [
    { name: 'HOME', href: '/home' },
    { name: 'THINKSPACE', href: '/thinkspace' },
    { name: 'OPEN THOUGHT PRJ', href: '/open-thought-prj' },
    { name: 'FUNDING ACCESS', href: '/funding-access' },
    { name: 'MATCHLAB', href: '/matchlab' },
    { name: 'KNOWLEDGE', href: '/knowledge' },
    { name: 'BLOG', href: '/blog' },
];

import Logo from "@/components/common/Logo";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled
            ? 'py-4 bg-[#F5F5F5] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)]'
            : 'py-8 bg-[#F5F5F5]'
            }`}>
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex justify-between items-center">
                {/* Logo */}
                <Link href="/">
                    <Logo />
                </Link>

                {/* Desktop Menu - Premium Minimalist */}
                <div className="hidden lg:flex items-center gap-4">
                    {menuItems.map((item, idx) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`px-5 py-2.5 text-[11px] font-black tracking-[0.2em] transition-all duration-300 rounded-full border ${pathname === item.href
                                ? 'bg-black text-white border-transparent'
                                : idx === menuItems.length - 1
                                    ? 'bg-black/5 text-black border-black/10 hover:bg-black/10'
                                    : 'text-[#555] hover:bg-black/5 hover:border-black/5 border-transparent'
                                }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile/Tablet Toggle */}
                <div
                    className="lg:hidden flex items-center gap-3 cursor-pointer group"
                    onClick={() => setIsOpen(true)}
                >
                    <span className="text-[10px] font-black tracking-[0.3em] text-[#111]">MENU</span>
                    <div className="flex flex-col gap-1.5 overflow-hidden">
                        <div className="w-6 h-[2.5px] bg-black transition-transform group-hover:translate-x-1"></div>
                        <div className="w-6 h-[2.5px] bg-black"></div>
                        <div className="w-6 h-[2.5px] bg-black transition-transform group-hover:translate-x-[-4px]"></div>
                    </div>
                </div>
            </div>

            {/* Mobile/Tablet Fullscreen Overlay */}
            <div
                className={`fixed inset-0 z-[110] bg-[#111] transition-all duration-700 ease-[cubic-bezier(0.2,1,0.3,1)] ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
            >
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 text-[30vw] font-black text-white/[0.03] select-none pointer-events-none uppercase leading-none tracking-tighter">
                    DELTA
                </div>

                <div className="flex flex-col h-full p-8 md:p-12 relative z-10">
                    <div className="flex justify-between items-center">
                        <Logo isWhite />
                        <button
                            onClick={() => setIsOpen(false)}
                            className="bg-white/10 hover:bg-white/20 p-4 rounded-full transition-all group"
                        >
                            <svg className="w-6 h-6 text-white transition-transform group-hover:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Menu Links with Staggered Tapered Effect */}
                    <div className="flex-1 flex flex-col items-center justify-center gap-6">
                        {menuItems.map((item, idx) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className={`
                                    relative py-4 px-12 rounded-full font-black text-center transition-all duration-500 hover:scale-110 group/item
                                    ${pathname === item.href ? 'bg-white text-black scale-105' : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'}
                                    ${idx === 0 ? 'w-[180px] text-sm' : 'text-xs tracking-[0.3em]'}
                                    ${idx === 1 ? 'w-[240px]' : ''}
                                    ${idx === 2 ? 'w-[280px]' : ''}
                                    ${idx === 3 ? 'w-[300px]' : ''}
                                    ${idx === 4 ? 'w-[320px]' : ''}
                                    ${idx === 5 ? 'w-[280px]' : ''}
                                    ${idx === 6 ? 'w-[220px]' : ''}
                                `}
                            >
                                {item.name}
                                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-0 h-px bg-white/40 transition-all group-hover/item:w-1/2" />
                            </Link>
                        ))}
                    </div>

                    <div className="flex justify-between items-center text-white/40 text-[10px] font-black tracking-[0.2em] border-t border-white/5 pt-8">
                        <span>OPEN DELTA @2026</span>
                        <div className="flex gap-4">
                            <a
                                href="https://www.instagram.com/open_deltaco?igsh=b3Y2NXRhcjdudTY%3D&utm_source=qr"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white transition-colors cursor-pointer"
                            >
                                INS
                            </a>
                            <span className="hover:text-white transition-colors cursor-pointer">TWT</span>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;