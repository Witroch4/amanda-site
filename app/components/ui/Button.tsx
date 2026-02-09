import Link from "next/link";
import { ComponentProps, ReactNode } from "react";

type ButtonVariant = "gold" | "royal" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends Omit<ComponentProps<"button">, "className"> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    href?: string;
    external?: boolean;
    icon?: ReactNode;
    children: ReactNode;
    className?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
    gold: `
    bg-gradient-to-r from-gold-400 to-gold-500
    text-black font-semibold
    hover:from-gold-300 hover:to-gold-400
    shadow-gold hover:shadow-lg
    border-0
  `,
    royal: `
    bg-royal-800
    text-white font-semibold
    hover:bg-royal-700
    border border-royal-600
  `,
    outline: `
    bg-transparent
    text-gold-400 font-semibold
    border-2 border-gold-400
    hover:bg-gold-400 hover:text-black
  `,
    ghost: `
    bg-transparent
    text-gold-400 font-medium
    hover:bg-gold-400/10
    border-0
  `,
};

const sizeStyles: Record<ButtonSize, string> = {
    sm: "px-4 py-2 text-sm min-h-[40px]",
    md: "px-6 py-3 text-base min-h-[48px]",
    lg: "px-8 py-4 text-lg min-h-[56px]",
};

export function Button({
    variant = "gold",
    size = "md",
    href,
    external = false,
    icon,
    children,
    className = "",
    ...props
}: ButtonProps) {
    const baseStyles = `
    inline-flex items-center justify-center gap-2
    rounded-lg
    transition-all duration-300 ease-out
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    active:scale-[0.98]
    cursor-pointer
  `;

    const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`.replace(/\s+/g, " ").trim();

    if (href) {
        if (external) {
            return (
                <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={combinedStyles}
                >
                    {icon}
                    {children}
                </a>
            );
        }

        return (
            <Link href={href} className={combinedStyles}>
                {icon}
                {children}
            </Link>
        );
    }

    return (
        <button className={combinedStyles} {...props}>
            {icon}
            {children}
        </button>
    );
}
