import "../styles/globals.css";
import type { AppProps } from "next/app";
import { DataContextProvider } from "../contexts/DataContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DataContextProvider>
      <Component {...pageProps} />
    </DataContextProvider>
  );
}

export default MyApp;
