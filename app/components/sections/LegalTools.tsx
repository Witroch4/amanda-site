"use client";

import { useState, useEffect } from "react";
import { MagicBentoGrid, MagicBentoCard } from "@/app/components/ui/MagicBento";
import StarBorder from "@/app/components/ui/StarBorder";

interface LegalTool {
    name: string;
    when: string;
    differential: string;
    icon: "shield" | "document" | "clock";
}

const defaultTools: LegalTool[] = [
    {
        name: "Mandado de Segurança",
        when: "Até 120 dias após o ato ilegal da banca",
        differential: "Ação rápida (rito célere) para garantir a posse ou a próxima fase imediatamente",
        icon: "shield",
    },
    {
        name: "Ação Ordinária",
        when: "Quando o prazo de 120 dias expirou",
        differential: "Ideal para casos complexos que precisam de produção de provas detalhadas",
        icon: "document",
    },
    {
        name: "Recurso Administrativo",
        when: "Imediatamente após a publicação do resultado",
        differential: "Elaboração técnica com foco na jurisprudência atualizada dos tribunais superiores",
        icon: "clock",
    },
];

const iconComponents = {
    shield: () => (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
    ),
    document: () => (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
    ),
    clock: () => (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    ),
};

function ToolCardContent({ tool }: { tool: LegalTool }) {
    const IconComponent = iconComponents[tool.icon];
    return (
        <div className="flex flex-col items-center text-center p-6">
            <div className="w-16 h-16 rounded-full bg-gold-400 flex items-center justify-center text-royal-900 mb-4">
                <IconComponent />
            </div>
            <h3
                className="text-xl font-bold text-gold-400 mb-3"
                style={{ fontFamily: "var(--font-playfair)" }}
            >
                {tool.name}
            </h3>
            <div className="space-y-3 text-left w-full">
                <div className="bg-royal-900/50 rounded-lg p-3">
                    <p className="text-xs text-gold-400 font-semibold uppercase tracking-wide mb-1">
                        Quando Usar
                    </p>
                    <p className="text-sm text-white/80">{tool.when}</p>
                </div>
                <div className="bg-royal-900/50 rounded-lg p-3">
                    <p className="text-xs text-gold-400 font-semibold uppercase tracking-wide mb-1">
                        Diferencial
                    </p>
                    <p className="text-sm text-white/80">{tool.differential}</p>
                </div>
            </div>
        </div>
    );
}

export function LegalToolsSection() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    return (
        <section className="py-16 md:py-24 bg-royal-900">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2
                        className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white"
                        style={{ fontFamily: "var(--font-playfair)" }}
                    >
                        Suas <span className="text-gold-400">Armas Jurídicas</span>
                    </h2>
                    <p className="text-base md:text-lg max-w-2xl mx-auto text-white/70">
                        Conheça as estratégias que a Dra. Amanda utiliza para reverter injustiças
                    </p>
                </div>

                {/* Desktop: MagicBento */}
                {!isMobile && (
                    <MagicBentoGrid
                        enableSpotlight
                        enableBorderGlow
                        enableStars
                        enableTilt={false}
                        enableMagnetism={false}
                        clickEffect
                        spotlightRadius={400}
                        particleCount={12}
                        glowColor="212, 175, 55"
                        disableAnimations={false}
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                            {defaultTools.map((tool, index) => (
                                <MagicBentoCard
                                    key={index}
                                    enableStars
                                    enableBorderGlow
                                    enableTilt={false}
                                    clickEffect
                                    enableMagnetism={false}
                                    particleCount={12}
                                    glowColor="212, 175, 55"
                                >
                                    <ToolCardContent tool={tool} />
                                </MagicBentoCard>
                            ))}
                        </div>
                    </MagicBentoGrid>
                )}

                {/* Mobile: StarBorder */}
                {isMobile && (
                    <div className="grid grid-cols-1 gap-6 max-w-6xl mx-auto">
                        {defaultTools.map((tool, index) => (
                            <StarBorder
                                key={index}
                                className="w-full"
                                color="rgba(212, 175, 55, 0.8)"
                                speed="5s"
                                thickness={5}
                            >
                                <ToolCardContent tool={tool} />
                            </StarBorder>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
