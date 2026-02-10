import { Metadata } from "next";
import { Header } from "@/app/components/layout/Header";
import { FloatingWhatsApp } from "@/app/components/layout/FloatingWhatsApp";
import { Hero } from "@/app/components/sections/Hero";
import { ConditionsTable } from "@/app/components/sections/ConditionsTable";
import { UrgencySection } from "@/app/components/sections/UrgencySection";
import { TestimonialsSection } from "@/app/components/sections/Testimonials";
import { AboutSection } from "@/app/components/sections/AboutSection";
import { FAQSection } from "@/app/components/sections/FAQ";
import { FinalCTA } from "@/app/components/sections/FinalCTA";
import { InstagramSection } from "@/app/components/sections/InstagramSection";
import { InfiniteReviews } from "@/app/components/sections/InfiniteReviews";
import { HowItWorks } from "@/app/components/sections/HowItWorks";

export const metadata: Metadata = {
    title: "Direito Previdenciário | BPC/LOAS",
    description:
        "Especialista em BPC/LOAS, aposentadoria e benefícios negados. Sua condição é invisível para o INSS, mas não para a Lei. Atendimento em todo o Brasil.",
    openGraph: {
        title: "Direito Previdenciário | Dra. Amanda Sousa",
        description:
            "Especialista em BPC/LOAS e benefícios negados. Atendimento humanizado para doenças invisíveis.",
        images: ["/logo_quad_HD_fundo_azul_royal.png"],
    },
};

// FAQ específico para Previdenciário
const faqItems = [
    {
        title: "Tenho direito ao BPC/LOAS mesmo sem ter contribuído ao INSS?",
        content:
            "Sim! O BPC é um benefício assistencial que não exige contribuição prévia. É destinado a idosos com 65 anos ou mais, ou pessoas com deficiência de longo prazo em situação de vulnerabilidade socioeconômica.",
    },
    {
        title: "Minha doença é 'invisível' (HIV, depressão, fibromialgia). Tenho direito?",
        content:
            "Absolutamente. A lei considera não apenas a condição física visível, mas também as barreiras sociais e o estigma que impedem sua inserção no mercado de trabalho. Muitos benefícios são concedidos para condições consideradas 'invisíveis'.",
    },
    {
        title: "O INSS negou meu benefício. Ainda posso recorrer?",
        content:
            "Sim! Existem recursos administrativos (dentro do próprio INSS) e judiciais. Quanto antes agir, maiores as chances de êxito. Muitos benefícios negados são revertidos na Justiça.",
    },
    {
        title: "Vocês atendem em todo o Brasil?",
        content:
            "Sim! Atendemos 100% online em todo o território nacional, com opção de atendimento presencial em Fortaleza/CE para quem preferir.",
    },
    {
        title: "Quanto custa a consulta?",
        content:
            "Oferecemos uma análise inicial gratuita via WhatsApp. Após entendermos seu caso, apresentamos uma proposta personalizada. Trabalhamos com honorários acessíveis.",
    },
    {
        title: "Aposentadoria rural: como comprovar atividade?",
        content:
            "Existem diversos meios de prova: documentos pessoais, certidões, fotos, registros em sindicatos, testemunhas. Analisamos cada caso individualmente para montar a melhor estratégia probatória.",
    },
];

// Depoimentos para Previdenciário (com fotos reais)
const testimonials = [
    {
        name: "Sr. João",
        role: "Aposentadoria Rural",
        content:
            "Trabalhei a vida toda na roça e o INSS não queria aceitar meus documentos. A Dra. Amanda provou meu direito e hoje recebo meu benefício em dia.",
        imageSrc: "/provasocial1.jpg",
    },
    {
        name: "Dona Maria",
        role: "BPC/LOAS (HIV/Estigma)",
        content:
            "Tive o benefício negado porque o perito não viu a minha dor. A Dra. Amanda lutou por mim e explicou que a lei protege quem sofre preconceito.",
        imageSrc: "/provasocial2.jpg",
    },
    {
        name: "Roberta S.",
        role: "BPC/LOAS (Doença Autoimune)",
        content:
            "Sofro com Lúpus e o INSS dizia que eu podia trabalhar porque 'parecia bem'. A Dra. Amanda foi incrível ao mostrar que minha condição é invisível para o perito, mas não para a lei.",
        imageSrc: "/provasocial3.jpg",
    },
    {
        name: "Sr. Antônio",
        role: "Auxílio-Doença",
        content:
            "Estava desesperado após o acidente. A Dra. Amanda cuidou de tudo com muita clareza e dedicação. Escritório nota 10!",
        imageSrc: "/provasocial4.jpg",
    },
    {
        name: "Marcio F.",
        role: "Saúde Mental e Estigma Social",
        content:
            "Minha depressão grave me impediu de seguir no emprego. A Dra. Amanda lutou pelo meu direito com uma humanidade que eu nunca vi. Ela entende que barreiras sociais também dão direito ao benefício.",
        imageSrc: "/provasocial1.jpg",
    },
];

export default function PrevPage() {
    return (
        <main data-theme="prev" className="bg-nude-50">
            <Header theme="prev" />

            <Hero
                theme="prev"
                headline="Sua condição é invisível para o INSS, mas não para a Lei."
                subheadline="Muitas negativas acontecem porque o perito olha apenas o exame, e não a sua vida. Nós combatemos a injustiça contra portadores de HIV, doenças autoimunes e condições psiquiátricas."
                imageSrc="/amanda-cintura-pracima.jpg"
                imageAlt="Dra. Amanda Sousa - Especialista em Direito Previdenciário"
                ctaText="Analisar Meu Caso Gratuitamente"
            />

            <ConditionsTable />

            <TestimonialsSection
                theme="prev"
                title="Histórias de Sucesso"
                subtitle="Clientes reais que conquistaram seus direitos"
                items={testimonials}
            />

            <UrgencySection theme="prev" />

            <InfiniteReviews theme="prev" />

            <HowItWorks theme="prev" />

            <AboutSection theme="prev" />

            <InstagramSection theme="prev" />

            <FAQSection theme="prev" items={faqItems} />

            <FinalCTA theme="prev" />

            <FloatingWhatsApp context="prev" />
        </main>
    );
}
