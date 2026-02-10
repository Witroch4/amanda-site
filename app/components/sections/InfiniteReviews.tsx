"use client";

import { useEffect, useRef, useState } from "react";

interface Review {
    name: string;
    role: string;
    content: string;
    rating: number;
    date: string;
}

interface InfiniteReviewsProps {
    theme?: "oab" | "prev";
}

const reviewsOAB: Review[] = [
    {
        name: "Carlos M.",
        role: "Aprovado OAB 2ª Fase",
        content: "Passei na OAB após 3 tentativas. O recurso da Dra. Amanda anulou a questão de ética que eu precisava! Profissionalismo impecável.",
        rating: 5,
        date: "3 meses atrás",
    },
    {
        name: "Fernanda S.",
        role: "Aprovada Concurso TRT",
        content: "Fui eliminada no exame médico de forma injusta. Com o Mandado de Segurança, assumi meu cargo em 60 dias. Eternamente grata!",
        rating: 5,
        date: "6 meses atrás",
    },
    {
        name: "Mariana T.",
        role: "Aprovada PC/CE",
        content: "Fiquei por uma questão na prova objetiva. A Dra. Amanda elaborou um Mandado de Segurança impecável dentro do prazo de 120 dias. O juiz concedeu a liminar e hoje estou no curso de formação.",
        rating: 5,
        date: "4 meses atrás",
    },
    {
        name: "Ricardo L.",
        role: "Aluno Mentoria MTF",
        content: "A Mentoria MTF mudou minha forma de estudar. A aprovação veio natural depois que entendi como as bancas pensam.",
        rating: 5,
        date: "2 meses atrás",
    },
    {
        name: "Juliana O.",
        role: "Aprovada Procuradoria",
        content: "A questão tinha vício claro e a Dra. Amanda identificou na hora. O recurso foi acolhido e passei para a próxima fase!",
        rating: 5,
        date: "5 meses atrás",
    },
    {
        name: "Lucas V.",
        role: "Aluno Mentoria MTF",
        content: "Eu travava na hora da prova por pura ansiedade. Com a Blindagem Mental do Método Fênix, aprendi a dominar o 'dia D' e finalmente consegui minha aprovação na OAB.",
        rating: 5,
        date: "1 mês atrás",
    },
];

const reviewsPrev: Review[] = [
    {
        name: "Sr. João",
        role: "Aposentadoria Rural",
        content: "Trabalhei a vida toda na roça e o INSS não queria aceitar meus documentos. A Dra. Amanda provou meu direito e hoje recebo meu benefício em dia.",
        rating: 5,
        date: "3 meses atrás",
    },
    {
        name: "Dona Maria",
        role: "BPC/LOAS (HIV/Estigma)",
        content: "Tive o benefício negado porque o perito não viu a minha dor. A Dra. Amanda lutou por mim e explicou que a lei protege quem sofre preconceito.",
        rating: 5,
        date: "5 meses atrás",
    },
    {
        name: "Roberta S.",
        role: "BPC/LOAS (Doença Autoimune)",
        content: "Sofro com Lúpus e o INSS dizia que eu podia trabalhar porque 'parecia bem'. A Dra. Amanda foi incrível ao mostrar que minha condição é invisível para o perito, mas não para a lei.",
        rating: 5,
        date: "4 meses atrás",
    },
    {
        name: "Sr. Antônio",
        role: "Auxílio-Doença",
        content: "Estava desesperado após o acidente. A Dra. Amanda cuidou de tudo com muita clareza e dedicação. Escritório nota 10!",
        rating: 5,
        date: "2 meses atrás",
    },
    {
        name: "Marcio F.",
        role: "Saúde Mental e Estigma Social",
        content: "Minha depressão grave me impediu de seguir no emprego. A Dra. Amanda lutou pelo meu direito com uma humanidade que eu nunca vi. Ela entende que barreiras sociais também dão direito ao benefício.",
        rating: 5,
        date: "1 mês atrás",
    },
];

function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
                <svg
                    key={i}
                    className={`w-4 h-4 ${i < rating ? "text-gold-400" : "text-gray-300"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );
}

function GoogleIcon() {
    return (
        <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
        </svg>
    );
}

function ReviewCard({ review, theme }: { review: Review; theme: "oab" | "prev" }) {
    return (
        <div className="flex-shrink-0 w-[340px] md:w-[380px] mx-2">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 h-full">
                {/* Header with Avatar and Info */}
                <div className="flex items-start gap-4 mb-4">
                    {/* Avatar */}
                    <div className={`
                        w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0
                        ${theme === "oab"
                            ? "bg-gradient-to-br from-royal-700 to-royal-900 text-white"
                            : "bg-gradient-to-br from-gold-400 to-gold-500 text-royal-900"
                        }
                    `}>
                        {review.name.charAt(0)}
                    </div>

                    {/* Name & Role */}
                    <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-900 truncate">{review.name}</h4>
                        <p className="text-sm text-gray-500 truncate">{review.role}</p>
                    </div>

                    {/* Google Icon */}
                    <GoogleIcon />
                </div>

                {/* Rating & Date */}
                <div className="flex items-center gap-3 mb-4">
                    <StarRating rating={review.rating} />
                    <span className="text-xs text-gray-400">{review.date}</span>
                </div>

                {/* Content */}
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">
                    &ldquo;{review.content}&rdquo;
                </p>
            </div>
        </div>
    );
}

export function InfiniteReviews({ theme = "oab" }: InfiniteReviewsProps) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isPaused, setIsPaused] = useState(false);
    const reviews = theme === "oab" ? reviewsOAB : reviewsPrev;
    const animationRef = useRef<number | undefined>(undefined);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        let scrollPosition = 0;
        const scrollSpeed = 0.5;

        const animate = () => {
            if (!isPaused && scrollContainer) {
                scrollPosition += scrollSpeed;

                const cardWidth = 380 + 16;
                const totalWidth = cardWidth * reviews.length;

                if (scrollPosition >= totalWidth) {
                    scrollPosition = 0;
                }

                scrollContainer.scrollLeft = scrollPosition;
            }
            animationRef.current = requestAnimationFrame(animate);
        };

        animationRef.current = requestAnimationFrame(animate);

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [reviews.length, isPaused]);

    // Determine background and accent colors based on theme
    const bgClass = theme === "oab"
        ? "bg-gradient-to-b from-royal-800 via-royal-900 to-royal-950"
        : "bg-gradient-to-b from-nude-100 via-nude-50 to-white";

    const fadeClass = theme === "oab"
        ? "from-royal-900"
        : "from-nude-50";

    const textClass = theme === "oab" ? "text-white" : "text-gray-900";
    const mutedTextClass = theme === "oab" ? "text-white/70" : "text-gray-600";

    return (
        <section className={`py-20 md:py-28 ${bgClass} relative overflow-hidden`}>
            {/* Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className={`absolute -top-24 -left-24 w-96 h-96 rounded-full blur-3xl ${theme === "oab" ? "bg-gold-400/5" : "bg-royal-800/5"
                    }`} />
                <div className={`absolute -bottom-24 -right-24 w-96 h-96 rounded-full blur-3xl ${theme === "oab" ? "bg-gold-400/5" : "bg-gold-400/10"
                    }`} />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-14">
                    {/* Badge */}
                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 ${theme === "oab"
                        ? "bg-white/10 backdrop-blur-sm"
                        : "bg-royal-800/10"
                        }`}>
                        <svg className="w-5 h-5 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className={`text-sm font-semibold ${textClass}`}>
                            Avaliações Verificadas
                        </span>
                    </div>

                    <h2
                        className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${textClass}`}
                        style={{ fontFamily: "var(--font-playfair)" }}
                    >
                        O que nossos{" "}
                        <span className="text-gold-400">clientes</span>{" "}
                        dizem
                    </h2>

                    <p className={`text-base md:text-lg max-w-2xl mx-auto ${mutedTextClass}`}>
                        Histórias reais de quem confiou em nosso trabalho e conquistou seus direitos
                    </p>
                </div>

                {/* Infinite Scroll Container */}
                <div
                    className="relative"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {/* Gradient Overlays */}
                    <div className={`absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r ${fadeClass} to-transparent z-10 pointer-events-none`} />
                    <div className={`absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l ${fadeClass} to-transparent z-10 pointer-events-none`} />

                    {/* Scrolling Container */}
                    <div
                        ref={scrollRef}
                        className="flex overflow-x-hidden py-4"
                        style={{ scrollBehavior: "auto" }}
                    >
                        {[...reviews, ...reviews, ...reviews].map((review, index) => (
                            <ReviewCard key={index} review={review} theme={theme} />
                        ))}
                    </div>
                </div>

                {/* Stats / Trust Indicators */}
                <div className="flex flex-wrap justify-center gap-8 md:gap-16 mt-12">
                    <div className="text-center">
                        <div className={`text-3xl md:text-4xl font-bold ${theme === "oab" ? "text-gold-400" : "text-royal-800"}`}>
                            15.000+
                        </div>
                        <p className={`text-sm ${mutedTextClass}`}>Clientes Atendidos</p>
                    </div>
                    <div className="text-center">
                        <div className={`text-3xl md:text-4xl font-bold ${theme === "oab" ? "text-gold-400" : "text-royal-800"}`}>
                            4.9
                        </div>
                        <p className={`text-sm ${mutedTextClass}`}>Avaliação Média</p>
                    </div>
                    <div className="text-center">
                        <div className={`text-3xl md:text-4xl font-bold ${theme === "oab" ? "text-gold-400" : "text-royal-800"}`}>
                            98%
                        </div>
                        <p className={`text-sm ${mutedTextClass}`}>Taxa de Satisfação</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
