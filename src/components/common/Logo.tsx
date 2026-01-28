"use client";

import React from 'react';
import Image from 'next/image';

const Logo = ({ isWhite = false, className = "" }: { isWhite?: boolean, className?: string }) => (
    <div className={`group cursor-pointer ${className}`}>
        <Image
            src="/logo.png"
            alt="Open Delta Logo"
            width={180}
            height={72}
            className={`object-contain transition-transform duration-500 group-hover:scale-105 ${isWhite ? 'brightness-0 invert' : 'mix-blend-multiply brightness-[1.05] contrast-[1.1]'}`}
            priority
        />
    </div>
);

export default Logo;
