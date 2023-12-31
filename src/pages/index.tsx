import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Lista from "@/components/Lista";
import Card from "@/components/card";
import { useRecoilValue } from "recoil";
import { showCardInformationsAtom } from "@/store/cardInformations";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const showCard = useRecoilValue(showCardInformationsAtom);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        {showCard ? <Card /> : ""}
        <Lista />
      </main>
    </>
  );
}
