interface Condition {
    category: string;
    examples: string;
    legalBasis: string;
    icon: "immune" | "invisible" | "mental" | "chronic";
}

interface ConditionsTableProps {
    conditions?: Condition[];
}

const defaultConditions: Condition[] = [
    {
        category: "Imunológicas",
        examples: "HIV/AIDS, Lúpus",
        legalBasis: "O estigma social é considerado barreira para o benefício",
        icon: "immune",
    },
    {
        category: "Invisíveis",
        examples: "Crohn, Fibromialgia, Artrite",
        legalBasis: "Dores crônicas que impedem o trabalho dão direito",
        icon: "invisible",
    },
    {
        category: "Saúde Mental",
        examples: "Autismo, Bipolaridade, Depressão",
        legalBasis: "Avaliação deve ser social e não apenas médica",
        icon: "mental",
    },
    {
        category: "Crônicas Graves",
        examples: "Renal Crônica, Cardiopatias",
        legalBasis: "Isenção de carência em casos de gravidade extrema",
        icon: "chronic",
    },
];

const iconComponents = {
    immune: () => (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
    ),
    invisible: () => (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
        </svg>
    ),
    mental: () => (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
    ),
    chronic: () => (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
    ),
};

export function ConditionsTable({ conditions = defaultConditions }: ConditionsTableProps) {
    return (
        <section className="py-16 md:py-24 bg-nude-100">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2
                        className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-gray-800"
                        style={{ fontFamily: "var(--font-playfair)" }}
                    >
                        Condições <span className="text-royal-800">&ldquo;Invisíveis&rdquo;</span> que{" "}
                        <span className="text-gold-500">Garantem seu Direito</span>
                    </h2>
                    <p className="text-base md:text-lg max-w-3xl mx-auto text-gray-600">
                        Muitas pessoas têm direito ao BPC/LOAS, mas não sabem porque acreditam que o benefício
                        é apenas para deficiências físicas visíveis. A Dra. Amanda domina esses casos.
                    </p>
                </div>

                {/* Cards Grid - Mobile first (1 column) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {conditions.map((condition, index) => {
                        const IconComponent = iconComponents[condition.icon];
                        return (
                            <div
                                key={index}
                                className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-gold-400 hover:shadow-xl transition-shadow"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-14 h-14 rounded-full bg-royal-800 flex items-center justify-center text-gold-400">
                                        <IconComponent />
                                    </div>
                                    <div className="flex-1">
                                        <h3
                                            className="text-lg font-bold text-royal-800 mb-1"
                                            style={{ fontFamily: "var(--font-playfair)" }}
                                        >
                                            {condition.category}
                                        </h3>
                                        <p className="text-sm text-gray-600 mb-2">
                                            <strong>Exemplos:</strong> {condition.examples}
                                        </p>
                                        <p className="text-sm text-gray-700 bg-nude-50 p-2 rounded-lg">
                                            <span className="text-gold-500 font-semibold">Lei:</span> {condition.legalBasis}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Highlight Message */}
                <div className="mt-12 max-w-3xl mx-auto">
                    <div className="bg-royal-800 rounded-2xl p-6 md:p-8 text-center">
                        <p
                            className="text-xl md:text-2xl text-white font-semibold mb-2"
                            style={{ fontFamily: "var(--font-playfair)" }}
                        >
                            &ldquo;O BPC/LOAS não é apenas para quem não consegue andar.&rdquo;
                        </p>
                        <p className="text-white/80">
                            É para quem a doença impede de viver com dignidade e competir no mercado de trabalho em igualdade.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
