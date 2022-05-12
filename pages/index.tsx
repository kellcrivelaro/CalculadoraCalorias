import type { NextPage } from "next";
import Head from "next/head";
import { Calculator, Question } from "phosphor-react";
import { Card } from "../components/Card";
import { Sexo } from "../components/card-content/Sexo";
import { Altura } from "../components/card-content/Altura";
import { Idade } from "../components/card-content/Idade";
import { Peso } from "../components/card-content/Peso";

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
                <Calculator size={16} weight={"bold"} />
              </span>
              Calculadora
            </a>
            <a className="flex items-center gap-1">
              <span>
                <Question size={16} weight={"bold"} />
              </span>
              Como o calculo é feito?
            </a>
          </nav>
          <div
            id="HR"
            className="border-t-[1px] border-slate-400 h-0 mx-3"
          ></div>
        </header>

        <main className="flex flex-col gap-3 justify-center items-center mt-6">
          <h1 className="text-5xl font-semibold text-slate-800">
            Calculadora de Calorias
          </h1>
          <p className="text-xl">
            Para um cálculo preciso, necessitamos de algumas informações básicas
            sobre você.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-6 w-full">
            <Card title={"Informe seu gênero"} Content={Sexo} />
            <Card title={"Qual é o seu peso?"} Content={Peso} />
            <Card title={"Qual é o sua altura?"} Content={Altura} />
            <Card title={"Qual é o sua idade?"} Content={Idade} />
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
