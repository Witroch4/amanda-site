import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Dra. Amanda Sousa - Advocacia",
    default: "Dra. Amanda Sousa - Advocacia e Consultoria Jurídica",
  },
  description:
    "Especialista em Direito Previdenciário, BPC/LOAS, Recursos de Concursos e Mentoria para OAB. Atendimento em todo o Brasil.",
  keywords: [
    "advogada",
    "BPC LOAS",
    "direito previdenciário",
    "aposentadoria",
    "recursos OAB",
    "mandado de segurança",
    "mentoria OAB",
    "Fortaleza",
  ],
  authors: [{ name: "Dra. Amanda Sousa" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Dra. Amanda Sousa - Advocacia",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased`}
        style={{
          fontFamily: "var(--font-inter), sans-serif",
        }}
      >
        {children}
      </body>
    </html>
  );
}
