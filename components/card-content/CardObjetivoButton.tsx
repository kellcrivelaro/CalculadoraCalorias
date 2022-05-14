import { useEffect, useRef } from "react";
import Lottie from "lottie-react";

interface Props {
  imagem: any;
  type: string;
  objetivoSelecionado: string;
  setObjetivoSelecionado: (nivel: string) => void;
}

export function CardObjetivoButton({
  imagem,
  type,
  objetivoSelecionado,
  setObjetivoSelecionado,
}: Props) {
  const lottieRef = useRef(null);

  useEffect(() => {
    lottieRef.current.stop();
  }, []);

  return (
    <button
      className={`flex flex-col flex-wrap items-center border-[1px] transition-colors duration-300 grow
        ease-linear rounded-lg p-2 basis-[100%] lg:basis-[30%] ${
          objetivoSelecionado === type
            ? "bg-slate-200 border-slate-400"
            : "bg-slate-200/10 border-slate-200 hover:border-slate-300 hover:bg-slate-200/50"
        }`}
      onClick={() => {
        setObjetivoSelecionado(type);
        lottieRef.current.stop();
        lottieRef.current.play();
      }}
    >
      <div className="flex flex-col items-center gap-2">
        <div className="w-40">
          <Lottie
            animationData={imagem}
            lottieRef={lottieRef}
            autoPlay={false}
            loop={false}
          />
        </div>
        <h2 className="text-xl font-bold">{type}</h2>
      </div>
    </button>
  );
}
