import { Metadata } from "next";
import { Header } from "@/app/components/layout/Header";
import { FloatingWhatsApp } from "@/app/components/layout/FloatingWhatsApp";
import { Hero } from "@/app/components/sections/Hero";
import { LegalToolsSection } from "@/app/components/sections/LegalTools";
import { MentoriaSection } from "@/app/components/sections/MentoriaSection";
import { UrgencySection } from "@/app/components/sections/UrgencySection";
import { TestimonialsSection } from "@/app/components/sections/Testimonials";
import { AboutSection } from "@/app/components/sections/AboutSection";
import { FAQSection } from "@/app/components/sections/FAQ";
import { FinalCTA } from "@/app/components/sections/FinalCTA";
import { InstagramSection } from "@/app/components/sections/InstagramSection";
import { InfiniteReviews } from "@/app/components/sections/InfiniteReviews";

export const metadata: Metadata = {
    title: "Recursos OAB & Mentoria Fênix",
    description:
        "A banca errou? Sua aprovação não pode esperar. Especialista em Mandado de Segurança, Recursos Administrativos e Mentoria para OAB e Concursos.",
    openGraph: {
        title: "Recursos OAB & Mentoria Fênix | Dra. Amanda Sousa",
        description:
            "Especialista em Mandado de Segurança e Recursos de Concursos. Recupere sua vaga com quem entende as falhas dos editais.",
        images: ["/logo_quad_HD_fundo_azul_royal.png"],
    },
};

// FAQ específico para OAB/Concursos
const faqItems = [
    {
        title: "Qual o prazo para entrar com Mandado de Segurança?",
        content:
            "O prazo é de 120 dias a partir do ato ilegal da banca. Após esse período, ainda é possível a Ação Ordinária, que não tem prazo tão restrito.",
    },
    {
        title: "A banca errou na correção da minha prova. O que fazer?",
        content:
            "Primeiro, verifique se cabe recurso administrativo dentro do prazo do edital. Depois, analise a jurisprudência para Mandado de Segurança ou Ação Judicial. Uma análise técnica é fundamental.",
    },
    {
        title: "O que é a Mentoria Método Fênix (MTF)?",
        content:
            "É um programa completo de preparação com 3 pilares: Blindagem Mental (controle de ansiedade), Técnica de Elite (identificar pegadinhas) e Estratégia de Recurso (fundamentação técnica).",
    },
    {
        title: "Vocês atendem todo o Brasil?",
        content:
            "Sim! Atendimento 100% online para recursos e mentorias, com opção de atendimento presencial em Fortaleza/CE.",
    },
    {
        title: "Já passou o prazo de 120 dias. Perdi minha chance?",
        content:
            "Não necessariamente. A Ação Ordinária pode ser ajuizada mesmo após o prazo do Mandado de Segurança, especialmente para casos que exigem perícia ou produção de provas detalhadas.",
    },
    {
        title: "Quanto custa o serviço de recurso ou Mandado de Segurança?",
        content:
            "Cada caso é único e requer análise individualizada. Entre em contato para uma análise inicial gratuita e proposta personalizada.",
    },
];

// Depoimentos para OAB (cards sem foto)
const testimonials = [
    {
        name: "Carlos M.",
        role: "Aprovado OAB 2ª Fase",
        content:
            "Passei na OAB após 3 tentativas. O recurso da Dra. Amanda anulou a questão de ética que eu precisava! Profissionalismo impecável.",
    },
    {
        name: "Fernanda S.",
        role: "Aprovada Concurso TRT",
        content:
            "Fui eliminada no exame médico de forma injusta. Com o Mandado de Segurança, assumi meu cargo em 60 dias. Eternamente grata!",
    },
    {
        name: "Mariana T.",
        role: "Aprovada PC/CE (Pós-Recurso)",
        content:
            "Fiquei por uma questão na prova objetiva. A Dra. Amanda elaborou um Mandado de Segurança impecável dentro do prazo de 120 dias. O juiz concedeu a liminar e hoje estou no curso de formação.",
    },
    {
        name: "Ricardo L.",
        role: "Aluno Mentoria MTF",
        content:
            "A Mentoria MTF mudou minha forma de estudar. A aprovação veio natural depois que entendi como as bancas pensam.",
    },
    {
        name: "Juliana O.",
        role: "Aprovada Procuradoria",
        content:
            "A questão tinha vício claro e a Dra. Amanda identificou na hora. O recurso foi acolhido e passei para a próxima fase!",
    },
    {
        name: "Lucas V.",
        role: "Aluno Mentoria MTF",
        content:
            "Eu travava na hora da prova por pura ansiedade. Com a Blindagem Mental do Método Fênix, aprendi a dominar o 'dia D' e finalmente consegui minha aprovação na OAB.",
    },
];

export default function OABPage() {
    return (
        <main className="bg-royal-800">
            <Header theme="oab" />

            <Hero
                theme="oab"
                headline="A Banca Errou? Sua Aprovação Não Pode Esperar."
                subheadline="Especialista em Mandado de Segurança e Recursos Administrativos. Recupere sua vaga com quem entende as falhas dos editais."
                imageSrc="/amanda-cintura-pracima.jpg"
                imageAlt="Dra. Amanda Sousa - Especialista em Recursos de Concursos"
                secondaryImageSrc="/amanda-rosto.jpg"
                ctaText="Quero Reverter Minha Reprovação"
            />

            <LegalToolsSection />

            <MentoriaSection />

            <UrgencySection theme="oab" />

            <InfiniteReviews theme="oab" />

            <TestimonialsSection
                theme="oab"
                title="Histórias de Aprovação"
                subtitle="Veja quem já conquistou sua vaga com nossa ajuda"
                items={testimonials}
            />

            <AboutSection theme="oab" />

            <InstagramSection theme="oab" />

            <FAQSection theme="oab" items={faqItems} />

            <FinalCTA theme="oab" />

            <FloatingWhatsApp context="oab" />
        </main>
    );
}
