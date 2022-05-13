import { FaDumbbell } from "react-icons/fa";
import { CardAtividadeButton } from "./card-content/CardAtividadeButton";
import sedentario from "../assets/sedentario2.json";
import ativo from "../assets/ativo2.json";
import atleta from "../assets/atleta.json";
import trabalhadores from "../assets/worker1.json";
import entregador from "../assets/entregador.json";
import { useState } from "react";

export const nivelAtividade = [
  "sedentario",
  "pouco ativo",
  "ativo",
  "muito ativo",
];

export function CardAtividade() {
  const [atividadeSelecionada, setAtividadeSelecionada] = useState<string>("");

  return (
    <div
      className="flex flex-col items-center justify-center rounded-lg border-[1px] border-slate-400/40 p-4 gap-4 text-xl
    basis-[90%] md:basis-[400px] lg:basis-[944px]"
    >
      <header className="flex items-center gap-2">
        <span className="pt-1">
          <FaDumbbell />
        </span>
        <h2 className="text-2xl mr-1">
          Qual é o seu nível de atividade diária?
        </h2>
      </header>
      <div className="flex w-full items-center justify-center gap-4">
        <CardAtividadeButton
          imagem={sedentario}
          key={nivelAtividade[0]}
          atividadeSelecionada={atividadeSelecionada}
          setAtividadeSelecionada={setAtividadeSelecionada}
        />
        <CardAtividadeButton
          imagem={entregador}
          key={nivelAtividade[1]}
          atividadeSelecionada={atividadeSelecionada}
          setAtividadeSelecionada={setAtividadeSelecionada}
        />
        <CardAtividadeButton
          imagem={ativo}
          key={nivelAtividade[2]}
          atividadeSelecionada={atividadeSelecionada}
          setAtividadeSelecionada={setAtividadeSelecionada}
        />
        <CardAtividadeButton
          imagem={trabalhadores}
          key={nivelAtividade[3]}
          atividadeSelecionada={atividadeSelecionada}
          setAtividadeSelecionada={setAtividadeSelecionada}
        />
      </div>
    </div>
  );
}
