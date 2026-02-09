/**
 * WhatsApp Helper
 * Gera links dinâmicos com mensagem automática baseada no contexto
 */

type WhatsAppContext = "prev" | "oab";

const WHATSAPP_MESSAGES: Record<WhatsAppContext, string> = {
    prev: "Olá, vim pelo site e gostaria de saber mais sobre meus direitos previdenciários (BPC/LOAS, aposentadoria).",
    oab: "Olá, vim pelo site e tenho interesse na Mentoria Fênix / Recursos de Concurso.",
};

export function getWhatsAppLink(context: WhatsAppContext): string {
    const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "558592091821";
    const message = encodeURIComponent(WHATSAPP_MESSAGES[context]);

    return `https://wa.me/${phoneNumber}?text=${message}`;
}

export function getWhatsAppNumber(): string {
    return process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "558592091821";
}
