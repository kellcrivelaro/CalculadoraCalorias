import { FaDumbbell } from "react-icons/fa";
import { CardAtividadeButton } from "./card-content/CardAtividadeButton";
import sedentario from "../assets/sedentario2.json";
import ativo from "../assets/ativo2.json";
import atleta from "../assets/atleta.json";
import trabalhadores from "../assets/worker1.json";
import entregador from "../assets/entregador.json";
import { useState } from "react";

export const nivelAtividade = {
  1: {
    title: "Atividade Leve",
    description:
      "Sentado na maior parte do tempo (ex.: trabalho em escritório)",
    image: sedentario,
  },
  2: {
    title: "Pouco ativo",
    description: "Em pé na maior parte do tempo (ex.: professor)",
    image: entregador,
  },
  3: {
    title: "Ativo",
    description: "Andando na maior parte do tempo (ex.: vendedor)",
    image: ativo,
  },
  4: {
    title: "Muito ativo",
    description: "Trabalho que exige muita atividade (ex.: pedreiro)",
    image: trabalhadores,
  },
};

export function CardAtividade() {
  const [atividadeSelecionada, setAtividadeSelecionada] = useState<string>("");

  return (
    <div
      className="flex flex-col items-center rounded-lg border-[1px] border-slate-400/40 p-4 gap-4 text-xl
    basis-[90%] md:basis-[400px] lg:basis-[944px]"
    >
      <header className="flex items-center justify-center gap-2 text-center">
        <span className="pt-1">
          <FaDumbbell />
        </span>
        <h2 className="text-2xl mr-1">
          Qual é o seu nível de atividade diária?
        </h2>
      </header>
      <div className="flex flex-wrap w-full items-center justify-center gap-4">
        {Object.entries(nivelAtividade).map(([key, value]) => {
          return (
            <CardAtividadeButton
              key={key}
              imagem={value.image}
              type={value.title}
              description={value.description}
              atividadeSelecionada={atividadeSelecionada}
              setAtividadeSelecionada={setAtividadeSelecionada}
            />
          );
        })}
      </div>
    </div>
  );
}
