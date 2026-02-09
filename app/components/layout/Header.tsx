import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
    variant?: "transparent" | "solid";
    theme?: "oab" | "prev";
}

export function Header({ variant = "transparent", theme = "oab" }: HeaderProps) {
    const bgStyle = variant === "solid"
        ? theme === "oab"
            ? "bg-royal-900"
            : "bg-nude-100"
        : "bg-transparent";

    return (
        <header className={`absolute top-0 left-0 right-0 z-40 ${bgStyle}`}>
            <div className="container mx-auto px-4 py-4 md:py-6">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3">
                        <div className="relative w-12 h-12 md:w-16 md:h-16">
                            <Image
                                src="/logo_quad_HD_fundo_azul_royal.png"
                                alt="Dra. Amanda Sousa - Advocacia"
                                fill
                                className="object-contain rounded-lg"
                                priority
                            />
                        </div>
                        <div className="hidden sm:block">
                            <p
                                className="text-gold-400 font-semibold text-lg"
                                style={{ fontFamily: "var(--font-playfair)" }}
                            >
                                Dra. Amanda Sousa
                            </p>
                            <p className="text-white/70 text-xs">
                                Advocacia e Consultoria Jurídica
                            </p>
                        </div>
                    </Link>

                    {/* Navigation - Minimal for landing pages */}
                    <nav className="flex items-center gap-4">
                        <Link
                            href="/prev"
                            className={`text-sm font-medium transition-colors ${theme === "prev"
                                    ? "text-royal-800 hover:text-gold-500"
                                    : "text-white/80 hover:text-gold-400"
                                }`}
                        >
                            Previdenciário
                        </Link>
                        <Link
                            href="/oab"
                            className={`text-sm font-medium transition-colors ${theme === "oab"
                                    ? "text-gold-400"
                                    : "text-white/80 hover:text-gold-400"
                                }`}
                        >
                            OAB & Concursos
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}
