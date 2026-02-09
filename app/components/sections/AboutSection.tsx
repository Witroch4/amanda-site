import Image from "next/image";

interface AboutSectionProps {
    theme: "oab" | "prev";
}

export function AboutSection({ theme }: AboutSectionProps) {
    const bgClass = theme === "oab"
        ? "bg-royal-800"
        : "bg-white";

    const textClass = theme === "oab"
        ? "text-white"
        : "text-gray-800";

    const mutedTextClass = theme === "oab"
        ? "text-white/70"
        : "text-gray-600";

    return (
        <section className={`py-16 md:py-24 ${bgClass}`}>
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
                    {/* Image with floating badges */}
                    <div className="flex-1 w-full max-w-md">
                        <div className="relative">
                            {/* Main Photo */}
                            <div className="relative aspect-square rounded-2xl overflow-hidden border-4 border-gold-400 shadow-gold">
                                <Image
                                    src="/DRA-AMANDA-ROSTO-de-frente.png"
                                    alt="Dra. Amanda Sousa"
                                    fill
                                    className="object-cover object-top"
                                    sizes="(max-width: 768px) 100vw, 400px"
                                />
                            </div>

                            {/* Floating Badge - Top Right: +500 Processos */}
                            <div className={`absolute -top-3 -right-3 md:-right-6 z-10 ${theme === "oab"
                                    ? "bg-royal-900/95 border-gold-400/30"
                                    : "bg-white/95 border-royal-800/20"
                                } backdrop-blur-sm rounded-xl px-4 py-3 shadow-xl border`}>
                                <p className={`text-2xl md:text-3xl font-bold ${theme === "oab" ? "text-gold-400" : "text-royal-800"
                                    }`}>+500</p>
                                <p className={`text-xs ${theme === "oab" ? "text-white/70" : "text-gray-600"
                                    }`}>Processos</p>
                            </div>

                            {/* Floating Badge - Bottom Left: +6 Anos */}
                            <div className={`absolute -bottom-3 -left-3 md:-left-6 z-10 ${theme === "oab"
                                    ? "bg-gold-400"
                                    : "bg-gold-400"
                                } rounded-xl px-4 py-3 shadow-xl`}>
                                <p className="text-2xl md:text-3xl font-bold text-royal-900">+6</p>
                                <p className="text-xs text-royal-800 font-medium">Anos de experiência</p>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <h2
                            className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-6 ${textClass}`}
                            style={{ fontFamily: "var(--font-playfair)" }}
                        >
                            Conheça a <span className="text-gold-400">Dra. Amanda Sousa</span>
                        </h2>

                        <div className={`space-y-4 text-base md:text-lg leading-relaxed ${mutedTextClass}`}>
                            <p>
                                Advogada especialista em <strong className={textClass}>Direito Previdenciário</strong> e{" "}
                                <strong className={textClass}>Direito de Concursos</strong>, com atuação focada na
                                defesa dos direitos de quem foi injustiçado.
                            </p>
                            <p>
                                Com escritório em <strong className={textClass}>Fortaleza/CE</strong> e atendimento
                                100% online em todo o Brasil, a Dra. Amanda já ajudou centenas de clientes a
                                conquistarem seus benefícios e reverterem reprovações injustas.
                            </p>
                            <p>
                                Sua metodologia combina conhecimento técnico profundo com uma abordagem
                                humanizada, entendendo que por trás de cada processo existe uma história de vida.
                            </p>
                        </div>

                        {/* Credentials */}
                        <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
                            <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${theme === "oab" ? "bg-royal-900" : "bg-nude-100"
                                }`}>
                                <svg className="w-5 h-5 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className={`text-sm font-medium ${textClass}`}>OAB/CE</span>
                            </div>
                            <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${theme === "oab" ? "bg-royal-900" : "bg-nude-100"
                                }`}>
                                <svg className="w-5 h-5 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className={`text-sm font-medium ${textClass}`}>Pós-graduada</span>
                            </div>
                            <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${theme === "oab" ? "bg-royal-900" : "bg-nude-100"
                                }`}>
                                <svg className="w-5 h-5 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className={`text-sm font-medium ${textClass}`}>+5 anos de atuação</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
