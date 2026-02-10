"use client";

import Image from "next/image";
import { AnimatedContent } from "@/app/components/ui/AnimatedContent";

interface Step {
    title: string;
    description: string;
}

interface HowItWorksProps {
    theme?: "oab" | "prev";
}

const stepsOAB: Step[] = [
    {
        title: "Atendimento",
        description: "Nessa primeira etapa, ouvimos você com atenção. Fazemos uma entrevista completa para entender sua história, identificar seus direitos e definir juntos o melhor caminho.",
    },
    {
        title: "Análise do Caso",
        description: "Com as informações e documentos em mãos, nossa equipe inicia uma análise detalhada. Verificamos a viabilidade jurídica e traçamos a melhor estratégia para o seu processo.",
    },
    {
        title: "Estratégia Jurídica",
        description: "Definimos qual instrumento jurídico é o mais adequado: Mandado de Segurança, Recurso Administrativo ou Ação Ordinária. Tudo pensado para maximizar suas chances.",
    },
    {
        title: "Acompanhamento",
        description: "Protocolamos o processo e acompanhamos cada fase de perto, garantindo que tudo seja conduzido com excelência até a conquista do seu direito.",
    },
];

const stepsPrev: Step[] = [
    {
        title: "Atendimento",
        description: "Nessa primeira etapa, ouvimos você com atenção. Fazemos uma entrevista completa para entender sua história, identificar seus direitos e definir juntos o melhor caminho.",
    },
    {
        title: "Análise do Caso",
        description: "Com as informações e documentos em mãos, nossa equipe inicia uma análise detalhada. Verificamos a viabilidade jurídica e traçamos a melhor estratégia para o seu processo.",
    },
    {
        title: "Orientação",
        description: "Se for necessário reunir mais provas ou documentos, orientamos você em cada passo, tudo é feito para maximizar suas chances de sucesso.",
    },
    {
        title: "Procedimento Administrativo e Propositura da Ação",
        description: "Protocolamos o processo administrativo e judicial, conforme o caso, e acompanhamos cada fase de perto, garantindo que tudo seja conduzido com excelência até a conquista do seu direito.",
    },
];

function CheckIcon() {
    return (
        <div className="w-12 h-12 rounded-full border-4 border-gold-400 bg-red-900 flex items-center justify-center">
            <svg
                className="w-6 h-6 text-gold-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
        </div>
    );
}

function StepCard({ step, index, delay }: { step: Step; index: number; delay: number }) {
    return (
        <AnimatedContent
            distance={80}
            direction="horizontal"
            duration={0.8}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            threshold={0.2}
            delay={delay}
        >
            <div className="flex gap-6 md:gap-8 relative">
                {/* Timeline line */}
                {index < 3 && (
                    <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gold-400/30" />
                )}

                {/* Check icon */}
                <div className="flex-shrink-0 relative z-10">
                    <CheckIcon />
                </div>

                {/* Content */}
                <div className="flex-1 pb-12">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                        {step.title}
                    </h3>
                    <p className="text-white/80 leading-relaxed">
                        {step.description}
                    </p>
                </div>
            </div>
        </AnimatedContent>
    );
}

export function HowItWorks({ theme = "prev" }: HowItWorksProps) {
    const steps = theme === "oab" ? stepsOAB : stepsPrev;

    return (
        <section className="py-16 md:py-24 bg-gradient-to-br from-red-900 via-red-800 to-red-900 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
                    {/* Left side - Image and title */}
                    <div className="lg:sticky lg:top-24">
                        <AnimatedContent
                            distance={50}
                            direction="vertical"
                            reverse
                            duration={0.6}
                            ease="power2.out"
                            threshold={0.3}
                        >
                            <div className="mb-8">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-4">
                                    <svg className="w-5 h-5 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-sm font-semibold text-white">Como funciona?</span>
                                </div>

                                <h2
                                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
                                    style={{ fontFamily: "var(--font-playfair)" }}
                                >
                                    Pronto para dar o primeiro passo?{" "}
                                    <span className="text-gold-400">Como funciona nosso atendimento:</span>
                                </h2>
                            </div>
                        </AnimatedContent>

                        {/* Image */}
                        <AnimatedContent
                            distance={100}
                            direction="vertical"
                            duration={0.8}
                            ease="power3.out"
                            threshold={0.2}
                            delay={0.2}
                        >
                            <div className="rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/provasocial2.jpg"
                                    alt="Atendimento personalizado"
                                    width={600}
                                    height={400}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </AnimatedContent>
                    </div>

                    {/* Right side - Steps timeline */}
                    <div className="space-y-0">
                        {steps.map((step, index) => (
                            <StepCard
                                key={index}
                                step={step}
                                index={index}
                                delay={index * 0.15}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

