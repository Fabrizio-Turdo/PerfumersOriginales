
import { buildWhatsAppLink } from "../utils/whatsapp.js";
import { WHATSAPP_BASE_TEXT } from "../data/config.js";

export default function FloatingWhatsApp(){
  const msg = `${WHATSAPP_BASE_TEXT} Me gustaría coordinar el envío antes de comprar.`;
  return (
    <a href={buildWhatsAppLink(msg)} target="_blank" rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 rounded-full p-4 bg-green-500 text-white shadow-lg hover:scale-105 transition"
      aria-label="WhatsApp" title="Coordinar por WhatsApp">
      🟢 WhatsApp
    </a>
  );
}
