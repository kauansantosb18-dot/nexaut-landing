/** Número do WhatsApp com DDI (só dígitos). Ex.: 5511999999999 */
export const WHATSAPP_NUMBER = "5533999183007";

export const WHATSAPP_MESSAGE =
  "Olá! Quero criar um sistema com a NEXAUT.";

export const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
