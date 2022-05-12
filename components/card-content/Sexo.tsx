import Lottie from "lottie-react";
import Man from "../../assets/man-avatar.json";
import Woman from "../../assets/woman-avatar.json";
import { useState, useRef, useEffect } from "react";

export function Sexo() {
  const [genero, setGenero] = useState("");
  const manLottie = useRef(null);
  const womanLottie = useRef(null);

  return (
    <div className="flex gap-8">
      <button
        className={`flex flex-col items-center border-[1px] transition-colors duration-300
        ease-linear rounded-lg p-4 w-28 ${
          genero === "m"
            ? "bg-slate-200 border-slate-400"
            : "bg-slate-200/10 border-slate-200 hover:border-slate-300 hover:bg-slate-200/50"
        }`}
        onClick={() => {
          setGenero("m");
          manLottie.current.stop();
          manLottie.current.play();
        }}
      >
        <Lottie
          animationData={Man}
          lottieRef={manLottie}
          autoPlay={false}
          loop={false}
        />
        Homem
      </button>
      <button
        className={`flex flex-col items-center border-[1px] transition-colors duration-300
        ease-linear rounded-lg p-4 w-28 ${
          genero === "f"
            ? "bg-slate-200 border-slate-400"
            : "bg-slate-200/10 border-slate-200 hover:border-slate-300 hover:bg-slate-200/50"
        }`}
        onClick={() => {
          setGenero("f");
          womanLottie.current.stop();
          womanLottie.current.play();
        }}
      >
        <Lottie animationData={Woman} lottieRef={womanLottie} />
        Mulher
      </button>
    </div>
  );
}
