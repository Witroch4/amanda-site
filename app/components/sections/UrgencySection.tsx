"use client";

import { Button } from "@/app/components/ui/Button";
import { AnimatedCounter } from "@/app/components/ui/AnimatedCounter";
import { getWhatsAppLink } from "@/app/lib/whatsapp";

interface UrgencySectionProps {
    theme: "oab" | "prev";
}

function ClockIcon() {
    return (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    );
}

function WhatsAppIcon() {
    return (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
    );
}

const urgencyContent = {
    oab: {
        title: "O relógio corre contra você.",
        subtitle: "Prazo de 120 Dias para o Mandado de Segurança",
        description: "O prazo de 120 dias para o Mandado de Segurança é fatal. Cada dia sem agir é uma chance a menos de conquistar sua estabilidade financeira. Não deixe seu esforço de anos ser jogado fora por um erro de correção da banca.",
        cta: "Quero Reverter Minha Reprovação",
        stats: [
            { value: 120, label: "dias de prazo", suffix: "" },
            { value: 15000, label: "casos analisados", suffix: "+" },
            { value: 24, label: "Atendimento", suffix: "h" },
        ],
    },
    prev: {
        title: "Não deixe seu direito prescrever.",
        subtitle: "Quanto antes agir, maiores as chances",
        description: "Benefícios negados podem ser revisados, mas o tempo é crucial. Cada mês que passa pode significar parcelas perdidas. Entre em contato agora para uma análise gratuita do seu caso.",
        cta: "Falar com a Dra. Amanda Agora",
        stats: [
            { value: 6, label: "anos de atuação", suffix: "+" },
            { value: 3000, label: "benefícios conquistados", suffix: "+" },
            { value: 15, label: "em valores conquistados", prefix: "R$", suffix: "mi+" },
            { value: 24, label: "Atendimento", suffix: "h" },
        ],
    },
};

export function UrgencySection({ theme }: UrgencySectionProps) {
    const content = urgencyContent[theme];
    const whatsappLink = getWhatsAppLink(theme);

    return (
        <section className="relative overflow-hidden">
            {/* Top Wave Transition */}
            <div className="absolute top-0 left-0 right-0 overflow-hidden">
                <svg
                    className="relative block w-full h-16 md:h-24"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        className={theme === "oab" ? "fill-royal-800" : "fill-nude-50"}
                    />
                </svg>
            </div>

            {/* Main Content */}
            <div className="relative bg-gradient-to-br from-red-800 via-red-700 to-red-900 pt-20 md:pt-28 pb-20 md:pb-28">
                {/* Background Pattern - Animated */}
                <div className="absolute inset-0 opacity-10">
                    <div
                        className="absolute inset-0 animate-pulse"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        }}
                    />
                </div>

                {/* Floating animated elements */}
                <div className="absolute top-1/4 left-10 w-20 h-20 rounded-full bg-white/10 blur-2xl animate-bounce" style={{ animationDuration: '3s' }} />
                <div className="absolute bottom-1/4 right-10 w-32 h-32 rounded-full bg-gold-400/20 blur-3xl animate-pulse" />
                <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-yellow-400/10 blur-xl animate-ping" style={{ animationDuration: '4s' }} />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto">
                        {/* Smoke/Aura Effect Behind Card */}
                        <div className="relative">
                            {/* Red Smoke Layer 1 - Main Glow */}
                            <div
                                className="absolute -inset-8 md:-inset-12 rounded-[3rem] opacity-60 animate-pulse"
                                style={{
                                    background: 'radial-gradient(ellipse at center, rgba(220, 38, 38, 0.6) 0%, rgba(185, 28, 28, 0.4) 30%, rgba(127, 29, 29, 0.2) 60%, transparent 80%)',
                                    filter: 'blur(40px)',
                                    animationDuration: '3s'
                                }}
                            />

                            {/* Red Smoke Layer 2 - Outer Ring */}
                            <div
                                className="absolute -inset-16 md:-inset-20 rounded-[4rem] opacity-40"
                                style={{
                                    background: 'radial-gradient(ellipse at center, rgba(239, 68, 68, 0.5) 0%, rgba(220, 38, 38, 0.3) 40%, transparent 70%)',
                                    filter: 'blur(60px)',
                                    animation: 'pulse 4s ease-in-out infinite alternate'
                                }}
                            />

                            {/* Red Smoke Layer 3 - Top Left Accent */}
                            <div
                                className="absolute -top-12 -left-12 w-48 h-48 md:w-64 md:h-64 rounded-full opacity-50"
                                style={{
                                    background: 'radial-gradient(circle, rgba(248, 113, 113, 0.6) 0%, rgba(239, 68, 68, 0.3) 50%, transparent 80%)',
                                    filter: 'blur(50px)',
                                    animation: 'float 6s ease-in-out infinite'
                                }}
                            />

                            {/* Red Smoke Layer 4 - Bottom Right Accent */}
                            <div
                                className="absolute -bottom-12 -right-12 w-56 h-56 md:w-72 md:h-72 rounded-full opacity-50"
                                style={{
                                    background: 'radial-gradient(circle, rgba(252, 165, 165, 0.5) 0%, rgba(248, 113, 113, 0.3) 50%, transparent 80%)',
                                    filter: 'blur(55px)',
                                    animation: 'float 7s ease-in-out infinite reverse'
                                }}
                            />

                            {/* Red Smoke Layer 5 - Center Intense Glow */}
                            <div
                                className="absolute inset-0 rounded-2xl opacity-70"
                                style={{
                                    background: 'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(185, 28, 28, 0.4) 0%, transparent 60%)',
                                    filter: 'blur(30px)',
                                    animation: 'breathe 5s ease-in-out infinite'
                                }}
                            />

                            {/* Alert Card with entrance animation */}
                            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20 shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
                                <div className="flex flex-col md:flex-row items-center gap-8">
                                    {/* Icon Side with multiple animations */}
                                    <div className="flex-shrink-0">
                                        <div className="relative">
                                            {/* Main icon container */}
                                            <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-white/20 flex items-center justify-center text-white relative z-10">
                                                <div className="animate-spin" style={{ animationDuration: '8s' }}>
                                                    <ClockIcon />
                                                </div>
                                            </div>
                                            {/* Pulsing rings */}
                                            <div className="absolute inset-0 rounded-full border-4 border-white/50 animate-ping" style={{ animationDuration: '2s' }} />
                                            <div className="absolute -inset-2 rounded-full border-2 border-white/30 animate-ping" style={{ animationDuration: '3s', animationDelay: '0.5s' }} />
                                            <div className="absolute -inset-4 rounded-full border border-white/20 animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }} />
                                        </div>
                                    </div>

                                    {/* Content Side */}
                                    <div className="flex-1 text-center md:text-left">
                                        {/* Badge with shimmer effect */}
                                        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 text-black text-sm font-bold px-4 py-1.5 rounded-full mb-4 relative overflow-hidden">
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                                            <svg className="w-4 h-4 animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                            </svg>
                                            <span className="relative z-10">{content.subtitle}</span>
                                        </div>

                                        <h2
                                            className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4"
                                            style={{ fontFamily: "var(--font-playfair)" }}
                                        >
                                            {content.title}
                                        </h2>

                                        <p className="text-white/90 text-base md:text-lg leading-relaxed mb-6">
                                            {content.description}
                                        </p>

                                        <Button
                                            href={whatsappLink}
                                            external
                                            variant="gold"
                                            size="lg"
                                            icon={<WhatsAppIcon />}
                                            className="hover:animate-pulse"
                                        >
                                            {content.cta}
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            {/* Animated Stats */}
                            <div className={`mt-10 grid gap-4 max-w-3xl mx-auto ${content.stats.length > 3 ? 'grid-cols-2 md:grid-cols-4' : 'grid-cols-3'}`}>
                                {content.stats.map((stat, index) => (
                                    <div
                                        key={index}
                                        className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 group"
                                    >
                                        <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-white group-hover:text-gold-400 transition-colors">
                                            <AnimatedCounter
                                                end={stat.value}
                                                suffix={stat.suffix}
                                                prefix={'prefix' in stat ? (stat as { prefix: string }).prefix : ''}
                                                duration={2500}
                                            />
                                        </p>
                                        <p className="text-white/60 text-xs md:text-sm mt-1">{stat.label}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Urgency countdown feel */}
                            <div className="mt-8 flex justify-center">
                                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-red-900/50 border border-red-400/30">
                                    <span className="w-3 h-3 rounded-full bg-red-400 animate-pulse" />
                                    <span className="text-white/80 text-sm font-medium">
                                        Cada dia conta. Não espere mais.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Wave Transition */}
            <div className="absolute bottom-0 left-0 right-0 overflow-hidden rotate-180">
                <svg
                    className="relative block w-full h-16 md:h-24"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        className={theme === "oab" ? "fill-royal-800" : "fill-white"}
                    />
                </svg>
            </div>
        </section>
    );
}
