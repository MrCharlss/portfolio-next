import Head from "next/head";
import Hero from "../components/Hero";
import Nav from "../components/Nav/Nav";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className="container mx-auto">
        <Hero />
      </main>
    </>
  );
}
