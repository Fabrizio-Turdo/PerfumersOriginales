
export default function Toast({ message }){
  if(!message) return null;
  return (
    <div className="fixed bottom-4 inset-x-0 flex justify-center z-40">
      <div className="px-4 py-3 bg-pink-400 text-[#1a1633] rounded-xl shadow-lg font-semibold">{message}</div>
    </div>
  );
}
