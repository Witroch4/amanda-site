"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
    end: number;
    duration?: number;
    suffix?: string;
    prefix?: string;
    className?: string;
}

export function AnimatedCounter({
    end,
    duration = 2000,
    suffix = "",
    prefix = "",
    className = "",
}: AnimatedCounterProps) {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated) {
                        setHasAnimated(true);
                        animateValue(0, end, duration);
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [end, duration, hasAnimated]);

    const animateValue = (start: number, end: number, duration: number) => {
        const startTimestamp = performance.now();

        const step = (timestamp: number) => {
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            // Easing function - easeOutExpo
            const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            const currentValue = Math.floor(easeProgress * (end - start) + start);

            setCount(currentValue);

            if (progress < 1) {
                requestAnimationFrame(step);
            }
        };

        requestAnimationFrame(step);
    };

    return (
        <span ref={ref} className={className}>
            {prefix}{count}{suffix}
        </span>
    );
}
