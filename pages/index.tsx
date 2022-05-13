import type { NextPage } from "next";
import Head from "next/head";
import { BsCalculatorFill, BsQuestionCircle } from "react-icons/bs";

import { Card } from "../components/Card";
import { Sexo } from "../components/card-content/Sexo";
import { Altura } from "../components/card-content/Altura";
import { Idade } from "../components/card-content/Idade";
import { Peso } from "../components/card-content/Peso";
import { CardAtividade } from "../components/CardAtividade";
import { CardObjetivo } from "../components/CardObjetivo";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Calculadora de Calorias Diárias</title>
        <meta
          name="description"
          content="Calculadora das calorias basais e do consumo ideal diárias, baseado em seu objetivo pessoal."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-w-6xl absolute inset-0 m-auto">
        <header>
          <nav className="flex gap-4 h-8 justify-end items-center mr-6">
            <a className="flex items-center gap-1">
              <span>
                <BsCalculatorFill size={16} />
              </span>
              Calculadora
            </a>
            <a className="flex items-center gap-1">
              <span>
                <BsQuestionCircle size={16} />
              </span>
              Como o calculo é feito?
            </a>
          </nav>
          <div
            id="HR"
            className="border-t-[1px] border-slate-400 h-0 mx-3"
          ></div>
        </header>

        <main className="flex flex-col gap-3 justify-center items-center mt-6 text-slate-800">
          <h1 className="text-5xl font-semibold">Calculadora de Calorias</h1>
          <p className="text-xl">
            Para um cálculo preciso, necessitamos de algumas informações básicas
            sobre você.
          </p>
          <div
            className="flex flex-wrap justify-center gap-4 mt-6 px-4 w-[calc(100%-40px)] rounded-xl border-[1px] border-slate-400/60 
          max-w-5xl py-8 shadow-lg shadow-slate-400/50"
          >
            <Card Content={Sexo} />
            <Card Content={Peso} />
            <Card Content={Altura} />
            <Card Content={Idade} />
            <CardAtividade />
            <CardObjetivo />
          </div>
        </main>

        {/* <footer>
          <a
            href="http://github.com/kellcrivelaro"
            target="_blank"
            rel="author noreferrer"
          >
            Feito por Kell.
          </a>
        </footer> */}
      </div>
    </>
  );
};

export default Home;
