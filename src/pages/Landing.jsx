
import { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import ProductsGrid from "../components/ProductsGrid.jsx";
import TrustBlock from "../components/TrustBlock.jsx";
import HowItWorks from "../components/HowItWorks.jsx";
import Toast from "../components/Toast.jsx";
import ConfirmBeforeBuy from "../components/ConfirmBeforeBuy.jsx";
import FloatingWhatsApp from "../components/FloatingWhatsApp.jsx";
import { products } from "../data/products.js";
import { createCheckout } from "../api/checkout.js";

export default function Landing(){
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState("");
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [confirmProduct, setConfirmProduct] = useState(null);

  const openConfirm = (p) => { setConfirmProduct(p); setIsConfirmOpen(true); };

  const continueCheckout = async () => {
    setIsConfirmOpen(false);
    try {
      setLoading(true);
      const payload = {
        items: [{ ...confirmProduct, unit_price: confirmProduct.price, quantity: 1 }],
      };
      const { init_point } = await createCheckout(payload);
      setToast("Redirigiendo a Mercado Pago (mock)...");
      setTimeout(()=>{ window.open(init_point, "_blank"); setToast(""); }, 800);
    } catch {
      setToast("No se pudo iniciar el pago");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1633] to-[#2d2952] text-white">
      <Navbar />
      <Hero />
      <ProductsGrid products={products} onBuy={openConfirm} loading={loading} />
      <ConfirmBeforeBuy
        open={isConfirmOpen}
        product={confirmProduct}
        onClose={() => setIsConfirmOpen(false)}
        onConfirm={continueCheckout}
        onWhatsapp={() => {}}
      />
      <TrustBlock />
      <HowItWorks />
      <Toast message={toast} />
      <FloatingWhatsApp />
      <footer className="py-10 text-center text-sm text-pink-200">“Amigos Del Perfume – Porque elegir una fragancia también es elegir confianza.”</footer>
    </div>
  );
}
