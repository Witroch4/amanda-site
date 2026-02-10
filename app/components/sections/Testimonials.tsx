'use client';

import Image from "next/image";
import { Card } from "@/app/components/ui/Card";
import { BlurText } from "@/app/components/ui/BlurText";

interface TestimonialItem {
    name: string;
    role?: string;
    content: string;
    imageSrc?: string;
}

interface TestimonialsSectionProps {
    theme: "oab" | "prev";
    title?: string;
    subtitle?: string;
    items: TestimonialItem[];
}

function QuoteIcon() {
    return (
        <svg className="w-8 h-8 text-gold-400 opacity-50" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
    );
}

function StarIcon() {
    return (
        <svg className="w-4 h-4 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
    );
}

export function TestimonialsSection({
    theme,
    title = "Histórias de Sucesso",
    subtitle = "Veja o que nossos clientes dizem",
    items,
}: TestimonialsSectionProps) {
    const bgClass = theme === "oab"
        ? "bg-royal-800"
        : "bg-nude-50";

    const textClass = theme === "oab"
        ? "text-white"
        : "text-gray-800";

    const mutedTextClass = theme === "oab"
        ? "text-white/70"
        : "text-gray-600";

    return (
        <section className={`py-16 md:py-24 ${bgClass}`}>
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2
                        className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-4 ${textClass}`}
                        style={{ fontFamily: "var(--font-playfair)" }}
                    >
                        {title.split(" ")[0]}{" "}
                        <span className="text-gold-400">
                            {title.split(" ").slice(1).join(" ")}
                        </span>
                    </h2>
                    <p className={`text-base md:text-lg max-w-2xl mx-auto ${mutedTextClass}`}>
                        {subtitle}
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {items.map((item, index) => (
                        <Card
                            key={index}
                            variant="gold-border"
                            className={`${theme === "prev" ? "bg-white" : ""}`}
                        >
                            {/* With image (for /prev with real photos) */}
                            {item.imageSrc ? (
                                <div className="flex gap-4">
                                    <div className="relative w-20 h-20 flex-shrink-0 rounded-full overflow-hidden border-2 border-gold-400">
                                        <Image
                                            src={item.imageSrc}
                                            alt={item.name}
                                            fill
                                            className="object-cover"
                                            sizes="80px"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex gap-0.5 mb-2">
                                            {[...Array(5)].map((_, i) => (
                                                <StarIcon key={i} />
                                            ))}
                                        </div>
                                        <BlurText
                                            text={`"${item.content}"`}
                                            className={`text-sm leading-relaxed mb-3 ${mutedTextClass}`}
                                            animateBy="words"
                                            direction="bottom"
                                            delay={50}
                                            stepDuration={0.3}
                                        />
                                        <p className={`font-semibold text-sm ${textClass}`}>
                                            {item.name}
                                        </p>
                                        {item.role && (
                                            <p className={`text-xs ${mutedTextClass}`}>{item.role}</p>
                                        )}
                                    </div>
                                </div>
                            ) : (
                                /* Without image (for /oab with text cards) */
                                <div className={textClass}>
                                    <QuoteIcon />
                                    <BlurText
                                        text={`"${item.content}"`}
                                        className={`text-sm leading-relaxed my-4 ${mutedTextClass}`}
                                        animateBy="words"
                                        direction="bottom"
                                        delay={50}
                                        stepDuration={0.3}
                                    />
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-gold-400 flex items-center justify-center text-black font-bold">
                                            {item.name.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="font-semibold text-sm">{item.name}</p>
                                            {item.role && (
                                                <p className={`text-xs ${mutedTextClass}`}>{item.role}</p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex gap-0.5 mt-3">
                                        {[...Array(5)].map((_, i) => (
                                            <StarIcon key={i} />
                                        ))}
                                    </div>
                                </div>
                            )}
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
