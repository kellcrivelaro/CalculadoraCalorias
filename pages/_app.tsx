import "../styles/globals.css";
import type { AppProps } from "next/app";
import { DataContextProvider } from "../contexts/DataContext";
import { DefaultSeo } from "next-seo";
import { SEO } from "../next-seo-config";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <DataContextProvider>
        <Component {...pageProps} />
      </DataContextProvider>
    </>
  );
}

export default MyApp;
