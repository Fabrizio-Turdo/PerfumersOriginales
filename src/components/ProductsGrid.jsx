
import ProductCard from "./ProductCard.jsx";
export default function ProductsGrid({ products, onBuy, loading }){
  return (
    <section id="productos" className="mx-auto max-w-6xl px-4 pb-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-pink-200">Productos</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} p={p} onBuy={() => onBuy(p)} loading={loading} />
        ))}
      </div>
    </section>
  );
}
