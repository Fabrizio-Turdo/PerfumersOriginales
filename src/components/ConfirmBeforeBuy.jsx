
import { buildWhatsAppLink } from "../utils/whatsapp.js";
import { WHATSAPP_BASE_TEXT } from "../data/config.js";

export default function ConfirmBeforeBuy({ open, product, onClose, onConfirm, onWhatsapp }) {
  if (!open) return null;
  const msg = `${WHATSAPP_BASE_TEXT}
Producto: ${product?.title ?? ""}
Precio: $${product ? product.price.toLocaleString('es-AR') : ""}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative w-full max-w-md mx-4 bg-[#2d2952] text-white rounded-2xl border border-pink-300/30 shadow-xl p-6">
        <h3 className="text-xl font-semibold mb-2">¿Coordinaste el envío?</h3>
        <p className="text-pink-100 mb-4">
          Recomendamos coordinar el envío por WhatsApp antes de pagar para evitar problemas con la entrega.
        </p>
        <div className="flex flex-col gap-2">
          <a
            href={buildWhatsAppLink(msg)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onWhatsapp}
            className="rounded-xl border border-pink-300/50 text-pink-200 py-2 px-3 font-medium hover:bg-pink-400/10 text-center"
          >
            Coordinar por WhatsApp
          </a>
          <button onClick={onConfirm} className="rounded-xl bg-pink-400 text-[#1a1633] px-5 py-2 font-semibold hover:opacity-90">
            Sí, ya coordiné. Continuar con la compra
          </button>
          <button onClick={onClose} className="rounded-xl border border-pink-300/40 text-pink-200 px-4 py-2 hover:bg-pink-400/10">
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}
