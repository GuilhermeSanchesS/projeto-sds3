import { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/main.css';
import Head from 'next/head';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>DSVendas</title>
        <meta name="description" content="Este app foi desnvolvido na Semana Spring React" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App;
