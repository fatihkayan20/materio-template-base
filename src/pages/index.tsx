import type { NextPage } from "next";
import Head from "next/head";
import { MobileAppBar } from "../components/materio/layouts/components/vertical/appBar/MobileAppBar";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MobileAppBar />
    </div>
  );
};

export default Home;
