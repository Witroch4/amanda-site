import Image from "next/image";
import { Button } from "@/app/components/ui/Button";
import { getWhatsAppLink } from "@/app/lib/whatsapp";

interface HeroProps {
    theme: "oab" | "prev";
    headline: string;
    subheadline: string;
    ctaText?: string;
    imageSrc: string;
    imageAlt: string;
}

function WhatsAppIcon() {
    return (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
    );
}

// OAB Hero - Professional design with background image
function HeroOAB({
    headline,
    subheadline,
    ctaText = "Quero Reverter Minha Reprovação",
}: Omit<HeroProps, "theme" | "imageSrc" | "imageAlt" | "secondaryImageSrc">) {
    const whatsappLink = getWhatsAppLink("oab");

    return (
        <section className="relative min-h-screen overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                {/* Mobile image (vertical) - hidden on md and up */}
                <Image
                    src="/hero-OAB-smartfone.png"
                    alt="Escritório de Advocacia"
                    fill
                    className="object-cover object-center md:hidden"
                    priority
                    quality={90}
                />
                {/* Desktop image (horizontal) - hidden on mobile */}
                <Image
                    src="/hero-OAB.jpg"
                    alt="Escritório de Advocacia"
                    fill
                    className="object-cover object-right hidden md:block"
                    priority
                    quality={90}
                />
                {/* Dark gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-royal-950/95 via-royal-900/80 to-transparent" />
                {/* Gold accent overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-gold-400/5 via-transparent to-transparent" />
            </div>

            {/* Decorative Gold Line */}
            <div className="absolute left-0 top-1/4 w-1 h-32 bg-gradient-to-b from-transparent via-gold-400 to-transparent" />

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 pt-28 pb-16 md:pt-36 md:pb-24 min-h-screen flex items-center">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full">

                    {/* Text Content */}
                    <div className="text-left order-2 lg:order-1">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold-400/20 backdrop-blur-sm border border-gold-400/30 mb-8">
                            <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
                            <span className="text-sm font-semibold text-gold-400 tracking-wide">
                                Especialista em Recursos
                            </span>
                        </div>

                        {/* Main Headline with Gold Typography */}
                        <h1 className="mb-6">
                            <span
                                className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight"
                                style={{ fontFamily: "var(--font-playfair)" }}
                            >
                                {headline.split("?")[0]}?
                            </span>
                            {headline.includes("?") && (
                                <span
                                    className="block text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mt-2 leading-tight"
                                    style={{
                                        fontFamily: "var(--font-playfair)",
                                        background: "linear-gradient(135deg, #D4AF37 0%, #F4E4BC 25%, #D4AF37 50%, #B8860B 75%, #D4AF37 100%)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        backgroundClip: "text",
                                    }}
                                >
                                    {headline.split("?")[1]?.trim() || "Sua Aprovação Não Pode Esperar."}
                                </span>
                            )}
                        </h1>

                        {/* Subheadline */}
                        <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-10 max-w-xl">
                            {subheadline}
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button
                                href={whatsappLink}
                                external
                                variant="gold"
                                size="lg"
                                icon={<WhatsAppIcon />}
                                className="shadow-lg shadow-gold-400/25"
                            >
                                {ctaText}
                            </Button>

                            <Button
                                href="#conheca"
                                variant="outline"
                                size="lg"
                                className="border-white/30 text-white hover:bg-white/10"
                            >
                                Saiba Mais
                            </Button>
                        </div>

                        {/* Trust Indicators */}
                        <div className="mt-12 pt-8 border-t border-white/10">
                            <p className="text-xs uppercase tracking-widest text-white/50 mb-5">
                                Por que nos escolher
                            </p>
                            <div className="flex flex-wrap items-center gap-8">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gold-400/20 flex items-center justify-center">
                                        <svg className="w-5 h-5 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <span className="text-sm font-medium text-white">Todo Brasil</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gold-400/20 flex items-center justify-center">
                                        <svg className="w-5 h-5 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <span className="text-sm font-medium text-white">100% Online</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gold-400/20 flex items-center justify-center">
                                        <svg className="w-5 h-5 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <span className="text-sm font-medium text-white">Fortaleza/CE</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right side - empty to show background image */}
                    <div className="order-1 lg:order-2 hidden lg:block" />
                </div>
            </div>

            {/* Scroll Indicator - Responsive: finger for mobile, mouse for desktop */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                {/* Mobile: Finger swipe down */}
                <div className="md:hidden flex flex-col items-center gap-1">
                    <svg className="w-6 h-6 text-white/50" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C9.9 2 8.2 3.7 8.2 5.8v4.4c-.3-.1-.6-.2-.9-.2-1.8 0-3.3 1.5-3.3 3.3 0 .9.4 1.8 1 2.4l4.2 4.2c.6.6 1.4.9 2.2.9h5.4c1.2 0 2.3-.7 2.8-1.7l2.1-4.2c.3-.5.4-1.1.4-1.7v-2.5c0-1.8-1.5-3.3-3.3-3.3-.3 0-.6.1-.9.2V5.8C17.8 3.7 16.1 2 14 2h-2zm2 2c.9 0 1.6.7 1.6 1.8v5h-1.2V5.8c0-.3-.1-.5-.2-.7.6.1 1 .6 1 1.2v4.5h1.2V8.6c0-.9.7-1.6 1.6-1.6.9 0 1.6.7 1.6 1.6v2.5c0 .3-.1.6-.2.9l-2.1 4.2c-.2.4-.7.7-1.2.7h-5.4c-.4 0-.7-.1-1-.4l-4.2-4.2c-.3-.3-.4-.7-.4-1.1 0-.9.7-1.6 1.6-1.6.4 0 .8.2 1.1.5l.8.8V5.8C10.6 4.7 11.3 4 12.2 4H14z" />
                    </svg>
                    <div className="flex flex-col items-center">
                        <div className="w-0.5 h-2 bg-gold-400 rounded-full animate-pulse" />
                        <svg className="w-3 h-3 text-gold-400 animate-pulse" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M7 10l5 5 5-5z" />
                        </svg>
                    </div>
                </div>
                {/* Desktop: Mouse wheel */}
                <div className="hidden md:flex w-8 h-12 rounded-full border-2 border-white/30 items-start justify-center p-2">
                    <div className="w-1 h-3 rounded-full bg-gold-400 animate-pulse" />
                </div>
            </div>
        </section>
    );
}

// Prev Hero - Light theme with different layout
function HeroPrev({
    headline,
    subheadline,
    ctaText = "Analisar Meu Caso Gratuitamente",
    imageSrc,
    imageAlt,
}: Omit<HeroProps, "theme">) {
    const whatsappLink = getWhatsAppLink("prev");

    return (
        <section className="relative min-h-screen bg-gradient-to-br from-nude-50 via-nude-100 to-nude-200 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(26,35,126,0.05)_0%,transparent_50%)]" />
                <div className="absolute right-0 bottom-0 w-1/2 h-1/2 opacity-5">
                    <Image
                        src="/dama-da-justica.png"
                        alt=""
                        fill
                        className="object-contain object-right-bottom"
                    />
                </div>
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 pt-24 pb-12 md:pt-32 md:pb-20 min-h-screen flex items-center">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 w-full">
                    {/* Text Content */}
                    <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-royal-800/10 text-royal-800 mb-6">
                            <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
                            <span className="text-sm font-semibold">Atendimento Imediato</span>
                        </div>

                        <h1
                            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6 text-gray-800"
                            style={{ fontFamily: "var(--font-playfair)" }}
                        >
                            {headline.split("?")[0]}
                            {headline.includes("?") && (
                                <>
                                    ?<br className="hidden md:block" />
                                    <span className="text-gold-500">{headline.split("?")[1]}</span>
                                </>
                            )}
                        </h1>

                        <p className="text-lg md:text-xl leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0 text-gray-600">
                            {subheadline}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Button
                                href={whatsappLink}
                                external
                                variant="gold"
                                size="lg"
                                icon={<WhatsAppIcon />}
                            >
                                {ctaText}
                            </Button>

                            <Button href="#conheca" variant="royal" size="lg">
                                Saiba Mais
                            </Button>
                        </div>

                        {/* Trust badges */}
                        <div className="mt-10 pt-8 border-t border-gray-200">
                            <p className="text-xs uppercase tracking-wider mb-4 text-gray-600">
                                Por que nos escolher
                            </p>
                            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6">
                                <div className="flex items-center gap-2">
                                    <div className="w-10 h-10 rounded-full bg-royal-800/10 flex items-center justify-center">
                                        <svg className="w-5 h-5 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <span className="text-sm font-medium text-gray-800">Todo Brasil</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-10 h-10 rounded-full bg-royal-800/10 flex items-center justify-center">
                                        <svg className="w-5 h-5 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <span className="text-sm font-medium text-gray-800">100% Online</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-10 h-10 rounded-full bg-royal-800/10 flex items-center justify-center">
                                        <svg className="w-5 h-5 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <span className="text-sm font-medium text-gray-800">Fortaleza/CE</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Images */}
                    <div className="flex-1 order-1 lg:order-2 w-full max-w-lg lg:max-w-xl relative">
                        <div className="relative z-10">
                            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-royal-800">
                                <Image
                                    src={imageSrc}
                                    alt={imageAlt}
                                    fill
                                    className="object-cover object-top"
                                    priority
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                            </div>
                        </div>


                        <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full blur-2xl bg-royal-800/20" />
                        <div className="absolute -bottom-8 right-1/4 w-32 h-32 rounded-full blur-3xl bg-gold-400/20" />

                        <div className="absolute -right-4 top-1/4 z-20 hidden lg:block bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-royal-800/20">
                            <p className="text-3xl font-bold text-royal-800">+15000</p>
                            <p className="text-xs text-gray-600">Clientes atendidos</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-8 h-12 rounded-full border-2 border-gray-400 flex items-start justify-center p-2">
                    <div className="w-1 h-3 rounded-full bg-royal-800 animate-pulse" />
                </div>
            </div>
        </section>
    );
}

// Main Hero component that switches based on theme
export function Hero(props: HeroProps) {
    if (props.theme === "oab") {
        return <HeroOAB {...props} />;
    }
    return <HeroPrev {...props} />;
}
