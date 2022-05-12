import { useState } from "react";

export function Input() {
  const [haveFocus, setHaveFocus] = useState(false);

  return (
    <div className="flex flex-col relative">
      <input
        type={"text"}
        className="text-lg m-1 w-16 text-bold bg-transparent outline-none text-center"
        onFocus={() => {
          setHaveFocus(true);
        }}
        onBlur={() => {
          setHaveFocus(false);
        }}
      />
      <div className={`h-[2px] bg-slate-400`}></div>
      <div
        className={`absolute top-[36px] z-10 h-[2px] w-full bg-slate-400 transition-transform 
        ease-linear duration-300 ${
          haveFocus ? "bg-red-400 scale-x-100" : "scale-x-0 "
        }`}
      ></div>
    </div>
  );
}
