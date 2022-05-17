import Head from "next/head";
import Link from "next/link";
import { BsCalculatorFill, BsQuestionCircle } from "react-icons/bs";
import { ImGithub } from "react-icons/im";

export function Header() {
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
      <header>
        <nav className="flex h-8 justify-between items-center max-w-5xl lg:m-auto mx-12">
          <a
            className="flex items-center hover:text-sky-600 pl-0 md:pl-3"
            href="http://github.com/kellcrivelaro"
            target={"_blank"}
            rel={"author noreferrer"}
          >
            <ImGithub size={20} />
          </a>
          <div className="flex gap-4 justify-end items-center pr-0 md:pr-3">
            <Link href="/" rel={"author noreferrer"}>
              <div className="flex items-center gap-1 hover:text-sky-600 transition-colors">
                <span>
                  <BsCalculatorFill size={16} />
                </span>
                <p className="hidden md:block">Calculadora</p>
              </div>
            </Link>
            <Link href="/">
              <div className="flex items-center gap-1 hover:text-sky-600 transition-colors">
                <span>
                  <BsQuestionCircle size={16} />
                </span>
                <p className="hidden md:block">Como o calculo é feito?</p>
              </div>
            </Link>
          </div>
        </nav>
        <div
          id="h-HR"
          className="border-t-[1px] border-slate-400 h-0 mx-6"
        ></div>
      </header>
    </>
  );
}
