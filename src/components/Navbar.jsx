
export default function Navbar(){
  return (
    <nav className="sticky top-0 z-30 backdrop-blur bg-[#1a1633]/80 border-b border-pink-300/30">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/encabexado.jpeg" alt="Logo Amigos Del Perfume" className="h-10 w-auto rounded"/>
          <div className="font-bold tracking-tight text-xl text-pink-200">Amigos Del Perfume</div>
        </div>
        <div className="text-sm text-pink-100">Envíos a todo el país</div>
      </div>
    </nav>
  );
}
