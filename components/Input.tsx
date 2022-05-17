import { useState } from "react";

interface Props {
  placeholder: string | null;
  set: (newValue: number) => void;
}

export function Input({ placeholder, set }: Props) {
  const [haveFocus, setHaveFocus] = useState(false);
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="flex flex-col relative">
      <input
        type={"number"}
        placeholder={placeholder ? placeholder : ""}
        className="text-3xl m-1 pl-4 w-28 bg-transparent outline-none text-center font-semibold placeholder-slate-300"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
          set(Number(e.target.value));
        }}
        onFocus={() => {
          setHaveFocus(true);
        }}
        onBlur={() => {
          setHaveFocus(false);
        }}
      />
      <div
        className={`absolute top-[42px] w-full h-[2px] bg-slate-500/90`}
      ></div>
      <div
        className={`absolute top-[42px] w-full z-10 h-[2px] bg-sky-500 transition-transform 
        ease-linear duration-[400ms] ${
          haveFocus ? "scale-x-100" : "scale-x-0"
        }`}
      ></div>
    </div>
  );
}
