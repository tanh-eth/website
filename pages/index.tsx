import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>tanh.eth</title>
      </Head>
      <header>
        <div className="flex gap-8 items-center">
          <Image
            src="/pfp.jpg"
            width={80}
            height={80}
            alt=""
            className="rounded-full"
          ></Image>
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold">tanh.eth</h1>
            <p>Exploring technology, humanity and cryptography</p>
          </div>
        </div>
      </header>
    </>
  );
}
