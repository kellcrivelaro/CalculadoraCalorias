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
import { useRouter } from "next/router";
import Script from "next/script";
import { useRef } from "react";

const Home: NextPage = () => {
  const router = useRouter();
  const ref = useRef(null);

  return (
    <>
      <Header ref={ref} />

      <main className="flex flex-col justify-center items-center mt-2 text-slate-800 text-center">
        <div className="flex items-center justify-center grow w-full max-w-5xl mx-auto rounded-xl p-2">
          <Script
            async
            id="ad-sense-1"
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7819905148018536"
            crossOrigin="anonymous"
          ></Script>
          <ins
            className="adsbygoogle block text-center"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-7819905148018536"
            data-ad-slot="9732755258"
          ></ins>
          {/* <Script id="ad-sense-index-1">
            (adsbygoogle = window.adsbygoogle || []).push({});
          </Script> */}
        </div>
        <h1 className="text-5xl font-semibold">Calculadora de Calorias</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            router.push("/resultados");
          }}
          action="/resultados"
          className="flex flex-wrap justify-center gap-4 mt-2 px-4 w-[calc(100%-40px)] rounded-xl border-[1px] border-slate-400/60 
            max-w-5xl py-6 mb-4 shadow-lg shadow-slate-400/50"
        >
          <p className="text-xl w-full px-2">
            Informe seus dados pessoais para descobrir a quantidade ideal de
            calorias di??rias!
          </p>
          <Card Content={Sexo} />
          <Card Content={Peso} />
          <Card Content={Altura} />
          <Card Content={Idade} />
          <CardAtividade />
          <CardObjetivo />

          <button type="submit">
            <Button>Calcular</Button>
          </button>
        </form>
      </main>
      <div
        className="flex items-center justify-center grow w-full max-w-5xl mx-auto rounded-xl p-2"
        ref={ref}
      >
        <Script
          async
          id="ad-sense-2"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7819905148018536"
          crossOrigin="anonymous"
        ></Script>
        <ins
          className="adsbygoogle block text-center"
          data-ad-layout="in-article"
          data-ad-format="fluid"
          data-ad-client="ca-pub-7819905148018536"
          data-ad-slot="9732755258"
        ></ins>
        {/* <Script id="ad-sense-index-2">
          (adsbygoogle = window.adsbygoogle || []).push({});
        </Script> */}
      </div>
      <section className="flex flex-col justify-center items-center mt-2 text-slate-800 text-center">
        <h2 className="text-4xl font-semibold">Como o calculo ?? feito?</h2>
        <div
          className="flex flex-wrap flex-col items-center justify-center gap-4 mt-4 lg:px-16 px-8 w-[calc(100%-40px)] rounded-xl border-[1px] border-slate-400/60 
            max-w-5xl py-4 mb-4 shadow-lg shadow-slate-400/50 text-lg"
        >
          <h3 className="text-3xl pt-4 font-semibold">Metabolismo Basal</h3>
          <p className="text-justify indent-8">
            Saber quantas calorias o corpo gasta para manter se manter, ?? o
            primeiro passo para adequar a alimenta????o ao gasto energ??tico
            di??rio.
            <strong> Metabolismo basal</strong> ?? a quantidade de energia m??nima
            que o corpo necessita em repouso e em estado de jejum. Indica a
            quantidade de energia necess??ria para manter os processos vitais -
            respira????o, metabolismo celular, circula????o, atividade glandular,
            manuten????o da temperatura corporal, etc. Para isso usamos a equa????o
            ou f??rmula de Harris Benedict, baseado em par??metros
            personaliz??veis, como peso, altura, idade e sexo.
          </p>
          <div
            className="flex flex-col items-center justify-center rounded-lg border-[1px] border-slate-400/40 p-6 gap-2 text-xl
            lg:w-[80%] mt-4"
          >
            <h3 className="font-bold mb-1">{"HARRIS & BENEDICT (1919):"}</h3>
            <div
              id="h-HR"
              className="border-t-[1px] border-slate-400/40 h-0 w-full"
            ></div>
            <p>
              <strong>Homens</strong> = 66 + (13,7 x peso kg) + (5 x altura cm)
              ??? (6,8 x idade anos)
              <br />
              <strong>Mulheres</strong> = 655 + (9,6 x peso kg) + (1,8 x altura
              cm) ??? (4,7 x idade anos)
            </p>
          </div>
          <h3 className="text-3xl pt-4 font-semibold">
            Necessidade Energ??tica Di??ria
          </h3>
          <p className="text-justify indent-8">
            Segundo a Organiza????o Mundial de Sa??de, necessidade energ??tica ??
            definida como o n??vel de energia ingerida que seria suficiente para
            compensar o gasto energ??tico segundo: as caracter??sticas f??sicas do
            indiv??duo (altura, peso, sexo, idade, composi????o corporal), o
            momento fisiol??gico do organismo (gravidez e lacta????o) e o grau de
            atividade f??sica (trabalho mec??nico). A manuten????o de um balan??o
            energ??tico adequado depende de um equil??brio entre a ingest??o
            energ??tica e o gasto energ??tico; caso n??o haja tal equil??brio, podem
            ocorrer estados de massa corporal excessiva ou deficiente. A energia
            para o ser humano ?? necess??ria para: suprir o metabolismo basal em
            cada momento fisiol??gico, suprir o ETA (efeito termog??nico dos
            alimentos) e o gasto com atividade f??sica.
          </p>
          <h4 className="text-justify indent-8 font-semibold text-2xl">
            N??veis de atividade:
          </h4>
          <ul className="mb-8 text-justify indent-8">
            <li>
              ??? LEVE: atividade geralmente realizada na posi????o sentada, como ??
              o caso de: professores, profissionais liberais, empregados do
              com??rcio, banc??rios, estudantes, etc.
              <br />
            </li>
            <li>
              ??? MODERADA: realizada normalmente de p??, em locais fechados. Nesse
              grupo incluem-se balconistas de lojas, trabalhadores em ind??strias
              leves, empregados de restaurantes, etc.
              <br />
            </li>
            <li>
              ??? INTENSA OU PESADA: aquela em que h?? um grande disp??ndio de
              energia e normalmente ?? realizada ao ar livre como ?? o caso de:
              mineiros, bailarinos, metal??rgicos, agricultores n??o mecanizados,
              alpinistas, atletas de for??a, juiz de futebol, t??cnico ou
              preparador f??sico, jardineiros, carpinteiros, marceneiros,
              ambulantes, etc.
              <br />
            </li>
            <li>
              ??? MUITO INTENSA OU MUITO PESADA: aquela em que h?? um disp??ndio
              exacerbado de energia, as vezes sob intemp??ries (condi????es do
              tempo) ou em ambientes muito quentes, como ?? o caso de:
              lenhadores, ajudante de pedreiro, trabalhadores da constru????o,
              ferreiro, maquinistas, atletas de resist??ncia como jogadores de
              futebol, t??nis, triatletas e outros.
              <br />
            </li>
          </ul>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
