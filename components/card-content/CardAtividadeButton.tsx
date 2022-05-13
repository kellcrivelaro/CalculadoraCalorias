import { useRef, useState } from "react";
import Lottie from "lottie-react";
// import Lottie from "react-lottie";

interface Props {
  imagem: any;
  key: string;
  atividadeSelecionada: string;
  setAtividadeSelecionada: (nivel: string) => void;
}

export function CardAtividadeButton({
  imagem,
  key,
  atividadeSelecionada,
  setAtividadeSelecionada,
}: Props) {
  const lottieRef = useRef(null);

  const options = {
    loop: false,
    autoplay: false,
    animationData: imagem,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <button
      className={`flex flex-col flex-wrap items-center border-[1px] transition-colors duration-300 grow
        ease-linear rounded-lg p-2 ${
          atividadeSelecionada === key
            ? "bg-slate-200 border-slate-400"
            : "bg-slate-200/10 border-slate-200 hover:border-slate-300 hover:bg-slate-200/50"
        }`}
      onClick={() => {
        setAtividadeSelecionada(key);
      }}
    >
      <div className="w-36">
        <Lottie
          animationData={imagem}
          lottieRef={lottieRef}
          autoPlay={false}
          loop={false}
        />
        {/* <Lottie options={options} speed={2} /> */}
      </div>
    </button>
  );
}
