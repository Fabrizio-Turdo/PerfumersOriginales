
import { buildWhatsAppLink } from "../utils/whatsapp.js";
import { WHATSAPP_BASE_TEXT } from "../data/config.js";

export default function Hero(){
  const msg = `${WHATSAPP_BASE_TEXT} Quiero coordinar el envío antes de comprar.`;
  return (
    <header className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">✨ El perfume ideal, al alcance de un clic.</h1>
          <p className="mt-4 text-pink-100 md:text-lg">En <strong>Amigos Del Perfume</strong> te acercamos fragancias 100% originales, con pago seguro y envíos a todo el país.</p>
          <div className="mt-6 flex gap-3">
            <a href="#productos" className="inline-flex items-center rounded-2xl px-5 py-3 bg-pink-400 text-[#1a1633] font-semibold shadow-md hover:shadow-lg transition">Ver catálogo</a>
            <a href={buildWhatsAppLink(msg)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-2xl px-5 py-3 border border-pink-300 text-pink-200 font-semibold hover:bg-pink-400/10 transition">Coordinar envío por WhatsApp</a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[16/10] w-full rounded-3xl shadow-xl overflow-hidden bg-[#2d2952] flex items-center justify-center border border-pink-300/30">
            <img src="/encabexado.jpeg" alt="Logo Amigos Del Perfume" className="w-full h-full object-cover"/>
          </div>
        </div>
      </div>
    </header>
  );
}
