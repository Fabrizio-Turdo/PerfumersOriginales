
export default function HowItWorks(){
  return (
    <section id="como-funciona" className="bg-[#1a1633] border-t border-pink-300/20">
      <div className="mx-auto max-w-6xl px-4 py-12 grid md:grid-cols-3 gap-6">
        <Step n="1" title="Elegí tu fragancia favorita">Explorá nuestro catálogo de perfumes originales.</Step>
        <Step n="2" title="Coordina envío por WhatsApp (opcional)">Te guiamos antes de pagar, si preferís.</Step>
        <Step n="3" title="Pagá seguro con Mercado Pago">Compra protegida y seguimiento.</Step>
      </div>
    </section>
  );
}

function Step({ n, title, children }){
  return (
    <div className="rounded-3xl border border-pink-300/30 bg-[#2d2952] p-6 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="h-10 w-10 rounded-2xl bg-pink-400 text-[#1a1633] flex items-center justify-center font-bold">{n}</div>
        <div>
          <h3 className="font-semibold text-lg text-pink-100">{title}</h3>
          <p className="text-pink-200 mt-1 leading-relaxed">{children}</p>
        </div>
      </div>
    </div>
  );
}
