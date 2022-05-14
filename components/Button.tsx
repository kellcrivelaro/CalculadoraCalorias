export function Button() {
  return (
    <button className="relative text-3xl px-10 py-2 rounded-3xl border-2 hover:text-sky-600 border-slate-800 hover:shadow-[0px_0px_30px] hover:border-sky-600 hover:shadow-sky-500 transition-all duration-500 tracking-wide group mt-3 mb-2 font-semibold">
      <i className="absolute top-[-2px] left-[75%] bg-bgcolor h-[2px] w-6 translate-x-[-50%] skew-x-[325deg] transition-all duration-500 group-hover:left-[25%]"></i>
      <i className="absolute bottom-[-2px] left-[25%] bg-bgcolor h-[2px] w-6 translate-x-[-50%] skew-x-[325deg] transition-all duration-500 group-hover:left-[75%]"></i>
      Calcular
    </button>
  );
}
