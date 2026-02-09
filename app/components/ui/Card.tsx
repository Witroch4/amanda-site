import { ReactNode } from "react";
import Image from "next/image";

type CardVariant = "default" | "gold-border" | "elevated" | "glass";

interface CardProps {
    variant?: CardVariant;
    children: ReactNode;
    className?: string;
    image?: {
        src: string;
        alt: string;
        width?: number;
        height?: number;
    };
    onClick?: () => void;
}

const variantStyles: Record<CardVariant, string> = {
    default: `
    bg-white/5
    border border-white/10
  `,
    "gold-border": `
    bg-white/5
    border-2 border-gold-400
    shadow-gold
  `,
    elevated: `
    bg-white
    shadow-lg
    border border-gray-100
  `,
    glass: `
    bg-white/10
    backdrop-blur-md
    border border-white/20
  `,
};

export function Card({
    variant = "default",
    children,
    className = "",
    image,
    onClick,
}: CardProps) {
    const baseStyles = `
    rounded-xl
    p-6
    transition-all duration-300
    ${onClick ? "cursor-pointer hover:scale-[1.02]" : ""}
  `;

    const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`.replace(/\s+/g, " ").trim();

    return (
        <div className={combinedStyles} onClick={onClick}>
            {image && (
                <div className="relative mb-4 overflow-hidden rounded-lg aspect-video">
                    <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
            )}
            {children}
        </div>
    );
}

// Subcomponentes para estrutura do card
Card.Title = function CardTitle({
    children,
    className = "",
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <h3
            className={`font-display text-xl font-semibold mb-2 ${className}`}
            style={{ fontFamily: "var(--font-playfair)" }}
        >
            {children}
        </h3>
    );
};

Card.Description = function CardDescription({
    children,
    className = "",
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <p className={`text-sm opacity-80 leading-relaxed ${className}`}>
            {children}
        </p>
    );
};

Card.Footer = function CardFooter({
    children,
    className = "",
}: {
    children: ReactNode;
    className?: string;
}) {
    return <div className={`mt-4 pt-4 border-t border-white/10 ${className}`}>{children}</div>;
};
