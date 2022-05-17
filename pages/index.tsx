import type { NextPage } from "next";

import { Card } from "../components/Card";
import { Sexo } from "../components/card-content/Sexo";
import { Altura } from "../components/card-content/Altura";
import { Idade } from "../components/card-content/Idade";
import { Peso } from "../components/card-content/Peso";
import { CardAtividade } from "../components/CardAtividade";
import { CardObjetivo } from "../components/CardObjetivo";
import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Header />

      <main className="flex flex-col justify-center items-center mt-2 text-slate-800 text-center">
        <h1 className="text-5xl font-semibold">Calculadora de Calorias</h1>
        <div
          className="flex flex-wrap justify-center gap-4 mt-6 px-4 w-[calc(100%-40px)] rounded-xl border-[1px] border-slate-400/60 
            max-w-5xl py-4 mb-4 shadow-lg shadow-slate-400/50"
        >
          <p className="text-xl w-full px-2">
            Informe seus dados pessoais para descobrir a quantidade ideal de
            calorias diárias!
          </p>
          <Card Content={Sexo} />
          <Card Content={Peso} />
          <Card Content={Altura} />
          <Card Content={Idade} />
          <CardAtividade />
          <CardObjetivo />

          <Link href="/resultados" passHref>
            <a>
              <Button>Calcular</Button>
            </a>
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Home;
