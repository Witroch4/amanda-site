"use client";

import Image from "next/image";
import { AnimatedCounter } from "@/app/components/ui/AnimatedCounter";

interface InstagramSectionProps {
    theme?: "oab" | "prev";
}

function InstagramIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
    );
}

function VerifiedBadge() {
    return (
        <svg className="w-5 h-5 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
    );
}

function SendMessageIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
    );
}

export function InstagramSection({ theme = "oab" }: InstagramSectionProps) {
    const bgClass = theme === "oab"
        ? "bg-gradient-to-br from-royal-900 via-royal-800 to-royal-900"
        : "bg-gradient-to-br from-nude-100 via-nude-50 to-nude-100";

    const cardBgClass = theme === "oab"
        ? "bg-white/10 backdrop-blur-sm border-white/20"
        : "bg-white border-gray-200 shadow-lg";

    const textClass = theme === "oab" ? "text-white" : "text-gray-800";
    const mutedTextClass = theme === "oab" ? "text-white/70" : "text-gray-600";

    return (
        <section className={`py-16 md:py-24 ${bgClass} relative overflow-hidden`}>
            {/* Background decorations */}
            <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-pink-500/20 to-purple-500/20 blur-3xl animate-pulse" />
            <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-gradient-to-br from-yellow-500/20 to-orange-500/20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center">
                                <InstagramIcon className="w-7 h-7 text-white" />
                            </div>
                            <h2
                                className={`text-2xl md:text-3xl lg:text-4xl font-bold ${textClass}`}
                                style={{ fontFamily: "var(--font-playfair)" }}
                            >
                                Siga no <span className="text-gradient-gold">Instagram</span>
                            </h2>
                        </div>
                        <p className={`text-lg ${mutedTextClass}`}>
                            Conteúdo gratuito sobre direitos e dicas jurídicas todos os dias
                        </p>
                    </div>

                    {/* Instagram Profile Card */}
                    <div className={`rounded-2xl border p-6 md:p-8 ${cardBgClass}`}>
                        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                            {/* Profile Image */}
                            <div className="relative group">
                                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-gold-400 relative">
                                    <Image
                                        src="/perfilinstagram-foto.png"
                                        alt="Dra. Amanda Sousa"
                                        fill
                                        className="object-cover"
                                        sizes="128px"
                                    />
                                </div>
                                {/* Instagram gradient ring on hover */}
                                <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity -z-10 blur-sm" />
                            </div>

                            {/* Profile Info */}
                            <div className="flex-1 text-center md:text-left">
                                <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                                    <h3 className={`text-xl md:text-2xl font-bold ${textClass}`}>
                                        @dra.amandasousadv
                                    </h3>
                                    <VerifiedBadge />
                                </div>

                                {/* Stats with animated counters */}
                                <div className="flex items-center justify-center md:justify-start gap-6 mb-4">
                                    <div className="text-center">
                                        <p className={`text-xl md:text-2xl font-bold ${textClass}`}>
                                            <AnimatedCounter end={144} duration={2000} />
                                        </p>
                                        <p className={`text-sm ${mutedTextClass}`}>posts</p>
                                    </div>
                                    <div className="text-center">
                                        <p className={`text-xl md:text-2xl font-bold text-gold-400`}>
                                            <AnimatedCounter end={34} suffix=",2 mil" duration={2000} />
                                        </p>
                                        <p className={`text-sm ${mutedTextClass}`}>seguidores</p>
                                    </div>
                                    <div className="text-center">
                                        <p className={`text-xl md:text-2xl font-bold ${textClass}`}>
                                            <AnimatedCounter end={570} duration={2000} />
                                        </p>
                                        <p className={`text-sm ${mutedTextClass}`}>seguindo</p>
                                    </div>
                                </div>

                                {/* Bio */}
                                <div className={`text-sm ${mutedTextClass} space-y-1 mb-4`}>
                                    <p>📚 Especialista: Recursos OAB e Concursos</p>
                                    <p>👉 Atuação em todo o 🇧🇷</p>
                                    <p>🚀 Mentora @metodofenixoab</p>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 mt-6">
                            <a
                                href="https://www.instagram.com/dra.amandasousadv/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white font-semibold hover:opacity-90 transition-all hover:scale-105"
                            >
                                <InstagramIcon className="w-5 h-5" />
                                Seguir no Instagram
                            </a>
                            <a
                                href="https://www.instagram.com/direct/t/17850680894583246"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/10 border-2 border-gold-400 text-gold-400 font-semibold hover:bg-gold-400 hover:text-black transition-all hover:scale-105"
                            >
                                <SendMessageIcon className="w-5 h-5" />
                                Enviar Mensagem
                            </a>
                        </div>
                    </div>

                    {/* Highlights */}
                    <div className="mt-8 grid grid-cols-4 gap-4 max-w-lg mx-auto">
                        {[
                            { icon: "🏆", label: "Aprovados" },
                            { icon: "⚖️", label: "Prática" },
                            { icon: "❓", label: "Dúvidas" },
                            { icon: "✈️", label: "Viagens" },
                        ].map((highlight, index) => (
                            <a
                                key={index}
                                href="https://www.instagram.com/dra.amandasousadv/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col items-center gap-2 group"
                            >
                                <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center text-2xl ${theme === "oab" ? "bg-white/10 border-2 border-white/20" : "bg-gray-100 border-2 border-gray-200"
                                    } group-hover:border-gold-400 group-hover:scale-110 transition-all`}>
                                    {highlight.icon}
                                </div>
                                <span className={`text-xs ${mutedTextClass} group-hover:text-gold-400 transition-colors`}>
                                    {highlight.label}
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
