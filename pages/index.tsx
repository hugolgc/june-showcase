import Head from "next/head";

export default function Index() {
  return <>
    <Head>
      <title>June</title>
      <meta name="description" content="Description de June" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.svg" />
    </Head>
    <img src="/showcase.jpg" alt="Page d'accueil" />
  </>
}