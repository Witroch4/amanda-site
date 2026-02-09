import { Accordion } from "@/app/components/ui/Accordion";

interface FAQSectionProps {
    theme: "oab" | "prev";
    items: Array<{
        title: string;
        content: string;
    }>;
}

export function FAQSection({ theme, items }: FAQSectionProps) {
    const bgClass = theme === "oab"
        ? "bg-royal-900"
        : "bg-nude-100";

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
                        Perguntas <span className="text-gold-400">Frequentes</span>
                    </h2>
                    <p className={`text-base md:text-lg max-w-2xl mx-auto ${mutedTextClass}`}>
                        Tire suas dúvidas antes de entrar em contato
                    </p>
                </div>

                {/* FAQ Accordion */}
                <div className={`max-w-3xl mx-auto rounded-2xl p-6 md:p-8 ${theme === "oab" ? "bg-royal-800/50" : "bg-white shadow-lg"
                    }`}>
                    <div className={textClass}>
                        <Accordion items={items} />
                    </div>
                </div>
            </div>
        </section>
    );
}
