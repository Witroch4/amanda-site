import { Button } from "@/app/components/ui/Button";
import { getWhatsAppLink } from "@/app/lib/whatsapp";

interface Pillar {
    title: string;
    description: string;
    icon: "brain" | "target" | "trophy";
}

const pillars: Pillar[] = [
    {
        title: "Blindagem Mental",
        description: "Controle da ansiedade e foco total no 'dia D'. Técnicas de gestão emocional para momentos de alta pressão.",
        icon: "brain",
    },
    {
        title: "Técnica de Elite",
        description: "Como identificar as 'pegadinhas' da FGV e outras bancas. Método de resolução que maximiza acertos.",
        icon: "target",
    },
    {
        title: "Estratégia de Recurso",
        description: "O aluno aprende a fundamentar seus próprios pedidos de forma técnica e jurídica.",
        icon: "trophy",
    },
];

const iconComponents = {
    brain: () => (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
        </svg>
    ),
    target: () => (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
    ),
    trophy: () => (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
        </svg>
    ),
};

function FireIcon() {
    return (
        <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z" clipRule="evenodd" />
        </svg>
    );
}

export function MentoriaSection() {
    const whatsappLink = getWhatsAppLink("oab");

    return (
        <section className="py-16 md:py-24 bg-royal-800">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <FireIcon />
                        <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
                            Mentoria Exclusiva
                        </span>
                        <FireIcon />
                    </div>
                    <h2
                        className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white"
                        style={{ fontFamily: "var(--font-playfair)" }}
                    >
                        Método <span className="text-gold-400">Fênix</span>
                    </h2>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto text-white/80">
                        Renasça das cinzas da reprovação. Uma preparação completa para quem
                        quer transformar frustração em aprovação.
                    </p>
                </div>

                {/* 3 Pillars */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
                    {pillars.map((pillar, index) => {
                        const IconComponent = iconComponents[pillar.icon];
                        return (
                            <div
                                key={index}
                                className="text-center p-6"
                            >
                                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-royal-900 mx-auto mb-4 shadow-gold">
                                    <IconComponent />
                                </div>
                                <h3
                                    className="text-xl font-bold text-gold-400 mb-3"
                                    style={{ fontFamily: "var(--font-playfair)" }}
                                >
                                    {pillar.title}
                                </h3>
                                <p className="text-white/70 text-sm leading-relaxed">
                                    {pillar.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* CTA */}
                <div className="text-center">
                    <Button
                        href={whatsappLink}
                        external
                        variant="gold"
                        size="lg"
                    >
                        Quero Conhecer o Método Fênix
                    </Button>
                </div>
            </div>
        </section>
    );
}
