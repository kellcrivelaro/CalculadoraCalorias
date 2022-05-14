import { useState } from "react";

interface Props {
  placeholder: string | null;
}

export function Input({ placeholder }: Props) {
  const [haveFocus, setHaveFocus] = useState(false);

  return (
    <div className="flex flex-col relative">
      <input
        type={"text"}
        placeholder={placeholder ? placeholder : ""}
        className="text-2xl m-1 w-24 text-bold bg-transparent outline-none text-center"
        onFocus={() => {
          setHaveFocus(true);
        }}
        onBlur={() => {
          setHaveFocus(false);
        }}
      />
      <div
        className={`absolute top-[36px] w-full h-[2px] bg-slate-500/90`}
      ></div>
      <div
        className={`absolute top-[36px] w-full z-10 h-[2px] bg-sky-500 transition-transform 
        ease-linear duration-[400ms] ${
          haveFocus ? "scale-x-100" : "scale-x-0"
        }`}
      ></div>
    </div>
  );
}
