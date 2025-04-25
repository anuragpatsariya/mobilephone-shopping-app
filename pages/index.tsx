import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import dynamic from "next/dynamic";
import Head from 'next/head'; 
import MobilePhoneList from '../components/MobilePhoneList';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function Home() {
  return (
    <>
      <Head>
        <title>Mobile Phone Store</title>
      </Head>
      <main style={{ padding: '2rem' }}>
        <MobilePhoneList />
      </main>
    </>
  );
}
