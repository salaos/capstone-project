// root component of the app

import GlobalStyle from "../styles";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>SOCIALLY AWESOME</title>
      </Head>

      <Component {...pageProps} />
    </>
  );
}
