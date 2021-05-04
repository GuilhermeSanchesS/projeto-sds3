import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>DSVendas</title>
        <meta name="description" content="Este app foi desnvolvido na Semana Spring React" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-primary">DSVendas</h1>
    </>
  )
}
