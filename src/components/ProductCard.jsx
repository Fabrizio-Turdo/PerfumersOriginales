
import { buildWhatsAppLink } from "../utils/whatsapp.js";
import { WHATSAPP_BASE_TEXT } from "../data/config.js";

export default function ProductCard({ p, onBuy, loading }){
  const msg = `${WHATSAPP_BASE_TEXT}
Producto: ${p.title}
Precio: $${p.price.toLocaleString('es-AR')}
¿Hacés envíos a __? Mi dirección es __ (o puedo retirar).`;

  return (
    <article className="rounded-3xl border border-pink-200/50 bg-[#2d2952] p-4 shadow-sm hover:shadow-md transition"> 
      <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-[#1a1633] mb-3 flex items-center justify-center">
        {p.imgSrc ? (
          <img src={p.imgSrc} alt={p.imgAlt} className="w-full h-full object-cover" />
        ) : (
          <span className="text-pink-200 font-semibold">Imagen producto</span>
        )}
      </div>
      <h3 className="font-semibold text-lg text-pink-100">{p.title}</h3>
      {p.subtitle && <p className="text-sm text-pink-200/90 mt-1 leading-relaxed">{p.subtitle}</p>}
      <p className="text-pink-300 mt-2">${p.price.toLocaleString('es-AR')}</p>
      <div className="mt-3 grid grid-cols-2 gap-2">
        <button onClick={onBuy} disabled={loading} className="rounded-xl bg-pink-400 text-[#1a1633] py-2 font-semibold hover:opacity-90 disabled:opacity-60">{loading ? 'Procesando…' : 'Comprar'}</button>
        <a href={buildWhatsAppLink(msg)} target="_blank" rel="noopener noreferrer" className="rounded-xl border border-pink-300/50 text-pink-200 py-2 px-3 font-medium text-center hover:bg-pink-400/10">WhatsApp</a>
      </div>
    </article>
  );
}
