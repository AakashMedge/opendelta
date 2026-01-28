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

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    return (
        <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled
            ? 'py-2 md:py-3 bg-[#F5F5F5] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)]'
            : 'py-3 md:py-4 bg-[#F5F5F5]'
            }`}>
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex justify-between items-center">
                {/* Logo - with consistent sizing */}
                <Link href="/" className="shrink-0">
                    <Logo className="w-[90px] sm:w-[100px] md:w-[110px] lg:w-[120px]" />
                </Link>

                {/* Desktop Menu - Fixed font sizes for consistency */}
                <div className="hidden lg:flex items-center gap-1 xl:gap-2">
                    {menuItems.map((item, idx) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`whitespace-nowrap px-3 xl:px-4 py-2 text-[10px] xl:text-[11px] font-semibold tracking-wide transition-all duration-300 rounded-full border ${pathname === item.href
                                ? 'bg-black text-white border-transparent'
                                : idx === menuItems.length - 1
                                    ? 'bg-black/5 text-black border-black/10 hover:bg-black/10'
                                    : 'text-[#444] hover:bg-black/5 hover:border-black/5 border-transparent'
                                }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile/Tablet Toggle */}
                <button
                    className="lg:hidden flex items-center gap-2 sm:gap-3 cursor-pointer group p-2"
                    onClick={() => setIsOpen(true)}
                    aria-label="Open menu"
                >
                    <span className="text-[10px] sm:text-[11px] font-semibold tracking-tight text-[#111]">MENU</span>
                    <div className="flex flex-col gap-1 sm:gap-1.5">
                        <div className="w-5 sm:w-6 h-[2px] bg-black transition-transform group-hover:translate-x-1"></div>
                        <div className="w-5 sm:w-6 h-[2px] bg-black"></div>
                        <div className="w-5 sm:w-6 h-[2px] bg-black transition-transform group-hover:translate-x-[-4px]"></div>
                    </div>
                </button>
            </div>

            {/* Mobile/Tablet Fullscreen Overlay */}
            <div
                className={`fixed inset-0 z-[110] bg-[#111] transition-all duration-700 ease-[cubic-bezier(0.2,1,0.3,1)] ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
            >
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 text-[25vw] sm:text-[30vw] font-medium text-white/[0.03] select-none pointer-events-none uppercase leading-none tracking-tighter">
                    DELTA
                </div>

                <div className="flex flex-col h-full p-6 sm:p-8 md:p-12 relative z-10">
                    <div className="flex justify-between items-center">
                        <Logo isWhite className="w-[90px] sm:w-[100px] md:w-[110px]" />
                        <button
                            onClick={() => setIsOpen(false)}
                            className="bg-white/10 hover:bg-white/20 p-3 sm:p-4 rounded-full transition-all group"
                            aria-label="Close menu"
                        >
                            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white transition-transform group-hover:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Menu Links - Responsive widths */}
                    <div className="flex-1 flex flex-col items-center justify-center gap-3 sm:gap-4 md:gap-5 py-8">
                        {menuItems.map((item, idx) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className={`
                                    relative py-3 sm:py-4 px-8 sm:px-12 rounded-full font-medium text-center transition-all duration-500 hover:scale-105 group/item
                                    ${pathname === item.href ? 'bg-white text-black scale-105' : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'}
                                    text-[11px] sm:text-xs tracking-tight
                                    ${idx === 0 ? 'w-[160px] sm:w-[180px]' : ''}
                                    ${idx === 1 ? 'w-[180px] sm:w-[220px] md:w-[240px]' : ''}
                                    ${idx === 2 ? 'w-[200px] sm:w-[250px] md:w-[280px]' : ''}
                                    ${idx === 3 ? 'w-[220px] sm:w-[270px] md:w-[300px]' : ''}
                                    ${idx === 4 ? 'w-[200px] sm:w-[280px] md:w-[320px]' : ''}
                                    ${idx === 5 ? 'w-[180px] sm:w-[250px] md:w-[280px]' : ''}
                                    ${idx === 6 ? 'w-[160px] sm:w-[200px] md:w-[220px]' : ''}
                                `}
                            >
                                {item.name}
                                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-0 h-px bg-white/40 transition-all group-hover/item:w-1/2" />
                            </Link>
                        ))}
                    </div>

                    <div className="flex justify-between items-center text-white/40 text-[9px] sm:text-[10px] font-medium tracking-[0.15em] sm:tracking-[0.2em] border-t border-white/5 pt-6 sm:pt-8">
                        <span>OPEN DELTA @2026</span>
                        <div className="flex gap-3 sm:gap-4">
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