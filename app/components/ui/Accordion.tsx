"use client";

import { useState, ReactNode } from "react";

interface AccordionItemProps {
    title: string;
    children: ReactNode;
    defaultOpen?: boolean;
}

interface AccordionProps {
    items: Array<{
        title: string;
        content: string;
    }>;
    className?: string;
}

function ChevronIcon({ isOpen }: { isOpen: boolean }) {
    return (
        <svg
            className={`w-5 h-5 text-gold-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
    );
}

export function AccordionItem({
    title,
    children,
    defaultOpen = false,
}: AccordionItemProps) {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className="border-b border-white/10 last:border-b-0">
            <button
                className="w-full flex items-center justify-between py-4 px-2 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-lg"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                <span
                    className="font-semibold text-base pr-4"
                    style={{ fontFamily: "var(--font-playfair)" }}
                >
                    {title}
                </span>
                <ChevronIcon isOpen={isOpen} />
            </button>

            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="pb-4 px-2 text-sm opacity-80 leading-relaxed">
                    {children}
                </div>
            </div>
        </div>
    );
}

export function Accordion({ items, className = "" }: AccordionProps) {
    return (
        <div className={`divide-y divide-white/10 ${className}`}>
            {items.map((item, index) => (
                <AccordionItem key={index} title={item.title}>
                    {item.content}
                </AccordionItem>
            ))}
        </div>
    );
}
