
import { WHATSAPP_NUMBER } from "../data/config.js";
export function buildWhatsAppLink(message = "") {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  const text = message ? `?text=${encodeURIComponent(message)}` : "";
  return `${base}${text}`;
}
