"use client";

import React from 'react';
import Image from 'next/image';

const Logo = ({ isWhite = false, className = "" }: { isWhite?: boolean, className?: string }) => (
    <div className={`group cursor-pointer flex items-center ${className}`}>
        <Image
            src="/logo_old.png"
            alt="Open Delta Logo"
            width={180}
            height={60}
            className={`w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105 ${isWhite
                ? 'brightness-0 invert' // Make logo white for dark backgrounds
                : ''
                }`}
            priority
        />
    </div>
);

export default Logo;

