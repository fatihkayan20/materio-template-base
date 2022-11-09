import "../../styles/globals.css";
import type { AppProps } from "next/app";

const MyApp: ({ Component, pageProps }: AppProps) => JSX.Element = ({
  Component,
  pageProps,
}: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
