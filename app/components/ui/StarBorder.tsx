"use client";

import React from 'react';

interface StarBorderProps {
    className?: string;
    children?: React.ReactNode;
    color?: string;
    speed?: string;
    thickness?: number;
}

export default function StarBorder({
    className = '',
    color = 'rgba(212, 175, 55, 0.8)',
    speed = '5s',
    thickness = 5,
    children,
}: StarBorderProps) {
    return (
        <div
            className={`relative block overflow-hidden rounded-[20px] ${className}`}
            style={{ padding: `${thickness}px` }}
        >
            <div
                className="absolute w-[300%] h-[50%] bottom-[-11px] right-[-250%] rounded-full animate-star-movement-bottom"
                style={{
                    background: `radial-gradient(circle, ${color}, transparent 20%)`,
                    opacity: 1,
                    animationDuration: speed,
                    zIndex: 0,
                }}
            />
            <div
                className="absolute w-[300%] h-[50%] top-[-10px] left-[-250%] rounded-full animate-star-movement-top"
                style={{
                    background: `radial-gradient(circle, ${color}, transparent 20%)`,
                    opacity: 1,
                    animationDuration: speed,
                    zIndex: 0,
                }}
            />
            <div
                className="relative text-white rounded-[17px] h-full"
                style={{
                    backgroundColor: 'var(--royal-800)',
                    zIndex: 1,
                }}
            >
                {children}
            </div>
        </div>
    );
}
